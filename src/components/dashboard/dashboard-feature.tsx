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
    "528eQdvqukrLAEr2s6gLroNS3mBBhKuS3e8a7EGqwk5DKfW55vDBifuZE7KdqiJrzT96trmrDBmiUhhUMtJueQyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49JNpRZnhN6wf2vfp6Dp3ZirVNbfzYDPQ7aUy1yCUUUPYU4fP4ULoD5Nd1K5dKYNbMaPnjPHhUvm1daWX8mtzxmy",
  "key1": "5CPkkeNJpJEofoffi7Pg9quCFxsssVeVHGTTzuJzAf6P4hhyXCjKaArwi3MXHZC1GvtYm9pqzEiMGi5BxxVdz1ym",
  "key2": "5kDssQ4bpDzGAwg198mCgc8j9YZ2amNCBQHx6ZxYKvUCWBQ7Ckj2tPkTeeGKq2qqU2YeXjG9cjem1MEWkdD1c5mg",
  "key3": "WGzbQTWrnAGJa2SXEt3mBdPx6trsFQhvVJRXenQW9efEfLgVfW23LtNWFUt7JeMw9cVCr7uJFMUk2D5MdhwB59W",
  "key4": "5yAwo2bUbuQj1hmrgo1G5bjtdM6cicxaVS1kXr7YTA8T7Czvqdyr5G5c7V7TJfnxCE4VHSFTRQYufGVwUidGkSTX",
  "key5": "2QBbsRf4iSYXo2h74mcgCvo9u3gczdV3mcwGqhCobwaJVwPnQWBnjqUccT1Y1dt8uRmhknN75JTE3WybbiVbxNXm",
  "key6": "5LnTo3qBQAiyXsU6zJQemDg9WfKCWhQqCA2UrYWjBSNAQ9JfVYh2eW2GAw4oksoryMax987gYncfUTVzyTvHLD29",
  "key7": "3w6wSeRvMDt5ZHf2A9mcT1Cu4u7Hb1pMs8Joiaa32c364Zh2BqV7LuW7j5Mp61So9nVYPBiBJVrqZvWeX2ZndZ6m",
  "key8": "591SqAEVKCu5KQi5GaS6mPGYHLpTdjGFtsrCpdzFf18XLGAtxsB7NNzvTRAYMFWJqDCBMfwSSee3S5mQRnR343D7",
  "key9": "4xrbdDoNFzLBMr6rvhksRQ6NDbKwsqvp2e3bgD2Qa7hbpQhkcnZZb2HderZDd7DAyhpYCY2kTD294H1zbfz45QkK",
  "key10": "5rfhMTQrTvRz92h4rQ2F9w3Q2G5WCKY8ziu7R4hvJAKVrraPmJaPB6St9pZsjm9QesjXDj2JoQg9syNrkktc2uK9",
  "key11": "55nthD3i16Jwnh437NEfHDo5oDEQQhkrv2Q8RAZWMjAkg8Q1csuin9R5tbMnU5S7F5wvLmuJsPWXHWQqE6tegaVF",
  "key12": "2AjhRnBAGQMmuceHwcDUt8E1MJmvt9X7g2AjxpcwZACZarXtyr6QXLZCeY8w3nexL2mnYErcNWaq1FgXXJQTm694",
  "key13": "59La1un2gJZ3Gj5iUT5Rs9F4ZsPqyaVX2rFG7pQJPS6Sqaox3q5V6Nzbtd1reLNef5xBuwPRiYeMVAoUnqxnoN6u",
  "key14": "5g3XLFHCPfWguNpNmwK8c7rvTVxzSpBB2UguaVsWt2tFmgsPjauKwRWHqkmmUSoUy8poUwZ78tuUTa4qETT5yAqV",
  "key15": "4etPujWy8BNSonLpQ3eYHnLkr1yMtPPmnsBx6Yuqb7nVV1ZJTC2HRwmeV7mT6B5sTTbYK2LbB59xvirq9HzPJ3L7",
  "key16": "ZaPmyDY85QgJQ1RVbRifZKnCGwkVgcXEHKS782cbY16ufiRUBpMoZDUGj1QEwUk1UtkMonHALD3yuShvUSmeopN",
  "key17": "wE3NtdJBGGQWGrn3oLT32NgV2yUgKsSVB9gNNcM9BQMS6u3uGiHt1bmYRu5zp9VgLcNZqP8GZbPQvF3ofyGLgJf",
  "key18": "gtMV44zXJ2wTvwujtd6pcmwsDsPhK5WvErP8gSUyQADN9xdhd6vP8MGnwr2mS3KpXMVSKYZ9zjNbaNXxceU63BW",
  "key19": "222hfXL4CuoM3L9H4XR3a2Pxcb7jWERqNAuPVrBBZkfMvKJ1jPddBzsVxdWeUPUwdv9xGHpRi48xXfkS4eV9G9Yz",
  "key20": "zQQ9CL3HBwc61kjfERvwgmGwEJhzm87R8m2jx8NiH9yNYpBZ3aMVFvRtydW4XRKdXY7sP2S3bXnxeicp4535wnJ",
  "key21": "3UXNkJz9Rsf7jzuKLEPzBMMAnokdhh7ptxuVA8qghhKiX7WofV54GTsnXem9V3dJheFWV5vEpqbgpPvVnzihYVXt",
  "key22": "3QEYAVFuEvUW3EX2HGBRK5BMaPuvSiy8ebBUyjgf8LWf1eTHkz9jB1JEY6MJjfCMet2S1k9HMiNfS7UYG9mUmKkn",
  "key23": "5FHVSGZqPRQ33aQHyymCoxdKcYkthhfc3ZJDYEZSjGUhkMQaHhLtBTEGYvhZxWW1ihbSQfT4L4BUUo4wQCZk79jT",
  "key24": "3cBkw6QFzaVk4aiiTkRvDKDGp8qZDeZnzWpUH7BUv2rE6o3gjzNkErecowZpueg7pAnowzpbf1SCFwUduuHw6rAD",
  "key25": "xN1vMhqFWcE2wwFDHrYzb7UcMMtgmJw7d6SssDthL5qjZFH73rw8Ck2RgwCwd5xQqc3FxhMF3gsLLXLvPZ7AZBK",
  "key26": "5biLcFa5LdbHfPFSgyscmSW8T6LAUCufgqSU4Hk4M4gZF4v3JA4kV9g2pvGiNqdxasD5ZZsUiKQS1bta95oacTf3",
  "key27": "4Ff9LY4qDw4DnxNAeLTN9hyHUWXfcAB58E3s6gbxNh8uW1FDfuQZqJagJJAJ9v8tbkANWCu6EYkf1X5ngDQbuvjZ",
  "key28": "dHGeofZVBgzfakBNHW23ediUre7RfVaUTHew2JYyXRMRJx78xT4qGYxqnA6ANwuUqbQTNYz9cqXZdqeunSf8LVx",
  "key29": "4t5itiX4iUmXeWzg1fSovh6ExC7Dhr4d8a5hGYL77J9YBzcMpotnxZxFNoKurthTsnguftXX5fgz2UapyUnyxawc",
  "key30": "K9wmf3sckjM1AZceFupJ3e3pZ2iBhoXwEwbk3EBByQj7CrdXbLuYb7hzoRKoM4i6mFsCKvd3EeetzVShssurMG4",
  "key31": "3BYnQg63J8cbUHQBhCXXsX8tfQiPiYRwugeHPRbCpkn34HwKn3Eo4wk95HvTZA2YQ9ftkq9xWFkFGbzd3UzG2bD",
  "key32": "2Sxs1oNZz67TDUyHWNafXCxUqyNXQDVrWp4nos1BudndAXeXZN7WiVnqteHYwNC3wFo1hEUh7UbvhQTf9HtB3EXX",
  "key33": "mqp3bNoZwGPGjnJkRcmR3zSMjZxsmUeHBo9wFTFkyxUP88XHwcmN7kTCgWYbfpdN6NERvzppC43wYVWzXsoUVFR",
  "key34": "425XAnwuL8rBs4dAZiDLqiHb65MegVjAkoTkgUQNKNYvUxZhC6xH2yKbBup3nnorej7JtMKg51SLZFxESKq4uTfQ",
  "key35": "3NyLxRn8oG3NrPqrMnuHVCgbaQg4SCor9qadNP6Buccm1kw3sDZ1cLvtijsKeXgSochhnGxGmpxGfsSBP1KmabBC",
  "key36": "5NqvffrgxUiWKLziviPASKhuvyDrNDfS1mpEXSF7sXYwovC43pYmm8utYk7f25pV9wC9UKvaruKVWmGAvMPKpn1A",
  "key37": "4Zbw94SvwUxp2fbxZmF9x6sRxUz5jXUnCjJTrQWeJM9kyjyWd8nT4V1cMJMiu6xdtAu6ZfwjvnYV4ScdRcYmEahF",
  "key38": "5JGxVsPt3fqms8JzbFyEniKvcXstTiGDm6N4smJTn1JkqPqmT2cu39CAW1iXDWoKujjNHKsBrBnvboPTTrXRxHfq",
  "key39": "52rW7pX3iqS27HM4jp3AFinFkudnzZiNUqhpmvsdNcRfcQjYiDRQho22DU3zWKpKAB8A78nYfWe98oR2w4ZwE2jD",
  "key40": "7QKPLS788XMXetZxLeTxmniS1oL8HmKn1MzNUwqnfQ2nA1gm4nt82k8vBMhLcAKti5DA25qaudVTLSmEFnnaUCq"
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
