/* eslint-disable no-console */
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {
    console.log('req.body', req.body)
    console.log('req.query', req.query)
    console.log('req.params', req.params)

    // Điều hướng dữ liệu sang tầng Service

    throw new ApiError(StatusCodes.BAD_GATEWAY, 'nguenvuudev error')
    // Có kết quả thì trả vè phía Client
    // res.status(StatusCodes.CREATED).json({ message: 'POST from Controller: API create new board' })
  } catch (error) { next(error) }
}

export const boardController = {
  createNew
}