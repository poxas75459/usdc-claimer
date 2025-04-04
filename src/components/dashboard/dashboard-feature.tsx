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
    "5nxHHi4esuAKA2AFYm9QsSx2RHs3Sz6u6cns8QzQRZRHVcpBTnYdqpbZ8nSaoriozD5GLKvMUEJQLEwobTHPKRee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DXxJ8RY2dmgG8tKDk95Yy3R1VskENorheWPwy7dbJoUASQYAMNJPXQ62qHJZk4ihGVf5J3ouHLH9QgRfe68BUQA",
  "key1": "3KRAQzdHZ1aBZAxh5UuA4DPoDKbMhS8puAzaewpGQFtqMBigsQp5wDg2DATSbP3g9BvRiRCrfHVYNQECCRa5PsJp",
  "key2": "3NAaud4Pq1M597CrAYr1MF1d7BajXRAZygDJiY55cdVy6qoyM9v84CkgFAdKnne9zHqHR3mkEyUsxLuCKo2wD4rF",
  "key3": "3TbRpJ2USdUXWVQvU4Tf8N1oAwvJsXSjkmWhnDHy2LwJ35PQwpuRc1gRr3uHi5Kw3wwmh9VM8HtzCcvHB8vqfrEz",
  "key4": "49cXbMiBjDkGaDHTcUZPKi2iWMPR6VFiUy3MQwMt4g2AFp4qpsC1MQXao1hWUY3Gzzuo4fuhKo4Jz3SkvASvLUBV",
  "key5": "AACShyeu59N3V34CDoA4uES6mr4CCamCxtoVJ9k7vNxN5hse5z6vz6A8T5zUYGkPHJjyfMS2dJqRt5oQ2TrfyK1",
  "key6": "2fRafWHKszgh2Z143R7uyHTomW8QAk5VPCeviRL23AUpqyS8Tw85rGaqiMovtxXFEEjyXJubhaW5DijDYgnMTdwu",
  "key7": "52itmYppeJ5s5JEiroZYbwKXENfhYykMWbB4yP8tB2b7EJgwhbfpmjDDoKmGdFDkD8j45QoSFRGE4iYskfEJgiLc",
  "key8": "2CFRLcs4JBnwME3aQgwX4yxqY6D1KSUvHZ2nmuMgi6KLkzFg1PsPMtqiqYmgvqupm5prP1E5BAsLyq6dopuaWzBN",
  "key9": "5eEatHUKt1UPLGV1GSTfp1magYkpWYbpR9Z9VTr3kFfpgLHRP8936xgkXL8ZjYRfJgZXUF27ZW95mvBCdWAuKeH1",
  "key10": "46HAZQMoZWSwkXSZNPwopu38uWQpZLuvEnYLcpxX7Rpbz5RH7qvBpWMzG2NxyHK6G4Rv3WCdHrt247ntRP4CTMhy",
  "key11": "4CA6wzH2qqdYWxwjYTieAAfQjkmem2K81SmMcgX3B5fC3xA5QK55P9R6ghXSLr2CWWcHVXC7b1tH7pKxVAKy9ctS",
  "key12": "29Wk79sTkYhM3mYbBDDoU3DcMUcYZ1qHtqGzZucYqFLPr9viyKFi1F6uNNRTXLQ1VZUQHb7RUCydaueFZ3xYEttA",
  "key13": "FRHoF8fjBdgDVDhJuKGmaGJ3bStAmZpA2mpDDpA7BKuXLRXF4xyUFGU2TnKKPUwAUv1ihAmCB5E2XjPoYtkYD2J",
  "key14": "389c9mFbzqd9NWtAo3Skpe71AWzN9SXRcLQMWyKesBnhD7fYtJixHShjo9y7EWqX7nCmwaxA2pZ5LXwGEhajnBhh",
  "key15": "KNPepP1VM8XGAjppaBjXHdDR7JDft2d37hasxYL1biTJgeaWPXT2k12TjovKUzBA17zGkYaP3xrJMg93YPePDd5",
  "key16": "raBQ8Dfy3mE5Yy3fN97uKcv2Jv8o46VjNYTnyRBVXJdVLseTDbhwrzCuBBZRQowrWiTYgHDd4USbj4io16rDGkj",
  "key17": "2tMjq1aKAY2KeCh2nnAtaKWnSKkzdbTYaZKWq3uqeNPMckm32Bds1hABFzX5ZYX5pi2JVBZp1BALLgFodNXHdhoA",
  "key18": "B32BuAVSLxJv94o8pnSR9xz358kroUyj4hWJtDoxRh4zThgPPBBiRz3X8LxycKwD7RUUmojE6poRhnRcqPvA5tW",
  "key19": "4fe3DwvmEZkNdFYyuTkr4jbqz1vb2uWFozEK5jKnphjTvDkoAb7wuJEBPA1kzkqh3YCqupnra7iYgbxKGuvuHH17",
  "key20": "ajKnoonKXCuqX1HfbzKq8yNCikETsTj4jaG3kgpCRc5tL7Nn51V9rzGaf8jTTJSsUTezcHT7YnY1Tq3moiLCDEA",
  "key21": "4Fp7jgfAh34v3LVSSfKCjodXkUtpEVQwN281GphGRxmD6ixReZr8ghWD5iJ6htBsbC1kbNMuQSymmE3PBk6fbihQ",
  "key22": "qbF1H14JykzS6Jo2XM8dmtvzZXiAJV2h4HhebxALpG22vdV4fMtJyyReNLDuJSAb4xcTTpwfY2DBgCX7Gqh2xfU",
  "key23": "5poviACiR52FddiFAJXRnNUqXxCB3ntdmRvyznuMgtCdzXxPGxqEjCaeBa3WQohnTFPFePDEpuGQmKpgKQjKGEZK",
  "key24": "2KooRqwEvSasEfXPhUZyMuRHgnNG8qmZkeSgdsKbgtMycjQpyHazerqghqLTTMdi5yFod4Ph7aW9fLGP7Bnu8hxJ",
  "key25": "65ZXpfZZjL31dTzGfp11F3jmxzFa5GMZ66EjNRed19JsdTfV44qWpXyUWF6mDZASsrGFebWmZ7paU3zc4kGNebQp",
  "key26": "yk52tRt6ELMNvLH1zZZgjnYo5jAH8oEDBvNB1vs5zsJkKcB8SZ2LeAQSgdzLzcRmdviusLDDPfGJaUg15LgVvn5",
  "key27": "kbAfChTBfwTU8eUhnMwAJRDs6dyFBpognUoFevzFfdbEP1rcruguJShMBZwjhMUnwg6Ck9kr3F5g3YswsgAjLzU",
  "key28": "5bMGxGPirmLC4YkCsoUxsLU2sdKNiMMf5UpRy7moX5TjBdWo78xLmentAxp6zKgGs4wbZqgRHXmG58vsvD4Gq6YT",
  "key29": "2Y3z7avT7HgXXX8fDxwkCSXJpMe9KSFXCajANwFEk9tJfrgKStAnncQ8fS53PcWYPXs1v12KKuUP822MHyNczcev",
  "key30": "Ac6cJSBVvnzjvjUG5H4zUrj9wKZu9yp4RR4VuRYEbzGQDpw2VEHHpsamYfDEqvFSYyo2mcc7DCaGoofNJ6AtcEK",
  "key31": "1vAHrLDLdHgkct8xgrA8kDN48eXDhHXQMqGe7eHc4rLKY1DswWjLhkeS7C5iigYPrTaTZhiQXnhuAvcZT1Hm1kU",
  "key32": "4LtdVLXAVbV7CuDhMyk26bkTYZv44x1GahTYiiwr6QU5m32w8hskqBjY1B7Usz9kGHa5ymYkv1efZzeXbkbipdJf",
  "key33": "4KHwzDatLZDnySdDHV1Jt3AHP4RCkvERDxgUbJuxyL3oHkLoewNZVTr51yVfEFEBkGB7UntTVU83uquRKj8CsNxV",
  "key34": "2tc5LKA1Fh4SBkvwtz2QJsiTcNRygDk6jbyz1p29jJamuGyEbKNFsrJLhQSF7YY1dGMHQHjzkGo7opc9J1qAE4XG",
  "key35": "5fkzrQdKvkd46V5pcNwPFektPSkQvVckqDL4Hqx13wciQ5nMQDi9odwnfCKAgpNcg4AWvh8k8EkTiW3wa9cmSeSA",
  "key36": "2E9ZrH52XffYYNgnXgsSpN6S9f7ZBihpuyyggfF9VvfaQPG12aPxh9NZJD8GNgbU6pQyr3kenZw1zomQk3Zw1efd",
  "key37": "5TY3sd5qaVmeHNjPJGWf5hfGhgkjEKurW7SbQ2SWdo33WS95yRffbxKL7unvvVq8fmfddYwivySeurY5SYm2vPhU",
  "key38": "21srk7UY5pg3H7EWoiwdsHimSbBAgL9bsfRTiNPJJMrS4NbVJY3u6QtXf8bs5iYWp4PMExc8VkzFXhF2Jr1Q35ee",
  "key39": "39GDw7jwNjrF9yBxpvM9T3s3cN5MMSUpjxXHDSkhY2Jo9qV2KAUFh3DjztV4jPv46P3zu5qErvWWhc7Fd43Y7aen",
  "key40": "gU7aYF2QpJR81nMo3RWNdiwmszYxbR8WpAza4UrgPqd55XeYezCtikBD5uGDK8gXpxyH3UrSxmAQTk8fWdx715H",
  "key41": "5uaQmoWmptjrjyTFg5cQb7fm6etMib9rCh5K1oVGML6CJMQF4ytrrhEnbYnB2RA2GX4qcfHYjxqhPhSgqPF3yGvc",
  "key42": "2aTLYrZzuiEd6puodp1bkZ4LAwH3BWCAFbsNUdRENUNkfejnsnqjoejaHP5q9CNryo4h4FxzkdxEvyRxof4aj6aP",
  "key43": "3rMrJnYHJtNpnt36MbhNL6JYZXazZUbxHNmgXegZAXXMNRGvzVCFZpCjbbcvV5ykWTtPZXp7UBGKbG6sFji8sRM5",
  "key44": "mGpWjedjpZjs9GkWKzCs3b5tkKKGdLwBJpPRH3orp7zzxtVPut41vobwWkExxTpjz6RrpQdXYb2C5ntJFBhA8sG",
  "key45": "5tMSfZ6GvACZmu1fM82g3LRLUmuqHNDPjXP9j6sCMu3YERpHjjj63zmZxNCaSxAguGufJiaYHf5YGgYVwxSpsVji",
  "key46": "3bdPi9wCdVUXfxvQUruakzU4ykwcBQvjEHSxwndsbZApfSbkJzNUQVvJRz6M74M6zRmHKqXQTiTkH6X3F3s7Nuwm"
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
