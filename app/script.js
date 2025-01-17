document.addEventListener("DOMContentLoaded", () => {


// getting all data by ids
const calculateBtn = document.getElementById('calculateBtn')
const amountInput = document.getElementById("amount");
const interestInput = document.getElementById("interest");
const yearsInput = document.getElementById("years");
const monthlyPayment = document.getElementById("monthly");
const totalPayment = document.getElementById("total");
const totalInterestPayment = document.getElementById("totalInterest");


//caluclate loan function 

const calculateLoan = () =>{
    const principalAmnt = parseFloat(amountInput.value)
    const interest = parseFloat(interestInput.value)
    const years =  parseFloat(yearsInput.value)
    if(isNaN(principalAmnt) || isNaN(interest) || isNaN(years)){
        alert("Please enter valid number")
        return
    }
    const x = Math.pow(1 + interest, years);
    const monthly = (principalAmnt * x * interest) / (x - 1);

    if (isFinite(monthly)) {
      // Calculate total payment and interest
      const total = monthly * years;
      const totalInterest = total - principalAmnt;

      // Display results with animation
      animateValue(monthlyPayment, 0, monthly, 1000);
      animateValue(totalPayment, 0, total, 1000);
      animateValue(totalInterestPayment, 0, totalInterest, 1000);
    } 
}
const  animateValue = (element, start, end, duration) => {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }
document.addEventListener("click",calculateLoan)

});