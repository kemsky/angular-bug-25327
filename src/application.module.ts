import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {Location} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ApplicationComponent} from './application.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        A11yModule,
        ScrollingModule,
        DragDropModule,
        MatDatepickerModule,
        NoopAnimationsModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'en-US'},
        Location
    ],
    declarations: [ApplicationComponent],
    exports: [],
    bootstrap: [ApplicationComponent]
})
export class AppModule {}
