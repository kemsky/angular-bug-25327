export type Environment = 'development' | 'production' | 'staging' | 'teamcity';

export interface IEnvironment {
    /**
     * Minimized build.
     */
    readonly minimized: boolean;
    /**
     * Build date
     */
    readonly buildDate: Date;
    /**
     * Build number (Teamcity)
     */
    readonly buildNumber: string;
    /**
     * Build id (Teamcity)
     */
    readonly buildId: string;
    /**
     * Build version
     */
    readonly buildVersion: string;
    /**
     * Application environment
     */
    readonly environment: Environment;
    /**
     * The release identifier used when uploading respective source maps.
     * Specify this value to allow Sentry to resolve the correct source maps when processing events.
     */
    readonly release: string;
}
