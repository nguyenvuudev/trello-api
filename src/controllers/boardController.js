/* eslint-disable no-console */
import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    // console.log('req.body', req.body)
    // console.log('req.query', req.query)
    // console.log('req.params', req.params)

    // Điều hướng dữ liệu sang tầng Service
    const createBoard = await boardService.createNew(req.body)


    // Có kết quả thì trả vè phía Client
    res.status(StatusCodes.CREATED).json(createBoard)
  } catch (error) { next(error) }
}

export const boardController = {
  createNew
}