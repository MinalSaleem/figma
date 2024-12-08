import Image from "next/image";
import Header from "../components/Header";
import { MdFastfood } from "react-icons/md";
import { PiChefHatBold } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { LuPizza } from "react-icons/lu";

export default function Menu() {
  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* Background Image */}

        <Header title="Our Menu" route="Menu" />

        <div className="flex flex-col lg:flex-row w-auto lg:w-[1320px] lg:h-[628px] h-auto  ml-3 mx-0 lg:ml-60 my-16 ">
          <div className="w-[350px] lg:w-[448px] h-[400px] lg:h-[626px] flex items-center justify-center mx-22">
            <Image src="/menu/1.png" alt="Food" width={400} height={500} />
          </div>

          <div className="w-[600px] flex flex-col ml-0 lg:ml-14 mt-6 lg:mt-0">
            <div className="lg:my-7 my-4">
              <h2 className="lg:text-5xl text-3xl font-bold">Starter Menu</h2>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col border-[#E0E0E0] border-b-2">
                <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    Alder Grilled Chinook Saimon
                  </h2>
                  <p className="text-[#FF9F0D] text-2xl ">32$</p>
                </div>
                <p className="text-[#4F4F4F] my-2 lg:my-3">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-[#828282] mb-3">560 CAL</p>
              </div>

              <div className="flex flex-col border-[#E0E0E0] border-b-2">
                <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0 text-[#FF9F0D]">
                  <h2 className="text-xl lg:text-2xl font-semibold ">
                    Berries and creme tart
                  </h2>
                  <p className="text-2xl ">32$</p>
                </div>
                <p className="text-[#4F4F4F] my-2 lg:my-3">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-[#828282] mb-3">560 CAL</p>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col border-[#E0E0E0] border-b-2">
                  <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                    <h2 className="text-xl lg:text-2xl font-semibold">
                      Alder Grilled Chinook Saimon
                    </h2>
                    <p className="text-[#FF9F0D] text-2xl ">32$</p>
                  </div>
                  <p className="text-[#4F4F4F] my-2 lg:my-3">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282] mb-3">560 CAL</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col border-[#E0E0E0] border-b-2">
                    <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                      <h2 className="text-xl lg:text-2xl font-semibold">
                        Alder Grilled Chinook Saimon
                      </h2>
                      <p className="text-[#FF9F0D] text-2xl ">32$</p>
                    </div>
                    <p className="text-[#4F4F4F] my-2 lg:my-3">
                      Toasted French bread topped with romano, cheddar
                    </p>
                    <p className="text-[#828282] mb-3">560 CAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-auto lg:w-[1320px] lg:h-[628px] h-auto ml-3 mx-0 lg:mx-52 my-16">
          <div className="w-[600px] flex flex-col ml-0 lg:ml-14 mt-6 lg:mt-0">
            <div className="lg:my-7 my-4">
              <h2 className="lg:text-5xl text-3xl font-bold">Main Course</h2>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col border-[#E0E0E0] border-b-2">
                <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    Optic Big Breakfast Combo Menu
                  </h2>
                  <p className=" text-2xl ">32$</p>
                </div>
                <p className="text-[#4F4F4F] my-2 lg:my-3">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-[#828282] mb-3">560 CAL</p>
              </div>

              <div className="flex flex-col border-[#E0E0E0] border-b-2">
                <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0 text-[#FF9F0D]">
                  <h2 className="text-xl lg:text-2xl font-semibold ">
                    Cashew Chicken With Stir-Fry
                  </h2>
                  <p className="text-2xl ">32$</p>
                </div>
                <p className="text-[#4F4F4F] my-2 lg:my-3">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-[#828282] mb-3">560 CAL</p>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col border-[#E0E0E0] border-b-2">
                  <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                    <h2 className="text-xl lg:text-2xl font-semibold">
                      Vegetables & Green Salad
                    </h2>
                    <p className="text-[#FF9F0D] text-2xl ">32$</p>
                  </div>
                  <p className="text-[#4F4F4F] my-2 lg:my-3">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="text-[#828282] mb-3">560 CAL</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col border-[#E0E0E0] border-b-2">
                    <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                      <h2 className="text-xl lg:text-2xl font-semibold">
                        Spicy Vegan Potato Curry
                      </h2>
                      <p className="text-[#FF9F0D] text-2xl ">32$</p>
                    </div>
                    <p className="text-[#4F4F4F] my-2 lg:my-3">
                      Spreadable cream cheese, crumbled blue cheese
                    </p>
                    <p className="text-[#828282] mb-3">560 CAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] lg:w-[448px] h-[400px] lg:h-[626px] flex items-center justify-center">
            <Image src="/menu/2.png" alt="Food" width={400} height={500} />
          </div>
        </div>

        <div className="relative w-full h-[410px] pt-[120px] lg:block hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/home/background2.png')", // Background image path
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 ">
              <section className="px-3 md:px-[80px] lg:px-[135px] flex flex-col lg:justify-evenly md:flex-row md:items-center py-[50px]">
                {/* Heading */}
                <div className="text-white w-full md:w-[50%]">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex justify-center items-center w-[102px] h-[100px] rounded-md">
                        <PiChefHatBold color="yellow" size={100} />
                      </div>
                      <div>
                        <p className="font-bold text-[24px]">
                          Professional Chefs
                        </p>
                        <p className="font-bold text-[24px]">420</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <div className="flex justify-center items-center w-[102px] h-[100px] rounded-md">
                        <MdFastfood color="yellow" size={100} />
                      </div>
                      <div>
                        <p className="font-bold text-[24px]">Items Of Food</p>
                        <p className="font-bold text-[24px]">320</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <div className="flex justify-center items-center w-[102px] h-[100px] rounded-md">
                        <ImSpoonKnife color="yellow" size={100} />
                      </div>
                      <div>
                        <p className="font-bold text-[24px]">
                          Years Of Experienced
                        </p>
                        <p className="font-bold text-[24px]">30+</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <div className="flex justify-center items-center w-[102px] h-[100px] rounded-md">
                        <LuPizza color="yellow" size={100} />
                      </div>
                      <div>
                        <p className="font-bold text-[18px]">Happy Customers</p>
                        <p className="font-bold text-[24px]">220</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-auto lg:w-[1320px] lg:h-[628px] h-auto ml-3 mx-0 lg:mx-52 my-16">
          <div className="w-[350px] lg:w-[448px] h-[400px] lg:h-[626px] flex items-center justify-center">
            <Image src="/menu/4.png" alt="Food" width={400} height={500} />
          </div>

          <div className="w-[600px] flex flex-col ml-0 lg:ml-14 mt-6 lg:mt-0">
            <div className="lg:my-7 my-4">
              <h2 className="lg:text-5xl text-3xl font-bold">Dessert</h2>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col border-[#E0E0E0] border-b-2">
                <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    Fig and lemon cake
                  </h2>
                  <p className=" text-2xl ">32$</p>
                </div>
                <p className="text-[#4F4F4F] my-2 lg:my-3">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-[#828282] mb-3">560 CAL</p>
              </div>

              <div className="flex flex-col border-[#E0E0E0] border-b-2">
                <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0 text-[#FF9F0D]">
                  <h2 className="text-xl lg:text-2xl font-semibold ">
                    Creamy mascarpone cake
                  </h2>
                  <p className="text-2xl ">32$</p>
                </div>
                <p className="text-[#4F4F4F] my-2 lg:my-3">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-[#828282] mb-3">560 CAL</p>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col border-[#E0E0E0] border-b-2">
                  <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                    <h2 className="text-xl lg:text-2xl font-semibold">
                      Alder Grilled Chinook Saimon
                    </h2>
                    <p className="text-[#FF9F0D] text-2xl ">32$</p>
                  </div>
                  <p className="text-[#4F4F4F] my-2 lg:my-3">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282] mb-3">560 CAL</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col border-[#E0E0E0] border-b-2">
                    <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                      <h2 className="text-xl lg:text-2xl font-semibold">
                        Pastry, blueberries, lemon juice
                      </h2>
                      <p className="text-[#FF9F0D] text-2xl ">32$</p>
                    </div>
                    <p className="text-[#4F4F4F] my-2 lg:my-3">
                      Ground cumin, avocados, peeled and cubed
                    </p>
                    <p className="text-[#828282] mb-3">560 CAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-auto lg:w-[1320px] lg:h-[628px] h-auto ml-3 mx-0 lg:mx-52 my-16">
          <div className="w-[600px] flex flex-col ml-0 lg:ml-14 mt-6 lg:mt-0">
            <div className="lg:my-7 my-4">
              <h2 className="lg:text-5xl text-3xl font-bold">Drinks</h2>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col border-[#E0E0E0] border-b-2">
                <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    Caffè macchiato
                  </h2>
                  <p className="text-[#FF9F0D] text-2xl ">32$</p>
                </div>
                <p className="text-[#4F4F4F] my-2 lg:my-3">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-[#828282] mb-3">560 CAL</p>
              </div>

              <div className="flex flex-col border-[#E0E0E0] border-b-2">
                <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0 text-[#FF9F0D]">
                  <h2 className="text-xl lg:text-2xl font-semibold ">
                    Aperol Spritz Capacianno
                  </h2>
                  <p className="text-2xl ">32$</p>
                </div>
                <p className="text-[#4F4F4F] my-2 lg:my-3">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-[#828282] mb-3">560 CAL</p>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col border-[#E0E0E0] border-b-2">
                  <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                    <h2 className="text-xl lg:text-2xl font-semibold">
                      Caffe Latte Campuri
                    </h2>
                    <p className="text-[#FF9F0D] text-2xl ">32$</p>
                  </div>
                  <p className="text-[#4F4F4F] my-2 lg:my-3">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="text-[#828282] mb-3">560 CAL</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col border-[#E0E0E0] border-b-2">
                    <div className="flex flex-row lg:justify-between space-x-3 lg:space-x-0">
                      <h2 className="text-xl lg:text-2xl font-semibold">
                        Tormentoso BushTea Pintoage
                      </h2>
                      <p className="text-[#FF9F0D] text-2xl ">32$</p>
                    </div>
                    <p className="text-[#4F4F4F] my-2 lg:my-3">
                      Spreadable cream cheese, crumbled blue cheese
                    </p>
                    <p className="text-[#828282] mb-3">560 CAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] lg:w-[448px] h-[400px] lg:h-[626px] flex items-center justify-center">
            <Image src="/menu/5.png" alt="Food" width={400} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
