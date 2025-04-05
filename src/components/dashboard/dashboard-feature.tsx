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
    "4u3StkS63TJwQxnYWKjzBK21ZwPGVJVva2rRrsvLXXkH2DJ7Zjdn4bf2oDNqBPKAPwXfNbfDV84AyEcB3Zr6VACK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HRrBM9b7F93t5xeWycVHUQcSijzURZKELiLGfGN7QkcFQ3HGqfq5w8Z2bddDUPpQe7zyZBRdD39tQ8g8XD8P3Kz",
  "key1": "2NZup1uvv4o8LdCJHr54SPBgECRxHhpmEJ7LbpTadRYSkKfUbTLLTDJVMfB8JyYQvtJSuZsCveyoAQaksyjKsmNy",
  "key2": "2a9FwUariS6ktFZ95mMLzUZgRbmDpr6LHAdv4Srg7gp3xT2NKqr9Z2SrUgS5Vb7dG4wTWzWJcepL1dsYM6nCX5r6",
  "key3": "5c3s3WgfZurzhE7kJUCHxG7yoUq1mkuXczeaG9U1bYY4bZsDXk3ZWwAnVmVLP5ZsGXoPYJmw16gGhzzE9MmRtFsz",
  "key4": "gtVV79njyP9NJnhmTMbMBABdXaJ6DvVD3YVNG8HDcuzprKgqhXQNhM7k8Fd993RkwoDGyWmQrBEQ7PdT2nUTmc8",
  "key5": "5zod2Lr5rE5L4YviuwPvJ4DUHvGBijAfFcLhb6MxHzH37WehMmp6GZLQRFaJNCyzG1cKQi8PARKrjEoQA8HbMtvS",
  "key6": "XQqdhisiwqzctQFahqwbK8bA4kTxvVmXcL72joMtoFfHZNjSmKFNkjV1q6v77JEqdMcva5ig1mNSAJB9FPCVER7",
  "key7": "bj2U8oPMEgpidfypt6h7oGCnnbSfgL7TLdXv91RBohWfGQiEWjACXifLkiJFY7n8dnsjdzhWPKe9ixn6DgNsSqz",
  "key8": "uMPvGy2Cfw5cg1s6tdtj1EFGA7zrcA1CWw3d2f4UQR7RS8JyCoGzM65KuTqBvkYDMHvzzcbkjku5rkzPXgZko4H",
  "key9": "3zu6Zv2YmpprSgYLkis3hhfobafD8jUhCqPbMbekmRRrwBMH4Fif9jyWkHfo3xXvyDFcc1pwxegjhjB3yCR977sA",
  "key10": "5qtAHgmcNxLg1nsfNBLMaXboqALmNCj4bZmGDeFTSkU7sSp9aHGkAsLaptgBJB5s5m7JQeMpuRjXXWpmMeLV7eKz",
  "key11": "PgcJVMNxhnMZMie7grGUomstRB3rMZFPqRfVg7A6g3BAsxUy8TyWpzaUR6e9gEWPsLLn4zNr9Epapb579eEFV89",
  "key12": "5ArbUw3aSY4Zap3RkYhqGTEeofBmmmLMefhfqWTn9ryYKb4pccD2wC1yCk47unZeDmTfUz1keMjFMtaB2skph49s",
  "key13": "31Q1hFiiJwoeTbbjCvEUUBuoAcZuLMEP7CakHR8ddHBAQkT7pWCfgif3GbeNgYupLzevgfwCbbzyq9rSQJreYnLp",
  "key14": "5jqytA8UeC9T1uYTCE2xfLgHtkbs99VH9Mk48GqT4fARpNS7naGX9V7hRFhkVSoH32znfSEGFiuq5J8YyBYAZ3au",
  "key15": "4mqfoR7btKfr1rNQP925ZGQyaFcrgtTx9GnD7F7hsqrnwcf4w8X18QMpgxXX3C9E3mkKZSFKUj6wxguwfb898uV4",
  "key16": "5SM7wZJadnd8iF4zRBUhCP8eboTtX5awPbro6xkiiRdEhfYHZ6AUHiVnZiN98UPuQATmSy7dHQrEzhtzwcGU8274",
  "key17": "2GG4u3rmExTeLSTXBDL155jCpjduiV64Wzvkokzc9AaK3ZvVjaigJNRzPDVAxodnkbGNyv6kpM8BcudhFdQSLHAg",
  "key18": "66aZq87PMsQHtqkHT6oQ7FPhBXkqSsJo1XmG4LCYumbXn7mU2R7bW9roarRZCC29AfYKXFDx5qk6c1tSfe1wUk2N",
  "key19": "2Fm9T6d7gry648fAhzZtwXA2TF9TJBSVK1a3X3usY9cduFyQejy74x3KRop53TNc69s1WyuXKLUnfhdNNzpmhcQt",
  "key20": "2xbxHGfkH7J5pcEof81eFPXg5b7xBr4x6C8JVX2gnS6vEvZZt6temeirf6wzQjS4spkrkroEVToXbhs8PBMiaMrm",
  "key21": "53B13MTPoe9pQiVYH4D261kXG8je9Fe3i57kmGwLJztp1Cdz2i4bM8HQzkmfYjTzEufi7RC5DmyE9c1bf1DMeHKk",
  "key22": "5JyBixPaWSREyEEC8JaM9E5Gg8Bmx1DB8LRA2fBfbE9YysgHfGCSykrbhFPRYRdrWxj2Pbdv4ZQp8gcZVY8ahefT",
  "key23": "4qwGrggpwnB5PNXeiqJeuQ229TNNT7Vn68ZjQNauuJzzzd3NMzMxpCxaLqzucaqAq7EPeCyBbyUTumzk2bLLxSsX",
  "key24": "4Hbb6LexFw6HHiiHVqZcLMaAFJxp23TtMXQDFo8HRhvsCpsyzkUa2GLEMgabN5c8uWhgfyDrHyKdE6E5F5oRdrGC",
  "key25": "4478ZXkyBq1N8KFFduPUL4RPDcXr8SBHjTh7PU7b5JuKkEHRJZBdXYvPfoEqw3Wrjx29yJTfndF97uxgQnM9nogd",
  "key26": "4NyM5uGQhbNSpBqDrGJGvaG4WLaKJXyJjVAEoXsUEor3BRaLgK3sxp8RsXqqLpumwdec82UNomPgqcYMBgZh8xq9",
  "key27": "4raFDQGmyfD8W9ZzaKtDiArn2V8E67zYCYBUKUNPkK9yVuk4wtAbCTv5nJ6ADinqvAKeRRcX4xJa5J1Mm3qAJX7A",
  "key28": "4JLCzBd9d3VfasPgGjJenQxes26hYafnEMa9A9sYK6PNmAJVv6BmbV1oeiv5MTpLJ1BzVCT23miZmuLnzUqgHaVT",
  "key29": "LudaTfBAM7PwcCaaFqL3Bxe9JHCt6i2fd3ivad33PS2eFJu8DJ3jamtBxHyPFvA3NEQGtMwYnBiH6NbmaQ6nwLW",
  "key30": "8FztnR9TzV2qHnGz8ePNvq67YJZoXCXauZP1iJHoEYZ6UpEbFmMjEDF7BMLfqzbWBYDT5FyiUPR1m4MZs1ZyxDz",
  "key31": "PCWvt6ARniL7XmX6xaxvY2N18PNFrTNYsMdCAd9e1zxFjsM3jU5AfzZKxFmisjvQ159CjdTiuw6BTn4CMxxQsbp",
  "key32": "4VKahswuJS8qd7Fdu2xGsWrsU8hPVf8T2eYFrzYBKfuC77AyJXQwhQpKrFLR42RP49zrCWkXM1vxRYmuvKcyDet2",
  "key33": "4x1RKh4RdRqDQmrTa1fmuJAjRUukxwYGr9fAyTWxnQLNqp2Bj7weBuxuhATigu6WNQrJj4YP1aAgMReeQ1NFXdN2",
  "key34": "8ftKCFrorS8waHsL6B5NHoYJacZdJqecFHbhqA93mk8T879bQFvkxxGUqXyLDqpQ8UcaQ16dBHn5SZVbWBRzVvv",
  "key35": "55kMSpTqYGRq1qy8s4kUraGrcxiuQAiF2VELkeuserWdVtYE6HQMhZTZkNRNwJAaBGCwSFQ5hkcWzxtGFCTmZxbQ",
  "key36": "2s9Gkwh1q3LETiSc8y7o8PkTx2jg1mBd3b6kAczf3eNgQVs7b3tbg7WRZAneAWEtivR9ekSw2L6CA4oqu5wfLgkX",
  "key37": "4wNCsQQdmBr42fexr5qvSStrJa2vn37iiPnP95h5ayhWhacFdDVGAvaUsv3SPD1yxpXDnHQ1Ry5qSxLqo2RXXFa6",
  "key38": "2qbJhWjLoYd4hRUKyjLvMDp6JNkf51xCEMXhdXiV6c18GFTpJJiy5sRQG8uM2PwTYkmpDUBEmDbHHSQgK4GREbmJ",
  "key39": "446vHyk9mYCs1E4iKwoWMzqBF9m63noGrr7P9JqVk3qLVdJL24GDWzPauHC3dekBirtdBuMDm5tjk6ASWjmonQ7o",
  "key40": "4eEG27WStHTup9uMVuydqfw8LnykdVZ1HLvszDk8QT671y7ZYSFdsuofpUggNQ3z1c7xWHUsZy6tLJ8u5dnTpFyn",
  "key41": "2Y3WuGKuTZ8ydvF6hPAyUi4qY8n3tcqMXkQKExaQ3U6t1B7rA8xVozREMv5jBSMNU1ayzz6KAKKsJVVdQJHgR2eR",
  "key42": "2TcbYLcq3Qdz1UyKgrVNBShxNaN3eYTcsyqqQzDCzGHojkfKTCMypAzGscR9pKzBFAqHBH8r4MeJFgzh2QCPsjq1",
  "key43": "38CqW57give94u3zsqMWdKxg3iaUHwLxDZvTk3Foi4j82qa5NFgyrB91FQXTMVNmkMyuXPFK8K8mWH1BQ2KsGecW"
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
