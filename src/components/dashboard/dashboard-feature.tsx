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
    "36f2SykVyf3MdApHM1mr5wpkzbxYAT2G2BsstEjzBwAq4GAQCM1DCXJ9WH8QA8PJLVa6UuhXU2emmzs7YhRzS7Kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fAek6MZwgptaJLi8j1AfPtRveMyHE5sYwWPu92MA5pYbszaxdj3SWKVkRrS1tgFUkaTDRfeYcuyfRynGzZLkdsV",
  "key1": "yABZ6ksLMWij4jLZcdnz6emEc2rf49iHwNGGYjVnVvjEtcHHmMEtiKtx1QeWxT8HQTYPA7eDUCJz1Qc8X9xtUGW",
  "key2": "3WuXauppk1RjBd9iqh6FQBfAeQrMrnvnvvLcAaJLoFjLGEoTHqT2jjj2wK6nzLZTbsRPUKFYNQBdA76vWLExyCvu",
  "key3": "5yhzWfNA4VdwDLsahtZop9hH9VURYZ4UcVjvAvs2r9X6XpyphLaDNPH8oYQoziEUweNRs2FPVmTNEP1qp4Ak7s8u",
  "key4": "5ND4SKGZosUUUGviXfrEqiWPA8AZ7oeD2jEV2ag7fNWsT5qVVLhy2pf3tnRrT8E3sTF4neRcdaQRfKygG61QEmRb",
  "key5": "5aFVoJhfBy5P34f44NXVmAvzGxqo4VsE7SL25CMDrrDgwUDtsvrL4nHE1ekNzd6GVhDttBtGATKyddYfueb7pyuH",
  "key6": "4pHsXFsVhPJ6ZUXvD6bVY19wfmHEJGJBue1c8xS4CyQVyLViTqAtFRp2mirJghuv7St5TxhsjifhhPGnX6mtcHTb",
  "key7": "2tCNnrnp6Meumxw5gtuiNcENqzf5raAQyxZnQ7Bee2gg9dQLTCmr3Z59kAYeMjXbq7iSfoiuCf1xbc2HoqH5ordC",
  "key8": "51dghEap8sAiRE4QTxj15GjZsSyGh73BYWq7PeyY4kzRQKJE41tScV58RxEHzBRfeQPuEF4mgFWzMkao3GMzTtfi",
  "key9": "3WC5wiju2PWMz9s4gmrqaVQqmwU5Gc85Y17j6SyxSw3i7XaeA5EfhABW9j41G1HEnQyVaZEfMJk3wvzfqMMgKu8M",
  "key10": "5Kr5EkkcmRCF7crVZ1gXquTbfWbEKx7GNJsybjFXoim2PHCyMzVMW3CWr9ygFR1iwZTivgq78euBgQMX1qi6h1C8",
  "key11": "2XGSBuVQegcZ8k3d4NtQJaKX4s2gMMo7TZyvz44kvbnbAKBAVdaWupf6BK3fKVUtth527VUZAzBgauqTXihUNW19",
  "key12": "5jAYGCuKxZ29BqQU9Bgpa7UmEQjmmFg895oAqdaTaVHR9gs6metofWn7YexZfYFkUwsTpaCo71L7KbdZm6M7J64r",
  "key13": "ir2FpVwxW1igYPgZ4ddXrfXJoKPhoa3CBiVJS4qe3mqcpTgE3txRucFwhQ5DfG4xyRAY3pk2oGrgy4emvdJMhtw",
  "key14": "3wfUneRWixAmjPjv6dBYxoDQsQNXTN3M2xk5Yg3843GHUGbzZkXeQDwZtXbBhM6xZ5DntKSkN9AoDJ8qeBQBxVUJ",
  "key15": "CMiZn8bXEdTJuFUiXtm9eB9AWximmEGAbPQTx5QRQjiLQopYgs9myKwarzeZv8xfu7M74zExgSWZsvisrpD4C2f",
  "key16": "2EkUz1f4cTqaS1s69nH1q81iCoNXgwzCpJDRCBxRmX9eAZRpXaLiN6MY9wYocdTysSc74sJWHvfBgYmhX7dJy8KS",
  "key17": "3kWtUNgJDootoFjSDyw9b3qGqwxa7RerJxZ4JfGoYtA3iuDvPJGBfHi1Z1uYTusq7oqDMTz7kwYLbVUPKU7dxCM2",
  "key18": "4p3HaKUHf5vGQmsETuzBkQcRxAZsutjieUA1fd3Vyj3kr5E378BLyfX3fDUi7Z5k47ruipvgAMCsqLK2vGaeCTj1",
  "key19": "4AneAEJXuJXdGTii1zziVcp4Xp1U89c9rNLRwddjVYWfXfRxZ4qshpk2boGEtttn4BB4z1LJy7hUpwvqXUkRLT1b",
  "key20": "4Jzz89HPMbEg4S6gRDTh8cs9eoJyPsXZCJibs1Umzp145Y9pW2eR5TsY1xA9ptiKCrei6NNGobCSdPpeh7me2HLX",
  "key21": "65YAbuV6SuFoxZGuiNhuRiSLQUFhgyJZF3WUs2xLiM89p7AGHQ28Xcg5LyKm33Aut15KLqoHkEFtjDvkhof1RCHm",
  "key22": "2KuEvronRz36Vx5Yo31tXDgGFJYgvUimDeYrhCa1Cj7HaYPhy5scvfXz7YhjbVJsYjeLqL3yjaJvYcDeKM4AWPqt",
  "key23": "5em82NwZnFFtSE7FsSX5LDrLmQk51aUPvCKv31o8jqKhGfzEqDBBFW1eZNUrwPH6dsKhfkhFbKUoiuaqiHBJY62c",
  "key24": "4A6Vhk7csN72V3275YiqmYLo12Czk1PnjGgCwkLmmo7ypZZLiQhtU1qFPve3J9LBdHA5fXh2GbFsWLkQtBM66Awm",
  "key25": "5hCyffgPQwfSe83h8LFCFgDqnnfjqn498oDB6N9H2u3Rie4H6PNmCQ9eeXVLRiKJWDQFy8itwVamSrFTPY92vQFa",
  "key26": "34uwM4F2DukKnRWbRD7dvvDgoPuNS89XHAjF6EU4gXBth7g4XHVDLjcLtJSx6xiSKu7TxEiBG99sd5Rj3neE87jq",
  "key27": "3aKjXSN1wPcgn9spjew1TUZzWF5ETyeHAWE14PwKU99mDnvmdHuawWVEStanETR4i6aNCBuFiaRpjqJpQGxXunNG",
  "key28": "oTbFzvTZKTPDx3suQVw2sAYFWGZktyMFaGzgjpJVmNMnJy9RAhnvyMcKbvhnLCjq3RUJusdQX1Xg4kuhE4icC8h",
  "key29": "3tvb6iWs4qTspGCFMSwt24tNW6r3nkAH7w3YKLEjzF7nJZ5s9PcNFpYju3ktfC5djT6AbvVGo6qYKNEDPqahmtmA",
  "key30": "DmYEXPZpFBiybVC67iEY29aqaW5hPvB1EynxqqhBX8H2tsuZtgRdk3Dh96pBwVJk8qUPR89X9VtykCmapCcqU3p",
  "key31": "47ZjhH5fzBeL5YWCwYA6JXJepQcSZJiFcfvTfd8EccGhsvNTtdBDG19hFf7H7vwbJFU3mHk2tuY1oQkEjSHwKUog",
  "key32": "5xiTF519qUfc591fSygfnaQgAVTV2ke2kCzeZnQfjY8e7ENit5u9CocU4JjTfGvj4fsZcgY8eNfzsPrkmgcnW2d2",
  "key33": "3Tq7FqzcmoAxGyodiqTCqLUrJNr8A8v7oZNMWe3U7jPu7PTtjSos2qqrS7EsQxKoFbnEA8CiDAPFLcbpfbCN9pBr",
  "key34": "4x233RA9siQiyCfivs4QErjq4FhamAsfgYZaso4aZQJPLUpppkWceCGaonPFiGSD7oi5D4J6PFNhEjxYFeGmcfQd",
  "key35": "4WxGzW9YeWwJxAdR7J2bt1H7DBJPk3AEmgFkqWcr2Ku4gzY25ZnANcFbru7qmxkkLACita6CppSw5n7kahsFs189",
  "key36": "5jKbAUSjRr9z1iQQeRbssANR6bgvTWXgiV6j2EqPFSnkCTfxrfPpahXvBqRddqQ5xiT2xy22f9buniWanq7hfL8V",
  "key37": "g9mCxE3RrzD8CwH19yXpffXb8V5tdsopyMCpELBvQAcoSjqEAg8CEFdTWPMN7HV7zUNcgHDaqXz8VKXjib2L43d",
  "key38": "2RFEJvntMAJBSY2JqkW76zV7FuQBGbzDg6Wu1D4fT7ieQJCZfrsTutR7zybNWvQCx5jSL4biuTBMr1etiGCnTjUh",
  "key39": "63j2y9KijDFHjyBLQiq6mKxbzRM82iQ4dYsvkSo8E7cgQ8a5br4hdrbCgYiWpbeVpn3Y2hZsFj9nbhj19xQD9CXP"
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
