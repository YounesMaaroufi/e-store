import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const GetCategory = async (id: string): Promise<Category> => {
  // fetching a unique category
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default GetCategory;
