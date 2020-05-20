let name = "Some_image_2/12__5/200";

console.log("before: ", name);

let regex = new RegExp("\\d+", "g");

function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

var matches = [];
var match = regex.exec(name);
while (match != null) {
    matches.push(match);
    match = regex.exec(name);
}
matches = matches.reverse();

for (let i = 0; i < matches.length; i++) {
    let currentMatch = matches[i];
    let value = currentMatch[0];

    let toAdd = 3 - value.length;
    if (toAdd > 0) {
        let replaceValue = "";
        for (let n = 0; n < toAdd; n++) {
            replaceValue += "0";
        }
        replaceValue += value;
        //console.log(replaceValue);

        name = replaceRange(
            name,
            currentMatch.index,
            currentMatch.index + value.length,
            replaceValue
        );
    }
    // else {
    //     console.log(value);
    // }
}

console.log("after: ", name);
