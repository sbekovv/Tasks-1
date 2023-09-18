import React, {useContext} from 'react';
import AddHeader from "./components/addHeader/AddHeader";
import AddBlock from "./components/addBlock/AddBlock";
import {ExpenceContext} from "./store";
import About from "./components/about/About";
import Header from "./components/header/Header";
import SignIn from "./components/SIgnIn/signIn";

function App() {
    const {changePages} = useContext(ExpenceContext)
    return (
        <div className='container'>
            <Header/>
            {changePages.signIn &&  <SignIn/>}
            {changePages.about && <About/>}
            {changePages.home && <> <AddHeader/>
                <AddBlock/></>}
        </div>
    );
}

export default App;

