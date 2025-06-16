export default function Contact() {
  return (
    <div
      className="scroll-mt-20 content-center mx-auto my-10 space-y-3 "
      id="contact" 
    >
      <h2 className="font-bold text-5xl text-[#d3dbfc] py-3">Contacto</h2>
      <div className="space-y-2 ">
        <ul className="list-disc text-white text-xl mx-5 space-y-2">
          <li>
            <a
              href="mailto:angel.code2300@gmail.com"
              target="_blank"
              className="relative index cursor-pointer bg-[linear-gradient(#fff,#fff),linear-gradient(#b2a8fd,#c7d2fe)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#8678f9] text-xl font-semibold"
            >
              Email :{" "}
              <span className="italic underline">angel.code2300@gmail.com</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Draang"
              target="_blank"
              className="relative index cursor-pointer bg-[linear-gradient(#fff,#fff),linear-gradient(#b2a8fd,#c7d2fe)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#8678f9] text-xl font-semibold"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/angel-contreras2308/"
              target="_blank"
              className="relative index cursor-pointer bg-[linear-gradient(#fff,#fff),linear-gradient(#b2a8fd,#c7d2fe)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#8678f9] text-xl font-semibold"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              className="relative index cursor-pointer bg-[linear-gradient(#fff,#fff),linear-gradient(#b2a8fd,#c7d2fe)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-white transition-[background-size,color] duration-500 hover:bg-[0_2px,100%_2px] hover:text-[#8678f9] text-xl font-semibold"
              download="cv_Angel_Contreras.pdf"
              href="/cv.pdf"
            >
              Curriculum Vitae
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
