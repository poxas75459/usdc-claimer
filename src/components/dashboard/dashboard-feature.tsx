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
    "2tcGUtfZtnLSyg83o4sghueo2sgX5dBSwyiD348kLmd98Sb4asirdw1CaeHmKZ2K54i4YaQi6Qg24cTUmJYaH8rD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PnmUHiGV3Ysf5vP72k4dahbR2xBJnQs2APhFL1FrCUC1V1VsBgjfHNpqfX5F3xuFStoGQvDGxKtLwx2dXzVr4g9",
  "key1": "SLA8kZv8t7UafBiQS1Z2kc1JMLAXsvdj2pxpFEwFpuMJLdoDzN58eUcjmzAkKZQjC8HdfeRHHFw9o3VCiBwT8et",
  "key2": "3YFW48BwwSX2epMstwxTJCS9EBmoeoxFdX5drjLTeTzZDSfjaHp5eLn5QnpB6Q8KZw9hZKxQ5jo126nCTSRNAKdx",
  "key3": "5HzLsXXPNzt5hErEnRGZ8oPaPQEeFMidDwnaiwDFfXtxdkrfm9P1dqJJ7Pbd6LqngiEkjPGSk9qqfevxyBn7q4A4",
  "key4": "2QzgmtyZo6Td1v4USkbcYqEfxeQn9Axe4PyhDptuxtWjDkTyngKWxBKRwVz4XZGgwfA6iYcoRBD1wLDk1sn5cZ9v",
  "key5": "3tkcddpYCVAsmjLycHujErBBP5APm6NkLPuMkQJbU4Bnt5L9ZBzxvkm4SSorxvexWYW4oCaMUXTxiG7Q3XuigbvA",
  "key6": "4gSBWTy8ZLAKo3kRRL64jzUYKEKqvGQ8FEfWoXaNVGJ4nBUV4PX2tLPV3kWVQcWdjKQUSzrdWNzqsEPpSmDPrWUr",
  "key7": "4T6PAsJQ9GSGsbMtwCLFXobFLPe3qxcSW91EZZ8tqov9CtaFjDSn6sGovfve5p7zyCQN3efxpsaSksg9n72oBegZ",
  "key8": "2hTpJnXaPh3GCiRy6dEAcAW3LBcAu81byySh7Uy1YT8HGgP6AJgb2tNU4awwfHELRsksTGNSgpxiKbVYvWUZnMh5",
  "key9": "WR86uvpyXEHWgtnwXFJFbKje3kqM1JDDgVtud9USVVwu1qjadzygb1oAF4vma6AiixGpCiPQEVY2eci6HADKDzU",
  "key10": "4SCwB5nwo27XfXMfmhQgmtSdMYAsoEneKJqueVAn61n9er4jnCeBRZG5ZkBNo3mcRm18yMtZKcSfydkjFs27KoT3",
  "key11": "4xfH3aLxEtiTiaz5Ee9qs2dPP6vyR9LujBzS1cDr6Ud6RnYzRKoL8wo1YQ9Msj43kKiHoCaAsuqEhezQjYFCLcp1",
  "key12": "3hXvSaER58Dfd5kXhm3y3MyF1mnA3ZggdX5ppa8Uw4LQWguWXoczqSfixaVGYrebzcdgSgkWPKSv4bdJWrGUQTsE",
  "key13": "5881SPnhZNo1J4fa2FXRwsdXszdHim3hwhLKEx6H6HqxNBF9dfpM8jm7F2GJncGrqESwnjgGn947BhSdhM4txNFY",
  "key14": "VM8qeZyVP8j7WC25evekyeXcL5nq34kCGHvk5SSwm3j8mTUP7T7DHwHDA3KNfemJm6inPDUCE6bScZiExNVPpWT",
  "key15": "5ho3UnAzoAyW9ohoHC2V7mBJSbRVnEC1d2buK5RvS1GeJtPLcgjNEDB9BjYM3rcyHMaoUoJidfG4KZLasjxLqRTL",
  "key16": "xzQ1sVSTVcTPwjvUFTESNuqGRfbTeHdX6Z5LipTaMr4yLduaAemH52VZJh3fWJuUa7oemXr1WArBtZMxoLXCRwT",
  "key17": "KKGHr9dacUoY8hkjmbyXY3wTJEoC4WM5GQue6FjyUznuVkHsLk5Qm4G5kVCoNQcnexKVQo7Uv8yAJuDeuKvWir7",
  "key18": "4d5uoGrsLPCxiCyccn4xAdbHrwGrPGvQKGTe7EiotrF3nrPk4xr8NSptnK2kHMuHLq876u81ng2t89og71k8a35A",
  "key19": "o3nbVi9UTDD1h4ctAjTeNBSEULDCmp3pMnqkX43VrXcKnzARwQ8PoZMGD8XYo43kuBNiw9QZtsckQncrC3gxXUo",
  "key20": "2pX2yYvwVcvqHS5wKYxEzbzvELHojxVLvx5bGHZcx2NznVKaDFux2YZLkghmn3BzmXyxA8WQzP6rLx9U9hZJRuxC",
  "key21": "5W5kf7LKkjywmZ1FE49LFS2nKj6aR16PUN2Cdv12fv9BMCwdSSkkLPQGceLgmbTZh85YMjSc2XEsfhcypufNpS6B",
  "key22": "4tNeskMe2wgYXZQ8ABSWNEPfzgfrWCabLrigE1wTFgVFS8EWQ2YzLzPqFdXWERvANngBg1yvGy627rpYdXWbEdZ7",
  "key23": "2oVGWk6pbbfNH9tEaheo28HiSUc6ZpYjuuxQrh6atbECL8KNkcH731nDbiZNKaPyRfgYrZLDN9r7aKJQfAwywxRR",
  "key24": "6449c3sFgj6FLeEDm3QCZcEfJDjeShGv6aNUMxrLiJU9iypPMcRH3wmRP4ASqKwJCMi2xDUsk4L1UxW2E28nL4BH",
  "key25": "4KPW2aEwHzf9fzxzpwSgVD6ecW6deDbjRSNUFA8DQUFNFts7AYjVZDQUg3FWTFTUHhadJd9xhhKVby8gEY7YKcfQ",
  "key26": "4NcXdhXBjLrs2sdvdhQSWDqadK9JA44uYCPcdV8Nizw3SBeN3L6xDdvEc74mszzJEGiq6DmwkxDo9MdUSN9LDVkV",
  "key27": "4uXjoA7UEU2A4QcY9eWYaNnLDqciFojUhhvmbVeiQ2hLQUKz5Pm5baVyUhn9AFtQx7wfEiDudobBAjUasGbuKrS6",
  "key28": "43CVdGDAgm7veczs8tzPKnD46bDUAPnXm1yCPrpsj9v6tFGqtZ2e69JSSb1ArcUd5MRQLJs3yKgp82v4gdzLkqLV",
  "key29": "2seD8NmuvKFfsySFfVh2a39WxB3Yt26EZ828BAc8Ub4fxA8wMYkkyDC7AP8Y3kvo15Bwp1sQQGFwA9mQbPrWgtFg",
  "key30": "LzNeeyiTa9wuu2LP5vFJ9pqeSM86qf7hzQqcDQx8CU7b83xqDMYwY1jKV8A5y7f4FuZTBNsAfi9FaGx5ZMPR7VS",
  "key31": "3hyk38ZW4phhBijM8wfPfGQjoxwegnXfwwtL1R6HXxGt8WqoqnVpq715pbqkqmXtzpi2nFvddTD4izA6194Z3D3U",
  "key32": "4HFVJv2wz3ZQN1m6CgjzQnYkiQvJe7kfNr3N2ktWPkAyNJJkdPBQ7rR4ZDXiVsGe8BTznLiC695fH15SQnKDNHAd",
  "key33": "48RDuU15AQbqypuyyHrMcWjo9hMdAvK9ubryEfJtiDRVfWGaUN7XKKHNq2YGpsASn3j6xB65gibGFUmW7U4getgh",
  "key34": "3mFqEgdfZKYdUHHLhETxvUdKkE3fzZgyUE3cifzEMAfaLJrs2wjeU5tco4UWAuywfYCfg9F2WR8UYn8yvJtMwxY5",
  "key35": "xvAma9v6cJqfAVHknVQay56frUvHcvMha76UHVNBTuCUgLcMoCJmMqaEHURehxTnNqgKErsHmQFugwKkNXQ9Bxz",
  "key36": "355z4weiYp88SFXs7yrq6LKVBW81Guotmcoqj2vD5PuYwHJ9SRNXA5BaN3sUGcM67ef7FVmeCqgwoTwt9L5BeDun",
  "key37": "2H4E6QxYKLVB2dthR7QtnUYjquXzcJsE1EHfLYr791bhMZuFZEhaporueVHWeXLm8U2DnWkAymScsSqvo1zvALRU",
  "key38": "4S1xGVGc9hbGDmw8fCvCMGCtnXbmk94txe2byxRyZ7Ee7vHhso2HXaTcovt7ehnDai9WobWnBMnXAcJHvpfhYFnW",
  "key39": "3a7Ffr8GWT1T4X8emnfiFT5ugkymN4kP6DePAKhASpJ9cuoNEHjFM6KHdaRYdUBu6mTA1sgy4tEPtypgYuyQt693",
  "key40": "5XJFje2zJYEcYkXAEkzssXmZZXxEW1kvZdsagX3thgovRtcbgGT9Utp1tFxr7hGoK5m5kEHW2yfmdjv3ZuLezygC"
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
