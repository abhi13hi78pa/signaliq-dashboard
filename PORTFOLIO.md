# SignalIQ portfolio case study

## Problem and audience

A B2B sales rep starting their day needs to know which accounts deserve attention, what changed, and what action to take. The Account Priorities workspace puts those answers on one screen. It uses fictional companies and illustrative intent scores.

## User journey

1. Scan the tracked, high-priority, and reviewed counts.
2. Narrow the queue with a company search or the high-priority filter.
3. Read a buying signal and expand the suggested next step.
4. Mark the account reviewed. The count updates, and the action can be undone.

The layout puts the decision at the top of each card and reveals supporting guidance on demand. The list collapses to one column on narrow screens. Search and filtering include a result count, and an empty state offers a way back. Native inputs and disclosure controls support keyboard interaction, and review buttons expose their pressed state.

## Review tasks

- Find Meridian Labs and explain why it is high priority.
- Search for a company that does not exist and recover without reloading.
- Open a suggested action, mark the account reviewed, and undo it using only the keyboard.
- Repeat the flow at a narrow viewport and check for horizontal scrolling.

These are proposed usability checks. The priority threshold and suggested actions are design assumptions, and review state lasts for the current session.

## Implementation and credit

The account workflow is implemented with React, TypeScript, Next.js, and a CSS module. SignalIQ builds on [AysoDev’s SaaS Analytics](https://github.com/AysoDev/saas-analytics). The upstream project and its history are credited in the repository, and the [MIT license](LICENSE) is preserved.
