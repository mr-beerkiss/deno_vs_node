export function getPort(envPort: string | undefined): number {
  if (envPort) {
      const val = parseInt(envPort, 10);
      if (!isNaN(val) && val > 0 && val < Math.pow(2, 16) - 1) {
        return val;
      }
  }

  return 8080;
}
