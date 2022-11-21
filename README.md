# eprimereplacer
Fix strings to be more e-prime compliant 

English Prime is a subset of the English language developed as an output of the field called General Semantics (read more here: https://en.wikipedia.org/wiki/E-Prime and https://www.amazon.com/Selections-Science-Sanity-Second-Korzybski/dp/0982755910/ref=asc_df_0982755910/?tag=hyprod-20&linkCode=df0&hvadid=312695266310&hvpos=&hvnetw=g&hvrand=8874221920177235286&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014093&hvtargid=pla-345937743244&psc=1). 

For the purposes of simple execution to benefit humanity numerous people including Robert Anton Wilson in Quantum Psychology have proposed that while speaking English humans replace the words "is", "are" and "always" with "seems to me", "seem to me" and "sombunall" (sometimes but not always). These two simple "fixes" to the English language could potentially disarm many inflamatory statements, disagreements, and violent precursors as the emphasis of the proposition in question becomes clearly self-reference rather than externally binding. 

For community generated content a simple filter would convert "is" "are" and "always" into their mappings which and basic guidance would be provided that the words "is" "are" and "always" are now banned as they are false to facts and users must clearly specify their text in operational language (a bar that scientists have faced for many years). The auto corrected text will often be unsatisfactory to the end user, which is intended as the end user can simply re-craft their message if better prose seems to be desired. 

An example of this exectuion has been provided in Javascript:

E.G:

const arrayOfObjects = [
  { is: 'seems to me' },
  { are:'seem to be' },
  { always: 'sumbunall' }
]
const sentence1 = 'Men are dumb. Everything is Christians fault. I am always right.';
const result1 = arrayOfObjects.reduce((f, s) => `${f}`.replace(Object.keys(s)[0], s[Object.keys(s)[0]]), sentence1)

console.log(result1)
