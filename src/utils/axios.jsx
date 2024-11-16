import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTk2MGIwOGEzMWIzMThhMTkzMzNlNzc2MDk4MDIyMCIsIm5iZiI6MTczMTc1MTM4NS44OTk0NzkyLCJzdWIiOiI2NzM4NWEyM2FkMjc4YTg5NjNmODM3NDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fWl6IxN5fUGkcfAKPUmmX1DFLGXCu4s2odDdHge5xZI",
  },
});


export default instance