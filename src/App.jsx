import './App.css'
import Block from './components/Block'

function App() {
  const url = {
    data: 'http://localhost:7070/data',
    error: 'http://localhost:7070/error',
    load: 'http://localhost:7070/loading',
  }

  return (
    <div className='app'>
      <Block url={url.data} header={"data component"} />
      <Block url={url.error} header={"error component"} />
      <Block url={url.load} header={"loading component"} />
    </div>
  );
}

export default App
