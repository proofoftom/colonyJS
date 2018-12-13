/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

/*
 * Add methods from `IRecovery.sol` to a given `ContractClient`.
 */
const addRecoveryMethods = (client: ContractClient) => {
  client.addCaller('getRecoveryRolesCount', {
    functionName: 'numRecoveryRoles',
    output: [['count', 'number']],
  });
  client.addCaller('isInRecoveryMode', {
    output: [['inRecoveryMode', 'boolean']],
  });

  client.addSender('approveExitRecovery', {});
  client.addSender('enterRecoveryMode', {});
  client.addSender('exitRecoveryMode', {
    input: [[]],
  });
  client.addSender('removeRecoveryRole', {
    input: [['user', 'address']],
  });
  client.addSender('setRecoveryRole', {
    input: [['user', 'address']],
  });
  client.addSender('setStorageSlotRecovery', {
    input: [['slot', 'number'], ['value', 'hexString']],
  });
};

export default addRecoveryMethods;