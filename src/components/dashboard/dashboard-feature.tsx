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
    "3gyrQFpqUkpaNVXPttV5vZpUoYg9epLk3ChakKXWzBxFhgZ769EgqVEU2ZU9RwQUd3KnEX16tEbgcataoWRPwyW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwJMkTKKCUdfQgf9omcQDEzBgGksxTvhyw2t5eo9xQoS1dBHHGPoaLvpBj9sT4qGUMCLrfb4YtsS3VYgm1Prs1H",
  "key1": "6DftQ9AEfxRgGhBUqGoLYJKZ9ME4oxBAjmLiZ2jphuPeT9K6Yk1jBymH5UjTSPXF2ZGgzzEtb2Q5whQ7HRz8bpD",
  "key2": "4a3iDaH4cwc284QCYwXMk66F4ipbMzi15yKwha79qSVFqnzCkmt6XHdbmkUFbppEkrUnWm9q5qgQbkUSUpu8hidP",
  "key3": "2LftnYzL7PQXmGbfzgUDwm8SsHXrv9a73hG7GvDQGUV1RShqUVhmqqMhoz7BKL3sp9wGszNNWFWUoTW7gNkvpKjF",
  "key4": "5xXwXcjPKP67pgEdKCYRSiDTy4s3Ci8SyXha6dbHELNDSUAUUESzKfbx8L18dxJZca9zaNUqLHaMyYSKhS4C54bq",
  "key5": "2m7L3QQLxWsdhyJ8b71j19PLf1BDHb3RoAFUh2u7scZPv5SUydcFrCcwo1x6ocU4kYrufHJwREUwwyERFod5eDbh",
  "key6": "YkseVLQ8TaqtkXc1BZLrtivBmGKgHLzYtAChQqourPFtxuKTD2Tejmeh73f7tKFZbfREMXt27X6JVkn5qHPDBTB",
  "key7": "2A56hsSPYwiN7FMyx49o4khqefwGscA2DamfpLcaE4EmXuRP7t5SY1tp1HcccxMvJv1Z2YJmY2dbLFhHknXm3AL2",
  "key8": "52DsncUzsMs2ZQFh5HDtYRUUf9RK4VbwLQVWLyE98XRu2UL78RQPDLiPmDfsAEKJswj3kNgd3SDHLjQyiHJxtrUG",
  "key9": "5b3XmHQXuAHwz7fHTKa9LxQeH5hPk7aewRT712axY6svUkDdVnrecsbawbXBi3YPjQafE67wsKsFgVMBjVUH7J3U",
  "key10": "2HpijTCZw8h6JPWzQ2Q1dLCUMm7d5DZShpF4B1MSy93fmERTrtszRVoFaYq5AiKtYbqaisRNkaSuSvGbZzdGH4G5",
  "key11": "4XG6PQ6uDENZ47minP9nsqrud5bkhvCFDoQE5R9ryA24S8MyPkLrUvSU8xDsRMegFM8qDKqreeWv4CPHdMET9S3p",
  "key12": "2iUk8aGH2s282zxXytkQQNamuYr8NaKtALRD46W1aVpYjiDG1DnmRsnjiRnZYrfzhU7SCPMHtfz5XxwoDaEotZmY",
  "key13": "5hwxtmbxwFKRRNnUnVjZnc9XpNwiHoLyZcMVRmQD1gBxpqokoEvR8rkVM4b2zn1Xt5HBHEeZENiVi98ec5vacrqi",
  "key14": "2UiAVQAkDvDPjP8ERJUrkefh8vXAiaGnq6Q3EBD2cvWdXMFJmCDjD2KryC1nFmB4XP4NwtzMmd1HBRtKTN4p5KrJ",
  "key15": "4JMtygdBX2tAfsZBmqc2fEbaw78fRJrsFs1HHDh84ScDeBmg91BdVj8MnPev6nzEbKfUrEz4DgCGPSwipMizV8um",
  "key16": "H1raiWAQyr8ttmHmfAjMbgre3ryemKM2ohJ9gRDdvLtihqxCtQrnVHiKHjFenyBBgvttTasbdxN2BtHaNedNGYR",
  "key17": "5rv4fxhEbkbZrMVUfjEJt3U1RenMkzZuaQoo75gXj9nUNcPNyNLtvZYfnu3bZUzEegTsHf41VqGaG7uiJtyY7eHg",
  "key18": "sUGkMBXzxzKqeokbDkQ4BXpbh6vZQu7VjFuwM2xYxNsjvE6RjtzGY9WPB881su6n2ztdBH6onueuxhERSc3AYp6",
  "key19": "MqKu64Q8rikk5FRNrV7BuzSrSrcC3vthmDhM3PQ3sm8fa5ix5FJBKG8CQZ3mGH7cJuu8vMQwZHtycmcktawUfFA",
  "key20": "3x7Vrw6CyMFLhumZ3aw4u9ckPpi818KRZyGpMjMdSHdJuY9ZTK5Yi8GfJhFkiZYeqQCk2RfozmvSXVgDKKD28dJ9",
  "key21": "2GoFzhFkwgVFqUpteWdcJi9QAB4ZkiKDDDNJ7wHtv1sGcbXQAGWH5ofF3mzQpCk3JmkjaV8MxTeaDcEpeQR6Qj59",
  "key22": "5HYUZMXfH6S8M1v2Uqk2tqwxCtE7NbYj2HxevPtPirCtbaxgrAyLoFFntAUhwctdFsPpggnZZTQku94Sk2EAb7K",
  "key23": "2YExmkiyfdCbmoa9indkNkF2YheyE2QHDX6DaEzFc5MikL8YsoHbZ5QbsyumeJUe6YvUnxGJFFfc8XujTHjzSED6",
  "key24": "3nwvJbS7t4FZTmochQpV6LYKgr76bUiGAkFUjEXRSCGWeZTAAP5UyUzNcbGgefNfnxKWCxnVxbDfWB2Wwoie95zK",
  "key25": "3kLg8kHfFv8TGH8iQwoUvpnyLnjiJHBv5EkxDpKUPLGKYhDMEF9STSwNmvVwWbpxN7Dmve8PnXsHvaTwfAzqpa9s",
  "key26": "62Zbny9xqUZcGdgQnpLwKpbhu48U7EfztHbfJgRtqFuo9FpXnz5SMvDrYGwwQwir3DtSn4ipvH35EdamHCegaeXT",
  "key27": "5dqxPBFTpA9LoVXkQDQjJMvi4m4X6ywAf7Vxm2Sq3cEHFr9zp6ZSQkwnv3iGVQoqRzte14DKRDW9Ysm5vWaMKduY",
  "key28": "3BqPUVgZiQv8GtJytKJHj9QPh8PkdAgou2WQRrDqCnRCRcgxoqNvS3pTh41BK21BNS14pSytzdwFVWWCdyvAjVeW",
  "key29": "3oPR9mJNDYYX1Y3LbmDLreZTRud8vjX5xvFfMz6xX2zgbKUuSXgZgLhjpsvjvxfdNrZneymTaQe8AET2J8HkQtEp",
  "key30": "4esSK81oDigqeRgCeoRqGfszsMXT69tis3xJ38TfVK5kTRpxHzcfZovMmod392qTSR9QXo246byftWF4EaiWUCe7",
  "key31": "Qtt3rXEmVVYe2PxymJ3h7ntPMk6ehWsapnqWsbMLQVeAHkecWCYEyJZWweFrYbRz8dUquB2AH8tkpbjnSwkXgFv",
  "key32": "4P5iHCSawMawCeEmZ1kw98grxbjH2k9Q5Nby3ikhQcPNdwUhkHyKBcmDzo6RY3tK6bJ9xemUTsvyLUG6F41qkfho",
  "key33": "3Wmm1s6WECgyKf8rdLVuUGgdt4ajQtSGHqde4o1v6BYayC7k1maZquQyZuquiSmJUWLN6wGGiYd6TB9wGCooG5xA",
  "key34": "39dkwDZVsKKf73xJEUcmXxmSgPhHKDDEyiJ5ukiMymRWvVdDgjyvoPKWdZLbvEtaAhU5k86ztbQDLGaYbSTphBpe",
  "key35": "5VYSdSWTfiHffTpsyxapTKPE33yiiasoJJWfmsBu6HBRjfirHUwbXbvpUGxLW97D7Pq3amPxgoWhGDrqDxUxmkYM",
  "key36": "2bt58hMVnuvKk3ruaz7CHHnJez7VeEKsNZzPdV4xjPUiMDGd2VVZtQEfcXDvMpvWx8eQaKmJUfuUP1FYoze1q8aY",
  "key37": "637Pgs2Aji4L2AMiXC7Xg2fXFan4FBB41rXtqZ1vcTYt39snJYonHXyeLXKbQSvzQBKwP1RpJ4eDCLZnQ7XTJiSk",
  "key38": "PrXissbFhL14rzqNA4VAEyBN3xg9GTiLiYvDJ1mVjEeB4R4PS3LM5L9qgqyodXnrhKRcFrt2rBq7o5dA4wwRpsF",
  "key39": "2NNsCBqBNcn97oTmDSE74s4yvFfGdAPXfXo2Ptkuz3FWtQ7oca7ji5ZbetE74fLEnar93qwNpPgnhKxCtjrVGs8Y",
  "key40": "5s3ig9ytjcLLeDke7La5aupWMuKtVc2BuLcioKke8oQdb3Noe5vajjDAuHZV9doy1VrxajrMjG38TpMhgSzHXXJ1",
  "key41": "4X7R1oDHM9JWYKmXW1jxA5v6GkqFbF9tK4ewwJhgvZd3f74hE5XjeXM2mD7j2XTYcM4XfVPTsc6Gs3589fyzMFzj",
  "key42": "GmAsbPBguVV5yZZXiWrmV6PTRuXzDGsrjJmwaJRdbECvkAhKyGs2goqedNHMD2F2hbJsm42mCd3Vww3VxPpWoFc",
  "key43": "vTRKzhsMDh2qHTj4ozFSb42V4BEFHChPEgTAm8aCxsLBLjKVqHMH5EuEXjGdJgnbLYpKUyWnVZcZPBx4nz8bS3h",
  "key44": "5Ts39JvBBaoJ1UdSMcYdi8Y1UMpj5tMLgczw25jtEP85nMNrpXpuzPAnRgZbr5TK8tKzTu6GtwUP7v8ZNQjtKsvB",
  "key45": "366yUkCiAq9mnPbgXE1zKFtW7mBGKd9csL2TM51iS7hTdn6zoBuxg3cL6F1LyKfhoz57rL47MgsJXxkxVdy3UikW",
  "key46": "4ALhgKhRT9FJqnYypUSbCBSSeuRJ5cTY6sXTJkKHxa7GtyE1FKPNofHQxXZuT3ajaQgHkBhFuCLtu5VM4rjDpvDQ",
  "key47": "36a5gr8PxSeZpMbUpEfDeQqH85HSjMP2fQtKbHRgRrJQSFBYoAGcp5MJtXUn9QE6A2wxtNtMSpu2Q9mw5X8rrcko"
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
