import { ReloadCard } from "./ReloadCard"
import PropTypes from 'prop-types';


/**
 * Renders a card component for the teacher's dashboard list.
 *
 * @return {JSX.Element} The rendered card component.
 */
export function ActifUsersPercentageCard() {
    return (
        <div className="card shadow border-0 px-4">
            <div className='bg-white card-header fw-bold'>
                Pourcentage actifs
            </div>
            <div className="card-body row" style={{ fontSize: "14px" }}>
                <div className="col-md-4 ">
                    <h6 style={{ textAlign: "center" }}>Seconde</h6>
                    <div className="w-100 d-flex justify-content-center">
                        <table className="">
                            <ClassPercentageTableRow lable='A4' percentage={50} color={"rgb(234,154,73)"} />
                            <ClassPercentageTableRow lable='C' percentage={50} color={"rgb(234,154,73)"} />
                        </table>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <h6 style={{ textAlign: "center" }}>Première</h6>
                    <div className="w-100 d-flex justify-content-center">
                        <table className="">
                            <ClassPercentageTableRow lable='A4' percentage={50} color={"rgb(81,126,191)"} />
                            <ClassPercentageTableRow lable='C' percentage={50} color={"rgb(81,126,191)"} />
                            <ClassPercentageTableRow lable='' percentage={50} color={"rgb(81,126,191)"} />
                        </table>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <h6 style={{ textAlign: "center" }}>Terminale</h6>
                    <div className="w-100 d-flex justify-content-center">
                        <table className="">
                            <ClassPercentageTableRow lable='A4' percentage={50} color={"rgb(110,89,161)"} />
                            <ClassPercentageTableRow lable='C' percentage={50} color={"rgb(110,89,161)"} />
                            <ClassPercentageTableRow lable='D' percentage={50} color={"rgb(110,89,161)"} />
                        </table>
                    </div>
                </div>
            </div>
            <div className="card-footer bg-white">
                {/* Render reload button */}
                <ReloadCard />
            </div>
        </div>
    );
}

ClassPercentageTableRow.propTypes = {
    lable: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};

function ClassPercentageTableRow({ lable, percentage, color }) {
    return (
        <tr className="">
            <td className="pt-2" style={{ color: color, fontWeight: "bolder", fontStyle: "italic" }}>{lable}</td>
            <td className='text-end ps-2 pt-2'><span className='d-inline-block rounded-5  text-end px-2' style={{ minWidth: "50px", backgroundColor: color, color: "white" }}>{percentage}%</span></td>
        </tr>
    )

}



