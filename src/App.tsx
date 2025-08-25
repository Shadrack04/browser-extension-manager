import "./App.css";
import AppNav from "./components/app-nav";
import Extensions from "./components/extensions";
import HeaderFilter from "./components/header-filter";

function App() {
  return (
    <div className="costume-padding background w-screen h-screen text-black">
      <AppNav />
      <HeaderFilter />
      <Extensions />
    </div>
  );
}

export default App;
