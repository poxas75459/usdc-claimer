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
    "2TZMGiEcJjW6oPXqakZw8NrDtByoa38cJ3gySsWJB3u5CGt4BP3oVp8LvJcqb1tpPvTUEN4WxRp1YA3k1ngHyU6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXwAtyHPNyhPfs8GBsND8UQ8Sp5VKsbUC7fMGod2CuxcECg3dgGk3hdCdbU7zgYPsk8K1h4fqnucV5ziEWUDvU8",
  "key1": "anqtQ9MMzteNskbPn1ZQqC6FE2WqrfjtAdq4pRnga2Dk9f4kefwh6QUbaPrYSxdggqpW9EvqGVZfAsGVy3VmCJ7",
  "key2": "42e1pNhbxqB6YD9vE6YK6ncHmLh6FVcqBDCy4dzcfiVwDxkP5m2Kus4FCY2ZoefQYxS2nXg6n2HA1bkx23w9yaYP",
  "key3": "29xv3toFppFfbAWaXJU4Wcw3pfES3Yr2vSSZVQsX2DV6PVvdY3R3RtQ6jiCb73y28JSM9HBRXgLAsZPfQrCjzbCy",
  "key4": "5CckFMm3nf7gZdEAp6FvQzLEmcYEtGVJqB4RBYf2QwhqD2xx8iZirZbjU4z9czYuLv1VxY7KpMDHKmQWM5Xmz1Fj",
  "key5": "MAH6Zi4Nij8BxkFs9Me1DqinYP8xswA9V4RKGYD2iTaphWtAuxBb1ECFkP4jSDSaz596r5CXrssPAHdxFNZJLMy",
  "key6": "RcTaonqEBb9JFLGv2h9i5avxvGDYx4jGvasHSJwkmgVe3KAYBzaNwqvpeBGSZicMiZHntvMT3oei7Q96A3v32TR",
  "key7": "3ryhE5EN7j32Apnr9gik8ZEhKK8Yk35N3magwxjkmQjn6myrUTW2dVya5vZFK7gssy3mmE8BnSwBkTfEAJZEAcUq",
  "key8": "2rvhNgjjBw2Rioe7FTFsUMDyhXP35FxCrfVtB8D6P9NJ6FxXMMWKPQG5Nq1kUkjdPwqFToqefvu3qht2WEfUpAvB",
  "key9": "4NkivFZWWVH5TkgsUvRxM8JTGPhkSse9otAnj3HV8uapo6Y91d4eN96QGRdFHLyCccw89kjUzGQ7eRWRVZHCk7Jd",
  "key10": "3qyVHGdShLAJpZ7hKAmuUCCETxLdS5kNxwipLWpaFKmVY9j7Kup4BPG5q8TtUJJpeLn5t5ejocF3468gDQkvmmW6",
  "key11": "4fjBghdyqjfNoYhbU77bkqzQsgQ4VP1WcvDg6xVN8ku3297yng2MrQ5nZvH7NRqQ3E2xtm9zzpWyj5wavneBEJXe",
  "key12": "Azv5RJRMWASS79PgB9jkjAb6vu6pJnHgxcAro8B8gJ8W4YesD8Np2aUhaoNhNDciKZKgUfE4tJoE2L2mmvPzmTg",
  "key13": "2nu6DGPQEZztegsRUunmjwhMxJapnpqHwC9CRdBNdsWRsRHSxnxZy7cfuZNXTWXdt7mYHmQxCCHH64uTLBF8VobW",
  "key14": "pUm3JgKHw2rdWX6UZm4QjPiRTEhH2MW5fNKEbaP4jXWLNvccG5xEnKf4nL2k4MCjcNLfY61EqrSw91wd46mBexS",
  "key15": "3i5V6uQZQDfiB9TG5SshSSJ6M5BeaYWDFRNe72SbjicQrCg4kSSt2v1Fhd9aZDB9XGPRagEbQ1o4sDLJ5xc7ygMr",
  "key16": "m41dxjXdkoWqQzBweEqJreSWXPvu8HACziJ6VkWwaRFAcrnE4btXFr2ck3UWExm4jngorL5xy9uB3mTBoJPFt38",
  "key17": "2FDNgz9ig3xYFvyfrbV9oMvv3bmYy6XfFsn7VQfS6WxupqM3khS8BaQVHiWs9xzq3jZNq3geN12AhNVGf6oTjruR",
  "key18": "25kAoHXhL8sqh4D5to3wdGkzJzh23Y7fbDug5WSMTP7yWS85TG8LXFEQBVB9yEcdHBZnLJ7Rg2yau6LRW4zhTg1r",
  "key19": "5owBabtjVsFYdSQ25PvwcMNuoNAzQcsXDYKQY1vhytFk4ak1L7UjZVhtAy5FxQ5WxdGX8MrjDFrr3sS9o1MwAaeU",
  "key20": "2qzfxxhATmbU8cs7Lx5ucbDizJC3CRY6Zv5xN1dzwD6e2x2VXh5xvZXBMdDwQQ3n2ktoXcdW2ySZ8GkJ7XnbL2xd",
  "key21": "3xf4MEznNH2hbVtyrdyeD2R6JUwr7Q9X4exAzfHJCKkvswSjAdNHs5cErXFgsvNVW24BSc7qbVJVScu1CvWwukCZ",
  "key22": "E3gCEf8Amw2QhQoAsac28bJzs9zVfB5qrMVuHZxvA5TD4AadNqQDhRi7JuKhZG9GnkWkzVcFSd1x3TTf17sYHf8",
  "key23": "4UKaWzDQtJPC3tBCRQSKPJtDfAG16QNHiP7UHqyrjRZhUzvCUZMrnYKPAnYmbBMZz9vYdY6zTYgENUxEkc4hwz2k",
  "key24": "2Smj6hnjMVp9Bzg6C4mzWZ68mBu92WWk1rh923CYsJZTivmAYQDNqueBATFjUJCtQJRxXUTLFYoVDT8hsqPNrmv6",
  "key25": "577xEXHt6JpUXbMobE1KSrqkQrxXD7xFKyneAiA9qTAwP8LYfjEsds7P811EtNbfqqF84yoEPVQXdUwRJc8pmFk",
  "key26": "tCzbPxWRUpovkUqhpqqQ4HfiBTDG1FxYbSpccckkcnkVJruxerQQ7P9jYZmZv6i6N7JUdiXtntshHK1pYWzu9Dr",
  "key27": "3drsc2hguchBeVvismGZQaKxovdQ5RgAAUvSyPyG3rPtQqbzR1E3sMGSxnewN7qoDJcq7xweKj1rAYznvUXfBSi1",
  "key28": "21muDPsXm1cSqj6EgN4Kz3oDFDVs8JpmcQYFbgwcBJkEKg74sXjgJAbvErYKMy3qZ6vhM45GWYoJnxx4DrRs9Yqm",
  "key29": "4cK2cxN6T3oYtmYMxh8QdK4uVTnWpjrbXeztqrDD6amCri7UkaNewTZz9JuYQqqzGrSNVQu8S6NsM8LrsdTvKqLB",
  "key30": "2K9C2J9LLc1d4FEAviscNiY9FGR8AEN5NcdK3TrnkJtnb14rPiUjMagW6P7SHjhdq3GxAiQnHKvdUBhgpTNMvVHj",
  "key31": "4u53tAARu7umjvZRDoFeW5GPu3zzp3QLEbwR4uFiBT4sguZu9DaswbDeWn6ZMoi1vibkPxeJJopxTGmXP7CP84i",
  "key32": "mFyCZ2ojt7BPvj3eT8HQQVqTKYQEDJDNH4nNqGXNyMUMKdksPrMvAY6Xg3BmXKotucFZv6hgXet6QQPWpfro4M9",
  "key33": "268GYDSmTxUfFhF7Ehz2De8roy8VcbAREChYzfFb3h8StdpodzayYgvrcFMHFk6yWHWH3yf8GccyervUghQbxSsH",
  "key34": "4qjWh4R7aR9R8Zqpd4DxPruk3hTB95LLh83q8qw4vmNh4VsN6De3fUQkVn6ToNmopQq3L3TmxJfew6pPgsgF8BBb",
  "key35": "5BLUZreqb7iegiuQgZq1GBVQJBQmAPQMDbyKN1YznXXNiHcpiNzkomsABxhicV5ZQqxohcNQz1jmSRrgrg8Ri7fp",
  "key36": "4FM9djCNyYpm6RPAhCYNwRrWQy73xdHLroUDFCTbfHEJqq5Y7bRSTaMStF3J7iStbtUtAiegrSD4rSh6LvEqUxGc",
  "key37": "2JAQVyq3k9EhFdLXHxZ1opq86aUNrGnqY4txEj5AbagLs7e3k7VX4j1iZJPqL7XoYRe9Uk2Kbf9q1TE6j7VokH45",
  "key38": "U2vDoQjQUV4D7LyQf3T8we5zyoe86B5Tqu8xHsPa9e7pCUR4TqCmD3yhXgSoZouohQW5JAcsyf89YXdSsTwKZxR",
  "key39": "3pauTDZ2DVnxePnF8T61G5uCNKmNxYWQG7nab4W5bPkWU5hPGN8kPM8GiiXH7b2wipoDCTLRjqHpf2RQ7xSJBzdi",
  "key40": "5LPtPYdjJQntvW8EcqjLkcn3BecgxBj5AUggzsVcNCpJSTWsBKbFbmhzXUvMagfRgv2uLZ84rVaiWTvEi7SdCyNb",
  "key41": "w4hZ6sMp3995e1FB19ZWJWfr7dLoHf2WXuB9Z26fjKbfu7fzKUavpXiUYQvBx3UkLxDWFYMwrcnFha4R3SAVFGm",
  "key42": "4NokuUkRGg4EoyeBg5t7gdxaq7dSJdJy34gqe3oycjYWaCwuRF6FQMtccUn4GSRLjgLukWkdwVToNPoyGeqjQQxM",
  "key43": "3YtxjhtbpP8Pt6TN9NGq7bfwU1Ri9XZt86gRrSqcRh2aKH1ZTQ3sVp4ndC3VLda3Zff7EdvNUYDkxZG9US7jnS49",
  "key44": "5UFXFVCAjvDNciTr2EJAM7GRnBsEEkb8PGNJVgmKZDxSwoowyPHqfFMT68RxEpRvkk5ckMZccYj1U687AnHym2do"
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
