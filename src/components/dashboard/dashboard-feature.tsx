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
    "38JrGyUbvt7KAkW7do6NbHBPLp6QiZsroDVJ4XoZwh85oLUULc6GuB8M2Aw62hfXjE1npBaBnCTtPCPYUxShcsSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PjQjf1PgfsfSLxKQwBw6pXd5wp9sdnT4TiuNqPhokanH15LsZbd24VZgeM7ZPm9pmvgseQhhozb8QdRt4EpNc4r",
  "key1": "5Tgb7pfUKBLnAX69XjMRV32ZZ6FhXd914coHRQ2itePyENFF8v8JefP9atExhoMez9mT27eEemkCyevUZUTV8Dwm",
  "key2": "4ycQABoQB3MX9NVemsVcp1CtKChB4w7qKaLqxzWo2upbq5Au6ajeFS71jPgtpSoednRaqNJKTS7BzSepg7NxJ3t7",
  "key3": "n7NqybLtsPzrDji59TUU5XmkZJgkRHcR9Wj5rkNkaSC2xwhWeet8bT3VciCvWbYzmM4oe5KVgVriujgKaL3ypBs",
  "key4": "5f2PZinUkY8isk7MXNzAmsTLVtQsY5Sp5CKmzR2nYUxiwg81KJD7qv1Prxqw5bSvQD5aPPv5s5eBpYdSKX8jzTu7",
  "key5": "1pRgUJdjk31CXMgMQ7DNEXHXPqyHEAJHUSUtRgxh5L1hSQR4X6nzHLJnrPm3Q2oJxnmwFZSWCSKD1Gispst82Kx",
  "key6": "4eELma2g3Y1jatAjcRFyH9KyBdBcm33jya5URhDKqm3JdgfnKBugYtz2dvTLyQthwfivA86cCQ5Vw4RvbzMKr6BW",
  "key7": "3VUdqFxPjNG8mFyUHRmppYtZvvpxoUXg2uTV79nKSJeRKwK2qZrQFubmRhtMPkwDE7WdERDSGuF5yBPiDA7XidKY",
  "key8": "5kR2gjbHfBKhNJXCWUXmguBvbpH4geUNXXFAQeEoYSdEdG4LCbwzZ8BWWDpcDiQKMmvfBsHbwV1zLMaHc9JnXY2F",
  "key9": "213LQytHUcYqhcee2G8qaVhwQm9Cqku3AecVL2kAeT8Axw1zXybrLoJ1SgVcAYgxQqPJ13ZnnTfiYU8wwSMnBhdb",
  "key10": "5wSaULqbiE2i7HesD4NQPbB1cCu2E6pt4vVfightMLmMn7QnEs6nZxLqKjbgvqeWAr7QMEkgvFWPMfnqpPu8RvRV",
  "key11": "Ga4R9vndG9ZJPMADkXW2wXcB9QuHuiP8BijDkgRoD2xb2z6H3JQkMGhv7oy6DZKQxvdMKTcQC6aDvgRK4UFhBLu",
  "key12": "2phY3FG3otQsRwE7mNezvnF4MHFJ8sLYxzr77qwpHU1hwjbirbhnLrewkaZGdqeiP1uihXL3FJNT6qD2SQRAPo6C",
  "key13": "4fbuQzmhrCMZ3Xv4e3P1NkndW9W9inYMkpWV8auxKzThzvJXFh8Qt4DtQxwrqAuWbuAnEKTCg3zX4vuLxMxmdywC",
  "key14": "7AyM6Y5cLh2QF3JVDW3mKwpiQZ4NdhpubSEmcxJp8jhZY62ALfF195BdrS3m3o7zSqmNGkBnYLpqR2tWLhrHp4t",
  "key15": "16JC914egFabifSd2rrh4KdxJjvouBXD3xfVSdSpCYcroLJHBmbaW91F66EBzEGbqYxCDGTnEWoW6n7iFchzJr3",
  "key16": "4TfMb7xenV1VA5Et8DSchtEobamAqp7EZaDUoCgmdEG2uTJhLyY4fvKk3FdqLvFqz9RukGYwS7iD9UQ3KurUNNkK",
  "key17": "3gF5QCoi86xaLFzzxWyQ5aGhZHkGovTseNQM4Ut1vJQHvDAT19dECidsGy1W1V7TvQ6w2teCjZ4NDw8DV1jt61FD",
  "key18": "3hYkVC2fwhP9mQDc3pcX317B5jo3pyJGqB7rQ6noaCKCNGCvcuU51avCdtCELvECNoo1Py5BrY9BchcBnF5Cu85s",
  "key19": "7PMqVwXSRfYmVj6vouoSuV9Pb6GBWV7f5VMCntZnztqBBK9Js2LJtCEXsV8wf82ZXXya8h3UpP9EFyRMC3Z6gN2",
  "key20": "5eKxp8hSSF457ve8meHbVY8PJ2zYXeC45wZYLr7HpXuJkKNZb1gAsPYxdGn2b2o48NsqiZ2D26uKnGwr6nh3uxNk",
  "key21": "3T3oNQAU6xNyqXdMbx54Wr9jVMuzSHEY6v4XQjypqPY5GH7KqWwMy6RNXuFiYK5RZAjS8CMr9tJmLzXxxJjAZAFn",
  "key22": "4CRX4vN94YCyGc5XPPYezDVSnevCKGHgs6KSevzNPk2KGEVqwaHwvZRdsww1Jvvq1XxyH37aNxEAuMhn7H2yPPdq",
  "key23": "2cqZtTZrLhPYqTnSKKvTvNhba5QSNLrWFkiJQwrejGq9tKTsQKTYG5n3ES9ffkZboD54RZ6qGXZxSRWv7WQDei2R",
  "key24": "2D4PoqpQ2JukAvRW3nnmAnqTeVYuCKAVZH5V2AxKL6FwwbQTRT5nY2jtMryxMYSf8N7XjEUALPf4g4yKvmcdvewV",
  "key25": "2xnY4tR9TxkRXtBC2PUnNNrJr6VJLc4hPvzXsbkWtLSa98V93avv8bHpmRoDWcY6uiNsJwSbAZx5eMtdWfKPkbUa",
  "key26": "58a6J53fZprRSzpYry9WjMDVAqvYNMD82MU1H9QgRMd7C8yAfLZjDHjJSJBDb5u8MwDQDfjCYUxgx18yHmWZyUmH",
  "key27": "TzEZjbjwoMQXqAzARt6Yy6PoBzvuwSeCfCciHMaLNpaTq1QwAonWGf8emdGhJcEGHDKDDSrAfVNrP8RA55LTmPV",
  "key28": "3daMBR1XbqAshFoRpGoNuVXKWwY7ZMiPjr3jyFsNGgidHNruRJyAko1TMXWEWezLB2djFjewGfDAWo8t1fa7ED55",
  "key29": "4WXNxJhzfrEGXbamo452Bw3o6Bp5fQzetPajXNxUerncXokaSQwmUJUEbRdzcNpyKB9mYQZ6Feec9H6p5DHxjwhx",
  "key30": "hgoCsPWLs1JWWHXhWQPtgbyfYGYueuYacGD3RFJSiah6KZwq2MqPJ4mW6f9DsV64vkDTtVgSieGyStm5hiehaTB",
  "key31": "bfpphmnCohgLxhGuaoogE19KMubFxNsDAqwH8ANT3VRLGTPvivynAQcUK4Dr1UPYux3uts1YpcqjKhcfPWFR9Fp",
  "key32": "3bngw6sV3Xz4fTBb6MSFgozWZWkfBWkYgvA9LnpcP8s3RDYxb8Wjqj5W8vsvEUfYbXoLeJeHpKryG8CLaFvEzaNY",
  "key33": "jHMWoPUwXfHiDBb9LqBeGCfsUb1y1oLzpWkTMXYhkDkxqeqgeZQpnxQVqicibNxzBoa6icVQzJDmLDhuJxvCWQC",
  "key34": "5PDVTepTsTnQt1kBVksYG5igYiGke5rUviwTrMGtZCLcQGDBWyhzS73HX7YkfWVLBZGgqUxQqWu3dcK1J1ciGPpm",
  "key35": "2bsijMGSMbNfYpba7R1vEmPQnk14gX4E81zoGr2UzhNieMF9DraPNyJpUhcK4v4Ra56aAw26QLmNRsByNasAw5Aa",
  "key36": "4XAnNc9zNSnBd2VTYnDqwsCFeFxzwwTnXsGDHWN7RyCBTppazWemdNuNCcM6LU5rngzVeKgnYgFotDuZ1H9x8GZ2",
  "key37": "Z7LSbQBkAnMU4MKqDAysyv5tq69x3Sx2cjZn47BUYUwdp2CJ5bcR9D1iNhGuMVwZiXxmgTX2SvBkvpSsKNTmVTQ",
  "key38": "UH3vx7zs2B6FbMDukMB9qj9M6kAoVgJojBvy5y9Svr5VsiqjJoNPxSkPvFCAjtTcTzgWzpjAuCqEFsuBav26LZG",
  "key39": "3gYpL5q1UG9J6LyZAk35GAajeZsDbRbW4XEinDJBtE9QWsAwQMvimL4y2umRsfDonLRpfiMDD4UCxSRaixrKe3NU",
  "key40": "paHKifytoLjkEz5Zio3sMrYT3H4CYuGwC2badq6rd1uc7rQR8wffPVbAAJAe7wg7U5G7kfGKoCgmyHLB2Ny8hdg",
  "key41": "36ccZtRSyixKGzFGBw4PC67mCg69bY4FfbGYdPQpCuuk1kzYrnT6cHJTZcUE1cEUHkRP6Z5xfsnjNttofqBTxi3X",
  "key42": "2RL1ex9aJ2HCu4ZNX3uexgL5wvLvxbhia6BFubrFwGqfSDavTbroeyaXVZ6F5sjH2XVehKfgRAe6TSGnMgCAU88g",
  "key43": "3mSasaoYEBMMH5o3eEGrzFFtj3oKVLbdhmG33WUisXsY7bnaEukKwKX3Yu1o4cSTpwLU1dQCYSCpe7sh1kuQ4ZZA",
  "key44": "39YPG7xJ49YLW5j6hJzErLmieReffGzafBPpMic1iiahHSsUYnn3BdBABV4XDmrxFu4SUHV4kS7asFJ1xAPxo3uW",
  "key45": "3ifsbQrWn2domdhs2FLVMNQxJnKEFycoaQeuRWdkPSBTdzrWudjNBpBkw8jnHERNKAn6i9aToX5t7zN65ZkASaXU",
  "key46": "6XwPaCjvFEW8Ya6mPqN4x5C9fzaibHrxMNoTDP9cCce66R1gGKAVEek6B8Q1M4ux4AsYsqz8TCY9XsjGVxwbry7",
  "key47": "4b94Kj9HKd4jxiXhhrK5EWjPRvLPZfikSvdD92MtXFknieuJJev69Li8uqdrqnUNLgXvqNj16ehfPsnG5LwNBNrP",
  "key48": "5mveHAft1qHEeDy4jmxBwCvtHnnkq9aVEjusvBWHpMpgq6FtDwGweqVaHsgHUB4WBokwE1aV1JUunE5cpsEUJz7s"
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
