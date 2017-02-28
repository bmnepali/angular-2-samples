/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/text-editor/text-editor';
const styles_TextEditor:any[] = ([] as any[]);
export const RenderType_TextEditor:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_TextEditor,
  data: {animation: ([] as any[])}
}
);
function View_TextEditor_1():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),3,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵdirectiveDef(4,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpureObjectDef([
      'currentChar',
      'selectedChar'
    ]
    ),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    )
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = check(view,2,0,view.context.$implicit.isCurrent,view.context.$implicit.isSelected);
    check(view,1,0,currVal_0);
  },(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = view.context.$implicit.value;
    check(view,3,0,currVal_0);
  });
}
export function View_TextEditor_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Text editor based on Observables']),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'alert alert-success'
      ]
      ,
      [
        'role',
        'alert'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.\n']),
    import0.ɵtextDef((null as any),['\n\n']),
      import0.ɵelementDef(0,(null as any),(null as any),5,'div',[[
        'class',
        'editor'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵelementDef(0,(null as any),(null as any),2,'div',[
      [
        'class',
        'page noselect'
      ]
      ,
      [
        'id',
        'page'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_TextEditor_1),
    import0.ɵdirectiveDef(12,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n']),
    import0.ɵtextDef((null as any),['\n\n']),
    import0.ɵelementDef(0,(null as any),(null as any),2,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
      import0.ɵelementDef(0,(null as any),(null as any),1,'a',[[
        'href',
        'http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Read more here'])
  ]
  ,(check,view) => {
    var comp:import2.TextEditor = view.component;
    const currVal_0:any = comp.currentDocument.characters;
    check(view,11,0,currVal_0);
  },(null as any));
}
const RenderType_TextEditor_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_TextEditor_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'editor',([] as any[]),(null as any),(null as any),(null as any),View_TextEditor_0,RenderType_TextEditor),
    import0.ɵdirectiveDef(1025,(null as any),0,import2.TextEditor,([] as any[]),(null as any),(null as any))
  ]
  ,(check,view) => {
    check(view,1,0);
  },(null as any));
}
export const TextEditorNgFactory:import0.ComponentFactory<import2.TextEditor> = import0.ɵcreateComponentFactory('editor',import2.TextEditor,View_TextEditor_Host_0);