import { Observable } from 'rxjs';
import { switchMap, take, timeout } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
    AuthedClientConfig,
    AuthService,
    authServiceToken,
    clientConfigToken
} from './authed-client.config';

@Injectable()
export class AuthedHttpHandler<T> extends HttpHandler {
    constructor(
        private delegate: HttpHandler,
        @Inject(authServiceToken) private auth: AuthService,
        @Inject(clientConfigToken) private config: AuthedClientConfig
    ) {
        super();
    }

    public handle(req: HttpRequest<T>): Observable<HttpEvent<T>> {
        return this.auth.idToken.pipe(
            take(1),
            timeout(this.config.tokenTimeout),
            switchMap(
                token =>
                    this.config.isTokenValid(token)
                        ? this.handleRequest(req, token)
                        : this.config.onMissingToken()
            )
        );
    }

    private handleRequest(
        req: HttpRequest<T>,
        token: string
    ): Observable<HttpEvent<T>> {
        return this.delegate.handle(
            // Req is immutable and must be cloned.
            req.clone(this.updateRequestWithToken(req, token))
        );
    }

    protected updateRequestWithToken(req: HttpRequest<T>, token: string) {
        return {
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        };
    }
}
