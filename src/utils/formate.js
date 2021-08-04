import moment from 'moment'
import uuidv1 from 'uuid/v1'
import { Constants } from '@/common'

/**
 * 格式化时间
 * @param {String} date 时间
 * @param {String} formateString 格式
 */
function formatDate (date, formateString = 'YYYY-MM-DD HH:mm:ss') {
  return moment(date).format(formateString)
}

/**
 * 获取当前时间
 * @param {String} formateString 格式
 */
function getCurrentDate (formateString = 'YYYY-MM-DD HH:mm:ss') {
  return moment().format(formateString)
}

/**
 * 生成UUID
 */
function generateUUID () {
  return uuidv1()
}

/**
 * 格式化数值
 * @param {String} value 值
 * @param {Number} numberBits 小数点位数
 */
function fixedDecimalBits (value, numberBits = 2) {
  return (Number(value) * 100).toFixed(2)
}

/**
 * 格式化导入错误信息
 * @param {Number} index 下标
 * @param {String} field 字段
 * @param {String} value 值
 * @param {String} msg 错误信息
 */
function generateImportErrorMsg (index, field, value, msg = '') {
  return `第${index}行 【${field}】值【${value}】不合法！${msg}`
}

/**
 * 清除空格
 * @param {String} value
 */
function clearWhiteSpace (value) {
  return value.toString().replace(/ /g, '')
}

function formatAddTargtTime (numb, format) {
  const time = new Date((numb - 1) * 24 * 3600000 + 1)
  time.setYear(time.getFullYear() - 70)
  const year = time.getFullYear() + ''
  const month = time.getMonth() + 1 + ''
  const date = time.getDate() + ''
  if (format && format.length === 1) {
    return year + format + month + format + date
  }
  return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
}

/**
 * 中文排序
 * @param {String} param1 比较参数1
 * @param {String} param2 比较参数2
 */
function zhCompare (param1, param2) {
  return param1.localeCompare(param2, 'zh-Hans-CN', { sensitivity: 'accent' })
}

/**
 * 格式化文件名，如果文件名称过长
 * @param {String} fileName 文件名
 */
function formateFileName (fileName, MAX = 30, START = 5, linkDot = '...') {
  if (!fileName) return ''

  let name = fileName.substring(fileName.lastIndexOf('/') + 1)

  if (name.length > MAX) {
    name = name.substring(0, START) + linkDot + name.substring(START + name.length - MAX)
  }
  return name
}

/**
 * 根据文件名匹配相应图标：excel/word/pdf
 * @param {String} fileName 文件名
 */
function mapFileType (fileName) {
  let icon = 'FileIcon'

  if (!fileName) return

  let fileType = fileName.substring(fileName.lastIndexOf('.') + 1)

  switch (fileType) {
    case 'doc':
    case 'docx':
    case 'dot':
    case 'dotx':
      icon = 'WordIcon'
      break
    case 'xls':
    case 'xlt':
    case 'xlsx':
      icon = 'ExcelIcon'
      break
    case 'pdf':
      icon = 'PdfIcon'
      break
    case 'ppt':
    case 'pot':
    case 'pps':
      icon = 'PptIcon'
      break
    default:
      break
  }

  return icon
}

// 年级排序
function sortGrade (list = [], field = 'Field') {
  let grades = [
    { grade: '学龄前', index: 0 },
    { grade: '一年级', index: 1 },
    { grade: '二年级', index: 2 },
    { grade: '三年级', index: 3 },
    { grade: '四年级', index: 4 },
    { grade: '五年级', index: 5 },
    { grade: '六年级', index: 6 },
    { grade: '初一', index: 7 },
    { grade: '初二', index: 8 },
    { grade: '初三', index: 9 },
    { grade: '中考', index: 10 },
    { grade: '高一', index: 11 },
    { grade: '高二', index: 12 },
    { grade: '高三', index: 13 },
    { grade: '高考', index: 14 }
  ]

  let newList = []

  for (let d of list) {
    let grade = grades.find(x => x.grade === d[field])
    newList.push({
      ...d,
      index: grade ? grade.index : 9999
    })
  }

  return newList.sort((a, b) => {
    return a.index - b.index
  })
}

// 科目排序
function sortSubject (list = [], field = 'Field') {
  let subjects = [
    { subject: '语文', index: 0 },
    { subject: '数学', index: 1 },
    { subject: '英语', index: 2 },
    { subject: '物理', index: 3 },
    { subject: '化学', index: 4 },
    { subject: '生物', index: 5 },
    { subject: '地理', index: 6 },
    { subject: '历史', index: 7 },
    { subject: '政治', index: 8 }
  ]

  let newList = []

  for (let d of list) {
    let subject = subjects.find(x => x.subject === d[field])
    newList.push({
      ...d,
      index: subject ? subject.index : 9999
    })
  }

  return newList.sort((a, b) => {
    return a.index - b.index
  })
}

function mapSubject (dept = '') {
  if (!dept) return []

  if (dept === '少儿部') {
    return ['语文', '数学', '英语']
  } else if (dept.includes('初中')) {
    return ['语文', '数学', '英语', '物理', '化学']
  }
  return ['语文', '数学', '英语', '物理', '化学', '生物']
}

function sortDepart (list = [], departName = 'Management_dept_name') {
  if (!list || !list.length) return []
  let sortArr = ['少儿部', '泡泡少儿部', '初中班课部', '高中班课部', '中学项目部', '优能一对一部', '北美项目部', '英联邦项目部', '英语学习部', '国外考试部']
  list = list.sort((a, b) => {
    return sortArr.indexOf(a[departName]) - sortArr.indexOf(b[departName])
  })

  let newList = list
  return newList
}

function sortRegion (list = [], field = 'Region') {
  if (!list || !list.length) return []
  let sortArr = ['姑苏区', '吴中区', '园区', '高新区', '相城区', '吴江区', '常熟', '昆山', '张家港', '在线课']
  list = list.sort((a, b) => {
    if (a[field]) {
      return sortArr.findIndex(x => a[field].substring(0, 2) === x.substring(0, 2)) -
    sortArr.findIndex(x => b[field].substring(0, 2) === x.substring(0, 2))
    }
  })

  let newList = list
  return newList
}

// 格式化数字, e.g. 5210 => 5,210
function formatNum (num) {
  return `${num}`.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

function resetLegends ({FYear, FQuarter}) {
  let quarter = ''

  for (let key of Object.keys(Constants.quarterMapper)) {
    if (FQuarter.toString() === Constants.quarterMapper[key].toString()) {
      quarter = key
    }
  }

  let now = `${FYear} - ${quarter}`
  let last = `${(Number(FYear) - 1)} - ${quarter}`

  return [
    { label: last, color: '#82CEFF' },
    { label: now, color: '#1BE9BF' }
  ]
}

export default {
  formatNum,
  sortGrade,
  sortSubject,
  mapSubject,
  sortDepart,
  sortRegion,
  zhCompare,
  formatDate,
  mapFileType,
  generateUUID,
  resetLegends,
  getCurrentDate,
  formateFileName,
  clearWhiteSpace,
  fixedDecimalBits,
  formatAddTargtTime,
  generateImportErrorMsg
}
