import "./App.css";
import Hero from "../components/Hero"
import Skills from "../components/Skills/Skills"
import Contacts from "../components/Contacts/Contact";
import Education from "../components/Education/Education";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMicrophone } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <div className="container">
      {/* <FontAwesomeIcon icon={faMicrophone} /> */}
      <Hero />
      <Education />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
