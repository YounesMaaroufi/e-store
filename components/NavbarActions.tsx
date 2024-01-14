"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();
  // learn from this useCart;
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
        variant="default"
      >
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
