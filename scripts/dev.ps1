param(
  [Parameter(ValueFromRemainingArguments=$true)]
  [string[]]$Args
)
# Pass through to Node
node src/index.js @Args

