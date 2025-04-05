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
    "65UktUjrjgyZ1AFu8NcRYeJWsVeueDC2d4MGhnh9T8mA7Tem8qF9dmk2biTU7EK25LcFB9btMuvgC5AVhFGCW43o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFeahWFpNydXKsdnPw9BjhxSEGPiybSPLgkEGLt6TWTwCMmf3jxM2yArfXbxuVDvj76KChcSNd8stcifZnY6kxe",
  "key1": "65E6642zwbJgH8D2HeoZrfMCQ2CnM2vmeYq2ZZs4GauUBzczDM9BkjZsNpuSKT3XE6KsSPjzYD8diRR2dUYcPnY8",
  "key2": "ondc9dwhKMUF1wZwGWJAdQuJkBqS5wnMimrQtZAZKtd15VG82LYuSb7z9iQ5S1dkxEpwDiUJXXHbNFv3rXgKAw1",
  "key3": "W1WgSh4m3ocZzMfSRFVySi436uzKykL3L9xuc1SR4J2DMwkdarr5MXh47cbWjDt2pwYAWn25VeNZH1Uo5SUeRDU",
  "key4": "3CaLx3Nm6UFQweYYMUjwGmUY6eDDXTv4UY9ExFQjLbinpDyNqKaWDqD65i3XGSrp8MjJk7bQsToSYykmpoSM6o7D",
  "key5": "TPygBQHFQxZprKMate5NeFQPCQZgFkiPeorbwJiQLfe8wZyxaGDSHXfu9twccutu68xynQAmSesvXvjGZPpXLey",
  "key6": "4TAs3NsokwDaJZpQ1JiiQ2qh4YpZo2tcte1wMvb7Jk1Ewap6yWUUqS8BmAeShbjvqi7K3UdaEvJXkjKzecs514h8",
  "key7": "5yuY4kQ3HhXdcaFM5s4HtNovB1ZQsRFJDAB9KQx8UfE8wbfxZnNDCbXNCQQ1w4gofmYxdpMTDmGjJwSGaZ8FZYeJ",
  "key8": "oohTcPbPPzG3csj5Tx1HcnNSRkbpPqU731ytsyEKkYUVoa8nbGuEiNVb3zE4jyBxiYy5gq9cd7qPepZafrjVt3M",
  "key9": "39ztgunMBux6zoWrWJaTJvif5JPz8ZMpRqDotRXPYynwFqGL2DhLhkiacB8eYHJCZ8SuYMwtLUGRN2DBFUUFCpGW",
  "key10": "2xgeTtKP2TV7M43ammurPVofWaU9NPwfvXyGdthyiC9ChdRmgVMAhsTVmwJj8RfzT4AviGPuQBp4PfEawKTwjMDr",
  "key11": "61b9MTgtCRYwCY38gFP7XScpwMQcdMrvjZkgShfbcRSZvC2P4EihttXsF6zDUrJJmFfz1e4iAfxp6LzRmAXPQrEy",
  "key12": "5QngQhUSfiq6v5NrP2QfitWnpX2GtMmoabADmkzjAwz6QjvN8XtZDrmpwpmoDqfQu5i5Y9xZNY2RwrB68RLCVRQW",
  "key13": "55MegGmMrNpDJ4v3HFG3XBYcYFxyfy6yY3dXNHRZh3EESTDfY7RC1A9WFj7L3sJfAoP4jJicADbofLMZTv5CcAFb",
  "key14": "5gs36SdPAGNYwvJ2H4GYGT4uuAWM1C4d3RwHapEUzTU5SwiU4Dnu1pTzR2f5cfqA737S2iLdiiEJDXTfSRFNvYH8",
  "key15": "5Eh2y9wK7LU6hHyMzti4hXKMTJ5N5F6d2P54oqspkbRavJhh2DbVQ4a3T4yqGnJwyotmuGEXXe5U82BcBi2omwph",
  "key16": "5KbG5yGrtrqp1ceU8VNFkfB1Wcs56UmPfMbMaeyeQ96ruHZc8SZKPqF6yrU8kRskWvfK9Anui7kQCSDGUNNATbUU",
  "key17": "3p7f6BauPzxpkDpt9zqeSrfJi1bWZwAZqvzGJUyw8sgfzUrZCKyYJvSukncY79sET8xrZZEU8KMXumseYs8ZEYmE",
  "key18": "4L1wAWRjmjdJ4guyj2rEgah6LR3sowUM7Mrv77ZK3SPd3cgzjgy3pceP6u9HAKweFiNAo1c7Ytja2YbxFAhqkZ4S",
  "key19": "af8wSceP2XdL2xJthCEd1cnTainqqWgLqweRTKf3VpJfw25ySCUbNpgSJdKJQ7JF5my4BHG78nwpoVCWPSX3EbR",
  "key20": "3zq14EsgxF4Wg2itvaeasuSGNMiGdGzqtDJryxA5Y7CuMpuNykrGLZpuzu2SAZKwiNNDobA6c1QKfEuVTBVXYaj8",
  "key21": "5aspKTuDcs9HRyjyCtqMSqJFRCJX3V3vJT3xcYQ8LDE1fQqaQ2DuGtfL8yEMsCyTinuYndt4t6ZUFwQJqtbVTUDE",
  "key22": "4ka713s1DmWe4vg28p61TWgDbqQCv1dLZY2r9ABmp8jZgTyxHcWheAGXRFcEZEHM5qPoj4r67VHVpKafrAGhhqLR",
  "key23": "5BLgLr4rdPJ8212omzHaydpjVhchdcKFEsQAet9sGXtoRjUUn67vcKrf8VmX3VTMUa15BevqAyazhUnfYPSrssyA",
  "key24": "p84fMS29vy6Mbisox3Mnjdcx4vqAjfPgD1S8oCfemtUhh2mqNSn9ioke3d9N3GE7AHSMiEFCbiLAGGtCEimuWoF",
  "key25": "5Q7QQVHksNou1LgLxFBH8U4zWHvzzfhsE8UdyMaEH8MDYfQYkV3BndEULFwWWBuL1Mn2Xr6cBE2ZzwPni9uDxFzA",
  "key26": "3fDmevf5TqbakpxbDKUjTgHS2MyEKFcoiq6YJKZrpsbLoqKW375YDS34ZHgQNLFRVRT3EzJrSCmDBhAgYLP5NByC",
  "key27": "4rFYndJRfwKp1E3uTgFDuiudG9LAZXSqjq3vZxFFZLE56nigfcho9AdGCVJufrL87cHeVjAnpD5r5vT2TgLdw3ju",
  "key28": "4SkNzTwyRARn57dGyyrGMwYzTKRv4ww5vXDqgsvwgsLTp5KFHiqWuPs7JiVtLd62bpEUah5uCuzi5BonWgb5PmV2",
  "key29": "4Yz5C7dGJ1J82uCYaLbUJXjE41ff9AthB12Q8VdzvhRpXv15TdGRgDNcgzMGQDNSnAjSAdXHwADJeK5MTxUMqx1o",
  "key30": "48AAmcgCne6wCcx5viSWjraxiLcfBNnbDcUhgfBbubvZ8Q2Cn8oRUDeVBGZsCCHdLCPc886x8ct5dLgXU1RY4GyE",
  "key31": "vNVc4oifnK1vAxqaGcPRDUzc3GJfJ28KSPmxuiKFYzrtWtMU9aTEHMJF5ELZvCMNTYXpspBewPQGooPdiVcBPzZ",
  "key32": "3JpTSCEoMF4q61QkV6gh9nfHPkgjvgZKfNdnqkuQg1MTBtWy6dm6xDzdTS8KrVP1Y8NhtxeWYXKozuBXEoDYEgMi",
  "key33": "cGUJhvxTyUxrowvuhws9KcdpkUuwV9HXQU1Cb6rVg9GXisa1zxB9ChQKQMzG59fX37SQH3bjEhRndtgUXFzTRPq",
  "key34": "3oQ75oxVcKfq8pX933JXP1KfK3bSNcYrSKEAjHs9G2vQxgm23gAbeAWJwcmdvQzqepzboVnaEmnLCxRN4VtJYim6",
  "key35": "3xrTkUjekqsDqmpF7mErTdUEJBHt2EVB5DN3W6mLqULh5uK7bo388WJy8g7xkDbpKgj9Ln5MJEC9XDFp9H99iG62",
  "key36": "KqiEYsUbYoQi6nSgJxMcqoGes6eS9V6WegRLMtp661Dp5xWgXwwjBYjdPSi5kvcniThUze7GAj7XWZZhdnJzFgP",
  "key37": "3MQoTpaKfWWEA76RmAjggEyvDEpC31DDbpxuKczqNNqSrZrJZzmGjQAr189YMLyFAT2fxLEb9xSy2wyx9QGsTDz8",
  "key38": "mcGpYjKRsNFAg6aFsoWT7JpCgECT8hQ4m6KajWbeKMi7tDTvGLCcLEbXbJthsa9D2gkmpFMRASh8zr3Vk7U3qwr",
  "key39": "doNspcui9ReyQwpKvN6XjpBqD1yYALMnFXRRH12y8BG8wLwHz8HU6Q4myZ28HSPJwuk4bndV8QWCZxw1eEDYsGU",
  "key40": "4z7iqwkEK479mThS48AoGqNKFkAiFiKvKL46SEZfF7LnG2TWnKVQT5KP1naa9gBAeByoCLwzHbV9LUciGUQE7b1F",
  "key41": "4oqufpVM9mUrNXe6138aebuzEgTMeFN6wamGKPnHELZRA4AnyDJWYQHgUkE5Y6DV6pBpEYBErne7b3rxKjkYsg8d",
  "key42": "2WjREvJF7ksSz8ArCt6Nafr2W19Ps5Z3tGNmjpNfk3rbExue6qD5YR8MgkvjLd2XVEt7M997vyQr7g2qsisUoexc",
  "key43": "hN9fUXVECeARp19NudTiMjE87G7gc2FHRra6PqCjPBC8uFhgmPBGHeT4eqpwYKyi1GfGvLM1CL4z7XitkEzhXPT",
  "key44": "5ZX9X7P5DKr47HRaW1MYqDJR18mPG17QCcis9y8PRTn4ZfFaspRFcisLmC7xcuETb3PGqkNoNJwKdqqqgfYhsjsk",
  "key45": "4xKjA29NaH3425j6gLXFhVoZgPvG9Lg21uiArSbjR2xRfCg1BEbUYs3dcvnX2LLBjZ29mnhazn1dCtxswo95kL8w",
  "key46": "2prBK5gRnih1rBA7gsSJFEVzanmN5DPYLPfLC9W6nWNtqNHUQLrr4eFjpfyctecZRWLojTm36o8PRpRv83tz9zdN",
  "key47": "4Njd84LZoew4gKUZJ4iZeW5tqAxvXdD7XvAn3nKzthov3bJp846Fn6Sii9KnCW82ZzjB1sq2xpmuE7pQjTG7x3YD"
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
