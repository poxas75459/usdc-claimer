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
    "4gGKJQ1ujJFt514NUVokUK1CP42KVLNnbA34ypqySAm8WsvqBtY2SGHv8btBimBgR7EeqddNukyMT5PoACaprqnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3egyuWHT5bhpXN43KCTLg6bkvrK2pmgayvK7zPmzy92CfoVbFGUK52vttgW5LfVZSWD4J1A4Tnbemrwri7ePr7Bg",
  "key1": "3BbpZksnYT73coaGYGJk47wvA1Zg3tTSk5AcajnpK6T7aM2qLaYxcCmQ9GF5gBdZ9DxTte7c9bMMaia2MjUdT7Wx",
  "key2": "NyiTMJ8u2cF312ZBmW6ge8shiXYmR8cgKiyHcYM7vDdA5nQKcxPRnvDUBeudX61QsLeqhhsWew3Sg1ZWtakGwBT",
  "key3": "5es7YH3Nn9GV17YPQNk7VsZnZDdwdUExsYNTQ7zStp4xGJ7J9UvM4aqdG9yzGcK1q6boEeZtC4tPCSZVoeyB3tRF",
  "key4": "5g5B84ia5xJJVCdid6mSwLjEaTDwcKrDkgoXu6PtVeAz4HdGDxC75ihZjQwniBALyJA1K3QMv3CF2EWsQtvg1Mn",
  "key5": "5BRQzo3D5gGYdH7H5YhMkK6VgsrZxRXPf4NkZGbPnZgotLZhxqfsNhCQyYRYUxt395L8hHKU1XBFaekVJotXQyV5",
  "key6": "4QDzsjq7b2QpCwM1Kk2s9WKLD1JUCS5YK9UAE56VwgqZEQwpbrawsAcS6RR9pBaLW3diLzdkAgdBThC3Nq4p1V5r",
  "key7": "Vm9qZXgRmrszdCgwYQmmZd9WPvx65wGoDP8G7xuqBU3CPo9LTvHXZs8EqwRcDy1RdBmSnkfCNpmJzVLHAwnLX6u",
  "key8": "4mCmT9XodbHDX1pdaZcZsSVUTVJT8dun22KxYAv2uy2zyhrpSVY3Vemn19L5akrEDTALbNeuDJzBo4TtaoxufyHY",
  "key9": "4tKnaJBaDwbgbGyUkSZeYfdcNhrQQk5gtrjug36k6dcK5Zz5g5zkwLWyJ5k6bQ7awXEx4VmUGtNi4VuznTPWSFe3",
  "key10": "39zqGRvXfJ3HFFsNWZBEJUFU9kxGLFFUHVWnBARFqFFdfg4sEPpndB8Hp8Nvby2b2L3fxyWd3VKWRPs9XJcG27ra",
  "key11": "66ys4pP3jNzsnrCWh2XpyjMDvjFXbeR6xMe7pWZX8a8b75PkdXFmKKgbpQASQwt77FuRsMqvVxtfVLW2DPJBfNun",
  "key12": "2HpweJeaxkzwvpuQTz5wLHCcz37Rz1TidFWuMsA77nn2KwCbv49eiG8geK9iKBzfmGoSpHgcY5MUCY6xL6dXwG3Y",
  "key13": "5VwYuecvPffzuGUh62Hn5eXgRkiAb1muFvw9epvprARVxfU9CmZmiBQakYUXtUDTfWF7p7DhueyG42KnKZ8XUsP5",
  "key14": "27nhzs8SwGtdMqNDUeCuGJH2eE4mQLXyii4HN1quFgrrZn9QFxA9vTHBsHgvwCkHwDsmmRta8qHDE6dXRzLUyerb",
  "key15": "4avSZAdVcdBYxELEvjCRnzAHdGoLQb758QENykYHniTtTvcZd6LAth5QmubDR8jfgSyJrVLvBmbsftzyoU7YhfTe",
  "key16": "63ywApoxEhrGbg7SLUvSyJvWdSH6UX6ELYG8hHwLtDsJ6Y1FghJ9vZJmPPfZHYKqd4cS5RshvrTQEz3d59fkd6hQ",
  "key17": "2q5WgqgwD7cZ7E39NrshKkCjTCmTgq4Sf4VHfiJnRCV3cuAxdNz5vJEEu9qSEAPca4gvU6fuTJmf9snxc2MRAYzv",
  "key18": "2SwHkx8mBz7Pb8CM7S5KxyTNaaYQjHCnChzBJqRQHpybBUjJsEmsYtKppftcpARbsyxQEZpjgqgSX8zKtGDz6h6h",
  "key19": "3EgMHZCGMAWBYNxj3rGATh1DHpXrAYtfefUSoXTjMzc2zWeE5dQTEZVD4ZhC5tFGZ7VRDsm9t1nkg6vFb3xaz1DU",
  "key20": "32Crhvp7DVRmYbvfH9rDjQgYNGsRPfBVMrHmJPCQjGv2TQNBXvKbg69Bf2jcqpWq6HipvaCKbJQm7uirYSp1n66J",
  "key21": "5T5TzLVNcHX5rcgczPxBm2d64h2iFwwdxKDHmhe8Ryr5AbWQZ32DRdwsxY8sRpLXjc7sCq2RzT3BCu7Ei7g9mxvD",
  "key22": "odfZdKQBqcAo5vuERDQYHnSQb3Xwra1jWtrnqkCPv67rfoiFmdBkEXeY3LgbJP1Te8CuJxb4xiXTduE1nwy1iYV",
  "key23": "67ZhZpBWNaLgG7mPsnHXafj2Cv71h1q8FnNE67cUcgVRZCH32T7AVd3CuNVn4HtUQkNkfXDsNNXsoBdbFfWwXaUv",
  "key24": "35pE8mVe6sJnQF9j4XSCRT8DsYc41qjwdM5uEMCGTjD6oZYj6TycHmRpL6Pizz9iFTQPRV9HDVFpiHAJYcvKm6kL",
  "key25": "q3cM4NAGca5ckxGMK1VQDkted5C9vGTfuK1ZJJBgUyaeTnCTsNNzeJkyBPLUg2xZXr4USHkmCvAtcrEw9XtiVq1",
  "key26": "emyzgE4D5FEBq1Araw4VJpgop3uK62B2F7MycxH9z475LwQs6RHV1orw6sfAVeaJrExQYEGRTgUxFf1rSPZcwBf",
  "key27": "4uK7zqH9xWBRGF4Qgs6QfowWqrEHd1nuihyBUKfpvrFSYLhmQdDc2fZndyhNbmwFDrmvePt7PBN5SgTPkurWS5tr",
  "key28": "4tVaw5H1MJyxpsj1KFfjeKqx9w8fPskByMWsuwJ4JPUbmzmZVRFEnx2BerzAaUVWY3gwa77pnTQYFx4t7VD6BbJq",
  "key29": "3L3P7T7GURwKGCbJ23WSCYcCQwPsHHUz9FA3pqarvXGwhsZ6cjgt3RpjxqVmRQkcKFpqhE8nBWG4qUinyithBKKs",
  "key30": "2AJhk4QSzwPN7LYuwuXQ2LtMx5bd1zDtEjw3J1HeFRU9cf8qwEikH23NN5Lck2W55X6hZvnLUm2B2qivg5pbss2R",
  "key31": "3DYq4HY6BfcdmfELYFRGiseuYpbND2oZkDQpV8KDVUaXPaPuJkLrEWJZWypVVxSewyWbBZVLo4czdiabAnjD4fwo",
  "key32": "gURv4ReVXGVEZ5pSB31fyfg9TPdtHVVHv1Gx1KfPd2DwE5SzQJmjfHJ36qvssNuy1cv7PwzTECejgQ5PpqHT5SC",
  "key33": "3LckP8KYbKJfBeyxJdTYoKk1MyFM8rujeEQ1r6bKKYwzX3RunhriNpKpyVGkcXEFAuXTHPxJZxTxdJsD8RR3LXb1",
  "key34": "2R3az89Ab5A26gJCEEac2rhJJrPuqTPEYmPFBNBf6pnPAkbjovjFQjuWDwQH5Pqu7TePoJCqSi6ENCmLKkmQpePu",
  "key35": "5YhJCFEYHxet6FPicT9agqjAZryyQTFJY33fWAJrHJXD73cMQyEAB1Z4ferr1LVejMQ4j6sGZb3dxVego8ZfDakb",
  "key36": "37oiqJ2f29da2hA76FsNcYdU71x8oGLBtsRaDQS4Gzxshee3JKNDBEAEEiVJpvus3shYC9yGyQ8ufuasoJEf3bJ6",
  "key37": "bVLg5EycSY9cGSAqkete6qNwDXywMsV73qgigAFEJGt1YnDpGoeLi9U7zFsEhxZm2PkgZfjsRKKk5vKCZrn2wAM",
  "key38": "4xeZgdKmKDbMMz4amunRzj1X9NhnR74mv5jbqXACocmBKa5GzTJPiRcc8Z7y4mUnx1S6m9XCaA76AbcEKmF4bN8j",
  "key39": "2dm9uMEdjcQu1zbEFVWRGEKtJYyr5XGbbHgtE7Jabsd7thv7V6GFJMZeNgJxjoTnTZTgXheGELAx343hwusnLnxT",
  "key40": "39yNBZpmRTqGZ9xLNE8HrbbpAVby8wt76BdLegTRd9tzQXHPTbiQYffasM64UKiLvBt7Dc3P8rXaEmbyrroxSNLA",
  "key41": "2ziLfY47F9rHPu3iknY2sKXFQcieyLLyDC6e69bL37kNUGwNsCMqq882xkq2GLREWDFqGkYKwz4g5Uh99GFeXMLt",
  "key42": "2X4trNtAYffjRYyYU3sz3Brj64AoXbMiHcQ66cqQeB2LVpJWMkc6dysnHUCCUvYy16Ez6uefLdqD1eUrQqUG7jFr",
  "key43": "4KMN8PQdVFdwD7pEUQU9AYiWv5NVpoUtg9rqbtzU89SNKe64xcKBxKWkJ2AT5oWuMpgvbrcmffsyXbpiQXHVSr1i",
  "key44": "36DLNHryo1K9veV4gP29mXbqmN7ErHPV82A8NZEw6RWkwLkoXCrCoT7hMkF1L2FFBJuM4GG1j8PKStyaCRkuvA2r",
  "key45": "2UpRAtBq7HXBR411XCAvMRn9hmtE967dmKFK2xFcgoH9hLmjSz7oAUK8b5fvLhCkkcDZLE5GkbkD7KVkpaxeEEAn",
  "key46": "CSp85K2gb9VGnPoFZKpVrxctMb7PsL9koDKGUutt76AGnhyw6ozHHuemXNSUrAr3DxmukoVLLGnDE22XqF2NUZP",
  "key47": "3CKzsHfomFZkTMTGTzsKa1YmezYTf3Z856cpnEAdjaemQGRqiNP93qmVFi8jRTBjXszm8zwUdjEdBm4Krz7qZWP",
  "key48": "2vYAxTxs66QxyETQJHM82Lvg6fSPohNQosXM17seYgXyfLJrRkQPPhU6CSEVsnv5A5REWuwYFcaFiBmtoXkQmPSB",
  "key49": "2iCnmFCuAMXryQZWW78hy6vvWmomMLTUAnpchb88uUMPy4UqMb1gC4wmaaY5wPBnUAhou5BeLx5WKmjpq6o6avBz"
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
