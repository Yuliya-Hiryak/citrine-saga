import React, {useEffect} from 'react';
import { JOBS } from 'modules/api/endpoints';
import {useSelector, useDispatch} from 'react-redux';

import api from 'modules/api/api';
import { apiActions } from 'modules/api/actions';

export default function Jobs() {
    const state = useSelector(state => state.api[JOBS])
    const dispatch = useDispatch();

    useEffect(async () => {
        try{
            dispatch(apiActions.fetch(JOBS))
            const data = await api.fetch(JOBS)
            dispatch(apiActions.fetchSuccess(JOBS, data))
        } catch(e) {
            dispatch(apiActions.fetchFailure(JOBS, e))
        }
    }, []);
    
    console.log(state)

    return (
        <div>
            Jobs Components
        </div>
    )
}