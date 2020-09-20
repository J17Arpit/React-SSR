import React from 'react';

import Header from './Header';
import Footer from './Footer';
import FilterWrapper from './FilterWrapper/FilterWrapper';
import CardWrapper from './CardWrapper/CardWrapper';
import loadData from '../helpers';
import './Home.css';

const filterData = (filterKey, filterValue, data) => {
    if (filterKey === 'launch_year') {
        filterValue = filterValue.toString();
    }
    return data.filter(item => item[filterKey] === filterValue);
}
class Home extends React.Component {
    constructor(props) {
        super(props);
        if (props.staticContext && props.staticContext.data) {
            this.state = {
                data: props.staticContext.data,
                params: {},
            };
        } else {
            this.state = {
                data: [],
                params: {},
            };
        }
        this.filterHandler = this.filterHandler.bind(this);
    }


    filterHandler(type, value) {
        let currentUrl = window.location.href;
        let staticUrl = currentUrl.split('?')[0];
        const prefix = '?';
        let urlParams = `${type}=${value}`;

        let url = `${staticUrl}${prefix}${urlParams}`;

        window.history.pushState('', '', url);
        loadData().then(data => {
            this.setState({
                data: filterData(type, value, data),
                params: {
                    ...this.state.params,
                    [type]: value,
                }
            });
        });
    };

    componentDidMount() {
        setTimeout(() => {
            if (window.__INITIAL_DATA__) {
                this.setState({
                    data: window.__INITIAL_DATA__
                });
                delete window.__INITIAL_DATA__;
            } else {
                if (window.location.href.indexOf('?') > -1) {
                    let url = window.location.href;
                    let urlParams = url.split('?')[1].split('=');
                    if (urlParams.length) {
                        let type = urlParams[0];
                        let value = !isNaN(urlParams[1]) ? parseInt(urlParams[1]) : urlParams[1];
                        loadData().then(data => {
                            this.setState({
                                data: filterData(type, value, data),
                                params: {
                                    ...this.state.params,
                                    [type]: value,
                                }
                            });
                        });
                    }
                } else {
                    loadData().then(data => {
                        this.setState({
                            data
                        });
                    });
                }
            }
        }, 0);
    }

    render() {
        const { data, params } = this.state;
        return (
            <div className="main">
                <Header />
                <div className="container">
                    <FilterWrapper clickHandler={this.filterHandler} selectedFilters={params} />
                    <CardWrapper list={data} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;