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
    "NEUrZ9q9J3EeWqz8ATQ2sLfbGiEUSpgBtFRhPeEnEATXcZ8Y7uRXPUoKUsuhPBKWe8r4iZFoDsgLf9Ldyy6c4Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBLAKZRW2NoPBoWruoLXy2sEyBtpwzfaVbNXdDeXoqmBfekmLRKNtxgcwycyB7meVTwUmo17tDzUYY8YFpzaVrz",
  "key1": "5KmUmXrwB3WtQhwRD74FmQwbvESTGm4QNAkXvpvRfLPQmDwJoZBk62PNd9yT3s2SZPLPWaMA7z8rcJ1ZRxKSYwzo",
  "key2": "2eeyhpEHupd7ZRJt8J8AxMg5e781G6L7BjvXmXwAUCtZwVPJuLsZnc5uxFF7bJwfAQ369D1hiekJ1nv7B6krXXkN",
  "key3": "6695p1eRAihFiRqDp6P61qZErKkNa5JfpMoCQ8inq5gypCf6mBnrnkeK8gyCxkSCXFQHhbs6xUPdmhm1nWzwJDxQ",
  "key4": "4og4qpZspgoWeXcYPRAKNfGwQs1EeLWZJF2itGjWrywwJTzqWFVxsQ9huuKHLzbjtDYUvKbPZTjX7TWBm5jULpwK",
  "key5": "yKFcPbujRTSZMyfF3Tp539msAYMSsv2wqSaqXXDdTJrCLKpW5NwKuCpQJhYkZkzWKHrYphGHhuGCK876SWWSJqt",
  "key6": "2nmKASnLm68w2DTpuUHVHJiCidyEVsrGCGR6YB7cmhvuiiK9PY5fU7diE8596eSDMwTHT8Xgm8n7B2yt3agsHYUb",
  "key7": "5EFhGwk2hSEChF4vSv3RwmB3nutkk2A7WHmrZVKVpx9eswkLcHBJDVf4Y6eTQgEiK8G6QLrq6Qg6oRmyFzSTeaCK",
  "key8": "QV6r7jQzW3FstPxeXoXp8wVeznFffgxeTHoGoMfhFmRrjz8FB38KbUEjnJ6qUBBJgC4DY16hRNwTgVE3kGH1kwj",
  "key9": "5JuteSBY6irg3UPtFgE8aYvQm9kquEr3xdwfGMpVYbDzBv9QnEugfcfHCoiJCsZXEyvsoWF2KRyNf2EeSSNxqUD2",
  "key10": "2anLNFnb96C5pmH4waojkoWisqwnfukmiATsnq6FZBzHbN5NjELA2GQkchUMt28xrRRJcTJwZVy3sJcaNMLB3tx7",
  "key11": "3NBeeTw75RUeCqWhWaV7UGswSAU99fLtyafySKwppprvqVd2QPiG9gG9UFMtbZKoDmznWLyA6XWdfQX8Qw3wNnMJ",
  "key12": "HLKYsqFGS5NNJGMen6tsP1FA7CTf3GMpi2dWxKbYpMjg4zL5dBQmnLgtqYQSSZiPPV4zFPZtJu3kgmBXo1T6Q7r",
  "key13": "3tcfWg1aJyxjEw7m6AcjGtappYsuRcc2Wc6FpPHqMTeuDTHb96KweCDTz7zcrDstsRgbx1WEPdznLHidna8keHp4",
  "key14": "3YnQho5pfEdvJtjvt6EBsAtcqfAUrLjeWPHrqhrhsuddh2zVzczmxfedA9SGtStuZUc9rKg8L8e1CSstDLfBtuhe",
  "key15": "4gRhwE4umaA9t12kCJJuQN1K1wbny71owMCYihLY1BRDYjQobFUoNVv6LNGez4VrTRg9aTwKJh9duBjoaUDaM3io",
  "key16": "3n8KbDkEGsHX2vJrBVeqLUygiqe2tziGgykWvAoM3aUjV6XwEWyksSjNFPzCaTPGnf6RXqXpyCaABnjbd6kLmWoK",
  "key17": "5PmdFvPMS39RVPhNtFXvink8vcQdzVDSygUeGNeGWxREpxFABNvWMcgHuu7GgLyN1i1BwiqCx94Y7qSwyzGm5V34",
  "key18": "3ag2XeiWuWvK9Em6Ep8g6zT36BwBshAoGmvxF6fDjXdZDHnddxypuNnozbw49iKCbBEho7YFXmZ2zLwx9jQKEtnp",
  "key19": "4wem35pQc14k3niCmvh1MKrS9BaJ7uTqJAhu9V6JqUjD7wFqPJvx2iENXhbYJCc9917Fyowtj6HPR7CyEybhZ9a7",
  "key20": "nb5vxKFG2TAkg5PKm14FDpDQwqbRdySMbvW1aW9zzwYSAG7Pqv1TdaFKfhJVr3HJec8KXpVMosoHGSNJzoGJMEk",
  "key21": "NkZWcrH5ZEQpXxERhCBeyr5689gMg7pY4CggChMBBJkKGLN8hty6FqqsEhaCGRV7XejusWF3C39UzJ6m4957S8M",
  "key22": "5eDs9XYCkewDFK1aGGnPtq72suCPMZS2WbCKdq5R5jFT9wxWFG9zbfN9Ws6izNqGP3oLupHSZjXLFRKX5aNjnTv6",
  "key23": "3zd4sM3CpYG9wT5yH2PPiShkxbZS7md2WYfcUCrTGk9ukjEdVLahr4RoewjwvSzVNuT6VQLGR37VgGsTR2SzWs6D",
  "key24": "2gD9pTUjYLSeqzxpmoVugnfLhhiYxTgEWqx2vb2LPHXnw5cD9LBvrpv8AFJ2gAtcFtnZHmtEuZYpAuFWDgY9ywpM",
  "key25": "4GQgAd2mfN2KHTLwm4xhrfX11ziJQS7R6TxNJcDPSSFBFNSiP7jNAwRM9XVrJnqELrBaEw3sg9N7ju3vVqNCccYC",
  "key26": "2MCHCGuKKAZZ4P9tKH8apZBAp86KZRLFapTNiebKCnJtiWMN3zyN1XTYqdd46C1EVC31p4vEBAwUD8fyJ1rqP72N",
  "key27": "4MdePfkZNJpbur8t3NpcsV7dpofFZbYtPJWgmkECjJzaiQEwXt7mckVCL9NRXX291x5dpANiy3XA9K8tfiD5nLZ6",
  "key28": "3McN2Z2gfdS9jJEDWFu1uebhCmwpjty1eF2sJQ9Y9RXhBRRW4rYshdEXxA7k8yt9aXTqLp4AjsDJfxCPJEbAWQFk",
  "key29": "2abar14e4j6cZ1SCxf58MwwDDDHmQMrzhVWwE5fXasApcF161KWhHZVp9gx2gYHGBzubTVNLKPF8jwbGS219oXip",
  "key30": "gsmTDpfY17aE7tjEaaNP69LUzoD27hNbDY3MJQRQvnrvTMYDEHS3oB6NVFh7j7dFNFYUYmjrmSmULPgzAdxuvCL",
  "key31": "5DWnRSdfZRP8panyWrcShJEzuQjmYjhBsFxQRsVvfxjuGmLX1QFjRpU9PWFsVBfiEWzY3knvfsRfJFJZa8SSxSKd",
  "key32": "33WizJLsGe1nASzrRTCgZCT7s9ZobUwAupvfVaezeC4pnBNzQk6Stq9kPRpbPmu6d62TSzE2dYrT7HQ3M1uhESA6",
  "key33": "2ji5JUbXjAuScXETohAghMNNx53T7qUWXQsBA1o45zWCiivHC5PY1U6CkecBG6yA6vgwNs4XLDmBAkGcHtvPgiZq",
  "key34": "cf4m1PSeqjxC51c7o74PuAsfWbERdxmpx71i9seeTbJndoxSEz3w7E3kp4GyZ8eBSZeAe9osAaPeYq45JS6cbqe",
  "key35": "cj2LTaJAXvSx7pUv9Sv9dSWsfEhiR2Q64HwaqmTV1RAZ2SjujVsSYBNMeCR4F4SZTpVYqbb6rRCtv6CvSusHZKG",
  "key36": "4AUoLBYvrCfEUd1X2eXSM5verjrn9QDvG9B2i7FWdY2RQWPTRKFckErSFWmmYxZmg5LRpyewkYDoPPy9i2LXJvCX",
  "key37": "5nfbkRKKVwkzTvwMi7xqSvzF6vNtET1br3BQ6XWExL3b1t2yDADfN3bkjBVuoA3cTWMK2MKh8sfMoim9ZhQf2cDV",
  "key38": "4xihYB5jfJKYJ6nxoXuPbtnwFrfweHxSBXVhQ51FU2NA9kqt9NEmFLcfUqCZbsr1tAdGM7FVcpduMZF4vbqQye4D",
  "key39": "5GBBXxyYgk26dxptLXsEURr99XTgHBZQNTkhMd6dLJXfWH2pZHmV6ifX6RL9CBX5DtfHdFVp7AYTSfN6uVk2ddC2",
  "key40": "5G2g1vnhnRRXXyAYbFpRGS2DoawqhmvkkbaumFwz4oFvGKLgVCX3qMzpdZ6Z3q78UpqVzHBusNM5ZQQgXywVXhqq",
  "key41": "TENBuvuV72fkJpoMq4iFhcDyH9xgLaAnjCyVvgYLJ1EtYquwXsgP4fxpxqrffbJ8aFbFJib9pweA8k2CdBtU85C",
  "key42": "3QQgyyucyScmUFkCBgG8urq7ah2kLu93cpVjVPNRo4KnBn1EQPY6u6nt63ufT9QBeNqYMdCoUv6p2ZUJSTkLbQcB"
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
