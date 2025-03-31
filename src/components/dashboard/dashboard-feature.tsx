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
    "5kw1TunrvG9i26pY7xRjsbhBPHuRzXCR4kvd8Cyiu4zEFQMCLFPYYzshASqRdjPT72aMTZudzAqKGPBpbvZbX9Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBqgpGpYqZ9VPF5P49L4tQqcZvc2z73DsZBuXQC4LhcT3Y3hZX5FDEScpxoRWEH8NLwwEGEk8TgPoAgAvuvMgkm",
  "key1": "2LYDGAvFGQ8NgNaWb8KHiDm3qJbAngzLZSWNnKxPM6AF3H2V2KRQmyAG9Psj2ip6HGVapbp4ggt4XdzGvcbUHQ7D",
  "key2": "PXUw8znY1Rs4TMY7J2iTSbvzvNXxNjHLD6qdTjoqdzTCNewYNCo3zJNXbQWGnCviDNhtJQkeQTCkQBaM8yi2rFm",
  "key3": "5tySutEgSqvkG745MxSLUfeo2vh9tGAg7FRu4VNra93bBc2vJsq9zyUVj3ds5MpGBpuZgFyLefYS8VmBR15bKxBF",
  "key4": "Wguw29RqtepzFzPxvoZGVtydyy6oxupNj9Vpq67aRKY5xomYeqPWg2sktZ2VJoYAyFyZ3MVz9wg2NRe3vz7Mc7f",
  "key5": "jnHXK8ZtWK3f94cQWxV2QvxH18QPTY17pNSqA5YM26SBFbnReuzRZfgXUgbbxV6ww8TZrvkbaFpdjLPHcPx133t",
  "key6": "NGkZhvsCpAdxniwTPkQMtaLcuQKuHxiCBNMeeeLBuoXu7ZW6aApLxtjggvdj7hhZk624mANeDkr3Yu8pgRMGcqJ",
  "key7": "4nJ2gM1tA1Bmq4jxMdSjsGnmraX7EtvVKyWPMueTN3QyTik3w7TaHi8yFmUFgBdmBQar9vXc6urNFEqBGS7jduae",
  "key8": "GhKKh14h1tagfsWXqdGtGdBm3rsF6QvGQTG2u7XicaeUKRaKb98MWgqgUY27uTzuPQTK2iLkyK7quaB1iraqpNi",
  "key9": "33TZzbtcBCUFwYPHHaKLM8jF2f2g9AGBWsZpi6MZHyanZtW6r55XuhAinnqYoaapFRcEq1dxJLffsjkjFtFFNkd8",
  "key10": "3NsPvqjTJnd5jRuJsBa5q1sGbS3fTSpFvPFCZS9a41s8w9EJnyXfgkfGv44TytEMhMpUMSJRBAQEob5dpD7zteew",
  "key11": "3nyV6pUxZcUVvuS8spwW5YimriYpqqhUB7ZQc2HcBTihiqGeYYSLukqUJLxrntKKpfqiHDD7TvnT6uS6VZTESWM2",
  "key12": "7STzb62S7Cmnz3DF2XDDWbc3N2LPUn4RfKwvtsrWjeTAtRPLMuVh64zNjLjZYYMxcH6KMvbqpgxUnTH4k6g22jS",
  "key13": "2GqM6Rs2AbgnNK7aN5Up9vNa5McvS38fjV5k667FTxQw8JTjRLky4Yn1Q4RT1MDqoMz3CKbWQizEMX2dtGUbFcwZ",
  "key14": "5YdUgne9MvLCxjDCFbXVm25Yam3yzND7B3uAbSH6UwGi7YiLZTdcBYbq4Zw8ZAWUqzAGbonpNssYdvXnGp9gfrW5",
  "key15": "4eJmikHQ9CRGfZFD1cWdoUf8boY5HhKQ4WzEt17FuPQKQeivgsncNxpnixZ2fWDw72QDbtjhBAEnoFEmS7uNnzMX",
  "key16": "VrNweJWgH4Poa77PGzkAZQs2ZPSzZXjq6wG1WgRAtHbyzCU5d3x27zrC4jHzP6XYFD6zRK1UJRtmoAW9xYNoWoY",
  "key17": "52MK1AEHV7TTwopoB33nMavqV1nrNHuMHmduTcTbxW6sszk4kJ57CYnc45TA6iffrMSnKNRibFo5c3F3CjeQeYhz",
  "key18": "2p25T37LGLogZ3Ysa8b9ejLugacgCBrazcC8sF8vZkQimKTmyMe8pjU1ohPJJmaaw7xUoKdMEjQ65N1E8NZLyAKm",
  "key19": "28hnqK89trrtxTojJG9cMaRd5o1grosdiAZSy9or4kwJRCYbGPQVjWtgn4mKGqi1PHm5JUAqEY6S14BSbvJNdBpg",
  "key20": "5nf2VhtGS9U7b1ZL3cnS62i7npnRmYiPfbVcAz24mNc9KtXQqVT5dbYNLG6sHdo3JJswxvb711theQAfnd8LtTDm",
  "key21": "5QyQnfMwzhuU2yTJSq6VPHAqbiWHtKk6QWKDRSbQTum7QRYpBxWG6qN44MenVLKrueJqPdYuLAysQDn847VWgjT4",
  "key22": "459i7QMTifVys9NzR7tkTvHTX9ndDBnmgB43rqp2S22iFSdFoYyFzFEGmeRznAPn1KW2Uad9zufPbtdVeyKjKmwt",
  "key23": "RsiNQGC4J9Qg89yika72k1w6yky4VTj2my5XvJL6EwfUzfbTQuvVDSECxfMEjhBs1qSiw8oTeYNCCEp1U57zoe1",
  "key24": "2WZcRqRkUb9kwcUZNo6ENic3YACMWVC3PCFkNGXzhN19Vbm3QvFAsy2WmBEPcqv9tbg26oed76sv9pvFgxD4C5tG",
  "key25": "5BQXHqnu5ZKhLYYrYsRpGX4ajkKHFXBdNj5TxczNhPELgeGfzkpywDy6fAZgPG6m44MDbKYJJQPCGvuTJZwWuvN",
  "key26": "5XLk1bWjt5Q73KhReiPVbXvAPcC27tsrLwmMw24LCQEPba35ccMCmz1MSg9CSWqnaPBApMGJfi4Q1Rg1UizyAjso",
  "key27": "2RszwzdV2EPF1oFJ5sWHpGmg39P88fHrWK5LxaGF7ZrTyQbd8EBWQejfKY3JxTVe3Ckt9xTBRdPzYgq89wniSXxs",
  "key28": "5VghcNx6xYK1kBP7baFsmq1BxL6ckQFLX5Y7VWxf7pxGS6Eg7dCmMSTSJneJCqvmyerFvT8KPzsdtLw2URRAon68",
  "key29": "W1BDiqJ8pQLMwjpnJcBG99QxXqvbenH8oXSRjLs2eLYc2N8kevXEnpKduWRpQbj2UnPBphgkjHrVvFh9gzBbAWW",
  "key30": "2sVcxBebz4XW8ArirYqhAS2bJqZhzbRckEX29Y6HfZLvz1uP8W1o5DbtHLsteqCQnjsksxJC9FfpKJ7hZAw4kMcL",
  "key31": "58yfpvRbbjvv32SVvJpamD4SwVTMCdJWi5Gpv2APTiJ73PH87R5r5VqTi1bxJNP67XZhM4Pk4uhkn4yjemQAy6eN",
  "key32": "tAtBQsKq7qgpmfwkTpwF418Zyz48z19LNAQxJxtbXB1pKUsiB7NZY26GHuHPKwUsLhgYiS3Zyos8gGqvt6s9ZEF",
  "key33": "3WzuGDryXQSbeQZTuXEvT1c4SaG5wS8U7EJmjS87JiLKkSDSg1s2qukbHCW8aAUPfRFbUfmGC45iRWqRX3u1HNmC",
  "key34": "3o7z4FV2Cxi1VVZ1F15yb11jCHyGYxjv697APY6aXh4EmKQ71cqmidT7SjwBVMEtKDiX4o9rAjbJWSd7n3wUn6cB",
  "key35": "5dYpZ25Be7KxxYMydozFfnnLba3BB4bA3jUtfg1k6bzRWvMCaA82ENLHYMmPZcgJVHmC62yXnBhRUUdmWfS1T3PX",
  "key36": "hW2Wz6RysfiHPNrc9wSwFbQsu1Uwq1FXcyHYCTVQS1ttwMzVVAQcG7wb2CJqyYWHRHDnHUUjnYxv9kxYndeqeL6",
  "key37": "4q3nPFnfY6cFVrfLHgLmBG4PTWfqdXBW81uWsjaCptrv6AcPnvoortzxj1Ymn4768CBw8MfCKPh3xprfs6T1sFxC",
  "key38": "3em5Rwa46z6CiC7CBfSdAzVYDr5MYUC9NdxwVVwHqrM6kDL54nc84SzLYwyBVv2ScSNfjHETEheGMWESbN33vMT3",
  "key39": "2a4y1Xc582qFEhfotmtwJYA7ZVojyJZ7tsSxh97wCCwBhN47cuzGw6HREyESDjWUSa2bZWTM5xbpfvzbwf7fPv8b",
  "key40": "7AZqezbG3opb77zZgwhrQW5hJKvqhdvQqD4m8U8ed6x8pgQeWzjacAvKc8wxV9kt2EfoiB3o2Z7Mo6XQFaBEW9s",
  "key41": "3WXDmpDWad47zasue9XZoLBqRRuMaCEGwVRC2dawkVc24PiZZyF8TzANrYRwUUtaJf7yeDcHLNEfXpGTh861Lwh7",
  "key42": "38dbt4Cm3UD45TfqjZAkynyUFkCga33Jbjb8WngbQn18JdFnC4zDqjiigEdJjvqerJ9SZGDbRAUjcLg2Rctj2mwh",
  "key43": "5KMq6akeCZDYge8X6jWwnxyb7Te7UjU8YAcdMncLED1cLWBCWd78hQKqiHVYmHAuWA5qUUkUQJC2fT5ZVUkS8Mmj",
  "key44": "2AwF819jbanC3XMfyERVHwqqRb2fXXXSaDTPKhNE3TSWFY3VWBRBuXk5cmCWPH3f6bkqSQWNRWdidPtCKEKf8vH7"
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
