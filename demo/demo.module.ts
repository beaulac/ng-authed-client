import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthedClientModule } from '../src';
import { DemoComponent } from './demo.component';
import { BehaviorSubject } from 'rxjs/index';
import { AuthService } from '../src';

export class DemoAuth implements AuthService {
    public idToken = new BehaviorSubject('demoToken');
}

@NgModule({
    declarations: [DemoComponent],
    imports: [
        BrowserModule,
        AuthedClientModule.forRoot({ authService: DemoAuth })
    ],
    bootstrap: [DemoComponent]
})
export class DemoModule {}
