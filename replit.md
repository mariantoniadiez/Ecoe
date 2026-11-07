# Biblioteca ECOE Medicina

Plataforma personal, en español, para preparar el ECOE de Medicina con una biblioteca académica pensada primero para estudiar e imprimir.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/ecoe-medicina/src/data/curriculum.ts` — source of truth for the initial curriculum map, module states, bibliography frame, and print-library availability.
- `artifacts/ecoe-medicina/src/` — web application.
- `lib/api-spec/openapi.yaml` — shared API contract, when backend-backed features are introduced.

## Architecture decisions

- The first phase is a responsive web app; it is not a native mobile app.
- Initial study-status changes are stored in the current browser. Do not expose one student's progress as shared server data.
- Medical learning content must remain marked pending until course materials have been audited and references have been checked.

## Product

- Four modules: Endocrinology and Neurology are mapped first; Pharmacology and Infectious Agents stay “Pendiente de material” until official course materials are supplied.
- Physical study is a core requirement. Do not offer empty or unvalidated manuals, PDFs, flashcards, questions, clinical cases, or ECOE stations as finished resources.
- The project specification and bibliography instructions do not count as course guides or evidence that a textbook was consulted.

## User preferences

- Keep the interface modern, clean, academic, and minimalist.
- Prefer developing topics individually and with depth over generating superficial bulk content.
- Do not invent professor-specific syllabi, medical facts, citations, editions, DOI values, doses, or diagnostic criteria.

## Gotchas

- Keep pending course materials and content-development status separate from a topic's study progress.
- Label recommended bibliography as suggested until a source has actually been consulted and verified.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
