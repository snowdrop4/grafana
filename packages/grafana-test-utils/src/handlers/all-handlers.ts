import { HttpHandler } from 'msw';

import folderHandlers from './api/folders/handlers';
import appPlatformFolderHandlers from './apis/dashboard.grafana.app/v0alpha1/handlers';

const allHandlers: HttpHandler[] = [...folderHandlers, ...appPlatformFolderHandlers];

export default allHandlers;
