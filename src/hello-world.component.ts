import { Component } from '@angular/core';
import { AuthedClient } from './authed-client';

@Component({
    selector: 'nac-hello-world',
    template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
    projectTitle: string = 'ng authed client';

    constructor(private authedClient: AuthedClient) {}
}
