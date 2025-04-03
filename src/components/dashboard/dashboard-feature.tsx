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
    "4LmpnaL3eLe3dJzkh8FZwdvhbKC9CF9tBmmcBwB8q1VhjM79sQMSW7JCPooymfXrJzwdyP1XJX4y9s8UrT9YGytp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GgThYST3J989c2gVPo1inPdAf5xGG88gEpi9hZzxdeL7v364Rw4ftgNwkzWRL3gsX6do5qNx1umhRJw68qZnf16",
  "key1": "eoVejPBKmSJEXBThpQwqjKM4yxp6kpeFEDdJNJkG4Atvkx7quTjUNzBkVDaNZfxaa1aidp1rUtbBkoRvb92a77W",
  "key2": "2NSNBgsz6KeB9iM6J8AMsvBDMmuiG25fduZLA6VtpXBtLCUom5YqjDauCkjb9SL6ZUj8SMcvU29Kcr8rH3ddf7cd",
  "key3": "2YNeqfF7Cj3sgsmnS7RbD9cPuah9JkCJ8D7vv3uJZpmpxrxXaBm3tHsie13b7pDgX5oXnKwcpd2VAo7dZspBH68J",
  "key4": "5YMUF5G2guJCQaff1L9ULydWftarYfZCRZQ51VebD3z8Sfz8WnhLFzw7fEydcK57NbRC1QfNxiKwohoArDzztPf2",
  "key5": "63B6M5gqeUCiurCHuwtWbRwjE8y1hprS6PV6qz3hW3xjpUapFmZebSGL23qxwuUtd2ciJ8G6z9HdcNRddkJpjkg5",
  "key6": "3NA7hYne6DxWWHPSudxsRETCBcUAYbRaSWqFS4nzBJLPvqqunttVSxYZ8vqArmgCvdDXPxYhoPggNHNSx7Y1x7qn",
  "key7": "pG2FJFwSe7BBnnH2Bf3kYoRoNJPHoh6ipP3hWHDiYahv5vqpDqZ6Wp3gTg6XTTGbGmrvyCPJ1GdYCxmfpSugiUL",
  "key8": "2C7LCmUpTR8xWCk7abKVzgPghqvEUa4gnzCcoYhKLLQnxbdfgJFMeYeMeJV9kkwweuFn3bueHP5bshP875oXLbdo",
  "key9": "2vzExreU9Mkzw4CS1E4SjMq2JbcVE64AzyYQrZpSrEHyg9FU37RnEkr96a8Vx4sZphLiHJyJacvyh79uBYxGSiEz",
  "key10": "4TxtJSeG1GrX1SPj34pT8awqH2fEJxS5FgjGyKdQeWczZFq6r9rVtBw7k27fMg4gWnH3mzBwPAoWZsvH8PhPa9pH",
  "key11": "2x8wfhWmuKSwce2vfykfuffeKoqk9qt8odJ2n4RfdaBXvTez6TSnFprmWoFYUCoPgpMNiGDZ88kakmaSY9kerLK",
  "key12": "d78byZq2nnn7zpHchCxZtVzyLQFff114bK6yvjD6Cd8j78nhm7NeX1ojWebg6DyomM1g1AowCid97JpeU1ye5ii",
  "key13": "3idPho5neQcaVq4PpLFSYYY8snBgf6EDDEcV4o8ZtfW7HZ3kAFSyYaT71uLQXMB5Y8XbwkNE2xYGNJhGepV27Bp",
  "key14": "tdf6CXPQhbBZYehGT2r7r5E1a9rn7Pzsm5u9xz7m6t1ftknEHha6dhvamETc7jCzfc1sExHe4hhq72pBwFBnqao",
  "key15": "29kXf4TzM3Kv7pmBpzHBtxTPbgqBcXg24Xvury9iZvyvSX8vBYYnP6ZHSyYhatMcvqX8Sde9Gpi5higZPaerA1J8",
  "key16": "5WmfN9BsKKCiXm7x2PaqaaGM9BBFVz9VZKbeNaskZ6BQ1z9Yq3VpyYdNuhR8HnTt3N4NbP6a3QHcZ9XQqv5o6QzC",
  "key17": "3VPa5eTUvj5ktkZVYKV9qFjBqVPRNjACzsh5wxckAPhUVPmv7SaY7uKRtUkT1UyJP5LcDbsWbeZPo9WfATnqygwW",
  "key18": "2putWJCtHxtxSadHywb9GCSnMnjDSLBFW6yu7woZYFwp2yw7RTLWFMpF8qd8xyjagabt4sF1ckC8NaAbTbUNKzUq",
  "key19": "2AidSLQiKN6SmjekoRnBA8xp7SptuyrBGfZ67ybGu3xHDQNBxeLKSJsu5YxvFuZVAjj1QVZGiU7Y7H9QjKEMG66Z",
  "key20": "2R2grkwX2VduPkEpa4MSAgSCTpReDuBFaP7vF32AMYcwXRyBYBX2hqavfUB8mLfTgpTnD1oH4mAE75UHSxeRsxWm",
  "key21": "2paSXy2BfmnV9HCvYfzoN1vvALrBVrJJGRyF6a7qMGDD8kQfqKE4Ggs9Yfqu3Vvc1tpLsVuwrXetzXYoompTwJyx",
  "key22": "62fLwgyrvZMAKL58XTVEfpXgYvWhNRXcZZXVHebqRzeZusPyT4pTTS45c8mosxbjQUTGQL9p7zA5159jMbq8a2QD",
  "key23": "UYc4Mpv2PPiT3nqisNZqyYxYsKFEYUzN3vUYwtaKjiz18dyUyft1cdwajSDon55Kt2eriqps86UpfvRJyt3m3d5",
  "key24": "hUgdwei5ZTYoC2rhm6mWxmquqTXKaaSgbM8Xvvk1R4FKGLQ8My5aZsRgSeD7WKew94NSgWnFt3FTno22YAP1xpc",
  "key25": "3QSDeDGXtQ1d4GV2ZrnGwNkth4rHeCZf21WqAMYWkn4HULdZVVF7MsTTnBuw7W5XVxN98o84qxbCkBxLEPn2Q7SJ",
  "key26": "3Cg8ejQWvyLhoKSKzLKLzPoouj4HneJJCT5kFxufyxC2SanrYFaVH7nX7PLcNyYToPPMcex1nMGSjaZ96Ho1CTZ5",
  "key27": "39NTkvdSHEN22uGFv6xocX6f3NFPzmvXzN23zhsXEQ9nwVH9tJqGNkLs6pM9ARmH8zkauByqcERtQEiZAcfeqmMs",
  "key28": "4zaUJbvX56LPvuZqydzNtWkXXgUp26fyNY1i8nRMRCiVqLX68rFcieF1WSvDu7AKhS1wpBxGPTwgw4XQMy9S2QeX",
  "key29": "4AhMRABnWCQ7Q4ykf484UVEysVN9H9sZMt6QbDnxPVzLHJNAXqMENzbcwfQZocE4VWMpbHDf4zjft8GDxRezE5jh",
  "key30": "2eyoBjUcqCq9UHfiErYffCbxG67oJQWozvivGwFPiAW5AxZt2atwknuFuHqNNL49KfVVrcVHxA4CmMafgGEDLr1",
  "key31": "4dKgVApXxn4k6MpZozcPEdGWaNxrTBVJbTZkSneyfxRrPGKRPdQg8iHiKpZ3w317SXzLC8gmpQiqUsy2Ery8mAyy",
  "key32": "2fB4CsGxvyE5KQaRBebiaB1Bz3MfvbjRmkzDPAQf6ne5GGzaP1YUiPoSfiK4Y9eFTWZ9JHst4y4AYmZDv9mtzTMX",
  "key33": "TntbvnverLWXNkKkuqnX5kaZMTfbJ2DXWSG9FoMj2Xz14dDWVyzimD2ddfygFQMDd4XrHYpoxrGFN1q6wvF7k37",
  "key34": "5muADHmgiWaaQrP9iKEf2qaE8fnr7upeQy89xqvWqeauBh36Y7d2o49SEkRCUKQKAuYvGU2hS17UtC7EdP84UYyn",
  "key35": "2wtTZqxqQdMuyc8dExsqkxaLPvx4dk4rdQ2G2mNiec9x1CGXxiLwnHndRCZceQFDCHST6u6W45Es3dxm1SDQnReU"
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
