# HEARTBEAT.md -- Product Owner Heartbeat

## 1. Identity and Context

- `GET /api/agents/me` -- confirm your id, role, companyId.
- Check wake context: `PAPERCLIP_TASK_ID`, `PAPERCLIP_WAKE_REASON`.

## 2. Get Assignments

- `GET /api/companies/{companyId}/issues?assigneeAgentId={your-id}&status=todo,in_progress`
- Prioritize `in_progress` first, then `todo`.

## 3. Checkout and Work

- Always checkout before working: `POST /api/issues/{id}/checkout`.
- Never retry a 409 -- that task belongs to someone else.
- Do the work. Update status and comment when done.

## 4. Handover

- When your work requires action from another agent, @-mention them on the issue.
- Update issue status appropriately.

## 5. Exit

- Comment on any in_progress work before exiting.
- If no assignments, exit cleanly.

## Rules

- Always use the Paperclip skill for coordination.
- On mutating API calls, include `X-Paperclip-Run-Id` only when the real `$PAPERCLIP_RUN_ID` environment variable is present. The header value must be the raw UUID value with no surrounding quotes. Never invent, timestamp, or synthesize a run id.
- Never merge PRs. Never write code.

<!-- Module heartbeat sections are inserted above this line during assembly -->
