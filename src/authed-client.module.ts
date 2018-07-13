import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthedHttpHandler } from './authed-http-handler';
import { AuthedClient } from './authed-client';
import { AuthedClientConfig, authServiceToken } from './authed-client.config';

@NgModule({
    declarations: [HelloWorldComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [HelloWorldComponent]
})
export class AuthedClientModule {
    static forRoot(config: AuthedClientConfig): ModuleWithProviders {
        return {
            ngModule: AuthedClientModule,
            providers: [
                AuthedHttpHandler,
                AuthedClient,
                { provide: authServiceToken, useClass: config.authService }
            ]
        };
    }
}
