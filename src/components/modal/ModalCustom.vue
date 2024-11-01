<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div @click="$emit('close')" class="absolute inset-0"></div>
        <div class="relative bg-white rounded-lg shadow-lg w-3/4 md:max-w-2xl w-full p-6 z-10">
            <slot></slot>
            <button @click="$emit('close')" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ✕
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModalCustom',
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
});
</script>