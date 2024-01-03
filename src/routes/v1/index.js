import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from '~/routes/v1/boardRoute'

const Router = express.Router()

// Check APIs v1/status
Router.get('/status', (rep, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs v1 are ready to use' })
})

// Board APIs
Router.use('/boards', boardRoute)

export const APIs_V1 = Router