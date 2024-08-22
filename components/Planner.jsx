import React, { useState } from 'react';

export const Planner = () => {
  const [todos, setTodos] = React.useState([
    {
      text: 'Talk To PaloAlto CEO Nikesh Arora',
      date: '06:16:38 PM',
      isCompleted: false,
    },
    {
      text: 'Reveal the Name Of the 700% Returner',
      date: '06:27:38 PM',
      isCompleted: false,
    },
    {
      text: 'Talk To Cardinal Health CEO Jason Hollar',
      date: '06:37:38 PM',
      isCompleted: false,
    },

    {
      text: 'Lightning Round',
      date: '06:45:38 PM',
      isCompleted: false,
    },

    {
        text: 'What Stocks To Watch',
        date: '06:53:38 PM',
        isCompleted: false,
      },

  ]);

  const addEvent = (text) => {
    const newEvents = [
      ...todos,
      {
        text: text,
        isCompleted: false,
        date: new Date().toLocaleTimeString(),
      },
    ];
    setTodos(newEvents);
  };

  const removeEvent = (index) => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  const toggleCompletion = (index) => {
    const temp = [...todos];
    temp[index].isCompleted = !temp[index].isCompleted;
    setTodos(temp);
  };

  return (
    <div className="app-container">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`planner-item ${
            todo.isCompleted ? 'completed' : ''
          }`}
          onClick={() => toggleCompletion(index)}
        >
          <span>{todo.text}</span> - {todo.date || 'N/A'}{' '}
          {todo.isCompleted ? '✔' : '(-)'}
        </div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = document.getElementById('task-input');
          addEvent(input.value);
          input.value = '';
        }}
      >
        <input
          id="task-input"
          type="text"
          placeholder="Add Event..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}