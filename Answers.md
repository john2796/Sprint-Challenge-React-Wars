# Answers

1.  What is React JS and what problems does it try and solve?
    React solves this by giving the developer a virtual DOM to render to instead of the actual DOM, which it then diffs with the real DOM, and does the minimum number of DOM operations needed to achieve the new state.

1.  What does it mean to _think_ in react?
    Identify Where Your State Should Live

1)  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Functional components are just JavaScript functions. They take in an optional input which, as I've mentioned earlier, is what we call props.

Class components offer more features, and with more features comes more baggage. The primary reason to choose class components over functional components is that they can have state.

1.  Describe state.
    State, on the other hand, is an object that is owned by the component where it is declared. Its scope is limited to the current component. A component can initialize its state and update it whenever necessary. The state of the parent component usually ends up being props of the child component. When the state is passed out of the current scope, we refer to it as a prop.

1)  Describe props.
    If components were plain JavaScript functions, then props would be the function input. Going by that analogy, a component accepts an input (what we call props), processes it, and then renders some JSX code.
