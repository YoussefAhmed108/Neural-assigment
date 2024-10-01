let POP_SIZE = 8
let MUTATION_RATE = 0.05
let NO_OF_GENES = 8


export const generatePopulation = () => {
    let population = []
    for (let i = 0; i < POP_SIZE; i++) {

        let flower = []

        flower[0] = Math.floor(Math.random() * (96 - 48 + 1)) + 48;
        for (let j = 1; j < NO_OF_GENES; j++) {
            flower.push(parseInt(Math.random() * 256))
        }

        flower[7] = parseInt(Math.random() * 7)
        population.push({ flower: flower, fitness: 0 })
    }
    //console.log(population)
    return population
}

const selection = (population) => {
    const sorted = population.sort((a, b) => b.fitness - a.fitness).slice(0, population.length / 2)
    return [...sorted , ...sorted]
}

const crossover = (parent1, parent2) => {
    //console.log(parent1)
    const randomIndex = Math.floor(Math.random() * (parent1.flower.length));
    console.log(randomIndex)
    const child1head = parent1.flower.slice(0, randomIndex);
    const child2head = parent2.flower.slice(0, randomIndex);
    let child1, child2;
    if (randomIndex !== parent1.length - 1) {
        const child1tail = parent2.flower.slice(randomIndex);
        const child2tail = parent1.flower.slice(randomIndex);
        child1 = child1head.concat(child1tail);
        child2 = child2head.concat(child2tail);
    }
    else {
        child1 = child1head;
        child2 = child2head;
    }
    console.log("Child 1:", child1);
    console.log("Child 2:", child2);
    //for now returning two children till i confirm with ta
    return ({ child1 : { flower : child1 , fitness : 0}, child2 : { flower : child2 , fitness : 0}});
}

const mutation = (best) => {
    const numberOfMutations = Math.ceil(NO_OF_GENES * MUTATION_RATE * POP_SIZE)


    console.log(numberOfMutations)
    for (let i = 0; i < numberOfMutations; i++) {
        const flower = best[Math.floor(Math.random() * best.length)].flower
        const gene = parseInt(Math.random() * 8)
        if (gene == 0) {
            flower[gene] = Math.floor(Math.random() * (96 - 48 + 1)) + 48;
        } else {
            if (gene > 0 && gene < 7) {
                flower[gene] = parseInt(Math.random() * 256)
            }
            else {
                flower[gene] = parseInt(Math.random() * 7)
            }
        }
    }

    console.log(best)
    return best

}


export const geneticAlgorithm = (population) => {
    console.log(population)
    let generation = 0
    let best = null
    let newPopulation = []
    if (!population || population.length === 0) {
        console.log('here')
        population = generatePopulation()
        return population
    }

    best = selection(population)
    console.log('-------------------------------')
    console.log(best)
    console.log('-------------------------------')
    for (let i = 0; i < best.length; i = i + 2) {
        const { child1, child2 } = crossover(best[i], best[i + 1]);
        newPopulation.push(child1, child2);
    }
    console.log('--------------------------------------')
    console.log("After Crossover")
    console.log(newPopulation)
    console.log('--------------------------------------')
    const result = mutation(newPopulation)

    //render new Population here 

    return result
}



// const pop = [
//         {
//             flower: [
//                 2, 211, 37, 184,
//                 143, 60, 21, 5
//             ],
//             fitness: 16
//         },
//         {
//             flower: [
//                 5, 17, 169, 90,
//                 232, 67, 139, 1
//             ],
//             fitness: 9
//         },
//         {
//             flower: [
//                 9, 225, 72, 70,
//                 163, 37, 148, 3
//             ],
//             fitness: 10
//         },
//         {
//             flower: [
//                 7, 133, 238, 141,
//                 65, 176, 56, 3
//             ],
//             fitness: 3
//         },
//         {
//             flower: [
//                 5, 201, 175, 181,
//                 211, 112, 92, 0
//             ],
//             fitness: 0
//         },
//         {
//             flower: [
//                 6, 127, 87, 39,
//                 222, 87, 252, 4
//             ],
//             fitness: 18
//         },
//         {
//             flower: [
//                 2, 159, 127, 57,
//                 207, 176, 214, 4
//             ],
//             fitness: 16
//         },
//         {
//             flower: [
//                 8, 82, 254, 187,
//                 15, 100, 114, 5
//             ],
//             fitness: 7
//         }
//     ]
//geneticAlgorithm([])