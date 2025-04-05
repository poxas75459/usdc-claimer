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
    "PPci5W6KtTMv8bnpGSqdzH4FSE44Mjfc4CMd1jcTAesfuATZN96mFPtYF33vxKKKKVeJ4VGmLrZm9p4c5d7rHyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BVCNNdWnp4QFgYEAvm96DP5nyoUAdsSFCEE4Yzg8R7cSabtcHPx1xspoZ4upUEZRUMqtcnA7BuWA1rJr2VFhiYZ",
  "key1": "2zsNGVnK1GaRdSZoHtjnU6Dm7Y9XwBN6otEBgeZvizXkgjPuDkiNiPCchA8M218QkgtH4cS1r8fsewT12MEFrNm8",
  "key2": "42cJNfxnYjuJYi8fHZpDkoHxLruZQwkwhrTwDPHy1HyQFvwbMYJSJRH32HfLrZCCjoToV21nUMPk6ECGTbLgKzC1",
  "key3": "Vc3Hqd9gH7tw5CEU7drkaAFQKGvtC597oiQA4AePiKCHWS8pinPSwY99qAC4cJxLXWKRDAuADfKaAFKBTiApU6H",
  "key4": "4BusrisfKP7hAc6u9QaPboe9TVdDkSek1zovm489wuhAcncq5UhweaRKRGoVJTvTvmp5bJxULXsQCtxc9DGK3MjB",
  "key5": "61foataKdNZRMME3576NLnXA7gNNrt9eibSqaXHiVUrzc5BJtzwxJhFkJtH6Qi94munMvY9fdfxHzh9WhR1hmtGG",
  "key6": "34spF8g9RHNyCMCuZejnr2fBqdLbENxto4gmJuj4UpsLPUHAsmba2Ua5T6VcDkVTArp6knikULCgyKcy1Mf2516J",
  "key7": "2LM7vTKEWM5wAT5em5Yff4hL2DHae86HvU7CQXW1vUHYxA64k7T7uuJsnnAufqmSbYVjCSVg2yhDBj2dYaCq6Dgx",
  "key8": "HCapb6DV4WLikRvpRkrdZMPg8e9pAknnT9EonnxCDLPc5JwWueVX4U3apYUUN8BZSZMp5FCani4aRzuWR2kATGP",
  "key9": "3N2fJ485ExNSSnzBPECSvxC7uPcwtzUqDQhtJkK67ZP6vUYDF9CgoLNRoy6y7SMvdx2uwcu8gkrKGbj8s2xVnmfD",
  "key10": "1E3o2MBS6trgu5vavFRpoDEJneuqQP2rshzzuJzRGrCmrNx2eyfQtSX1uYCXn8yb6eqafpJcMGv6XBD1zPoTFkS",
  "key11": "419SeoBcrYUiUGrFc8Httq9ciqndg8dFCm1MQABJ5MYjRuM3vvNbEdXiCjzFHTvgsfhX9zyBnDwEFHCmyPDaAZzf",
  "key12": "kTC79GeYD7BTTZDkWGKjigc9xTXLJ1DotDBPNdEUC9HiSPkksUWGntFBMYWTfYsQnZgrjY55fA1d5LuQJinwsSi",
  "key13": "4rQsbfmt9Pydk2wtTxedzJjCKeSEHgH12a7pBFngfHtoiXrrmQ8GrzJEj5CghLw5vhySrhvpzqGCz3AnkJSWNHsr",
  "key14": "6ae9xVD8JsJSLqs1wj8CYANKMBApE4vdEQfYcGRmrybA1c8gF2VYyNQ6ktobfoDg9bc7rdhRA45qsSL7vbe53R8",
  "key15": "5TsBaTQtfqWM7jYWa4YaKy2cZSDoGzvJXPBa3vYqv2AM2XUuJzQ8umKSZYquKRegG1GmQHsZCCRZBPTi5sQSyuiH",
  "key16": "5YekvnncLvCEs1dF9e3ecS5gsvTQTgzs8mTSfQzS7uzbJYSxykivYHgCKJbL8T9dkuzVdzxo3mdgokNEaxq8BnFn",
  "key17": "3SGj7xM9QZ9JQLV4qDB58djEbGAZvGKyVL3vn5cAi6h9jHRBFh4HrJKwwoJfaZGLh8ACKXDCMpwr6BXDzDSqWDqf",
  "key18": "4fvCN3DR3WLbBQDxQCBRXzyLugBuPNQyisqLbL2oxinX91VvvKaojejmCii5SdWctJ3pc43rcPdZHzgztmegC4Rv",
  "key19": "GPhpTQWJZEJ6ErmeNiTgsoR2VWPyqtqrB194dEmBEsBcz1MY8bgqcpyxYccsSfHhJu2X7yVSTzw24CdmVPDPihm",
  "key20": "4dz7py74HSYGP79iGGWNHDhWfCbXNnjGjwsWtvxfipjwZwqLkbxnKAj9Nq5YVWa4B85FmaLSaegCBRhw2ZmPuGj",
  "key21": "4RUdwhTmDbXN6ue3yc2DmupQc1upw2brSD6M1pLUPfp7vhrttnvYHrqwhWXFEfV7g6Sxss1Kuj9TFPa2DQ59zG6E",
  "key22": "5te9rfo8NzaQ7rusju8Ekvm41GJgXxT8o7QJN8YUhyVR36ETpdyKaALbDUvdkHoCz5TLqU5gMExQVN5XfYwJJygj",
  "key23": "4yHbT8keoJXa8XN6HkNiHwfNoTsSQRidkYCxrZeKNFwUK4RyKj9RogtHxgRS4fHPqHqVBDVe8JwcR4crzD9s9gJL",
  "key24": "M2ZQAky5FTEbvnXcAGm3Ydz7p2KkuaR8u9pt9aMRDJFz4rwddgS5jhGpaAc6QnAoPTB5FjtXFEsfScWXHa6hSd4",
  "key25": "YGotDqYoYjXwzHhWC3dr1Wrner7AvGSbaBaWBa2ypyVzrfmSFYs56mUcYWg8C2kgAtqaaw26TTrfXg68W7SdZQR",
  "key26": "3B3izXNuspz7jRchemYV43oqkym4D4rpcJSVxqU8dZG7xPdG1qZYVJun4mpc1xWo4ErqbBSmSLWRtnr8GmbNg1Ep",
  "key27": "4Rn5TifX1DChYcwPTz1p12guHr5gJ7bNKZXcem8upae2Xm1mTeVvRX1j3y2ihfR6p4rbwdEvsJoiS6Fc6VTVaYmy",
  "key28": "zP3xuU58sdjNxRcHE7Pd4E4NCrwNhzfN61eJQXcLjwjteSkCfq8AinKTqWVDaykzneKdpqCtY83g1a4FpT2BucF",
  "key29": "59LpCqE7DHoV5GxdGH6AgKykmvp6FrPM7D5v7z1dWR5sSFnXYmdNUtLnX6Z6n5XHiT7bBTUvdUnBeXfUQ42bFhx1",
  "key30": "5PAViG5DfWoMfRwH8LMM11bRLCsHGS6EGs5E18HuSrekb9Zq5ci3VvP36ZvRJbaXagXaLMzqRn7Dr3g6vxcbvbVH",
  "key31": "2WRzLMkngw7aouNWRQMDENBgty7UZQ8vThsFPphQwWx3YLQMEXuTb9DKtCow4APaLCijZSkv1jbwcS2Z7hzWKrik",
  "key32": "4pVrzMRrHLsosNsHFRNxrd7Sfsqz3CAEhY34nQQz9LPp6oMmnysDB61xmFxXmKn7tn9cEfdJAuWXXtfCiTKksfP",
  "key33": "77JJHGFCq9HroXRygHojfDKy7ajAE1N4L3LJcANaD2C4sp77HsgPiSZrg7jhAdVYE9EGf8Rw1rCRXRWiEXDMQyy",
  "key34": "2iT5WuknVvjKJMUKLLJQAUZi2kwuTuwoML9W11yzGocmJWViLEA8NvKWVKp93MZ1A4JQq3mVVqnJmvEhKogbfKzN",
  "key35": "5JrqydHu971P7WYVeNufhqGiCGonYU7iprdZSr9mCMWzLMiZgVQy6euNopXHoihxVYQYWmEL5NpmwyFedLAavfve",
  "key36": "39bepsyvKhUGzavi2enkvxJMcJxU7XhQeqepmp7KEd2jATKigTrfaQSPqsu5u8LstrAxdef3eNsnm2ccNQr3V7GW",
  "key37": "5pNZEJHce8ni4QrmMk46ru4fgATm8yTS1uZUcftKHwd5JXy1XwXCMYLous3CzmUbR4QwnbEcNKom5mrFmVrGAs71"
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
