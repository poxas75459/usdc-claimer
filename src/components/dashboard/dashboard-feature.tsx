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
    "5ByDncjxSLxet5RKvQJNjHS1UmNuHRPcYrZDuBKeTQMipKdvoZ5LMU2xVid8QN8HeNw79AMnJBhBr8Da8J8zrVe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z94EyzxgkJWEoLYcydqHTYdkTcNoZhwLUSB1JkbqYFmu3PtWjrWbKVxNd4Qv7Z5TRAd8qyd6xvwcTsXduEWnGNV",
  "key1": "4VUBxNsJJQaKzUHWu1LhAA8xVFv9bpfX7Zc1mWuKLuA8pGYAgxtvqPdHNZJpnwGHKSgkeXrrTgC5rf6wsFurWPD6",
  "key2": "2QWNr97oMzhpWgS6xGXacvxLBsGtyKJJpRHxs1t3ahGAQhEjN8UaF2vSDvMLwnVEYy5bYpNnpQapKAKDSMdZTvvQ",
  "key3": "bEZyp8VmsDQ6MZyLkgHjjDX8Aq13PJEhAmCUZxJU9H3JnFG7Tu6swR5hCBkdTWtg2kUS3zEYRtkcP99rXe9ffLj",
  "key4": "4FweryjGPcxtPesUv3WoMosaKPgtrdFtfRWTuqR7zCLXChjVysChQP8LBQhVumtgm9y9b4zqW5QAwnFjKEPWbpdB",
  "key5": "2GcfTtJCm3gE2fDUGCpBfczyNbQnWHftS9dcJSdG78kBmusNL8eUN6HDRRwN8RG9sxFtV8SAX9u1zTiPBqkKQh67",
  "key6": "C6cNZ5LPETyoMtwAQekwNWRpWibi9non9Mv7v6CgXuMser9VXEckBaJRSYX9zkK8jHfdmTKUgBB1No6cb2nKzMe",
  "key7": "5ByGDYsGD9ZQrvKvxX7cRQkqUfXHy4FmuY8NtLbgTMycBcNjUQB73fUwdBXvrD2mhyJKbrfufBYofgUYvpLnaKCX",
  "key8": "5pU7he65MrcKCKSp7VYU8QoPidCsU8M3jUuBhc3oVM8j72e34qCHGNm5Xvz5AX84vd6usaKb7BwNcFneGDtTgaVL",
  "key9": "2h19erNL1KjnXLqp8PqehFz5ugxzUCgWZ9XChiJjRHgBWUM7Ghsbudqab3tDX5NPV5irPNXcBqXuNh3grzh4WYkS",
  "key10": "4oKP1M7Br4NemQSAEk16d59wPg2tDqZqnV2ZMx8X3AvHjBGeBn1ZHiRq4bBWGSJQiBHd3D2MD94dpP7jv249Z3UA",
  "key11": "4NrkXygUc4AWY595pv1dnpzUZ9p8AshL34YDr1hnPBhe2sjCA7o3yEaP5uNhS46zDGuSnVYjLdCtSemVfQ1WyiNS",
  "key12": "49jCs4d4Cmh4rRdXTvZYnfSccyRk4rbkew93XXKgSTH4yk5GvLB7vsLTXUxKNeY33ZBUJknDAsCWcsCJWq2w7DwH",
  "key13": "LZ6Pkg7herTDcFDAhs2maTYAxgPUYNxPJHNUJmsDhvhP2vVgXDAwBkuvADpcvrgesuSftvacDYCfyLnLNK3Vbbx",
  "key14": "3Z4LsHYn9YxRWTC1vZ87Q2Gfmw5tQJJT8xgpFCjJrWaCH452bGUnD3dEyHdchV1usg6RdrdWso77UYLuQu9bKzfk",
  "key15": "HeP9mNVVbDA9jV87649DPkm4DX9TxKn12BhQ42vPoqD6JJUdLM6fbCVa1xBmxG2FgdUWUa2ryFtnBHrUNrYTZwT",
  "key16": "24A6JwmecRxzPTngaacj3eNy7AcB321a2E68S1GnTviGZUSc3v9RzQBi747zxQfdi6n83bdsBFn9WZSjp7rE1Ntt",
  "key17": "5tkWyzzVtWze8cN8YQq2jLrNNjXHjE14kPbBGrmQZ83SE9kqWYjkNMw8mUSQ65gJshpJRpSpaKdUz7dAtaPP2BoN",
  "key18": "5ummMxNejZFQ32nPkZnG93biGz73VnGozB1U8okQtxAtQJKN1Shxzf1Zwpj82bqXHJp6dJzt8zqRDmGb1PXv4TXL",
  "key19": "2PXMhXmFJTjabersHt65tF9hzdxru8Z6TG9wW17m2sujw9tQyKtfQovGtTJdrKQY9wdW1tQ8JKcRGcNbiWYxGP7j",
  "key20": "2fptyeE4ffqR6Dq8j5xYJYXBUNMYkHVRhDDXW5UveUu2hPEeefVHjPcz7Wt7TUk3qhMR85wVkyVN2ctjGJSL3gTF",
  "key21": "3RgoyZchnGLzm36KrVgyrRHnsXv191H8vXjeKzepg5H9Udq5a3oLmreN7eBdommthSMhUB6K1bT9FDVk3SJsJsjo",
  "key22": "3tiNd6ypLn7XrYZ7KUXRMAikpvVpdWRR7zM1pQczTHhuEW9wuLJ7DFje3aEabby2qdzBs97jbhvifiWmVbfC4ajG",
  "key23": "3hL9JtFdH3n7T9LHBRtyRg732q4ZuWxMV7jTxT96SZArk9PvtGp9YQQ66SbNN1kPSNgPZDM3Rn68fcYk9B1ub5Rb",
  "key24": "23WT8vzSuDipXbmTSJS9UQzACbDU7TkTDoRviMbnJ8kBtnQXnvw5jeMGGJ5QLoYnSyX8NcJCgJBrRiG1Z1ZHmZeb",
  "key25": "63szT1uycYmHiEB9oGpRse1u5VfHCt34MjrwC6KSmb4N6xqZXPR9CGoZbexUE1auciHUs6nuekYACa2ruCJx6k5F",
  "key26": "4qyWG6bWdkRAgxDndbyXmu77moLHBHJmkTqEBMWJ9ScN7X1ryfGXomVQEgDWHJZnNprsL4tXMrKiFEJohVTq4XNs",
  "key27": "2t3WHDVwP1S5Npf7ab8YYecdyTJk7bVRddgv42Bc6sAdyXcoe88chMdgBJoHkQSnXd7HX8666D3KmM83QprfZH7t",
  "key28": "41VizGKaLkfrsb1WdkAnr9VkTyYbRFzXdeQxpzzY5eWQNzfeH9z9KC92bof7U1mN7uHdu9WB7HMYrFiTK6hsmmfw",
  "key29": "24nfRaD14d1PWDsf8bhkACfZijwyzk4khG8MBB7W4UsGrJmi35WzGw8wzjECGUNntzzC9ZEUwW39PqWbd4jmj9Ku",
  "key30": "67jeGeZLhYSVCdwpqWV1kNLxrNrokBNdo7mxi9KY4YH7pKtRK2wZNNQveTL5wAb2FsfphytibixLbzfFojbX6oUa",
  "key31": "rbTegqtaoikC9PT41pzf4FirnQqk7NyULZa8uzt61SbWdpsFoh4nV6ZAvgvtiBPiFbKkDV8GDNwA9byXnYntHvt",
  "key32": "3a8DKJBKrfmVGNgsYPBVts5fM24ajgeCxXvqDnkSMZbcERtzqefL485DB5Lc91viUiGjMffTSimhJ79yK6LrEtF8",
  "key33": "3qkrgrizxqTwrwoxwUMoh5zQuB5s7tevkTCvrS5yYVECt5RKuCWWPJUZQAtV2B3np1TXvPcJx6RQZLQPhyxtoSeo",
  "key34": "5GHbM9za9uaHdDvmyKoUPGXC8Aa4rJ68rAbHv8KLbSteMJG8nfPRLHyRETLAc4DLMJuNz4EkWzquB1w85LQ5JWfE",
  "key35": "95E3bmsJG2gWC1DNuJocUZcgpWPFCVLomWfQaw1ZdFYmTUJnDCWqD5ydq757s6MgyWDnuVCKPcLynLzxFkQsvd2",
  "key36": "45VoicxnCJMRk4wtt3YsW59mNZn6BDTTMsQVs7aj51xE1ZTSKcU8fK882ZJDG9DfxuoiyBLUWuaMnVbcVp7yj9wK",
  "key37": "55Y3Ba8wmG8qNGcBnCfxaY2H4Jc2epuzzbwmQ4HZWXH6yo6U7i1Hvfe45v4fa9LXTMoZyC66o3Vf7ztxXJyV3kFo",
  "key38": "2JDNv5SdiNexKFC9y6wJyb46q2xnijB4SoU9Nan9gz887cjpecbx92Cpap4MTpJuLP116d4jdwJ6332KNhDz23CJ",
  "key39": "4QWnxkLpAYwQXcpeDUzwWaN5HrKDcpu4ztwivDM1LLjyAEcN5Fb5FJntKmHMxZkEPRaLxEY5MycR4GZ3YgkedHH8",
  "key40": "PxbjuKVJspykcAqL6uepjtA7FWRezLynCLosxar6mFypYWZNUJDJS2DqKFQwvbttMS8hrPEX9q2P6dZLQFGEi5Q",
  "key41": "8ShHFEfdR7XMGXncc9c8ohRd8bLuwi1ybqadVmDfVVLtZVyemC9MqbSysQZqmVdPcgVxh9UALZ6nSr12TwZym4z",
  "key42": "2v1RquwEaSiK79F9rjZGnYE7XvUGZCBpxU6i4WUGTqMtPbZMmYjtLdAtAW1mHwCEg4D6SFZMSBBMnmvaDHvcs1BU",
  "key43": "3KdchnoaPXcHw96qNXr3zYiTXzJUutDu1E5gzmR9wyN1rda9F3vmns5NhP6bbJdiZDjGbTu3goscKYEij8oSUuC2",
  "key44": "uJ5AMCDWUMAZndqe78pgdG1J5sE9qUFxvfQH1j9gAqNPQwXXWF2HwiCLxx74Rppc6sZ9vMkhVDFVpBwZ1cdhejA",
  "key45": "3hdGyc63ghhsgTE6vJyys1BA81gddpkDq2EaDbKLVBQAqEaB28babh5yVt2A9HRFey6KpMWDAyEYQGF3LPuG5wji",
  "key46": "7u93TneUt4ZpoYJS7jUnAu6XxdfrRotCqFSg39WigDi1DZn2DXJrBCov1FSoVUZjHqhKU6DsikzMPMipnpHrooQ"
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
