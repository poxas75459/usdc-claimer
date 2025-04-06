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
    "3eCdGLFMQxTyLSnHmU2ZHB1fFue9a65fvvNjumJWzHG69x5C7ubEnWMyupLkcgkBxFPYK2bvTjcveQkKrur9Ta6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHonvj9SXRsqTJYJfJXVbjKpMNttRdQyvHdSEEJnEnB2QyzpzzdimzwAeVAvW2VmVKAeNm37vr8BQfa9mE48uSU",
  "key1": "uJUkm2eF7j1vCf7Nh4Ku57n3CDXJAJu81BayPv5iaBvUQNt3u1vVj9JKWTAGM832D74MWLM4SeiEpfRjS18YVA3",
  "key2": "LDYf9sGF1sTPZ9ePDAfZbFchE47Pfet5NQb61uRhH9rNApgPmFoxj9y96MBCmdqma9eZUJSgabrQPKX48RDkGWJ",
  "key3": "4gUv2GpiPRJeP5kt5guCBGnQj4fBXBGnngkahrt6MiPgrL9Ytxqs5i3eFN2zu8ioyeKX3gBzZwe1jzZ5J3dfpEyj",
  "key4": "3vUrKq8ufAX5TPsYQZ979y2j4AvhZSuXtunsC7Bx8nhjvqCCcesWVDj8qL4e3uzFP2GUfk6mngcrEMk6a9pV6s4",
  "key5": "paXBDgZASDGyktTA2Kv9zzp52TZn5QMZBfK2tW72N4Sgk6zgq5Zh9vtZj2ThL1S247ki53XToegDhja2j5YBogr",
  "key6": "4XbCaR8qAL9XgTHNCMwXTE1QSuA3mit7eccREDk8pHbCvMGkvEoCSSA73cTDSygoVXePjt1QN5ATbHUBVxnzYd2M",
  "key7": "zJn6wdp6SWzDvhWbsz3pzVUuFAuYTatk1ggMq92n9NB55b7sJMcgc4GwhUmLSVRywocr5vzVb75NVBLxj9ko5rV",
  "key8": "21DNrpoLtARD1nSt74aH58REj3YazY5PThi3PhuQ5KRugfWpQ4BfTWsCScwMEyK2ggNw7mPFV5gJE1XpLxcAQw9K",
  "key9": "ZNRfCqQBhKd6dFJVerF5uvmCmA192nY2zzDMc19nXaeUWwiTewAYjVpjzub5f7mUesHHGEHDCVUWyGfgPD1maGm",
  "key10": "532QXxn1gmaaoMeq8AwCGa21hsFs9e2MXYQpMfm8rb7WkG8E4rcK35kvbrbYv7FnQQNruvXRdNNSMFVcyXAVXQvn",
  "key11": "5YQaqrB3JZM8HLnqS3XkLQWDjNtQS5VNbcsdLBqyNK7RTyb7uztLn9xFoGNE2YpQDomicvEWYsDZiD1QH2cGWWkn",
  "key12": "241SLb8gQLhUNpShkFF7oRpEN1Fd8HeE4g8gmLD6UCfvPgZzLy8sreyzP3ZXZEG1MVV4eff9i8LVQR7eJh7fcY36",
  "key13": "5vUqvKdrHLRibh2b8datz3DKBygVuU6XCENwYy9VVikxbEyPZxCPmiWUbFSnG4j8bwfw9oVN88TpYCo7y9GJfpY7",
  "key14": "5Czh1nWDCJy99ytcsKdn2LF2WT8WMXea1hjZVjKK4jk4H9fFLVmRJemsjjrWYQU3Cg38mVXmEY7WrgaSAEjoBtf1",
  "key15": "4Vvu5saNVJ5EP3vfEynfeEDcCTwRdy3KVb7wpVsEqVg4g6pgUj5EXMMQ6LZMPfoZCq9r1fMo3AiKnDuuB56b6Vz",
  "key16": "5K5PPTcv7nzEzGULPtiAXk3XUP6BaYWoo3FCHtdy4UsU1zBVcXJdjuPGhJd5q8rDjUg9T3n7gbv9p5Ap1AcAu3yu",
  "key17": "61NvQYDk68q4heAZC5zAWYixwKBP7xZtwekX2djSCLTFKgc8L6RUKXLzSVK4vcqmaMiB7PtRkRWeYvFyYLg93twr",
  "key18": "3fj3qJ6avefQ7PfiVvHKrvzBMW11GmAqzNUw2rpRBkLcAkAYByiQJamCS79kGJAo7wsaxtmF3FyQA4Y3dLoj154T",
  "key19": "3ok6YmiqH82zBQWVWReEe7wff2nJzrzBCw9ogHgst65yhtrUn6jKRgdUzvqdmh6DsDreRECbZu4tfDmBUzDFxK8i",
  "key20": "FJUApjCd4GXdw94hUNanueTyC2EctDaermJ9tSRNm2D71JSHiz7fgTKLjZANwXkQKppq5CBndYq9xVQLNGEjqBJ",
  "key21": "xpjM8gwqQdf8Ak5n6hp2xeh65N7XPQZgoR4JUQddn16q2j1LQAZNjcuvHipXuUCybVKuhAMKer4hEySyVMEWYmP",
  "key22": "BaG2sUKWRthCK4xDdKkqfMcoDYFgtetFTzmAxLPUR4tKynSXAyhKig7WKqPMhEE2Tg7nPHkcP9xFQTkRtDaxLfB",
  "key23": "34XEPhB7D8Y73sTWGmmzGERr8vJYVwS9eKQYJeYZjaX5BK82QShKLk4kWRGoE1oK38UEHEuMcrnKcLxFumGik8wr",
  "key24": "N1mVA5u2j1yMNPydPkXCywTqwzXWNX6CvfiRtmWrB1ahAVyny13PspBKXtbqEJdD7XZ119nEYbQ1QxCuNcpCyHN",
  "key25": "66Zr3i8SAqL7iPNXfygHNSXA2YTEkEH6U1YJe66zRxUuux1zxw3tr9DGkjYcShvYX6k4NyHkm68WJ2voXrMNnfKu",
  "key26": "4usw5ngV7Xi6d2Hq6B3TkzuZtxhqzbf12ovReabYKmm73H5P5VH2oWypt94vU6No99gkWGxbcGuQcmBX7KHhJR3F",
  "key27": "Kk5MayjKX6GDKrkMdHswHutnw9KPhACwxieLLTpjRznuMGFqDEL4bxWHBS2bvk6GAruYraKDWz6j2fPRRS3Q1pb",
  "key28": "5iTPA1quVc7jV59R96JoBz3eW8fXa4A5vsLWmyhrQnY2LQ85gHRHQmHLZrbNkf3M5Gy2Aax5t3ePupEtKYSrYXBL",
  "key29": "28Ya7rr7HewHQoK7YNLfc8k79hNkC74q5JEzkDhfLCWgWjGKwbkWMVCVcHE66ymJWK2hkW3UtQ2GNjs2rGCG8Nfw",
  "key30": "5c18BacqkLDP6byMZJuMxNDxViUtYqizFMfW8nJRq6yWBvgvLqvVRXQmJCL1m72GDdkhSTEZs3m1gtrLwLWUp18E",
  "key31": "55K8xxVJayFNJJHgpHmRpLrKNVkUz7eZn6ZmrUKg3SNoNNpG1JpFhvX6e7pMCMY6QJ8TqfWHm23Zyn91Tk7u638t",
  "key32": "5M56P8Y6qbx9CxLd2SDMt1bZEk2a1pKGxwvZSnGV6J9QKMa4vGerxSWDGeb5y7qzbPUfbpBRxNpB241KAoXAPfpb",
  "key33": "3iDdbD8nJLN5cNoGhk858xRVwQ2Yb5YCgoLcZovoUPaAhY7RAFQESSeZGZaNaNSQETpXE1NtVtR7eDJ8CsPfTdJQ",
  "key34": "4mRmVKPfLSsGyU5M1aWoGPpHorKVQWQGwVhsQ6JAEaqNJq8nUTZ49R59vsrnQds1TLoSuDLLDF9wNKi1PVkj9AbP",
  "key35": "58o8va3LGa8qwsS4HzCsYgeXKYHJrQviCeBuwPay6xnAdyGqzZTwLZ16x9VeSSdUTcqyPxXaKVXAK8AeYEq6ryNZ",
  "key36": "Wa6obvMfiysmFA99SamqKbqdjyCcy4munzwTT8tDjEEtp8q6pB1YH1Xix7KH39SvsC8VzBNAFWs2RQCBYLhcqhx",
  "key37": "5nPHPrS7mkGEVFS48KraogokBbeNCmeYTZP2sVqhRMvZpL9JjcW3PynDoT65hfVqZyByV1r8kfnzp3K789bEPE6a",
  "key38": "5v5EBJ8a2aU8TxKPVzKdE3Me3ezN5nhmkQXwnxDYKGcPoFXTCuAz2AuSZ17dRLucH9rdRWRNeeL5SKgjbDmVzDLA",
  "key39": "3XY2KwWiBGJx3PpgGfLf8GxqU1p3gLGPig3SqczMnc8xp3YtS4hiLVGU66DZfcUrGjkbV63BUfF3DpAEf4SG78r4",
  "key40": "4z8GCNYyoJyMTuoy2gvU2YXrtpK6G2VyHsay7YDVAxhyU4YhvZgNvGATcaNcxuaN3g8W3ifz3S3iM7adejhuCyUe",
  "key41": "nFh8yJutVB3ywMcZcS5mgpqQmPohdCeREskacMnYn7gg1Ef8kCuQDXeosCMbRnRuAzfn651WSJENGLTJcRJrZQj",
  "key42": "4cjVvD3hFc6wGN2iUKSpfyX7Gq6VnvFz1DngnkAd3TbCucEMm5pVpACA4VotQsZof3paj1To8W8NkcvM3Em31EFT",
  "key43": "2i1xKifZV9SpjM4nzQHxeobJdsAMiatdxJf5ne2A2gsdDt6hyEgVimyCG9f8CC9WdkDAC9xXMmQ95bvn6C4h9gzH",
  "key44": "23azKE2n5EGXjWeFn71it5mpCYko442uNUyovyqmXfCCrTjHRtNQBBdHT1RAXGPL4H4nEDQtponSSUmyZi8kRFnz",
  "key45": "xf42HXFJaUgsaD7yyHYM38s5YyjpVQeFi7FesfLLG9eKgbt2wEuRLBK1wYBx6ZBuS7vEgFcnbbz2CNwM5XLCTJf",
  "key46": "3E7auwHNzw4eBp9xKbC2EZVUhEkZhJSgyKHVWXkuWivXczJQ64N8dCYmHXEwoX2sJSzuva7kndog9SgCn8kyLUDe"
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
