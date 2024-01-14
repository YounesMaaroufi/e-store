import { Billboard } from "@/type";

interface BillboardProps {
  data: Billboard | null;
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[1.4/1] overflow-hidden bg-cover bg-center h-[400px] w-full"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-xl max-w-xs text-center text-white">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
