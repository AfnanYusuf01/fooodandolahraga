import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('olahraga')
@Controller('olahraga')
export class OlahragaController {
  private olahragaData = [
    { id: 1, jenis: 'Angkat Beban', tinggi: '140 - 200 cm', berat: '40 - 120 kg', umur: '18 - 65 tahun', durasi: '30 - 90 menit', kalori: '150 - 700' },
    { id: 2, jenis: 'Bersepeda', tinggi: '140 - 200 cm', berat: '40 - 120 kg', umur: '18 - 65 tahun', durasi: '30 - 90 menit', kalori: '150 - 700' },
    { id: 3, jenis: 'Lari', tinggi: '140 - 200 cm', berat: '40 - 120 kg', umur: '18 - 65 tahun', durasi: '30 - 90 menit', kalori: '150 - 698' },
    { id: 4, jenis: 'Senam', tinggi: '140 - 200 cm', berat: '40 - 120 kg', umur: '18 - 65 tahun', durasi: '30 - 90 menit', kalori: '150 - 700' },
    // ... (Data olahraga lainnya)
  ];

  @Get()
  @ApiResponse({ status: 200, description: 'Get all olahraga data', type: [Object] })
  getAllOlahraga() {
    return this.olahragaData;
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID of the olahraga item' })
  @ApiResponse({ status: 200, description: 'Get olahraga by ID', type: Object })
  getOlahragaById(@Param('id') id: string) {
    const olahraga = this.olahragaData.find((item) => item.id === parseInt(id, 10));
    if (!olahraga) {
      return { message: 'Data tidak ditemukan' };
    }
    return olahraga;
  }
}
