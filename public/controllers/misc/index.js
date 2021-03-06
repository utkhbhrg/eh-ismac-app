/*
 * Wazuh app - Load all the Misc controllers.
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import { uiModules } from 'ui/modules';
import { HealthCheck } from './health-check';
import { BlankScreenController } from './blank-screen-controller';

const app = uiModules.get('app/wazuh', []);

app
  .controller('healthCheck', HealthCheck)
  .controller('blankScreenController', BlankScreenController);
