import React, {useContext, useState} from "react";
import styled from "styled-components";
import {ExpenceContext} from "../../store";

function Items() {
    const {data, editHandler} = useContext(ExpenceContext)
    const [hiddenBlocks, setHiddenBlocks] = useState([]);
    const [isHidden, setIsHidden] = useState(false)
    const handleDeleteClicks = () => {
        setIsHidden(true)
    }

    const handleDeleteClick = (itemId) => {
        setHiddenBlocks([...hiddenBlocks, itemId]);
    };

    return (
        <ItemsStyle>
            <div>
                {!isHidden && (
                    <div className="card">
                        <div className="data">2023 01 11</div>
                        <p>Alpen Gold</p>
                        <span className="card-btn">
             <button className="forms-btn1" type="button"
                     onClick={handleDeleteClicks}><ion-icon name="trash-outline"></ion-icon></button>
                             <button className="forms-btn1"><ion-icon name="sync-outline"></ion-icon> </button>
           </span>
                        <div className="price">$30</div>
                    </div>
                )}
            </div>

            <div>
                {data.map((item) => {
                    if (!hiddenBlocks.includes(item.id)) {
                        return (
                            <div className="card" key={item.id}>
                                <div className="data">{item.data}</div>
                                <p> {item.title}</p>
                                <span className="card-btn">
                         <button className="forms-btn1"
                                 type="button"
                                 onClick={() => handleDeleteClick(item.id)}><ion-icon name="trash-outline"></ion-icon></button>
                                     <button onClick={() => editHandler(item)} className="forms-btn1"><ion-icon name="sync-outline"></ion-icon> </button>
                        </span>
                                <div className="price">${item.number}</div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </ItemsStyle>
    );
}

export default Items;


const ItemsStyle = styled.div`
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 748px;
    height: 104px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #4b4b4b;
    padding: 12px 16px;
    margin: 16px 0;
  }

  .data {
    width: 82px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #fff;
    background: #2a2a2a;
    color: #fff;
    font-size: 20px;
    text-align: center;
    padding: 8px 23px;
    font-weight: 700;
  }

  .card p {
    position: relative;
    z-index: 99;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin: -40px 460px 0 0;
  }

  .price {
    position: relative;
    display: inline-flex;
    padding: 10px 18px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    background: #40005d;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
  }

  .card-btn {
    display: flex;
    margin-left: -200px;
  }

  .forms-btn1 {
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 10px;
    border-radius: 10px;
    background: #4A026B;
    border: none;
    cursor: pointer;
    margin: 0 10px;
  }

  .forms-btn1:hover {
    background: #600A87;
  }

  .forms-btn1:active {
    background: #520B73;
  }
`;