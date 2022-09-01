import { React, useEffect, useState } from 'react'
import './App.css'
import TMDB from './api/TMDB'
import List from './components/List/List'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie.jsx'

export default () => {
  const [movieList, setMovieList] = useState([])
  const [FeaturedData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      // LISTA DE FILMES
      let list = await TMDB.getHomeList()
      setMovieList(list)

      // FILME EM DESTAQUE
      let originals = list.filter((i) => i.slug === 'originals')
      let random = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      let chosen = originals[0].items.results[random]
      let chosenInfo = await TMDB.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  return (
    <div className='page'>
      {FeaturedData && <FeaturedMovie item={FeaturedData} />}

      <section className='list'>
        {movieList.map((item, key) => (
          <List key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
