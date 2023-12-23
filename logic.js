async function click() {
  const fname = document.getElementById('fname').value
  const sname = document.getElementById('sname').value
  var ans = document.getElementById('getans')
  ans.innerText = 'wait a while'
  const url = `https://the-love-calculator.p.rapidapi.com/love-calculator?fname=${fname}&sname=${sname}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '02803b70a0mshd7149f13ba1548fp1643f3jsn7b9078e8f001',
      'X-RapidAPI-Host': 'the-love-calculator.p.rapidapi.com',
    },
  }
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    ans.innerText =
      result['result: '] +
      '. ' +
      fname +
      ' and ' +
      sname +
      ' match ' +
      result['percentage match: '] +
      '%'
    console.log(result['percentage match: '])
    console.log(result['result: '])
  } catch (error) {
    console.error(error)
  }
}

let btn = document.getElementById('btn')

btn.addEventListener('click', click)
