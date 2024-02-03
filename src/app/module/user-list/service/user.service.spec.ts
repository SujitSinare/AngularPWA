import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Correct User Credentials Check', () => {
    const flag = service.checkUserCredentials('Admin', 'Admin123');
    expect(flag).toBe(true);
  });

  it('Wrong User Credentials Check', () => {
    const flag = service.checkUserCredentials('WrongUser', 'Admin123');
    expect(flag).toBe(false);
  });
});
