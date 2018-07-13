import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from '../src/hello-world.component';
import { AuthedClientModule } from '../src';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../src/authed-client.config';

class DummyAuth implements AuthService {
    public idToken = new BehaviorSubject('fakeToken');
}

describe('nac-hello-world component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AuthedClientModule.forRoot({ authService: DummyAuth })]
        });
    });

    it('should say hello world', () => {
        const fixture: ComponentFixture<
            HelloWorldComponent
        > = TestBed.createComponent(HelloWorldComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML.trim()).to.equal(
            'Hello world from the ng authed client module!'
        );
    });
});
