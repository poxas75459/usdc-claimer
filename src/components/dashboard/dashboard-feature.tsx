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
    "3GmMGwLU5F9y3fKnNt2x9ah8EDLPEDAP6g2Tb5916eYqXnV4B4cJoxv2umc14Wf729jvxsvaCaHpGFXZfzoNk2B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nwNEjrVTEZ8sb2JWjeUsHiseF4EhUe7a8SCsojNRhnQKTBeKen4DeGekzHxZpQTXvV71VX2m2RzEN1pB9TrKpau",
  "key1": "3hUQVCNd14GnG2F76xZGv54xfD3XApxn2FAWzTReDRVSDTnmF9utNfT2EqaXER71kLQXZk5MsW79vYGSe5x7mEha",
  "key2": "F2Ffsg6zyLdjzmaBrPznLqEHa9DEobGjzETT6d4qdGe8in3C7Dmkh93HT2DdAndQdJ9ucEKWJTULCVqCQbxreWG",
  "key3": "4Qy17nAKnynp5erq67fs15rQFFsAhrW6sgB7sWYBPNEkYPLo9ZtcoWBjfRUwbZNTU5CLWpccNG2vzQKdpXnZsZ4Y",
  "key4": "3siGuQDnuhCWFr6yrYVfL5Sy4bY9Xf9FbCYjqKQwKURkCnwtz8YcQYvRxwKaA7W4qbApo8WDuQ9dG6Chxb7KfRqL",
  "key5": "4xjpdZUYqHP8WC3zV17NBmwQ4uWjkNFo8UGp86mYw4grsXBp7qRzoQdrkgqBrPCt7aWtxj2Lp3bNbVaLGeLKFiMM",
  "key6": "2AJcoE1Aj41wbSM6WS1ZZwpLaS35it6joDHEqKcYBrwWFZUxyvLLjBMfXyQh7BhY8hV4zJPkEX7Pj2BT26EPRSKM",
  "key7": "2abcyyrLpj667ejNZ2LiPBGUTRtBzV9uNoS57GABLgesuw8ApeFmtNy9MuErLVa1dnyUBYX875xXk2kayhPRwBJP",
  "key8": "ygwWz79s4qRR63wUei7GCxEGH3Am1s68NzYnC5f9XRRxUPZ96qEMstxKsfA31ThNkMF34DU5HmLBdhVXusKVDbu",
  "key9": "2QbQyJ8t3twPs5gqfYQf85keYKK9uTy9VpPeqKC6D3oN3DDvzbQ6QwmJT5gJjeeUv97rbfKQxqvBpu76apXvDonY",
  "key10": "4pixauSxqqGyfLLnJZ26jrBYkaabdbmNa1d5aQqrDAL6K4uBPhZiHasdTVRo8gYkRRzqDtkhQ4xj7hSGQ3FMZYy9",
  "key11": "4tpsABbzmLLRAznYPmZ22o8qBL5yWaSqzE9wVRdW2QGPPFDkBogkmN52GqaUyJChWnKu7badNqu6h99CXuArAPbU",
  "key12": "tvU7ntYBH9XjvoBV3BxqBYw7mzKUvhPFUQqqKpokBVxTDEnsLPKo98f4PYWJfqsaJpUvuv7abfH3KkuywtSycVK",
  "key13": "5Z7wqeDMbrGKpGYxEECEwew3d7mHoTGjZwyDDN6uZti2gQqGq8ycstmgnX4mBuXpLp3MkHGFdnJwohDbFkVAq9yf",
  "key14": "2mGKmuWxSeZdySzRnvaZTXDBnVk27PfWjP7B53qHRztkBoWM9zJSWatoioazBJT2qfWNgg2cp3g8iudTfqHLi11j",
  "key15": "5vNP6ocFwDqwdstUAxXXz4yC2smWqKC7QUhZ688jEzkNiHXzNXj3YpqpBiCwbuBtP4w93oZ4mTNVsUk1ou7sdN5c",
  "key16": "7RrL4g1VXHMriMutvXzo7Bkriytj5TvzMRjvtmUfDLJ8ZWqFLw7btFDm5Fd93M5BMMjbubvSNrc2EKq6Skos5RU",
  "key17": "4GXxRFvuqYjeALUcxCp6XapbnFu9NSUAh6ULczMThdweqXS96hYcBN4jWMAA6rQoQVoXWcy1jysRvTUg1Mzm8SiX",
  "key18": "3Pm8gC7r3xhHwRVbEtb5Uq99GFaR6eNAHViKw1iMuDFNQcU9NcLfCxx4QWYsW4qCaTHHuSejXjF2DbAEquCf8yBb",
  "key19": "giaExq3vbTEscoYhF67ckaxismuQpQi2qW5zzt6FF8FgWeYuhdT4M2599FSz8ChywhGrTHXupUoJtswF7od5124",
  "key20": "4Fqq3EPwbQ5mE2EdZm6qqfSvT5QrpMy16MdCaaX59ZsuP2a7qMKfKEspo5by2qknk1BgG5MdLu3VMt6LWqJg1QbE",
  "key21": "ou39o7zuWAREix4jgXdTwpwTQJHq5KSu1PpcMno3Cz4M1vVmJ6XdPeDvwFfe4a7veLQuKa3de2UGqgboTfhzsnM",
  "key22": "4GwGdTtxfqNT7f9soUKZz8VDDwdK1tb9KgrUu3xhT1DsC1Sk44NrPjdApeLHpcb1kdPpC53RjkSQVqwenqEqP3ff",
  "key23": "3CqQgxxdG2U3T6jG9sgZAAukyYfPavYKHGCpthu5GzRPSqcUwPYpEqzFVNisMY4jPVf6uRYnWxxohEoUayfitCnE",
  "key24": "2mhBDbUtcTZkmoiw3s2pxoamPoeriEZqdLQDkz5djMbmCrA6BqretEEDYHtSzXcihPoB2xAgbja3xQzc2UBRyZNM",
  "key25": "5j7wanQG9qi7rxaRZmVF6jjKWUNq2ZCRFVGx31WGfBB7RG3o7pPCJ5v7Lw4tH4KYwyw6RzCf9iWpod9HKEMZYoi2",
  "key26": "486h2e9HZ2DP78Y5waEfZcLoyEGghUgraKDePxziqnwWEdbpT4pWx38ZDLthMqW2sn19NFheCAxH1HdpiPE54W8E",
  "key27": "4opiBQ6EjLgk7Fmss214MHJmmcY6nqfSA6SuwWCX7sqfNu3ghphKNKyXDKwpTaQCXnd8QBBozC3efasPdJn2x5qm",
  "key28": "KAm2H9fc6ja1Tn8f4KfzCJRCKS9p9b5ShhVHdkrEurxG6nrPsVmKs1zZDJPq8Kd1nqxoZ7SyuijM47Zxg4ZkWAC",
  "key29": "53bzc1cTBE5AX9TXYzDmW8jsQDMb2YQjK93Xkz5WBqeNC6SrTjtxdUmuBVBQyu1h2KvK8Q4Sb3MRJom9fg75Bpa8",
  "key30": "GT5B19HjS4cr5GgC9YYBMWRMaWmrumfk83Qus9EfZXppSHETBt5rzaDBVJsC3VqzZ21dctbNqUZkXZAWamuWdWH",
  "key31": "3U54fud5mPzKh8qSfJBaT4sWkcBGABSrk8pZTkWJExJZh8LtwF996YHvqMvfhceoAtxPZZ5GtgbC6rwYSSA2gEvw",
  "key32": "423c1MQ5VGiwyCBMsQA1AFr6yj9gaiS4JhcAqXGvyczG7Xa2ZEJ13CZmC1zHyRnwTeJMWUTiNZaT2gGahNVfhNd8",
  "key33": "ejQ3nAFuFXfoUSfXwbpA1iVaARh19fipswPSS7usm22yFVExBBMkx4JYX2bkQWCUAcyn87WsBgeVEkfcDF7SYC9",
  "key34": "5thrW22NxAUMdKz1VN5tNiQYNMpgsj4GEwYyLWbghAv9SHR7eiHvfsufYMZEYdJgiE6jZpWy3pBE38qzikUEixv9",
  "key35": "5nsicmQStooLSw8bB8nz8o7rQicFefXwsdn9xToEMJY6T8EJLLETZyg5eYWhSPpWD32MpM5XhCUTuiAsPqZF9j9p",
  "key36": "3AXnshas59DrEP9XnDxEwLxxvxWfVFv1LPYQyd9ovcHSqYqTT6iDEJWPAKjdHEU3ZgbS2y6nbYHrdTnESbgmvLCa",
  "key37": "2UVqDNe4FrdZxTmYX6kayEw7v7CR7kdhHUWo2AQdqeWSacKwN3Us6Na6hWkN9N7fy8qKvFbwBP14A3RNJh8FEMSL",
  "key38": "55tHoEpaMzyxWjuvFEGHBRm8UQ9fKuWP2So3vcycdrcYKXagCAt2rFett4XTkZbcApiGqQavr5vrUfhoYbkgd1zi",
  "key39": "5syvAo45BQvDN1GwD9wTSf8sK273PVydaDan6wR9agPdS14wZsQqavhaCT1nzZcvu1xxPBsWhCC2U74N88dyE6y8",
  "key40": "57J7XAZRHvLh4ixXdma8LdeZ8b9yawYbntDZn1nh6vHbkQ1hYAffYDF9T9hNWvBdAxWemC27yGz4DpXdtkqY1Fjs",
  "key41": "3c1cm5CTmDWBQzrnedvXq1RnHovcRQJBXbj7YDoRbPz6vepAi7ygRTSY3gXcHxzS2RgG3ygrgyd364DzMCW8c5kP",
  "key42": "UukoeShTvVtGvkXNLKsRXe8wMLSiJAJj8z1JSkV4K5GTyq5q3QB81abutWhLZHPktmPZ9Gv2pLjtckDnxT7a14a",
  "key43": "27y8ob9UYKeon6Ad2hao2qQu1QssDm9qm9YxzRTTed5QsadppQbzocv5yzN53pYrFwWvALdxfh3baDg2RjgpfWek",
  "key44": "32Bz2WhEWASPy5QfcNwRvXZgNYCXjnRpXQ2AuNHAJYeAAUw1YjuHm5ACEXkhrM7L9bayQr1UEvMZteKkxPBA9Cfu",
  "key45": "449yTubKubJfonCwev3oZqwyjuhy3Zb39zi6x3MAiBmsRYgf8gANic5Hap64e4unPnfHPptpckWLH96uhFQ3gU7N",
  "key46": "2DLw88VEE9BLYVSN5Cg3ibGjaMcZw3KMQH4iAFuqobY4bBHWhCawegU2JU1wUQxVEQs314MACEKvNZD9TRuXbiTy",
  "key47": "2RrLv39vv8cFwKyLQ4QpJmZ1ogNmzLxF9NSaPzcTHw9pu3unTjNbxW5HZN8M27sm7esmj6s8pUgkyGw4cVKoYpeT"
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
