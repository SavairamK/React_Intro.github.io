import './App.css';
import Hello from './component/Hello';
import AboutMe from './component/AboutMe';
import Education from './component/Education';
import TechnicalSkills from './component/TechnicalSkils';
import Projects from './component/Projects';
import Goals from './component/Goals';
import MyHobbies from './component/MyHobbies';
import MyPhoto from './component/MyPhoto';

function App() {
  return (

    <>
      <Hello />
      <MyPhoto />
      <AboutMe />
      <Education />
      <TechnicalSkills />
      <Projects />
      <Goals />
      <MyHobbies />
    </>
  
  );
}

export default App;
