import './App.css'
import { Greeting } from './Greeting'
import { Food } from './Food'
import { Button } from './Button'

function App() {
  return (
    <>
      <Greeting />
      <Food />
      <hr />
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </>
  )
}

export default App
