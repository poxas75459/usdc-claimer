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
    "58M5MPiPjcTMJYHrZXFMxpj9bNYfwRCPFG9TppPuNg9CcLDQj2RtVsMiUfRFLqHy2aXbpGiLh6pqWx7xiY8fYhjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A9XkWQM2P9LMYpre1qtvtkB8nVUrGREGNe6vvmgzhsZzN9PJYrMcJqn2mtZsTAAvU758AC4rkPLAoevBsjfxrWy",
  "key1": "5PR659PYhvtDvgHkFKyusCrpXN6DoVytMy31eUvidS6ZQ8osTgm15vZKB7cZCz4QhDBVxcgKQghivLteRvis8guV",
  "key2": "2NqYd7pgjdGpY5L1CLwD83bEZ1Y1xZePALduh2g2F2tyEHfwZmEmeYMr9Jxs7yZXcjSt1KMB3nw4wwBZeQb7m7Gd",
  "key3": "3vxTnpm5Ev63PpoFerrErkk3kepTrQiSESn6s7nRY6TjbzwHURhum9Hzp9DthjjhVCVAqyDdPh9jxaKzHtGq9BSQ",
  "key4": "N5mQgj5KoAY9n2xurjtDdsMxgHHHs3oqdX5yvBXRgnqksxnAx4vysfXJ7wFZg8zpmb76QHh4e6PkR5f1XhPyoyv",
  "key5": "2AR3AzN4bstuxZ3uFmP2fs5SuS4PM2poYyoWpGSH6ucu2LeWgahdsJ24uShYdpYhVH3LwgqGfjTMDwRgXbUNBtbn",
  "key6": "42nFK1PHmaXTQ2MtjJxtE7BHickRUeb5KTFEDxMeY8PSww6e61CYBG1F5PEN9yq77JrscTmZ38ew7oooVmLFqQg3",
  "key7": "4UhGzVP5n23RHMnLtgk4phMuAQnfjAptdzu5eXfWqe5cymZ95kqtk93BdS8mLXp34fcKGfTBQQisQoCsSiSqxksm",
  "key8": "4PwA2CHqGfXFdnpkDJmoRgVbLK6bVd3sjwT96th66z7QtscigXjsHK1wuvrpXPJbayDvJx9XEDrHfrpiTwvuxmTw",
  "key9": "2sHfpyEw7aKk6rKbtr2EBubsRyfsNXKJm4iWg8ju2tijJwqNWqoagHiKCy1NE134fZs1Z9SCh8rv56rW41aGAxno",
  "key10": "DeskSf3gUFULAuXYqasTpg42pMUkn6tpJQMLJd6evBB9GNnnsvT7EUtKMEzkZy8RfERJnL8HyZWP6zhTNYFJs9y",
  "key11": "3c23kVdKbtiGCKBp9Yj3ccDLJZNxnfJuNCJYZXCUnTZJwJrLjsEc5cUkrtZj5oGVWRjg8kcnq91mxnXRhA3eXQvm",
  "key12": "3NqAyUddEYMcP7UsVddJrk7sYS4bEL2Qr1gxmTrKz738SbG4tvYmx1sX1Ycx18Q2QL1gbv8hvgb8meUWS5w5n4hM",
  "key13": "4ew4FVEPV3hhsi52WrxML9Cm6n3jcWneNnaH7ZCZnzEEVSoXCoXepgbVF9dRRn1zHivmayDfh8sGskbWMtjQLFg1",
  "key14": "4yRmBbXW5hn5uVdvY4t9XQiQUgAkybizW3XxSCJJYMWdY5oQ9ThRdPPQHSSVC94UH3ZbsBjtcy5erq93oCgaGm84",
  "key15": "2PCppkF19KMcEaFAwFPa8ydbSNsceyN5nX5fMwViEhsfgUconi1xe37fG1mu27fLKHrZtny6D4rnQZerp9y6bfTH",
  "key16": "3AUVK4ineQQzMhQu6hNSD1M3EQ6cvVfbAXbTCJQK9uwCUWXQYj25JNwfvgB7iJ28J96MQ1z1jSpcpqjQkrmVL7yh",
  "key17": "4Y6qB5G6c7X3uN8DbQSk4ZYtS2pXybGrzDNo12vE22btU1j5YvtFGQipHpuSGQ7T8H88FcLcR6kc11gWirdV748V",
  "key18": "2LRSRfj6zk26a6fhHuGYU8kCbhgMQ44v2JUV2eQh915kUBa2ui1KabiEAPU9EqM3RL3hznH8dqtNLaSZvU3n7pEk",
  "key19": "4sZ3WTzrCc7gQPGtyKiH191QzuHXQGsxgE3WaxxSCv46hWeHSZ8PwRTHBfx81FiN2DE7ZR4enMoZqmzotXRJz94M",
  "key20": "3phb6kLYocaUnSpDgocw875VA4egE7tCLXLHLbLikSib98TaeiceUi83eESYbP7Amx4T6uw11tAmHRxbafmNtS6M",
  "key21": "3uAYFw79T3BiPLktuUAvHFoJ7UedEx7QGuCyfThv2nR6uWLUj8AZGo1RwozBP7PQ6X2Kg1XN4DHduyBqkT3eNedg",
  "key22": "5ceJjrt8Hw9ywag13zX3x9vj9JPrWkAiG3xH51DkSo5mgjfhzdYsfjfV3QpLc1rEGYRjwjoA5D5dnAoAWT1bL6Ue",
  "key23": "KVcSEPosXbAGNJQVYfpz3NLyfeLnXva2w48yTHXkUMJ5EcEXMKLefwzizjyPM1Y2bFVkwMiGY6Kt82HDYd82yJn",
  "key24": "2dqa77nNKdwm812JUpL4qpSEK4hw4CfwtiQjFZpRvSgDvX3kDEr47vKvDktGfL4WWBMXkZA6weVufA6STRqyh5zJ",
  "key25": "sPCQhneuic6iGsABRtbu7sqwwVb37yDyW2X8kxcJkK6nAipgVGMZG25YpmEmjZFu6qbFQ14BSZyux1rdXCT7kYj",
  "key26": "5P8uG2cEUygH48oAtwkSdMBBsq8nFxjnseQWjJ1c8erDR6AShJnukKoRLanENGUKi81mPdzbi8z7jhAxmbMtiw4f",
  "key27": "3Hg7J5GwoR8Az1RnLGfibW83eKJjJ5xcJT6sXDqZAtkSJu4Wzztc7UHHHG2vhwPPRNxtFcVg1QVvhPHvEUgHDbVY",
  "key28": "2VY3NCT9SF3CFKgU98YCgJj7y2u3ZURpL9TYjCoxKvU9FuEVS2quGmkdgkU7asKs4X3ePTc8eBdosh78XdkRbzSf",
  "key29": "5tbegYBZLJueuN329t8oM1kCmrxaWFubLVqmwjfHqHrfs6svTV43jwsdFaUUu2Sc2otUJpjUbdEUdZDkjRXSLnHN",
  "key30": "52R7Dp4hygo6YMxATcNS8i9jfMZhN2xX3vfQvPD5BFqT6cajvdMoTBwdXtXzNjXvL1eBBTht5zz46eSC7HyPnpd7",
  "key31": "4yHwsWjXMDYYLVrbYP4UhsAmZM8bnN69JzpKFgKGdkXD6bXY2rgoR8qBWXsT1BUBeTSGm8m2gjcG6n7ZDwMF2KJa",
  "key32": "2QnsjEdYsZbvKoEWjnHy3muqrV1gs1e9f5ZP8UHuW71o4u41YFX4ufrqzWxAu4Cv4hE7y1cvZyBvA7gFhAv5VuBL",
  "key33": "33Vb766WvqcZUUcEtKbYZtjdBcjGcAwxq73UAfGwE7BhXXBbhd9mxqh36vLGUKj2rBChSD6QBwFC8qSXqDaYe5Ev",
  "key34": "4UT2bDDN5QqppL1j6cTmAHDFgC1wYasC5auSqUsWjuYZHdb1Dh8HFM3Xavo6izKYFVrxqnUG5tCvwgFnWrBUXaBs",
  "key35": "eFrBnKtuRUShKnow23qeNKgUot9UY94TSNvGocmpmxT6WYai1nDZxtPptfjprZBWQeD2MSt413U4pTNgMtyETnp",
  "key36": "2DM29frgo6U2j49qZbuVMSkDsJiNRsigRrmyPmispzq1MAEiGsSgEJXpDsiK7okGm94xFN5m2AhCehMiY26Z3Tzc"
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
