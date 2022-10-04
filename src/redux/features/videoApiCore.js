import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const youtubeApiSlice = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube138.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'f6f1f4d94cmsha8e8c405c983254p148569jsnbefc589959f1')
      headers.set('X-RapidAPI-Host', 'youtube138.p.rapidapi.com')
      return headers
    }
  }),
  endpoints: builder => ({
    getVideoDetails: builder.query({ query: () => '/video/details/' })
  })
})

export const { useGetPostsQuery } = youtubeApiSlice