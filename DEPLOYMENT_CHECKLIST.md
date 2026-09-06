# Deployment Security Checklist

## Before Pushing to GitHub:
- [x] `.env*` files ignored by git
- [x] No hardcoded API keys in source code
- [x] All secrets in environment variables
- [x] Security workflow configured
- [x] Dependabot enabled
- [x] SECURITY.md created

## GitHub Repository Setup:
1. Create **Private** repository
2. Enable all security features:
   - Dependabot alerts ✓
   - Secret scanning ✓  
   - Code scanning ✓
   - Branch protection ✓
3. Add GitHub Secrets:
   - `STAGING_API_KEY`
   - `PRODUCTION_API_KEY`
   - `VERCEL_TOKEN` (if applicable)

## Branch Protection Rules for `main`:
```
☑ Require pull request
☑ Require status checks (CI must pass)
☑ Require reviews (1 approver minimum)
☑ Do not allow bypassing
☑ Restrict who can push (admins only)
```

## First Push Commands:
```bash
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

## Monitoring:
- Review Dependabot alerts weekly
- Check security scan results in Actions
- Rotate API keys every 90 days
- Audit user access monthly

## Quick Security Commands:
```bash
# Check for secrets
grep -r "password\|secret\|token\|key" --include="*.{js,ts}" app/

# Audit dependencies
npm audit --audit-level=moderate

# Run security scan
npm run lint
```
