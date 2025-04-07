import React, { useState } from "react";
import Footer from "./Footer";
import Products from "./JsonData/Products.json";
import { MdStar, MdStarBorder } from "react-icons/md";
import headerImg from "./Assets/headerimage.jpg";
import headerImg2 from "./Assets/headreimage2.jpg";
import { BsArrowLeftShort } from "react-icons/bs";
import productNotFound from "./Assets/product-not-found.png";
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/Action'; 

function Home() {

const dispatch = useDispatch();
const handleCart = (item) => {
  dispatch(addToCart(item));
};
  const [ratings, setRatings] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const handleStar = (id, rating) => {
    setRatings((prev) => ({...prev, [id]: rating,}));
  };
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const allProducts = Object.values(Products.categories).flat();
  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <div className=" absolute top-3 right-[9rem] z-50 serachInputSection ">
          <div className="fixed top-3 z-50 right-[10rem]">
            <input
              type="text"
              onChange={handleSearchInput}
              className="px-4 py-2 w-[17rem] rounded-full text-gray-700 border border-purple-200 outline-none"
            />
            <span className="bg-fuchsia-500 h-[2.6rem] text-white rounded-full w-[8rem] absolute right-[1px] p-2 text-center ">
              Search
              <span className="text-white relative right-[7rem]">
                <span className="absolute  ml-8">
                  <BsArrowLeftShort size={25} />
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
   		 {!searchTerm && (
		  <div className="flex gap-3 justify-center mb-5">
		  <img src={headerImg} alt="" className="w-[71vw] headerImage1" />
		  <img src={headerImg2} alt="" className="w-[23vw] object-cover headerImage"/>
		</div>
		)}
      <div className="flex flex-wrap justify-evenly bg-slate-50 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, i) => (
            <div
              key={i}
              className="w-[20rem] border rounded-md p-4 hover:shadow-2xl mt-3.5"
            >
              <div className="min-h-[24rem] flex justify-center">
                <img
                  src={item.image_src}
                  alt={item.name}
                  className="max-h-[20rem]"
                />
              </div>
              <div className="h-[3rem] font-semibold">{item.name}</div>
              <div className="flex gap-5 items-center">
                <div className="text-lg font-bold text-slate-600">
                  {item.price}
                </div>
                <div className="flex cursor-pointer">
                  {[0, 1, 2, 3, 4].map((num) => (
                    <span key={num} onClick={() => handleStar(i, num)}>
                      {ratings[i] >= num ? (
                        <MdStar size={22} className="fill-yellow-500" />
                      ) : (
                        <MdStarBorder size={22} className="fill-gray-500" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="bg-[#32548f] text-white w-full p-3 mt-2 hover:bg-yellow-500 transition"
                onClick={() => handleCart(item)}
              >
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 w-full text-xl mt-[9.8rem] mb-[8rem]">
            <div className="flex justify-center items-center">
              <img src={productNotFound} alt="" className=" flex justify-center w-[35rem]"/>
            </div>
          </div>
        )}
      </div>
      <div className="mt-[1rem]">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
