import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-screen h-24  bg-gray-700 flex justify-between items-center py-2 px-24 mt-auto text-white hover:border-gray-950 hover:border-t-4 transition-all duration-100">
      <div className="w-full">
        <h3 className="text-center mb-4 text-2xl hover:scale-110 hover:underline transition-all duration-300"
          style={{ textUnderlineOffset: "8px" }}>Follow us!</h3>
        <ul className="flex justify-center items-center gap-4 w-full">
          <li>
            <a href="https://www.facebook.com/groups/governorsindhfreeitcourses" className="flex justify-center items-center gap-2 hover:text-gray-300"
            target="_blank">
              <FaFacebook />
              FaceBook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mudassar_khan67" className="flex justify-center items-center gap-2 hover:text-gray-300" target="_blank">
              <FaInstagram />
              InstaGram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mudassar-khan-87ba5b2bb" className="flex justify-center items-center gap-2 hover:text-gray-300" target="_blank">
              <FaLinkedin />
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" className="flex justify-center items-center gap-2 hover:text-gray-300" target="_blank">
              <FaYoutube />
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
