//1)import express
const express = require('express')
//import userController
const userController = require('./controllers/userController')
const projectControler = require('./controllers/projectController')
const jwtMiddleware = require('./middleware/jwtMiddleware')
const multerConfig = require('./middleware/multerMiddleware')
//2)to create router - use class Router in express library
const router = new express.Router()

//path to resolve register request
router.post('/user/register',userController.register)


//path to resolve login request
router.post('/user/login',userController.login)

//path to add a project
router.post('/projects',jwtMiddleware,multerConfig.single('projectImage'),projectControler.addProject)

//path to get all project
router.get('/all-product',projectControler.getAllProjectController)

//path to gethomeprojecy
router.get('/home-project',projectControler.getProjectController)

//path to get user project
router.get('/user/all-project',jwtMiddleware,projectControler.getUserProject)

//path to delete a project
router.delete('/delete-project/:id',jwtMiddleware,projectControler.deleteProjectController)

//path to edit project
router.put('/update-project/:id',jwtMiddleware,multerConfig.single('projectImage'),projectControler.editProductController)


//path to edit profile
router.put('/update-profile',jwtMiddleware,multerConfig.single('profile'),userController.updateProfileController)


//EXPORT ROUTER
module.exports = router