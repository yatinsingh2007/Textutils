import './App.css';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
function App() {
  return (
  <>
    <Navbar title="Textutils" address="About"/>
    <div className="container my-3">
      <Textform purpose = "Enter The Text To Analyze"/>
    </div>
  </>
  );
}
export default App;
