export interface Grp {
  id: number,
  personList: Array<string>,
  areaLog?: {[area: string]: number}
  taskLog?: {[task: string]: {
    [person: string]: number
  }}
}

export interface Area {
  name: string,
  taskList: Array<string>
}

export interface Plan {
  id: number,
  name: string,
  area: string,
  time: string,
  grpList: PlanGrpList[]
}

export interface PlanGrpList {
  id: number,
  personTaskList: {[person: string]: string} // 人名 -> 任务名
}
