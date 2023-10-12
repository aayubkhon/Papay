// 📌  I-Task: arrayning ichidagi 0 index qiymatni arrayning oxiriga qoyib return qilsin


const MoveElement = (smt) =>{
   smt.push(smt[0])
   smt.shift(smt[0])
   return smt
}



console.log(MoveElement([1,2,3,4,5]));
