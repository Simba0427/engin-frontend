<template>
  <q-page padding q-row>
        <ProjectStepperComponent/>
    <div class="row">

      <div v-for="index in 10" :key="index">
        <ProjectCardComponent />
      </div>
    </div>
  </q-page>
</template>

<script>
import ProjectCardComponent from "../components/ProjectCardComponent.vue";
import ProjectStepperComponent from "../components/ProjectStepperComponent.vue";

export default {
  // name: 'PageName',
  components: {
    ProjectCardComponent,
    ProjectStepperComponent
  } 
};
</script>
