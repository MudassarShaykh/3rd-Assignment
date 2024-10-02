import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function Home() {
  return (
    <div className="flex justify-center flex-col gap-28 min-h-screen">
      <Header/>
      <div className="flex items-center justify-center h-fit flex-col gap-4 ">
        <h1
          className="text-3xl text-gray-800 font-medium hover:scale-125 hover:underline transition-all duration-300"
          style={{ textUnderlineOffset: "8px" }}
        >
          Portfolio.
        </h1>
        <div className="flex items-center justify-center flex-col h-fit p-4 border-2 rounded-lg border-black bg-gray-800 gap-4 hover:scale-110 transition-transform duration-300">
          <div className="flex items-center justify-center gap-4">
            <div className="h-400px mt-40px w-max shadow-2xl shadow-black bg-gray-700 p-1 box-border rounded-2xl hover:border hover:border-white hover:scale-110 transition-transform duration-300">
              <Image
                className="rounded-full filter  brightness-100 contrast-125 hover:brightness-105 hover:border-gray-700 hover:border hover:scale-110 transition-transform duration-200 "
                src="/profile.pic.png"
                alt="Example Images"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="h-400px mt-40px w-max  bg-gray-700 p-5 rounded-xl box-border text-white hover:border hover:border-white hover:scale-110 transition-transform duration-300">
              <p className="font-semibold ">Hey,</p>
              <p>
                My name is{" "}
                <span className="font-semibold text-red-500">Mudassar</span>
              </p>
              <p>I am a Next JS Developer</p>
            </div>
          </div>
          <div className="h-400px mt-40px w-80 shadow-2xl shadow-black bg-gray-700 py-1 px-6 rounded-xl hover:border text-white hover:border-white hover:scale-110 transition-transform duration-300">
            <p className="font-semibold text-center text-lg">Description</p>
            <ul className="list-disc">
              <li>Fronted Web-Developer</li>
              <li>TypeScript</li>
              <li>Next JS (Progress...)</li>
              <li>UI/UX Designer</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
