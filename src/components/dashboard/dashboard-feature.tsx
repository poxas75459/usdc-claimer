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
    "28oCo3AfP1qzvrBC9FRk39wXnmdkbNkTXonDQP9231HzQGATHv3GYj1tHhi2f9rQCh8sGLQXxppvyB2QVFYCGQQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JuWMxnevt2LfZRMXPgyCXJBtF75RCMGrVhwjfMMJvaBey31unhgZqBhXT8gRTQLyGDBKwjU1dvrH1T4rnxgYwPn",
  "key1": "2s7B3yA9BCC6PXv64Mq3eESnqygme4eZHf96QAbKcq7pZWbPSBuHqxnVUDpSoEgokooX3WeoQvajionQxZK5u8dF",
  "key2": "4pGuqX9mznJqNMJ8qaM8Ns3qc621GBMGBHW2k31HsA59epphsgvvKUt3r8uNa3BAxpjwK3uJmHu4rX9Ry6BPiM28",
  "key3": "mBGh1LKAcpKLgov1Dju9abJc7Fsp3NMAaepVRLBNxWJY93BdWusFqWpBdcHNnWMMNmK2FYLsaAXnw1ikbkUFTd5",
  "key4": "2b8NtTh7ewvA9ic7wWrEsBdnqe3yxMemeHkQhQdQrTku1aEdEWrYvQFBEGDnDUj7WMbLvJQcb3TKx2Y8mwSqUB8G",
  "key5": "5sBB2KMZvYZDdN1SpieJuGaifeWQh7TdxfsnyrYtMXqYcRQm9bS7Z7VP3MbEPFiCbjxg7F1woF97LJkHNEqHQBx",
  "key6": "3W1TRatYsWH9vaEzQcpupGwu9aA1BANqCqA7gUszhWrPQL4sijraZfkFtsDqXmihT665LBpgL3sVFLJCuewkG93",
  "key7": "59nhbWpcw7LrwEarNVQD8124uuMXjPkC6UDLsAx2UfJJLtSrdHqzJpYL2Pm8SbQMHmHjpAfLYGiGcHrDRPaHpUFY",
  "key8": "5UQB1Nq4jqTQ6PqTeD55rNbXVHGNMK5dnbrQp65zohwr1ZznenwnJrgEYQ8b9joo6cjXcHKxeyvWihmA6JF2knT3",
  "key9": "4sQqDvkCN8a8hShurrCFnJxM8MVkowqPe1TuYt97t2Gofy5qRzEY7QPcwPZFePp96Gwb2LGXZfqEVXj2QWCEcZoq",
  "key10": "64rQ35MDMME1auU2MXTsaDNLYcF4aZJCgEYdewtF4hkHpzd6i8rpRxKhYTdk1oTzebscYyJ3hMwiQwwcrWtVgpDG",
  "key11": "27ipTKmF5V7ZYgqbLiLbfNJQXEZnGLPYy7GYEh1U7qHZC7HVheYUyUPZAKhNpGRZneuRkchmsxL2aVnigmfMyrVt",
  "key12": "PeFuRBTKuPGPcT7wzsWv9iZPFkyUpo34hj6K5Hbga19R4zzW69K5zN4Y1UXdE1kFN6g79DRLWAedHZAoAJDDKkn",
  "key13": "REyA5gnyWHsXqdW3zYfqnbiNqh8p9Vw1Zz9S4tupdGuLsK9D2vmBa5er6rYWkM8jbC9PXZcym3F1T2Cu7N6s53f",
  "key14": "4GZkAwRPkQ4kw4memrQy4pZrcWP3aSgw2PuRwYUa3Ao9YCJdjpsh9rHaXCh37NrnZZivtccMWENienjPUYNiQ4j",
  "key15": "5v65s3m7ya6wrG2W3AbofKPsp1w137XQzQnoyHuKD3npVLn8Uakth7AjrBUuT6CjKAcGBjNrWoiaYErKaxD7R9PU",
  "key16": "4aRtpooV7B9LxFXCYkjy1fkc27KeaphhG5643aoGX3QNnygohJW3jzqYhwjdRUeYQxMyNRdyTiCSHGZFr6XnGpiv",
  "key17": "5u5M6MizzE3UxYhNfFSxCeCAt8W7WKF6TfcUzB4tFGTJzMSa37tdx1Eeo7UnNhLsnQVUonbCy8yfWmh53JRsJbQK",
  "key18": "4TrXV6LjBCgwWoTZiVqBcMXuZTkT2voZfBk8abMKpv78b65kTevriacF8b8KyStp6YQ75twH3PKuSPFf3ezFs1i8",
  "key19": "3KH2x73GsGndDSymZqnyAXV22FCENMML7ZtDg6zWMmqSYdvghrPSkX2JZ8udKtBfBvVrMgbfiptvtA5RuLx4YobP",
  "key20": "5yQehryLCdJ5efsbwxYGbRAJ8RQuKHsKpMGihyjF25RzYxkXwg3XiPtajDjd2MPu68bXT71ydnZEiq8jRZbuDpV6",
  "key21": "41Pv1QhLXjKmEZaJZmG8SaVFD6GSSBtxZgcuYkdUspuYRQVASbLMkwr8eMVVmangMENtqGLMQY1SmTtnuN24eYuB",
  "key22": "58d4YmfXbNMBeHx1vRbyn8qRo93A7Cbfe1zj3Zs6L9f6cSkN5DRHefH5W2nA3vGe4Smj5CUvqTy6EzD9BqhKoeF7",
  "key23": "61H5nuEAEvRHYYtfRAu3mRbyWpVNtk7c3t4A6SHRcyrLJnGpbXmj7D2Ki4dXdZj9wRRknStFAMqupGoP44jvzeF6",
  "key24": "gDu7vkZfSthi1pHu6UULKC9qS5FrTXuLsCz85S9XHkT32QwbGeUDTqh2TkUKYKae3BAJwTx5VmppyrdKHg9Q58A",
  "key25": "5axtrX9b39MscD1zKvr53e44GNXYTC3h9hgs5Nt8NAzyWrahoKUVDpung7nncNiCfbhfBoXFJJNiV44BJHujhtLu",
  "key26": "3f4ZthPFgpvJtuBA4SuRU3HCG9rb8rzBEXqSaD4m3mBnce2sqDs5XLHWrvhH3ifFPzzT6TD83in1uDF7Mi3tK7rb",
  "key27": "4ZcC63PUFa9hs8GqxvZCn1PdidS17Uv6czRgQtxqpkFKUYpWxKWnaPJffRYbmxeRxNdHCZgPv8KuVuWTgyGeDBNf",
  "key28": "5R8Y5wPxy9LQM97UN5sDWLdjjBozXTH7ZPBrHvQcN5G2U4ZbWFFAu4qtxj26n6PCuJh1H5cp9Gm2knUu4tqKdnqV",
  "key29": "4qqJEdben145i2vydr5AHQ58pJFPwBhMiedw8Qx8nCgSYfVvBpUAuvK9Noh4pLtQ1hUKoUYnsY5ig2QYECwKPFV6",
  "key30": "XCoqoaaneYurcLfZpH7A2PgXTARQVvHxutmp4ZKKuMGdJEANT55hhvs2bvbXD1GNnrBhsr5UbMVaY8dJoyLBzn3",
  "key31": "4PGoZPW1ZkDhsXADbVRzKDdu99BaDSAhy9W78eqELhcQknxnv5R6537KLKZRtd4NpVLia5z9pWRuGd8sHxNYHP2A",
  "key32": "5ru5hKZFW6oSekGQShJgxRA9nM9CHXSUwi2Vax2MTdN5NHdfYAi3WyhbPGtJtT2YUDaHq8xavJhRx8iwdbN8N6HH"
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
