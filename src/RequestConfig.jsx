import { defineComponent, provide } from "@vue/composition-api";
import { GLOBAL_OPTIONS_PROVIDE_KEY } from "./core/config";

export default defineComponent({
  name: "RequestConfig",
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { config } = props;

    provide(GLOBAL_OPTIONS_PROVIDE_KEY, config);

    return {};
  },
  render() {
    return this.$slots && this.$slots.default();
  },
});
