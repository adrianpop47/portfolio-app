const ContactDesktop = (props) => {
  return (
    <div id="contact-desktop" className={`${props.className}`}>
      <div className="flex flex-col space-y-6">
        <div className=" font-workSans lg:text-4xl text-2xl uppercase underline">
          Available for
        </div>
        <div className=" font-workSans lg:text-4xl text-2xl uppercase underline">
          freelance oportunities
        </div>
        <div className="font-workSans lg:text-lg text-md">
          <p>Have in mind an interesting project</p>
          <p>that you need help with?</p>
          <p>Feel free to send me an email.</p>
        </div>
        <a href="mailto:contact@popadrian.com" className="font-workSans font-bold text-2xl">contact@popadrian.com</a>
      </div>
      <div className="font-workSans ml-auto mt-auto flex flex-col text-right space-y-3">
        <a href="#home">HOME</a>
        <a href="#skills">SKILLS</a>
        {/* <a href="#">WORK</a> */}
        <a href="#contact-desktop">CONTACT</a>
      </div>
    </div>
  );
};

export default ContactDesktop;
