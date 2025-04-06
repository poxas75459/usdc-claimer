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
    "2TRgwXo8m5d1gsv3US5HtcpUGpqeQ9MFJJLtjkhtWiZo6FzPn5eTtMSgCKxaDeWWJFAPRPmVkaAbzqWaDaRFT81u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pqp6dZtvQn7GpmMZTA7xSNGFskGhk4bZXJSg7piizV5z3AwYTqT1C3TFYfhFTCrUM34JcMWw8Sx7YSxWxM8aaLG",
  "key1": "3bpgjsdg1LpyT9n8bqGvGMnm1Xsd6B8ShVy8sDAvbUN1mG3dCq7zRBvHcKRJRsubRu7u6s31ozKh79MHqtfij5eU",
  "key2": "2431B2c65zRGFdFjhKtptugJYX2rYTWZEKVxd8Z4GdMaYTo17WG2M38sYKm7HxvNjPhrUMsTEQbo5GV8Ag7nsxE2",
  "key3": "5hsx8g6Z7MvSE12E2NL4UWLigAPPhF6ium5DoJKCkpYRHLYahzKFSgiz1aXPGMVn7QAfFF1sqi4HwudyDU3YfJo6",
  "key4": "27EfQmHh2zdoNEnMz9KAnUTSr65i4FYxJMx5zhuYLTqVJmk3ZtrSXQe9EywH62F9RJb8M5uEAiWtjPoJEGZZmeEp",
  "key5": "1267hd2xeCbJ7fyFv7rB7yqsGAZoHaC1qvJygjAQkfkQMyqcXmpT8HfuBzpRVU3qF6EiZT4tHxQXFmuigiy4xcT2",
  "key6": "66k7xr48A97RT4VxXbJNX1pCKm8zM2hU8QVJq4nXfh8Ug2KjeDL9BWH4s8suckcbWpoHDjhQBivo97DeRHaEF4Jq",
  "key7": "2f3jRa8dpLrQH6ekHWrKooTgdvrxyX4XtETEsca1RtBfJs8wwPHgrdWVLqv3pM8ye9u6tpCSjCChwrV45SFjyd4u",
  "key8": "4tUZdgeySgFvgWAHuTGY6jRQ1vTLxYR2fSWzMUhZoA3tTkoR1TWf6kQaVLyQj2zY3VEPWNpBKDaiYwb5zczEXHzV",
  "key9": "2mDptvCvA86TdiP1LDLKuSXtHAnkMBGB2k5dmrc4SgSfRoKtgDkh4qCGEkTXSi8xe1owgaAGA4gKuE3ocf8XG8KH",
  "key10": "2YxXKtjRsSW14rZWdCSdCAxVXDwXhpvzvUiqGGDd1jvu23q2LnExFWRJ1JhLXUnEAczC4popDYMSEWQ7waTc61MK",
  "key11": "2GNw1yjqmDoqPJZZqsu7A18Qh4LFShccAko8G7RoovExJqjhuXJ2DcT85ZNUCSL7nhVeMnjrj2VMkr9CmmTSTz2W",
  "key12": "2dGJDgEnhd8pohmAXaXNvomn3F77Qyfvt1XL4RQw3bB6NKr11WZhzV7p5q2PwYqbkHKDfCpoVT2NEcf7BRVRGNux",
  "key13": "Sn2yLr2PQynFymejKuBoHdwTywDp2cdob7VdwHt4ApG3KWNgVefshkHnRt4CKFzt9Y5QVhQ3J3JkUd8wNCB7CZM",
  "key14": "44zHshpSjVtuNyDE3SwCRV2ZVq89DSUPTsmQ4mijqD4N6gChkTMByUuXwzHGq5deYxuNF6fgzxybx5pXe4CWQLL9",
  "key15": "5cQ4UYKFXXDr3pZAY1Ngt6VjSXU33W5bzpQKFJJ9MhLvYChYR9CaKyKUp7jDzWWEgUyaKWTB7J73Pxmjduicp44u",
  "key16": "66gRg6N37keVU8eZY1gVsvBmq87nSPVb1T3CAZreK6acwvS5rmDCTir2hE7cj45RPJQ2JuAmUJcuj7t4B6dsg5SK",
  "key17": "5MmGiVuZ3NyqyZCiegQPyvRbdX9ezXay28Q4md2F657kPBR2hTUoAutN5qkkLaQKY4i4bhiwXLEH9zpmzhEmHbdQ",
  "key18": "nBi3442FmtdnU3fGPS9ksKyhjAeXCJUEnQBb7usRvnPZb5oHiuJMNYcqiSvDh6JUXNeSrwHuQjWAeN3VB3P1GDU",
  "key19": "GPEBb5nHfP4UQPunJUxwNFz3qhERD1icAHNTdCEQKKAFrEkpqMPYtYDk8Ne8AbMjz9nLm3d18HHRVFw3C3kMHzh",
  "key20": "5moZGTmEqminDhKCYJM2UdFnYuXZdgUXEC2LYs4useYwcFwVhGi1sxrHHprpz6GeMZiruUBnBZc3BtvjqRb1RVAk",
  "key21": "4io5WXXPLKXT1D9Dsee6bcfPc58znChDMc9gypnbwHSCVqSz9s4qehBHT1R9p4WWQ92xnG3VMAGeMaBHuYGqXpd2",
  "key22": "5vrh8tJKxmHqTrhN7Hw3GS1T55733hrQMwgjHRg6UxWEnXofRtn5JDihfHzgTf3rcpzagGmQzNwm2brV935SCHt6",
  "key23": "4FYxABV9aDQXo5CZXJvhzaFDpNgsNy3Hu7PNUkcdos8SJtJ83sVvcp3cPar1FstPHfHXqzENbgC8HrGmhb6SsLqw",
  "key24": "3tuESiGpsQopujNv8pB29XiWyWFFJthYaQf3KpaoCa3Hp875Pbp6XFamWTcaLZh8Pmq6KPpZNszARcYikz9J8oyt",
  "key25": "2mYenXH4cYg3QVbnGE7YSyQ6fBc13mXDfc68Re5o4aDgUKZRJxeYzUE3JkGFWRAMuaQWHhp5wGSC3n7WQtAsdMd9",
  "key26": "2GnoDkGsG5JRKp7xFyQtQmbSjJEFzwBt4NATUvMiRsevre7HHF3ZnNG15n1dcDhMcbUwf9aXSVnmVZfGac1P7W3B",
  "key27": "5X4Kpcj6kuc8WhcBMzh8vPaYfeuCx21xCUyob3qqfKpGA8v39n1cyrcqXvs8LwyQLDC3DcTsSg7UHaaegbmPy1D6",
  "key28": "4tVLF4QvxyeS6ytbUH27Fcy6JUjxwJXaH4winbuN3eesixxDWTiEWWEX4eU1abYnYwbsvi2bBbCc8w4fD8QULBR",
  "key29": "jzaaXjT8yAeUhQGaQ2TqfDrBxQTPeKwhMxCya2v7gUVU2XbtHMAyuuL7SLVdDvnfx5GDPNP77u92aQwPLWqt8p2",
  "key30": "2j1naURoSaJk294m8egtgAi1rov3GAqMYMCmd1r6y4vnzn1bSmEVsEWnYaajKYicW2cSSftvSP3J48Tv8kzaYgip",
  "key31": "4wdUv9hTsuZCRGc1nrrU2x1E3WYouPiy3SPVSMWBYbtFmoiF3nxtZ8JaqBq8AQzTxKDv1xoPf2WcKRbDL8mwVqUu",
  "key32": "2U7t9edLa7NNz7idfU9Qzc9k5WPbjFBdTsiM4SNE1de925q8EihoBQxBKdtTGXPrYuaWYCc6ZSqmmzeMtHkds6sz",
  "key33": "2qG85BKnLCfGJDEKNQYTjaoGwMkA2TRvT2prE8qtb8nAVPTG5DPteKydaAix9CZZLxUTenCB5jD2p76uioTEXWEJ",
  "key34": "5j5FHpywm2FHsADZBJ7a6PFtnx2C1zd5qn2ETvNef4NnMNzUKDDhXzDX3XtmEox8BU5sZ3ULdA7pzdCp3AGvvM75"
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
