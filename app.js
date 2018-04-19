var Counter = React.createClass({
    getInitialState: function() {
      console.log('Setting states');
        return {
            counter: 0
        };
    },
    getDefaultProprs: function() {
      console.log('Setting default props');
    },
    componentWillMount: function(){
    },
    componentDidMount: function() {
      console.log('Updating states, calling AJAX, addEventListeners');
    },
    componentWillReceiveProps: function(newProps) {
      console.log('Checking if newProps are diffrent than current, checking if newProps have some specific values, update something with newProps');
    },
    shouldComponentUpdate: function(nextProps, newState) {
      console.log('Depending on nextProps/newState we can re-render or not, for example to improve performance');
      return true;
    },
    componentWillUpdate: function() {

    },
    componentDidUpdate: function() {
       console.log('Updating states, calling AJAX, similar to componentDidMount but in response to updates');
    },
    componentWillUnmount:function() {
      console.log('Cleaning stuff');
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function() {
      console.log('Rendering object to DOM');
        return React.createElement('div', { className: 'counters' },
            React.createElement('div', {className:'add', onClick: this.increment }, '+'),
            React.createElement('div', {className:'substract', onClick: this.decrement }, '-'),
            React.createElement('span', {}, 'Counter: ' + this.state.counter)
        );
    }
});
// var Counter = React.createClass({
//     getInitialState: function() {
//         return {
//             counter: 0
//         };
//     },

//     increment: function() {
//         this.setState({
//             counter: this.state.counter + 1
//         });
//     },

//     render: function() {
//         return React.createElement('div', {onClick: this.increment},
//             React.createElement('span', {}, 'Licznik ' + this.state.counter)
//         );
//     }
// });
var element = React.createElement(Counter);
var element2 = React.createElement(Counter);
var element3= React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element2, document.getElementById('app2'));
ReactDOM.render(element3, document.getElementById('app3'));
