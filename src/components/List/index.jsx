import { React, useState } from 'react'
import { MdOutlineNavigateBefore } from 'react-icons/md'
import { MdOutlineNavigateNext } from 'react-icons/md'

import './List.css'

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-634)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    let listW = items.results.length * 212
    if (x > 0) {
      x = window.innerWidth - listW - 60
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 212
    if (window.innerWidth - listW > x) {
      x = 0
    }

    setScrollX(x)
  }

  return (
    <div className='movie'>
      <h1>{title}</h1>

      <div className='movieRow-left' onClick={handleLeftArrow}>
        <MdOutlineNavigateBefore style={{ fontSize: 64 }} />
      </div>
      <div className='movieRow-right' onClick={handleRightArrow}>
        <MdOutlineNavigateNext style={{ fontSize: 64 }} />
      </div>

      <div className='movieRow'>
        <div
          className='movieRow-list'
          style={{
            marginLeft: scrollX,
            width: items.results.length * 212,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className='movieRow-item' key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
