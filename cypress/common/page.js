import { NavigateToMonitorsActions } from "../monitorNavigation/actions";
import { NavigateToMonitorTests } from "../monitorNavigation/tests";
import { MonitorFilterActions } from "../monitorsFilter/actions";
import { MonitorFilterTests } from "../monitorsFilter/tests";
export class Page{
    constructor(){
        this.navAction= new NavigateToMonitorsActions();
        this.navTest= new NavigateToMonitorTests();
        this.filterAction = new MonitorFilterActions();
        this.filterTest= new MonitorFilterTests();
    }
}