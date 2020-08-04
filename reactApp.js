class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
        this.shotSound = new Audio('./assets/audio/BOUNCE+1.wav')
        this.scoreSound = new Audio('./assets/audio/Swish.wav')
    }

    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1
            this.scoreSound.play()

            setTimeout(() => {
                this.scoreSound.play()
            }, 100)
        }

        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }


    render() {
        let shotPercentageDiv

        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
            shotPercentageDiv = (
                <div>
                    <strong>Shooting %: {shotPercentage}</strong>
                </div>
            )
        }


        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>

                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>

                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>

                {shotPercentageDiv}

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}
function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc}
                />

                <div className="versus">
                    <img src="./assets/images/basket-ball-net.jpg" />
                    <h1>VS</h1>
                </div>

                <Team
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc}
                />
            </div>
        </div>
    )
}

function App(props) {
    const roosters = {
        name: 'Rulyville Roosters',
        logoSrc: './assets/images/rulyrooster.png'
    }

    const foxes = {
        name: 'Funkytown Foxes',
        logoSrc: './assets/images/outFoxed.png'
    }
    return (
        <div className="App">
            <Game
                venue="Rulyville Arena"
                homeTeam={roosters}
                visitingTeam={foxes}
            />

            <Game
                venue="Funkytown Center"
                homeTeam={foxes}
                visitingTeam={roosters}
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
// Clipart images courtesy of: https://clipartix.com/fox-clipart-image-256/ and
// https://clipartix.com/rooster-clip-art-image-32293/ and https://images.freeimages.com/images/premium/previews/3937/39372318-basket-ball-net.jpg

// Audio sound credits courtesy of: https://www.freesoundeffects.com/free-track/bounce-1-468901/
// https://www.freesoundeffects.com/free-track/swish-468906/ and http://soundbible.com/1510-Rooster.html and 