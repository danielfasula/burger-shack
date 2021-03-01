import express from "express";
import BaseController from "../utils/BaseController";
import { FAKEDB } from '../db/FAKEDB'
import { shakesService } from '../services/ShakesService'

export class ShakesController extends BaseController {

    constructor() {
        super('api/shakes');
        this.router
        .get('', this.getAll)
        .get('/:id', this.getOne)
        .post('', this.create)
        .delete('/:id', this.delete)
        .put('/:id', this.edit)
    }

    async getAll(req,res, next) {
        try {
            const shakes = shakesService.getAll()
            res.send(shakes)
        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            res.send(shakesService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let newShake = req.body
            const shake = shakesService.create(newShake)
            res.status(201).send( {data: shake, message: "milkshake brings all the boys to the yard" } )
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params.id
            shakesService.delete(id)
            res.send("Yeet that Shake")
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            let editedShake = req.body
            const shake = shakesService.edit(editedShake, req.params.id)
            res.send(shake)
        } catch (error) {
            next(error)
        }
    }
}