import { APP_ACTIONS } from "modules/app/actions";

function getInitialState() {
    return {
        selectedJob: null
    };
}

const INITIAL_STATE = getInitialState();

const stateToActionMapping = {
    [APP_ACTIONS.APP_FILTER_EMPLOYEES]: (state, action) => {
        return {
            ...state, 
            selectedJob: action.payload
        }
    }
}

const appReducer = (state=INITIAL_STATE, action) => {
    return stateToActionMapping[action.type] ? stateToActionMapping[action.type](state, action) : state;
}

export default appReducer;