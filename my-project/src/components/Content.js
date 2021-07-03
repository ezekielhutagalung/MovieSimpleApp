import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Content(props) {
  const History = useHistory()

  const onDetailHandler = () => {
    History.push(`/${props.MovieNowPlaying.id}`)
  }
  console.log(props, 'ini di content')
  return (
    <>
      <div className=" w-96 px-8 py-6 lg:w-1/4 md:w-full">
        <button onClick={onDetailHandler} className="">
          <img
            src={`https://image.tmdb.org/t/p/w780/${props.MovieNowPlaying.poster_path}`}
            alt=""
            class="transform scale-90 transition transform hover:scale-100 overflow-hidden"
          />
        </button>

        <h2 className="mb-3 text-center w-50 text-opacity-500 font-bold h-12 text-black text-xl title-font">
          {props.MovieNowPlaying.original_title}
        </h2>
        <div></div>
      </div>
    </>
  )
}
