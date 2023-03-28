import React from 'react';
import  {TreeDots} from "./MyLoader";

const MyButton = (props:any) => {

    const {label,loading,onClick, type} = props;

    return (
        <div className="my-btn">

            <button className={`${type || 'success'}`} onClick={onClick}>
                <div className="parent">
                {label}
                    {loading &&
                    <TreeDots width={"30"} height={"20"} color={"#fff"} />
                    }

                </div>
            </button>
        </div>
    );
};

export default MyButton;