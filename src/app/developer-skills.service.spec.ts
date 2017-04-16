/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeveloperSkillsService } from './developer-skills.service';

describe('DeveloperSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeveloperSkillsService]
    });
  });

  it('should ...', inject([DeveloperSkillsService], (service: DeveloperSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
