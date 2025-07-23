import log from 'loglevel'

export const logTelemetry = (event, error) => {
  log.error(`[Telemetry] Event: ${event}`, error);
};
