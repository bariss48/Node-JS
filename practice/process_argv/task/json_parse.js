const fs =require('fs');
// read and parse JSON object
const dataBuffer = fs.readFileSync('data.json');
console.log(dataBuffer);
const convert_String = dataBuffer.toString();
console.log(convert_String);
const parse_string = JSON.parse(convert_String);
console.log(parse_string.human.name);

parse_string.human.name = "berk baris";
parse_string.human.age = "24";

const getNewOne = JSON.stringify(parse_string);
fs.writeFileSync('data.json',getNewOne);

