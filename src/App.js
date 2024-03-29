import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
    <Navbar/>
    <div className="container my-3">
    <h1>Enter the text to analyze below</h1>
    <TextForm/>
    </div>
    </>
  );
}

export default App;
