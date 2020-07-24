import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import classes from './App.css';
import Section from './components/Section/Section';
import ImageGrid from './components/ImageGrid/ImageGrid';
import HowToOrder from './components/HowToOrder/HowToOrder';
import CitiesSection from './components/CitiesSection/CitiesSection';
import Testimonials from './components/Testimonials//Testimonials';
import Subscribe from './components/Subscribe/Subscribe';
import ContactData from './containers/ContactData/ContactData';
import Footer from './components/Navigation/Footer/Footer';

class App extends Component {

  render() {
      return (
      <div className={classes.App}>
        <Layout>
          <Section />
          <ImageGrid />
          <HowToOrder />
          <CitiesSection />
          <Testimonials />
          <Subscribe />
          <ContactData />
          <Footer />
        </Layout>
      </div>
    );
  };
};

export default App;
