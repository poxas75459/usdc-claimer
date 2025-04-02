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
    "3J3PuAyCMHxabkqpJvrQZgfU5wSiSQ6yWHf4eMXXEWTCiPSwLrheWVwV2sTCkF6sKXRRs3Cevq9gtmgsXoFcbo5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NLPKJV7giGxF6Qc2ZwLfpqnju9Qv1rRGK1erdGcM958NQQpzNr4rd9XH6xb7dZ9MTWCyU8kW2Zx8L4yc9zFHyqk",
  "key1": "5AGiq7H9bwtiFJKNSwDKXB8LbMjxRdb1Yj5PW9xjPzkriZn7QJWqxg5UfB57uhvZyu8As6WK7VHsVxhv9y2cjTSH",
  "key2": "3eVqUpXXkeg9KgsiSiZtUTAsQxhnzuv9ycyyTYCKxiknJjhJUPaaaVyDBucQtKqo3GwtkYZ3dZkr5QcxihK2CGX5",
  "key3": "hz4E1qa2GSqvHjvBKHZd2coWeTg2fpwXjtnCArr1eMwBTMuDTdgzRiLuCgLhp93gv3Qbdj8e4FiJQVkT1C3SrSZ",
  "key4": "3uhxz6X9SKXnqsM7soYsiSYvM3g7S5JHVUvnrQdDkqkPCzWCMJLas8apz6URNTSATbheouYZsCcjo7HCKyNCcB78",
  "key5": "4if5Ne2eXH2e2BzmZKyopccbKBEyge5yi1Ae29cYcpdJQw6ETodxVwpC53o2F5CCikAShFCEy5ksNnkhXx4dwsbe",
  "key6": "3uHtbsMEXgEeZD8X1RthV55ij4KsbbiYxzB2cSQUQq8Ya4fnFfksD8vhYbuoTwn6YDmLDFhJY3MuLx6qhzjtvvjr",
  "key7": "5b4CTvKsgodn5TwaJfgnbUaxKUbBZmUgW8vYLprd9esjN49AVp7kQC9GHWrrxj5N6cfv3JP514UWxMGY6iYwrUZj",
  "key8": "4wgH8H4R7US6NWMN8xG5awwFyPgNVgv8edsMZwD6Jpr7YGtsS8tqRMDRbM2X9v2CNB3NrQDioXapYee3NyK53XhT",
  "key9": "5x3JB3gieK525fHz1aJqessgWfa27cW5LcQUWPvoSm9YWpy31YWHqH1rdxSEbbs4zRDgpPEM4FB6d8uhFJP2BcEh",
  "key10": "zSSdGPGqyPTP3ZmQWvNNXDF5VmpBUjuqDP9QD2XxZXaVZr8imsPn7CgK1t1v1JoUWkE1R23cRNcDhfmv31RUxTC",
  "key11": "jWfJnxnbagqzqExQpTeL66VEdy43cN7qGY4BhQEu1UBkUiy3X6T269D9EXk8HjJaEQ9NdHUFEWmXMdpcSttFvwe",
  "key12": "3pEPHfonNjFHRve2AEf9tAWLvhQVTXT1qCLgjWE6suyKFEj1g7nJcXziovUhdN7QWdf9Uimy6bRycmzUiEisQQXh",
  "key13": "66bHsm29FtyMXZPtcckVcczUaGZvwECSHdkTDsNjqRBuRupnnrXqKfbqwsX4e5QJXdsMSHZ3rQ79qQCW7zqMSTtg",
  "key14": "2wiYpB82cFwEP8qny887pg8K9RTAJFWmonoHxibjS9cPXxMh1cRdyQCyewXAwJpCBbxhrk7baBHmTiZcdQGDbZBU",
  "key15": "3iZT2h1bDWMuxyN6SGLChPSmiAi2w8CJJJSbdLTFc6bGYNp4eaGPqM9MmyknJS6YMaRqecik74BQ3mvB8GUq5p8j",
  "key16": "5XZLCBVxHQmieqV6RsyD9fvHwKjDvNY4rPPk5X7v8VtPv6T5Qzo5gnQa7fE9tgWnunx7jZYVEMsjJL3ndh5jW2w3",
  "key17": "5re7YXMUAsKaiXyEVPSDTh4mT2gwSyRdb74WSzmYqcGK3msTJKqCu5DQdF6JPMYRxfNFBJvy9N2n2svUdQWmVHUi",
  "key18": "3ne8gpBrRtUfCiF727qiynq5BRaQ3axVjBpMUrzh5LuFyn36N5wWbv3erzHxMearZoiFHxbACnr6gFSsEvJujbBY",
  "key19": "2KwWDxGiQrj3e3v7kgyiB37Xq8bUgXjZJ3jsyYR3XsPEMdFxCeYZ43besbQ3eGDTZavpsRgDPemQhbmEn3uTLt9W",
  "key20": "4V593uoFfDaqgxgth5smwPrX81f8ogudZyZPyNuTwtq6hwXEMEXxXEkLz5NrjYbErKgzvq7xHcAhQPJzrjgiCQCR",
  "key21": "5GejYEDcNBKCBt3wahd1NTrx8hiCh1qnzNkTxaAfNtqYK9VEitZAj6i9z9Z5Q6yZimNqod677wAxPmfLwDfHiCzU",
  "key22": "2iMaVYaigoVmEpzV66LS1ycoWSMBUQH2oyygPhcyGHxgbxvnL2g9YTfzZcxDvWbfcd2vdS7cW6YtVB3YpYGWHpR4",
  "key23": "2DzTzr6ERotrd5Brgtg6Jtt9FtvjeyrzJPFwvV2YwnEJu9avvz2KdpYLK77T8FBYdGtwmUmxfkk9BbqafpkJQ3wa",
  "key24": "2BUX3Aa99Ue1E6nJPzMadyYWcKqF7yqBdSLTtRZEUy1VyS4JSK67HrbfRHRvfSYqHroazoPnzUGcoDTfQfMv34tt",
  "key25": "WCHeK6SnZzskDcKyvzuqeC6ijT1YEWbFDS73T74Jz3xLviQjfGFkkJ6FRbovfjLhdsKWrw3moDXi61bHdMPDb9p",
  "key26": "5JgTeF9CsPa4tN36zyZT5mLxYiH2MmJY8e9MagtRxoBHnqe3jJMCJ2T6NCMPy4ehhMzmU7gGq4mbRgG4642UBHmQ",
  "key27": "5QhAc9Ffo72r6kVAtJzqKNe17Hcd4qWzcRFfTRv8W5xWNtUcXLNygmgzt7SCgYc4JkQfMYvo8uMCC38smgqQP3gZ",
  "key28": "4u7AgxFrNSPfPiaVnQsWVuuF3RAazh25fdG9T8mtMzuCEnQ8d4ze1As74WdrKLcGd1ttGJQyoJ326skLG1Do3fmx",
  "key29": "66iBuRhajhy9BPEB6afvm8DFEuT8xDErbpdg4RwbyS1i6K9CnLPy3qswWdsRTzGk9tpA28JGT7m84swA7Dx5JY9B",
  "key30": "62WJz7ZSJ8uXjxbbwg5fW7W6fM5aK2xEC248j8AVinA77gSFT3NiSQnkanRurQEADTYwYtLj1gcFEtQDasnVZqQf",
  "key31": "2gv1VYdxZT6csSj9Rn8faydN2jZZyPTxt7DGgVfCGqKxYahebaEGedPE7uzTkrwgLiU5pu3TwABFuHKckkC6gRZL",
  "key32": "5UFTbkH3X1UTxxECGeJzYsW63cMwW2Ad4gUDST2rPPmJtp8A1BQXi7ZgiAUD3vdQ8yRwriPXaMngY734zWTVxpjx",
  "key33": "5BxGMCy6rtBQ5s5z3qJKHHD58zMhWSygF6jJNAsZ18Ab5qLDxMFtcgoReuGctYYLrrbFMSVXwjLSiDDbWUErweCS",
  "key34": "3Lt4Gwj9JV6Jc8rbvkfAioPEPyrSj9kUVoHGKgdDCbcVGTmhyLtgrEBoRv4knvZHhJH7rexGrMXLLGZwTYWeauu6",
  "key35": "4nFGXP3Rw2ADecqDAEzwdsS24TSxeDeFaKrzZbvfF9HiHSSWWi6YEpoAUvCfTTQ21VSEfVaY2xVN1JFFxbL7vwiN",
  "key36": "4QKb9B4zfTqqjZoBjBSBdbqdddicYU6sQq9Pa6X7ev5eMS4S4jN7wTEj4vAD6Dy5PunS1oUgSCNJt23ru9GEtdYw",
  "key37": "Nhqz8y198scBzC4tVsZCkJoKh5w1LBu6ya1yExfK1xXjVragfJQpNSmGwq5VoNe1vNyXuHM2dCRKzn6pYGhRVo4",
  "key38": "2ht8BZJHifvaXTssHjjcWr3kN1atHbQ6bhfULWr8hLhM3gxd9iZRch9N8tckFX4cWgA84cY1MkvXoq2kYWHZiLxF"
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
