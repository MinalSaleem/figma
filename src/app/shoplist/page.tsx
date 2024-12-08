import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Shopsidebar";
import Header from "../components/Header";

export default function Home() {
  const products = [
    { id: 1, image: "/shoplist/1.png", title: "Burger", price: 12.99 },
    { id: 2, image: "/shoplist/2.png", title: "Pizza", price: 15.99   },
    { id: 3, image: "/shoplist/3.png", title: "Pasta", price: 10.99   },
    { id: 4, image: "/shoplist/4.png", title: "Pizza", price: 8.99    },
    { id: 5, image: "/shoplist/5.png", title: "Fresh Lime", price: 12.99    },
    { id: 6, image: "/shoplist/6.png", title: "Burger", price: 15.99 },
    { id: 7, image: "/shoplist/7.png", title: "Cake", price: 10.99    },
    { id: 8, image: "/shoplist/8.png", title: "Sandwich", price: 8.99    },
    { id: 9, image: "/shoplist/9.png", title: "Wings", price: 15.99    },
    { id: 10, image: "/shoplist/10.png", title: "Wings", price: 10.99    },
    { id: 11, image: "/shoplist/1.png", title: "Burger", price: 8.99    },
    { id: 12, image: "/shoplist/2.png", title: "Cake", price: 12.    },
    { id: 13, image: "/shoplist/3.png", title: "Pasta", price: 15.99    },
    { id: 14, image: "/shoplist/4.png", title: "Pizza", price: 10.99    },
    { id: 15, image: "/shoplist/5.png", title: "Fresh Lime", price: 8.    },
    // Add more products
  ];

  return (
    <div>
    <Header title="Our Shop" route="Shop" />
    <div className="container mx-auto p-4 mt-[120px]">
      
      <div className="flex flex-col lg:flex-row-reverse">
        {/* Sidebar */}
        <div className="mb-6 lg:mb-0 lg:block hidden">
          <Sidebar />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l">
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700">
              1
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700">
              2
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
