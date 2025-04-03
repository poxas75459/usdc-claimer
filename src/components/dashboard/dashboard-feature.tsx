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
    "2m8mAvNcaLzvNkuPXBQzwtmtScypn7aDe14wb6TnTGCHbKr8proWqdo7qypcVRSxiDVdo8uUKN39agfapgwFvozL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m3QHUokzth7WYTUCmezL7BeT3dWzAhLwCDjjqzQZCRc8vmJGQBZ8q2CcRR52GYki8REzgof7FLcEJTCpasWGiro",
  "key1": "2FgVRCmxFPw9EiL2n42xGwHJu5VKE1qQY4kSYSWwv5BuV3mPPZKiQpoCLBYh84dU9mg39YJQhXtPyvwucWGVL8SV",
  "key2": "2ZTKgNtwGzNmtPqR44HkcPXddsACacmy1sjWYNTZTFWMTZf4VHQWrhjYBSQFUL2wGCwMiaJbyMD7619HJjzxJmjM",
  "key3": "3cwMdjpuCUjkTCV3Foag4X6r5sxgtrfvkWawXwCp4A6rCrzXFJeuNhr4cJGH8aKrXp8HVBGjhxxwEsHAFAHBr8ZL",
  "key4": "4wwx4Sx9NVPBkZJRciNKk9UGq4rbmqHFyA8NTpcY44KvsPAxvudNzX7u8aaPZbyc7hgEy8qhS1E5YxipLBTE4oN9",
  "key5": "373AYttXYnxsPojJYSVcXwwSAximdS6zCAG4BZFHzFv7HY7gwzRZqJtPqJH4TZ7V77R8FEyTmgH7Jnw8gSW4sYQ7",
  "key6": "3tQXezvmFfT5rH3sfF81FFBXJh8oa322bWTknhQ2msABZFMtWQrE9Vk5ettUamLZmTQteWp5LwycX1MmKVJsf51T",
  "key7": "2riMtSM5Bw1vnbQPWXR62iEnRikp9Pv9TKeFUqxuUArTPee4EZXiRPnTRKyLzvNNpM5QN2UqCqSnN4c4WNBwTf3B",
  "key8": "2KzBBLud5wdnoQRtTRHUbwvdNTnriTxkzcwMasDxCo9aMmRCe9PghY1GD2mAm7iywn1wjucanC1FtmbfdZEbtuSK",
  "key9": "2a4XVfcu6Ta4ns94nGQ1PVPx7y5MUpQr6aEmHwVDsz5e214TpbRRjWJwfSEYNnYpPSyUpqnN5sYbTCSH9sKDhU2A",
  "key10": "ufuK3hW3nBGAFxTJ9gJjF6DrYxCsD6z8fcckuUxQuuJ5xiSCgZfYSCs7XWk4p1uX5fxM7NW878KCRzgGSsSjKJj",
  "key11": "5pPbmZX2RTfa3WPcgeKfUBJXavtmwWXoAkcmN7kzY7dHHzkLgnwzyTNXwCEnBmyfbR4tAZWcdiK8dCESNkMWY2Y5",
  "key12": "2AxwgSKC9nKpkArEBB2EBizs2hX3jz7YHh4bEPZeYmfkwpXQiAUzUBT9isCBiKGHaSNURrUN2h6akXzkh49ycdL8",
  "key13": "4xs2VMiJQhJegDA9pSFhXJgNRnXZtvH1CdKPF4mGg63vw6EXH3ecPLWh15e8J5khqH9fLaYH2BhVd2azaBbM5tjL",
  "key14": "vPmynkoGLqXGW6sWFST9iY2xx9bMSEjJVubE1jfcXjS7XAcWrQfyhihTAJvRcQgFcYBjgViRbPDzYGWGbtDELuC",
  "key15": "4sEhdKpwbjrjf2bKreisJ8Dj94T6nUrtoUAMkN3SPU5kTYA841vShLLcAP4MNAyXzhDB2YxKLuuy5HtWWHFZYKtp",
  "key16": "2FwVarrVXw5fgxdXmWF527w9QdCwF8uLKhiSS5NYCjjNVa3LDtuz21TigkrWvsfWUPMYSzR35B3UPjfc7qk5fA9p",
  "key17": "5SAWn5u5zyuCKs6X1YVxX2WydeXoAkiZPTz2syn7dRXdNbHpwmF8CmR6PDxrycpjpfqmbc9KFyrYkcPfxSf5sNRY",
  "key18": "5Etw2nmxv2PSuTVLXZ9pmGebumB4LtuzkCmpvGwKDpWA8ZYxypLMrLmAmVkfWbCnQC5gfGyr8nQ4DdbEKt4wZdaa",
  "key19": "61qrordECQ8Tb9dHf22EDm9brYwpLKVAoXsAgHjzKCLp7ZoD5fFiApKZRgk5HXntUn5tHH7JG5FJUD5Fk55Km5co",
  "key20": "4bqLoYZdmRRWgSYkEckd7F7oRLo1VcG3Um1Goj2EGxcWcMksLZKxW7ZoXkxatQo3mAdfdxvnQX8ApjSs9WVJAoZ8",
  "key21": "qmj2K6mFZREFZPsHK9eMqFDH8hKa4xphMoyp1ZSeHqLXAnyRvsSwBTW3J5a4inS88YTKo8jRkFdFFGE2juUEfq1",
  "key22": "5JJ1TLmBSe5gvVAfv9RVUsze14mD8hhtAEVJqJe7TyMDfkypW6uGH8LBHzXTeFVTpM46ojdBEMH9SMS6pcrYu9QY",
  "key23": "3fmAJwXzJfm8xS6pK36MMG2cpqdGAzB7GPQ5ACdpfepBo7JFLvAwPckv4BpXoMfHAnJAY8AwU9gkBFMNhqB41xtY",
  "key24": "3XHCVhfD9xqYTm93KKDpEBSBAbs7ghuBSpq2mgVP7si4aV2ToPnDWWqaj7sAzXAzwJnACNN3MZRN149Dpc2isHtH",
  "key25": "zQcaFxCvHMy7pYBfysxVLb9GnE5cRqvMDejDJFxxRyaVa2cprV2LvbanYagFcq7YeQ6LNE7HUWFu2RbQ5irZfeU",
  "key26": "Ri5GVq2ZWv6nbcrpNSsai66qMRRG2vw7hqH2mT5FuaSUEUvxgp7xP8qCmSjLDGyhqgFzmtQ6Ah46mbEhtdusMMK",
  "key27": "3Qskx1BmEjGMBaMF9hV1HBqfaLAKsCeW7eGHdA9rLB8xbLCEUUbytDsB26k7MGfvKceSAUbZVkW2cVZjhHHVYUWu",
  "key28": "4D88jJB2owHWSJWJsq4qVk8MEQ5kANgLTdrETw2yHLHGkPwKxDbhgVxPspZA3w5pZAnY6G8iYbwEiZvZUJVuGU6c",
  "key29": "n712ZvQ33gjjx5GQhsbNbQieEakM3kvmg1RX2TtfUuLEVr24Zgvs9CyZUitQRyEp54AEN5SFSW4vUAKDDXxFj47",
  "key30": "2DKMev8ZNLwBV9BQpNhSG3Ehjdn3uCLEfCiZxA51gMqgZdKirYDKc3ujs2a9ZtYv3uXVQ4UbWGQQXkEfAzRCAicV",
  "key31": "3DgpujJRZkrAjeMqbMRYx1grABhTTFhvyZGZtFW923kfBdsrRU2axTxRbKZdf6bVx2WcGpqBxEeif51ZaLTWrjiW",
  "key32": "63CCtro7Msn1wWDxy41ejVSVCxhQYRWp4k9FNy6T7wde21dUytiKn2ooZwdBpv21ci63M4BAs895gZj6WSFtYHRz",
  "key33": "4YjQycvnMWcCMJJHVTwm4UtqywK3MNMY7HXbtvx9uD46hFt56zzLMJLEjbFxjHqeH1u65JY2jHoyPNAYgJsCkbRN",
  "key34": "5eDdZAURngGiGEmLG5xBGxYNDmg8KhqYLcRJPCUihkjt37p6NKbiQUHTwVYv4Licoz95UttBd5gCRB282Yv3SLYs",
  "key35": "2kHbmGVNLwhrPwkwY86iuDAadfYMCXyh17W1EDB91svjHxi8TN9EEsfKGdsK6z6vF3kEarexT5Z6cNtaY8HFHunf",
  "key36": "2ob4QQuJfhuwostACMDHazeFL99MEMLhTcdt5Z9waGBBWkUn4XAWxzFLb6AR7R1hAC1WSG1RLZQHgRwN8V4EH3XD",
  "key37": "5yXwE44StqkH1dyRSANcqEmRFvvfYQQjik88tQh12XrLWaxozaUa6WMLrAUMXeNjHST9iME2ska1WrY7BA3dKKxY",
  "key38": "5EcGiLMr1KQ5vAnNv3jxr9tXndzAnyfpxhPQvQw3aFsRT9y2NAebfM7v2Tr4SE6A6wUcPHgjKqVaqHqqJqhZfEka",
  "key39": "3JDadGjkDC8YvUHXDVMUCFLoBBKWoBs8qcvCbDgdMU45rc4rTK1FwvFiHqhUNTCkx5BBzATB1m5TZE7MhHM1vvog",
  "key40": "2zMkPjjEFaQvVLrF2VnKkLwEYCXxPsajg4ui4b61CiD8EkQpMFtjgoz2Lj5FhYhabaTUKsf7S615muh7KrkH2Vub",
  "key41": "ZAMeziKWn7Fk2NdhmPdNV7jeNb4MjFiCMyUYgUmiCtmydPouTWffdDSBkqboTwfraayz9zFVWdfUxTHXorGXZRP",
  "key42": "37oQw7WZSTztTzBYnCv6bjEm25nm3KhHQZFmEKCdHsdRbnfBkY65SFpetXTAziwx6M2oYakQBHid49Nv15k6A9V9",
  "key43": "uZeVpK4mUkCA7RKL1nmB3THM3xckdkmcdpsSzE7vAMkUDYFZVYQ7rSJkX5rSmM5ZBDQ2u5CjE3XvTgpPZaQqY3M",
  "key44": "2NYKwnu2WW2nYs3vwSSxfm1fiKan1vSgzZE8zoNHv7XrTWC5KDmkveFNo7wfzDwbhJQitcQsaMs5vcX1nHBvFsJ5",
  "key45": "gF5ha4erXDCVSPT7CFmLhD2CdeQAA4P3xjGEbGF5YZM9QECasTh8UMNfqX64sWEdwk2HZc9iBjmFFqQ7u6hLQNq",
  "key46": "67S1HwnhbRVkAuGxvNfuBPGMUAizNNaBJd7rJMhcSpocS3xr7ancGdtTqVGJHGGUHPzTwotkVsHmeqJbBd1UV7ed",
  "key47": "52Lrae43UYVeXWP3KMzsHQtYgtvGJgUCHWGAJTexqKU2FJcYhdNMd269n8EDsMz2Yyd13A3KYrd3seEdrUPBTR56"
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
