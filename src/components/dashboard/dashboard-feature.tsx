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
    "k73jYS1a9he2jzxszhCF8YSqfQ9WywzBhaQ6WjQCnAPjCwYKTwsvEJPNAB3ch3tEtEHUftfZuwJY4vU2sERaLWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5YzHyvgeGiEuZH9gkN2iVjiDZCofg9EgtRXsaJhRB42x4WapaLDr1sNhy3Yud7E7H9LXUhS6y4TY9BH9xMzxT3",
  "key1": "3dyfJYZ2Xyv7pJWPUrckx3ZXh4u1Zh12XxUN4jjUYY33WW5uGULuebCiBsixiSCKdrRLyjdf1dv41xxrwrQZpxHD",
  "key2": "3D57ieRWSR5mrN8QhbvKhL1PKVYYdSyjVk7prA6z3KBbXQiZSDwdXTqv4rnN4SQKVDjueWSky8Eec5M287p86KYW",
  "key3": "U4hnUvyKHcrrBCjYWozsRZoXR71B5uzZrGtgmnAq8TBf6jindPR9tinyiVR3M9BdfiqM2wd3SZVpgJkVZEjSwyW",
  "key4": "63xabg7a6AvgP2rAdyUGjwTDX4LtMkqY71TYB9YMzSj9YyUMEuaf6okPSmqEfhnE8yGQvMSKd6KdQzUX1mhRJ6bD",
  "key5": "2FEK44eMpEWyxm3qjr9yd8nnL9v2gZ5WaeHuPQa1LaJmcF6FQ9G9Ep9s8EcXYvqcvZULec7LvUnLBqzjseaqgksq",
  "key6": "2KwutrZsaH8VjBDJ3vYixtVznDC2KsxstPjhy1mhKiB3yqhGsTXNo43cXyTmcru1gtZCdnpVBHLsGFDZCUoLhsT7",
  "key7": "39bGihFctZdSV5fLkfgfoBnTiGTY3tet5CZpoF7nJWGpUVEKuHN2JYGgU9pXnjHgdqNnjxk4jwffuovQT9a9Vg2a",
  "key8": "26TWSaP5wmMRiGA5H9W575WVHTgMLBeBqKxytv6uudk14118EeftBtGP2SNbBbo197LtwJVpyoqcxzY1VXehKxcm",
  "key9": "31FmHg24PHcDND5YPiQC8Znc7h5AJ8c3Dyk7H8e64PJZUWdRA1yjgvnz8LXocUz9MaTviXqrBG85or7cxEcFwK5c",
  "key10": "47Pn5FpkE1eijPAwdVYDPkHbFR5SyjWQek966VqfxE6eEJujmkvw4882isBGuu8dM4ShtA1Unj6N1VGVwN4BayZL",
  "key11": "5JWeKD7HC5ZMT9GK3c3vvNgk7LjC4YNtkykdvxGj8pc91kYB8c77y3X4MMNWP9cDC7M5jgUreYZ3wbBKFDZKsi1X",
  "key12": "3N4y4vg3DsZ1ByMah9hn31X1Rug2d15vaF1ynfuPde5uNuYtsVN3wu6nrRihcYkWzEWfEQkqU2PTZvUTUMuXXqnc",
  "key13": "2Vf9r4NqDuD8UUqm7J6Xt2EBWHEboB7fne5ncSY36GqvoZn93ma9qgLSpYgYJJZCzcM5iBiXpjnR3A7PN3WzQC1g",
  "key14": "31d7iWvjDvDjjViyDuQ8qqfDMQ3UBopYeYs6wGARcvRjMVRK5TvVCzpaq8C75wv9DjQJDPpfrStj2kyfvpgwjRKh",
  "key15": "27WLxLoUucBKyu62ZKSQjZ5FHmtqxzq9kDFGwHehcBzthsnEXU9PBRQUgpUAgJcsusRNnqk4mYadB6Wzwfn3e45N",
  "key16": "2rPTMz1UZ9nRdUvnonCS19G9UQMRweWKvjCrntqPCLdBBNBU7HJKZm5KnhWeeCDdRYniwZhHM1ZrtN54HNFUK32N",
  "key17": "5CUi23NfzoWFG6JedQpbUiniuUULQjLvKqmCdPWWRrqnfp7tbDJhWPYZ1E1BDNDnPnCdKkbmbc5ferE1NCDSBbuv",
  "key18": "4YgrsvsmxKFtGLSgoKG2n2VN3k5pSD16gST8sEHaMjxikPHXBUzGVHtefDZSCiRnRpDHc6hxuvpkWNPBTp1o8wft",
  "key19": "FfKk5yQ1r7cvC41buJhaLoHqytwTPwDHMt7y4Fb4T8vmuTG9yhSBfuwLyeKNznBg8Fc1adYhpH77PXiFvF9h9bY",
  "key20": "UFJjeY3U5JbYWfq4ukcwXibEyyuahGQKm9bNpGX9mKd7MHypQT81davye52jJjKvegVgE1cHDfjqy9tHWuRhHke",
  "key21": "4E6WMHRGudwv6jsUP1f6rozio7nF7rRvQN2kbGmVn8nsEXesF1EBgD2sUwyrPPTZcLRfuZakqziCpNBwFaVGR4aS",
  "key22": "qzDE6EN91nzwF14snc8hzKEdE3WSGN3WgmAM2bppFT6US4hdMkRkkcbr93tF41XYu2vUoT8paQ2BBwHzckhXpdx",
  "key23": "3TGjU4x7ZZCh6DdvqGVE1ttW1iGRqh9uRTKanXHT3yLbHSX5KUXkYR1kYU4JTq35Vnz2n5G5dyDgqZsV54cRMiMG",
  "key24": "3xakZyD8twNdQdX2Yxn86Q1x3GzCKBQRts5fU1UThM4CQqvJaxkaZfvJYUKi5huNTrY1BXR2awZzP5D2yoiyHADB",
  "key25": "3RhV29uGT8RzCbavgrHuao44rUGL3Tzzso7ivaaZHFgVwcSw3yJkd9iC9owMASwRYtJaEzQd7C3oVaDPiVnUSVZg",
  "key26": "ApBHwxXALo1LNgMFspKeWZD7WMmT8rHvqtWHc11i5o9GJ94qoTamVy3jaNgdXHQEEgitFeTmgPKBA5dEvVdKnFU",
  "key27": "2DVDkEe9HNP5y1ujERccdLTMSgWSVBSVisHmFJEosSxamDgDiyNmKr7oUWTDVQYgQn5R8K2esXiYPYamyrtbs5kV",
  "key28": "4iufntFUtg6KsP8QkMD4r1iZDT1wsRawiZHABCLduTR2wJ9G39PEZdrXT7GSVWBYK5jBA9EKhpVahu5kAD5U3U1g",
  "key29": "5dJ9J33spKqs9FcW8Pbx9gq7YqvPKQiSMTT8D7xjk1nJR1ZLQjpXee24bLkcgAHmf5vuGuDnbucem6PaRb4KJYPz",
  "key30": "58MhDCQY8NqaNoUpXXWLTmNEhmR9tss9fAHEUHy3C8597nthGNjAVejQFn7DuX5D2vHzm6NUCzTRDX2pbFjkWign",
  "key31": "5UmzVGo6vc1aDH5ZkstUkWVSUXi4FVgn1oJapbMBvCLidBcY3L2quTHpxNSgZdGtjYQvsLxGniMsYom6uGoxRmM2",
  "key32": "33mCwUqAKNWXZcDxQzhqW8SE8Six6t5m8yrKdpzZJrFH7qFbGH76GzdGkNv3nst842rgkTT4RZmDo5vdrgrmBwgH",
  "key33": "5J7DydxrARZXA9ghgs3cDDpCsWK5LUXtUzJLmKpS5BeUTwc3Stfmrj3y3DzQLPDu8w7fdjYo9sVcfiBHjc3dg8pK",
  "key34": "3MBUWSbAAFzZwt4o58H4Sa79pfHazhLq9t2gCyKTUAVfTtwCHy3HR68XPvA1G9NXbnDML7AVHSfYzXN5yqr8MJg1",
  "key35": "3u1p3nDu65Xu5g1hZiYGG6THVA2DH8PZS9wxUnwtor1VKUProcSY7EucHmFX3s7pdmFbfyJqnk3oN2KhhWiotBuM",
  "key36": "21bUPvZBFPf1aPAmy6ok6rP15MEW9nSVkGrhNytPvGD11nrPdF4LV9J4Q7wsCrq3xQ3mYRYy5YXZ9rR3U49Lnoks"
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
