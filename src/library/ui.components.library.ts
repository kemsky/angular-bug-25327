import {AfterContentInit, AfterViewInit, Directive, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {IComponent} from './components.library';

export type Callback = () => void;

export interface ILifecycleComponent extends OnInit, AfterViewInit, AfterContentInit, OnDestroy, DoCheck {
}

export interface IUIComponent extends IComponent, ILifecycleComponent {
}

@Directive()
export abstract class UIComponent implements IUIComponent, OnInit, AfterViewInit, AfterContentInit, OnDestroy, DoCheck {
    @Input()
    public automationName: string;

    @Input()
    public automationDetails: string;

    public component: string;

    protected constructor(component: string) {
        this.automationName = component;
    }

    public ngOnInit(): any {
        if (this.onInit != null) {
            this.onInit();
        }
    }

    public ngOnDestroy(): any {
    }

    public ngAfterContentInit(): any {
        if (this.onContentInit != null) {
            this.onContentInit();
        }
    }

    public ngAfterViewInit(): any {
        if (this.onViewInit != null) {
            this.onViewInit();
        }
    }

    public ngDoCheck(): void {
        if (this.doCheck != null) {
            this.doCheck();
        }
    }

    protected doCheck?(): void;

    protected onInit?(): void;

    protected onContentInit?(): void;

    protected onViewInit?(): void;
}
