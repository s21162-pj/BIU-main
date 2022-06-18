import React from "react";

import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import ExerciseTwo from "./exercises/ExerciseTwo/ExerciseTwo";

import NavBar from "./components/NavBar/NavBar";

import { ExercisesRoutes } from "./consts/exercisesRoutes";

export default function App() {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const isRedirect =
    pathname !== ExercisesRoutes.E_TWO;

  React.useEffect(() => {
    if (isRedirect) {
      return navigate(ExercisesRoutes.E_TWO);
    }
  }, [isRedirect, navigate]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ExercisesRoutes.E_TWO} element={<ExerciseTwo />} />
      </Routes>
    </>
  );
}
