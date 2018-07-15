import { Observable } from 'rxjs';
import { InjectionToken, Type } from '@angular/core';

export interface AuthService {
    readonly idToken: Observable<string>;
}

export interface AuthedClientConfig {
    authService: Type<AuthService>;
}

export const authServiceToken = new InjectionToken<AuthService>('AuthService');
