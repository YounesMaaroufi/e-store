"use client";

import qs from "query-string";

import { Color, Size } from "@/type";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // the selected value (e.g the selected filter)
  const selectedValue = searchParams.get(valueKey);
  // this is the onClick
  // we're gonna pass an id
  // in the first time it means that we want to add a filter
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    // this is how to patch an object
    // we are gonna add the valuekey (e.g name) adding the id like
    // localhost:3001/category?name=[id]
    const query = {
      ...current,
      [valueKey]: id,
    };
    // if the id is already in the array it means that..
    // the user wants to remove that filter
    if (current[valueKey] === id) {
      // remove that filter
      query[valueKey] = null;
    }
    // now we're gonna stringify it and push it
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="my-4">
        <div className="flex flex-wrap gap-2">
          {data.map((filter) => (
            <div className="flex items-center" key={filter.id}>
              <Button
                onClick={() => onClick(filter.id)}
                className={cn(
                  "hover:text-white rounded-md text-sm border border-gray-300 text-gray-800 bg-white",
                  selectedValue === filter.id && "bg-black text-white"
                )}
              >
                {filter.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
