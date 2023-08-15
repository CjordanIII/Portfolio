import { createSlice } from "@reduxjs/toolkit"

export const projects = createSlice({
  name: "project",
  initialState: {
    projectsData: [
      {
        name: "currencies",
        deployed: "https://magenta-parfait-6ca7d5.netlify.app/currencies",
        repo: "https://github.com/CjordanIII/crypto",
      },
      {
        name: "todos",
        deployed: "https://imaginative-genie-42e1b1.netlify.app/",
        repo: "https://github.com/CjordanIII/Todo-app",
      },
      {
        name: "pong",
        deployed: "https://stunning-conkies-68011f.netlify.app/html/index.html",
        repo: "https://github.com/CjordanIII/Pong",
      },
      {
        name: "dog tinder",
        deployed: "https://adorable-malasada-f81a6a.netlify.app/",
        repo: "https://github.com/CjordanIII/Dog-tender",
      },
      {
        name: "Selfie card",
        deployed: "https://vocal-taffy-d3f035.netlify.app/",
        repo: "https://github.com/CjordanIII/personal-card",
      },
      {
        name: "Password Generator",
        deployed: "https://stellular-syrniki-9c8d6b.netlify.app/",
        repo: "https://github.com/CjordanIII/Random_number_generater",
      },
      {
        name: "Unit Conversion",
        deployed: "https://shimmering-axolotl-37e848.netlify.app/",
        repo: "https://github.com/CjordanIII/converson",
      },
      {
        name: "Oldagram",
        deployed: "https://quiet-semifreddo-6e92a1.netlify.app/",
        repo: "https://github.com/CjordanIII/Oldstagram",
      },
    ],
  },
  reducers: {
    console: (state) => {
      console.log(state);
    },
  },
});

export const {console} = projects.actions
export default projects.reducer