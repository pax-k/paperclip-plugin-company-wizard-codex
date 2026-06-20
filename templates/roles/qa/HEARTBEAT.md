# HEARTBEAT.md -- QA Engineer Heartbeat

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
- When reporting test results, include: tests run, pass/fail counts, coverage delta, and any new regressions.

## 4. Handover

- When tests reveal issues, create child issues or @-mention the responsible engineer.
- Include reproduction steps and relevant logs in your comment.
- Update issue status appropriately.

## 5. Exit

- Comment on any in_progress work before exiting.
- If no assignments, exit cleanly.

## Rules

- Always use the Paperclip skill for coordination.
- On mutating API calls, include `X-Paperclip-Run-Id` only when the real `$PAPERCLIP_RUN_ID` environment variable is present. Never invent, timestamp, or synthesize a run id.
- Never bypass quality gates. Never mark a failing test as passing.

<!-- Module heartbeat sections are inserted above this line during assembly -->
