import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

type Post = {
    id: number;
    title: string;
    body: string;
};

const postService = createApi({
    reducerPath: 'apiService',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => ({
                url: `/posts`,
            }),
        }),
    }),
});

export const { useGetPostsQuery } = postService;
export default postService;
