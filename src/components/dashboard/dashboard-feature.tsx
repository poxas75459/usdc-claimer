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
    "3fYXqkWNACAkyx3XKRJ4LHJxy6AXR8bKtXo3czpkj2GZQ32nQPPbru7DrfstatmnG2RPZLMHZvVAZ5YHpRid3nPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5icQfDXHfPXAqT4Doko9frHYqqFhh6MokvTT776cb8Pt9DB8zxdF65fsg5sFVR1MwD6XeVmMevTRFxGSvRZo6Rs6",
  "key1": "3L5igdqmvEULRQVZosrQVcrPSAwjgxTizJScLqQSBfnwbdV7nn6zNuEv1Cu124iMcVJuWt4RDCkCeQ5V53ck4ZFs",
  "key2": "3RmEvaxrbTA6U5DZWNfg8MWRvVM79M1n55qfX1s9R5LRPkcXUuiZuNbjBMATpVJboRDAehF8Sfoop6GukQkTPbMS",
  "key3": "4se8a3SFsjNfKn8j2HHtmquQBHQbDu59EJxLTHYhJyuADiyHSUC31kMMXDrzAF61fArN4psYsr8xogtKAtrMQWZS",
  "key4": "3MJjUcRZTVSshDrG5YMgHLQZ8PyrXaEGa17wf7XXio194QdvKmJNq8QD52ZycCwNPG8qDwhrTqN2dirf7wW4qtZd",
  "key5": "3Bh2VkhU9oEKzMxtNuXqBT3uVAMX8TJCXDC6bJMKMamKZMwJQ7aPVLHPqa5tzxXbzraeZSBfJSqYJmFAgvey6acW",
  "key6": "637ikQEXMwXufg3PcrNxLLsVjKEvkbH9ysqGNyax1HTsgXENiHtu9QtuFS41kzkFHZx6Q9GWQc1cExCG72QXvdvf",
  "key7": "2KUcikwFoYLDLfJk6Wz7njAd9y75aSJeM6vYjN76ZM8NB6qRNbBSEbKwkafErLKV6qvhN64gr7EePgA9SqDdt6pr",
  "key8": "5fVrMiTkuchzCDUBQ8BcPHnb7mt8fx6enCTkhd7nAiRgX8K5FXNrANPmPHYTUTWfst7qmsa92gUtwHaZbp8bS7aA",
  "key9": "3gSHxJMWpzGZwzuTbGr3Jti7cpS73Y2upZxdu8f2WXFPrBKy9tEEtsTTEoTjKtnghGnTYcSKM7gTpuggtNpo27dU",
  "key10": "KXTSiWdVtV4AjgzZ8UowyosDwxxYtxsez2B8gDWyQyhFaPMARuNESQNMY9SpsZ7dd6zZaoNdggQKRDGPbTY4DR7",
  "key11": "4mPsP6LVXsNBc3JH7v6UQ14ojPzhzM14P2hwsBHpeKTzanKbn8aAWiyVSh5n4ihDWAJeARtBaRodDdV8TKQn2gwi",
  "key12": "5MMxtyzWExoi6WVLEJBLcTQqXbxZt2dVndxMjZrHeFTfVCFgGVTbJ6umnARX1x5mxBMAK8smsDH4kpus6L7Y7nyU",
  "key13": "UrgFvyBmVRiUSexWeASphsyFZDhgF5Q8pcMRVYKBxiytTY55ACGMuqbyp7A4w4zJMBEBjJNJCQ1iu1rWpnobyHU",
  "key14": "4p4nmf1f6vin4juMc71P2UZwwFM7WCW8iF4uKrHTotVz2oNSiUQY77GG3nWQAnxtLVCWSoJYXXEF1zsK4tSQJzSt",
  "key15": "4zJt2jNfLpnQuwhziXFmtMSnMezCyMM6P1T9UhcmUkM5EYvsGy8xcoS7xFn8A65AnGVhFkW5oMk3FYXV7bRm4KsJ",
  "key16": "5EZY91VwNVBALuLcXVjSwAToFFk3j58ssPq4k9dPW2KLK5Fpi264m67Wo9CTGkSW3Px27TE7tdAGrDq2AGjERWn4",
  "key17": "4avvKA2uUSmgie4jDNqNLP3epgs1sVBPryrSPUpUG5LEfgp98BCft7ZcLqBBbNKSeoLArfMoim8tL1AGCZjhYSdJ",
  "key18": "4yLqtJgYN9DXjQiQgvojPTJJRAUyu1CBxSBqywBX3uFBocYMXkZasPdSUNtxcbM3JZ45MiQm6etASFwHWtQWWKkf",
  "key19": "1dYhA4Yf6Qi9tQPwBMGg5LfmMCjyszW7V3EeWqfJ97esLrQJLEzPLoBPQwH9pJqujB5qQ1cwUHeiQFy5xgsHzpG",
  "key20": "2fszQvgBT1q5ae3cpgFZXx1ArwVfNVqrcY4MZ6pB9yE97LYXLfTVuPi18dEAjBir7RY2KoF3nSxNDGYoiBpPF1gc",
  "key21": "3tuJWof6ys5XwYRcyEKWnbWYcr6k5ZTZEjTP719MoD5HwVgMZTxtdeswxBZYHTVe8EM656qFZNW4tSJAfyGVKC96",
  "key22": "2UHRF1AGBPUzwkdia8KgMb3xFEVcMdhxaQ8ysSJbc8Snbe1Xtp2EA6QTsQo112dv62BwvoXCzbSNsVffDa9mgcoF",
  "key23": "2qcSLwDQgWVrcqmJ3VnG6PAf1jebdDWqvoKjxPhN11tackcRRvLNfAH69o6S39HKKbgAtQtsqNMiWMLJv3SCcNse",
  "key24": "2SpL8ifrt9HXP1XbtvTrstXnDjhyvbkp6FAxMuB5NBEvkzGya331bw2MXJrD2MBSLAJgHLnA8MXB32Ra3L3giw73",
  "key25": "5CMY6WaKsagQZKuY9Ac9zWq5YZ6trvfppnw4xx7VpNJP5thKpfc6X94Y58dK2pxzQGFTv8ZzietjqQJQELd9XxwA",
  "key26": "3ggvYhjYohSQzKzFgmt8PXcseRnnVZuvBYr2iDw4Wjcyoxh3H8ingrN7iRr5ZLdGRyaqgQAj8p5RKp7hrGJEqryT",
  "key27": "4bBXyjxjcVexgEpDG1hNbFnb1nc1gYy7QqdQ5hWiSWDQqL1pnQakHBqyKjQinXJ9bdEENHydSkU55c91g4RfaiH",
  "key28": "27a44r7u1WJjNh4TXtEJHU8Zu3UG6TvANCxLRX3W6znoAuDzRypqfv4F7sfJBfywFsYwNizuzQaY3nbLsKA6L3qw",
  "key29": "2e1H2N6kJHnQLKNYgRuS4jfnZYwjtyJM4i4UZKAz14AFSEW4Laxb6SoScQ8oZDCGizneQKN1b7zffcczt2soKN7E",
  "key30": "2iNwrFvTbpm377i6B2T6NH3hKvSsXVySqjJzqRkWLf42JqLvAZUgRyKqW3Sz7XqtBvJpi5xWGit3xMRx2YAYXoSR",
  "key31": "3ypPWbf728JWfXGTer3fDiXn6R54pWJjkjVhUGsVkRjKVirnJabMbCamjtH1kL9QCkZgSsR4moxqh1krW9PJEVty",
  "key32": "2JSqTPnjDyrAsHP9ru6QvRxUisgbdghvRnUn3M4t1UiQ9eCCQZxtdpvmcxsXuSjuwvewwVNH6J6yV26kT2J6Tfwm",
  "key33": "4VPWt87oYFGannBaDoCGpNoS7Pz62Fxd9YC5p9kSrhzyuFEuVMc54rUdrEt7urxitf3trwqHbCX5VB4CSEiAXjBH",
  "key34": "uk7gBkF2Ne2jobEviW8LTP1q6tfdFDkmKtGWBknQhfDBdmeeuRUBonCuSVP2WwBBVkYB58TXuPNxUBfx5fMjHMk",
  "key35": "3exXL2yqF9DxbSQb8bHWBGLy6VVCmECgh9SDfNfYt1PkAopV4JyzUdLHvJyGpQburP3UqUCH1oFYpG6G78Cd7CYi",
  "key36": "5B2vp53pTYiJZH7QZLhpge2hLxSwJQXEW7iM1XhdTwGobVZuzv5sRBXvxxznncu4nqPRyAtYLms4rR2zvW5kT5Bn",
  "key37": "37vGXroWmbbVMYApe3T9ous8782aJRX4jSWQV7mBmouvdaKG3uXjAPmgR2E83Ta1p8N68RDuBxiQc6BMXVUeYnoV",
  "key38": "tR6YfgDkwNUwkadecU5aQ1fcLGUe5tN6grrx6XroVjp6xzC9Cn5zGZuyKrGDiRCLGyvy7qdiMfuhWpcxQMPvXco",
  "key39": "43fpW9rViGuMYhWzNz6izRYz3PhffUuBdTAwAS9y6bvvmpckmvBf7VbWPuttKraAzKATapDRZgtJNTQuUMwAa3Ec",
  "key40": "JAPpJUsXzewPsrgQkq9UXzeBkD2AdjPpDaVK9stxTXBycPfoac8Vtg5JVTJiAtsiN5DW2xmVbx4bJdYNeQDdxaU",
  "key41": "23f6gbdGGYD3gqxmTfKC1S3KUcxH5LewTf5AWMpLsSwvnwmfjTLHwrLrnJG78ktj6avgvwAwMmfJFcx7th9am4Ea",
  "key42": "2gt5Gqjokr6hd3rmwTGNNC3wnJdBehGdKdE8E5CseQaGY4CN8s1D9dhpWSMwqUpT5mATsr8d4cnduiuj8fbjFr1p",
  "key43": "4hCzc47XDBpTgwZgnw6otxudZMAWGfGUXmjZhs1Uw5QLukcvtZz8jiiCCk3xYjknF8pudDKchFDX5CjFFdch5J2S",
  "key44": "3QdLgi432PcXZHWuKXXzXJCcRWWhmn2qFrjepKGL9pzmDQJnjrTaVZyPT4YTMwzejYzQvPEvmsYtqQNVcM3pBUTo",
  "key45": "3QD3gEZcrV5wYrHwiFsoPJfpNqywnkecKKCzwBx5VC6vtaNTE56dBXAmPNECw3i73GaQte9KNRBpj2qCQi7tQ5Kb",
  "key46": "5idnDVZDBbH1Q9m2B8NZCb2fdANfGxs4db1KrHxXHAes4z5EC5nqccA63vVZgRHeyCcHnt5GJgsFLLjryWHecfEM"
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
