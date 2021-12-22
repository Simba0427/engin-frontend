<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 50%">
      <q-form v-on:submit.prevent="onSubmit" class="q-gutter-md">
        <q-input square filled v-model="form.Title" label="Title" />
        <q-select
          square
          filled
          v-model="form.type"
          :options="options"
          label="Square filled"
        />
        <q-input
          square
          filled
          v-model="form.description"
          type="textarea"
          label="Description"
        />
        <q-btn
          outline
          rounded
          type="submit"
          class="full-width"
          color="primary"
          label="Create"
        />
      </q-form>
    </div>
  </div>
</template>

<script>
import { QSpinnerDots } from "quasar";
export default {
  // name: 'PageName',
  data() {
    return {
      options: [
        'Website'
      ],
      form: {
        Title: '',
        type: '',
        description: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$q.loading.show({
        message: "please wait",
        spinnerColor: "white",
        spinner: QSpinnerDots,
      });
      this.$api
        .post('/project/12', this.form)
        .then((val) => {
          this.$router.push("/projects");
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setTimeout(() => {
            this.$q.loading.hide();
          }, 300);
        });
    },
  },
};
</script>
