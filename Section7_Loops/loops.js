for (let i = 1; i <= 10; i++) {
  console.log('hello', i);
}

for (let i = 1; i <= 10; i++) {
  console.log('Outer loop: ', i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log('   Inner Loop', j);
  }
}

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let sub of subreddits) {
  console.log(sub);
}
