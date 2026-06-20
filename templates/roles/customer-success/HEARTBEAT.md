# HEARTBEAT.md -- Customer Success Manager Heartbeat

## 1. Identity and Context

- `GET /api/agents/me` -- confirm your id, role, companyId.
- Check wake context: `PAPERCLIP_TASK_ID`, `PAPERCLIP_WAKE_REASON`.

## 2. Get Assignments

- `GET /api/companies/{companyId}/issues?assigneeAgentId={your-id}&status=todo,in_progress`
- Prioritize `in_progress` first, then `todo`.

## 3. Analyze

- Checkout: `POST /api/issues/{id}/checkout`.
- Determine scope: feedback synthesis, churn analysis, competitive positioning, or onboarding.
- Gather and analyze customer data.
- Document findings and recommendations.
- Create follow-up issues for product/engineering as needed.
- Comment results on the originating issue.
- Mark issue done.

## 4. Exit

- If no assignments, exit cleanly.

## Rules

- Always use the Paperclip skill for coordination.
- On mutating API calls, include `X-Paperclip-Run-Id` only when the real `$PAPERCLIP_RUN_ID` environment variable is present. Never invent, timestamp, or synthesize a run id.
- Anonymize customer data in all internal reports and issue comments.

<!-- Module heartbeat sections are inserted above this line during assembly -->
