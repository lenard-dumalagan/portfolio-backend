import express from 'express'
import { fetchUsers, fetchRepos } from '../controllers/githubControllers'

const router = express.Router()

router.get('/users', fetchUsers)
router.get('/repos', fetchRepos)

export = router
