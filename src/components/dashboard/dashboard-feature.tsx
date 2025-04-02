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
    "mVfXYeamJ9y2qzgezGZuhcSkhRwdWU57RxHM6rJz4vvpRkA5Ew4HN9C8KLHAxt1YS1r42V8jyVjT415wRTFcbqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5NkEM4ADaGjMo9qaMR5WnvBghiZhSvc8um9Awss2Px5vgJbT8DauxfNusF2bfuvkr8xJ3XunEak9g3hi7o63JY",
  "key1": "4B9AFAnsNvNGESkBG5sLM6e3nU5Wc8Fmq67NwTQ9YC5nja4bpL8N6dhd6LqHFtsdF3buW4BVQorAAsFFkzwuShgT",
  "key2": "2Vb7TsGkxeXP9nwPrUEKAReh2gXMHLj16RAEbrCd8cLstU6JiuMrFD8dU8Sknv8ku6ezFBH2cHvyz9HYTWszFD19",
  "key3": "42h3NVdqo6BFsJXxBrGYcEKYnWcqamokHtbxUhEN52iYVkkUyiHuG6rghUN1Co7vQP84Ww9Co3pBhpWDEasVFr8Y",
  "key4": "2tPt7YGfhm6cKUUb1JmPW2fjXmDPwFf1jBzRdEGTssAYYi7vPoKaJJ5L9Rbxzrdxb1WC7sUdprWtxmuAajjgzYwi",
  "key5": "4AD9Cc4cSxwyCVygc9zhgKRdeP1fmpivXvD1eAYoE6pQeAUUrQNjjn9zeNZF1kJL4JK2E2uQwhHEfMpQoy1DWCa8",
  "key6": "Zkd8Mwgq4FbfcREa36doogVPcZXiNo45RqrEscGPShLUSx8YBY9SHdywc88of8C27yg5GcSeBNdDyzceYnJ5i4c",
  "key7": "JZPiRcL6urrwazeGNCq8J1H1tqC7D4s8fp3bPwvSgtAe8bWw3eWNKALCaUnMtqRA5GZyxrBdfFvjQfuWyah2Hup",
  "key8": "3CE6ynsNiyKVApWd4H4uKjNfvy6f1sTv6HaWiJhP5qHmWrcWoeb2p2mY1HGwPTgKGiKzNXMH3HeUyg8PAa2kqWeQ",
  "key9": "XDtkcmPtxaNeCzSHnMjrKTHSFqVHGvs4DTFdb9a9AYiJf4xK99G4bQZ99W6j4eeddTWcWaB95PGinZ69CnE6iXq",
  "key10": "51YmQJfYqzkA1t4m8UxGt9zBmoB4ZVoGaqwtez2bDeFp9JEedB4ATn4TXi5hxrcZFzNVEsR5FAmSV7Jk7SdodKiU",
  "key11": "4mgzjViqaXQt2r9uLR18CK7vGkCD6GeXHRUjQ3B387NNShy4ZbzLPt5qGM4e1x6CS9TPEakEY9rgSMPNyxgjCs4e",
  "key12": "66NJXh88B9mBDAfMKvUmgEW5mKMEqqJ6y9BynfAS6GgMzVa46yRTGdzCSe1ipw5VHuU2NtwkriqHwnhxRmb3JnNn",
  "key13": "3angbcK84umitYeSQgBAedvP8fsw7aUSCPC2XkpVbfxyJJ2p88PkPtAmbh3xS5CKSQG6ND9xrw9Lz8AeprYMcAuQ",
  "key14": "553dZua8GP2TeG2EWTTFKvNZfdQMoP5huZ3KGhVJtp54DPp46EnQtKabQ3A1XsJJT4kxUEm8bnTHHrKQwsMpX2Zk",
  "key15": "5DJvs8JhyZujKhoCkrjjDKAgjgW5aiymKpDMSXF9wzFCKRycQ4Eo4s4ugGvLWHw5RRqsfa6rvvj4Vh1uRtEJqh39",
  "key16": "2U5DMVcdZDAjuJaignV5pPjkxHn4KfyYL6vCZvHzLh188czgYr4a5Y3y89vYd1jz2uhpq2R4XGXRuGi9K64JZ8WB",
  "key17": "2XGTfRRKD7UuifbMkh8qMbyS7i2gCGDTmpjuntNkEuHGseTM9FnXVHH5MrDsnZ67rSZfYYFjzNNsnhbyXXEPScGQ",
  "key18": "4PhztA8dZoDrrRNPDrmY1X2ToAqqgZuaP2SfowtD7wNgH9aoE8DUtvZLsHBqBwQtNN53xpFzhfKaNeEgNAeu8C2j",
  "key19": "N8bwShF6C2bkY1SeHxCRjmjuChxfdaR1APYbT6BYFUZNovAu5tcpfK5YMtzb9gU9X6HjWMpzkAe6JU3Hyt15Xkp",
  "key20": "4Bd4Q82NaotLH3YmduDp31vi9VpoqdjdRSJw27hz8TEuSrSk2FJoGqQeK9mTqjMs9EHXDXGNj8dzWHfxK55opC3Z",
  "key21": "vRfpo54vrFFeCSpack8PxSi5UPUjndTLtywCfJ4c4FNp36LyH111ZfAasT2SeBSuy2oV8G5kMsYB9ee7dJihHYw",
  "key22": "2b3bdGkLYjypV5SpP3wt3ZUYkafBLvpoB7Yu3udvpQ87Et1Ug1uuGw1VupLdzfrEiuGUSN7MuwJcQBmdMmBTJL7t",
  "key23": "5NSeUBQFru7qx3wqHLUrKyiQeHAcTeCUa7bXEvsboDf3jMt5dwAGPa71jMMofc4meYiEPNHBGUd454CCunWKMKpM",
  "key24": "4GoQMYRCeemUBihDEUY4V8wdWWsRAUc6RYES3GVJCoPF7a76k7pH6NrasyyMZLpgXLFQzi2FYiehQ6TsYvVQacKb",
  "key25": "4rP7uLAG4Z67W3471AGSFohrdRUFqwG4geSF3fVwWR66NYBpKJ9uKSSBu6bdTxryHn2NfL1AvF8LjdL2Y9CHeSg4",
  "key26": "2o5h9TAWrQU9kaLNQPYamWEmEG4Tz9ApFGypBJP4hEHSmhqjAQ14WGaJubPY7Bis7qV92rdibxZ8Y3KDekoBRiK3",
  "key27": "4q22CfiThT9isBRi17nH8CVwXTbmVCjD614rowWq3hFJm5PXWVaBaqMYkN2T9jDEDAjxb3Q9Tc1EFsrhHMBmuRfy",
  "key28": "2CmPDZAab6LiJ2JavdHZAiqLs2A3GxHZTEgxLEowLckvY9xyWte4ms5t7Z9jPfnvNWjf1fGXsexT8tZNGARY4Py9",
  "key29": "523U3ZZ1VnPZH6rcpSDg9YrYHD7D63GnRHRKnqUFYZz4D1rCWYC9YnH8PZEegFzatq9QZqTe4fT6xmJoy7hPTP1D",
  "key30": "34guYrgmFcLU9vwoXDU3mMwuStWq3GzYgGYVRqiFy49kX4kkHt1cwG1ADr8i3pesd1HKCGXoG25aChys86CPY6mM",
  "key31": "5KryBiBhXtG3GQgLnj9PLGS5t2bCeF4dxrZ8BEc1TNfvRph2ApJTArNfKHmofy9FKRCkszWUrENPW3qcqU69qZNi",
  "key32": "3i6HAMZ5R1AarDZ867FWM6fbdjKFz3Z8bPag1iLnFrdaMZoQHiZr5aeVRBup1JfxsFjvK8wqZjGajz9e3PYMdjj2",
  "key33": "5Hkz6c6JHTWonzbjpHzqdUEkoeTSUrCoWcXL43GdKptZ3XEBb7YHBhZoTSSvDGq4UWoYUefraNrmgvUHTmPmPSBX",
  "key34": "RqTiKKnGbZGkbu9DqrQmqynL8AQWtiNLU5TLzi24QfvfqheNRP3pWRSEoPQbhKhhP6fw4bqA7raAZGnqcKWqLyJ",
  "key35": "5FEYVKvQa4rFEos72ZFfF1jqSpFspFvXkDP72iLDudaTpRpNHzDfY9YL65H8d3jZDj8uoYsyTGbgH1LV694rzMuC",
  "key36": "3BiELJe8CUe5ckzhbMEuBy2TT1arQFXNJvPnst8h3cVgFrqhvnbRcd6VWUfow5a3BRr5h7wvLRmaw1SuSbvE9AV2",
  "key37": "5QzY2t17jV6nb5htnAvxkapRpEdqGgkf5iaaqaCQs5Dquoha9JyY7hqX4jo7hBqppc9yCREa2wM4kD3srPXvN6YG",
  "key38": "b9Gx5yyRx3HuEPJz8Dt9yyaUH3BXVyFVwsD3fxQ1JNVdDc1LbqynXauShRsFafgSM4KJkkFDRpoWQAvXqcWW8ZE",
  "key39": "3fab2hkkBtHgRutneBp1k9Xguwo7mwLQzGsaPx8vMgxvPYbGNrkwuKZtRTAT9yXWYAgqUY6PKsSgzPMtMrT8k59a",
  "key40": "2UF4cx6h4nhBiQTS3NtNHuHGfg8oFEymtKJ9yeH527S5HvZwCxKR7jrtAEDGy9SSmtCHWnG8Nk42pZmVqPuUVNn4",
  "key41": "2SbfAzeSrX1GnJbe2KbJzKajyqGWvNs4hhzqHfipx1pHMxkNBrtPTHHiNShP3ugBHDGjdLUSMfktFohApM3mibzT",
  "key42": "3XGT1PQzohq5FUg29RDEvT5qxvM8v3u81tovjNreXs5ukT8WeUnoUvP75YbmLZ2keCT48nXwJYXSLUtNXmMu9NUg",
  "key43": "3NgzQtyYnp8EvdZea1muwi32jgFv8yfbpRMmMtCXedVbGbt6EsEBLjSStSbqELmm2JomrW49GmDDaDMkpRgF25Ju",
  "key44": "4NTaqnvqBftvD6iU4kvvNPpHv3RE8yqSDoFsPNvAJxT8WWFSufAhbywwqh385bsmBA2w5yrsUDQkAufdWn1nvKsz",
  "key45": "2w2rW8K6Fjbp4JJqNyU1253tAnfAYgEzjmuEepipbEuyjf6Mb9yMZJmFeHTNdGPJJyL4LpnduXGHhSR4RzhU8qfr",
  "key46": "4929xsoTkw5RFKbuER7eumiVnSn97RvejurEUdxqqkThrrUBA1guzon7jqqaUhSAud8Np1xygjZPmFBd3jUCA6mT",
  "key47": "3gMc7C9TW2UYpmKUtPTJX5b5aZ2FK1KYrCY9aReQzv2LKRq8B4E9uTAcCicbWbgWYZWFP4QxKdWLpouF54D6fYGM"
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
