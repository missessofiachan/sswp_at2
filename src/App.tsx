
import Header from './components/Header.tsx';
import { appClass } from './styles/App.css.ts';


function App() {
 

  return (
    <>
      <Header />
      <div className={appClass}>
        {/* Main content here */}
      </div>
    </>
  );
}

export default App;

