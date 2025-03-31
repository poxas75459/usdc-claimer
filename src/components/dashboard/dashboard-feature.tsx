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
    "yFwyHd9s4vzFCZo3Pg7KLnNPPWtXddYgJWWdFhQ2PvAMsKqr9T1m39pT6MF9y4J61QgJ1TdD6szhv5SSvzBqGXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NzE4JU5ULd5njpSFkHJasfVndcEPF8BCJxX6nFJf5HkkYbPWdJe5s3nJqmXPXYBvfBzM9wgXBhzJH94BGDBXHCJ",
  "key1": "4nAXV2WMRRR1V7ur9oEa3Pm9L7BYGbtoNzfZXLxhsGvqfa4rqZ3G79NC4zyS8C7h71gCFy8GAhKfLaCa7AbBCdb9",
  "key2": "4y9A91P3eBgsvkSsFCbiwyur7WX8CdkLmCBwvDsN3xzChd4zzHJ627QxwYywWwnBFJtrTdUec5wXk1kMYpiNNgoT",
  "key3": "3FNs1bswcaetVsYmtjMmRF7i4v7NXKCpYNxWDNcHA6rfCC5sep4bTSyiU8a2GpvagNCzeSfzRjfb6EmGCqiZHBYi",
  "key4": "4XNAYCALGJP49tUDMRDyGpxmzvniQBSk1LwVR5k5A1TEkxjuXYgV5jYorAMSasXmqiW9tUxqKkBEvUSzCbNwB7MH",
  "key5": "UEizvpxWXtmEkU6rZP8wsrycTEiAwkRF6BRHyZop2gxM4TE75rTRdBZqSfAM7AMF8EhUWpb6HdoSk74TiN2sKWW",
  "key6": "2iF1QJLPVQFVmVVJ1LKTdJaVAJHFg3jZjcZmfzAbVFtCgUGrkUrsk5c1GEckF1xLXBx471761C8bU1Tu8wXozLma",
  "key7": "5JkMhndyTFyue1cx1EgBLm4QAhpMSbpfvsPv2kHW6gwPkVeZHPjt8t8otbUGbMru7G6Gg6aCoDSy1BtZGvfxiYXJ",
  "key8": "hyhvMj3bENDrW7penrN9NAu4kfhS1UbwK24G7pb5mSHMa9261G9kiiTQvTRCpyhmj5EhkhcKKgcnxZggbXPY1dg",
  "key9": "5YTMca5nUKZ9rCqjfwp1schDNDpicxH8UPBhnZFASQmbToKRQnQbUD7KqHnVC4DRSZsZjzFrCE8t8pK7jq54CFTz",
  "key10": "4xfNt3j1b2g9Evmrg2gkGnEScXXjCaD5QNMN8TewdMjBy99cSZZdq8HXdpx245pE5boEH9y6wgMQa1Q7j7qjjTNB",
  "key11": "x9pnVHQH2JjiPtjohYTiMGCcsDZw5smjcTo761uDThcufggpW2pe6NcJqDNHz8FkQqnLk8WPJ8mndMuqsKHiprN",
  "key12": "2Kjw3RpV8BPW7JwxXr9okTTp7EofgkbuiEweNedpqeXrH86LNXQBFVJxPnzKJiJfCGDTBVGzYzbkyNFztWSonEFm",
  "key13": "h5sUZvp19j8y26tSWv88oxW6iL1CQ8SfP5kMhcKHHsWBhZUEG7XxmsXLgAW5UPdVafZtQuxiyQ3o5EEjQJKVeoH",
  "key14": "3sBkrxEV5jV1LfZ29U1z4Fv7vmyDvsxbCgs5EtFbBrN5AJt3uP3m2JuSQEUUPqd7QHWoEMbwTnkJRGsQTH9F3EYg",
  "key15": "2idyyv9r1LWUatmhhcwehKAwaHAQx9qpyuwDD9mdcJrJ4TfALHFxJvbEGtFs2pHHdgNVFRscBomuW96KfY6H8DGu",
  "key16": "5QgixiwXx6vcAhMZX6q4KuGgK4nz7uV2Dou6FHyXLL44pckEeU91jCbT2hcY2dSfVjhbzQodcU4oK5ZeHnZx11oW",
  "key17": "2xFTbYUd3U4mJg1KmnfGhPh49kaaNTBPwZNCQCw29v7FRavskgeGuXB7McsZXnBkjUsmTp5naLf1NUXTCATpmBSe",
  "key18": "31uUxK4HrWrHQhhMLVUY4FaUrMrUa5sofhffk6Gpifgi6mWKJmKCutraFHToqY6goZVAeS6TrGVG94okaYtwuB7W",
  "key19": "EW5tEmNSPSfjPYT5xx2R7nfQwRqNrXW3kaRDYsCD7esN1vPEWNibJoXYz7MEAnKJqpWNCrvijnRasVEprBTwkY4",
  "key20": "3QNYjTSF59YHRAHQDYmgLa9LSKAbVT1kS85MQtXjEy1mikBctTh7szsQHP6nfmVVKxccZ6ZHeJVoCggHJfukW5Zn",
  "key21": "xsUbd6J6wHr8WztBVLjkHhwNUqyWb6z1mdEct63MdSbzLfvdx94syBJQhCyya11ApMfdiWcDn7PtwxsRzkTdFmV",
  "key22": "3WW6LnYqHy69hFJnGuoXsDNPrVi3riCjeQh57CSNi4y9gBu6Nqmvsgu6XuSGmLYrow4g2RmBi15KA7hQLENmFUHR",
  "key23": "2GYASAa4nE2jbXVjzAD2oJyFLx7uyXMFXvpVToVnG8qgZy1HTod8NQ3ai8SkFWx59hgz1DD8BQ6VRyaQdLrd3Wsd",
  "key24": "276SqeRpo3tEaxMYycHez2H6XdDF7PG8X8KJeebd75XpB9eENLvjdCS49s1qER5Bh5SxWaPm6acS2GyVgEaePygf",
  "key25": "HxTbRVU9EgGX5DGjT1Dvxa29ELC1xmSoxfHnzVaVr8ZV4TGMgrBGkR7Mcf5ZspKNwxyTXGo5DRVnBk4fu9oKMXK",
  "key26": "FDk2STq99pX5HBiNExignsoDjeuUVaVSEMPCeMQUE1rRYkTjTHjbkpVJJMi1XvRvVv6E4k224FATviCZrTT8nvs",
  "key27": "2qeGVmPAy16UR9zZfmAGyNfwy8dbAfS3LYMWuMmKfRXjPoyN6SijqdBo5cCNh2nrHzZ3VYiCgYw1t8ap3rHMHShz",
  "key28": "2kAkd5pcVar4Hmee7bNTc8PniA5N7k4g9CgsPz64dYHaLSKbcrAQDSkpjVjiQqeA7zdo6sdNdeZfhLhw8JsMzK5w",
  "key29": "4ooLQSyUmm8ZeGfLzWTchmq8h8WRYgmhx5HYP8zkiNrydFpL9wD4LvZibMJj3eVBa4PWcXCMeUBkZrCsN4ER6bco",
  "key30": "4ZFj1gwH1NAqo4HDZEhCzQzSXnynYofNtBPGypHnuPbo356zLEJhuP755hdXAEmMZXC4qQPjWGb5i1a1iznBefNT",
  "key31": "37C7WKVnKUKBcdoXDAbbiJ5nKTsjueG4LFoxAV3FTtkmtEKG85UD4azkERYcHrmronfK8huKNgHRLVSRMhofe5pq",
  "key32": "3CNppRhvYJV3kYEM43P4WbTD7dS78S72EmfCU8jXsctJsxNMU3XXsPdGABbos36wrrgXQnKPu7EDXt5XSS5Jw7C7",
  "key33": "3LtU3AgLEyuNweWkjmuFpR1fNYXXWMt7Xpe56aog1x6QXGRC7LiFqGjRVDoHkWKcvgggtFW2HhSc56BUPB8MRGCf",
  "key34": "3TXWpZyTYcLV2KFDVc92cvYA3SMoFTSV2BLES63NHCB6Htpctc7ctekGbM7bwqaK3vr3FQhdUJRFTU1uVjbCvUFQ",
  "key35": "3oBMgR96aFK5nbvCU1ov9ijKePubpypy3JcW5MaEmhzXr3ztLNcEvywSWttQLNCC8K9uDtVqBr4USwLzG39WwT5Z",
  "key36": "556vKcBdA1hPQGRU5vpWihzuXUQoSn5KBoior8pd3c8XC4LFnG53xGUv8bgmuqZQZxsAYVnh57vQeTmDbZXr9vBj",
  "key37": "5CpAod5jndagKGLE7i8NfWvKdLMd96nWNqyrurrdFH6svir9gbxuQ5sJq7d7fyuWQYCg8g9zdHpWdV14yWg8Ptvu",
  "key38": "2Dya4WHetAzi86hFaPQ11GDg1rZMRPH4cHtPD3SPQiTMx9zBFAnekSmRNqW1znyrbb8yZnEeh6SgF1Am1YvVJrha",
  "key39": "3U2k9E1YpE9w1PYQhNV75urHv5xSws7FTo8FZJ5bm63ag3t7CgXHXsFk4eEsSYhvRnxuNEbiqKVPoYXBgoTZ3XsW",
  "key40": "23q8zpWZRrTZDdWNq47g5r4C2debRx118FxHG5FcnenZvAPyk1atTzZtwNsSxqCNTdQ4q11mXQ4xvczPxJEPc6d3"
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
