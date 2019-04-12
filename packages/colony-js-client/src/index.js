/* @flow */

import type {
  ContractClientConstructorArgs,
  ContractResponse,
  MultisigOperationConstructorArgs,
  SendOptions,
} from '@colony/colony-js-contract-client';

import './paramTypes';

import ColonyNetworkClient from './ColonyNetworkClient/index';
import ColonyClient from './ColonyClient/index';
import TokenClient from './TokenClient/index';
import TokenLockingClient from './TokenLockingClient/index';

import getNetworkClient from './getNetworkClient';

export type {
  ColonyClient,
  ColonyNetworkClient,
  ContractClientConstructorArgs,
  ContractResponse,
  MultisigOperationConstructorArgs,
  SendOptions,
  TokenClient,
  TokenLockingClient,
};

export {
  COLONY_ROLE_ADMINISTRATION,
  COLONY_ROLE_ARBITRATION,
  COLONY_ROLE_ARCHITECTURE,
  COLONY_ROLE_ARCHITECTURE_SUBDOMAIN,
  COLONY_ROLE_FUNDING,
  COLONY_ROLE_RECOVERY,
  COLONY_ROLE_ROOT,
  COLONY_ROLES,
  EMPTY_ADDRESS,
  ETHER_ADDRESS,
  TASK_RATING_EXCELLENT,
  TASK_RATING_NONE,
  TASK_RATING_SATISFACTORY,
  TASK_RATING_UNSATISFACTORY,
  TASK_RATINGS,
  TASK_ROLE_EVALUATOR,
  TASK_ROLE_MANAGER,
  TASK_ROLE_WORKER,
  TASK_ROLES,
  TASK_STATUS_ACTIVE,
  TASK_STATUS_CANCELLED,
  TASK_STATUS_FINALIZED,
  TASK_STATUSES,
} from './constants';

export { getNetworkClient };

export default ColonyNetworkClient;
