# Ignite Pay Android — Product Foundation

Ignite Pay is a standalone Android product in the Spark Stack International ecosystem. The corporate website may introduce Ignite Pay, but the production application will live in its own Android repository.

## Product principles

- Mobile-first financial experience
- Provider-independent payment architecture
- Explicit demo/test states; never present simulated balances as real money
- Secure-by-design foundation
- Clear transaction states: pending, processing, completed, failed, reversed
- Ledger-first financial model when backend work begins
- API-first separation between UI and financial services
- Accessibility and adaptive layouts from the beginning

## Android foundation

- Kotlin
- Jetpack Compose
- Material 3
- ViewModel + unidirectional data flow
- Navigation Compose / current Jetpack Navigation approach
- Coroutines + Flow
- Hilt for dependency injection
- Repository/data-layer separation
- Android 16 / API 36 target for Google Play submission

## Initial product areas

1. Onboarding
2. Authentication
3. Home
4. Payments
5. Transactions
6. Wallet
7. Customers
8. Payouts
9. Notifications
10. Security
11. Settings
12. Developer/API tools

## Delivery phases

### Phase 1 — Android frontend
Build the complete navigable product shell with local demo data.

### Phase 2 — Application architecture
Introduce repositories, ViewModels, domain models, dependency injection, secure storage and network boundaries.

### Phase 3 — Backend
Authentication, accounts, ledger, transactions, idempotency, webhooks, reconciliation and audit trails.

### Phase 4 — Payment integrations
Integrate approved payment providers behind a provider-independent orchestration layer.

### Phase 5 — Security and release
Threat modeling, abuse controls, testing, privacy/data disclosures, signed AAB and Play Console release preparation.

## Repository boundary

Recommended repositories:

- spark-stack-international — corporate website
- ignite-pay-android — Android application
- ignite-pay-api — backend/API
- spark-core — shared platform infrastructure

The Android application must not contain provider secrets or financial credentials.

## Current status

The corporate website contains a product introduction for Ignite Pay. This document establishes the transition to a standalone Android product build.
