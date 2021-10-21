// Has all of the request we need for
const API_KEY = process.env.API_KEY;

export default {
  fetchAction: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchAdventure: {
    title: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchCrime: {
    title: "Crime",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },
  fetchDocumentary: {
    title: "Documentary",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  // fetchComedy: {
  //   title: "Comedy",
  //   url: `/comedy/all/week?api_key=${API_KEY}&language=en-US`,
  // },
  // fetchHorror: {
  //   title: "Horror",
  //   url: `/horror/all/week?api_key=${API_KEY}&language=en-US`,
  // },
  // fetchMystery: {
  //   title: "Mystery",
  //   url: `/mystery/all/week?api_key=${API_KEY}&language=en-US`,
  // },
  // fetchWestern: {
  //   title: "Western",
  //   url: `/western/all/week?api_key=${API_KEY}&language=en-US`,
  // },
  // fetchAnimation: {
  //   title: "Animation",
  //   url: `/animation/all/week?api_key=${API_KEY}&language=en-US`,
  // },
};
