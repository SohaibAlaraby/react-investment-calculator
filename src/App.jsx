import { useState } from "react";

import Input from "./components/Input.jsx";
import InputGroup from "./components/InputGroup.jsx";
import TableHeader from "./components/TableHeader.jsx";
import TableBody from "./components/TableBody.jsx";

const initialInvestmentObj = {
  initialInvestment: 10000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10,
}
function App() {
  const tableTitles=["year","investment value","interest(year)","total interest","invested capital"];
  const investmentKeyInfo = Object.keys(initialInvestmentObj);

  const [userInvestment,setUserInvestment] = useState(initialInvestmentObj);
  function handleInputChange(key, value){
    value = Number(value) || 0;
    if(value < 0) {
      return;  
    }
    setUserInvestment((prevInvestment) => {
      return ({
        ...prevInvestment,
        [key]: value
      });
    });
  }
  return (
    <>
    <section id="user-input" className="input-container">
      <InputGroup >
        <Input getUserInput={handleInputChange} id={investmentKeyInfo[0]} value={userInvestment[investmentKeyInfo[0]]} title="initial investment"/>
        <Input getUserInput={handleInputChange} id={investmentKeyInfo[1]} value={userInvestment[investmentKeyInfo[1]]} title="annual investment"/>
      </InputGroup>
      
      <InputGroup >
        <Input getUserInput={handleInputChange} id={investmentKeyInfo[2]} value={userInvestment[investmentKeyInfo[2]]} title="expected return"/>
        <Input getUserInput={handleInputChange} id={investmentKeyInfo[3]} value={userInvestment[investmentKeyInfo[3]]} title="duration"/>
      </InputGroup>
    </section>
    <table id="result">
      <TableHeader content={tableTitles}/>
      <TableBody investmentInfo={userInvestment}/>
    </table>

    </>
    
  )
}

export default App
