import GetCategory from "@/actions/get-category";
import GetColors from "@/actions/get-colors";
import GetProducts from "@/actions/get-products";
import GetSizes from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";
import Filter from "./components/Filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/MobileFilters";

interface CategoryIdPageProps {
  params: {
    categoryId: string;
  };

  // the filters
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryIdPage: React.FC<CategoryIdPageProps> = async ({
  params,
  searchParams,
}) => {
  // feltring the data the will get from getproducts
  const products = await GetProducts({
    categoryId: params.categoryId,
    // we're gonna fetch the ids from the colors and sizes name
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  // fetching the data
  const category = await GetCategory(params.categoryId);
  const sizes = await GetSizes();
  const colors = await GetColors();

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Add Movile Filters */}
            <MobileFilters colors={colors} sizes={sizes} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryIdPage;
