import { React, useEffect, useState } from 'react'
import './App.css'
import TMDB from './api/TMDB'
import List from './components/List'
import FeaturedMovie from './components/FeaturedMovie/'
import Header from './components/Header'

export default () => {
  const [movieList, setMovieList] = useState([])
  const [FeaturedData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 50) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className='page'>
      <Header black={blackHeader} />

      {FeaturedData && <FeaturedMovie item={FeaturedData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <List key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
