import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./Page/HomePage";
import JobsPage from "./Page/JobsPage";
import NotFoundPage from "./Page/NotFoundPage";
import JobPage, { jobLoader } from "./Page/JobPage";
import AddJobPage from "./Page/addJobPage";

const App = () => {
  const addJob = (newJob) => {};

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="job/:id" element={<JobPage />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
