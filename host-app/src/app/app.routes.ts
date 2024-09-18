import { CounterModule } from './../../../remote-app/src/app/counter/counter.module';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren:()=> {
      return loadRemoteModule({
        remoteEntry:"http://localhost:4202/remoteEntry.js",
        remoteName: "remoteApp",
        exposedModule:'./CounterModule'
      }).then(mod => {console.log("data is",mod); return mod.CounterModule;}).catch(console.log);
    }
  }
];
