/* tslint:disable:no-unused-variable */

import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { MdCardTitle } from '@angular/material';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],imports: [ MaterialModule.forRoot() ]

    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


 it(`should have as card title 'My Card title'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const de = fixture.debugElement.query(By.css('div div md-card md-card-title-group div md-card-title'));
    expect(de.nativeElement.textContent).toEqual('My Card title');
  }));
});
