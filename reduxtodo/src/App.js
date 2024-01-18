import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <body className="bg-gray-500">
        <div className="text-center">
          <h1>Learn about redux toolkit</h1>
          <AddTodo />
          <Todos />
        </div>
      </body>
    </>
  );
}

export default App;
