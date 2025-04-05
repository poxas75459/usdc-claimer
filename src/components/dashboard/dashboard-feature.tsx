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
    "5jRemoRaqU16Qy8QfSjcr4b4ZJffAiM9xGyw2TQYuhHJDabMcFaTzejxcPF9qFzfx41rEDHgyXhYEte9vuJdPZ7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7LGovhvKeuujmwAuQYAfPLm36LtrS6F7ryLY5hR9Bv7Kddn6fZ8snt4cNMwunCJBHLWbdmGC368hVVbpujmzPn",
  "key1": "4vfYscsXieWdMsACNMiDvzybquMbPv3RxS9DwGhJQvJ5H5j1kvhTLcAau1aLxcCm6ZBjjRxSv3pZhR8atE794S3C",
  "key2": "4gY7y8zBEHwYkpaPkUkaUtgqKNuLjoj8DtHKNJT64CMEaYzG32R8wRTwyRnCbC9DffXL52EtgwrTEQ5VeeWLKmb2",
  "key3": "aAa5GkjcQX63w2jjBT5JBEhqzjtABx3ng83qFH1sJzpfkA8sRVvoXpaDYCsMzXcgdYgrk1gpPcVmAxDL83YjjCq",
  "key4": "2ochPu5gpuezaY2C2TaBsrQFA4ehXZXyZd3pULFAxoGLArwePaDnqMLGEMKbhmjgzDWVQmaKGVDaFdeg698qiMW4",
  "key5": "2okujmhUtptR4au3Fh9bNJ9ALHiCZUQvdtSw2rm9L2yFFtg7EE8j6YyEmZRo1WagufFhg1QQSfr7J598ySBvNx4a",
  "key6": "j5qtMQGAicFebE97uzy6LYtfQeftwcTsWQHa7kHzcPiGb9bvTLHgbEAgta5ntdX8FsCK4WLVtMgY7AUNkTXUaoN",
  "key7": "42QKmGM1Tvuhtiw1KzrHgWd6J4kvU8SLv1u8wje5mcCdnPrFcvNtmHcWijBGkMjJAXeLeNLewyiKGm85WbZintxw",
  "key8": "3eWWDvLimmgXpYrwbnwr4h1E1nCjgQcvJXqjp6G6ZbnMVUhHrSBoyrAMWGryCMBcTz2xVgpZLfAemEba22SfNmzT",
  "key9": "37zP733WavPZrcB87Fng1ibZfgHALveRKJeXjeAk3MT3Yt1q5ZtdXUsybNNCMHNHutbh3qXMWbe3nbAR4KZgEZNa",
  "key10": "3SUMXcsDUE3zQW8pDE5Ah3rHmeac48aEXrgNEZTaGAM9G4AWR2AENkQ7c5h94T9UsvYvg3XRJXGe15PF5K5oayj9",
  "key11": "33jKhM4SVdcJXnomVBrN45SwSDjCs7LGKixMoXVKSrRiKDZn1xYyAWTfJMfpGVQVdsAHfKXExKr821pAWCyAMzwJ",
  "key12": "3X3TMV6w6uXFXVFNvN9zQay2xBAVQWsR6wENNghGGnPfaV7AN1z31k2Pi899WcKY4npVhab9zdUNNBh6sJK6mj1b",
  "key13": "2qd7oR6MpCHoCi7GFcEmGFs8GKCoVsKF2rny8Hm6XqjS4fRXx5gHTnKs4u5eYyQ8cwH98P1PH3PYAnWVFrForDNr",
  "key14": "HYNX4dztKcUSiNzHw3BDFreB8YjSKmdedyTofBwh6gdQ6VjiCmpf4APyWES2RQPyGo6xe3AJSAoBTtiT6EVbz9G",
  "key15": "43SqT2SZMH9cH2ybQhJgZSRFrhuT6QLE5KRKsTVgph9xGQTu4RrDxQxz6512GfEWehfHRntmarcT396PVZS4xumE",
  "key16": "wwFpPqh5NWs9oXHf7pAHsvfX4F5CeZNjC1n5VWS38LtoLmqjw5btLGWH6uk2ENeRUNsY3YdRRew4yuCX7tA9sWM",
  "key17": "KuWfNKjJdt3DrHcaBjHiHGWLKEJGh3cUKHH6tF4gUmfnM48iwFMr9VUyShcWvQRwD8WNBSptgT5guE1zKfVHrtL",
  "key18": "4Cs4AWfAXNAaShPwTETLH74yc52x9FeH5dEAmNXjKzunxGuDub1cj8Ti5g7iGnvZyoRRnVACPEaLTjJVHDqcgas1",
  "key19": "3ej8RcB9turSbqyMbHC6xyD1hjXzdT2orvX94jQJ6pEWBKCERGy3wsG3b9GEPCftyXLuR39BNQ1tJgDkQeoeers",
  "key20": "4gAzBBGgBMvaUEx3sfv6osjT5qhrttGNFq96TWtXkZNxREV5FPxhg21HQBvye1LbvjLwReL2bFWz2MeqUbHF7rZH",
  "key21": "6jEQsTuGxeHNYUJKPE8f2QXifk6BzFe22Y95vj6THsDFcGKGFMFztCtEkWDSWaQVv9gjPgjRL3ZAK7XVoEy3uLQ",
  "key22": "5Gn1fHu5bYevYJYDfAzL28NESEGLAu4tUEVKgYFmuqChp9g7EYzMtFhCKWvvkZ71mkhgA1TqSV8z59s4UBM8J9z9",
  "key23": "2jiyZ9kT3EbDrGFwPqKrkciHZVR8YxMr6tx6ruSzUGUA8955t5DiSzKddDjKYfniBiDvvHEUDApK8owRHLmR7zuZ",
  "key24": "4LhkpkPiuEgSGbjW76mun5y72kUC2eyr45Ksaj6fNRNy5xZDHyy5WCixLC3g5owFR5SDgTpfQCH96VPZP8cafsvf",
  "key25": "4oUoJN2FHir1Hqu8AJanpgsZKLyRwfUBcroZXZ1NHiX3htQvDh5pCMLAGs1i1vqX6iBvizvyLCPCNSE94JQZyFxV",
  "key26": "4616SYCUkL33kkk81ejJc9jNbh9AWqGa67RhD7NLNEofnkzU8X1zHxYDa9HJGVvafaEzrYVJYaiKgFs4xjyrYF1x",
  "key27": "3ZdJArgCiVWk4TSJdS3gvbfPicsF9ndfC49mN3TEzxM6jDHVCXh1VwrWzy1teq1EQkJCMo7HBVpkLYqBfznwASpF",
  "key28": "3JqaMF9X752WCSVViTaqCijo9wyigKVXksGzLTzFG3UBQGUACL5jTwjEgr9BmoFuF8Z6QQibNYDQkw7LbxLWGGcs",
  "key29": "5xDwwqmF7yGkrUaBf9DtJjq2Z1rAwEhC13MhiNZCthKv26DD6KXEwAKkb4Qy2JaPj354ZxLTYnhpbWii6yFHfVWf"
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
