export type Episode = {
  id: number
  title: string
  description: string
  progress: number
  saved?: boolean
  imageURL: string | null
}