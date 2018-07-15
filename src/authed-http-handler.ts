import { Observable, throwError } from 'rxjs';
import { switchMap, take, timeout } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService, authServiceToken } from './authed-client.config';

@Injectable()
export class AuthedHttpHandler extends HttpHandler {
    constructor(
        private delegate: HttpHandler,
        @Inject(authServiceToken) private auth: AuthService
    ) {
        super();
    }

    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        return this.auth.idToken.pipe(
            take(1),
            timeout(10000),
            switchMap(
                token =>
                    token
                        ? this.handleRequest(req, token)
                        : throwError(Error('Not authenticated.'))
            )
        );
    }

    private handleRequest(
        req: HttpRequest<any>,
        token: string
    ): Observable<HttpEvent<any>> {
        // Req is immutable and must be cloned.
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });

        return this.delegate.handle(req);
    }
}
