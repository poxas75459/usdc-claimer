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
    "44gLLjWUChusWS7F2CiiwsbQbfHS8AYkBnQ9ayyBbDqShjp6G65y8BtmLtF1kVMrfNKz9mTZxH1FAmG46FgdqWxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58dahbu3fcpFTbYpFHWGRjsspV8LAeydsAFFfEUPE3zLftK3WZVAfW2Yh4tHoVpz9Wm8Jed1QVb2ppBC47WFTPhA",
  "key1": "Nh26e6odxcqkB3ZQM4GzAGPcwLSFbkvmsXSybTYiwLib94fNL3tyq3QhXNKaU5BPjHFDaiHGCzVSQrrThmtxchq",
  "key2": "59xETPofxFM2t3JXRzXxG6GDnENowf49jk48DzJp37fmGokqemt3vCaxJgWKFbQZ9FHeYGQk1UeQ4t8KDGPTRAoC",
  "key3": "2y4eadZNPGqFudnpi66zjfQNorJzG15VBnpRfWGchJYEsBweD7F3Crjo9ieqXsdq4oumrSyy7xHx55rB511gdBYP",
  "key4": "5JQGsMSBbevg2kfkh6NbLgfMJP9ZqzhtHWdDV8MYCQi9d4R8vD3iTbZJT98Ff9tAfbUmK1uA3Z3kPtQkGxurxPew",
  "key5": "2sYondUqMwZjnnHZpQuvq7BMogPV634WLKHiFF5ASmdS8MYE65WTxKQ7ibjGWjZN6RoBv7qHvgMqQgJsnCbhnZX2",
  "key6": "RYwTv9RWG4ae8uLKppLp36EU7oPpaNJvRFSE28sTkbeNwTk2xwQChpotU1aSQBhMYv1pUw9PUCUy5RqZ2y2Kcvx",
  "key7": "5E3DE7T5dVpUk1HFAvLQagn5nmYa7Q75b1GvuX9QHJJYDaKMSep2tbeYqwEAH7V6kBYUad4ZWQbaxZrX5vCHD1fq",
  "key8": "5aYGpkUNZF6vsu4wb812913fnmKUu9qk5yjxfj9kmRj9y1HHUukiRb4ZNK239877uip2DyK7QA9bh3BCcBUn8UZw",
  "key9": "5S7Qjqc2rzkNn5jPqCG6SycKSUvUAdZ68yPFcFgXjbVy7vkhDeq533YQwr2FcNBBxuS6G7B48PeuAgUHDajJztER",
  "key10": "5Wffw3kMB5FQYEigPnj7sxmMZ2jYV3RJN81ub5cvTLxRi6ezdn631TFs8aYQvaQ5vYYnY61qiqpU1wvbJLusVCEy",
  "key11": "4RNETE6XC4Jxmy1SyLMWsedofFyoAgqWB4mxaLNHnsvbJU8fx9fBFtNNbkUu6AQnR3qUair72mgaTN3gPXd1cdqU",
  "key12": "3cX9e5HSU5TNwiSU5WAp8kdvyapwMbf7mucBJYUzskcPYdre6tP6PafUyD5tTvQuZCXauK9q4QkUFcH4FjxGUQuF",
  "key13": "46HwP8oT5hW41CZDZvEtqwoRU2mun2qaRfc3YTgtAYmPc49jf317hud5KwxPKKJfGK2FmRxEWK57skekD7etQJi7",
  "key14": "2rpP3Ur2gNieeSdDxaiaDYHuBt9CqiyeE51X5BqkcrnqKknB8kCfJfAseRdYP9AnDQdk5H1doMUv7M5fk2cEkhY",
  "key15": "4nKxw71V6yAPgzN1QXtWmBT4SafQ1B1r4yNF2B32hwQ3585g615ZP4bJKYFLghw5Syn24YH4NErn3V8gF9iWBxKg",
  "key16": "5ZRte9tTFp4NGccwpFJ3RXyiX7GhK45y7WDxQSAkafnmSTbxbh5Tf9ZFxbLPDRFaaJTp1Ywcbpz2SwEsHmF3VKN2",
  "key17": "4uQwYqzHp7tmFuLw9dKVDZqjkuu8qU37U67oR3eXewTDwXwruSU1tzYNMfBwibBeAQZHErDQuHxbN5tA39f9oQvE",
  "key18": "3oJ6UcCjjJqjFdphzf94ZG4A7b8pDVfCRPvhVLTdpde2jYSD28rTwMD5YRzzLT3vfygHmoEeaiih6Z3i9aTFiZiC",
  "key19": "2Xuvoyx9Tc4RfT45eCyRCKpNgBbazHS2cxk58VYxFje4pG5UQo5uXUDAZP3AALVM3GuiFtySNKMTAXKTatnSK7sy",
  "key20": "7Hu6WXU1E5QbvRv8C9mKpXjid7aia7BbcxvDDzunkjHdReyyNLSkpdakvGrPR6uPa5vgWG6cGxzKyHwnXL2jtSZ",
  "key21": "2KEAi1TRZjWeZt2umAJj6eAQz8vqQoHbh6sfnrcJhtMC6eJDczMakczNbcdS49UbCbMNN6Dwh2gKtKVXy8CvAzFk",
  "key22": "27zemBr4us1YgWRVyoHSPyTQnkq2idGECDZM9dcvrk7RFKPLfpFQBPQhCD7E3W9t6SD4oYAh9jP82UPP2JxxB4ng",
  "key23": "PfS8RgBtGDa1ksaN7eb7zy2X2VneuQaY6VQ9ubTNS3wU3o3bPd6KeuAESmtLmWsKF3ZFziAMbChDDZBLiAKMhzA",
  "key24": "3tb1ju1k3QXD5qfyo6rah4uboh8736U9aUB7fexouhfsXc8q8raTUPRzJmD24zL1KhYw7HnEr5JeE5Mb51cg46q8",
  "key25": "46wr6Zev1mXNUpYcoxrAWGBrhsTKrFXizuQqmbqhotEZayCGTHaYQ2sknchbxWrW9hdQbLe17KYzuJoHaZjUDhfx",
  "key26": "5APmmG7UNkCCzroU3nYnPoc1sPitNT14WPzb3Le8VNpcToUyQsMMxdJnUZL6Avz1AN5qFkYUdGh9zoLChBTGSjSW",
  "key27": "2wsRsXNWR5kXehEH5tHgxoouMP4RK4so1TG1TXcstSsgwH7fQQGbWSZB89WEYRHXgUV98Zfw4RgfTGXMcSnJaV7m",
  "key28": "43MoUwcn5c7JPg3ru6pqBdZqtLpkW48BWm6NAnXvABBmLg8PZPMCqMVHUrw6gevhdKwUGYp45LCeNvXbkmkAgHD8",
  "key29": "CVz4dQp3ZFMUM6EXCSnMdvxDptdctpUKXBYRtstGFspBay9zXPmr3x7fuEQKhdXSmDWyDPTprQawqi33Hegzv9H",
  "key30": "U9mgpHmBhjuFMLAFoQytz3w765twCzFm3oVZ1MD9X2UprD4YpwyjVRtAK3AaSYuioFefu5GZAFrYe3PRmu5PavN",
  "key31": "5txCUYoToPiewfnsTwRev8mUnzKRDHKxxUuVaruYaa6ztZUe9tMgQ9EDgW2tgw5RH3daLJuTk2jopztSqNhCMkAr",
  "key32": "4NHvBu3kDwhi5pgNSPZeu7Af3xKEwXvTxzJtiX7fpwPexT7uXuqMuYVqqZXhAcSaxq6X23hgpN5h9fPMC5TestKZ",
  "key33": "2LamJEzuPNdKH4Y483C5vheR2JBoTp21daSc1CsaEjqQNTNSQ114DhxdC9qW2jSeNPNrGPNLCXLeE9RFHWoC1Z3Q",
  "key34": "k3aoafSzgJxxXCwVgE8CiHW3HndP3vmrDA3WFyVEW9Ue757gXGy6Gd4EZeUw4cGx5X81WQeuTPAZTHWtNdYaizs",
  "key35": "CRvvbv4NXAcD9YycomTq9o5dynM3tfd6dvkHF5ETB6wY6bT5J2oNXAosKiK8sbksAEDFjc2zCRFEUWggZhMV5Mo",
  "key36": "3PHe3qadSS2y2xwp66rjDozgVqSs95f2R2aiedQ4ZiRUNUe4RZPtVm8VCvPMsYDGJBXoS2SVRK8QKQYj5GgztyGP",
  "key37": "542WqNJZfiRhgYNQU9z8MNSyLEbtMHzDybnS6uJX2yevFMVu9VgXQz3PgGrUb1U3fT21WC5Mc4PKEh3dzKtk5sTW",
  "key38": "3y3BgpoWyvvaM1e7KXbbsHG7vSmq86oF9TCNQp2obYm4W9jZ7cLgW34HDu8YCDwcuV4ZfWA9y5GGFGB5KmcqcCBC",
  "key39": "463YQ3Bhy3Y4kZt1CieDKXncf5MfFdZnCGUBaVnafdjWFeQ66GfEvedAZVijTWe3SkN1m6ihhs88vieoeexki8Lq",
  "key40": "63PS6e1E1vNLrJGAJ7GjR8zcXRzyFGtGxzpq6iM8JNjZx8bYjr7tvRC1HxHJPdAgXCbdCan32tRKkAPP6xmFN3qg",
  "key41": "4H6pUStGWhDi5ds4XY8rMjJGtaXu8efNeLkQZx55Grwa5xG876kWbUNj7TqMMp5UYGzYCB2kvFr7VG1NQ9Fizd1S",
  "key42": "1FVSDXK9ZxEJ3suvS8m1gjLf5sfJKFF16MYdAVmcyTkrKUd3SaVxVDfZZSf6RTYvozqy5m2n7feMa8cbewNRcTY",
  "key43": "34y8TjeSjLVUGdno5uMQe7ZAbsPmAeHX96cA4iAknQa2J4wapmXiYjnHk72pwquUGBZ91LzE6UJbayGjjDiNbKxC"
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
