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
    "5hUdAnYvpBiH4S56uHZxsUEyTJdfibfcqzQPUC2UUbLRxGT8MEG2ThZZYQYQ8DBM89LUe3pbYWcL587gkddC6Ai9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S4VtrTMSWi62QHuR4tqGKGNgjgSdS3PzkmcTPdHmVZ4JGncQ9c7XH7J1ranJuNGnQxQK3TFwZ8pH3mD6hA6S4rC",
  "key1": "3tDt5xsAPjGDf6fvRYDutMkDbeWAViw28sdkeDJGPpHnCytt8dys2REAifYXHvpWQwfoFBsviGaCSHSKJjhL3eGE",
  "key2": "64BDtvyvy6bwgVnQ7RQwfBhmTCbddy9KLjJfy9biBoDGcPgEa361RHiNqZLYML4WrmPU6mPRn2SyqnPJ5kpg9inU",
  "key3": "5KFDtwpJtx2YdrqVAqhU4CqUiCST8VhhKcyY4KAjxhwcPfvxb6S3BdHwVdyZCVUHyAynCcaTG1CD5gFEffhWb75n",
  "key4": "3rY2XUZxV8jDuDyBD8ELJBZ4VhfnZaCUh3niWe3653grpB9P1hDQmUrg422sW4X1wAP6F133JnMCBdXTHyfEMzZ6",
  "key5": "4vTz5L2aKeokUfuEKTgUco5Ay34hKhFuGWrAm4BLLqRWiUGDQYiAkyqr7dma7zgDC34sm8Fcq93RuFKw3E5YDThW",
  "key6": "2EEmGHpYhVN7v5SWbrjkdYAyyBTh2erswTEZL1g62N3KmS24q6kZdszdKyPNUkf7NbZEK9wjssMb4pmDxxvkdNfJ",
  "key7": "4MDo8eTr6Uu5sTacu4C98wCLYCPUHDvoYA4MyHXc7vWEczXqzwqSxEDEWv285A2aEiSaSPxngkWAEPgPAmi8Zn9F",
  "key8": "4YMkPd8tXsBGnYT9SFTVpnPJgoZpmjccYAfuQkW29bTa7w61gNTPBUQh3tUvT3FZ8jFHP4L2Jmb74QgcUHSddhHM",
  "key9": "5u3zaZiyLcNNSaGZpCg9QCkLzn7pqs2Ff3mYDe3kHq7q6TXnCRWJ1qKSCsTZcqmEUcAK11b7xCdA7mJJpnhG7Xxi",
  "key10": "55qyusZ9AHtXCbXhmx4mX9acEtx4Mf2Zr7zCfeiMRbzZmETYmg4nPqMwabqmDydwnn3ifyjv5YM1jwyjcXYp1bFP",
  "key11": "3Ucby2RuXHHJX65NjMTsAnZMjww421hVvJNMLMVDi9NfgSUtCk7W6qf7x9iitxgWZCiNV1cPkuBW35of8mh8Gsxv",
  "key12": "5HXoC1qQKzRpoxgDcGugfmZiQBepSvHYFW6n6BDPFsFVzikcmNX7ek7suTk2b9AENCVhg3CpNvGJ4QQR5HgcDKFh",
  "key13": "3THKBpzkWdnJcydYYpq5L6HFihkHZbh4tWy9PXUAftRS4Xtzi2RY9B3WodWRREBbo5hnsUmJ89EaJnRExRY2gk6Y",
  "key14": "2qVyZFYfKjXUTTA3Kg97EMFnsPADv4WB91Rx3K6GKU4AGRjPmY9uTExNRXKsZKVTs7NBV6W4VbtHYoWFVhMAz4nR",
  "key15": "5StqBdSva35ZbQT9roVsg7gQBf8j4oaWEnnafjMEMNyynt4nuS2JxJu78tfPThNu7k8ZrEDDtb2p3W4HttyMTSH8",
  "key16": "vpgUzRhqnrAVZZaxVkuTiU3xj2qTD3R611c628BoFpGCMpbktEhHZeXfiYiEFyWk95iNLRMdtw6n9CCbzjmvaC4",
  "key17": "3isGX7yh3NcYyPiXWZ1dezykMukg5nFZMD12mG7KtNgsPoWo6ttCnK953obguTJ5kJyCvzma4cinpjeY5taeonCW",
  "key18": "2G5dffjynQrpQLh2ArdNwL9Sn1xwetuebPpgp5yECDWtnTFayT75qj6RjTGup1i8rnFpifuQhUWxZrLuQqCYGSHH",
  "key19": "5EdyM2DqQgqgpGHYVUcw4GjwxJev7WhFUQku6iA5sHnAKGW12FgvjWdX1Ev8hGi4VWcJ6tZhNzzMUQ2xs3sV93t5",
  "key20": "4ZVdnVMjuk1M93CPDNKTXd8Y7Hvn4YRYuexs8VjZoq1ZM7jckKJ6zRXYQ57o5VKQ2MUPpgovPtdV7quAVEhtPBFD",
  "key21": "5gUSKHvFigBkU9GbBz1p26MpVPpcepa3K74CYqAhi9YPwTkLD1AGsdGfoXWZVxEaFikEqSh6GKDwT78cWMiFkQWR",
  "key22": "22f8JZfHeeMVwYpGrs7V1sFN5yYjzb63uVxwFpnn5BAPv1ZkCiN1CADgjbfbjbS6cF2Cchi4bAQvzFGabWNsJFyG",
  "key23": "2t8d7jxH4JpKg5FVW9djj4FAjXoy4s5jxUJPiVnTE9VQjmi1hZjy88gmcJyA5H2qAT9Ra6AzDDC6iFzE1YDXj32E",
  "key24": "52z3yg3CkifdEH3b18fAcH8z8SipY58BS5hhYHLBogNGqZGxCvVL7p153W641z8re3SKQjgbEft2JWJ9yy7kDSYk",
  "key25": "5SMVxhKKbp4qVhRTLWzHbtJL3hhfzxXQ9hDtBkiqFMZwcQb7qh3TFmH24KnNYuTSjv5geXV1xGsLBYDab314xN7n",
  "key26": "5Az8xEHDDysVmopHzUULmBpsUor1msy7urnLWhbFWK1yKXWwe951Lb5BdazoS6e3Tvxwi4AX3Cn3Ax8cAjs8bLet",
  "key27": "4WYdDSCAhKcR565jSUmrRdniyJceVXAZJNVoPPfxBV2vnTum9LbzTng51TVgNyzpBuqiMAFLMCy7nJdiA8DKU1Fh",
  "key28": "3HcW3iCXTTX5xLrASbdWZLdsukF79UB6sKiccQK6ZovdDrUgVU35vXXpU8D2QUU2Ydwo5c8cVAaQsQaGEBwsjFRo",
  "key29": "5gLVPLaAjVPCiq3bJNpaRN6QQFDeDARsKBzke7B1WqvKGb2R7b8cRDFU5hEGpxSy3x1T9uxkvmngqzf3h4bjmaU3",
  "key30": "4temGEnsFvpPFVCWhbSwpb3pja47Bynbfzc1XVjiiuAHJYzzNA2GWq3hgPhh17ianNsaXquDUZRfr8Bz53sQ3FF",
  "key31": "4iJfYLfZco9ZqpT1E43YDGqmkKs26jEi2hFW76BbWmSEqdYC26CETUxfMVCXB2fatn1S7vtDo2we3Y7icG7412d4",
  "key32": "L2EjVAbjJvpAe6TGZhwYRKWnoDisgLPikQftarZhEfzBVHWBCR9anmEDSFj9ez4eB8rtQ8GiDj36BnvrdyCBcWd",
  "key33": "dW65fVr9necVsnfnwTfKyMHcsAqr7mxyXhFMva9ZSAsahtFXp2jM1ChM5nFZp9QZ6VzuFrzTqW6aoN16ZTTKVXa",
  "key34": "44FRA2Qj6cKXMx7PUstYS8Sero2rLjLVsMUoNDrTMFu7vUmu35QMKPq2sS3BPqTVavBT9SGt17HCjEWQSEYkkDRr",
  "key35": "2rm342v95q63uCmxBfAvdYX1vhGJSDZckgts8akHWESZJi9EJSpdb4Daz65e4B6Gd1BknLcygwaZ5vtksmpBtuiX"
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
