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
    "4L7qj1Ujns4Wh4F2hTxZjXPkhQzSDCHX8iw8gu88mQatA2S3t3GUDzwVVzyKvSMDgMEi8jXUmnutx55MJr6dnq42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yb82zmmMay4LoZAoDQ9sXSofQfTupoXvgFtDE7CjcQaavF956tyeZh1rvLbB8cRXJ1fytC7VvAJHYm56ssJDdid",
  "key1": "3PCFDWhsc6gCCjhL6f1jWTEGYmdx2wp6dnHwQJDsotTEEaukJEYepjTPTEX2YgFP8KYH9YaApGmf2NfYwmzC5tgp",
  "key2": "4gFUFmbhZNeHRvRptzLrt7rkrgBMa7irMabY1Lvt7YHRPYEprZKDzN5JGf5m3YYmNZo6dp8JkoTidNQbqpWgxQeD",
  "key3": "4nqiZp5R5jcVFeoutXnKPtXuTfDtSeCSysPFSHn43YVcyoMt5PyL76cq7s4DEGAd9ZRrSVG2pY5D1dCuvmH7LL2N",
  "key4": "51L8FArCWHaVrP5fBvmXx7LYdd1a7uRRkNNYQnP8TR2Cb9ks6ku5TQsKLvg6U6t41BKAdwDL4M4oeudTfwQAXf8q",
  "key5": "2qwnzcJYReFXjE4MUkxTZZfVTVFmvXMrrdEqfHfVBbUsDUqBRtF52mUR8NhwH7CAKuk4mSARGtXsi5wqNeKyKkjz",
  "key6": "LiqE8YEg51AJWpjfE9ETCUmmnr8FS6HX4Nded3L5aJUkZP5NARaSqq3ae2qDEoeqyTSGZJzSEmFfxx5LNaMap37",
  "key7": "4yX2F9qTckkZyDds6sHWbwawonoEmf5GTBovd1abUc6xTkQKWLD2KWoUZfAHZzPYQKffaWKVdwX5LjXCUiAyhoh1",
  "key8": "4QbWKEgDBpZso6PMFU7eR3ob5YthsqJ4YyeSwAamLhWtGKV8toX2YTMHXSMVv73M24DMDAUUUfFQ1Z7n6Eb4DyNL",
  "key9": "5XwG6hpKNmWvNRKgsjVU5MEoftL51SoGGfwJszx8FwX8SjkA9JfBiDofYV9nahwNhhMrDZn5PiM2QKUPh9Wj4MUv",
  "key10": "pCbL1dDjip4MNJehJVpgbR23DvdQV52aiJm7EegikjRZqXweXN168fVkyUbFPqjjy8NZESBNvC6bZkNHR52dnrm",
  "key11": "4CRJYQqGEHWNmWKNyuLwvqTUYxr1EyEG3NauKyphJbUPXoMBmhMF17JLBrLnJe7rDqXTJQgGLHoh9Lz6r3QsThrt",
  "key12": "uMijR5F1PZ5Qu9ie9X2LDNS6LTV9NT12gfYLcqWSzrJnmyRoNLyBuWemYyV4qFwax5Tvy7ZYA6AP3RRcn5vLUmC",
  "key13": "2bZToNjVQbsbaX5wbcbodAW85bSF7tT9NuSR2mmn9ogc2FsjcG1VH2PniLiiHjgKqZQgWxVg87wZ9iJTUy478iQ9",
  "key14": "4cy4g7CUNByhEK6hUh9CDAXVuyWpC4BeMBAixaQfWnWiuytzFsfFRScPRJcv9GZbVGukmeaakYwtUZ9nV8TWXq2j",
  "key15": "5NVSwEmYXCUbZsw6M5Heen112WworT5igE4bd6vmCPSJEHJ7P8rQSwW5UVfJ7rbE2VwFnChPJ47uUoZLQyUhn1jM",
  "key16": "5aAG9ad95Dhx9ZX3ESAGbdbbp3Kf7RFiQ7ReV47JsLgUL3Sk3jLZg3pmyvrxAoYuakMHDVszFAABNU5EuUtVKey7",
  "key17": "2dq4h1feCC514YKpt1aoPeBhdthuf4rU2R4aFTXVxAjfcxW4jjajf7DHXXsNuZaJNaE4ZKVw8ZBhdypTzp3cVZo3",
  "key18": "5frCs2qWpGE5P6wNx1Jf88CQLZ2vGudepQu5znGsT6pdrJf8vui9ZRchi5REujSbDsaQEwjhtrrdkLSpdGA6dEK3",
  "key19": "exQauX7SvLZaVQYPkgVLYR9kEo41oiJxBU6Q8HKv6MePBksEJx33KePCvZGVfyrhs5UM8UBJfygJk63gSZrJek1",
  "key20": "3xdYB2SNQxcpbLw2VAfyN4thohAqnA1C2Vdpw9qurRjKFQkZfBPJUspD1HuEQ6ZhuJndnv5SRnE8jja7TsiDm1vY",
  "key21": "2TJq1fGTwceGb9TLBMoKhxVGjxvuSKYtusdwuwoZZPQRNz2BbCnDKEnPUsFYzc19VGiXjoGP6eRnbAvBVe9AXGHe",
  "key22": "5YcKvebdnfhaLptPZYG2eembfGjgNJjDxaqvwnwFuEVJSv6Y6onduvbaBbABEZB7Fa1sAX5wrfYQjj2D8dRLLN4C",
  "key23": "3UXuvWfXcdesM5v2RVXNJKRsLaHS1sxm19YQVcYKfYCJ9eHMHCyN3f2DZW8JmdBPu7wXLPdZPK7i1Yy1fsQVBB5y",
  "key24": "3buPctKuERzdtxWDRPraow2zZNQj7DHgRadk1YFBvkfbTeZwNzCdHgm2k5k6WuCcXREKwgQWkxKp2FXWRAou8PVD",
  "key25": "3a6s6onimwnyQuVVXoG32cTYMPAVu3Jg1wCQC1NWt6CMxEWaj3yvvi8wpp2ydNYQyLV9f7QRhk5snq3JfsHaivpV",
  "key26": "yEWNhXwALUusqyvAMrGTbAdBKddhbzGsgsKP16PDa48aZBMybnC9tAKNqeDVJ2HS3cQ2vgFeZTKT75sXZP9xVKs",
  "key27": "5XmKokMScXRwv8YBxwatDnfo8NVE9ab5ttcjEBKK4w2ehJMbro24N665EgRHukZsSfJ8Dbp92gX4DUQSMQguLfXN",
  "key28": "C2j4hoDuKKxJgUkJikP3htmWih1L5kFyGVFcfDysbmfgE8rgaKWs74qy9MDKDbFygLX7dNfE6FeRmMiwjzJxNuk",
  "key29": "2LUvEopa6q9tKB5eT4GSdv7ZBiJknuy6fg7yfAXDTmqS2zFWMgYuQfjTkGniyumdP9kZ37Tux2mPjACDexo5dPbr",
  "key30": "5rp6MKZhbZ6u3y3eeJhZPNnPNgutwBuiSL7GHQYVeeugouXNYYFAjxJRuEgaTMq2VJZaobtJQcKrr7seXm6aPW7R",
  "key31": "4XfmoRw2jQqzgGbNjyxV6KYRvdV6qSwCqP8CsakEoZ9RRCCQicUJZ4hUkMmxDx2jBvkGMmbAs4KqnkJNkjku1d9Y",
  "key32": "neusMewU8ty6pUPzN7eKU5twt2F96pMC9qzMM8yhQqBbu3ZCZH1ihwsYAq2fnAzJhftUPmLr6VtxK7jcMXzcKWv",
  "key33": "2ZiSAdvZD5d8a7ZNfv1FPHNJLhEsnXyqGnCt4khJ6FAq763Bt8HpkjGute5rBZm9rw5ajdK32P4o5uH5QqtWyx3x",
  "key34": "4XsWn7TRNbMQg4qEYEmAGtH4vPoeXGTdMTVv764KzREDLsCAD1wgeeedh6n16L7k32bw1UeqRMeAbgZWopfLjVzk",
  "key35": "4B5nFkyFiB5AAbCcfz2EHfxAUFUScvHcb7hN6YHAhyXNhfHawmBaWxWzRPpGyUgCYXcPEPBNJ8jzkTTDh3BqWm6Q",
  "key36": "2NBocUUBrTHiL5vU1D6Wo26o8msnnamfR8fZ2hfMfSEhZQ9AD7MKWbKsSGF6tdjMKmMaEwiCshpURJgHEWwSxy9d",
  "key37": "5x6jaZxm13jtxSNwG9C4BKL5zhYQK9rUHkgAR5ysuMnBWBTapnbXUUSDDVJRSszg7p9Jrh7CKd45Qn16pCUmCuAQ",
  "key38": "54Pho77hQRcTaxBXoUipPRepsP9LvbTfDuxD7ekQ1fjXy7TqRm5Nnf1eCwgvVTP8ziJTKch718Pqd8W7cAUPkEvF",
  "key39": "PMd3uYwpcYcXQjoqs4oPAyBixw8teE47AnQww7uKSNyxAeqpps8SB33XSDCJfTab1Ezx4LbBwpKtGrXeXn6M6dY",
  "key40": "4U1nki2uFYUPSY5ESgPFzeSr7sXYpTXgCM3UHySt3MtsV8HiJXj1XEenb2nhg3u2uHUwNBgKzkhYnmn8wkqtXZuH",
  "key41": "2K7G8VZ9aaB3N7ASij7M75ojz4aMT2UXpqQJe3Csyq6S9e9T2CHN9pEx1JD4FCRSTbjEJAKsFLPArGikYuyJe85z",
  "key42": "se2AcYutbZqY3VGsVb4w7yNtBFcH7ah96Gq4QGtZ3CwUdy37AWVt6JvrByGTr4kmaSBHatqBQVFBmSxgTDaMWYi",
  "key43": "5wfkX2yapwYkF9hjuatJvqWtNC7vQzUF8mmcUxF8G1ryptVmRXRnn2khMacSbNQx9m1ki2kxXsoWr46mz9J7cXwP",
  "key44": "2a1JTYFdtodi7dQxcQ5JWDLjswXFYpg8EvJ7ATv53XdXr3DNErYzRBafLrYGeoADLgPPErtmE4d1ykHAj2ZJNuzk"
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
