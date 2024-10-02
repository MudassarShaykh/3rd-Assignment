import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function Contact() {
    return (
        <div className="flex justify-center flex-col gap-6 min-h-screen overflow-hidden">
            <Header/>
            <div className="flex items-center justify-center h-fit flex-col gap-5 ">
            <h2
          className="text-3xl text-gray-800 font-medium hover:scale-125 hover:underline transition-all duration-300"
          style={{ textUnderlineOffset: "8px" }}>
          Contact Us
        </h2>
        <div className="w-96 flex items-center justify-center flex-col h-fit p-4 gap-4 text-gray-800">
        <p className="hover:scale-125 hover:font-semibold font-medium hover:text-gray-900 transition-transform duration-200">
            I'd love to hear from you! whether you have a <span className="text-gray-900 font-bold">question ,</span> <span className="text-gray-900 font-bold">feedback</span> or just want to say <span className="text-gray-900 font-bold">"Hello!"</span>
        </p>
        </div>
        <div className="w-96 flex items-center justify-center flex-col h-fit p-4 border-2 rounded-lg border-black bg-gray-800 gap-4 hover:scale-110 transition-transform duration-300 text-white">
            <form className="flex flex-col items-center w-full gap-4">
                <input 
                type="text"
                spellCheck = "false"
                placeholder="Your Name"
                className="bg-gray-800 outline-none w-full placeholder:text-gray-300 p-3 border-2 rounded-lg focus:bg-gray-700 focus:border-gray-400 capitalize text-lg transition-colors duration-300"
                required
                />
                 <input 
                spellCheck = "false"
                type="email"
                placeholder="Your Email Address"
                className="bg-gray-800 outline-none w-full placeholder:text-gray-300 p-3 border-2 rounded-lg focus:bg-gray-700 focus:border-gray-400 text-lg transition-colors duration-300"
                required
                />
                <textarea
                placeholder="Your Message"
                rows={4}
                required
                className=" resize-none bg-gray-800 w-full outline-none border-2 rounded-lg px-4 p-2 text-lg placeholder:text-gray-300 focus:bg-gray-700 focus:border-gray-400 transition-colors duration-300"
                ></textarea>
                <button 
                type="submit"
                className="bg-white text-gray-800 p-3 rounded-2xl font-semibold text-lg border-2 border-slate-950 focus:bg-gray-200">
                   Send Message!
                </button>
            </form>
        </div>
        <div className="w-96 flex items-center justify-center flex-col h-fit p-4 gap-4 text-gray-800">
        <p className="hover:scale-125 hover:font-semibold font-medium hover:text-gray-900 transition-transform duration-200 text-center">
        Alternatively, you can reach me via email at <a href="https://mail.google.com" target="_blank" className="text-lg hover:underline transition-all duration-500">aslammudassar232@gmail.com</a> 
        </p>
        </div>
    </div>
    <Footer/>
        </div>
    )
}