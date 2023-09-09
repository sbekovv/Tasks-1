import React, {useState} from 'react';
import AddHeader from "./components/addHeader/AddHeader";
import AddBlock from "./components/addBlock/AddBlock";

function App() {
    const [data, setData] = useState([])
    const addNewData = (newData) => {
        setData([...data, newData])
    }
    return (
        <div className='container'>
            <AddHeader addNewData={addNewData}/>
            <AddBlock data={data}/>
        </div>
    );
}

export default App;

