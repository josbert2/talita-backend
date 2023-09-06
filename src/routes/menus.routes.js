import { Router } from 'express';
import { getMenus, getMenu, createMenu, updateMenu, deleteMenu } from '../controllers/menus.controller.js';

const router = Router();

router.get('/menus', getMenus)
router.get('/menus/:id', getMenu)
router.post('/menus', createMenu)
router.patch('/menus/:id', updateMenu)
router.delete('/menus/:id', deleteMenu)

export default router;