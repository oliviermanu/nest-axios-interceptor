"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosInterceptor = void 0;
const identity_functions_1 = require("./identity-functions");
class AxiosInterceptor {
    constructor(httpService) {
        this.httpService = httpService;
    }
    onModuleInit() {
        this.registerInterceptors();
    }
    registerInterceptors() {
        const { axiosRef: axios } = this.httpService;
        axios.interceptors.request.use(this.requestFulfilled(), this.requestRejected());
        axios.interceptors.response.use(this.responseFulfilled(), this.responseRejected());
    }
    requestFulfilled() {
        return identity_functions_1.identityFulfilled;
    }
    requestRejected() {
        return identity_functions_1.identityRejected;
    }
    responseFulfilled() {
        return identity_functions_1.identityFulfilled;
    }
    responseRejected() {
        return identity_functions_1.identityRejected;
    }
    isAxiosError(err) {
        return !!(err.isAxiosError && err.isAxiosError === true);
    }
}
exports.AxiosInterceptor = AxiosInterceptor;
//# sourceMappingURL=axios-interceptor.js.map