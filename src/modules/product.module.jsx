import React, { useState } from "react";
import classnames from "classnames";
import { Typography, Divider } from "antd";
const { Link, Text } = Typography;

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="flex justify-center mt-xl md:flex-row gap-4">
      <div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-row gap-2">
            <div className="flex relative flex-col">
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="src/assets/images/shirt2.png" />
              </div>
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="src/assets/images/shirt2.png" />
              </div>
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="src/assets/images/shirt2.png" />
              </div>
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="src/assets/images/shirt2.png" />
              </div>
              <div className="border border-black-500 w-[75px] mb-sm rounded hover:opacity-75">
                <img src="src/assets/images/shirt2.png" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center px-md">
              <img src="src/assets/images/shirt2.png" width={400} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-3/12">
        <Text className="uppercase font-bold text-lg text-left">
          Product Page
        </Text>
        <Text className="uppercase font-md text-sm text-left mt-md leading-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          explicabo itaque illum corporis. Quasi qui quidem expedita tenetur in
          optio voluptatibus suscipit corporis, cumque cum dolorem doloribus
          temporibus nisi pariatur!
        </Text>
        <Text className="font-bold text-lg text-left mt-sm">P800</Text>
        <div className="w-full flex flex-col gap-4 mt-xl justify-between">
          <div className="flex justify-between">
            <Text className="uppercase text-xs font-semibold">
              Choose your size
            </Text>
            <Text className="uppercase text-xs underline">Size Guide</Text>
          </div>
          <div className="flex gap-x-2 items-center justify-center">
            <div
              className={classnames(
                "bg-transparent rounded px-6 py-2 border border-black-500 hover:border-black",
                selectedSize === "s" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("s")}
            >
              <Text className="uppercase font-bold text-lg">S</Text>
            </div>
            <div
              className={classnames(
                "bg-transparent rounded px-6 py-2 border border-black-500 hover:border-black",
                selectedSize === "m" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("m")}
            >
              <Text className="uppercase font-bold text-lg">M</Text>
            </div>
            <div
              className={classnames(
                "bg-transparent rounded px-6 py-2 border border-black-500 hover:border-black",
                selectedSize === "l" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("l")}
            >
              <Text className="uppercase font-bold text-lg">L</Text>
            </div>
            <div
              className={classnames(
                "bg-transparent rounded px-4 py-2 border border-black-500 hover:border-black",
                selectedSize === "xl" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("xl")}
            >
              <Text className="uppercase font-bold text-lg">XL</Text>
            </div>
            <div
              className={classnames(
                "bg-transparent rounded px-4 py-2 border border-black-500 hover:border-black",
                selectedSize === "2xl" ? "border-black" : ""
              )}
              onClick={() => setSelectedSize("2xl")}
            >
              <Text className="uppercase font-bold text-lg">2XL</Text>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="border-solid border border-black p-sm">
              <Text className="uppercase">Add to bag</Text>
            </div>
            <div className="border-solid border border-black p-sm bg-black">
              <Text className="uppercase text-white">Buy now</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
