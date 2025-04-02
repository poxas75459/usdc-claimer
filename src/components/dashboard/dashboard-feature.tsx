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
    "3rpGZizMJNNxWaT3ddcZ2CUXEAWj9iXkQNXMhVR4XqbEU9TtVDvh1DLZzkjyKdLahaSdp434En9kWfkSqEW7NPp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usxfziBuTtrzcekof7QrwwH8AU9UsZkwHiWDzpg1xPSN9YRJ8AiLpEKdB9yxmoSvkDwUNUtyC1JECT2W5EfEHNC",
  "key1": "5867q6wpSdD7Phpan5kE3eW5JwNojk4FnWWncH1XCC84X3XNvqWy74bLtBLXE6RoFgHqrKbqkxKHjzZbSFxTdHCh",
  "key2": "qReD69rpeMCo6U2y8mARfcgBY4raTva9uhqaEAYfY79tbiQaQ8y9LeN6EJdxiz7aAvSHFB8q5X2FRYm79ggPyU4",
  "key3": "5zxjjvLdczDdCo5spMUezMVxDGFjTzV4qcVaTcphMcz7GfYr9n2TfTuYoawXG7s5BTokya6sJdGfVfVuC7MQWvRR",
  "key4": "3qr9e1t45c6ESh4ErFjYtY9imktk2YCds8Wyvt6sZHhjuTezBX7YAZc1PaLERnVnjSxMFctxt9m2kKEb3j1JQ3aT",
  "key5": "27ahfk6CEMiXPLgar387d5oMjHERmYUTNRZaPouby7AbPPwr8HyBYiWBPzxK9HWsGMSTyLu5bPkhgMPcxxm1n9ka",
  "key6": "EbQgdvjmztcv1UuQq19cvPhFeC1CXXfrCuYUZX3LoKqPShUj9Rn756RPuY7k5LPE1aHL7fQ1cEMEvLSBXGHrz9J",
  "key7": "2gJy3RPYTz2TCtLooUJgaENjQkCopmFB61jdFzdAq9eWDC3hnHKgrksB6EKTa7C4DTnhyAAsBsG6kRoxhw8qRgXb",
  "key8": "3bsGxcT5ayttWf8o94ev4utZpEvVsXstxeDJnKDcqnv5n8QiV2t61txrFwxm49a6vPzWUPdPPtnRshsgZLFmv8di",
  "key9": "5PQYL2HE8vyPy97i3p9iGYo7kv52oF2eekBsobEjU6Fopc4kQfyegRebDv5BknyUCn7rhCri8d8ckv76yTJQZ7Y",
  "key10": "VXqWc5gYWBniK21ux4AQSq1tVvTnqJoETTWhL4Dw79Z74yML6YLH1JPm5cjMvjVcBtjb3wAA7Q7DwBZumK22QDn",
  "key11": "5ZzXKtZTFrTsRL8khTmeaJVAGsiEgUftme1bNDaygbB9aPrpkbnDV435vZ8PvLG6hRZ9JKXVojVxBmGjyzAcULWJ",
  "key12": "5RtBuunjNnHBAeBHxSwuWbSknHE5eV76kLheznnB8tXhovatUmn1tQ9bDGTR7wbqK4qz9zj7VYCaZEd8tcebRQ77",
  "key13": "5ZFYRLTHBEijBKc7CqE6G52qNuE1bQxQ7a3hv3WzNzj86mR2oi2xGRmiaXw41JzQ9NSpRk1FbRkjxKAgCPkFCGoD",
  "key14": "3EUPhVV9KXbrFbv97AZD2DRHyhcZjXAYEzANM6q6TQ3NmNiUXE62GeMAeYV4CtezwS9WnuRg2kUkqvK1zBh2iiYp",
  "key15": "2u1Q9p4F1EEFUJzk5t16qpYMF7Wq4dZf43ETS4tnNn57DKY7s7xtyCDrwvbXEZqZV3pYtTPtnErAK8ucr4kWXy5P",
  "key16": "5kcW2h2RnZS7GHQnDz87MZzabNdC4c2UoUEhGwEBE3USCC4Wfb8Kgsj8QqWGxEMWobD5Z9DPshwMxUpnFZxMxvFw",
  "key17": "3N7iEgB9JseFc6cwPu3vTQkSBfxwn8BvBziU1kNbatf37SuVL1GsQSRUWLwmszRqFewQWT8uz71ipb2L2kKrABZd",
  "key18": "UegWjP6Sk6GBHd3g8YtWCoiT9E1PWVYTP2o2ttmH2mDWrqNtvatx5b4KipQ7ER3HhWKDhtxTjzSfG6JwV5NkWDY",
  "key19": "21iL55LVtFYNmcv93GgMW6QRCzm6ikjgTHukx68Nv21YeB8EHcFGjsE9AcbSET9LDJtcNo23mcZXUB5HXRTgnDix",
  "key20": "ghrXtVduVCPcS65ab1E6rxyDaSfvPFYwx56YnVg8riyPnANjPWyKnQ52fAnqYpSvYC1NTpYrXeGWeJSxCa9C6Ro",
  "key21": "2bdfV6uNTrV8aEnSP44eS7P9WDonsgDuDWyqRb1HGLkpYr94zdw3ggJqr4F7oNtSxpLgjNDukyKW7dvuUUVAtnJB",
  "key22": "41RAmEVQVydJY94gxopvrpaHYQAn1vh2uAAcvzVDSueS95fPasbX2uR5anpN2cnC7TKTQZW1VV9KP8U7zSz9Tr36",
  "key23": "374FczZcxqS7zLhQfV2Hpe5vEv5PAgofDKCW1L6SBUph6tE3twTXuVJsR8J6GPuEQEuiAVB82pzqtSuDvejVFQWV",
  "key24": "21BZFfR7ytLDSHg3gPHbEQZM2zf9v64XsqSc6kR91miXUUv2PuKdkjg3Eb2F4WP5RXHvgRdg8BkA5esW4qdTZna2",
  "key25": "4Hah8A7rMuT5M1Cc9PTJDRrCVvetrT2eM4jfpCenRU7tJWG6YJvsCC1mCzeHMEqoNYLr6HvqUwL25SzBcLTJyX12",
  "key26": "2ZCcACfwCSaxT7B6B9meyWUpzJuwAHdfqSbLgFCCZePGotVkhwz7XHk3UHUzUyxANid5nu25Wz745nQXw2897r39",
  "key27": "578MDsTNrECHcJ4crR7JBC75XURvuqjphySJ7w5DssQhdCzPUbLC1Vf8dJgcTFdBrbKFKseceRv2M6Y9qzFKN4QF",
  "key28": "3SMvkW847vodzi9YVvstk4Gv8egHQwnjsbE7Tk3FPbbWorKiQ8VE5L1qX1J62wZxMfZecqBDo7D2t47qswCkj8ER",
  "key29": "5CLbF1V7DyaPss937vHYiinBgUj8FBfPQXoRSmsZYSgRmzHGcyp1rK4USsumNaNEV7JHEYHXyixz66SpKavZU1n2",
  "key30": "3Zwvg3FdJJL6jzhhUjnHXMKhe9DEshNWtELpzUCqtPKrh1oNr2LHXybCKfrUFoqo58ieqWo6koNjXCwNWhExfxtL",
  "key31": "4Tt6Yi436c1tp7E6vBZfLieknoZvGjTwBK17LFoXwUEUr92ke3Q5dgTJa5XetBbpDAXxRT2mZWXVVbSKZW3UrExm",
  "key32": "UNHcNE9opcWX1NhMoN2jzQhgBjxDgnrQnVdCHpRZC8fdcn6DkeZYgmKC8GRwy4ur2xCxrtdL6GQNi7hRjUv8WgJ",
  "key33": "45epx9JrZpW4Rq2iRTSfov8NyEzKHfr7QLrBJP3aANH9N9EGuAAjUgTZoRDtfX6BYnrq9jbF3M397ZcBxogYz3T6",
  "key34": "DXEg6P8RUPnd6AWkVcrnuzZknbKi7CaHnjth7wZALzXqtepw1nr5fARcGzFq1i6aeaCRXxMfxtUVQdgYjJpssWC",
  "key35": "4ZinRPNbmDMGZ7KrymkKcAs7F5TmDGt8ZSbCmk1boKK7SsTLpzGQnM19xDV1dzuGMptWAr5D6AXoEaAbjoCjFevo",
  "key36": "4bumWdNUsHM1CMa7oqynr4pbXCRqGi8CPwuVK6YRJA2gJkv7NnafZDVzCYh2JCRgjCQCSGcqGwHayj3Wz5EWhFXG",
  "key37": "4EX9H48mRCAWqX34iYDFjD1ih4hwsjMKfcn7AgEh1Fki36LBcCSFWdfrYSMHPuFgzMfeXpyTmdUBrJq5EC6Yi9H9",
  "key38": "49jah67muFsiRKmUgLQYi2fEWSUVB9ZSrr29u5kUtVAqv74DoqoqBCt5cBJKNNX7kaQt2Qzz42m41dZj9afPDPwv",
  "key39": "za1fDnZXwE3cNtu7gcANu2iDcjZuiDtYfUbSqMV1e6PLnmPGjAd3Z4y5TFMyfk82EzvT2gamEDFqsLTtH9FQV3e"
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
