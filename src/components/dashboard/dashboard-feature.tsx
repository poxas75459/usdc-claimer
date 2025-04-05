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
    "jmeDEf881H5jEKUU5c5e31bkG5Ef5uKRrfi3Sddpbvd5tZzDn63HZdzFQjZ8e8ex2E3M2jtJ6YtkuzedvXwj9Za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StVbeeVHhQkFhoCiSiUtkqmahedQkrvYxVARGkKCT82cHeASnaACi8NutV3Wdi1piKjWCrfMd84X9Kaht5rGHSn",
  "key1": "4gCePmaG356xmWQeNPGiu2fDfwS1JLwFPRLKnjUC8XUgBdixzZzFeDqabnEneCkzpK5mKsjQUUwuE4JTiAPBHtez",
  "key2": "5bv1h7JBuoV3Nkc3sXtb25fQdtHpRkQihH4Rd6uUiUUAAj3YJ6jMZc2Q4i1okr2vjS7JzpdhkbuKCsiN3PZW3NBm",
  "key3": "3KLWfV4E1eVWX9qfxj4Z65SVHFoy2FfAUMfAZwkZScWTHtGWcou2Rds5LYMmsbnVQvNBF4WtMmECuUTffkhwKvVP",
  "key4": "qBwZeQX3HUPNcFuF8NLkarvmNktiL3MNpCwSXMui8iNfdcBakuuqVHxAMmerbQtJ1LmTRKzPttaKjKgVoq97Fkt",
  "key5": "4ahaN9SMMEHiokfkM8Ygq4x5J6GCYgkPFRzTCrzMsmb2UzaCKc9buHGzjpV87tQNo3pUpV5vHBpTjyT9zBkzCgi4",
  "key6": "2rkcgTvcguyrr3WbhXKFk1FDteCQmqFsqCQveKWdNegpDMLcVJj8gFQs92gxAgX8PUHGsSBtP1AdkMSz9X75pZ3k",
  "key7": "2BXkxzsdvBDnmak1aKzv5JabNenWMNx7YtTMtuoGbao5u7jjvH9QNLrZKEufseVEADyvTYLXEYnZXtKDP3PRb2CB",
  "key8": "R7pYk2BLU5LxRPwiMvHY7C5uAjtVZ9zu9ztEKxkX2VzMFg1F5jeUNPKCxuhu5S3SopMPbD5KyWwzxgZ5VyFbPty",
  "key9": "jrubhvGeCCakBLke8Kuuy21cK2sei1DdJnzqUgE641EoDxdPxDftQzTXpzQTET7v6RuKHpgfzA9AXDryu3Pif4s",
  "key10": "2RmpFPB4YERzsLvzbfNNHGTaDBrVVRuHyTHMGqNsyg8ozYhJeptxvh5V5DSuAA6GCvz92oT1h9Yvc7ZhY4jpaofi",
  "key11": "3orBMyubmsM46UN6bRKeodRUVQbcJjGkZqq8LkPQDEYYe71gHFYS5PkrTL9njsXjyy2temdyqzGTJk6agpdZm2eJ",
  "key12": "3fukVRRet1g8Fy6Ze4Pp7ioMvBDJbDU1Ym6UT7vQ8Y7cuZvZKPs1e8SxuSrs6KtEP8y1RSfJC4QWuajsdHm7eW6U",
  "key13": "42fnTBgeTm1Pxfa3EMpUFCESL62GGSfSsT7idvG6neisUKeTbHtEtAv3dqMmyJkDbmXWmmjQ328h8fK9gnTNskTt",
  "key14": "2Bn6wixyey6kqGLnHe2Q5DtC83c4kJkHY1KhupqZYDFENqUhxtHi99m4r1GzWQ4jkpzVcevZvEfGtJGixX8WfQH3",
  "key15": "Bv7bxg4XjkuZZ9enZEaz9Z7CWSGw4DmFPkkfh8BNLt25mUYAkvVNjqD1aFdzGhkVGHKLi2QpLse4pC9L3pJPTW6",
  "key16": "QunTavjtx6Qjub9jMuYSB8ZqW9euoLx351jqaG9H6ERD3NoHiqUMmQRmGfRYykaWL2B4oe2tyxtMtphqbZR4FJY",
  "key17": "3AHho4Woeau5HNQ82c1WmncbahqqDQzWYTuuTammgVMs415V364itXQoshS1fFP8MckKro4vHSo8c3uPKPvVitcN",
  "key18": "4tf3uGGFeTwSUARrFdqLV4sbaLgi2Dm8jij4gGChffdFd2UwFQ9K7X2eykiJSKpZs2DVNRDrTa8Aq9jJByxbPqLK",
  "key19": "4EcZWmx8aHmT2u47eZLdKVp7VPWMxUdJG6vnLZLiB9Gg8gMGxmhaKzGXx7N7my6cxmdGce1G9oEkQJwLGQcmvw3q",
  "key20": "5NJj5GV8APb3DwQmKVxFbzkREKnyhuJb4pPV3HJ9tikPNiuveCYQuqhzk5dGnXFTHVSzk1RUXk2oHH4PBHxXgWQd",
  "key21": "prKs7q9Y82sgCif6o3qtbZigru6qMSezPd4D9QCpLGEWAEW7E6pXJj1hw2LJ5paqsTFRU1cJFionSgCDd9ZAHAF",
  "key22": "5v6uwRM8gTXLZgimbcQ8nucERZzpwymNFpVKC5cQDHgXrwFGaULha8Lz2qqHTbQzeujZXXYbB8ekajhrqkw1bz19",
  "key23": "4SzJDPRykeh86CEycf7yBcJvQgpZW9TkWacnkkKsFYGgDUCpa7hGLWm1uwU9JE2hsVgF6iaTFrScPaWnDSqRsj6h",
  "key24": "T5pkY6nU5WXbpUsfDRKvcfYXjMQEBxh6mqic5sAqqkptzuLnrZG5evyLG3cCBNTznZbXWohydFD6XDMN5WxoPVa",
  "key25": "3Fd1UmAco4VqKvd26tTiyLJxGqzpmJV8SmG2HPHS6yJtdGDSKdMKZS2rSCaEsDmqDCA4GSxLayaV2pbyS9Wy5jDM",
  "key26": "53PFwenwdbpCWLazSWibSYjJpP88nN4ia878PfZJYyJDTuoZaqfLU6AqUX7sPbEAX6M1X7LjksLqmZuU6NXvNw86",
  "key27": "28ZCzbGwzW1JeMekhgCF8VV9NWEgfMaizAgzpnktAZqKahqTjZUXq1hVtYnrVaKXRtnbn8jFi9pmRxKwDoRK92TK",
  "key28": "4KJj65BZQ2CoMYPAg1cxRc2L26b1A8grh17AWLgu616JdUubFadzUQJzCA99pTiuPxaFKwiKHejLEaPR9pQydtFw",
  "key29": "4YvC1yur3imFLPyWnN8EAdnMgrnK9rjktwqKfoqV6DBCQNC28b3b8zDnoA7TwvjSkwoA3pHYPDdikSJA9p4q6Cze",
  "key30": "597SeQYjHgtijJTcS7drDMMnbsgo3Lzbc8jGrHrZoQPvubQ1q37nCXyJeF8tveg5BFCdthnCF14qPaq4jPf2ZzKt",
  "key31": "yCzuniRzHYLknEJsMRqfofwygEfQ5XoHgzomyAZysLJRQ9G3r66Ax6Y7t2JA49NyuQ5r1xUo23mAU9cnRUyLtvG",
  "key32": "3rz1wE4n3TAsShzFCiqwvfXdxeKaD2LbAQnqRzxVyRobPgo3agf78TDR3qVeCYBMxHJMQumH6qKa3igt46oBGVM8",
  "key33": "5fNsrT8372MKSuMwbcr7K93nvKu1bSU2ShHzYN31S98NywWH4ZzsCbY49QjUzcLXCBvdkNBLxiyoMFFLofV7oLUq",
  "key34": "7SMGgVQa76hAX4dbbvz4QZ1VtZedbakYrYPx4M4pYWNFCUtKXirvE9s6gsbLSo1bwCCBxdeLtq5EnjWrcTeQRwT",
  "key35": "3zeSh7PxodQEpQj36bicZnpR3yGtit2MqnukMdRGqhukL8rRFib8NBps9F8DqskvwGDje9R34RTBioop9pzrKwkj",
  "key36": "3pw4QYjrEFoZ9PcbthLuaRmKNLk8FLCQ9c2ihZ5LRvTqMXsbpcep4JTpVAoPwVugzir4G9ZfpgFadAXaogvGYA32",
  "key37": "Cpr8tDBKW9jXNapK7vaEebfvQXq64EtcN19evzGeDJRYoSiwRQ2oacb7fNpPXmtVveSvF3FjkAARkkPwkgWHfG3",
  "key38": "2XtophMQg42H6Jzc5XSzHK3vWCQG15X3KhkiYfTzGKVSSTToXZ9V3CGuBQZmfxBdidLvxDrC9VSLXJnA9E25Nqdb",
  "key39": "3JfLd1WG2eWbsq89UvwRzVgHotgaNBeRzfRwHijbKLaD8HGARiJsnzKRy58TWt73RyrBaRYmjJMsv3Pqmqk4J5iu",
  "key40": "2uZb6NaEcigX9tdwBo6cq6QnwFdmrUFdSGsUy3ND8JafL6khoswKPovr8zcG2Fs67FQjeGZSLuLmpX75eXSvE99u"
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
