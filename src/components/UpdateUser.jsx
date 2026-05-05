"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            name,
            image
        })


    };
    return (
        <Modal className="border-4 border-amber-300">
            <Button variant="secondary" className="text-amber-900 font-bold">
                <BiEdit /> Update Profile
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header className="flex flex-col items-center justify-center text-center py-4">
                            {/* Centered Icon Container */}
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground flex items-center justify-center rounded-full p-2 mb-2">
                                <BiUser className="size-5" />
                            </Modal.Icon>

                            {/* Centered Heading */}
                            <Modal.Heading className="text-xl font-semibold">Update User</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Image URL" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}