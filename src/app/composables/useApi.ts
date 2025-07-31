import type { ApiResponse } from '~/types'

export const useApi = () => {
  const config = useRuntimeConfig()

  const apiCall = async <T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(`${config.public.apiBase}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return {
        data,
        success: true,
      }
    } catch (error) {
      console.error('API call failed:', error)
      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  return {
    get: <T>(endpoint: string) => apiCall<T>(endpoint, { method: 'GET' }),
    post: <T>(endpoint: string, body: any) =>
      apiCall<T>(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
      }),
    put: <T>(endpoint: string, body: any) =>
      apiCall<T>(endpoint, {
        method: 'PUT',
        body: JSON.stringify(body),
      }),
    delete: <T>(endpoint: string) =>
      apiCall<T>(endpoint, { method: 'DELETE' }),
  }
}
