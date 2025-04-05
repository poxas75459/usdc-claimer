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
    "4garvDSJFUCkhqAJ4DCzV78KHPy57GyRN73H9Jh52jB7QA9YC2a3nXogU77baxbyaYfjmhFZY72SnLEzx1ZMTZSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478c9MqKfJkQJZeSK6w6EfgzyKZAgc66JUiW9aDicV3MEjUEdG3uhkcNXPT9M6xKCcTNorxvNjJTBJPWTnTMHx9Q",
  "key1": "61JYdPJqJ7x6BqmNpmQwupa5y2stsuYSkjPemiJboNsFPKoYcRBPHGcavVvwJkTHXAFwMbfUMd7SdwPevMfwzvUN",
  "key2": "4UTju6BVpMtPLws8kWEGpHmf5m4VSXk3q8BHN9mksd8oRMvNpT2ovaax2Z9CPnQTuy1YMm1bRcdfm4aeuFdAVyCq",
  "key3": "5sGyur82cNktcDnKWuvyxYzvmSGSQFvauYanKfHetCAqZNNyhZ4CbRvuaPCsW9k34xt5YMyno8HjKjmTxT575yw6",
  "key4": "3U1oNAtpwqegMk9wK6wAh8kkiZqtkB42wzZW8XJkkAqDp1KsS4ViDKUrWE7ZdRL5Xdz7c6MxDteKpYkriw3SUC9h",
  "key5": "5Q7ZqKrs1yxj1BqdPKZrn4t72u2sWiUnLSk6AJaqxMASbXdMLWvmBjrJPpUDXKZB39BawWxjtPH5bN45RoRbtSwn",
  "key6": "gVyvvw22WBs52vjgYwDTzfbjhnXMTt6jr5RqDg9cVHpAEjr2BazxA7WnQeKMMoM9GBbev3HcE6XKkExYWVJGzEa",
  "key7": "5Z2fjGSFfEtEbceaS47PmjSuxxQuk4rjNtFo2JBCcpG7B3Kyopm2tjQj4J8R4vxXP73yMSDmNbnXGSTPc9yFXwZS",
  "key8": "3fe4rZ8R8a5HSDRG4RQ4LWMwQD5mpohW17xRZdSqwTKcX2fpRA8qHRgqGUduFdJ1gnBV4fBrb89PULhHa4psJ4eS",
  "key9": "2CL82t51AJaMkyc1dYacoki2UasWjSz51TtiWPp3cn7HGxac8SyAUvMZVHB9rvGZe1uKbnpXkJfirZ5bB1fy7vhi",
  "key10": "31yFBjntzd4nbpswmeNyxBWEBvqCPnnEBg97jAULgA1QFKCHr2u7W9yN25DPha33GFLW1Fg4RgoTMBVbAQsqTbxj",
  "key11": "YBtjGi4ygybrW6JNYgwSAmYjuPzSVCk21EsG3XbZmYKMEB8fPTEJGvBC6pxsZpUWbrMccHkEpjZfmycAws2ZjH9",
  "key12": "T1HRVoKi6CwFEVQzjH5kWTns24Q1PEUgT4kssHt1buMXjxj8ZDUb6oTexh8iA5Y164YSyPb8RfyeL1j3BC7Q6sZ",
  "key13": "2x9mYsKVRqcauaR2PtAkpgSqThq1MMLKjUXa9SDBrdkb2kr3QKGTEzFJLoWqY79PjmuhMtE9hD9kh1JPhTwrGmdv",
  "key14": "3FYrXLD81Py6nS7VfsunScVrxKHhQFhCJ55evgzPCj66waWktFsqTqzjv11cZoSCxtXezSypMtuhfGdX9uXtvhEv",
  "key15": "4JdpZc4QsBYdgwc3z38eEx27zh4dYrpfgcdvPPXP2gzdG1cgFYMxSojHnoJJ3k38UqQEyNSWNCfkz5dasbwxxtBw",
  "key16": "2GuQ4nEeG7E7Z5SF69Lb31bBXmWiXRs5ZS5brLLr6X8N9TzninHH4eSxrHCA5iewoDcFapbWvXct39Qmc6UEroV",
  "key17": "5h3J3WoUQKwyUJd1xdmtcMganeHAejL28aaMuvtfsuGLjkeFZUsHyzD23sM5cuQJ5Lxn8yckRYjUxv31WzF9qpWp",
  "key18": "5mnjtwei2mMDCHavBn74McrBBj3S4XD5P6Wi2PbJMJGPwHf6dtgZePxSqT2xEED7pPCLGmBFKNChtDZBnNAPrDvH",
  "key19": "26vf8hdW7TfPNrKPZnhsDYz3BHc8GUWsf3wsqPCWUwaFh7uRNWoobbRCb72L45vm4AjpNaDZ8LADPUtnphsdvMeY",
  "key20": "3vmh5HdwXxQf9Go4UmD1fZJ1UuS5V5TKVfv2VUN3mFiB3tnepCF2qf1gV6tx4hvEhsUCqGPgKY6E9Ba7S58RLTcP",
  "key21": "4JMx6pBHi9EqyeY2eyWvkgUkdAfdFYTEkRrcQVbMqmDLGbxZDaRwhdZmgKB2gbrEACFWfzzFhrBEFQGK9PCnVYjq",
  "key22": "4SiDKsAAF9G47PMajcksVq31JMtZNBQLh3yvkFTUQxb96W8LGJWZTt2eAWUdFiakqz784Tea9ERAXC2hTkXGXNso",
  "key23": "5pDVu9AvuRLQ6w4b4MXog6Vad3CjTJfYb9TpfkKMHBWjY1v6NP32zCd9tZkWuq5GmzB92M9sQG347H1EPPJzz4uA",
  "key24": "2RyRhAF7PVGkDp98sH8iTrTZUxJ9J4E3D8yRG18u66KSUbifkBG2egXtkXaY36GV83pD3iq99TUrgVULKg1LhS2h",
  "key25": "5H1JWT8BKipmSw5UQia8ayLzp9xwWmAUGyJtxoDddysEy9rLMstJoB3Tc66rCHWMDQ6z13c8u9SnW6gs4TCyZjuX",
  "key26": "45fFLyA7vfb3iRe7FeW9snCDpKaMnQw3RztdChLrqMvtc45RQH3gzjYYq64jkLJQb2eBCk49pHM1c33J33VnPXbe",
  "key27": "4NPfhm9b8kjuuwM7834Cvk11MmfsPixY6rW69yrn7pA4UPpLJ6FJTf2kPicZJArZuzcaSHGUa1Usau1yop5eUhkq",
  "key28": "43eC4WbSJz2AdmwSuif1A1Ro88JLbdQm4F728tQEshFNMEG9ZjXWd7F5Lxsvi1cwwYDeqFxJbQ5d86hhrDigfk97",
  "key29": "5QCCqiTJiRrLGmLBBXM4G2AJKkAxDmBk5r7JvNZVmg4KjA6m9N2RsGdqhphjPqD3khN9nEog17LgUXR1RTzvrxKa",
  "key30": "2MvRToXjVuvscQCXzUoeAeRnGcX5YPypcePFWHZMzFkNTmoe5KDnoXdJt1fXViBFYx5ineJedQUt53s54qvV5Dqm",
  "key31": "4Gc9BXrtFjmV9CeoJUyoHKTJZH3NFaGE6nr2ijoK63xKWNeNevXEH8opFHNtZ6ge36C7yH2TtQZV3LQ5c2E4W4LN",
  "key32": "v656rcDczNmhhLWZMxPTBUDjviBUHsUMVFXvSD4CUWpevQA52AQw9Npd6qDbLuGwxiptq678CAWDcg98ni7QTp9",
  "key33": "3fvQi4vLZ4bcW76V3PCV4D2rW3YXZBW1qgPmenGb2vjKnXZ4PTFjSTzFReMs2FL8HZ33q5E3vwLinuyBWfPU9724",
  "key34": "2LKZHVRLjmx38Nt6WprKZk84DZQE648gTPzVmzQnEmawffK2twXduLFLaBRVYk2J5KcaiuEkGafTfJTDeCuMJ6i4",
  "key35": "4QNetK2pfLLwN3GCokSWqzk3JqMm6k5KJjzMenjymT9Ci9NgGQe29dZfQ5XGdQBXMj4muFdHs2LpvDXLNMqguYj9",
  "key36": "3oRws7aoQcEEuruYHrtQtVeSq32iHE3FBicEVeACHCJ69oLrXatA1pNQDj346tMZ2BtWu93KmptHRdNumDn7NKdd",
  "key37": "2PwTreY35bHhXJkC2kczuNJytxsoNmsrwhayYpb8cdt1RiFhimvRwDCbg7jTQP3GnfHL7Ly6vNjQw2afaKWqSdWN",
  "key38": "5VAa9X2L6g1Nj8Cy2gUPc9MYMZMgowYpabZphp8qTQTbNUC4URt4N1rgz8LjoStyXNwBKUMutd6TugGFKSrwiVhx",
  "key39": "4ZPQEaBUTwVfNmbGLXJjB6egzsoFBpXLY2hBbJ8rEcaavCYJ8FGaZ7E4f93TWRKyhj3GP8dD4wWkzdEUxdtVXjzW",
  "key40": "4jKpV6CKzkZejZ2ergRPLtPxX8x23JUu2q5J3TtWRr7G57aM8NSMMD2PJcD3J6Kt3fN5CZuQe334qBiBwdQF612p",
  "key41": "4mLAKgSrGoxgt9zcru72DE7fAG3hZChKaELynhnSJ2XAhxaW5FWZKd1knSVFNa9HTXag41x8uacWQFzmKG1JXYNL",
  "key42": "pRsjqqCNLvzz3stM3GBXWqwPNmmtNKiP6UFtsjY753GekEw58DBXb3JTHzzqFoqLzHku2jCTvr3vM2XLqAS45gc",
  "key43": "5iT8VFzypBxUrhyj8nsJHfkjTZKghF5UFC2CMmrSB5xbVRYtuMxTmfmStxp8QHnGCFAy7bq3ywi6KBAE4hv9FGnn",
  "key44": "43U3ixfWcVKEHojPMQddFR23KvihnidbWpLaEHwt8xsYLy8fVK8QoWsDhx4tYE8kR4EfZEfy8veqxgUU38sNZnkL",
  "key45": "UMqnrnMcgyHYEVtXxP9VGCxVhrzKtM5A279mzthgDCZ7opeYtyPgwf9ieL7LXkHFZVkbRB7vighKTmKCU1tknhm"
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
