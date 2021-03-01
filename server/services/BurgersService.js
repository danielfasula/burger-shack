import { FAKEDB } from "../db/FAKEDB";

let id = 2


class BurgersService {

    getAll() {
        return FAKEDB.burgers
    }

    getOne(id) {
        const foundBurger = findBurger(id)
        return foundBurger
    }

    create(newBurger) {
        newBurger.id = id++
        FAKEDB.burgers.push(newBurger)
        return newBurger
    }

    delete(id) {
        findBurger(id)
        FAKEDB.burgers = FAKEDB.burgers.filter(b => b.id != id)
    }

    edit(editedBurger, id) {
        const foundBurger = findBurger(id)
        Object.keys(editedBurger).forEach(key => {
            foundBurger[key] = editedBurger[key]
        })
        return foundBurger
    }

}

function findBurger(id) {
    let foundBurger = FAKEDB.burgers.find(b => b.id == id)
    if (!foundBurger) {
        throw new Error('invalid id')
    }
    return foundBurger
}

export const burgersService = new BurgersService();