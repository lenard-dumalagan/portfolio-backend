import { Request, Response } from 'express'
import { AxiosRequestConfig } from 'axios'
import { GithubInstances } from '../utils'

const { userInstance, pinnedRepoInstance } = new GithubInstances()

export const fetchUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const username = req.query.username

    const response = await userInstance.get(`/${username}`)
    const { data } = response

    res.json(data)
  } catch (error: any) {
    res.status(500).json(error)
  }
}

export const fetchRepos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const username = req.query.username
    const params: AxiosRequestConfig = { params: { username } }

    const response = await pinnedRepoInstance.get('', params)
    const { data } = response

    res.json(data)
  } catch (error: any) {
    res.status(500).json(error)
  }
}
