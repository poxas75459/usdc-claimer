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
    "5NWfv8GzdDoTbhtBNyrp53nYx4NGajfzdQbK41FbxioG8vnCrdtB4GJgWrW5ype5nJe6syFijJ2c69Y5RXutmpuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RF87osuqmev9y8bk7k6sFKJ6EuohsCZ3geFEZVBmx2w4GYAQtA7BJZR1n1NughBraMAeFiMZnzbV9vicx4eJLxP",
  "key1": "5s1yNcDF3rNnncWFeeEqqCbTYRhueK3GKN2cbqQrYK3W2iMHzhtR4vK2k52JdTX5MmNEe8D4cB6ZigdiNnSNE9Cn",
  "key2": "2pd6LgXhN5Rz8kswJJ3sLR4NvZUL4UcRwZbCkfXs7BnYR97epAxomByasDb9MxChz9re68cFt2Eb3tUbD7ttYife",
  "key3": "2yo4wzVVMoWNSfBf5hTyvDa3ECT9rxLHKjEfoSXXbg8aQQ9UG2YAPpzeZUzgUhY2e4Jc2n55VvvmjdSwoDtUUzcX",
  "key4": "xKJUxAf6z2q8WaX8Xg4GxHUuSqMtscvdmNxnhr4yJkrEVXMgJnkjM9ZUkWdjCmjzAfKFUjpBcTDACmE6FQGbmDC",
  "key5": "52pLqkqnXNYQLpYuZ1zcLfpNuS5dAzDE1TXrzzVKEZoug2R8317VkxhMPPBW4s1UXzsbQF1SnPPSazEGgTk93QQo",
  "key6": "4JEAtumRcPjsAUtHhcpQ8LDAMzptoLogCKjdpjkPhqvsfuRUr8c8CF4jv6onjXEdLB8R8WLg8vmuFLsaT5s3VkBh",
  "key7": "zCAKnFg8xxwpmfQDTrVG7wqbZ3q8L5JoftEENRtmXcGyUM6xxo8UiQFcC6WBea2msmxvvhMJ8YCSX7rRn5jUZo3",
  "key8": "3qKzshnPA9V8JvSrzqT7fXHWuWS1QpW3BatDDZ7y8nopLfumYhhR5Da2kXhWQP5zDtRpZ9qxiBXXuX4TQXZXbBFY",
  "key9": "2yPaj3LZzchStoJxS1SsTEXSJx6tDtrAiQDVNxgJpbHS1vWZ49b6VtzwfTKEZPQTyAnTo53DuQS7cSY2MuTL3UTk",
  "key10": "gBbLJuy5SrxFKv31wSVVb1FGs6Gk8MMm1wuqRvX6nSmc8CkvywEX1X8emqhKD7LvsAL4gzRSvBdfsW8yZd4S66U",
  "key11": "3noVRDvzwjrUQeEEyBeJdVixxGH641CP2jtKmP57b6UzZfvzZBAn85pv21SmQ42bXJNJbsGt9x9TAdo1eCRp5s9y",
  "key12": "3hEuv22zTqF1qvx2EfDVpRFM4UanbbZUrkiPbkGTsEKd3scYYh3N2qnrfYPPgnVXCY6rHJfLpz7mncDo8PuxFE9G",
  "key13": "49vMnMkNj5vc2wYQpFcnSCe2VFKhP9TUaYDeb8Vt3Ka1YyWnxKwsWdg7MkeGa13n65twMkS1WzyJQJgN2JNDtQsL",
  "key14": "49zJttJ64X3Ja7XC8ZkdTu3P3Yg8JwBpiZufhnzpXScKN4AbkCjRtUDv4isPFEaixtvnUT6BwcqSp2itMsA1G7Ad",
  "key15": "3NMA4LhPLYMqK5FtioJv4uDVJeM72RdPTpPoYY11qjkaTrR7TAmNAJSnQECm1LxQjsiUJPsF3Yu7mf4MaDNa4XXV",
  "key16": "4vWuVBuKRVqQgL4mvDHdB5Q3QmFC1B7G99xiYDFY1eskENBpJaQrT6Z8jMB26LFmdp6GKYDia12emQYfWXq8i45Q",
  "key17": "3DSZZqcdinUKag7zvoxLwNxuPfzne7q9fY59HhkXa7jeWS2nCTyhfDAZMFMVdC8LE4SKrMcVj2JKa5tsk1Nctr6v",
  "key18": "22ESJDhEmGd7nuBU9Uo66nnzmmJ5yHXJ9JCeEf5B2aNtoHuWpFd9zHxHoFidvPec3TR4BhtgNCcfYepFSpPh8rCP",
  "key19": "47QvWvtSk5uyJ9aDAPsSUnT3ZkdjwAFbgnRqbGCNwEcgRHFYQk5cR1crWSDT1gN1NqDFiLRFbLfqT8Mb8xoLfutC",
  "key20": "aY4c7yfETT9Zf9PeYfzENxMYzqmPJfofeFBbARmfv1KJKHPNgtNadmFGaSKDAzu7Qf1KEJ499HGp9XH1KwW62XS",
  "key21": "4gDCeQjTqB4Wd2H56LEsC1WpVFwMZkRe5CbCHciC49XEfXEbxYoM2pE67SyWQvw94pB4EX8rmHCJ3sQMdfyT8Xt8",
  "key22": "45zgjnrsGgF5f1dp4pCSBtewyeFrMtBxb1XMmKsXb5Jk9hA2iS9qQa7Ek9fLSCETDc1m2rtLYDGFLXfKbg1WWH3T",
  "key23": "5kWvZ7q1FHKZqM34dSFVvfSGN9v9ZK61hQ9CaVovxo2oGk9QPkwm7nrxYmUr4KGMgsDUWypEY5Hq32nom1FgEwkQ",
  "key24": "2NwS1Qy3a4w8HdrY59xm6TF6kYCfroFFte4a6qzZBeuKh6D44vkUYTps1xbFJzgVAkvHC3heVDvVsGQBnsboC7EG",
  "key25": "HVg4ZLBu6BzXAnwZQq2TUFLtTgQLcKhsXSA9DXyTUsHH58sahxCbKp3jQYarwnEV8Ch9LWGJ9ddcaurT5UW4B8n",
  "key26": "32goR3guP3Rc6CPSNix9oRHWpoEUyiWUY2qdhgh2JH9uBuiJtHM6Fn4jyoyhrKAghTouq46NNeRd1vc5AaPBT7HS",
  "key27": "4LrYmARU6L2XhTijAcwDdCd8UxNhLpTD93vec2yesd25q8rFtyXMqSN6rUdqeyXnW56MEJCysxgYFEapiE5GVqK5",
  "key28": "5PwfVZ6hv5VTwnSgp8NArstGrBxFnxsXmjv2rMNrqhzCDddGbQi4cU5zUuErFEMXzejLbJ16UPkJmqUaJwMcWALw",
  "key29": "466nS2EUp1MmPNFZFZPybTMAB4tK5SCrqekK2VhRKrUDqeejtCKaZ3sumU8ayEFa34vciCVX1V3sdYXBiff4jqa9",
  "key30": "XG2Kzv3T5YbW1Z6MbQdGkcFsb3sCP8qdSAXaMCLGGaYvrRrHPpjtqiBXkLPSwofHDHF8SUzjHyz27CaJphcgQGD",
  "key31": "5P7X7WKDgFB2j7thjG9nZfZUwWDcLaZUcnnB9AF8F74Z76zU7SLpppLXAC2PyetpE3MyEdyAeXnivASNb2vHWN9p",
  "key32": "2K6WLiGyigSVfGRXAGQViG2JvB5UDTv6zsR7vUh4ELF7XnPsESPzphegJGpHUMoerTCp2DWpZgR1ZB37ceiwwtmn",
  "key33": "2EYBt1y6LYuHkB2oFq362o3Liz2hYRewANRXeeU96BRnhPC4VDnUAeAtC8r2WFbvFeHCCL9dsCMkHuoGyrHXcmgP",
  "key34": "5U6AzB82bkubivhrpQC585szAsHb61fQGWYsQ1aauHx8UcgbHjLY2qPApu3VLUq9BVcXX6JEoB8xbvLbHkNedKnC",
  "key35": "3tbTzq37AJZBWTwy25xn6JCRz44S9RP8AwypwZhwcduwoobmAgYx9VNDmtKjK6zyAGVFi4DHQiamqqp2EDR3tMXu",
  "key36": "5xw3J5RY4tJmu1gZekjzwVMgYGhba4K3VwWCMt2aRVsaPxB72gEUncWGQwvm4mYwVXMxuuDAaoDpMyjGr62WZccS",
  "key37": "39eG5p2JRvaNfrgcvqaur6iUX9XUbYPnFZrLgsweFRTivrgLp3jL9HXtNQbyJG4T48L19Q8MNW66McrZ2gB4jTik",
  "key38": "rY76V3WcxqL5pqvjxZ6egxDjRTjiz7ZukNEHqke4pUhTEpGfr4MtNXEjk8KRx2vhYprhPhFNKgqhKEJwBUsPCr6"
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
