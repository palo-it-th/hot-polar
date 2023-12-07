import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from "./pages/Index";
import Questionnaire from "./pages/Questionnaire";
import Story from "./pages/Story";
import RecommendedActions from "./pages/RecommendedActions";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/questionnaire",
    element: <Questionnaire />,
  },
  {
    path: "/story",
    element: <Story />,
  },
  {
    path: "/recommended-actions",
    element: <RecommendedActions />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
)

export default App
