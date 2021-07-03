import React from 'react'

export default function DetailCard(props) {
  console.log(props)
  return (
    <div className="container mx-auto px-4">
      <div class="mt-8 grid lg:grid-cols-2" style={{ paddingTop: '100px' }}>
        <div class="object-center h-64">
          <button class="h-64 flex justify content-center mx-5 w-4/5">
            <img
              src={`https://image.tmdb.org/t/p/w780/${props.DetailMovie.poster_path}`}
              alt=""
              class="transform scale-80 transition transform hover:scale-100 overflow-hidden"
            />
          </button>
        </div>
        <div class="object-center">
          <div class="h-screen w-full flex flex-col justify-center items-center">
            <div
              class='max-w-lg  shadow-2xl rounded-lg overflow-hidden mx-auto opacity-75"'
              style={{ backgroundColor: '#fdb827' }}
            >
              <div class="py-4 px-8 mt-3">
                <div class="flex flex-col mb-8">
                  <h2 class="text-black-700 font-semibold text-2xl tracking-wide mb-2">
                    {props.DetailMovie.original_title}
                  </h2>
                  <h3 class="text-gray-800 text-base font-bold text-xl">
                    {props.DetailMovie.release_date}
                  </h3>
                </div>
                <div class="bg-yellow-500 rounded-lg opacity-100">
                  <div class="py-4 px-4">
                    <div class="flex flex-col ">
                      <h4 class="text-lg font-semibold mb-3">
                        {props.DetailMovie.overview}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
