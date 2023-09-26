interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Team Lead', 'Payroll Officer'],
  tenantName: 'Organization',
  applicationName: 'HR Management System v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage organization information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/341ca132-c4dc-48d6-bedc-5697970faac3',
};
