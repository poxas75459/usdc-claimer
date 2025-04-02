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
    "44jXDWD7yvDFHWNe6HKhYZx1AgruXNCYmvF61cWjDipBVs2vaf2ZQvAs4KwjtqMZjjSFtZNEbf642MvWEb9v78Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tPkpxg7mWoin7RCbHcRBNeYqdCGmbPXGboJ6tHm7Z7QshyfCmKTSXWgB9DEWDzAoeFoJwVQJ6ZGY3K7T6jUvXkU",
  "key1": "39bAcwGJ46AXVFCVJip732X9UVphhBeuT4hCrh72ww3RGmNCuWXdhoN4Ebrcb6DvCmiJaSseFt3Zdfns1HYFL2y5",
  "key2": "3fhcSnacAyJPfqKrfXr3ZEVvPXg7KxzLeGmoQLYPrsPQ7rgZBnsdwkHcqUiH2Fx8LTcHKvM6reVKs3KPHo25SHNS",
  "key3": "4xgmjFqvjurjx64MbnguhtmunVSiL162MJbYLRV3CEhJDJohmKptmo9fznmedgwHvgYnqMV5RVPsaMA6Ex6Y3DNT",
  "key4": "2dpuzHj6tt1U76SWo8hxJHpf8unwCq8ceMmp2UPiC1P8opXqhibQcp1wk5UijCPeUt9qBzn9yg8ZcZt2EHif5TJP",
  "key5": "31VuGU9XuzSDYQUNRcdsFq136pUXPzc6P2QUPPt77Hu9RWVxSDyMUjZQumq5gv1p2Zp2D2qYq2Y4tFViQrYPyFq8",
  "key6": "8fKH7oiBDnb849KRhV4f65MWKdozyGKCwQ8XsDRuNRCQmB8d7RuNmLAg3ivBZ5WLQvZvHTCaZnrZT2PJE4wCeKs",
  "key7": "3wX5QpQoarFB1e9CSQaA7MqdszbNYexaAUC59AN5ZqAXACe76pWxiQaWjvp5nDCX61Rpebh37GKAwR8wEAicq74t",
  "key8": "3ZeBqTaFZ8it7d8LvEbrAX7QTtWCTpXkVWFtuZCqVPEgDE6eTqSGKeJattrGSRk1A7D6gurh5tX53cBcGqBUWWBz",
  "key9": "4f1E5NSpB99bcrWqp81j3riYf2Q47DA9zRk9BAkffXrng8unqtN7p8GinBWJBvkTMTjVxxxGFnkWmTM63e4toAun",
  "key10": "5FPP8Czw8NMVjhB1EVUi3RGZ23W7hkw8LaBmog3yJiFy9c7AfwFnVWNt4C2FZB6FkW3G37dkngYhchHvP5xR3t4E",
  "key11": "5s9r6x1MM9Ppf8ZbSRzdb7UJHiPKQNqmZ8MqGPJjupVxvXqzxMMsFcja9gHKvdseNp2wDPTAAk7EEG6DrL6ZmAQx",
  "key12": "X5tt5LTExu8TcsHrKpugSfFX5kgbJSrVPQRqHaMmps8Ge8np7gcraSux5yLZ8bp1qsa6w3egSFadF2zsKxwssHM",
  "key13": "3EX7GUUh3avZ9u9FXBf4zvbmMGFTD7YR952gyKuyTu4THUgusSYDaVmc7yJytgH3pKCyfCKNVBN8q7kZBcs3CAPM",
  "key14": "3wiPjFMsigoQp4Bt8ELbBk8SDEfj2GhTTYE7zvsrLn2ypuKtxRYZAYdDRam1NDpKiwgKSdeiWgxAapf1jDfChysJ",
  "key15": "5XxbNR84BZYVhzywN94thVM9NTvQVzTim8LVy59yc5pFvin9r4ZkEnUXnuwssC9JMoGhHFvHNKXUpsKUdECD6ghr",
  "key16": "3mGTkGZruQats2rQyqixpUmxDtEbxFjCyJCWQNnWMQ4pVzdLxJR9ZQYErhFTktReAvopHU2Cg1UBGFZJYYRYSBBC",
  "key17": "2nceDRpa5iBye2qvkVnEt8y6oxEqUxy3TCZQz3f8z9oRdenBewCcNrGgE45h4c62d2mb2kAc7SgyvWNoUijcg16L",
  "key18": "4PLJWMZJ3XtxBjsM2D9nAqssQ6oKehNsEYcQtpvnS9eFAgWJ9W3QVMjrykxFcfatuY6P2afwM7QQWaJyVNR5KV7x",
  "key19": "664Wh9NxhTiKjpQ3MtJUDBcVdfQzXbrhP8XaJF2HwPSgozzR61yrps5cSkrWxNaC6Hgr7UCme54xYE5yP2EXvmJ5",
  "key20": "5xC4tiQU9DZNuH3SKSVMrQzEhDco3EL2arWDpEtoUz2hXkiphiu3uuXMe3K4ssEmx2pJN6wac8PJ9GZ7PprBPLSf",
  "key21": "5kFnegevddrouTLGoHLRLRvDLW5oEBW3aFYyZqFG7odoKP3Vx2Z6MkQPzJaztmPZcSMbiS2BFKm3hjyEmWm1F71i",
  "key22": "33s1XBGYqx6T3Qg91JNdzG86CRM2uEXMizrr4dyria8jMc6RmNzzA3YonAs1gWLdRSkN2yFbind3yGmW1uPGSZzG",
  "key23": "27pYQX3s4pyk4uzT6oc2u7EibXNNpCdMfMZhdjWtKwWnGGLDr8DW4mCWV9XuAhKNvTNvrH6GgBUvkNvKhLDLh63E",
  "key24": "4uNxpDRBE8iBGt9LeogQHjhSsjMXDfKKAoXoFCVbDk1CZFrUynmsN71kncHsw7msf5wrTPSjgF5VP3VqBaiv4ABY",
  "key25": "557MoLC6ABpMtQpZyHbwb5MfCvn7NFWqaDiyBEdwqScS9Fxh1PD3KH8dFf8afgWS36h13wb3GYH6tZ5aFbt4tPdw",
  "key26": "5boXw3KxRpkGTdk9JWQeVyfAEP7MGuTfbUvW81Bv6zfiu5913PfGricosVYUZ3uJ9aqJQ1QkJkNovy1iY8rX5WsA",
  "key27": "CyHZeCXjDG7iLd51kYYYVrk8XzjVpbvoFehvh74JKCiPTJdUp1wDdgy9QcVsQdRRxBiRMBs5J4w4NGNFqoMV2RF"
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
