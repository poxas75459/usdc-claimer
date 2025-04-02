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
    "4mSPajbPRwmy3WRBk33qFcNXgEECWk4xeVT7r1KG3Xcy2pec3m7ByiPp7Li2utwT3xHEnRfusqLsavj32mXSVYwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qxEhUXioxKgteCppVK362NccHDvTVPsNFiNLZWnuTCrNNrW6dqmL7hYkWWGTzDVMTEHE88WqRyPCmzv8dZ3oiv",
  "key1": "3rTCmSvrhQtdUDhQK5mJqTPUViMaSSWX1XkUzgqsC4KzeL6UdLvaU1oxPCWS5fBNBXGy8SgtFj2mhBkkfLRheXZ5",
  "key2": "5pJGht7HKMpcpcWN4hEZqiCxsteDFT9SfBMMvteAmHYGeax1KCT17uL2KyfuZzbAmJ7KPL9i1RPdPke9MzF9kPHw",
  "key3": "2FArgr4L7Xfz9BQ1XE1xv5t4BRRo7DyZKFmXt1vZKJmAFbG1K9SDQR21JWqfd4LJntnHs25p3uedZeX5ZDEJcBfR",
  "key4": "28MvWPkwZkZkF992WHuWg2Z22UdFHmuAZG5drD4NWp4vR7EDU9oDyZAfFNzfC8CbKXxpmoDaAuENhp2Pw6m1Srjb",
  "key5": "3QgKoNvtLswRya9s8c5dSpipRTtBbaSLq4jnPCXDAEwbM4iSuS46rpWc5m2xzMqrUTwJnshw56PW84y4t1CTSusF",
  "key6": "3iEQ8YmyuWpq7aMoJsPPL2CeasJ7N7NQ565URTmeyYS3WhfNEf8wH5UGV4jU1BwyLkkj6Z6AbyNhsvv6L6kBdkiA",
  "key7": "3E57J4cU8DMgj1FKZYn1KbaV3UPJWPYR8XzQNgkQ17jVr7fybJkDF7faNoXEgvPeYQ5LbQ5ZPAnkcZLFh7BoAjAo",
  "key8": "5QRHmsaWc3pdrXnFHKNeSdUMq1sb9KRc2JNfbdP7SfYgtzUtufiXqgwgt9A7eywwKtCewB3vbz22Gu9YmzgMR6yr",
  "key9": "4XKw68UaJjUsK7YjkWtCXbNZ7FkBGA5ZC2d78xbsuNwHTFvkMk1mfKG1QQyhsv4ZB2ngpZ7FW5C5FV5FpUtnuxAJ",
  "key10": "354pmveumMAncnkDVEzNrmuFFhzUKMuyQ31QquTqD6B1DwxYvTqDQeiAmVgsqucPg8BnLJueBh1MQyTqHpxhUyDy",
  "key11": "24g32TMZ1TdPsPafUP6jBQoVWcAnpdMS1EFAs6BVpksAvVUjpTcoNDSHhWarWRjJ8B34CcgaK6Mzxh73WUpzozDQ",
  "key12": "2degT89Z6pJU8da3eH6gKdAxWd4NZjpKRSBkrp5txPfucZpVtF2VxGMyodmkxm78cGnP4aC8G6Dp1YvmUQbdYXLT",
  "key13": "3jWJWXxX1du1zqvKg1b2T98jxUCU7aXwDEFTK1o3Qxnx9bQkyYQr5V7WaXt54D1qRCSFLSwqGjnTEwSihg8yhCwN",
  "key14": "58kgAjG6ioCtRVVM9GnnxTZLfnKFGNvwQVs9aZQQJarSiX5QcjmAKiNZvnAwfDz7xonwFGMHFPWbmyocJP2jbBrv",
  "key15": "45cmeUFSecUTwPk57Bsegn7qoUQxA8g1r4mx7g5qGozThbwQJZ5Te1mKkRcGTaRf5S8hrdpdgAvoEBXAqUuMmaoo",
  "key16": "5hEAd3WZ5fp7NgY8X7kw6rcRnEUscadfHXsN7gteuhAzUVC3HpepqFivdkUWpzRWtuzY2XZdADNekmVdPm4MdbBH",
  "key17": "4HADdwEQ3iFmuRqQCZR5ttHTiwKuUKLSB43qZJ69PYi1pX4RMFhf7hTGUu88rSuizUGzpkQZdbUf6ogEuFEHuNQV",
  "key18": "wUTDtqAgwjKjewXQ82kBsgAmt8W86NJQBMJHF3k3Lh9GvRGgm7E6Vpn3GLH1dRKSZiHdi44FVRDmr25fSgkKqmR",
  "key19": "xrLMMUzBaxf9RmZ9nA7vwfVD1wcsnaYeWYnno2Z8pM7qcWTgPJTfBZdNtM6X84woLfwufmGNuM6YYgiv8o2ngCi",
  "key20": "39VJeMdhqToesjqSVtQqcetaJCmdoAA4NL5rsLhqaq66R4D2eKGQT5EtHTLgxSyu3jkfU6vMjNyjntb4JKreKHhU",
  "key21": "TdsR2jdDAFFfzSUqpHMQLS9NhwHGZbMhmHRQtGJqHEFXPDq7qXonHD9RDtDXwSfCMLuBcXF2ifyxLki2ER1yARw",
  "key22": "5mXdhq4mAxsuoZXB1EU2BVz36Nq7HZrYhveeYkt7pSd6KPGaKhR9cEhPEQ7BtDWwJbtwvJDszTNrNvyquGwXxiLe",
  "key23": "4JiynHyMKfWmEouJTRFm1JcMVdFzGbozd8numv1gdW2DTPP8sn7aVyDvGKM4Quz8Ek1pEErS7ML154cKbKXeFMG6",
  "key24": "MqwakZvjJHW95uAMchwaArfyi9psUtkgqVWhdprRbPR35k4XMNXhxGNJLmou9LqK2hBQMiTR6NCEEJZqzd5Bosg",
  "key25": "cwmCVdm7kQGkGQbYEqUK43UKgdvWeqM7AvqtxxXWPSW2b5uHK44Tw8xmqwwo6fksyFza2WX8LpHt6CxwbtTBPt7",
  "key26": "2VfhhxWuKFXF7VDcczqKtRshV2t3GMEk3e3PWTksSBpbrBxW8vyZGxgBp2vYR6vANSYJdDGcERQDA3c2SMUV7E6b",
  "key27": "3X6mzUBwcuE1uSAoLdTLAni72kBpCgSxQANa9fJ9GhrnjiAPS1mf2bfxrDjbTkDH6eMAXvETQNMFESiDFyXvp1bu",
  "key28": "yayyRWx6E4KQjBRVCXEjWRmtXJLATt43FpTAoDfvZDftsqDP1RdRfN8UMKbpZzdj6k5sF7YXMM8uXjdwCfZ7sXV",
  "key29": "4haxokhcsxqaB8CgW7WFpCt9vqftgpUwniwzcYbkSUSz9jeUt1aJfUYG7iD1Nqr5EaQE2XPgAuUtshQxgD23jpU3",
  "key30": "41DK6vzTkJ743ArjRMPjwM1ZECJ7sSigKQ1GtLkZQAofcaV6XAdUc6rScbvwDaYkt6JB5ztdYNNJGHESFy3CUyRE",
  "key31": "4R4LxSeFgeuptyz3L9vR3sh8JLPzmmBxiH2rCf1CrZd3KicHzEy6KHjQ5N99iHkRQ4NmoUJPGdxPPAkQc9k67WGt",
  "key32": "3rzVop2YaVEP7ahoAeG7UZgZrnPVGnb4HXJaGk3j2S36idyD3xrNuQHP2qyBj4ePe94Q4CRPy1mw8t1hPeEtwbGD",
  "key33": "4Xs5ZJ38PmtDdJf9vvraTDmaFQXoABgrb6GMaWZAxV6fx6uGwSREw8ARwzPzcSPVzqGJ7Pn8p9tSMvL5cVU7noz",
  "key34": "5kktncym9Lyi2T8Nnp2pGpx2J5YmXRmK4Y5BTYARGkfv9SbsTdjrQ45pFYtrGNgM4xVLgi8T4aqQhSqEKFxJGtrs",
  "key35": "4NuRQYRFLdfbBrcHiJZBq2jDu4RyQg1MiaQ7UJmueqNuFScJqvUy4xvPAyPqxxsAFgXinF1mr69NNshZQDu9xAbE",
  "key36": "5AatYErVgHAwVfV7EUzyU7Khb66Z9GnmEJZW2rFnn1MB91dTVpUdHDkzmaVtQtbVuevdWBjbqbsmVr6i9o9MsxYd",
  "key37": "5ChtZXFosSarYUjmfz125NznWV1E8TjSBptSchZzpGvwQQbTL6GXkKzqU2aKe9Tt17mXwGRqxLjSvKu7mXHsFaSZ",
  "key38": "2s87o2LVJLprHwGFyuP7WnzCXpkkVThtaF9tUAJw8ewmrJ1PeZ36jZjasm5TspdqTL1HgiJEux6goF2VH8wynGm7",
  "key39": "4szbBc4S2BmaHo8JyZHZAvxXTEZK1ob1FSbdHqCQMkRCHk8Hh7AJyy4iwhozqDM9eQiR6QpK62moFHtu4y7xFn7r",
  "key40": "2ogruPRDX5ihGZBaVH7a7WBQm9UXpTh2z7ggdFa9cNRFhxj7fHu7SgfhTcPA5fF1Fph7BndRjm6DbWVgGA2VQjv",
  "key41": "pYsgq2D11CnJy8t8XhcJSyyQk183tr9BhXH8VM1L2f2TRKiQ4D1GPyX6rESoNktncWWuKipj7YLvLmteEGPHiha",
  "key42": "2uC1cLBtZ4UfQvvCWW4epBbQ9wDfNciVidZdiKmWeU7DTd477x7gvZvVHBczUMnZJM3TdArRzSmojk3LsxKDqjGU",
  "key43": "2JhSATTSmo3fhwyeS4CPfyP2pyKdw4T4hbQoGm5sAQcZR2X961VykJVa5Xep3GvqhmRF8WnJPweSVTKmxAe7nhQ8"
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
