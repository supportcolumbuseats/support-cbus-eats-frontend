import React from 'react'

class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {feature: {
                name: props.featureName,
                properties: props.featureProperties
            }};
    }

    render() {
        var options = this.state.feature.properties;
        if (this.state.feature.properties && !Array.isArray(this.state.feature.properties))
            options = [this.state.feature.properties];
        return (
            <div className="px-6 py-4">
                <p className="pb-2">{this.state.feature.name}</p>
                {options && options.map((option, ix) =>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={this.state.feature.name +'_option_' + ix}>{option}</span>
                )}
            </div>
        );
    }
}

export default Feature;