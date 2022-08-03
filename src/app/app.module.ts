import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RippleModule} from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CardModule} from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterNavbarComponent } from './master-navbar/master-navbar.component';
import { MasterFooterComponent } from './master-footer/master-footer.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';


import {UserService} from './user.service';
import { HomePageComponent } from './home-page/home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MasterNavbarComponent,
    MasterFooterComponent,
    CourseContentComponent,
    LoginComponent,
    RegisterComponent,
    AdminUserManagementComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    RippleModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    CardModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
