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
    "5esDmuXYLptUTqEG7kUMCTkX5Lev8BpVyrU4PhFi37eaVGZ49UgjJyyyFfgNNkBnz4oW9i2XzEwa8zYmuETzwWBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ovMkKdiLYkSiUZMvofPYN3B7ph8h1qzQjG1XGC8dZ1bDEa6gtStF7uPTacAjw4w1rVHTPZRxyw7d8Jq4mU88617",
  "key1": "e8SPZxQnGiVp9kk6JY13yPDQwA8HEe6Mv4gt1B1wsKdBDdX4hedyEwP67BL6xtc583UxBPbaQjEzJCqnh1pbNx1",
  "key2": "5WYLpku1x3a7NUnzr1dLWvrS6o9iWAh3CVUA7Bcm5Xfpjh5dRTw9R4BQURpg2EvvKxtv8kMWcG5Qr7yjHfBFQjZR",
  "key3": "2eogHqMmnAd9oZdSdUE8w7m6wQsgAgFZvqddf1EzMXhbASYa3D688EWGSNBmD84ZVNd8ZZvYksDWXSWuwBSbHNMY",
  "key4": "4LFQLpEFfw1BtRpSfZAczxgeWD48fGmBPkzo8bTsV91Q7QH1KznHSY2kJ1RENosphEb2Fd8tAhSCdhQocro5JTD4",
  "key5": "3FZahBRoUEVSJFnru9HFMwUJyBEYx1tMd1XVmBimSSLStyEeTzS1pNMFgLwBGcwgJ8iC31KbGDuXs8hutgptVxoL",
  "key6": "47K6PMQGxZPpCXfXLmNwSvNMHxMUzs1F4PebnLi7cLXcffJUd22RftXgftuWmZ4UiSUh9jRGoLHcUfwmD9QwSjYf",
  "key7": "AmPSRyKkLs7kz1zqq7MjTjX8b9n7NvB4XXbHpaqHMUqsbn2dJXVpQbiHTNuxLvqfiTxk9BaRuQoeZadwhzMFRqE",
  "key8": "ofWCckPJUsLocPgXaR39DxZrGjaqEHk7tjqP7kJPfGy3VxQkXtwkH5HwtipiswnaaQ23j4HNCUmQtRGZLGn6fLN",
  "key9": "ysxJpMGp6FZCgYqLQhD5YgsESB7aGbbMS5aGLrirutw6mG1QBngq3QgALFTZdsnc2Wa4ia2kakmXwsNcjeevEnz",
  "key10": "3ixcoo3uFMhJUsRGm7XuT2djRnDW5339uLhtKr9iC6WgzRse53eCTP7wHB9mjxxtb9REdx68UTxnP36yzEF9jRGu",
  "key11": "22sJawUEjCd7Veq5Z8vFp9Mhpv8Siwvh2MR8ekBRjoqzGjhGtDNqRtQFwMzH6YqMJ8hKVs2GFB1NjfHnJQ9hGQjq",
  "key12": "9k7orDkkHVAsUtESiN8thi7vkciH3t8xxvWSQ1vhVcEREubuMwHzrKrfgq5647T5iaBpnfDAx19bzrwYWe7WLB4",
  "key13": "4vUSNRFaC4jn9LrYmTrEvrfiBENAhzRDtytAfnCeUXiW5DWJ7UgfuqCRLbxgKbJKTAV7bFyzaQ1BKt41tQ5JMnSi",
  "key14": "4fxUkaKZZnGmeTgKSt7vqFcxSwDgVC6sSDf7pfwMA19pVSPD8VUoUM85sapTyVjeqdBTfCbUTnd4J9GZz7jZesJj",
  "key15": "2xVhSSnmMmRL9PYU3DMc1hkB3cmTna3ZyhxK6q1uXwECdpxftDuTAMPuUUa9aETjo1tghBfrJ7M5NUMQhTmtXPG2",
  "key16": "toNKjkLScNtsQY9Hqyyq1gwVevCQADZC6oaX9V5gDNzqs71LFHExKVbAPv93AaeAbB79aE6XfJo4a4EEw7uodTS",
  "key17": "3XiQiuXQX45K1wxef8TriSXViwfLm4zM4kWs53o4sVunHSztKkmdLzMwDzGAedP1drkDX5d6SwYTSb6z1MCBhfET",
  "key18": "5gd5wjwh2wbx9X6GbenYHAYTXMNPwjY7DBzq5ya1rQvAH7TkUsMECfXM4DLcHGdqy8h8AuBhGvDX2RJfPSQVPf7q",
  "key19": "3BhEGWVHfAqEkgKMhD6wd1kLurdTL4vLAqcFRk2f1eBWuitDy3QezptyEu5xseURbU2ndpxSJWmSNpLGfA1BNBaD",
  "key20": "4vBxmqdMgVALYN3sRm5s4FGdtktwmCbqUnjiQ8XFf1PoeZzJXHSres1JazTrSKWNSamXG6Cnb8xhj1UA2MdBQiKt",
  "key21": "4S6j3UBJHUTK7burYtJfdpvHb26uApmbVjWto6Y4f6AwNxTci8S9vHXpySSwgsfT4MsqKuZqyCAzVq8MF5vErqNA",
  "key22": "gqoNiSdC4P3txuDwX7AZpnrfzTiLJtPTGh76AvorrzqjcPzxrj4kvxdMN232Rr2YTiYBJrhqpQoFx1BTEBJoXrG",
  "key23": "2cg8SSfdF6MttKFB35tKjMoCFYBjL29WmA55XmreQyHqjHW1xiZjGsvvnAgbxfjDQKXS5VmsVhq1pyA7XmhM1VtR",
  "key24": "5ZFfYYTLcJg2tHK9VLAe1ZmPEgafMFbXzeJyRWkUXp6tJs7gd4TQMwvdwxCXtXnWbcpLk9fLBktQVsECV6T7E4tw",
  "key25": "5NznP3sGq4eABZm3oY2vAVuPNjHbtwSyHajMgy5JA5mSYMutMi8LSKwqmTxnarsrLEK8GZNsr1zFoRvcMuvaygis",
  "key26": "3avra7H3h5faUcwpMxL45iHB2ft2jk1BAMseeX9hG7D9L5MRUVo6pqL8KcVJhoBxS8VPKVN7eGGxRgTD2f5kMV85",
  "key27": "4wZk8LAaHvDz4AQ9evsxEnFHZXwAVZ8okY8UjGJYsyBcsidbEpCdaob6zCitooARS28icjv8LNzzTidWkF6pvvyA",
  "key28": "5GHjNznpiCESqgwUuZXEMaxvNiYgQjYACF1DYke8ykmEBTbV8PeSSmH8piXQahZrKTE41KmemkRJ7oc8Tt2NnBpM",
  "key29": "528DL236ACvFJ44kVbywqjnWEnHaoGY59qrCMJbuuJ59BXCEYV7LHY8vRx91xN1BWSf82oZJUeTwq3CM912KzRTw",
  "key30": "3qLvk6e2kth4YZQcSHiVEyUJFKurSALZUSYK5idp9Aave3v1iG11LNvHevAq8CXUMJuwCHnCak5dbZWwgMxRGESX",
  "key31": "55omWo5N4XbLNSYnfb1xbmkqk5zkZoYcvbFG4YaPfGX8jr82BT43QyUTqTYFUDQJwCCtvpf7ykZ4cm5bWsohMmgn",
  "key32": "5ub1NURCZXhEueb6gEgfPuLdMXeWrCTgckCUPRebBfLUmSd4pB3nCviyA8LJX8uB8JF4EYTVU3YHFc9XU8JUG7DF"
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
