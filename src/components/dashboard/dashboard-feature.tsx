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
    "5vV91fRCs98ZMSG2JQTvXMV9CskbVbTkF3dZq1hrRDuqRj2Ukq2P9ZVnMwQoLB7e5QBuT9g3KYMwXRdTKTT6FgT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SnsHu9q41EKuUwkfxxSojW1fV9exwUmgMy4dF5jWw7WHo1vzn4aPQYL5Kdq8HadRXAEFwV7hn4uwTY3p9KfPM2",
  "key1": "2KdKEWXzRm4BrcdE6wSRnaQzggAYZa7g7a6jiPxzi8PtTmau5vXdXyH89XsP6R6fvPMNEw6gdcfdddLbCoVcQbnK",
  "key2": "35uDrDCG86KqGfqkn6ESGoucuSGsgEzssNUsAr8Sy35ZFZwWu8NX2uE2UfQWAECcqL3UP7bkQV76urRPif4qqTPY",
  "key3": "4FgKM6EnJTdzH26oDNynKFNzXaZLC8VfriUNgnngBHfQwvhCumsLK3EM37AmhCCH8T7nJ3aVHMpCvgLUy15NFMVT",
  "key4": "5E6ggoL3v2SbhATbPeAVkG3rHVpncmk5bkdNh3FZJHz3eoQyxAHZsiGb5WcX57hP2k3JiqitZzJytktoRyEm1tpD",
  "key5": "61oCCjcfjWUuk8NDk46LfmRu43gm23iY59Bdb2Q2ukTCpNjYVUReioWoQkVGpnqMAkgZA7V5vsa3hhTz4KX12P4f",
  "key6": "3P3tGetJxY4Ws3BqqQJcrY2Rse68Smz8pumPWkt92ydLjJeCbF1jm1kpeEkwai32qWUxyBy9DfGApUoZNsJDidkG",
  "key7": "vZnxj1LAizkB9zKspQtCTC251ibbJSNxWrdp4CbWGBiD7sAXU8Lkx6zcXXnJHWFTfz6Q1umm5bY25ewXqPnW57m",
  "key8": "31UMcTAu3isqrMSxhJcUpyMKFPtipy7syKono2RUdMMPQp2qFWGrzGAXcVMb29NqVpPrRnM82cxv5VnEcey1TCdG",
  "key9": "2z7X8hYZUrWy8MoR7J8PVWThczBgwoQcKN2orARYRPRHXcPYnaX6pvgUpas7hCdVQoQpMesLjL8nT1LcNC188FiH",
  "key10": "2pzQ3noHedSuzW6QdbBapo1vBxWZNavyewvFErtXHCrrRWK8UZnfdDGLSzHzjYvmu3vrPkDGWwuFERE2UqXUmdEt",
  "key11": "3DJokwuc4WZQYMNNUmsh455h4UBVzY1bjUuUkeaCNfqGjtsJk936AM9TnbWy4hQwzxkoRc4ZPHVvqDQW7TTLsh9K",
  "key12": "2YPfyczYV7oqV46DqxA7mKzdiPKHfHDvJtNajvD3zVnWq989dgT8UyiiSVoyKqkNXtxqJyCd83zDoaKCQ9sJgJvT",
  "key13": "5i6bPXz6bFcUmYCHkk6Xh2jVNzQMxXVjALjRhjWD2p4nrZ1QBvg3ZWjeK5JL5Bd4bSwRiCqBZqrrMcoVfvKQ1FXt",
  "key14": "6o1H5M3ufjfJiJdc4mUNR1bSN5ueBqTxn7YbdctJuoKv2j2rndJybscfaTRE9qSGSCYrd89bDorahDgNpgpAkLa",
  "key15": "5sBu7ooMQEUS8snf4TUqze2og5Ev4YH89w3JV6hUTydx7GbYjHez5AnuJ5RZduAvKt8p7ZPg5Pd289TJb3uSosg3",
  "key16": "3DbYG4WBBxFfv7gqk8xH9gVzsfzycjQUmsq9f154XZ9RDaeuaVguVY1TTSXh1WPGF3EGFL1AEQ1LMCFQzRBRH8qD",
  "key17": "4kTmwkdmABqh53SHEv8mXu6qJ5hvxqy3wEboxdgEsU7ghtGRS9VoQyBkT6qb5P3obkX5YUWNoDqtN7Zu73nz1u3R",
  "key18": "2d212arjoS7dYNukQz1JNDteTau5ZocC2xWZhtRQjD6dnYQQ6YEnwaYkRhCZsrAt2eUN4cWQZavkWYFjdPteRy9g",
  "key19": "4JXX7h6enCv5NLsU2digHbKf1Ve1APpyhzwtujUTR4BL2zW6nvennAZkPCgWTq3Y7qsbF1DzhgMCHErNUbtWah45",
  "key20": "PSrSnZtMHFLXGCrNB5j5AfxKCoZwTJqmh83pGe7PbvLBJLH6GhfgDgZNYnoqJ7thfThRMGNDuiEyZmufkiz4maR",
  "key21": "5UabGG8RmSu4QDEunErQnZAzDNAr92bYL3a59egKzGPtwine2vq135EtSXrsu1h2AruGtJPEbZjMKobG9HTPrCBj",
  "key22": "5mzKuBVd1zSGnGCrhfX1jQKZY3xG29FnaW1CB7iBqfiqoyoyEGLZyBwMWhJhmP8nMwaCbQw4XanGy7D2yRQfMUzW",
  "key23": "3L3LVYMZjbcBPhmeSRYthsiN4akmCxNoJWrEKLuCo292tyzhh1FzfkT7YbShFtmXg6onhmaGY5QVPZkKATR7tGNv",
  "key24": "QuHyUSJMhoqMA4dhfzEkbUUWWEsL6qKajvpznhHTSDepJzAYLw4GjwPYvG37mjEPX9DZ9o3B7Y5dZrndR9U4R9c",
  "key25": "43LFuC9rvWbS4Ry1Tk9g5ypSeLWx4YAW3Bv5yQWGXYL2D8c753kreCwd5gbdknagSKe1wryWEu5ZmG2V13rS1Vjp",
  "key26": "2vS4HWhFKMmmUHwKA43PjoG87Sb25eH1AaZLaAWzm3VpHcJEEj9V2fAGrRswcFJnfveAWZ7vFUdJJccjP1dftHxj",
  "key27": "4C1p3LCGBux9r8oUicDF3tSKWufkpYDLjonfy7U9oPVcpoaBVNLTeuVdHu15kBThQozfLtszyMzhT7HAiKTLfNKN"
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
