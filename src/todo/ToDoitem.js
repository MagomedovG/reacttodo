import React, { useState } from 'react';

import PropTypes from "prop-types";


const styles = {
    li: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border:'1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    button:{
        position:'absolute',
        // top:'50%',
        right:'-50px'
    }

}
function ToDoitem({todo, index, onChange, onRemove, onRed }) {
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    const handleRemove = () => {
        onRemove(todo.id);
    };
    const handleRed = () => {
        onRed(todo);
    };
    const [isred, setIsRed] = useState(false);
    // const handleisred = function () {
    //     if (isred === true){
    //         setIsRed(false)
    //     } else {
    //         setIsred(true)
    //     }
    //     console.log(isred)
    // }
    const handleisred = () => {
        setIsRed(!isred);
    };
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                    type="checkbox"
                    checked={todo.completed}
                />

                {/* <strong>{index+1}</strong> */}
                &nbsp;
                {isred===true ? (
                    <input value={todo.title} />

                ) : (
                    <span>{todo.title}</span>
                )}
            </span>
            {/* <button style={styles.button} onClick={handleisred}>ред</button> */}
            {/* <button onClick={handleRed}>взять</button> */}
            <button className='rm' onClick={handleRemove}>&times;</button>
        </li>
    )
}
ToDoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default  ToDoitem
