import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import DetailCard from '../components/DetailCard'
import { fetchMovieDetail } from '../store/action'

export default function Detail() {
  const { id } = useParams()
  const Dispatch = useDispatch()

  useEffect(() => {
    Dispatch(fetchMovieDetail(id))
  }, [id])

  const MovieDetail = useSelector((state) => state.MovieId)

  console.log(MovieDetail, 'di detail movie')
  return (
    <div>
      <DetailCard DetailMovie={MovieDetail} />
    </div>
  )
}
