
function get (path) {
  return new Promise((resolve, reject) => {
    const req = XMLHttpRequest()
    req.onreadystatechange = () => {
      if (req.readystate !== 4) return
      if (succuess) resolve(JSON.parse(req.body))
      else reject(asdlkfjalsdjf)
    }

    req.send()
  })
}
