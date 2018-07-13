import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthedClientModule } from '../src';
import { DemoComponent } from './demo.component';
import { BehaviorSubject } from 'rxjs/index';
import { AuthService } from '../src/authed-client.config';

class DummyAuth implements AuthService {
    public idToken = new BehaviorSubject('fakeToken');
}

@NgModule({
    declarations: [DemoComponent],
    imports: [
        BrowserModule,
        AuthedClientModule.forRoot({ authService: DummyAuth })
    ],
    bootstrap: [DemoComponent]
})
export class DemoModule {}
