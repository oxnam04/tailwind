import './App.css';
import Header from "./Header";
import Hero from "./hero";
import Card from "./card";
import Complete from "./complete";
import Person from "./Person";
import Footer from "./footer";
import {useState} from "react";

function App() {
    const [dark,setDark] = useState(false)
    return (
        <div style={{
            background: dark ? "red" : "darkblue"
        }} className="App">
            <Header dark={dark} setDark={setDark}/>
            <Hero />
            <Card />
            <Complete/>
            <Person />
            <Footer />
        </div>
    );
}

export default App;
