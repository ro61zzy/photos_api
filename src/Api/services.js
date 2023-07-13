import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MainUrl = 'https://jsonplaceholder.typicode.com'

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({ baseUrl: MainUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts'
    }),
    getPhotos: builder.query({
      query: () => '/photos'
    }),
    getUsers: builder.query({
      query: () => '/users',
    }),
  }),
});


export const {useGetPostsQuery, useGetPhotosQuery, useGetUsersQuery} = applicationApi 