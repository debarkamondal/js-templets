import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from './Pages/RootLayout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<TextForm />} />
    <Route path='/about' element={<About />} />
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
