let Convertor = {
  uniqueArr (arr) {
    return Array.from(new Set(arr))
  },
  /**
  * @param {Object} source
  */
  convertSelectList (data) {
    let newArr = []
    if (data && data.length) {
      data.forEach(item => {
        let itemObj = {
          label: item.Label,
          value: item.Value
        }
        newArr.push(itemObj)
      })
      return newArr
    } else {
      return []
    }
  }
}
export default Convertor
