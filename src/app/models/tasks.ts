export type IStatus = 'WAITING' | 'IN_PROGRESS' | 'CLOSED' | 'FINALISED'

export interface ITask {
  title: string
  deadline: string
  status: IStatus,
  price: number
}
