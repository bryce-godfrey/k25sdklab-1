import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "package_json": {
                            "table": "sys_module",
                            "id": "6b03f1ac2fd746f3bf7bb57dab57f97e"
                        },
                        "todo-user": {
                            "table": "sys_user_role",
                            "id": "d366054615bf4e3789210ab5c4e8d49f"
                        },
                        "src_server_acl-utilities_ts": {
                            "table": "sys_module",
                            "id": "5077a38d5235466eb6402ae0ec87d551"
                        },
                        "sn_todo_list_read": {
                            "table": "sys_security_acl",
                            "id": "76ec8c7ab3e143fe9be390261e7d4dc0"
                        },
                        "sn_todo_task_read": {
                            "table": "sys_security_acl",
                            "id": "292090ccdfa441129a6237a48cd01b23"
                        },
                        "sn_todo_task_write": {
                            "table": "sys_security_acl",
                            "id": "7e63936ab12349308610a7491669bdb0"
                        },
                        "sn_todo_task_create": {
                            "table": "sys_security_acl",
                            "id": "3299cef77c4742259893144d457de41f"
                        },
                        "sn_todo_list_write": {
                            "table": "sys_security_acl",
                            "id": "ac87d100c4794304aa8688253e8237cc"
                        },
                        "sn_todo_list_create": {
                            "table": "sys_security_acl",
                            "id": "388e160758804f0e8b45e57b935fc1c2"
                        },
                        "src_server_date-utilities_ts": {
                            "table": "sys_module",
                            "id": "c7be8e5897344248bdad626c8014138e"
                        },
                        "todo-task-closedon-state": {
                            "table": "sys_script",
                            "id": "1647959a9b3a4ded8d7894b883231545"
                        },
                        "todo-task-dueon-set": {
                            "table": "sys_script",
                            "id": "e764caee5d9a4e5a8b38568d38301eb8"
                        },
                        "taskduedateutilities": {
                            "table": "sys_script_include",
                            "id": "ef8b6245b23b4ad0ac24d6f96872b250"
                        },
                        "todo-app-menu": {
                            "table": "sys_app_application",
                            "id": "3feb529af89f4dc0810c3bdec8a53fb9"
                        },
                        "lists-module": {
                            "table": "sys_app_module",
                            "id": "38c7b84598cc445a8224a64869bf95d2"
                        },
                        "tasks-module": {
                            "table": "sys_app_module",
                            "id": "1a03004c96dc4e1e8d73188da96aba84"
                        }
                    };
                composite: [
                        {
                            "table": "sys_security_acl_role",
                            "id": "f7d27423532a40d2ba2c46436985d1c8",
                            "key": {
                                "sys_security_acl": "sn_todo_list_read",
                                "sys_user_role": "todo-user"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "de1bcc9329b74d28abc7873f64fd5233",
                            "key": {
                                "sys_security_acl": "sn_todo_task_read",
                                "sys_user_role": "todo-user"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "c769f0199dda4cdc968b4bd846f8f276",
                            "key": {
                                "sys_security_acl": "sn_todo_task_write",
                                "sys_user_role": "todo-user"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "0a49730c900d41d68b87b837d4d5dfd5",
                            "key": {
                                "sys_security_acl": "sn_todo_task_create",
                                "sys_user_role": "todo-user"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "32e95e760e044881be4a35983987b797",
                            "key": {
                                "sys_security_acl": "sn_todo_list_write",
                                "sys_user_role": "todo-user"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "a426639da7294efd8efb073e2d20ffc7",
                            "key": {
                                "sys_security_acl": "sn_todo_list_create",
                                "sys_user_role": "todo-user"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "b6b6862688324c31a0952d7a771d2263",
                            "key": {
                                "module": "date-fns@4.1.0",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "3ce3041c057d44609c077ce2d220815e",
                            "key": {
                                "module": "date-fns@4.1.0",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "db90dd08bee049fa85b49027278d2528",
                            "key": {
                                "module": "date-fns@4.1.0",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
