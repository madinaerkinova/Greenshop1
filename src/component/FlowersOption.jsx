import React, { useState } from "react";
import { Data } from "../../data";
import { Tabs, Tab, FormControl, NativeSelect } from "@mui/material";

const FlowersOption = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState(0);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className=" w-full bg-white">
      {/* Tabs */}
      <div className="flex ">
        {/* Sidebar */}
        <div className="w-1/4 mr-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-8">
              <p className="text-lg font-bold mb-4">Categories</p>
              <ul className="space-y-4">
                <li className="flex justify-between cursor-pointer">
                  <span className="text-green-600 font-semibold">
                    House Plants
                  </span>
                  <span>(33)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Potter Plants</span>
                  <span>(12)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Seeds</span>
                  <span>(65)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Small Plants</span>
                  <span>(39)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Big Plants</span>
                  <span>(23)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Succulents</span>
                  <span>(17)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Terrariums</span>
                  <span>(19)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Gardening</span>
                  <span>(13)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Accessories</span>
                  <span>(18)</span>
                </li>
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <p className="text-lg font-bold mb-4">Price Range</p>
              <div className="flex flex-col space-y-4">
                <p>
                  Price: <span className="text-green-600">$39 - $1230</span>
                </p>
                <button className="bg-green-600 text-white py-2 rounded-md">
                  Filter
                </button>
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="text-lg font-bold mb-4">Size</p>
              <ul className="space-y-4">
                <li className="flex justify-between cursor-pointer">
                  <span>Small</span>
                  <span>(119)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Medium</span>
                  <span>(86)</span>
                </li>
                <li className="flex justify-between cursor-pointer">
                  <span>Large</span>
                  <span>(78)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-6">
            <Tabs
              value={value}
              onChange={handleChangeTab}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              className="text-[20px] mx-auto"
            >
              <Tab
                value="all plants"
                label="All Plants"
                className="text-[20px]"
              />
              <Tab value="new arrivals" label="New Arrivals" />
              <Tab value="sale" label="Sale" />
            </Tabs>
            <div className="flex items-center gap-4">
              <span className="text-[18px]">Short by:</span>
              <FormControl>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "sort",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Default sorting</option>
                  <option value={20}>Price: Low to High</option>
                  <option value={30}>Price: High to Low</option>
                  <option value={40}>Newest Arrivals</option>
                </NativeSelect>
              </FormControl>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 border border-gray-200 shadow-md rounded-lg flex flex-col items-center"
              >
                <div className="relative w-full h-64 mb-4">
                  {item.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {item.discount}
                    </span>
                  )}
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                  <p className="text-green-600 font-bold mb-1">
                    ${item.price.toFixed(2)}
                  </p>
                  {item.original_price && (
                    <p className="text-gray-500 line-through">
                      ${item.original_price.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                } rounded-md`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowersOption;
