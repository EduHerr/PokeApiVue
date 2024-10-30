module.exports = {
  parser: "vue-eslint-parser", // Usa el parser de Vue
  parserOptions: {
    parser: "@typescript-eslint/parser", // Usa el parser de TypeScript dentro de bloques de script
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended", // Configura reglas recomendadas de Vue 3
    "plugin:@typescript-eslint/recommended", // Reglas recomendadas de TypeScript
  ],
  rules: {
    // Agrega aquí reglas personalizadas si las necesitas
  },
};
