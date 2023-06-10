// Set requirements (Express Router)
const router = require('express').Router();

// Set routes (user and thought routes)
const usersRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Add `/users` to created routes 
router.use('/users', usersRoutes);

// Add `/thoughts` to created routes 
router.use('/thoughts', thoughtRoutes);

// Export Module Router
module.exports = router;