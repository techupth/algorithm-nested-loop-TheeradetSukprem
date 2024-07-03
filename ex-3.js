// เริ่มเขียนโค้ดตรงนี้ 
function multiplicationTable(n) {
    let table = "";
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += (i * j) + "\t"; 
        }
        table += row + "\n"; 
    }
    return table;
}


const table = multiplicationTable(10);
console.log(table);