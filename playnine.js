function Stars(props) {
    const noOfStars = props.noOfStars;
    let stars = [];
    
    for(let i=0; i<noOfStars; i++) {
        stars.push(<i className="fa fa-star"></i>);
    }
    return (
        <div className="col-5">
          {stars}
        </div>
    );
  }
  
  function Seperator(props) {
      let el;
      if(props.correctAnswer === true) {
        el = <button onClick={props.markAsAccepted} className="btn btn-success fa fa-check"></button>;
    } else if(props.correctAnswer === false) {
        el = <button onClick={props.reselectAnswer} className="btn btn-danger fa fa-times"></button>;
    } else {
        el = <button onClick={props.checkAnswer}>=</button>;
    }
    return (
        <div className="col-2 answer">
          {el}
        </div>
    );
  }
  
  function Answer(props) {
      return (
     <div className="col-5">
          {props.selectedNumbers.map(item => <span className="numbers">{item}</span>)}
        </div>
    );
  }
  
  function Numbers(props) {
      let numbers = _.range(1,10);
    
    function getClassName(number) {
        if(props.usedNumbers.indexOf(number) > -1) {
          return 'numbers selected used';
      } else if(props.selectedNumbers.indexOf(number) > -1) {
          return 'numbers selected';
      } 
      return 'numbers';
    }
    
      return (
        <div class="number-box text-center">
          {numbers.map(item => <span onClick = {() => props.selectNumber(item)} className={getClassName(item)}>{item}</span>)}
        </div>
    );
  }
  
  class App extends React.Component {
      constructor(props) {
        super(props);
      
      this.state = {
          selectedNumbers: [],
        noOfStars : Math.floor(1 + Math.random() * 9),
        correctAnswer: null,
        usedNumbers: []
      };
    }
    
    selectNumber = (number) => {
        this.setState(prevState => (
      {selectedNumbers: prevState.selectedNumbers.concat(number)}
      ));
    };
    
    checkAnswer = () => {
        this.setState((prevState) => (
      {correctAnswer: prevState.noOfStars === prevState.selectedNumbers.reduce((prevVal, curVal) => prevVal + curVal)}
      ));
    };
    
    markAsAccepted = () => {
        this.setState(prevState => (
      {
          usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
          selectedNumbers: [],
              noOfStars : Math.floor(1 + Math.random() * 9),
        correctAnswer: null
      }
      ));
    }
    
    reselectAnswer = () => {
        this.setState(prevState => (
      {
          selectedNumbers: [],
        correctAnswer: null
      }
      ));
    }
    
    render() {
        return (
          <div className="container">
        <h4 className="title">Play Nine...</h4>
            <div className="row">
              <Stars noOfStars = {this.state.noOfStars}/>
                <Seperator reselectAnswer={this.reselectAnswer} markAsAccepted={this.markAsAccepted} correctAnswer={this.state.correctAnswer} checkAnswer={this.checkAnswer}/>
              <Answer selectedNumbers = {this.state.selectedNumbers}/>
            </div>
          <Numbers usedNumbers={this.state.usedNumbers} selectedNumbers = {this.state.selectedNumbers} selectNumber = {this.selectNumber}/>
          </div>
      );
    }
  }
  
  
  
  ReactDOM.render(<App/>, mountNode);