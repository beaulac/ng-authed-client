import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthedHttpHandler } from './authed-http-handler';

@Injectable()
export class AuthedClient<T = any> extends HttpClient {
    constructor(authedHandler: AuthedHttpHandler<T>) {
        super(authedHandler);
    }
}
