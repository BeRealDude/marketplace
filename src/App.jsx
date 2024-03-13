import Dropdown from './components/Dropdown/Dropdown';
import Header from "./components/Header/Header";
import PanelRangeSliders from "./components/PanelRangeSliders/PanelRangeSliders";



function App() {
   
  return (
    <>
      <Header />
      <main>
        <PanelRangeSliders />
        <Dropdown />
      </main>
      </>
  );
}

export default App;
