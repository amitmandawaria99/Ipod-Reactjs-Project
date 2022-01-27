import React from 'react';

import artistImage from './assets/images/amit.jpeg';

class Artists extends React.Component{

    constructor(){
        super();
    }


    render(){
        return(
            <div style={styles.artistsContainer}>
                <div style={styles.titleBar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://cdn-icons.flaticon.com/png/512/2908/premium/2908584.png?token=exp=1643283185~hmac=613354d72a08c97d6ff02dba7c3bcc5d"></img>
                </div>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>

                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>IPod.js <span><img style={styles.image} src="https://cdn-icons-png.flaticon.com/512/447/447591.png" /></span></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made with <img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/512/833/833472.png" ></img> by : Amit Mittal</p>
                    </div>

                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thanks for visiting the app !!</h5>
                </div>
            </div>
        );
    }

}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Artists; 