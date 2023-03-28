import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {TreeDots} from "../components/tools/MyLoader";
import ApiProvider from "../providers/core-api/ApiProvider";

const PaymentCallback = () => {
    const location = useLocation()
    const router = useNavigate()
    const [status, setStatus] = useState<any>({status: "success", text: "Paiement effectué avec succès"})
    const [loading, setLoading] = useState<boolean>(true)


    function validatePayment(){

        let identifier = localStorage.getItem("identifier")
        if(!identifier) return  router("/pay")

        console.log("location ", location,  " identifier  ",identifier)
        let consent = location.search.split("=")[1]
        consent = consent.split("&")[0]
        console.log("location ", consent )


        let data ={
            consent ,
            identifier
        }

        console.log("data ", data)
        ApiProvider.validatePayment(data)
            .then((res)=>{
                setLoading(false)
            console.log("res ", res)
                localStorage.removeItem("identifier")
        })
            .catch((err)=>{
            console.log("err ", err)
                setLoading(false)
                setStatus({status: "danger", text: "Paiement échoué"})
                localStorage.removeItem("identifier")
        })
    }

    useEffect(()=>{
        validatePayment()
    }, [])


    return (
        <div>

            <div className="row justify-content-center mt-5">
                <div className="col-6 mt-5">
                    <div className="row card">
                        <br/>
                        <br/>
                        <br/>

                        {loading ?

                            <>
                                <TreeDots width={"30"} height={"20"} color={"#000"} />
                                <br/>
                                Traitement de votre paiement en cours...
                            </>

                            :
                            <>
                                <br/>
                                    <h1 className={`text-${status.status}`} > {status.text} </h1>
                                <br/>
                            </>
                        }

                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCallback;