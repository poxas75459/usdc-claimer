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
    "3E6ZLnUAKMXYuqCQgVDh6mc6D3t3CTNP179HoXpwTwZ5W9wfaCM9BQAje7tQH12tJgPMyXnkcLJvf9NVX54YeFPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gr9U2GPcpr9jv9pEG3LKcuTQKo6YQ7gT7D1Yn6WikSiLTSGpLVXyVigF7CbVc2GWVsbp7WBT91qyXFYCgnvPsY8",
  "key1": "21kPWvf26K8pWuN5yQLgWPBxcT3aWXh6VwjwKcq2sDMEWZ5eRjk1PHZJzsNwthrGQKHP6M7gWRbu22PfBPE7ox7U",
  "key2": "4brtShDSxLzsKsKZFcQ2RjHUnz6URWM87LHiuXKFP85Q6RbubZYBsGzwwxsiiwF3qiUuyCdiWqVYbAdC5NDv1Yyc",
  "key3": "isuZc6MweQdjioWaMRyBprzpQhArXvDatp2LZ1zGarQwLBGp2HiseKs9Uhhy4PTQmFtFppiwYuNFx8UnLjTCtyU",
  "key4": "3MUCdPec5PxwKCNb9cqjeQkgjL5qjaX95thXK2FMvbKdWt5ULzerV2s5oyj76v7fSCbMQEeAujBeirNpXnUgFwmN",
  "key5": "3APzANmBfk5uw3iGY3C2VXen8RQ5sPa1yK27Tk14DLJfMRJshSFL4jeiWkH9BsDsyDJTApMcn8nCBCWZM1RV5exT",
  "key6": "3oskpciewjoq1Az1TeEg4PZziSermwrWXrqZtV9HqYzme443EdMNy9KWpZFtKUx2LZsYa1CTBEggDhdfQKLHU5E2",
  "key7": "49UyDoi6hyx8xXfzF4kF3h2XCf3ZZ74e1tVqYCnfWg4FXMh6u2umzBoEUi6zsbvmkPFqKzDAa2Uf3DTa6TbakSJb",
  "key8": "2RH6GchcUx2wUHU3MHSLLbRXM98nftTo2GKhkrLSZH8CnvxK5Emn6xWgUSjUNXcSK8Vgt8soJEArwz2HGzwNQBaH",
  "key9": "56maHKLDKXZL8j4bujWN8MwtCbavkpsjvXcpt3RhdVufsn49PauvyAqGQgSt7DdPyM3PR1mzgr6EexyukaLywRs8",
  "key10": "59x5LcoEieTmeYsNK8z3n3XGE2oxuZTmbhLV2yfTYnAkSPdJK5q7sKkZ6PMaSsot9B1w7jjPTRTChFfK13LAfp6y",
  "key11": "3wEgwCa8tMh6KhqxC8obHtH3jTvgBkDitHQshNQmSyBoGdmkGthWfGGh23n7NvzQwj3vmeTwFqq5u7PrFvzkqJKa",
  "key12": "3ameZ9gFYV5D5PWqMfsoa8CpZDo8RJUgQGhXVMAbsoEHZTbVugvBHkWPSxNs91tLQ4RAYjWzimmafeWKAW2JTq39",
  "key13": "36Zb9BPAi3UtRXTY7poediCnm5gsnaQ5ZEKZCMKiDTTDwuF6RvjZbZ2R1Lsq7ik8D9mQikFhzfTS1JgMrqaoK44H",
  "key14": "2aGuShmVq1WyzFg6pJnQHdHfKgnx9TkkJeiVJBQdrnoPpfF73v2FFB1PTBfVYaN77onctipsXbePydyJmB3icBX9",
  "key15": "5LWr99WH7wT2BDMHZGvt3fZAxfCnhxiCHvzbNkd6r3ZuUYuaXUP9iWjA1xNCAWDvUnVrfe2UwsvfXpe9rfspScqZ",
  "key16": "WdygfGZ5zC41a5HDu7BNC7VjxRjRj1SFUTMHpMGtCahqcEbHDKKDbcFbxYDs3gEJMS4qgrevdR7w1Nyvk5ShPXK",
  "key17": "4sEnyczf2Jie2VVJVcAnUkhcp9xQbyxFyjjezjixdYJBTHSordXB2FYuHYAd5XCGJtnhcRF4RE9b2SWDRVDJ679G",
  "key18": "HqHhLbwguGFMHbdAw5LT1jFfMGxY3JYkZqjggxmhKfTBfNuXCxP6Jca7Q9S5MPvq7f2zrJrJnUEcG7vvdyt1TPR",
  "key19": "32Dtz2TCT9eJ1NQ8RiHbeCAFo8GhSyjJJ4gVNumUfs5NvhskhsEDEZNEUcNc63EUC6EpxzyvQKrf8vZfir3AYyVn",
  "key20": "MzWJwj8zE8jRBG3ocaEhVCRLFtJLGNUmS6zoeJwxk2aSqtqEGbhUVUzoRnYRUjohxqJZSjdpEj749m7X1Sd34on",
  "key21": "5uXEScfRLNzvF69dAhmGt8Y88vNM27y5d4qgBL2WNKcbEjHWZ94LQY6FvJ8XSjGaYoEAZAf1x5sWP1D5JTtnDzRQ",
  "key22": "2FmV6kvAXGjpXxqrtniVC7ThwAvdmWHEs4H7f5x2jjoU7bogCqjATp8msTtj4nDCaBvXD5pYwjYK9Bf758p7qz5T",
  "key23": "ynd1gD1SihCP519vXnbBFXKu2nj7RHGRUo4J1NyzVaBtFrgKvZWs6vGbcZ3yEF5y6mxu5LQyrv8vqK5q1EYbgGj",
  "key24": "7VkXRZnGYyAazdTWp5mJ6c6uPePnKLVLg1houEWnvHovqTqjA7LTFJk2uUBjw9ymPNCxQHJFkwA9UYAWvCkN7JY",
  "key25": "5qyPvxKXLSrFaa6WWYTLYSzvJjyWEbph9FwkYhkW8XzmMu6xNV1f76JrYxDxdpmtus3gpdv33Gj2tptfcRQQPVZB",
  "key26": "3aUuAKwctfbAjnvRD7wyGTgVE3LhtyToRUUcwgCTCuu6EcwvbNvtVwtx5TjM2GGVXp7hqyhj8DSKTDMKnnP8MfGN",
  "key27": "2GU9z1b4hXDFAL64zYkAW5kHzD863pJhtGVhDG9w7SyGR6ZFXRaQaZ4xkMV7R8xBgcSNEiqUWbp7Q8SFXHbmK2AS",
  "key28": "45QfucpKoKvkXrthFr31DiX78re2erbetDkSHRejatEnwfzFVkhDhQ8S24Swn4GiKkzNKh51zH57fA5y4uRCKqqE",
  "key29": "Ebe9Xqe9JKbG4fWibvNxeeSkTKKnynEB7EYWvPmaUF8944B64StA5GuLxuyLr6zdKcpc6qhTLCjaBBc3bZ1DqJr",
  "key30": "3W4JZ9wz4FiFpuncgtRwqpm73b2gicXSEwWSt6n761ydu4VCw16JMzEN7PXTcX1pF6kBMJeyrEDaZKxHzDWpfZv8",
  "key31": "wFUpnK18zaZHviQ6rqjP7nyuJPcHhQRishHeVGjntyi2xs6n3ddj2gsZHfRQGJDBdnRYAk86wy66Di7pfQBRWxx",
  "key32": "59YhiA2tGD2sxPqgeGn53GvMbMePEMCNGxmFQZMkbPBjzicBAzjHszF95w4BKWzjyjdTPvQXjWo1BcR2rPDKet7U",
  "key33": "3rTTgqABEPujYf5vgbwR8f5ws3Db5ZLWZCGUbpTJfrkoLvswEH78YEnFoLd6Dkz43hsA5ZykvaNkPArsTHuVre5p",
  "key34": "3Ks8ib5625v3NpWYTr6Mq2cznSvDJS5baAQjeunGCEEWE9MBzcZoJf652b98s3vDGQV3rBK48Dn6iPfQ72a6hfRx",
  "key35": "2MXqitfNBFgGpMtE4kcNQP9t6MpNrdd4P3gnGKEQyK9vwX8oeHHifYfEwb2A25HmRbtu6YZpEvf344WdD5FMeMUi"
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
