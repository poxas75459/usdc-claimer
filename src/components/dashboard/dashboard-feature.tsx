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
    "3uFpWmkgNUqk9ZAjkavkD1rNyoc9zU2P4ifct4r4S7LFbdnMx4g3RPkY9TSZZgAcojVTrkVARBqo6WKKrymJ6PuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z7X6mgPYC8HQE7rFD3fsVRrQHs3JnrskLP8aceKWoRcJxtKUjgzzYKZmsZTLK2PfoTFqibMQTjHPNhNxH4zqDCt",
  "key1": "3oV98ACpxiyaKY8Rocgd28dGcEMvdad7epUp9sKCbDwixB4nTHYX3hXQVXJtzQTkamzD2rDa1ishBweKYkwzRMYa",
  "key2": "y6ae25DAqe8FfwXJCP1EEJ4k5fgcD945sosWsGNxsGU9FGinCkHEBq6tBhLmVJwPqUy4zjXDKR4W32HjYrPBAAB",
  "key3": "3j1g8gttB1sDqTcW6D9sggRLuQq6jGgzGNHnESNtcGCuz1Wd2oJoJeFDyx5in5Y85sosNcyoPc1XN3NEB8UkXaku",
  "key4": "2mv47GxzRBRdvJeYU7U8a396Cwb6gAMtqfVsRr8jG1DiNxYDc3kJV5mfNwQ3MTw7A4i4ifMDJvzjzREYhEjXPYby",
  "key5": "2Qe9jVF2RmbNDLJEawfFmwMfEFq5DFKj4oB8v5XrPJG7euWm4r6teQvuzBQ4v5dJ3hERdqsrTbACRtzeeinEvzHZ",
  "key6": "3P8r13gygdZ1twdbB3c7MJ4UpUQetSsqzCrJYjYkjtvBUkCoFphKKYTB4JhcFKSRERH5HqGG7fA9pPsgrZ654gLN",
  "key7": "3dzYko6Q92H9nPDp22LHW7nFHB9wogrBbTSw3gWRR8tmF7c7X5cNhaPGBqTaGMtGkW77tkR9sDiy2rwy88nYs9PJ",
  "key8": "371mv4MJRZ5NkTAYtyhoEA5wsJh216AETYDS5vkbqtybmgf45bpQpgKxdvQ3LErh9pausskCzfvCsADJfFtKqfCS",
  "key9": "31bK4EKFL3Xug8FSZ4Ez4ZhfN9KcYxbop1asm5GPW5q7rCbLfqxyfdyvtupgUZAFAG6ab4oia2fQyNbBqBH3Z2w",
  "key10": "29SdMY226mQ91uCfDqr8dE1rCeiaeKjKwj9VUGwdeKcnyYVneZU2uqgwr9sFM9xWjyPNpyYonNhQoQEGNswRYZGh",
  "key11": "58gbngZ3kGYjiPcCVnkSUoPeRbWrm7n5PCVsRusjGh86BrB4tpi86vsBXM6iWSStjbBvgqy2JgZPW8xUH2WuYvow",
  "key12": "2iUTXajJTbdkdWogAABZtq7et532XRTBXDsCcHi6AjddUTdKS1wf7ewMHRYM8n4jenGRU5nLeCDuXEQTnvwHzoQ1",
  "key13": "55ft4QJ4VfERZmywcusnP2Sn47iys28UFhV36GWDoyTUShADFpAWdGJBc7S4zax2FTCfAsgfDriqs8atVw7feEfD",
  "key14": "2DcEmmHHgiLuCsCNJSnRWRwgQu2viE3CLWZQrZfZc8v9i6HKnfEhzd5u56LmBqvZxJTnMXb9Q6vHBuk6gxfjA9ja",
  "key15": "3vvHjiSdDY7AWgPrTaLFXA3znFZ1gjbsWdKqerKhciUNWG3fUZ9HJhRosBy1uCntJtfACKThzvdA7WqDwXcHrosY",
  "key16": "3ukCqsAopaJWhhqv8czMF7RiQ6pX7jjRqtvK3wEQVLRkkVFpA1AEkYsYZ3mAoiJscr1DP8CgSZzWYP7aU39gBHpd",
  "key17": "4MckixMGWV4XbpwD4YShxhMRJkdQN6adsTrLmVmDKB7hEGA4ApCKRhH35jqjfftKfqd47gHfgpuJeUcuXXDJo8of",
  "key18": "QB3Wi6tUubnC8m4W7ooB3fJgR2XKTu2qhgVX8foxu46qf2dVfD5roYoTcBWsu5V5VQ7TLAcYcfF9pbFbgvPcEgP",
  "key19": "5ETp215N7TuKK8BECbE2bd2jUXuQmdV83tyz1Ck6wByPUK82CQdvWbbRJQmbtAVVaJsufaz54fFz2R2tBeBocFh",
  "key20": "2h37sN9YDofHjpdGMsDUnRcv3BDPayKhXEpTi1ykae4fGdDCtBTTDxn6aBaCsUnHKGLBuCsPZCM6qVmmSeRVbVhy",
  "key21": "3K2SVaH9ysM5D8VY1puX5MPL9YCQsKdWouUNGbbE5eitNPKUNPzwzCQZYxfMgkzjGebDKAP5JEj2cJhNQhXDaj5y",
  "key22": "515dKt7haiGNyxehNf34Q9FT8s9zQiE4yg7nJ2Gff6yuL6e17Hvo9h1kryNkhzJAhkvisP1V4XjpfLRqehvPEZ3y",
  "key23": "4B7N4SEPpvFoK5ejmQqkDG7b4ktY95KFDrdn2m6tQXpjLwZjaVVsg79wKupQZEQTpRw3EHGPu8T1TXHN5mwHApC8",
  "key24": "aMQmNMVvyYmdgG5pWecVHsu5GQNpuPePKMyBvUbm1LZRa36Fn2kD4uCPhkK1wC1WaLKQUy536nr7BFi5b43YPPQ",
  "key25": "2vXjnFmUBF3hufhMfMDdq61pcm2UMzYP7q8EC88yEUR4wB5kDJ9RMNnNo9JLJthSehLDGGf99JLfb5uWkCbvRibq",
  "key26": "4eQZknSxrcMqeeEBUZiLdLsaYFwxgc8nFsdCTQNkGjc4bfTzowbqFDqQVcrTdbxrbGRyRp7Xw8sjdBvW8Jg5qkEt",
  "key27": "4f36D8q3Y5utH9YUJQnvoAXRjFuGqN9ZRDgBqST1bLK5Z7yRvdUCWN4BSLCkQPeABR5kdQzatSgrc2Ex5fhPBdT3",
  "key28": "FpTWJezVtUrZd3DDfpDQmGmgyfVT2JpnmY7GAk2XLo3wmaB9pR79Q3128Up8U6xxy6BRDeE1gk2ndF4JunYmTkQ",
  "key29": "4xUeQ364dfgi5PrayFdfWDdaDjCZVy2jgdWqBsQW1TecteS9qBpvXLPXm65t4sLR3byFuNj5RyjAH79F1vTLc92p"
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
