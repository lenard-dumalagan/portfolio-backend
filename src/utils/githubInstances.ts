import axios, { AxiosInstance } from 'axios'

export default class GithubInstances {
  // github instances
  userInstance: AxiosInstance
  pinnedRepoInstance: AxiosInstance
  // request default timeout
  private timeout: number = 10000

  constructor() {
    this.userInstance = this.setUserInstance()
    this.pinnedRepoInstance = this.setPinnedRepoInstance()
  }

  private setUserInstance(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GITHUB_USERS_API,
      timeout: this.timeout,
    })
  }

  private setPinnedRepoInstance(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GITHUB_PINNED_REPO_API,
      timeout: this.timeout,
    })
  }
}
