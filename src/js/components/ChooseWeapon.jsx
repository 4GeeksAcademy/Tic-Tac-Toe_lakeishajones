import {React, useState} from 'react'
import styles from "../../styles/home.module.css"

const ChooseWeapon = ({weaponSelection}) => {
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');

    const setMarker = (e) => {
        const selectedWeapon = e.target.textContent;
        
        // Pass both weapon and player names to parent component
        if (selectedWeapon === 'X') {
            weaponSelection("X", player1Name, player2Name)
        } else {
            weaponSelection("O", player1Name, player2Name)
        }
    }

    const handlePlayer1Change = (e) => {
        setPlayer1Name(e.target.value);
    }

    const handlePlayer2Change = (e) => {
        setPlayer2Name(e.target.value);
    }

    return (
        <div>
            <div className="row py-3">
				<div className="col text-center">
					<h2>Pick a Weapon</h2>
				</div>
			</div>
			<div className="row ">
				<div className="col-12">
					<div className="choose-weapon d-flex flex-column align-items-center justify-content-center p-5" style={{width:"100%",background:'rgb(41, 39, 39)'}}>
						<h3>Choose your weapon</h3>
						<div className="inputs-container d-flex">
							<input 
                                type="text" 
                                placeholder="Player 1 username"
                                value={player1Name}
                                onChange={handlePlayer1Change}
                            />
							<input 
                                type="text" 
                                placeholder="Player 2 username"
                                value={player2Name}
                                onChange={handlePlayer2Change}
                            />
						</div>
						<div className="weapon-container d-flex "style={{fontSize:"70px"}}>
						<div onClick={setMarker} className={`${styles['bg-weapon']} ${styles['btn-hover']} m-2 text-center`} style={{color: 'yellow'}}>X</div>
						<div onClick={setMarker} className={`${styles['bg-weapon']} ${styles['btn-hover']} m-2 text-center`} style={{color: 'rgb(4, 156, 226)'}}>O</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default ChooseWeapon;