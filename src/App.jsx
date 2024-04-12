import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex">
        <Sidebar/>
        <NewProject/>
    </main>
  );
}

export default App;
