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
    "2XuxqMRomXAX4LSx8NK7BEXhtq3zZSYuzACLWC6xRa42rRbsqPX6XTH6dBK1R12EHtNYqfs47LwjsmAjsVTRqYDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uum61JwEyZBRCJiLhJWdoegoX7f6uKhB6mMhvr46897Ne2pxNhMc4LPEUgjzo6LFAfKTRdQaJG8HyaFM7zqfZEd",
  "key1": "423BVhikBrT6jTkBfv5fPu8eoAYbZkAezQgKYwAesEfUyyv3qWEQv2523Ws4iTdsNVricjwai79eBqzuM9Um8ewS",
  "key2": "37twUz6TK23KJb4SyWLJMNwK1KLSFhRR5Ygn8x75oJWyTbw11SFXcCCMGDVwaWxQtzg1CywzT2yV9CHLKS8oqHdq",
  "key3": "J5zRxTSqQm4QTuEfpRNB87GEhDcXqPioEPCybf4EM6zrdU3xt1F7LESUwfYyR8kpi6BdrJPBVsQPrtZAnsQbSRc",
  "key4": "4brbyfJAMyXicW58o2gg4iUPeCdAVHQAkXfsoi3GLfFhStnPHerhzyXzZHrDHFuy2gwLJrsuVHDCQ17u6Wyup7zK",
  "key5": "5dFqEqACrDJzPLrbjtx1WFoMjSmJUUa5G7X6J58PoRQg4QakfW9EGfBncU8cLBZRKiov7iSRKaZUMYrsyovfxSyD",
  "key6": "5Y2daMpyx8hajVHHfEAbfEsmBmsDRxLZL7k4Ryyo5ADbW7xsroFKAZ15eYS1uQtdwFRGisPjujy6gTGofwrqqGA5",
  "key7": "3KZzMDria6WpzTjAaxjLnjFXJxpVNc4W9c74gn9Z2qmgkPunzvYua4soB7vFUL7cvxgfrewsr8zCRwiWXf2a2sR9",
  "key8": "iLmbmR4UBL4v9fPvVLoNWbyuQ4hyziwgJGF8aRWZYJ6VrWJ5iHdSVmTTN8QZnWMu48tbGTxQFX7dwvdJuvjjZmW",
  "key9": "4VvpVXo182MeuiAcePAikwZNSoJggfDMKUJ6caBoNSo9AMvyoipxg2wknBGZgeh7s3zr27H2sAZgmphw2tmJ3CXR",
  "key10": "ThcnJsEPfdMfgp4QdCH9Ga8wnyp55hb6eRNNWirkQTtbPGrpaZ9fvmrQudfPGp6KmHyTriVtxEWyGCTNvXxHrfE",
  "key11": "3u9ohuuTaBjEp8my89Lwq5RQFWrgBv6juTjPgGB3FjtJaE5wg2mJPBJoswU29wtVCkkpQSaCapa1gc2LXgaAx4Dr",
  "key12": "3LUFQiAsdvwPkAkxngzBHwbNGhBv8ez6L2Tk4Xo9ueDzhspBzZ3WoxUnYRWsXY6pPkpVumPCBKjSZFQPgxBFQeF5",
  "key13": "odPNtDcBMqxMpyjRxiDS3ucAhhvSp66k6CYGE4jgSbD6Ka1jnpsKA9LmvsGcF1vLsdXvXBS3m3tqGBrqSjhjh1D",
  "key14": "3jURZSVndyjZef3mM4P8hsxx2D5H2YUJSTNX6YcYT2fZxyfmRWuQn7RbSxwJzpxqMfnaGjCH7CBzSnMjbvNbXwNG",
  "key15": "5s1jGgjrZAfjC9dRcJ31bahe2nEcwDBst3UBPsxM7qQ63HbxW78GfhwLG8YxdL1G5x8w6uB42ZAsWCyuccjnp8QX",
  "key16": "4eZdXaWxY8TRsfo7dcBhmaXJiYKUoPHDcS1aGyeGphxSBMNSRxh7TvfdyBHLZjp5CfqQRBcY9kLMuhdA1YahDJXL",
  "key17": "41SzS4ZCMNzJLsd1KoD7cLwV3H1JUpumPKn7wPMHSnH5iikxFGDyfj3p1YZEPyfmSXjBKDzak4gvZhbxM6YYQJwJ",
  "key18": "5qfYsMo2Gwws3TJSatHmtw5BJnLGJ4DbQEwZB5SmdJZGLHvgaxUFWkQFXg1KAPDmdDfuw8rRoRF7Srks5Exup8pz",
  "key19": "2txc3fugDJ4jWRUhYaLqSVDQhRUnZJYgr3Zzw6XGHNBuzxsP77M1p5pBPXTxufRgYuHFcRyxv69kNXFfsGa2m7xR",
  "key20": "x7gBWv6zqqam8SXtykVqzGkwnPkCBoyHJfUQ94nUa4B41XTd9FJjjQZtgvn6hWPp7FRi8uw7ifn79Hwa6o9NG7i",
  "key21": "4T7NjhU5TdVp77jZGUiCCDE5XC1twZVaCSnjsBkiR1pREAwQ3uSHezdHFyowTd3WzhBeHdCCipzRr6AkJrJUV8fR",
  "key22": "2nefYF7izbPg8dRrvv9E63LHQKmzburdtTH2V11JqkzrmtzQMv8DK7zvkGTmU23cuxf1jJHrtJ531VwEgbzY41TJ",
  "key23": "mNbnQeadNVzt5B7M2GHxvQVhBPnEMdLbobg18TvB3JP6jL4nbpN8PtAxCHFpeXo6YpJbtLFsg1EEYUCoubxHYbk",
  "key24": "5yYsFyex8dh5CeZrzWCAjPadLBNadcauBvU1N1HpWjhEN5UiUBntzN6BcU2qZ7KjjpVz2vVnnSRQHZzSCY2byvAn",
  "key25": "2knU6zKdwffFdzKbiMQiw2fDJaJYER6hMJSqiYsqPTXA8B49r5YEFKh1CtLmZfGsiH1zCjxvDR4Qao8o13B7Hu6",
  "key26": "2eBGsY8nNGFu6pC4FKyfaV7Pi6sea4LxgvfaqnMXdGcJ3bADur5D7dLvPsE6Wh7yvt8ptjrhrrbgavTv2YUNxSHg",
  "key27": "5WnAm9hVYiMASy9Rg9NwSEUy8Rt6gUs8R56ZGyXYnq4sMu4ipMjVzbNLj21Z8vSDyQnRAEmTwEZrFTWpzr7orFr7",
  "key28": "5tcU9idS9Tgs33zaKczWDgU1r2x4hdVfJoZm2b8e9vAAKHXcEqTMFPuMAygc768iXj4Y45eq9BgLHRu4r7Hex31J",
  "key29": "25Mj7nbFb2g7BajxPdS4rh6DC4LH8YzYHrfZvhYdwFo53mbFaZHwPLNHCXS89t6vLRvRWSF7C4WhrRCoLyMbDCSo",
  "key30": "4X8nvVEyuM3wnK64XDeRgWWDoW53G6VmkZC33yPYZvjRkGC8zmK5mPd9jPFVatAFYsP5PEH8G6PtxjNp5x1FGQTM",
  "key31": "62YvEWnjfQhJezA9WVYAi1NXrKDSaaupaCeXSzZWwkrJo6Sdrctzb8iupfLDePmHWtwu6hnXE1stV5vAYD3rFq1H",
  "key32": "2j1sc6TqCU42XbbitLyzpHwXbnvPDL2shh9py58m4tgUzFiTR1DJQkciU6YutixjsKnff9jn3JJbbMnKVCgGwYRC",
  "key33": "d93NKdKRAcL1xFaYSWPBP99bkhvQKJ9Fj13uucP4HxPvpDP8xNJKbQyNMoLt8xWXYubAJRWoSNqAUnrH1htzL6J",
  "key34": "4PzavuReFDyVfxuqJBitGL4WCCZ15xnHqgBd9QAFpYAiLqQu1xMSXNPu1LQMmqVfpdWWJbVJgUBpzWJySZStWVvx",
  "key35": "4FuVBe29LvqmccZGeeTSTKaeSxHfF32hkfy7FscYYzuE1oLj4d2xvC4MJx7fduxHxmkgVDFUXwyH8imnfPcrPMbp",
  "key36": "4yncqm1bCVv63cmQEoXuhNqYY92A6U4h35EkDpZCMQ1eSQwtaS3DwTZmbq8iDq6CVZwV7kYQYLd1VzJbSFpMcBAk",
  "key37": "4QtkyXXXdR9wU57fg8rkhCMLfuog45rmdENoN52cjiyRzm5MQ5PhPBRKUq2m7tZw7NHMXXJsSnPenPgncUSkmXac",
  "key38": "2nfDYZgjVgNPYuCisxprLvkg3DCjcDJxSBgBtRRroDoPpoxQHKdM9ct3RtvoA6Zuk6TFQbx5LQ2hWuJNQ2b7oN4V",
  "key39": "wvdhmrZKakA9bc4NkrPAGjMUULdMnnEQ9uBmcpB4tjqT2uHfcg3aKStS7gMEk6PcxrtHEjTVT1fPjxZNzeEGuzj",
  "key40": "5XYorBLhzGTZxKMexgb39asCWpZcWcmLubhYfb7e1PqgFnmojfF8d8BxjSuYYTfNBA4RXQGTQwEmWd5P9F5sa4hM",
  "key41": "4HE7qKZiBMTisKk9UZodzyu1nS2EAtPYSVneAMhj5R7GXhwod96UFQbNfPRd8KYv8n6ZrPcAXRDAaGVmscjFjcLA",
  "key42": "23LYss97Rm4cCqpewBuYi5CTa1eWKHasqCEFicBLmYPuSZxvTDr5xhUmYAn3SnyMUMtKZ6cJyoR8pPFMpFfG98hQ",
  "key43": "AutYoG8KKhjukyntwbQreR9q8c57rEYAnYXmaieLcWQeNDLu8TU56VDr6vFSRNNQEQFVFzJAZTPS5j3iCRGyWRr",
  "key44": "EHTChBAwZEDPPwYPSvx3aDgwKVVAqDdYtb2koQKbwJXYACuyMJTNLCFF1XMaxcjrrRzCB5g6TtfyQJ5aPn1Wxsb",
  "key45": "AzbrAirwZuNL7tq57ETAWS58FRtTjFv3WqjqqKygpp14SdHwmDGUx9p1eNWcY4Mp6uXckZJaAq19ysj7aMdZv34",
  "key46": "5zseSBwNDoFCdFL5DzoS9iXStM8SFsN4zkXRxUoJNmUHaytcViTRhPEtBu3z8Xxq6uU6xWU9xgBD61koVhpX2kqP",
  "key47": "2JtPYW1UwtEqmTCY2SFq9sHw217tpRWJgUeDvggq2r7jnWvzggQmvDockhu9SrXvQcGTUKijsDNt8vuvT8V6vKXV",
  "key48": "5ftxWHd3YYEMLLkYeEsWAVkzSY55PB2xgMAWKpeq71o123ULYfnsjPRsax55N3CQKabkVRJoPEDzqzqRYVHTJWQ8"
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
