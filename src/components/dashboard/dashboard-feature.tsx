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
    "523NFHrQiNFbTYSXbrh5cqxRAyc837rK72QyUyzQ6p7gGwDA6Bg3TRVUEELGv3gzVJGKbPovGjS7CWu1b4EqA4ix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37BQr2JXf8jt3hz9zFg6vgpxAWuRsjh2AaeZjgDojH71uUVBBixnZBBJcCKJJ12sKxjjhnyKHH8QtgDNDyQGh5hG",
  "key1": "3bB6UyTGPCP1k7iBY5TxK6yeYZvmeNkSDjyWBzDPjLUHTFnujR8ppaTrKZbWxZKNBszaHZTT4j7GNoWnQn6HA9yr",
  "key2": "SyQJtoL2JrNGvueC8pDjNcQx5H3m8CKc4vq3Y1YHgt6JoNSUQ8EMBgRarWyQqxvStVGmyn6dJ35CsKAQv92Cq5n",
  "key3": "4apX7dSD3mw2haLFHZxEpHFwzN3z6mtpVvM97pNNESXUvwKbiDo6KALeTaqt8rxQJxLXZoVd1DRMw5CB1RtDY1Es",
  "key4": "EG3tgbtUmiGs4VWjAfuvf5HvCUef8oNQTLx19pRfEXT1m9sBGcGWKc59pE7WHNxBWeZ8GqpsnzFCSPooVHnhXzZ",
  "key5": "3JQFvkYxfPajtgR3bMcuYMqoEpLMB7xCE5mZC2EqDH6PsL7a9hq2LPSp7v43Difp9SH86ds3R7dtfAa4pe9WpJUX",
  "key6": "3jiZQgvHEHWtCdGVFHr9GStNkzMiM6t2c7irM2LEauFBZBAqKQoYCRr3aSuxtUqK9G5KQDyVehEhY4QGWYRJqZ8s",
  "key7": "2YtcusYk3jeN5dE5rzwfJyRB5gp8b2SPWVVqrgkGDhUvYtKuYLe87Hzv8Mhk6sEfBnytZNByL9juDEURsUecxXjb",
  "key8": "5ZxwqMGvYB9WXGKaEopdx135VFTQL9Sm8drJuSm4dLME7ZP6NK4MFBCFMn5xzfd4A5LsEc34vugGuuMEyvvwJ9if",
  "key9": "Pww3xyvJ1xtK9m3N5dSZaSrPGsBSCodn2KXEqQSL8xXoYWxvcY3oqhcHJSN2eb3W2PzBr1MEJjTJj4LcB9doALW",
  "key10": "2UpMchtcZaXmzPSrUG5VvRfNkx6TScL6WNnw1B6ekPV8htC12SAE5efbjXr36QefuGwzSy5JQPZ9cTx8Vqnta84F",
  "key11": "4iprXZVbw1iNXw31hzUgq8m6t5ibcpL6eooxDnJoEywL6xwAfn6b17YertGX8MZt1KrvMLcgTZCDUgEnxXsfkXC6",
  "key12": "2Cy1aQmbY6ykYUN8pwPArXbxLGtcQiYGufofSoqWLgDt937EdDL67LC4kW8j67eRBtq9tQLgGzVXgF4pLK5kL7Rk",
  "key13": "272KsGb3ipn8moCrDZRtoJEZBabxV7dKV8sf3Jam9dUQRGBF8yZwY7XXNB7BP6dyxaLVKkXtNrYhAsBojCXreQDK",
  "key14": "55eG86LM5P118Wn4FzEqX1zze6w34JYjPoxGqTwJsmLe34VxKoY8vFeZ7RLfHyHBv3QnvN4tepw3zdtZveBq4ZVx",
  "key15": "5aKiEf7XNB7roGNyZUa1jTUstLNRm3ju75cUeTEQwgm2cvtdM7o8ey9eGjmwha3YgFgqJHzBcx4bva22VY6WYVh4",
  "key16": "2aKFgC9r35MLK8ig2mszWhZrVkddCtef7AJRK59TJCGA1dFhGWG1E634qSsmPeWxW4FoKRg8Stekp23xCJLnSfon",
  "key17": "2dpfxPuUTyt1vLXv3E5dPiEbFu14XqSgv2wKFPV6xXLxTaU243JubDSdL1nCHHtAG52SZ7Lcr79VwShZ3nxxNoQh",
  "key18": "52tFkBVkdnnFxPK1BjtATMEBzktCUGro6YJBF3SJFwTyRX4v6sZLKHiF6EWgMSbLvkm65FhsAzt9mdfUxLRh6Mch",
  "key19": "ZA6FySfjscTbCYZTkPoD2KzVdvtt8HDrAQ92LVJjYwezT7GUeitqcd4gr5roe9uKr9XQDSdv6GY8QHUwcj1eFWG",
  "key20": "2r6cwvZ8bMR8ESP2CMaZZZkKvXwyzzrYEmZ9vE53XksTgKd1cy7R2VxQqGL6wkEwv8KhKYZyjo5zVqjgiFXm1eTn",
  "key21": "4tzxoC5XUXBxyUNBd6CVuJJ8C5hEF4TEnr8xx3JwdB3EYxW4Bne8av1rz5TxWm33uaD8rndAPK8gdNBTzemWwYBn",
  "key22": "2ck1d7cBLhD4WkD53WzyXHaTYvgL8QgVZqkb2woXKL83PbkJ8zZzrmUYPBMGroVroX6FC7dvGgm1MqGoYTuZ1HZk",
  "key23": "5vWJgtqFjxisLjaN198kiubiho48NJMWrB29dMkMyAoAKwe7dBYR8U1CNHsikyYChEirnWmcTDXMf2Nodz5AnF1f",
  "key24": "52c5u5xZz6sxETiuzPf5qVNK5DvoTsD66Ldn8ks3to7pwNSaNTAamDtx6ugWGxjbTyzNJeJb7FRytwacNh6kVq7T",
  "key25": "MkNNh4fjFkbij7ERhTTkyFcuBWyDC5b45y95xrhDa7kRVZaQcbTwtSWZG5busUyHQREy4ynsMrXzPdPLLYC4Z7r",
  "key26": "5A76Evv91W33fQFTgEo2DUAJ1o3rB3SRSYbE2xz2oaiPZpieay6v4bbNL5RcsNkkGVWJy7LrCAYFnKMNxpsNXsGe",
  "key27": "Ma8fSPMUbeZEPVRshsqkuaJLCrM4uDG49vcMSLQaXAyEHUzH4u7UqFqq65yvrddxYuSaonY3NKXpPC3hVMBcVTF",
  "key28": "3F41R4kUtrMcguMLPP9rUdsJP82WKvGMUReTPYQJVtuqTwTKA6DLXynickpVti6DAmvjumZzzKWhh6eAY6sHoHbt",
  "key29": "4n4k16tPyVLhoKvUgtMMeXMR63VKUEfnjf6121sFh6eUprr577fpWkowcGCrbhF6Zt4rG9LffvzovVUvFXcBniPm",
  "key30": "2DM7RSRZnYsRxbYLUNDrHusPXozrgM66piJWQrZjUEDSDMLnY3XTGdapG6ByZRDdNW5zavrbXKnZdhG6VL9ABMQt",
  "key31": "ZuKnaQV7uAtZm6fy1SuYipzNYgRjcxCJMGN2UcVEFyAxcmRrkSQ1AaXCRocKZ2Cpzz4ivFpRGLM2r6mvrcLuZi2",
  "key32": "44K4rGdxgiodS165ZFhxTCtztSp7YTGdruuWNgiqeKXV7MLEitdywuoMmC62ZcPDGXy1SEq4eysNqjwkBat1P6Uc",
  "key33": "3eMcs5TQyeXkHiU4L7sGjZfk9a7UQPL28KkNyDXgdtgYUCrxdj7kYvMnTMUWx7NN6LjN2UuyCx1iKKtUTE6wjZTy",
  "key34": "4EiDpPMoM6v7unHLHJ4CmE2r8aVWKQwCLjGWQMc5SXV2674wRWqHna6FcNjdeXVu1sqEn7xBR4Hto7Ewe7oRNaNv",
  "key35": "4EPWUNzGYTpt6QQohaZrDsQY1kuux4iNqyVD6cPnbbvtoWEroQ1h4hUm6SNJeGJdt88QTq8EV432CB4C1XSPVk7T",
  "key36": "4YBGTBvpx2zoMJPriTqcMUTwXuCsTR9UCXfiVG6YPUabRxTpMqZWMdnTgdyaJpvj3VoVSVMwts1Db5Mej8etf14u",
  "key37": "5MMWYBjTNRv984QxXUph4X8j6MPtctBtw5odEKN46vKjkUiChH43k83JoHdB8mhFax6i5UxJbWd7eqV8kNQTaumZ",
  "key38": "2gC7SQZuqrxZ1hVtjKKqUNN5Pi8qRH8a8HHa3HdnWAAZD8yni39ht6KvDJ59jVYDzdDUTpcsNRGBhevxjsRLxPQW",
  "key39": "3X7541bTzDRgCT7GDSfdpUVLxAsS19DK1eznmZRdQZik7KDkbagmJLTsWM8eHRYPMVa8iWLkjK682oLZMdv2Ftph",
  "key40": "5yKxBU55yTQFYYJ2vWYPkFe7qpBz6CsEhg9y6ZD8JEWaVCaQQnQebyB9B1uSRcMa6gacSvBJaH59Fd41Fca428Kf"
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
