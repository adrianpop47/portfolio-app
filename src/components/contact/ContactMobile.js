const ContactMobile = (props) => {
  return (
    <div id="contact-mobile"  className={`${props.className}`}>
      <div className="flex flex-col  space-y-4">
        <div className="font-workSans text-lg uppercase">
          <p>Available for</p>
          <p>freelance oportunities</p>
        </div>
        <div className="font-workSans text-sm">
          <p>Have in mind an interesting project</p>
          <p>that you need help with?</p>
          <p>Feel free to send me an email.</p>
        </div>
        <a href="mailto:contact@popadrian.com" className="font-workSans font-bold text-lg">contact@popadrian.com</a>
      </div>
      <div className="font-workSans text-sm ml-auto mt-auto flex flex-col text-right space-y-2">
        <a href="#home">HOME</a>
        <a href="#skills">SKILLS</a>
        {/* <a href="#">WORK</a> */}
        <a href="#contact-mobile">CONTACT</a>
      </div>
    </div>
  );
};

export default ContactMobile;
