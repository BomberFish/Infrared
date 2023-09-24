//bomberfish

import * as bareServer from './bareserver/index.js';
import { Hono } from 'hono';
const app = new Hono();

app.get('/', async (c) => {
	bareServer.createServer('/', {
		logErrors: true,
	});
	return c.text(JSON.stringify(bareServer.serverInfo), 200);
});

export default app;