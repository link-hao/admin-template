
/**
 * file2JSON.js
 * @param {*} file 文件流
 * @param {*} fieldArr 列名数组
 * @param {*} sheetName sheet名
 */
import XLSX from 'xlsx'
let File2JSON = (file, fieldArr, sheetName) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onload = e => {
      // 取出数据
      let data = e.target.result
      let allExcelData = XLSX.read(data, {type: 'binary', defval: ''}).Sheets
      let sheetNames = Object.keys(allExcelData)
      if (!sheetNames.length) {
        console.error('表格sheet不存在，请检查！')
        alert('表格sheet不存在，请检查！')
        return
      }

      let sheet = allExcelData[sheetNames[0]]
      let newArrList = XLSX.utils.sheet_to_json(sheet, {defval: ''})
      resolve(newArrList)
    }
    reader.readAsBinaryString(file)
  })
}

export default File2JSON
