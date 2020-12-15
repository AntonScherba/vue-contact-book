import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [
      { id: 1, name: "Anton" },
      { id: 2, name: "Viktor" },
      { id: 3, name: "foo" },
    ],
    contactsInfo: [
      {
        userId: 1,
        id: 1,
        title: "Phone",
        body: "79788417394",
      },
      {
        userId: 1,
        id: 2,
        title: "Email",
        body: "ant@gmail.com",
      },
      {
        userId: 2,
        id: 3,
        title: "Email",
        body: "vik@gmail.com",
      },
      {
        userId: 3,
        id: 4,
        title: "Email",
        body: "foobar@gmail.com",
      },
    ],
  },
  getters: {
    getContactInfo: (state) => (userId) => {
      return state.contactsInfo.filter((info) => info.userId === userId);
    },
  },
  mutations: {
    addContact(state, payload) {
      state.contacts.push(payload);
    },
    removeContact(state, payload) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
    },
    addInfo(state, paylaod) {
      state.contactsInfo.push(paylaod);
    },
    removeInfo(state, payload) {
      state.contactsInfo = state.contactsInfo.filter(
        (info) => info.id !== payload
      );
    },
    undo(state, payload) {
      state.contactsInfo = payload;
    },
  },
  actions: {},
  modules: {},
});
