import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import AddeurProvider from "./providers/core-api/ApiProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import axios from "axios";
import Login from "./views/auth/Login";
import Dashboard from "./views/Dashboard";
import {useWindowSize} from "./hooks/hook";
import {MyContext} from "./contexts";
import Home from "./views/Home";
import PaymentCallback from "./views/PaymentCallback";


function App() {

    const [toast, setToast] = useState<boolean>(false)

    let size = useWindowSize();

  function testApi() {


  }

  async function  test(){

      await axios({
          method: "post",
          url: `http://localhost:4000/api/v1/user/login`,
          data: {
              email: "marc@gmail.com",
              password: "Test123@"
          },
          withCredentials:true
      })
          .then((res) =>{

              console.log('id user=====> : ',res.data)
          })
          .catch((err) => console.log("no token :", err))
  };

  // useEffect(()=>{
  //
  // }, [size])
    const  handleToast =()=>{
        setToast(!toast)
        console.log("toast  ", toast)
    }

  return (
    <div className="App">
        <div id="snackbar">Some text some message..</div>

        {/*{size.width < 850 &&*/}
        {/*<div className="App-usage">*/}
        {/*    Cette application est disponible un uniquement sur pc pour le moment*/}
        {/*</div>*/}

        {/*}*/}

        <MyContext.Provider value={handleToast}>

        <BrowserRouter>
              <Routes>
                <Route path="/pay" element={<Home />} />
                <Route path="/" element={<PaymentCallback />} />
                <Route path="*" element={<Dashboard />}  />
              </Routes>
        </BrowserRouter>
        </MyContext.Provider>

    </div>
  );
}

export default App;
