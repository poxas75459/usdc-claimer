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
    "64NG8jaH2yRdmu3QxZ66BXEsGsYufakQgM4A1YGfW65uzQWFEWT7F8mW3YqEJAMQcAsQr9MPVBBqmAGKKqNmUzE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W6GdphW7bgnV2MscHfoomn1gewEzHEMLcaWUVPzFinvWBXdGjYfWbRYNPi3FnAB5nukLrDmk1ZaAB561se8ugzS",
  "key1": "PxBjd6Xzhnmqe1bJ1pzsPWfBsY59bZcz4QM5RNxFGo3BgJp78zmM7QJoXZd3H1NtcamAaAn7v3qYQdVLrvVk34x",
  "key2": "3qFu32vE7yVgToqf2uoSZCFxTkx5G9h6XhyeqjvAxkSvHaDF6p6dJfHn9RxerAgA3Y7tZ7DuPZBQufn53T8uu63R",
  "key3": "5CsMWJVrRtyS11H4RhQPmhDn3VhkU3ekPauWeiN66YLTx19ka1BNStrjSNVsJzhgArtRGa58XqDH1iUzo2xJXMuc",
  "key4": "2Te6FwAWEzDKo66Fhy9RA69xrmZd5ARF17v9ZYDrQHf5qUVQuZPahfgLsLrBw8Th7SsNbuBwbXojSFQeExnwqx2E",
  "key5": "2kDanywHeknamKftgpy2LQViwzZ6Hvj4eRkyFhtwAidVDo6BwTuepiZiWvtdAj5t8k6fLbev37wDQcpHjGygZWYh",
  "key6": "5m2ViaYVXfjmrUL44iGYiWSFbBUzRbKeRANrQcVfJ3XbVP4VKPZN835YmAqKZJdNS6PpeLQ7HNetzAMbw7RYQ2nX",
  "key7": "2uD8o3qVrcZaF7QTfLEKaXy3Yt6MRjCqGCRpGAB7h1ggK3p8W29R33ZkQyXN35dJNM25UsnnQkurnA36yiZvGNEq",
  "key8": "54QhmGiYjMM7NEXrdtqp7J2QhZDiQqfHmJkVW7MBXBoMFUkrMCGDNbBDtT7eSKoYM2P8uXiwjRWH2n8JhhwoyxW8",
  "key9": "3Prznmk8cs64ABnE9E7S1QgWXNvBjATGBkDJjE7uFfcA2jn1MdkLY1caG7gWWpzBbJzUD3ZyWsjgNj9gEKH2TEP4",
  "key10": "fR8aaepnKKPHsMMZq4ivdGT7K5TPzP2gYswbaXSiagmGAPwNQg1wV8wsdpE8bBDgCGqybjx2tvZgdfXgyReafTe",
  "key11": "2tH2cuHhthg228mhDctfa3SzjXNU2GE9LyBppRNf11AyTcrN9xCjM2BrpVfhL2krn1fveDCTKgNAmzi1jwS2gzya",
  "key12": "8xMomgvCtDp22YSa4GzgNHEKToyRf38wKNZoqYMhn1HbYLmx1BbiZ49kK6PPFwncPKXmrn5mjZok1pShW2scvyw",
  "key13": "5gG8asW4yxBxFM58V19L9L2wEiEQMU9TVy1QrnEwAdnBkgXUD8H7LXyYNMjTdkGZHtetcsaRZ42WsgFti6wSRWXW",
  "key14": "2GtFmHVPUjivvfZp45Lgiq9T59J7FLNvMsznvRh2JPkHgLpweDsvkHevmdP2gj8oHrWggoZvH9AvHr3Zy78ppZqw",
  "key15": "4vUUrrwozLuW9bFxLGE7MsscUK6evw5bfLaWf5TtAeXTuovjMG9eDjgRf6RHdgwf4WcXr8bMV8NhPCxXqHnDJ6SE",
  "key16": "2jKZgUZgefjqYDxSWffb82qJC5huG55N4C2tTdLuy7DgCHn1h3NpVZK7rjk7nuDSt7w2pMnbJ1h3uCXkE8wmoVRF",
  "key17": "25iqoVMkADsQgeUrGKYQ2LuPrcww4ZDV3TwD5gDQiLQk9TpHRLhFjAro2r8W5gXiaiBPhBgHmwkJrMCkm5DWM5E5",
  "key18": "5G7J2mRd4PdFyBJPnCYa66GGNp19fwq7XXq3SxvSxD24bjZTEDXg6CqoRWd4PLUPBmRf3hsGW8ENgxjA5YbzKijv",
  "key19": "4XVZZetSKjaYvAkD7WtTwkLALhwmY6Jhi6dcZgiJmjwmnDfnXdMoqb9VqhRp5XWgNbth8curQuqYwapozXnPZBNh",
  "key20": "5CKAoU2hBqcDDzngKrWQvrvo68VkQsAxmeVRXaWnnc3a4yfupWv1FAyRrfjABkefr2pRmH4irN2xGc43EpwmibeK",
  "key21": "2MpWnUepXFT8YJ5Y2PZWKQo4LGW2GpdKaXZ4e5qwUXKhQGJAmqTZDAXRbQS7hYTdpcWPneNGr8DbgCAmft5f6RA3",
  "key22": "3u6o7yiGWT9CxtsDLZiAcaPy5Eg4Hhz7L1ZvbPGfvJVjgiDVSHmJb9zCjkH4SGRY9MMdr9b1eJjNmpg6QrQhjCWq",
  "key23": "122aoUix55SZzWZkCEyXqFadVMGqYeJydNjv8HASq3KJJ9v7H8Sa1t6kAse7J7CNwtAhffjZ8yz3ojELS3dyT2Pi",
  "key24": "5r9FxefKRWmQD472NiZefMRJ1MdQFNxRrivEy5TktivdAhJNbqTUXBPhp6yqsQQgDfZzCKPjEWJHjhcxy8y9Cx2P",
  "key25": "DR91ozKXCYxffP8vNMFXfWEKyzYrFmuwjGum9p4LyWEbmDG35NDTaGyjYaAqmqNiq1LZrQLgE6fCAokkDn5VwFq",
  "key26": "2WVJcoDX717pqPRoQnjnXpCLZY7NZUnFZLwsX1enZ21d92rZ42uZKpavzKUsCQGjG7sPnyiT57YnPkUaho85L1nB",
  "key27": "Qq7ST9bhNg7evofoQpWUeod4BmZr1f5njM72Q42V4o9MhPvypWHRYzbzjDw5fCdn8veCSNigZ94ZXsXVz6nmzTy",
  "key28": "2DToqfLunLXiUr973ehCjVV6FuwtMqNEW2oyf1rdFFxEuVhM61ctCErZbb9bT8oc5WcbZsC3esW3Kkp3xn9tEo3W",
  "key29": "3oL6fYWF1oA6ZSsPC73JstnfbqybozYKnjnDUJEKTL4nxzpX1BxXVzhFP1H6BbrQan55kxj5bt2owy6sbq5DmYC",
  "key30": "bH8NTdgPUD96eJFFiehHxSCHbtrSEhU2GN7ZphzLSSyNY6w92rLw4AW2gGRDf2TPmKvws8gRd2SwR4uuF9SU8R5",
  "key31": "2djnoah1ybEN682XMP8n2AM2BEUZcf47qzvZn53zRsqsjwhKJbguLpZvoFoyNwJBVVrWnc3LE32N2RUnWbu1weGN",
  "key32": "21GUkpX4S1of1RjaRPScyXYPwnNTGZ2GqF5U1GzW71NgFEmz6cd8Wwajxrca8yCNhYBi1r1AJvhkV1j8DaouiD5Q",
  "key33": "3ffyCwcigGg7CNonB9ssePFjqpKAE4iY1FUQcN8dkFtJjwjzRRhXfS4F9WA9ARptrNxBjDcZjmjVMXY2UktinaDC",
  "key34": "MbVuKxDis5egTnbnqemQi7v9TCyFHibMKfgUSzjd58YYtrLfQHsVp4gz1iSRo62j9xSRpeutRvEjR74T8cZnJrJ",
  "key35": "5kdB6G6fjAkTCZ6tBh9PsWH4HbUv7SDgBT8pKzAiiWg87PbhTCHJ8sBWQqUdZZzGzcCsphQEotM8yQZ1znqwKD37",
  "key36": "4Ht1TrT94d5AQnWZec9zoS3TLKauncmGiLpqiHppHYWnQaxEQt8HDUbeqXJyQftz2o2Wa6D5L6gnUUbikHoGguVq",
  "key37": "5oVRE8R6X4C8WbJVcr7dcj7WKnvYC97bTnEjxe9G3uwNrT3evVh7zjf8Vv3DBa9FXWKUz9bnJFLfWsvUoFCvfF2X",
  "key38": "2WANtoxrhiYJna3hiZaj8o5fZkGsABeK9RP7yVuhSUGzGV5W2zuEnoagDcFcrLxLb9431zMprSaGPZReVGVwpoTa",
  "key39": "5cDsDReVHbsmEVh453J1BGLUaMFLM25bnC9hSN27aMWSqKG8jySgQc8JK9JuNUbrPAgTKVwzi4QDMSJ8iJYkpcxb",
  "key40": "4NV5hH3WPYhSqDa9Yt5eQ3SYX4CeZ57yLJeJ8ZmtVKmUNVmEF4wDsoqRdK6AmL2dkPUSb9PZK9o5xjkZJZJ2aHvp",
  "key41": "51By4SNbrszZR5uG3SZ3rRftFzZeNFXG15YbnwSPoPZ4wBoTqRubdfrv34vxR5qnoU74aetEbVy8MfYA9DRAyXyM"
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
