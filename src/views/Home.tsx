import React, {useEffect, useState} from 'react';
import MyInputField from "../components/tools/MyInputField";
import MyButton from "../components/tools/MyButton";
import BoxDashboard from "../components/tools/BoxDashboard";
import MyModal from "../components/tools/MyModal";
import {data} from "../utils/datas";
import {useLocation} from "react-router-dom";
import ApiProvider from "../providers/core-api/ApiProvider";
import {showToast} from "../utils/utils";
import {TreeDots} from "../components/tools/MyLoader";

import logo from "../assets/img/kamixlogo.svg"
import {useWindowSize} from "../hooks/hook";
const Home = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [id, setId] = useState<string>("")
    const [loadingAddApp, setLoadingAddApp] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [iban, setIban] = useState<string>("")
    const [banques, setBanques] = useState<any>([])
    const [selectedBanque, setSelectedBanque] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(false)
    let size = useWindowSize();
    const location = useLocation()

    let datas = new Array(100)

    for(let i = 0; i < 100; i++){

        datas[i] =  data
    }

    function openModal(){
        setOpen(!open)
    }

    function onCloseModal(){
        setOpen(false)
    }

    async function handleSave(){

        let identifier = new Date().getTime()


        if(name === "" ||iban ==="") return showToast("error", "Veuillez remplir tous les champs")
        let data = {
            "institution": selectedBanque.id,
            "payerName": name,
            "payerIBAN" :  iban.trim(),
            "identifier": String(identifier),
        }
        setLoadingAddApp(true)
        let response = await ApiProvider.createPayment(data)
            .then((res)=>{
                setLoadingAddApp(false)
                console.log("response ---- ", res)
                localStorage.setItem("identifier", String(identifier))

                let location = res.paymentAuth.data.authorisationUrl
                window.location = location
            })
            .catch((err)=>{
                setLoadingAddApp(false)
                console.log("err ", err)

            })
    }

    async function getBanques(){
        setLoading(true)
        let response = await ApiProvider.getBanks()
        setLoading(false)

        console.log(response)
        setBanques(response.institutions.data)
    }

    function selectBanque(item:any){
        setSelectedBanque(item)
        setOpen(true)
        console.log("item ", item)
    }

    function validateIBAN(iban:string) {
        const regex = /^(AD|AT|BE|BG|CH|CY|CZ|DE|DK|EE|ES|FI|FR|GB|GI|GR|HR|HU|IE|IS|IT|LT|LU|LV|MC|MT|NL|NO|PL|PT|RO|SE|SI|SK)[0-9]{2}(?:[ ]?[0-9]{4}){3}$/;
        return regex.test(iban.replace(/\s/g, ''));
    }

    useEffect(()=>{
        getBanques()
        console.log("location ", location)
    }, [])

    return (
            <div className="home">

                        {/*<div className="for-home">*/}
                <MyModal open={open} size={size.width > 900 ? 50 : 100} title={`Effectuer un paiement sur ${selectedBanque?.name?.toUpperCase()}`} onClose={onCloseModal} closeOnclickOutside={false}>
                    <div>
                        {/*<MyInputField type="text" label="Entrez un identifiant (vous devez conserver cet identifiant)" value={id} onChange={(value:string)=> setId(value) } />*/}
                        <MyInputField type="text" label="Entrez votre nom" value={name} onChange={(value:string)=> setName(value) } />
                        <MyInputField type="text" label="Entrez votre iban" value={iban} onChange={(value:string)=> setIban(value) } />
                        <br/>
                        <MyButton label="Autoriser paiement" type="success" loading={loadingAddApp} onClick={handleSave}/>
                    </div>
                </MyModal>
                        <div className="row justify-content-center">
                            <div className="col-6 mt-5">
                                <img src={logo} alt="logo" height={100} width={200} />
                            </div>
                        </div>
                    <div className="row justify-content-center mt-5 ">
                        <div className="col-12 col-lg-6 mt-2">

                            {loading ?
                            <>
                                <div className="row justify-content-center mt-5">
                                    <div className="col-6 mt-5">
                                        <div className="row card">
                                            <br/>
                                            <br/>
                                            <br/>
                                                    <TreeDots width={"30"} height={"20"} color={"#000"} />
                                                    <br/>
                                                    Chargement des données veuillez patienter...
                                            <br/>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :

                            <div className="row scroll">
                                {
                                    banques.map((item:any, index:number) => {
                                        return (
                                            <div className="col-sm-6 col-12  col-lg-4  my-2" key={index} onClick={() => selectBanque(item)}>
                                                <BoxDashboard item={item} label="Aujourd'hui" amount={"100" || 0}  count={"23"  || 0} />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            }
                        </div>
                            </div>

                {/*</div>*/}
            </div>

    );
};

export default Home;