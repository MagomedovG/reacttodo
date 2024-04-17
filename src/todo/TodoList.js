import React from "react";
import PropTypes from "prop-types";
import ToDoitem from "./ToDoitem";
const styles = {
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0'
    }
}
function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => {
                return <ToDoitem onRed={props.onRed} onRemove={props.onRemove} todo={todo} key={todo.id} index={index} onChange={props.onToggle}></ToDoitem>
            })}

        </ul>
    )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default TodoList
