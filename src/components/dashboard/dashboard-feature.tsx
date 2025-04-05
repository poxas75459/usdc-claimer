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
    "2uyA2HynJrTdrDB8L2d5k6QQmuqid8QJp36F9vEXEx12gPTXuKAiDyE7o18W2smSzEkHyVMaKTq2fqSUKTArKJvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wYjHFsQuiFENtus95LDpNP2zfqd8Ktc3r8mmyF32iQvp7zXxD6NFVgL5gzhYWnEZ5QkYWi3SjACe2dggmV6NMZe",
  "key1": "YNPbtbuSvu6fQCvFCmVceqA4vngXQ4f1znSkz3b5aUHZrGAK18Rv2TrShURgkBkK7QFKysZp1cNYCJnX8h6KMAN",
  "key2": "4cHGoipQaGa9JiFX955WFi2KbqEZkmUCFLEh8jeycnhERi7RxGXxLGBoTU7DVqnsNTCf741kbr1u9cB9wuzDnEDw",
  "key3": "3X6KLzRy2c7Djc2ZYaHFLCFbt5FiK9Ukyumv61G8HRz7ghVFrBBBYS1xuonn5NBBfrjXuL97pgwQ5pcB6fMvTKQF",
  "key4": "2JtCZJhn5hnowxN1BaPyaQ61SkZHq82rsrfT3Bf89gcCu8zC2mJbQ9ygeeps5b6aniBYWuGRXcFNsV2N1a5ND6ZA",
  "key5": "3fnVwDDCFKj1gf5QXwmC11E1FJmq1Bv7acc52E8k5exn2JJyrH7PGPie9BdnYFCzJFbxhEyCEFGeWTE7RvStozi1",
  "key6": "5G96frjckFZusoKbLXiafGusfkgdMxhiZq5d6yqdFw88Hg3k1dMtJeVK43tFQJoZs2sXPCQc9t6XRoDiehTZXqUs",
  "key7": "3xGLuBZmcx3XVMaor1E1jUSUK7bFzZii9oFWpUbGCcBWWV3TT7tpNMYkfNhPjXrCfndsa9gTs3tH6prT9RbYQ2ci",
  "key8": "4UdWXVeCk7z2MWRJ4wWG3ozmaFZL3JzmhaJBemrpzwF4WNXzA1MbsN79ud8aej9VYX1mYeWM1jaqGUr9NxbFW4YU",
  "key9": "2Rm6YGUtmDWs1PDkmMzYZNTcLAENHj7Y374gmcVzFCEsgX97t1RWQCyNbpHqgTWPPjMgKqLNsaUcxwQgAwxP5Nvq",
  "key10": "4gwBTWvVUMeTo1zTE84SJRCjG4PKm5GirNQLcWQSvBCdJUgL9m98hTH56X2JGLegwpCELXnmA6Bvzav2rq9RpNVW",
  "key11": "4HeX1JgQpHL62ZpGWDsfwvs3kex9Qb6mGd6XjGpz4pNNDqZSVqQo86C3wqGh3fFYvNXTst9Rkm2iVp2MFggYD6AK",
  "key12": "kb91j1wewgzvDPjjn1xJv1sPBURKpTgYA575TVHw15LARWnKaErH7vfMSZbj6qKsGFSVyqBJb2FofrqVD6kcbWu",
  "key13": "42J1zdo7RJEVBnWdQo59dRxGBSJjWf9u1y9AoiA6HaZa2jfvR8rd6YVHjmYpM7HzBRLkEEDdEB2aKDSXL5scMq3z",
  "key14": "5aDsdtLFR9TawHoSJS7LbRetqdZweD9dPtN9x9VzUhboYhnPbH49tiz8SnyFhpcKAkVcc5Zt9PtACpb1AbP5HNKL",
  "key15": "5uV1eCFqsaKFzmfp12MLN7mWfzvm2B1WADwiYHZY9uBz6MPjhRNq1Q6s8Wz8kxdiu18ZRxbxeu8UfeznrZ3WuHEV",
  "key16": "fJCYWnZaUzFpPFPpY1Hfiv4hTyR147jk4J9V1LD3RFXMGboJTUnzSUUCCtPJeJGveaUaFHk5qvyaVmMWos7Ak3M",
  "key17": "4gn6W5W8TbVvJVnvf5hiU2gqgk3dx4TrctwLjSyk4GRrLU25fuGqQkVgV9G15tD1YZsxTZnJdewnM6toibCXj1Dm",
  "key18": "5ShZY7LARvGZa9JKPPmWSe7bDwa7rpgFrG3AQ4bb3BLMR4mPr4L48EuXfcy7zywdYAoofwbGpmJ5sSKMD9bJELXq",
  "key19": "kZf6ze5edGeZYY21XfKjhjxw5JgUQob8pHYLMMigMZeyJ8a1oMdJYXsMd9FkZRdd5AMnpowxNkkXWt9UUx67h4E",
  "key20": "2W693rEjEq8mYLSabQq6iM8VLFMrZNDNsMq2UvgLMDd8B5KmCvfSkMXuoyaWRto8o6qwYWw2m7QVDB5AHhzuZvjj",
  "key21": "K38cBwZDLtQEtajNAVB8xnu5jExG8cMj3pH9NF8s2UoU9XERR6udxNk9fhb7GShGCvvzcrJBYd5tuRo5jrPDgzG",
  "key22": "5MVGkFtNwwTY7CbL5wsP7iAcvLijEuKNk15Z3bnvvzCyV3uMqCJ7gmJsaKZuPGN9fYB1gKd32B1SSmTwomafPHhQ",
  "key23": "4C6sCAuHwksHjHb4SFnsCbsVev3dTVgncX3xJkozhZpn1NZmH6998MnodoBqTJWEvb2zqsFbkaGqoy9tZ7yGaqPR",
  "key24": "48dnHu1aL66zgSEbc4BjrYDnrqb5zGDjYqPCjbJpw8YCAaor12KV6B5qnf8Teu2TV6VovkdXxc2pNY7F3Qd7JHdV",
  "key25": "5HxhMaJ9qo88F38yPLHB5YskmpEHpKuAkymUNRL6Lmeth3JP3bdfXaXsUCKFrazFWrXvrS6jvrQec89KyGVfpYKr",
  "key26": "3LboyPYpw53R6PfzvRHszhQUR7hFfA38L43L5eurWpmTJaNiQoGzXmsbL3SoH5y62oYwVvnRyzxYmanBgWV1sXan",
  "key27": "5LcYG4exC6nNPqPK7WzDjRhwGF3LFrNptizfqCZf7ux8W691RfqTD6F6T6RnD7cFkiQ12Q46nsJbH3rJNu1ypbHp",
  "key28": "3DkMz4h81qTrJCsjLvRscTWyv4UcQQXrmiSvTATQo2k6WDV5XFdM7kWFGB5kGgjqfNBgkMSfcYRHrnUvo6GLbTKu",
  "key29": "25nAc8iK6WeX5MUWvFFvWWTeWcJiYtJZur1m2uEZjCz62FKUmsTH7VGR46eBYLw3QVgZmTjtsFKbM1as4sFjwYrw",
  "key30": "2oPSwtqNQ5H8Kxr2PX6HNhVsJrkMyHd1rpzieccSuSRBLbJaxtuQf7WFHGWnMa9KVvo4Am35K3osqSE7GrGDQvzC",
  "key31": "5SivaRvmwmPMYES4bVBceZhhAaroEcwzh7jbb2pp3JTP3vhVmCLVsTczDaSPF53gWAk7VBb1LuE7m9Kvo9wYLcpp",
  "key32": "5uwk9aMcyHMu6xdfwtZBJtx215LYzTbYmTqrZQJo3pYGUb8uYLeSsD4s9qrBwXaTiVi8Fs4dejYNHeRJa8pUinZ6",
  "key33": "5qP9GgvH3mNGad31MJy1U8ZivqYfmjThEZvV44r7Qzqqc8dttRFCvy6oQUSNxaQT44R9nPbBF5Cu8kRjGje9smeD"
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
