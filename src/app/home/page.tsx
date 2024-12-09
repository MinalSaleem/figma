import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { PiHamburgerLight } from "react-icons/pi";
import { MdFastfood } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { LuPizza } from "react-icons/lu";

export default function Homepage() {
  const images = [
    { src: "/home/choice1.png", alt: "Tacos" },
    { src: "/home/choice2.png", alt: "Burger" },
    { src: "/home/choice3.png", alt: "Nuggets" },
    { src: "/home/choice4.png", alt: "Cheese Burger" },
    { src: "/home/choice5.png", alt: "Fries" },
    { src: "/home/choice6.png", alt: "Pasta" },
  ];
  return (
    <div className=" text-white">
      <div className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/background1.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 ">
            <section className="px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px] lg:mt-[120px]">
              <div className="text-white w-full md:w-[50%] ">
                <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] whitespace-nowrap text-center md:text-left">
                  Its Quick & Amusing!
                </h1>

                <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
                  <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food
                  Quality
                </h1>

                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
                  <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
                    See More
                  </button>
                </div>
              </div>

              <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
                <Image
                  src="/home/main1.png"
                  alt="Hero Image"
                  width={300}
                  height={300}
                  className="w-[90%] md:w-auto max-w-[300px] md:max-w-full"
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="flex lg:flex-row flex-col w-full lg:w-[1320px] lg:ml-[300px] ml-0 pt-[120px]">
          <div className="flex flex-col justify-between w-full lg:w-[562px]  h-[562px]">
            <h2 className="text-[#FF9F0D] font-normal text-[32px]">
              Why Choose us
            </h2>
            <h2 className="flex flex-row font-bold lg:text-5xl text-2xl">
              <p className="text-[#FF9F0D]">Ex</p>tra ordinary taste And
              Experienced
            </h2>

            <p className="text-base pr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <ul className="text-lg">
              <li className="flex flex-row">
                <TiTick />
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </li>
              <li className="flex flex-row my-6">
                <TiTick />
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </li>
              <li className="flex flex-row">
                <TiTick />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
            </ul>
            <button className="bg-[#FF9F0D] w-[190px] h-[60px] rounded-full">
              Read More
            </button>
          </div>

          <div className="flex flex-col lg:w-3/5 space-y-0 lg:space-y-4 lg:my-0 my-1 ">
            <div className="w-[350px] lg:w-[660px] h-[330px] my-1 ">
              <Image
                src="/home/about1.png"
                alt="Food"
                width={660}
                height={200}
              />
            </div>
            <div className="flex lg:flex-row flex-col space-x-0 lg:space-x-4">
              <div className="w-[350px] lg:w-[322px] h-[194px]">
                <Image
                  src="/home/about2.png"
                  alt="Food"
                  width={312}
                  height={200}
                />
              </div>
              <div>
                <Image
                  src="/home/about3.png"
                  alt="Food"
                  width={312}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[350px] lg:w-[1320px] lg:ml-[200px] ml-3 mt-[120px]">
          <div>
            <h2 className="text-[#FF9F0D] font-normal text-[32px]">
              Food Categary
            </h2>
          </div>
          <div className="flex flex-row my-14">
            <p className="text-[#FF9F0D] font-bold text-3xl lg:text-5xl">Ch</p>
            <p className="font-bold text-3xl lg:text-5xl">oose Food Item</p>
          </div>

          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 content-around px-5">
            <div className="lg:w-[300px]">
              <Image
                src="/home/food1.png"
                alt="Food"
                width={300}
                height={382}
              />
            </div>
            <div className="lg:w-[300px]">
              <Image
                src="/home/food2.png"
                alt="Food"
                width={300}
                height={382}
              />
            </div>
            <div className="lg:w-[300px]">
              <Image
                src="/home/food3.png"
                alt="Sallers"
                width={300}
                height={382}
              />
            </div>
            <div className="lg:w-[300px]">
              <Image
                src="/home/food4.png"
                alt="Food"
                width={300}
                height={382}
              />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse w-[350px] lg:w-[1320px] lg:ml-[300px] ml-3 mt-[120px] py-[120px]">
          <div className="bg-black py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`rounded overflow-hidden ${
                    index === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col  justify-between w-full lg:w-[562px] h-[562px] lg:space-x-6">
            <h2 className="text-[#FF9F0D] font-normal text-[32px] mt-10 lg:ml-4">
              About us
            </h2>
            <div className="flex  font-bold text-2xl lg:text-5xl">
              <h2 className="text-[#FF9F0D] ">We </h2>
              <h2>Create the best foody product</h2>
            </div>

            <p className="text-base pr-4 lg:py-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            <div className="flex  flex-row justify-between space-x-0 lg:space-x-0 lg:justify-evenly  lg:py-16 lg:ml-0 ml-0">
              <div className="flex-col justify-center items-center  lg:block  hidden">
                <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] bg-[#FF9F0D] rounded-md">
                  <PiHamburgerLight size={56} />
                </div>
                <div>
                  <p className="font-normal text-[18px]">Fast Food</p>
                </div>
              </div>

              <div className=" flex-col justify-center items-center  lg:block  hidden">
                <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] bg-[#FF9F0D] rounded-md">
                  <MdFastfood size={56} />
                </div>
                <div>
                  <p className="font-normal text-[18px]">Lunch</p>
                </div>
              </div>

              <div className=" flex-col justify-center items-center lg:block  hidden">
                <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] bg-[#FF9F0D] rounded-md">
                  <FaWineGlassAlt size={56} />
                </div>
                <div>
                  <p className="font-normal text-[18px]">Dinner</p>
                </div>
              </div>
            </div>

            <div className="bg-white w-full lg:w-[374px] h-[93px] flex flex-row justify-around py-4 rounded-md">
              <p className="text-[#FF9F0D] text-5xl font-bold">30+</p>
              <p className="text-black">Years of Experienced</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative  w-full h-[410px] pt-[120px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/background2.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70">
            <section className="px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-between lg:justify-evenly md:flex-row md:items-center py-[50px]">
              <div className="text-white w-full md:w-[50%] lg:my-7 my-9">
                <div className="flex flex-row justify-between ">
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] rounded-md">
                      <PiChefHatBold color="yellow" size={100} />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        Professional Chefs
                      </p>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        420
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] rounded-md">
                      <MdFastfood color="yellow" size={100} />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        Items Of Food
                      </p>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        320
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] rounded-md">
                      <ImSpoonKnife color="yellow" size={100} />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        Years Of Experienced
                      </p>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        30+
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex justify-center items-center w-[70px] lg:w-[102px] h-[100px] rounded-md">
                      <LuPizza color="yellow" size={100} />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        Happy Customers
                      </p>
                      <p className="font-semibold text-[14px] lg:font-bold lg:text-[24px]">
                        220
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-black py-[120px]">
        <div className=" flex flex-col justify-center items-center w-auto lg:w-[1320px] lg:ml-[200px] ml-7 ">
          <div>
            <h2 className="text-[#FF9F0D] font-normal text-[32px]">Chefs</h2>
          </div>
          <div className="flex flex-row my-14">
            <p className="text-[#FF9F0D] font-bold text-3xl lg:text-5xl">Me</p>
            <p className="font-bold text-3xl lg:text-5xl">et Our Chefs</p>
          </div>

          <div className="flex lg:flex-row flex-col justify-between space-x-0 lg:space-x-8">
            <div className="w-[312px] h-[391px]">
              <div className="h-[300px] ">
                <Image src="/home/1.png" alt="chef" width={300} height={250} />
              </div>
              <div className=" h-[90px] text-white">
                <h2 className="font-bold text-[22px]">D.Estwood</h2>
              </div>
            </div>

            <div className="w-[312px] h-[391px]">
              <div className="h-[300px] ">
                <Image src="/home/2.png" alt="chef" width={300} height={250} />
              </div>
              <div className=" h-[90px] text-white">
                <h2 className="font-bold text-[22px]">D.Scoriesh</h2>
              </div>
            </div>

            <div className="w-[312px] h-[391px]">
              <div className="h-[300px] ">
                <Image src="/home/3.png" alt="chef" width={300} height={250} />
              </div>
              <div className=" h-[90px] text-white">
                <h2 className="font-bold text-[22px]">M. William</h2>
              </div>
            </div>

            <div className="w-[312px] h-[391px]">
              <div className="h-[300px] ">
                <Image src="/home/4.png" alt="chef" width={300} height={250} />
              </div>
              <div className=" h-[90px] text-white">
                <h2 className="font-bold text-[22px]">W.Readfroad</h2>
              </div>
            </div>
          </div>
          <Link href={"/chef"}>
            <button className="border-[#FF9F0D] bg-black border mt-10 w-[190px] h-[60px] rounded-full">
              See More
            </button>
          </Link>
        </div>
      </div>

      <section className="bg-black py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-12">
            What our clients are saying
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="lg:w-[800px] w-full bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center">
                <Image
                  className="rounded-full"
                  src="/about/5.png"
                  alt="Client Image"
                  width={96}
                  height={96}
                />
              </div>

              <p className="text-xl font-semibold text-yellow-500 mt-4">99</p>
              <div className="flex justify-center mt-2">
                <span className="text-yellow-500 text-lg">&#9733;</span>
                <span className="text-yellow-500 text-lg">&#9733;</span>
                <span className="text-yellow-500 text-lg">&#9733;</span>
                <span className="text-yellow-500 text-lg">&#9733;</span>
                <span className="text-gray-300 text-lg">&#9733;</span>
              </div>

              <p className="text-gray-600 mt-4 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Aenean lacinia neque vel erat varius.
              </p>

              <p className="text-lg font-medium text-gray-800">Alamin Hasan</p>
              <p className="text-sm text-gray-500">Food Specialist</p>

              <div className="flex justify-center mt-6">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mx-2"></span>
                <span className="w-3 h-3 bg-gray-300 rounded-full mx-2"></span>
                <span className="w-3 h-3 bg-gray-300 rounded-full mx-2"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full lg:h-[558px] h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/home/background3.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70">
            <section className="flex flex-col justify-evenly items-end md:flex-row md:items-center py-[50px] ml-4 lg:ml-96">
              {/* Heading */}
              <div className="text-white w-full lg:w-[50%]">
                <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] whitespace-nowrap text-center md:text-left">
                  Restaurant Active Process
                </h1>

                <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
                  <span className="text-[#FF9F0D]">We</span>Document Every Food
                  Bean Process untile it is saved
                </h1>

                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                  bibendum. Urna, elit augue urna,
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
                  <button className="bg-transparent text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] border border-[#FF9F0D] rounded-full hover:bg-yellow-800">
                    See More
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
