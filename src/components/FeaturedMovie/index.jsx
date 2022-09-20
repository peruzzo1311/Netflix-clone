import React from 'react'
import './FeaturedMovie.css'
import { FaPlay } from 'react-icons/fa'

export default ({ item }) => {
  let date = new Date(item.first_air_date)
  let genres = []
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }

  return (
    <section
      className='featured'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className='featured-vertical'>
        <div className='featured-horizontal'>
          <div className='featured-name'>{item.original_name}</div>
          <div className='featured-info'>
            <div
              className={
                item.vote_average >= 7
                  ? 'featured-points-green'
                  : 'featured-points-red'
              }
            >
              {item.vote_average.toFixed(1)} pontos
            </div>
            <div className='featured-year'>{date.getFullYear()}</div>
            <div className='featured-seasons'>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className='featured-description'>{item.overview}</div>
          <div className='featured-buttons'>
            <a href={`/watch/${item.id}`} className='featured-watch'>
              <FaPlay />
              Assistir
            </a>
            <a href={`/list/add/${item.id}`} className='featured-mylist'>
              + Minha lista
            </a>
          </div>
          <div className='featured-genres'>
            <strong>Gêneros: </strong>
            {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  )
}
