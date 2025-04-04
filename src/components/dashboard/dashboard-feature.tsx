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
    "2ycGuPDqtDaNiicorvzwNfsiDuZsR2XWk1jFgSQ594G1fCbeCZ9sTNtUtB2aej7W6xSjz96VXvSha2b8jezriEyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kf3fxAJeh7HQXHwrS1kpxGyv6aNxHkGYqHMHtrRq7aVQjKBeDBvw1pkedCGE5JBtCJFmaZBbGVkZKpA33jMbFTx",
  "key1": "5NefZQ5Do17vUSNzjfxvRtSFeN5sxeohacF6Vd9KgpdEBrx4a1skZbuRtmxgH4SJNA5aD28CTKt85wCnp4m3yQ4s",
  "key2": "4BGsuKvfPdrMxpDZASKPdGwefrizynZzLMqQTkbPCoAutQnXSRBZ3izouXZQP69E4PpgUgs4wtyBv1NAtBdreRYe",
  "key3": "gu7WJfZhhzJv4ZZfzrkrN4spVq5qXRVBCTkAYeB8cK7pFaKuQeQZrHMn7GSuoBbetFE6KBst2MFHD8ie2HNtXNX",
  "key4": "59Usa7pisXvcikU1NXczykTwq8tkTtxUK1QwQ5fBgNk94H1Z1g9oxfRyLu3VrZnzwshSJw2gFwYpf1b94jp4sWKr",
  "key5": "2ABTD71LuQmfFNwyAB9rkgdvgqrPMMAESWcH4UfCDSE7i61TM1oUkTBxVZHjfqFJcEMiRvD5mBqwyCuDQmeqSiLP",
  "key6": "uYE7ynv2oioshJzaoPY3kXkF4CgZdHDdiz1d2QA9zpeTnDtS8fGrCw4F1kHKUukZybBu4apEo8ZsrpTLBWe5hTi",
  "key7": "EcxUn8iBPBvDjrNPuAocaBuy1GJ4W4sASeSZ1WLJhk3KZmkLaZKhC1rWopoztAzC52AuSrFEeCt1xP6GUjLkZYq",
  "key8": "WSZRZfYjLoMXA1NaVfF8dLk3ZEQYPX7TpQSVQT4291YTF5Q7smjakomt8Q28rGZpb4kpdaiuVo7DKjpLKx629tk",
  "key9": "5YGBpnNGTu7BL4vJJgXYzqA5CFVZ2PhtLWLAbcGu1p9ZJmf1L4hF5pwmzU3Jiyk5ZttkJxDWZf9Eh31hY33tirP9",
  "key10": "3iAU4525JLH7F8uznenjQC4efX8zrEJL7F4b2uk8XL2hG3mK5MnvKPWqkNDPv8j5XYGssdPBeMYLUA1kXHfHLeeq",
  "key11": "3uGnB6hLcZ1sevJbnQPrfxhhf5HSx7e9EfKeLAXiJX8WSwD2Lxga5nkKbUPiLrk7JoRb4B8XmdWBe9QfQ2EAFDzV",
  "key12": "4yZjSqty37nbkbUB5QuUXyzhx4KJnjjKVnQNqC3dg1qmy6sGWt57eJCKju5L2W1vtQgddbjkXjqJtBYitHNwhX5H",
  "key13": "RCyWxLafsCzpvPbDeVsA3m5dLyKKH6YcH2jar9yRdEoD1CC2VUoExQCgVNHmA9s9XDfJ9LcaKjrZwgGgaTkAnmd",
  "key14": "52PyetKdWx7NaTYSQu8tiT7kJM9YXxYemoG5KzNJLaG62m39WYeaJtPchumAihPoxs4mP1TRRSPwKiq51Rdo12QG",
  "key15": "5mxMDFD8VWS914pgi6c5YHsDqGH371qqKq94aCoAYpY5rwLzX5sqMUEjTKAFuf2nWEtxuefnaYm83KuVdVdLw3yt",
  "key16": "5Zxu3fa91KhvfhZeUTnfL1U2L8hmMpa4jxZ4VSvLcQNrXKh6EpznmD7EVYuTcd6z9oRNtPf2wEodMvqC6V8EpHVs",
  "key17": "563gpRQRFaovLd9akzFxVdy3CEajaou4oj2qL8aq4cg19NRHYhpKmRY1ejQFcBeWRdP4uVjda1dWrEDuHp3EnVbn",
  "key18": "5R6cXz6GzFhNJCwoZuzfVYcu2X4Q4FUTveWkViKeYf5Q5AVPdwJgY9x2GyYNTmHkqd3gqgYEDKkrgJdojknftTRT",
  "key19": "4tBUV2ceLhzrtU1nABQEuZzQbW6K77kvgsr2vGDkZMci48341w2hY9jfrCeLW63CSVUQm2P7i1o9kXrELUde8He8",
  "key20": "34tqZqwtMXGnocyBtfpbukSbZMinUmPcYdhsUnebNu1GG1YybMMaq4in4m9oVXSrmt8oeNiKPe7FsPrEF5P2u6NB",
  "key21": "5dZ7mBPaFgCBw9eBwFiHwJdhQxwRbh5tP9H8mNPhcP8RdjUAr285xSZdsqsCCbQhPraHmqjtQ3tCHFAJbLdXy3kZ",
  "key22": "3bEchnQLu9ufLGq21YwLZV8NJL7CuXomroQNh89b86EbqMpyR8V3TuDsLSdSUc1Ejmq9qoevWARvRXudhdyjpxU6",
  "key23": "2VGz21khpJJouQJWUNZUrw7vnB493cvheMp52pqdbFo7EMrd7pvZAqbCrATthbQVbXzM78TbfMQckyVH9i6sPciS",
  "key24": "4pvTkocxRV6d7vHg8WgjNsMp9ioD5B1QarHrrLKgWuEHo8p6SLGKF759NTysR89yLMpdsgdwf2fB4dPSK65tpVwV",
  "key25": "4anmQ3Bjfy9n2kkZE2cGG552DhSbp9tdyEdtPrSHgfTKYNSsudQT3pnEcR6fmvLjTGaCfXJrd83CCL1ac2SzTEHt",
  "key26": "3j3kqEK1GsxHcrNRHX8g7k8PcvuoF2AqYjMaMYXaKHCBVYK57By3ReNqWcVuzAuBRd3FsCdKjTmcakrw4ficpSxY",
  "key27": "5R23Fs867RzBhXXQoGCkLVyQJZxWaoL76bVd2KZtVhBARbph3UFu6wZK5mKT1WufqvH1K2myQsG8H9XVpvKmQG2R",
  "key28": "3JbXnYpSgEXQZT1qfzGVZEYLM6iVvEBUNV9S4T5Qc9odQgQZZQnuDpu51soogYVJbuPNZtLaL8ZcCrc4kn37Wc5e",
  "key29": "51kE7peF4N9kcepNMrCRu6eDJFkRXJCQL9z9y3B7dQPeR2waaikek9xW38HX6FSfa57QLMNf5Jrh7PDhXijQ3hDN",
  "key30": "2TKTnqAq5TZCsfWigwmCg9TVgYTCjhMRj87bv6TXfM2kcUT6GbcvHa8LrqVyWgdLoWjGUCTz4tHjWznKLdQYnhr3",
  "key31": "3TN1nCSzLR2ErMVWLoiKPWE8kRvYB2ySdyFhaqG68mGsWdbKxDERPdfJRMxzqzqnJvPyK1jTP3TjWYQCxRnhyDj3",
  "key32": "HB7HHoJickfYhRwZ2PjHhz7sXeQa1ApYgCJDqd4r4RZHK515jT7NsnbwYDFJkEq6RswfV1uoyMtYVMd9P6Y9C81",
  "key33": "4otweRTgifLphXeXQ47sJ34BZvGnhDGpzmXtMmnD6Gs3Ls5UyHN8v5R6TWrXZvzBgKXcintYHFKnNWnWeYT1keFS",
  "key34": "2BQmHbYuUtJb38obnZSanDLzXGsEeMNjVihWLJaB7nKH5QmBX4TuPxjrDPTX9XUWKSfyxhoxyBrZ4rhzNSTSQspB",
  "key35": "4XRB1mynAP1iCCVUq4ZpRnp2HSNaq2xUrAJ6Shc6Bp45hK49FgBQBSHKFsDu4LhBNNgq7GgQuk1adG1RMrvddXFX",
  "key36": "CMAFbcRHYZHpRKHosL57x6Pqos3kcmLp3GkHFoWEMidSPnp7UQZ6otZuw3EGMUxqY5L8BopUynusP5YzjA84GHj",
  "key37": "2AapJhEANUC7vsTW6GeUchi86kn7oKozYTLc5k9yMQ2GNSS4terjy2dWC2wEAPgxgh63DvG4wz6nXdNx6fVknTvV",
  "key38": "4xJdZsmQd8N7zUt6DkLcCFoy7hiRqp1yB9qeHviU9byvPzMnaRGdt7kDUvjaoCGtSVfmYbpenuTaXsZPJXq3p556",
  "key39": "6168KvuBVmP8kfd4ECjf5EVhW2CWV9vX5xQgm7zYpLoJqR5pBUNUoKgU1LPsZfSjSzg3bNSWCPPuNqDH1RqwV98Z",
  "key40": "5uWCLUTHLjKRsPpjCHpSm2dcka7u91LSeLJTgyW4xPhGRdHGXwAtsXLqsMXPPPh6QKjtRT483C5n2pDSDw1pnFX",
  "key41": "3Rha8x88HaVtbz4fios4sBFVLq8mTCsT9ZGu3coG9toHheDBqHLVTK6meJ4ynZqVz76sD5xyzBpJxUZhATv6mS3q",
  "key42": "55c2xVBYWWV7GYWVgtVjhK1gcMwuMeLT1HhtSUSVKnKQ4yjTbv5MNDF9TnmuTJAud8bhqzL1wyWrqeVkFbEUtRxs",
  "key43": "2p4gjFBKpjU36uuyXfdqJmtArW843Tq1u7EJAvnPwTYNfeMTEeG3nTFQyMtSYCfbZF8qPnFM8b68bbjsSSo8svGJ",
  "key44": "59ryD49LkpAWCWuxYL1f6YEgymXTUPnGPj1xdN8mK7wYqJCeZvYjsnzdfbdfEWmvEQodVBSRRa1bcnCizUKz7FTu",
  "key45": "3pSswxrmV6FPDeBDYkctHQyBMurmgDzhXzFVqiiXpFxppAweHzzR7RzjmTfZxYKTHii5rodjRkHBtJ3NZjB5Zkt1",
  "key46": "2kLMYJqyecMg8KjWA5Et69wuXLkDqNm4qkNSv3AmioapxyRQW6PH9U56DbwAHLh1kUKy1L4XXtd4vX1wZPcq3nsc",
  "key47": "md5mwAVG3gMregkK3rnA3cxrSbmRbGh3uGs3cwKyqaBNdvu5gVmpYefeKjHMdGsNf5erTZAZ3d5nq4phqudDu6m",
  "key48": "5njyAaoyp1vbfGfoDs8RtMGtHokERNqZbB2ttYRmGcwBCgZ7mH86ruEzsD555NwxDqeqKAhZo8yr8Ea73iD2LfvD",
  "key49": "5CXQA6fCPx4PFVkrE4tegftmgeSbjwkQnfP28bkUMRMDVfbgA6RVnX8bGoWp1LJZWuKUgw9owXXb2o6jCozZvvAC"
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
