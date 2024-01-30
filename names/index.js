const list = require('../country/state/city/index')
const method = require('../utilities/utils/index')
const getPeopleInCity = list => {
  return method(list)
}
module.exports = getPeopleInCity
