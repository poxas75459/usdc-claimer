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
    "64Cm1kzQqtq2XuEbnSzvZpHzTLQ27AVjLj1Mpm52Lz9KxWmqEMVuLjFRemeX2T3sDCfqvnsubdSNUA9UcJsjC4ZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28AD94VZiEeAQ4SzXwuPcBtsdyATn9dwzRTfUF4w7wsnaFFAP751qfQewEFkZTcUhTsAYPYtdfivwsdDnAbZZdKX",
  "key1": "5fDi2RqFb9mtEXiYpUfYHnzj4gezcDHZLrB6vcx437vkpbNJktmogzffiqRHmGCFfiduoQ53R8dMu7R6N3JZuzMx",
  "key2": "2GxrQfX21brZpa3uc4eWo8WJdbZmfD8Pu9cQoHWW5Hfh1r91ccuiVocP4Li8Tm76h2YjRWEeBwD6pnVpyKUKCszb",
  "key3": "4xzkF8SWiLksRbU3TreXQCQJ9gyaJuqMqKNR4D1SaDqHCxSVZSL1M4TJLeeRxEMnDGCFifJBgBCyJDhrTy5ta2o3",
  "key4": "MD8qdw7PBNDgiKGXSxiKC3EsHeoM8koHRVVEf3c9Bp8JqUvfxeaa2zaKs9KAdL8KhbDgwZn9uRXa5afjyoaoeyP",
  "key5": "5BAVkWh2bwfxQ7SoDEfCTypkfbxsnd2fj7WDFvfEtvdQdAF6U7dcxMNAjKopQbUNBRRH8vbByQdwdV4dwQKFRnyC",
  "key6": "4V2tU4tbWD6Htn5xwjbnZNta21Cx4fsG8QDxjyt38gVpC5cysjMDMGVxxAmQQhUSRW4C2kVHbqg3NaVKj4D4gTE9",
  "key7": "RKEhrAfg8RcUanQBtnUyxFrNaRYmk3PirxFQMMSkxt27oQojv9jm8mngqWC6u7pxtqugt64bPETf8zyGKPDgueE",
  "key8": "4A9QXvdHByPe33KyZk3ZHPtDJue4Z4ed1AQwFQc7P8HDYYwNoLk6M7M46x9SyREGDsMrx2mSGTNJ8Zo8HxJRV7aF",
  "key9": "caSsRo6VwTjZ6MzLX7wzBpMUKTarVEW4WiYhdcWZbbiNDdS7bSU6WP1uv1DZgZ6KS9iKKdVF9KuYiaCvvDRoNoQ",
  "key10": "4venKeYNthpVivcsTVqDKihdbCZxx7vRBWruY3QwSaU28CePjjcUstKMFXPwtMpg1qqsLvvDeXe6u7ctTXRrWbDW",
  "key11": "5WpjjUwnJwJVKiNyRq3T5zPAJEWFcpeG25PEYWGxfiUaikp5TUh5MvYmu5q2ukWMAFSutcws5q6M5fjGkwDMoKiL",
  "key12": "5ProsvW3RYMXCMgXNX5BXVdMZFnBhK1AtR4ADL82rP6MC56Lsch62LtA2sFo7Cqyofb2Z3SfyeQcBhKDfB7rCTiy",
  "key13": "5qSXQrSoypxkxCn23A9noGzQxfwmGhW83K5ffSeAYjD4U9Zn9BuAUACW9VmLezMaLyoYzpdzErvsw5YUw4GudQxd",
  "key14": "4iQyjfeGCGxj8jYpMnhRvPw93bbNx8An2QTJWD7K7smLYV1JhchfVbJjtZdKgijP2Tbdbe9FK6HaifhD1G6jV7Ur",
  "key15": "3HQrLuUaZBsvAeGEmyAp7u1yRBa23VGi85YDsfG4WnFsZ6adQZyzKrSetKrGRLEXddYvCGeXZKF8X29wW2qozzDo",
  "key16": "4tgjpvyCmiGprgGDxXx1N9MoPfJm4Tcx49ooU7oa13rCpxvGscPPSsRk9XTUQkRDZyCG2vp3vnk9u86A629roNN8",
  "key17": "5QoCXFFnYD2gD432TahjBknYHLhb4iaXcuaDZZYzP2RKaDPneMaVK4q5ZtjEZX1qSmenJvgiyWTsKYZoay3T3avz",
  "key18": "4k7LgeoxDeZttyYhzQkpAnhU89MAzfv2AnijD45gcac3uFSs3yv8ssB4DooM4F98cmQTRYYJaJuVG9H9x7kwhvZg",
  "key19": "2rJsP9pBiQ3TWjh3QgaccVk5oJtYCHC3csbQxY2ubmPA9W7inikdNYCzKk61U2epfJqU1FTHjJPHvWCH7NHk1ysB",
  "key20": "5E7xeCwTua7sS9fLi4cto8weEahdvvD83throAEaEEVDTAmLoZBwsTeQ48n5A7qHcnhvm4iSWj9s4ZFtocbx2xzn",
  "key21": "oxpqisZp6e91FUdcg2CWspCbHxkvvMhCWmJXT2GWe35ThRp2zmKn8iNNcHRuoC9hZtyiffjfXHM2NrAERyceF7k",
  "key22": "cK7WytSj6TWRiWJpadTX2xUwQcfxhd8z5nncwdhyxXsLJrx2JsG462UCunQjK2GyEK55RijysSjZDacwbZrrtNV",
  "key23": "aE3eFeD7XDhDpCbLkDwMvvmyetKtRt6biXvwuHTEgeqd3JWogBepVytioKj7wsv5e7fQ6ktVf4oNZyFMbD1MZHT",
  "key24": "5ZCd1QzvAWcHMHBXvw2ij138DRxkiraYAApzxGvy1dUktVgHd8EV5VFJUidVKSERdr4HFqUFhLKK38KP7dmak4wp",
  "key25": "XuRgUW7iNeHuyhKJEQd3nAoEeQaDWmyTS5M2bL5Ehcfe916x7uMP8KPE6qLtCrBXGJNVMjsp4kFpXKV4PLPAzRe",
  "key26": "iei6cG7nCabcbWu3onCvYdRSRbvuT2RhnVza4r54PFPGNhvg9t7LDhrMeMfj6WHRLcH7isDXXgFE7pwv5EcBVcw",
  "key27": "2t5Hv9x7ca3toda7SxxnRm29NwyE1vDzZmSfXVsLr3avmP7zpHNygNx1wzVjQDPwcqfvWck9QbPYTPUKmo65PqXP",
  "key28": "2XngvyPQvPtdW8pbpiG4JFZpXaxDY3aierxpktuu7fU8nY96Ef9yzQFjTLN2ntVQR9kWMDooe2EoJqjEt8j7SioC",
  "key29": "3h7Da9MkfNSr5fan3XoyMVLvuiX2aQE15VsMuXWJWRwh5FbxoyUEqhjGtbJd7b3zE1sPWPPncnfcJRL71d27dTuT",
  "key30": "2A41VQbe6TkPk5YJVWBqbbLiEsFKhVXLysRTnMRMs7ZrZUachx2NfMXcxf4PGFKWg1vQkxBvdiV2p615TtBevv2J",
  "key31": "3S9PWzeSKgagwEuHSjMcZE78VCf3KggqLMpq7DkxduAhmikPRqLB9M35V7f9jD1xbfzWzRAzbAw4UTCDU9JgWoeE",
  "key32": "2jmeSZx8uawQBERoUu5Wsgm6VCbqLsoGbzKM2bYiqxaurRBq6s2wNgF3KNcQJVC5BK4st3Nq5LuUMU5SpFEg7p9j",
  "key33": "4iZdMhkP6yCXr5TTMyqVaLjNJ5CVBvmYFPnHewCWA233W3vqJqArKyq1BtXxYTxV3pfXZEzEPvRUqUjtPzo1qBie",
  "key34": "4gQtdT9TyWMLiGzHzopTBXk4RXTJsf8pRnGsuZSkW9pRTrH31kqMJFq15RVuy5EkM7igiBR8W8KpyzAbFHYbiS9d",
  "key35": "2zJcNt6UZXqpv24LygMDEq8TCDMVR9C8sWN1JGovXra562dvjAib5ZLiP4XwBEqBc6QJKxQYp3MNqi5w5Uy1xvvr",
  "key36": "5jW9LsFu7JWp3Tuxvm8Bgvw4af5xCep6febmbT4L4S8Z8LNTmoXFdMdejT5hqbJ7dszGMJyFJiD8qfcE288KKZGx",
  "key37": "5MnwqJq7pGXrVc3ev9FXtGbSnr9X3sCmWB92AkxJwREh9JS2iWP3esotwtexWob2DvgQSE5k1CMeNC8V4KcKu8An"
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
