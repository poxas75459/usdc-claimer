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
    "FjJsbRqAq75m8LQewePvcaHcFBFGLhZH6EkBf2opMjrDj8HhSHBxMhRXhb1JzEGkQzRboRSAwuuo3JhZY3TnfnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcnttpDx25pXVEQk8XLi3Bi3CSaADva83kVLMpXyxkC7hyB6txcqafWNQx7jtw6tt6M5uhy1Ssicd46hTfKdSWo",
  "key1": "3fuG9SjoBR7sX7t3zVgPZHzbSe944CmDUJziUBERv7XfpKyAYmZsNL7wUS9rVcRA2kztycaFDXKzhzs9nSKj6kX9",
  "key2": "4eDUY6dfDvd3ZAWBbPDJ87Y7WfT2hLSr7P9JDhCdPrzKPqK8kwLSJBPptk4vvQxsSnKNCoC5tiKpe5dCyTLqLWjV",
  "key3": "3oBdFJv1KujCBTHpNQc5dRaCiEEaQM2LubukRYEtQ5HUQ6A2pNWgy2Tr4rvTkusWJf8P4xZx1EKjELCb8eUWraZX",
  "key4": "5aQqqWF3nQG9Pq762FJ3HoYRToENQioQkNtF76AP78Wwp3puvtTgwaED5yVmHeGWEKLcrWd7Znic6vpJAv4hAoyE",
  "key5": "2EdnqHRkZhj4gn3qENhecV8fpkx6vfiTvGfcYCPXPkdJyJvMg9mgMgvNLLxSYmrH6BMueTkANPJNmgRxesygN9Ys",
  "key6": "4kNoj9vpXHiUZxBMj43ahNHnCox6EgR1aE443utkCKWgbHiusRrSCYKUDihprdGCZAQDNRPWZFRgwc1UXNgQi2tk",
  "key7": "2h49Ujyq8HtiWHeZApM86uvLDUqoDCrg3vUokhfRDpQtq3YNNVJASVe9kxAQnsPRuckYuKFFTHr8Yw9J78S7hC5X",
  "key8": "53YMrMcCLU34rNXM41JDKEWWATdBa7EFznPnN1nrLbnYQs89WSF5KEfQvFCbpwwDnLXRKwa7aYxuU3965mXSLEK8",
  "key9": "4auyQmoPvRRfXdDZTbk3qCJzkoUUsyacQ6zS4aHMQwqdawajWnFbEN8WMhHkKfnPkMQhvsuNcKDznuCFSjBrdSXT",
  "key10": "5HWZP2ci13jfK4RTeL5oYGLZnYF3y9NS4cYQX7FQsBAgHCfc9nv95WiCDWe4eWdgsSEhs2Ma4uq9EqzYBpRcboAy",
  "key11": "wLBxtwr1LKcTTR7Bi7w8hBxCpt64otdLSyHy9WJ8yr4v4VoggiiWZMSGQhE9Xjxof7NE3fSLeZm4Lp6we1JC6xH",
  "key12": "YHcfeioWHVxPUGgN25ceNMcLa9Qpog7YJUMm7P6ZK7MkaSDRvUFZzhzPXsTpSHjKmtL8jgp7eyxcVJPdUzzpTrv",
  "key13": "5vMoZtf2HbSjzXNCgYCz5SR1gGZ9Qpo2wv9nnrpvTg1fv5wFaciLera26cWuaCS9GKMYbjEq2K9VbuijhQjEzKMw",
  "key14": "5bmgFirZHfbMJWevE2nxRefvD2LiC4yed6nq5mgqPqdRjnHCbZYezWTaqDCVCHzcY9GaDwqZsiqNsfgbaYtXYWui",
  "key15": "4ijdc27sBXoV5rwED7s2kWjx5gkaHtisDEoMnvQeZGZdhnxG2QSuQmAWETgpXgVR6AXonAAdtEP6dfMQ8S2eet6j",
  "key16": "2Q7wYayN2QtpeMEVz1bpcMgn1NmbiZkfJRSZZUBHzAmdf7PJbVH6oCCipZ6a8woJbnBXdZV99VpTsRh2EwdNHR5P",
  "key17": "2eNndgVQJHRViC36s7RV48dTLVoLbwGRg6EQucDjiiQHcpWJBxSoa7iLppjCEZ5ZzCoETZjh6aT9dn4ta5CjZUey",
  "key18": "4k8wRKZUr7RRkjQ7YKh1UM5rN4EqNoKd69ovT2wy2o9shantUVTMeuuDVCDG8irHXh9h24UPv6ASB87zsfPniKWW",
  "key19": "5xfNB39TLxyUmQcQcDWUo5dVT5FZu4HCtFD8zSgiDkd97HWGBvtveQXBA3WDbYhRvXv6jMCkc5X3bacSovDqU4tD",
  "key20": "2xg84P7uye2hxrmuSLopk429F5TgCZAEw6aLQ7LnPeRzAfD6Z3cCJU5rJFmXvP5XMeKhBGYEg7TukhWPm8SzGwBf",
  "key21": "U3cAps57TwjKmKtK2j4f8L3N8ULaTfDRv4br3BpLKPX7Wbjb3JKbsbMXy3WYryztDPjTAHD12avncCvz1QX3fBU",
  "key22": "2qX8WuBarTxAr8uwUvEYTUrgNzYkrnBNd7qmLbibwcy87z4ZtbgLyvfnWmKNyTwtpMY3kLTQGLWrZUsW4mH65EQ9",
  "key23": "LUiBdT7URaRaaee9i8Wstc3bhe9gpNzLQB6G7EQKHAPb7FhYLMJBNa2wTrnJw6YxmGbrM3AUW5h9TQv7xrP5FXj",
  "key24": "5WTy96vRUoNJ8V84RQ3swNt2TXPTAaV8tAQ3Rr9W4yJNL8dtnnKCqBH5qN1bYCkjau7MXUNkYTaKgL6egSzKZsF9",
  "key25": "Ysp1Q14CGMQ8uEzkCR6gJRToAW1VyceW7UufdUDQLkosSG9ZobW8avxJ6d5zaD4y6QdHxMCQwVvwvryxCEYrbfF",
  "key26": "4hrX75nND6eQGvEcDtAoCkWAERhYgUZeSfjQW4A66s49Ux1a95iVHgE16WhwuCe7EYepoYyu276CXwamtVEE3pnL",
  "key27": "3PT9FTJPSTQM9fyCFnaGTMe4orpuYYW1ztRMVqy1z4bPDicj8sv6kRntQ3MDs8PHt64W6qce47MFtAbZmBCVgw1L",
  "key28": "4b4tCoVrM886xnuNzmiXF34rFcBPbYUn8sZ7sE5TzqAaHxuYoWnpFe8GN9YPvtsSjW47CfkgfHvrNHmfVJPcvm6i",
  "key29": "3DmzWTZjHFwsrB9z8WeNA7Uo29P4Kk4VbYW2nQhi6rKMeyhhdYbzXZtxVmTsZYQGS7JgsH9jTWgtcQLmZiSyuSuE",
  "key30": "3FrS7GcJqaEsFMFpKsPsd9DbnuHmBWY598wEz3ehmKKDzf3Xuq8KXg4P3ns8B49k65Dx6Bht6iw6VtqgyxWyGDv9",
  "key31": "3sg8XAryJv2N3SLCYRCNXoDzGMN68eXJL9pFbQoPyGMYJvSi2j7uaAdmPU9oy3XFkMtEpchjv4WNUPtUjrtM5c5D",
  "key32": "vGQPMRCL1wHTeSo4ZURtdytQXZHUx8S99BBP3rjGNNEmjtgBuoYsBDvBLKhafA8JhV8TRuArANx7nV7QCd4DRKE",
  "key33": "Ry12Zmz123xWpGtc2cZhcnAsKtbXkCrJ4TmA1qrPkRG3GWb7HpcDcQKS5EUVZg6TTXNMrgByk13pD6ftz6ecTmL",
  "key34": "4D86ux9hm6QrCAQDuGPy6ZaXGHARBu88KJ6cYS7txKveSGZGMZQEpu4XD1QGqBj7MZPmQwDHL5k9esMYnZpR3eTL",
  "key35": "3KAwvGCuX553k6QhRrDiYtpghSWWCLTywq2jCX23zJ6dpC1HmGN64GpxkVpGn4MPU9dLZbSevNofh2ri1G2z1zof",
  "key36": "43yi5rqvbq7R31phPHegGtMJxRkLxLYc4hGd7RkdDys4izxNRNMNKCTFTEqdR77r8nUxU6Bi1bWbZLvAdejEYkue",
  "key37": "5LUaYC9UfHah8SH4FvuhxjvnXC87rwQMDXDwUKnrusRJwSSAMTxivAoD2gGGmxBxBSswBGPQM8NzU3QFp8jqF5Jb",
  "key38": "5hDs4zjQe6ws3WXPpYBX7RXeZr9vfSYFBEShHgNhJRU8e5tuH4VJ5aou39AUYs1jrmuTZgXPjmzsJWoQyG1q6fPG",
  "key39": "4pWAsiBkGhcJ3xTfvhdGfkvUzQid7YyYLSbHQE9nygNM6bjxcxphPmdd6U88WQx7dwXLc9ZQZwR5LSZqMnxH756W",
  "key40": "2c2Gxe8VRoPKk1HyzDfE2k2vWhosUxcMgZFbS8dBVx1tH8J4w2RNsSkoEjVfYDWJnZ9SwMh31RYXq9CSF7VQodii",
  "key41": "2sor4YsSZahjc6zit2nvrzo4QJBTQGynfL8msAcUC56KGtb7RP9EnuCucc9WYPmGoGR6L2hmdKYm8yyeJw9KJBVz",
  "key42": "4Av9Y8tdpPicw6CXbHzxQHZezVd5mjFpSxfPaSZnvdyC9kjRYN9t68GmQBMbQJVukaENZxcrjtnJscXK4enDdnFZ",
  "key43": "3QngKEQz54kgTptuuRXUDBTj29iQerhMsSytteqexsYNGrB1yCAYFX65qBbs5gETun2Cyf9vp5ZFQ9AUk2DWgfKu",
  "key44": "5nYgPnT999PjxMD8STKRqVgFbRUa4NPNRuUMK66DNgvYEU86ALAtjwbu6t7Pb2kToh6XTowaKZ4GWqKLgky7Ukwz",
  "key45": "HycrP694842ZBHMQWPM5qwYcDXAKxiZ3Gyw7MkjVUfW3noavac7Jhj3jLXsXG4bd9A8x34vdXLBxFMTtq3F2iNz",
  "key46": "26udGiHAkpjXhCg9FT25QX8HRW9E2pC1kuhWRsrSp46sXt2wRqePK6sizgjQXxLNHBF1Th1XmnSetn3Xd1GKK1sH",
  "key47": "2BSnVtZ3bfixJFjb8t3Ybeit25kXGnw1rji9S6WsMW11RV4yLMUC6Q7KJRKrNUvcJq6g3AHWYuNcRA8NDgq5zcJ1",
  "key48": "3KyrepceR1xjGSNUoqXTitKNi2bLPwwwPcCwGFbqiy3viGXnYZuUSuum4EBNnSwjmetqgYH9b7JogpDLSFiSMaWJ"
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
