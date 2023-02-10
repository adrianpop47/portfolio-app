const NavLink = (props) => {
    return(<a href={props.href} className="hover:text-gray-400" onClick={props.onClick}>{props.text}</a>);
}

export default NavLink;