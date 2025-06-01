8. Services
This section outlines the Service Layer which is the heart of business logic for Bartr. It handles core functionalities such as user management, course creation, XP transactions, payments, and enrollments. Each service is designed with TDD in mind, ensuring test cases are defined before the implementation of any logic.

Service Layer Classes
AuthService
Responsibilities:

Handle user login, registration.

Password encryption.

JWT token generation and validation (using Appwrite Auth).

Test Cases:

✅ Successful login returns valid JWT.

❌ Incorrect credentials return 401 Unauthorized.

✅ Registration with all valid fields creates new user.

UserService
Responsibilities:

Fetch, update user profile.

Manage XP balance.

Return enrolled/created courses.

Test Cases:

✅ XP updates correctly after course enrollment.

❌ Invalid user ID returns 404 Not Found.

✅ Fetch user returns full profile with avatar.

CourseService
Responsibilities:

Create, update, delete course data.

Fetch all courses or by filters (category, creator).

Test Cases:

✅ Course created with valid fields.

❌ Invalid category ID returns 400 Bad Request.

✅ Only creator can edit or delete course.

EnrollmentService
Responsibilities:

Enroll learners into courses.

Deduct XP from learners and credit XP to course creators.

Validate duplicate enrollments.

Test Cases:

✅ Enrollment successful if XP is sufficient.

❌ Already enrolled returns 409 Conflict.

✅ XP deducted and transaction recorded after enrollment.

TransactionService
Responsibilities:

Log all XP transactions.

Allow XP transfer (future use).

Maintain integrity of XP history.

Test Cases:

✅ Transaction logged on every XP change.

❌ Invalid course/user ID throws error.

✅ Transfers cannot exceed available XP.

PaymentService
Responsibilities:

Initiate payments via Stripe.

Verify webhooks.

Credit XP post successful payment.

Test Cases:

✅ Payment success updates XP.

❌ Webhook signature mismatch returns 403 Forbidden.

✅ History returns all valid payment records.

AppwriteService
Responsibilities:

Abstract interaction with Appwrite SDK.

Manage CRUD operations for users, courses, enrollments, etc.

Test Cases:

✅ CreateDocument inserts correct data schema.

❌ Invalid document schema throws exception.

✅ UpdateDocument reflects immediately on fetch.

General Design Patterns & Best Practices
Follows Separation of Concerns using layered architecture.

Uses Dependency Injection for testability.

Business rules are unit-tested using mock repositories.

Test files follow structure: ServiceNameTest.java.

Security in Services
Authentication and role-based authorization enforced before service-level access.

Sensitive operations like payments and XP transfers validate ownership and integrity.

Service Interaction Flow (Simplified)
Course Enrollment Flow:

Controller → EnrollmentService
 → UserService (XP check/update)
 → CourseService (course validation)
 → TransactionService (log XP)
Payment Flow:

Controller → PaymentService
 → Stripe API / Webhook
 → UserService (update XP)
 → TransactionService (log XP purchase)
Let me know if you want mock unit test examples (e.g., using JUnit or Mockito) or diagrams (like a flowchart) for visualizing service
