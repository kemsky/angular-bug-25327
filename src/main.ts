import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import {AppModule} from './application.module';
import {environment} from './environments/environment';

// eslint-disable-next-line no-console
window.console.info('Environment:', environment.environment, environment.release);
window.console.info('Release:', environment.release);
// eslint-disable-next-line no-console
window.console.info(
    `Build #${
        environment.buildNumber
    }: ${environment.buildDate.toLocaleDateString()} ${environment.buildDate.toLocaleTimeString()}, Commit: ${environment.buildVersion}`
);

if (environment.minimized) {
    enableProdMode();
    // eslint-disable-next-line no-console
    window.console.info('Production mode');
} else {
    window.console.warn('Development mode');
}

platformBrowser()
    .bootstrapModule(AppModule)
    .catch((e) => {
        window.console.error('Application bootstrap failed', e);
    });
