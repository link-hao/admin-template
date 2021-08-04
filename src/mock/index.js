import Mock from 'mockjs'

export default {
  getNum (min = 5, max = 7, fix = 0) {
    let mockRrg = `number|${min}-${max}`
    if (fix) {
      mockRrg += `.${fix}`
    }
    let data = {}
    data[mockRrg] = 1
    return Mock.mock(data).number
  }
}
