// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const pAequorFactory = (num, arrOfBases) => {
  return {
    specimenNum: num,
    dna: arrOfBases,
    compareDNA(diffPaObj) {
      
    },
  };
};
const mutate = (obj) => {
  // console.log(Object.entries(obj)[1]);
  for (const ob in obj) {
    const n = Math.floor(Math.random() * 15);
    let selectedBase = returnRandBase();
    while (obj.dna[n] === selectedBase) {
      selectedBase = returnRandBase();
    }
    obj.dna[n] = selectedBase;
    return obj;
  }
};

let c = mutate(pAequorFactory(4, mockUpStrand()));
console.log(c);
// console.log(pAequorFactory(5, mockUpStrand()));
