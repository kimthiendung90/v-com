<style lang="scss">
    .checkbox-component {
        > input {
            opacity: 0;
            position: absolute;

            + label > .input-box {
                display: inline-block;
                margin: 0;
                padding: 0;
                background: #fff;
                overflow: hidden;
                vertical-align: -5%;
                user-select: none;

                position: relative;
                border: 1px solid #939393;
                border-radius: 1em;
                width: 3em;
                height: 1.5em;
                background: #fff;
                transition: background .2s ease-in;
                vertical-align: -15%;

            }

            + label > .input-box::before{
                content: "";
                position: absolute;
                top: -1px;
                left: -1px;
                border: 1px solid #939393;
                border-radius: 50%;
                width: 1.5em;
                height: 1.5em;
                background: #fff;
                transition: transform .3s ease-out;
            }

            &:checked + label > .input-box {
                background: #63b65d;
            }

            &:checked + label > .input-box::before{
                border-color: #498d47;
                transform: translateX(1.5em);
            }

            &:focus + label > .input-box {
                box-shadow: 0 0 2px 3px rgba(115, 185, 255, 0.69);
            }

            &:disabled + label {
                opacity: 0.7;
            }
        }
    }
</style>

<template>
    <div class="checkbox-component">
        <input type="checkbox"
               :id="id"
               :name="name"
               :value="value"
               :class="className"
               :required="required"
               :disabled="disabled"
               @change="onChange"
               :checked="state">
        <label :for="id">
            <slot name="input-box">
                <span class="input-box">
                </span>
            </slot>
            <slot></slot>
        </label>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'modelValue',
            event: 'input'
        },

        props: {
            id: {
                type: String,
                default: function () {
                    return 'checkbox-id-' + this._uid;
                },
            },
            name: {
                type: String,
                default: null,
            },
            value: {
                default: null,
            },
            modelValue: {
                default: undefined,
            },
            className: {
                type: String,
                default: null,
            },
            checked: {
                type: Boolean,
                default: false,
            },
            required: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            model: {}
        },

        computed: {
            state() {
                if (this.modelValue === undefined) {
                    return this.checked;
                }

                if (Array.isArray(this.modelValue)) {
                    return this.modelValue.indexOf(this.value) > -1;
                }

                return !!this.modelValue;
            }
        },

        methods: {
            onChange() {
                this.toggle();
            },

            toggle() {
                let value;

                if (Array.isArray(this.modelValue)) {
                    value = this.modelValue.slice(0);

                    if (this.state) {
                        value.splice(value.indexOf(this.value), 1);
                    } else {
                        value.push(this.value);
                    }
                } else {
                    value = !this.state;
                }

                this.$emit('input', value);
            }
        },

        watch: {
            checked(newValue) {
                if (newValue !== this.state) {
                    this.toggle();
                }
            }
        },

        mounted() {
            if (this.checked && !this.state) {
                this.toggle();
            }
        },
    };
</script>
