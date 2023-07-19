-- CreateTable
CREATE TABLE `Selections` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `titles` INTEGER NOT NULL,
    `top_scorer` VARCHAR(25) NOT NULL,
    `fifa_code` VARCHAR(5) NOT NULL,
    `first_cup` DATE NOT NULL,
    `trainerId` INTEGER NOT NULL,

    UNIQUE INDEX `Selections_name_key`(`name`),
    UNIQUE INDEX `Selections_fifa_code_key`(`fifa_code`),
    UNIQUE INDEX `Selections_trainerId_key`(`trainerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Players` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(35) NOT NULL,
    `age` INTEGER NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `position` VARCHAR(50) NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `selectionId` INTEGER NOT NULL,

    UNIQUE INDEX `Players_name_key`(`name`),
    UNIQUE INDEX `Players_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trainers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(35) NOT NULL,
    `age` INTEGER NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `password` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `Trainers_name_key`(`name`),
    UNIQUE INDEX `Trainers_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Selections` ADD CONSTRAINT `Selections_trainerId_fkey` FOREIGN KEY (`trainerId`) REFERENCES `Trainers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Players` ADD CONSTRAINT `Players_selectionId_fkey` FOREIGN KEY (`selectionId`) REFERENCES `Selections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
