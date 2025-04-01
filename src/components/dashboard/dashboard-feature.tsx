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
    "4dLiQSNPjTZtA2LWNFSDs22ATsPeHrBLw5Cedd8yRuJW2c8kVaLv8CWuPebP9kDPdnmFqGGuTwPvAFHesDx7vrWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uQBF4mbNu47Qg75wShE4AAwJaDgcZdtTHRovmLsu9xCHW3HyqUebgGrzdzWmLERdAohEzAmbMN64Jgamkz99tji",
  "key1": "K9GW5sn59CAzxYCpViMdQ8dFuwjspdN5FNdUtbJX6L525BRkPmjmGTVrY9KNcVDPGXbjHfQhfn55gEgMCxaqwA6",
  "key2": "3KvpWyvgeweW6siALxWRWT4D2AbKyM1r5JpFPMeb4h18eghBB8aiZoz32jU7qsVuvMEXgnJRtiEsWjGLQkRwKfHi",
  "key3": "2joaKsauXVGyHsxyPUrx1thH4zzLTcKTALMkkmsL1NKXvT9pvms9YF9DRwie3EAdkrumgurYLLpSrWKSTMgdL4tG",
  "key4": "5W2n9xMzyAZygafoc3WnieeHwYXKBSPHXnWCHdeAJSvdyEdHkjA25XyMnvpiud9EKSK2NTeZeKWUTRJGn3Hzw4f",
  "key5": "3WCKhpPQqCaczGbUQpy6ygS469rymNMBWX9aJ7xwrYBvo96L668hmcJ6NmE9kDtRUNzm6fqfxu4PwTmdESYiTf5A",
  "key6": "5EbrcDp7McZzcf6yCWQwpR6g3QMPxGwHpi1DKo1dw2yrNziP38tkGXtdwFPVrVtVAER4EffMypCMYCYxBWL1k3e1",
  "key7": "5PhrHqrjQLMwr5vdNgMeCXfCRJcumWts53bmmqMTyxFjZANR5KAnpPYbh6Q8DXCYnz6mzyb7fafvqN2vkwYioqCi",
  "key8": "2sZ4q39pHFhiDDKrGXELRzwot8UY24g9jGACjrJVAfyRNqXBBsdoRhZHr3H6daBtqdhN3AoWRDXTyL8BoJGVFck5",
  "key9": "3ouH9q8NKxkYCVHQGi3y7mquMvPqMhX42AwcqebvKp73zBQoqgFfwZL9EznTxJoLBSysqHSANs3keMc3FrfkFD1E",
  "key10": "3igUfzDXcrCrsnMtz9QFZfjYZbgcoNn3itfQmPnihkuPg7C5fquNzZR3ScM3stkTQDqY9HAQqsvasjMyVhRzcc1e",
  "key11": "3ES1L5hg2MmWzqxkAeWqZUJN5CfuCY7YZrM6idQefaaMnhZFALanin69iJNUfdFQJBghVZfaBxNrxGM1saudPKK9",
  "key12": "2jY5eEi3Myr4nNyaJNyCMcuUh2NF9UwnPHa9oFkYpFcbZ8HgJVcpHj9H49FcW5XeX6V1rX6kaNwxXJYijKfL66BT",
  "key13": "5DbJyLfjHdMY87SJbbHD1dchpbFy99PYa9DG7hFRnSwPd6wAdytg2bmvCtxjGGGkaTYMr1wzAK6WRYnEKinhhVed",
  "key14": "cFoR1GkJGVwin7mPRvw5tBbHt2RrCpyknB2D6Q7xmsyYoiELuAdqR9cgPhrFhA4tKJZvNiVDiq8pjR15VEMSBrq",
  "key15": "2BiUG2QyAsjtebLuQCuiPcpchDoUVvYvYACpzCHnLjAEDj6Ub43bsSSaikKestEDxaRMBT8jgk8Jp6ZhGMvTSrZz",
  "key16": "3A8SMcFapd38LRHEshk4HBN7vgDDkW8ZGwDik6ddctXWw5uizRRkQEsPoGxrn9qYxPxEeEqpRLqFFuLq8uX2Vty8",
  "key17": "2zHNbpRZNdieCsxUXn2y5WsKJFLbHaX5EDtHxkAP37j1iptG3bVsBF5PP1634fAe5HLA39YWG9o6wQDxrLsNXXKU",
  "key18": "3M4P2dBEs4QAbPPYqr5UCR2U2JcVbfu12s1j2dXDDjX3A3tTH1buPcBMXJfc6WXZRxtHY4E4HLSAvU3LokfeJ1Bg",
  "key19": "2D9pjRijvKJNKxErSKTeiYi5Te8xB6ra9EBNPzX1dtK8NU7g7Not1HiXvYvgVYAQnbzqpXz8PiHMW2viT84tEnR",
  "key20": "564NbVhkiSryY821p7s4HkbSPtmxnXxeNjoQDL332N2PJyXQUgUANTWSfr3n8AvD5ef2Ru12YA9ktK3oWeHhsgLQ",
  "key21": "fBxJx5UWhCZx1tqdw8G7rqx9jp1kdBRxJUw8ADEK3NoNbJqr8d8zdfpQtc9jrHgsdW7eNw4SN2u6rAHCo7VF5tr",
  "key22": "P1pzdEN2FxS6eyxJvxJbMfsyGs2s8uVdVvPLcWAQrfuZTwvFnFxMQXAypLpq4x8r9s2R15tTQJtEZaYHj1fnJ88",
  "key23": "2d5G9XzsPxF1XgnsLa8Q8dNLp7nwChsby3Gns3BR1vBeZZ5EqA8k4r24ZzZqMZgxrY1efFDjDLa3FQLAzsKJAEqj",
  "key24": "w1Xp37jX4E2oxPdUbPnrWMwnN5K24g9xvaUT2km6DJu6Mya6Zi2UXPv8cRB19kpJShRURMxpBL36HfPgEcSRauH",
  "key25": "2nHGzwSuCWvFa5eF5JJ9YzFxSzmbFEc9dkRZ1mAQy9kV5R9PAsk1jyxR3hWFsH2th4Yh174obYkHZKSxbYWk8LDv",
  "key26": "3mJzcX2hHKZaDkiovFnxrVLvPMacBV8Uo6MtcAoNsn5THDwfH3jFkufw8tUeJyUt1UsKYxmCBPXH3Wi6ThRqGzkQ",
  "key27": "56HP4GSaz2XdaBWn9WCA8GkEM8APhL4wLkVtx6tmLc1juiZw4mYx9HhnX5Uq7UkjLAW3anFo2fooQC1VfJq5GQV",
  "key28": "2Giz7VmnEdvJfqBjfrk2q6c8mkrLoXX5occuJ7z7GP4jn7T1Ks1F2ZdqeS75VZRKxmkdF7NsHe4x8RXj417fX8QE",
  "key29": "38QHTiSX4HYrvo985CcHYtyayQhgKd67szjgM9gQKPWb6Qacm4rT3mk1NejGuUMsGztzRdrKF8Nrsqo6ZnwNKY76",
  "key30": "5rDvaMCWPpnrqzXCMbTLoJ4ZW2Y6wj8ye3dizJJrfBvoFtpEtLjUXAwVPiNe5LtkYefi5FY9oLKHZus8JAmfpBGt",
  "key31": "iFmxGvy2wPu421ghDmiVr3jHHvHyNPeUPAe8WnRTXBnq3jEjYx1x8QU8TjXtEBAPp1zSPWHZFG7kPsAUxaV1P8W",
  "key32": "64NtxDSgYPjG8xzkGHzoQztcWzawcEpveB6aBsF8jcZACy1wEsA6yMm8iSQmjYsVGzrn7pyxhVwy9dvJzsyqppQN",
  "key33": "55mtyKHdinuYD2WbH2Hyrs5BYFsF2RH4GiUyxDd3c2LZ8F5rmW2AzUdZyFQkXMVw1jgR3ACdLjQ7fmxM9X56qQun",
  "key34": "2R4pHMCnmGAGvQDH3o3oMEet7vCDWMtF7sKMLc8SzUHFJEfz12CLcVwCn9TQjmRXhJzt3WB2of71w6jLiuibZmrn",
  "key35": "3n3SCk4xPHFXxEdUSoGVXGJseEwtnj8Dr31URK3TYozc5GYSSgF7F3TvzpgTHWPhX7j9Fh5fzKbo2JxuZWfPjpSv",
  "key36": "5Tbd1kbeBfNDrV5zn7ewwPW4yrqMiBv1xo26kjeyENFt3f2iqxZqVohwVo6chUvk5BmMKAYD94z1rg4Xu68XWn3x",
  "key37": "5X9BxN5TqGHLyFmxQZp5ti5e5DnYDe93Z4gwwy5fPgTDM1uP6fyn41o4gp6uc8XButAx3tdgYPw7Ug7gVWwdGBCu",
  "key38": "wURpPtSzgn7s6F6ipN6jAFhUxQUa7qk24WWY72U5WjTsqHeHCVQjQn1X6er8nvkcSHqeknbH2WF7Dm3k2SAtntp",
  "key39": "4K1TAmboFvxRLF9RzmFaPjbUucx5GS7T3bj9hvma2dYkUemCSJRfU3iWCvTCJXVnKDPxojepXFGE46xj9rGsBKNh",
  "key40": "2sZ7hVohxRBE12e9jDYh7UkhmbJVJUe8gJ8iTordntRDD7q7rFUV6WJEzMJiRSQDPxyXufKcJRVLWPgQt6Tp2mur",
  "key41": "2RFBeWTciuW6mpzEgySZtsKQVrY4tJEnd9dnCXQA9q2dZRNxeEwS319Gkyvyf8xDENd8oaDRihJR5LCpoVwziXYh",
  "key42": "4ExdsRF5Js2hCXKECsiJUo3Aq6na9gJHL6HBaB1pwAcEmFqnXu4gqA9yDSawifVLZYFZWjUM1wrCBTYUSAjjBZbU",
  "key43": "3Wk4WUH1jKEL87DqZJD7RyfDkSME2szpHm6mjk65Gvdi6MW97Se5LCvYkB9MHa5Eb5Kx9Lhj5RKMLVQ3AB21yRxo",
  "key44": "39rQWRF6fnA9ZkWhHxHSwm52PgTo2VHr2Cq3zE5XhUPBSHMfyvSq5MCcMXFhyYCgq9J6yNctmLVweVVd8k3XoVwj"
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
