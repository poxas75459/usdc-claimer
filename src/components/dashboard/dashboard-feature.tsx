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
    "3eSADnPshaSyQTUnwhtt8CsZLQ7HtKUFWW4X2HJnkvEEK19XuzAnuENj7mXzfFCgrSFdBeEork7aaSFZs98Gh4ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36vakeipHLVuyp4yyq2enGbRs5R4Ajayt1zRZdqmHEEGtMTVFT3jB6VuZnqCVdZRfMNpE5hCCKkp9ZXpdXPfiZUz",
  "key1": "5LbiyoLQdu95nm6nUR9bo6f4MepjBFe63i3VoxHjTmovUXVSQrwqqhM3fSnjafJ9bdohGbmN9WD4Z7dKJrELvGm",
  "key2": "3VsGMpDAjK6nCnZjURjNYABTx9jNQwgaTgMpd6vYA7beoAigTmQsVi6oikpSQtDVyGdRYoW55QvSEUAyw8HFCcg8",
  "key3": "63h4taKjVKb1XLZRsExw192HCkvs3vZXk25HsTgdsH8cTBNdhd9yYQRdg3NcyDArYb5SU7tT22TVAYeELwy4XJ8F",
  "key4": "4azsaTfCkAraKygfuZkZL5eGup3eN2UH8mNZYx1ewrmCDWuq1agyDq6vsN7UtbggrTGhUasE1ty89mHPByKtkpw1",
  "key5": "2xsA4joHiGTEPvDSqhZFg5CcnJbJbWks9ZiFNSdjH3k2iCWN5eF9yrLq4mzQiXLSHQkCba4yCcVDPTAmAL2pXZ6a",
  "key6": "5Qh25UNfYyGWrptqrLprSF83WcwwhyWTYJdTJDNmp6JWSYLYtEFZWvR31KL2g8WpnWceVEcFXRsAgquiQKX67Y1f",
  "key7": "4HG4YR792VBp47vDrmX3WbCPmPySVEgfnpkxB1KTjSzNTR3KRL1mfbDmk555xWpzFrfBkbtXB6XtfucPbjS82hSX",
  "key8": "92wFdyjbyNEESF7HUx9G7raZmJYbWUk4YCkrG7K9CrbuNiGKzyk9nDvBKW73ryoQAik3yM7YMLQbLM1SqtrM8uY",
  "key9": "3rzUAChNnsUzv1yrePwezfxygrdvRA6ZfSRdwaNJqBUQYeuFvzWgoD7uwdFP4UdowY5TMZu5ybTh3WVVpn8yuip4",
  "key10": "HsKLsKtxdk7jd9ypBM6Hjrw2qXFK2NdwAQtRTg1tgpnPcpGtGScRfW8ZahvHtRVjSVQPBjHMsqwWQzVEC7eyN7A",
  "key11": "5rqbiKrjS85MtUAvYCVqWKcnQFQtCcYJQNFrQk9no7L238TUXMQyE21fXHiQhrjVghQJAjZEpASArmruJPgZ3WHj",
  "key12": "5oA4aXVTPpBQ1eMPnavjGNNXxP17fdZzpxLkQP8jJVb7JMFV7tvRs45cnTbds2rjYkRYEDoetBqek3XbZ6W4AyJQ",
  "key13": "5hM3i8w4NiBoBDJHN3Q5fF1QAjTxS9aGFQ7DnZGptZXVaDBASh412eonGNkPqzeu2FcF9p6xNspZHBsVHLCmxkvF",
  "key14": "5HyooMJHqvMWv42n4hMfjKuAw2LKP2GfZH3JvbBw7Aa26Ltsu3V7y1dSCh1Zb9tK9xVvZGmdF5juVuqskGv7yqkX",
  "key15": "51eBfqyaRHGjyb5R3G5pX6YK6BS4Wa1GJg7UP9JrDz95iMeJZybb73pPr4YTx33VKZWAr4qmga5R5RCNDQ4XdyzJ",
  "key16": "4gy1eUxL6Zv9tqRZVko6xo8u2tnY482DNHvmAzTpA1mQwpU3m64Y6hsq8dQtbR1AVf29NEdBWE2Rn4Vo3SrpDcPj",
  "key17": "5tu6aF596w4EPqzJkNTtc84u2sJKMJpW1MPKmzbwPK8caHyZipTRarnqcuxout9Tu2Bondu6DwhTvb4Pzo2L8diX",
  "key18": "3NYZtoAc2P1b3pLiRXvZUGp7xdMyvotvpTdVZnuWnA4Lb533WMSA3fqCcyUswSVzA7F91sM9Nwg77UvCCpcBUWkp",
  "key19": "5gCBi5QUw1KH6sGjSvC1jBaBHpTr6XptN61z4MhPqo95hcZ5LLHzRGqmfen1RWeqX4seeQ95mEutwdKhveTvr5Az",
  "key20": "4c4nVz9iXe7qFQZQFSScT3iULzuTe66QuE8npkwnEyU4FhLWy3ooeudFdySg7D8f7j1LBrAZt45waLDTLpSvTydF",
  "key21": "28pHVkqT72iMcZ988KSVACUt3hijmXKzUgB4V4kT168WgkPMv9cNuG9YGLeeS9BQazP5bBc3WQfbYdrxvAygCaTu",
  "key22": "4xry3ct3JfYN9ASRsZC4TK8Nsp2TXM2CxdcRnG8Fp5e54rxpnh8kFoRmJHMJ5J6UBw9Hcs812XsmR2Ao9q2SWwmG",
  "key23": "ggLmkPNDG2htwXjrP93K7xhEvzfqxx482H9YejwEu6q3k3vXKNn8mnQgTM379dPzh8MRB15fsHx3veoxu5tXL93",
  "key24": "273egzmqSAnLTSSuUo5ML5pd4xwvcG87RR8p5MTKeU1iKpUB2vGPN5G6WSUwbwsSNSrRzzwa1iVojrYWz3b5VNBq",
  "key25": "5fiTjvtHeh2hHpziV6wWHPGnXvhSw3CqW8tCG6yWKxBnKpWiTQFu9JPpMFsNQWcPh4D73y7LiraxBpby6kaNohr3",
  "key26": "PmvPbyntWgNisR7oeZkxdSQLNMm3dTYWh42x5QRun2a5uhJ2SMxUWmJgYMakurL6K3ckR73YDn6qKa5ENje2oP8",
  "key27": "29eApvBjbP1Nsf1YE1tUh9mrpRGLSpmm7kLfdjAyomWc1stzSD3CDYRKTv1hj7pyUeHYp37L9VkveQftZk1Afapv",
  "key28": "4kqWusM8GJay54zDdPtMHAUeZistegmHUdS8L2Qbwrei9vSjxn5R78Z98XLAHDq2dSY6LXUvFvFY1dC69Cbeo9CW",
  "key29": "5RyKZ9mkyjLSfBAmdPdHwpfhPdAwHdtmQD5YaW7fieyPYk2Xm65MyLPJxCnhaMhAnZCWdJ2rfYZvPegzdYiZZ7Ao",
  "key30": "5ZFYMmgx5Dbumf4U9TDqk1ndSKtBjUZfpc1mvKqYuobFfQ4sJVjTGUfLNBb6v7merZvhY6AzAh9WDowKTgkrAU24",
  "key31": "ximAEt4bMGa716k9PX8myVy3bDk823mEz13p9WXCGesAVoaZ7PSP7SSyk6bJnZMJnMod3oEcP4abKXBDApEzXTY",
  "key32": "65y5YReaVuKs8qKbigH47VQiGy7FGxxrbYFfuv73cM34CC83ejrKM8Fdt7xQvshQGQtx4VgtE7RGrHqsm2ojje8v",
  "key33": "3ZQ2YktsdGCHu16sGXS1zwQieKdSNy4Kqgn5pvZ7Vj5sjN3J2PuVihyoTznj9dP42yH3dmkCUqPfVLU4rYX8FoGx",
  "key34": "32E6TbSSWo3WYjVFCpyaUFp9dNXpEVV7E19xRHdFnMd3gsaJXNSUL6dyGgBxfpze8MRK6SMMEKKYtk8FpdTexaRx",
  "key35": "2HQgN8TRtRuRAP45dPMimXqiQJDHuE2GiafHW3DbJmbDpVhmm7a7VuzHTVm1JeYP9okF4EjrgKQy3o4NDq5JCe3T",
  "key36": "5ACTEpwc7D9UH81iqjgfpejWGESkjKbG7uidCnNUxGptHqrzJ6XqBBjS7FcwdMMXvnBh4AiYMUPNi23UaoHFbp6d",
  "key37": "4wK96QVam4mLZjm21r9oVGP8uFBmM9kpZbc7T8ejqtvrzNc513foxBBT7SuHBwvA1EVvevJ3awcTB9FtPDiz59qb",
  "key38": "64iWVBPSjD4fD63xGt6hGdcHrRGCWWp2A5Sg4bigYmad6GHmC3aNtb2U4rtiW1B4KuUogzBhvQwHk7UzkKL9awa6",
  "key39": "3VZuCWh7FsBq5QKyxJYZH5HWuJLZoTdmhWtBysWQAmsKnJTXA3QC46cH5wwYtb5V994Jmco4BQPNwGmWosJzi4Hs"
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
