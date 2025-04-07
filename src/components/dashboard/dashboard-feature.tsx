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
    "4uWNY58qJCkPHn6hZeQpGFMAeL2JsfWbpuWRUzeVYFUY6JhPW8RjhdqvAV2QSouBukPq2mHChCg6F2rzKnv5q42c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3DJLGrGQik8mr3MiXqQaUc5cxP2XE38awLiY1BSUGmrnRoVZMGh7FCPQKjBkoxuFZazMhdtmmPxC5diwpKz9oJ",
  "key1": "4Qb33iQuCcWvZJ8z4T6v5Thuxr7E5MhHWLEPTRosTkmQAzeBThL8dtUG39zgNHZJpH2ommm71jFkwaBJvkWrCQkD",
  "key2": "3bkXfdVURo5mfkpkkD4adVxbgNsX8NpgewERhUYo3bmYDwS6Vfp7NxSqCqsmcK5mSKXFg8BufJkU8TSoxWeKC4Qd",
  "key3": "42FChuM2mQMFLKNxLy4h1p8eEahkyQn3nEmumy4DJy2Y66seK699kctxGyxUHUnqsmtGsCjuo4WeCNXHrKkVamEN",
  "key4": "ibrEALhgRHbCyo6dUi6pQsDHjCoh76Y1XNh1GRH5FFXVspHGphatfX7XUkARHXMAzMLATEhooLh1A38rC2WnH7q",
  "key5": "VG8x1VSTpdiF3sUXYZcDuXwrvh3aFAUMS4KWQhdQr4kRdJrvLRBFGpoPrReWPaWkhNqiWX4c91RU35rVDMJJaMy",
  "key6": "5u1Pd39nYYJuE7GjRRX4TMu4b1tunF63vwQRBuXwz7RCNvESQ38QnxUEoWTUq6VTT5Q3iC3G51iXbKyT2GKSxAHi",
  "key7": "5kaurA8Dx4YrGuEJGdjRbfseef67uF56oUpTmaAbPGazxZGjZ2533gbJfyyDu1u2YjGVNAZtBykh2DZQ7zypt4AU",
  "key8": "2x1aHZ3wCaUj2b8kkQdUt6WST43cJukhBPA2f6W7GJbTMmqCkjgKUeUzLogkPHiGrfM89Su3zUoANLRHSXnGg92k",
  "key9": "35u7MwRo9JMNxeuwaQcDfs6S2rby16VrGjqdDewBobFF2fzBhr7YJ7EZFcykso2SQkeeZAiBDw6vKuo1yEsBZaxp",
  "key10": "RwAy2mecqiH1ezLQ1RBW6ZuWQiFHj8BcAX1qA3z6PbbMWXmZhrfczfLURHWijMxdfoKvoteuB3GoLUrWWwXFauB",
  "key11": "344vZJ6MC1vcCmbqUsHKmMxA13quA88G9GU7J5y4EQfE68qjHT4zfZwr8HQByS6wxdurXCzSXcBjgmWBuUCsUHuD",
  "key12": "5VscJKtp5CcS8SXJV6kFWe8GQxutNnijp7Gy8TG3FRdaVmkAGSMPC1E5u5dcx5YYtKdSBCgKbkwBCVzG2nFuX299",
  "key13": "ZEcUaTFpH2hUzMgejxAiTXqQUqyjZDsbAMZtnV7q8dqTpcPsCUWgQKAKxi8CkXqYw1TycEoSqnawE7Z1B9cfwSs",
  "key14": "4wVwdmDS6pMrH9KLzHAYc7rt6EN9dUtZ5SQbkXcWao5FgfQLnnmFJ2M2kX9FoXj2F5LAJxMi1pY97yweiv1gxQiw",
  "key15": "37M76uAiaR61U7YvpSm8KczCaWV8rThs8Yc5rYszFmotCcsxy2Um5dSfmeu9SwkBrCGJXJP6DvMy9YDnY17rgmrZ",
  "key16": "2fDQLo26gBso1812z5CM1Woq4nUmK6bMFgeVLQvqoQNNrNiYDSzMGLmdN3Ph4ZdhFn2J1qne39AmgjmM7ehgpitD",
  "key17": "4hgkkRvuA59uaBWvQfb8mejwhUBHh87S5GwcFLNdCBvZTRYqpgd3Z4wZgffjshpFek1iUFmpqXoFphCWWzc9p6uV",
  "key18": "3tumDXPEK5txxLhA8FmpwHvZh39eQQDcLwDVhwZGrrD5D3te3inzXgQRF8MJX9aAmkpsP6a3Apx6gVm8KJ45EPGR",
  "key19": "4QB3vrrgkvzk6wbNa44JX4JDFhTymmNRmQEVmm4AackUCURsGGqoyLQxZejYRbCqtz2efz2J34NmiNGzZm3u9wFP",
  "key20": "27bR3DoJSpDx4sZYawqmqCW2h1qRbaAU1TJPcnFfgcAaj63pdHdCPjVJDobLNX8dEoSXsW2qsSiF3RazZPa1ppXx",
  "key21": "4Ja2i4Lj7uyEXPE9xwm3heC6xkE72uzCJrGEVczMxSFZs1aSdwg37yZiG2Z2egLDCuofTSRG6uhnenYHnrski4vV",
  "key22": "62ofpZaacn87MXcYZdj1Bq8CVYZ2okjEcgAX4wuq7mz5a3MBko7BYwKY9uG5JctF2QuRG1B4UGtpVVPK5Hp2TARQ",
  "key23": "3gZtSLernEFojys9XEY5PEsjZUE3E3VJgECp13PMhuhDG4NYijBc9eVHB7WvSwF1smjm5D6r8Aum4uttE4C6b3DA",
  "key24": "4JjjXeTbdFwYAARBoTczra53ZVAyXmEsTHJQLnYah7Q4wedaVMehZovhqcLw2428MNBFTGuXcumyfM19essUEXUU",
  "key25": "4kk7a2mcqMsWNTEVZLH5zZ9STDLG1d7fgsGMuSVKxLAeaGqHUE7pb9H7shXUdZbEj4GKDgk5skasG9f5Z4miqmAC",
  "key26": "6rDrM9SRLgaMhFABicPN8c6AUikoRBRkZBuXqTgp3f6hxUy7jfPZHYkbcV7De98Ffw3PY5X8Su5j5bqFJD5rmvu",
  "key27": "qYJB7gixty4ycu7N4qPTUDSWdNaku6THZs1K6HE22X1p7v8MHoTmRhryNTXX4yBqNAhH7Lm59jFDYvDygxZPM2n",
  "key28": "RHwu2e9bY4YES343jv2naW2n34wDF4GgpwjGudSSTF3WcLA4hHcNd3hBqMT9Eh6McFy4c9WP41UDs8UeNrDaDRX",
  "key29": "5ChncYw8hgXnB6fLvHF82cjiweAh7DfWCZqPxgA6tUNv6yBdLNvXjYpG6yEGHXJaLnyHspxLXFoWhQ3vtYMNWcpB",
  "key30": "42pSrA4LYcdDBhJvxZm8Yteqhqb1zNe897RR93tXZKAcQukKaKsisWXYWphbRQ2Tebg8pVXiErCvfN2mGPK7xhTC",
  "key31": "3bivQkQAZMzSF5jXsNShRimh19fFcQG1WcEpzrvh5A3sHz9YjZp2LT6v2XGh4WK2R5cg3oLf1JZtdNxLJGWy3Pnd",
  "key32": "2dVg864QqGXvVJtmXcZymouiaNTaZ4E2ABYYTDxXtMQsHhYsJojujdU4KGcdfpHURnnwqQWeDJEXvNNH9fERAqcn",
  "key33": "ee27qzfgDcwe1CWkTMfV7K9BC6LRisRSQSqYMXtRXex32Dk4ubd1zvvbzS5VP6vZ53S1yBYf4zv6ktHdxMbymcc",
  "key34": "4xfSwvi1Fsgw1z8bd1God7W47FmFRKQxgCgN8G8qBs7gfGjG7ijNnuv7rqhsbWxPfG1Ad2t8kiKUPWSJU76qCxb5",
  "key35": "CxQDaB8Nqf5aTP65ZPUB4ySPA3jQ4LiBLzyXHs5BcsbscLkADyrY27Qj4UJUSkS89zmoeBJ2PoK5TaGoJUXSCk9",
  "key36": "2PZbf9QBVrEFBhQXBJVM8bkbpzvH7HbfA5SxnytyNzYoKe4ij1bb8cmzwhumHGkcrufDG7cnnQEkFBTLiHECzTZF",
  "key37": "3bu42dqS728da7xWXMQDouVnTo7EtkwUVVfYZB1MMZzf9EEzgeXvf1hBmrEaU6ZuZQNUA9JxGdMNHysPEdt8kpF2",
  "key38": "VcBmoMECrHwqtoQGD86reVjAzMPTe1wpQGyKyR4uXrbJ8FEJBH2AyyC1hHbkDsTX4DVNocTAmYYxtwWCWpmsCAn",
  "key39": "522XtpYNZBGBYUGxf2CNhnJWFyJMEQ1CVDTU3cbgmYcW5HZUpfeGGmYuucULYKaZAYZKw9QVwjQSiJHxm9vennSQ",
  "key40": "3Wc3Lm4ym78wa1a6D5kfUsECycKxjJWHsDmTWkR5Th56xdubjgwuapKgNt9MN3nxoSF21MSxuSojsJTCnDHqfmPA",
  "key41": "3dRWkWbvHm4fvFPgUZnha77t41jEupuw8Hn1Qt6G9jZzwQo5JPYb2XFsr9jpWaYL8oUscXNmwnMzmYSSrt5FyWiv",
  "key42": "5t9wURJGWK7nd55hWsBbFxEvFszwevooaBwVZvKvpTDUTjNXgTTZPy8Z8XwSiefQVwJwiPRMouH8EV9m8bogPGdm",
  "key43": "2YPRQr6aNNCmVb7frJvtAfz2JWCAbW71yZT7xzXDcLVUm89BhXo9rDTaJ21GGsBSGDNtWigdvAuXd9iTquaLrUv2"
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
