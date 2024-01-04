import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValiadation } from '~/validations/boardValidation'
import { boardController } from '~/controllers/boardController'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'Note: API get list boards' })
  })
  .post(boardValiadation.createNew, boardController.createNew)

export const boardRoute = Router