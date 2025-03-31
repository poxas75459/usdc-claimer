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
    "LHNMMPa9XqygeVePkcBtGaTVrkQh62NKyxPfzeSYZSXdDDQpGKA94pu8v5wYrWWoDQ4F2A1aZFEiy3fczV1uVJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29yrKC5oQbUBAFREfVDtUHQmsvtEaYyKPTytzGb5SixUJ4iTLU3T4ic3kodR4c2HySpiqVA4PBd8WpXCR5k7Mtra",
  "key1": "4ujY96gjkyH1L6maRAapK2LWwsuXKg3YfAYdDnWo5GRB6cj78Wg9yMWuTu8m67V55L3aiSKs3QmaUnyJhdBJf8LL",
  "key2": "2nH4aoFiLk1o75vjryCtZizC7yPFsVBsBobYYuEkmCijTFUsvUJbjvn9hNmmUvPbN4vT3Rv1PdCztT2NJJLkah8P",
  "key3": "5x8SMXBt9yePvRqu3NmtLhDxRt6EnzCHJ48MJLu1PN8z49QJ8fraAzKnqAGGt7YA2E6GbxuMxMsk2rPFcN9crGAK",
  "key4": "26Vasi36M5Vf1kQkodV7oYakk6qZnhHAP2CBN3rET8R7xhU59iaU8HumBE9RkLGG8aK7rJx44tNB38c3aSJGKkLm",
  "key5": "UhanKZDLKJHfhFb3g5ni7LhzZNoTHQnKKKrnrQ9kmLxyDjqM9W7AGJd5YoBRHZF65nYu7DqFpPKFJ3UGY7n5p6P",
  "key6": "4LodDg7mkqBwn2d9LLgh3NhNTokTi8xmpthquTHMTr6ATLkjgNWkKWVw9jijKHMNHR5s2Bvsudtgo4yCDBrzbCLN",
  "key7": "4pxfh2D1wiqp9KH3ehdyuzhJm4zFSrmXodYz3XoDx6Tgzv8z9nZ8VgTY8yP2aZRHZA1ecgGoFqt7hruezUN71BQa",
  "key8": "35Z39xEg4pzSLHwMvAfwwA63c2cRv6bmHP7Fwg6PMvwbwxcJD34cS6knWMwaBNk6vMMZ5qQM6Cube7nfPbbiopxJ",
  "key9": "4L6bHCp5dhRw8bnJ5Vvnb9CiaBM7wZm8V878xwUr3iyhwLFGLiPHeyNvAVHjd4LvyzXRshrSHdGZXg9ZPcVVRMMq",
  "key10": "4r6YW6PpdYi6z7br9tNC873VUSZMW8z6FAxsJyjsQWLvVAUekAUrwkyNJUZRqvM5XRjJiJ9Vu6jiCTtoxrV2YJtY",
  "key11": "4PMKx8Nyii9U65nuAaD2YhQMxZdTbDCuUyv9jbcSZGQQgVhT3BHwxWvZCMMGDjBy4YBvm5NBeLfs2WpBeVN8h1Ym",
  "key12": "4UhuTE14ZwHY1FWW5f9q85tgFBFFsfBGEuGhAqK12dRK47cMG2huQ6TR6RZbiNuG2DLadQMFyR7DFHo3pXohFAKX",
  "key13": "2haJDtgPkiq1raaNYHxucLqs9pUhCEmhgX97V5NoPuJc42SsrK6TMQ7fKfLXGixWH7HWPRhozL65Xa6nD46MmbB3",
  "key14": "RcM9AQZdNk91wFi8nqWFGB6Z6c6jZXeL8acBM9kDB7ZgGbp6bhQkSC6Coj3Hne2EVP8kkmo4u734fPGSRFATHBf",
  "key15": "21EGVJw9AGZ7YiwEMi6EGmpHv43rr2YUFTavDu7ZyBhWwhBVLEuWGVvwnbtTpqECSHttD97m2AHyUffVunFNcVaC",
  "key16": "33qeZZBGWPszyEeJEQCrBRTqKdmYvrw9YRKjdZNiAax2AMy6BUeh3uSY7BdfKwnBWpj5d8hY99qnj1k1Py7ngUca",
  "key17": "3AF1HsZrA5z7XRzKxqYFkrUsdtU3apbdmS6qUfQfbJpmxZ1SfJfLPnjAp7s2UoiMM5L3JTYQLnJvkKh1sj2njAyX",
  "key18": "3UUWD5g5BK9Za5cKDePPkGCrcmVZwHUzogGrSpPtQ16oQsz4kk64gAWhMBFv2VhVCtdoQMrVjwVZHpCoYPq7GTkr",
  "key19": "2mmdUxqxBWgQjofyC4uzR9uvPutnxxJ1CBwfH3tkgSCJ8Xnmpai1Z54VqRsiiHyp8S8T9EaU7hKUu36pyr7Z3K3P",
  "key20": "3LXJmSqxz4RJg8ffZXK4r3r334xbxxGWEoE4zsDAvRTromvzpWcc94uxmCp5cPmd588nYpNztq7caZSNERAd3kQR",
  "key21": "5bSZDQf8gYN4UmQZej3xm99EvbrqQpGZG5kXrTKA5raafq2qxPQXoDpMXeKFMiejZntBFKeMyxRFwRbXEmLvXfXz",
  "key22": "46ppAk8xG7Lb14jqJaad73zeptjMQPcixswaMY8gmrP9ZyWDLv3u73Zau6EdoqHHeDdQto53a5GLUij4dLciUXzM",
  "key23": "5xaJSrAUXtoEFDFxm4H13xiFgJYCg5ggiZ7SgMEbszHncnqgeR8MFsQBveiUpCziNS7XfcvtU2zbMSvPFEFiYsq6",
  "key24": "235eUjypsQNhMuwBiDadjFyaovgyTTgHqXmPL5ANvcSUwX3Dbbadf5CDEZ6DLTvdmxUHNKHntBbYCqgidnqM63Yv",
  "key25": "5JS2VbybgZs3tLC5qixZnA1nmCNCpj4bwNoQnLHKKvezdFB9yQJmu3tCpXHbRXiyEkTVNJqMGgbNbpQXRNtNsqyc",
  "key26": "2jvEUKS56aPwBQb8VoKZXhBHqASCdvC8CsEbhDCitJ7zaP1LiZyJJ6jU22Mr4TqCLEfC6ZrV6NoCVXWSfgoFULkT",
  "key27": "3TEw833XWcB2xZwABjNA838Gsjynbiqc4e1DDKDZajs8K4ZQtmfgN2ysMouv2t9EKNtYwLhYASKVAoygBQMeZbBs",
  "key28": "4x8KDHq7BLJoPbcsVCafSLzFLtju7bG1Nidb5gYoqFMRcUxjaJ9ustfoQNYL9zJdttvJgutEdDwSJK4jJ5riW4Hp",
  "key29": "3V2vMVC1sSghGsAH8aCR4ntZFqejdfpz67mbZKX1sJdR84d8oq9mBUj5QN7C5qYUDnPLbSasgsr6b6sY3U5tHNQC",
  "key30": "2uUtE7u83LH1Qb8DAisxnNhQzp4bUdEvcWBF26RnTETZ7YMBSEbNZ7XR1QDj2k2i5x5qkA9SbhhEumAgwoWCKCVr",
  "key31": "2pXxAYRqnVJqUwXezFLWPoaWpeqmw3RPpPSDb5tCxhNrnEx49aMKCKG4qLuqdhXLXTBfvZCo8dbG6AMcjTL3kZrZ"
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
