// noinspection JSUnusedLocalSymbols
export function noop(...args: any[]): any {
    // no-op
}

/**
 * Common component interface.
 */
export interface IComponent {
    component: string;
}

export class CommonComponent implements IComponent {
    private _component: string;

    constructor(component: string) {
        this.component = component;
    }

    public get component(): string {
        return this._component;
    }

    public set component(value: string) {
        if (this._component !== value && value != null) {
            this._component = value;
        }
    }

    public toString(): string {
        return this.component + '{}';
    }

    protected info(...args: any[]): void {
        // eslint-disable-next-line no-console
        console.info.bind(console, this.component)(...args);
    }

    protected debug(...args: any[]): void {
        // eslint-disable-next-line no-console
        console.debug.bind(console, this.component)(...args);
    }

    protected error(...args: any[]): void {
        console.error.bind(console, this.component)(...args);
    }

    protected warn(...args: any[]): void {
        console.warn.bind(console, this.component)(...args);
    }

    protected trace(...args: any[]): void {
        // eslint-disable-next-line no-console
        console.trace.bind(console)(...args);
    }

    protected log(...args: any[]): void {
        console.log.bind(console, this.component)(...args);
    }
}
