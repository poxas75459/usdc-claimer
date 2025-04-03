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
    "5LSPxGEFUC6rt4mLNu9vR4r7hFvr39xWRy3VhcnQjphGZdhGxFib6xkW3aLHXvzaH99WkjBsY35qWUSoJDVBRjpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dSFCT9YWKL2mgMp4Ve5Mc4oGLKAxVBzWheCe9AwUoUhX1hyXpBWMiJor1hLo7E1ynCAGoPcRsoFnJZUDkvMTzRs",
  "key1": "42oMpcrTfGyU6Md3v6s9xqJq3apfmmWmpTrXr95DrwNLaNZSBRUQjFznjG77xE4rCKbaJnGHw8moHEAutTaMirgr",
  "key2": "4NJhCbeoebDXFcg8vXmnaKRUEtrZPKJe7kVWdMJsowqGSd1tgGyNj1UYSKb9sMsVGmtXunD6akStDxc4pjt9r3MV",
  "key3": "2hW1VjYwLWS7Xyzg93boVK5uuoeB81chYqJRccekW6SVJvGbkv5HMr5oB7aumEG8seKGMvCSAjLQmmgHGcHVjN7",
  "key4": "4DuppPXvUmqjz3hGnBz3JXRwm6XLtQJTJXQqtKi4XtZrnYgvHjiBGT7PDuPmsBM7PM3g8UtqkbaMMuZmwLMNe4fB",
  "key5": "2c9jPa7XV4MLRhgFACb6SDredBuSU3XKEuTVycuQwyXzeBB74FKUuy8R4J18iHBTdYR5gKSx16QgM2b7rufZ1Ygf",
  "key6": "5G7Tq8tsYpJXxgahvXkKCRNp4UmN6wjduao6tS5NM1QqN5CXppoAuSBxwS1B4D4AxgFeT2PprxmfC3nRH6BRZ49h",
  "key7": "3vS2cpxHoxF2ZzeSHwHrGHeVB85RsJCAMZyxSSKTNAo7ekjvz9Wfv9tPWwfprqEMEkNUEQoafWKR26PnzDMZboAV",
  "key8": "7mZEt18gtWQj8bkJaaeJz1d71YfH5PxixvKcYzN3Kbre7AfwWNupnzJErZ7r9snpNx1qPCwgv8u5eSWYGMa7HyM",
  "key9": "314ScpFt3LD8RgsDLBgJCnvdYFCLpsSjLEFq36eLEbuwZqXDJedq2oCRK8FTwGYSq3vrP7MvVwGgVii8XFpz51xm",
  "key10": "2AnXhy7Ux8cM8G6yHnATyWDi9zZx9SVe94bnYxrtsyDtZcZxARQbmK6nANE1d7owgxhXXCEDCWQRb6XkXV7AJhqv",
  "key11": "5rR4Po4RSTff9R4jy926tYtux5pTx6ZRzcwxFx5yffy5JM8oZ8q3qU8n2EeQa76GpzExwqbLpPzMVW8pF4yuEEsk",
  "key12": "5x28epfuSMzvnKXHFbBmtUeRsdU638TTHzYF8HvwHRU4bg6kqYNKAkGxPhBz5es5CrBTtzTnJhYpkZtrWkMj8ijv",
  "key13": "4YszETmwmDBVGLZMn2nWQP5siQdVExQaXca2Q4oHdLpqQ3Mxa3s8pWvLYs2uMdY7M4dByTwgLUvMafoCka12K4E9",
  "key14": "4n416SDCYDEAXHZMRbCQrvr32EHDWtEizQgn5GPkkeVdxrASaVDKSqQ6CbSpg2gR9A1F3dHdfH4vJ67egAFCjGfC",
  "key15": "34Wwrh4kohPpNG6whrzbnq3v25cskC3jp7mw58xcShASgV38VG9f5KazsXEk1d5oSTH9jXLqthT5VaZrX4XaisBe",
  "key16": "5L4tJRr9UPdfrD8cfnuyefp2YpgaWS1bkHixGkGY2Azage1s3oh1LQKdmySamdT5ZVry3XHYEr7hoYGVfiet9kwC",
  "key17": "6189paLHuSf13dwDSphHeBQsv8qFoLAsCZSqV5c36A28vm1rU8MpnAFUyBqdaNUHQnAXQteNBt3Cgqa4cbzoKH1f",
  "key18": "4cLwg3yn5hcRuazVFfZ6RhMaBK1Yq7zXdmPZ2B23jZcfUDfwTBJbszfT8pwaZZDeKEFA2snHgad9SXVJTnfvaa2b",
  "key19": "62pHyWoAp22gyUiV4VHxLk1p5nCaaCwuxZ78Z7oGbQx3UgeQZhjVcW1BvmPoroY7JbJDA8KGoStfpJJiCAmBkToj",
  "key20": "4NCpqp8phyPdjyXzwSrwE3dRiqXXwUVowUe6ns9aFewSzcqaMzQ61nK7bANHkrhAyxiJJ5pdGcjUquHMLMGYkrcs",
  "key21": "w4EYiSxm4ba98CUKdK28x8s3aetsoieVD9aQ5BBY6NACTkofwNfEeY7K4fb4czABn5nub3FL5KEVVp7kcFh8Ukx",
  "key22": "5EeYeZzUByGsYWTJau9oZzjkBCcADWaUM9S9NbmAm4puvAqb9dshSc5M7PREibKZGhsxPV8QTFmqpkpcjunDp2kU",
  "key23": "3Z7QermwzhMsKSebEfhjQmNoxRkEeFwvcU2mu9s9eeDo9qJxUmykpNtsn3ssbPwtfKB6w5y8zQmnyhk9TWGNPuM8",
  "key24": "2TWDfbyneXVtbaBuzWRk412UdfdNiJ4WnrTkqbFtpJnPZYPVHW11ooqdaQTCJQFaduK92HSB5vLQ9JZUc9LDzmLj",
  "key25": "2wqHKWDNHXYd25CSs32aMhVztu69kbcFYGdCMGTukxycTh6hvGiDJQJghSRGGTyWqUz1TuMRQ8mTgGR9P2yYNGYL",
  "key26": "2WhnBZyRzNfrN1eccdZG7AQCLmfazaN9PBVtQ2CPz8EoWC81PLGTVj5cmeAJ13UgKQ9SoaEW7iZLBa38raF9Av7Y",
  "key27": "5n96VPMeGTpS83Rfu6jPbCUJ3UiM5mupejAsgApEx7QbkPXPdEKTuVh74TYhcepmoWCLubEzF9bxKyjHZherPLhj",
  "key28": "3Vq4eahHBdDF3AfqyKRpCjjMMK8qhHtpMTrqDnjCHade9itpjwc3U78BpM2sGKM6VhdgSggygbqwjVtjZ8jmtPCU",
  "key29": "67MSdgjvQux71sdZjVbvSuitnFuif4dvDrVsUcRHykdXkezWMapkQJTCBNaocMuBqZdTepocfJYkB2SJWYvXdcjY",
  "key30": "54hQhCuTBco1Ttn4wAUKMM1vHqYCHwXv511u56PCurPbPZaGg3PL9hK8Ho6Q7bkC1A1D5vbqpNkGDuc1xGXxfRq1",
  "key31": "5kMRBcMHWkUFD3FkrhJFP4gFYrCBotGw4SkfQdVPSTY7pD1hXhwnSWLE5KMhPt8XQTmN5BE6hh7hAGXJwFhXTGuE",
  "key32": "4ffnYd8sdxMQVMYL5Eui5p6QPikkJuUPrBzGeSWmJX9UbMNzr6GtqMbvoouN52TYYYXN8s2WnTHYtSaLaLbhJteG",
  "key33": "3m78XCTVudFXLFXToF6H4PPJTajcH1XMVWyG8rnAnSL6wCSUK5a2aGQssvXGNqtooXJ9rfQNydEQQZHteLx96PYY",
  "key34": "4SLQkHv8M9z9cPjnFqHwF8C96ufCu95CBqdmr9athcGnwHXjjmpgJxxJixdKqDxsbnaBDqDBPQbMbYR3GQESPnee",
  "key35": "43LTKCqQFXDtsuNvA19f3zvFT162TRPGPmRWnkbTxepb28ayAePrZM9dRkZSdHN3VUe6CrYPJPbG6147wbyJQ24m",
  "key36": "5N2ktdpnXgHK7epbxn6JJDNxqLdscdovZktDUMRDt4mF59CcFGtgsJRikwetAyk9XcPYXXuvuYtgc24rLy2tTqdX",
  "key37": "23zYkHjcozfZVPhvM35mrjsgQKEZSKV6PBk8WVT2ooYi6BSDf7Bkw8GGJo6nY1UkT4WCuoz5CL747z3nUPa1pu6p",
  "key38": "4YcddNi35VbWvTtEDktMvACU4FCRuwfMrMYitY5PwuPTkKLYzcsitLMfs1RuQUvsaE8FYcwrDA7H3oUSvTd9j6dN",
  "key39": "656PLrPDdqG32WkU7agnZFZT3cpr4WwvJqGvURcBjTJVihRCpYntv44JqtrhxAWDUif8egUoTAoPrayjAb2wRZfV",
  "key40": "62s4ainuAvghHT9b7WBR14B6A2nv6gYJycw3rn9tuEyzjv4qUmJJ6m991G98ovmeFjWAmiEAWGh869gwXyBHptiY"
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
