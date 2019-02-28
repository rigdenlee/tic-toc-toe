import React, {Component} from 'react';
import Square from '../../components/Square/Square';

let calculateWinner = null;
calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[c]) {
            return squares[a];
        }
    }
    return null;
}


class Board extends Component {
    state = {
        squares: Array(9).fill(null),
        whoNext: false
    }


    clickHandler = (i) => {
     const squares = this.state.squares.slice();
     
        if (calculateWinner(squares) || squares[i]) {
            return;
        }


     squares[i] = this.state.whoNext ? 'X' : 'O';
     const whoNext = !this.state.whoNext;
     this.setState({squares: squares, whoNext: whoNext });
    }

    callSquare(i) {
        return ( <Square
         value={this.state.squares[i]}
         click={() => this.clickHandler(i)}
        /> );
    }
 
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.whoNext ? 'X': 'O');
        }

        return (
            <div className='board'>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.callSquare(0)}
                    {this.callSquare(1)}
                    {this.callSquare(2)}
                </div>

                <div className='board-row'>
                    {this.callSquare(3)}
                    {this.callSquare(4)}
                    {this.callSquare(5)}
                </div>

                <div className='board-row'>
                    {this.callSquare(6)}
                    {this.callSquare(7)}
                    {this.callSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;


