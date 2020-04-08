new Vue({
  el: "#app",
  data: {
    errors: [],
    items: [
      {
        id: "1",
        name: "Wilfredo",
        email: "me@wilfredocasas.com",
        phone: "+491777898706",
        address: "groniger str 35",
      },
    ],
    input: {
      id: null,
      name: null,
      email: null,
      phone: null,
      address: null,
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      //   this.checkForm();
      this.save();
    },
    checkForm: function () {
      this.errors = [];
      if (
        !this.id ||
        !this.name ||
        !this.email ||
        !this.phone ||
        !this.address
      ) {
        this.errors.push("Please fill al the fields");
      }
    },

    save: function () {
      let id = this.input.id;
      let nm = this.input.name;
      let em = this.input.email;
      let ph = this.input.phone;
      let ad = this.input.address;

      this.items.push({
        id: id,
        name: nm,
        email: em,
        phone: ph,
        address: ad,
      });
      this.clear();

      this.close();
    },
    clear: function () {
      this.input.id = "";
      this.input.name = "";
      this.input.email = "";
      this.input.phone = "";
      this.input.address = "";
    },
    close: function () {
      this.$bvModal.hide("modal-1");
    },
  },
});
