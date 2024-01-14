"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();

  const items = useCart((state) => state.items); // this is an arary
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    // this is a param like localhost:3001/cart?payment=success
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment has been canceld.");
    }
  }, [searchParams, removeAll]);

  // callculating all the prices from the useCart().items
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    try {
      // now we're doing a post request to the checkout(stripe) and then we're gonna get a url from stripe
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );
      // redirecting the client with the url that we will be given
      window.location = response.data.url;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order toal</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
