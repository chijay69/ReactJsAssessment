import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div> this does not exist</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
