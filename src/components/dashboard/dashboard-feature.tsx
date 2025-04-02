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
    "2RVHQ8CptrXY4jcuN3WARwTuU9G7j169P8s3vstvKZdc5xwePi2EeA6GcCFuVB3buuzFFKBWrRbcskefDWY96bSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "grZxd4rpF3R1qbJk8zB7eWPspwBjXW391fq2j98seN4yQyfDL3ix3UzbxFBwJy9tMdXXLkZBgHn7LDEZsfBFB4w",
  "key1": "27KFVUJQLDgz1VvK75H1djykny9jdj9YHbUqDwKdHXk1s7Wb9Kbyi1XwnreMWhXgGkn1Mb7s53idtopQxU5NSgv7",
  "key2": "4ja6BsN5KBAEDgPKNs6HXRWdC3xZbnApL2LgHoAQZcAjuUe5zeb8rAMqjhJ6dFEtAeN5kHHD5sB3q79AEiiKMNxg",
  "key3": "2SotMHwPzsqQXpjR62rFxCDfa1WfFSNaQGVtTzg4AFqwA2t9neu7g1KEaMDA3zTrj6TXzkuSRwRUG1xF3PeLkzzd",
  "key4": "34KbwFxnF1tEJpCA35wnYwxG76tQhUiVn2v1s2ZHkGiBWRDNrNnx8cp94xwn1FW9fCdk5CQbhzqQpiuK7cf62H4e",
  "key5": "ZfgQNQgKDmK2XzTBL9fQCQaYFMQdaf3grJmENCEDrogaTH1PCwt1nRDFZCjArk3RDTk2MwXkEzEykedRytV4EPs",
  "key6": "5BkNQysSjceSWLFgh8QRhLUpc3Sp28Je4JNyDjDJHvCvzwMPHby92kspyNrAjdBPvqFSq39AfjRMTp4YdQDNk8HN",
  "key7": "hcKBLJAUZhYRMQbhmNBZGQ2Chtu4L9ZHiMxxyKu9gjKE2LzAZQFXKtzrRj4GTdxVFanfe9KPLm57qnhAw6tut6e",
  "key8": "NHtJVGWLWbpvz9AtBHpgWuVE2D3fU3xWtKFj7QXQcTDiHemRp85TkTMMkskhLrYCJpZGhqwUo2FfLQP1AkZy6xT",
  "key9": "4W7PP31USfZqD9tZafGH74TDEuwQQhfAwBMSCqtchwtAGH5WACuunfTq7FsGZEfSQ7JJmPnLgfEeo5nPkjDk6f28",
  "key10": "37TKQXm9BSnY7MJNmzYpSANc7Xh3HuyrjUFeSPjMZHNMvnB2WifMLB7A4G83uMTRZr1ho2gveT5jhjiPNp7J5HTh",
  "key11": "5VnEaMFFZLnv6utYfAuY3FNhcMu4RhfqopQLyXwNsPXcPtXbdX4FxDyeoWgWSYHzbP2jLGAhr2P1avAvg1LPeYAo",
  "key12": "3KyrjMZypPgVYFA7eTmf9aAjMJ324w1HAfD7fok7A1rbYztmrzegHTE1x8qqN9Ugfiv7pzm9bQ7YYk3xsBYwWfw",
  "key13": "4AaxHcZAys6ysNi1g8N2BunTuESP1JNkBJyTrhMZmKgKoWsWUA8m1m9941ZgJYAgxZtSYU9X86QNFFq8sxxqHLYW",
  "key14": "kGWiphJMHvzsQLmEuqQs2i22naHYDnYu6hiFp4cwsMAFqtKJSGu3dqiniNPiG9ykNyjpBPebm2oQL96jcjjscrb",
  "key15": "zBXXGekjJ7ZGoDwyCw6ouungeEiYkoXzkB1ni3HuQ74dRiV3nX1BEhtnU4NYMZnWr84aSQ15RN3h9qQpV39ZD41",
  "key16": "3VmwdMLLkYraxEGFgkmVbZg3VjFrntzDY4iHV6P8DkNBgYPZgZyeGy7GvMm6o28nynqnyYFvbmpsjYhdyWupUWWg",
  "key17": "5EPvSpWyXaX9rss7rKQ9ZLeX7kkWLzG1i2m9iLNt6FA9kgptw7hQScfpFAiNNH3qAc8kprAQnkqzRPdtgAx8FrEr",
  "key18": "54y3uvRRzwXxK5JPM83nc78DKHQpSkturnT8BxUFhEF4zqE3kqjKSFWE1sbSNZ3MuoJHGpLRv1PdLxFSXfNJML5w",
  "key19": "2vA1jXERrctBdHZ4uQvdyskqUVvjdgbJafz3B5gsP1zgSQthU9r2oXEmA5hnBRsitngCnMcyVHaX8QTxdcHTA2vc",
  "key20": "586mjEridPMMPWxr4Hy1FTdzXxm1qcB2yV77LHwxf1wAijJkoAekaawJ2bpxho3TM6vKKDMmBkyKc6zvuTZuWXgQ",
  "key21": "2VdhXebks8tAn6WcUMW48jH5bw2sZmkHPkrbpVETBZzRM1TkrWW7WpGozK85h5U2RS7oNPkgJVCnD6pRyNyRF9zq",
  "key22": "3JKGNdcKwVDEWJPSrCYtYY3afhUsUnWpNxUHqenVv7eNBF7NCHJCrs8bcA3Ccd2cYj5wAh4QpxF2wuU6X3kBEfwt",
  "key23": "2k5GBaXAge4jEPNoga8AN3UtE58TUmKdircEHHEocBEdFCjTqzDXbEWB5CsTNTk8LgLXdDvMekKn1ymWogvwEq9K",
  "key24": "2DuCidwpZ4tjbqUybS2cKEMWg2b5DsEcCLXF2GFgoNqSmYUfM3sXdsXYcQUfsnX5KAuTVaB3B31Vtb98WBHiU7EU",
  "key25": "45SHdQ3c582xgj5Bcy8QbrhuVqHD4P4tHv4siwiYtyhbwoixjFT4NEyA55jErM973nhiVY4oP4QA6vJqE7PM35b6",
  "key26": "4Rn38Eohu5EGms9QGiKsv6mtS3JeK3Wn3HM7Y6pFwYW8fWm8UBKyo5ZumHHgqNg7APLVm3P7asTJcYpqeoHWRmL",
  "key27": "2iV57CSyJfbfzqEV6sYgsFF4EhvYyb88Dvc62arj82ADuriDsgXPXix6VBGxoWNxJuddPoagCQuEidHXB4wESDMR",
  "key28": "3kkZS4SS4XW1uiDkWRpHdTSQcSmPFoEXxfA9ZWnBq2rAS2C8yHgMeQvW7gX2DjaHvj3jC1bG65W184JcaxjyXmHV",
  "key29": "2S5szbv1dseM4jKXAuWCXFWaonvYbXibfYT3ZTJ7owUN2MhnNmPBHPiG6WA9RuqYSNhHy3gDQ1vQg3P6YeRCQtLZ",
  "key30": "2EGyU957W1GjBSGukkLHnT39zAhjFwPDJWyvGTvVSsfeCdVHTbBT5GabW1iVVRbg6bEmJMkjwtNyXydWh9qwM8PB",
  "key31": "4vobrPws9cicAuP4gWufQEByqokXB2m893XByDkEhfkq47fHwbX2zCq4MVsD7iQAjWaVE4sy1nqBeAuPGRpbpCZ4",
  "key32": "5X1Gr2FJoMY5bnpfdA8rSE6iz5BaNdKVf7SWvzW58WMEEg8jdreMxVHVNhiQhJ27zd9KfVCEeptL1S7BH6kbBBvp",
  "key33": "5p3mk7BE6FTiFs3qC1mMQ1Ajf6Ds9DLk8P2HmSq7iVnEQJjmEkVbiswLPa1ydhzn2MS9YtKLcgLLRkGj7YJ1doLL",
  "key34": "2m8WPooxKcb6d653yTC8VWjdza3ictEiokAWtkxcon1p9mAMaDP4SHAed9KL8nbVfuoiBEvaepCwWCBpwpAX8Csu",
  "key35": "MxzrQ4T3EXN9GSCBvxmfnt5AwKKx83z37PVHqUg3KWyadLKr7r7mW4CZ2zs3nud6cHJmZZUr9BzidbcBiLvqded",
  "key36": "3DsGVN99ktBMWe4s4Y3nbxJhboyx5JVSxTEs87ZR36K5T3y8Cu14K1K4Jz8XfxeN3CgfupkjJiBoiEZZP3YHmiPE",
  "key37": "4jnCzXBpvTvGvNWaJ21vEW4Q4yHoJ5J1qLodU9mEzQ6SX6eCp6bYWt4a2W3vS9TryYa58Mdr18UFyyEikz54psv6",
  "key38": "3wHgFjdpHgFX99yQFGGFaaxNf93GuQTkAnwFYKwggTPvtLFZtSsp2JEJ7WGMSaztRn762tTsHSBxQ61h3bpmpmvt",
  "key39": "4a7PiKTd49qDXvYbD86DCxurnr3p2rLg8eabawjRxPU5XxUni5moznSDjJzvRbT8Gk8JNabS6u7gDapdvhBxFZky",
  "key40": "bBbytqN3pCPgKH1Van5S8p6wtLuQFybX6JarRPY7AhTGsvFCTbm3hztBqgmA1q8Bk7dohCFdstcBnpW6QkqiUt3",
  "key41": "25HvLHymzXurLrq7m3FsM85s5CMQsuJrocfk8mDx2PswueKrsvvnobxvYJzbkqTaQcFzwjnmtKCuD2wYFJFqQx8F",
  "key42": "5BQNRnz57z6vUbH7WDPGcNLZKvXSVmggdUxezXQzG73FmZggxre3UBJVHhCohiBtSSgKfWTTi5dJ1xVevnsuGqx",
  "key43": "2dTJje2yCpQkGMgwcb6GwVT1r8ZwzFSx3LEtxYji7JSnEoxyME1M3W5dzvoxtzw3CUMQ5teXrtaDUTmMKbubGRBR",
  "key44": "5VWc7H4MrR14WtRsPBAZuWGbUfZ1L51sn7tMKHe2wyG96hLJsW3Nrtb5S1LC2bAvYqKaUKnj5frRLAaSqfG3wvtV",
  "key45": "2yAweq8c6i65BmYLLAQUh1AR5CBNeG98ys4i43RvtR75XeCgbqX8WoRSc6aJR33j16pGbrWZKSoXHnUw5fyysDrP",
  "key46": "5fyZXDDFYe6bpiNZt9zaLwgvPP7PdYRFsrUh1hmMeSncQxVidmouuRjxA8dfHfmmQhypsafnLNv1tEo8CJxqXL6b"
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
