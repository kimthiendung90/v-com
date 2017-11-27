<style lang="scss">
    .radio-component {
        > input {
            position: absolute;
            border: 0;
            margin: 0;
            opacity: 0;
            background: transparent;

            + label > .input-box {
                display: inline-block;
                margin: 0;
                padding: 0;
                overflow: hidden;
                user-select: none;
                position: relative;
                border: 1px solid #aaa;
                border-radius: 1em;
                width: 3em;
                height: 1.5em;
                background: #fff;
                transition: background .2s ease-in;
                vertical-align: -.5em;

            }

            + label > .input-box::before{
                content: "";
                position: absolute;
                top: -1px;
                left: -1px;
                border: 1px solid #aaa;
                border-radius: 50%;
                width: 1.5em;
                height: 1.5em;
                background: #fff;
                transition: transform .3s ease-out;
            }

            &:checked + label > .input-box {
                background: #63b65d;
                border-color: #498d47;
            }

            &:checked + label > .input-box::before{
                border-color: #498d47;
                transform: translateX(1.5em);
            }

            &:focus + label > .input-box {
                box-shadow: 0 0 0 3px rgba(71,210,25,.2);
            }

            &:disabled + label > .input-box {
                opacity: .7;
                background-color: #aaa;
            }
        }
    }
</style>

<template>
    <div class="radio-component">
        <input type="radio"
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
                    return 'radio-id-' + this._uid;
                },
            },
            name: {
                type: String,
                default: null,
            },
            value: {
                default: '',
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

                return this.modelValue === this.value;
            }
        },

        methods: {
            onChange() {
                this.toggle();
            },

            toggle() {
                this.$emit('input', this.state ? '' : this.value);
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
    }
</script>
