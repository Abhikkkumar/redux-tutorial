import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5500/` }),
  endpoints: (builder) => ({
    // to get a data
    getAccounts: builder.query({
      query: () => `account`,
      transformResponse: (response) => response.sort((a, b) => b.id - a.id), // sorting the response in reverse order on the basis of id
      providesTags: ["account"],
      //   invalidatesTags: ["account"],
    }),
    // to post a data
    addAccounts: builder.mutation({
      query: (amount, id) => ({
        url: "account",
        method: "POST",
        body: { amount, id },
      }),

      invalidatesTags: ["account"], // to tell our react that 'account' record is old, fetch it again.
    }),
    // to delete a data
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `account/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["account"], // to tell our react that 'account' record is old, fetch it again.
    }),
    // to update a data
    updateAccount: builder.mutation({
      query: ({ id, amount }) => ({
        url: `account/${id}`,
        method: "PATCH",
        body: { amount },
      }),
      invalidatesTags: ["account"], // to tell our react that 'account' record is old, fetch it again.
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAccountsQuery,
  useAddAccountsMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminApi;
