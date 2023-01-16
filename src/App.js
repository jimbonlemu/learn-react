import logo from './logo.svg';
import './App.css';
import Baten from './components/button';
import Navubar from './components/navbar';
import Footer from './components/footer';

function App() {
  const navText = "Yohanes Pambudi";
  const navHeading = "Navigacok!";

  const clicked = () => {
    return alert("Goblok kepencet!");
  };

  const paragraf = () => {
    return (
      <div>
        <marquee>PLEASE DON'T MAKE ME SAID A BADWORD TO YOU</marquee>
        <h1>JUST TELL ME</h1>
        <h2>JUST SPIT OUT THE STORY</h2>
        <h3>PLEASE DON'T MAKE </h3>
        <h4>BADWORD COME OUT</h4>
        <h5>FROM</h5>
        <h6>MY MOUTH</h6>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navubar navText={navText} navHeading={navHeading} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        HALOH COG 😒!
        <Baten clicked={clicked} />
        <Footer paragraf={paragraf} />

      </header>
    </div>
  );
}

export default App;
