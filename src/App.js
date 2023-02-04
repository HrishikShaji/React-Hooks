import './App.css';
import UseContextHook from './components/UseContextHook';
import UseEffectHook from './components/UseEffectHook';
import UseImperativeHandleHook from './components/UseImperativeHandleHook';
import UseLayoutEffectHook from './components/UseLayoutEffectHook';
import UseMemo from './components/UseMemo';
import UseReducerHook from './components/UseReducerHook';
import UseRefHook from './components/UseRefHook';
import UseStateHook from './components/UseStateHook';


function App() {
  
  return (
    <div> 
    <UseStateHook/>
    <UseReducerHook/>
    <UseEffectHook/>
    <UseRefHook/>
    <UseLayoutEffectHook/>
    <UseImperativeHandleHook/>
    <UseContextHook/>
    <UseMemo/>
    </div>
  );
}

export default App;
