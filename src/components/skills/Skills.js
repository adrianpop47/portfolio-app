import monitor from "../../assets/images/monitor.png";
import react from "../../assets/images/react.png";
import aws from "../../assets/images/aws.png";
import SkillBox from "./SkillBox.js";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center h-screen">
      <div className="mt-20 text-white font-workSans lg:text-8xl text-6xl">
        Skills
      </div>
      <div className="flex flex-col md:flex-row mt-10 md:mt-20 mb-auto space-y-3 md:space-x-3 md:space-y-0">
        <SkillBox
          src={monitor}
          alt="Monitor Icon"
          title="Software Development"
          text="I have a Bachelor’s Degree in Computer Science. Experienced in Python
          and JavaScript."
        />
        <SkillBox
          src={react}
          alt="React Icon"
          title="Frontend Dev React"
          text="I am passionate about UI design. I have experience in HTML, CSS, JavaScript, React."
        />
        <SkillBox
          src={aws}
          alt="AWS Icon"
          title="Amazon AWS"
          text="I have experience in deploying and maintaining web apps over Amazon AWS Cloud."
        />
      </div>
    </div>
  );
};

export default Skills;
