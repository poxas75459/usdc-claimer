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
    "3q5huSDsgeEeKrzA9o5EhzCrBfbQngQNiXZ5zYEbVdBp7pxMKg9SXy9e3qLGFgY4u5NBuFSC9uiAo5E5u7jKTSKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFMgbSPELTMAfMsSdZhnuZYCPgT1amJDpPGcDVcaCpqS6c6Wfge1bi9sgUZhsSVG4kGDGYGLsaBhQRcjixvZSjz",
  "key1": "43ziou7q7BuLGdFvmnwSCq74p4fK5CzAQm8ooQndos3WzvbJTHqWU7AjZcwjKiWaaj5VbPGFTJ6CPTqmaAmHAxHq",
  "key2": "2rsKrKsC9phQyhMwgfyFQnQxgeNGTUFoajywBprFAg4AFSGoHQ3ac2JbzrzhJzGot26Q4dELxtEGXGvATMBK9wkU",
  "key3": "Yqcd5XGK7zttVj2JLJR5ytKBM26hBhQeEM4YagmVwWydYrKjGVHDtABKQSojx28PGgK7w7NE5taaR1FRVHYPD8s",
  "key4": "51eCSmrVZHy3cVTZju8xPJ7TcY2X3gEbvkrMgZGxTAnZs2nk3Ma7Jb63u9TTfRv1Pe1sQkSSEmaFkvwZXRL4ufUJ",
  "key5": "2qxyL53cfEBdexbkLPWAUe4DZdXUFekX39QnDmTtUqH6HKAkzifY5rfWxGY4hg3ZQji7B68befZy27okNgcuUmu8",
  "key6": "YA1vdswwbrTJM8eE5DQSgpWF8GMyacbY1sNNFU6wo51MffRKWqNNz9ypPjBy1MhNHwfaYhj4qLfXEpHjPH8xsp6",
  "key7": "5KXmP3Xm1owEjNMsfij1rQwxkLDyQPAgR14M5fNWHfBFfq76z6FHn3bZMCbjtTMUJQ99WQsbekHRqN2gpXhA8dBD",
  "key8": "3qWLQeZqgx7HC2LRhD1ARvNxc2TSoTxvgLC18Des5oghVxpC6kQpTNduArvpiydPVcNXaGN2yhmD2mUrodyTa1Vp",
  "key9": "G2Ai4wuApdsipZXYc6fWRmBsJVRsAR8KqZjrSWyUkMoZx5ujGD2Tgrd9o4xWXxxLGyVXFfP8JFDFRyXNELKSf3z",
  "key10": "32KRsUSTgFS6aaKLY7MZ9Bu7c1nhmgYdR4QqSv4CPRnGhr6fB4qFaLoXoymbFSbWB2F1uP6w8uo46eqQfP4YFMis",
  "key11": "31V2tmqWyU21kni29MEEXECqLPobPmbv6Yk5VjQAkzc5pD2RQ6cwLaGc6oWcj1BS58drwHZ5Tps9ArzKyx6ZnDQf",
  "key12": "4Pnv9ALEk4RSCAi3t8Qs7fvJCYUf7Wfok2DciXuqsanikgS48Fu4cSTdKgdpEyjKtNCcKjQKMpyWHiyZYqrUeKzS",
  "key13": "5cNbiKLPePfAfJF2dccLFpAwR5pkDyhN1ieKZQdtiPJYJJdmSMhMcXck2wmSVG5DhWYGD5Kmqa5PAjrc17whKWhe",
  "key14": "49YyJLai2x7VcX1wVxNFMFFY76XB3dKUf1JCbLqRevxi6CWmxFMBeM8DxWizA7BELXbAekJWmhQP9swMsS8iepk7",
  "key15": "3GYCpuq2YZdxK9VnpfL8vQqEF5BiQyamttWjaBjLbEL7k3LzpCPbih2cT2besZuHFBFKCjLVtvXnfpHaCtccCqy",
  "key16": "5kqKri5PNRm4D75CTkxjpahSqCCwLEP5NV1SdMM6zqLfYwQZgvSsJc3hFRB25ct8j1kEPeeMCWp8Mo9LY51eZKxD",
  "key17": "5mcaRdJ5KJ1YV6m16dw9YPfsud3AwuG9eJ3FC9UzdGanQhaN8KRKexK7A2u9KK2fTizRZC2b2CX6JyZDoNRVf1yb",
  "key18": "3KBNT7v2uXUaydHsjFJdcaxVHBgVda9mihNY2XHmkxuwhesStLadPYUna4xtbZbNefZmqBiTHkGXpWdcQ45ut3V2",
  "key19": "xePkevXrPSopdGoiyj1DzUNmaxeMSGvzQRuegL9s9NSAqji7duYv3eaPUik5RWgsGsEFeFJhPD2KDjCmqbCHym2",
  "key20": "5EpavCV2tzMtUec9YFp9QEtJtU8oTLNM8mD1Su8AeB4aTSYgiz1rSoD4Whm3dYVoGH4b7C4LZ4QxNivzmvkkiyuu",
  "key21": "5EZE8XqPvQdGypCymoL55gz8HfYCdFK9DmGkXp21S3kVnAxcRJXZry3ZjA31i8VGkDU5aSb5yfpXSc3dtatEqMTs",
  "key22": "586pXXNepJsUJsVmHb2JCS7cB19sEMHgYMVxWZZJB5SmjVLXJtVdvq1B54d8uT2EJWb7cPtVP52qBKeYdtoSaj6v",
  "key23": "5nJ8YRoNnSN9L8p5Kc9LQBtZNgi5N8NQuQE6pmi7qtw1tLdsb8q1q8sjCTYK4hinKYwD5dKTdabyAhRPEbgrkwxP",
  "key24": "3JqgCRxDSzNbrSTrCNDc9YpSugh7QB1T3j5ucwA7kFLipffEQAeTszfixY8Q3BgGejUzy26MLaLVMA8X1C7jUmc5",
  "key25": "5F9oZKb9gqt85MBXJYnN5utme8EXZKLRng6ZNqhT6JzD5YkSHZp9ufEeuzpbASAYsWYrPtxifZ1uySZc2zyCAfJr",
  "key26": "2bc38J8XthjGS61ZYQ1BwV5S4dEwor8kJ1bAn3G8FBqzqfRYqEfPaV3a9S7TEquB1piepXGw82dgaobPEe9DjCHF",
  "key27": "3VXsGaZJPp2Y2aoa7hhTzKWDbsvkrSXR83R5D6q8APWzFoq6akDe2uz7qPU6mRS9VX4bFjvoTwaoQw9YDYeDmQgW",
  "key28": "54dasrsnFJjjrx7VeRYRao81GWag5FGYjtJ8DjeiVhue4tx3a9D62xz9ZuhRVtFYsqmVEhzjVyw8nXBHbhvR4kqq",
  "key29": "3ZfaE2VS2d91PpXpsttJkSTzfMTrXRcG2rN1Wyy17oRhGeZy8GGQ2GUcKwbNP2q7XCgpfhAsi8jG5esJFidhKgCy",
  "key30": "52imq4C6wHhDgsA1ZzvMu9sN2tAacSJoAphtPRDEeMtvT2RZ997QkpMULMQCtefv9XQuNWkntYhGuxLoXJgKLEb2",
  "key31": "61hopznH1RQNEACSozZRxnCBwtmWnqYN12VnZfjFJ335tev6x9uU6mWaetDXxYmuU5PNH5HvCncYPejNjeKgmz3M",
  "key32": "q7yD93d1GVEwaHSbu27hGVydapyo8kpBf41i748qP5semyJ9H5y68mFTNGsqnpssVt3vj4ZMr66iSXMAW2gLbBc",
  "key33": "3KXjQAF9V1EfGAB74Bg7SD9MJD6MaTaPWCFKcHm2enhrRa9NesywFBetLsig47z93ZD4wVWgpTwr5oYuX4FKGKtp",
  "key34": "3jd3RB6ctr9f6FYVQWaYRbTpnVCxWbv5iAhUQi1xtMtSc4yP3hiW4u1Jawbz46H3pMFMZcQ4wx5eHTrHXpkvdFPt",
  "key35": "MgrusGH1vQ8iVNR2w4R4CFE7Uib2JVW3T1bh6tqVoRqgstpJP9Ao8m55KtZCrKwU4CHYeRa9ngJu89yQR67vq4x",
  "key36": "2ck5wBeCZdcuKFZ2Mz4T8Y2PmZ3WS1grzRuQ6agkiVXdZcBTdBYH94z2xqoD9ux32LqMjk9tG2sb4gRJMgu6zKpQ",
  "key37": "JQaFMTRLUcEC1gaCNtTRe4TtJKzHSDVpgKxVtwhFufvH3wJi5wf89y99Db7UgAYcs6WtB641KBuou4NqkuJspfD",
  "key38": "4JkUGat5JZdBryPRctCPLMiXmvkmzFMLaBmagZRuBS5jT7vtMEuMzuhRJfGbihhEJy3YG28qqtU3KDRVZDSyLRGh",
  "key39": "JkC7urLu5AV5C6opxUchyNg2q514dokQQB39DqLrPjAEfADh4pur24bjbkUSSKcCyoionfZPjmYddiJUa6dUyDR",
  "key40": "4p7DLpnT5WYqDZ79Qxqgvg6KxSa2KJQBGBWf82uYvfk5TUjFpNDGynzu9HMEYQrtkrf8pA58ikWuU3UdrCBb2dkL",
  "key41": "3FxQvMyWvTp7VRmUkERhYmr7cuJDy4osxez2mEvSygzP1mQ1Y9EaxaRgVPZF7D9HNLkURLBLZ27fVYvep5YQjfnm",
  "key42": "3yGCmVcXg4VJSyFmeWkCrcp21EhFjZ6ZPEGA4tTFtJZRgURCthiwtaM1SGgpFWuwEY7fzGH1hdaNiTMexJDiKCWd",
  "key43": "5dpSVWUY9gtq9jUD8QW3drg6nefSusMRn4tETm6T6hGqEpzTBh4cquDA47uox7YGknxQRmaxRcKg83NEbmT5EeNT",
  "key44": "JFVfX1rnBZaND2hacLq6qBX2pVZs8nW6kezqqVeF6DNTj9ZC7wtLDZLmd3vGUWXd7xx2FgX9CwGiu8TPrLJFz3d",
  "key45": "LUqxCYTrQwSCk59b6XpVLXLaALZZft7hAr4fKF9oY4ZcX7XAi7r6LMt1Xmg4sg3kHri7LKUxDGFB9zLjByhsWx8"
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
