import { Comment } from './comments.interface'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
  comments?: Comment[]
}
