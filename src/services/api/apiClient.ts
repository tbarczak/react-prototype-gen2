import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Base API client configuration
 * This provides a centralized HTTP client for all API requests
 */
export class ApiClient {
  private axiosInstance: AxiosInstance;
  private baseURL: string = import.meta.env.VITE_API_BASE_URL || '/api';

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: 30000, // 30 seconds
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Configure request interceptor for auth token injection
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // This will be enabled when the backend is ready
        // const token = getAuthToken();
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Configure response interceptor for error handling
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Global error handling logic
        // Will be expanded when backend is ready
        return Promise.reject(error);
      }
    );
  }

  /**
   * Execute HTTP GET request
   * @param url - Endpoint path
   * @param config - Optional Axios request configuration
   * @returns Promise with response data
   */
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  /**
   * Execute HTTP POST request
   * @param url - Endpoint path
   * @param data - Request payload
   * @param config - Optional Axios request configuration
   * @returns Promise with response data
   */
  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  // Additional HTTP methods (PUT, DELETE, etc.) follow the same pattern
  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}

// Export singleton instance
export const apiClient = new ApiClient();