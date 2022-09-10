import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompTodos, setIncompTodos] = useState(["aaaa", "iiii"]);
  const [compTodos, setCompTodos] = useState(["uuuu", "eeeee"]);
  const [todoText, setTodoText] = useState("");

  const onChangeInput = (e) => {
    setTodoText(e.target.value);
    console.log(todoText);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompTodos, todoText];
    setIncompTodos(newTodos);
    setTodoText("");
  };

  const onclickDelete = (index) => {
    const newTodos = [...incompTodos];
    newTodos.splice(index, 1);
    setIncompTodos(newTodos);
  };

  const onclickComplete = (index) => {
    const newIncompTodos = [...incompTodos];
    newIncompTodos.splice(index, 1);

    const newCompTodos = [...compTodos, incompTodos[index]];

    setIncompTodos(newIncompTodos);
    setCompTodos(newCompTodos);
  };

  const onclickBack = (index) => {
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);

    const newIncompTodos = [...incompTodos, compTodos[index]];

    setCompTodos(newCompTodos);
    setIncompTodos(newIncompTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Todoを追加"
          value={todoText}
          onChange={onChangeInput}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p className="item">{todo}</p>
                <button onClick={() => onclickComplete(index)}>完了</button>
                <button onClick={() => onclickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTodo</p>
        <ul>
          {compTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p className="item">{todo}</p>
                <button onClick={() => onclickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
