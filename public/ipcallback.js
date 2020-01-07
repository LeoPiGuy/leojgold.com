let mainIp = null
let mainData = null
let dev = true

// eslint-disable-next-line no-unused-vars
function getIP (json) {
  mainIp = json.ip
  if (mainData) {
    if (!dev) postData()
  }
}

// eslint-disable-next-line no-unused-vars
function getIpInfo (json) {
  mainData = JSON.stringify(json)
  if (mainIp) {
    if (!dev) postData()
  }
}

function postData () {
  var ip = mainIp
  var xhr = new XMLHttpRequest()
  var link = 'https://us-central1-website-analytics-257923.cloudfunctions.net/logip?ip=' + ip
  xhr.open('POST', link)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(mainData)
}
