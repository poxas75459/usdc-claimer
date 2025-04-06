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
    "4iBU4MxEGjqinprYTB5V1QtdEuVmNXqvvyaA2sx96u2D1v4VEWNGySpMX9HknymvRHd9mQSMc4xh35L7YwwHnWZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57PHAunSuTEZCcqoWv9whdJJzLr1Y6TqxM5xkWNr6BbdVnsHZiTgMHfM55uyApr5JWDRTVoEjiT5Fr5gLq14pJot",
  "key1": "2T5jrK5Ssd17qdsNxj9enEJeCBu8DVqHro5b4UuEFcSkpHXQaoLyEhwteCoEsmjJYTD8jMaAHZPjNSHT8G9SViqc",
  "key2": "4CWS3FwKgZnknSxEwoFJz7orWs2pi5JMhbYNNxm24xtsXECmvLSANbiJpmdGJ7VbuCXBNCQk4dhkkeFEsJaj5RP",
  "key3": "5MJFxmiiRqmmtrGkzuzzXFfFV6wVLJ7YtGKfPZ6SyZ94s18j6mbdc4LYYwfCdMpLzhxmhMtzzH1uXwnx7NpN7eUZ",
  "key4": "DfcwrSQakXiv1ABR8RST6pW5YkmUGeDXiteYxUmmaRJ6fJfjzehUyjzrUgbWEs5Lg7zPpawZUg4uJHQWFrDXJWG",
  "key5": "TQkCYHjpcxBbhtczCqRKEKfbNw5LFSxNpdQVXnMu2iyKoWipiUmQX5F5mybUmEqvz1f6yPXqJqMbNbibazfmMnL",
  "key6": "5kziF5d2Xzcq71mi1z9K75UhSk65YoVrANRnMoyy6cyxwFpdTZ4EHGMh8NhY3jFBFwCjG5YKFB6ApENLDVRu4qGf",
  "key7": "5AzZ6Dv43xrzbM3xR3qALQcsf8uy3q6tzrv3jvPThMowGN6Ynn6FJTYJGACqKTGPBQxxSJYNoX8xUfatHk96Dbvs",
  "key8": "3rMeu2TFBMEz7cqsZcfffksTSh7cjmmTo6zSopcPii4WbNMBjbKEU4VoNLkdyVYGD4ffmSgEWHUCvKACD82ZbB8o",
  "key9": "2cqB6mz9pjHjXVr1EpPYhERarNipbMhcr3s9zzB4NPhHzqsadYroYvmNy5rX4WdXaHiEJGMiGqvPtQ3KX6Jd6h1S",
  "key10": "56GkWYFVDvbkSfkf6qJQQ9NHwztH9cuEJVnjbSbUntuZYfWa46ArCctr8qcSMdWYQHAt1oCKJaKXvPTu8MeMuMad",
  "key11": "WHgMM7pWeCjNTWBvqkqMtJ6Yj3VHfTuMw5CsoZjN6NTGtzKx892gHBkhUnfnMbxqvwD6nUcWn1K1abi7YCsBkSS",
  "key12": "268TqXCkmytgHPgD92h1PMz48Qx9g1tPFzQVZRHEN9CHSe68tmAH9iJNAyCNMiPHWyoqhwSHSonF6VwN5kXwy9P2",
  "key13": "2u3P668w42nsBuSWNw194Ty8BUSyLoayzpxTgbUpudAaHJdGG2y89DfWuAvhdh6jzVnBbsTQJC6KJtzRQJEnwMXY",
  "key14": "zpqKPdGtsW8yswE7z383nxpvKvmzJFakaJgfhExpRzu723cJ3aVBq13uG6um6fwUcEQrti6Lj1CffeN9EdySfx2",
  "key15": "61hDi8WwQyLbB5WnJifFY769iSsvBhdXEM8gZcgowFxsjMPmqJRL5dGjFTckZzFSDYx8PxFMPrmt9D3YyW2kJsvy",
  "key16": "4sRarHQnaMYxgcwc9QyU9cebFoW5apGGevQ4beRqPPk37qqXEbKPNZaq5XGXaxGNTsKxyVaa7ZvpzC5PArrug6tA",
  "key17": "zCRE7itTwF3grj1UddFvYHV5XKabcNRf6BWRaa2dHSZYkKJLjRgrrvCPZpZBc6z7oJzT3tq7kGJbwYbBfx95tRi",
  "key18": "5P56JkYcWwYdUB9MGef3MgYo6efP323wrjpj2CRZQDNAxmZVeGxpbqKz2j59yJxbNhDiDDnukyVEgZQ2Yr8QyzAs",
  "key19": "3qfQuAmP7mRap3k8HUeAkzdDkNUBu1mBvwSMdqYmuX3qaEJrgheUhoghTcBPRxcGYLcRxGnvA3LjVFdxcVQWBYM1",
  "key20": "5my3xJ9K5A8Lxt3Dtpn2kYZfRRXVWiGKTPECBJjcZmkSwiw9QQdXUuRvdAn6EWs45V4SsRKAFcPjq5fGdUtDkJib",
  "key21": "2Hf1hfKr9nWAy6UT9noQDHUfrFkkhrBnZ7xKsQJijYnkC9QzTLJLTw8Awt6eHfVNqNYQi5CgNKzUTZUpnec4suS7",
  "key22": "5jXrAxGLMSV5Dm8JU4emy49qukxkT52184Uy4GcvRPyeWgPTrpfUEVyEdMXVREAPzndwx6B6qn4cpHQGvhByckdg",
  "key23": "4SZW1xV6GjqZFBiBuwzAz66H66x98H6BhRftbsn8k9N8M7E7LfP9YqTQ4nbS8fKBfEUgdsztCfXM19fn33MbeF75",
  "key24": "5tSnjVd8Z9j77WaBmyb4ZqQoSghdVY4TVpzwkxyqup2dqMdHCAvNWhNcQ2yV3hee1HS52LsnUAb618XWpwnZ2183",
  "key25": "3s6V59ft8DQs5cLUnRoiz8CpFFYSc7iab13yNXb5K5HQ1Y1p5xvbDJV93Qz33o1orzVQe7No2T2UrxBcbL9tfhdT",
  "key26": "u6AbVW8fC9Gi2cxatPSPmRwKNVT7yhXZCbduiUbnaGg4QfZPTjqBAGhHF1D9gwZtGQhPa5Dc2AkVzRLnvaL2ZYG",
  "key27": "2datAjEYsZ2PAs3TpY9chMaUseDYH7XN2EVh6WcN3JLjeBbFJTqSDPpcz2gMavL1ZvyxnRTJhN7QM8qQYuHexro5",
  "key28": "47udXAqisHtVXHktDLw7K53j7htMaNgARtMxb9zPt1VHjD9rhCCdcvJTfp8kUZfLHuFcmCZwUX9tjay5hPn6jbCN",
  "key29": "2pkcLd6WEWpEtjXuAEo25jPfigePTZWSdroXUoTwJtGRiEbcT8NLWHvWBctRgWpLrzy66U4EYKrMXaordjxg9PGL",
  "key30": "5c84G8ee4cmeNJnTR4aUcRz9LEEVksQsaJWm1Xgvdk8F3ARyBubBJttVXaeYkhiR9YDHGUKjp45pPuyRDtiQQvmE",
  "key31": "2wZgmjWUmXoc2joa9CG3NuTSfn6xCgN97xY8ydjTZomHPtXA7ZHtszKszQButyxtmksfd4sVyPQUQ5uFQKs6WwKF",
  "key32": "Mz6NRiFSiagZTwXPm4uzzzHRbMZ1kmTeRd2mCJapzm9MyUea6UPaiybGnvekPTojU4FyiHNQ7iwNwepXo2gcBw6",
  "key33": "39cypZEk2hy6SLfackWpeLGbuCpDZYeqtUh8wQTjjy7VhqboSst8gTj2nRXVEfpDjwjP9QmaSZ2nE62Tc2UjfP8b",
  "key34": "3VgMo3kYKTUbPTVqxvrhVKrUZd1CnhYQAx7wSa33YDJHw2essSgbupPdFW83A1UScBmHUvjVK6mFv63HFu4a8jq",
  "key35": "VYjJSmtkhPPGbMXdeJCBnf3PSNFpTJ4unQSy6BCeGFYT1HzLemPuGYAPtHmNTsRUCVVVm3Mx6BRnBtxP8paD29k",
  "key36": "3oVK2PbK7pPvpz1tJBGsmQdspKfKK9kCFxkhTPqM6jCeFxpPS2Xh3ZYdDbXmGmwAX4R5ypgoUTFmzF8sFkAgv4gp",
  "key37": "28T1NMwWNhQrcTfMo3S2PpC2hFhWzX7CGebmgZA3NmULwmrZr9vXNb2mAnyxWDKRZL6PjqhjKKRcTHn616Jmpacw",
  "key38": "38BLWeEKNqJHRNQ8eXdX3tJTXJUpP2TQkHJstgqXAf4bqtxkhDe1sBKptVst7erpsyveZ6z9wrCEsNKPMSPDCB2b",
  "key39": "u4guASos6Pm66RUZD3Em6sA2PE4dDpQnBS9ctEGiujkGQVTrxgTJ6mwemLDLoPBTfAYCWfQXzmLbWbPfrEA2ToK",
  "key40": "2fCvbt76PkadxVJQyt4J8F5YCuGWkuwo3nrrT7Jfa97ohSJxx277nf2fP9o2ZS45aTvwk4QtGidbUyTrQL8eZYsX",
  "key41": "2usvyxJg72QyBs9nodfWnBiGpHaM9TmZGojkiRVS1fpdcMUqhcp9hDhmJrQADtMhmjnqNGHyYEruBrEJ3c7Cmsdm",
  "key42": "2mYK4w6RfHFXB9KgVwjkNwdFfmda47ehYz5jGEfcJSVzusaqDaqYYUgcPmuhksY1YF7oLBiAtqNF4sXi6JPp13fr",
  "key43": "2tDuQ7ejifNj7KsbSsaHAsWtsdyi88MAcHUd82jJhayhtPhzcZrMFGjFYqCdJPZbx3ZxFPYaRqeQcMd4tc9dJo2v",
  "key44": "iFnftqFyPKuUL6wAYTt3GMvA98oSDUMy588PPWrBVP2eDJcgLybU6nVbJacqpxfLu46DVFLp8jZYP2VvTLCa8Zw",
  "key45": "64B4SuM31AbXbJweWe64zWBNaHfmMe1PkLhfRSUMmCrvjG1dpn8GR63GLGw3e52dptBnfjtZoFdQhvtiF7LbZUw7"
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
