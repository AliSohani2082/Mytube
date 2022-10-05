import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const youtubeApiSlice = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube-v31.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'f6f1f4d94cmsha8e8c405c983254p148569jsnbefc589959f1')
      headers.set('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com')
      return headers
    }
  }),
  endpoints: builder => ({
    getSuggestedVideos: builder.query({ query: (videoId, type='video', maxResult=50) => `/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=${type}&maxResults=${maxResult}`}),
    
    getSearchResult: builder.query({ query: (query, regionCode='US', maxResult=50, order='date', pageToken) => `/search?q=${query}&part=snippet%2Cid&regionCode=${regionCode}&maxResults=${maxResult}&order=${order}${pageToken === ''? '' : `&pageToken=${pageToken}`}`}),

    getVideoComments: builder.query({ query: (videoId, maxResult=100) => `/commentThreads?part=snippet&videoId=${videoId}&maxResults=${maxResult}`}),
    
    getVideoDetails: builder.query({ query: (videoId) => `/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}` }),
    
    getChannelDetails: builder.query({ query: (channelId) => `/channels?part=snippet%2Cstatistics&id=${channelId}`}),
    
    getChannelVideos: builder.query({ query: (channelId, order, maxResult=50, pageToken= '') => `/search?channelId=${channelId}&part=snippet%2Cid&order=${order}&maxResults=${maxResult}${pageToken === ''? '' : `&pageToken=${pageToken}`}`}),
    
    getPlaylistVideos: builder.query({ query: (playlistId, maxResult=50) => `/playlistItems?playlistId=${playlistId}&part=snippet&maxResults=${maxResult}`}),
    
    getPlaylistDetails: builder.query({ query: (playlistId) => `/playlists?id=${playlistId}&part=snippet`})
  })
})

export const {
  useGetVideoDetailsQuery,
  useGetSearchResultQuery,
  useGetSuggestedVideosQuery,
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
  useGetPlaylistDetailsQuery,
  useGetPlaylistVideosQuery,
  useGetVideoCommentsQuery,
} = youtubeApiSlice