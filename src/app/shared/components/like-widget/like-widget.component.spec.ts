import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../service/unique-id/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';

describe('LikeWidgetComponent', () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LikeWidgetComponent
      ],
      imports: [
        FontAwesomeModule
      ],
      providers: [
        UniqueIdService
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    expect(component.id).toBeTruthy();
  });

  it('Should not generate ID when id input property is present', () => {
    const someId = "someID";
    component.id = someId;
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Should trigger emission called`, () => {
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
    });
    component.like();
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Should trigger emission called with spy`, () => {
    spyOn(component.liked, 'emit');
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
