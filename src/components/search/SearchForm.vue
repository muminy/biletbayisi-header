<template>
  <div class="search-form">
    <form>
      <div class="form-area">
        <div class="d-flex mb-1">
          <div class="radios">
            <input
              class="mr-1"
              type="radio"
              id="tekyon"
              value="tek"
              v-model="type"
            />
            <label for="tekyon">Tek Yön</label>
          </div>
          <div class="radios">
            <input
              class="mr-1"
              type="radio"
              id="ciftyon"
              value="cift"
              v-model="type"
            />
            <label for="ciftyon">Gidiş - Dönüş</label>
          </div>
        </div>
        <b-row>
          <b-col lg="6" md="12" sm="12">
            <custom-input
              :nextId="'nereye'"
              :placeholder="'İstanbul, Tüm Havalimanları (ISTS) Türkiye'"
              :label="'Nereden'"
            >
              <current-location-icon />
            </custom-input>
          </b-col>
          <b-col lg="6" md="12" sm="12">
            <custom-input
              :customId="'nereye'"
              :placeholder="'İzmir Adnan Menderes (ADB) Türkiye'"
              :label="'Nereye'"
              :nextId="'nextDate'"
            >
              <location-icon />
            </custom-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" md="12" sm="12">
            <b-row>
              <b-col class="flex-column mb-3" lg="12" md="12" sm="12">
                <custom-date-picker
                  :placeholder="'10 Mart Çarşamba 2020'"
                  :label="'Gidiş Tarihi'"
                  :id="'dt1'"
                  :customId="'nextDate'"
                >
                  <date-picker-icon />
                </custom-date-picker>
              </b-col>
              <b-col
                v-if="type === 'cift'"
                class="flex-column mb-3"
                lg="12"
                md="12"
                sm="12"
              >
                <custom-date-picker
                  :placeholder="'10 Mart Çarşamba 2020'"
                  :label="'Dönüş Tarihi'"
                  :id="'dt2'"
                >
                  <date-picker-icon />
                </custom-date-picker>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="flex-column" lg="6" md="12" sm="12">
            <b-row class="mb-4 d-flex">
              <b-col lg="3" class="max-w" md="3" sm="3">
                <custom-select
                  :label="'Yetişkin'"
                  :selectItem="yetiskin"
                  :handleSelect="setYetiskin"
                  :ageRange="'(12+ yaş)'"
                />
              </b-col>
              <b-col lg="3" class="max-w" md="3" sm="3">
                <custom-select
                  :label="'Çocuk'"
                  :selectItem="cocuk"
                  :handleSelect="setCocuk"
                  :ageRange="'(2-12 yaş)'"
                />
              </b-col>
              <b-col lg="3" class="max-w" md="3" sm="3">
                <custom-select
                  :label="'Bebek'"
                  :selectItem="bebek"
                  :handleSelect="setBebek"
                  :ageRange="'(0-2 yaş)'"
                />
              </b-col>
              <b-col lg="3" class="max-w" md="3" sm="3">
                <custom-select
                  :label="'Öğrenci'"
                  :selectItem="ogrenci"
                  :handleSelect="setOgrenci"
                  :ageRange="'(12-24 yaş)'"
                />
              </b-col>
            </b-row>
            <custom-button />
          </b-col>
        </b-row>
      </div>
    </form>
  </div>
</template>

<script>
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';

import store from '../../store';
import CustomButton from '../form/CustomButton.vue';
import CustomDatePicker from '../form/CustomDatePicker.vue';
import CustomInput from '../form/CustomInput.vue';
import CustomSelect from '../form/CustomSelect.vue';
import CurrentLocationIcon from '../icons/CurrentLocationIcon.vue';
import DatePickerIcon from '../icons/DatePickerIcon.vue';
import LocationIcon from '../icons/LocationIcon.vue';

datepickerFactory($);

