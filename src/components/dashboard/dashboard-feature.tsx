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
    "53WDJjZAXH1awLXeRiGncZd5eehFtSCLLuAKbNvck1kgfWY4i1b1a9gG7PssLRscKz8taLEDoMjsbStzqdRrm4t6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32BMygczwxGfZ1LY7rccjqbRWSHweiFyvHW118X6qjBADdWjP34B3f4WLxXU6dkiezL1yWwrDm9SutLG1RB5k7MR",
  "key1": "63rFWnU3MAJLT3haA5YbF4hXDgyuqYcDRpRwxGgWk4Aiymdx9ASvap1WvuxaAeZrpm2LnPJc1nHqyDr4DH7JaajS",
  "key2": "5Lb1tj67GGMYXvDoarmoqDhf5hqfJSKbhZF3K25ji72Du8GUdhKBC3LSuwQHAEVhZLaU8vf8wrZGHE1Gqt3afc8r",
  "key3": "CKhuJp6PA62RFUEFnHDFnLTAUaFdgmgC272Ep16MYfX3s6b9H62iV5TymWGUWNNY9j6ftFJJrV3KfTLL2cKyimJ",
  "key4": "NWS8F6B51Qn3eAVagM1hMhAhv6VWBvCuvzhydpLCMubZDkeNnmVXBDe9ccpJ1s7uVTbBsG9LXzmee3z2yEi1wsU",
  "key5": "4K1Uroz8xiQfffFRQQgwqa5uzdHJUUvQZJRmi3otLqFFRWpANdumgLi3uzpC9xnvT3g7FQuUoQGWqPcCs1AkizqP",
  "key6": "3QyunWGrMD2voGkhKZShA7RUH2zsZ17cvkhr7zmrwMLM6GLaxg4ermYJpXPxWpniewMA7bQjknTLZr1fsSr4v871",
  "key7": "SRFvpgGnGQRXbmteeGvcpNsfGNBELuUnXv3unopNoK3BpAzM3tMYGayn7i5ZRomELKCwtkx9ruTxfTGxu1tfFU3",
  "key8": "5haPKmhcq9RixzXNMXMT6bjpvKzMwRcZQDBWcJwPUJqX2QiNBQbtN8RVc31GVdGCHia5W5Z7JSFsyh9S3LH8XzSr",
  "key9": "2UUBdrF1tK7Q8bQ3hSLPVMCSDpM8FBf9HJyuamnegs6UyDnMBKydv78PDkSmtHDujGqvZD4SUg9beGX48UNkajoZ",
  "key10": "5z6cQpMHZvpNKUUWXdHeL5KBGUWRJHXsKLPwZUDK98rKJpSJMRRqpuHNkJ3Kevrj64GBLY3951yWWnyKA2d3rVLL",
  "key11": "5YgjepngqoTvPQQVgPjvqWpL8CzispfXSkNiWXMVP6Esh1BkQBpKhsVzwPiZ6cSS11DQ4YebboiqmEYGX4T3Q7Nd",
  "key12": "3om8G2YRkWD324xEfEs6fLXRTvS8ujghnbZMZj4FedWubqNCirGXhYeH7QcFj19w2HpEqaJzAJhzzZ65pHmckoA6",
  "key13": "5HzUPtFYJjvZNGpyiHDJ1b1P6YjRrEEuHD36eK19thUvv21dAic1p3zSJfvcF9iQmSVifwuhKCpb7of4hdU7XjpY",
  "key14": "5XgDtkdnWANrdDszkNXe6K1EjLHGBVXMmm8jhT9N92KxhBn6S48gd1HQ8cumMiSPEvUZgPNpfvtiacpuX2WwQd3f",
  "key15": "3aMxcxH4o4VbHYbsZh323eC2gctvmiw2Q4oywjkzYA4ZqYKDUiBDtzKAE6GKVA5BJVB5MnscnK69js5aotJw6xPc",
  "key16": "2rUNZqATJDtsnWYX7rxXpLTJ3R82bdYZ6uPTejWRz5gkNF6h8N34JdhGJU1qfZ1StsoKvFtdd1Jb63H7GpAxAWB5",
  "key17": "2rygxVeV8gEFSDRXS7wx2ZxKxB6hMT2uVJowUmvwYdZHoB3fv15zo1nDPwfjYxdvd8BH4HwgcsuRAvjv7uGGTYhc",
  "key18": "58dr5dPvyPShPAdKS1RaBW3uUUVazVPAxGW4UAUE15XaTsYAn88xbuQEaWjARhWLALViWkMojKcjsRggsTHp6KGq",
  "key19": "3ayRFNeCPsGYTmhMnQoykrMCtowsRn6WYb35ef5fTXCrzWQYQnC3biAJq9NsuazHcjMFyxGaiMeqXiEzgbCvRdwx",
  "key20": "3wHZh9TiZnBeun2iUiJPonH938XNArBLebnsuAaNP5CzXEx8YvvBF6f4vdKhQYrNXB5idJ2gM61Z7248H4z1mAL7",
  "key21": "4pwGYR6jHPU9kxJ4mf9xatd25EhBHRhrioE1zJSdbqT4j252NkCRu4Vb3fMT1AxbM6E45XP2eoLbkd14p8GA4Apu",
  "key22": "5LH9ReK25mpx64JGgBLzZHfVFxG1uTMm48Ns4f2Z5oDpsPw3MwqsqGvNgg8q8Jc6AuB93gwnkuxeyoKJXbUZPrEM",
  "key23": "tqUaCwsJ17dRiFSHPmhCaFUQeMZVF8YXTU5MHpXE8fv1KcceczLLC25b5q3W6kCAB9ouwkJGhXJkAH78q2FYtov",
  "key24": "59xj4yMusi2DgeZtzjzRTUTMpa3CWTFgnoA5ginzSREu8h22d1cVAhmHt8xJoP9H27MxR5MRJFPnk72TCAPLjtcy",
  "key25": "56GVBaNWHRfXynyyQAmxhybYuvf3wGcVC225eBVsN4Lv2BhM4hcb3MbmUk8z2XhSBmwYcAn9SWokZ4Fkt4qFbvev",
  "key26": "4DnrSQo79X9wdTignVsQc25SAouxfF5iCS7wMhqupi6RDWj3JNmCvFYMFcyyVBTTNjvvqsdvaGaq6iUA3t4GJHp5",
  "key27": "55bavfRkotj9ptgkvpyUppqXYBFvA8AtFno4oNxagTPNzSyL18yoMjjvWrvWXVK9sJx4T5t2p6qfApgrC6kXBUsU",
  "key28": "7tnpBtjBreFo3yR6J6qfoECERXXZfEtTtNsaHimdLMr7QcG3CiNiGqTpbarbtY5BY5Uq5BjQnXv1hUSGK7Nzf2Q",
  "key29": "58amj9tR3LjgGswfPfskcn7X7zGQzyeofdHyh25LCDjPKCmweqwH6P7eHvxyWAv3xikcaw4euMcowTJQDPFdPqnR",
  "key30": "3GxNAg2G59AfJGFED633U6SsYF6pazQNVzFviE1ukDAXHcnHvP38n7drczirK6ijyZ4VHtU8j4dsuap1EjuachhP",
  "key31": "2GPgVvzmMAV5LTrkXvZxHmi9m7HyPG15SbL2xkgfqe83fZe1KQU2nW22uMJSgaTNzXo5Z1rULHFaEPjNdiUd2oJo",
  "key32": "4LpunsTX2hvKSgdCKJHw5MeveWqmjhThM8aiJnVB46tguCA7bLWqeAxey39YJrVm316rsZtC377xFKX1rP1nkJsf",
  "key33": "5txmahHUYiWp6jhuqwMhTkAhvV4qa5bJx1KChr1PeXZbXjL3yCP7ry1TtBFeAAkVq9J8xbsJU8vLVJP88ymPMjWJ",
  "key34": "LrMqqqJDZjj2YeN4JuyJmXGWuo834zpCffhuLQwC2rpxESX6kv3okGbh4exvfxRgA9x8VKCXJ1dt2pKW2aF2Bks",
  "key35": "3wzxiUojWvgC46V2CKmQ4qjV5uZqfs7RAH5Ej2KpJ3ggCx8Y89Fvcq9hGKuLwq8bzhrnGrDmvfX3PLVEbmaHa99V",
  "key36": "5DHiSP6sgY7npJB8Tr1k7oagabVRC8aVx7LnDnysx7ERRo9v7YTuqpfwUnz9kCiNNMyfKnjrngZLuZstG18VdU1F",
  "key37": "36xKUJPe9ss4YYxfZshHRJSpmjj1ER2nBEarAP1DBMsGMJbEGKyX4oDDH3fxuwkRvKa1qVcVyyxt2ZsrpNmEgo5G",
  "key38": "3atZV8y1oPPrn25i6k9GZnjFC8L37RhQgrrgsWww6XiENAisRsJgqS2mHHFqQt7j4ELaK6pr2REd7XsQ38XTyBQ1",
  "key39": "3xSU2LH9g1YyJctc98wwSmbxgHNGNQoMZyTRQ5dojQBhZzSH3jLphtmuCVHe5iRiAqXaaooAy4GYoTHBaSUMmaq",
  "key40": "44A4nVpSg8gnZrU3civnp4v2W1TNpEk8vHrkwDpREAGcXpiB631AhkLF9d7wwzcdfQpaxeh81DWPApezXM1qeJbe",
  "key41": "5RK22aD5DuFfFDgKhNLGoNhwTmQVLXxzWVpmkVevxyhypQ83NyxtH7oQHrtz6J42eHonAdnUowomMLNh3jSEkW6z",
  "key42": "2qoBToQmU3cpy7xyfCnD2z2UTCqwHdaPeg4FKjV6qfcgzi2KssQ9ayTKKqJ53S6De9q8zGRPNgAvUkew1q5i7NKa",
  "key43": "3Nzf8KPNyjtRJ11h3vsWmGhh7wGpAnxxzLadnExZQUtSjWM3K7TsHEaLpAUbvDe7RudjHJYobNBGVnTL8wef3oPQ",
  "key44": "4cb1p67PS9h8WpPRNLdb3vimzLo5u5gkZP2T3p87aRwEe6UMMR7QY4rCKqwC64VN2XDkwKwYQfRCsPDgWzS6rkSX",
  "key45": "2hCoG3XtLM4GYHWWDaZ9RfFLc9yT8rcSvMV6sKgonrXpVoKMsPHG8Ngc7SpH1DfySyznTSRpeAQwA6pR9mbCVZys",
  "key46": "LqyPuyb1whhQ3VdTs5841Cq6PHfukXk7bc9TVfRoryVG1W9wWv6L589tnJUjmfj897vkEfdbFosYKhnqy7TULYc",
  "key47": "4ucm1bakhYX2bgBk178faCL2NyvZoDoJP3mqDa7qj2f4HYZ9sVUVbPcCZWbtfMBeFFSuVNFmBzsVjVW2nJaBdUj1",
  "key48": "3VkaoCpHRWUBmVoNqwqtqrAVWDv4HvPJFXYECANKBgQu3q1HhbFwUmBKg12GpwAq1N2EreETYscPCr3jU4cyike4",
  "key49": "4h3PagxtfCj3P4ZBbZdBwvagFpGRbbEa5rLUPx4cZuW6E1Q7rBTGWg2vFonKasNFaMEvDtGqVDWZJcvW41JiijP8"
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
