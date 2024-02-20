import Addressbar from "./Addressbar";
import ProductSearchBar from "./ProductSearBar";

const products = [
  {
    id: 1,
    name: "Mens white check Shirt regular fit",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    price2: "$170",
    color: "Black",
        Degine: "DGEE2345WWR765",
    size: "XL",
  },
  {
    id: 1,
    name: "Mens white check Shirt regular fit",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
        Degine: "DGEE2345WWR765",
    size: "XL",
  },
  {
    id: 1,
    name: "Mens white check Shirt regular fit",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
        Degine: "DGEE2345WWR765",
    size: "XL",
  },
  {
    id: 1,
    name: "Mens white check Shirt regular fit",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
        Degine: "DGEE2345WWR765",
    size: "XL",
  },
  
];

export default function Productlist() {
  return (
    <div className="flex flex-col mt-0 lg:flex-row">
      {/* Product List */}
      <div className="">
        <div className="bg-white overflow-hidden sm:ml-8">
          <div className="mx-auto max-w-1xl px-4 py-16 sm:ml-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductSearchBar/>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-45 lg:h-13">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="absolute top-0 left-0 mt-2 ml-2"
                      />
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-1/2 w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="text-gray-400">
                      <h4>Item Name</h4>
                      <h3 className="text-sm text-black font-bold">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 font-bold"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <h4 className="gap-1">Degine no</h4>
                      <p className="mt-1 text-sm text-black  ">
                        {product.Degine}
                      </p>

                      <div className="flex">
                        <p className="mt-1 text-sm text-black font-bold bg-gray-400 w-5 mr-2">
                          {product.size}
                        </p>
                        <p className="mt-1 text-sm text-black font-bold bg-gray-400 w-1/2 ml-2">
                          Instock:100
                        </p>
                      </div>

                      <div className="flex">
                        <p className="text-sm font-medium text-gray-900 mr-4">
                          {product.price}
                        </p>
                        <p className="text-sm font-medium text-gray-400 line-through">
                          {product.price2}
                        </p>
                      </div>
                      <div className="flex  ">
                        <button className="text-black border-black mt-2 rounded-sm">
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
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                        <button className="ml-5 bg-gray-300 text-black mt-2 rounded-sd">
                          XL
                          <div className=" inline-flex">+5 more</div>
                        </button>
                        <button className=" text-black mt-2 border-l bg-gray-300 ">
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
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Order Details */}
      <div className="lg:w-1/4 lg:pl-8 mt-8 lg:mt-0 border">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <Addressbar/>
        {/* Add your order details here */}
      </div>
    </div>
  );
}
