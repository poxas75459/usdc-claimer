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
    "294ACZ44RanMeLehxxJq6qPmoTDFTED6AQdJvL8eZ1iMJiCteMoTJ3zfp73yaQEfev53rPPj96LaGiZKgwULeteJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "km3Bst18AKEj7LjSjZCqk5fNutMoshwUzvPjVW78roZSAForfBUN942fjPXD6cpAcBYNSnMyCs7uNUzNqsEDhLq",
  "key1": "5YwPswctXGQJW8ZUGx8MUpADWFhD2TLEf6wevkGbEARWCZJswPKRNfB5fEJr97kkLCN2Yh2478YqTPSjL1sAbvi1",
  "key2": "42DaZ8jxtQvSpxGUPvzdxe2uE18mWLoqa59DzVD3U9MTFMJYPpNhMwTtQwhggcGKiYQTgPpS9MNWkxHyvbF2gqXi",
  "key3": "5U85hCBD7QkbaeqAvCuyEyK1NEGj7TenggysfbopTt4Q11oQgYPxcLMSJmkFYC8P6M2MzCh5V1TWZ51qsw6YWQmh",
  "key4": "27TKzSP7ePWwEjpB7WZ54wgYAZjsZms7mA2xvzCCDYN1Ny77KQiSaRECfXjtNzEdTnwttdp3PxeQqW9DKc57zE9C",
  "key5": "274kXeZgmPNhDPTuTK6Wmk5Ax4LmqJX5dV8rHM8tivLuNNMqY4WHXeo7op53B9UUHFEmEWH6zcDhGbFe68TN5Tuy",
  "key6": "5mtXgeX9eoTE6XR5zaX6eAeNoop99Yxmd2NdcghfwohqLNpqrzecqA7Epk8P9GSp8AgiecJLvhNTrK3mrSP5TSqR",
  "key7": "63cCJrguy6wU98YgXu9oEUz135XsjZ3ttodRoxix6PU12oTku2QskyFru3ZHYwBJzvYseHkJZXmJeNXKNDLikph2",
  "key8": "3d2wfWnuyPvR924VvSZoYdofgFJ7wr4cESCadiPJXSqAAZvuBUhKKb1otXkiYZTYCt9WzqDbUYpyKMvXvaqjnLKt",
  "key9": "j4tAKSSRv4YJCH7d6DRXSqhjf6pe3pmg1tacy3BojgPpRRMGR8SoDLgJG8PKoaAtYS1pApivcq6HEGTpEpXa7Mf",
  "key10": "16EBoc56ruPepazp1UHXrL8j6kg3TZHh1ctmuxt25NpvaDj2bojVZ5dnZ3yzMdmpd19XHvJ4JEob4E9XGVpuBzL",
  "key11": "56NwFpX74ZBSz5diCFJEAohxSbt6bbUutxUMDdGf3MVnVkA61n1HK4MZ8kTgbA7w6hC1q3wdapC4Z66xNXd58A1E",
  "key12": "4bNqFrwbE7JTq5KHUztkdvLZsxvjfRUbzoy2mfsz3YdKgGGFtJPJKBDAFexfkauCQtqgBJ72EMk5VNduzLZvSZzm",
  "key13": "4XxmCjKqDmFrAUW3HzKUYyFEyZ52g5q3rdtm5PyHPrPSGQmKYbnpnzYqde2tQAqMVrX2KyLei1LvR1AnwpY4YE6X",
  "key14": "3T3B4sC7fre1nYP2qQsgwd1rDUiL1SnnBGUVca1Sx29yDf5faRwmPrK867PQge4kj4f1E3rK347r6pc3LCq5P6rC",
  "key15": "3YyZYCprFYyJE2fXuRHsU8y819KNojK7r3gVvuC1eD6tYyK9aJjtykrNshvi1J7UDrhWbqgxCwJicNJvvyqLwYzF",
  "key16": "5NzjrxaVs3knabmaDbeBoEnqnZqeFGjrvYG1LcU6cjkRt692ncdRsggSoiWW9NjGZ4sVRAWDeusphcvXfQyiepKt",
  "key17": "5sRVUxqa85vNEb87n7SYkoWuFwbiFTx1wk44xnHeRoNcVmpL712JcPR8iKTXBA27niAjssVfQo5bhBhbLG5wVxYk",
  "key18": "3pM4EStAHNk1nGCwmx3Md2JDvAgxzJvVzaAgCTdMiSyiXa1oRjhdREgpB1X282DDCQnrcTAW5XeCh3426HFariTw",
  "key19": "3deqsqUm9USv6VyiSkASbNKTHNRMVpSnSRMiiMFUQ1rGEjzSbiZrkuYrhQnYxoEWxXDbjXqgkdj7HbTLSSqdCuJp",
  "key20": "63rb8X2YACyAcE1P6c9Fqr1BYHPcp9srVdBX2BSVSWEXcTjs1ipbWD3m6GTY4DCinDhwKhKpmAELwpKZWAi5yNhs",
  "key21": "2shR2ttYDQpYmBFjMJkbnFvrHM6KqivVtvWskGK6yFnksMiTJxMQCAjFzNx3km4RrEmR8q1irZVLWtsyqVC9oiJ5",
  "key22": "495rLaeauogbKQgBa9MNp7wXf5kZzgeNykDoQonyCH2kYauBjPyvwfgAZMgr4cNKUcNyGB23GNV17VBDcFJxeUCx",
  "key23": "5xaXJr1xWCVbhpKEc3XqegzsQtUSNvt137jeRDMKRCSgkHBwnAqzKUxu7KY9tW4CBb6dXr2Ad4EXSbB5c9c8RPQe",
  "key24": "2xQTGXKsudSsZk7GR4TkNSPqWUZbU7MPdXYhJKVUMNkAWX1ijeKuDwec8rj1VWpTwaJC2cq2yvXM3tf5NRKX7BaK",
  "key25": "D9PGP5mATz6wMxjJYE49CjFY76ehfiKDDn6Aeg7DU6GmsnWUBUWz4xELe4hS5MWi8dFAHidTuv8oZWSVQaj3Ym3",
  "key26": "3dzfBkkPk3SpBZxYb2jjbz4f6x1GXCkdEwYeGDjCKTDa9Le6DRUF5rAwGeq4ZCBxoregw5y1C4EikPcJe6hCLvKq",
  "key27": "2xj78RbyJHm2tY7pnkRnAWpx3AdSB21ftDnKBRr7iWQMVxxqDoJbpViLZNKbb3kzq5ef3bj1kU3SzSibk7ajsVVZ",
  "key28": "49mENmHhjMRgAqoKTZ4M14ZtFM384ULBtobxvkuHXG75wpb65gN2DSEvPXFib1zJfDK4DHWBVvby8cuSsV3fU3ip",
  "key29": "2gWG35LrvxjGaeDDQJgTCspUMCc4vbYtKyyPxKQqFnWNzcowjGU7gkJ9VkDRG1fbbCpamVZ7bjvwdzXXxkQwFY3Q",
  "key30": "aXuwVYvUbVcNhBxJqs4LQfoxj41VKpwNHW1Y6RUs4TrZj9AxuER2dbSF5Y9dCBdGNb52uxrKXFAAMKbJv3MwNAi",
  "key31": "4GczNoz3bRGHMDY3ytDNrF3DUkGXvAM9owcqvtUxbeBv8XkLU7FLjtGBvGMEJk6vZtu5wmxBGrsTNwxKX8vkQvha"
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