export default {
  components: {
    CustomInput,
    CurrentLocationIcon,
    LocationIcon,
    CustomDatePicker,
    CustomSelect,
    CustomButton,
    DatePickerIcon,
  },
  name: 'SearchForm',
  data: () => {
    return {
      type: 'tek',
      yetiskin: 1,
      ogrenci: 0,
      cocuk: 0,
      bebek: 0,
      limit: 7,
    };
  },
  methods: {
    setYetiskin: function(value) {
      const parseValue = parseInt(value);
      this.yetiskin = parseValue;
    },
    setCocuk: function(value) {
      const parseValue = parseInt(value);
      this.cocuk = parseValue;
    },
    setBebek: function(value) {
      const parseValue = parseInt(value);
      this.bebek = parseValue;
    },
    setOgrenci: function(value) {
      const parseValue = parseInt(value);
      this.ogrenci = parseValue;
    },
  },
  watch: {
    yetiskin: function(value, prevValue) {
      const parseValue = parseInt(value);
      const toplamYolcu = this.cocuk + value + this.ogrenci;
      if (toplamYolcu > this.limit) {
        this.yetiskin = prevValue;
        return alert(
          'Bir uçuştaki toplam yolcu sayısı (bebek yolcu hariç), 7 den fazla olamaz.',
        );
      } else if (parseValue === 0 && this.ogrenci === 0) {
        this.yetiskin = prevValue;
        return alert(
          'Yolcular arasında en az 1 yetişkin, öğrenci yada 65 yaş üzeri olmak zorundadır.',
        );
      }

      this.yetiskin = parseValue;
    },
    cocuk: function(value, prevValue) {
      const parseValue = parseInt(value);
      const toplamYolcu = parseValue + this.yetiskin + this.ogrenci;
      if (toplamYolcu > this.limit) {
        this.cocuk = prevValue;
        return alert(
          'Bir uçuştaki toplam yolcu sayısı (bebek yolcu hariç), 7 den fazla olamaz.',
        );
      } else if (parseValue > 0 && this.yetiskin === 0) {
        this.cocuk = prevValue;
        return alert(
          'Bir uçuşta çocuk yolcunun uçabilmesi için, en az 1 yetişkin yolcu gerekmektedir.',
        );
      }

      this.cocuk = parseValue;
    },
    bebek: function(value, prevValue) {
      const parseValue = parseInt(value);

      if (this.yetiskin < parseValue && this.yetiskin !== 0) {
        this.bebek = prevValue;
        return alert(
          'Bir uçuştaki bebek yolcu sayısı, yetişkin yolcu sayısından daha fazla olamaz.',
        );
      }

      this.bebek = parseValue;
    },
    ogrenci: function(value, prevValue) {
      const parseValue = parseInt(value);
      const toplamYolcu = this.cocuk + this.yetiskin + parseValue;

      if (toplamYolcu > this.limit) {
        this.ogrenci = prevValue;
        return alert(
          'Bir uçuştaki toplam yolcu sayısı (bebek yolcu hariç), 7 den fazla olamaz.',
        );
      } else if (this.yetiskin === 0 && parseValue === 0) {
        this.ogrenci = prevValue;
        return alert(
          'Yolcular arasında en az 1 yetişkin, öğrenci yada 65 yaş üzeri olmak zorundadır.',
        );
      }

      this.ogrenci = parseValue;
    },
    type: function(value) {
      this.$nextTick(() => {
        if (value === 'cift') {
          const toDate = $('#dt2');
          toDate
            .datepicker({
              dateFormat: 'dd MM yy DD',
              minDate: store.state.selectedDate,
              numberOfMonths: 2,
              onSelect: function() {
                var currentDate = $(this).datepicker('getDate');
                console.log(currentDate);
              },
            })
            .datepicker('setDate', store.state.toDate);
        }
      });
    },
  },
  mounted() {
    $.datepicker.setDefaults({
      dayNames: store.state.dayNames,
      monthNames: store.state.monthNames,
    });

    const fromDate = $('#dt1');
    fromDate
      .datepicker({
        dateFormat: 'dd MM yy DD',
        minDate: 0,
        numberOfMonths: 2,
        onSelect: function() {
          var toDate = $('#dt2');
          var startDate = $(this).datepicker('getDate');
          const _toDate = toDate.datepicker('getDate');
          if (typeof _toDate === 'string' && startDate > _toDate) {
            store.commit('setToDate', startDate);
          } else if (
            typeof _toDate !== 'string' &&
            startDate > store.state.toDate
          ) {
            store.commit('setToDate', startDate);
          }
          var minDate = $(this).datepicker('getDate');
          store.commit('setSelectedDate', minDate);

          toDate.datepicker('option', 'minDate', minDate);
        },
      })
      .datepicker('setDate', store.state.nextDay);
  },
};
</script>

<style lang="less">
.search-form {
  position: absolute;
  bottom: -35px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: 2;
}

.form-area {
  margin: 0 auto;
  background: #fff;
  width: 995px;
  max-width: 90%;
  min-height: 270px;
  border-radius: 10px;
  padding: 25px 50px;
  box-shadow: 3px 3px 5px 0 #c5ccc5;

  label {
    font-size: 0.875rem;
    font-weight: 400;
    color: #3a3a32;
    margin-bottom: 0;
  }

  .radios {
    margin-right: 10px;
    line-height: 18px;
  }
}
.max-w {
  max-width: 25%;
}
@media (max-width: 1199px) {
  .form-area {
    padding: 10px;
  }
}
@media (max-width: 991px) {
  .form-area {
    border-radius: 0px;
  }
}
</style>
