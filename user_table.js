// print table number give range number by userno
let startnumber = Number(prompt('Enter start number'));
let endnumber = Number(prompt('Enter end number'));
let number = Number(prompt('Enter number'));

for (let i = startnumber; i <= endnumber; i++) {
    console.log(`${number}* ${i} = ${number * i} `)
}
