import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1_main',
        loadChildren: () => import('../../primary-tab/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2_main',
        loadChildren: () => import('../../primary-tab/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3_main',
        loadChildren: () => import('../../primary-tab/tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4_main',
        loadChildren: () => import('../../primary-tab/tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '../../primary-tab/tab3/tab3.module',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
