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
    "LjowUa6vSLi9mv9R4wJs9pzP3wQpCGopV19fsYPAtfw3x9tXSXtmW2G1tYWep3QZa5miS7N2xQbp7SGUmqZxaZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RM8MYbQMihJw7NzyybB9cc3KcZfMp9rGnGyS1x2fNLDU6Yy8j1URDYZwY4gCkQkyPn8aX61V3ibZZ7zb9TgUqma",
  "key1": "5mCY55cm3T2DY9oWMcP1JekYG7yEUBukF1ppoxPbBCvD1Ktgc6KfkrudN6eUvBPZr59oc8wmjHEmVZrucf1z8r9d",
  "key2": "4ftyhVEpuaWez52RpUK4QmzXvPj1yVqhQbPpDM4dJ4uf4zMRZCbCbowBDUUvkttMxPySmKYfE5ukLqDhwevhfeAR",
  "key3": "5dq34QdA19746o6iXBNAvoVRzCY9Bz1KJDwqZZWCgkMTJgH919yaUTnUSQWg6xkypTrAGoCzdK6DiTDqQzGYiLn7",
  "key4": "3KNwgWhkSoxx8p3q8bTQ9T9SqWJf5h8UFrnKXTmyMk41q3wjxGp3Q9PPH7kxk37jiS8UzePAB2unw5NBoXLLJmi",
  "key5": "5W1Hr91Wko5cF7qnkMfcFhNH4ztsr3kddLn4BVXdEbXSMGznzDZ5wF8Mi2uWcsS2ywjs8Ss7cMibMA9y6G9xxEfX",
  "key6": "31v6jFwfTKjjro7wqkjT2ZMeScg9U4ZYPzm3TNQv9iLLZiysamM1ZkWFcWkBPFFpjCiRuc3dgQNEsTux3czVsqQk",
  "key7": "4R7rxEWhNnKdegFVHjiLXQ72ZFhbzhF9GUSV2zuURTaKR5u3iZmsgzLUiprXMGSGWaYvXo4o32UCYGvi9d1o14Ri",
  "key8": "4HWHHagRvHErb7EitpjpTvALZgVzvmC38JUjxse9Kd3qadjwJvUg5ggYR6LfV9NQFQ6yD5PxhjyYELFjroWw8xhk",
  "key9": "42xUSctycaPtcbaKnRD4g9VsgFHnr1ZbEbyJ4p1EYFT23Xukuf7VuDnRihHinFdeTE263khJHm6GuqpktKFyyZ3G",
  "key10": "3ZnErYi8YqkYeR71ixrfJHuLWydjrc19jX8wFL5gAkyZuuyGcGynAFLneZiRb2AGdrZymJdGQoZkEae1jQyuu2wJ",
  "key11": "qWjRqimi6d1j3Hm9C5UZyskrpzdmd6vnKvFLea9x72FNvZJ9wpEwtvR9T6QSXydHbxtiZYnf3wPjh4QDQgZ9HTx",
  "key12": "65k7JLku2UrJ8ai1MjjjhmrmpSt2yU7s6H1By1WUJzChMKLjpR5zJM5Rx2PHPTVa7tPrmBjG8mM3p7vwJYFHAeYh",
  "key13": "3pNe7fuJZKSFm6nMN2UEXPRttHRcX7tjsoA8hMfUTtKD3GCUPLSxEnYw2rL4ks4Q7U22dyXHoSsGs2doQDsjHA7P",
  "key14": "38aJRxtkBM3pB1tZM3LFbz8XVDiDmGMMKKoSCuoMm4XLTMnQZmJxdvsRW4vN7KCVS75YGFYEUxEk5igcx2W4ND7o",
  "key15": "4iLx3RwM9y35nSd8kx71wNGr97BJb75LVEnxKerhkywmNkeVm91SGqGw4xiyrr4DC6qCmeGN62GE8n39q3rvaZZG",
  "key16": "jJxXnW5JY4ceJ3AwJnDwnrKeqa4vgX7ftCtdEcdufNF5rMMoLCQTyKoEzUZnvh6HqnBYf3wLif49yfFkwMpGohK",
  "key17": "7xM1FqT53fatvUe3aUhu9fmaNgCPpfXVp6hwkCZKZwqxk7H9LtGGQChzFuDQU1UVeWL9Wq2S5TFWoT4Fczmtgqt",
  "key18": "5MyidGQmQA6qBeY6nLcMb5WN2iKpNtH3ng5wY83Wx4iW63fbLynqQwce9tGncSEvncrn1ZSX9ncQ1sMBCAynrog9",
  "key19": "5uuYZ2TRTmRv7jTSv54wrdrdCx2ZjjGfUqFuKo2jEadGafmrQUzpHQmqFK51h743HCnCZ2TsFDcXauEF9ifQGwJn",
  "key20": "4iN8sNBb5jZwg4Hg4rGiqJ1BD4FpnzN6eC1WtB3hQsCLgG1zF2zoHV6AfYQkFRpTnFFHHvsEShB66UyVbPMYqGZc",
  "key21": "5bs8gpKcU6uytNhRrymGz3rT4Se89kSpdp9NTEy3TnwPaxPYfskg3DgaYJmucqWTbKmxPJfE8XjMGHoPgR7k2LEM",
  "key22": "4kGG4qUzmLK1tvjKmnnyrnaV8EBoJWp6xiDysisLoqsjHYK8K6WQT6JWqZy2GwgKCgQRNBuE8EK8cbWUgYJqzo3c",
  "key23": "4m8dPtpb3g7oDtJDiMagtuU7gkmXsZdPrcDzq4LNxQtzZmAr2mYxLFbvFqTjzz7jGzYuD2Ba1obpuTUfm7VGpjuA",
  "key24": "4ci4PtgJXGxyWoWCv19e4D2EnFMNrFsvijeYSHHCDp3mGHxzuHLqF6Jp8LJMQtdj5VpeEvFLkCY8JKnUoLrwwuyn",
  "key25": "4eDLngDcWTt7xgZ8vJX54H9ppExwXbRXRYhTw4hdnnvCT2okvrohcLRJfkj77fyyK3jfTGR3CETAJHLUzrj91MTL",
  "key26": "aRZJLZ4k3uC1xxU1Kwx6J9sX88DVqXYwgCEQQjp6BPav5ABCpPBhqJxPFRjxxM5VBR6vZLtRAK1PPs6uqcRQHRc",
  "key27": "3GJDA5CHo8TTZZLQANNCuvT4d96Ssg828Lga2kAkM6HwvG9cGfGHWbmmsJmX3cx4gip21rL12BvkCAWFwy3FeMZC",
  "key28": "3NWjKdDA8qkkUEs9kSgVtN1hcwJJ8BM6sspB8AvTMeLxmZGjsxvUvsk9aimdYY6KcBadJe37KUzZe6JfknrJfHRR",
  "key29": "2HN5zx4yygiusSbo4n8P9dq8dTc4ecN9StujZUuzYJjpqdUyAuGJfBKUt6L7EiZUcHk38DTAoSHzuc79XmfXRDSb",
  "key30": "5WvQzsRxSoFyAx67ydyj6JLGt7aEcs8PQED4xKVKWeBvANtDWMYkXJHNuQdnD38f3VRniRbRxJzieY4pdJF9ywni",
  "key31": "Km7hCGKBA2BVEJegxBwoinWGXXJchEbb6yMPmaMAAm2wzBBvxTAiWjfmfuRrRcpzABBoxPWMSnec7s19y7dSVZV",
  "key32": "4CRNs5bjN4HAL4FgzzGzkFgyV7krdbJYAkMEA3y1yzqfDPZsTrQsif4Wn6LxY32rcMVRNSTbh8cfP2jCQB8Lygnj",
  "key33": "4wKQgPgg78SmpWeCN88LUu8HLHtLCMKpVbaRjq2ovJuUgdMYWqAjKJEgeMRoQFpgqxuthNXPW1qAkzzY5eYiDK5S",
  "key34": "5HXUmt8iXd1NvmsX9FVTuQDA4KUoVzSn8mkHkLWsqNGpP84pMDTuvXA8pGCkrff8bzD7uYB6yJXuGoRQpo841DS3",
  "key35": "3jazQihr12zA5qfvSTVa53hBbH2ATb26jrH8CGBmMUnuxUzjXmdzuACuXYqZWdZmCAoJZJdEkRfddE2rmxZrArzu",
  "key36": "M8kkkKcbkY6MR5Jqg9HUCv21nEenVPF8XabLC2466V5vPknhCv6YUwjUm36cd6H3JJDLyfCmpsr8J7qR5P4Cm63",
  "key37": "M7vHz2taQLHmKbrMmgL53fw1DofJ4KuXVjg62tAyz7DEdA4nNMRHbBY518B7RSFzUJwEHUFf2PWrfWzYm3ky7F2",
  "key38": "4PU4QE9sK4DMhW2kwktPdxx5EeFkhsPJaWNRQGeCGSDksc9W9BnfqwxpQqiCgsjQ3v7Xmcvgdy7YEyi6VTxHPqEq",
  "key39": "TxWTBXqHn6K9baWgB72iEaPkHBDbkJrYx1v22qJnMHX3o3njYNtmRkrjQchir5dnCTejXTeaqA9ZtfufCVLYPUF",
  "key40": "2Su7jCrUPSL8PvuLKbRiYsSh4WtyZRwiTi3C1BNSRVWiLRjZSeLoaEXSAM3WQANdt2Apt51aLX5tm9izoNPfNTda",
  "key41": "3twVxvVo7ZUFSYcb3WFKthXovsrofLk4KqUwDLdtxgweR2sjCQrThmZRdG5emuu1aaqDCM6fVh35G7DN6bubBnNp",
  "key42": "2LjmF2wLkLAqvdx1fWevNUwBFUhc2wZtnAh1rKHeSAcMwxHhbqkM9MfhyiCqadR7ujcjPNy87xChep98aGtzLYvK",
  "key43": "2s8Jg6A5VhoiZGC85zjMNwqvb46fA4jofZuo2EbvEEhFt8TdTJdRbKzjDpbizWLmNJ4bTYuzaxm4VA7yVLi5rDXE",
  "key44": "4v3pBQb84PYpQNyL8n6hU93jQ6TVZexfgtivqLixGewYYkKnoFnhVbXNsc67TbQnkeXKLtcc4NpimzKNeermHc8Z"
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
