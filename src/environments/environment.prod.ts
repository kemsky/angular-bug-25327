import {Environment, IEnvironment} from './environment.interface';

export const environment: IEnvironment = {
    get minimized(): boolean {
        return true;
    },
    get buildId(): string {
        return window['buildId'];
    },
    get environment(): Environment {
        return window['environment'];
    },
    get buildDate(): Date {
        return new Date(window['buildDate']);
    },
    get buildNumber(): string {
        return window['buildNumber'];
    },
    get buildVersion(): string {
        return window['buildVersion'];
    },
    get release(): string {
        return window['release'];
    }
};
