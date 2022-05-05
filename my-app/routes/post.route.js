const router = require('express').Router();
const postController = require('../controllers/post.controller')

router.get('/' , postController.readPosts )
router.post('/', postController.createPost)

router.get('/:id' , postController.readPost)

router.delete('/:id' , postController.deletePost)

module.exports = router;