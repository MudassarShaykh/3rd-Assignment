import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function About() {
  return (
    <div className="flex justify-center flex-col gap-28 min-h-screen">
      <Header />
      <div className="flex items-center justify-center h-fit flex-col gap-6 ">
        <h2
          className="text-3xl text-gray-800 font-medium hover:scale-125 hover:underline transition-all duration-300"
          style={{ textUnderlineOffset: "8px" }}>
          About Me
        </h2>

        <div className="w-96 flex items-center justify-center flex-col h-fit p-4 border-2 rounded-lg border-black bg-gray-800 gap-4 hover:scale-110 transition-transform duration-300 text-white">
        <p className="hover:scale-105  hover:text-gray-200 transition-transform duration-150"> Hello! I am Mudassar Aslam, a passionate web developer learning in Governor house. I specialize in building responsive and user-friendly websites that provide professional experiences across all devices. </p>
        <p className="hover:scale-105 hover:text-gray-200 transition-transform duration-150">With a strong foundation in HTML, CSS, JavaScript and TypeScript, I enjoy creating dynamic web applications and exploring the latest technologies in the field. I believe in continuous learning and always strive to improve my skills and knowledge.</p>
        <p className="text-3xl font-medium hover:scale-110 hover:underline transition-all duration-300"
          style={{ textUnderlineOffset: "8px" }}>Thank You!</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
