import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTk2MGIwOGEzMWIzMThhMTkzMzNlNzc2MDk4MDIyMCIsIm5iZiI6MTczMTc0NjMzOS4wNTcsInN1YiI6IjY3Mzg1YTIzYWQyNzhhODk2M2Y4Mzc0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s_ZRN6Brd5rSG174mhuyiZS6PoxVyVKArhk-gdijikI'
  },
});

export default instance;