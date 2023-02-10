const Icon = (props) => {
  return (
    <a href={props.href}>
      <img src={props.src} alt={props.alt} className="w-9" />
    </a>
  );
};

export default Icon;
