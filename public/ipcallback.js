function getIP (json) {
  var data = JSON.stringify(json)
  var ip = json.ip
  var xhr = new XMLHttpRequest()
  var link = 'https://us-central1-website-analytics-257923.cloudfunctions.net/logip?ip=' + ip
  xhr.open('POST', link)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(data)
}
