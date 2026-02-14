---
description: Optimize the frontend codebase following established patterns and best practices
---

# Frontend Optimization Workflow

## Steps

1. **Type Safety Check**
   - Run `tsc --noEmit` to find type errors
   - Look for `any` types that should be properly typed
   - Verify all API response types match backend contracts
   - Check for missing or incorrect interface definitions

2. **Component Quality**
   - Ensure components use Shadcn/UI primitives consistently
   - Check for inline styles that should be Tailwind classes
   - Verify proper use of `cn()` for conditional classNames
   - Look for components that should be extracted into common/ui

3. **Data Fetching**
   - Verify all queries have proper queryKeys
   - Check mutation hooks invalidate correct queries on success
   - Look for missing error handling in API calls
   - Ensure loading states are handled in components

4. **Performance**
   - Check for unnecessary re-renders
   - Verify code splitting via TanStack Router autoCodeSplitting
   - Look for large component files that should be split
   - Check for missing React.memo on expensive components

5. **Routing**
   - Verify route guards check auth context properly
   - Check route loaders prefetch data correctly
   - Ensure error boundaries are in place
   - Verify 404 handling works

6. **Accessibility**
   - Check for missing aria labels
   - Verify keyboard navigation works
   - Ensure proper heading hierarchy
   - Check color contrast

## Commands

```bash
# Type checking
npx tsc --noEmit

# Lint
npm run lint

# Build (catches additional errors)
npm run build

# Dev server
npm run dev
```

## Checklist

- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] All features follow the module pattern
- [ ] API layer uses apiClient consistently
- [ ] Query hooks follow naming conventions
- [ ] Components use Shadcn/UI primitives
- [ ] Loading and error states handled
- [ ] Routes properly guarded
- [ ] Build succeeds without errors
