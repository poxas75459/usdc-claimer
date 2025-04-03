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
    "pE3sCRzv39NraKj6Amzd6YMiYYpCgAfr5EF6D7GtDnqv5uWN243v4xg9UvpeQBf66xtMPY5E2i5jLzqQ3UTyQLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQgbHreYV888buYJ53hEdeJYnzABuJ7Y2CWfATphUnT1gsEQdm16fiJtALikL4eEA6VujKHUvtTe8SJ12FgaaA9",
  "key1": "51zoBFs7gSNNXF8EV3eYJip9FCymQF2umRWK8fQV9V1Vf4SS8JxTTh86KocccyWY9Gow3jbGkRce2eMwsWkdsMSL",
  "key2": "qWctVCKZs3xii4BYT38c1gzTEc4ycfKFQvPrTNgNAShwfvDx5dmcv6EFaacdBX2FkLyHB5JtB9dDvVET23o65bP",
  "key3": "NBpN9Vr9JZNUxqyL4o5AvcUTz7kuyqu4QdunLpYemGxmZ9jdFe9tWE2ULEuJjgPioa58KYDpj6j3iXhh6FoXjjS",
  "key4": "4opJJcLVkCdeyUyAPfbx8eNYsqFoUnAw3LJinP4QiCg87hzGNFR9qB29RMCZBioKi6hjguWBHTpwtaJRyMNCv6r4",
  "key5": "3EWHCbxLYmbR2j8xRNTU4wgqxUdceYuoe2Q1AgWFrce8W4tbLJ6Nng6nBqE7HGdZzrMxjJpDunVXjHrreYzZhEPV",
  "key6": "5Hrv4ScdRvi86DTbY2qKmqNwKiB8neUgu47Nx95B4scQGZofoxgAD1wHjFXmPEaKfwsKZCmewhCyQX81sVxH6EgN",
  "key7": "HY4aFbMF48tAHVkjwpqzSGfxNtfQ7XYzyC5ZWnkzwqer9L5MeGZUs5Uy4PyZzgpcxULG9isuCh7Qyz9FcHbaAw3",
  "key8": "5z3Rk86aBBZu9cCg3rndyTAkHrSGLmpP4vrAVtLtwZA8d4SsZAYt4YxvqRWSYLXmg8wemj9rM1KSbfBpeBHUYUrt",
  "key9": "5SDMgc3iVKtroB8LB5Jy4538WckErDHR4FAcBhp6E4KEyVWjdcoC4EKCwZEiCoYb1jYAKpzUWRew9reLZAxLzoyR",
  "key10": "45ZzeuSTtx2NV9q3uchWvTfzS3M7Ane9yex5Jne8TLi98PRaT8jiMGJVVDuzsz1vvnJC5BLWuLssqo4u4Ge7qN75",
  "key11": "4X4rhQUttggjnK2R2jb4zdYNScETXNRMWqcDpLk5kgF93uJ1tyjwhzPFTWyH5oPdFszAU4GtVfJSiZsvaDmPD7RU",
  "key12": "2hP2DffzKvcwXMZTPSMgDzVMwPgnTm3oZSEL4rkw4RMtUt1giF6FbPNE9PZJpzmwceFQV46VLaJuixrj9JAAkhCz",
  "key13": "9AqZdpi2L8XhXWL8RpW6JWxSPsYgG8yy142zGi2kYGRixXD3cRYFTCn39E3L3RKfQK7ZQgCwtBKumTQ9i4KfZeC",
  "key14": "4ECy3y7Gxqej31xMck2WJFFoCxKjAhu5SMFVow8oxP9YhjTvvUjiKNTGjK2Yh8tkDMrnfzKEy7G3w8nePBpksAne",
  "key15": "UT9BiapaJUGwRYq3zW6P5GDDtiaZkq5YbjAUf6mpRUVL9nYF5XDiuJnrN6xzCWEJ2JwqkkhoXeodj4nhxFrUHkJ",
  "key16": "2RZVLeQB5c4AHsxGDpYPrpHxPjSBdNKGvukuWCDVPP1yHLhfKB3dLXCucuE57Yw4m1s8MP6mgNv8sfW3hiPCNPNY",
  "key17": "2y7kdmn3hmdU7b5XDJrfNytcyMEqiQA7jexzFWgTRXbwYbNeecF2aEaAPxSGCc2uEUz4EijU53xh5Rrpqj4GsxAn",
  "key18": "qKqMsuxCGNqYdLHmLFLcgxGEgZ1ziGFqyHZ6P1u2i4VGBo5qvNJKAgYFsHUES4tX1oppKX1gtiqC7SUM47gexvB",
  "key19": "3Hfaxn4BDETV9cEJhzjPcpKuvby5GYfSFpgw83B33rcbSSq2x4BqUTYovL3uZP6J7AaqmeHdwyqRH12UkAib3q69",
  "key20": "2xeQA39PaT8soZ1k1CCyaFXRVoyTViUtDWoxYchSkuKudQ1B8gLH8tfcq7CLteptapfJNi8UWAwKaNdPrW9TTvqk",
  "key21": "4UmkeEuubBMKrTudJ7MLQouwcS7MA529y6oqDCCrK2eRXwNnrHm1nyX4tUvjxKaTTG4fez6KfBzpMKQvQ5gktfit",
  "key22": "3A8DAxE4Qq3WUG2HYCSk9oUBaiVCdiK8Xa8zNGERQUa7NxsE2ymt7WCK2ZPSxGZ3VT8d1iub3UB7yZAiFYCBBDsc",
  "key23": "4kWAvDMziJK8TfgkAqS1XorCGPvjZ7DnjsJGwTaC3WNQ9BZjxa2G3tfayBECjbnmTGhFFN8GaBvzg1wivfFwBoMJ",
  "key24": "5VtnTLQ91Bp6AcJudfTfiub5jNU7aYYW2v4XHoFrCedyop124XoZBTLii49gJQ34pvvcTZbWGE2o2VuaA8jjkFgL",
  "key25": "2V9dWVrYBbK1QUvrNXFW5dag8eUmLV8ndZRCdnR3dyPC9grtuBELif5ZmgJgzGkcu1CF6BPvhEkooW3TJHRtgiYU",
  "key26": "5J1gR9YPwWVU1tMRW6M9bdmR4uuk1FEoydMpfLn2vaxvYxPbp83AGRMA8VXFv4grH2igjYgemLuW3NYdaHU6dDZk",
  "key27": "omKmPN6Sopm5j9XUhWqB2y6udJqjDNS4qmd5KDFbYb25HpkNvVMyqSUzxcBgeDinMVZpyBBN9e86gfGgxrDRG4d",
  "key28": "2GDqTna96bStZFDFYmDo89PMvUmhEDprAihy7JN5QtqQYvW1ZWQyKrxnhrnUjrQdBgi3L34msm7aidkA1KxTP3cC"
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
