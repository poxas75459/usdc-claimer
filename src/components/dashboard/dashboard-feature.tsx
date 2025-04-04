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
    "3rLEcXXUpeq5u8UqrRHf4izFQ4NNMxUmLWL8qG6Ce29V89vT6ASqKESHoL6vBAZ54bxEo1E1Y9ZtNghcfVhfrVu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GJS71XoyCVuGVQPZoAKkAdLFfnBEURtKjfpfbAErtvMQ2sYEkJwYLdE1aWmv48YTFKeCBQAixV4TsThkvbBU9mj",
  "key1": "4mGXK7Ze678Sd1bfFGKbvAeDZZzFgsytDXCEA9n5AX58GAke2z6CqN2EubHXTrUeMf27R1yGVSprf9XSwe5bMXf3",
  "key2": "2GD3zj1FTqpWCoz4APwEXHg9hwVphiyZHYCaUYkhV1CTXvcJ1G8Q1GDHkSNU6n9K7wV1AKqCywDvtDd9nzwgrWA1",
  "key3": "2NNDtoEGAtVwcfFmG8Q5rfQz8yk9jVsQNbUfnjAAP9vq6CzinyZ8n9gUiANLo2cHm5aVS2tPXea8CunTbDhJf9Dr",
  "key4": "2ZDpsxMnaYXJUw9FGvh18PdALw11iP6KcGc7zViSiuGkC23a6GKaskenS89vDrW64HvWyuVu5yN9c3ZFM2Es3PSJ",
  "key5": "4yEiC1KrNrCGo2qYaRsfMgbTPm3AfCSbKbqehURRaLVHFn8N2NL4i4AbDAWtf9QtM5aMQiJbonaU21XiaDBHnDcZ",
  "key6": "4LbyKxDJRSwQ5zdAZsu6FBkvbVmeJJgAc1Dr8dxDJXtV1vfhyUMHB2r5B8HXpn8x9sC8SfLiKF4TmLaLu89kJFi6",
  "key7": "27bxDcmwzs8fN2TVivo8GrLkhAWb5pWvZZVZke7AgNoRZwkjDXsYyCLLNLfQMfDvRCqUVibEWySXXRcojmdhhdrc",
  "key8": "4uq3cXjpPhQ85hh3CpaPDtRAqNymD9GDivwRzmasgqi21deuDPpX89cD6mWTUgGayNqKBJdhXGn2ShE8YEsUs2zf",
  "key9": "53HZVezBFZGgiVNHNSBZMjmwhbiSA6U2TE9SiTRhTXckuv7H9vQovvGejo8QUmmhULK8kHkDDyJuXHH69z5DfmnK",
  "key10": "5iTQsToZniLQ38gSLyybLtm9r37CbTCBgek9H9atCpmwuFDvaQocHKzACwEnzUL2TdKyfcVCsU1dfJHnWPtPLAmS",
  "key11": "32CUfgicMF9Pak5n5JjBLnsdxp5mnavT7ACoTWob7RVbVNyijRQ44tCgwMqhhiMsTkzgFuVRhg4hvSB2sYgH4ewU",
  "key12": "5xMD24gDCevyvEv2kQZwYa33mWTT7N8fwsutSErjoneQt5LQUXnPhXEMQTSJms9F4YeyMPR4ApT37tdU9uo5PxKg",
  "key13": "5EW5QrNZJgwpSjccspTJuUrtLYpzmAjnCsXwuRdTVKLQDhj9W284W8C3Gwfw5FmJ4YUrbuvGnpz5XDADhTb2uVz8",
  "key14": "2rKDSVDpHUxqtodE2Uz3iLWmKHgKS72HahHkbribhQ7qGaE4LDCfaod8STDwdk5AXF7z97h7e37heaqqYx9APo55",
  "key15": "3wZApJR74arCeAwhUbgXJfq6QbxmuUb76qSeKcDVNYJ5nbp5DZKgst2DN4xWQLRed8n9H3ridqUPxvTckZxcDu3w",
  "key16": "6JbE7d4GAjLUrd7DS7WZGwuGewMkB5LS5kkRK1efsgTQUPApDKhDSEpd3cTJZbZDpBNUfSpveHw1njCEhkacXVF",
  "key17": "CmariTyPrumHPZ8DebPraQoo2mFpFpsPMyLJaKNh32gJwM6zh96QoghA9jiuB9rey7VPg6Zr86qZ5qVMCQsG8X7",
  "key18": "41M6GpTjDNNRC7nGdSCj1deL6tH2TkJ1ca4xat211afmvkNCi5wJ3tYdFozWAVLgxSX9NqZUh78QB4MqECn8gcpJ",
  "key19": "4rHmHk8gm6vndzu2jvKsPRn1fumwh4SeG4rqoR42eMHNVwyRxwA5YT6CVhjNfkieShjWDhFJ7VBmbgkYP5KCeraB",
  "key20": "4nDihWcE19859HrEuf7Z8k4wreVxEYXHVWdHFE8Yp6bW27nCqzX6fpzY6KmGhEPwQsALo9z35PzytRMjXX2BJ9oe",
  "key21": "5ZXSQtDwvoemAagFXnCAHdaKYPsgoquZQ8wEJ16YRCSm3egbb2P5dSKMuxeraZNDmXoMMfXpYZ5d8R1qevSQwTaT",
  "key22": "4zKzsiohac5EAZSrSREqQwLaixTmfa8TPZovDUfAGKXr3MmLAzhx8HcHRPGxQ5xi4XntELD8XDZTEhE3FG4kCcgN",
  "key23": "ofRZ6NuPs4pAKVwd3jQHMXJfBnNMCdbRLocoWLfmg6j4L1fcLdWqXN9AR9GiLnw6ipo3RKAz49ghWhkAzf5XCSY",
  "key24": "2JcQ5XA2PJut9dmjwnJ6sPhBfFzgmLLuNEMczuho88PChqMho9yG8hHPTrFJ77ZRmzU42iVAuq9eRfCaokNHLW3d",
  "key25": "sxdVV2rWf5JAeK2SVVyaQGimkiMWMkLR8UXYySKbFNWvi5XHgR6vPTy6usni3ECn6fmjqTfhobn7HouJ8UztvnF",
  "key26": "4hK9DU8YMaWgvRt4KFgZyxZe5V8f5JWnQNqryF8fJsi9zLrqywgXR8M6Pm4JcYXBno6MKUAnsyZo3MghYoziKufw",
  "key27": "oAALQf9MVv88um7tTuYmcFjGo1p6kzo8JF8kUYEqhtoePrSU7TAah5qw3nnswgBRHvFrHLy1QzVRSfijaPYVsEE",
  "key28": "5c8BM9ZXt9avM28NP8qbrU4LffbZbEafYksicbTPHaR1fHfS3CH6vrVumev9LGf3VEa8zxw1RAit4GTcDGmpAgGt",
  "key29": "2J2KRZ7dKzoAGodqD7bUb6aXExtSyxhF6kTejPJXagKuvEFVZ2kjkgrirNdiMeF5UHPEsFVE6D3qXANrwvnhFhuf",
  "key30": "2e6jxC9DrkqRof7BLtxDuyEDsd1dmGhUivfa1oKo5eRJGNmjUdjoBPdNsBmQDUMi2epftsf1wyGt5EnMV357xeci",
  "key31": "5BHTj5hK791d8ZRHMQcujF4uqNcjymruJh11Vhb6TXw612PALexieh2V4ge6baeJwQHmn9485iiHewEsWLBKPPjW",
  "key32": "3SX4ENQ6U8su71BbS9n2dfPvNeDdbCekHbmUDJgt6ThCeUZFjo5U6XPTgjxQQjt3Y7DJdKKBWQBQjfiWcfNefSoe",
  "key33": "4bmkjAWcNkLgBKRLebn4zYpRT8xtrfXRxhfNX8HQohBpqnz7sLjk3uY9ofRxwHAygwa6NgzWuMpuPMpV1HHFGm4u",
  "key34": "2wm5K1EiR44A6q8WEP2Gqzd2BWQrL6ftDokvduEqYahR3mQtwjh1YjJGa6qJP3sNXTYgVaC7ypjxaeDvfQVDsfAr",
  "key35": "4H2LEAMqk5nT2x2NBs4qLuvBGMXn3Eya3EW6aet9RcUnvMetfMYZykx7uRErMHeKHx1y93jWTkL4mGfHNa4qQFAP",
  "key36": "2vJaDkd6hk3fNq4X6CKT7tL4TQ42gVi3j7SRT2uQk6j411kNDVFxRFEn6wgvnzxD9h42dzGXAuk55Jy4Wx6VikVL",
  "key37": "62qSd2uePJqFri4mcwpbaC96mctFGyBcozD4Q4QvpLiLtDSwrH95e19hsJ9FRzAr6QM5Z82tQ3XbfPoqDSgUVCVA",
  "key38": "4NVo9cJLFwBrNSgf7x644pBwiKkGXMzhLempS6jobVnVNY7ocxqEvggU1HZQYUPuDbzsQEPYJyRk1ac1zZrrEn8H",
  "key39": "4cz8eWw3n2QCBy7bQA3s99NxGRSySyUR9zYuZFQCKYEADm7h4Qgkxy87iuTWxFWGtqSsgcR7vmZ37ZDB85e7vXgj",
  "key40": "3ik5P3Mq4bfyBJbNDGdDWFejyWhbzrvWB6xVLSUsvooiVdu7CgQ6uRcHvgoDF26zpHGYrRapTyfKCZRDJ5wWddB8",
  "key41": "4Qd42KzriLPWArBMLH2RZEyQmB4WKyVrAZCu48d9v1z6vpA7cYgg5nefgjC5fdzv5i5LT7pZYbX2LrhnCUPPK37C",
  "key42": "7aa7JT3VyNVQMSPoQwg4htU6ashTrjid9f1gF8YwxbkjwRMWKaygro6EX8o2giAitjidCmzNfM7N9PBNxE5Jw3R",
  "key43": "66dcmykC94FamBUQ9t1HLyXiiLnJq5zPVZ9JPLCZtVzqqptRPGuiUhpMw85DUPGTuGEe9o4Ygcy28tJXtYzTSFBB"
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
