import React, {Component} from 'react';
import TodoList from '../Components/TodoList';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {
    handleToggle = (id) => {
        const { todosActions } = this.props;
        todosActions.toggle(id);
    }
    handleRemove = (id) => {
        const { todosActions } = this.props;
        todosActions.remove(id);
    }

    render() {
        const { todos } = this.props;
        const { handleToggle, handleRemove } = this;
        return(
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        )
    }
}

export default connect(
    (state) => ({
        todos: state.todos
    }), 
    (dispatch) => ({
    todosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoListContainer);
