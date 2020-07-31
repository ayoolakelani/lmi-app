import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/header/header-component';
import Footer from '../components/footer/footer.component';
import DashboardPage from '../components/dashboard/dashboard-component';
import AboutPage from '../components/about-component';
import NotFoundPage from '../components/notfound-component';
import ContactPage from '../components/contact-component';
import HelpPage from '../components/help-component';
import CalculatorPage from '../components/tools/interest-calculator/calculator-component';

export const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}></Route>
                <Route path="/about" component={AboutPage}></Route>
                <Route path="/contact" component={ContactPage}></Route>
                <Route path="/help" component={HelpPage}></Route>
                <Route path="/tools" component={CalculatorPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
            <Footer title="Footer" />
        </div>
    </BrowserRouter>
);

export default AppRouter;
