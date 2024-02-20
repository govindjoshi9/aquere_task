import React from 'react'

export default function Addressbar() {
  return (
    <>
      <div className="bg-gray-200 inline-flex rounded-sm">
        <div className="w-full mr-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
          <div>
            <span class="font-bold text-gray-600 text-sm">Customer: </span>
            <br />
            <span class="text-black font-bold mr-4 text-lm">
              SRG India Pvt Ltd
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 inline-flex rounded-sm mt-4">
        <div className="w-full mr-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>

          <div>
            <span class="font-bold text-gray-600 text-sm">
              Delivery Location{" "}
            </span>
            <br />
            <span class="text-black font-bold mr-4 text-lm">
              Gurugram-017828
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 inline-flex rounded-sm mt-4">
        <div className="w-full mr-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>

          <div>
            <span class="font-bold text-gray-600 text-sm">
              Dispath Location{" "}
            </span>
            <br />
            <span class="text-black font-bold mr-4 text-lm">
              Gurugram-017828
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 inline-flex rounded-sm mt-4 text-center w-44">
        <div className="mr-4 flex justify-center">
          <span class="text-gray-500 font-bold mr-4 text-lm">Show More</span>
        </div>
      </div>

      {/* summart */}

      <div className="border-t mt-2">
        <button className="bg-gray-200 font-bold mt-3">
          #SO_DRAFT_00000017_2024
        </button>
        <br />
        <span className="text-gray-400 ">Total Quantity:</span>{" "}
        <span className="ml-14">21</span>
        <br />
        <span className="text-gray-400 ">Total Quantity:</span>{" "}
        <span className="ml-14">21</span>
        <br />
        <span className="text-gray-400 ">Total Quantity:</span>{" "}
        <span className="ml-14">21</span>
        <br />
        <button className="bg-gray-200 mt-3 h-9 rounded-md text-center">
          <span className="text-black">Total Bag Price:</span>{" "}
          <span className="ml-7">123230.23</span>
        </button>
      </div>

      {/* Price */}

      <div className="border-t mt-2">
        <h4 className='text-black text-2xl'>
          Price Brack Up
        </h4>
        <span className="text-gray-400 ">IGST:</span>{" "}
        <span className="ml-14">21</span>
        <br />
        <span className="text-gray-400 ">IGST:</span>{" "}
        <span className="ml-14">21</span>
        <br />
        <span className="text-gray-400 ">IGST:</span>{" "}
        <span className="ml-14">0</span>
        <br />
        <button className="bg-gray-200 mt-3 h-9 rounded-md text-center">
          <span className="text-green-700">Discount:</span>{" "}
          <span className=" text-green-700 ml-16">235.23</span>
        </button>
        <button className="bg-gray-200 mt-3 h-9 rounded-md text-center">
          <span className="text-black">Total Bag Price:</span>{" "}
          <span className="ml-7">123230.23</span>
        </button>
      </div>
    </>
  );
}
