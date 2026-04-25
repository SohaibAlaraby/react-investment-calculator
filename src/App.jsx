import Input from "./components/Input.jsx";
import InputGroup from "./components/InputGroup.jsx";
function App() {
  return (
    <section id="user-input" >
      <InputGroup >
        <Input id="initial-investment" defaultValue={10000} title="initial investment"/>
        <Input id="annual-investment" defaultValue={1200} title="annual investment"/>
      </InputGroup>
      
      <InputGroup >
        <Input id="expected-return" defaultValue={6} title="expected return"/>
        <Input id="duration" defaultValue={10} title="duration"/>
      </InputGroup>
      
    </section>
  )
}

export default App
