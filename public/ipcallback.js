let mainIp = null
let mainData = null

// eslint-disable-next-line no-unused-vars
function getIP (json) {
  mainIp = json.ip
  if (mainData) {
    console.log('ip 2nd')
    postData()
  }
}

// eslint-disable-next-line no-unused-vars
function getIpInfo (json) {
  var d = new Date()
  time = d.toTimeString();
  json["time"] = time;
  mainData = JSON.stringify(json)
  if (mainIp) {
    console.log('data first')
    postData()
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
