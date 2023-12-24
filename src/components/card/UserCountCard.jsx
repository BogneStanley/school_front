import PropTypes from 'prop-types';
import { ReloadCard } from "./ReloadCard";


/**
 * Renders a user count card.
 *
 * @return {JSX.Element} The user count card component.
 */
export function UserCountCard() {
    return <div className=" card shadow border-0 px-4" >
        <div className='bg-white card-header fw-bold'>
            Utilisateurs
        </div>
        <div className="card-body">
            <table className='w-100'>
                <tbody className='w-100'>
                    <UserCountType label='Connectés' count={100} color={"rgba(18,93,5, 0.7)"} />
                    <UserCountType label='Actif' count={50} color={"rgba(66,115,188, 0.7)"} />
                    <UserCountType label='Non Actif' count={50} color={"rgba(24,14,73, 0.7)"} />

                </tbody>
            </table>
            <br /><br />
            <div className="w-100 rounded-5 px-3 py-1 justify-content-between d-flex" style={{ border: "1px solid rgb(181,93,5)", color: "rgb(181,93,5)" }}>
                <div>Total</div>
                <div className="fw-bold ">200</div>
            </div>
        </div>
        <div className="card-footer bg-white">
            <ReloadCard />
        </div>
    </div>
}

UserCountType.propTypes = {
    label: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

/**
 * Renders a table row with a label, count, and color.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label to display.
 * @param {number} props.count - The count to display.
 * @param {string} props.color - The color of the label and count.
 * @return {JSX.Element} The table row element.
 */
function UserCountType({ label, count, color }) {
    return <tr className='w-100'>
        <td style={{ color: color }}>{label}</td>
        <td className='text-end ps-2'><span className='d-inline-block rounded-5 w-100 text-end px-3' style={{ minWidth: "50px", backgroundColor: color, color: "white" }}>{count}</span> </td>
    </tr>
}

/**
 * Render a reload card component.
 *
 * @return {JSX.Element} The reload card component.
 */
