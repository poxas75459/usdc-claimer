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
    "2gj2CVMyvsJAQm1SbGW4qphSwWYGhCPjWXPPtQnD8PqBCiSCUpwwLXgXdhw1tcv6r3idTTVSeWN2jzK2qmaZTR2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqFzcTwaXCZUbKANSP61U97S5fjF3XrfA8FmDa1eJU3V3dyqBdi6Xrq8XxgC2pFJgU3qffffk51UNTDVJpE1Hsr",
  "key1": "LzygJ4CfASuduQvXqLvqZD8siyuYFq4NJujTLTu7PxRZorbN9UZPbMCGR1Ro1gNL6EW4XM2jx7kfsguzTnNUGLH",
  "key2": "4gSnfbfCSZZx2XoBxDKd5VTeSTTBTKavibYiDJZ5TiCs4bhRtuyQj3gWhSsECVdW9oR1ng4tUzAZTWJ73ubQ2GZV",
  "key3": "4bMRHYeDFEDPkt1Bd7JEjtiTyKn9qsE5fCRx7tz3DoV2YFdKhgiX51vz9BHBw5FsL1KyyeSqqxSChUe7v5yz6HAm",
  "key4": "vhnBp6t7WayLRbb7h2749VYF2CrwVPcbfPvEDdii3sy7zjZDmzv3SoTCq8EEwdhi9JnN1EyEhNzHsDzgMq7MAh9",
  "key5": "4sYZFE98gpArKpgXEU9SuKvYgqZVn8LYeiecWCyGXeJZkxff9Zj4QUjudtN4qKzqvnB37dE3TLMccK59sB7r16be",
  "key6": "4AoWm9Ewd57VcDV8M1JSfDRkWFnT5bHvYBGiFfDRxnLo9SdGpu7KqBYug8wSQuk6Bem7hGHukBCNbWgKd5JucQKF",
  "key7": "kXpDjCMoMTzFBYeWgpk4kgQsq3BHzfcibxR7D911VKcnvGBt2AfMtGBsgPTZCF1Hh7EoB6ZAp6fSMsko9pdDFGs",
  "key8": "5TBuiN6gqMTWcCGtgWWtf8CyjU9puwghVbdow7f3rJMmLi5BWPm43rWRNMvm8CrRdH9BzrCNtKhipQD3FHvfsV9Y",
  "key9": "EoB7qa1vnxzSPEGacqSx9yqMfHxYm9y2ABRC74ZEPLj1W889bY3wDEsgWKBfG7taZN8sn7sUQpmNNJGvHvRCUNg",
  "key10": "5x8yZ2V7UcyH7ukgdq8fZacS5P3SQbkgAfREyqNFaXXLhNXUTii1HmwFqBBYLj9o69YZHTMzi81doMMUtJq8kgZ3",
  "key11": "CcAKcxEedKmyeezAqZEsUCZPv49T3aQ7iPTaKWZ5HJTnCE2KGbypwffxxmodJWsXHetMAqGzzLfCn2cmRZLvvSr",
  "key12": "5CzvUib8trnKTmzJXsuNJs8QbQANay4zd54WhPEGVfbcospWXqxbnKyJJi6wBCFatetuiF7cmuJpBfKJc3KWdiCu",
  "key13": "4HNoM8xgE7jk2mKSe3AcWEBsmrZAbgmqEBpPfthPAsXr6G6iashr64k8fvmwRefJto59BCbZuKA4Ac8DR6C9eS5",
  "key14": "5oDb9hXQH115kudTKqc4TLuWZu5SLLKstAKhYawdhdp1oxjUTo6K9LNaTrzobeWuJ7pbmJuJ64yzqkbkJR4YG6H6",
  "key15": "4GyabvXx6p7CEv2ZwXqjQLZ2ZaHESHSo7VTUySnMacQBjps4SVCPhaoaHZvpiPAthPRwzzeEUfcrcetVojJ5Jo1a",
  "key16": "53X6toNRgTY4jm91w9WjB4QR8ZU3h5nQfF1kubYbrG85RDDNV6nwh5UrxpHYHqAApd5TuMp1a3gd9GzXpyiX9aKm",
  "key17": "53cQX4cfXyKnjUSLy46cdRLn2pRPiDc7aPaCAzh3W7RxxzKyN8sEExFwK2MnPAWFSHvW7AUqigLSwrhQajUMn2a8",
  "key18": "2RUQPsLHckmGksQf1MD6HLnSFPnS8i2bDhG1rTj4YQ95z6uyLrNL5ZBpVmAHU2NgLWYQziKWTB7U11Ega93bBHgE",
  "key19": "4TnvRwqu8t5GUAbPo8sP6iJBoHW9MdzHzrg1kNs41xE6qbq9SkunCkG2agSJhvNf2JPSfZdZeS9eFceUrYbAs1RB",
  "key20": "5msGkbMM8Edc5U1pb5PZQqteHeXnUvCEmmkXQMrTJYfHwuyQFogteeUNNnKJUuU7DpYNPTYY3BgJY3RivVExrwQd",
  "key21": "5myZEAF6vxHwFddKXK2ojcvpFRswu3h8VFwprDKg9T7Vk8d67skYTK6695sgVYcGWRV3G5Y8L9SnKz7fPdT6QYDV",
  "key22": "u9Arz5YXNhPurRrQd2Y7QkHWJLbz3UEoFbqY1MRrK9gWf2ja1yxipavrq6qCR3T5HyaGqWj3efzmX398zfCWccK",
  "key23": "4EEK9vXPaHXxgqpBPiLjBkoXLoBhaZ5F6v8s367YksGYcy7dVeasKvg5Kr7HULrYNkPcXvBoXHAatHVRmTNSYEaT",
  "key24": "62mhp9HNwu3fpaPHPnqK3GGcG6rDxb1y65ZHgaWZXRMYHRpMSiDE6yhfLLv7cYntn8mNCMd1BoC5PtjLLuJ9LTZM",
  "key25": "3WZmTAMURx9oZXjjhW9YVPRPr4etKAbuR9oPzs6MhGra1bGpxWHhYJePwcveKFxUW8aFHRjPmeC7p89Rnv6o5SKk",
  "key26": "3pWpDw83SLDckr28rwH99VT66H76tqcpsjrumBJZDYVQ2PaZkYPC4D6xp1mERAUW2wssoPWv6BU7K5x9T5VQZLGy",
  "key27": "2fB3Un6vUmEmuirKxsfjo46Xs4d3CX3gvFmxYkmQY3sGQ3tw7FbagpiCESwmumkRRv5ysrosdevKrTxSpPchbj5q",
  "key28": "4esTBsWbJWhghApUGNS7n93Dg3QEcPLVXcJF3irxNu1TbGJg8YsFsDHSrHQGRpo2d2nAMknoqEAKKdVxjZFU8JkM",
  "key29": "fG6gmx32QcdRVZbQiFpMx8GJefJe7wiKfGN8XRhvvsBbtxai2oFFtXvQsyTe8TPxXiTxU996FZmC6iKytJqeLce",
  "key30": "5JrcpdtmXaKkQ8EneezMUFcb7R8KNk49SZ1fj2y334DJ2eMkzmCWGfwssHCuAVpx5GnR3qz62dPJKFFziyszSSyM",
  "key31": "9wjidWZ3Y2YowQ4bYjVofbuRvBJ8qiL1EiXav5razpCqAXyCZzeePH23Y7PX6ozbXraiDnwXkw2YURrcVt13qjT",
  "key32": "2DWcZDSdNBfdtrhdbsiDQZFAFxysktuAGtJtVcPCFGSRTNcKwgm59mdrpovJRSstGntdqxGYWSWK5D9ba6PRCdvj",
  "key33": "31eVK3CpRoYcpnEXeks24xsQYP2mhFCegUyC7C6zRh1S9qunDHCX4nBUC7ewFE1NAfaveSKnKY2UMieHg3cSh1ZN",
  "key34": "4jVwEbATKUfqALYdgCE1Pqg9EhMDLe26TG2FgPcZG4FWk14wnnXH89Y2zsLfmCrVT3CRRKJ7DtzWbXFQVhDfc9SH",
  "key35": "25HbdsVLuqzsHdxsoVjYsbnep4LNiWwcWAcP9d6eqpEyUJssx5jTTxzqho9ZUgobVgBiBPnuNG7d7HRgFZuw454r",
  "key36": "4z1bfJp4Qn9h1zMaUZNi9ys7nZP7w4MHPJvtkG1jGsETwSD5eZHwWxGhV77PveVTEi9RntG88vP5X9A8iUcqFTez",
  "key37": "4fE6qnjHiEuo92cqc1qu4tLP17PGTzGX2KPqwfmwGXWbS7pbetzwBMnD2QcTSZnN4ejqXWMAoty3xVGM34t7Q5VT",
  "key38": "22pXV1Uz2GUkZsQvGoXpQEXdJFabGsQzoGW5JY1RKh4cAFKCx5hCThz3muV4zPnKjoW1SrzJuSozD6E282wwLHHU",
  "key39": "5rD7FN9ZZQ82YJ2T22Ne3bCugFf1Yw2qWtjJi97zKtsynA3hQ8zz6XwniXma67JZqhbCcua96h63PKvYSVe9eH3h",
  "key40": "2X3ndrTnL581XyS7KjwgfCFndBoywS3FVFshtWNnSKPVbCVTAx94uEcTZJCAKGEV2T577gW221SdFYP92sw6FvzT",
  "key41": "59t4A4Ef2kTFAwqhDkn3FFPFuFzRKzQ3PM8ZoBgPxfg9VpdKqtqFifB6JRLxd1GVAoaLdEnuHiqcmAMgL5YpeG4j",
  "key42": "2LWyjCyhfFQpwdo8Rz4C6pUuncomLWCYxGcARuyN25N1ZLGFbCLJv5GHjzEHJrKLUC9WcnswbCfKL6jMPTbQs8HW",
  "key43": "HrjstqErvwqPvpimKhFG54EMvastKPRbjEBHkvaLfJ2exaTMUHXzQTHHrGUZ4cE2eRP2uGNAB8KLkVjKLb66SVw",
  "key44": "33qssrpBomWYEZEGLiLZW78bKZjPyuJp6uvsY3JQWuxDuBRtJtqcDdXTduT3QH2XJhthW9XaE475pL8UbCJAPHHC",
  "key45": "44NECKDUa4XLUtKewuMp1T6aCPsdDdmKPrUgY3kDsuybsnkdDdQekrVTMzfK6WTu6gu1oyLFXJXgpbcfaM2L9wsm",
  "key46": "4Yg2gowrGkYirPgmQbVVpG5kHHhK83uwrvjNKR2PSe1qYKTGLM7enCzwkHk9bniGbvNGSfmPsT9TMb6asHuNzz3n",
  "key47": "5UqtKraMXuTYx7iLHULYzwRKHdY6tbNxrjqHPoyvxGwdAiEdh9QG86eWVFPM8oDSxq8BQHzP9EZ8buaTNXJCq7Q9"
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
