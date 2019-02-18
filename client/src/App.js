import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ExpenseList from './pages/ExpenseList';

const App = () => (
  <React.Fragment>
    <Header />
    <ExpenseList />
    <Footer />
  </React.Fragment>
);

export default App;
