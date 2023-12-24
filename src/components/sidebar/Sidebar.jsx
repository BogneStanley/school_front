import { SideItem } from "./SideItem";
import "./style/sidebar.css";
import { sideItems } from "../../components/sidebar/data";

/**
 * Renders the Sidebar component.
 *
 * @return {JSX.Element} The Sidebar component.
 */
export function Sidebar() {
    let itemList = [];
    for (let group of sideItems) {
        itemList.push(<hr key={group.name} />);
        group.items.map((item) =>
            itemList.push(
                <li key={item.path}>
                    <SideItem item={item} />
                </li>
            )
        );
    }
    return (
        <div className="sidebar">
            <h1 className="brand">QLearning</h1>
            <ul>{itemList}</ul>
            <ConnectedUserInfoBox />
        </div>
    );
}

function ConnectedUserInfoBox() {
    return (
        <div
            style={{
                backgroundColor: "rgb(234,154,73)",
                color: "white",
                width: "100%",
                padding: "10px 0px",
            }}
            className="d-flex flex-row align-items-center position-absolute  bottom-0 p-3"
        >
            <div className="me-2">
                <img
                    src="assets/omb4.jpg"
                    className="rounded-circle"
                    width="30"
                    alt=""
                />
            </div>
            <div className="me-2" style={{ lineHeight: "1", fontSize: "14px" }}>
                <span style={{ fontWeight: "bold" }}>FOTSO</span>
                <br />
                <span style={{ fontSize: "12px", color: "rgb(136,72,7)" }}>
                    699011342
                </span>
            </div>
            <div className="align-middle">
                <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{
                        borderRadius: "20px",
                        fontSize: "12px",
                        backgroundColor: "rgb(243,189,134)",
                        borderColor: "rgb(243,189,134)",
                        color: "rgb(136,72,7)",
                    }}
                >
                    se déconnecter
                </button>
            </div>
        </div>
    );
}
