import Link from "next/link";
import Header from "../components/Header";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Sign Up page" route=" sign up" />
      {/* Signup Form */}

      <div className="flex flex-col mx-auto w-full lg:w-[424px] h-[624px] bg-white drop-shadow-xl shadow-red-500 rounded-md p-8 py-16 my-[120px]">
        <h3 className="text-2xl font-bold mb-8 text-start">Sign Up</h3>
        <form>
          <div className="mb-4 relative">
            {/* Icon */}
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <AiOutlineUser />
            </span>

            {/* Input Field */}
            <input
              type="text"
              className="w-full lg:w-[360px] h-[44px] border rounded pl-10 pr-3 py-2 placeholder-gray-500"
              placeholder="Name"
            />
          </div>

          <div className="mb-4 relative">
            {/* Icon */}
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <MdOutlineEmail />
            </span>

            {/* Input Field */}
            <input
              type="text"
              className="w-full lg:w-[360px] h-[44px] border rounded pl-10 pr-3 py-2 placeholder-gray-500"
              placeholder="Email"
            />
          </div>

          <div className="mb-4 relative">
            {/* Icon */}
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <MdLockOutline />
            </span>

            {/* Input Field */}
            <input
              type="text"
              className="lg:w-[360px] w-full h-[44px] border rounded pl-10 pr-3 py-2 placeholder-gray-500"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" size={40} />
            <span className="text-sm font-normal">Remember me?</span>
          </div>
          <button
            type="submit"
            className="lg:w-[360px]  w-full h-[44px] bg-[#FF9F0D] hover:bg-yellow-600 text-white text-base py-2"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            <Link href="/forgot-password" className="text-yellow-500">
              Forgot password?
            </Link>
          </p>
        </form>
        <div className="text-center mt-8">
          <p>OR</p>
          <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FcGoogle size={22} />
            Sign up with Google
          </button>
          <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <FaApple size={22} />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
}