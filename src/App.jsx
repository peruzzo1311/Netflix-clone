import { React, useEffect, useState } from 'react'
import './App.css'
import TMDB from './api/TMDB'
import List from './components/List/List'

export default () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className='page'>
      <section className='list'>
        {movieList.map((item, key) => (
          <List key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
