---
description: Scaffold a new frontend feature module with API, hooks, types, and components
---

# New Feature Module Workflow

When asked to create a new feature, follow these steps exactly:

## 1. Create the feature directory structure

```
src/features/[feature]/
├── api/
│   └── [feature]Api.ts
├── components/
│   └── (feature-specific components)
├── hooks/
│   ├── use[Feature]Query.ts
│   └── use[Feature]Mutations.ts
└── types.ts
```

## 2. Types (`types.ts`)

- Define all interfaces and enums for the feature
- Import shared types from other features if needed
- Use TypeScript strict types — no `any`

## 3. API Endpoints

- Add new endpoints to `src/api/apiEndpoints.ts` under a new key
- Follow the existing pattern: static strings for collection endpoints, functions for parameterized endpoints

## 4. API Layer (`api/[feature]Api.ts`)

```typescript
import { apiClient } from '@/api/apiClient';
import { API_ENDPOINTS } from '@/api/apiEndpoints';

export const featureApi = {
  getAll: () => apiClient.get<ResponseType>(API_ENDPOINTS.FEATURE.GET_ALL),
  getOne: (id: string) => apiClient.get<Type>(API_ENDPOINTS.FEATURE.GET_ONE(id)),
  create: (data: Partial<Type>) => apiClient.post<Type>(API_ENDPOINTS.FEATURE.CREATE, data),
  update: (id: string, data: Partial<Type>) => apiClient.patch<Type>(API_ENDPOINTS.FEATURE.UPDATE(id), data),
  delete: (id: string) => apiClient.delete<void>(API_ENDPOINTS.FEATURE.DELETE(id)),
};
```

## 5. Query Hook (`hooks/use[Feature]Query.ts`)

```typescript
import { useQuery } from '@tanstack/react-query';
import { featureApi } from '../api/[feature]Api';

export const useFeatureQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['feature'],
    queryFn: featureApi.getAll,
  });
  return { data, isLoading, error };
};
```

## 6. Mutation Hook (`hooks/use[Feature]Mutations.ts`)

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { featureApi } from '../api/[feature]Api';

export const useFeatureMutations = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: featureApi.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['feature'] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Type> }) =>
      featureApi.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['feature'] }),
  });

  const deleteMutation = useMutation({
    mutationFn: featureApi.delete,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['feature'] }),
  });

  return { createMutation, updateMutation, deleteMutation };
};
```

## 7. Components

- Create feature-specific components in `components/`
- Use Shadcn/UI components from `@/common/ui/`
- Use `cn()` for conditional classNames
- Use Lucide icons from `lucide-react`
- Use Sonner for toast notifications

## 8. Route (if needed)

- Create route file in `src/routes/(app)/[feature]/`
- TanStack Router plugin will auto-generate the route tree
- Use route loaders for data prefetching with queryClient

## 9. Checklist

- [ ] Types defined in `types.ts`
- [ ] API endpoints added to `apiEndpoints.ts`
- [ ] API layer created in `api/`
- [ ] Query hook created in `hooks/`
- [ ] Mutation hook created in `hooks/`
- [ ] Components created in `components/`
- [ ] Route created if needed
- [ ] TypeScript compiles with no errors (`tsc --noEmit`)
