import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/type";
import { cn } from "@/lib/utils";

interface GallertyTapProps {
  image: ImageType;
}

const GalleryTab = ({ image }: GallertyTapProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt="saad wlahta m9wd m3a lbnat"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
