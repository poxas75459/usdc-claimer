/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5y1CdspR36Cxh8jTgs1ktWDK6o4A2H5SRYsLTZuWgEvZY6deBM1vfCGt4YviRi5bxKW22u1D1J95iNF8DtCck7xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KXdHRsW2cgeTdkF9PgxtMKH5U7WCpThzeEeXWZvWpKTQvFcvp1iMseEFgc1sQyTY5e6uz5gWm9WgBwCKDUjScZi",
  "key1": "3t2tAt9LZqv46SsbRy9UDceQDQpoBwSNixh7GvYgYek4nHgA55GL9hYkEVSEKjxpUUJEW7hhV1euY3rjJ1VyWyLS",
  "key2": "iSiTfDhgU8tyAfPvuaZoExdgoZ5qMLYzpNQJnjhAJULKAmkYYng4rtAXZaVjjR1vthkCVKeJUdiYgph5DeJTNTx",
  "key3": "4zMhzQAgMTns9Pw2gamdkP11YUjD5XhuoLYtU5HHyKCfzbbSyQkAsdBG5nXasZQysJnFB9pGHAA6YnNN28RackRP",
  "key4": "21sPxyMR7sxEwQ5jbNdFbYppa1co42ZWJ7MYStoX3z6ATgEvDpKgH2pzdQTYZDZQq39GAsB2Ri3GiCLidEEcFhxz",
  "key5": "iwg1VaMXt65aHbT7ntxHMJ3vcrT5T8PHho4D9JKBY6sTHoJ3T6jC1x33eY74F2M5CssZBAHUDqoNRXSE7TVA7ZH",
  "key6": "4xTQpxBd91CcgsrDVDvzFJPdnRducohJProLGrxAfHCV6Ar67hMK2YQgX7UfDBZgF4vN9R4SkAoVCAUfbwFvHycy",
  "key7": "3MA9tEiQTWBcK893XgaTL3duC5Eb6W4RP8Wus6bNarV6gL7NvCphPFMRYLMKd9R5cNapk664q4ffMYwnqTFCSTxF",
  "key8": "5YhDNECJWZ7QsFjYmBUursqW43G7DH75VV4KBmEZqYYYGFCmkQ7MWT8hq74KN43ukdN6zy9ZSJytoTqoJu6iDbqq",
  "key9": "3nKeShDbi62FNbDta5hz5kxfwyxypjtPtuoYZnneEdKajGoySQCM7StpjFFRAZaauNiSj2wPbUhFqeUt5WDE2pKh",
  "key10": "451fRMM5UXaycZ5jawtkngrjGSMo7TvhWrit6djLGuSJFJrpuUEj6qxgZNEwtdBBZu4oZrGvWmosGsqSw2UzDJ7g",
  "key11": "2miKopGmyynTLkhT1FohwwySUNmYDVtbFDBsoHSitKE4QGQ6JBJzdAvUPeUmbtvEhL4LJk4u9c6ZiYZsrkYws2fA",
  "key12": "4wi6JFQT7TA3wWuuZmCmpuyXzep78ScXbkkzPurQttj3dJXTD1ANRCuaj2F2DSiTsJLwyVJ5W78mD1ELXwV7XZjZ",
  "key13": "34T9Fdis8FqHwHK87fXwybHhh7RR1wGXXEtD2BYKaXosocH34AXo6wZBf8pnom7ik3zVjGRwJ4MfjLd77mk5623H",
  "key14": "5KShw8znukhYcXKFc4pwgTPFbTN95pGXoGNdQWPE5y75Y75WKuZiaFr1fUn3YBSqEcuyuGhXyckTskhzxdVE1XSb",
  "key15": "3NGPnoMf2mbVBJP1m2YMhCoUJmSBPNCDqSMWr3Fcpn7rcCmfahKEF1oEADsTKaKP5fCgSbV3K5P1wZuF7XLhJm6",
  "key16": "Xy3z5oJXhq1fCac9MTfjX1Kqg7rXrCgAq1oyssteY7kBLzFZAwuJR34q9H1AikLNGegZwCs8EN4wjdmrCpd1Qud",
  "key17": "2MFNjyoDKN1zo64tijrzX6spyxwp8zr2z1K9oPzFAUxHjPsyCgkuiHWcu1spNtGaPxYq7oBLwr4n16xyoxtSLoH5",
  "key18": "5ZpLztMvvoURRAFdt5DMWeBaha3ABJZtp5MrVyXRaeShkKSwVsJY78bvv96CNqxHNt9B5ymSjFcoxaw4JtSZhRNc",
  "key19": "3qSbE3YZvK4BuT7tu1hbsPjTnGnKgev3iRjVk9gDNHgMt7wBFX7dg8D4VpiEWe8xQsMPwJXZN4yqu4WgQDvXzaWx",
  "key20": "4PPDTGxMch9uPzgeRFaw5Zn95vWuztKrVETpHXiUvX2MRrGZJiah5L2bvHcdJDx6R1WMYAEcM5zrhCij1VjxcKGi",
  "key21": "4cNtLPoExZo797WHL5cs9Msi5ZqFdXLEqtjJaYpiJRABNmaPHAK3HeFKViJoLVdCwL6V4dCyPupASyUYqp9awS3F",
  "key22": "3xHmZ6PvifydzXk77d3vNAYbHsYK5rhbCVbVzjsdprtApFLx32bY42ZaqqaU3pfmJVNjncdj3vfmNvTvPUuXXCfN",
  "key23": "5VY7Tr8wiWGpu2vAqR3Z28KgDWVzDz8qfTptxX2e62Txvqyv9tuysTY5eAq35wDgxd8Agb47Yrurmi46p1ihzgML",
  "key24": "5WeeUJbnQknB8vsPaH5nATAitFLYRQSDTGKYAnVVxWXFPqqpbJtUWR3SCW5sYZCD2g5HhJUeA3D9PrnhvuopFz1S",
  "key25": "51BQc8y22DZj4hxTNrxvLwDcdZAqPM4ssZ9mKGe8cHARht1owm4YCNViMFZM3Py2zcR3Hskm36DzXxaxvJdbjDwP",
  "key26": "2w4uKod1iXobfm5hgrJRC3PDExVAUPVAUR28boPSpBCaoEyr42FTKFVz7ACs53erCXQyY9Cpc6vFi3wWxpAunNEu"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
