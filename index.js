/*
 * Wazuh app - Module for Kibana plugin definition
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import { resolve } from 'path';
import { WazuhPlugin, LegacySetup } from './server/plugin';

export default (kibana) => {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch'],
    id: 'wazuh',
    name: 'wazuh',
    uiExports: {
      app: {
        id: 'wazuh',
        title: 'EH-ISMAC',
        description: 'EH-ISMAC app for Kibana',
        icon: 'plugins/wazuh/img/icon_blue.svg',
        main: 'plugins/wazuh/app'
      },
      hacks: ['plugins/wazuh/icon-style'],
      __bundleProvider__(kbnServer) {
        kbnServer.uiBundles.addPostLoader({
          test: /\.pug$/,
          include: resolve(__dirname, 'public'),
          loader: require.resolve('pug-loader'),
          enforce: undefined
        });
      }
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true)
      }).default();
    },

    init(server) {
      const coreSetup = server.newPlatform.setup.core;
      const pluginsSetup = {
        discover: server.newPlatform.setup.plugins.discover
      };
      const legacySetup = {
        server
      };

      new WazuhPlugin().setup(coreSetup, pluginsSetup, legacySetup);
      // eslint-disable-line no-unused-vars
      const xpackMainPlugin = server.plugins.xpack_main;
      if (xpackMainPlugin) {
        const featureId = 'wazuh';

        xpackMainPlugin.registerFeature({
          id: featureId,
          name: 'C',
          navLinkId: featureId,
          icon: '/plugins/wazuh/img/icon_blue.svg',
          app: [featureId],
          catalogue: [],
          privileges: {
            all: {
              app: [featureId],
              api: [],
              savedObject: {
                all: ['EH-Alerts-*', 'EH-Monitoring-*'],
                read: ['EH-Alerts-*', 'EH-Monitoring-*']
              },
              ui: ['save', 'show']
            },
            read: {
              app: [featureId],
              api: [],
              savedObject: {
                all: [],
                read: ['EH-Alerts-*', 'EH-Monitoring-*']
              },
              ui: ['show']
            }
          }
        });
      }
    }
  });
}