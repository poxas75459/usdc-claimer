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
    "2dfjEAvJMbRenZXBrYaV23VcMrfvrhhVpfBXYVWVrpkPCUZSiiub58gUBEGfCwVsn9kRgQwSp5vQunS17aNsaWBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gmp1KQEfp44RKjqqZM7M6XG8YwBXQ6KjyGe7wRXj4Y3ZLarwSYqEkTjEjabAPjyAZ8k85eLTh41hvNxnyniCsZi",
  "key1": "2TyJ3fNAdEQjuFBC3kGvw3w4sn14GT6EhoTv1XVq1mxzAgAEZpTgnUrbeWMPzDRjEr7RU6VYe366QgHVoKhP6voz",
  "key2": "4HUWQVgTN5Z2Rqh8QhgCg4stmF53VAfK4vDkfwK93RJUaL7sQALx7oMXAvAmcejxuDEi1tasPi7vV6mfdcccwkDp",
  "key3": "2VQsrkWgyjrQtpkrujTH3q9TodgLYBTPZAMHNrrKxXzF2M5rRKh1Zw9wkxXyQhi12vYZjXDzwMz82eHAc1JoRrrK",
  "key4": "1YaF1s7AwpzWC9JWS3geJVAWjmJK3ffmMevpQTmuz6P8NtTj9wtp7f8Xidt94texXQ5G9DNqtg1Bo29gQqq4FXg",
  "key5": "XCHZG8CBcyLLb4TCfU2BnS9RxM6Mg7dk7EkVY99LNHizNCapu67BdGRS7kdsC5yXvjEK5uCnU2ntCfz6J2AgSLe",
  "key6": "AJqyThL5Jr8qVxmJSs3TrnmoY1SgMadV6brDVm4E4KNe1bHS1pg5q3ARTZBw1LGko4x5jJaHaUbgsjPpME6Eq2E",
  "key7": "3aemP2UuHBqy23FQEXFSEEMBgwMHn7RpJoCtLQrfS4UL9QCXdxsfzk1zrbwYwy8nZGQC5CgbYNPv6WKt2enjeKKW",
  "key8": "2CTt8r1XQkTzLLWMKqe6pL2TdaT1pHEBKjByC38PYV5pcvbzpMjb3ythHCWxitcQoGKzpCJ6a41P4VCrzE8t4k8v",
  "key9": "o31smZL55BVM13aCPVRDz1GfTBwPeLnMWqyoyp78R8wZMWBvSyic3X9pVLYhSyLipzK625rJUrYfDB2s1MQqEvg",
  "key10": "2wwd9Pym9nEZybyKft67XtUoDXyp9k6mNhA9VtFj4Z4t6nB3aArShqCajUKTbKQas1wwWhTN4HFuKhhR1gPY8zE",
  "key11": "4AhAtqSsL186HQt8JEDSX3AAUtHo5S3EN9xsd7aNTeFSsnX1hUNEYzYuBsvRWM7a5LLbwXzM9q99snKkU8vRsxEZ",
  "key12": "49Nzuo2pf1xwKTgzWcvQ4B7fKFmqJ2rxXifbe5JU8djN4ERXY9SoMMDZS9JJnk1DunCYsgGVHQd8R8n4hvoDAMXg",
  "key13": "Fm9iFbwEBwjjqJqHTDDx8f4uNeX4czBDbBy9ri3XDKzq6GRtgnGk8mLbG4xoyUdjN2B1Pwi2Bgbp3eirdkbfH6u",
  "key14": "4f8JmtEfPXxnt46SYvfQkAWCRTUqitUvE71deUkyJessYz24GZs7bpySrhxkjk6BD3ybsbute2yct3jq8czZxotd",
  "key15": "33YnV7xNwnKymJHS8TP5cCFJmRkqmgGrUHnAtZnTRK6zbyKQWPBGcXnSLaAqV1GXNcYeTUZRNUPMCVCUEFZ7Y7ic",
  "key16": "enFo6FijD1D7DkWya77yE5YekKyiTRLWuVTjaNYfEvU3qj3DRAPXPaowvmAc4UGWjT3gtgPvTBh1v2a1ZNMiuZn",
  "key17": "25ZAdpRzuJkex8KhxZzRd8cChCzQuRC2jn1RaiqCNBTitbT3LYzGYR9gVdFJbEA1buyAxyepTz7qq2u9mPZVtp85",
  "key18": "3SyE6ng8AJxbTAb6G6seb3LJrZEaM1Lxu1QsWPX9NC4w6GqVjP9yVUwuXMXo5uuWTa6QpJcoHcQv64GDbF6iVgBf",
  "key19": "5kA5U52d1gN9aMMfMrYLFw3YLLDnY9xyRcK8stHywfi62Wxb176wTfW2UrVd32LVZZ9UtLMMDDQMR579y9ZqkGon",
  "key20": "2UvTiiTYmJtf6pKBR7ba2bWJZSQfkJHiwBdGVX3R2Po5cp7ik6AHptWPkMPHrZb9B7ecuWu9xsFmHut7QkWnCQ8h",
  "key21": "3pq5hY1GZNx63Jp9cw8NiqEYUByByxHTLyUXVGHtznFjhnoEfb3kFH9gKbjXu9ruwZaiRVd5kAMkPuk7QDrdAx2g",
  "key22": "2LcFBGnorfJd9e8xpXHacvaz2TCz4zHgmnSCoAi6w5eJwT7WxpcYFR51HvRraKjwdvUr2izPe1ynojZyKaF2HYTP",
  "key23": "3poTwXtU7YMzH3x3m6ECzXX9WSAumwSFtd8rYAWei3PcvC4AWPhgDh4TV4buGjb5ABDfPne3A7n3BJ7ZDwa7e8cS",
  "key24": "5Tth1kVzkGHt9Q3enJRGEdrZzsyXcHZeontDjfAsVWP8AhWU83TnKNoWnccjExhXwLWsxBPcKw3vz1wx6ZtcuTGL",
  "key25": "4ACFEPdFJXrfA6pqACsfWHdW5nubhfFBZHVNKcfXKGvjigT4NKWotWdgKieccrc2tUySARyeY5nSTSQ1rCCWhcEV",
  "key26": "3G7bhpY7fopCHbEFR7X7hWMPx6jhVG7y5mvr2FZRZYZT1d33pP3VkNBDuy9BJw9KxoCaAZcDUJZmhD9SwyyvFsZW",
  "key27": "5p7dsSRTf3iQtKS5o8PzyMGGqiRbMK36b9usx3bixV3kJmozduQe5uABon7qwRbQT663uPn1r3EXL5u5CxZqN9PM",
  "key28": "5Vd7VvVCc6BXK2YQW6dqaoFiYX5pvjppyizRJXYie2APPUec78vBNpRmWDTaTgnYpYNqjpuaT9VSDaR9VcQ9Wf8W",
  "key29": "5UDEQy4JNdxZ7hFV7PfdSkxGK2Ce5wApnFjvQjpYgyMqJX6GUpLctG9YCY23vMdhcMKmxNBXAG28kCG7EioeB2sK",
  "key30": "5Xv4Yv5LNTK98EadsEeQ6tjhbHsdFZQP89WC8aCdpWcPsCv1jbhxTsjzZPwwBbXWtgEpUya3786bQsDYeASyaQAq",
  "key31": "PCLJFQ5QxcfiP5zBMCWsqAfL71brz8RzTY56vVf5deZmEXGriCDpFLX9pPF3QosZ2SCN8VBayTq9V9DAdNk8SaR",
  "key32": "679HKcFYK9Xd8Ya3ZfH5bdGx8Nvk7HLqbGRKJWDoarjLXc4PrUGc1FGReZNMP9EhRCsoAP28P9sS47HhVuAJKMEH",
  "key33": "3ohVLX4y8yoAMDhhRmcQi5FmzfQScEMZUktbExNfpacW1U13KTxQBSCL1jBkdgHcGwk2BaBLzjJbHrKiTw94x554",
  "key34": "HUSRyAGjiBpBVkfme3iZtzUCTBwHkG2tXA77KnmW7FXkzk51pRsbUqzr7sXizzvrjkFtBYE4vsYoChrmqjuW6oj",
  "key35": "4e76ygc559CEJkSbjSUNj4KUCPudqwYs3emnHpocM2kguqTbne5dz8U6VUuZE4qA5hvacCrHsrWRQKWsLJJasnAJ",
  "key36": "5M9QPU43Ah3Jvk6QYbLGVY8XQ13WnEWzT9BEBEpCi9X16pUHF9PzCe2pf4Etd3SPGs7cyWQuZ6katUR1sQX2jLBw",
  "key37": "26Ce7wT68t2FcF91T2nhE22numY6U19feQCNX1kj7GffLKVNyv2ayPKxzjwGGadSdJejHf6cmmT1tR4TxQ1zP9o9",
  "key38": "4SKZ2ePBXMcnVaTyKax1J75cdPMPpu5o2hV7Wjmjy574aXNGoVjsA3t7EjZaD1fywToNrMGtZFcbFem2mJxsezYK",
  "key39": "4Unkcf2M99hHQZHx7rRnvUFV7pHZnAsjBZghwQDGKCiMr1M92J2Qw5HPxej1bkbshy3irGaxpkyVnT13BLXnaPr3",
  "key40": "24xe2FHe5j9DTvHET7FC1EnYJGQjXKukrYnZpHQYBHbigyyAD1ozXLUeDVoWoVvgab1w3eZZC7NAws9uYPUfW9gj",
  "key41": "TFEiNvxFMLiPdMgnwT75oES6E2XjRfSYKgpurXFpYvFDyAKjvybwY8geQ37cz1EN5VDENZ8vQDwKYvEjLTNvEKk",
  "key42": "kXzs2bUc1kFCdswuiWjPp5CDUhwU5tn6QG6RnRhhZZSNGgf1QHgQP457F7bXJov4QgjjQ2C8cYYNVqygWyPPKti",
  "key43": "5rsKPRGcekA2DKZ8vrDgR6UiazFxysVBwi1wLB1oHNYEtaJGBx4hY5yKgTGeeNdd5LZUecHffBK5i8vcfVzJWMLZ",
  "key44": "UJ9bph8FYWBKb9SrEEGsSvs2hGbyGfHFFfB1Ju9C685knJSziVSJHb8VsTn3N4zvjewDrgrxo68unKeNg42bN9D",
  "key45": "2Anc7BShcFQhSpzQNkv9wHhd916uGKg48WhqdtYFLkMjEVBRPpFsJupZ4nwBLRqKSyHK9pmGug6eUhW8914XLTrA",
  "key46": "3zZ1euRh73JmikaJwg7dvXhFnYJBo27hVhCGhsQNrYxBjzgnzoPPN8mzd8czkyhwUyAjDc9sMZ3Bno4VDwHyh9oN"
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
