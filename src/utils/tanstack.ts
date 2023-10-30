import {
  QueryKey,
  UseMutationOptions,
  useMutation as useMutationOrigin,
  UseQueryOptions,
  useQuery as useQueryOrigin,
} from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

/**
 * On the client side, define a `useQuery` hook that leverages `axios`.
 */
const useQuery = <Response = unknown, Error = unknown>(
  options: UseQueryOptions<
    AxiosResponse<Response>["data"],
    AxiosError<Error>,
    AxiosResponse<Response>["data"],
    QueryKey
  >
) =>
  useQueryOrigin<
    AxiosResponse<Response>["data"],
    AxiosError<Error>,
    AxiosResponse<Response>["data"],
    QueryKey
  >(options)

/**
 * On the client side, define a `useMutation` hook that leverages `axios`.
 */
const useMutation = <Response = unknown, Error = unknown>(
  options: UseMutationOptions<
    AxiosResponse<Response>["data"],
    AxiosError<Error>,
    unknown,
    unknown
  >
) =>
  useMutationOrigin<
    AxiosResponse<Response>["data"],
    AxiosError<Error>,
    unknown,
    unknown
  >(options)

export { useQuery, useMutation }
