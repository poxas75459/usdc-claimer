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
    "4wudtSpw9vQsgy4TibjrdLo34AgNHL2c1QbqeaFi3jXJuZFJtHY8fXUxNGiqbgs8jZCpYhaYg6T38XoGTeTi8wLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tbwEZCNYESa8eUNvya4SMauzYDVYn4wy14gPL86PQpobqHjBm8XFHJnioMtr4BfHcrubeJUrKpXrR4b4Q2zwXUA",
  "key1": "34m6mwvkhD2Pa7f8Br8d7TxeQDZMg9eRsAVLYe8TdJ6oDjdVTfDDCaRXgWfKqT4BA1e6RHryS4o249aMvsr622fG",
  "key2": "2fVB5Nf22Y5sewkgq4jVWB1bKEW4JzawyGQWSgWQ4Cn4PEUX4aAPeqjaGzC99LQmuMsDS2PmP5vjL7nt6pnJZbU5",
  "key3": "DPRDf3KqHNswNxySsebFVfyYUw9dQfyxw1j5mY7QNASn3C6jVCVqYdLhcJU8hDFEWYpebmJKZ7GdBjX1Qa6GZyq",
  "key4": "34LkGGADEUQdmCLtmeTBKMz7xgtMXjpyzh9QQrXqfjnda4PNp1EKKs8CfUZE3EYBatvSBoSM79jTKo6hndjExaEF",
  "key5": "5SzePyZeoGNmGvp1ZVHwtyJ7SnNHSMmoyvGTRxEdUjzEQda2jMeSbakFwGKhFJM1iAdoTHA6pvagJi4CdX8JyBU8",
  "key6": "2tLiMUDc68a93VLG7YwvoLKyCzALwMZaaUyEeuyWXq4MgDFjMeVq1DMT5RxcCvcn1LKWKY8dSkQwQZ9hzUXiZfBL",
  "key7": "2PHWAxgFDgFEvpJkWbRxnkiQis4XtEXYwDtBkVkjYhmynJLm6yXDNwm1LH9qvpJtNdYaCJq9ZTCCtc1J1y2jBs4W",
  "key8": "5dzGz4v7WHSRMzsAY7X9SC5y8y99djauDRrtC3pxYFDq5j7RTuEroKdy1hQAnn9hYqExLkuM2zjQpi9T86BW9aXF",
  "key9": "3avVgqV7kBsLfNWLG15qwewzrL89AYTjueo4MZPvmNL9Lod7zRZSBRjoX7MiGMkTcWgv6swzwMm1gVh5EnzycbW9",
  "key10": "44SJWsknWKgk8Ud5NA12eQ7brVvAJjD7TJRvJ8KshEp256yHz1pxPkAnD3Hj2JkZVadwnmwKVxZCm6yKn1WH68vL",
  "key11": "3PhXBYiiTbbt491yrdnULGoHLjMvTAhQRBF4K7x4B1sPdhUKPmDfuHLJ3YXb1vUEwJq4N8GJoBD7GeuyT3b5ZBk",
  "key12": "KSyeLovwQABAz39yZPLz9Qqu6zdRsF5V1rQRKwgXv4NyatxrLkroQsPhAGJVJRtxNSZXcjAs8dwr5CfcVtUdnJ3",
  "key13": "rGusxF4x3gs9kfRqmrYxLwQXeY7Spnf3uvQHrQbirdqx2eNLUaPVvjYYr9i8GCsm32pvbZ3ReRWNzJtFwokaChC",
  "key14": "4cRx5TsrFrF3iwe9xPreW51J8M59tKnL93sWVnU6hx7wLDUWfum21pHKSnRPm97fumXrYiCvn5ZtTnoXw4Xb1tSw",
  "key15": "2DkjUGYFU5jFZKypYVJSKVryEBenC98iUr7qRFDajn7qWdJrb844gkT76ahfAPu7xzTU4c1BWKVuijbxEyekWiXy",
  "key16": "3TCFeLRKawbqqzi1Teju5waDchYjJLj2LwYTxp8SFBTSXDv5YHAEfZHxzFHYzGW1F1BevRkjHe99GCMTEmYRg4PC",
  "key17": "5H8VASoeRNLxT3na3xmKyapgMrnKy6857mYyGdMjSrF1acuMh33F9ug62GgaY9VAmk8E2MaSuDSEv66SNoQF75YA",
  "key18": "2AE46CfHpiXt8YswLm5kWsmo8SZnrsJmy9XLWtAsuhS1tgipjYTbxRsn9BV4s3Mgcw7gSFUQssgPSrzFpWY734ua",
  "key19": "2pFULqZGn5KmbPueVRPeQHh2kcrM2meFSdVyiJiWbU1oY1ExUP5PQe7iYYDnCm9BbgLVMZYjaEnteBq9T4pB4zvX",
  "key20": "4PuWGEe23TaPDnUYt27ZS6H28hhMvbyFHr1bLn4ECF4HBjQL7qyZn2QB2nYzLyhRvfVmFSx4nYPtvJGGiQ5gSeWa",
  "key21": "61MseWu1UeYDMz1K3KH4RoqbBqN7qmNjquRktj7v9QswnUK9yfgmiA1GZtbxira37Yxyk2Fz4NqTmghJQPDce8FM",
  "key22": "2fruUn3PXdB3jSEmzMX4N63ErykTpd8UZQuA3hM67NeK52rs9qKzG5Z41Shw35ftGYzuxnSppMSesBdT1guSFxHv",
  "key23": "5GhY84Dd86VD7pbdPZdUQbrfnKrhSfhmjCRxBbKJYZdFrDEKztSdKDWUY3J2hcdxyBb5G63Lgk4ghSjdT4ayjqBP",
  "key24": "56j6d2NmG3VfjDy24HsgDAJcrsbgkEDp98e6p1MRjJdx8XXnzWDc76XXob94yt1xNBW3QhMRfq5aU8dKEjD5VxQa",
  "key25": "5FTv529ATDLWSD3yCXneEJYsKTtnNmHQiMqrsxh9kuyixTk3GWvUw7xka8XcSyUWJLd1rMpWBshqTs86HeasocXK",
  "key26": "rqsinuEf88SAyTyJo4cmt6YX2ojoF5k8xiS3yFKm7gDwwh194WbwNDqbMVToQRb6iuckoA45G6EjUMEto479522",
  "key27": "28uPrNsW8fu15ZvgbNyPdygrzsnkr5npb866PXqpo4j52hiwwK86zgPK7vWQT9yNtsecfwracpqGwzt3EjVB1DhC",
  "key28": "2g7iv2e1kVtEGKpuJRHGViTnUapKoo1AkQ5XMNeJ756x5xpcz2vdrxDHhrRMZeHRtEcDC3g7Ym1zwuhetRPiZuYa",
  "key29": "2WHoKJh6f6SLwnuxAFrXkPx4ZGWrnG8jMYULX4doQApJpoeGyRyJBBsGmAnteJ9v2k16xW7ZkNt3zAQYvCN7Zg2A",
  "key30": "4NNrf9mCWJfkoZJ7EFbjsjk1pMr37fzd3ov4DyeparroMxaSkBgKCpXDDtCqbMjs31ZzopkUKgF4CLznQNu4WHLX",
  "key31": "2bTashZ4NP7qsPU8t6C4RsBZF3UGwr9CDEq3qSh9Gm2QZz9s5VERMnkfHDC5vGbvMYZi7grGeTSBdE4jQuV4x6Kh",
  "key32": "2reeRmSPtV2eEPNEjufqMrujFGWLgUaXWVbyCSCsatypCiyasXqmBWYPuVXnTvbdeJXfmcwjBgWQaDKWvKMvpsAV",
  "key33": "5ah5E6DvBYYnqTtcFqXd7PZZpCs8WJ5b38SqbzLZ56fgBrCFbz8QKGrJ1RJxTRYRvxxzzGcbTNWPmqjcNjqFLEni",
  "key34": "42QU1D63CU4qqaAeK3HKmgFkqRgsSFk8KkGNgPH8W3cowwgGxKpL73Sin7HxVq2iJfTrfactrqMXXZmi3E96M97T",
  "key35": "iaznwvJRep652BaX31rARPPMwcc4uiEMDGQG1L4xdFciwTGoGxqfcUQbQakgvFyKKW9Ue1jCRDryp8Nb1UhxVum",
  "key36": "5YG9iANM17JiEqwu6iJGk8Ag2dFti2bYcq92LjxR7UvpCyE17aZ6aCC1gUEHwB2uBezrSA3aNSjnNjDBsWnscJxQ"
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
