const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-activity => GET
router.get('/add-activity', isAuth, adminController.getAddActivity);

// /admin/dashboard => GET
router.get('/dashboard', isAuth, adminController.getDashboard);

// /admin/add-activity => POST
router.post('/add-activity',
    [
        body('title')
            .isString()
            .isLength({ min: 3 })
            .trim(),
        body('description')
            .isLength({ min: 5, max: 4000 })
            .trim()
    ], isAuth,
    adminController.postAddActivity
);

router.get('/edit-activity/:activityId', isAuth, adminController.getEditActivity);

router.post('/edit-activity',
    [
        body('title')
            .isString()
            .isLength({ min: 3 })
            .trim(),
        body('description')
            .isLength({ min: 5, max: 4000 })
            .trim()
    ], isAuth,
    adminController.postEditActivity
);

router.post('/delete-activity', isAuth, adminController.postDeleteActivity);
//router.get('/users/:userId', isAuth, adminController.getUser);
router.post('/users/:userId', isAuth, adminController.postUser);


module.exports = router;