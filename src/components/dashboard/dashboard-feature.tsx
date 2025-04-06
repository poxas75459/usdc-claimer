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
    "5PqhGmXAbeKda3hor1x7VzTsZ6Lj1yQvYgJ85nDfcnC2mBX4rVEFd5Rtk4UaqHSjwCFzq9t3rWBhcwN7n713XaVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L4eA8dWmBn48diNZPEWXyyxn9M1bWjSKaLWSkYSVTSAywFxRhw9xcoSmw4bmNvVQh3mxk37NxMvyL82XD6sGW4L",
  "key1": "4QLwhEYsApyeCZQzYa6LVP9ForTT5FDh4DZGLY1wWKitpa4fJ85us7YLLi5uxmYtgSqFuqabXWoPTADvYzbRnqnQ",
  "key2": "ZgHqnPe1AvpSV7z1sJ2ryCA9WzCTAXcc3MPKofSzu2MrRwPtKW5vJ12XtYg9TKBFyu6w6Ga8NaLwMPToPPez1rb",
  "key3": "w54SVZC6pRgCTLSj1u7iZ9u7BEqNnSSZAMMH3HzUBLcuUg4LmhfbqnRHwdUVkGdwsHAWu3ZnXxGQXojqgBAwAef",
  "key4": "4sn5Hh8kriPUVZUTSS8ALwe5SjQuNThW4m8LS1pFM7kWHiya3kt2rctQHu6j5ohud2qFk9CjtQxut1htnKuXmi7V",
  "key5": "3oQBZ9xLWtpNmcpSJGupErKrYgYVfE49adssg22PcwitrhjaagYKjqQbYuK2fSxSzvKSx2f13ythUgxa6okGUU3C",
  "key6": "3cQH3dZWKJwEcidQXHkmhieuVtrK5jUWyhc183ZLWQXEdBQW49Y1eAc3To41zo6qVUWLmczfgJ26TpAfyDRYwoc5",
  "key7": "2MMtbCkKooJkcNTZkeiZHFtA3g4PxWrkKcYmDM2xAn7ZQRC7PWW5G3eRtzoHpUQsYcQ4WvwfBEfvGkFkWG7JFVww",
  "key8": "2mQY6kcRcMFDVGEJrPy5FJGGLiqdhQ1JnG1z61dz5WdL96B3iaKniwHghKBJHmaMf5R7WPvJn4YfUQGf1df9xNR7",
  "key9": "5ZM7eA8yviLg7xF1dGriyz92oT8rSd9Sd5s5gBZPC9kAAajNNeFru4e2FPffcc6oT7bk5rvqAXXQKmANaK9KD1h6",
  "key10": "C8rHwTVkJkHze3pji1CrJj68A4DQdcyfzbAPJB5mAqUc5bHFvWq9LsDUyexHa4kjvpWfw2JNJRSNnKf3v8sZkvB",
  "key11": "5xkEa8ojbLPjAsDWLey8RaeGp876YQukTnSCUVPnUcTeAPW5RGSuA59kJjkVLG8zzbENEVQWh9xmGmJpegBzPze8",
  "key12": "5uCd7uTpxSBbQEjUPuYUEXu7xukZ3EsEDYZFXPg6qmeRLLGLG4ntUDy5cQ9pHDE7ExxMzDmeiZgJY9jyy3NCkm3q",
  "key13": "4ypsP6zw9iFbm6hjyiuGFXL17BMkdUWP1BQhqFWqrqWigJfSrVjaqLVzkZe4WymnLbTfWBwo9h2NH5GiuppZpvuz",
  "key14": "4Tf5NbK51SKh9mLVQHT96CLCm2eYbTq6agYipQPMDJY4yUUCiLuhJs2Yfu4AdpSXW7hd6DwsDXJjj4JwEDC721gp",
  "key15": "5y7n97dvDppcPTYRnBxoTo3yH3nzmjFq4y4ZD9aNgvC6se9UXoRjKYfkhjLD6WAuDwE21E8ruttdGdRMWEv8t1j3",
  "key16": "8bRURM3tF8LVezMVTvfQGfuDrCqx4UkJeJExs2j3WFSgPpTw3Wux2xqYXph5M5K7LUhrXRno4wivggD7RmB3pKz",
  "key17": "3EPWE657nyEtVRuS6vbAyReAcdoqabX1Quv5dcDu2sHNSmaTqbhyKzj3E9hePCgfTnht2tvABySoVsXootTBY52y",
  "key18": "5J3YYB8pY4VzLpQC5DbfRygRYnKUNue4aAYieJJu961XEg4xiyRCCyZzs1jKsx1ayYv2C3wVxgXWxwQTDgsSSg1d",
  "key19": "2rYMSeSwAxw3qGH4o1TayLTGcVjsCjkFnhPYUhxfMyCvfbz4mHBZhG9vTfiPCg2qsEGZechM89TJUVjPhbLFmbZA",
  "key20": "5r9PqynLVnu8ppt5Mg88HTpgnu89ZHZuNXzjhdNtJNZZmLLkVS6yRMmqMVExpju95tfpHnk9d6CeubCnwQKpoREU",
  "key21": "3n8E6vrGJLtcZg3bXXdXwPXvLteF663Qcpc3RL9VWbebzySv519KRWjoh8FodkJveL3Ms3iT3zdCZP7Z2a8H8VYS",
  "key22": "23VuHT4nYs1YGzTrBpvDoWNUTRBG3fiDFQsM6GNVBouy8i2STDjQLfCqgSwnu9gJ9bfDt52eEz2yooEn4YgaNidk",
  "key23": "5ybjPfvY28Eiuv1WT6QeWuD9GNzmJLe7RwvuYRJXMJ3E96ZP3hgB8c8TPwLbD9VrdAWYqarDtMYk5nGAvDaeY7uz",
  "key24": "4D5V9aUg9EnDUKFxhVtAutJatFaQfohq3yX1s17oEPE3fGs4uMmmHUgMtKFSFzeX4Hwu8kCiNS3xcZc8KcdcYsKy",
  "key25": "4X8o4ygRkefRUKWhXrAifZezSHt1FnBDGpivb848vFGiUmkNnXDNQYwKRhrmUUy9MeM1NZ3URvDZmxUm3oqVtUrc",
  "key26": "5CD7BqjRAoFEDHKJfKPLiypgyDXKzwoEGLTDxDX2ogRCCAdwV678nZCTACJ2Nmvn4acr7L3Yi68UxL3tKNJyz3sE",
  "key27": "3f6byPeQWbzoLQtPuC1kRJRecUn184rG2AWPNEgqpPNxGKVxWunZPDUebAUQ6fwiyMbk1spWHmurCyFawmw5fHyt",
  "key28": "JLN9pJ61euAYAX4tEun6LPoy8pB1jbJXuowRENxTWkBTvr1K3Uns6jopRqsjaJV14dEqNYM7ELwkwAcg8WkiJfZ",
  "key29": "3aqQd4rGaTbfJknZiGGtL4TvgfJ6VvhZUUzhxk5SqLX22Yjmtj9Aqxjj1hhb9XCWFfvT67sdfSGB2tgrgED6jgoJ",
  "key30": "3DKGY9Zi7CAtb2rEnAtoySqgb26HNikeADXb4RFK4GfLgpoWPN3ErbWbZC4tX11SwiZwWSNZGcwn1gaUiwqqV9z9",
  "key31": "4AkSsVAqQkTDKezQ4nEnLUHepUZ96MPozKEDoeDJ8HZtsb32ZgPHJtPgDkiWYjS4o8MFUkH5Z8wJi64Uu4rQ4P3s",
  "key32": "4MHHQ8WEUiNxN9pxnNSAndqcfqjnkx1QsqA8Ei8We78o3ZYvDDx2MyT4gUwD4NKo5waRFJfeSakvvh3za5KmhQhx",
  "key33": "48D3tFqoeq8z8b3b8JdnDpGTuoH9LiRvunSFFCKyp97p8CgTTNcsuCuQuLwGqDX4ym5A3u9BVhDEf5m3iQez9BUa",
  "key34": "zxcobN99PMnxzppuLmUHZL1huVVwiuFUhDubtgmVckabv89VDD8T3ByUi69H4uu2Aabw8rDiLrb99czCh4Dy9wD",
  "key35": "cJBwpEVbokjBS8LACgNoEH8KrNe22L9u5foLhcJZWWxRTBdUmkm2wZnQNSPHBfPGe4CcFkrKsxHgcpv5PAyb4FE",
  "key36": "2i1UM7PQJNhGbNE7erpXcPz8MQmubh2Ldj2GfaSPEdPhgDbtyARG8ntCwEb5tEoDDYZf2roH7tNZPF63hvVKWvaA",
  "key37": "5dPrfx7GixK1pBD35uemv2CoWN36xhFVzD3Pc3igsBmmm9n5PA5t5s15f6DHK4Nm1jQ5fho8mNJY3gy66bG8Wz26",
  "key38": "4ujYmKQJUZFLU3iTQfAMW3aZz6pPXEkDnLzxGAbhADdunKWeueEsYY3iJuipaAwXztDq13h5yvmKqoQiSV4uuKz3",
  "key39": "47XPcZsLSgcQzJxZKUhQBFPxZVjRfQNrHtqfUhJmR9ecyJyMzoAUEstQR5NRBSkRWCui8bHJ32JfmqSjmfB2Nsnj",
  "key40": "4ireEfX7kf9hVdLE2EwxBrS8FvXtuDA63P2ckbo7tuUwEcZHvvu2NchdT5aCN4uitUmA6rY3394j85Srs93Xn4SC",
  "key41": "3CyDxSHE9cCj9UqhN1a2aZqikKF62oBQxsywkoxhMsUt2Dd7SdbyZonLaLuodCDprgQyYx4oYncSPHsF6dxNd7MC",
  "key42": "3yNHujbVzAvXiTQTqBn9qK1781rJz9FyPzdkJk57Qhb2jSuYDjhcFDgU2TNvsZhMcW4fRsU42Kd1tcLycc4uhdUr",
  "key43": "25HB6x8kUzazxwbGYrcg3Jywq6Jz5tsRkRAp9Pid1UZHZhquwDXW4Kf3nGj4CCtfA3SLsceahuNGbzdxyj637g43",
  "key44": "cnhafXDwKsoS2gZyjSLNytV2etnHVWKQSKRNCpoq76x7Ls7P2XJJaHQD7dSAvN52RFphf4fLrQM6PM8KcELzWho",
  "key45": "4VJWdfKAyt9behviRU8FbmMrbjjZPAE2o3bVwzJVwTSZKFhFpujZvdaHGhXttycCEKy5B8qtdL5Ee38QarchZeNL",
  "key46": "5WKwU47oKosXVJzwffHZQ1Jh2TVVxtcFiZvzY8kn6uXRhSd13xf21Sg6svqCfyvhbSAa8p2TE4RFcYDd8duaUP5i",
  "key47": "3726tnqxvQDcVPDbgt2uTHJ1vPBcT9Mo2SmGTYCjiENmz6ALDbu88JjsXc3M8kphpp2SR6f8cDTVquzyTWubf4AG",
  "key48": "4iUsrs7UE5HjXtJiVu9YEJqWeWkpbMPj1hDRTX5Z5u6or9AD2c3drqTmBTvtZwyg27yjwCiag3B82dv6utmYPitu",
  "key49": "3F1uk29ETcuDXhjUzheVQNfYR64cGjatw1svZWg8d9fs9zERND4BiFYaXmUXjzzUxYFf82v4rVeWBxmGAnb8QmnZ"
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
