import express from 'express'
import { OAuth2Client } from 'google-auth-library'
import { auth, authentication } from '../controller/user.js'

const router=express.Router()

router.post('/request',auth);
router.get('/auth',authentication)

export default router

