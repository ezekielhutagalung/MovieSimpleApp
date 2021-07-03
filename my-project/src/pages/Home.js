import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchNowPlayingMovie } from '../store/action'

import Content from '../components/Content'

export default function Home() {
  const dispatch = useDispatch()
  const MovieNowPlaying = useSelector((state) => state.MovieNowPlaying)

  console.log(MovieNowPlaying, 'di home')

  useEffect(() => {
    dispatch(fetchNowPlayingMovie())
  }, [dispatch])
  return (
    <>
      <section className="-mb-3.5 text-gray-700 body-font bg-fixed bg-auto md:bg-contain">
        <div className="container px-8 mx-auto py-10 lg:px-4">
          <div className="mt-32">
            <h1 className="flex justify-center font-semibold text-6xl text-yellow-400">
              Now Playing Movie
            </h1>
            <div className="flex flex-wrap text-left">
              {MovieNowPlaying.map((MovieNowPlaying) => {
                return (
                  <Content
                    key={MovieNowPlaying.id}
                    MovieNowPlaying={MovieNowPlaying}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
