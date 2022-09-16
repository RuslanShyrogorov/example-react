// import { PageTitle } from './PageTitle/PageTitle';
// import { EventList } from './EventList/EventList';
// import upcomingEvents from 'upcoming-events.json';
// ==========================================================

// import Dropdown from './Dropdown/Dropdown';
// import ColorPicker from './ColorPicker/ColorPicker';
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
// ===================================================

import React, { Component } from 'react';
import InitialTodos from 'todos.json';
import TodoList from './TodoList/TodoList';

export default class App extends Component {
  state = {
    todos: InitialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        {/* <PageTitle textTitle="24th Core Worlds Coalition Conference" /> */}
        {/* <EventList events={upcomingEvents} /> */}
        {/* ======================================= */}
        {/* <Dropdown /> */}
        {/* ========================================== */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* ========================================== */}
        <h1>Состояние компонента</h1>
        <p>Общее количество: {totalTodoCount}</p>
        <p>Количество выполненных: {completedTodoCount}</p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
