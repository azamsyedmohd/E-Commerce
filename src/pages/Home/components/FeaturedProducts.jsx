import { useEffect, useState } from "react";
import { ProductPage } from "./ProductPage";
import { featuredProducts } from "../../../services";
export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function productsList() {
      try {
        const data = await featuredProducts();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    productsList();
  }, []);
  return (
    <>
      <section className="w-full md:w-4/5 mx-auto p-4 lg:p-0">
        <h1 className="lg:text-3xl italic text-blue-900 font-bold text-center lg:py-16 text-2xl py-7 dark:text-gray-200">
          Featured E-Books!
        </h1>
        <article className="flex flex-col lg:flex-row gap-10 flex-wrap justify-center items-center">
          {products.length > 0 &&
            products?.map((product) => (
              <>
                <ProductPage product={product} />
              </>
            ))}
        </article>
      </section>
    </>
  );
};
