import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthedHttpHandler } from './authed-http-handler';

@Injectable()
export class AuthedClient extends HttpClient {
    constructor(authedHandler: AuthedHttpHandler) {
        super(authedHandler);
    }
}
