# Updated README / Submission Document Content

## 🚀 Project Overview

AtomQuest is a full-stack enterprise Goal Tracking & KPI Management Portal designed to simulate real-world organizational performance workflows. The platform enables employees to create KPI goals, managers to review and approve submissions, and administrators to monitor organization-wide workflow analytics.

Built using Next.js, React, Tailwind CSS, Supabase, and Vercel.

---

# 🏗️ Tech Stack

* Next.js (App Router)
* React
* Tailwind CSS
* Supabase Authentication
* Supabase PostgreSQL Database
* Supabase Storage
* Supabase Row Level Security (RLS)
* Resend Email API
* Vercel Deployment

---

# 🚀 Features

## 👨‍💼 Employee Module

### Goal Management

* Create and manage KPI goals
* Add targets, weightage, thrust areas, and Unit of Measurement (UoM)
* Dynamic goal creation with max 8 goals limit
* Validation for minimum 10% weightage per goal
* Total weightage must equal exactly 100%

### Workflow Features

* Submit goal sheets for manager approval
* Goal locking after submission
* Admin-controlled unlock workflow
* Quarterly check-in support
* Workflow status visibility (Pending / Approved / Returned)
* Manager feedback visibility for returned goals
* Workflow timestamps tracking

### Evidence Management

* Upload supporting documents and KPI evidence
* Cloud file storage using Supabase Storage
* Document link persistence in database

### Notifications

* Email notification trigger on goal submission
* In-app notification support

---

## 🧑‍💼 Manager Module

### Goal Review Workflow

* Review submitted employee goals
* Inline editing of targets and weightages
* Approve goals
* Return goals for rework
* Manager feedback/comment system

### Workflow Tracking

* Approval timestamps
* Return timestamps
* Dynamic workflow state tracking
* Employee visibility of manager feedback

### Dashboard Improvements

* Status-based filtering
* Pending / Approved / Returned filters
* Cleaner scalable workflow UI

### Evidence Review

* View uploaded supporting documents directly from dashboard

---

## 🛡️ Admin Module

### Organization Visibility

* Organization-wide analytics dashboard
* KPI tracking visibility
* Workflow monitoring
* Audit-style workflow tracking
* Approval lifecycle visibility

### Reporting

* Export report functionality
* Dashboard statistics
* Submission metrics

---

# 🔐 Authentication & Security

## Authentication

* Supabase Authentication integration
* Real authenticated user sessions
* Secure login/logout flow
* Session-aware route protection

## Role-Based Access Control

* Employee, Manager, and Admin dashboards
* Database-driven role mapping using profiles table
* Dynamic role-based routing

## Database Security

* Row Level Security (RLS) enabled
* Authenticated database access policies
* Secure insert/select/update rules

---

# 📧 Workflow Automation

## Email Integration

Implemented using Resend API:

* Goal submission notifications
* Workflow communication support

## Notification System

* In-app notification badge system
* Role-based notifications
* Unread notification tracking

---

# 🗄️ Backend Architecture

## Supabase Integration

Supabase is used for:

* Authentication
* Database management
* CRUD operations
* File storage
* Security policies

## Database Design

### Goals Table

Stores:

* employee information
* KPI goals
* targets
* workflow status
* timestamps
* manager feedback
* supporting document URLs

### Profiles Table

Stores:

* user email
* role mapping

### Notifications Table

Stores:

* workflow notifications
* unread status
* notification timestamps

---

# ☁️ Deployment Architecture

* Frontend deployed on Vercel
* Backend/database hosted on Supabase
* Serverless architecture
* Cloud storage integration

---

# ⚙️ Engineering Decisions

## Role-Based Route Separation

Separated application into dedicated modules:

* /dashboard
* /manager
* /admin
* /audit
* /checkin

This simplified:

* workflow isolation
* route protection
* state management
* scalability

## Database-Driven Role Management

Moved from frontend hardcoded roles to database-driven role mapping using the profiles table for better scalability and maintainability.

## Workflow Synchronization

Centralized workflow state in Supabase to keep employee, manager, and admin dashboards synchronized.

## Cloud File Storage

Integrated Supabase Storage for enterprise-style KPI evidence management.

## Row Level Security

Implemented database-level security policies using Supabase RLS for authenticated read/write operations.

---

# ⚡ Challenges Solved

* Deployment issues caused by missing environment variables
* Workflow synchronization across dashboards
* Row Level Security policy configuration
* Secure role-based access management
* Cloud document upload integration
* Dynamic workflow tracking and notifications

---

# 📈 Future Improvements

* Real-time subscriptions
* Organization hierarchy management
* Escalation workflows
* Advanced analytics dashboards
* Server-side RBAC middleware
* AI-assisted KPI recommendations
* Microsoft Teams integration
* Azure AD integration

---

# 🌐 Deliverables

## Live Demo

Deployed on Vercel

## Source Code

GitHub Repository

## Roles Available

* Employee
* Manager
* Admin

## Features Demonstrated

* Goal lifecycle management
* Approval workflow
* Notifications
* Document uploads
* Authentication
* Analytics
* Security policies
