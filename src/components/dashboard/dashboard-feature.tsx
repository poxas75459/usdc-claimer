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
    "2D7jwY4DdyYDk4Pe8m4cB5fUFvWAi3wyRbZkGYowYjNK1t48pNQKsoyttsQ8ovQkQHDuCpGdNzUbZLzL7o9sLKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64vvj446PXcHwPbYMgbAqwTToBfz2kSTPcin5epVbFYwJQdKq5idWVPWTqkBYfv39qbf6ka4k3yMxgqDhxT6ATMv",
  "key1": "4xB1X6Kf7XcT3MPvcrNB5bqyJCmmWHZQqEbB343wbFnuasYQTjU1XcFHnvFszbnrrC286DWgranYp9VjZ4snVsDA",
  "key2": "2vLircQmUyVsUjZENjhfJqaXQKTNvaGV39Ymz82HPXQXMGAj5mExhAyBuDieorDuuStk8rciAxrcZCk38B2Wrzx2",
  "key3": "58YcpyE3zbG54wemHeJsviYFebF2AfY3qLEiQn6J7dapTKgSXEHJt6p5XeayS4txENkjYbqa5LFC3t6W1N7YDZZo",
  "key4": "5ZMyWGue2xtx2RCHJZMNmeonRZxQX5Kzjcgt8ZiWbQvr5nWrj1V53SdbNtTeSzAwnZzSLoRmPk624SsqWdQKpVH8",
  "key5": "2E95cpWQfCyyezHM4aVFj9p1G2AivUfC3QdQqCLnPVLpKoy4SnrGtMLg2qCkjVz5HUuwSBGd4593Mp37hMmmn9vj",
  "key6": "G9R8pNA2oY298VRJM5Wmr4R32ZyGwT1jS7DSkMaM1zUnCKahdovzj1RKVTcJtP7Q4CcNRkLFTyafdkTfQD9t6ck",
  "key7": "2VTSCU5x5nXYWSY6FucnucdeB5rsytBhE5qSExkjnNSkFqym6QRMBXVyQiex7rhwA4yLKsHmDAHGJZyUBxhscE3J",
  "key8": "53jqBWMT7oXuonp19LCSRzwkW3voRVNTUU6vcyF36rLvoihFE5U7fNJRqvZPtS7zYTieDv3E2qB21cz7wvw2dAsP",
  "key9": "65a3VYXiVwBGnNENJSdGqmKB3DQ6aoT479tNPTASGjUGsSVkpY1z6x317rYQ5sBvyLC29SjSQT8dciRMFFma1SzM",
  "key10": "4TNoasfcCWy7N79qF34yKXAsWKPq8x3xMtAozxJXCCt9SJ6FHBWPcu1XUHF5CgHwgadsQFB6y3CMJPFT1hKkzoSc",
  "key11": "4n4oAuosK8cBX7dpfd44MVGUt3n8adh6qaHEGumMDhBgpwTn9bsjZvxE1tjvhLfZMCKnE8pBJjC3in5WArdBL2kG",
  "key12": "2xVJAvtmQsHRHxUa3RPwo8GMCtJR4iWuv6s1novxCC6HD26VUmqMb1HF5p2NumPEuMbGwK8q2ToyW9eCv93HkAbq",
  "key13": "VtSxcwJxX7LQU4DXMoEhpiAgD1nVzFVz63X4SWXpwTXmTkrZRPxvSGJJLDrHS2yWNTXtnFg59Pkvck9Cn5eFF68",
  "key14": "5f5ZRddB9jNuqCTvTuCeck3AqFaaS364ML6cudQXzgZtD4Eto5EJPERXEhk5nUkMjgZAGWx3qh73rB6RrhkjsJba",
  "key15": "63BYuTGUDo7DaDfXX8voLELRAQrCnSKyuW9bRwbSKFo4qaMHFf77MEGuuu9DYpBkHJZSBSxz9N4apEJytYVngva5",
  "key16": "3o51oK9LAPwSeuUfDMLpmENaVNqaZn4Kb7mUWHak8SKfSAUqEfSpYma3rQE9YpgGjSwXnuSwYYyugG6NfcCncaFP",
  "key17": "2G4fo6ywaHEqJ1M9oPQiyzcWgCRrxj7z3zuhQ4NE6NpLwqzXsgFweB7j15Tao8JQ68qQT3ZyfrD9g5EppKyxnMRU",
  "key18": "3MKBLcVgPXj347YegpCL9UV7ZBuZKLNab9YJ7zhD141qZb4Me9WsXPYLs3MJzWa2o3rk8DRHe7YQbEkL3f1tNmm9",
  "key19": "4BSh8QsaQy9a68zLJQaxF8ZjHQPBxtuyPr787AAcKaA78wF3fPza6dhWsp7W6H8qKHSMnXdTdy5FsStNXc4WnG6Z",
  "key20": "43vCP847iTdX6sUQznFzffcQVXj1c8aZp4Lm7nSsJC2TLySASgQJ2LFmU6T23XXtki4d3iFXVMCgbDHeqkBZFMUb",
  "key21": "4gR6BUa2XDdGpo55SNJ6RdC5wprzkvkYMtbZ3s2sDPaAh5zTvq3FKHGw48iR52HNdaVLo7qiNuBHGBSvAsSu3XqL",
  "key22": "5PAv4SRmdNXEAZMK3DGAKaPTogw1h9QD2wyKo2NJHaN3TWsHvZj7e2mMYseNf7suCN6qaZcAewYVCaSf2VyrN4f",
  "key23": "29RoAKRhgUBqufVsZK5Ut6DAuHQYZdxQK19bWCa4QUvphRntiFhrNx1tutdfmXNSYGRabQnzok186vaBsQroUDCR",
  "key24": "2MRs5KZ9jcEqKQJsCinLy2qkTK88cqyPKCfd1org87n3mgKPVJ3UxSXEp3jPRN1VswsXDdJB9fpCzMxoav1MhZgy",
  "key25": "4Vy9P5bWcucueSWZxPtgfUHLN4EdEyrFf2ohXT2JqumsZTAJv9BWWL9ER4C6CCFFN2XQ1cs5UeRLZq3WL428v4Lg",
  "key26": "hLpKYqfutkvDJ9qNRmvjj7wtN7B8LTdRPbTa7nrreDaPfLU6gtVZpYuJkMwd1kMUUfB2zdW7he97EnxtkLvavFE",
  "key27": "2NuDqz7fNTPhueHBXDnmL7D4iZNdq4YXZufnPJJ9xxPbKcyESeHf9Kk2Ah3rG1F7KXybmf9qnBUSHooV5sAGp4Yv",
  "key28": "2Xm7gPkfroRkcKouHTrqNj8Tyd5HugsBCvqivvTKCQg4mL3UynVxuyYBtYSQcPUuki1rKeTWD9rXRj2pgUjoFHjp",
  "key29": "46gEnEidps2fv8wge71qZb4b9U6HJzUDfTqgk6Sjiurpjf42eqxvR3qA2PLaUMX4HYUaUTWiFAqjHwF8MEKs5ex6",
  "key30": "2sMKDrTpBNDUJKYX7nQdJMkuLP2ZQpZ9dkPY3Kg9TEpbAjXffJmYJKLFoweDPjjNHj6nk64BTjD41BBevA3tJpDP",
  "key31": "4Ae4wjnNgfvVgwkwALMGSw6n81RF4iw7Phz2iTridVSXSpYybiLP6CJrXHi4fwUQrN5r3uLYkZbbXDXVBy9tvof6",
  "key32": "5CuMoLd3P1bKrpxwhhFavh1XWx3wLXjafkY3PXoVShkELHs9b1wrGe7ixq7TKcC2TqUG5QofTCWUrvfoe9z7cdgk",
  "key33": "3ucJfZ2Cd3ryJAthoGsrTSWuznEidEMiUjRNZEfib8jWyffcr1HqQ9Wq7FecBVMspp4jbYgHyoCbXjyG5cpGuBp3",
  "key34": "nhCSpzuURNe6avqznrAXqCYaRmQg1mDnsoWir6jTLdahkKYzDgHQYa7k8GsvQovXPvogE1mGF2mdFzAtuWEGrjp",
  "key35": "5UhGkRzw2it8Z7iRNa2AZKnjvdhZjcD81iJNSQHBCvTSGSFGGYLsTm21u6WdSh6nHnJzGdrvBTnaYbVHTezr2R2w",
  "key36": "2MeSxkGYSxjh8bKdus3iVNPmwV4RY1vnfvPXJqRA4KbV7ySZTy4AWV133EMxtURm29gSVW7fzFC2umqAyM5k71w",
  "key37": "57WGwVptKCSeJBkuDN38o83AZgcYCxTXucRNKvS4Nwot1Gt3TuJ7TbaB9j4f9GEDmhd1AkDSZHs94N3XGNfhhSrG",
  "key38": "2LSrxh6zZCmpqV1qQtqKM5gK4tXCsmKud9XssgMHdjWc7uhhhcUEZbTCM9Jm52oAqfu2VpiCBQUTHfqgnzB1ryoe",
  "key39": "3TQRRaTNzstcEhRjyhNPJD6UVhocdEfEuj6oMHW3P6AkG84QEmjGZaZiqm3M5Syk9CQ9Sen8bN8wc9gzWbFEquZP",
  "key40": "5DrvmnyvWcrUinUmvTxD9PXpni25Jd4BDoZtKVHiJpSsSwg8jyCTQMqAx5dBsxJEX1QWmFuNYD2wX6s9je6UpqUJ",
  "key41": "48nYzUS8Twxsr9h5nCTn3MJn6n3Q2xkayjXxVGAJGpj9eiKFUh7pWA5ouh3py4XY9ZBxzV248aEtwkQMhEc8VyKY",
  "key42": "5oAP6D9tXWbsLKckYw4MTDht4qCZNb9vD8eZTGRGYXmktqPaEboBZqLGHV164fT3Ekb8xqwDVErZ7H34FMDP9Df",
  "key43": "JKbxA8JwJHK4pCLrFJwnJ1chipaH93oq7gAx6Ey2D73rZ5gxsqeJUQ3jBuDvpLA81TJr4sSeG4YUYJjuxKTLWJh",
  "key44": "39MyD8nFHKSQLaM1aWsKjJYaRmPi6BmmaMQjiMdiyEm319zyoSwTxLjHy1JAFjDbZbjURWLoH8J9jKcaz8Ms2uRE",
  "key45": "4bsBjMxsbAez3dYUBF95x6EH2wjz9t3fGmFcUZFKXmwFymTXNZD5pt4uyLPaLbpn2vrK6LxooJd9LJRs7HRqGskn",
  "key46": "4n9uY4CTZ6qzqy5zoVsq2FFKWP9cjnCv1XUSEPC7g9YVzyM9n9PrKnMzqyQ9txRz81A7PTqyU3Fbm5wcW4YKrAZa",
  "key47": "bz5jMGnctFjHcvFo5Wf6LPsYR5GKRVobCzGBq8Tb7zqMU4fCDScTS8n3bWNy8gDZQoGKMmd2UfuiErz75GwTdAM"
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
