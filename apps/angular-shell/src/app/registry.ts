export interface Registry {
  'angular-app': () => Promise<unknown>;
  'react-app': () => Promise<unknown>;
}

export const registry: Registry = {
  'angular-app': () => import('angular-app/Module'),
  'react-app': () => import('react-app/Module'),
};
