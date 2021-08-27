"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityRejected = exports.identityFulfilled = void 0;
const identityFulfilled = (value) => value;
exports.identityFulfilled = identityFulfilled;
const identityRejected = (err) => Promise.reject(err);
exports.identityRejected = identityRejected;
//# sourceMappingURL=identity-functions.js.map