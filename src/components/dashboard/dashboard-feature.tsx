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
    "32esu2Aa76et8i72HXrSdyKcbUkmVchKrGezCk9CvTuJJEHtXPenD2c9TQdJzF4PQWUxUwUgimievVCHra5nG5sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PrkgQydg1F57otK3z8YrTV4emU3cW6Kgevbk6nXdtX8BnKnRL3UaCkCwC6GHz3nbwnS4XWTVZKKMSvKSnbr6opN",
  "key1": "3bQYy51H4niAmV7dhpmL88kAhD3FqWFhoceqYKdCxa7SB1WmhSKKw6rHpPRbPhciviHE3CQiwTqongbGMyYMsfVq",
  "key2": "41aCkaaWzugwHhwCAxp4qBzQnoJbtjqG84BXWNRxNneVuK2e8YX6zrNiT3PP9yDWTpi1B3DfLpzBWGXdiuT5Dn19",
  "key3": "36BTQL6A3HQVTq4zhx51UCKwsCP7rWHnMVvCE7krpFhavmJ2Va5VQbjDh5F2EzCqHRMwpm2nYy84oDxGD1SkdUcF",
  "key4": "inPpXDk3uHtostKgv23m8Kj8rxSSj35oWnTNBBWyhMy2o1N2d3MsFZmh6uGNunHq8AwFX8eh8RM2k9WPBwmQRFh",
  "key5": "w2TUZiYWF46PibB5cWR9fFxsj5J4Low2Qffw44PgJnQ632nHEiJQHWLkurRnLkCRC6hs79zbmsqYYJEWFmBcnqe",
  "key6": "61N26WZBLBeh2ykrEwtmaSKfeJEnAha2eyB6x3fKEopRiXPwTJ6BdNtiuJUpTADQcuBtcEy5zLUWBHWhKxi9YX24",
  "key7": "596Ma9Zc38ZtazL5XGu7LkkzWc8aTKvRVjaCz6n69VA3kNz2cDMKoshjkQBSYanyMG3JEAQM8cbctjHj1SUWkiaT",
  "key8": "5LnzsMwZAguLmycr2WBt4tgWvz1WP18ggV9MM3vubkwcCbR9XnSJvjvu7EZ6WUFHHrUxPH3oxKX69BvAaJRU4JLk",
  "key9": "5sEDoSuSNYQqTcVXRSh1jkkJqTgbysMmeT5KNJ8CHkXVaM7MEe9dzSevTYjbB2AUdZU5Exfb6GkMi2Ka7iBhZAih",
  "key10": "5NsMv7xACxxc49i7TNP5obVk1hS7K9rYCPwoJQCDiWo7DZzUYj3EhyXn6fJYmcJwkzfRmDippbhFWGUKkSUmCw5c",
  "key11": "4NTY1cFw95B9Eb4vkPa1t55MKQsRbYNoWVcphFyUy5WQLqgafRrhwHx3sN76BJFbeR8zrQQEZcqnED82yRzTLNLV",
  "key12": "52k95U73rTwSEC6ERUiqJNMt1NC5B8rXByHXPnSFm6AErxz6qaweqazYyoFfQASNsFnCD4Lqej65RCN4utPpZ6Xn",
  "key13": "5bsiSRf3LjUG2fwptV7EdgsyoptfNNrbQUiN8c1Hf4jTe5GXLokAcP6ncEnBrUMbNAi5KjLUYbMu4Jos4TU1BSQv",
  "key14": "3hLP5oNe6pKNVrWzoP1WEysZuwteYC9iNFGfo32vvmXPWkDzEfCRboN9KGJrRAWVw3JEPtZfEYXZxqcjP3rJsD2x",
  "key15": "3UCJcfVrWcf2j7drHZcedgUYwSD1hPjFFEeQkkqb51FokAqSGGEWV1LYJSNUMjAZceApdtmgDcTRp82vwu4PCrvU",
  "key16": "4sigLkeqo6ovfbYU9qERJEqZcPB8buiGMXs4aHJqB2r8YaMDX3sHduKndJjHRyWCmJmKiKMzLi7s8HjaaZvsvcWg",
  "key17": "3HBCw4nHzRuX24BEgwExNY1p45vwN32zGE563HfJytexmbGosvfM7Jgbq5PGMaGb3DAnMNqMBqS7NLWZuKvoD8rT",
  "key18": "3Ur3tWzdWCdqXVZm26Z6EPRLSe6j3nkWZVN7P37z6bS7dogq5FSGYqMPDDYSF7H9jun218ye42c3q36s4GAjv9K7",
  "key19": "3dRE7LXoUcAibh45QkuerzUd1sgV7DKKBQ9zCGDHxv1Vcu6uQU2oYxmFCBG7jaiPBWfdfzLDp66mRTKQsYuPxbGM",
  "key20": "12128LGaWknyReNfddZT6LSiGbhwW2QqpKHwDFCAZJFac43mBr4Jqyi8e81qBSPLNCrBDLjqAm25WH2e2GDMcsUy",
  "key21": "46jxGu95NUpPBgMLyNHewi3sH34TK93Qco8unByXsyRaqdB4nRBZumgHBRJMX6PkLW5wrtumUx527Mv7qXy9G6V8",
  "key22": "2pHZMs2y5mbDFAYYnosdS4rZda126WZG592jYDh8rCmGvshVnXJSAVgk1Cij3SnAPpWaxjNn4XnhUp6T1KfYRryb",
  "key23": "3bcRjnGntn5RJqU35mV24tfGSxZW4uADAPjPZqU4fgkZ1juKf6B6wVBDx8BPkenyGPefKh11AdceG31YSK2uSTLZ",
  "key24": "5kc6QXCnfTSdQvVji4obTMs4M72DQoorcg8bPwtiPk6D69V2KuNDZmuaLv5NwkoF5FwKYtTUQd8TKG5vx6i3vVL9",
  "key25": "4PMEdK9yXEBDgXu7TXzCas5j5pvUbgQhNGZzPjZivq7uFqKM66NYh6KGkBdpYNCV7qrH6XDvByTgnaeNAevfBUNr",
  "key26": "5KA2q94Dxv1MnRfrycL4QrHPPmJe5ScWUkPy85XyLDryDErjshpikfEuqopS1NueWkuUgbQgKUi8FiZZDPkjePQP",
  "key27": "3HBfe1KUH5tUZ8LR4pBwbVQR1jZW3rHwU2HcYXeQjWVvARf5EoJ3TmQkBfzMNVH5ivwTaphqLjrePGV4vk7MMUay",
  "key28": "4kXPwgN6TrMH2hbm3mHzMX6tRCrWPd5MmLbuTN7YrrafX1oxinzU7KXjMG9kYdwj8KrUnGav4E1QaMAdjn5sfM3r",
  "key29": "4Vj3zKHSEi2ne3tyxgJPt5pbdeJS5RB1LcG6PuCxEpQMhL3SPFa7bu4df6V9kmhmjY8ocGEeJ6Fmy8iSnWfWp9Xb",
  "key30": "27DPqx18B6j9XLJuQNCMJdWLEvUbKY55wCBLBzju5ZXt6UGCjRUbeiNFL6cnQ6vA9AK7HzqVtT6eiZwy4kgU9dJG",
  "key31": "3uGavWMK1asz3pK5thHaAspsXevAywWCHZB5nrMrNs4iPux4Pk8bW4bES7ec58kPRJDGwDHEsNGd22APVDNNGFNC",
  "key32": "wSn8gcxaaWdpdhuABZDDNNM3K6VFd6i5z25zQvgNEdQHzRKYhJmdJ8pe9ncbaiUE2mhk6mwVwhfDo1tN6XEiqGz",
  "key33": "2QoSRnE2nSdCH5xcDjzSqXPUsv9WxxWqjwgMf6wgZ6QXNLf6btFn9Anm3tvCuYXVzL1ua4wRyjLd5aSZKXc8Fxkn",
  "key34": "4a3B4v77kU7YypTD3eaNDw39jJnzFNCVcqhVGkARPspkUCmE4Um7QFYwLrtiVwGC6R38vvNRR3iwT12BG5EA31U3",
  "key35": "2Qzfj8g2he9Gke59nxUxfZF2W6CXFkJJKtpa4TrmxTXke6SgQR5SYiHkiVGd8dq5jBB8CtHLctAZoTY8vHfdEanF",
  "key36": "3Yp7ktKbC8DYEvvAKyFHEemCQ2naHvNabREsmVsfezSggHsU7QtBbLnckmYY8L4gG1hoUiVfvAZhULaisJY4xgZF",
  "key37": "5NES6w8gq8VQhYthDANkahwuf6vAZsGseyK7R4cck9ZLZLUXe7AUznutgxQYrzAtNRnj52bGin9asAGFXASCbyBc",
  "key38": "QtHhmgmoodFbkwdfyv9gdbd4g2RMrxuFnpWujFfjP6premKiqKb873QFcXkbQepwwUV4bT7dts78VWbUzTEPQtX",
  "key39": "3xT2Wpx3BpNTWS5b4bc6z2gKZCTmXDBzs8sLsYAHGd2nzsdvxhMVvPUArBB5SHkJnsBPNjcqatanKsva8SdMbYvt"
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
