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
  const [whosNegative, setWhosNegative] = useState(new Set());
  function handleInputChange(key, value){
    value = Number(value);
    if(value < 0) {
      setWhosNegative((prevNegatives) => new Set(prevNegatives.add(key)) );
      return;  
    }
    setWhosNegative((prevNegatives) => {
      let curNegatives = new Set(prevNegatives);
      curNegatives.delete(key);
      return curNegatives;
    });
    setUserInvestment((prevInvestment) => {
      return ({
        ...prevInvestment,
        [key]: value
      });
    });
  }
  console.log(userInvestment);
  return (
    <>
    <section id="user-input" className="input-container">
      <InputGroup >
        <Input getUserInput={handleInputChange} id={investmentKeyInfo[0]} defaultValue={initialInvestmentObj[investmentKeyInfo[0]]} title="initial investment" negativeList={whosNegative}/>
        <Input getUserInput={handleInputChange} id={investmentKeyInfo[1]} defaultValue={initialInvestmentObj[investmentKeyInfo[1]]} title="annual investment" negativeList={whosNegative}/>
      </InputGroup>
      
      <InputGroup >
        <Input getUserInput={handleInputChange} id={investmentKeyInfo[2]} defaultValue={initialInvestmentObj[investmentKeyInfo[2]]} title="expected return" negativeList={whosNegative}/>
        <Input getUserInput={handleInputChange} id={investmentKeyInfo[3]} defaultValue={initialInvestmentObj[investmentKeyInfo[3]]} title="duration" negativeList={whosNegative}/>
      </InputGroup>
    </section>
    {(whosNegative.size === 0) && <table id="result">
      <TableHeader content={tableTitles}/>
      <TableBody investmentInfo={userInvestment}/>
    </table>}
    {(whosNegative.size > 0) && <p className="center">No logs availabe</p>}

    </>
    
  )
}

export default App
