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
    "LbNgCybvYPppRarwYPQn35stRWT4htEgxtpryBuHQgFmJ3udCNyG7VikbhSzhyVZDxxkwtuqTxk1oDT6LS4TQrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CkhaAVUDKSL3MDs2zGDRwJWVGMBhsftJ8quf3iEMQ9EbmAQz9s1se5b77edHVjCfH4BEi7ceoSdLAP6TFqbnQNB",
  "key1": "4ADnsxgmzxfRQZZpG3FortF7REQVaHDYDR5EDQRRDG4RhRNM3Zk8BE55DPJ8PAnnseeAbYyn7Yycz1G4LAjnnArS",
  "key2": "4KV611KVn8HvtiMZv3tbn5gTfAf15STw4P5zHpNMEZRQbCsSdDwAHMo9KqEkYyYWAV8f52zhuChL6n5L9MJWnYmE",
  "key3": "4xnLaeoXbhEUEBAEriAEgPpGPShtqU58S4izXGxck9m2HUL5QHdExzpVZhqPKJs2V2eYz1Lrfr1T9faZUWV8cRZR",
  "key4": "3xP6jsWaHYCfjQV1qqioa8kR7T1rnBugvJ7skUfj6eJd6yEAxboBEyKqBzQ7tDf2HGrQLDJZeLf6NGJ2oHcmNFPi",
  "key5": "2ZstP8MockqfAhVX8997fxkN8thkxHJzDfPNRbHDCFoAg21Lh6QZxBMHMkgUUhyVdGgWjdTab5jGJNNTZwkPZQYM",
  "key6": "YktQmUa9B2g195pSNKXti2H5SSdKfkGH1gDNwrSjTNnHdjSWsxXaDwp1dmmx325Jrq1VpExhzKr1PfeJXCXUfHz",
  "key7": "4pJ1B4FMKFj5gobRTxtwhg1svYWc652vvt4rhAvTHsgXe2DNxxEGcrRi9BuSKkMZFAULcW3CgLKka32VY4XqoVJ",
  "key8": "2yqQ3R8LBfmH298MEUhc8QJpjjFJdoGXQcsHznc2cm4sxywAtUHzQnozZGpZvVg66mK4tsPbgAJBHn7D4WcRTJLT",
  "key9": "UjcgxwRS1peZavhZoaYVSDFqPjJyFPbN9A5pbwNewuP8Veia3VufB6Hrk8vrh7zskqJkijYgs86Vmyf3x74iqf8",
  "key10": "4iHC9A3oBWykwsDVqEyeKELHGrbA5ZeD9ijSWuNxjQvB5h7gc7AzaTmQqJZax3DJ9axsDEdnkw16Q194upAsahWC",
  "key11": "4AevBKH4m4gEN2pHVEXEdPhegKwrn7SC2jfnfCYxzV6kQKnPtPKL851dZ2NNnwKUFcH3WJKu6FjDhGB3kjpy7kkV",
  "key12": "5djzyC8dYiP71fGvtTXQ1uxY2HQ3FX4oJHvoxt3phmE2wwSMtWGwGbruzc4hHRGamRMF1nPckrnDkMVhEyJQWvHC",
  "key13": "5hTANZH3DrRRE5ZVgwbe1Qs6VNjXdT3F3MmmA1AFkFHRzQHAeqC13CaLnFDxZ8wAe6fc4ZpYhRbCKEi2uWn5usRg",
  "key14": "3sakxgmt9jeVMNn6bnARxVmZ3bRg3vQLErf5bDNRVu6aXngua2fz9SPQKVG1wmgJYfaq8MBFnUTSsSxFMjhKi76a",
  "key15": "4ecNjRZDszjPSbM4ZXLwZCepP8sTphW9XXSFNAppMCaxUT6TTZwYLUy4yDZubEWHvsq2uFGhaG1pbAXxKseoKCZP",
  "key16": "uwHynUWv8rQQbitjJBJd4hrQtXsuw1skjhsB9hP8jHxJawmt9HGnu5fDdwtGV1J9A1kv899fCTGLTVF8cabfpiS",
  "key17": "4fEwsPNpmFHRMQbZknTfv9SyXNQ9rWfcP5UvQjYmki5XYSrWDuWMarC8G5ytRf9bMru3r5Ve37A51LhxFNgbxfTc",
  "key18": "5L16CJWga4DJmQjXsdUimX7PUUuM2MLC4rgSjyoePHkjQwwLkoCJDcCqfCPALZ2YikfCT8yr6MYZXgJJBY7SKJm1",
  "key19": "586qXE2NZ5PdJ5mwDB4KB7ZP7fRRTTQeroGx115TvJej9tBnzVorszEmCfDbNfAtDjN2JTSbS3m1gtAQ5mn7CvFZ",
  "key20": "Ztx7wNmZHJqrd1yT1qrdMUPVqA9fAx5niqSTTsRYXY7QSTaHZt1jaWoLyNLFd3vDf5Z5EJ28mCULxkUCWgf2ftK",
  "key21": "2uCZjBeDKjCJE5SemgMoXXsVmbLfWaJnz2Xm5XYSn5zRngQWkVY7xpwW69zrUJiYdtvXNU4N6Bs6oZ5SamNAUhdz",
  "key22": "4x3xty79jpSUWhqcbqT8J8ERSxYN5q5HAJkzLqhu71RPkgfecpG9uT8exL2rMDSkLsykCCQhgkfudxKeZ2WSZkXL",
  "key23": "dsPQFx87urfhMWAzALzseexRbnmeb7fds2gRBQjFPZtgrYAL5vYzNM2nn89CTAPmaP88FWLJxUT5yX7h83JT9zk",
  "key24": "RKzx1dvUcfCaxmkMiihEoTciKWBqc6HGVjwtpJet2ySkeubXcCtGu3wmnHi66Ns4rVXsrtZQrRSQYq6gLrnhi3b",
  "key25": "4f2cYK55iaADALWHfbhPv6s9PTsJdPoiBeFLDPzbToudFiJhiwzXqTrXTo1ckpnztqrbAZB7LiZV5LnRjSW9RR6w",
  "key26": "3kkyq4iuXhf66UTiNCoFXTiWqfc3QPWuYEVTZVYPk9C7J6t4D7A195JHf2JjNn2M4wRMCtoy7ZLbmvPmfqBzEYxn",
  "key27": "4qWPusQHKPwqBJeZJeqJvkoQ9QBnvyDHUwjicBbgzpgzDb4rxUqhuGCxrtd7StDTRp9Te5eiDgsYRyAZPsFjsKxw",
  "key28": "55duyZnNYHdiJtyTnTQy2UWiA5qRqAVqHRzXghjQjbjvPyi2CUXaZTvTpX312Sj6kwxvp3NKYan35WVFm9VD6JxZ",
  "key29": "4FudrXVATjG8HjafnkV8BQqWp6mwKGzGg8Ss7G4PDWa9wsg5FYJqkmkrvsM7st9hDqgrsqBT8M2YqksNaRXBCACp",
  "key30": "4X7H5xuJbdkr4wnHNETQkVvpbdtMjJNfkpJGnaUufBKVBefHULYG8uNSuq2nsxnv6R5jg2AYUkFexTJrX5UjkJK9",
  "key31": "AjtSgKUwDH79Gbpo7GLMicXuoGqwsQvk2hhiRgmRx8Ls33F8ZQqVDRgg1Kswj9hUcnb1B6kACrpkEFDG16JmqfE",
  "key32": "5VK4qrdb7csNhZTnFDc48S2Z2NNg3ejDVBCChkQv2kMiFLVMjp4p7iFZWRw8rNR2c4o225W8cAQHbtzG6Ukx9VHc",
  "key33": "u9mdhgHTVWMriFQVsYD9PWmh7FztutzHic8T2KRrNt2G7JwYMSvZvA7wdSqJFJ9sdbqeZ4pkdSZ4Y6y1RmQdPy6",
  "key34": "3kpMAPRYvCupVjS9Vhg7MnGRWLeUcQHQ3EDQbp3LR73DQEQ8dgF96QSG336uoJAS9cQ9FeJ5DcKHSzDvesSSaFCr",
  "key35": "tc3ZJtWGTDCftiStwrL9FmGfWDF5axzDpnbfmvnKnFwdzXNoccZS66ARqiBuJdXpf7Xxm1wU3Qu3Zm51J9ce6rZ",
  "key36": "3SMg7w5tqFC1PhDQz8a9yMx9rsXmCcikfn2aLU5xFKQDfxC5A9hRre4XNG9VMHh9iWKVTtzCfUtat9NocwJnPR3y",
  "key37": "Gmh89M6qTD8jxvjU4KNFrzE68pQtRTXbetnQkbuDYX7TNQCdqdMB8oTFgjkbSLEJzN4docqeYLYUmv3eZcofkn4",
  "key38": "2XbG5Y2FMjR3irSoJfY3bqyk9zqeW2scd15nue3nZtiajCBsMxNFmbyXjq9p5snteEuSt2Me2cuzBC9HC8bfmxqK",
  "key39": "62YjSr3EPEZDUzMGbm6dHrqY3vXeupLNenrvqohfYDw9n9fLsgv9EkiQqfWs89JJ2bt3JCTGGCe6yWc5XsvKnqP8",
  "key40": "4y6XpbvXHVZGt4d4c5EoJR2DxyHC45aGvuXbo84d5Tvy8ven4eXDqW5gFVGe7SCbQjmLJqFro7J1bczzuFoQF3pm",
  "key41": "prWJ2WUc58coEieFn16ranCRm6um8HqZUxZxce4Bw8hH92YykvjA1WNT3iEZ8Eo5tpdu9VF4EJymJqXnzLg7jxx",
  "key42": "2Sn11C6asfhbAJWfumNwbqmojfCMWFMg8mGYNJ6sG8zJptgduo8pyNeFf4rexAvcpP5g1naaSdKtyo6jQgDRdRQK",
  "key43": "4oBQsEhmUePE8NNGi8evwaZ5zmYJHUhDuTMDgwW4D2Yb8L2jp5gJcsEiWoVsAkC1tSb4GGcWuknGTZUMRypHZ1oq",
  "key44": "3BTMYRx9GpUdLST3YFb8rYXqKHvaZShay7bBRu6bxFB8UMvK1djraZewsQWpDHH9J4MdnE2amreBpv5rzSWUytiX",
  "key45": "4QCQzvVyBwF3KBuKqb7yTJNQ4wQpEVWcxoq3Y3qTngJ9mQBmbASpujtd6Wiz3hHbAsk4Cb1mQGqpWF1A5DVoZ6XE",
  "key46": "3ccsNznhCisxa2eVAhq1i8XA6RDwmUNHFNeTrCUg4sEfk9GkaijrJdB5fJfV2pNBm6rrWmdmuE722zCo5FzsBx3U"
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
