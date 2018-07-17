import { AuthedClientModule, AuthService } from '../src';
import { BehaviorSubject } from 'rxjs';
import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { AuthedClient } from '../src/authed-client';

const fakeToken = Math.random()
    .toString(36)
    .slice(2);

class DummyAuth implements AuthService {
    public idToken = new BehaviorSubject(fakeToken);
}

describe('AuthedClient', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AuthedClientModule.forRoot({ authService: DummyAuth }),
                HttpClientModule,
                HttpClientTestingModule
            ]
        });
    });

    afterEach(inject(
        [HttpTestingController],
        (backend: HttpTestingController) => {
            backend.verify();
        }
    ));

    it(`should send token in Authorization Header`, async(
        inject(
            [AuthedClient, HttpTestingController],
            (service: AuthedClient, backend: HttpTestingController) => {
                service.get('test').subscribe();

                backend.expectOne((req: HttpRequest<any>) => {
                    return (
                        req.url === 'test' &&
                        req.headers.get('Authorization') ===
                            `Bearer ${fakeToken}`
                    );
                }, `Sends token in Authorization Header`);
            }
        )
    ));
});
