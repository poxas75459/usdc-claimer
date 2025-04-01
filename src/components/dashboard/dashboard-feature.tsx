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
    "LiK3474MxAorkrs5NZqGJEbhH5QkiqmC9nZUj9pop1nuWA4JZo8ToPgsMsv54j8vZdnRnq5gV7rhUtxqjHvdaRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JjeQrDKZzmmkZ1PAkgP7RNEE2M9AzpQKQaYeMrgzc4KNBX9EArbPoGJV9CxBhEjX98wRf9y8AvS4XTNeEJusr8U",
  "key1": "3tEjeFetL6R5cukPRUkoGv99q2WpTf5ByX2gEJJsWzuuLVc5NnVzv2pRWpc16t74BqRK6oHeUG2pnE26Vcim6sQT",
  "key2": "2BSnvYW3ZXG3ARSz74sPyAdE6huuSwDGn6gcs5XjKgTHVUjtQKS6QNfCy3wFsJ1Kbmr2hQKZHrrkQHmRDd5PRAKf",
  "key3": "4FnSUkzRYm9Jm7PwwDLPztDweQ8P2hwf2XDNG2YEwW9ESQAWMjmpRCMDz4EGujbTFcJftjV9icA1coahkQCF1Sn4",
  "key4": "3SEBNuMnz18mX8Md7rRJi6CUJ2XrxucWWFUesDW6nrTz67sMpAGvgTx97odxwf3FDb33vzdUZMuRt2wG2RoyWUqF",
  "key5": "6DS2JdeafsqWpganeaFioekAbZLwqUb4EmYn2nN5dZ1baXi6NzzAt1XmG6wbVTEm7oLY4HdJD6972BXSiRUFvye",
  "key6": "5taj7rg22CHarFnycAAE2Tzwvuf7vLk9vjdJKmtn3stN3HcYYSy6cUEboc3Ptz9Rbt8vdgRGZHZx9srW8FGPEp5X",
  "key7": "VaNwW6wcwfFJXSG1gYg3SFRpNLZkTEKxnMRiuYkn1T36enVCn8mnWzgHPwT6XQ3rV5mGX1nqapGpvib7YgSGf1j",
  "key8": "2UgYXCwup3St1JuRLaRTQXrp9jH597NdEX3CnhTJKxNNNUDXj4Mz33XHAUSfnhFYRtoyiVc1GSZnDZixjEp5vw3U",
  "key9": "4pyMgWPAb1eD6XEtyYWnG5CrTCDRYHxP1XtzFfKvkqSKLKW3L8UoGYREoWuuNsHxEEYe2yoiaBxvhJ6huwDVnmBF",
  "key10": "SZEvTBXmZQgyEPxgGnUGmeR9zacfhCyB92kGHeUA49Ry13cjYjG6UEbmNPhpNVsQ58B6WZR1pAgt37uuXNYcct8",
  "key11": "gnpeWtwGvir6CNBMzY2djzQm17nr3ZHiuTDzBC4Ge9MgCWkfEkDtcB6Cpz9txVBcZnY6ifDziwUmw769p8YqjZw",
  "key12": "txgnBEJiBtR7NXyBdCkVuZ9oPXUVvk6AXRhwrD8N6HGgZZhbDrRvXrkwqUDqo9sVvDG1PctUiC7LPyhYybSx6iu",
  "key13": "5xLKk2weCuyqdpDJxy7FMgDzCav7nFUdNYnjUopMCrxSZCqiYiQuLx2iYtc9zAD1qg6BGFKaEJof48n98nyjypNB",
  "key14": "5oMy4gb1Wn5ce6RBG3v8Z8ZjTWhRZTU1eWCV3uDgyPCRWomdDyQdYzAwvdKspLPnYmK3Sw3FSXNx3nyADcZLtsP2",
  "key15": "3knDCsbL1SPzaD4dPeToPAaExHAer2FLPqkNdC8hU6BPuQLYcej8veEjtRutFHZWauSmFnAoQq4CvyhmtkRQoZLG",
  "key16": "31sN5ZrbiPLbw2m5rejhVBcrbnoKG8o65CPozs2N5f2itskVDtyuDiuhvDL1KmcraBcKqSKsedj16qJ1H36GjA1D",
  "key17": "jwvfyDaamAejHikDdawPPrX9NLiSCSBQLHmJcQreS2fs7YmZMzBGazKeX7JympcC3e2xGV9kyP2adV8m5qSvew2",
  "key18": "KJWczPEb9ESFTHYWcgerA7nCRLgjVTpqaGEsnRPg1zCLsCUvGBNfxRZcmcgMkvJfY3dS64H5vGYjQy13h7HPfie",
  "key19": "2o8Ly89Hk99hxN74U4ST2xZYnVhoA22QQYsm1A6PVjvYcpq26336VtQeWUX7jDSmr5czxyGdWo2vH5s57Sac8xvS",
  "key20": "2k8tSLafzzMZtQxsS4zqY1seSiz6MegHBkStEnWFjaPZR7cGcyFLt9dwL4QrCh6mgbevEvSBunAeVBuHQFZPjtST",
  "key21": "2ZT6JzSZUkBmDPGcBXz3kD366MXVT9uyyHwmvPWg2NwfpGGPz6axC18wvbu8Vnv8jqC6mxF6aTQpKoZAPcWjdp2z",
  "key22": "3ZvibkLxEK1muvsbJRPk7xEdsZZRzCTwWPcckYUB1KK1ibQrvEXFs4ugA6Y9FGKRvEAr6sH6EHopT3EH7i4TyceH",
  "key23": "49NrXdaPrmjmtemcWgfRWj7jbsiPx2iTJ1MfJKhoq5Decnrfe3k6ujYgVvpDa24SFMQtmuPJA3BMVgcTaJrLTHFM",
  "key24": "kpPhod6NwWzoYJqYhFEBxQ3vBpp4iizapDgsoBAWXDQeQvym3D1mJTFCtCctLcDYmTrHDZCyzEkjbtaVpz88aUK",
  "key25": "2xRUhgbxfA1cPT9FTjLCcvf1JLUijcUW6sSRubQwDHHxK1z2nUgNRgdqwtDbUSM52DLZ62nUizSkRhFchb86uLfh",
  "key26": "rPHNt9FiockkBG8wmPDu6G4J4HZzg3SgjH5bnvw5VTWmLCoa9JSh1Hc74owp94hQPcKT7PSHiARGsaorSbqeG8R",
  "key27": "4ky543pUuCA7A91MnMdLD98pU9MoBF5i11vdi5CK17NB6yyAewvS9YNEtCM7paJGz1qK2DLGCqL1cm9TvgZTwMCz",
  "key28": "qWQbL694kQui4JGKLgxy6DCZ7hQQJPmoEAof1HUBDTz4VLMQnsxeHy1ATW7mdmfUHURXex35HRW6ByJ2ieEPZCK",
  "key29": "3FhGwKjtYSwXH37PQwkzpqLgMPEvV6gvJns835vwTGGzGUeDUxinFcnfxrFAjxXZhcZb68QPy2MmxZArVwcUnbGz",
  "key30": "2xDwXmcaqFwtDMZCBkeAzCgmZCpzcZxCZKt4Q6pEo3Xpqnzu8humo66Y3ux5HbSkyDZzN9Yx1b2qTWHVMuSv9kB3",
  "key31": "2FVBhXDP1Ep8RqG89a2WYBQa1MLVh8cYdWiH3WNusdbc1XXJZtDMr2zjSE7DWoHWzj2o5JbSnHo2XxvcNx55iXRT",
  "key32": "4r1EyquegHgisX4ReGWLDgFYjRpA8c3CjvuQvfzVCF2uS612wiRWLGyjhoyombYcwxZdtfUSEBVE5tvvXPkbhHdv",
  "key33": "2ypVKFip5EtoijdMU3wBoNxfByBT4LC9NU2g6xXxneMGwNJfjspvc7yxu5dCnd92ueM9ti1itnvBpXxFZS8D72WD",
  "key34": "Uwum8rRekPgmCxSFBrSQo2NHr5H3SJGMWjCTAfMRQuVaV9hJhSBPpfDnGNCbJDCupDLSQckv28fXfSyZ1F5t9J3",
  "key35": "2K3Sjdphsk4smLFwsiLsRxhD9K5R8kJtbSasfK1WDiFEbBRXgkZyCx4cSNWSZCPJWPyDnMLF2gCVeEHGjgEAr9Hd",
  "key36": "rhykKc7ywK4dUWvxn6QBnQk3i2pt8Wir1JXw6bZWtEyaqyPWp3Pu477orAF5kTatWgVNSPxiHxREXwKiH1sqypm",
  "key37": "2oUn9D2yJ4YssgncAH9VngdYGHT2DvSTJfmMMdDZdYKBZSnpR5ux3gL5SwGDjaRn4ioiRherEC6UHZoxrzX1MMwo",
  "key38": "2Thv4jCULQd67LBf9xJr1k5Kf9fPrKw7Gw7kPrzW4FJBU7iZ7FW7H7Kn4pzzgXxtx91g1hHWM26LetLfd3YYXRWe",
  "key39": "635zQ3pRa9t9wW8N2jJBoEVGUkTjMKoXFjH1VorgfpkQC7PPfo8xZRTM6Nrjkx4g9RnKSmZcgXyVhSBjvhxWRKV4",
  "key40": "2o12HpyHXhaJqYUwSnHTTXLPMdCz97ikQ8cyrvA1km7g7ahEr5fY51E5nUHXxgFUWVDFk3TfCktjHSuCPq64VxiF",
  "key41": "5w3wvomyvZPfMaE37xyXgWXrcyLEsAsgzQ4pBYFLEgH1Hkw2Se39Ggibf3117RWbCLyQEHBQA1sMo7kgExdakys6",
  "key42": "22c49m6ehBHg2DrTkrdS23VsXJKQeisXTWktrbiUcUpq9A8r3xPcWmbDvfpNebTXNd21PmQChqZJJawHCmA1DpXF",
  "key43": "S3Pa47B76TiRW34R2Vnk742ACwMHHbt1hL21VSNzuTkswnXUZsmKQeHUfYsMyzHj7qGh7PQpskZneQVpUsz8mM7",
  "key44": "27Bw7fCALPwNBbaNYT4T7ZqP8cPmtuAEvmodymqVjrGeAS4uyDQp4YaWQZ8PjwofbaeS8vPwELHztxHpaGbCjWVo",
  "key45": "4yrD2VT3R8CVp2gEejbTuCzbzw5PwkWiFSgqtvfXzuGt7xpYuTaMxBekVk8UkvKQWKHUbPkoWPkWHd9KMj2wR6uw",
  "key46": "5zscKwaM6hm19B41zT6pz3YvXQPLyfBtwub3T47kHYB9ABH4im4eEPsHtaNDTc7GtHs6aBtNs8YjKz6x6XCeDKD2"
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
