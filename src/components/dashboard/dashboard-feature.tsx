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
    "4hFtU5NjpZeKtcaQufBxKk9LQk2hpTsXiPs8zyrbwbE6HyFwo1Xtk76emFcVdbLtnpViGBSE55jChV4F53EFWKzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b25TvPpeYkc6RkMFmbKgtptFVkf41UV2Zyq7PPMNdLGput54p2kpVmojnjhteAb5XUWpGahNLne9ECoNiXUTY6a",
  "key1": "2rTjBex3f8XStWxdYK2DUx26c9ffvMGCU1ULViotPx7meRviMtDG6KjEa1gs4MT3LB8Jwe9ibLGjWLzjMyQE2eZg",
  "key2": "3JN8teKqawgKiyEKCZQRgxZArPzg4y3xjsd3F1vWbQtLGAz6JiipqMHXn1fFLN6p8uKgMHKRb34k9qzGMqq7ucuG",
  "key3": "3eiLcHd6pj76p3mE9DrheNqBUgyaZgT6JbuQb9qD6cYbo2e1NtiphbGAvcs9GFxrk5dDJo2ExAWguXXF3gAWpaDw",
  "key4": "4ida8drTvf1PLWn3GkNXkbLfGUo2jQ7wS1m2SH7wvZZscpXWMxB9Aiyuy8YbQe6Jiq7gFXJrgkFCKNJrwNYtWqnr",
  "key5": "254Fe2Zeb7ot9Hk1Dm3CYpf3sXdt8Hz8AKBZYriFUqJ33NRqiuJ4Av3ECVcU6GWzVLf4zvvuDb9YVHfqTF6e58rJ",
  "key6": "vniaj6rMWu8kfRwjX3Vexku2QQoxwustwgyku7pTc5HcDsS7abXGPHrKwStPb3MxJbZuVtUX8f5TyN2yJf47Byd",
  "key7": "3ykX6TkQHGRnHhGzh6PFqYMDbndT6toKmaJYoyeHnFuusFv791zLoC7mae3pVSvtaNepqy4vznUKh8SMspLNdbMC",
  "key8": "3j1Lov4Wt3eVVcQEXfvW6egWQYC1hYVsX4mdtwapHYTUhCQotChDitimK8Ruup9YaLBWk5JEBSCRxminCx8HxZdU",
  "key9": "4mLJ4chKzkGqeyWFA3yVqpkWsKj69UvzxeGcA6S15q6Xy5vggeFik66PG2vLKQ4TBnXnTuVpsjsGxQHRzrm6kCCB",
  "key10": "3cuRrWwkUQ1viKheYB3vb3HrURFngBs8LtxV9PeLsEykHokXwyyC9bU5QpRvUBC99vL5kDH3fXEFcnBrCVkHzPe1",
  "key11": "4zWqqQaDQEE3MJ4DSoHZXMSGEBoCLtVCHWcTrH3c9YdmuQueDhYb74ixnvEQJpKpMfheubX8m87gY1ErCzmdXUPH",
  "key12": "Gifh31TTmMksjShYuRPUcRsHJcHf4umJnv2f6ffRqaN8cQn7spkKpB6L9WhMdGo8un9G4Z8PZbxHDXWdJCZQyLX",
  "key13": "56oTJZoVNZuwYiXpCxRfheHWsR7gW2iLRWbQj2pA39u7QBqqHjQ4S64XvgqppWhUREizxRyxtRfTmUhNDCrnbEVK",
  "key14": "4yLXRuyrfFuxaYiD1CjZ1AJ1FgUE3UA3qMmwixumjwq5Pd4yCZnvvqwmZNGCXxnXdueNMpyP12Xeakys5Yop49ug",
  "key15": "2xiG5Hu8ueSsjFD2BrKjqYg4bo1f8MzEgAQv4QZZSdQFCNPeRjU7zyRe99jvbnkQMxLcmesuVY3t39jrmBbcLJqD",
  "key16": "Ybhu6WWCuEKcaMc3zsJoLM89pb33YcCXXN7xVtPusUU4JxEDtZ3Qpiduc6wiFTjEMixvW1YUyghj32aNyrLKzV5",
  "key17": "VKdevCRtGyJPfA3yH9qKjRGGfWYvbigJWoXCYYcUhWVUwMLe9MbgcefJtiMsseaPLrdixpD4yo431BKdo2HBWNn",
  "key18": "5tMkyof8omNomnvWWL1XM444wYd2369KnUnixYqy1F4wqJ3kJqstHCsEaK9zEk9JkGnEtChzHSgHP4dgJud4YESt",
  "key19": "2yqtLUbTv56KtU4tu1vYcN8equeYPVY5dv97egWoJni45qNMQaHShQmmAxyDpqKkqP1Au9hbQuEZNDxkMAudQRyZ",
  "key20": "4GzwJy5fH3VqqRkq7tLn4uwMkp2tqSa7H6BXZjZtD4uEjBVzPTtndmSnoYKFMTsqj26q6o2LNscjMe7CZssQK8cc",
  "key21": "3q3TGcatHfVyiMe4SUynZdfkuYSEso5YANFCGiXUPun59shgM3ryTGYbApzh74TpcFHhAUBgMgn6q4E7bTBqVk4A",
  "key22": "2KJrGcai6kE2fLt4Ygxn828MAx7BFrXpY8VXLfxnDjik4VtpttGbjRjnLj2eNsJ6KL1S5Wf6Xy7jT6zzPS6ssuHy",
  "key23": "4thkC4dVBN7rXapRPGsDwdNTBj55mQZCwheyRvXt2pgGVauAn4uMHuZR86tDytwVQjCr2JCHkujZixGoxQD7vuSK",
  "key24": "45rCR31s26KuhMtK5euVZGYUWGfNuPVdZ7sPbjbwmt9tj7hbTmcoA6t66FubRFWGsjfeyFEfvxHZE5DkbgFfoRFU",
  "key25": "28EvZPYpoXhYDyfwYqLMQYHgq6UNfWBTLWH4AdWjXeuBqmgWeD4dWuMTXL9hGcA6BXBBRNRwKLVJPvPE9a2yh4DL",
  "key26": "2VRS2Z3MbBvj87GRrFomFL8bYEEwsqeyoHY9K8RLnSrLgK7NWTx1KYPzyNJPpDbCEB6TSa67nk7ZgT6u1Xafso9j",
  "key27": "56544fPvjFufT4agaQHgjKeqM1kWfW6kg4vL4VZKRgpZ9rNRpybsM6dDGH3w5Zfs4h7qwH9K6h4A58eQVU7iLtaN",
  "key28": "3LrugaNPfpxLYRZYWw11triRqFTsFbJwu5NbgZZP25JJyHpbEmVxCS5F4twjG5mKPq7MLS7eWiEjXTkAghGcBMUs",
  "key29": "3EPcrCPj7d8vKWdX9KZ58dL8wVg6oABQjChYjTwJeBnuLXjDvB5FN59j3S4xQgi5e8nKuR6dLGECeaXvHuUSR3tT",
  "key30": "wX1ow3ArS8BEdkwAjJxjPXjj347aqe8kSFcf1mchx3UGzjyGMGbg7f6HPk4AeqGubBypJPZysF2FCnbR7dMfyHd",
  "key31": "4t1DZkQ6aaWmwv7WQ988gawwdKMDQ1jYMpAHEfXqKTsTTbjMsh5bnTFQjhwCpAstvBkkubyEVGVWbjiVeD49yy43",
  "key32": "2BkgdX1MDHxX6nKehnspMaMfvkeBvWptfLhBN9KTLGk9SW9AEsNnVBVEDBm4A2j5CNQDhtbmXd8sxw1n77d1bymm",
  "key33": "4te6wpx5Kqky3crZd2Ggjb8cDK3YCfUCcxJ5AWYyUZ7mfbEq1rEkK5FiGhvQz9YSCBQkBUujgXA2YK1j1JBp5Nkw",
  "key34": "1q32Z1QCK9uBRjgdJx5T3B3nHgnzQaypSTvzcSCAWFscc6No6BeLiGcNRkseFgPbkpbp1sLfycBGiRd7MGycaRo",
  "key35": "3RbtmS9dhe69DEp3j6gfn9rMDh4Y82B5FRD87Dt2ZuAqsGDC6ruBHmYbksWFMAdpLeDrA3o4TUMn8V5ax5nTWXhA",
  "key36": "3VQPfw8C38Ltd2BmRauWX4WZEN1arkNRRBCAZhBHXAp3VDJEKJ7UBg8BYa6EWYGWYzTZchfrtsaQtp6suBaJoPPo",
  "key37": "2Z25aErKnfwHZvPz4UKviJHQgTqnvK99gZRH7dVBwPDPcroAbH9FgL7sjca8496eGWHUaZbjxSGgbf8vzVyCV5mg",
  "key38": "2kV9r4kQ4JEFT6MTvTK9nxoknNQ38wheYRwMYB38ZEWgdf8DMrBbV8qmMTgaNsonri4h9mw2fJukwsq6R7WsDzt9",
  "key39": "2EGdcYeqP9xjAYuqkxdjjqCZtfnUZhrwkJ22CADtfChRqQWgb4GZsWUE5DU3BzBZAq9E9xyRR5awSA5533YULVqT",
  "key40": "3zNbHN18VnuoJLXwfH5mSrKfSKV7SLxEjq2NBJnB71A3e76F5m3yd8X2yaTL3XmpLoTnjGsqWviCYejUHQAQFDGq",
  "key41": "2hx4dpgp5KRDvikZSw9TJRnUi35UDnetpFDpXUWL6o3zu5KQaYZP5xTvqBCrFwgtkYeVhb7v9LThMdrWpEEfUUss",
  "key42": "44x77FD8GAJQmcPnb9WZs9itmQZB7Da6dRn3tykxHGNy7oeCzG37K2TrzqvKtMJj5toj4B8t1SFjrgqbbA1WwemW",
  "key43": "5gsQhzmw5cvUyUaVNMWK5Ar2zy8bwoyt9Ye6RjvA8VjeASBeRNwKmhKKV7MQT1r7EJB9NZ6dg5AnK1zxSvwULpGR",
  "key44": "587nSDzVoiXTa1DyCT1nTzzJh2XRkn5AGrKeqoofCtD5sanFzCVvCD2ZYCYM2QUumDj7yYPjd5a7GMbMJV2TZPWd",
  "key45": "4tiWe2tzSp4qWKfmdq8nxLzgs1PqwxBE2kCjfj7SJog9ZYqb3GjJhV9SZyqHBRrFPMjGFLrX1i5atQxTpa4NgVrU",
  "key46": "5WbWwhbWkLkF9NUasQwW3PqCmyrsA7itMCkBCw2Gh1DcmLQED1rHc6xJNcbo2SQcf6fEqYmi2H2RgvtzAfVo9grL",
  "key47": "3UieCm9xzfdjr4aL9uSvKLXGCJFtc9TDYGrZBbi8gXkiPnKra3Xo7oFtMUNDF9BQwXjTFehKxF73JMHtGb7SnA1D",
  "key48": "4uRyRhZxVZHq6Tkjzrt4xgbeDV1UTfErq1mrEHP28pDetNNSepLukysESVgT9RmRFuiGMu74kDH1gU2hVuKHq9dJ"
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
