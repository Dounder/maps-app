import { createStore } from 'vuex'

// My custom modules
import placesModule from './places' // Module
import { PlacesState } from './places/state' // Module state interface

import mapModule from './map' // Module
import { MapState } from './map/state' // Module state interface

export interface StateInterface {
    places: PlacesState
    map: MapState
}

export default createStore<StateInterface>({
    modules: {
        places: placesModule,
        map: mapModule,
    },
})
