import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, dueDate, status } = await request.json();
    const { db } = await connectToDatabase();

    const updateData: Partial<{
      title: string;
      description: string;
      dueDate: Date;
      status: string;
    }> = {};

    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (dueDate !== undefined) updateData.dueDate = new Date(dueDate);
    if (status !== undefined) updateData.status = status;

    const result = await db.collection("tasks").findOneAndUpdate(
      {
        _id: new ObjectId(params.id),
        userId: new ObjectId(session.user.id),
      },
      { $set: updateData },
      { returnDocument: "after" }
    );

    // <-- FIX: check result itself
    if (!result || !result.value) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(result.value);
  } catch (error) {
    console.error("Update task error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
