import React, {useContext} from 'react';
import styled from "styled-components";
import {ExpenceContext} from "../../store";


function Header() {
const {handlePageChange} = useContext(ExpenceContext)
    return (
        <div>
            <Hederss>
                <div className="headers">
                    <h1>LOGO</h1>
                    <div>
                        <button onClick={() => handlePageChange(1)} className="headers-btn1">Sign-IN</button>
                        <button onClick={ () => handlePageChange(2)} className="headers-btn1">About</button>
                        <button onClick={() => handlePageChange(3)} className="headers-btn1">Home</button>
                    </div>
                </div>
            </Hederss>
        </div>
    );
}

export default Header;

const Hederss = styled.div`
  .headers {
    width: 100%;
    height: 80px;
    background: gold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
  }

  .headers-btn1 {
    border: 2px solid #6264;
    cursor: pointer;
    padding: 10px 20px;
    margin-left: 14px;
    border-radius: 6px;
    background: #6264;
    color: #ffff;
    font-size: 20px;
  }

  .headers-btn1:hover {
    background: rgba(215, 22, 215, 0.27);
  }

  .headers-btn1:active {
    background: #6264;
  }
`