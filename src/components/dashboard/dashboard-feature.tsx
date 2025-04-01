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
    "vZBi3bSMA3T8S64SZFAp4Fhgva84Pqyxoj9D8aDtpqp9884zKg8nHBC16xTwwEJR81vBzKUszwvgAArrHoyXqy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkQNt2HcGqMMepmREki6HzfuTfXPzhMHjKFGCn15xEdFbPCBq65FRzibcGXTh8V4hN5JPgWupB3ZWER22AQyZN4",
  "key1": "7Z7ruteTNr51KzL3g2GQefK9RDDH7mUzu9rWqHYc3NbDhn9Yy5G7zARBEGQNUS1Mu23X9ZNJJ7Y9sVRDJ8xRDpy",
  "key2": "2z2vCSLy1aE2XTuhVDdid7zh5H3W7jxXhchgb249GSk2JALNjT778wUQheHtJRGHnAdJLEwbKTZZsPmvpEwhGdsp",
  "key3": "24DMQ3YmjrfH9ytTXXh5HX7L7f4e78PFiTnCy6i6Xgv4aPRhCXcCGPg3YF2stCTP7HAAbUmvqkpDKysP1UNjHAr3",
  "key4": "2eg3HGZvE7afwZeLRU3vHC4RsyW5dQ8f8R8fiAZLbkhVmzUhMd4npQ1QRWP3kKiBa1ApTMhhkudmCUwdrrnDbGKe",
  "key5": "46nvY3zk6nVgVZcPzouUJjke6F5bFmgnu5KY44sQpLbMMmEWHSe4XHyZcGNmiZePDGtF5Fc4G4sLiLDRx8HJa4uS",
  "key6": "4WjQ2KGaRSMRxKJ7fPqY8P3RDHFzA4AJUn9HSasjAzHkNd3QXztW5QEQzxKYAiAKNgULvCPjobXuKz3TqE4Pp3bP",
  "key7": "3GNfZhncGVjoassfmiodaQDZrpdrMuAnxTyRE1KDz6qRxYCnr6g4UMUhwaSwcQmmZZyY3rA799dqNs18w1rsjAPp",
  "key8": "bCK82fnmsB3eMGj3z1KysdTEjstkYGfJWCb9LRoQ7SvpVXwkqMVgyMGEkdh3fwZSH74edhY39JKErq12nMHij7D",
  "key9": "LEWWfvmsaYsiXryGqRBUBxCciJRQY98qwnENfqEakNvR4AVsPKcfwmG5M6fvYAHqJJWoYR99q9snKcgqFuEmSwy",
  "key10": "4AWN13Gr7yjj1ZhzpGYkhB5x91fit86MVNQf84GBay2LhTSeVCicAK3LaSkdZKmP3DMcn3Uz6PwFPeGf4kz6geyz",
  "key11": "5VbRwqLNmkc1VetcjuyAKQvp8YMZoY4uLb8bkZSv3skJaM8hF1tzpA6NyfyqgULcA6p81b5X8jNJmAkEyj6zQRs9",
  "key12": "2h3LNSvsQaWXLMAhZJmWvniQVkd54jxy7Pjgov2ErFDxdLU6mqrfAbfWP6ZXu7FoKmhcszedtBR6GocU7bvhYMqC",
  "key13": "5uLXLj3atGSNi4D5U8KGmcw8HEkDuYMzQvaMycMaECszKikxhZeA5KbSyZuUhas71bfE5VJ36EXzCbfD4CnhNDmm",
  "key14": "2K1iv6PPyWmCxTaWZrhutrDNQSA7EifmMajtZZxk95HSG9KMSRrojfDG2fvsu4xpdvHkMt28eSWd7PS9GS2Cjuxr",
  "key15": "2UcaVSinAghyMNGFVcnDEoAUzZNbDWWdE7cf8Zx49gwGdQwDuzuXVm3b6wrQY2uNuk8ek5zma6pCpUfCCRVKAGJ1",
  "key16": "5RPNJHowNFmm3wWvDSaSysBBttsHEszUkJBqUwUpv3H29HhRwVCyVVnQT3QW7tEmVWJcsHQGiFMNPRUmy6MAvsBX",
  "key17": "mkBUkp6qLpLX8aqDJ63dLWrCYWw6xPkkDqB9UniADXGBXrEK1zmjz7Li45pqts8KFJrFcXgiwMJPdCP4MJDcUZE",
  "key18": "2iGHGQtWcamKVd6aKV7ZXd8RbozXQik7YAGN5FVKbwwHd9Jcg61EnQeNPvkPWdM4sKAtqZxAtx1t3ogPRsrt5kYX",
  "key19": "5gGUJf1G1vseb9QzBdYM622WJDpJLB9dh8nSWDKrxr8vz2W4XssFhFrv9cAWKx5NDCe9n1mBTYjTkpkVosSt8kGU",
  "key20": "4n3tbDt7neRW8gc7Q59JFpkEo7dD3KVJhTYkxnye7QWeewXtNruDn5bkhRzKTf9P9eWcE5Bf83WLW35R9QWLCaWn",
  "key21": "38tfXSwudbE7e8ZAghRtJJaWko1X7BfPWK1ZfijyaGFEHB1NvFCQugsD7MACzMi3oViZmmmnRhv116MTzTb6FDev",
  "key22": "5vJJfcGNSpVqjGZQTyMS3Qp5bLHutrYkS93ViW2idZ7BypEsv8tnpegrgGs3L861AXwpTgkp51Ld7wP1H2SbQaX5",
  "key23": "4y3byJJQew7Lcmde7HZLJUoC3WgfhAYgz4YZ93YZCqdqgPr9uVY8fBbwXUExcgYYoNpWuZpfx34tci9YNh3Pc8HJ",
  "key24": "3VELjaJeqNuuoWLN6tZUXoXiTXexjv91v81Yi9KwtKsBxYbLS6j2Cp54KDesTvX4SU4X1D9fUcsXHpQu9FTAp2gh",
  "key25": "5iTHNgEZxzvXtgFNn1RDyvXCVTWb86NBTtkZQT1oK62myCsoqbvkpUWT35SJacnbdYDgGrW1nvPiwQaMEdTGQt5R",
  "key26": "2qEGRGTboUXQeB6eM7QpcLVLvteoHB5QoCVLhk8bV8TtTAKAKSLcufuy6mdyhDppp1Ryg9kf8ed2xMZopyGajrbd",
  "key27": "4MnubVShcNpYF7Agh2URbT1wzpkXpCwMxUkXsBtXwAdwHH9kaMeTuk9fesmCWZQATRzzMDYRzoop1VJy4gUX5Sz",
  "key28": "4GgSRHMgLPYqPC8ZPCNhiPkPE7ATWePHE61BkLZs5MaAZpyMm73Qsnm8CGYPRCUCxg5bs8AC4kWP1PtndxKkUjDU",
  "key29": "22dnxRUyR7xwwWTP3WjaM5tktW3uC28hJ9JowDQ8tx6TFNddDDc57u16W83PCMWWUy3Fk97LKS8JZ6NqFwh1Y2np",
  "key30": "FRgJiPB436WsP1NiittGa67L6aNBWCKhzjkQCN4HvioPTNHrpgG37CGSbYTcyqL2WRyVjSwPXEWtWBv6P1sYa98",
  "key31": "3uR7xGzDT4oECwuHzaHCe1TRAKJd5rvG1vxg6SQUcwu2qFWgwco4KNyMDmqELPcQmWZUmJECT6qwvwtXEtxvY7jP",
  "key32": "66grBVok2B6U8uwBJwTK5azHftyweuTx47AqeYMhm298JyAqRwUuKwYLWxBCbLEPy6UBfdhzr2UuBBR96HqKm1VV",
  "key33": "5JaKktr7CsCdyBVqsEE732yBBLqM1kutf7dALqEeLzThRch9FZAceZV1q4raC4T3syHuQQ6k7GxG3AmhS9Aeo8Sy",
  "key34": "5karCdMsNmjvXTdLaX8AYJjAzphhbKWeQVirgsi2VkFsRAiZK9de9349phWJGJEudswKbwa5df7L5P7sY6FWvW2b",
  "key35": "2KtHGv5vQPYjzSZkJsTNBD9vi36rhNg8kWrazQ4bp41mfbdYEPUWhD36kQDfTYqS4K253M1PaPMZAoEMZibBUCcr",
  "key36": "4TTdqrGLLeG2w2Dyv3TYMDtqMKJgjVAJ5gzgdKcYMZE3jgYb6Mp2LpX84ot2pTpURErELuonweVKRf78hwfzQT3z",
  "key37": "PGYpPCG7pg6Ybx6AjYwJh5kqHsRKLVD9c5C124nNRZr387jFgT2JUYdqPy1Pg1K1aadxxPTGR45jrbPWH1hPxVS",
  "key38": "9wVmMgm9iBxLXV1AQfSMxuawZiNY2KYEFot4gJc7jbgJikBaX22KbiRY22j4bvzJE21RDiRvrrmWqhZTEvDTWq8",
  "key39": "7a5vG7dycxLby5VwqtdnKr9hWjj7jnRNAiFXJ2AHZcoJa8VhDkjgneEdfRC3L3jzLuXRKX2XLeM3f6gxpZL81k3",
  "key40": "5C2fzZ3j6UZYMyAFUvr4yoHvNYS7P5dJTYjDh3NvMxo4ddbAird4pMahXiwLbDQAn3FEj5a7jj7b6pCRCCewKC9b",
  "key41": "241FbPmwKvN93ndNNpGUarkJmRNboav6DZ6AJMRWiFB5QkdXXj8zDcwiXhFsrsSfBsbD1bBUFp3E5qjvzHqH7yHC",
  "key42": "5ehtKjLGSfPSnkfYL7K5YGdxWQzUAZqX9qARFAgd8vzZQPnuKSKG1b4GzNJtMG9vrh3rjrHSCnjGVofJjWfdV4G8",
  "key43": "35dmSoZpSvkUuTtbbTFspvRva7qEoFYbirpZ1Ru6nXehZj7j6bqJUvPHrEbQbCN9aP3FPgPDm5cgecfjYYX7gdpB",
  "key44": "2xajQkcRsKPyPM6Q5HZ1RBfsWeFzPdX4Ei6pXE1oxj7dTDmSAVxDf15SP6b9T53oq28N7GDYUgQQ6hXojnbWxg58",
  "key45": "4fgGfKyBTnjRZWSqMqTDppKWMsJ4tVj2UgoPuuQAwCcBxCTPL7LbCpqhXzQpXmZxA6SLFXzbnD6djRFkgGZobD5L",
  "key46": "3jnsCDe8DebdnVyxhscCHEY9M7TLjqN8WByT1TcyToKbWPr4hCuR11uYh7Z6h296bLE7huQ6YC25VeFrEq9iG8A",
  "key47": "5cBNUVMUjLvSJyirJhR6waiqmS1TQVYwYmouuFyGH5AQ9Po6eZxkDdiKnqnj9fq1PYyTu7yHqtzWojkKf9Wuvhhm",
  "key48": "5zMvgby1QaZmfRYx4vfRAxmPeGphn2HkQP5zaP6Vxm7g5K2TWVXuHmFac9dnKKRNxWYt7KrfTo6CQM7fFnffu4dV"
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
