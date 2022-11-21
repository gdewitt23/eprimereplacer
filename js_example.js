const arrayOfObjects = [
  { is: 'seems to me' },
  { are:'seem to be' },
  { always: 'sumbunall' }
]
const sentence1 = 'Men are dumb. Everything is Christians fault. I am always right.';
const result1 = arrayOfObjects.reduce((f, s) => `${f}`.replace(Object.keys(s)[0], s[Object.keys(s)[0]]), sentence1)

console.log(result1)
