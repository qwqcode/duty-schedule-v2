import { Grp, Area, Plan } from './interfaces'

export default class DataStore {
  public static readonly LocalStorageKey = 'DS_DATA_STORE'
  public static grpList: Grp[] = []
  public static areaList: Area[] = []
  public static planList: Plan[] = []
  
  /** 初始化 */
  public static init() {
    this.grpList = [
      {
        id: 1,
        personList: ['小明'],
        taskLog: {
          '教室 地面扫+拖': {
            '小明': 3
          }
        },
        areaLog: {
          '教室': 1,
          '公区': 2
        }
      }
    ]

    this.areaList = [{
      name: "教室",
      taskList: [
        "教室 地面扫+拖", "教室 地面扫+拖", "教室 地面扫+拖",
        "走廊 地面扫+拖", "走廊 地面扫+拖", "走廊 地面扫+拖",
        "擦 教室瓷砖 + 走廊瓷砖 + 窗户框 + 门窗蜘蛛网",
        "擦 教室瓷砖 + 走廊瓷砖 + 窗户框 + 门窗蜘蛛网", 
        "擦 教室瓷砖 + 走廊瓷砖 + 窗户框 + 门窗蜘蛛网",
        "洗白板 擦讲台", "倒垃圾 + 储物间清理", "倒垃圾 + 储物间清理"
      ]
    },
    {
      name: "公区",
      taskList: [
        "羽毛球场（门卫到沙坑）", "羽毛球场（门卫到沙坑）",
        "羽毛球场（门卫到沙坑）", "羽毛球场（门卫到沙坑）",
        "羽毛球场（门卫到沙坑）", "水泥跑道 + 鹅卵石",
        "水泥跑道 + 鹅卵石", "沙坑 单杠双杠 区域",
        "沙坑 单杠双杠 区域", "沙坑 单杠双杠 区域",
        "擦花坛 + 清理垃圾", "擦花坛 + 清理垃圾"
      ]
    }]
  }

  /** 保存 */
  public static store() {
    let grpList = this.grpList
    let areaList = this.areaList
    let planList = this.planList
    window.localStorage.setItem(this.LocalStorageKey, JSON.stringify({
      grpList, areaList, planList
    }))
  }

  /** 恢复 */
  public static restore() {
    let data = window.localStorage.getItem(this.LocalStorageKey)
    if (data !== null) {
      let dataObj = JSON.parse(data)
      this.grpList = dataObj.grpList
      this.areaList = dataObj.areaList
      this.planList = dataObj.planList
    }
  }
}
