import 'isomorphic-fetch';

const loadData = (param) => {
    return fetch(`https://api.spacexdata.com/v3/launches?limit=100${param}`)
        .then(res => {
            return res.json();
        });
};

export default loadData;