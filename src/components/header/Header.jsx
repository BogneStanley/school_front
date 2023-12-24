import { FaSearch } from "@react-icons/all-files/fa/FaSearch"

/**
 * Render the header component.
 *
 * @return {JSX.Element} The rendered header component.
 */
export function Header() {
    return <div className="d-flex p-2 bg-light flex-row justify-content-between align-items-center" style={{ width: "100%", }}>
        <div className="d-flex flex-row align-items-center px-3" style={{ borderRight: "1px solid rgba(66,115,188,0.2)", }}>
            <div className="d-flex flex-row align-items-center pe-3">
                <div className="pe-1" style={{ textAlign: "end", lineHeight: "1" }}><span style={{ color: "rgb(66,115,188)" }}>Lundi</span><br /><span style={{ fontSize: "16px", fontWeight: "bolder", color: "rgb(0,36,89)" }}>Février</span></div>
                <div><span style={{ fontSize: "45px", fontFamily: "courier", fontWeight: "bolder", color: "rgb(234,154,73)" }}>03</span></div>
            </div>
            <div>
                <div className=" border rounded px-2" style={{ backgroundColor: "rgb(214,223,236)" }}>
                    19:20
                </div>
            </div>
        </div>
        <div className="d-flex flex-row align-items-center" >
            <div className="input-group ">
                <input type="text" className="form-control border-end-0" placeholder="Rechercher un élément" aria-label="Rechercher un élément" aria-describedby="basic-addon2" />
                <span className="input-group-text border-start-0 bg-white" id="basic-addon2"><FaSearch /></span>
            </div>
        </div>
    </div>;
}