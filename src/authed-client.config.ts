import { Observable } from 'rxjs/index';
import { InjectionToken, Type } from '@angular/core';

export interface AuthService {
    readonly idToken: Observable<string>;
}

export interface AuthedClientConfig {
    authService: Type<AuthService>;
}

export const authServiceToken = new InjectionToken<AuthService>('AuthService');
