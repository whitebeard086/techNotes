import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSliice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ["Note", "User"],
    endpoints: builder => ({
        
    })
})