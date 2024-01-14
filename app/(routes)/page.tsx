import Container from "@/components/ui/container";
import Billboard from "@/components/Billboard";
import React from "react";
import GetBillboards from "@/actions/get-billboards";
import GetProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const Home = async () => {
  // it takes the billboardId as a parameter
  const products = await GetProducts({ isFeatured: true });
  const billboards = await GetBillboards("6519598231872bc8491a282f");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default Home;
