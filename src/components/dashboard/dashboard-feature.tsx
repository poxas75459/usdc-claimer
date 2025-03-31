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
    "F33LgmeLzSff6en7mkMK5v9bGAE3Wgm8PMdfwDXYVVxpyg8bQKeiRT2ghbfQqgKvd83MC234vetXUt2ppQ56jAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qx3YFpV8VtkufJqH3LJ7pSptd4GY2Ny72txuBFx5asVAcYJXwA9aVw5QrqrUe5NdLpnTwbPhVLzPEYY4rDiSsuJ",
  "key1": "3PfvoJepwdHCqZTjM7aAv61k2U5Ld3SqDBeLLjARYJHrgyujhhwLGG9zTSKy32Nys88SGB4vNrygtKdPigAKcdLa",
  "key2": "3MN3Y2BKUwQYJCb46unBgRch7VLjTcR9sxU1YxUJWzmYQW4wcrBToawHwTbMTAXUaxHmaf8yLT9dn7GwEeKUPU9L",
  "key3": "2aaz4K379gPyXyrUVXtFJxGvXSd1UvR2516CM2BgBn8uBigeds1arhp631jU6aL6WjDpj4CtGVqKrvy3k7Dk5MKv",
  "key4": "55KqQLLFM1XRD8Bez8A1R8xV8uCd5M67DZBotJ4n5tPStWy5QscbDCXdMjbderV9bKzfVpL2ELqmDarPKMSAK19L",
  "key5": "ob7Qmz4ZfsqTFhu6ah7icRo8jvpngVpktEmNd6BWb6NHLN2fHCKHqQzL37DSFR7aR66UJY4VgUqdWWxFaoe2ucT",
  "key6": "4Xiv12YSYh1g6oAJZWrocMfuaQJdzHjw4Zypr1cp8dshP5B2AS6bMBRpr4fwkpmXKFbHP46aU1H6CcSWmukNhYZz",
  "key7": "Hd4NBC4kfcoCdcCG4RZqwsEPiKyN6cb7XGai4mHMkGLJGfZ5egy8pWrNVa1y9UqT761vRVnaU9pQ2zNeMnbDtuc",
  "key8": "2jf3HUsPw3rWJ1HNCwhm4NANNtr2Pz8PXU1EGg7dwaaYiqh9LLUe2gq7cMQRW8jybVPTfYDK1mYQcCJTSzig5npY",
  "key9": "dYf955eAuL9bKfCSH5KYs9edreYP9Fe6vgwnovfuW5n7cRZjFEdEGJQw64yrtrpoz3ZwV4Y7TW8Pv4W7TUYF6yK",
  "key10": "66SZNbpiqewwFdzyDdc3adrtDa88J8VVpF6Tqtn5nkL9tLpKBrdN3GLNdAReN9SVM65oRtvLM4LVNi6UDoqsPaC1",
  "key11": "22hLQauDHh2nPc2VZWFS8iJK9Mo2QR7pcEFLpNF5DiYaRkBCroxWtH4y1MMtmQpCVuqcxByU5sssTocDyRoxzrZX",
  "key12": "5fTqFB9p8UYv4cTL52j9nhbwx6ybg7iTbAvS3zJDx7sofeCdzMDVyXdv91tLeMQKeiDKtMoR89MHdbFxUEGYMDac",
  "key13": "5rahupdMWbQhoDaoV5otLw6RmhzKa7wNab1HaLtxnR3NW1H2kbUJaFVdwPmo2aZaqksz3By6SZodaGqD4BXqra9o",
  "key14": "vaynf5cfnbmcnpFDgArx1mK7uwkVJbrxTDPM272GACTSNdaQjyJojr1ZBm3bHkNauUuMkC2eP8CGzFLTyARvM2w",
  "key15": "3RyToVSVcdwinbgMpWNBjHQ82Wz9u8LQ4BbKa6uqdVuLwjmp3Tb9VyYomn2RLde2Y5cTX4g8Ekujq7QcTvWvAjme",
  "key16": "4jcvTXJ7v5yHyU8ZXLepVjcXpXuDLWrUqEmGR6xHAGnyFraMsUdLjBH9NRuYhumxXZwiJPipdXG4QgT7MSVcGtNj",
  "key17": "3grfqwbYW8ifrWtpdurhgeUawJfehbn5paQaomC4GEUaLFNuLdXqf7X9RJfZQnqHqFMeLAYokntHJMd61LQP4Wbe",
  "key18": "5dDTe29z3LFSMATpTFjRkk4F7xKoTufFcsaZk9FTEpnBV17Y9KNtoMMW15gyiKWh3Uszqfe5PphKTUigzrcKx4MW",
  "key19": "C9h3ELLAw492hzgBapvomwydU4hc8FZvNXkLbpihvHzHTVy6sc4JDMZuxrCZi9GQaDUfHTNSQcTgytwJh4p1Lwo",
  "key20": "4iPKCp86CR7khhZSKHXcy62iwz9NSdXPm83bBxQWv59dzyCg1VsJUCuNjgbihFjLijdEwtQ7azhYHgpY3NEU8QS7",
  "key21": "oHqxXtn5yv4yMzitoUjgrFxQUtAwKQ91Kvix7rhLLYvo3qvZCc1GMnN5nXyH9xBoJgzEoUFKmyeP4VsATsGcPCb",
  "key22": "5tvZ235z2U6Vbv9RoSLms5VAkVjEQ8jq87PGDutdy4CgJHsxShD3SKMbFMmjo5gh3LFtAgvwHNWdqUHab4QW5EX9",
  "key23": "5YaAYchTyuk2AEFbSvtMeDUs78GGiQYFBixfCpMKpeEDdwGXCxu7Av5ZsAAUsi22A6mjTXJntN97rbw5D4Wq3FEz",
  "key24": "5Dn6YSFZiSJLPjRhsgJKLpH8nwXAnRfmxcsN42uff1LSmaxgZeYqbQ2TQbCirijG2j6tStNpB9qu2A9Yo57BGkog",
  "key25": "3UbhNaMnx8a6iVY5DaseHcbXTd3yy3fVzjoJQNkcYoKD1KRec7CUdvzrBsFaQS8VsrQo9tjnCu2wKgLNZxn7UHUM",
  "key26": "3kNkT3veRUEZhf8e9QANh26infZFjn3qBAXkx2YviEEKkBXu4ZMtW5cU8ppqeFphNJLgJyyuv1HmMLLsSbKda6es",
  "key27": "4ipiCULmQEdcjCcqAxmLhUvzaXLCDnzvkV5VuKprqtn92KwS7D5iyWGEbgVwQNew4bSca2Rjc9dboSLMutCfwacX",
  "key28": "2cjC7R2P5PrnXXMVYTYLtdnunZwJFZJrBHk8xv1HigDbHBiMV1ewujhnfjJ1w87TLtet3oj6rpWbpcmnfvoeRG1v",
  "key29": "388Yv49WELYDay3TggGzTP5p9yueibgtsStrZ6hzFKwW5SKJiBU6RcynyXk9U99qeqmoeMWfShWS4B8JxsmDRudw",
  "key30": "vupTA6BoGe51BFuV7nwMqxSknh23bJVcDtYnkqgdR6yVP3G9ZnKwSqAZWdzLWxxi2yDVQSNp2EX3huEnP7ojBjm",
  "key31": "3abKhxZbMhMWTRNZHpyVSYffq9izuSVdE5rSNF3GJR1N9hVuY8JMcRqzWy2m2AMRowDPzv7rTTq6GUbnZp9dGi64",
  "key32": "37RsBHVYk1apiAByJoEYRWpktFzx9JsiaiMaw9n4zuFL1uLQQji6P75UkoJCdEVfa2nPf8QoNiFWcatrspzHudqa",
  "key33": "3gWGv3jFmd2R8J6kmsK7fnJrQKXvLGbRe7VXUiW6UFEFN8XK33Zthb72K5DczuDU4o1UF6KS3LVxL6hhBqLXGXAu",
  "key34": "8HYZzTSSvpRaXHhqBWVd8UPnKKtqFGKhHLcHyrQVgBSUU2PBdhTBczqUdr5yH9ga1cve7HCbziQVreYYqpMnJcA",
  "key35": "5xdRbZAWAdjC8BET9trp6Kq8ex9DovZSRgWfacLArYXsVTiGkxk24HCres6r7BjWw7gVsCUik1peGbjzqEXr211r",
  "key36": "4xyay6ETaMvEgrWNDLr2px1aoDKQaviuD4sSdJWRtTkXfohtgoKfKBzGNzbx73sAZz61fRZ9xpyRpiCJDAFjHpcz",
  "key37": "5xDeinXeAPdbJGEhuLWLJR9YmLsL1GQejpCAe9mvEKsi9ospZu2hXp33Saf6cKoKeQTbtaypbj7FBd8yZArZ4Crs",
  "key38": "4oYje65vLqDsStaEoEd5bcCuTMMnDce9YSjuDcjFrTjXtRDWADwNy65rmMDZgdHCihN3KEuACpsSVDVZKh281zWE",
  "key39": "5ZyNwrMZsvj415gCf91zWBNZrF7GePGoBxejWjFn4dPzf9VeMB1pCjfkYipbMR3RAPswJN4DTmivJGUhPoq1zf7u",
  "key40": "3cjyhWnAm9FF15JY51cjuFNFStjhXo3Tcjj1fAri3PwkTrd3Bees1WUZcoVT3za1Uk7mbo9jNEZNnqm2dZUGGwHq",
  "key41": "4ZcRvFwJFdEJva1D8dqGHUTRzddU7YCRaHz6yofgrRVTyXn1FSpDYUWJCRnvUk2LY58Kf3NUj7SovTF4PF8wPeRB",
  "key42": "21qgA3Cb3nF86627eJqCb4XxoVafzF6oCSuTgXpCPRq3F71CQ1kDTyHmK7c3mzpz8ihR5AZQ7Y58YUmswJq3BxXC",
  "key43": "56XaPDtKmMuPWSuyjfGgqFYdMkQ5QgxaYtZTT7Dk1fwt1CR8VgeyFJTrUYyuiyJzhbFaXh4tqNueZbfnJMp4yT7u",
  "key44": "5JiqMXEDcv6Qe3dXHEcRna3fJaaGrNNV99RUiYzvqAAaWsMyCJ9tHXowZxCcq1Vwp6bPv6SMeW25Dnp9dxvnQaBn",
  "key45": "3hbECEfR7xmjxND3djcGb7zErQL5s2Y5FSV2XSmybzrRxQhFRdNRPMa7LogNgbzRL8rz3Vq6HVdJqKJEWRvYoeaK",
  "key46": "xzZQfzhWpPef9U6VGbKt3N3JCPYfP94BK4DDSjaMLjku7LrxDKeEt6WCvp8AgAKDhub1bp4ex8R2UV5FUZjmPD7"
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
