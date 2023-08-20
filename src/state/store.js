import { configureStore } from "@reduxjs/toolkit";
import projects from '../state/projects'
import theme from '../state/theme'

export default configureStore({
  reducer: {
    project: projects, // change name this is for data name/function name
    themes:theme,
  },
});