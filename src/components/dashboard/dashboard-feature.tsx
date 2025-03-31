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
    "4D1woDNjSSD5c1TyeMUzf1BY6aunZ5k4xeNkzacuXF5vizvbrC6kvSbpqbbtEjPutqGcxRRisrSzRzotzjMrbYEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Npx4Hh1bW2f17d8roRuLXDwqPXrhcqswagHkGQy22392JzTtDScWxM3iqkqxsizJHngzPkcASBP2fXk6chCvfH5",
  "key1": "KtUtTAPHiJDuTxCRnioHBzm9k8gUty3i42HeQiUdY6T5m1zS7KSR39qav4VMpGxWd4SLsypKqoVkhYc4h8zmVa9",
  "key2": "4XcioiorR5avQSgk5xpsCNBvEGxVo6UsEZi5PyDjPx7Prcz2TFWyJhVJeLWSuk2VPQv8HWGB26SKTZcgoHbvGVBR",
  "key3": "4RppP3RQK5aq1U5r144N7sVvzZE6VUNdtZQbbHzyb2YT78uPcUEknnuh8wLHpsHUGoXmyyBP4qA1FWRoH63TqnBa",
  "key4": "62jQQFKUkywd5Le4q4oe3iAYzCssue2ngCwVTTRC1FDhYcW7dKCoYRejLKUpnKuGsybUt8dEUbvr8kjRG7rCZbk4",
  "key5": "3oVyBAXcSnLrm6ctFmbfs2NoxZSH5tfrwEbA8QD56WJX4cuZ23Tyw52nMGuZ4zHa5JgjrETZxfrZgGr6m6vDmWXp",
  "key6": "ySgG2LSZ4vq4UTZcATmuAcdrdXoxMfvpeqj5ntdZsdvBCdxiFrg8GAu7u3fV2c2nXFCR6phSNTXbgjkMiCzekce",
  "key7": "4aSGvn13a9yKEjYZkByGQ3sTA3zPz2Y2RFaRLWKjUufYKA14toGL71rbjtrVPnKf6suxNbwgRaX2rMi86yowxXGb",
  "key8": "2LnmE53wiSQ3eAJDBWpJG19b1NMdo5S18ADJLvzvPArmBvHgr6CHFV8xAb643j6sxnaaDUTjpU2NwkMohWxjwV6x",
  "key9": "2WRC4rkKz3wNQBeM5QF3nEme5c7cfCu4UGUhMG8YYaFVQ4mnYMkygtHS4BCGzTn4QWJsEfYnz2LoK7JW5EWDUMzr",
  "key10": "3eADu2piRkYqnoSXwGW6v15SZXAuRKTnhARqWahSouupnYf3CV5FFbFoe76nxERgizM7wGPFazHtiAiXirD29kfU",
  "key11": "2Jn4h7b1vwYR8vTDJi5UYCe4k9hSU261DaDLZJB3Eied6ieo5i36KmemY2xGUwsn2rabq7HhjTS2HW4zJtYGjoAT",
  "key12": "4jhXcnnGAdAS279auNkWgwLHrrHzT57RzBPukYpbrbgjt4Yryz5YjgAQgF6KovhSxv8gtqSzce2mU7zGAos5LRqw",
  "key13": "2vt9ojBbRzEAbtZvj7wVnGYfMaHhqRWpjLTxrqdb6yh5xh14FiaAVJtyhxeZN9yeyby9PFYVvgkdQbB1attetjzm",
  "key14": "2FvDcU9gRAq9rersoEM15uXLNM2KiBLUCvcSGPBdX5RRDJZsuHDSejMn4MxLchqVKpZ21uKKEHheE1RZzyqzyt6u",
  "key15": "Rq6VKrd7JvnQMQ8hD85yAS7Dets1QXfifvKGvSRufdd8HhepThDi7yeQ199eJy4xeYERyrMcs7bpApbZewgGRbu",
  "key16": "peTYbXcSBD6MKMR8qmsDqXCAshvnmRvjxKpKsJQe8rHPcWBNnbEn32ftwpHNTi4Hz2fxYxE8bktZ3fA7iGsQFYb",
  "key17": "4T9dd7tsJ1to9U3pDAKBg54YTw7NuCj9XUz3YfgfC7y1RN1fPJ6NVU45nf6kQETLKoNtFRs2ejq4tpwWRq7LMY7K",
  "key18": "4YBMCvg2LEzgC4BUvxyqrm9ea1WRiDUR8CyHzd9EjPgcLJcYTSZsDEmhRpZ5HQnXTFvqpKMe7rJvPCnBGjNmda8P",
  "key19": "o6QerRqDCCxV21Lzuhj1aWQeix8sVHtSmKQ8iQ6nmkPhJ6h7i2gxcK3EZSskzSTUFKqSSggLfxgvZNNhVgGMJm3",
  "key20": "ku8Ae2XyMHdXArNUMW1qT8XMeHo9TdZ7Zppbk26tM2sTEhzE1D3jmUhmqCsuiDPhUdNiGhwNcW8UmJSTXwoEGEc",
  "key21": "516kcc2JDd7w6s4QxrcsmhZnzP786ZzXh2Y3KTHh9Xn2iWWYhPQoMewmrrZTtVQv5VNuYnuQ2xaFRaykoPkfdEGz",
  "key22": "3wtJjR4LwzRmi3HbWza2b9jTVRz9nMqd5ftYgyxhiXb1u3w6LTNHSQwfHmCFiGMpQbk2QsymM5EkrG1RYvUHJtUf",
  "key23": "2D99SKXrXAL7uGj1K1CcG2Vkt6wgLy97RMi5nsbH5Uz9L1mXAnwzQbi71FGeaicouNVEYQDQys4cdt9An5mpGkJq",
  "key24": "T3GVZGqmLtHnyzC16MkNEydAMabKg45cXEssLaDsCkBSYW9hyMGfHHiaapV98ChsT4G4vcQQM4R8aL1dF31cFvp",
  "key25": "5hwWz5hVhaezGadpmVtGsKj2bsvC4nYDd3cNK9AeCvYYeTWxsWVvkYYqK4hQpwjqztY2Yr4tbZ87Mb566mAo6UBq",
  "key26": "3v3gh96VHFSJVzbpQoM1CjQM4WQU6Xi4cJAUrPszhfy86sL5Yj4sa2z1pUvRsrwvXTauJYF2x2FWEhkD8QsSax4V",
  "key27": "5xiC74Bpg7B5M5X2g2fjfcZMzsX2rZHbPeCv8r3mtvfBpsRidhJF5cjL5ZKM5NRVqYszWQuxTDA5mfGgy1fbqc9C",
  "key28": "2XvTKwLctWcuX71m88DCQuqrDRgWmajvd1jZR4aWYrA2CA5mtGWp45dHMbo3B4qyqgUR2ZEWMojotDnxPGXSmTuN",
  "key29": "bRz1jTTpQ4hVQR7c98Jqb6RNFq2TiJ8ev9t2xNv4DPBicELYnRNHUL2c5hSLGRyYvW2fqCKrpVFQaJex4hvXWqw",
  "key30": "2RKH9XyfYqED5JbXx3rg2pQQvScFzT78tqkuNHhZD9FBZLKceC2RxFmh7F4odudPcHFYdDjrLHHyyYtbfXPUXTtW",
  "key31": "3j1hFvd4ErNdjhK1Uyye9gx82BUvTRBmCMVCP5sHBJNS317afT67UFpVJk4JnsfYDpLvtXvM61kTRoQnfNWd3Kt2",
  "key32": "4JTbbiiBjgLnbaNaRnfPE7bpbkouD1Dansbu5h5vgacpJiVoYGyYVEFaSRSffBorPwrnqjU7TR4CcZoyV414ahqd",
  "key33": "4w2j3E25eabuKvPCpJkr6FLd26uBnLgga68q28MXG6rBzmRtNSLsn8WShqrCZDCQqBQtH1QLiHGsXFJQGh8igh2x",
  "key34": "4amDExvbZrfm3MyiqGXg2a79hitrkXx3Xf9z3K3AgBdQEZ2j9Lh2M2eWjXh9xU4cXkLrRoNVUDrDHnQDFgP5aPLb",
  "key35": "FWskji2HWTCRJLsU28poUyhYhBVdUymTGF8VYeoczyyGUZJapFXfWkUrAUfcDq5FnAAggxNbYawXwSBLTvj2CUy"
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
