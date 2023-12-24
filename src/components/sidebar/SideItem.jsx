import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./style/sideitem.css"
import { useState } from "react";

SideItem.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.element,
    }).isRequired,
};

/**
 * Renders a side item for the navigation.
 *
 * @param {object} item - The item object containing the path, icon, and name of the side item.
 * @return {JSX.Element} - The rendered side item component.
 */
export function SideItem({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <NavLink onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} to={item.path} className={"nav-link align-middle" + (isHovered ? " active" : "")}>
            <span
                className="align-middle icon"
            >
                {item.icon}
            </span>
            <span className="align-middle">{item.name}</span>
        </NavLink>
    );
}
