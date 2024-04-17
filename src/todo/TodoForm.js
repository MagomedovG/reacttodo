import React, { useEffect, useState} from "react";
import PropTypes from "prop-types";
const styles = {
    input:{
        padding: '.5rem 1rem',
        border:'1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
        width: '94%'

    },
    button:{
        padding: '.5rem 1rem',
        borderRadius: '6px',
        border:'1px solid blue',
        background:'aqua'
    },
    div:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection:"column",
        marginBottom: '.5rem',

    }


}
export default function TodoForm({todo, todos, editingTodo}){
    const [value, setValue] = React.useState({id:'', completed:false, title:"1"})
    let count = 2;
    useEffect(() => {
        if (editingTodo) {
            setValue({ ...value, title: editingTodo.title });
        }
    }, [editingTodo]);
    console.log(editingTodo)
    // value.title=editingTodo.title
    const handleInputChange = (event) => {
        setValue({ ...value, title: event.target.value, id:todos.length+count});
        console.log(value)
    };
    const handleButtonClick = () => {
        todo(value)
        count+=1

        setTimeout(() => {
            console.log('Добавить:', value.id);
        }, 500)
    };
    return(
        <div style={styles.div}>
            <input type="text" className='form-input' value={value.title} onChange={handleInputChange} style={styles.input}/>
            <button style={styles.button} onClick={handleButtonClick}>Добавить</button>
        </div>
    )
}


