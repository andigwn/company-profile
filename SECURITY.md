# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability, please email security@companyprofile.com instead of using the issue tracker.

## Security Best Practices

### Environment Variables
- Never commit `.env*` files (except `.env.example`)
- Use GitHub Secrets for CI/CD
- Rotate API keys regularly
- Use different keys for staging and production

### Dependencies
- Run `npm audit` regularly
- Update dependencies promptly
- Review dependency changes before updating

### Code Security
- Input validation on all user inputs
- SQL injection prevention (use parameterized queries)
- XSS prevention (React handles this by default)
- CSRF protection for forms
- Proper authentication and authorization checks

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Security Checklist Before Deployment

- [ ] All secrets are in environment variables
- [ ] No hardcoded credentials in code
- [ ] Dependencies are up to date
- [ ] Security headers configured
- [ ] HTTPS enforced
- [ ] Rate limiting implemented
- [ ] Input validation in place
