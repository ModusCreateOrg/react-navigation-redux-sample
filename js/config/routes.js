import ModelYearList from "../components/ModelYearList";
import MakeList from "../components/MakeList";
import ModelList from "../components/ModelList";
import VehicleList from "../components/VehicleList";
import VehicleDetails from "../components/VehicleDetails";

const Routes = {
    Home: { screen: ModelYearList },
    Makes: { screen: MakeList },
    Models: { screen: ModelList },
    Vehicles: { screen: VehicleList },
    VehicleDetails: { screen: VehicleDetails }
};

export default Routes;
