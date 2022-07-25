import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { companyInputs, JobInputs } from "./formSource";
import { NewCompany } from "./pages/new/company";
import { NewJob } from "./pages/new/job";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
            </Route>
            <Route path="companies">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              <Route
                path="new"
                element={<NewCompany title="Add New Company" />}
              />
            </Route>
            <Route path="jobs">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              <Route
                path="new"
                element={<NewJob title="Add New Job" />}
              />
            </Route>
            <Route path="semesters">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              <Route
                path="new"
                element={<NewJob title="Add New Semester" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
