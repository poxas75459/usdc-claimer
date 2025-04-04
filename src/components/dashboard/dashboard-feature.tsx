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
    "4GbAhVyMiTPGpdGDUGhmeDjHPu8mBC1DwGf3BhU6Xp2QSaHVMXGinFtiJpNGkQjYtNYuNX4ffac56FeGHaNEWLbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67XHxxa4zaimdzSr5kn5ZhyiswgTgMD5moes4PuQEZWpfbe5h18tN3kKhgmaaGvK5LiKd5vnHgUWciQnDpXyF6ni",
  "key1": "3zFEupsJ8opzXpEhwyrmosMqAiPGA7zPhvauZ8aVCg3Uht9vvUQWpquww8vyB7pTGFqxiXgaWGwAGQhA4LhoeKtV",
  "key2": "Tymtu8EUB4D3zpp5AEMqmsPXacvaVNd3EfmHbfEBN6ZBM6ZJMj54iCVzNjRTL1uMtPHJKmVADsX8YX6FRcKyU8U",
  "key3": "k756ETcdQUuXYyeNxNdjyVmzuAaMYKDg53F2edstG5vjoRWWCxJD6HR4FaMj7sZqMJH3uhiiR7pUD2u7yPUEA1s",
  "key4": "5qJX6XsMFvNdekpxrNu2z1E64mSnUmDaAuoS3oVForbAFvgW6G748cUCmRFGBQSKqfNW7NmXwMv7AoJ3guKKcgE5",
  "key5": "4QSg2JM4uX9FTQoKoMM2cm8LX6U5ZcUp4ajtFTBdTBcNhTS9EodagR5RjCktxm1mx2Knv3k1ytLK1RksYEu7Rv6w",
  "key6": "5W4AcyznFjAFdDHVhP91d51pGaynrYfbrwDd3vQcAJBBCsEeMX1XPShwv8BufafHUnRU4zd27x92Rj2NRNSNqZEQ",
  "key7": "37UN6PbgdQKCecSKvXj9tPfbDX9jon8aUb3M4gfjsRyxygY7yqsXXyC7g85QJbGB1L5765XYSvTr7C32cqGRS2VM",
  "key8": "5uv9uHTQVwuceuqZG1UpkDMu6vtbLXDcVd6gywfeP1Z96fsfbm42umMVoSXMz8edvuXZ9ZMR78GF1Q2Bx6AyPHWV",
  "key9": "GAJphj8fVma4oNpJAsbuREffZDwf5wYhKJNEpZjy6F8vWwgZC65eqZJjDqU94wyeoKxUdLKtB2gcgyj7EAkGtTX",
  "key10": "2cQ1p8mVLZpyyq7xYctJR2mDq9nRxgxUcpHVWYSJXTSgJvyfHdUqyRoz5jPBarRxwFr93Qu17KEomzxbqhFCgCN6",
  "key11": "toQAEPKEefnPpKNFYeQWPitQZPKSwCcAwJKQzV7MPXfo8KnQaYwVccaykQK5c9Pt4VmGduaTipcWEvjtrAiuoP8",
  "key12": "52cd2TAeCeCYQhhdWGdDRNDTmniGs9Ka8keRviSKZpok7vaHp7zzo6UvC4bDbg9KTS9sE4so2FeU1Fv5vEc95aiY",
  "key13": "2h4RkDdRK3yk9YUqBZBV7vuni9E6d91zqrgmG4UiyohCuWr4M1bgz7ii41N7eGYJZTeoW5SPY7QNMRz2JbgT2LjC",
  "key14": "37ePaWJUZsQe96ju66FvB92PLocLLCfsejhBxUucAo5gLCDknJMx8jwdadDs9giEVShWv4yQnxo5uRzHBmj6pGtc",
  "key15": "3SSLvqwLfccm8xKCdZZKsvMxYCbkWepAfvwzeSdet1cPePHbwqjhQJ4UwapKDDmkMtmX7DnGaxPGkH3XGpgyyCCM",
  "key16": "2fbBjZdRTdnByeBDUYeR9oTL36LkHCqRCtQd6to466vHcARy1NSyRuogh4sRVC3G212F3wGyCH31j5gtUWzxPv9P",
  "key17": "3tGk3DfGgiMqrYFWbnkrRqv67q2sXsVU9jxqyJC9YTTnGu53jwUpfALcgFYGuBPxnnM8GNYHtQ1efpk9nZvYw6nb",
  "key18": "5e557nCrbVZqtb5HzqFkJtpNViwoN5xwXNbCnV6qvqqoxJRyRdSK417wKPzuDSv5hFhyoLAhndYBvrV6MjajZ2c",
  "key19": "2v9R1g9BRPDgqYi3BUfFc2pwj2JvK6Lomci22MVuHzgsfU8LjbssGBxApDvjqPcKrgnM5cx2o9zLha8YsQHa4tnq",
  "key20": "3uBw4ipu6sUTECSuR3Cp4M94UXRZFbSi3QQ79qEyADDtsTGyvp2WEunteFkKNTrJ8eFu9rcXKfBgUDcBWV8qe35r",
  "key21": "2dMfQBfHk6nAPiqNZXeZC4RsCFRq59oUM8kbhJ2vYd1CceQg12EcjGRaCfBEDfQmtN2yep34sj6pUGzMfuXtPmPR",
  "key22": "5QCtPmCH4KQybm3FDmTVr2dZXddKC2heH82wG9A16ihuMnnrmS57VWtK8CwUHExUWHFmeNJWo2Tb1sxmh5fLLkEv",
  "key23": "3DdxBhZo5mj68no1eCWv6PYwbqhTGXFYiYaWxjxDuuHX3GXatqwBdZp1MxZCC1rjtPFVAZVQ4gosvjz9bA5oVafJ",
  "key24": "2rvsf7RJ2WmHNZmhwkxWpseQ43zsZGF3zBGRCTwAFmgSn8ousseTMqbGfuHqMBvXnYcD11PV2KN9h2mR3N8jVdNm",
  "key25": "3AneXrHytG1H1pTmDsHZPDgefBnWaJxHhBVVWUsToM5bj6EnzFJbtm8z9L5wUNKRRExBCF4YcGo5bTHojQWw7Nm9",
  "key26": "adg4HK23E6SaNZpMB8WQEYc3wt29JjM5MCYSaonpocLEVnUW2Afzx7knFnX4Kb4BaESGTwBzX8v5SqgW3DyCCtH",
  "key27": "3rcxXTScQR84sDqfJetnEaQZgYXRRizGdW3U3PxoTKuc2E5YRrk45YrtcTJSJJbX5eQTiu5noSajCPvYmdNPLEnE",
  "key28": "Qo86DrhyB9nrAU7EynTXb3UkLkxLDTVX5RAx3BsR7rbuPzAX7KXqEv8tjAHmfWLMfYz1bqve75SDnNZZJhw1Yy2",
  "key29": "2SWUiMQi5Ca5dkuaSMBDyizTihivkzcJwaH5anfVrJ8128RCHZE1QvMSjZ1MQUpg3s4Ze1Fy2EX8Uyz5LcoAr8QV",
  "key30": "9FKh73K1av1przoARpSSRtSLzS5KcPGo95Ehx4p19grc6SKMS1g3ij13yUNqkkPZ9SWmhHUuRRMUAJsuLmzuion",
  "key31": "FG14q9YgpMCtGQ4xDnLGZL2Vr5rdtd7on3jtGd2MvQG2WDpNohTJdt7LLYKgm1dAx5Cqi72bXD1JW9k9veZ5Sun",
  "key32": "33swmykAi3NqKnNDkEnGwq38UFV8Y2Hrq2HNzkmkX2qpRZdTjtWs92xFKmt17ctqvgnc9zC88ThmTdPVjf6RiauE",
  "key33": "cQxo4cUiaAsydeyvH6hYZcvEqpqk1ffodUfhitWwNpKxbmWVRJ5uNZnZ4Fkpk7fuTsgEHFzFmbtaEZHULzM5qA6",
  "key34": "57HZ37d5soU2gQ4cNivkD175wMbi2h23VRctPsacqAQvViwey6qBBU3E7gyHkWC3YhysFnfoM9vToafQZA2LEUdx",
  "key35": "4Q8fgHBVo4ZZgEnVDC79zKtE2ZJYDZXL7a1RptupdqP3fJee1fw9R2jJPnrE4cUaiw3kP1JgpfYcY2zSojZTiocL",
  "key36": "2jFvY1C1C6thsjJbTf2TRFMuND47YHaVXvvUsUdBfWV8WqH5H7huc3cxXaFmqccPSRjGRV6xk1XNHKdn7Q6FWqQF",
  "key37": "4Lhy6ac69VBYUmaNNMHY5Q3jVg6dyoM1yUTbfcdLxvCDhUguXWfJYzbsgCLnMm4ovdkkajnr4D25CxPQEYSLyusU",
  "key38": "4Qk38ApDCDgghneYYXhbDEUrchWVy7LmYyqc2G5NtPo1bd7mjiJLjghH4fa1V6p1JT9qwBEb2NSXX3KWUAJDEti8",
  "key39": "2cityMdhToAUr7i61QDMyTEVu2o5VvsJqeWQWbLRzEeTbM479vocWf5CQCgbxqGPi5TVfErQQRPyLzXhLTSm1E9e",
  "key40": "2NpKu3tBCNzXUEY2tx4b3pUTzH9MSvsvLVaaEbVQBazwBrnBpFdxBTaaMU7GoZzoEdxWiEMa1NbhYXHbgicsSEhq",
  "key41": "4upktn9Xp9cRNMZJhJhDjr2ZC8mnWRv1rBEZDUHF8Q4nABNL5bq67K7BG7ow6xY3Yro8Ch2nYyM7x5EZiQSoVp4x",
  "key42": "33eBNJ7UcZBRPehCzRC7F221UnVpQyXnm6LtnLmih5m4JUGxQNKWNKrKcwSQTYTfG8eRKuKhCjS7cstD2dojXGm2",
  "key43": "2u5xQvLgqQ2V5KpPMAur8CA3rP1C4jLpFakpQNu5dZ3RwFUqviZyFiH77wVhzvPzDnV4xt9ecegJDspoRZTYCC2A",
  "key44": "4wRfhf9Us6dqJcjSt98cArbTJv8uySFwfbhNaV8oQ3W3n1HFiAVimxk2pJDxyGMmNttSpPM4tVqDq7a1Up5MqhMd",
  "key45": "3bUmCKDGb7KzkMh7RzxwAmAFHVAgNy2SiWWsKb3iG38TT8uJsqGoJoEnumQL7oj7cU1aMK9bkdPjWhRzVCcgNAQX"
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
