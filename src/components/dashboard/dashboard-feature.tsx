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
    "4JK729urwHvQdXYJk1JtNGFedqSv8tXwWpaJM7TUS1SuyA3r4vrxnNmAjJVdWQesoXZMYnd3TREnyGc8JwzwoMX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUzmA6M2qchKbcMjJzWbWW8gWTQdnzLm4WZeAmXk4iEU3bicxze9omFZHxfv9h2SVWFZN7LexYiyfc7Vg2XwLHw",
  "key1": "4HzrVHkgA4fsQtEWHY1XKFPhQBMKv5ts9V5fsucZsRC25Bdap7cLz46GYshqijB8w2JGtJiQXzBdPGVTuwyx26YG",
  "key2": "2PajCkfXHWUFm7vARMD2JaB1mFWs8TWUMq8x5Gnzf4jkr9zbhsjuy2y8gmkNEqXkq5vBJkgwQQuFr1Q6TxRfDBf3",
  "key3": "4TGjM1HvWVP5XwehaGbGZxaesCj3uYDeXpZZHEDA7yMxDMGa3eCDxw2GCXX6YBG79BhDamJK7gxX8Anf4hZPwawb",
  "key4": "5FVHQmq7rMumbBzAQasPi4DKWXKRjH6sqx947hRz1TNghhJoxuCBAaPs3TTSWZ4WbDtoYN5qmo4wfwkDJjySD4qi",
  "key5": "4rCry4DbN7SNPfWN98g1DwWhLbrQXdifVbKMBWR4jnW49ijVXvqNp37efK3moRMNdiTV7ccqLHrr29yWyrt6B2HC",
  "key6": "4k3NwXAaeDMYXK5Z894vfJSj9QX4NSsQxxap4Lq19euaWwtAcvNqhXw3mncHToWiW1ypPvuy5ALqVo4LhDjsazfp",
  "key7": "43TsYEfoaLX6dCH3SCKMF812hfzmnAf5QLjLmB3YvyM1PpSdr29TS3ncy44GMTKnirkhCUV3m5HDgh6GSGSowZrs",
  "key8": "44tJdZWGUauKKE3s544tNYMS5JNJd9Db6HUfcGmP3VKMYCxFLAQsdpooDKLsUJuMSEwkKLBisDBUshFvp7UphJsH",
  "key9": "4sWghASg58En4QeiMtMMjfya9KyfttnRsAFBiNdMtHkzBZPmLFEGcAJ5ShE8ad9fP4xRHu6ZtEsLCMyUy6xk2BXL",
  "key10": "3kZmYcQGPSRm83ZBT9X3yC1VoQtXbrjaofnf8Pz43K2gEwocZwbHAEEJysVfyvxZ7w1WWBxM8YhqM93qPxhBMf8m",
  "key11": "4euo6DZYJKPjhCref8dU2VE28SgHPu2r79i2f9A9YmXffC3RZ5nioqR7TM5o9mFfrB31Sbs4gVkavzwm8w7Uvgjn",
  "key12": "5yFXVURviwbY8AbGkUxVWCVgy83XUTvFjMN9s8XawzQtwGtvT6gEohnGBspDwXXqwdn6xikcAbJV5aEv2uvT6157",
  "key13": "3Ewv6sS9SvwRkUMfcZHq6byBFAXVKMNRrg9ZJehB1LcmF1gBEvpsqse7iz3kzMDRH3B361WJ8PRLHcmpEkxyKuPj",
  "key14": "3qyGAL1xFFvRXGgiW2fLuU7uViU48YGmEAEBUhVpdwizEiyvCCVdQg4QbP9RosGVJZ1oXMEfZQGRMBLxW7nvKZ3b",
  "key15": "4kwHCz8jt1agQ2z3rkWj4BqwqhgcxCgTfcwwspZr85qE1bMvos9A5D3MAjZHN8sDefF3psabgif3TQNgPEU6c9GS",
  "key16": "5P6A8Qof2DAFbainurMUf5nHu98HaY54TwZFHrQaKeS8ogujzyVbA2Q8oy88Q8gKpFECGuvUdsKcY4Wkw4QKg9WM",
  "key17": "3GSD6j4PHvQECWzkTAMqT5oPbdMiNPPPXpKf5e7iUL9FzfySbM5yGqtFAiyM9A2ztXBCGKN99KnA1jMxBr7NR1hH",
  "key18": "29tGQ2k8c41Gp5XYLzg94AUVANWiP3wmQeoupefkWjAM8wn4TAJz6UPYRX4eXXP2ci1mbcczGvVVZr54tD3jXc18",
  "key19": "3XF8zA39dEpzgWnFqQfrgzy6txZ63tgE1wELji81AA9MDMb3ozkpb9NUy5ZTLhhoa9BYmcrPdYWbXYFNdoZDnuqD",
  "key20": "Dt3jWLCBSF2suP1xDf9hKZG3UMCMh6xhQQYxdivpBVbaT7TFMAueNKh3gzTA6KRHUfGEnfoGKU3dgyZtWCEuC2v",
  "key21": "5xRsAKuj984hFbvDpCy1cRVc8j3ditVWhP62MJsN1tfYeQajvDwMLPzP4FSYRsjMAotDuJnJnjTuu6mEvS4tRfVb",
  "key22": "Ervn8a3GAWGe9n5kAyyQhaMbEyev1fgdnE1ybhfZyyMYFy8tB38AdVAaKbG4JFHf25Z4TFaqCiWHeyLxUoSB28C",
  "key23": "2dZL2aBR6TPFtFUmrC8Z7v82e8VLcMMpP3P2VdgXjaJMGx3i5B1QdF75DUr5vpJsmmiV9xNeP7hnf9NeyruPQC2n",
  "key24": "2VN2iy8cf1sbkY7A3iHiegENYkBxtQJ8xsyhT8j6jdS7yhYLkzm48vvaFKTiL9nxSFFKi5Lwhm3gZSfFDdyHpwF3",
  "key25": "nQhy89SZdHepuJJwkZTCW6t9xHiUcsSsTBM2mMvtwvxJ9KF7PiF7RX3hJpGwaVwmTTLeLRb7vDxbeQLHUzPNwLC",
  "key26": "5YvGCXo1CeENS64aLYFJSQ4yWXY3JP5emAKSnCwnzsxz7K3hN26fPzWMxXSNHRavYwmmtANFnC9qeoTXe8TyQ5Jd",
  "key27": "5Mc3HLxw4Pxfetb6Xn7Qrd5bsNbGr3K1qXvcVYrAcXa8T4c9BqJQbwUoBCwacDskQsb1ma98AJDyN7zRWu9tHFRW",
  "key28": "YqTTMCACZJVMDve6wLVvSRBzCT6XEu64vSBmDUizYYjUpSydSsYhq6cH4NPG438PSGzFm9qfJxcZZqTpUb9UBVF",
  "key29": "3o5bx2K3vcxGRi61Yspx9G976B3nkAieZYk8tjxhvebJGq1Cd8cqiJLK2sGRbznheSASZkhYywJxB4qdmGhYhi8a",
  "key30": "QcJ2vkrYKRA6ojTqDUTMvWKhYctEX5XBE57isokZAuUjQAAPo1bhqizqMRHo3LJKhhYayNLCDQenyAoJP7iBKKq",
  "key31": "3XFn3KQXPuohzQdSSGsPkZA3DWfBKthcb8p6AcRYi4abLqPgQdDqVDr9QBG6tH6Yk8qmgsKgMTHprTdWBJuTYbXj",
  "key32": "4QpVEcc4CAPhMwLbGN4A1NitNm8XDQKferZ4XkWe1DgtA5moWYZdwrqbeEhm9cSnXzC796rsV3B1S5e9WGa6L9Hr"
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
