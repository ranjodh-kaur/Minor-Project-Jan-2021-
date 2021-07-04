const mysqlConfig = {
    user: 'developer',
    password: 'developer',
    host: 'localhost',
    databaseName: 'students'
};

const tables = {
    studentInfo: "student_info",
    users: "users",
    courseCode: "course_code",
    branchCode: "branch_code",
    requestTable: "no_dues_certificate_requests"
}

module.exports = { mysqlConfig, tables };