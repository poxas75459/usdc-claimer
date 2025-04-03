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
    "3wUWKjFwYagxW6dQ9vi5aSZMJkXiFJNxaURYpnsQkVYJphAaxifW9C48XBvJVd3M9k8qUG3FE2X1Yz9gK5AzLoya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSfp8PrihQ1H7QBQmUsXz6zKb4Wk87dcHQBSuzBkP7VWAGkpxefCaiy5WGbZXW5ook7DHMmyj7RR3b6TYJ65Wm3",
  "key1": "1231E485xc5JoDFdgnHXLuGG6XmW2NfdUBu5njbHPJGyucikc9KuYcKHMZx3dXjS9SRUB8VR49JDDLvTzZNU5Gb5",
  "key2": "58srgw3DtW8dXrmozepFcREJYCLuPEh5DB7WGYZPqRUGL4MU1PAikzyz3jFemUCHoSd71REoZeLTkCx8NiQxJt6k",
  "key3": "4u5Nj2rEN2Gu4sYtDGgVrqmTJNGJ4JXsJFwajNE2ZT3WZ8RdUyGr8qiLSWrNvCaCeFGC8k2EjAUq4b6KXEjymfdq",
  "key4": "kmKfc5zjm1pueMPCNJ1FosaSJjEsCRcnP8WxyhC3DUve3juhACQ1KXgxdqf1EoRQVXpogNjGHbVNmdiq8FJsuqt",
  "key5": "FFEXpgsWiQ6PVc1FF3UjX1cMCYVEYCdfSfyZFHx967urTdp4qnC7x2xCg1UbzVz5NpJwETuhhiTmsvzDgrKAnFm",
  "key6": "E1UdjnG2Y9DECrDphqSaH6vFTeLA8jmH8v5bnHcPfUBmJgWs6LkrZRxhrBjP26dgA6zA9vVe94HbqMkTwz4ue5w",
  "key7": "62zfsqzmkKaLFyHhEA5SDf8VuY5CnqgeiruDg8yqt3K4fNvPoaoZu37j3C4HmEgSfDVKudafWAxF2mraHyCfY7NG",
  "key8": "3mPD9Q5zi5D7heXrPu5RwDSh2sVEZscuJjwdQjMQw6s9UcpWnF6K1HDGM94jZ6UXaBMxGoct9d2bkiLwQNUXcwa4",
  "key9": "5FPZ6hfaZntTtUzbFKGno1FrkiuDhDeSHsHmHKeLy2t7Z7WhuMx1B9sA5uQUR1Ge375qBtPrQ6SowCW92wiihaVY",
  "key10": "54XgtdPX2d2C63w4DZquk9zRSbEHsMbzss8JxSbQnNXU9xtuDNd8QpRQBr2qCU9tvG3aqYwrAdHyZzQNKykHtLAs",
  "key11": "ZQYSJN9b4uFpQ3qmdUQgiuQGS9ckJvvUchxc7byR2JBUAZpk4iuK8jVB14VNszVFpe2aCmVPtKvHGNGkstX3p2g",
  "key12": "2YsofecpepUHo9Vfr25yLxvLyyhYARdPzQkdSsN4Yuu4KfCMkQgCHcU9G6ouXf32J7Z8FxVGXHvbVK2C3WJwK2Jw",
  "key13": "2TNP1Ykz3tMR3Ux1ehNFxAKtnT1wATf3vf8D8gFwuUbwJdqmDP6XnSeLgxxEWQ2DqgHTdHJWz6w3BRFVnWDTb9cj",
  "key14": "5mYX528NgHs95CavtDoqBjkLQMf56Fe8qTrGbnnFMqqp1ouwN361e4V5Z6DWLQEejBcNHGR3aHDbA9bcKkkgwpvt",
  "key15": "4gviFZBD5wwbiJM14M1A5Yv7GRQGbs58FSYEP2ERapP81YZ5W7fKFaKAa79r4neHBCmp6EA8xW7acKvZ6rZbLnF5",
  "key16": "4x6Yv6RZY4pbUMmKJRwA5jMyDPYSngAGn5bzhjiQcJn5rZUcLn6s7YeUdSGoJysX71NmcxbypCD28cApLYzUqwsR",
  "key17": "4YLV6M7hjuPKi3Q4L3o5nZ76HKAtFNJCodVgR7TvRYG2ePUQvzCU3JYkJDWTG5nHy9d9ghtEfER9whmwDiRyc29T",
  "key18": "9PPPR8koPZL4i4awfanzqC2oVTKKHJEsBbCSqigjeHAQRNAgpvV1fyGcAK4wxYV7nWWq8AbPjLtTaDDbACeVAgY",
  "key19": "eaZzpuPSGJ4ty3Khxub4cpuDf1FfWMZctQX55bqaP5CBGuJ35YSGCaQ9aMvWJFseiLkk1cgqveZxtRmzD9BhkNC",
  "key20": "5FYgr2nV1sGXwuYcy7evK3E7RMPEBcHzK4HTwpQZWP78p3A1wuujCqpyW2pZT1G1TG6rh7WrthobKKHSk9X7PKFQ",
  "key21": "zpFSHUL9Y4reuyxGhNXTzxG2KoJixncZeBxbcSnNK34EPVvGdoTp1BU7NuogKkj6cDH2DKtZBnxekskHRqNP3KP",
  "key22": "2TdkuamE1nrv1M1rQkkT9GsefgTK5QDc61yXjw9RLBwV3AhmsiSXH2VctvmDMdSVranJ9QyHdREoyJ7QG9GJn4Ho",
  "key23": "2wSWe2aW1N4mZaVaTgErHyCC4LGaDmMNu3TQkcpEJ3tGaCmsY8PShCJmiZvSeX7QBjkLHZyDZ4eXpqa9z2r5D26j",
  "key24": "4CJrRekhs6p1oBhJMJsQaHzFER3y8ZGPsz6JtTiJvk11kFvovcQSKHSpDZN9YTmiMueuTGZm8Q9YoZSAFFZC6wyy",
  "key25": "AHTt7XLjRsLE3omtr2dtjKhjCvfE9vU97ZKddE87axNip3uquRS1Vb8NdHRbCYaW9wLzCNBDbjziT9uFkLkiYXa",
  "key26": "2oscJop9pYdCnm9TQgBuiT5dbMmPj9dpJyagnPr8iUuSpSd3S6xpMA9qFNBMAnx2kFmQsu5iRsgDmYuqvQvLjLcm",
  "key27": "nZFhHpgfGvxvuQweFX5QFEUmeC1LzRTt9gUjYaiCtEbiBXGsPzssNWD13kb25fjU2EoS5aY4bHqqWdr63tRvssW",
  "key28": "2nRP3UWJ8kQTB1RhMdukTqzyKhtkUfUD95xjtaYDgqqdqMw4wHPVPYHcL6od5J3wYvTNgrWMGrKFjV6C3kWhqgZE",
  "key29": "fGpYA4TgGVs79smMJYNz5LkYcw48xszc81QFHYGfLVVLboFGYUnQr7ovC6v1KymenmRPz9JQqZUerYW95MA6vZK",
  "key30": "39eEgLD7ZC4NuayKGT8Yo9xAhjJLvkCjfZH4nZYFHkr8AVpNxjbudVPNiKy8xc9uUFcExgMAHs8qXPCc3oXCbFLk",
  "key31": "2E7brxvNrtrf8v15x1BSUeuZT4SiBQherVRyyeD2NAsMahqAnsCCSmF3gkCdPkbKMA5TN9cgfEgdRqxLgBZugEcN",
  "key32": "4aKFFAWivWE9QdZzwPGXX71cCFjtzpvLKC7TUgDoRUm1msH3Z8zZjcCQiNqn3Dwie4huufPPPSYhWLcnYDVHE9n2",
  "key33": "3R1pSLMPzPhkhscG4rVEPavRC17yKaSPg4XsaPphUoJZm4dvPJDuEb8qAKdse8wBkn3k1wLvpoK5gwFYrJGcvYRV",
  "key34": "4tx7FHxvTXWAVrNkFVv1Z2Qxbw6ZTT3e93CEhU4MK4GK9GYn4FQEtfCMHnwERjap8ant117SLNM6WSo4VkUy4WrV",
  "key35": "5NRCzzRvribfcdnYYvVkPPzA7pHC34uMED1JaMzFnKPrZiA1VpTkCyz7WJfpZrv6Dodie5rRfi8aGx9qJtoB74NS",
  "key36": "5z4R8jYntRhWr3qKe7uMrogU4rimNzyLoCr5U9z9cLnNNY2q9xdUnxL1iPq7qbBXEZjAGBCdNiRZbQscCH7UQbn2",
  "key37": "5JcyWaNW3MTruM197rFUN695ALaiMwYfTv3WsNDk9f1GYkvEJyuo7JdZsdKB3iqYJ7Fkksk4ipe67ffcB8GPMdvV",
  "key38": "466x7sWjyEG3aKPx3JwAgZNNP6TZUgkC8qLMuCJtbTDtjsw3cDHKqGCBRbLFXyXYE9xuhjhMem6s2BTEZZDkMzwd",
  "key39": "3tFhLF389pvGcKnLM7QsPHa2AM94XL9WbZvo18DA8MsEMkUbrjyMwhjFuLrJLPGViJ2LPj7CKDi7sCYFgyMAnQ1p",
  "key40": "2wY1yJA5bAywx4Lk558YTYMQbEbpHiEBtbr1iujDh3Djgg11YfErAXEkLj4smfJRqwogApx19CsbGedLwQNwRstn",
  "key41": "4zUrqdX54jMWvnetPzvXNavpffaRC9WN91BKWDyd8cStaFwfWHWp7gwP79hrUtyYRNLwBDiYUnwFGrRdxZaGPCre",
  "key42": "5E4Wx8zqX3stZw16t5A44JqsFE3EMKouMT5Gw61kvLMwGTn1EyrYtQK2q1ZTF2kzeyQzP4zp9jYc7FYHJkrQADQS",
  "key43": "3X1nvg1TJpqRbC43HgBVc9Qa7AngpGFigacSRGUq88uvioFdnYjM2e928ncZDZfXmimf8zHQHXUh9s8NXSc7Awea",
  "key44": "4Cju6euGkT5QVMW7JMsMqSimmghzfkef4AA7QrLj6KhPcb11NGxBM8Bd8HZPS6TjrpNVN4zb17uXr8BkVGuuyYYe",
  "key45": "3Kq2BChWv9ffUCDDdNJEXqfQCA5dGafZDg4L8nKpoRH9Pw5QsNCdvHDWrcvwk17hSkGsBk8aDkySAX7vhDENwhiW",
  "key46": "26aBLYU41VALptBUqFccvSRcujRJNJdf2nw9gqDCnbo1M6BRbmFzuMx9hCv2SABKn5875mcVVvNCPg37k3XTntC6",
  "key47": "mbvbXxr1JbAeY8nos9VML9FnLtC9GXaeDPf3vY7sQ4QEmique6Xuc5rj8S8pSdWpqMgdXKYT4PryFgGVSjGQNcX"
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
