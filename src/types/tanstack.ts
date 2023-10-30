import {
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

/**
 * Naturally replaces `queryKey` via the `params` field.
 * Also, since it is a custom query hook, we do not pass `queryFn` either.
 */
type UseQueryOptionsWithAxios<Response = unknown, Params = unknown> =
  | ({ params?: Params } & Omit<
      UseQueryOptions<
        AxiosResponse<Response>["data"],
        AxiosError<Error>,
        AxiosResponse<Response>["data"],
        QueryKey
      >,
      "queryKey" | "queryFn"
    >)
  | undefined

/**
 * Pass `variable`, which are the variables needed for mutate.
 */
type UseMutationOptionsWithAxios<Variables = unknown, Response = unknown> =
  | Omit<
      UseMutationOptions<
        AxiosResponse<Response>["data"],
        AxiosError<Error>,
        Variables,
        QueryKey
      >,
      "mutationFn"
    >
  | undefined

/**
 * You can pass frequently used variables or functions in the query's return value through this `context` field.
 */
type UseQueryHookContext = { context?: Record<string, unknown> }

/**
 * The type of your custom query hook.
 */
type UseQueryHook<Response = unknown, Params = unknown> = (
  options?: UseQueryOptionsWithAxios<Response, Params>
) => UseQueryResult<AxiosResponse<Response>["data"], AxiosError<Error>> &
  UseQueryHookContext

/**
 * The type of your custom mutation hook.
 */
type UseMutationHook<Variables = unknown, Response = unknown> = (
  options: UseMutationOptionsWithAxios<Variables, Response>
) => UseMutationResult<
  AxiosResponse<Response>["data"],
  AxiosError<Error>,
  Variables,
  unknown
>

export {
  type UseQueryOptionsWithAxios,
  type UseQueryHookContext,
  type UseQueryHook,
  type UseMutationHook,
}
