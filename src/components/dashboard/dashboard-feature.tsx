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
    "4QfU2e5411zKM6uPQhFiaULjuJiVqSBnMEjbuRBbYv8CktrK5KAR6jVzja7USzN12k9qFJLAda2GVdzoCKpwsxCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2nqeizDrcUBTpxTeoSGm1UdSWLQReeeuAvyqKLtsoLhdkgCLTs7UxALko1ZdtCdN4tCHqKUEHfW5hfZYokQVGf",
  "key1": "2BhjDqCQAQhYGND97dn4xoLNur8E7wHfUEiGjLQnkRpiKDo9Jd2jSfF3EnKN8SW6FD2xunpHWmifxSA6AAXRVovZ",
  "key2": "2Gxy2L6y9cRa3NShh526yYVFntNvZgLNDwyNnC32bceBDQc6UVaRsyiVL7ZjZxCrFVj2jQ7Y4Z4KtjvgPcUhYv2i",
  "key3": "4Cv36pZnH5zVq3qXnnbnpkZkRyt7BqKQczLZNXu11hFT7qNpe9kJhPEEvWihRyxj2RN6iV3eLyfrWnzN5Eo9Kn6",
  "key4": "b3GidtwbNLFv4vnnus7R8d3pFpYvxbDX1DemKEtNGGs2JDy5gwUeWrHQ5kS8XE7doxCAUddSnbmdMT8zxSYGdh1",
  "key5": "3usD7k9BqPSSWbbceK5xVY7mt4tUigjVxjK7s1LiWRpCE2ubz1zgqaNXgwpUUZyQKqXgZXRXQQKMmLekrZJG8cAa",
  "key6": "4C6eKSpPnWGr4EDqcV8jkdzTURG9ZrRphqSGzao1ZzCiaf3qaMr7YUMqdHbJGn7qfKNnhHQQKBarwaLhzUXuQ8SD",
  "key7": "2RvDki4m4MYTS3AjC94rCcyAL9BuyaEcnvBDf4GfZt6oacm1bPYPpaULM6WPi5u7AjKGXu9JcgmU8tWfekqiPSS9",
  "key8": "2tVR8yHFJUxJht7H2dHdxiqT6aQACnKHvyE1ReJCWv6Wgq9V7EW4dx1hDyEAKAAV7bBGsSpbYu4zzJAT3rfwf169",
  "key9": "626bJFBJDUh72q9u4Guc8ntGE4QSWfbK7hCmVyuDVDYLfVH5RkzYoeffoxuD7JZ6AcFtmfh6WmBNXTmpjRLcoN9x",
  "key10": "5TthJAY5RGiMgKSgdXdcFppYaMaJ2TW6XbC6DVfbHkqz8HUZXWVh9tnqeYw3j9jW4LuHp4ybrLx5qTiutjapEPji",
  "key11": "2qDkiY6UJugGpvhcJ7RV2oxeghUCciJFy6Z8hCDrkNZ4TyajV9jV5BzDnax7F8VZbA41GbJV9EhvWG6z2mgMxksF",
  "key12": "3nyX1xUC9R7GuWPeG68ihYRz93YQSLiwDW9eRS7XxNCVgYMpBUFTPVHC2erh93WF3wZe28zQ9gLiuEr1wLhWeniu",
  "key13": "4tD6XDXYNSsT3umf4yR37Hzx5TFQBPJRUoogStGxF6zYyBVmczcQ8r6QjEkBshMFe4Tdc2k3aKmstqStEviPWYaD",
  "key14": "4rFqn6P9tidQ1AGMoKVbNcU5eQBcn5KrfB52B6NUCkwnJtdj37Diy29MdAyqhiXduXkH4qDvviM3f4PP6Z9bhk7V",
  "key15": "2cLyNvE9R3VugZwmPm2uGZLeZPL26jQaGP5TSepBwYoAww6nuCtjJt3QCh1pe124DDqHQXTrBjDGK44wYmBWcvJC",
  "key16": "4NnKtoxdPgCPhvmFqFLHMbvEsLCMNRpmDdvPiugbvdwsnkcvJCDLjTTrUbRgYrcCKyNDytWkQUcAWF1ESu3NEfzw",
  "key17": "5R15eKJFgmSc1JNTvoYe4qkBZfCkvaSEqMrZ1z9LvcPbjWPtS8kLDBMe5DShdi93AoPLmBEHWc4wM4CYDNwfE1qd",
  "key18": "Qx6ENw6hdGRRHmFQeMc3aGqsFuTCmMfdcBDkQ11FRNbAFLytUsWbB6XW2Q7WCwNGbYrsS9f8fzf2czf7PxKYPgt",
  "key19": "gD1ZvcR2A39DfVSRfvuKxngW3n8JRJ98DMRj9h6TmFprQUzC5ZC5MghhVeqhT6Za5B6cJSKbwjNs9CVV9YnGNuY",
  "key20": "3wTktv5YMKmvgQkqEzmMymCstXEu3by4R5Ex9RZPvehpWqZw2a2LzuSW1HqcTuXZHKjoqzTUcvhmeEA2ZtMeTQMK",
  "key21": "5woYV93JadihG25gHvthWvtXDxJS3tjhNLrvoxvc8qDYGfgXB9McLqSruAAWzE9VcEqatXdoAeP8z9brv8ujj4ef",
  "key22": "5Zck9qncRTD3LXTT7jmGdA8yxcc6mDdD9UM82X9rvjRoZKNz59Ta3dUAE241D9vUdhQYwSh2BXBPp7yzMH2E2o4q",
  "key23": "bCAQE5TUUPUUS1YKvEKUVSEFeeBe18iCWDu48es4ELzUiXepUA4V5NM6rVDPryer2ujf3VK3xrq6bNGfdgSxBsM",
  "key24": "3vWxheZ4bs7wpMptjS66kAB6Mf86iEhYvEmiSW3PHwvXdVWSJNrVqGMCCMoVgks7oaHr4xi28aPpeGPSrLrePwhS",
  "key25": "5BQTYzZg2EEj6rdZWoGKK6hVxW9rysDz9PnGiKVkdb2spcGSkXZKJkPPiDotgDFFGEtSt7agaLW4QDMLC4TfPdRJ",
  "key26": "423nrVetMAM3ZfxeYgrLNf7iJgGaTE8DJi8osqzWDeTKkbdty2bbDfRdbudCkXM1U3HfvxQdoXH4WbiMLXrAQb7B",
  "key27": "5JU7A6kGWvfjrKhY7iVXu7rr5uwkTCqa7QH8VKJsQFzAbK8hMsLLwNYTQz1JfXpWp191x1NAw4kDUo7jxtZhx3Wh",
  "key28": "Gz6cdReVeVwvcwraMFa4ZNZKVtY2HSbxXJa7NXPkHbBc8C8c848PAdtaATvaCZMGek3UT5KAqaaM7F6ndknkrx3",
  "key29": "2ZFS212rMkXqa9wRhpRPoiDaSRabuCz9qmiexEJJeTL18BuPbKyCZa37RHSePdeZDgdghfS476VwafubussSGHEX",
  "key30": "2KZuBDmxGRgsy1pT6n3wPMA6NmQvbpCU6wPNPo2RrxHFLTZ563vrZ2F6no4iUeCCZ4T2ddcvbHGNMfCLAC7ptiMQ",
  "key31": "2kM6CZVtVMzwbBDgB4FumCUmiSBN1NdBHf3TFmZE9VtjwEai43h79a9aFpfnwjnRahfhACjCwk5W1SvtdMy7rJC5",
  "key32": "2Nbu8ZVfA4s9quPjJoY4EbK47yJ7E8iZyVRZbnTPuotyxT4qCacGoQfDzZE3rXgfX3ASNEQxrnRe5KeBpZDd387A",
  "key33": "PhFqjMPmXhNKSNP2dztauEre3cfCSAP8VAQPB2aEKDpJDpNPqD6fKxaeanGjaAsmoPHgnSAKHKuVwZuKpBvgFcG",
  "key34": "2ZkJrgx7RqGMqFHVsYfHokQJLXATQgUXvyFDt1vCiQqRa9kSf9RJ7Lvwmp9HfpijS4B1JZmz4S3prLFQXM1SA4e3",
  "key35": "5vw1ftohK3QHjKCT4WCqmMRH78XAyca8JhC8GJj7NiwVKAFwJMVyXDYuEtMJqLSbXc5ziJQo59v2Zr1PRb8HNiTM",
  "key36": "5QGq6N4CcGKpZ1193YwKfYB4ZJyJ5HhPBaAqFiaV5x8MEzboBxj4CEF3KWUHDBV8EGnEn7EHyHFrijdEKAmWMAMj",
  "key37": "5CNhAtddWf47WAzVhWBMxVCxC3d4nApBVxfrw6A11PsUrqvoajk7sTGTn3hPacobYQBjZufhuzFvBXGVSDRstQS4"
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
