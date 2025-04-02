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
    "4sv6q1hqnejZrcffNyoXkJ4W2qeybr7Njasv43uEBq1JLqPy8NoUt7Stwv7WcjrHrMBKDoN4Tn9v5mktNwGEuZNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64EeKMNHhbxcy8Nc52tMBuK3zAWJtqfJnA9SLweP8EtefMM68SbEzxP8ScXguQbHYCjocVuzTijTKjFgTzpGdYND",
  "key1": "5Xsmz8aBNxCSCkopgXvxnJ7tuL7mhGjPTJGmFaucJnVr7ykrKvmaPJsFCYM5zVMAQUUWBynM23t7kmiDsppgPdJQ",
  "key2": "8DzdreCosJ9GrUCefQYJwyszYVSyCc5c5YY8SrHJ1T1aWExgT1ZVsgvbhDwF63ArYrT3coFcWDwsdqp8UPmcEkq",
  "key3": "4Dn6cgiTD7udM2h3xazMisaHAVxub76sDK2PSj92ZfznHBARmXZhNA3Jr73EBLL79P7Rujgp6WDbb9BCvzVh59xu",
  "key4": "3ToUQhnFndJDY3hMiQaBUMxDLYigAyn6jzGk6Kbu3y6f8zcPwqQq8LYNda2FG7fLFSepk2Jp4BSXTpZctYgirijJ",
  "key5": "5xqJDmHPvhBT2R9xaufHCyCTTnYwN23rGaVdVoTk1vZbNTgf5FyUxMzCB2WW2pu5qwLtZDHSzUQFeFEb2s1g1Gag",
  "key6": "3f3qcyqFtVFnjqaa9UZgS7mGjrQGL8XRy19WVZdXXzCCtohnDxM7mBkxTEMbYZTsZrde5d353p4rhFimrqEtBeho",
  "key7": "4aycgwNTvJbGvmuHxJMJKhNZY1S2ByATudHCocpbD2up1EfJLzp2FnH4VQVYYgrfiMetw7Z8KYgQooVMzZ5KMeSs",
  "key8": "2fi13UtHBUPHBcKQZoW55rmkRsT6v9Q6wM69XKd5EhmjAk4E1dgEuMZykEcHfe6jQsaX8Pd7mMW7JqZirSHe5AK",
  "key9": "283uHrMXvYggryPgYqZvnnuDCMrKGoGqAKBLstAkmfxcRCR3eJDYYfsmzpkXXwz2KLroJsMuTgsHj1iBah1mMoYp",
  "key10": "53t4z9Jk3ATKho6cJ9R3Ni4sdKjpKjRp2eNN9NDFzPzdj5Xoh3dDkmKHpaP96nRWipqRRkPBXxEUXrLTRJ49kFQF",
  "key11": "3JQcMiPQGuo7Cu5sMEpdzvL7KfzporXatriNBwzPBrn9mncVNndAdCEq883uczhax16cjWx7dZoXyMFkftfngC7r",
  "key12": "4HNx5zVjNDgBkqUYsThedmsaAGsWmghBG3W5erkkWNA8iDg7KSTqXE87kbqYAtcqj8T4yYWtbpcvkuvPdc3BGBEA",
  "key13": "2MiRFqUcw6LVsE5tympVWGHcsQFntkpadsTHaAarTGgGGBAxN2RAREbGecnoTitaHPKuj1vyE92BFG664qqiZka4",
  "key14": "Xp9rstQZA4mpUqA8Az221NXfLiS5fE7LcFnVk2dyxKas4FtW2SdQAmVNxSEdAPPfjMewhYatTZjGnZci6VyNi56",
  "key15": "5afxEBq8EJUkw96Hc1b5yhqf5as8t1aw3Yqk2y1hEgRpZ7dyXT53iJiciyiYvCJGKfNqYUEmGwGqHoo8PFVyZquY",
  "key16": "TFw1xuWT8PW7BhwXfLwyonjHZSP9TmrSjsqfgkS4KiouhHtrdZqChfWfb8jMnEhkPyxEK7jQmqrdJRMsYgQUFd9",
  "key17": "5eKMxyZ6fzxTM8hT7kLxwccRYY8JiPQBK8a8jaRvWoWFTUirMgJve63JNB28jbsyvXbNaSDhFqizmedJ8qqt1kZz",
  "key18": "ZFvZYehyGiSiw9LY1VDoUDhjBwgCBE5SWkLVZ88bwN4HB268nm9XtsH7RMECKqzRfd3bqzZA7XbhxkYw8nGmp5F",
  "key19": "27hBLmoZPDyPdfRvYKadZoPeinHu1wnS9jiSrffQkrSfULa1xdNYB1hjHCGTsjt2zxaD6uxBgSzjgdXxMuauHSdP",
  "key20": "3dPxjZQ7ZHB3QmorWBvubFERMN34Xst1cvC7wshQYXDebgE1fCCLPxe5T64uUdXj4XwK5a42jPcsyLuUuobSvS7G",
  "key21": "pLtoLBD5vPMqUey2Mwnb5kXb9N2s1SwLafj35hqFPJsL3R5Jwu1MRcK1dqhfwLqrUs3txewK9qs8yzEZtF4ASNX",
  "key22": "Q9PUXnoX6rdR3j4JXZVxopa1vGYEptVLsx9mQBwGZZc6dRLxGjrqDG9sBWXRnhXciNu5FShScCDaqEwr2iHKZvV",
  "key23": "2m5t75WftW63ojd1xtfWR9HjcVzuDq5ZctYH9bweGJnesWxgubHMqNJVGM3imhFMoy2mxispYSSqAJhzJVJvDzg",
  "key24": "4GH6zJXjfE6VNCjNsgBJs18WRCcTMZqVnoCt2SogTLDHgaLJdk4DfC1PBbTSdrmeBAQgtCe2WmYdsU3BVc5Qe1jH",
  "key25": "g2a1ckJKpq3fUYbsJ8HhTHDJG1hG77V9U8MLkSnAZ7A1Jp6mzcXWqWufuFwXV2vyLPhTtbGdnrCjwebTnGfLSuW",
  "key26": "GmfF4swCco6qqcpixfHpWQkYya7SWKH9RCPiV63PLYU81H3JFJMvMGaqFxxKMWpWSa8NXtzfN25jqYvDpDbvDNH",
  "key27": "4ibPbyF1YTJPzwW4SMnXkpa6S6EvAvyVKwEpBjmPcwMnGyMKBTA6GvG5BxyCsuExAY3PyPGTL835uoeryjF7j3rZ",
  "key28": "5aJoeHjjdhkDbiK96pDvzNJyqR1gvTvJR8NHGWUy58zLm1rxdsZbdUPCYJRf87dHbjsC4wQLcykuHZNLF88hY2T1",
  "key29": "d3HkT3CuE3VjqKCgExVgYL9FYBXDnFAVTvcJJCwM19ipib8ZXFAiF36piuVfsXcLzx4Xpf2UWbS8q2rG4SugXjH",
  "key30": "CQ8aTJiVU62Q6RCrJUhFiR1gQULTBQoP8SZMb4ixRL73yN6QSzdLdBibGLLpW5MGuCe4XCBFJxoH4mgBMs8EvdZ",
  "key31": "46ECV4QMnsyg1EcJdbuKWktTcbn7t82dSnZqekZkNXFMEqG92XWoigHWmm4hCQ3EgdGMNAmb4hzf6v5jNdrXexSX",
  "key32": "2FpwALpjuVzBUMFoaUMf5mTuyFj3hSkfYM9yLbmb5qyYQUro9Xgb5WtpepPpNbBSZKHLvgkXM2nKeNLkbg17CuTY",
  "key33": "PWacs1NukCFLQxc6XMhHpxjZh4Rzm3fdYPjGPEvbfiXwxd3FXSuHWmsVtT4uGoiqYkA3c89CNCyAYgceBtkDGoJ",
  "key34": "4N8ypzhna2n2WsvXotdm2fB2mpJriFCZMjYzKdA59H17hh6t4LD8p5AQCYVeGRPhDhuxmkm1fznNt2hmZkF6mumq",
  "key35": "3tj1bMfr1q2SKikT4Yv7ASABJSPuswLRMwiTy2Xh3K68jhtmT66aGLb5suCxCz5qCesHMkQD1DGfAdC1Rs3YaYcr",
  "key36": "x11KDhcyWGe2rzao6UDxUf1HA2yJLtExE1wX5xA21TmPfTUH2ZRRzb8WwqqssLH7BTZSehB6sEVgVodTspFiXBc",
  "key37": "2iMmdGJmXZGs9XmV4NuXLAaAmnWjnVC71uKqCYrgixtg1XS1amEnuexxe6DQCGhQVghnMhkpaGxVRnKNuGiPn4aB",
  "key38": "2VxtqGJJj3yG7tHzBaxSyof7vGyiv4twF1qMXMpdVnW2foVFJ6d6V5cLX59DFGGNc6tTskhrpxqHi6agejUQhwy9",
  "key39": "g8iv2JTWgnUh2g75FGVXrKFcrz5CnmfUqig2Us2Ne77QDHt4WLwg1YCyc8WdpcJLHh8RMvftBkvhJXw3ZL2Yzte",
  "key40": "47o9iQ9H9VzN4zbFp1vYMWmcvTzPY8ZpDRXu41ZotXS2nKe2JRnWegxDFrExcwevKf1GurKDM9BAnGF7sNE8G687",
  "key41": "2xBj5wwHkFvPUnqYwsNHyTSBCYPBJeZhE6yDc2Xgbgcbv3s3FtmYmQZXyfWtn365B5nSHNTNhuq1rwbJ6KrZy6cE",
  "key42": "3P326ccGPBafLgL7EQPK4nGuZHeAFpVoAYgj58rLZz7gDADHCJ2agEYTsB3nU9DpstJUT2Kfou4N5YgWfeJdaDpo",
  "key43": "2vWH4xznsoNZc9fARoUeXMNi6RmjaD3VL5z4tXeRTMuEnqA8DgreS3tDfh9Se15wckDX8m52V18rU3VHwZVqQUYj",
  "key44": "5Cge5AfkaQbtnysmtDCCCV9wJgiLwRgAgTohVKVffr6vRw8hXi6bi77m32ecwS8VQNTWdGMHQS1QcxEtrDLEek6k"
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
