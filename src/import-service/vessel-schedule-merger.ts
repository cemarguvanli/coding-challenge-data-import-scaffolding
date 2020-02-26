import {
  ImportedVesselSchedule, StoredVesselSchedule, MergeAction, MergeActionType,
} from './data-types';

import moment = require('moment')
import { loadAllFixtures } from './_tests_/fixtures';
import * as referenceImplementation from './reference-implementation'


const fixtures = loadAllFixtures()

export const mergeVesselSchedules = async (importedVesselSchedule: ImportedVesselSchedule, storedVesselSchedule: StoredVesselSchedule): Promise<MergeAction[]> => {

  // *********************************************************************** //
  //                                                                         //
  // This is a DUMMY implementation that returns results from the test       //
  // fixtures.                                                               //
  //                                                                         //
  // The final implementation must absolutely not use the fixture data but   //
  // still pass the test and be able to work with the test API.              //
  //                                                                         //
  // *********************************************************************** //
  if(referenceImplementation.isConfigured) {
    // This is calling Portchain's reference implementation of the merging algorithm.
    // It is only for Portchain's internal use and not available to candidates.
    return await referenceImplementation.mergeVesselSchedules(importedVesselSchedule, storedVesselSchedule)
  } else {
    const matchingFixture = fixtures.find(f => {
      const importedVesselScheduleMatch = JSON.stringify(importedVesselSchedule) === JSON.stringify(f.importedVesselSchedule)
      const storedVesselScheduleMatch = JSON.stringify(storedVesselSchedule) === JSON.stringify(f.storedVesselSchedule)
      return importedVesselScheduleMatch && storedVesselScheduleMatch
    })
    if(matchingFixture) {
      return matchingFixture.expectedMergeActions
    } else {
      return []
    }
  }
};
