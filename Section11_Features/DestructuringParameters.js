const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}

// We can unpack the values we want right in the parameter list:
function print({
                   first,
                   last,
                   title
               }) {
    console.log(`${first} ${last}, ${title}`)
}
