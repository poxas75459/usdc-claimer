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
    "oNAbd5aco35WW1qvBmSwWxhCUhjCifuYwVaA5UDvHtFPf2VHtz1FLkf9FwyLBbr4PmzMf1bLsNbZYVbdfaefvHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZwPCKw6PBjCkb83qmsLWwwE3BztCrMrLV5VLrUZNCH2ZYudshGSAWMXRkyuBz8R9q5MdVz7q5gD8yJcCJMEiay",
  "key1": "2o2HmhFuMVs9ToMHep47QHsZTzpuBxYsXPEeFj9U7BiB8aoXd6xAuXF3Ea47evVDyprizwCveUDre1YUbkXk595N",
  "key2": "3emQUTer6SAkwg917q62K9XzWxWWc7mSZkLTYc2AFAaqVripkbjM1mkPEM2x7sZTBjY4F1aBSx75CzLUEx6EdUvh",
  "key3": "Njqab23Dmd6D2LqAGTyCdsoNgXgACuxLbrrBjdNkUFKEnBjcDHYaKSnNGKLoXsf4Ku9cmctt35hM3KmDEX3Y1K2",
  "key4": "4urEmQtDKVvoToHZmf8yseWgwtH35w26NFdfNebd94eJ1pdPFPG1YtLNu9zBJd8eJNDpvTLcsYzL523egW2kZyqY",
  "key5": "bqcDDYXGA347ywWm5zyQAEPY8rDDncuo3YqQsYwuZxBZfy7Dmhkz2A2ocMa6M2bD5fJw6QNMKEdo23GmvSGv7rf",
  "key6": "4w5Cm3f95ajTYvomR97VmfABCpyVb8XoUFZJC7eU9EiWHjJwKbYTi9RTCBjxsJJoFKNb2ZSvJVLmqk8fh3AuKp5T",
  "key7": "2xcuszGTGUeWLW52yqj1buJC52cf7GyuU9pkQ5z6nA1ektVVwMxrv2AKbCofrk6oXudQyZgniVtyPjtLHkGkaPAA",
  "key8": "o4uweWA86wMgbz3fveKFHs4pKMrSgRgn9RmCq9mzwdjEoh2Kc49KvmszG4g4Czs54RBDPxEcJe9aRkSniLPnQTH",
  "key9": "3vpAm451TnXWivXyF1PG54j6eHw5e3LNkhLoYYEJHykW9GJaSQRFGPFwSHZHJ69UkMyESSbRhwQQMt1uopsChYhM",
  "key10": "5kvL6Dt4RphoSTpTzryyFzr4k3zUd6kuV6ojBkr88qHN3gwovSx8tZWPRwWADWRFahzqUUTjcM6zmSzPXZ2CKqWY",
  "key11": "2EBzjcSGvkrCHHbMh2mpJgPR4SxVbGjBQ36GYohtWiqGQnjy311TC8AMSn4agSFNmFzJpsrAFvYY9y8tP17uVAhR",
  "key12": "8gtFtP3zB3wUqQgVPmL9G1GrVrLnMH25hHqvkiVo3afz775Z4cLQpB7Y8VjteFRL5Dj2tVyNyGmm7Ddm2nTSCE2",
  "key13": "DR7CaKGfXVHDVKJY2UCuaYGg3AmsFVYDZnHRr8RyNh6ZFYGjKre2TzJiiWdbyhHmxBdeJgKztBZugUjEndaA7hh",
  "key14": "4Qs2E2aYpJ665VshcgXRHzfZ7YdRL5H6pfmqKRCaaPLH12P8eGYzFaaCDbn52paLxHFA4oJAzs6tuqn1UoxpFZk1",
  "key15": "36nLSbmE8z6HKJpvkEgkFbtyWS9vigmWYuZwwW8Gb1mHAUTzF4J4Hj5QneCrVRgeYAhfBB8BBSLDp54o2EBvZKZU",
  "key16": "4fDz3z1bX7LZc3FWH1gR5ZETAfGRjKMd4pUomTZaUGNdetx2kysnsqGJ74Uv4xqvTbgPSHzKmnn1Fr9VULE19Wkn",
  "key17": "xjPiUFdMx5RQNGEt9jkZPRc8QXKk7RtEo5k9AjWur1g5n7gGh1Gd1q8DosR1PnBVYSiu8jqUuT7mG4ZkJU4FiAZ",
  "key18": "3yADR1xsLxzQhLmdQL1fnsVmRyYDcJoGcXqtecNktaqTz3bP9cdMgM4tDbiYNfiaLFiVK8QEqLWb8DKzcFhAZQab",
  "key19": "3JQGGAtZEApJkRYXzj1f9WZfQVxF5xG8bKgZNyqaDhprTJ3y4SAJtNSsxFmsnAEUfJGCVxBUZQ3UXJmQkUhXCxDf",
  "key20": "3wtb9pRJbvkxsy3B7ZeKX8QJYZiFdEhQUiGhT9y9qBUdmCWXpvmiweEHABwsqDD6oxUJbjjHAzQinHyYihgZs3Kc",
  "key21": "LfewdFjWcpY3hDA4aiuVjVfQS6ZSRcq9JqsaitgMkgQtJRSqyN51VovhTjXf1YKDAMHaKFnYxfHa1nVJwYho3TE",
  "key22": "2qpPaByh4pczGYfVvvFm5DxzNgPYG1Hik2vJ2bwZYiGbL5DpQGsgoJMimHjBwAY8JtVHX33XHfrwvaaRMmaQ2HW4",
  "key23": "4i5359Pw7RSvVHXDyZtQZn21n9764k4WEP6DwdjYUqrDxLziMgeFg6kj6jssQFac66FSgtakAhdBseCFnYZXNTWG",
  "key24": "4wmwASwpzCXbSLHiBZRTcmQ3y9BCej4fnG37Tx6d2M4S5WNQkxPnD9dkWTHL3zDGz7jNy2tpTb4e7wmD2euBpS5D",
  "key25": "5JZRUxN5vEDawBYL7x73PF1tPyG8cXymbGnEeNTAiZbKNX7SRiPbVzyo2dM2D5mJpZfHB2Mjy1SvidfTri113yUK",
  "key26": "5ovFPQ4sEnmFPLskWRZktuLQGqPVzjzxMzEsWDUBmZFj91tBsgeU8u1ViwcNn1BjYwHjE4rqtXYennKiTFrYaa65",
  "key27": "5eABYWpoMtFFa887yXigUfpyUiv27ZNiiZQKyG2vLoQpn3HzWJc7ehqhL94dLvixvX2LgQHqwQujp4aA5mDUnBmU",
  "key28": "65DLfvnqcAiftVnVwaEjP2rvqX5XFqwb5uZE1QQRgSrFwk4gRCMzpRZ65v1AvoFBum62LstWCH5mHdTVzCaJMAMy",
  "key29": "2BAJNo7qqAMUdTsGrt5gjiatQqhqCv6R9sm2GTuEcAxVfp82JXNs5pJ31dv926SGXRF1Zg9vi7X2DiS2jpEmREYf",
  "key30": "5frTnDpNe12jMBE5fr8fcGtJU9xaMzELt622snDpNx4PmsUpDn1PYdda9ciYHzJ4SFpWWfkScBY9thsUU1ryQWQn",
  "key31": "3FpNRXGb5PnrjEpWhPRmdvgpw2fnEzV8pstJNTm6kZF8GPYA1D96ZmPhFz394M4xdXKKVHSsxNUBbeR7f814t4ct",
  "key32": "5jhpcNG4QXnhq86q3qX1PsGtH3V8h8Gxw6Qgadbdi9W5KPJ6HnB3gWdwsGECKZgux7EtsDyYGgBgmV55s5ikhJEu",
  "key33": "2q2YCDRzmkkLmNyLeAsUnRf4NpDCRiv8b4qkSksYoZgjFmd2LS1yP1U9yiU8NPQJZTf51hXJWNC8uj8Ao1W7q5uR"
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
