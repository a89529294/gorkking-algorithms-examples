// pass in a person to start the search for a mango seller in that person's friend list, look through their friends friends list if necessary.

function isMangoSeller(name: string) {
  return name.at(-1) === "m"
}

const graph = {
  you: ["Bob", "Alice", "Claire"],
  Bob: ["Anuj", "Peggy"],
  Alice: ["Peggy"],
  Claire: ["Thom", "Jonny"],
  Anuj: [] as string[],
  Peggy: [] as string[],
  Thom: [] as string[],
  Jonny: [] as string[],
}
function searchMangoSellerFrom(name: keyof typeof graph) {
  let searchQueue = graph[name]
  while (searchQueue.length) {
    if (isMangoSeller(searchQueue[0])) {
      console.log(`${searchQueue[0]} is a mango seller!`)
      return true
    } else {
      searchQueue = searchQueue.concat(graph[searchQueue[0] as keyof typeof graph])
      searchQueue.shift()
    }
  }
  return false
}

searchMangoSellerFrom("you")
