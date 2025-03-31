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
    "4BTjrVDnB4dQzZ3P4Cz7mPpGsQW1XGJP28Gn2Yd8hDMb4NHDZSEQUX4rFB5SnsPHgDbyvsqMNfQd2mWCMbqvoqZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oH1jrFEqRdrfMRP38eojwbLe69yoiJVv6LZ7pJRrVvVcyGNZjBujV3uMUDi2aJ5k98cSUYsvSiignKj5S4S3xfb",
  "key1": "5t98577qkYqd1Xw5uHgTE2qtKtedphMpRNjvXA2xGHuvY17Wog4tR3fmcvC6uxM7szJqgDgjFHoayg9LF8EVKcwE",
  "key2": "5ydLH4qM12Xw5tG7yFGbakfFJJH9FMZPsMdoFGZfnPp9pcgZ1KZdXbLBLiqJHhNwi8bfyANjRTr1E6iKQr7N5bNd",
  "key3": "5uqXBzv9Hr3WDrjN3hwBroTvU81GmVcmoNLTXrQz8vg7o6gPWokNR9ywVjHWVd2q3v34LPw4FfXZSLgnW6YL4L1j",
  "key4": "5GpRQRpysFRoG3zy5yNEZcSjMG3bQWNwTdFTKqJ6R8ENiKUUKmCYdz3h2dn227ndMz5cviy5Y5gvmTDR7hwMRj5H",
  "key5": "5PU2NBxDAuQ2cULUxnqHGZRjy5y1fkUERugezmq1rUbKtBX5t6wYo6XvzyzpV1BybguPRr3K1fkgsAnXpHMHBHYV",
  "key6": "4B7DUmkwUJh4LnSRawcWG4NjDEkbGvd8vJybwn5F5VFUZnc2AmupHyKv4u551BPVwzdANMPnvEkReuB3iErQ59vu",
  "key7": "2QJFmNnCQfNhSaxF9bGbW6jCjaEdYeq46Gf4dCPTY8uz6xeQoKUaVUw8nkJL6XaZGTU7eBJU5tjSfbLshrWAQH3k",
  "key8": "2KSX5L46U9QbSBFTgRgnM1b2mwpDNpRvGcqQ5PFsBVMrWuMdkSk2WaUjvFBKUCotmU5eRE4JqcTubSLTSzBk63N5",
  "key9": "UHafYNHitbaFfh9fipWCZ4grj2mtEGXpNptBzHi6igBDNCsNKJ28yGRZuY7zs9SMS47vfsES2J5JMt1yXd85ska",
  "key10": "2ZmgnLdLg1xcdUXvUYyzkmjTFuUYSmJgSQF5Awhe6MBXZApu4GrX6gz5ct4yoA84ZyeMEmCbcFAtxo55YqykdwT3",
  "key11": "3AGx4rU48DTpYDvY65JTwuzpG9tNixsP1xPe29BYVy9DB8qKhKHB9aL4v9uTTgmXZ8A2mRNkihY8wpDkfhAuqzKt",
  "key12": "2DZ5yBm3nsZe5J1RAkC46FrzzEvTmSsmKNZqUKW1cc3ncaAh6tjZpyVzm9xH7w2CeTcBfKDbax9T8Z7ubnDiuu27",
  "key13": "2kuUEieJ4g5ufV2gpP7ptxEt6xGL1ojVXHmaJ4mfyV3WF7RVgvv4LQWaK6DatCga5ekvwkUhWFx7KiyvMZMnJsBA",
  "key14": "5HfN4gRqycdbWC6pxcwm4yWWG2HEV2THLV6G94JdeF4Kwb2Qs9Fi8kLCn3BMkw5wYEFMWWAkBCnGA1Cm3A1GTQ1F",
  "key15": "4aj1RhJ72h4JUABUEz8qD5XUuLV2aS18BCK6qassXpdR3Q6Q3rPNHwzsJrQCWgRU1eHfDqaTCWJpb5Ps3ww8df1M",
  "key16": "2P8LEVq86oqkac9REXQZrJRP2JcEtkpjifneRxd2WAfdcTw8Q94BSwF8gLwCqpuPybYMiCRLP4xTTvJzSikmwgB8",
  "key17": "1v792wZviYHcP5V2ZjgPzSZWtU2a17UQ5sGqjm1oLH9bkeNNE3HMQFsBFBB2WzfwSHvLaX6787LavkaT1ZjXaxT",
  "key18": "3uCugdyeSdSeVSvY9hDSm3YK93wU6YPKK2XWN9BpRqijNtCctXBFDkQ4LwRUoAcLSvWpWLMgdJ8wkJcM8zH5Ws8B",
  "key19": "cEeLcyDVaUqYbjVmwmgEqCwtDZBpSNSv3EDcuA37C9RGvXNR8guCqRAi4xRJg2jwLyhUqnGG1nGd8ZH1wA5cvW3",
  "key20": "FMz9NWYiiUvvmx44wMCuBbjnUYvpY1Dz3i1EUsjNCQFUHCVUcreAwCjoxNPhJSJ41z1gUbqKBEcuco38q7WZiAk",
  "key21": "poM2WjqEj9k8z7eiPNekgNHZXnUimVswsXxSHJVdBNqNEZZcBCGqxndR9JuRCvhEWtD6TX4psXpVwrQ8U8cyfyw",
  "key22": "3dy7WVpJiuyGM3YhNwUEf7BYM5e7g8bWHRfBotrRnVwaHmTiVD4P8eSrRZUFpLM8BM3nRajzRW3ACmdHeY1fCSjC",
  "key23": "4e4RgP9CRZbSNfPepFPN5wjvSbS3MRm1edpJRLqeP5c1BeB6kH8pvhJShHavMef5bjskv9bRKks5v2ZDurJzVNo4",
  "key24": "dKPG44yWzJJ28nUZdhyP6e1TGYf4a7JC5LJCb1STdCVjCrXR4AsULTZC8ZSUbTmEgd7mEr1mRrC7U9EEcsBjjXS",
  "key25": "ihHosomXcm1nsGnqVayE9nPj5RgSTHkBTQdTr3vY6Pi6JuBRcFHkNN8xjQDJjHd4euvvhhCRddQnBPPTvM3Q1qm",
  "key26": "5H3LHrkw31dhTsV5vsDtvDRoSpZV6Jm6GdmLygaMt6eKh5k7r1x4y98VC4YFyrcUf7tEG74ArCq39dBk8fR69s8n",
  "key27": "uMj9BFUonhnNN55KWWd8TKJrL8daJkEa4vS9tLzF1r59uUuJj4K3mwkYPn5xA3w5URrV4Vuxs2FLvr6W8FDmsWz",
  "key28": "56Uttra5day6FztNAL5oqv5mMb7nXeRFqMhwKcSbBRUFYbfFjY1JKX2AkWvJK3ckuskXe699tkc25Yfc3nsf56NX",
  "key29": "4FB1m2oZA66PdmiCkWbK6wZSK9NXWsSqEVDNgy8JJv6yLst33hQ6MPcvxTvhmf6hTtub7vqE52cfz6YF9UcYRPHu",
  "key30": "48ZLgZdod7TP3kPdyxqDnQeyMs5B1VdJ1Akie9BD1CRv7uKkxYoKDC8KncK2PPkYgTdv9aNmbbe2NSarV9bPiZHK",
  "key31": "3ARZ9fyH6kfX2NmKmLpSf7FLEp72S6jTesjKPeZsmtQAq6veYr6b8KfLki1F9YJRAFi3NiZXjvGEsN2AM3Qz5Gfd",
  "key32": "5NA6zeP8h4YW9WcGcTt9DYdM2w63vEGQqUUZcJuukwPkZdrdvfca43zNa4T9ndsAwhbQ1tSwAojLxBHto31LzgpF",
  "key33": "mA59YFEmEXmZpZBSiEQMHNrpPB3AvnF1NJrCTuNpTaWwMuHmT5bgqRrMzt1SEuZzUsVeW1jSZpWz6UgGarCTxoU",
  "key34": "HEynmaYdQ2BP5XVh95bEk3foxzGDWPVFWrfqvQPw81rUqEMryhJzJ7Youz1m8bjqHMoqwSmdpRmKKCvEAhtBjwM",
  "key35": "2R1WEjm1x2FEmaoqFzHsRoZM5b9wRd1Hcd5RSjgg8ouHkZ7WvvhFeJPbhGjKAFmBHxjsQqdcLyTSj7mHKcDKScXk",
  "key36": "4rBYryhGCz5gDuQCdeH9jWn4KA9w3Di43yZoDZk2nAoK56Bhu62qzzxd6eGRhYtHsA1L6ZQydk732CBwhuE18ieT",
  "key37": "5tkgkcoMuyY14XZk72j2wnbQ8ME3zMAcVLHWczehaoLM1qyfYN3NBtLbQiVnUxWx4wtZVPbe791Ang9ZbosPiSjz",
  "key38": "2USaV9fAb4uxEagfmjUf3Jic8GMH3pnjuDMtNnpcpwo8aZxkczGA8aUKFfCkMjrvGhWWAWqAZDCaJ5KRVxdYvQGf",
  "key39": "3PH2Zm5pvYQBFBqJVyW6Wo3fLyBrzWMoywhk3M6LsTN9YGvqCAxrK72uK6w4ThRj98e5KLaoZwH351aM1eibyAnz",
  "key40": "3pry9tWMFSAG1k3ASSHKwr3G9nxt7z47vgs2VvdokGtgqWcLaYzjwd5d8Bek8LvywvuuB2AznvEdWeKVjLdzGnj3",
  "key41": "2eFowmj5h9wVxNDvizuFWZ2Bm7HKhCULFGfavuKaXPhJSCiUVmDFUDzZDEXgQjEN6ia4tpX2LCbfmdx2czUjPT9r",
  "key42": "2MsL6BJWkaJGins63YF5THD6RhUPrkdA8QYY3qWk9S72exZ5ncJYTugkSwKTNfcbZsCmveGYGB5C4KyBj7GRUuQn",
  "key43": "5MQTNDzhGaxdU7HdzMzcSNh52fuPV1fRSitPRYcy75FNLze9s7hU8SNEDM1zRuqrn93GC4bM4ioyCAvQJLfVpsGS",
  "key44": "2RAhzxvzu6U8pBb6ZeX1eMEKgTCykPoMMxyFSn2JSDkhpasGU8m5xiiVNe1RDjsL5FbvpDphYeMTXjrUpTG7vmTY",
  "key45": "4hwy4p2ZXEwGvcFdPHvUYx3fHXQwSnwWvbYtgb2ig3thWdndyR5GrjdVXyXTLAPYi4WwzYz6RPwQ2KZ89uCLQJ4E",
  "key46": "2XRzgmeRL5koJPGFze84W16eV7wMNA398dK7niRyBaFWn6oZgrXHLDjcsPgYy6Y6AYEXp7s8jbLTXTaAFku6bs5n",
  "key47": "NVb8kHoWAdySkU5Nc2SMYuxh3JzW2vRv2qnGrhYJJzzfiuxBPZ7KiwzgLK8E74GgRadtj3rGyeCrdfYi3U1dhcC",
  "key48": "63HvzFz5yrroesWixGTPzow7TDWvCWZ96TRt18koQA2v98M4exD2unuSd4emjDJVNuafa4XLWG3DCNNUyvHxVHKV",
  "key49": "2ARa64jp2ZUaP65HVUjC1gbDUT1V71Bt5wj6iV3qA2ewRd9fnZa1hrcDSvNRsipuXj1231BbUef6s1wdxaJjuB4Y"
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
