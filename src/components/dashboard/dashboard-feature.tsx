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
    "22UNcaHFryoUAHFUgPAJd4YxH8EDZEfKAxfF3f5wmL9EjKuN5ftHqkUEon6ExFHf2RKYyvUVh2UJa11GVmHEuLbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vrqBzBA125CoYLToBD8Xrj8ASLiLMSRUjxGcQHmsVqFrNZCJRt91ys2uLmJ53AdHA64WXzoy417wQiWqikk4s7D",
  "key1": "55JWC3wSbRKn3sW2fdkSWnyQwmre8gSthoijPgAG6iLXWQF8yGVtrsJfpv6rbPcR9KjydJxg3LopPMUJAfDqQjrC",
  "key2": "4ENwWiL8PPtXvvWzzGFbWF6DaXQcUU8wVcv21VjoaR3DPmMCMpDVmXW31QsZJpKN3tsXuKvJxHeG3f2546u2y74D",
  "key3": "TNKsDi6JqkYFC8HjWa5NjmMw47n6Wi2tPqGSQnydXQLK1JGSgMu6Tz7chmsrHY2yN3nt9RtXeuogVB5dH5XbBf7",
  "key4": "PSHLvP55zgGQLdfPpgUgVtKPee9XLKXcJAdJuMtkMh32FESUrFRrQFXLF78MQdihNs1aynJhN6NDKyD289JYENE",
  "key5": "5QwSCJ99tUqPbsAGhpNdLZCdiYN8vbKDnomZUZjx2tP7BhJuk7dP4cj6dH1AJZnbcWxM9wbVdd3nAqGFyHsntsAw",
  "key6": "4VEfh4vTAk4ASjvLdfUAu9WHTpQpJSk9VxEdKr5pE15rsuvo1DBceYqqJ4LFF5uC3vtzavJu9rMoB77H2ghXKLAH",
  "key7": "eGXWcJSLdwhFYBqkPFrAvWXuNwcWrV4eauuQUudM6Wjy2ARNiDUdPWcNt8EnqAza7Q3rhKD4pstCYG7tXs3NKnN",
  "key8": "5sVyuPqbtyjxB3DkSAyfywh1Nn93mDNf6xvfPTSZyumPG8B8Nh8rrWGybqf6ZKQecJRJ5ZZzHLx5zqMPj7xQCGVR",
  "key9": "2LHEdmyjuBaWqFc9W6Vsn2PGFT8Suo6tXedAeGeQRRhg6CEQTTJ4CeGsf7iJrwUwxobhgUrupjd6H4qQLT4osJmk",
  "key10": "zH59ms3Zzw5J2sKQ9B71zw4PMHdP3tajwyEBn8feqpXx4nZ5D2bb9pNeRuQwnwAQEH46Q1T7sLZKBLi2ReCR9xx",
  "key11": "4cUi6zFECEbjbzoZWpAHtwDUB8z3Xn4Mzozd8bcRL4FFNCkZofesYhKcMfTYpJ6R4Qt5Hq4JgNfhUVxQ2TArtvTx",
  "key12": "2m4nV1FQwmAMf4bZGLRr6kXpXry72mxtd9kZXYXeaJ7rKphUnkyQMsZb4nd8qqybV4PfAZXrXorpoqQQqo5QA1hv",
  "key13": "4HfWbDm3wKUxzT3ys1ekLHKQEvPhtzuzTAVxkjC3SiV1h3MkD6oBG94knkg5DJHgUvCafgDC8dKheD1BQ7aZvpvp",
  "key14": "iYM9QrS7L4BEtFvNQWyaKVvZYQumNfnCY2P1iq4TDRBYEsh54NkG4wF9iPvLPHWFkd15bM2Ci3Emg7FFNRUHZ9t",
  "key15": "2P43Y6Qq5bDFvr3B3FVe5HGScVvDDsB6yWvJi3B3eTCcAM5g8pXnH6ZqvBHfBQDAuyyk5gx9GnK7BZJ4hdY29u72",
  "key16": "3G8SneGScroNib9VHuHrpbwSaj8yqZgPuwJcCU9WGQEy6puwG8jftvQyeYFwrZWrzXrqNyW1iRLT31b9VFnQ6spW",
  "key17": "3kka9Gx7Z9YhsYk71juEjYuGGRLZaPQzacs3B6ob8kAVKvLFCNLN62zcaXHbTgx9o7NvRuEnBxvfLSoEPHQNSFBY",
  "key18": "3TfU495RXGdcCwk6Z5vSx8Lp6YLHz7F1cRizugLrRKbs8FJT9qsFPQ5WnP8qQY6vqgLwrEorbCwEs1vAmv7gMi28",
  "key19": "62KmUP31tJsia2B8Jbf65PNTi4cThqzSHrppz7KhZ7nryqbtiP7v9ma7Y1rmTqd4djpGbywTZfDVnXwVgg5gWMtJ",
  "key20": "4BvzTu4uDCGhRGxv192p4WNekLEDTAQfiPrwEQJGV6r2F8XDhNga4xKddLHwA6j8JaAZy5C3r84U2zpyiQpfuCnw",
  "key21": "GbnjgskPCsf881tQX1LVDac98QRMTr8QwjwjkqxXs5ydCnfwiLJFkCkmkw479i8be1ENUvcbcD3AaHzXKFPxe8h",
  "key22": "3guKnqn6ZcH5U882XJXvgKDqRkNoCEkuq2GNuYcmTAAGKyRnvcXghPx25itZL6n1C4Zyiqos6bVzr92MFCWXBCGo",
  "key23": "5rCYBnNX7BaipCNUWs4oKQE6yGuP2xLPjF3XhRdXUpdymf4cXTbmZimQ9isR98BnjRMiU86JqiaE26VJhNBZWRGq",
  "key24": "2uY8eWDy2NCeSgmSJfGmNSBdSQzLQ8om5yD3KSyR4xBsk9NHgG2bhXdp942aGHyd9LbAph9X1zQYMkjk1iM1d8bV",
  "key25": "33dhjTvKSu9fGgTqEYHLamxUrAeeqKtmazxNzD71VYXpoujVg3YWStwgePy4G9S2scWvhS4W2QeFhMzyXQNigcai",
  "key26": "5okct9HC7RnBaDiYeoUYy6VC4nQ8QRVtQKpSJkkMkrnEgR9S8xgN5cDTFZiGWc1X1Egm2PyjV3xwxZ4UYaxm8nWi",
  "key27": "233g4y6hbwCDVw3wb3CGDLaPop5w9LwpDyKCGGZnH4WQa5rsFiYLdXwf4sRBuGGY4zvrpW4wPj5jCrzoFZTHDMEf",
  "key28": "3QLgTc8pRSWaJb49Qh45Ya6ysgCXhS9MN4bC544j28rQjtd7V8mSRrydYHSKHPEKtzJWQpziwWJTWzPzDYYUy64j",
  "key29": "vpYwwUqLv262yLnHuXa2Umb3VTV4pR4yXFrTvZvkByhuCpJJmQGRvt8p4YcjbRrSiR5c7aboykaADTNZt1BJoS7",
  "key30": "5qurLJxKXZTC3W5pck1zMpsdD834hzqzKMr7jHwkovxBwHmCtzu3gAtwCuwuDGhEN6rq1LRKAxXBR2Rqd2q5PGGi",
  "key31": "2PH5dRWLBgbZefBmzsgvPqUVBSP9te3zeLiR6YSkjvagFTTYiMZY16w6F9yaMUqD14aEwDrZCLSPUwWhxJ6uYr9P",
  "key32": "5ExbpUWhiVA9ZH2YaxniqCw2twV9owxNxFAGT91XhYCeMGYyHjoznHrnwUYgZtpMdVpYUU8M6KWCLEtgXWphvEX3",
  "key33": "4NWkbhyFr5UfmxcNk99DdLZS9bWB2iw38VbZB2gQHeLYHEvGFedrndL7MGjYw2vd2fgbGvaXdteD1fAZavGYyu9n",
  "key34": "3ph2gfAFkoWjAw9AyGLizEx1iQf6VmoyGVDGKTDDqzPwM2SrgLoDZCw5G51VqYDmJRgjnYLhwcqBg5kYjsuMRWxA",
  "key35": "4G6rtn2tcmh2RbxnGkzyGwcYUA5qif4peEj2RtNrytLfuK5tpU5JbWXu8P98ui8uLuKKqoGhsJ9C6snU5u18peE8",
  "key36": "FbfYfQjwRxKBjFqy6mt2qTsyBkf3EMfiRPWaWUmqkeWeUNNV2EhomUEpLNJUCCpBLwtcNoQQfpKoYtuR1CxXSKE",
  "key37": "3RqR58ZYspNbiMeAQhVRjmikeLPYjyN8kXBNVYunjbHkvczm9qTfRrJnGNL2jxJgjrN4S6VZs4UmgFrUw8JAPbrS",
  "key38": "33LQDmfNd2sLLu4AXiimtcodwDDKp2Dwgxk5k5fgwUnf6EoBCPtqAM6M1mXWvtAeUU1Wegqog8JqAqtTXRwxRAAP",
  "key39": "29P7qeh3cbZXCNdvcDTPVvCsuenE1GDFrPcg5dArTX3mDNmutspNdHcaBi2XPSKfWvg4gdLC9DJigcvUSDzx3PPW",
  "key40": "SznZupaJVvZ6qLSfrnvM8UBSKfGYtzwdVKs8hVQHotPwQcbv3Kwq5VWT8LarXfe2fnr5cF9VaNCXkXvuqHNv7bV",
  "key41": "3Vx19hn2GENWwyLxRVBdRxgzXi6ui1FhomszPGfrruJ31zXLeXrxgskFoZhnahkZyx84Cdzwqbeuz5U45TmUX3vm",
  "key42": "5yZR1ihsatXWv2iATD2x1tiimn5hb5E5buJHcCNgWRMdAuroPGQQcxeyJw1oh47E5EmQwm2QqHorbDZfgsY6mF3N",
  "key43": "5znht43VA1PC7raeyq2cSKhvyXeK499xzsWwGoUE3she2UAdyfzMrT5zaUxvneT6kf8hCr7eQ7f9VcJaCi7ZpWK1",
  "key44": "3CKAPmAEjg366cBs81ayboGj3yKtRVsFSipCqMGqJWCz2KjyEff2csFmos71eXEr9AnxaZXToG166TL19XfvY4bP"
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
