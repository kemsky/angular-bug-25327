import {Component} from '@angular/core';
import {UIComponent} from './library';

@Component({
    selector: '[ApplicationComponent]',
    templateUrl: './application.component.html'
})
export class ApplicationComponent extends UIComponent {
    constructor() {
        super('ApplicationComponent');
    }
}
