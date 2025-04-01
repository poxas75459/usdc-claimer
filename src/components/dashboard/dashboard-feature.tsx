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
    "5Qaakq3YqxjPePTcJ4CaMzvnpZJp7UXChzGgbR2MDE2Wa8erJbpRxiwqcNtkEdEQZ1LJk8fJLQ9S1ASv2GYDiSQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkbveQPLP7NTVnNRmFgcNzvKdpZFeLdStG34TUY1KCuMjeBStkPyFVmpi7iNoFKD41PQXRnHrkRaSTfLAd6onf8",
  "key1": "4TTMfzD1JgqeDQYPtz2WjhvejLGxVSehrRVv9aGwuV336iR8VU1g8Tq2iBrMoL3yTsKsLJ28ewrRV55AFqzFEFyy",
  "key2": "2sa2TTC46csSBy95eEZpXL9MNPFPGFoB2jkXVT86Qz48QSY2TAezxBA1HNh9x86bkTJomKqyjHDFZkTAKVBGE8Rx",
  "key3": "5VZccsVDaRaZH5SB1HQwYg3XEaHgA3JSDm5Tob5X97Ay5YNWKXGe2Txjn7HuC7erTn5MBJBFgeozJcH9rrkMhTJM",
  "key4": "61j5zy6oKsDHB6FvQwunZLES43YVN1k5CkEedXWNCLux79aXPauptuagMDMqQpdbPmabvdkevU8wNtTLJCnJmjEM",
  "key5": "3Q4D9sQ21SzT3rYSkRzHBtc3FAeVhzwaoAjYLZjKbHRrTtWW8AYb8PsYSmDbRdZSZCXyibyRwYHNuVtx5XNfHt1B",
  "key6": "3YGUYEFKUp3SFfLhxTvMws9B6T1TmFb2brWKaWerM6SaMFxkxKwVcjdDsUFvA4SWJZEgCaMkCVY8FtHmExc95Pw4",
  "key7": "3E8KWaPQfUvr8GNQYC1AiCQKYiaYurcmBjSh2mvNw6yAifAeRnUZDMVzvxNGHoib9ALhQxrNv9ik3G3zzbxUxZvm",
  "key8": "5T2Wop6cvQohc8YNiW5vUCtVPjkhXvjqV6i5ixwXeP6jT48jySvJm8ikF9ZxKLS1NaroZgkFPjGuWA783vAg37M1",
  "key9": "29VbAurSeZykmHtfzhESPknp25YGdywbKMZDmbH62GSMqEMz5VMxZs3DPwTcbYETiKeTfH8mSqxJPj2AnSKKKfiM",
  "key10": "217v7FCCRpEHJfF19X7HbzTm37YFRQ8oMJHQn4zjiJFxTe8KyujFG2sbXXPF7oCQrxLgyWKFXVQ4t3qRZ2RVNvCa",
  "key11": "2U7HBR6t6R5RMJVKhad7dRuARnwkupcbuy8fuDHG9DKESLh5M4qKbpCU4Swv1nfxSG8rCPHLaHc1LqtH556xXeJM",
  "key12": "YMTR2jqQsmeTzGZHwD6pP8T2mfc4HJuk5Gu9UCCbq8pApW67bMvjPA9dRLK2TwReTPbouUxfopPeSNptSV9GrBi",
  "key13": "tqLruHCEw47BCFGQSEFQD5PLb7NTouqxifpULHvNRU2CmDBGNXWNxyLHHGZzoRXDqDVSQFAmNtVsnnBc3bRRica",
  "key14": "5oE49szb53ohHi93fXWuwhgA1pK9BPeSnTnszz5Nnb3M7vdi7bx6Ez8LoAM8qULbH8A4UMbSprq7vyk9qYDksi5d",
  "key15": "4wY3WBiUbAuEReUZ8uob9ECeL8Ymu3AGtg5XcpgaPEZc6EsyXjWUnwvSAG25dnmw9YY9eZ5e6XZREdpc1HXMDWyg",
  "key16": "3E5yjywcrVNRkoTKqvoizBz7Ef5ks4oUwLXqZkKML4nTELgxjxWo1jqv4rNXQBjD6YVe9HyBAZzLZqnP9aMhCypq",
  "key17": "672WsRdZuY3fgrxNXEK1cJPtacecGf633aXnb8jBCUCU3hFRR8r4oSL6QTeRvxcqC7YXH2kQNCfjD2crpGmoBm7P",
  "key18": "5j3Wezy9EejCFXaoZNFKhN5prNWcdBqea2nXbVZy9fyk7VQ21R8YvLjmFEY7K8DQmk6oyy4ETXqos9JC4r7uXi3L",
  "key19": "5AqvimEYCds7LL9TbudPzMkuEYvXQAtAQcntTP2Www471R1fFdmKqC7f87gTEP4PExKPJsJFydcbQGANc7rNNFFg",
  "key20": "3giDniTa8TrtB3rmxFawz2zWC85qsg4PZ6HQnDLJ4AEMNVTQYwB3FzNVvhj1ZeaM5mKUCWACwxvjJv5oTaLB99Ne",
  "key21": "P9TWYn1Xcqi2DjxHEXhc3opxSbesAoD1RxW8cERmLwChtFJmPdpc4Jt9UiwqGZq32tiEbhyBoWQG1ZFjuMJSvqS",
  "key22": "3wGjJuM5ggYMcp4kdBxvS7aNANaFVz5zBqCidUcfPmT1FEBuxQf4itUchwJ2UCYkGDNPMXbenPhd7Bmd4dyExj1q",
  "key23": "5dVFHcDZ15N6vLVx9PcPtKWpjxbYDJWptVmGsg6h85fJaigUEv4X3PwWpnj7wjxQSsQhrre3y5CXSbeAyRdGnVSx",
  "key24": "2C1zinamWS7iG4J6xPGSw1gRLFofGdBnpRTwFzKMUWsv4bYWTmG7yKfoPTfAJ11PXzixk5Ff6tcaHJX7ye7LWP8Y",
  "key25": "5GdMyHS6nGhLRjgGzVu8nKTUaMy1x1GZTjKv7Q51FKC55kf64iLT1q6Wqa1f98oBM2s3rTqfjiRpBz2Nc1UFz2Q6",
  "key26": "48sHfFTc8YYemsw8ay9AeWeQVNG8mM6EkHjr1wJzJzKzQEYZigdR6jKXbZUTBfVSpHcSBcDZcHVKrtfRXrEuW1Vo",
  "key27": "5WRcrsTnKnK39vXBTmwTnpiVvqpyVztaqdY1HHETrPJ5ibnAUJzsBr4miKS7TzAoKqbW3wmnxZ418os1u4NQLnwg",
  "key28": "VSdiE1p1yTR3qJspLmPRjL3q8uacMUBdZACJ4UjoBQvSTkdauDJCLQkzPTBYfEdu1Wpyh7gSP6iv57YWsaEGDf6",
  "key29": "31RWSiBE8EE3hD49gRBg4MHPqEkaLkytbvUHfosH3gXc1LMUvUnfefWQR4rxp75fo3ybWZkyHogZcQStdG6XT7wg",
  "key30": "2oCqyEhgWU5NLVgwDvtZHUSqDWyU4TXqxLPcZqxU8zZWjCidu1jGSMfYDA7N17bNHADsp8Y5MSwxrGXud59WtDCk",
  "key31": "3CbDkUr43enoAnECYia7cpFk9CuosL6MhHDF8BMTHk1ku52dnYK5x1XYtRHejHREBzwCRzEp76zjJa39oiihEtip",
  "key32": "5tNPVBWHuobL3W6e3TyanVHQ8Z4SyY7tUw9pgBkpCgLqiqFbJ2ZRABGfXMLbKMPyAWXpKdirweiacaXyQzk4Ubpf",
  "key33": "5A1h8T7VrpJB7bV4Yx5ej4prPA8cdGmzQEqvyBPKs5a6ASs9Pbd62mPymFZxNoVifq8kqKBjvjiXu1brPJbrNdEY",
  "key34": "2cfK9iJ38qyz2iSAGUs2MsgbqJebJej6FkV2QCwLCZcDtWmBCQZkQLVQYux1MznKuXQ81JayL1M6qf4CPEJKE2uJ",
  "key35": "561UKYUvNH3X69jh1pfuMNCgh5Xn5A5JYmnBL3jHjPTBiyKAMtLDkqsivJrHhRZ3wLsUt8UMw6jHEFZVErC7U1eh",
  "key36": "2jCUpYYoScaUsepZkLmmRiWNig47pLDRAxeiqV1dnRhCTP996uvpxSPGCni3423nFPNfEP7oxKFywWegGw2ae3fG",
  "key37": "swY2qcna54RxBrha1nxTQb94LAHtuS3pttLvMG8smk4E7pHqbamKuAkxaFJ3cMQvHewkYP7fv4dwz4XSNgkXb7a",
  "key38": "48oLjTgj9CqTqJW1AWJDzVEAGtzkgsNHgt9X6BiwTFfBZnMG6wm83EhawNgbhNtpewGmwx8usSiX2As175V389Tm"
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
