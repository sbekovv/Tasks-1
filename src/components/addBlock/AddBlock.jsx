import React from 'react';
import Items from "../addItems/Items";
import styled from "styled-components";


const AddBlockStyle = styled.div`

  .block {
    width: 780px;
    height: 100%;
    border-radius: 12px;
    background: #1F1F1F;
  }

  .block-select {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .block-items {
    padding: 90px 16px 28px 16px;
  }

  .block p {
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
    padding: 40px 0 0 16px;
  }

  .block select {
    color: #222;
    font-size: 16px;
    font-weight: 600;
    width: 124px;
    height: 43px;
    border-radius: 6px;
    background: #FFF;
    outline: none;
    margin: 28px 16px 0 0;
  }
`

function AddBlock({data}) {
    return (
        <AddBlockStyle>
            <div className='block'>
                <div className='block-select'>
                    <p>Фильтр по году</p>
                    <select>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                    </select>
                </div>
               <div className="block-items">
                   <Items data={data}/>
               </div>
            </div>
        </AddBlockStyle>
    );
}

export default AddBlock;