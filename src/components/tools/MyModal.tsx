import React, {useState} from 'react';

const MyModal = (props:any) => {
        const {open, size,title, closeOnclickOutside} = props;

    const [scal, setScal] = useState("")

    function handleModel(){

    }

    function onClose(){
        props.onClose()
    }

    function scale(e:any){

        if(!closeOnclickOutside) {
        setScal("scaleModal")

        setTimeout(()=>{
            setScal("")
        },200)

        }else {
            onClose()
        }
    }

    function blockPropagation(e:any){
        e.stopPropagation()
    }

    return (
        <div className="mymodal">

            {open &&
                <div id="myModal" className="modal" onClick={scale} >
                    <div className={`modal-content ${scal} w-${size || 50}`} onClick={blockPropagation}>
                        <span className="close" onClick={onClose}>&times;</span>
                        <p>{title}</p>
                        <br/>
                        <hr className="success" />
                        <br/>
                        {props.children}
                    <br/>
                    <br/>
                    <br/>
                    </div>

                </div>
            }

        </div>
    );
};

export default MyModal;