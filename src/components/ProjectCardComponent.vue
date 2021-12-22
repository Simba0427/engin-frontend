<template>
  <div class="q-pa-md">
    <q-card class="my-card" bordered>
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-card-section>
        <div class="q-gutter-xs">
          <q-chip color="primary" text-color="white"> Active </q-chip>
          <q-chip color="green" text-color="white"> Website </q-chip>
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          outline
          rounded
          @click="editProject"
          style="width: 20%"
          color="primary"
          label="Edit"
        />
        <q-btn
          outline
          rounded
          @click="deleteProject"
          style="width: 20%"
          color="negative"
          label="delete"
        />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2"> </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    editProject() {},
    deleteProject() {
      this.$q
        .dialog({
          title: "Confirm Removing",
          message: "Would you really like to delete?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          var index = this.myJson.findIndex((e) => e.id === id);
          if (index > -1) {
            this.myJson.splice(index, 1);
          }
        });
    },
  },
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
