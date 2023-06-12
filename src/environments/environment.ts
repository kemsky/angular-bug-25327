// This file can be replaced during build by using the `fileReplacements` array.
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';
import {Environment, IEnvironment} from './environment.interface'; // Included with Angular CLI.

export const environment: IEnvironment = {
    get minimized(): boolean {
        return false;
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
