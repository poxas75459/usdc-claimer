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
    "59ZRxTruDRwkaKLDf5no51Nq8Ce62F5wtVr2PugN9EG5W8EqDHh3bEazVkhT1qPsm8fSCzUNb9Nm7nCWj5BSPEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QrmkCKvJX1bADkBczQFu55BKP9URiCWj5sdgZ5NL1vssDvJDAAsYaQRPVrVwBxBiXPUs2AnhBnZuHqpkCZMojms",
  "key1": "Rzs8xTLGzr3JmpsLuzLDf65JsAD9zEvzDxG2vXY7ah4MFmC9XNsa41SQpHScuviktCwwxeZzN7D7hKRbNCWNkh2",
  "key2": "2AAVbnTrwZenBUrrrRpTye1gyyGntEtAsCmPvMX5LdFvrzgmefe3pwiMz6ZwqbxzK6txyEjseRXtjkUWQwdLCdRX",
  "key3": "1iPshQz8MXqTCm6wbAKYgz47WQ8Ue4PTvzpFDdEpEMkRhzwYTB6APBUDzm4ebBK1zpmMLHaFcbHyNw22Tq9UWU3",
  "key4": "5o1dgCkZ4UgiTeVv9rK2Ti2P9SLp1gzDxjgwQBoXaj8kMsij6U33WMVEvikgVTqxhi8MoB4KMHP8qi3bBzJ7C1QT",
  "key5": "4mdrBscYZkjMMyX1h2957aKbbtnayE5Jhj7j7Qv1jWeJypD39epBFHhEAGwf3HJnJ8ep2BcTGvYaMKc9JXYpbsAe",
  "key6": "5CWWUVxSWsnD4vGTdWb7gFNg6hcxNMzSZ4wyWTQaBD393uJFLfv5WqNe23SERTv2KFUBcFW2NnJFhuwA5Krax4Ru",
  "key7": "2CcUewhzye38cAHRdPjWEFLvxXvzPQNu5jmwYtLCJ22yDUd8JnVCC9XTodLQF8y1nzuQJjm8Pn4HseeJgUVHtfW1",
  "key8": "3hbK9CrjgzCHy87bcPkQ9fHYJhPcxT8ox7P3ubsyhLqobmwZUyk3vAPRbErP51m7XiqrqzQCYcrTnjSoXx6J1YUK",
  "key9": "43sXK33yftWzLAA4ZWdEBbxcnyDKGfNNxDPtRFukCTwDgPeZu3zASmfVB9WvSF7U7RYNEmXoenhW2genwA1ri5Sv",
  "key10": "4KBNyHtxnfdWJ63WATaDW1euSmmqoEz8oetfbTaFDvvXQmCrpniEQew8eS5pYVVfk8NbzcnTbvgZzoThz3yvoMwD",
  "key11": "2ao7JRjg5Vv4PxPX2ZF7iRki83jhqkhwGYrdB5ezNkHcPJA8FNjWWdbGEXwBki5RZ1dMSg3NxkUVoUs9QyjjUbqX",
  "key12": "2i5PSX9Qjd7ZyR45v7QqrrVExHHDdu9LPyi9YWAdR8o7r8uAeCX7aCDdkifFiXjDKmw2VMHJw6ciacTDgqSazyMh",
  "key13": "2R8s4mLobMwTYaTzVmyH4tpkd6Wz32kfdBQsAy3qT3ZxNCdGqcwUDkFoeN6MGSYzzLNEkrbiMvr4qzNoSfnFDQY2",
  "key14": "2XN61HHqEiKbYG41839nZm5Jx27iRoMr6HKr9JX5nUSbEcufqdpKhoCWvd6A3mzB3JQ98yMeScUesn8dpw7Se8Us",
  "key15": "5Rk8W9QsYsfggrPGzoD971tsFEEFMNY893PJGUHinHvK3PQ37ymFe5RMgtsXQ2PXuKeBRSxWBzK6uzLsuUFUp71P",
  "key16": "5NRm1Zq31pmTPHxyfJqsM5tie91VsfVceYWXhgTNaQHz23u2njtdeqbSCzzdHXAgSqF5GQunyo8ZrgNYB6h4Uxs8",
  "key17": "2zhgDNnKiyjvSYBuBivYjQizn4QsgPovcDpF8EJsCxDV5X6WTuYg4M9HtaMjr1fpZnwUay5Ni7uq7M9ANaE6L8RM",
  "key18": "4kRrT4NRbYxBfeygmXUJ1GEP5gaEZif7pCs2P8y7J8XGPDQMnGAeYDg8svnMAqx8YaoPVQAJLgJbbUD8Cf6FGnk",
  "key19": "6yNyJviygorei8nGU1LtoHxkhWNNpo5XfBpPvqbyMGXEEjHy8cJPhSahLCZtn99SgrjPtKLwyGyxmyZLFzTteKY",
  "key20": "3vFdEBPf1TPLT9a8MmKK9tJiC2VvJ1Qxab33ix6mLjCeUMgvvuTs17yAwuhdMJe228Xjt393jTW1GzsE4ysyJ49c",
  "key21": "2i5UdiWCtH4vQQGBzJSQQUqJbgGDHzMDgZ6fDjtwg1FiHM4BHhvYYsrins5Td5xCL8MEtdF7FJ22CwhsbQkAysBD",
  "key22": "2t7p3ezKiegu65TWNkhYjaWZBfcnz3ZBh4Lxmbar9oHK8xy3JWmFxpjsy7UE66GcQZt4s2ekrjZ6fbAjZevdKTHP",
  "key23": "28RMhzYd9xj85CQbFMNRYoBbpqKrARcyAFMESiTwyX3FuMisZiUxA2ptpiFSs4TrF5KEZUsNsoGmgovqSLp4e6pZ",
  "key24": "VFHu6j6K6xm1QWqbCxm7zGMSMc4KS5rP69VqJiPJY2AGZKpS2KYE5QAmzTX1oVNs5f65KT6S7C3ZCUgPy6VFGNX",
  "key25": "tcjH2UmJ8UvqCkhg1GQ62L58R7iuP98rNJgy8WbxMQ2yDzzjf3vaKaoBVJAYyxSfGKqozu7XRZzCssQmj6bxVvP",
  "key26": "4dMtgYXa5EwBLk6A2eG2BSqWLDREHNAKmVBYmxPgoiYrXaZXvFwH6ubi78E1NJLeDnLFtZ5SSJ5FmdYncXKbGYni",
  "key27": "4gRhyryvgzNHHgdG2mzQXNw8gMFwrSZC2EAqdsqajoqTsBLrFksjTEAcYsmLofHAgtufGy6TgU77PgGzJwDL3WQz",
  "key28": "51kEEkTXkTi5ABqpyffFrbiVFojoSnAgSwnrXH2GowSFHupzfqNSQSubv99G1tH8azu7b18rdQFpQ1FgWu4tmFcB",
  "key29": "4icr1qFkMjd9GbXzHxZ1DFfX3jeufso1WQezKNzf58WKd58zavLCotbEmTLGVzo9s9nQaj8w7AVeo484mXXuKwpm",
  "key30": "2fWhX9Wp3MK9G6yHhSDpFVRTuf817Fm8kxVykJcs36pBaoKpWj3UW1sDSsY7rMVN82EhqnS7pR9sK7TxJbUDkk6E",
  "key31": "5MmPExCApfwsscVRNiAF2psJ4Sa1PMJSmwR5yR9EYWRAjgHse4NcHT8zg4L3uRqhKMgAYR5hR2U8vjfbq46aE2cL",
  "key32": "36rqHCZzny2CPXcCFkdbFaJAzDFPHG6GwoJhT73poDFjcTyWo4j8bax8xSKoKZ297TPCam6nz7yGToi6pMHcjnst",
  "key33": "3ubGyn4qsBMhwbiVwPRwt1iUtoQLUYC8hMFAKhvxQU9H55WjMJ3RaK3Et2Htcr6jjKSvPMF1kqceS1eR6ABC3U4U",
  "key34": "2rLXjpMosK4gsi9sbSaYkbZSRt2ecT4P84zk8Unaj2tdRmSQCphTYNvJSuWiCGaPHzMpc1T1sgNAZP4eG5cZCifJ"
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
