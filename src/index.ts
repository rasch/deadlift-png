interface LeftPad {
  (c?: string): (n: number) => (text: string | number) => string
}

export const leftPad: LeftPad = (c = " ") => n => text => {
  text = text + "" // convert number to string
  const p = n - text.length
  let pad = p < 0 ? 0 : p

  do {
    if (pad & 1) { text = c + text }
    c += c
  } while ((pad >>= 1))

  return text
}
