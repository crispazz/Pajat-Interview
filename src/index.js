import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import File1Points from'./points.js'
import GoogleMapReact from 'google-map-react';

const Marker = ({ icon1 }) => <div className='tooltip'>
    <span class="tooltiptext">{icon1}</span>
    <img src={require('./red-icon.png')} 
        alt='file1'
        className='marker-image' />
    </div>;
const Marker2 = ({ icon1 }) => <div className='tooltip'>
    <span class="tooltiptext">{icon1}</span>
    <img src={require('./blue-icon.png')} 
        alt='file1'
        className='marker-image' />
    </div>;
class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: -3.643847,
            lng: 39.674394
        },
        zoom: 3
    };
        
    render() {
        const  File1Markers = File1Points.file1_points.map(marker => (
        <Marker 
            lat={marker.lat}
            lng={marker.lng}
            icon1={marker.name}/>

        ));

        const  File2Markers = File1Points.file2_points.map(marker => (
        <Marker2 
            lat={marker.lat}
            lng={marker.lng}
            icon1={marker.name}/>

        ));

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBbzhECkzojSq2Vyke0wZj6eC6cnJ6l5q0' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {File1Markers}

                    {File2Markers}
                </GoogleMapReact>
            </div>
        );
    }
}

ReactDOM.render(
    <Map />,
    document.getElementById('root')
);
