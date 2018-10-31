import { Observable, throwError } from 'rxjs';
import { InjectionToken, Type } from '@angular/core';

export interface AuthService {
    readonly idToken: Observable<string>;
}

export interface AuthedClientOptions extends Partial<AuthedClientConfig> {
    authService: Type<AuthService>;
}

export interface AuthedClientConfig {
    tokenTimeout: number;

    isTokenValid(token: string): boolean;

    onMissingToken(): any;
}

export const defaultConfig: AuthedClientConfig = {
    tokenTimeout: 10000,
    isTokenValid: (token: string) => !!token,
    onMissingToken: () => throwError(Error('Not authenticated.'))
};

export function withDefaults(config: Partial<AuthedClientConfig>) {
    return Object.assign({}, defaultConfig, config);
}

export const authServiceToken = new InjectionToken<AuthService>('AuthService');
export const clientConfigToken = new InjectionToken<AuthedClientConfig>(
    'AuthedClientConfig'
);
