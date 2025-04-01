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
    "2n97LFToLBhSpxSYtPDD3uWBF2EzjGi7ukQMF2rqpwzmw4oEpZo1hScWcCbrA3P88PTmGy6DFaEQqnrvm2XAyk9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36BD5QMVcDK7MKgG7we7bxrxBBX6Nrq97HShPTpekpFcDZrKY1CyYG2SHuSVZjXeNnScgstbWYun8SBptUrCt7Fv",
  "key1": "3nsswBcNpxPs2i5Ts9pVagcbzmr7GRVLCPCGoaU4QrYmR46BJehHkMCmy2aMQwQnUfGvSZFygpb5Xh5Bzm4RoLGg",
  "key2": "zzNJvFCzYMmnp7UnnGN344QxM82ZZCp6jdgqcAkE6F6MfAZxDiyRT2JTrhSPxvgF2j3pYijqMtfxgVwRaNJMncw",
  "key3": "5WLkLib51cGbV96EJ9XFSrsWSZxSCUbaTfvxaV1VhsKDKp8gaCXhFXDeCf38u1auvpyoZfWMEunJfqKcHtJmft78",
  "key4": "4x7q6KYWnubMALxZnmy4MSVZ5DB4yUcFE3J3Ji1NageyzuLoVAVhsNffMyZtwAZjH8eERGMbnVyye4zvycpAMzT2",
  "key5": "46diLVNy97imymznEuBNPtSictnhohJD5JkFbWAuFSac74dbe62uoHeayFtjtq8pjHC9yGAMzJmJm8AfUawjBtkk",
  "key6": "4tur94TXACspG4YSCx766QkNAuxoMdVaq9BoG9ThZnDAuR3CddkmXwZKujyhb3T6xWAz9jHL5tkHiokfpSjpWHex",
  "key7": "3v8ctaL3eNmy25e3TWdJP7gmjVEPqm4q46PeQtVUouYd9FgboRJJdiaQJGczUahVZdvZCBT3bHZj3Y33gBfhQugD",
  "key8": "4VDKfb4nQfebxmuaW3NJvdEysdRGiyvKnnvYW5DH72UmDzVeZGmLyWNLiTQLUL85m23BMUW3kuapovxhv72RRsuG",
  "key9": "D3yiRwY36AAdMeGZBwzvcXXWLA79zS8GXjgdCCCmTSX2FSQfcthmpz3UaCF952d47S4rTtDxGLLLv38whk35bGA",
  "key10": "2k8mBvYwUJbw43WFjSRK7gCfZRh8cTbbQ4u6cKdKhSDNeWDA2fBZzeQ1TfYBMwo6dQEegysGPyQEwYGstWiATz4t",
  "key11": "4H4KeXBs1Qz5EHUd97YoXoxwBR6o2JxgPq5mJLpsye5yLC8WQXq5P9MbfbYWJY1FTDdbFTeZvz8mohLQB443MgRN",
  "key12": "5en2jsrHSnohv17fV4j6i2haVVgQL5EKZps2WRyNLywAvSo34T7XBhSJeZukX5qdTnnL3JLcxnn9aLqpk3iDaZhP",
  "key13": "4kPEQLb6nEcNa76VqQrTF5BppgXBP6WiePAetGAKL4WAKr7i9h1udnJj2TwJZ97wHqxjmc55xMKxrZdDCsro75RE",
  "key14": "TeoPEZAudX4ztJuU5NRXN24pvgU59ksrFSz4hZ37Bi18gGeVT1W4CGKFgKLSY1SucKPyP16ZHJTqFdcv2Ss4TJM",
  "key15": "4HE7tJEwk4dkNvr151HufzeDwMrdnECQ5Navc1Lhyb9HQS2g4bvoKxjLThTKnFWV2P3ARXyrR2vhbYr9wZqNMoYG",
  "key16": "5P8BRcCPgvSwC8LqiTfDqdvEx1NZ8EqEXcuLYJ3DVHmV1U3AVKZ2D9MbyYG56Tbf3Hr9UWpFQACiDGYpasBBD6Gj",
  "key17": "3UtHehiXbdNcx9e39qdevjfunDsGwpXZRAS3dfWiR7jaZkCnzJos8An54juVPNNfG6FeEAByjwvTNaFXJe5AVCac",
  "key18": "b1HRTCh13MbRavHroz73Qk9McT7xGzc7SNj2zhkQdhBfGjWEKJh5fJ53qpMSuG71p6BwrHWXG6jQRgKrmkP5gDm",
  "key19": "5Kv3KqQAu9GdS6f8i2YsZsTdeRnpixWWeXkKLVzFSZMZieJ61ic39aHHVU7ebjL7wHGi8emssnAVqGfmnDP73HNz",
  "key20": "4mqqYBid1xTLtB7AD3DbZaDo2d7oxM9xnuHVTS1s6bYL8X5aTdPVTf5wNqSiHhA2ZtGzyyo1ZPjGjz621wxShiZ2",
  "key21": "4E2hD1Wh7Fp8QLkeJ14LV3qXfJmiunBwDmJk2uBhoYLgQyuXJCkvMEeLngL5t8qCiCxmVYSKoiA6aENj18JUjTCP",
  "key22": "5Qw2yxX26zHDMfsy2wLz5Ya1Z1B8aUz8VURwaHp5G5w9WCPt1aB6xvPSoShysVXGEWumHCwinh6uia8LfHkraihr",
  "key23": "Q3seSWGZKZuPC4HVNZV4oNWJBeTgxeA3gYitea3BfnAXHJVNYPtWZJBaAoMWkWzXcWHT6qXJN2qAAbVKhwzurif",
  "key24": "47boHGwoLB9GFu46zMmmciu3FkZj8vgm79nrMin6PrhcihtCLs1nA1UZgC87TQuUoeyy5nEh4wurM5mhbLZKFVR7",
  "key25": "4HqsV9ZPXKqVVUiFJpVNQEh2xo8AAFxHDT5TLY7689QkPVfDCFh7Tub1CcVrCdLH7wcFU9aSrtEiwsyknFUE4gCZ",
  "key26": "4jbwZ9hc1CHktHWAEYBoZi2yX9aQprb71Xjdhps6dNEQk3hR1jXqzJ54AutPzNQKKrkfCWnr8KdkaTNg3JzLVzc1",
  "key27": "3nohGVpugioZyeWKAwmE6QZbyzTw2mvoHiEsXu8vTJ6z7CTynHdbFqM7E5tiLhCjUw2RoU7i66c6PqyMu7LdMwKR",
  "key28": "qbPojBNkeHiFzy38ZNayy2pPmgxdSskNad281bkrktdZerbtxXAo6hykMzmTU2ZUcGpH2ZHnP7eYRLiECbrUE3R",
  "key29": "36st6nAbUz9yHgzyFie2rCsiYetk1VHDrTvhCbT8Xm9QzPbojCKCPdbN3AqBG9BVABYSX3LU28Y3Q4e8CoKEWkV4",
  "key30": "63rrtyWFnz7hdSonD5ByzKi5Uaonp3paFCVCiJxfT9qgDkJjCJAAUX9RaBrMBHgnUfMrwoogXMJnBuj1EmTyA71W",
  "key31": "6vvVNzqwpwvTXKa65Egdg1wJEPa6wM7KehFPYhZuwcAbaqgMN7SxG4eAkR7Tydmm3NQGMhbs2LAPkNZt4gQbJ3j",
  "key32": "33M7nh1r5uetkxBgLekDP3LFuyzFeq4dCfgdHs4wdTsagsFaJfnKwTBuzxGfL9LB6jravBc5vXZ5uVHXDJUn6KG6",
  "key33": "54SaWNfQYthbpp7v12QZBTsHXit215vU8j23inatZzg7VdmSqLBQvpcXeuBn86XCZWnfbN1bEEtya26MUMoisM7i",
  "key34": "2RsRWwxnTTMFJ7ChHygi68tZb61rsgysaXgQcjyi8qDeFP68Vrkzc9cjuBdZFoDqnnSinycG58VpGbVuMA2j4sVZ",
  "key35": "3qBKibz7BR8BbJZcwSpZXBbbkSovSs2jSint26sdbsrE5insBBXwbkH3dXfn8kVvSDGdx1FmUKLJZFKaGxNEZCHN",
  "key36": "2p4vgNbNBUNVxFq9HwHMmXuztzjtPoDU64brrEsLAh6gHmHiNzU3gUK7A5sezNMP9CWnTzh8z5smW1uoxrKMrDS1",
  "key37": "3bFxhCg7y8cvEkcydCFeopmuQXzgLe1UFvpXNB45JG51XfJF7PRoywy2cXnKhFoAne63ChxRqtjPtL1r5QfVyGJy",
  "key38": "jift52kSAr9Pk3uuxPmAFSb1k1xnS7jUPaNMro5d7TzA6Ms6QKZW2ffTjUy7rHvS59tuY9MsCwDHS9WyzYxZsPC",
  "key39": "2Fvn3Kqh7UD6qVy3AnusnWDGXwVX1o41SQ1bbZnfP2vRUb3TrhMtLqUTUHVHVTZm45mFNXxJbwKcx2yZYF2LXWHS"
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
