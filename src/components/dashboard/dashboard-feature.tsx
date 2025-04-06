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
    "48k2inQjnQoZxcTa9LheiurDLZLN9BeNWAg2iaqWK7f9aJZumoetT1x2NjXn2xazy6j95gWot6MwqXVAhUkpqjHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UiwB9TroGUgRia9F65Xw7sakWHaxM8fuyi6XbnqFyqEeenhPn6sx1bTz4zsH6c39hG2fAiVbadLPiaFG8T2vRwJ",
  "key1": "52xJ57h8HhWLngM5HPDHgtYuhWkjyku2Z8CfKL7s7PdsYJNRV5mXMDB1RgkaKX65Tn6WBfpGiC3PqQKPvkXdfon8",
  "key2": "4Wh5X25zzfBQ7f9nHECgHeC2Gd2BvUMtebs2G62f1UPHzzDEroHCibLg9e2BsZiAjCAcEcqXBoxTnvPRCHuFZ79i",
  "key3": "2DBCfBK6ts6BvCa8KVPQ1qd7e2AathshqEqyDdy7nBaEBx4bDfYFCHEcAbJFVCibRL6i7eCEdnvAuBCymtk2UN1c",
  "key4": "X9Rdtwyer4tHUZggwRxmzc34YXUkAjFjPj9kEcpr6SiqFg3jPucYFF3chw6oVVcVhNMPZm4k21Kr8TGbijepyX4",
  "key5": "txDHpwRF3655WFRVjodMss12xNe1JbzaPC1xiFPBQCWa21mmynQTH8GPt47vTsFjyLzcKkuVF32LdaDwaNnEL7F",
  "key6": "4BTxpZ7ctDtLCaHqn7iWS9CKCGZhXd98tEUGpmcKykMG7isnvDz1KZKjCiiGSTHEQ4Yx6bdoy1DeNaRaiVKtnri6",
  "key7": "2JZaREaRykHC7M7K3YHbnEMxfU23Gymbf6tXEZodsT2B6Fp9gxJN1iP13hgYx3b613HroKWuWzsdRycGJWW6CGsw",
  "key8": "5rdua1b5m3QtbaxB1mPvgJ1LKoXpKk4J1K3phunQbduZWwQpE8xUhvV8wuWeCqnjWea2c6SsnmRLjnuaMrFh7asG",
  "key9": "5KDVnrnhissbCBA26oyxGdkRbs6R1Up7rmuLuuS6f3yAyJ177yGewbhTVnJkRs6QYF3unhqTvWGJ86midLeX69it",
  "key10": "41ECajBvGhZidFxKBeNcHrDgTMVjAvfG9UTJRDT1APHHr3fVCcRAVTMXvF47f6ho4YpNvzkSx18X4Gabf81bNgj",
  "key11": "4HKSwmPr6xBMK7ZqK9cYSMJvb98wjkcKqAhHXzVychzXoK7e8TcGcLsz6g4c1ENv61nNE5tRBeiC5L8QDoU71SFJ",
  "key12": "2Nr7nM1CFwHvF1taGWTpAPqcKbddbTtFyiGEijJELb8wrhw6scBzJGRgpi2cR96V25d418gyH9iskagCFqjj4msh",
  "key13": "3ZjY1tLFVxLYR9Pe1mpN4w2hYmSpsAjh3wT5YjiY4qwKxw8Q8AyJgTRDfYi8Y3QNQLU4Aq24J8DXrXhekUdJBTmt",
  "key14": "2AZVYFj6v2mEi7PgFBVVWwRNDYKkfcvQ9yZZ1Q9ShU3dmhws7GjF43d1wTHMfEapEdJV2c3VMiJguq6gnDTP9Rq4",
  "key15": "5ETmSPAaZdnCcRUCbkG7ssg9qdeTJAcZnYhNvgnFz4xfmNnPbZEYb25o5goVKSMz8hNBKb1g7hv7KrpUrfN8AVXR",
  "key16": "5gdfv7XsZG5CG7bHTpdNoZf2k1aevond642WsFpfjkZE8KX2mtfX5fsmBD2F9UwUddA8ZFZwZwDNRQKXCg3fe9ow",
  "key17": "JwsCuSd9YkocSdjTxwtT4NggC9p6zfb6f4S8sd3v4m2TBeHozrKbihr2G6tNYJMxjX2mNQAiHkM55pw21M3UNub",
  "key18": "3G9X8hy3F5KKH93jzNoTqMDaVsmqKmBzdVn6BWdLqV26g6FNH1WbDoYsGHWciCs1rHS33pMd5RRuXnvSrSiKnznt",
  "key19": "5pXpEABXY39K1k4i6kVQRYe4YMP63gdPnztZuLkuZRukXBkyook2qtbR7xAtQLryiE2dJLvyfWDcPddsuezndUaS",
  "key20": "5d746e4ig5xqRQZbJ6wXpGrWvfmo9qPpZ5a2D2FboW2Xnn2C2z3m1oFR7BsJh7BvhtNTWeBw9vH8wX6L1KZatcVH",
  "key21": "UYSJmDuCD8e2PDjJeBL6BDkxSqJyM2p3cCSb5mBwqVa3Z9KNoqpyDj4eQ9BZSi2DBzEMbK9Yg1qnEnHXTXunpe6",
  "key22": "3ekRa4AUWehar77x2y7ajbobXLCz3bQ21nFvArZ8QbBN3sH652PFBBqEstiYmFwxd3TwkRcFeETkK1C4LmuJ6CB",
  "key23": "4pJB5k9mrf7ayjPK4jF5HiwS6ad3cBQuhfhRwBXXVf3pmgWo2ZG14gKWgr8pSGGZ59n9woB9e3asVCY7ejqxMtC7",
  "key24": "5xwi9wKiUgt4gojuw7ZChGpnxbAPb3NXfszE9srvBQA4XXjAxiDraUA1bwz5QhhY16P92pySrQVJMxdwwL8VXQzr",
  "key25": "bAQ11W1jNZa21YwCxECFGEgi7gYMqfeRF4eKY3UrCp1Gp6eAmrfdcdke4qhCiFzWa6SJxsKZu48wtxtajfJUhi8",
  "key26": "41TVZHxP8jVoKUmFitQ2YWqzF5aQmiHrUbKJrQcBy5FGiix4WpEhdEdbkYGNQuDKtWdJBJHJGFUr1SNogTGjsd8W",
  "key27": "639WyJhBqMBcfoMZA8ubaBc4bgLKUN9Xw3z8iypZcSAq6fmUnphoUX8kNZj429dBj3rZoFEvMFcUUbeCF4eUNdS5",
  "key28": "2nLH8AYc7ktp2KpGtEjtWAn4DNMYX6szvpCwSWwFBAjVMYHDxD3GzaCSb4hHKYyV9jwynFHUHwxZawH2KyoLmQuQ",
  "key29": "2M2i1zmNxk5tKuSWH1qdYBqaxrFpLVTdxFSAk5uKf6WXcogTKcDcSJZj4KapPULfz2RDQZxBHicuPvqbL426qeh1",
  "key30": "4cc5Br2BxK74sdNBP42NaAX5FHDcRAb9YDPH6zCHokpKXo6wu7vkiG2CxZc4kmGqnVL9sG9TchBppF3E8AYWYAvs",
  "key31": "BY4ZNEafZtW5s4iVxAxNyWgt38d9t2XY6dGf9eKHxTQDfke4osv95F1E2CyUQc1LopNf9KdZTvMsE5e3jCKrqUj",
  "key32": "bDeTaCubUwoveA21Lu83Sf2vrdp6xoWdtfVQaLU8A8jA4sTTXC1cFbuyXoB1LquEbVzq3wRz7SUud6gTrs6zd8P",
  "key33": "38BUTUEGQfjeCP747c6WnK8rcnJHiL3DPdEVJsq3YHUUZtWQGrdjvesbkHiBz6XujAqoTXMnRrD4WbRBHFfUC1vi",
  "key34": "nM1iz2xYQqJYnHTSLN6uHVgB9HrTTnR11HSag1SPXT7Zc4QVUSsGAW6yj2cFugBpzvorwZkTHgCDxgwN814gp2Y",
  "key35": "4TEApSTZfhLezo4WUFqeYoqhSRqCVpBR1qWfK8YJ7GaAaE99g5yZtZ8sTNkvXhrYmrRAbmUw21Mp3YB8sy7JuSvc",
  "key36": "4vfUYqEL3uRdAT4ggEokhBXjcZgKFL9qTy825Au7Zh4B8FTepwkLjMYCfe1fDumEcibu2yH4WJR7egyBLWNpZxBM",
  "key37": "xJxd4ByVmcXzJfMAQMrfJNhZHDwfnN3VS6yeCZJ96NSG2kCFbE4UsTVBhd6qdWs1pe6F8pxYcWXxJaPseteVkMD",
  "key38": "Ti8y3SjSfzcm6wuweVfxuVpgWCn9YqHu2pq6LUaLNsb9eT2t6cESu91euJz5RW6cK786Hth25kGYi8c5L8LGwyS",
  "key39": "5Q2Y3v6wYxAxyKaTAxEyFWLjntqZkenB64fWT8kdrcd6DsVtv5U3KunLTxLgp7tWSS3F7DEqXV3GgdKh7jyyCkH3"
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
