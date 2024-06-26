/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Rating } from "../../../components";
// eslint-disable-next-line react/prop-types
export const ProductPage = ({ product }) => {
  return (
    <>
      <section className=" h-auto w-4/5 lg:w-[300px]  rounded-xl">
        <article className=" w-full  h-[200px]">
          <img
            // eslint-disable-next-line react/prop-types
            src={product?.image_local}
            alt="Book-Image"
            className="w-full h-full dark:text-gray-200 rounded-t-xl"
          />
        </article>
        <article className="h-auto py-1 px-2">
          <p className="text-lg font-bold italic py-3 text-blue-900 dark:text-gray-200">
            {product?.name}
          </p>
          <p className="text-sm italic text-blue-900 dark:text-gray-200">
            {product?.long_description}
          </p>
          <article className="flex flex-row gap-2"></article>
          <article className="flex justify-end items-center py-1">
            <p className="font-bold italic text-xl text-blue-900 dark;text-gray-200 dark:text-gray-200 px-5">
              {product?.price}$
            </p>
          </article>
          <article className="flex flex-row justify-between items-center py-3">
            {product?.best_seller && (
              <p className=" dark:bg-gray-200  font-bold py-2 px-5 rounded-md dark:text-blue-900 bg-blue-900 text-gray-200">
                Best Seller
              </p>
            )}
            {!product?.best_seller && (
              <p className=" dark:bg-gray-200  font-bold py-2 px-5 rounded-md dark:text-blue-900 bg-blue-900 text-gray-200">
                Seller
              </p>
            )}
            <article className="flex flex-row lg:gap-2 gap-[2px] ">
              <Rating rating={product?.rating} />
            </article>
          </article>
        </article>
      </section>
    </>
  );
};
