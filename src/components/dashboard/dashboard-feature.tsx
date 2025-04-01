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
    "3knrSzvgAKymMEyYmt4TMCTmib97cnECNoqXWrnHhFrs5CYyZsRDr8BShpRdypkD7VYeSymhrjBey9EeUv8sbjfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHJrkFGM84LdjknMzdjZxHGfhsSjKuQJjxMo2BAxo5Sokh2ji1fBiYCBnMakcM3rdxk73P6o3wBTpzugoty3o8Q",
  "key1": "55y3S2a8r5crMrH9kjVibN33rm4fFSNmQt54HShbASn9XicMwjyepM4iZoshgH4UsYMe1MPNoC3WLfnr9yrvqPeb",
  "key2": "2ytysfdwfr7CZx4jeysUN8zyDtu21uT5rjiDxnvkuVyToGKVXKmSasz74adaJbWUSn56BYPLm3Wr1W18FKgm5vje",
  "key3": "DZuPP8WBnqVoS4hz8DKxLAP2Xmwjk4QpevXEStwShRb5Y8jecDLV4LbgxRGR9F5zzcJ6PdpW4cbfgiBnjeUmD8F",
  "key4": "5TzEjb3F8NszLCkEoah1kUxCuPehwHLkdxuyRHxfnpSqhMToTuFFMwQUdukDg64mKQnUeLddpgkBD9rk1EosYm5B",
  "key5": "3bTRAaQfNcpWw1m2gLYzeTf5cAKSAWjmB1tX5afY4fxiv9zXsbJ1tiVJDiQYWmBojcEPCQgnJPSQJtydgcXh1svW",
  "key6": "mFNQvarJPAUQugHShH5K5HLGoedhV3eSqDbRYqvPXxnnGoQFwFZfQCT686pGUBDtW7Xh3LpntGJhEN218iFFsz5",
  "key7": "2DGfABXq6gQQv18qKAMHmVp4TJgiR4k1Pp3nbmNv6X229HP3Y2bLB4ZxF6bVxgqqQW6bbwezqwaryDbebkB4ggCV",
  "key8": "43ufUfkqs9misJT14dauJrMETXXahZjLkeTRW3dCYR99FvR3mXr9w2NDZe78GxG2SkNCAUDoPNoHJU4wGhGrK1Qr",
  "key9": "2gAxNtivCb39fnwMJiRFFnpCNCnKR6ZB7posoHF5c3h5fqBefsA51XF5QtET2tM9frZSkDKtasEznvt9BvpJ9Z9",
  "key10": "5ypgBthqr9ySBqYdpRRKRK6uX5wQ6foCvTrLFtZ7TLXw8j2hr4YNWJFHyU1WM6RZUnpHK8sengGq6NzDUmYPDKcU",
  "key11": "5orgS1Ejq6i6bx1UWttJtcGLvQyDEQWUYv5zKBhVU7t29EqMoBU29DnZ9wiaBb9XrS8vUeLTRhjkfDzkDvvcifNM",
  "key12": "2Cf8BsDt4t4ZvbT2CzGEVWFhM6Xh68HctFvrGuicDHywQQkEFzRtjX82AFwXEmi3VCb98rJxfysm3wxBwtvUrtzB",
  "key13": "4KMnh73YpdWpsiqeZubZxT6aMkytG7MPY392GueJ3PTFK4NwWTLwJ8tYevdCqun6nPGFUBqvyc4CA5rF9FUirG9J",
  "key14": "3qD1d2FYPV5YDCWrYwAcKMexAzgmmZPKggWpBPVJxDhQLruwd54FTqGXQnzwBejJw6w7Lja5kEK3K25Qv1G7E98y",
  "key15": "5rFL3HyRV6RdsH3ba6j3knUXH6zs8HA73ubZR2VbDmM3uoF1HrQwCJALEF1jasGRAyCvJHQd5k2UL346A6vPWuXu",
  "key16": "Tri8bp3UNRYcfTdjyHLz19t1Fe4YA6i5UrPmkhMtNYnJ6beRS2LHTPzUyie6virpLmm9KDTxdFvjQVb1zF8McK9",
  "key17": "5EsCAon1hu5NYHb2FBrXmtmkURBeLZ6MGhM7GoRCz63yd9nZjXhj77dSDrsuHLaaECZKG2JVmqn4bksRjL86J18d",
  "key18": "5hiTczixCXt5J9QvhnfNy9v2FgfxKQMVeXXoFwJddftAPE2eLzizL8yP8mJAzUsFCNCcxM64tEVuwWMXJmWCiKg8",
  "key19": "548K5uQPW4vjQDvs4zhgGZKPoULb812HqgSztpx1uv88LRdJ85mwi4BA6zYBsZPTB2xuAKBf23PQVdx6VjfdLT6H",
  "key20": "3ZyqwbYf37sJzo2H68oYwjB4BkdaEK755qJbCjLsCqT4pekExKBkvLYhHYva6F8SzkiQ4kv2cTQBVJaK2Md4748w",
  "key21": "2ySjX8JkrRWUR2FLzk18ugANTh9hChPsGmG74PzASTdNq8cTSeJB2JoQvZpVqXecb75h9zLA9Ft8mvRs7pHP3d8u",
  "key22": "4uAV5cUZ6PhL2DwqvQtUuSZb2oTvokfJJ7UfLRSRG1a13Yae1gCnZbeLi9YzK8r6n2X8QMCRtdDJ33gJQjNCdADA",
  "key23": "2t19tXdRo29rs8dTFgaabwxFhUQSMA7buKVJoSuZ83t1mXHNawqHoX7hzABUTAD19L6N9LSBcaujPujdnsUCtfrv",
  "key24": "38yBsREJqsdnFFHw9ts55LFULxSpqkoA8ay9bmnc3FKoxJc516pbQQSxff4dp3VcRZxYAWE9g8WC4mU4RYw6YUqQ",
  "key25": "42ts4tLFYV1hwUyXmXiQjbPYcFGBnLT5xXTwJmpK9CJoFqQU7GTiyqfjvsz6pqQ2mrLDLUhEVqU96GBEbtf13ti3",
  "key26": "54iQRVn79FAcgbhhhjhZQGKcJuFaTJLPBPbg2kRQx1mmwjvPBZjA3xwYthronUAMNY7iN6Z8kN9FcxHzraQiRCbj",
  "key27": "3NP74e6fR9QNrngGyb9wM6YqXNHJrWJofnHBY5KvuAzA7xB36pKTREgPtprtstqtLWJEmyE35kM1xkMLu47dTjT4",
  "key28": "4PKjXq71wCwMwcdjvRtMFUajowvS5ZtqveLL9i9EKpMEbt35nKpDoQSwLqWCwLUQLkRNGFjnCvG3WXXr2sCtHPpX",
  "key29": "4i4q2RQhYgRZWcbDWBACBFpCVqfyDWMY34uFgUbyKrE1hEoeeosPkMGsK4QXDobMqKL7Z9RQceieG3M9cUa72BGG",
  "key30": "5dMaV8yT9CZ3bDNtVpdVgYfN14UxC2ivdMfo8WECj6f33AqTEpN6LRpGVxpcNoogbUkhA7x5hwqB4BeLwV3kiBVs",
  "key31": "fuwHaBJ6nNqAtjFzB7sfmnHFUdGuLeZH4qhig5fGjSvw1dGkiR97be2dTrbtJWGnXZJgyd5ku1sW8ihECrJnzMY",
  "key32": "5DqsaMxurbwgtvhnKSQzZZAWdFwp4srW517Lf4f181HoV2k8MSSxHmbDETdr1NWdgTdsufsW8kpHcbzQ9y3tT5Wk",
  "key33": "3a64c4omaEh7TgRX3u1i59AKzjU5xBsHe7q4sX1oTiWLdmaBi4zCuxJYmpN4xNj4VEEhAcQshmUecu36MQM39awH",
  "key34": "tdmdJzf5HiYFq2PZEYwsAXP5gQdifx2aYz8yJTCbZFJmkXb1gBp7xXYF2xX4Qe4pcUCuLz16Wp357g7yo3rvdcX",
  "key35": "5BLhAhDt2c44Vv2jpbd3NsTEvnGefBhAtonj1q8ssqyJ4xeaCjGp77yUJJ2Juw1tk1CWrou1X45haS6okFD3i9D9",
  "key36": "3PC6SVWktURLPsfamYTER24p3SR311gjuFL3TnwoJrJimmAeu5zCtCXNYYUfgttzbjLqpsfFP2ZQf6Eho2aqBYkK",
  "key37": "453kiy2ABs9QkeHcf4oX1XoA6D3Z19RwSVZo3RR35ps87XQyT3X6jJEyupAMteZDC4q4c1sQeZnkRrqqQKpFQLLh",
  "key38": "4Ukhcvph8fEoH5yqimCSNdY2GcGGN1G39afEck1BgBLvWDoSaLiGUGanYxDVPPYKvDJM4Y3FF5ahgP1YXUSkHYY4",
  "key39": "5tiYmk9hufEeX3SaXKpUXsGg3C2qEFnxKRTDtA8JBxD2edp58n4sX9td6USvWCtpvsbV6YfGJkPHYneZ8tXMb1fr",
  "key40": "4EkEawCw777sdh6GVcmLEgZsqaSuasDRsRnUthP9T9zH7mFwid8KiF29qT9xEgJLFH32eaHgAenxEGk1Q9odABbp",
  "key41": "xgrY9XiUe9Qo6cfr9JV2R445ZmoZeMiZFkDwbsyKZagd2q71AGfJqzoSC2SS6jw9eQW3DejhBRARBSKabDSzwCj",
  "key42": "34552FN9fNFHhbVikUL2CT5tAGF1h3bpMYygmfFRagMQ6b1zDGaUKcT5CzmLavuNfNnMZB1mcXZsRvxsMk6NfQot",
  "key43": "2hPptmKrVe8fZfmPqmGCnJCZNpR7TUNwiQew5aN7jJHu4SLfSYP4pSfuxNesP4NfzyQsiwph39oHL76cYiZDfXk5",
  "key44": "2u2yd52Xu5Vgcuq57EU9Zzj7eY228oGx69HT625zSpYHVaKpgsPxiUxXrNTio8u8gj4k9Ea99bhjM97cyWDgW1Gd",
  "key45": "4Ssuj3fXKDMqg4n7dEFwuN9BCkXogMBRvdHQCwsZrZ5HjLj2zm7EGY1mtGqr3rBPEBGBfd7fTYWVo5HxGARpphGY",
  "key46": "DxbVcBnTjD2s1M2gnquwEYzygKd9J9AyU4KXLgRuvm1V6CB71QZhQFL888bZArKN8tjqK7GuZsjofziUwXcPPFS",
  "key47": "5sXBpMfyoqemQqLJteg7TcU5oU9VAkJE88KZqVmxG8ZjYPrSmJsfAgLJ4u7rzDM8PwGw394KxixD5qnK3ELSyQiC",
  "key48": "8JLuWvf37ww2VnUXjcsZLrzTJNtg8LmpBk8xbTtJmWrpbtS1d8biAunf5sYCLNQv5fh4GF1iLJm7WkYgGm8jYH6"
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
