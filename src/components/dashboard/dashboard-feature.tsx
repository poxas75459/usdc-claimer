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
    "kJw5XEcKJ2gL8fufL8VxrK6r3mAZ5ye8wriHuo2UM8DZFutAs6eq6LH1LQq37V23SZHzguio3BB6sMpK4VRPEa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3THqcizgwo1dYeBaQTRJ2VxnH3cAtDWjHhSj7H9HL6Uarma9X1yXZnwYbmKA4Vfe1WiTJAqyrefeoNMbGx2RykzZ",
  "key1": "5XvqZdHQvJGGMKwm9xNur3VqVSZWM9dvA9jW8ENG5W6vx5M5SqeTqxLhryYLdHtXqcEnaEgozDkUKyduVjPAfpaE",
  "key2": "5RdepeiocVXu3DKZdj8amcDGpxjmYSDg5t1YH91CRSimEABRNW19Y8Z8HqK1PwaVvG2Hn8jUqkAHe4C5uFW7MWtT",
  "key3": "xohLv99m7bnikorfBzg7pFkWzMEAwLTrGxcBCKacQkfvLGsrgLzQ9YD3iH71BkLYCDQgC9FTiUJE5E98qSQitFW",
  "key4": "LV9WqF9Yh326ptnWHnKu2n5LUB7RnZXxqe3jy92tQjapCJJvgQkE4Wf5L1F1Xw1xygmncvPRLje9D4ppVxjeFWh",
  "key5": "3Tv4Hn2G1AQ9zVffWCeQenFWmuGkqsGfcUCqmErBVhVgv2zTJf4aa3rg2YPYnNQzeWcR19fSxC8WXFdGy47bXZMn",
  "key6": "2jcrs3G2RixUPeNFhVX5MDj7n2dZCfTpz8VQB4z6HEPqLb2kFEk4kQFcxAneJggPGiTHL28fZHhAa6uQHVGTQMW7",
  "key7": "3ACSmMoT9PtWoEeio7wgShjqDX6taXYFVJUG9KPjq19V1oWtWFKNpwnRi5s5Df9oqTZH71g774gutC6sUFMZ7Jgr",
  "key8": "5nPRmiwXvyzc3wpjRvbFswgq4CxRvWYX4ARno1GxPQiYobKwpjcV3ZtKAqWif3z7ebaoS5FMMrhEedDXorChqiFP",
  "key9": "2A9B7cJgHUTNfB7Xp67K69uPPeS2PnRZSfvnGSbjqcFTGEHQvP8GBnXR22QfDS9Tr59S36NKrgTNAY2skJQcXp8n",
  "key10": "5TeAJ4NRidya5BpUGSxsKPLhsSJoALFG9Xb4XRFccMeiE7ejw7ur5QE5ATQMYVtKq5NmGuhvXxTfoar2AZFHfXEr",
  "key11": "4quLDxHfANE8ySvR79NMKY1BwynEKNkCTzn4u9j6VXcp8L4urQk4MwbWoa5un6ig5JRuFArC4WbcGrcw8g6mZr7s",
  "key12": "4VzZx1F1KKhdYrqnFB6NrKYjAoSNwhs33V28jBDL8sQamZ9w1xY1ehRBAfH8Brj8dUPkbrMj7yszEB5axzLC1RF1",
  "key13": "4EfWUgMZDfypfFxwYmHSCvNxqPXHE28fBg6sBpLE3QBSoMFshEvid2PcvcCvH7ayW3XNh1DfL2As1XpdW7RBaQ5E",
  "key14": "3dyes5BUHPTHiEsF1Atu6CyMRf6YohUZsPNNiH9JGQddDsy1zobWu4sccBoKfmdHrYSucVE1vRxz8WKa8Gihzx7U",
  "key15": "38t28yhN59BGRKqTJV53PvmL4S9tRzdBoCoMsTU3g7WDaVmNLidECrum8gHeUZ8Jm6SLzz5YbKvJvvhHL9suKKJ5",
  "key16": "XAdWbr1tLy4bpTcaNFgzAqBdEeDkdhXMd5Gh89xk3MppZvpW897WWToSTkdpH8UcxRiQ75PMAZXi9BvST4JR6P7",
  "key17": "37HE7WdyCuJ6hqCikRy3CKg5cHifWwomoTonmHxYRBUFg7Fh5u81oX8Msz4u7xZCcV9SA9DgayAmmruE44mrQApM",
  "key18": "5stq6AJcRvw2Af4EQ1G1GBQoCSCQQTZa9U88ayrwj86CUs7rpdrabMiNNW1zAPB33iEAWecLbRE2CJk98xLU2J8h",
  "key19": "3mFuvmtsSjg1tjPcbyQ8pwoQ8MJRy6WZohGTwvCeuvThaCLrEMcFTUVAFgMCjiNHetF9mobvSyPM3MPALTrdxhst",
  "key20": "4VuLrmU2Au1wb1sQ6jNtRdUowFSzFc571sCMKHp3YuadqfWT6Xv6tkXA42whHyNB5JPyn36gThUdbUd2kBobfeXC",
  "key21": "2goyovzS7SxwnUKipoVinShRQm3LiCtVqUGSRfmWYTHiuvaa9DLNYEoigzPLXikWmuAuBhM64QKZae6NwDNZQK6H",
  "key22": "5x5UvcZRZmApgz7NDCxsXv6T53YTDLkbdPzMq9fRVdfh7UN884UQnkkgmeEWZEzkp4aSz1EW8fwcVD7pZxAXyuaq",
  "key23": "46VPbeMPsCRisBkeFpo86kyPicQZFSgjxrLLtn3hatEDirkoASr9moSEAmNXsEf5qVKrAFhzjgPmW2FohMNUPEUj",
  "key24": "5gYgoQA6NdwLMLFnGBcQ26Ptp3XXjuE7kgNuhSoF1TrkkGFzj9DpGB4hA4zgaNNDjH9coChZLgubj6Qc7ZeUaaoP",
  "key25": "rbpod9nNpYStqjRAWTypwwVpn6STK6BshE8mhVuVEHDyM1FWwhdLoazW9iuvSoyiaJ5nT7SQH7ykuywxwTwi7pT",
  "key26": "4BFEnf3dan9jysvCRcy38AT8frHXDB1NX4XcuCXhJzNqe3E4ieQhEsWBAtkM9sejCBETXTTw2jKcEJsvBn295NF",
  "key27": "2YEKGBVMEiRMi6A55n4EEYWqXv72zmpEiyL2EKYEDMn4gDsLZTsthUEmSWz9AWnyMh9mGwsWgrEfrCEptNJQP1Zj",
  "key28": "5aPAaz7aBM2bvhxDAqmQh2TrGeYvhbuNXD7xD3YBxsrusAYPJkRdjyBpEGQqtjjgqg5sKSmWJ2oSB5cVLFRKLA4g",
  "key29": "3hKwusWm8SuCXGxzX3gE63awh5Xy8tQzUbu7FVz8XYRnsovAY88ngmCFt6jyH6DfT1AvkgnTnzL8cCKhUoALyZYH",
  "key30": "5uKVSnvboMZh38e57bxYSPYHTYHdf1kKkek4AwKJWrLucgyBt1QwtHLR62McHRoFHHuGdh2D5iADF5DofXVBU64o",
  "key31": "5azd7Y5DWTSbRT9fQuq4omCMspaSYLzvTTVGYUiPjzV1GYJRYz5HW5HGxG9xBZotqZBerw4PHEkSaHKp1eZbLJRo",
  "key32": "4auKaivagh48gcBkJpLdfab1Z6N77CeJqgW7gq5o6VF5qmXZnTBrDHE5FB2jPtVoctBtmds7xkFTCpbC1GyboMa6",
  "key33": "3mB9w3pqA6EZu1j7AwbJaw4t8TrKpgE6m4hDqok1E7AxWCTdEVn6d9cfiM17WUXMvFpD6BmKGWhdi2WiZmHDBeg",
  "key34": "2xLSR5A1s5MbYwPs8euk3ugXTbK7Zs4bNq1c8cbUSj3tAAbLjHssihBcfcQBzqpvBfUepSxjfckmHLJ9aPGfeq87",
  "key35": "3DHaLS7zcruF8dWYw7jtKNd33f8Zje4znjXMC4D3WT3Xv1GwB5Ad3UKPZs1pk3QbbdFVCHK3TLQGsC7oqeXnGxyq",
  "key36": "5SVAhYMyxka9hz1jAK6XC9s7NtwXN66KUCeb31u3ixAJyKmPGhe89CPWUZdPzb34T3EqBo724zhnxard9b4t86bR",
  "key37": "5WPaEdzvaVxFP15iqDcmw96hotddKJDpVnHTTnVgEkZHS6vTEMFR75y4xoF7WKgYAYgPxHeSfp5yQ5YQLttnxvBi",
  "key38": "PXAWv5MGU13ytUddDrvN2BKUjP5Fiif3aoQPjNRav2uMgTBFpMJnup5QSKuGqqtcyWJRzLF6tVR8GdEPC71x2uG",
  "key39": "4tBHwc1SQfeitkUAXznM5BtXpb7ZgvxzJfUP32MtjT8jesLee6oyFSX3rBYMzzPE8bfcD8gh2ADVHfbrvDNrhGUg"
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
