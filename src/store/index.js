import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var nextDate = new Date();
nextDate.setDate(nextDate.getDate() + 1);

var toDate = new Date();
toDate.setDate(toDate.getDate() + 8);

export default new Vuex.Store({
  state: {
    nextDay: nextDate,
    currentDate: new Date(),
    toDate: toDate,
    selectedDate: nextDate,
    form: {
      from: '',
      to: '',
      yetiskin: 1,
      cocuk: 0,
      bebek: 0,
      ogrenci: 0,
    },
    monthNames: [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ],
    dayNames: [
      'Pazar',
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
    ],
  },
  mutations: {
    setSelectedDate: function(state, value) {
      state.selectedDate = value;
    },
    setForm: function(state, value) {
      state.form = value;
    },
    setToDate: function(state, value) {
      state.toDate = value;
    },
  },
  actions: {},
  modules: {},
});
