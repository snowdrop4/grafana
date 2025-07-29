import { generatedAPI, GetSearchApiArg } from './endpoints.gen';

type OverrideGetSearchRequestOptions = GetSearchApiArg & {
  type: string;
};

export const dashboardAPIv0alpha1 = generatedAPI.enhanceEndpoints({
  endpoints: {
    getSearch: (endpointDefinition) => {
      const originalQuery = endpointDefinition.query;
      if (originalQuery) {
        // TODO: Remove once API spec is updated with `type`
        endpointDefinition.query = (requestOptions: OverrideGetSearchRequestOptions) => ({
          ...originalQuery(requestOptions),
          params: {
            ...requestOptions,
            type: requestOptions.type,
          },
        });
      }
    },
  },
});

export const { useGetSearchQuery } = dashboardAPIv0alpha1;
