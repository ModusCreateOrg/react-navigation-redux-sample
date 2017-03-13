/**
 * Created by stan229 on 5/27/16.
 */
const initialState = {};

export default function cars(state = initialState, action) {
    switch (action.type) {
        case 'SET_MODEL_YEARS' :
            return {
                ...state,
                modelYears : action.modelYears
            };
        case 'SET_MODEL_YEAR' :
            return {
                ...state,
                modelYear : action.modelYear,
                makes     : action.makes
            };

        case 'SET_MAKE' :
            return {
                ...state,
                make   : action.make,
                models : action.models
            };

        case 'SET_MODEL' :
            return {
                ...state,
                model    : action.model,
                vehicles : action.vehicles
            };

        case 'SET_VEHICLE' :
            return {
                ...state,
                vehicle        : action.vehicle,
                vehicleDetails : action.vehicleDetails
            };

        default:
            return state;
    }
};