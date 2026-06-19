import type { PaperclipPluginManifestV1 } from '@paperclipai/plugin-sdk';

const manifest: PaperclipPluginManifestV1 = {
  id: 'pax-k.paperclip-plugin-company-wizard-codex',
  apiVersion: 1,
  version: '0.1.0',
  displayName: 'Company Wizard Codex',
  description: 'Codex-powered wizard to bootstrap agent companies from composable templates',
  author: 'pax-k',
  categories: ['workspace', 'ui'],
  capabilities: [
    'companies.read',
    'issues.create',
    'issues.read',
    'issues.update',
    'goals.create',
    'goals.read',
    'agents.read',
    'projects.read',
    'plugin.state.read',
    'plugin.state.write',
    'events.subscribe',
    'ui.page.register',
    'ui.sidebar.register',
  ],
  instanceConfigSchema: {
    type: 'object',
    properties: {
      companiesDir: {
        type: 'string',
        description:
          'Directory where assembled company workspaces are written. Defaults to ~/.paperclip/instances/default/companies. Override for Docker setups (e.g. /paperclip/instances/default/companies).',
      },
      templatesPath: {
        type: 'string',
        description:
          'Path to the templates directory. Defaults to ~/.paperclip/plugin-templates-codex (auto-downloaded from templatesRepoUrl if missing). Override for Docker setups (e.g. /paperclip/plugin-templates-codex).',
      },
      templatesRepoUrl: {
        type: 'string',
        default:
          'https://github.com/pax-k/paperclip-plugin-company-wizard-codex/tree/main/templates',
        description:
          'GitHub tree URL to pull templates from when the templates directory does not exist.',
      },
      codexCommand: {
        type: 'string',
        default: 'codex',
        description:
          'Codex CLI command/path used by the AI wizard. Uses your local Codex subscription/login; no Anthropic API key is required.',
      },
      codexModel: {
        type: 'string',
        description:
          'Optional Codex model override for the AI wizard. Leave blank to use your Codex CLI default.',
      },
      codexExtraArgs: {
        type: 'string',
        description:
          'Optional extra arguments appended to codex exec, for example: --profile work.',
      },
      codexTimeoutMs: {
        type: 'number',
        default: 300000,
        description: 'Maximum time to wait for a Codex AI wizard response, in milliseconds.',
      },
      paperclipUrl: {
        type: 'string',
        description:
          'Paperclip instance URL. Defaults to http://localhost:3100 or the PAPERCLIP_PUBLIC_URL env var.',
      },
      paperclipEmail: {
        type: 'string',
        description: 'Board login email (for authenticated instances).',
      },
      paperclipPassword: {
        type: 'string',
        format: 'secret-ref',
        description: 'Board login password.',
      },
      disableBoardApprovalOnNewCompanies: {
        type: 'boolean',
        default: false,
        description:
          'Optional. If true, the wizard will PATCH new companies to set requireBoardApprovalForNewAgents=false during provisioning. Leave false to preserve approval-gated hiring policies.',
      },
    },
  },
  entrypoints: {
    worker: './dist/worker.js',
    ui: './dist/ui',
  },
  ui: {
    slots: [
      {
        type: 'page',
        id: 'company-wizard-codex',
        displayName: 'Company Wizard Codex',
        exportName: 'WizardPage',
        routePath: 'company-creator-codex',
      },
      {
        type: 'sidebar',
        id: 'company-wizard-codex-link',
        displayName: 'Create Company (Codex)',
        exportName: 'SidebarLink',
      },
    ],
  },
};

export default manifest;
