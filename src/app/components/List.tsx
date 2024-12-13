import React from "react";
import { TodoList } from "../../../.next/types/TodoList";

type Props = {
  todos: TodoList[];
  deleteTodo: (id: number) => void;
};

/**
 * Todo一覧を構成するコンポーネント
 *
 * @param todos {TodoList[]}
 * @param deleteTodo {(id: number) => void}
 * @returns
 */
const List = ({ todos, deleteTodo }: Props) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-4 mb-2 bg-white rounded shadow ${
            todo.result === "win"
              ? "bg-green-100"
              : todo.result === "lose"
              ? "bg-red-100"
              : ""
          }`}
        >
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:bg-red-100"
          >
            削除
          </button>
          <span>{todo.content}</span>
          <span>
            {todo.result === "win"
              ? "勝ち"
              : todo.result === "lose"
              ? "負け"
              : "引き分け"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default List;
