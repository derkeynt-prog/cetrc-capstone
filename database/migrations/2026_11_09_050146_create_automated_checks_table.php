<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('automated_checks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('revision_id')->constrained('revisions')->cascadeOnDelete();
            $table->string('check_type', 40);
            $table->float('score')->nullable();
            $table->string('status', 40);
            $table->float('threshold')->nullable();
            $table->text('result')->nullable();
            $table->timestamp('checked_at')->nullable();
            $table->index(['revision_id', 'check_type']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('automated_checks');
    }
};
