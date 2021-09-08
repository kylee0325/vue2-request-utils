import { LoadMoreExtendsOption } from "../useLoadMore";
import { PaginationExtendsOption } from "../usePagination";
import { InjectionKey, Ref, WatchSource } from "@vue/composition-api";
import { State } from "./createQuery";

const GLOBAL_OPTIONS: GlobalOptions = {};

export const GLOBAL_OPTIONS_PROVIDE_KEY: InjectionKey<GlobalOptions> = Symbol(
  "GLOBAL_OPTIONS_PROVIDE_KEY"
);

export const setGlobalOptions = (config: GlobalOptions) => {
  Object.keys(config).forEach((key) => {
    // @ts-ignore
    GLOBAL_OPTIONS[key] = config[key];
  });
};

export const getGlobalOptions = () => {
  return GLOBAL_OPTIONS;
};

export const clearGlobalOptions = () => {
  Object.keys(GLOBAL_OPTIONS).forEach((key) => {
    // @ts-ignore
    delete GLOBAL_OPTIONS[key];
  });
};

export interface GlobalOptions
  // usePagination config
  extends PaginationExtendsOption,
    // useLoadMore config
    LoadMoreExtendsOption {
  loadingDelay?: number;
  pollingInterval?: number;
  pollingWhenHidden?: boolean;
  pollingWhenOffline?: boolean;
  debounceInterval?: number;
  throttleInterval?: number;
  refreshOnWindowFocus?: boolean;
  refocusTimespan?: number;
  cacheTime?: number;
  // -1 means the cache is always valid
  staleTime?: number;
  manual?: boolean;
  // error retry
  errorRetryCount?: number;
  errorRetryInterval?: number;
}

export type BaseOptions<R, P extends unknown[]> = GlobalOptions & {
  defaultParams?: P;
  ready?: Ref<boolean>;
  initialData?: R;
  refreshDeps?: WatchSource<any>[];
  cacheKey?: string;
  queryKey?: (...args: P) => string;
  onSuccess?: (data: R, params: P) => void;
  onError?: (error: Error, params: P) => void;
};

const FRPlaceholderType = Symbol("FR");
export type FRPlaceholderType = typeof FRPlaceholderType;

// temporary fix: https://github.com/AttoJS/vue-request/issues/31
// When `formatResult` and `onSuccess` are used at the same time
// the type of the parameter `data` of `onSuccess` is temporarily set to `any`
export type FormatOptions<R, P extends unknown[], FR> = {
  formatResult: (data: R) => FR;
  onSuccess?: (
    data: FR extends FRPlaceholderType ? any : FR,
    params: P
  ) => void;
} & Omit<BaseOptions<FR, P>, "onSuccess">;

export type MixinOptions<R, P extends unknown[], FR> =
  | BaseOptions<R, P>
  | FormatOptions<R, P, FR>;

export type Config<R, P extends unknown[]> = Omit<
  BaseOptions<R, P>,
  "defaultParams" | "manual" | "ready" | "refreshDeps" | "queryKey"
> &
  Required<
    Pick<
      BaseOptions<R, P>,
      | "loadingDelay"
      | "pollingWhenHidden"
      | "pollingWhenOffline"
      | "refreshOnWindowFocus"
      | "errorRetryCount"
      | "errorRetryInterval"
    >
  > & {
    stopPollingWhenHiddenOrOffline: Ref<boolean>;
    initialAutoRunFlag: Ref<boolean>;
    formatResult?: (data: any) => R;
    updateCache: (state: State<R, P>) => void;
  };
