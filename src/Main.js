
mutation_rate = 0.05



const generatePopulation = () => {
    let population = []
    for(let i = 0; i < 8; i++){

        let flower = []

        flower[0] = math.random() * 10
        for(let j = 1; j < 7; j++){
            flower.push(Math.random() * 256)
        }

        flower[7] = math.random() * 7
        population.push(flower)
    }

    return population
}

const selection = (population) => {
    return population.sort((a, b) => a.fitness - b.fitness).slice(0, population.length / 2)

}


const crossover = () => {

}


const mutation = (best) => {
    const flower = best
    const gene = Math.random() * 8

    if (gene == 0) {
        flower[gene] = Math.random() * 10
    } else {
        if (gene > 0 && gene < 7) {
            flower[gene] = Math.random() * 256
        }
        else {
            flower[gene] = Math.random() * 7
        }
    }
    return flower

}


const geneticAlgorithm = (population) => {

    let generation = 0
    let best = null
    if(!population){
        generatePopulation()
    }
    best = selection(population)
    // Dont know what this does yet because off crossover
    for(let i = 0; i < 1000; i++){
        best = crossover()
    }

    mutation(best)

    return best
}