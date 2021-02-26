import request from 'superagent';

const URL = 'https://fast-reaches-07028.herokuapp.com/animals/';


export async function getAnimals() {
    const response = await request.get(`${URL}/animals`);

    return response.body;
}

export async function getTemperaments() {
    
    const { body } = await request.get(`${URL}/temperaments`);

    return body;
}

export async function getAnimal(
    id
) {
    const { body } = await request.get(`${URL}/animals/${id}`);

    return body;
}

export async function addAnimals(anAnimal) {
    const { body } = await request
    .post(`${URL}/animals/`)
    .send(anAnimal);

    return body;

}

export async function deleteAnimals(id) {
    const { body } = await request.delete(`${URL}/animals/${id}`);

    return body;

}

export async function updateAnimals(id, anAnimal) {
    const { body } = await request.put(`${URL}/animals/${id}`)
    .send(anAnimal);

    return body;
}

export const getTemperamentId = (animal, temperaments) => temperaments.find(temperament => animal.temperament === temperament.species).id;