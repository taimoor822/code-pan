// components
import Home from './components/Home';
import DataProvider from './Contex/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
