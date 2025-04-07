import React, { useState } from "react";
import Footer from "./Footer";
import Products from "./JsonData/Products.json";
import { MdStar, MdStarBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/Action";

function Men() {
  const [ratings, setRatings] = useState(false);
  const handleStar = (id, rating) => {
    setRatings((prev) => ({
      ...prev, [id]: rating,}));
  };
  const dispatch = useDispatch();
  const handleCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      <div className="flex flex-wrap justify-evenly bg-slate-50 gap-4 mt-[3rem]">
        {Products.categories.Men.map((items, i) => (
          <div
            key={i}
            className=" w-[20rem] border rounded-md p-4 hover:shadow-2xl"
          >
            <div className="min-h-[24rem]">
              <img src={items.image_src} alt="" />
            </div>
            <div className="h-[3rem]">{items.name}</div>
            <div className="flex gap-5 items-center">
              <div className="text-lg font-bold text-slate-600">
                {items.price}
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
              className="bg-[#32548f] text-white w-full p-3 hover:bg-yellow-500"
              onClick={() => handleCart(items)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-[2.8rem]">
        <Footer />
      </div>
    </div>
  );
}

export default Men;
