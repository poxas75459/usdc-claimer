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
    "jkWnfzRRCmsidySwCtrAgpes9AAGDLtxpb4YDsMvBKNDcACasKUVDZD3u5Q7S5hTDc6jvaTBYbunoVbtTUZbDpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sRjw3euzYJe3H98Zy8hNhSZpQ8fFPKnLsd73Qu2qN2GDVkzKFkVB86Y76gM7E6AKpYBKvkzWPSYJoFUG2y6UB35",
  "key1": "3rd6dp2tdcPgwRruY3JUVA1vyUe51r1ejqdtj17LdWPgq2FrSptu45A2PGTVZaZ8cpN6LM7bumorpuCR99ffKSdf",
  "key2": "5emm6rEBgLHTgiRaxheK4JYBUhtazxkrDdGE1hLGZJoSoQ2p6VayXH17Qeuh5YyxBfXkVtoEWdXoNsCBCtz2jX4E",
  "key3": "2DdCLVBfRsHkuB77gppAdYd5ahrhM2DZiB7QEERndUUXC2eG4gQa4ifvj1ABiWoca9MifMzrfrSzKTgHZaevRphy",
  "key4": "3sFpxTFbN1bkmsu371eGv2ed7tTbd1ZtEkH8PY51Lr8P76YRMtNy466mr69RWPHGdgevMV3znmKHsFgaRxD332DK",
  "key5": "2aBVdw3pBMtUyWsLopwXDJN5H4yz5uvKakyyB9i2fpTSYjDaKWBbpzdvnJkQcoQU4bDZcghX64uGM3cDcJnJfXy1",
  "key6": "AGkCVLhwzpqoucEBx14j7BB9n3gZaiRHheLdy8zRPsuhw7fjCWjg4fJ4hUeqLXcRxL9j97VjPUVg6hRainEzuCB",
  "key7": "3scfonoJTTkaQMeV2eGWbe2vbLKe9TvY2ch9SPMwbCvMfzDGg7ypCXKXPS3ssfFBqTrzDKDNbuMHtxjnGED14Rso",
  "key8": "21GKSZiZR9tisFMHiBsao713E5jekpQDZQZ486cN8dRcQfvBhs4bjqkmwEARbtTKqkJgdyggPJNQ1cawQBixFN29",
  "key9": "61zXscG2M6qztYDmSX4vXQtjfGiCV3hhmgnDrBHJ5yeLbmbtSaGduZN7xMYFecucn4FT1sBTFToTi3snrQZudf3R",
  "key10": "3JAhpCV8ieYL9w89MdjukPy6BmhJVQotSwaPcs8hkGRrSwiaqBannuCty3fBR1KkGEL5vZS4zR6GfyQ9GpWGSLUU",
  "key11": "4VTAidhmUVXvPL1n3Rqn1jKShKM4UeSFsaVYs9VkSQhYpnnxuRtHweQecRjZPZ2WfWFUrbhdpcK2iHQejiRMjiZZ",
  "key12": "2UEDaTBxdqF3wiZaRquNg26HQYeKdZwoH7eVqXVEBRCTxGoxR9tPWYGgsh4q23ZuGeP81uYJGeiGjQu8Yrrs2apQ",
  "key13": "3XcLGVuTAPyE2uUpCU9vJDFnpuY8pGzB9HRVowSZvv8ZhXd9kougDPyZ6xUoLSp29z5C5wtuNxiUiQQZCbjAp6md",
  "key14": "QWvCWYL5FZL8XztmY7WKq56SJKrfavaWg4tTaPJNRBHm7SpYnMfPJ7t6SZsSs1Rq14ZZF75hjgPQjrqb2cgHfmh",
  "key15": "rmSuWWWDdEr37BAbsUyLJy411tjFs15yUr4DeBRbbmz6hrwYWVTeAwfveRwkU46GuJWwK5N3AJE7Aj4iS7XUGwk",
  "key16": "5WsvBGa911ZUw7upEPM5Sbikyyw7cRZ9TrvMktJ2cLqJMrWem8XUJSLgVUqTH8Uwq7oCjMrkzGLkfE4iahZV9aKS",
  "key17": "5xge9FHXdCxeaT112v72RvWK6MSMTFAZ7tp9wKedtZBNxK1M1QX4TmJnMZTW8NPMUM6fD1HukPhzuAYP7fxYoSor",
  "key18": "4tJu59G3PGWhfvCsAm6rF8PJj8dmX5UH95DjgC8buABf6XwLmPKR9armSMTNwHa3FgSg5rzV4c3qs2UCyPqedtBE",
  "key19": "4E9UEKpLxrvk1uHLLiXuFNEZMBwYpRxdm9fdWAA55PimS8aFwEap84hSo2EvhwiFo1LWNVBYazKENBvc1bAundaj",
  "key20": "9EPrzbuSVEHrTM74AoAgPS6pRrrm4TSbkXzhYoFtTDbgjEKRskeddtwzSzENqJegzjAkU9PvajeW3WQ3B5hD984",
  "key21": "54tcpQodkwUiHakXXiGMh7s92L44ynjCLDe6oBWMbPmUeB8uPJyiWzqPYJznuPB2Cz4avUyEtKDQjTZDxFtr8VLh",
  "key22": "5dUTaqPRjb7sMeVeg7XHU4EzE1Ro3WWSw4jkbvGGBJp94kMX4amWDNRB9BPrbPFoX86cmCyT5iCfAcCJSmwUPuYH",
  "key23": "BUTLtjGTJZKdEEieDSQPBXrLrP9LSPRTVtdANbF7qyWxA3G1GrAaVBS6D2iz4MEUsNiuYDoq3DeJ7QdUYxV1uvx",
  "key24": "3mss4TfaskzborMo7PSNwwXoUD43mhFvXncWS5KeEZTyoV2cYKCFouhR83YLZfUXwEcism4eDPDUNC6A67GB14J8",
  "key25": "9Xu87HE5UZhxDnEPqFSN4wHEDLwRNU3ePjbfBSEkxW1t9b71uxy2nDL8ThxiWbEZYcwT5xqAJ7M3bDFKhVBzDK4",
  "key26": "3yKA7i44d9LphQ7FQrwXpojPre2mmZc6vk29QiXoYm76CRQaUp9y7iZC4cPkCDhUJ7vbCYqZ7DVkNd51zj9ayJt7",
  "key27": "252XS7GsRWwoVRE6iYnfJ3hFdqpvheUKn6c479qwgksHP3xY5KvQWxu68nyw7fA1tjHx7LVFzcqnfhhvnCKGn1cG",
  "key28": "TooQnGRYq2b8twhNmRc72ckor7mbg9nVkUc1Y8gmTXS47qUdF9ZwhTvcRzRiYtBsFzkJXiMyWwQ4qGhcPbatRCe",
  "key29": "3QzpWjv8MqtZPgmDskvYfKdQvCCrTasA7qF15TFLv5XeVeu5UbeLTKeb1hft38YGUTAdKisW9DGHVbzxYvQw85SA",
  "key30": "3DosDkoQAZNGNYJfeBSTkc8ErKq9gQexDMFYdhiPAhxw7oAnPtr19aBKXd5RZgiVRUYWiZ4VMhLLnyLB24uRKpmi",
  "key31": "3mrNxAhj77oXFvKQBZCNLg7MzgDpQQELNANSsFhNuoD5NLqsujYCR9NTtSHbe7ELwgMsCJAKzKa18V8DsHEFKVVe",
  "key32": "5WYPUW6y6S7Zhrs73qSuvw7vD5ENMnhRHSMfL5dfhEdyjrNkcdcrt3DFXSSCDWc8prAKHdTKwautvdDX6AiqfmaD",
  "key33": "2eobWXHAAyshDLeXPCUFz5g7MEiBXCgTuFoZLGNUbD8LKcQv1KPQAXbXpzwvAmxN488ZK3nB6iUX9tGme74E4QUY",
  "key34": "5VvFTA7Y1ziJcyNuafDf5vkNotZor5tEUYarsbHfgEQtiThJmS8rLyue8eaF1PTt7j2xtgZ1G9RCvCom5dCJQGVq",
  "key35": "2du63iF2SAFJddZDQhgCusaSNg18rkRDPKqfGEYpgjBAHimemWFZxADzuDZPTHVLH9aCE7g6WzXiEXpbHpFQAC3B",
  "key36": "5r2Pp8apZtbopFvWFw3mWC7ZthYJUMJqwT423wgEpwrtvJCUZQVLu2XZrPfBMd7H2tFs8wQ1q6G1EnZAPvWPzonz",
  "key37": "CXZEKAKP6cULWaL1sb19KdTCiKVrxmYrFnFrMDyE3rNfCAwMBB3ucgpf7p6v2NyzxWujZKV34YJvQkx3noAGfxx"
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
