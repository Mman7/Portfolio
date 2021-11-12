import React, { Suspense } from "react";
import "./App.scss";

import BackgroundText from "./components/BackgroundText";
const Homepage = React.lazy(() => import("./components/Homepage"));
const Project = React.lazy(() => import("./components/Project"));
const Contact = React.lazy(() => import("./components/Contact"));
import { Routes, Route, Link, useLocation } from "react-router-dom";

import LoadingCard from "./components/LoadingCard";

import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeft";

function App() {
  const location = useLocation();
  const path = ["/", "/project", "/contact"];
  const getIndex = () => path.indexOf(location.pathname);

  const nextPage = () => {
    const index = getIndex();
    const nextPath = path[index + 1];
    return nextPath;
  };
  const previousPage = () => {
    const index = getIndex();
    const prevPath = path[index - 1];
    return prevPath;
  };

  return (
    <div className="App">
      <BackgroundText />
      <Suspense fallback={<LoadingCard />}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      {location.pathname !== "contact" && (
        <Link to={{ pathname: nextPage() }}>
          <KeyboardArrowRightSharpIcon className="arrow-right-icon icon"></KeyboardArrowRightSharpIcon>
        </Link>
      )}

      {location.pathname !== "/" && (
        <Link to={{ pathname: previousPage() }}>
          <KeyboardArrowLeftSharpIcon className="arrow-left-icon icon"></KeyboardArrowLeftSharpIcon>
        </Link>
      )}
    </div>
  );
}

export default App;
