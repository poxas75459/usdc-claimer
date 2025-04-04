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
    "4LRjHma1VGnjPc1c5i9rQc9p917XRbqdGd1qaQMrtNJbhhykzW1dLSrDXJ1UEu4Jr2qizvMU89B5SQEWCtrTTwH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKdv17hEDAgB6Yup9JJgMTGjb1KRwtRVmD2gAiahSmehVq5XxkJgBWpsjs3wyZM5artQu4rvNZxsQkkEb33RVsh",
  "key1": "2y6LwYaYbzQ59PquXnqri3DAgyth7x9u3pAVn8oHt4p4XnArw64DaesNv9qv8b4YYQpgdgdCBXh8S7qPSSCFvxwz",
  "key2": "q3P1mUmHy5aV9xDrBFq9LHS3BZMSuw1f388MbJLR5SZGXyPraEhLPQnrCMSpY8piGqrCkT7APRhvfWfF6RpwiFA",
  "key3": "4Y85723TZTbRKijBKyrFhQkjMnM7rnXy1w9gBpQbaDWunTDyMMD1gVptzakx8LRtwGKdfs798Psy5rtWuUCeUh5v",
  "key4": "5GSXkP8yvsLacWcJpWDHToZ5ZLHU1UyvrRcX3Pn98PYC8icCKZSrV14NEAAEeibX77CYopPNTcBGFxF1gZGn8vQP",
  "key5": "evqf95YQTg8gCmnrvYnEUzUqZfLqRHgbBvkoioWkfuSGBSLV7V44uUUmVf7xnyiN8LsD3Ah34Qw1geiQgyGXcta",
  "key6": "3QsPSApG7b6t83KTWKNwW3NSAC6rfqSJUACzhFH3K4YoQUfV9Hkgb1PrS2TJNdjGW4VBjAGkYxxSLZD7RR6JEDCC",
  "key7": "4EkxURmkSt2rSuukgQxH1pr7EreStEUzvpqYRyNm1NoXjMy9i8SjfyNDZhDgL5GqqHjbdHsq7wiEbGgfvEYua6Uy",
  "key8": "5vm266Hfjd9kECuJ5Qz3KtDQVAtnhvumdCrUC7PZpiGj5wNUj6KgukV4v773ci3SdCMxBMgFx1JvgqXyMG1HtNMX",
  "key9": "4R74q2rbcLSac7AYk8QBrPTS8LrcUBBpf9FiSpK5xmUfoxgMWevjH6ZxG9V11E6BSzxF9q4xnBsvwsTWDo8KwDab",
  "key10": "Uz36KbKc4ELShsEQScWSa9u1shf8KF7mqPrWAscP9mgBx3FTGz5MV1np8QR6RsqYFMfmDJ5XXVsym3SGabW26ZM",
  "key11": "4SzBmK3fZ1ExnggqWbBzRQhK8ihweqRpDaqjJKaWXm5Q7R57nDqj7mAu5uE44VZhZJaBD1wteT62EckWMxKpkQfs",
  "key12": "4Vnaw2632GzLKwL2exxUTbHWhmJ8oEhz9d5BrmjqTN6VXkDhC55wBXHH7topz2BSVpqJbyjBdZWPvCgxgxyUtgKd",
  "key13": "8Zkpt6PYCbCu6Q8c3aYqY5bHANnBLrFZ4VJKRzna5E6Zxg2GMJnTFDL4yQfPGozjDkr29kmn9Gp1kGqAKUE9WDc",
  "key14": "5eihSYfVLRWvBd15iYszfVHAeGX5gJQ8gfmKSsNKeKAadhDgcwsiZ9i9DKWUHNdL3BmBP73kKdz3eYqxFx8hkbm8",
  "key15": "3wLUaXsXRcvxCDX6hKQ2bsThZPZxYXSCHJ6pgh7KrBx46GYaBwJ4JHRwq9erjnx2PeEcG4M6DZWdouVKF66sK2a2",
  "key16": "5xY6fLTBKR3qM1Aajp2QPnEZxW2YZZg97QvCpK8K5PC3gpe7m7rgFKGfBixsM8zF7L2QsS6WYZ3ade36RtC7vw4S",
  "key17": "3pZykYiy7g8S2FSj1zTdv3GGrZxcJ6FW8y1Vn17LVBwg5ZDroeHPNWFzBhedeCXbt661yr8tamd63adenF6wLNVz",
  "key18": "4JowQK6tLC6Yy7fCPQsR6ovvG5tctVZCMnGjrsfKuFgf2SaL1up2QxeZux8oVAFKDtZtrN82ae4Lv1tFKq3WCUSP",
  "key19": "VxH8ZXhtKPCeBm3GT9pztsU3z3sJx1rz3V8kQg3BSaVCHLoBJD747aYVWMrFgbK59ArM4dPWzwqa1trgTsRiwTs",
  "key20": "4d2L87JYu6yXVdPaEa7jRLMRGHsxiLLjk6sEPA3AG1ixVkjJdWVVKq27sTB37xw7rq3FCiTcqvh4GYDzE9yZJ5g2",
  "key21": "2GTpAwLTkgFBFLGh4t5VDA1pyJQr4dHgYkZ9XUdZPbD15tGbYufpdd4BTFCDDsAFK8kiqQjELwj6ganXs9XxdbhZ",
  "key22": "4Ry7AK3Z2UsF1pN6eoeW5dD8VNpSXj1sX1xRokLQxenFFS8EdjdUgtZpUHFrZCbq4KvL74Cx97rCdgWJs5SU5QS2",
  "key23": "3T1zGwL2atK2RdXaVrHLyJpuXtqEfaJijYXyG2KUCUgUnKqeiPGb5qYwqzoTk59tuJPzVTpLhpNyTMhGgv8xcUyG",
  "key24": "5ueGaW1HtGrdueZXR6ey2Fd6vKhdsK2Qs8xUh6TsFpFV64cpsRXopPNGActfVJAzkUjXgbVVGVN71MtYvewFEdWa",
  "key25": "Rn4mq4iWyWZKF1nYUpaHBqYyyuNHzY7ADcGXuwawaogJDoDUtexppbQKFywSTbWyE3SeR41gx5CrFwMHzme3U6D",
  "key26": "5ZGHNiG1wBd9m2xthgsyEUFqRoPf9EqDYhBAXkeYRQa82r3bCT21fxLctrZhuDh257QRSHTofBqacBSmGV3kryQM",
  "key27": "2d5kUKx5e2iayCJzNUKkUEiMBdSMS7US6PnsU11opMSCY86dtpf9xgPhJyCzvJXYERQBHR1My2Fd96tGEcAM2v6G",
  "key28": "ShtGiLXLGmEWdaM4Tncf3MjbDbbcLEuP4LAFfoqDmJgnhBo7H7eydNpqU8MdKaF4B9PTHGjxvicjgKkV8Q7GB99",
  "key29": "36zk2sTnDPJV7NLFzRC7KacZsiSwJgdiRkDt3KdL8S79PHB25V8yZvx2wcmyTrLYAFTtQWiZXAdWGLMMaSGhXTtH",
  "key30": "2mpZZ5po4grHJ6pfSPaFqfD6ALJPS96hdyFruXpFrP9YsqeJV8r1mPUQpkZL4DasJ4KcXNX44av4Nehy6Pv3gWEd",
  "key31": "3ztfypQNEWp2bV5YYd27BkZgode55tWH8tZ8hQiqwXzWdN8PLCJY9d3ckFEaYWafrdWmVhBfWUeBTL6Z6ah2B5zq",
  "key32": "2EheHWJBVrDtWpex6ANqxVsE9zwnTZve732tSEE2ozmUcAJFGu38G5hb2VJk56aQk2mdnbZhZCqaaET85Kr6QKCB",
  "key33": "2gtsWo44QxtUXrxUj6xPnhwKHzMMX2N6sUHsY21brzhVUxD7MVuyw5uSNCUFNeaSU13UcQUYmHc1bUPBfGL6kPSU",
  "key34": "65QsNL9Exq3Y8DQdvyK4YUcYhM5sysTogRksYpEvkeHYDejuKjmiS65HVkT6hQPk335hoDQ59nDm7ffsmLe1LdcU",
  "key35": "5TTVbNzWWgu1NaYZ6dcFatHpkSjKZ2NyHybERNrwiirkJhA4jPnsQyjJKWnrr5LGAcihoR2QZogKHvSDQxiFRJVK",
  "key36": "54jQQCy2mnTMuxbbvXG4Xj38c6tfr5YMVHoBKsQvB7TQntmyYtJt24ASzvc3EChiSH9qFNrEiEn97CQ5P4CpAiwz",
  "key37": "264Ar2wqFwsdjNXLYujxPwkuBbVBpj9cUJcoSHgfn7GBMVFgxHitNfhBwDVoSLP9E3wCg4X8D3EkQCvfENht4ekM",
  "key38": "5eeGSACkcnTh5SXruV6wUYAfKJotbkSeYZ2tgr3v3jV3WQSoMAUuRgyAUJu899UZbTyAMgCWhHxhnS7shgcFYNSu",
  "key39": "2T3Bio7gEfrjPajhinUhajXz34g1oonuqABP6mWqGZByiwWhp6WDSgmK1BBuwcMCBUcYkYV74Uz92DcsYTsqNfTj",
  "key40": "24yYTUaZGgRTvtnDWrqjhoHJdEori5PMrCKZaPHgQcJgECdk4RPJETfdDGe3UEATtv4tp9XsDXgK1iMTXcfdChNb",
  "key41": "kbGZZaGvfVYjqKTW7Lm9SUauBv296nhDcniPBr1GkqgwCDs44fbf6Ed2h6wYEe3vwTsE36nrnMietAzQYT9iQoU",
  "key42": "hket5DtQZz3QevtPDLarKJN2MiY9QqYKiHvi97UBbTttjak4QXUPDE4LtfbgWJy2Z2f6tb2SDNALESiAhTpMFwC",
  "key43": "uBdSoL13weK8sADBzz8u5f5sSMYLgCWXdepE7FRdYcGeBvoZxvA5NP68usx1UYes5cY6WjDZP66XiqrjJzMkzq7",
  "key44": "xgajfjk8DfG8dubvqDxioAA31iaM9ShtrokHtFjtGxRfEV5waKW5GaDEAAWXebTifeEhcNAnESAAdk7NHFZkrhL"
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
