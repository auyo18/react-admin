const promise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(123)
    }, 3000)
  })
}

(async () => {
  let data = await promise()
  console.log(data)
})()
