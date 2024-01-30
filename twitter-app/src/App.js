import MyComponent from "./components/Userinfo";
import Header from "./components/Header";

function App() {
  return (
    <>
      <h1 className="text-center text-2xl font-serif">Twitter-App</h1>
      <Header />
      <MyComponent />
    </>
  );
}

export default App;
