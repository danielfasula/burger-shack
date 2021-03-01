import { FAKEDB } from '../db/FAKEDB';

let id = 2
class ShakesService {
    getAll() {
        return FAKEDB.shakes
    }
    getOne(id) {
        const foundShake = findShake(id)
        return foundShake
    }
    create(newShake) {
        newShake.id = id++
        FAKEDB.shakes.push(newShake)
        return newShake
    }
    delete(id) {
        findShake(id)
        FAKEDB.shakes = FAKEDB.shakes.filter(s => s.id != id)
    }
    edit(editedShake, id) {
        const foundShake = findShake(id)
        Object.keys(editedShake).forEach(key => {
            foundShake[key] = editedShake[key]
        })
        return foundShake
    }

}

function findShake(id) {
    let foundShake = FAKEDB.shakes.find(s => s.id == id)
    if (!foundShake) {
        throw new Error('invalid id')
    }
    return foundShake
}
export const shakesService = new ShakesService();