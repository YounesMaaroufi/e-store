"use client";

import { Product } from "@/type";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePreviewModal";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const previewmodal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    // this propagation is gonna override the fact that the main div has an onClick
    event.stopPropagation();
    previewmodal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    // this propagation is gonna override the fact that the main div has an onClick
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
