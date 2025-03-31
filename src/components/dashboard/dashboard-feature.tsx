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
    "2tWso5L5MtJKUm8LMyM8BNaxbWd3RdZ6mQXLEbsM7f2VFiXkXmYCXy33MW29DivXS3oJiaumqnpLDWaarLhTW6QF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JD2cusTUZUNc6sXVNrSK4QUyxnw3gJPADSPT5qJ6PWVba9tjz1H8Q3Ko2avNDULvyA471JJFxRihPAE2eVpLB3w",
  "key1": "5Rv3nHke9PVCgu3bqGU6Ekeve1Tci6QPbfx2N6VBpM33dCt6baXTQvBhBMBk7Vazq2zEaPtNFnWakJwuxN3U3ZNA",
  "key2": "4xcCXURs2XwJKs5zhEfhFaUYUNwSMC55RC9zyMZ8e3ftmmDtrWjSJSdDRAfiymwwYomNpss4vdVk23nrhGz2R3qp",
  "key3": "3NhgEE6wqVcSXP9XfJsJ5xX97jyfKyMjrk7fdLZYBmSV8MN18Ba3vKEg4PEerwaLFeRjHqb2SVxWtZdqonU5XYJ3",
  "key4": "z8YeP5xWnuRxAkK2XrBYTqfaWvoHj7TxtJewPEn4XnerqVTN9SZEu4aBnVWiS1KjiZjuv1YDeSqtp51JxsEv7py",
  "key5": "5KX3kSH22PJNbaZdsMHxkZQHsjxKfheC6vutULg6GVXC54eoS2ENsKBzPA1FZVNvoePghSUK1BDWSqbgQou6Zm3d",
  "key6": "FDesbnADqzagWnryryCMTcY388xWmupjXP8DcHap3FVpRHEKmj4pcsUwaV172KfZ3F895bZgyEVrbeqpyMYAQgy",
  "key7": "KmMH6uhXoJbNiyYn9enfJAQpaq4ogntj6LXchWfvmsRGEDEEGRoJHQ9nuJAPGTycHav2UcWUiVgG3qGLBoCa6Um",
  "key8": "4VQcvErTjVNwD9GoF7iyNnGcvM4p7t5K1Ja8ThYvxg5ygVhCKw8PbwQWSZLG9HcWNqHbdjHpJZjSDFid2z3xBTKs",
  "key9": "34vSBb697kujRHhLjf98CU749fp6hj86pMSfUGW37pMJnBBnWNx74nBqs9LDtCmzVx77f3FoWxHLpjyrPFRduxwX",
  "key10": "5p1ZdotdcVpUpACwLg65YmRmcKDMh3sBGkBoBw6NzadN9CPFMXFfyRjiPKz9eFLikB7n9dPZP1zZgPUdkkyTdKYe",
  "key11": "5nThZ9gHJHWzZmxKVHB7aLQZmb8TP42q7chJPG9LTnMHeQtaVJu1EP3xWS46mXQJjR3dCto2w419w9at9YMhNZHP",
  "key12": "4ckcojufpmv7sKPzoEuJ2rXVzSMj67HyjrUfBun4KSPtWvaA9jbNsCD3EAvUhzfvDJxUhZAxTZ7zWrJB9LvjRR7M",
  "key13": "48pizYaTcq8TgxWE4Et3wiSmeBvGkLJEysC3U8nTeeDt1Ngf8tpZZdVQDG8rKtdtxP5QFSVRngkm4WR3fPKFGhfS",
  "key14": "4iFyGjMxcqq3CP2VB7GUi26aHwCMFYhGUYEQMsEuGz6QbAeGZuC4Sz6fBdHGCmrHYXcZYiQwbuq6XgFmGhZ2Hsdd",
  "key15": "ZHzqqE3z2ZDZaRgSR8rnG2KpnxrKtXwhwTE58Xwz4SrXh9eHhy8W2mev9vUFPirGxUEWjMeKSdA3XndEps3UNoe",
  "key16": "5JCnchCVTnLwUxfQqD6uuvdBVSvpa4e1uEEqFdnSfH5rrGudYpg1FGFzHfo9LkAnu34fyAzmAEyvnFJWak7ifFVq",
  "key17": "SgRtXCqPBzk6NZRnh4xcv6YY4kKVfdP1fCeP2KvuKKtFzxH4TrG98TWiHWRhC4nqaJdua4LuLg6SH3Pei9yMwne",
  "key18": "5btTufyKJynJC4vycPb46boLcbYAZnrUQvizp69KWckcntwwEgsauY1EdnkGyRyuYjsSVM2SGb12mJbnYsQi3q5P",
  "key19": "24Twx2PX9hFXe4X4ohTRDup1nUrAdckNmUbvX3hfXnGXoabansGUcwoFEYBp6tXASLZzVGM54rcqUq2Jzj6tpGtK",
  "key20": "4w4LT1o3HmiAeJ2QxZo2rmomb1XA4CtCeAN5YVxP2xazKAPbRPKanfy9NaJ9kkF3AMHJrw6m4ZzVS21ZPgRe7E3U",
  "key21": "5yMABsJduRLMXnv59xwj8g7fSjiTWtcNTtSQWpbNwTdKApdxdKRXc4VZiSfuVSKmLb6tfBFtJ65Y31Q1xcrc9qat",
  "key22": "4F1nb8NnaYSNTt4jS4pdm7zumM47PmhTozP9xUbT11VdDr5jZzdsomPLG3hsBhdnzDVqTrn8iLtJaDK6pSRgCAgr",
  "key23": "2NmuSsk9UaeN2feWBmE4FMDjn718c5KEgGHoGYzuuL9jokmntLFjSaDgNHyqFXSNULgogDN4f69iUnLC9EiTnEVu",
  "key24": "LzDqq3BwJo8tkBXF26hF6Enr32zsqRUWpRSBVTPRSLwH91Qnt39eo3NYKvBFq7RtuFAKjbCFpQRHNehxydzN1WM",
  "key25": "2o7Qa9PB1xopNfjTJfpZNoZKDMaeMFKRMschuitDPAk9bp4QvXHX8DBjkwUaacJ7MCBNNUiXB2by5X3eykWNo4X3",
  "key26": "2v7W6RP4beBLYxnF5cwfVfMwbTMCKfDV7dr6ryTP5oz7HqrDk68DL4R6y5NaJjzE4iuhUfhnNPTx65kfTYXpbinB",
  "key27": "4CxzDLKjuZaEWsuxanAQWV3t2fcX1UAg38BnMCWNjWKNsUufsYK32KXdWTyxbgQZfeeTRKPdxJ5zndfkpYsTGiok",
  "key28": "43tGEsvJ8k67jNgcT3gEsFHW7CvuiH4cbE1AgdJAfiMo4XAewK1KzgfC4zL16WDvAAS61BAPKm6X2gv2YDMBqCkK",
  "key29": "B2qUoNDGrk59HZtSxBCxizaWFZHWPCWQP8bbnW9CSERDGw5UVrTcMVXWrL5N4mztP9KgzTrMd889Vm9wFtMfsLh",
  "key30": "5GpSUw3yeRcvKJCXxvdJjZLkQKgEEVSXhD1cwQRqYNpZAZrKWx8RyeUZRvDvNHNydYyY4yU3kjTm6TmuXnZ8oGn7",
  "key31": "5ZmWfFi4tzHHLkBEiDbaB9f6Fhfe8o8d6MVdT7zo9NkesSVvnCBiqMZAFcVipRFdj9V9BPPNhHiqpEt9KDiB1z3v",
  "key32": "2cHf5t3n1fhW9urXHqkpWWABbTd6nBacjPgJTkiNdbuxbinS1EgX6wBytHWUAFgpzQbdbrBw7VDVkvjv4vFVKkXk"
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
