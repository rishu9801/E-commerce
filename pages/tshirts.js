import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/Product";
import connectDb from "../middleware/mongoose";

const Tshirt = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products &&
              Object.keys(products).map((product) => {
                return (
                  <Link
                    passHref={true}
                    href={"/products/" + products[product].slug}
                    key={products[product]._id}
                  >
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border shadow-lg m-3 rounded cursor-pointer">
                      <a className="block relative h-72 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={products[product].img}
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          CATEGORY
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {products[product].title}
                        </h2>
                        <p className="mt-1">{products[product].price}</p>
                        {products[product].size.map((i, index) => {
                          return (
                            <p
                              className="inline p-2 border rounded bg-red-200"
                              key={index}
                            >
                              {i}
                            </p>
                          );
                        })}
                        <div className="flex">
                          {products[product].color.map((i, index) => {
                            return (
                              <button
                                key={index}
                                className={
                                  "border-2 ml-1 " +
                                  "border-" +
                                  `${i}` +
                                  "-300 " +
                                  "bg-" +
                                  `${i}` +
                                  "-500 " +
                                  "rounded-full w-6 h-6 focus:outline-none"
                                }
                              ></button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  };
}
export default Tshirt;
