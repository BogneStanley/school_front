import PropTypes from 'prop-types';
import { ReloadCard } from "./ReloadCard";
import { useState } from 'react';



/**
 * Renders a card component for the teacher's dashboard list.
 *
 * @return {JSX.Element} The rendered card component.
 */
export function TeachersDashboardListCard() {
    return (
        <div className="card shadow border-0 px-4">
            <div className='bg-white card-header fw-bold'>
                {/* Display header text */}
                Infos sur Utilisateurs
            </div>
            <div className="card-body">
                <table className='w-100'>
                    <tbody className='w-100'>
                        {/* Render teacher information */}
                        <TeacherInfos name="John Doe" course="SVT" isChecked />
                        <TeacherInfos name="Jane Doe" course="MATHS" isChecked />
                        <TeacherInfos name="Jack Doe" course="INFO" />
                        <TeacherInfos name="Jill Doe" course="PHYSIC" isChecked />
                        <TeacherInfos name="Jim Doe" course="EPS" />
                    </tbody>
                </table>
            </div>
            <div className="card-footer bg-white">
                {/* Render reload button */}
                <ReloadCard />
            </div>
        </div>
    );
}

TeacherInfos.propTypes = {
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired
};

/**
 * Renders a table row with teacher information.
 *
 * @param {Object} props - The props object.
 * @param {string} props.name - The name of the teacher.
 * @param {string} props.course - The course taught by the teacher.
 * @param {boolean} [props.isChecked=false] - The initial checked state of the checkbox.
 * @return {JSX.Element} The table row element.
 */
function TeacherInfos({ name, course, isChecked = false }) {
    const [innerIsChecked, setInnerIsChecked] = useState(isChecked);

    // Render the table row
    return (
        <tr className='w-100' style={{ fontSize: "15px", fontStyle: "italic" }}>
            <td style={{ fontWeight: "bolder" }}>{name}</td>
            <td className='text-end ps-2' style={{ fontWeight: "bolder", color: "gray" }}>{course}</td>
            <td className='text-end ps-2' style={{ fontWeight: "bolder", color: "rgb(25,86,176)" }}>
                <input type="checkbox" checked={innerIsChecked} onChange={() => setInnerIsChecked(!innerIsChecked)} />
            </td>
        </tr>
    );
}

