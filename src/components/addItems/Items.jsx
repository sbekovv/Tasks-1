import React from 'react';
import styled from "styled-components";

const ItemsStyle = styled.div`
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 748px;
    height: 104px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #4B4B4B;
    padding: 12px 16px;
    margin: 16px 0;
  }

  .data{
    width: 82px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #FFF;
    background: #2A2A2A;
    color: #FFF;
    font-size: 20px;
    text-align: center;
    padding: 8px 23px;
    font-weight: 700;
  }

  .card p {
    position: relative;
    z-index: 99;
    color: #FFF;
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
    border: 1px solid #FFF;
    background: #40005D;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
  }
`
function Items(props) {
    return (
        <ItemsStyle>

            <div className="card">
                <div className="data">2023 01 11</div>
                <p>Alpen Gold</p>
                <div className="price">
                    $30
                </div>
            </div>

            {props.data.map((item) => {
                return <div className="card" key={item.id}>
                    <div className="data">{item.data}</div>
                    <p> {item.title}</p>
                    <div className="price">
                        ${item.number}
                    </div>
                </div>
            })}
        </ItemsStyle>
    );
}

export default Items;

