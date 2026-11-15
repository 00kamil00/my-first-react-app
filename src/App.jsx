import './App.css'
import { Greeting } from './Greeting'
import { Food } from './Food'
import { Button } from './Button'
import { Animals } from './Animals'
import { TodoList } from './Todo'

function App() {
  return (
    <>
      <Greeting />
      <Food />
      <hr />
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
      <hr />
      <Animals />
      <hr />
      <TodoList />
    </>
  )
}

export default App
