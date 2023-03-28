import React, {useState} from 'react';
import BoxDashboard from "../tools/BoxDashboard";
import {IBox} from "../../types/tools.type";

const Header = (props:any) => {
        const {datas} = props;
        const [dataToDisplay, setDataToDisplay] = useState<Array<IBox>>([])



    return (
        <div className="myheader">

             <div className="my-row">
                <BoxDashboard label="Aujourd'hui" amount={datas?.day?.totalDay || 0}  count={datas?.day?.countDay  || 0} />
                <BoxDashboard label="Cette Semaine" amount={datas?.week?.totalWeek || 0} count={datas?.week?.countWeek || 0} />
                <BoxDashboard label="Ce mois" amount={datas?.month?.totalMonth || 0} count={datas?.month?.countMonth || 0} />
                <BoxDashboard label="Cette Année" amount={datas?.year?.totalYear || 0} count={datas?.year?.countYear || 0} />
            </div>

        </div>
    );
};

export default Header;