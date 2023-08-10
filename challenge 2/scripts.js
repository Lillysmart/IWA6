const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line
let balance= null

if((hourOfDay === 0) && (minuteOfDay === 0))  {
	const taxAsDecimal = parseInt(tax) /100
    console.log (taxAsDecimal) 

    let finalTax =  taxAsDecimal *salary //8% of salary
    console.log (finalTax)

  const startingAfterTax = salary - finalTax
  console.log(startingAfterTax)
    
 balance = startingAfterTax -transport - food - rent

console.log("R"+ balance.toFixed(2)) 
} else{
    console.log('No balance found')
 }