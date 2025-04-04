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
    "5Pq3BLt4ei87Zw6XFwhC2xtFhbbmKBBdxotiKfwvBNsDPX4GTc1X2rkecbm9FBDSSjQaXHFGoiBWeMP6MDbxUQoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jujJBQK8VBdvn7KiV8nj7nDn8rGFjeSBre8QQCpaKhw3L8ULzUgXPz1dDCVk2xyDEt6c66Et7Z5Wi985PvzwkhH",
  "key1": "5noUqnH7qjc5toHcRg9n2dbzEPYmNBGHW7fzh9rV4pLRBnNMXSnU1GYNaCKR8yDmvSGgazhdz9Cy7UkyFsXnkYUv",
  "key2": "3R1kbxuSBxAcgJDQZgifk3PHj5n7nmsBXfojsc8kdejgmV3NMpnuyk2nKYMSfqVxJgHtTmo2iMopDQsZuNU1ZpUr",
  "key3": "3WtFMXLLe7Tar2EoSkPxRu1XNu77W9J2Sg6CySNLf4JqFkeAZdFcz93xgdCibMAMRsHPywsogupJxCPQVzeCrrU6",
  "key4": "3Gc2fk934TnRePzioZq1pihzcZ5JkDQGDjcAbrbQHm59NwmFJLd7CRAL6sj5MZZZbb4AJPBwSoSBdvkqn5Cjsnfz",
  "key5": "5mQr1puXYyTSJZWAMzExKkFpEbMZxARzPQdih6WycRghrWyrHnFMXdE675BuTqHMFSfF1czjz499Mkfxs6NstxyQ",
  "key6": "AqhxKffzWqA2F7mVAQ6LTjwZvPnW7U2YDPJ5xcwEqs7saA68wUwLrqWM8RKzFsb1ncHhj8BVc6oowADauTUMZSc",
  "key7": "5ftFih8zERfoGsu7FzTSn7Ys5rLDghpcTjzG6FQEz6NUk7oixh8d73SLyCnsfByFYzfFCZzuW5x4kuZcuJnsx1q4",
  "key8": "3UKd9QGhfCmyUUkDqof4e1x1svjKa5Hb4X8A6JkaFiBR1WrNXSph4mvN8jiU5yiM4xcpWak5cbrkDGHTFvSPwey8",
  "key9": "VQQ7Zogd6ZdAREUrRYJ9D2DxxGYiguo1CbyCP3DgGBERTMcBHsEzE8eJ94YYLDjzgZfk9Gzkkan2vnkyXQm9vAg",
  "key10": "26R9x38pQLbfpgD2ip9XPTRAfgVFfJLk4JVWsBXr9wALZTpgDsuV4JNwU6ddZ9kHQyE4k9V88vS5KhomnVNZmm9S",
  "key11": "3eMeUStHqKfDcgPAdMggsc5aD6iM45VnqobbkNC9mteYd6fj74TewkMf2fkVkzJNnUNVSE2GjvrAqXUv6buHqvam",
  "key12": "FqSfDPfGyn7QfGyjfz7sfH1xoUCqiCN6ESNN7q2mRpeVL3cdQpxHC5ipfXXU5skzpYFf1VWbTui1a3dM3c8WwNd",
  "key13": "3iUhjdkuAbBuNZYLuKSrsLzzGuuUSQfFGZnkEZrmg4YqsnqZ8jcsCmcUQuNaKayxVB9VPEcAAKnJtgpupTg3eZ2M",
  "key14": "ZxLQXkKvLJU3Y4L3cZZEMYGCJJkn11tKMCQHWzfj7GStvaptGRaUsK5uTRm1VTot5hroHKpK4ZbDN8yBwVqYHnB",
  "key15": "3PRcJngDzPPWTCWQbbjfvgVkb5HGhF4tALsWCwEChkv2gv2QcTmJJEFihyxUP7hM6zhRYM1oLnPg81guXbARnk7x",
  "key16": "5ARXM6XEFndi2Ni9s7CTAw3Pth8eLcJF39WWzmGjsEZVEm5fTfA6uJVo3E1Y531AXtbmJrJeGnUE7MmEHDe6G9xc",
  "key17": "4eZx42eigWVK9D8cnvS6tGh7LFFsbt7ZXuurN6sRCpQDZ3sHrQWSbNepuGqtbC6VmZYSruHozWHSFfMLKuJMS86V",
  "key18": "DJ9b2bBqNeDbEFGUZeTnmtSE6VrXjantWJuCXxxfPcYWzAxfsuYvij8vrYKSoQUTiCU5U39z6nb8R681rQftnHA",
  "key19": "3YsyyTLHk7RuTv7ZFSyEvHbcYUuAKLdZBYGCEnc4YodWbkt28d9xww64UMZdVtdXLtXN1m8p2Wz4rHAXUHnVdeX4",
  "key20": "4VkRUYUHEppApGU4fe9Tm3ngrgxzcwzYJJphd25PQuFfMYupE5ZHB1LWEGLAf8uLqx954WQ8qovEyUteTPMkzVgN",
  "key21": "4PxCKiAoB3iiv9vsUTQK58RQZrZioYxv9Y6HW2QiGePxKQ16FMW1GBaDHdYnAx9zsZBTh31WLuhoBF95SsT1Wk4u",
  "key22": "4araETygrFZzzKdfD7Rirj7Yzf2xsNXxnwh35tMsP8GnJGcs8C7KCDG1re9vYPRwrvrNvGnznUVTLiZUfE7QnwXr",
  "key23": "4ZoGjcr1k8kRYzkTYJRGigJJzwfBw6P7CRp9LTzpMRMmFT6FysYGugdYiy4qeZWzZubow4cxdeVw4MdwYBHJovgo",
  "key24": "ULXvURs9VnsGgfqjUVT41jzJj4oDWTFBFNJFMfkGPcdeCgsVVQAmyCscvZg4YaM2SZp3NVXBskcCYJVpVSXBLMa",
  "key25": "2tNJ32795yHa8cSgZBV6Lhxgprc63HK111gFmKBPCRMh2ae1BED426kbBJCp5PCLm6FcnkuujoG9hj6wjcwJe1j6",
  "key26": "563L3jWzs1E1P67bd1V4JD76nJXyyWUumk71CdUzLk8fp748VWhQn594LMxoGa1xpdZUCyogvse6dLTjqKp9a23a",
  "key27": "4xxHPCvgYzjUVXro2ViWxkHwns1U9dMReviyLW7Hy8Gmu52X4aHSuN9yv8r83SH7aHv8Ln38J8mJME7cWRkkC5cV",
  "key28": "73dCzAMoTv2LqYUaUkcoWiKjVHXVE9VXaz8fwo5hp2HqFcQebct7QjjoacYcGSZCWLPNbgeCZ1P1fqSWi9hmSGE",
  "key29": "5tbAhYhMshPvY6ZuYknHerd1rBoYFPYyonBp4FjQ6Y3wsZGgoG8rDP6Xuqj2xWfskYLLhEt2WnECteb2XMthaVVe",
  "key30": "5NsLm87EuNy59m12Zv1N6aCTwFcPVv211Wf9t9T2f5yhotJoAWBDmDKV1AbLVaNg9LxVsR264tFbNWEDYPYHgRVo",
  "key31": "34kd53PNXpTwVSNqvxwyPGLmwe2PWPwh7GjuguMahGNUzYhvu91Bh2iMRBmPVfxhRvkyrWrayVHCRWdLxMnTw1JW",
  "key32": "5QaYqse6PGk35EinphVuiDjJsqXmuzbhmyYMfH6Gmo8cUjRqePFjdSZ9E9nAupZ6xd2eG6dbqgtvH9GbNKDB6Mer",
  "key33": "C9Y4AsMUh66A8xSKgzKQPoaTPcQk72nBpSqXWa5EuU519dm7ihi2nohyUy4nDSCYf2WNyZqanYoyREemSTunkC7",
  "key34": "3HHjxdHU3RR2n5hVLaeRERptFmERnNcq35pmUtWJbNDWLEAQ4hyesQ7NqJiNnFVFX89u5nB6ahrr8VxtVuRXbBQH",
  "key35": "3efrDwnEczPM9xj9tFyX7dL9XkaD1bVETND7FJQgszDbL95Po7rBxs8nJGW9dNSWEnFgeXe53WixJCWAqiX6xfBS",
  "key36": "jSchCJyHDc9Xi71zBqBUPjDiHMGKHdnZKWriRR9QMoE55oZxp6dZU2nGgpLgU1kKUV2t5ogfKFjrpkaeyQqh4ty",
  "key37": "39798fcWreThdvzkUPHis9nydXBYJkmqARqsz69QxXS99LJBnPKwZm5SHbKYuv3J1NKFHthBe2m3JqLFaR3rXzeH",
  "key38": "2HkLyjTUS4UKfZpksExWXPBk7bDGPZcA62CgFxD9gAD8Dr2RW2ZCTeJc1MskjXacSvVoVxscJajKDNFLvyNJDxKv"
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
