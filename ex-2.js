// เริ่มเขียนโค้ดตรงนี้ 
function printStar(n, text) {
   let finalResult = "";
   for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += text + "\t";
        }
        finalResult += result + "\n";
   }
   return finalResult;
}

console.log(printStar(5, '*'));