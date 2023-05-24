// @ts-ignore
import { track } from '@middleware.io/agent-apm-nextjs';

export function register() {
    track({
        projectName: "vercel-mw-test",
        serviceName: "vercel-mw-service",
        target: "vercel",
    });
}