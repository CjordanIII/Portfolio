import { configureStore } from "@reduxjs/toolkit";
import projects from '../state/projects'

export default configureStore({
  reducer: {
    project: projects,
  },
});