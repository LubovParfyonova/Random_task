
/* function getArrFullName () {
    const res1 = [];
    this.getFullName.map((index) => {
        res1.push(`${index+1} ${item}`);
    } )
    return res1;
}
const userArrFullname = getArrFullName(userArr);
console.table(userArrFullname); */
const getArrFullName = userArr.map ((getFullName) => {
    return `${getFullName}`
})
const userArrFullname = getArrFullName(userArr);
console.table(userArrFullname);


/* function getArrFullName (arr) {
    const res2 = arr.map((index, item) => {
        console.log(`${item}${index+1}  ${this.firstName}`);
    })


}
const userFullNameArr = getArrFullName(userArr);
console.table(userFullNameArr); */


function getAdult () {

    return this.age >= 18;
}
const res = userArr.filter(getAdult(this.age));
console.log(res);
