export function aggregateParameters(parametersArray,parameters) {
    function addWeights(weights1, weights2,weights3,weights4,weights5) {
      return weights1.map((layer, i) =>
          Array.isArray(layer)
              ? layer.map((neuron, j) =>
                  Array.isArray(neuron)
                      ? neuron.map((value, k) => (value + weights2[i][j][k]+weights3[i][j][k]+weights4[i][j][k]+weights5[i][j][k])/5) // Nested arrays (weight matrices)
                      : (neuron + weights2[i][j]+weights3[i][j]+weights4[i][j]+weights5[i][j] )/5 // Bias terms (1D arrays)
              )
              : (layer + weights2[i]+weights3[i]+weights4[i]+weights5[i])/5 // Last bias term (scalar)
      );
  }
    const numClients = parametersArray.length
    if (numClients === 0) return null
    console.log(parametersArray)
    const p = [];
    for (const [clientId, parameters] of parametersArray){
       console.log("HII")
       p.push(parameters)
    }    
    console.log(p.length)
    const aggregated = addWeights(p[0],p[1],p[2],p[3],p[4]);
  
    return aggregated
}



/*
export function aggregateParameters(parametersArray,parameters) {
    function addWeights(weights1, weights2) {
      return weights1.map((layer, i) =>
          Array.isArray(layer)
              ? layer.map((neuron, j) =>
                  Array.isArray(neuron)
                      ? neuron.map((value, k) => (value + weights2[i][j][k])/2) // Nested arrays (weight matrices)
                      : (neuron + weights2[i][j])/2 // Bias terms (1D arrays)
              )
              : (layer + weights2[i])/2 // Last bias term (scalar)
      );
  }
    const numClients = parametersArray.length
    if (numClients === 0) return null
    console.log(numClients)
    const p = [];
    for (const [clientId, parameters] of parametersArray){
       p.push(parameters)
    }    
    const aggregated = addWeights(p[0],p[0]);
  
    return aggregated
}
export function aggregateParameters(parametersArray,parameters) {
    function addWeights(weights1, weights2,weights3,weights4,weights5) {
      return weights1.map((layer, i) =>
          Array.isArray(layer)
              ? layer.map((neuron, j) =>
                  Array.isArray(neuron)
                      ? neuron.map((value, k) => (value + weights2[i][j][k]+weights3[i][j][k]+weights4[i][j][k]+weights5[i][j][k])/5) // Nested arrays (weight matrices)
                      : (neuron + weights2[i][j]+weights3[i][j]+weights4[i][j]+weights5[i][j] )/5 // Bias terms (1D arrays)
              )
              : (layer + weights2[i]+weights3[i]+weights4[i]+weights5[i])/5 // Last bias term (scalar)
      );
  }
    const numClients = parametersArray.length
    if (numClients === 0) return null
    console.log(parametersArray)
    const p = [];
    for (const [clientId, parameters] of parametersArray){
       console.log("HII")
       p.push(parameters)
    }    
    console.log(p.length)
    const aggregated = addWeights(p[0],p[1],p[2],p[3],p[4]);
  
    return aggregated
}


export function aggregateParameters(parametersArray,parameters) {
    function addWeights(weights1, weights2,weights3,weights4,weights5) {
      return weights1.map((layer, i) =>
          Array.isArray(layer)
              ? layer.map((neuron, j) =>
                  Array.isArray(neuron)
                      ? neuron.map((value, k) => (value + weights2[i][j][k] + weights3[i][j][k] + weights4[i][j][k] + weights5[i][j][k])/2) // Nested arrays (weight matrices)
                      : (neuron + weights2[i][j] + weights3[i][j] + weights4[i][j] + weights5[i][j])/2 // Bias terms (1D arrays)
              )
              : (layer + weights2[i] + weights3[i] + weights4[i] + weights5[i])/2 // Last bias term (scalar)
      );
  }
    const numClients = parametersArray.length
    if (numClients === 0) return null
    console.log(numClients)
    const p = [];
    for (const [clientId, parameters] of parametersArray){
       p.push(parameters)
    }    
    const aggregated = addWeights(p[0],p[1],p[2],p[3],p[4]);
  
    return aggregated
}
*/
