import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Message  />
      <Counter />
      <Greet name= "Miles" >
        This is a child component
      </Greet>
      <Greet name= "Clark" />
      <Greet name= "Bruce" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Hello />
    </div>
  );
}

export default App;
