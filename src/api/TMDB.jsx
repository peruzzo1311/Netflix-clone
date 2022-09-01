const api_key = 'da4caceeacb093a5ca93483f8d5451b4'
const api_baseUrl = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${api_baseUrl}${endpoint}`)
  const json = await req.json()

  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'trending',
        title: 'Para Você',
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'topRated',
        title: 'Em Alta',
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`
        ),
      },
    ]
  },

  getMovieInfo: async (movieId, type) => {
    let info = {}

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${api_key}`
          )
          break
        case 'tv':
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${api_key}`
          )
          break
      }
    }

    return info
  },
}
