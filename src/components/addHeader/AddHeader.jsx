import React, {useReducer} from 'react';
import styled from "styled-components";

const HeaderStyle = styled.div`
  .item {
    width: 780px;
    height: 91px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #AD9BE9;
    margin: 28px 0;
  }

  .item button {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    padding: 16px 18px;
    width: 228px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #4A026B;
    border: none;
    cursor: pointer;
    margin: 20px 276px;
  }

  .item button:hover {
    background: #600A87;
  }

  .item button:active {
    background: #520B73;
  }

  .forms {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 780px;
    height: 287px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #AD9BE9;
    padding: 55px 40px;
    margin: 0 0 26px 0;
  }

  .form-btn {
    margin-top: 28px;
  }

  .forms label {
    color: #000;
    font-size: 14px;
    font-weight: 500;
  }

  .forms input {
    width: 340px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    outline: none;
    border: none;
    color: #4A026B;
    font-size: 15px;
    caret-color: red;
  }

  .forms input:active {
    border: 1px solid #3F3F3F;
  }

  .forms-outline {
    display: flex;
    flex-direction: column;
  }

  .forms-btn1 {
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    padding: 18px 18px;
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

  .forms-btn button{
    position: relative;
    top: 46px;
    margin-top: 30px;
  }

`
function AddHeader({addNewData}) {
    function formReducer(state, action) {
        switch (action.type) {
            case 'SET_FIELD':
                return { ...state, [action.fieldName]: action.value };
            case 'OPEN_FORM':
                return { ...state, isOpen: true };
            case 'CLOSE_FORM':
                return { ...state, isOpen: false };
            case 'RESET_FORM':
                return { ...state, title: '', number: '', data: '' };
            default:
                return state;
        }
    }

    const initialState = {
        isOpen: false,
        title: '',
        number: '',
        data: '',
    };

    const [formData, dispatch] = useReducer(formReducer, initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FIELD', fieldName: name, value });
    };

    const form = () => {
        dispatch({ type: 'OPEN_FORM' });
    };

    const inlainHeader = () => {
        dispatch({ type: 'CLOSE_FORM' });
        dispatch({ type: 'RESET_FORM' });
    };
    const inlainSubmit = (e) => {
        e.preventDefault();

        if (formData.title.trim() === '' || formData.number === '' || formData.data.trim() === '') {
            alert("Введите текст");
            return;
        }

        const data = {
            title: formData.title,
            data: formData.data,
            number: formData.number,
            id: Math.random()
        };
        addNewData(data);

        dispatch({ type: 'RESET_FORM' });
        dispatch({ type: 'CLOSE_FORM' });
    };


    return (
        <HeaderStyle>
            {formData.isOpen ? <form className='forms' onSubmit={inlainSubmit}>
                <div className='forms-outline'>
                    <label htmlFor="one">Заголовок</label>
                    <input name="title" type="text" id="one" value={formData.title} onChange={handleInputChange}/>
                </div>

                <div className='forms-outline'>
                    <label htmlFor="two">Количество</label>
                    <input name="number" type="number" id="two" value={formData.number} onChange={handleInputChange}/>
                </div>

                <div className='forms-outline'>
                    <label htmlFor="three">Датировать</label>
                    <input name="data" type="date" id="three" value={formData.data} onChange={handleInputChange}/>
                </div>

                <div className='forms-btn'>
                    <button className='forms-btn1' onClick={inlainHeader}>Отмена</button>
                    <button className='forms-btn1' type="submit" >Добавить расходы</button>
                </div>
            </form> : <div className='item'>
                <button onClick={form}>Добавить новый расход</button>
            </div>}

        </HeaderStyle>
    );
}

export default AddHeader;

