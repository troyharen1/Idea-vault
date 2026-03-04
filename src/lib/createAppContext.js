export function createAppContext() {
  return {
    env: process.env.NODE_ENV || 'development',
    startedAt: new Date().toISOString(),
  };
}
