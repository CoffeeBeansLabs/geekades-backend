import { Router } from 'express';

import helloWorld from '~/hello-world/rest';
import authentication from '~/authentication/rest';

const router = Router();

router.get('/', (req, res) => {
  res.send('app-root');
});

router.use('/hello-world', helloWorld);
router.use('/authentication', authentication);

export default router;
