/**
 * Created by stan229 on 5/2/16.
 */
'use strict';

const BASE_URL    = 'https://www.nhtsa.gov/webapi/api/SafetyRatings/',
      BASE_PARAMS = 'format=json';

const NCAP  = {
    getModelYears () {
        return fetch(`${BASE_URL}?${BASE_PARAMS}`);
    },

    getMakes(modelYear) {
        return fetch(`${BASE_URL}modelyear/${modelYear}?${BASE_PARAMS}`);
    },

    getModels(modelYear, make) {
        return fetch(`${BASE_URL}modelyear/${modelYear}/make/${make}?${BASE_PARAMS}`);
    },

    getVehicles(modelYear, make, model) {
        return fetch(`${BASE_URL}modelyear/${modelYear}/make/${make}/model/${model}?${BASE_PARAMS}`);
    },

    getVehicle(vehicleId) {
        return fetch(`${BASE_URL}VehicleId/${vehicleId}?${BASE_PARAMS}`);
    }
}

export default NCAP;