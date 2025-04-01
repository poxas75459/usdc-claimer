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
    "5VJEowSbfp3Qvano6ps2NQsgSZtJqjiScLnw2VzfpsHThhvuaSukNAua8xLa3RahnNRSoMcD6PGDQjMg4xt1wHWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbzeGiLUXKdct9WSTRHnK6FqkJX8dMVsQh9dh9MQpPi9ZSuxc2GV49bNUyMeafnQ5Q56ZGCDzTg8dEpzwTxaNAi",
  "key1": "1iRRCd1FEe6tRSXfMaEN361XiPyh5xp6baNYTx5beDaDkaGhUtcMfUDB5Lg3nFguP51UsYFFuazhUaTDWxDjuDs",
  "key2": "5chqhD6WD1dJZtz6t6D4L1QCKcStaWD46mUss8aSLxGoeAP7A6RVzMDc44z5QY2oCX4tMmFqQTbtRTgiggn3EXgX",
  "key3": "2eojqLk2pBeQBaquMgToSvHbPvTfNL6NTzx7XYDuvE4LVmhn1As9dHDuzUzGuVC5R4SGGAV1L6qCQzz47ooWP9hY",
  "key4": "Fa4ZnRYFL4TKdB3gwXcvSTX3o6gYynZtFea3339371QmKqgr6ANULQgGvx9ESXNmRknrfJPhXf7YRYr3hXQ7qh9",
  "key5": "5wSafCYTKckmqmhqGEJyANuCHBwmeBBcVvdD7Sv4iUE2bBKTcFaxCHop7jrxDk9KsniKTYJiVkcH5J7snZLRzJSe",
  "key6": "5hBABpwrp42izrvuRXLJW5u5VLK8g2T1tyLb7Y7L3fFYoUufhf6BWufjdmmeh5oug7bMhL6dLVQ3AAdK6trt7d43",
  "key7": "5eWcANC72hZru6zUBs1ipeonnrcBqNMEj3pous7Eigbm76VZPdSuQYmpaPzQPyq5KHv8M4BpMtEuDbHQXtTJ9yh7",
  "key8": "5Q13KE6a65KmSyCgXufdCxWoehoMzS2zVnqH6994jjUGnjuoESPDz7oas3m4fh3WdD3bJiFZT3MrhH9QtCdoym6p",
  "key9": "a9qM8DhPShM32N6anQSKxf5Mhi9eFCLAbKAkdGNNbHEhVCtBhSXXoVYFiawKk89ozu5rAVciMrGQQeCHPmXqQJ7",
  "key10": "2fZKXD422eB4kwgeqtFFex6BzkPJ4VLDMas4qoFMxnaLUA3hjmBLR6arzoCFmCVxd3U8CrB3Y8cnGPS5gyC3vT8A",
  "key11": "38UfCcPaHWrpoHi9uDnRk1APSyLtW1nL2W8wUG1MEr7vK3ntziNvTuTJcjyFtNkjCuJp1dTKfvR7aSCCcmHazmdW",
  "key12": "5XVzErz6mHtqTSrSwx2Z1tEixmLKk7VaQzRKL762jJ7M82hhezMp8Rk3Gpy7GYK9ozfLjDyn9kg5ec1hVN9EUbQv",
  "key13": "5CUobqyorXNxP9CfGRmxrmj5FhynHXvTEwVWhFKoFkRRfuLUBZQ9QGCge4yBNSmtw3okfoRowb7arGWMNqDkwinq",
  "key14": "31tvEZFk5CDV5Z8s5mgLeZbtJUXr8UBKoJ47LEbsJZu4JeDqrTa3xqEMTZFR3tuiA3LyFMsY6n1d6FkGfW6dGhit",
  "key15": "5WjEgM94cvFXftzWn3LT36Jmz8xojAvFcYi355DgZaNeh3EuevP1eWhKEUMCCDDU4UMebq9LjeMwGoVqwLWeuRic",
  "key16": "2SsXhjp1hCz87fzLFhrpXGPQ7e8Sbk648vQL1HvmijEFw9NpcQm9hMydiUEtXe8yP6xSXxurCChMK7J9N2XkLbMT",
  "key17": "57BinuLBZ67BacsgGMjcsFifihXpBx6G6DhE5CED99URZkBjUi1D3p8zrvkZBKvQ4zGSCn4mxPDBuLyJ6dteYThX",
  "key18": "65eCLHHmY7Wpah4LYVNfoGkxTy3gVH6sEPAxNWn6FSe5RGx4H3jWgQGjxrHyRJnL57dwvX7PiEzDgyzZHTPXK6Dp",
  "key19": "58A6nNKJnTzU8JGJ9JNDDyo2LFvBkGFwodFJUbmvMtCzcRuHTdWFAKxateGheqaecLoyof1nDW7fswSMY25DDUZr",
  "key20": "4TBdRwS6qgernBVzD3eggyhjeKCoXyAmJmmCswZC2TQRDgr8UvBH3EPqBevSDFQMdZR6yDq62WcnPNLB9XLDKvHy",
  "key21": "vcZbpo4QwMqDippf1gtiX9fJ6QGT4uvMM8DQmBdLmRhPymaeTteURW1j1tuFBXXfSUHnfKgRwrMYwbosQ22s42A",
  "key22": "4gbnsEazkyZmCkrNzVfjDzZvzLe3P3c3BxcRuLJRF1P7xvTKMEh1fvoGJNd7onFmo3EyVa6b2fmAqBqxG2rPzxCY",
  "key23": "26XveBK1M98HLSzYDZVwR2yjrwoyZpg9k6SzCcAfvnV3MN5c8CyoPKLmyu3y5rU84tASLaK7ZCFeh4z3Loe8yN2E",
  "key24": "3JbLsAaPsCiEYAPqKSeKpyfRfAULgbU145XS5B1MCD9TZBywJqFwVc8FNMZvUd3bSqAUMrKmfju1SQjitiR3BR9f",
  "key25": "iqVd4iBtWP9N6TdpkddbHWgznNFbyAVe886u5UErPzn4xg9khPRdJktR7dFGFox3uX7yiBwasrEc9DchKf4sCXW",
  "key26": "4J1wxeHrYP87DgTuwkPchey2e6CRNXy2xCPnnGKpwHhj5sFWsfax8THd3LhFD2utKDVvF1vMXXJ2yvQaHHSUJNfW",
  "key27": "4HQ1nUUJdFaF1m5dqMpVH5MGSvPsbhGXkG8fxwduv8Mqx348MnzVpNerhttiuAwhg2Q2piodwLZjd5x8TTAuPohN",
  "key28": "4WDcQUGFYk2N93mCCpaCjhx4Pnjebec95SdUnD2mpguTBLJEKNVaPGJRwB2tPkwLL1FePU5itzBCgfKrAygiBU5R",
  "key29": "5qqmxp4wAEufiPWPmBQRkvmRSHVQo82wkiBVUC9anS95TcCeBfa87htV9GDwzaA3gFNzzCN4p4NDYiReQzEfHzJC",
  "key30": "SpTenZQ5UsD4dUmMRhUYpEFyna8tNhX4f7v9JoSScJpkhsZyPNSzHx3g4e8uqPXXAUPNTtBDLPvAUhDs2V7eepb",
  "key31": "26iukknyQB9xv4dqpsnZSJD1W6y4qU8NautzBjXJeqEjqtswinTXjNwFN63RQsM1gXkjYdfGCSgzgYz1EWJJ3Emw",
  "key32": "2QxgkGtNJYTSTW9uvvNroxEAXMDPgknLQdcHerEYzxRfqtmg1qGwrrdgSGE1VPH2935aPgYnonkYcLWsJK3LV2po",
  "key33": "2GGEo54WSSXKzogt5uvjsZYKTGX7fd89GRv4CRHiSL364j1Vc5RbA6gLutNbdxZbkJeG6gMvrxm4tMa7noLPHeW8",
  "key34": "5KNTwVbpc6d41h6sUU7t6QSuz1xL7QiqVZipcvGx8oa1v4hofxH5f74RorKNdtoTFZZXHAZ5nqu1xWTohEDYVdak",
  "key35": "3DBUH6VEdmCY7Z5RkTQHodniYAAy3uavieJun9h69RFkzpCGA7jEwJm5fW3AgFyLpgxePb6FynD7WSVQ3tQDBDL3",
  "key36": "5izRvo8Ph83ZGG5qShrYfHXrzSbUPZA7TkZgAxyG793J7MGaTctJ175siq6nCMbMnTrnomY4iAxA6SmCoXcFE7EZ",
  "key37": "66LaE8ZP1t2Wr3sRWEocXrZ5PYEVpEe7SWcsrKbCZiXj1hHwvoawqr8eHXQCETJrgyvcqAApEAsJGP4xiZYgrwKc",
  "key38": "619u8rqMBRHLYrCfGUEYqW7ftimynmLN9bQqZ2mWBsQYucSG26Ep8rAFs4FVuEE2FWUESLJNt8W7ewDMxriNVaWz",
  "key39": "2ZDyN47LUFMnoHTTuedjTbUHwYvpazHxHJKAuvTcKodshTNirSFxeYtWszZdDpqym7GGrxtGgtmPPcVfDYz2xV2U",
  "key40": "5QXpDN18JNJeQMbTt6WwWJatn5Y7TrjA9LjMVZtzcPJsBdiwNAdjt4HuF5PxGGEtKUwUs3T3Mh3kGY7nPToM2Gjm",
  "key41": "5sDNv42SHbA2Q7kQnMoMftU8mqDBJSC4E1T3CTfiud24759pzPa76pzJG1wJZCBhSraAMeKbvhznVAsUeos3Y3zq",
  "key42": "xsP9TJV2xUrZyTCXb698XxtU6sUCaNshpNsddhxZbphiRWWWZ9bYY8YYv4dkHHTHnMMFSPaBi8HKq1yDtsWVtr5",
  "key43": "3YFPR2Pxn5y9fRvtmKxUTo2RuV5K7rxRBxo4i3VuUXKQcKiifgDGf952XZ3V8QDis2UWESp1wJYpS3PLR4G7nDw9",
  "key44": "36fJrjfv9RxPtUy9XmRXMSXeQQVV7f6txHEpu8sYP18ydaPit53FQng1GcUERToq4w4gWTdLvtJqdvjLbEPFoFvn",
  "key45": "4UNwvfkiG9uyFbi1Gdz1aQ33EdpK2jEh57QgVz8aSThkvY12gByD6XNDMz2MpDbQaZ8bZNge9B8T6kRcweXx8XNY",
  "key46": "47BAHXSMQJxNc97WijivKU2HT4EddZJ3asqnvNwave8R4ZWqDTBuP47ky4t4KFX6w3cUPN9iiVKNsjTELpMfQDMG",
  "key47": "4Kx3FVyB2HZvK5SWFh5uRe3MNJJTSgj7pNXgBXvF8TPbsuHi8GLVKm5mVETUEA8RpyMYdKQXJP2Ejo4bEWjsRuxB",
  "key48": "wZxochCnruYAXA1LREj3qSmVTrZTwPjr5qwLaLxYtvERJPJLYuvdn5Ejd43eUv4RZ4GtnzdZQ5uTxLhCKzLWaQZ"
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
