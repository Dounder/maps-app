import { defineComponent, ref, computed } from 'vue'
import SearchResult from '@/components/search-results/SearchResult.vue'
import { usePlacesStore } from '@/composables/usePlacesStore'

export default defineComponent({
    name: 'SearchBar',
    components: {
        SearchResult,
    },
    setup() {
        const { searchPlacesByTerm } = usePlacesStore()
        const debounceTimeout = ref()
        const debounceValue = ref('')

        return {
            debounceValue,

            searchTerm: computed({
                get() {
                    return debounceValue.value
                },
                set(val: string) {
                    if (debounceTimeout.value) clearTimeout(debounceTimeout.value)

                    debounceTimeout.value = setTimeout(() => {
                        debounceValue.value = val
                        searchPlacesByTerm(val)
                    }, 500)
                },
            }),
        }
    },
})
