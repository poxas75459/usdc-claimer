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
    "ALup4uPbpxjUz2JMxPxLLQRvMuWf9qxBAiod6mWmWFPy56yCQGQgCxdK64vTw91d8qZ7tQASWQgDU6F3E3xu2zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PVriDW13P1if3p4DGiRCdDpGaNpvhwBiVfQs3Q574KeB4ixESy9WvLXPRfXwge8K1iP1HHBCWn6DJyWG47GQF2X",
  "key1": "4jyQbDuFZhPGrVxj5AnLFs4epw5fs8rZnJMdBYSJahyWKqXycDQswuFW2HNztb23r7N4PThvH9ZQevzLEirj1cUg",
  "key2": "4qN4fTxdZEABCr3nfkdKtGTsSiKGcD6X2ifnJR11dnjYt9H9p8yEJepvNhAQi447wDnEgVtZfTmnm384skLz1GEY",
  "key3": "3Fp3DaoVsp6P7xFvRCw7LAftr6eBpQGgX9KcuFBZfpt388DkN3mu5VtXrr7FCcrYrd59dA7wkMkEKMBENCZKo7a1",
  "key4": "2RpuWBL5L1uVN6jhxymNfu9n8MovrVparhEzZSZNJixXCrAHKYRFS1PCa8vRUu1Vv4fQWJc9KV6Yzsq3SDDVFEZu",
  "key5": "4YkAYsSE4i47onJjWHwYx1vfbaFueBku9p1YfGfKEXtotMSu1Sqb6UXoXscTeLxYhEKVid7EKw5HREkxmrz5C3kf",
  "key6": "214hofWvehpJhqePf31XPnkoVgqmzYgKqnrVpVBQkkVEovbKRmrVSLJKLTjcH2NefZvQe5LFnGYK51g5i63ThMgL",
  "key7": "2FtPfM2eS26Zc7KXguooxsGsg4GQWxGWeoceBBeEhDWwu6AEhUautkawiy72dpwTneKGWMJnmSWqJvgTWRTkkj7",
  "key8": "4MJcQmko71Kq13vki8AFTGqRo34RNVnBEXVrJ43Wff1WNjagWaE8mgbXjcmm5m7XHvdZ2C3nhAoUpy3gUNRUpSH7",
  "key9": "3Cmqzzthm8ayPaVQLb2i2eJUVG87GhARAgm2pvMsK1T3YVDoqoMytjJSveD5MmFWdQ8HP7iqVDYEyygz3Bvgc7j4",
  "key10": "5og4oSmyvNBHPSArWZjjfinLCGY4WqskHiqNFpcjBGdB4PJ5LXqvQaH1EgrmHSP6f11zM1RPPkM6F9qYPTpzH16v",
  "key11": "4j3aipZSBQk7HbHRnEYvT6D2eiSuobnTDnekzyqg4o4LnmH8WEiASsQw5eNFyA3yeFEPUSeQiw9PnVkbQvWRKFUP",
  "key12": "3sQtbQy5eZPVwJsZRiy4E3zxBfZXyYSzMos5tPUbuVgB4sydjEsVe3f9nFSkhnXkPc4n7BagkaEoFtjUyt45Fqan",
  "key13": "2pTuYRk1QjQJhZY7QJxTxsDGDTd25GACZ2rMf6n2Gh2dKG4hU3rVFRpAqw4yomk9oA4GPwXFzZZ3HurLvPeadLHL",
  "key14": "mqkLqPvak7SrShEgRrXptYVnhi5gi4SvC5jAeoYnmaAjEjxRKLciCjvwcWhp4vrXKbnAn2uSoT2sYSkqA711SG2",
  "key15": "36JMpCQX5iLYqSzDfQUjs6UwnLkatjNaAwo3JxEbQTeiTCL4bXDuWMSPtFgzs8CvVys7npzYJjAYRkdFZCeVtzj7",
  "key16": "5jLFWJUvw1zTVvwgdULQa886jdGM2JJ2zEStpL4ZgyJ5bStzJVi1mehBSyKm6sKDPpChwJUnHFsDEwbKPCctz5Ai",
  "key17": "3g5fwKxJHLj4CCQ3b2nBaowwVejpqBoMcsSvUTTySUQVuryc4iC1dFuUWbgfs6eAo4MY9qvwHT4cD4cMpTsr9qKC",
  "key18": "2Tg16TEZR2M5h8yUtxAzUKwEmpCgFavNMt8KHAMV8d2YkfAAmR7VJPVhMgRDWLUE8zfYrN8j9V5PhCDtJRuvoP1E",
  "key19": "BxRwHuqupqXHaMT9ueby9gjTqGhDGAYTQKufyuRmpBNBcwRnaM1ysdaepVovJjVNTCJzedR29iMSRsrgDp57S4P",
  "key20": "4Fcr25uezGmPNjVNDT1biKD1tbjPHu2KX7HPKyfW8LLzVq1q1u1mNAHd7riq7qVAjFnBNnNp6G7uVKghGyfd3Lvo",
  "key21": "2XyoFAHaAxcreUviAcDTwrV7Zd6Yndnq3mC4ADEqcJJmmpsGiLvdaMpEbjccDDGPhMZ9b6ihUtCcbHjVbBc69Rzs",
  "key22": "2vRDrv9zqB7wAF9GhmzA37ymHFhf9do6vcepsRzLf5t1kNXgVk3CP5nFyYREH1Y6nKSNzxiJA2zLwjPohvchYJau",
  "key23": "2in5YPQrDpWBghthbAkGhG8BVY9yzJ9eM6w5MRJJE5iaCsM5yNdwYJFowE7g6ypUFHfV4Th9KPV4f96bVBTP1mpm",
  "key24": "675Md1gre9ZDY1tvmHZE4fuhsAxMsSZ6jUnTEBJqwDAgTCVJqH9X2Ys9ThE93CcTXKa9mkFFzJVxTkZ8tcB28xKh",
  "key25": "3yXNgery8zWYrTppgoFiut5s1knouLzt3ZYpFTsJdZxpUuTh7orjowCRhRHgkeV9Y44LXcBiPUFBhjucX8y4Uigm",
  "key26": "2tuj7BkjkhvEhRjCqGn1gKkmVQEiw7Fr5X2knZLYsAGawd74rYkSMngS7Bvw7umAukTLjLvSj85Aw9LyzSgrHQod",
  "key27": "4RUYZVrVYDKrUfCnamrfFNspQXKvtQeMXoyv5DuhKxcbq7YpzpkSGbSZLWhc1rxnZHZavUUChedoJkHeoNZacJm7",
  "key28": "3rsd2DpWWorBFThppseqveUF2mod3FVUxSRqpoRiadTz5Yqz45DX9vKn1gy29Z1W2GDQGDjFHvZpjKLwBPbRPD6Y",
  "key29": "56dTg6y6yMeJtPiUx2Tnf46f8ZmunaGs6wRtbAkVxndoi5NgrDga58w8vMS2peej1WjxCmVHFQ6Dx1YMqY8JGH4a",
  "key30": "pn8hxE5sHGQ1rBSBnvXH2Xx5skZcDxuo6nF1Ynab13jGfnCYnyWPEKkYviVhwwwNED9PJEx2nxp8tQ6Bf64Uixm",
  "key31": "2Q6VrwWcSmxBGnqNzpg2k2LDLsDe7uJf1WruG8FoZB3wy6YidxVBPCdc2XQht2p3EsrJnePypp2DmjCQQFxT1P9j",
  "key32": "5xPmUFrCEKBd7s4BppBdmm3EZQcvwy26FFSYmKh8LU6hNvv5e8V45vEKzQpnKLnozBzTAm5rV214HvCJ3iKqyRDd",
  "key33": "4ZzoD7UprsrZLtn9MQuXLGQPtcjMUfsvN3w3P9sCzq2mHNDNxWjhv2tN8UGteP3QEovyZqUaUPDe6zBf8sp6jtb",
  "key34": "55QJWKVvk2y86PNKkVS9LF1zJeFPgGZHkXpK28QRstHRmbukNEPMLiPogPeQ8htwQAp3JzL7MSsrP96ArSyNZZPx",
  "key35": "wocysPWkotxjQvPwJ4FAwFBz4PAUP3AZdT61ZEihy997qdB6EuR2fyAxAUhJqHf4Snc4i99gKpwYpeYVBUHctMp",
  "key36": "55kB7vzxs4LAFNa1dZ6EPmRi3BdbCbwk6t3my1edqSA1JKefHPzG6PLPew48LYfjMGemBS3mJ2VJVD1TBMLoYANN",
  "key37": "3tPv5NctqymCXHZuAwaW3adEmp6YHH4QS9MVa3V3sizBmw8STauMrYufitY7N2ebtQWKZHVBNw8o84whD5KhL54J",
  "key38": "5kvc8GFcAYUoB6SwNnFtPReWnHdKHNKKCbkHJjHQKe2g1vqyWnoXkDyvkAauBDyiFMxr2i6RhD3CnAdm7Xg7DNx",
  "key39": "2nTFjZ1w8XQfMjeXP7WghQnCCyZsbQE8QNs8s3nZSqT4XxKU4ifiG4UuQRYUNHGJAFZ4ipNCuLWERGYE1KvLWBma",
  "key40": "41vNPvdeEvbv4uQkb2FLQyzMRtc9Fqa5pw5yPSJvT1r2jvvWB2rKCNxKKREAUhJAuVCCQUn9gbqTgKPHrcAMVFHv",
  "key41": "4gdZCHgCaVPzJD1AQXF9k5wdxPMGyYDMJiW2V1hWFRA4mydznL5z6f6m6Pdi3j6jowRvsY9T9XHApaAxJTFnJVms",
  "key42": "4vphaXxRnHm7BK5qF9idwDbgjjyMKABy8NYJSYVcTfq9JokY4iS1WdYGcdgFYatQhRCoSpofd5ZRCdW1nG9YLPjq",
  "key43": "3YVJpWhWJrGyoYHaiYj3vSBRpdzm4zQB9UwAjV3EyA1kgFHaMQT58Gade19kH7rpoLdDTLP7UvkBDSW29mvhWGpf",
  "key44": "ec7T6oCsZKKPqR6XPJuP7yByawh3MxftQyZT86CekSRo1teNg1j7jVDT2dTGWpFuanf2ouM7zcLQZWoXF6asUqf",
  "key45": "4ZEn6cvneFsAbxTuAMgKBAC9BfYmbdw8sgPhLoxJ4KFgBqh8MH168fyXtPjb4W3SwkWgKU5k5SqqRGDG9oZtoVJ1",
  "key46": "2LyYS98PHYmNLwi5ziA3cynKjUMMDrtVDesTaSTu1XFfTQEUczwhv1rHmw5BcYTVCbCf6NNifjhssRRxQHExCJeh",
  "key47": "5buVyWEC6p5cdFR9xhonZi9tqnioQP4uxwc7q18ba4zFKqHXoCJrStG3sZfzzJwujwmDdJB2JHbZRhX54Ya411G5"
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
