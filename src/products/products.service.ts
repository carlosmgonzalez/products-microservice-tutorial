import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from 'generated/prisma';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ProductsService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database connected');
  }

  create(createProductDto: CreateProductDto) {
    return this.product.create({ data: createProductDto });
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;

    const totalProducts = await this.product.count({
      where: {
        available: true,
      },
    });
    const totalPages = Math.ceil(totalProducts / limit!);

    if (page! > totalPages)
      throw new BadRequestException(
        `Page ${page} not exist, total page is ${totalPages}`,
      );

    const products = await this.product.findMany({
      where: {
        available: true,
      },
      take: limit,
      skip: limit! * (page! - 1),
    });

    return {
      metadata: {
        page,
        totalPages,
      },
      products,
    };
  }

  async findOne(id: number) {
    const product = await this.product.findUnique({
      where: {
        id,
        available: true,
      },
    });

    if (!product)
      throw new NotFoundException(`Product with id ${id} not found`);

    return product;
  }

  async update(updateProductDto: UpdateProductDto) {
    const { id, ...data } = updateProductDto;

    await this.findOne(id);

    return this.product.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    // Eliminarlo por completo:
    // return this.product.delete({ where: { id } });

    // Sofe delete:
    return this.product.update({ where: { id }, data: { available: false } });
  }
}
