import { RouterProvider } from "react-router-dom";
import { router } from "./js/compenents/routes";

 
 
 

function App() {
 

  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App
