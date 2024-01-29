import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import React, { useState } from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("#bdcee8");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toogleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "sucess");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042358";
      showAlert("Dark Mode has been Enabled", "sucess");
      document.title = "TextUtils - Dark Mode";
    }
    // setInterval(() => {
    //   document.title = "TextUtils is Amazing Mode";
    // }, 2000);
    // setInterval(() => {
    //   document.title = "Install TextUtils Now";
    // }, 1500);
  };

  const changeBackGroundColor = (event) => {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
    setBtnColor(event.target.value);
    setMode("dark");
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        logo="TextUtils"
        about="AboutTextUtils"
        mode={mode}
        toogleMode={toogleMode}
        changeBackGroundColor={changeBackGroundColor}
      />
      <Alert alert={alert} />

      {/* excat is used 
/user -> component1
/user/home -> -> component2 */}
      {/*
             <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextForms
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
                btnColor={btnColor}
              />
            }
          />
        </Routes>
        */}
      {/* </Router> */}
      <TextForms
        heading="Enter the text to analyze below"
        mode={mode}
        showAlert={showAlert}
        btnColor={btnColor}
      />
    </>
  );
}

export default App;
