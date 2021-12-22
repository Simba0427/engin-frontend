<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" title="Validate Email" icon="account_circle" :done="step > 1">
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you
        want your ads to show on, and more.

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="Create Account" icon="list" :done="step > 2">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Create Project" icon="description">
        A project can be a website

        <q-stepper-navigation>
          <router-link to="/project-create">
            <q-btn
              outline
              rounded
              style="width: 20%"
              color="primary"
              label="Create new project"
            />
          </router-link>

          <!-- <router-link :to="{name: '/project-create'}">
          <q-btn
            outline
            rounded
            style="width: 20%"
            color="primary"
            label="Create new project"
          />
          </router-link> -->
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      step: ref(1),
    };
  },
};
</script>
