import mutations from './mutations.js';
import actions from  './actions.js';
import getters from './getters.js';

export default{
    namespaced: true,
    state() {
        return{
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Alexandru',
                    lastName: 'Oltean',
                    areas: ['frontend', 'backend','career'],
                    description: 'Invata sau te rup in bataie',
                    hourlyRate: 30
                },
                {
                   id: 'c2',
                   firstName: 'Julie',
                   lastName: 'Jules',
                   areas: ['frontend', 'career'],
                   description: 'Sunt degeaba',
                   hourlyRate: 30
                }
            ]
        };
    },
    mutations,
    actions,
    getters
}