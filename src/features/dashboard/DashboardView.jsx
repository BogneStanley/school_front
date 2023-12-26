import { ActifUsersPercentageCard } from '../../components/card/ActifUsersPercentageCard';
import { TeachersDashboardListCard } from '../../components/card/TeachersDashboardListCard';
import { UserCountCard } from '../../components/card/UserCountCard';
import { UsersDashboardListCard } from '../../components/card/UsersDashboardListCard';
import { ViewTitle } from '../../components/title/ViewTitle';

/**
 * Renders the dashboard view.
 *
 * @return {JSX.Element} The rendered dashboard view.
 */
export function DashboardView() {
    return <>
        <div className="p-3 container">
            <ViewTitle title='Dashboard' />
            <div className='row p-3'>
                <div className='col-md-8 row'>
                    <div className='col-md-5' >
                        <UserCountCard />
                    </div>
                    <div className='col-md-7 '>
                        <UsersDashboardListCard />
                    </div>
                    <div className='col-md-12 mt-3'>
                        <ActifUsersPercentageCard />
                    </div>
                </div>
                <div className='col-md-4'>
                    <TeachersDashboardListCard />
                </div>
            </div>

        </div>
    </>;
}
