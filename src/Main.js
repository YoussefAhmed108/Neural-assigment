
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

const crossover =(parent1 , parent2)=>{
    const randomIndex = Math.floor(Math.random()*(parent1.length));
   
    const child1head = parent1.slice(0,randomIndex);
    const child2head = parent2.slice(0,randomIndex);
    let child1,child2;
    if(randomIndex !== parent1.length-1){
        const child1tail = parent2.slice(randomIndex);
        const child2tail = parent1.slice(randomIndex);
         child1 =child1head.concat(child1tail);
         child2 =child2head.concat(child2tail);
    }
    else{
         child1 =child1head;
         child2 =child2head;
    }
        console.log("Child 1:", child1);
        console.log("Child 2:", child2);
        //for now returning two children till i confirm with ta
        return ({child1,child2}) ;
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
    let newPopulation = null
    if(!population){
        population=generatePopulation()
    }
    best = selection(population)
    
    for(let i = 0; i < best.length; i=i+2){
        const  [child1, child2]=crossover(best[i], best[i+1]);
        newPopulation.push(child1, child2);
    }

    mutation(newPopulation)

    //render new Population here 

    return best
}