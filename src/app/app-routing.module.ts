import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'cad-evento', loadChildren: './pages/cad-evento/cad-evento.module#CadEventoPageModule' },
  { path: 'detalhe-evento/:key', loadChildren: './pages/detalhe-evento/detalhe-evento.module#DetalheEventoPageModule' },
  { path: 'edit-evento/:key', loadChildren: './pages/edit-evento/edit-evento.module#EditEventoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
