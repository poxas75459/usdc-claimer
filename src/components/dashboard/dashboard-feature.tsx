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
    "5HKc1epqd8USW5gKbA9Uu774RiJzTSY2GQXzkhDpPQKa24B1pF3Wo81hLpPeNbmkv9rQSpQCTg1PkPNqGixejVom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Du73ifkZ3q4133rejHn14Zq82KQbM4heefmfvx6jmB2zWKkSnjkoCdiBc9m4Lbd7ycDecpHK6JqH424j3kLPkjY",
  "key1": "2Cqw5RuYrpChV4aDKDmd9iQWYv7HhwLgD2n8KSe9FWeULR69d4yj9z1Q7W651biXPehn9cYcDMZwCUCdUve2zKqT",
  "key2": "8RGgaeDd3jbZ87R9fFmr3HNZDksgW4MCKeYWzJBwKe2qybimXLgmUc4sdQ6yX5enc1EyEP1haE1UBrGNihYAQXC",
  "key3": "4yFRXLdBpn3MMni7BZwVpU8ya5K4RtGiqEVTd7kFQLAAuc7zgJ5R9HriDnjd3W46AVCHktjMVGZRxtofyxWgbv6n",
  "key4": "3WfdWMosQF9dK2b13M7ALomgKqGjDPxFCp2u6VufsTkAdLA95EP8Af93j51fh2n3eBM6iW8w1F45z5NLdfZ6avBv",
  "key5": "57ZGtEJP51KwEVcfCCQQjKg3bqC1Z9Tg1A6mw48f676UhPSCrzUfqiKuEuHshzStqhNSSFnWYAnGkfjkioMPcb2X",
  "key6": "3XaeKmEJRbTLjhWVV8jVi7AzhPmZjp1zWnbfqmjprK4L8A2BxHMAr4DRC3nGdFi2kPcokMbPWLs44HMPPMiGUvH8",
  "key7": "52ZfNjw2DVg545pwq4bGcKSyg5FMGyYRzGYi5bp2gFjcENLsbb2zyzQ22P3RWkEw4kBnUyXa5AS4GGd2bdF2g5Ja",
  "key8": "4Y5tvdG4BqwxLqhuR8xoxsnD1jCFzwJuxqMWNUJ7z882ES2dFTqd61Y8VsYnKrSawBvry8WfkSFxDpLXLFqkdsWz",
  "key9": "29UMe7JmyV5mutCQHRH3632NayL97ixYFjwUWzqwYMBGoxWyDmYGYhpoEEHTFMLdamtRcA1nBADRnqtXFLJfYssm",
  "key10": "4mbFaxY4VPEDP6zygPuJwSeDg1dRo11ez1sftPGZRKMtbCU3okUEYVE86oUwVXKUfEdcef6XafbuXoU6BNnUqasm",
  "key11": "2RufCV5YLge71trQAMHDjKnLpkMb93yH7gdjbuTrsRk2mczhecp5M8S4aHfHsVgdxvm5eVPFbhgKZUtzchugXsji",
  "key12": "63W3d7xrnW3NhMiPKhtVE81nuNmiE6jEBZQBXkAa5nHMbguX53gEizWgDtB7x12sD8CCCeETTxirWK9WD3KX7Cwy",
  "key13": "5pbzPNaAUPBdCK5AewdMzCHpmroscivbY1AYx8iL73AhMAQnXYKbDvFq7XHd5f8kzGW8S1gGJKhmht1tgYuzhzv9",
  "key14": "3v4MT6Xtqozbc1TWbpxKy6cUNMzMkrqzDuXrKwc6CzyATd3hv2XUb1JGVMazZj9F6AZUpPLVMb17t5rsDmDG5Gco",
  "key15": "4w7hs9J2G3LMf8QtD8uZtodZr6v4cbcBEWKDMLGY2mGQwTEkgpb1SqkvoME651nLtZ72Bd26qJudpcokQVBHmw7i",
  "key16": "3CkRN7ZvYgVkL37wX81hSfRCuypDxtYmmC4jRnffVPhVCWomeSYE8vGTR9yLyLWYiQDLqDxQLfjA58vKHMPHazYn",
  "key17": "2NvRuFvSrjSuukHoFnocvBBCoenVhZAQv2vm6GRVsXqRmko7L4b6W6WUdeh43Us9fn6Q4uPyXhMpBgAJQ19m4sMY",
  "key18": "2FQUTCVRcdgdvJXe6JGssKadpBZg8B17aquKwgGAo7fULrNhCvyM2N7jTcgvNdJ82b7fFSy4LHquPmaeFk3fq614",
  "key19": "2TbyigYp7qonF3qZGnfZTqZi8yKcdyge9vHubwBvCeL8npLMPNjJU3GxEWE1VoDtqQaBT16mZCgLGCk92w2bTxfu",
  "key20": "GXqaDgDfgdNt4JnSrRkw5iivLhvdtTArAq6PTnBEnr5w2a1fmS35oRFR5cgpxFhfzeTaL5akSPvx2gfJMNjGRmL",
  "key21": "26DhzSeQFL3wBFpfMKRaCp783UHo1mR9VJ9S3NdVrG9jhxifQn2vb9nJbYUxLPHoTjkgzozhQoctTtuH73m7mrXe",
  "key22": "2N78eUUFF9uk1pSARy5FENz2iMjjkTXGYNY8WvfwZVSSjBSk1Sw6KNhEaAeCKSvmKdQavvtywJNS4H3oaUgyMMud",
  "key23": "tfB3NHq1bD3yabmoPmoxUPDiGDhbmPmTm8UKnF8o9GDANicw9Hd8jkwM4h2wqJJRqv94TbpAM2vQPUXPNpDZpX3",
  "key24": "3EuUsKKMH2SeZaeMP2hbHiJqj3xws9MSx1byjm16FgvmWFcu923T6qcKUrxLfGh7vX4bTqrHXEjYXbRb4uhzpMHJ",
  "key25": "5hzrpoDLnHDNDBDFTBgZVGhQnJZJyRdqTRzLEw1TTRBrJ3tJVduRt1xgQbTcwo4Rv9Grbvon55mrqQKDqJ5qW8Q2",
  "key26": "42y4h6NifpxSX54y4sn7j4M5AtXauB2APYrmUqrSyhii5eUnUTBQsG8amx4Bg29gA3nQJ6nG4YeWCJ4WNSx7rZHS",
  "key27": "WaA3mpfaZGr2amoe7kcMx4NG2mWVL6FMrjSbLGSw2P9Tw7G3TnTYamWEWDZrUA2RpygTmGQHHfQH9Rh2qqHRnXF",
  "key28": "5kJ7BwcuVk95Yk1gBxrqqq44iLKDReuQ9obFZqY95HVmVs2Fj6Mxwa9oUykym8MHKW93FvVd5Ppz6714owoLWEMX",
  "key29": "5YPpyJxPuYbs2V3WeJzDWp5LYJhjmyFv8J789NYBeDG2EEDtadmCKxBhh2pvBG6FADc9f3kB5PejCj8kJATedUFC",
  "key30": "53Mzx68CVV3HfXgpYb2E2o2TtFynBWgV6EdbfgPJHUjBirh3KyKsubWWhVXGqKF9cG8C51ERxaDACqFYMu4LvuA5",
  "key31": "5VRWnnfmdJNYuoxUUsrJHxVfnSno1fBDnpfxjvYzVbVwWetF7CZNmbB1Bic83nAAUEksMysHnJ56aWqegGhdntp3",
  "key32": "2fdW3wKrTHDkEhCfVx3qJjUy3QaAQnc9dTtNc5RxAgLxThyC3fGj8rxSCD7t4nis9VxhvE6riBXR5GGTfehmkEFb"
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
