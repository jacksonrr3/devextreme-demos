import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.InfiniteScrolling')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest('DataGrid', 'InfiniteScrolling', 'jQuery', (test) => {
  test('InfiniteScrolling', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.hover($('.dx-datagrid-rowsview'));
    await takeScreenshot('datagrid_infinite_scrolling_2_desktop.png');

    await t.scrollBy('.dx-scrollable-container', 0, 250);

    await takeScreenshot('datagrid_infinite_scrolling_3_desktop.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
