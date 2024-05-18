function generatePassword (chars) {
  let index = Math.floor(Math.random() * chars.length)
  return chars[index]
}

// 根據options為'on'的選項, 將其資料放進chars[]中, 並依照輸入的密碼長度使用迭代器, 將chars[]中的資料傳進generatepassword (chars)函式中, 產生隨機密碼
function randomPassword(options) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlphabet = lowerAlphabet.toUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@#$%^&*()_+-={}[]|\<>?,./:;'

  let chars = []
  if (options.lowercase === 'on') {
    chars = chars.concat(Array.from(lowerAlphabet))
  }
  if (options.uppercase === 'on') {
    chars = chars.concat(Array.from(upperAlphabet))
  }
  if (options.numbers === 'on') {
    chars = chars.concat(Array.from(numbers))
  }
  if (options.symbols === 'on') {
    chars = chars.concat(Array.from(symbols))
  }
  if (options.excludeChars) {
    chars = chars.filter(char => !options.excludeChars.includes(char))
  }

  if (!chars.length) {
    return 'There is no valid character in your selection.'
  }

  let password = ''
  for (let i = 0; i < options.passwordLength; i++) {
    password += generatePassword(chars)
  }
  return password
}

module.exports = randomPassword