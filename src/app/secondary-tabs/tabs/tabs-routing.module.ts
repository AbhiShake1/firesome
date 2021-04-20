import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'downloads',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'configs',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      }
    ]
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        loadChildren: () => import('../../primary-tabs/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tutorials',
        loadChildren: () => import('../../primary-tabs/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../../primary-tabs/tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'socialize',
        loadChildren: () => import('../../primary-tabs/tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'extras',
        loadChildren: () => import('../../primary-tabs/tab5/tab5.module').then(m => m.Tab5PageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
