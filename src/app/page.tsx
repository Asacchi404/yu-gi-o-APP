import Todo from "./components/Todo";
import "./layout";
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4"></div>
        <h2 className="text-3xl font-bold text-center mb-8">
          試合結果データベース
        </h2>
        <Todo />
      </div>
    </>
  );
};

export default App;
