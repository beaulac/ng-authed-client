import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthedHttpHandler } from './authed-http-handler';
import { AuthedClient } from './authed-client';
import {
    AuthedClientOptions,
    authServiceToken,
    clientConfigToken,
    withDefaults
} from './authed-client.config';

@NgModule({
    imports: [HttpClientModule]
})
export class AuthedClientModule {
    static forRoot(options: AuthedClientOptions): ModuleWithProviders {
        return {
            ngModule: AuthedClientModule,
            providers: [
                AuthedHttpHandler,
                AuthedClient,
                { provide: authServiceToken, useClass: options.authService },
                { provide: clientConfigToken, useValue: withDefaults(options) }
            ]
        };
    }
}
