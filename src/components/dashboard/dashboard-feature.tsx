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
    "4T3eUE42uRyrYbgXikncvnwdt2rrFyA7gMuQs5FqrkW6nuHzen9jJzpRMMz27vCnBswNBqBkiNJDvFi3w3eE7T3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Xsv2CqEtDg5kWkn4GwgWhCBycXJgJxCYJ9HdQtwvDYrxKpfGNB1BiYBA9B1awABTef6ghwqoCc5x5mr1Fjd2iC",
  "key1": "WtH8JHewwawbEgDm26x9wnupWaeTkGw3A3GLHRpwyU5azkNgqN2DRi8t77hry4VLstJ1Ra1TGwGLf4Nox3jgYhk",
  "key2": "B9nuFNsxm8kbF2VXb2SDhXFzm43qgFBXLVQW75ekChqkWdJomup2QigxpU4pncbP17DTXnrZrXxzfQwvNy1tbqX",
  "key3": "3DmFVGSF6eB5DwqKmv8tegXTD9R5GtAcKH6ZeozbgwZiqghpXk3uNjrn7mi23UXaMJ7ytL9N3hm5wYkDrRJc3gPq",
  "key4": "2rNBy76rEFfsLzTSJn9GTs41pm1AyrDCgPgfXGnnPG7GDPxGEhvuRLTGB7dRwisk772iaZoDYLucopRen3y8TEDG",
  "key5": "2EhkXbb2CAVbteUKYAnw6jfZBHK6uNNkRKTkHM3Tdpz2bsVauYXniwAP3ZAq1U7sbR9qwYmbz93vLi5UERkfYrPL",
  "key6": "WAdvdzjQKeoqftMkX4fzjviacyyfozHeYQgud8UNrAogzT91j7fhF3vRBygBeLTVu5zE8WAEM7BBuPAnPU2eo4C",
  "key7": "3JMR59c8mVXUFwrFQVYe64bxxq2Pr971EHy8AsaJi8bF8RGMS6xrS5pyZ1y9DA2WPtjZgFe6fQpHrBBRtHsyzHJ6",
  "key8": "3Qcx9sh4bxiGEWr8V5cu4SmYpw32zPU8p9b2oMWY9iBaCy8AmpsYmdywBvsGhrBQEd1nybgCujLaXgEBbwednGvK",
  "key9": "WXqQq9DWNcrseM42X5PX5sDBMA88gfYAheFZhpgvZeZQWaHtmvPrzvbjWjpbzZJvmhCcdT3iNg8Qc196xLecgWL",
  "key10": "o3g7JiEFjiVrnV5g1t2QAWHQqNk5q17AJmWDvcKsPQBecnmqZ3jaeTNm8YceqybTNkdJmzzn4JS3Mu7KWGBzrR7",
  "key11": "54aayLEcYRsmEjzGqY3iJnE31w42z2XDHwPvqvhXAHv2r7HsVs8BMj6LMoSgF7YRxsirGeyeSE5GcBWbnQLVDp6y",
  "key12": "67KFZ5y79imyQjB1s2ZEHWPC5LVtFybR9kdk87KRbX7An8mEKKsukqcKNvq5Gth8Xagc1nDoqzKn1rNLpCgiTMXN",
  "key13": "4WYT28wxHUgcM3Da52vRYzK3V2bnWNGm9zwy2qQfRha1bfRzEGGiqh4nmEq2TaVAwbFNibuySpzw2qkZR3vu7sPo",
  "key14": "7g6zYktWNNMfnntrepSxAjXm27UdJDGpZ9D2S86ynqcBXg5gxJCjE6pGcEa62rbmEjU76tGC9ywr8AeXJj7EzEn",
  "key15": "3Su6FCVBvPKNA2p6VbtpHDtQGbqDKCZA8rMvJ4YEjA6mYvfWbcRD367JAQ9bC1YdUHdFFtV4pBsjDqX8MK4o7ZZ9",
  "key16": "54bhrXoJdVo7Ha2S4pWGrs5JXV5a77EkrGKeo1tXzLLxfBSGbq6oqEma426StD8gsHNA9pqY9BzsByUuyprjF3Dd",
  "key17": "2yLBMYEJdB79KNmLLcthGak5bGPRGavVBGpvmrHpQNAtt8xb99J1AFZcCrQCrR869yhbLyV21s3mfuZC7BdihgcW",
  "key18": "5ocZnE9b2WWHuf1aUv6SP7E2wEQT4D1f5Gn6vRjDdfAS1aJufvxCQ8Kz9Xjbji6W4bc87noukZWFFRoNDdGSZkEa",
  "key19": "2yvt2n1KqAqkEBu3D7A7XbQSDgyxiRTgwLH1wk5zihfFdJKjbRnc9PSbXGSbgmBvuF4oMwXYK8Zpt33mWoTARTv9",
  "key20": "53tw7EyFFcnc81WwCq6Ni8uDJvAEGbTdDqRoxJ3v1mRBjazkXuXrNDP89dVYmjNB5cXhGyyCPneoyBzykfcdX5GU",
  "key21": "2a565DzorkdUTvFR73kLP9VNhBn1HXAzrFhU9x4TCnxnigQQw26cdLUxCKoGTnPoPEGt9a386165wTXXXEfx4x6H",
  "key22": "5fJSe81YRCdyJeryuHmaFDP6tvLjjvGjQoYzCb31NKsce3g9ytPDEJHZWDFAm6zXzNgodCSL8mTdtu5vMtpVfiHY",
  "key23": "4tGtvqqqfdAEYpNiZAPvNfJANU95izpNxiWaBsgE6ucF2qcA7epMo39e8bnQCnTLdwH7BpWE5XmACvj4CPTpQDfQ",
  "key24": "5tqiXTqyTN3sUjWYizdpFAZDpWxzVqvDzEeDspNvF3FAtYzJUpFAG1THFHG337KePbpYEtF5euz4pQvAwJbPgvkr",
  "key25": "5cCvf6yWt3si7QntUcUKUXYqjmezSiBPKpZ4gdCgWk6sFRJHXoJz44jW4TMSxVS96bDTFyBKBPL3ihLH1DEQYpWp",
  "key26": "1g9NqJbeyjpTmKRs9uLLi6q98ALZnQvxRChDsfB9EnpgxSj69F5x4jdC3TiSiijMRRZbARofepgBL8mYgGVeyRx",
  "key27": "ym7XDfFDB6Ln6wxDr8dT3yfBJ7GG7cwvGJzC1NFiQfoixfowDuXyH9RHbcrx5LmzVC2YQgxdhjknWzihMQ7xeqV",
  "key28": "3PLUwAFzBDhCLNevCB3iv5kNkdMsb1sSVR7yWjdv46mUzH2NtBUJnBZU3ceNbCFo5Tu6gxRx8cyziCDjsW3EgtuM",
  "key29": "4DZk39mPNB9t4wDzgkqseqR1ts7qCMBVwe1vw437HvCPAsdM8ouxzhP5WExHPHzToFmEWWMis7TPNnwhXgskvUYs",
  "key30": "5XqcyuVwDCppRgFwkQv3hMiVkneoYforEN3hWKbA1UkiwiVX7Kf2vFabWuwvvkG1Mgm7bNo7zcZ4zT48CPHvJCZK",
  "key31": "2hBHDx25Mh6uawNKoT8agbkLuk9pkVbhfYSSdhgxkMKWGde8eYd6P5U9H2pt74eHuYgqa7ye4hPYSQy5bzhimZZ2",
  "key32": "2zGjcNH1vg8aUccQquJqwmKFnHYDcxGDrxCDnUgDULWxTKonc5fLeKXx7AsH9KaMFcJgmhge5VmwGU67duVGA8sX",
  "key33": "KvPHFdBfESsWY2QK6Ui5Eh7xMQ7Cof1PeT99h3doMJW5v9DGmWpMY4emNrwJ8n5oXwg8oUcLd62pDbU2cPqhbD2",
  "key34": "3SAYxcPAKKqrxzBykcC1Uw8KmMZeuHXoeYhajAaRYMMkkNA59jVDzdxKe4GGfL1jXC9PRYcLzmvPYGsXQafvrbQh",
  "key35": "4Q5Bg5Q3ZWBmGJHFyTFxo6ku3X5211Lm4xL8h8BRaKqP4jC1Tip7tc2nAjmMScYKPLH7MJuugL2TVJd2Ftu2eWtk",
  "key36": "e7VMQ86sbmpVSau5BHQbt8SAhPcnsUKoJEfR7h46XCBsLjbManvXZddv7X5hpokhsKAvrzqAA7iKsEcAy5AEwXj",
  "key37": "22aK6UcSSXcKzRvahZNjGQ8DiHLZu9nzXtq7zpaJE3uK4m8aKHvv3eshp1hn6UksJjFB1zfPgc6uYa2QET2dNH6G",
  "key38": "56vrErFKRpeY4TrQm1wNcpVZHSSp88x1UsPKXMBuqpRsfGX6HW9gvh65NkbM6WvJd6YcaGweLHwNrALwYepSHYvx",
  "key39": "28ZswY8YdarpwFRSaVWyNvX3MQjwpzmnX6xS92xsKWDFVsKUcDrjBhacM8gQAstGL71qGA5Lk9yuLJ1T1yYhWbXF",
  "key40": "3qYCvFwqiYSF3mSYdYD5gkpLsfBs8WzzyQcFFDMQNwuaaaGirP3AtaPCmWT479FSugbSq7mmuvUomtmVjAKcEet2",
  "key41": "v13VuDNxKPBqvRihkqCnjmCZ2fg4fRCh6e92AokMyKC5QLpCBN5CuS18ovuMQdPLpPWYpX6yaWvhwfrQasxawbr",
  "key42": "52Jp6FDEis8akaeGPChF1DT8wZvpPU2FRTiF9wppY2zrDJe1rsyq8MgLgxBeTeNj7TWquRjJTo4ngLRp2hq7B83N",
  "key43": "BAfK4ViVxNuf4UEwcLWxbTRMkhi8QXL8X4ejcU5CyWSzhEY6d5iGis1n43j3vaqXVoNUC9cUAveQLZVinozz8Hb",
  "key44": "3syPiDdpqzurPAWAY4utyAark5i8bTejGGhQuNabZWhFsids7AWt4djgwHjL2HaThVvpiP2GVLq2SEcidxJKxp4C",
  "key45": "Xrc3w3Rmcg8w4unppuGAHH1CRgPMRVMLiuLfdDnobYeCXSPYLi63SgzWmnt9VudioSceSf4eEq3XbkebuXWKqse",
  "key46": "4u5jbMr4ia67BPGadDQJ24A4EgmozPpJ5bzi5xsUxchudtBJkZJHmZuQsAZ7LqR8i6wzK6ktcsivLGfdgVEAtB15",
  "key47": "W6Q27yv99vQ5xTBuhcJwgeqrdetvfBz1pCY6MwUmUTr1FJYsF5XkPRU8zMeoJrb8XfuzadrE1uZh1hzxbao1MLM",
  "key48": "6Rw7TizHXNKB1mecPyPSTjSP72czWHbzrKAVguJAGN2WrfJN1coxSdDQJYuxKAG5bHvYCMevtPXpQs9gLLMjMPK",
  "key49": "5uAkabVFp7jKchriLwiEitA8Nzv6n3HQcKp5UM7Ts2SnRXfzqBJJThry68oP1HNPMceYouBUzCcsTv14dNitcewx"
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
