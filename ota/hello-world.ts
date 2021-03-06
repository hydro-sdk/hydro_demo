import { runApp } from "@hydro-sdk/hydro-sdk/runtime/flutter/runApp";
//Make sure to import from /index specifically if using barell imports.
//The compiler won't resolve /index by itself
import {
    StatelessWidget,
    Text,
    Container,
    TextEditingController,
    Center
} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";
import { MaterialApp, Scaffold } from "@hydro-sdk/hydro-sdk/runtime/flutter/material/index";
import { Widget } from "@hydro-sdk/hydro-sdk/runtime/flutter/widget";
import { Key } from "@hydro-sdk/hydro-sdk/runtime/flutter/foundation/key";

class MyWidget extends StatelessWidget {
    private controller = new TextEditingController({ text: "Some convoluted but familiar functions" });
    public constructor() {
        super();
    }

    public build(): Widget {
        console.log(this.controller.getText().toLowerCase());
        return new MaterialApp({
            home:
                new Scaffold({
                    body:
                        new Center({
                            child:
                                new Container({
                                    key: new Key(this.controller.getText().toLowerCase()),
                                    child: new Text("Hello world!")
                                })
                        })
                })
        });
    }
}

runApp(() => new MyWidget());
