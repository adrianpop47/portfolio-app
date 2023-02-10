const SkillBox = (props) => {
  return (
    <div className="xl:p-10 flex shadow-lg shadow-gray-800 flex-col border rounded-xl border-white p-5 md:w-1/3 lg:h-96 h-40 md:h-60 lg:mb-10">
      <div className="flex items-center space-x-4">
        <img className="w-10 lg:w-14" src={props.src} alt={props.alt} />
        <div className="font-inter font-black lg:text-2xl text-xl">
          {props.title}
        </div>
      </div>
      <div className="flex space-x-5 my-auto xl:p-10 p-5 mx-auto">
        <div className="lg:flex flex-col hidden">
          <div className="text-gray-600 relative -top-2">&lt;h3&gt;</div>
          <div className="mx-auto border-l border-gray-600 relative lg:h-20"></div>
          <div className="text-gray-600 relative -bottom-2">&lt;h3&gt;</div>
        </div>
        <p className="my-auto font-workSans font-normal text-sm">{props.text}</p>
      </div>
    </div>
  );
};

export default SkillBox;
