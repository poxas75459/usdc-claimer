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
    "2mu2oqnsV8yi9dY6oNMJfqzBsVvaVkRnyfpnQVpoYXS5muJkyQok1672QHLxJCBWtoBj3B7mhTBXirFW1xT5DAaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKqd4U4Nx4h8tE4LL6gnZinTP4Hf5qiKKPDpU9W3zcsTYhvNpbiBMRzxFQzvZbvsoHsMGw8p8XGtvUqvzHMvzy6",
  "key1": "4GzQYByQ2fkoXZaSoxZ4gjXhoDcjvHtrG1Yktr3v87NXhfJUWjqq7dvmVubeHxUWS5E6BUC7z2LoMtyANsNsM8g4",
  "key2": "3mFog4Zug3roLwzYNeNi8R1LLhLGwd2mfGTXdAUvz8ARgDhf3Nk6jpRGW4KnvuDSqAzynnY8SczsKWBCLVKFHktC",
  "key3": "3wAp4r55SPQ9G6UnN7gFpJo8VKGg1KDo6di4tayojFwMMwRVt9BMerJuG8ZX78AavTC7H3hWpn1WHmn5ewQQDjT7",
  "key4": "5Q7CCrqQDhBTL3ywH3es4X283cEbC8wSSqirGXdpKQbAo8nESEdHUYJwkgCCtejV1oD3ipDLA1f4cvNSxoLcUNE9",
  "key5": "5QTFZZueUN6epDiTBjKvnjQGVzwqhYxwxrfnn5RHmkW9qbZbGCqAfCxVenEDufMdpUzcmMc4UBz1FtJ6s1cTbdgR",
  "key6": "4b1rrQ6Xz58mxS6iNL9PrBvPAkPHgxnUreBka8A499dTPgPZxwguxoLg1MtjubdieegoQT8g5oUppacZ9SLNsNtX",
  "key7": "tYqxQRAHaxdHwMk4bn8kjD9RA6M7X7ZwFJ7XhyR2AXoYFegTgmkA9JKTQjSSVmm9H3ek57M4JarZ3RUCtF84zRN",
  "key8": "3BbMDBFB7nsgCqm9LLvFVpgYihaCDMZW2xc8AKL3t8C6jfCrjQ6F59XBGzg2EP19izWXKfx3zaR5crQZMoZYhCwQ",
  "key9": "2K1qkLLoWK8Dt8fQ34UADsVfqsCTXYmukQJn7qMn3EsY3fuxn41uHEd8r15LfUgg1isXi593MwCSMYjZBSPymfPK",
  "key10": "4QbUaqoR9fAmK7eUGp5SV31StLy8Pzy35J3nVXLFbD4nHbYKCop26AgLtJUf87FauKYywXg7aQKbNbQyAHpwqFGd",
  "key11": "5EaMLMWfo5m14F5HQaUdsFj6exL2sB9LNueMZQoK727FTy3SxLMjeAmSZb5p9DRo462e1NLYxPZnnjH6jxFzKNVG",
  "key12": "2zNBChT6E4Pw6QQ4HJBM9vgGy6atZJ7o4z1FD5jaeDLMM3gmAFaG9Za23yD9anjQXUKQGKrJvQyYqx4pWy7XwqHV",
  "key13": "3LWatXTAe3M4JXgu5X4wrxMUpXrsQN3mKPDHLYYp4Rv6Ep6LKwGBrtVoHwMfXjtjUwQmsEWfwQiVH1fE6xDQMaxa",
  "key14": "4MaKPXM8mBeg99BUmZ3FJmYwELxDCeuYXgfDCWvz3Y4oAR2V3jReK8zggc7KgP1UDMCnKfcTBLaVpdSiZBz72CfZ",
  "key15": "3B3KMLPoRVCaaUFzDUUNZ4KKmJVMj88Ub8yfYEJdsZiegFzERuqc2XDDeHd8AiXBYPh2juYi8a3xLimoTTkwijzD",
  "key16": "2SiDgqCFKfFFXekyLW34z38AkcfWywb5aP9CMkJSwvP3wjysuNNH5w8eozR2eqU9q6xHVUFhbGXkArPgMn3hJ4dy",
  "key17": "3stgns196ikZNQ9HKxJDdehKwecHA9XntZvt55vG6m1MBwuDsJBtZ9FgU2ujFiGjrebWdfeksH3L1tNo7ZeirzXY",
  "key18": "MmqstxDWAjX3T8qnJ6WBmJcmxepNHmDwZDxqQS3PTW5mkW3WBtvBWiGoWTtZLqBtFmnnJw3jjMxJyp7iomwrW1K",
  "key19": "2jAn9ncYcLtCZCLMV3G9bNB6od6aDmgHUZYM5YHAhog9XbATEULCco9mXA3mfkq291RQ4GJd2D8ABhmo4obWe295",
  "key20": "V9xZDSSE6894wSQpEBHNGd3i6FEWTRGWoub386pmnmSKmzZV7pWif7gMaxJuxHMVtXFfYSJwDgAQ2Yi9vCWkYdw",
  "key21": "XGfshv6geDLGzm6uuAH6ExGASaS7SYKN8ZW2qego6ZRxBpFe3A1hkn1zDtma2CRLdRVkHxdZYykDHCWjTCCRXeH",
  "key22": "2BPJHPPmYtKgwCCtwh73oFuWwQwDbYxHdxgZnZoztqqPK7NRq9Jw8BEfbgpiqMLoy2cKUcxbepJ7U2Nh6cefzM2y",
  "key23": "2meou3JJtUe7reZz5Z9TgyMNNnsx3okZD8VpxV1CfcNcHjPQSTcDEVyPdYfY97JK3snqVhLUvME6CGcQBnfgVcLQ",
  "key24": "5Jvfmttn14vtGQAuULVNFMf1M1u9rS31R7t92Ceb6Z1JcxSA82GdCQrVHbd2RFbm4ka4BsuG6RwraVxxGn3KswhW",
  "key25": "5AwXbMw4kPJP86gSRx4ysRS2tnWEscGs3NPWfYTBYLp95MTtSL5GtRUVGDcY2xFvgaBwu8bAd1FvdCxGo9jYAGZH",
  "key26": "5eS3fmNL5f7h4xPLVZws4YRn8C5DUmiwdKsK4oMwqfj9XjQm5RQQT1ZUjS2VbKtBmDTDnCxqSqcs4LLhm16Czz4J",
  "key27": "5oqEwX6ZwX6Hfyy74RYTX6emAamdwqznAnHCZp4v15KLppT5HRzjGdQPDVhjXhzKghcUaut3tkEdK2q9rGHc6eNE",
  "key28": "5ck5P2TbGxHCCpuDMW39B2xKPoVEZCY5vBczoxirCtZnnWdU3gSw1qtiHjLHYwaU7QFZu8n1b8EL7gS4VNawsYQw",
  "key29": "cLMKYKgQrpK7A4UJmiNm2WvGirhZSeW3X88xxVvzsbUb1UwwP2fFUSGnC2ighNNuWSbpeyAA7tX7Awe9i5pVzD1",
  "key30": "3Z9riPYRVJq9r26vYi4xUyiv2PgUCEUhFeLTBR4BrTtCdPN3sqaWtNe6QU316TuAG5aEX8vtLTaqaBYorCif6CYU",
  "key31": "4Bz7PMgSZTRKVpTuF1ijQikymkXEpf2s6893Q69z6kerXvwAun4x4wkoKMtNusB4M5Qku9fprjTUqBB5u5ELbHpX",
  "key32": "25eWFQ3z2arfuqsSgCHBEZ95TqGST6VckgThzaFV6bXPZvmbgn18jbUcx7Qh6JtLk1JHFhxqoYxp24yJzvPxg8MP",
  "key33": "z8CYcK1deMYJ52dQeqwPYE2C3eyVAN5KJrfPE4Z5HrKL2faaNpZmmPyhCz23Vv2W4XNryVqcy9oTL4dXt8sNn9Z",
  "key34": "59pTKMvkjZ1DTWBPQzjkSr7oC5rjm2mAvHDH1NH3Xe6S8wu4MQ9ibTWQfzzbBFWEPgjYsBs4eb6Wqfjkm3c8hTbq",
  "key35": "4whU9SbfmZJhFmmQEtfUGxcCixqdTou7gb4BxF2ZsfcA8Wx8BzBiYTf85vf1aYKKHFs9diySCFX66a1oEohxsZVa",
  "key36": "4jYgauPwUS6FLxuWfW2Lidy3Lrfm2rTLxJTGFUZguF1StjsbMU8qW28GtBoruYBYhrojYidDeMWGCQrk638Yc3oC",
  "key37": "hxg9fGopdZoo2MRqXaSMYcaSM8vmmLjKgLGjxpUhi5crdFNd7wNVaYjHhgjwg9hmamTqxDpYWeP7uBkohDcLmA8",
  "key38": "3g68rqiemELF2cVpCundE1jUCoxmPkhd3HfMgXvD9qaFdKcQXvbubCSdnJ7pWQmQpkDwynGuBGLTZ47XvGwsiN61",
  "key39": "43RVZjcUCHAHeaEUgbcR5YhLbjn9qSQqcBtSMij6SjCZNG8LaiwXpTkUyrUEwHa3wSfbAAyxBgo2VHjGq3jPUXP",
  "key40": "3VzcNSHNM1KKjMSqMEfhvDPDYjPybMp8cztMMA6G5meBo5QQF9Qm5keuSepBB1wQ7BGceVvraMYbVcx8Ypt3739i",
  "key41": "56tcXs5HyfhdNd3hUGVZAKpq59aoZDwToaCwbr9WhzgJ2od7SMJCeDLkWsHLwbWwUCUVLKjPETKY2aH7pUdG4mqz",
  "key42": "232xFSXNtf7E7BfYeCzbWXffZ96eGH5qkqifBuNmDF8PD4a9315c9ZSnK9gKpNAvunWevZaj4C6Pfsif8dCcyaet",
  "key43": "2zJ5d9eqRyZfR7NJ1xKH9h9iYc2rgww1Mft4Ez6AnbN8cUWkPqkQNyP1t8pYtDqbWR6kt9f84h76RgfyE17QCDKG",
  "key44": "PULPdsu5iEDvHqMVAbXqieUj2AmMLEnywno8TkYiKt8qj3zypJZqpbFQVynMBV1CA3uzfJGk9sB3RagCWyRDMaH"
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
