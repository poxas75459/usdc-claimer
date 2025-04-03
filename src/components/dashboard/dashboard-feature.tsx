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
    "3BZdDiQs3R9TKY8HWXcAXZDVN4N58pg1cbHYrbLjmRpRPEw3Jx4kiTvqKzCe6fNsdjUQ3APumEnzvdCF5rXqoyZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t741duDrDN33iBGZDieN4EbZWLjK62dDWudkM3DDajZR8MpydTD4ex8ht8ryvzkhEpkqtEFLknPDDC8VjFCn1qy",
  "key1": "5Kdp4dWxgNrwZeJUqqMDTYENGTfpC468CvtFG7gxGhFZnQX6u4Pqk5PvbViLGD9451EYPoUN9RvTp8k6HSj8BeMB",
  "key2": "3mZsVKGwaLyQEAwpzrP6BkHFon6ZmqQXtqhXXjQA4j8wgqJQkTT4K9rEpWr6tju6qQ3EmZcAZEDkEDDUJfYLKfXu",
  "key3": "PThmtdzCUFUFAHnT9QhFgrYw8298vkdMNuSDP5LjtRUqhxfMxCtS4Zu3WUACbZdTZ3L9mBErwczzSco1s7waDrE",
  "key4": "4CnbYY1LsiTwPL2BDFUbCs9X8mmQeZwbUM1xoSupFUUzyH3gK12e1znB9dpMJCafV2vKd2ozzyrot4kgzu1bVp2n",
  "key5": "9ZmCiiWMnmAXbiEp2Tb83sGHS1u3BvKNwu2Wgge95qyj7hQXoAM2CCMy4rGpVZXuXcE1qaFSm9q6fVfDGVe6M63",
  "key6": "2twx52K4cP1dFKP4xQzFWDt58LS1iheZQSDNr4rb8uPgdkLWdxpF9X8pZGUsXS7U9GMdkqtFpvzS4H4uGQKwj7GT",
  "key7": "ToWGiGstqfftLeXT5wFa49RR4qhKJhY4Md5mKzxfEN8NFUjdd8iHfEE7gSm2eXpRU7EH2zLHPorGMiY3PB3eSjJ",
  "key8": "5TsbxNHmJL69wYdTz3NZGefcoRKxtCTjj1swi4WjcSJZdDPge3snA4Fo7xzWqErrYj259rQTb1hfbh3zRyU8KGec",
  "key9": "66eDeqKTbGrqTi9ZtzYZtsXUM4UcMBTfn7uUd4PdfykPLbcQAm9ZAV6n1VqmMd6fBu5DmGDUP9D1cKCVRBhKX9Sz",
  "key10": "5YsAw1zbJgHGYRk1iFLwG5JhMmt7BQQg9Z4Z2fF98qapU7rXCJ9YWdoZNYGCLoy8VfoG9VQQ6bgZh37YovegHbSU",
  "key11": "5zKfgLLMTeDDPQhCdNU7pjQ3ouyY4ueDWW9Fy6jBTxVRQHDPDBprPgAm7p9ncsxG9LDV3HifRK25hwbd27er1Woq",
  "key12": "2nsGrkN1xAMrYmB6zJTJq3Rt59GkU7u469hp1BE5yavgmHUU8bhXaptcJUZKKDnoKXjZUPsXE9oUa6SqiLGetGMQ",
  "key13": "4ozRPPcmDHwMzcdJczLyJkKkka425EEmEaoEtb9aARY7frq4ayU8EpoTrS1ntnTTaoGAxxpErQzJkHjBamYvNsP8",
  "key14": "UcGHZHYjhunjgupM6sdtiNeA2cAc2MqrUpR8m46XGwRivQLjyBC2JbrzBndG2HgxUUJZQVX6hsyNbzjK7u2sZPD",
  "key15": "VweutmU9zrnfNnRpVUgzb83rAXEVysv3Ydbi5VVT9iUdfMtftpMUe5VrHLHh6BDfZnjGzncLUnPScpaJ9dXvQqE",
  "key16": "gvz761yvCMsBpvut1wXaMw1FptroX5iBCkryFEZ9Ltb2oJyEyeomXVNxNW8yvm3g3xwhxGYSqyBCpExFTqeXbxr",
  "key17": "4HqFgmASup38k3GAAQ4qMFAYwKfNQwUKhYTEfnvQtDnvBLSHi1AXcmArGn9pUnZm3mx3DQEcqABg1x7MWVStS6Dt",
  "key18": "4oZoRiGvQpPAyL1Wev3qM3GEH1aEiWQjYJ1VmWnhLdpJNHJebZNLMFeKSKgFNmFihDBv25H7F22zN8aRyD7Z3rpL",
  "key19": "h7RoEXhDo2c1txrKnqXgpzhphbuPAxD3VZF48MGBNvVvQMc4EAy2oyVRRfTz8rTfFX3hJjL6gT1t88u9rvU7EnM",
  "key20": "2TEMoS4kfML3ibPPSPsbR9Vvt4NJfMfKsSD8miKoarGkugeD5HqYCmtuQdLRjxS3cXvrVYVuVDPNGUL47hURCB8G",
  "key21": "2k9erndgWeTN9fFvhs7KDSML8H2MJqpcgVfcU7Ppu6qKYiAfke9Y9ZjLuELAhmyiUNcrj4VhVDiJ8sAj1x4BisNP",
  "key22": "5JPTceAfjJUBMvLRvfpTd5Qaw8fUfMEScbC4JYU6GnPRmUEATe3hjqkn2J5Xa9FZRHLLWXWRaSJeCNLoByvDoNPA",
  "key23": "ks6huEubopD2etH18K7N6jxLd2H5k9VoJWLPT7LzDR9YPyBZLsBGCHmZs6HGFHeHi61SDXZ7ZipPUTT1WWGict6",
  "key24": "61ifeXmATL5g7cjkWNMma1joxsbNaa2jvNNpq93VQaQk1afprvFxFnUYkw8z9rCvmQbRJGE4xVYbm8GqrcHUp3X",
  "key25": "5E36Q8yJKA9fW1iJKtuu5NDRyDYveV5oVdHDPpU8qNyhFE72D58tB3KpDF8uiqxSvhDHaKx97wpqqTCsscabM5ZC",
  "key26": "y5bDx5PrKcYT3HKRDrqHyHjQJEa6bFRJDhQMs9nn32Wzx7VVqXJRo9jR4w2YKjgMXduHJpaw7kCsW7HX35RmdbL"
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
