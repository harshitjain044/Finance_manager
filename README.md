# Spendly

Spendly is a MERN-based personal finance dashboard for tracking transactions, monitoring recurring activity, importing CSV data, and reviewing automated reports.

## Core Features

* Authentication with JWT
* Transaction create, edit, duplicate, delete, and bulk actions
* Recurring transaction scheduling
* CSV import flow with column mapping
* Spending analytics, summary cards, and charts
* AI-assisted receipt scanning
* Scheduled email reports
* Profile management and appearance settings

## App Structure

* `client/` contains the React + Vite frontend
* `backend/` contains the Express + TypeScript API

## Local Development

1. Install dependencies in both `client` and `backend`
2. Configure environment variables for the backend
3. Start the backend with `npm run dev`
4. Start the frontend with `npm run dev`

## Notes

This repository has been rebranded for Spendly. Review environment variables, email sender details, and deployment metadata before shipping to production.
