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
    "4o1bJuuwpVL26ZNeGZQJbSuHbZTJPRMTTk6JFRFyp7Auohw8yFsprr8YKYb5hdALPPbQriZMG2SSpF9QmrskLofr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQZzvaFshTR8kKaJxEDqJGLiWvqN2HwkV19d5H6XqQtJWSZQ6W3Gq9sFjDaSV9oNoXfGBjdoqjTYjBydA2mjbeT",
  "key1": "Vt3CkZYotPiz8QAVgJGnFPub3VFbvxnojYj6PqZEzbf4LhVwLQVxs2jFAHP3ejtpbCpm3P8FpqXi3dxmhoP4V7f",
  "key2": "2AeWz9Ea6v1yaUhrMNhjGoNRQqN2RrwNNTCqKsy51uHXnyED8i62hmnx1P7h5EvSNbhutuXLn462fv5QeW2VM1NY",
  "key3": "dnafn3qVhewTDfXFz1G3poXkkaNEu7bkfWV5cJCBjLnYqJPL8xHAppZhg3hVXCwgqZrjsAe1kHjXckVdtFYtogP",
  "key4": "2G5vLvscRhpZAejATNXRpACzgcomu74CGYqtXcXR5Yt7C7QqH8rxLHCHafj99CBacVv1XDPseKaDFjenmbdJTXCh",
  "key5": "5K6uFrDJkz8sacm3iAsxKHstPNXXDP93cnvhTUKcDqfh8GmMCZtvZLcaBmBU8KnhptGXtxzFJk9DkYr6GkQzxe3h",
  "key6": "3yrNwWc81BhZKUrna86bHQSoWBuPHr9YrdrN2WsxWwcBesMAHxFgRLKmA3xpBFU59ZzdmvBUCLHrxdUy4AVR2vc4",
  "key7": "3jQLMfjUz5rxoP5tV3LG7je7AHWT8vQXSb5LowwVU6be6e7ZV4wLrjhYmjachQBrM5xGRoebYhfxzNC9LdFHtFFm",
  "key8": "2STRKswuqbN9nQkaVafNxKenEcgksmLMaFA7wjj7QjvGcZ4hduXfzyHvz2dxTGRRJQ4o4aBGa39tuRrcSi2oq8Pa",
  "key9": "3fNDPcxgqUUSaAduZ3579iHKrxqFAW4uXK7kefbFYtYMuAjwWvBzJa5FBDYKabN93NY88kZesu58aBrnb4BURgza",
  "key10": "4NsZo1YLVMX2m7kGUEP1XdiVK9ERKGW56LzxV8G8PjTz5ZpjwJf28wxXub2itxptN4B72oxaneLnZumreCkAmJY",
  "key11": "3HwFBmsGA125tR3xXp9znZcSoNZEebPyFz8zVPWTQ8rRHwAYmvS8yt7KiLA8LPEQGHGrW5ivfQbdsdvQB6rby3AR",
  "key12": "62BWoqFZvScEvr4qRfgjbFRsbyoQmUmGhmNgd9vZiG6ejydadaMy56HgeUiJCWT9fQcg7Q1B8MsanQ1GnpJUpRtB",
  "key13": "3LjAw2pGTpD197WLk7LdU8FkAjkrujP69yTH5HAWUp3FwNMa5skUuCLimjVfbwT6VaxgDGvwBthSMdH4b1HoFP3i",
  "key14": "4XFLadNjwfYmRomPygMK2aMLhk1qZY3tWotXJiXFqPUA9wrcxMKp1Ns4mD3iqk83KBYN3m5uQpPoNnXFntTAocTV",
  "key15": "38FrrcXaEzyXiyvDVKcBVaztNpw2VUQcH7Rk3P7vuLp1Hc6sfPEC5yxuPSpahhdJN9J1hRVZ4bvEsnj1HnzKyFgk",
  "key16": "2PTbhc6uMKxwqE2mp8kudaQzqHHpwL8ToiREs6AdEvRHr115qtZiNE82Rj6FdKyrnREYxUgwpqxovu8ZprsDqgvq",
  "key17": "5TdgAPj7zaFeexNg6pAiq2SWaEmHk4KkTXG68fopjPW1eHzwuVSMmtCsFQS5Sxe8Sa4JNQwEJRcnx5TEGXY3HxCY",
  "key18": "4azAdh4kUYqq1CsuVaYYHZzCw4GqCdCpVAYWWV3Xa2nkmm6ryKHyQqP9Ut6goGkTTYwZZCSnwxLZNtX9cMntG5w5",
  "key19": "3qqDmXCSSWvxtt8T3xhyRyMqndkDPmsxFkcsnsujZjppkfS2nYfvX5CMyWZNHtAiaoyeArCkaKFP8fffHgBWYvos",
  "key20": "JBiV966WPWZheQSvQb6Se2HhnzfpMLXkYk4CphFsLBthcJHjppaN59QNJrGt4sEhhw53j2hxSYR9x1czPRz1ZPY",
  "key21": "438enbcmtFNUyRawmoEdsJR7RhNn42w2dHZKnf3bET2Cmt9UrU7Lu7BEVzURmWickqUupqeEqUKSLLFpsuT5x4Pr",
  "key22": "4L5buLZiPU8HZ1bWu4JW4aERCmnDGqosGo7BB3ru3YiqksY5BiJSdoMpHrtryNVSt7FXu7pmP4k5ZgQcNjZ8gqU7",
  "key23": "3rvv36A6EV2mvPiAc3x2eJFUuJ5njbJ8bXp2n8eLgqKUgouohevjUTsZnA2NU5VbgPAJiaBtAKD8PcR4kTAUFVLE",
  "key24": "4Y54KecMXuVumeZnKScheC95cNXsF929NyomzEvd2ZMdPp4PVAK6HgUMP5bebiRLECGvkXNkQWJqMFrqb435d9Cq",
  "key25": "62iiMtkTfGVq4dEun8qzaXsHbo691iwMizFa6xy4zSvMDfjnvzVDbqDYV2Ha8kPyTjxXj4Q5RK48hDZNtg1JEZ3T",
  "key26": "3ip9jA8LEdFUNHefiRVeWfi6VEJu7tMgcbRh7ZSb4zmBSoBzfD2EiwSoiDjZu1G3uAKpEiYHYYJMdZRSx7BfdDdy",
  "key27": "2SYzofwzm8cf6WzhA953ayhAnVVVH3WXHNN4BBxmwzVAcNnqqr8CJQtobNgMYKbaqvWgeRghXJ5izWSb42C25QGm",
  "key28": "4jALSBfoWcSC6Qj7M9bRgECDesYTJgsHpZUrjbpH93jBTghtkwE37SomAYiXEVKS3YdiSP7hfbKJkuuUWd2CkN4L",
  "key29": "24WsUzHhZkcHxzEwq3TwSGPagAh5pHFdPYaV4vYm326TE2Cjg64tcMyDXJ9PZprDKnruBVQQwXf2CnVvWyqBb4E6",
  "key30": "43VN3ShZV7YmxWA13dDqaJTCZ33LVpJMw8Jw13qYAG7Bd8rFPPkbf66SzQqyP3EQe5b4wER8Wv4xDLY1v8AVDbeN",
  "key31": "4UE8v5kuBQ4er2ueZwKoQ8m6YBEgkVrD9VdRtXHJFS8gygqow2pEvEA7aUcRUAirFdPoYdzNkXomiY2qcmMwGsjx",
  "key32": "2877tvL1AF1WX9Ckb4PEQQeoo5xRYoCmE8rHtm9pBiY5tU4qQ8YELRLxr6jumr9uf6KMjvxB2AHXcEmxrXTbkXxo",
  "key33": "2mjK6Dg5cuQqyvn1dd1kykX66hDgNTR3vRskt1xeKgjZdPrcUnpgKRZhQJLVFnq8oANmJHZ7ssG42DerxYvaNmNN",
  "key34": "5oqSNjdS9SucV2dFphodZfk3nvGkFCEcKACcPXxGMYh1uka8gVWds899CJSyUZqNs2qnkXdJpBnzh3wZ2wYaRQvm"
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
