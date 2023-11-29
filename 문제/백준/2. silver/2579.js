let [n, ...arr] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [n, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

arr = arr.map(e => Number(e.trim()))
let dp = new Array(n).fill(0);

dp[0] = arr[0];
dp[1] = dp[0] + arr[1];
dp[2] = Math.max(arr[0], arr[1]) + arr[2];

for(let i = 3; i < n; i++){
  dp[i] = Math.max(arr[i] + arr[i-1] + dp[i-3], arr[i] + dp[i-2]);
}

console.log(dp[n-1]);