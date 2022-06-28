import express from 'express'

import controller from '../controller/post'

const router = express.Router()


router.get('/posts', controller.getPosts)
router.get('/posts/:id', controller.getPost)


export = router;