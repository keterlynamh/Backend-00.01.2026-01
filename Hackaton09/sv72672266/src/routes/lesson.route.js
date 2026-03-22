const controller = require('../controllers/lesson.controller');
const lessonRouter = require('express').Router();
const { authMiddleware, requireRole } = require('../middlewares/auth.middleware');

lessonRouter.put(
    '/:id',
    authMiddleware,
    requireRole('admin', 'instructor'),
    controller.updateLesson
);
lessonRouter.delete(
    '/:id',
    authMiddleware,
    requireRole('admin', 'instructor'),
    controller.deleteLesson
);

module.exports = { lessonRouter };