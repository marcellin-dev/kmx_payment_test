import React from 'react';
import {IBox} from "../../types/tools.type";




const BoxDashboard = (props:IBox) => {
    const {label,count,amount, item} = props

    return (
        <div className="box">
         <div className="myrow">

             <div>
                 {item?.name}
                 <br/>
                 <br/>
                 {/*<i className="fas fa-money-bill small-icon  success"></i>*/}
                 <img src={item?.media[1]?.source} alt="image" height={50} width={100} />
                 {/*<small className="small-text"> {1} XAF</small>*/}
                 <br/>
                 <br/>
                 {/*<i className="fas fa-arrow-down small-icon success"></i>*/}
                 {/*<i className="fas fa-arrow-up small-icon error"></i>*/}
                {/*<small className="small-text">  {count} Transaction{Number(count) > 1 && 's'} </small>*/}
                 <small className="small-text mt-4 fw-bold"> {1} €</small>
             </div>

             <div>
                 <i className="fas fa-money-bill-wave"></i>
             </div>

         </div>
        </div>
    );
};

export default BoxDashboard;