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
    "2EgnYww85sjJPtrZLMggbfsXkMdA1YMKPJPHDC8AF2iz6h5tdaLqPd2xqsqX8kKmxc9M8igkRYRPegAWaKdtGfEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b4VtMoX6GXpsZ7WyxqUZdqCnAj6CRvvqn4Meo3NrSfU5xWxZ2zLSqnNvxfJ1p3M5A51np5GksRaRRD3ns8Vu13R",
  "key1": "52Ezq61kVkBVUQ7xcvW4iAhkegsEdC5TU1mzaF8txFUJfTbf7rG9TaSvZhx42wa1Jbp7yZeAmDu9KVFCqLLoek5V",
  "key2": "3TkEAnsSe2JSYFUTxpKY3znCTCuzN1ML6V6cz3UJaQBXAPb1UNGxanNr2Zkw7MZVjE71qctx6BK63cLKwrfmFaG6",
  "key3": "5gDPurqdZVYSgF4iuWCzPytmazdo69JWh2WDKDetPP7dLDmDVLVXWiMfb7T9MxEuV5j3mnKKi3SMs9RaBTmZdRvf",
  "key4": "3KyNj1xVVgbECXtxX9idhVC7qHBatQAR63bVi8BRWRb1VzHX5nCiPJXCrdpaZDXxggdUKevjir6ryNvwrixRPboz",
  "key5": "51xPUEFTM6mDMo5HBk4Y5sSsFZMrmwb1kJYUmxZ7BAvq5rtp8uujK76g4C12ESUo5cAggvdPk2yud9iCPbdSTz4R",
  "key6": "63Qf5HwneEMwZeFDg73vAMxyWfqARUgjhpi6oqJucqmUoLhBXboCTKmXY4yYSkkUb6XzJUUgk4YyFJ9z2sPgNjom",
  "key7": "5LLjH3Sdsv2GfoqW7azeQxzc7jgh8UWr37qP5diwYoeBABD4qNh2ct9vgm7PGL7ijzBmQVMg3TNuKbmBbwv7UYKn",
  "key8": "65Pje8HxFGw7gHuBvQYREa4hJqikJXDXCGMZdZwKENLxwzh8s9bveA6xpZxQxUv6BLv2rLYyyfrgJ7KLxRMxBdaY",
  "key9": "51eGb9GbVwhey6QKXRL6Za6qQpEpe3CbRSZKcaxj1xxySBRm6eHqJ4z2xS3gZaNxLrLdZECHn1mYPRzeCsoooFHG",
  "key10": "43HVuygJMXhqdXnzLLTG8nKqCyLSk4JztuixaKXNeEKK7fBc38nP8jGeuoZsLQ2XeDRf5wV2FH24VMYuBRBzWh9H",
  "key11": "ouzUfWALJw8LDhHQEtjqfzCR4WTTdKNzhZTRq2sQgeAc9ELWrdw2UazvmKY7fjEagkaodtwoLtFoQasrpuPqr6v",
  "key12": "32ovJj5PVNVaQye6aKMptAVTYo72saDbC9zH7exvcUTthro1TP9s13w3dLdLcPuv2ihFNDFSKVMb7Az1uQfzQfqi",
  "key13": "3SLVDH5BK2vQ3m5KxPBNqEgzqgSUtfENRKq9LPuHbM4YHTVFqgEjapJJPmvLW33id5511zN8Dxnix17tDqrgjRK",
  "key14": "HVHauMLGCyyW4ShF3Mk9RGqjtvSgcm6pXdneXM8y4FVmAGhJ1b1rW5dDRNYnKqhfudwSfYQeBqNEBir7akBtyGA",
  "key15": "5sQ5DE7fru2FAErv5XrVm9K6oddWPjUxFdJeVkq7uWGXE4F3MSsTjnD1KwukaWbBJ5RASvzonmsgQduGgSnbN9Gx",
  "key16": "41XFjTuSr95LpmEiXADyQNoRwV1hy14aQAzJznUMcreFNpgTiQs6kMQSSZbzbZtuxNPmXAYAKUssT7U7ZdjQxuEA",
  "key17": "4NynsQ53EC6bSU3C9Saa2kR7gpNPaDVWKKp51A9NNdh9vnXSAXdTU63RXiaTAbnTiBr7nyi9MQoWexapBCVgCaNg",
  "key18": "2WxJRafwnSHnGVh1F7K6K7kUP8t7sB694Jrzvfmq7CwPwutuX7KYdiqHerP4H4ZkvU295L642R8mDy7fQyfT1UK7",
  "key19": "5Hi1B6xcgFnF2WSmw7CeqNg8Vc534tFSfhUF7eBCTPdHiKHf6xY8VMNThW44uPoJj2SAv4rTX5FBoAvj47PgyVmp",
  "key20": "3M3xnCsKR1M9qMj768yN551qyPj3QCybtFArr7QWhB3VW78xX7gDETmpbeibUWfP6CV1U6RtUHQp3KKhqpdv7bW3",
  "key21": "T349mu6SdA5tbE1MgKDwqyJFVUyMLGtm5MD1zRoT7kunZJUdu6T5diirwKBcPkqFK7w3XwsbVv2p3LwHhcEbCtE",
  "key22": "5mL6wiyqnVQfM9s4H1QChd3BzqkjUTem39qzKmU7QH5n5znt35tnsuS1GXcuvrRbsfBLoRw9LRheNTZSfWvBXEaU",
  "key23": "419DrKZm4CAPcSj8iagrC5ZV29Mn6t7syYRZmdSLmifJ2rmAjkVq7KkD94WBSTNLyMGL8Gy5bjB4YA3hVZsFS9HR",
  "key24": "48tZGHyvj9xtNwY1HbdbgGhyGKtfpyEE53YbNdEGBeM5LP7NAADdgat16Ce5p59RoCmXc4xwbmMf5McmDHpbxzvn",
  "key25": "5FKjibru3Yrc7WwjLyd8HUDu4PW4xSUppvWXYYxa8n8KU5iz8Umw3UKm98YTLreigbAuGmtyzBWjm5waCohGU643",
  "key26": "4GUFRjLJTkCtbQMU8WVCfLsKezG1YZ4R36WmVjeyMjCCP889CREAsT4WZTSEQypKDoxHbcXbRuZLBdXaBUf913AJ",
  "key27": "2au3cTL2x8zo9ype1Gf9x8fjC6bmzfRCUkRsuRe91Utat6kj5txj68TsxDfHhzKo4h9w1oxLTZeMiruLxG4w8vPZ",
  "key28": "5WQbsy61v1giX8UJU21vZd5CngD7wvYDH3wKuKVMipsSdGy4sxmoLfaqCYJd6LZsxrysMCSevYainz25CuPu3Zp6",
  "key29": "X9PxJyq1MQngVzQxV4s6hoCynmdPRmvoKkZTLAMpdVmWVDpGbV3s5ZJNdXwgVjCR7RwicEgWdvqMq1e5GJitom8",
  "key30": "3RvRkTBmvrMZyKA7iFSuRr69PsvYCURfzMGpDMMpqjufAeHx8eJg8MTaGN6txTXyJPD92brLBAPqQPvXXSyabJ8j",
  "key31": "2A1wEfobMS3W4Rzz4uSWmjQQmfoJCc4h21auGbCbu8FWThJ65BmdSczS5bL8PCQkx8UrYauw2ZoPd8qNkUiBDVNa",
  "key32": "4nzE6ikvoyDByJc2J5sshFcsRxd1vw6AZgNHQMh8ZyNcLJrekgVuXxHKBbKTKKVatJcHXdCeETzcbnWsHzoo9aiD",
  "key33": "5fNAEMmJR2akjFoehrp62kkS922bARwN1FcSJGpaYxxfTJ7cJHaiZgZP8sZVFDjhAZKM5C6LVtHsJrN3s7c3ABhD",
  "key34": "3Yv5CNXX4uHHfHKd4r9XaDNEsYMVeauWbKtY6TQgwNKpBKhMXrW14eZoQyMr8BzLtm4Agzys4pEj7sQFfSUe8gSA",
  "key35": "36xkwAq4zTXRPEvFnuH57wjtRLTqSykKkwPTaKGLx4vxrQhA4eCDeAXYRkitd6rSpPc6xhj9tsb4SrvWstDLL6xx",
  "key36": "3ecaP2f8J1oJ7ZNyc3n5buXPPAqxcdwPtFyRdD6QtJrnV7yMj66DhB53KLQAZgeVE2RgettpVy3nND2M2Dg4BZiS",
  "key37": "TocT7QAtG661oxgKF4zkLi9V5iAcU1mZfuYYbQRmowujTd5fN5rvePQESGHgRBXzPoHkFUE9eFBx6fHuvEHiGJN",
  "key38": "68AWXGM7kMYY9s4VKRCttrvHZjw4cTBQ7hAZCJq13BbSoC1XHyGuTXL9G6KjCKpibZFfHkHfPdUzqWvJjBsxpDk",
  "key39": "PjrUwNmPWvfQcXPhJvCiSxDEc3hRWEbhHVNPwyTW8gntdQ9y6htf6XqAtoHyUg5DqgY27hTi3sA8CxaPWmVSoLv",
  "key40": "d2hJkY5zR2uqcGs2QHfcuM7YRhEzNbntz3ehMYpzBiGmBCbjnV7RHypmw5GfcNhcsG5jSh1Ytge5oW7ePvigUNG",
  "key41": "pYfUgixn1F4TnyVaWaZm219o6MVD2yunnCYJPqZ85fhaRmChUYHxa9NbVFyCFwJg8aGnWdNz1F4jZMBG7VKzKqj",
  "key42": "5TUr8BzueGVCr9NJZa24cLHkoRWGFjqTHZTynqVazU1hn4yQoEhCFY9SecGmecJMoJMzqD5c1BzkP6GwBcNAPxh3"
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
