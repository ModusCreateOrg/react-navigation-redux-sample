/**
 * Created by stan229 on 5/27/16.
 */
import NCAP from '../data/NCAP';

function setModelYears(modelYears) {
    return {
        type : 'SET_MODEL_YEARS',
        modelYears
    };
};

function setModelYear(modelYear, makes) {
    return {
        type : 'SET_MODEL_YEAR',
        modelYear,
        makes
    };
};

function setMake(make, models) {
    return {
        type : 'SET_MAKE',
        make,
        models
    };
};

function setModel(model, vehicles) {
    return {
        type : 'SET_MODEL',
        model,
        vehicles
    };
};

function setVehicle(vehicle, vehicleDetails) {
    return {
        type : 'SET_VEHICLE',
        vehicle,
        vehicleDetails
    };
};

export function fetchModelYears() {
    return function (dispatch, getState) {
        return NCAP.getModelYears()
            .then((response) => response.json())
            .then((modelYears) => dispatch(setModelYears(modelYears)))
            .catch((err) => console.log(err));
    };
};

export function fetchMakes(modelYear) {
    return function (dispatch, getState) {
        return NCAP.getMakes(modelYear)
            .then((response) => response.json())
            .then((makes) => dispatch(setModelYear(modelYear, makes)))
            .catch((err) => console.log(err));
    };
};

export function fetchModels(make) {
    const makeName = make.Make;
    return function (dispatch, getState) {
        return NCAP.getModels(make.ModelYear, makeName)
            .then((response) => response.json())
            .then((models) => dispatch(setMake(makeName, models)))
            .catch((err) => console.log(err));
    };
};

export function fetchVehicles(model) {
    const modelName = model.Model;
    return function (dispatch, getState) {
        return NCAP.getVehicles(model.ModelYear, model.Make, modelName)
            .then((response) => response.json())
            .then((vehicles) => dispatch(setModel(modelName, vehicles)))
            .catch((err) => console.log(err));
    }
}

export function fetchVehicleDetails(vehicle) {
    return function (dispatch, getState) {
        return NCAP.getVehicle(vehicle.VehicleId)
            .then((response) => response.json())
            .then((vehicleDetails) => dispatch(setVehicle(vehicle.VehicleDescription, vehicleDetails)))
            .catch((err) => console.log(err));
    }
}