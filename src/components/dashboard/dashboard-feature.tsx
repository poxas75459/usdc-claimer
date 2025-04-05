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
    "3zWVJ4a7qdMyUYugMDQ6aCBqDnEvEberXm7sD2AijuLsKcnaRFYSYr1DvxfY2fyDqp5KRknErFMHUYhszTtMeH3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KtBKt92vPHx1DZNDLXWuHGX5LFhpezHXUmCxmwsY9bBBuzqcVv9T5VohgoKV2ZcRk8vT9CP4LhyQb5D8kyemybw",
  "key1": "2vjkdQPdpmfUcsu6zgyhBRpoDnRPJMsYje3aBQj7LawpoKxZnZvmcgyWNqwiLjvXd3rTuALy1Et7i1vFq2HvxmcW",
  "key2": "4in3tvpwMfPbCaudn7fkVhVg7BRYZ5eHsi5Jgm3PLa7QfszdJvaLnm4KCyGsixpjBfNzM85oKJ1dR9bUPnTLzEpR",
  "key3": "3qcDyUALqLWBBqPpdCgaAyzDkx6iDV5MGtKEVf6hGwktUDVJeHM2Ja5JjtzHPDnZoCatZi73a5cwxXh5eRZM2RuB",
  "key4": "4AN7rUaZeZpx89v9Bv417NVPc3vPHMfi4PqubAp3LS1eAALPv2LCCRBAVmC3gcCuXibZ635iGUYnkpVy7LYkKnqc",
  "key5": "2GV3bVqrAb7NoLbgYcMXspKxoQ62WTwvubkBh5uTXiR1RGL4v7saR94HGtggXnN537cog78Lyekr1gPAHqiY5vpa",
  "key6": "3q4yH9NxkSyCSPriXsFBcsjfKgFxeFKJaqdKydQsYqrjtYe1SBrpc31pvKVZHx3spWs9ViSqURX6fQEfukeEzThK",
  "key7": "3RqoZDSNMsy2u4LNpa5PVHam7cZH6P297wSbzYFkUnFFWFhWEG6qd2ra98qURBgDV8iU41p6S7e9rRJbYzeVCvpr",
  "key8": "5x4PiRNrvWQTud1nWBJihiNYfJqJQHWjUph3HQDkxDKBL8w5ANJxhxDFvswxREg8YsLVAjaYkCaZuTeWZapiUfxV",
  "key9": "23UjTa4DS8hwHxm8XTR7Wh1X9psrQuY9LQWAoXTjmZ1rJYmJ3RNshqtF74WQzPzVp2TPJktSmQowMobChKwg8VuV",
  "key10": "2pPUpCkchCVDQ1ePBVrCiBctZwgC12ZtRfqTMnrB7eDTamYTJSGbchgfuM6n2UgPtFSY1BSToKYsw2XxRCrqRHA2",
  "key11": "51BgGakcieha4yUHwM5eTBt22sqwdqu9c5i5PzXRHXhYWCuSEaLHUmhQsKY2BoibC8UKb1JgbNmMPuhm1HrXmVLP",
  "key12": "2xq7pi5z9RhNujZFcdfhoi91LSfkMmcDKnrDYcN43y9vu5ibhHyKQ8VVjYYjv5hZgrmYo7JwKsJ4vYTYUSqsr7aX",
  "key13": "DsMLSL8X3UefKtJ6dW22XFbjz727c45SEHF6pSZf6siW2VnhyJ8eVbHRtZ7wjVS5bs9quEy1eYs8AXBbJG1yz32",
  "key14": "4PhCCeg5Z9LhZisdLh2i2tmJQgxRMM7gWNV7mThZ1uS9MKBnjavPhWHCk79BMtKJgPbg1VZEyYbfGHq7EQWx8cxj",
  "key15": "4cx64DGQSFSLWCUYgicBSSu3ZqxR4g6Dk1WFJLYwXcY74whdjYxpqztKiPPZFfQ7nn4A7uu5L5Gh3vjrqn1jMsXX",
  "key16": "fGMHxkJTwiMyoMDTQNhELUsKZYromhQyPqnSQRRe7y2vuM58wi28qfDufVbCWjRxzzgQRJxxFhg2P1QAQLpyPwS",
  "key17": "4aq7eEhMeJe65bJwjNanmyqoqzjmCsKAqyamCpnB4wFndBhmeMpb6xNEyor6cVo9aMqndbAAey4fm6RAVeGvBFid",
  "key18": "2TTZGESTc2s1za5vqhNMAYB1K9xAmBsqcPfTcxfgZy2YqbZ7aN3dxyXcAigc8Azeo8ExoykRXVSQgChGvjDtFgxS",
  "key19": "4sAi31svzt42dYhGqVZzRUnXPRDX6LKsbdQpDT4QeCUuz8yWzFGjyh2jw53BLEBmd9KdD8rCK58RAJ3Kr8vqBC3E",
  "key20": "27jFW2HzrWZ5RbeinxfnXFtGP9LEYbfD8vEqvDXUKofvNs9gf6u6Kt6di7KZkApT74vayJMbsMJbVRYyJhja2jG7",
  "key21": "47scbZZAc7EZrDEWn43AetY94H2Dzs9mgsVBDwtfxyVrBHHnQdSmsTSM8hUGpCwNLd6fACpVQhs3Vv7F69JVrCWq",
  "key22": "5nu4EJKbXJ6b8aczVLpuaNj9yChqAPoZq7JzGaYB1PWFRQdbipnXDnh76Ap2k9AfmHcaKk7mrj6vYA8ER2kJZiyd",
  "key23": "2ahECmUhrSaPiW7E1VgvXMqhuEeQw31DWD8d1KC6H2vd2Q8ASJJhMcqW9Agg5xdehQtAcqyZfsBe52bvp1yNACX2",
  "key24": "327PHHUFrBxu7qFYW75zhCJ3Wwd29bX35VL4JUHFesQe9mLLKSdb7DEy8t1MzQFvwsd2E2244KDBvYtuKvnbsvn1",
  "key25": "4rD4u3KX6jxi2isPE8cBKsdXKemKs1N6X1WkgurEgggiPL2f7hFsMEEeRkNX1FPpT2TpgoFVpPt4eb5JSVbToroj",
  "key26": "37EQg2rsecLtKBJEgBoQZC2VxXhZtoXdsUw8wC2PT5YGyNDh5uB7pvyvSmhKmrNrvMvv7iLrrCYcpiiLxM8qQAWC",
  "key27": "FGaynMKUEACAuYjp7sdvWywwbTqTQu14cVBZ8VvrdUVRGDjvBkr7XVeBThtPvssUyCS5AQUMMe9ajLbFmJVuU3R",
  "key28": "2cQM7XV5PMRWJmTGGPatyPdf7i4CVr83h12kiQ6fvU5M38LHHZpvx28nPmr8fTQjxRAayVYPWH66BmYB6op9C5s8",
  "key29": "5He775ytjBmzC5DCeQnYXsJkEydBK41YHjCECPKXozcsAxKSDfiDi5tcBDugCATZMrY2FJjEZW4P4NkXukemKrt3",
  "key30": "5KspNrnv383sqVFw5qHuU6DDsvHDTGbYL2jpDUsM7a1Ur2LmpQKhFhZodTXX6FNwky3nguX1XvMaN5raPk4fKnTp",
  "key31": "5BcfK8h4H9Z7fiLkqufZAksqSG8fM7c7uxpjeSzsdK1qCojBaNM1NPhPTiJDDz7YXcjFjQeDCTWAMReQXo4CnLYE",
  "key32": "63Efjse6E39jp6QmiZSpRi3CtLzBenxdyXytfYuwCyFSpYPPic1mYBmzKyoxxq8XkdGifhsrjJ8jM7qJhA8zSraS",
  "key33": "4mHtq81CnFPCCXsUhBBjHnew6xH66wk2rEESTBndmNKVzqA98bBZhr37TFiBg5G9dDnu3csr3px1rGkKNk7jXQZu",
  "key34": "3ATorxkTNCLdU3azLg7SxLvooSEhTDA8apmbVJk7rNGvdk9WUwywX6mhmFh4maRxYA1tWUDS18amC75hpfGbWqh2",
  "key35": "3uvjEhmxwTDpcyWkpDo6p8vrYd8DSRaLv28PG7kF5kRBxdYs6L6sTq5MScTFJJ2Bkk3dZgij5eXHwUmY1MBSByad"
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
