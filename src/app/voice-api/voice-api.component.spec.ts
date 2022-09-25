import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceApiComponent } from './voice-api.component';

describe('VoiceApiComponent', () => {
  let component: VoiceApiComponent;
  let fixture: ComponentFixture<VoiceApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
