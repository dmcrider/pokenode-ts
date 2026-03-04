import type { AxiosError, AxiosResponse } from "axios";
import type { InternalCacheRequestConfig } from "axios-cache-interceptor";

export const handleRequest = (
  config: InternalCacheRequestConfig,
  logsEnabled?: boolean,
): InternalCacheRequestConfig => {
  if (logsEnabled) {
    console.log(`[ Request Config ] ${config.method?.toUpperCase() || ""} | ${config.url || ""}`);
  }
  return config;
};

export const handleRequestError = (
  error: AxiosError<unknown>,
  logsEnabled?: boolean,
): Promise<AxiosError<unknown>> => {
  if (logsEnabled) {
    console.error(`[ Request Error ] CODE ${error.code || "UNKNOWN"} | ${error.message}`);
  }
  return Promise.reject(error);
};

export const handleResponse = <T extends AxiosResponse & { cached?: boolean }>(
  response: T,
  logsEnabled?: boolean,
): T => {
  if (logsEnabled) {
    console.log(
      `[ Response ] STATUS ${response.status} | ${response.cached ? "CACHED" : "NOT CACHED"}`,
    );
  }
  return response;
};

export const handleResponseError = (
  error: AxiosError<unknown>,
  logsEnabled?: boolean,
): Promise<AxiosError<unknown>> => {
  if (logsEnabled) {
    console.error(`[ Response Error ] CODE ${error.code || "UNKNOWN"} | ${error.message}`);
  }
  return Promise.reject(error);
};
