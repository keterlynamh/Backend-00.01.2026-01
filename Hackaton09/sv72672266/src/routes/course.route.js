const courseController = require('../controllers/course.controller');
const lessonController = require('../controllers/lesson.controller');
const courseRouter = require('express').Router();
const { authMiddleware, requireRole } = require('../middlewares/auth.middleware');

// Courses
courseRouter.post(
    '/',
    authMiddleware,
    requireRole('admin', 'instructor'),
    courseController.createCourse
);
courseRouter.get('/', courseController.getCourses);
courseRouter.get('/:slug', courseController.getCourseBySlug);
courseRouter.put(
    '/:id',
    authMiddleware,
    courseController.updateCourse
);
courseRouter.delete(
    '/:id',
    authMiddleware,
    courseController.deleteCourse
);

// Lessons
courseRouter.post(
    '/:courseId/lessons',
    authMiddleware,
    requireRole('admin', 'instructor'),
    lessonController.createLesson
);
courseRouter.get('/:courseId/lessons', lessonController.getLessonsByCourse);

module.exports = { courseRouter };