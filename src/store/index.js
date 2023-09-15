import {createContext, useReducer, useState} from "react";

export const ExpenceContext = createContext()
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
        case  "EDIT_FIELD":
            return {...state, title: action.payload.title, number: action.payload.number, data: action.payload.data}
        default:
            return state;
    }
}


export const ExpenceContextPorvider = ({children}) => {
const initialState = {
    isOpen:  false,
    title: '',
    number:  '',
    data:  '',
}
    const [formData, dispatch] = useReducer(formReducer, initialState);
    const [data, setData] = useState([])
    const addNewData = (newData) => {
        setData([...data, newData])
    }

     const editHandler = (newData) => {
     dispatch({type: "EDIT_FIELD", payload: newData})
     }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FIELD', fieldName: name, value });
    };

    const inlainHeader = () => {
            dispatch({ type: 'CLOSE_FORM' });
    }

    const form = () => {
        dispatch({ type: 'OPEN_FORM' });
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
        dispatch({ type: 'OPEN_FORM' });
    };


    const state = {
        dispatch,
        data,
        inlainSubmit,
        inlainHeader,
        form,
        handleInputChange,
        editHandler,
        formData,
        addNewData,
    }

    return (<ExpenceContext.Provider value={state}>
        {children}
    </ExpenceContext.Provider>)
}