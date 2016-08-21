import { BaseComponent, BaseOptions, BaseElement} from '../base';
import { FormioComponents } from '../components';
import { FormioTemplate } from '../../formio.template';

/**
 * The CheckBoxValidation interface.
 */
export interface CheckBoxOptions extends BaseOptions<string> {
    defaultValue?: string,
    hideLabel?: boolean
}

export class CheckBoxComponent extends BaseComponent<CheckBoxOptions> {}
export class CheckBoxElement extends BaseElement<CheckBoxComponent> {}
export function CheckBox(template:FormioTemplate) {
    FormioComponents.register('checkbox', CheckBoxComponent, CheckBoxElement, {
        template: template.components.checkbox
    });
    return CheckBoxElement;
}
