import React, { FormEvent, useState } from "react";
import { TodoList } from "../../../.next/types/TodoList";

type Props = {
  createTodo: (todo: TodoList) => void;
};

/**
 * Todo入力欄を構成するコンポーネント
 *
 * @param createTodo {(todo: TodoList) => void}
 * @returns
 */
const Form = ({ createTodo }: Props) => {
  const [enteredTodo, setEnteredTodo] = useState<string>("");

  /**
   * フォーム送信時にTodoを追加するための関数
   *
   * @param e onSubmitイベント
   * @returns
   */
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 入力欄が空の場合、処理を抜ける
    if (enteredTodo === "") return;

    // 追加するTodoオブジェクトの作成
    const newTodo: TodoList = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      result: result,
    };

    // Todo登録
    createTodo(newTodo);
    // 入力欄を空にする
    setEnteredTodo("");
  };

  const [result, setResult] = useState<"win" | "lose" | "draw">("win");

  return (
    <div className="mt-8">
      <form onSubmit={addTodo} className="flex items-center">
        <select
          value={result}
          onChange={(e) => {
            // e.target.valueは文字列なので、"win"などの文字列に変換する
            const selectedResult = e.target.value as "win" | "lose" | "draw";
            setResult(selectedResult);
          }}
          className=" mr-2 p-2 border rounded"
        >
          <option value="win">勝ち</option>
          <option value="lose">負け</option>
          <option value="draw">引き分け</option>
        </select>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
          className="flex-grow mr-2 p-2 border rounded"
          placeholder="相手の情報を入力"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          追加
        </button>
      </form>
    </div>
  );
};

export default Form;
