const findCheapestUnprocessedNode = (costs, processedNodes) => {
  const unprocessedNodes = Object.keys(costs).filter((node) => !processedNodes.includes(node))
  if (unprocessedNodes.length === 0) return null
  return unprocessedNodes.reduce((minNode, node) => (costs[minNode] > costs[node] ? node : minNode))
}

const graph = {
  START: {
    A: 6,
    B: 2,
  },
  A: {
    FIN: 1,
  },
  B: {
    A: 3,
    FIN: 5,
  },
  FIN: {},
}

const costs = {
  A: 6,
  B: 2,
  FIN: Infinity,
}

const parents = {
  A: "START",
  B: "START",
  FIN: null,
}

const processed = []

let cheapestNode = findCheapestUnprocessedNode(costs, processed)

while (cheapestNode) {
  const neighbors = Object.keys(graph[cheapestNode])
  neighbors.forEach((neighborNode) => {
    const oldCost = costs[neighborNode]
    const newCost = costs[cheapestNode] + graph[cheapestNode][neighborNode]
    if (oldCost > newCost) {
      costs[neighborNode] = newCost
      parents[neighborNode] = cheapestNode
    }
  })

  processed.push(cheapestNode)
  cheapestNode = findCheapestUnprocessedNode(costs, processed)
}

console.log(costs, parents)
