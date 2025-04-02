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
    "4BHTwqdg1P69nPH8bA7RMcY3igGdPYWby664Z2paD8TnLXbfFS1kwbC3ieNBgAh9u1egrKVnTEpfcwXnPuFwivyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Y8nQofmQqTvAcoL3AqcNbZ4cJXQJ2Se4f9uYdWoWS79XPVzf9SdHMoqijJrJEfqUnxzSqMaJCSD7USzrLqQgg7",
  "key1": "9Cps8eaULzcpotGnHKsKpXfCXhvHRbDiY22L8wGLh5pgmpjxn5zie8njaPFh1geN6C3VuGFCtrbytyZ1XG4zrNd",
  "key2": "MpYfBFZ9uFGmWHrgFwjAghAFeG1tMnwLnw3S5zGb3krzzDQ1QZtymLqxdYartEEa8rnpS1qn8Y9qWdc9B4bvcB4",
  "key3": "5GRTU5oxZRo6MHSAvzffeFmRK5NcG5i5JQhh3BRhb9Ncr3U96Cprw8EwTe9s5NGmQ4MiyvJ78WN8bpYUG4DJUKrj",
  "key4": "67mPeKpeq1ynT73URwyGLjYiUTCPq5snYXnxZvTb3vUVpQ6xesjNbkHFBWU3svYVHEEHvbxLLLpaGTrtgCoPUqGj",
  "key5": "3iBowGW2ra1aeBN38nhobDB84vCZ2r4ShayuRxgsvEHZJSSKW5dboPZYG97ntxRRV71RxNn4uS9idpshWA2gzFvh",
  "key6": "5V3S3UGrhwjdnoPpBoPQvem8wiQdS8XCZvrTWcNgbFmPeRUJAQiapPKWDvpYCmCtPE8SHT5vusHAvxzjUhr2f7Mu",
  "key7": "bXEJSr7NV1fz7RRLpt6a1CR9Kkjx7Bw1BX8cbY1D4rj9FNiyumMrCur664EweogE1397yGdMGsKYsimb3px37KY",
  "key8": "jGhtKNSW8e3TEoCDw1nRgfyQcFSmWYCm7wKdzmNdJmfueUVZdnMXdq7Wyha6t1XwicF7xfyo1JPQurnp6FuS8td",
  "key9": "3QwZYr7LP524S1V7HeyYkN7gwzEuQMsMgYEqekRFeybuxKKZ7R9ZniZqsGkwc1Mt25pQf3CuhsLiNohqbrndBtkM",
  "key10": "5j9wZXagdyLQwJTfYw3ZbwZFAUx81J66nzRj2VVfBgmtdojyQ4Px11EoBJuRxkpXKS1iTsdZyee7yVsP118ZKfkQ",
  "key11": "3eDnL7ogEHvqDVPkbQSjzw99auxQ8akVeqCqMQbFQ6L5fmVdn4tdkr2tpmjNWGcAAsjariSuhc7SWY1sZLgWQC2r",
  "key12": "eK8eSsA9xMNJD1Qhzwidc3ct1RQFWfqDWNpYMHZDexFP8GT9rUhszyPRAPY4TWipoUskvLEbmSdVUGojPmwi9pZ",
  "key13": "TWajKfepdLfE8KZYLrjEBd3CqboAp2kydB7t6fX44xfTgYikG7y2ctCMbWa2sT56eH9nqZaeRDz5eTup1pQxqmv",
  "key14": "9pEQhjhucxf8NTXqJhzsReVQeyPPKHZUEWm1gX7NoWpJefTg7xCFEmA4RuJbKzpUiJk97wexQfTfPirsZZXJ8VH",
  "key15": "64pDpwWrT5hSJvDMLZvXqoikMy3jmX3Yki7TmhteSRBMHKzY5NGRFdzZfcS8QruLaTZFhFgmZCSLcVid9Cf4aaTQ",
  "key16": "5P9NWcqU6h4QQDkwxWc68Wy7ecKitcuvvQtQqBLv9FtDUJa4tJaDUZZajHmouPYA1ZWp4XUV2wGRFdyJYnTECoG8",
  "key17": "5BUQvtW8k2UZAZyMrfXaRzF5YjY1VcoiA1h6naaRBH8jTpf6w4wXdqJbpRw8hygnNVTfy11Bb8W7DUAzYpULjXpy",
  "key18": "67MC5VEivDAUwkZBYADUsCdzRnGXagDZnzNCTC2jQDLU6TbnXqqHLsVcoDanKAwp6QwEPc5XbW7AE7t6GQGWognk",
  "key19": "5u428W6Nyj3Kqi2RzH1iopzNj7zGDuweZkXw4Ww7Nf1qRk8UbSPuKYWPvb59Pgs8nncjAZ5TpqfSnrNMwN8jLau1",
  "key20": "4NWVFB4T5vh9w2pMV8uw7TNa5gzFmkNWSRqkunDu5i8YA2hDNRwGXtniSLTEKUW368akTc8BmNt43S7fVpS6MY7",
  "key21": "35dDSAqR7dZUFqks6WznPqgGcmJfnCKPjPjYvgEERe7m3gooth1KBsgzVrXukSdSnerZEA6AvjoraRZYKfC4ydNU",
  "key22": "5UYFyzuuYrpd4ojYuPSaVbsCFHf1HfTKr2g5aMrYc3qqGTBEdEMbUkkntWaZqZTmdvBpRZK3HgrLcRRUtwhVkF6s",
  "key23": "2QUDyhPd91wFciMpeVXGhcCwtUE3L4utNw4jz37P2iYMp3h26c3e25iEME5KUdHErhfmqUkx5guhYdEMonNwPtsH",
  "key24": "5au7bHp4TsSw2N6QTTwKrwGX9Mij9N15xLBVvPHnWF4G7x2ED1npZPU87mzS2w74R1v85PK3pJf6SsKsgKmZXtfQ",
  "key25": "2jWwwBWZLhGg8A59guLwLXgTa3fHgbJ5vsaGXoKMQw87QwXQzRE32NcE8PSJkT18cvm5oXUNPpbYwnEZmey1aC85",
  "key26": "4qLDgkVRN257mxFTNzjWyPvBpwcu4zk3zkbpf5YYC5XRaXNqRFg8mb9uRQPPw3X3VND6uLkucsr2UBP4cCKX4Qou",
  "key27": "2Zgk4HZxg7dHB8grzFHAZHudtWtzbCK2G5YBTbtcbF221bLU6Bp3BB3Rh31zt5XL7QYGpuS4jLVsBFpmXt1ogndB",
  "key28": "fjmrp4uqTQ3dVdYSN7yaaghkUQfaUkTJfyYd3i1zN95or4MJBwRmiqyUDE1DeTuLBgPsrDyo9WvwDmdakQwzHYe",
  "key29": "63kCCZPpPzbu2TXKLZ7k2hesmKhnv63HAPugGnG2bqJD6mRSz4Pt9WQyqYcsGFLxFcXNygaT77TYDNVX9ptuCvEW",
  "key30": "4R7pLKmXvXqy76FeCKKSfxMRtdw94jL6LVA9CG8XtyztXU21C1aaSqqvt8MgPS9dmBN1h8t9ThGjGyC8pPpKMH6g",
  "key31": "3UvzP5VdZeE8yCSYPdEseGsQ7e4aFk34eQT9ND9UarMFKcHVWb6cqs8A1ViE1mmSDX6Kdr95ZQcPGdpndfT4uYSe",
  "key32": "4ARJSdbCYcEoYYhT4eEA1LBngXtKSt6KVUdMvtQF4tisx2BuEkzJN458JYdpAppBQLpR2TRDVYx6AZAyexkCHJX9",
  "key33": "3n4onYLnqfhqcYMrUftvBv79GG5dC1D982NjqW2GYKSevKVDbLPGta9gFayjZrZRCtVbLZZ7kVKMp96M8dKb4WRy",
  "key34": "41yrpiKGikvF2vCSqyForKbY8fm1gm8hijPvGzsMqRjCMJpepoXUunPS1t7dcng4j1ysohtdc3AfJK6Jgv4NmRz2",
  "key35": "3vWDkjJDm5PUDwRYDmUtNU87aJM8G9Ltez4xaPLeDTTXQWaxgyP1vjFrrd3H1xfEfEd7hKFA3Ug7cTGpC4Ahn5UJ",
  "key36": "npM2pPgWRdvJfsTPaPUvAaeCRKBFfVz3EqbmJA8YHhnJL7gcDiDDk9a5E7SN7MzobZ4tC5BMuCtUw9Bu3ZMyVQ3",
  "key37": "3tsKkTZm9fmTWXQj4yuCmpxJESVqjqvjB2T9bqomFvkssDaLEHJ1k9QwtVPkRafPyZuAYcwL4vghAt5f3xqKiuLJ",
  "key38": "67jqoKihZ1q8VucC38YpsdW5e2FH9aeYcNCshSoZF3CNQ6AceyB1tDS7qbUCApjGePXymrYGoGZyCy2qoP1kHvnt",
  "key39": "448MiwigYHRQj8oxRgB33YTbkiJhTpmE3QUfsk7yS1KBHbQG3He25XDSRF5ewfTBib71aYQiqngBiExvviBvX64h",
  "key40": "286dVvqneTGUwMQBvyaMQTbjFCA2wxncGT7oWBuuZkUnqjazP9e3CmCqqBNpGLLoVPn2jjxmkNJ6o3oYcXJA7sgQ",
  "key41": "5bqUtWyJ8SqqgcMxjWiMsR5Jc3YwrKsPJVJZFF2JsW8pT4pYoXUBkHxDV1BLS99kgZPzvjPeheZsyQsb3zA2dL7t",
  "key42": "4op6bhMfnJ29uqs1rQW7F9D7LNDkF2snFzX4uhQZit8coieFyx2ysfXtp7RNvxg4smF9yKbHw7ZCcVr6H4BCv6R2",
  "key43": "3TeP5Pn1DoEBfYh7JxToBuWeiy3rGpJdH3GmztXFeWZAVPqQqJKJMwhEvMMTob1dnnibxmT4vvoWB9BJPNMTYoEM",
  "key44": "652pzTvM8EV4ifr6bc1pMKdYWEU6hw2RM4VZqZynuvn3nLXPZcrMcYpdwizhNMRj1tE6k5rL4jjM7PkLQZ2ducfT",
  "key45": "5RBrDK1dqa4viqLpoE2puKfBxLBjkPUBYZ3pY2R6a7tMx2rZgAgJocLJBcPxxmPeLWkvsRY5jXEsdoQQMht26qXH",
  "key46": "4fY6rGmWhLLnApegunKiTY86scVAow5RqH7RL7opk2uEMNGiP7CLYixJyXiNu3HN51rjW18DvZTVwbkSn4tSPUr"
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
