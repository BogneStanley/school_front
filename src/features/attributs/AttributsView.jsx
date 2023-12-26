import { ViewTitle } from "../../components/title/ViewTitle";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { textTroncate } from "../../utils/helpers";
import PropTypes from 'prop-types';

/**
 * Renders the AttributsView component.
 *
 * @return {ReactElement} The rendered AttributsView component.
 */
export function AttributsView() {
    return <>
        <div className="p-3">
            <ViewTitle title='Attributs' />
            <div className="row">
                <div className="col-lg-4">
                    <AttributsItem label="Modules" >
                        <AttributsItemTable label="Module" >
                            <AttributeItemTableRow label="Vibration et propro" />
                            <AttributeItemTableRow label="Ensemble dans IR" />
                            <AttributeItemTableRow label="Module 3" />
                        </AttributsItemTable>
                    </AttributsItem>
                </div>
                <div className="col-lg-4">
                    <AttributsItem label="Leçons" >
                        <AttributsItemTable label="Lecons" >
                            <AttributeItemTableRow label="Module 1" />
                            <AttributeItemTableRow label="Module 2" />
                            <AttributeItemTableRow label="Module 3" />
                        </AttributsItemTable>
                    </AttributsItem>
                </div>
                <div className="col-lg-4">
                    <AttributsItem label="Matières" >
                        <AttributsItemTable label="Matieres" >
                            <AttributeItemTableRow label="Module 1" />
                            <AttributeItemTableRow label="Module 2" />
                            <AttributeItemTableRow label="Module 3" />
                        </AttributsItemTable>
                    </AttributsItem>
                </div>
            </div>
        </div>
    </>;
}



/**
 * Renders an item with attributes.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.label - The label for the item.
 * @param {ReactNode} props.children - The children nodes to render.
 * @return {ReactNode} - The rendered item with attributes.
 */
function AttributsItem({ label, children }) {
    return <>
        <h3 className="fw-bold fst-italic px-2 py-1" style={{ color: "rgb(0,36,89)", backgroundColor: "rgb(214,223,236)" }}>{label}</h3>
        {children}
    </>
}



/**
 * Renders an item table with attributes.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label for the table.
 * @param {React.Node} props.children - The children components to render inside the table.
 * @return {React.Element} The rendered item table component.
 */
function AttributsItemTable({ label, children }) {
    return <div>
        <div className="row">
            <div className="col-7">
                <button className="btn text-nowrap">
                    <FaPlus className="rounded" style={{ color: "rgb(0,36,89)", backgroundColor: "rgb(214,223,236)", padding: "5px", fontSize: "30px" }} />
                    <span className="align-middle ps-2 fw-bold fs-6 text-nowrap">New {label}</span>
                </button>
            </div>
            <div className="col-5">
                <input type="text" className="form-control" />
            </div>
        </div>
        <div className="w-100 ">
            <table className="w-100 table table-striped table-borderless">
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    </div>
}



/**
 * Renders a table row for an attribute item.
 *
 * @param {Object} props - The props object containing the label.
 * @param {string} props.label - The label for the attribute item.
 * @return {JSX.Element} - The table row component.
 */
function AttributeItemTableRow({ label }) {
    return <tr className="w-100">
        <td><span className="fw-bold"><input type="checkbox" className="form-check-input" style={{ width: "25px", height: "20px", accentColor: "rgb(0,36,89)", filter: "hue-rotate(170deg)" }} name="" id="" /></span></td>
        <td><span className="fw-bold text-nowrap align-middle">{textTroncate(label, 16)}</span></td>
        <td ><div className="fw-bold  text-end w-100"><button className="btn px-3 py-1 btn-outline-primary rounded-5"><FaEdit /> <span className="align-middle ps-2">Edit</span></button></div></td>
    </tr>
}



// ...

AttributeItemTableRow.propTypes = {
    label: PropTypes.string.isRequired,
};
AttributsItemTable.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
AttributsItem.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};