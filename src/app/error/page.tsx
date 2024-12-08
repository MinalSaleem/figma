import Link from "next/link";
import Header from "../components/Header";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white">
     
     <Header title="404 Error" route="404" />

      {/* Signup Form Section */}
      <div className="px-10 relative bg-white flex flex-col items-center my-[120px]">
        <div className="w-[630px] text-center">
          <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="font-bold text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[18px]">
            Page cannot be found! We’ll have it figured out in no time.
          </p>
          <p className="text-[18px] mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}