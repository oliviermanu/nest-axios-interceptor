import type { HttpService, OnModuleInit } from "@nestjs/common";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosErrorCustomConfig } from "./interfaces/axios-error-custom-config";
import { AxiosFulfilledInterceptor } from "./interfaces/axios-fulfilled-interceptor";
import { AxiosRejectedInterceptor } from "./interfaces/axios-rejected-interceptor";
import { AxiosResponseCustomConfig } from "./interfaces/axios-response-custom-config";
export declare abstract class AxiosInterceptor<TRequestConfig extends AxiosRequestConfig = AxiosRequestConfig, TResponse extends AxiosResponse = AxiosResponseCustomConfig<TRequestConfig>, TAxiosError extends AxiosError = AxiosErrorCustomConfig<TRequestConfig>> implements OnModuleInit {
    protected readonly httpService: HttpService;
    constructor(httpService: HttpService);
    onModuleInit(): void;
    private registerInterceptors;
    protected requestFulfilled(): AxiosFulfilledInterceptor<TRequestConfig>;
    protected requestRejected(): AxiosRejectedInterceptor;
    protected responseFulfilled(): AxiosFulfilledInterceptor<TResponse>;
    protected responseRejected(): AxiosRejectedInterceptor;
    protected isAxiosError(err: any): err is TAxiosError;
}
