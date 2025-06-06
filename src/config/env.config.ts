import { ConfigModuleOptions } from '@nestjs/config';
import { join } from 'path';

export function getConfigModuleOptions(): ConfigModuleOptions {
  const nodeEnv = process.env.NODE_ENV || 'dev';
  const envFilePath = join(process.cwd(), `.env.${nodeEnv}`);

  return {
    isGlobal: true,
    envFilePath,
  };
}
