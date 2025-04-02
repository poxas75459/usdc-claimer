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
    "2GnQC5BJqgkb2cxcskoiG8eHFTqGzjFcMmGP2tcvx77bvF1KnemDGNBBetja24KBoPPw2uEauAaRrpPYDJBMyzVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YaH6Tmd3VUzi6HKagjsh8dVjbmBwL5WJw5PPTyQCoTW5hbRZR9BQ74FFKmxchH9Bjvf5hHLXgXi9aT89fMNxfys",
  "key1": "sHjW9fNRZoLmzx2k5dPrRFNUN4gCuz4Wej5pQD7vSbXvhQwr1yEqHdwqowdSXjop5QikykEbuHy8bB95wyuWD9r",
  "key2": "a84ec7wyD8oxShFqMKcP9qpnVkGeq3DY6kis5ooA7CJ9rdiKGvc6qdTCjWYe7TZHNZ4v82B8uyMt2xRBcTzCBFS",
  "key3": "G7AA98Hq7rrf1vhUmbBijFExixRAXWndxWCZYnum6G8DhndGnaUKzMuJs9w8wNnUBxF41VAvBwMg6diTdynypna",
  "key4": "psChqw2893jGi3dMMgDP9R49j6JzhD2TaDcBvTVmJp92jStQKE2dHnD6MK5AhSeLRJbVyWrwKcsYjJJHXWZMChC",
  "key5": "JyKj7dwYAEf7Ghh4hSktuUsSZ2FdkXUSzv8X3349EPiHQSzHNn5xp3TMZ9K59fSnxnedDkD2dMRLcNuxhiYCoWv",
  "key6": "3kAVFCNqqB6LVbgMrCtTzjkmEvcv67bzHiCg9xs9zXqRjccAJCAfT5y784eYgmdpw2qdywTbLwQfX6pBB7DLKZ6",
  "key7": "xibm2zgutBJPm9ANpHsnhSy8RNDjfk59Kt8fuDyhU2G9yc2G4W3jjgQGvfntV5eEZVd9ezGVF6zVtMp5gmirk62",
  "key8": "5BPTWkY48hxurgne4KTN47snYUoJKmLDcJbzJSqUN9byz97ru2xpWg8TqGFisnur64L6Zjx32UtALAQi2yiK3C2H",
  "key9": "4nP8X51yJPYBSgJY7rAbroEqpbnoQFBMTKNNjpW2AC4G7whVoapGvNBbQMaSwQNg5HxvRF543PRFwY9pis7hrjhj",
  "key10": "2pNLQJvA3SFuB3yXubUpMCdEs3EBJC7gLJfdLt3QLMEhytQiQ5tT2x62wxuJaYkFigT39FurCoUhrLDLZvmq9vH9",
  "key11": "rnXSVHsyHjna2n1d2QmGDsuVYUCWV29djtRa4QzzZbBNy1rVnLjYvJbwFC89bEqkRTr4PtofuQnftCqGYXAxjG8",
  "key12": "3eh2AFhrAiPwQf64Hg1HffGZ3eQCZLQYvSHCW6uJ9AY29HCadGUUSHyLSML3n5753cb6MUdJzaAdZDnhyuAdVAvX",
  "key13": "3MXqMTaf1v8CTWWM24PqA4sRmX4NjWxS7TrMZmXxJicVffYWUifat4tFbQmgJa69inbSNK4k21nWAYVUVpqMiihA",
  "key14": "cTLbibQu7CGahcx66HcFLKvHb8x5xRTzsqjxC5hvYRmstMxvHQKjFxWfRoyMTFx8PmNi8Hy9Fz38FgeQxhmC447",
  "key15": "4MSKSQ2r1vcSSrnbPU1CnhyDkrZJSkudGBeAemFp3yWuBAZAqw3MHT1A3SKcSYgKKn9KQ6hNakq8efhr8HHjmRU9",
  "key16": "385e59BzCezVTHqmdEcbdCQedh9YpQtJreep1Nz5gLrXeYAR7GrqEHuj3MwjQCC6JWwuueZqZu7oba1vR28ttmFZ",
  "key17": "xMJVJHqmsJ4SiRavYqQeZZc8yV9naS2wV9qPhuw7DJtFn2bKg8HvAV2MUd7ghSwPkqThDRgstCFqyZ8ezpa2suS",
  "key18": "EZRqgsxAh2aYa687RpDqKQg2JsJd4A9GnDbk92ocNC3w1ZQnwMtUUzJfFZvRxA1ehBNy6ad2qD5z8tuGNCYJdxQ",
  "key19": "5KjHkqJvFN87efHGGfaWpZWQTPwTC7dF3SDyhBSWBTVAPNZbHHm2CK44GhE5gXJWTt2TGcs9rJLSFoR5uoELXyde",
  "key20": "4Zz1YsYUipoX8CsUTyszBxPW25FjQUzwtBqimg5nQb1vzCFyybPBGPZ65RNhu4L1aeWjMXzD6KgkDyLgtpPYTGJL",
  "key21": "5Vk7kf6vkRPwT1148d5LCZXdWq9J5PiPPkve6ontKsmCQw3ZgGtAfVWeHiWuVv8QmeS9mMhbVr2kezyPgtdRrSqD",
  "key22": "2EdhgNL4n2DjWKTMGNVsbia9Yhu1Yv27z6dTza4eyVNmVfNoQ4iMSGZWa9FGKKRfU3WAdMjTRBk5UZC4Dbtu3EoK",
  "key23": "21WszackZXMyDHvL135uXwxKKVncRv466mBkr7LNVoVs4YwbMK5gqkCbc2LHnZ9msWoY1HfvgrMMGZNow2CuY2U8",
  "key24": "5Pk2NFw78VAiLSjhJRWt1J8PBSQSJiU8ZYjaLvwpscGeJXYmXmfygrdspaQzJzUiGLB2hXAKWfLY41NWUBfi67qT",
  "key25": "4dK61KhMfbX1FSjgJCyNioQKfVKjnybxyh3md27uP7yQrCAiyqJhRk54wAV6ZmRKMSaD2zm5AWrDJJCa66fqrebx",
  "key26": "5LpQ9yjUHGEbAnERvL1JyaFzSur8wnEVUz5byL4kdNRamz22mSmuKDLQwkRi8AXnagGM6nKpBNSn4tPHvZF4MLVc",
  "key27": "rk6B9C7T92qwzUxnHnr2LRM2mzizoojNkgMX1QSMWiwFSzMmD8m6wke5qYpiCeKQoHp5U3HmLMMmqfDj9R5nH9A",
  "key28": "4o4N3wgEKwLuQjQcXvmpJByZ9s3VTZkF2M2vcfq1Gjnk7ni8gKe59BdTmSKeBYEHgganHjW8LjmUqQjfYhdW68Uf",
  "key29": "5u5T9qa1JvbrVuQKnT79m1mcpvusyBZmPKi6QyBvoWmNn2MHhxsRHPJjKkNYo48tZuXWAwGfQts9zyahuiHL3mNW",
  "key30": "4m2p4hGVJpU9mjfs9FaTse9vd7PBvEXWaMCL6aSppEZhwWLZ6HbYprqsVgxuLxspaunziRKDv86WpjhBV2uTcSHY",
  "key31": "2yJ2jUxcjLB5mTUadrHqMhsxaKPv5DvysU2b53R5awDAGA1cJREznWVX5W5R4hMd5hEcV6ycqfEpfrB14Lc4fbdr",
  "key32": "2C9ZUs5S1eBbgfruvBsBKuNTJiafpDbHpDTUVYmDczqp4VgwXrDKzqrPLkQ9YYZL1RhFRuyhDhxBFBy8rAeTT4vY",
  "key33": "5sKaxcNxFo59BJjbAFHRjrFdjoAdyirBJLa3VM9UWDRy51oaZyuz3DuJLTooUBf7h6wQC6w3kpAgme3TY6BeURH7",
  "key34": "2RdNNToSYZzRXB7SXfL2qHvowqb4XFbjCehmE6yF9qu1vC56HH2v6tV7xyJHTSANjZL3q7aeWoDpqUWA7R3HS6i6",
  "key35": "32v1Bc9PfqUJ314uu426aJUod9bMGg4mcERngt2st4CfpXzTmeEmWNYhoCq4aUGjxHtZcet5w9PbCfsMPVEMZUNZ",
  "key36": "3wCCKgoorYh5UoVX3HoLtC47LExKHvQKUsuybtui17RZjPPvD12xFXY2ZGJoTZydD4Q3gwsHDcZaYmUGqyK7PAgf",
  "key37": "TQHaFcGFR9ngfab1ug5iFJDJ8XsFJKo28ACDVSgHYowUMDSSkvgR64TsCFgaask9kdpipn56aizHY5RLtBhXNc4",
  "key38": "Hg6JehomayGZwUBDTPq9QQwMChHnhFbR6xzz6CKrdKMHrBuRgxDLXNwCeZ49HdFqsvt426JWNrYzD4qRyXJf7p5",
  "key39": "5qR4JzxXozq5gwMFETzDhn55SMezH1jh7BUQgXmskkQwfDre7gY1jyHVDBgsCz4gkRZSJTo5sVmwqjBhYzQriLct",
  "key40": "QEeZrbwzZKi3VXzdxGu8ueKEdbs5p5D4m1cuuYue4QhmKEU9z6Uhy6uf5AngDBiXCei41g2LsesTJCHJuEBQ5eV",
  "key41": "GPvcuZ7EjMVE5tDExrrVSxJasq8Ps9VkmMJ7MivHisMCQ69bgqCtLd987auqhr7QK2uBuUAnengVwfDcUMXyMmp",
  "key42": "3uzSRdRTjrc2DK4cutK6YjRDEpScSMHmDSr2Z8nVY2JBCGfuY6fwRSj9otyF3JZVozjRJ9JSemwLitkwJ24PtExN",
  "key43": "3ZNLbXBdJGoLm1QgBrBBHAqMTtYz8sYZsSbbPkCbhkMUbny3syNnVAkXa76D4FnuCoM5rNkBXYQtAk6e4avbhkbR",
  "key44": "2ew9H8hyDwdkJD3FusiL36LBN2nunXy38XxbfRHnoG2rxfHvnK7PvANZBpLSB88ck9Ei5Du8r1SZ26LQzuAi3dMu",
  "key45": "fZAXYE9MuNUAsgPjZdFAjtC3t6Qr3o98MwvXWWGhT28BiSTAa9grv38DY1CPcAwoCVBT1uLuvMhPR6qanK68gmH",
  "key46": "3QVv3LyHfJVqBpbgV6a9LRvxUEbwgAGHpdDbrbTfKPz8fo95YeTzQPSRTdWSi7bhfq5jjLWV3nyq49wbXV9d9KCx",
  "key47": "5cT7wiyt9Neq8HMsZ1iScVxuaZbVgdxvkqnRB6KmFNwF6T5oPGvzjtJgvuPvWhSV2GHGRmr7s2kNPmUY8yXEztLB",
  "key48": "3QHxDUzJos2Ru1iDDaSQkfS7UCG8XnVyjy1KAqzHsWVycmsQyBqdxjKZDpprDHqLLXHtDhWLxqh5MAYSSabVvsrp"
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
