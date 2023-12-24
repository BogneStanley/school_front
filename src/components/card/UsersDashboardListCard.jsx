import PropTypes from 'prop-types';
import { ReloadCard } from "./ReloadCard";


/**
 * Renders a user count card.
 *
 * @return {JSX.Element} The user count card component.
 */
export function UsersDashboardListCard() {
    return <div className=" card shadow border-0 px-4" >
        <div className='bg-white card-header fw-bold'>
            Infos sur Utilisateurs
        </div>
        <div className="card-body">
            <table className='w-100'>
                <tbody className='w-100'>
                    <UserInfos name="John Doe" classroom="3A" phone="0612345678" />
                    <UserInfos name="Jane Doe" classroom="3B" phone="0612345678" />
                    <UserInfos name="Jack Doe" classroom="3C" phone="0612345678" />
                    <UserInfos name="Jill Doe" classroom="3D" phone="0612345678" />
                    <UserInfos name="Jim Doe" classroom="3E" phone="0612345678" />

                </tbody>
            </table>
        </div>
        <div className="card-footer bg-white">
            <ReloadCard />
        </div>
    </div>
}

UserInfos.propTypes = {
    name: PropTypes.string.isRequired,
    classroom: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
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
function UserInfos({ name, classroom, phone }) {
    return <tr className='w-100' style={{ fontSize: "15px", fontStyle: "italic" }}>
        <td style={{ fontWeight: "bolder" }}>{name}</td>
        <td className='text-end ps-2' style={{ fontWeight: "bolder", color: "gray" }}>{classroom}</td>
        <td className='text-end ps-2' style={{ fontWeight: "bolder", color: "rgb(25,86,176)" }}>{phone}</td>
    </tr>
}

/**
 * Render a reload card component.
 *
 * @return {JSX.Element} The reload card component.
 */
