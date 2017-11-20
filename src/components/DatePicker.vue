<template>
  <HotelDatePicker :value="'2020-07-14 ► 2020-07-20'" :startDate="day5nextMonth()" />
</template>

<script>
import HotelDatePicker from './datepicker/vue-hotel-datepicker.min.js'

export default {
  components: {
    HotelDatePicker,
  },
  methods: {
                day5nextMonth: function() {
                    var now = new Date();
                    return new Date(now.getFullYear() - 1, now.getMonth(), 1);
                }
            },
}
</script>

<style src='./datepicker/vue-hotel-datepicker.min.css'></style>