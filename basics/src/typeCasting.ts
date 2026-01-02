let fname = document.querySelector('#faname')! as HTMLInputElement;
//! (non-null assertion) Tells TypeScript: “this will NOT be null”

let f2name = <HTMLInputElement>document.querySelector('#fanme')!;        
f2name.value; 

fname.value ='Abhi'