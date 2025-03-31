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
    "56To4WtsxJptEhTVdSzqEia8mhAjsXjgCtpAjn8axTTLqk778s9xsVpb35qQeaHZTECiXQsMKmTmJdYeJTMLLssa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYzE6wgeSLfh29ESyKeYHKUkvaXfTKoyVwPCJtMLPBeugJ8Drtyr4vHn1SJg4tbGd52RiCUibBfqvbraqztBv9S",
  "key1": "3F81cpYtAgnJU3yPYxHBK3Ki561t8EfWELW2QMMY3SUGv62N6kdpKApUrfMbqVhGjAEEuLofuThnnumhozbeYkTd",
  "key2": "4L1r92pr5dB62PXKfTq8H71oWNCBm8SMmDVcakpjynVK2vkGzXMixLTSYNEYtfTMPcaC8qdZySfmRWMwkLfao1Nv",
  "key3": "5WzxxvrkqKGAVtUEpFBo31dy2k8c7NF34eQPjwMjsiTf5KMCxU9XAJcqWoRrxu4UMUT3SMHLrhq9LC6d2GjAYPfx",
  "key4": "343DH3Cbck2KXpA9Pr4XTbjEQVbtRXf7bgYyz2C1oyLB2jUwoDwJjrEbtyscVvPQv4GYdHQDAMEbSimevGZsfwv6",
  "key5": "32uxZFDDY3eX2qUjFB6N6nR8vm7BV2N8vuRfSTsUfXEi8ngSLV9hwCph47ZrH98osscCnW1PG9C1Hm2K7G4zWpPo",
  "key6": "5dkmPtPD8WxstrE1R1w4hckg1meSBWtM6EpAZ1yqiumHp963oRV2XgRLWeSQuYYLgN77uHbmDkbFLXKxEhm87JDC",
  "key7": "2XkMg1TtyGky8CEDdiSQHuZhem8onbuDxsErdc6pB8a6hHEgYR9QnXHKULafhBViVH5zohFtaTFqY3JCiRVUxFxL",
  "key8": "4LB7n2d3WjZ4Bw8L8hVkv98EjKCKgGfqQ573wdE7wt2MN1Nkjvd1y7EyoMn9pFfFndWNbcjeoH7qBUJC4Q22Ko5N",
  "key9": "bRm2hY9w3yTtpTXeWeNPA42VaQmNZtyRLhHq5NGh4gJjTdpNQ1LFrxjjXdTdqMF6VbbNTsLrHakNGixwxrqJuT5",
  "key10": "vh3ri4iUyT2MP72GWt5iNK798Xa9aHnBtVwyANvL6fhVAD14TesuEkdxg8uBc3iSHY2D98TPr3WTWHaQguvr7Kz",
  "key11": "33BbXHEeYyjidtgKC2x9Gs5nugh3uD8MJ1k9cn4CJtppGLtJFAQ8iG3DqHPUvV7ccR7YSVZjSjKQtKKrmV3e6jfa",
  "key12": "3hEarf1jC2u4BxfugktMAwP7KcfTQwjqUCS5dWnTW75fv9oxGtKeSJULCt7SdYQPr5PGZG85CqJGVFRCfhitBJpe",
  "key13": "3wHbdL7E7Vn8Mi6tEeqqLBowqYxqbfS1QZ1qyEx8WpNXcUxFGrFa1HpKEHacCN8VdizXaZzEtAUgHh5wL7BcxEG7",
  "key14": "2shpRpAHAYyZSU3Z9Jq636Fnx684kg1C5NVx16ESKUZ7P8QMTY7niffjAhfSEKXpc51KtjHY7Jfdwz9SJH1s2DGh",
  "key15": "2f7ZgrUhz4NWRUZLy7ech3izgrq7DzC6oia64Fhut8m4FmjhbhjfAH5nq7ybUi1c6WnxVYFFWgxR4p1jUQrBx9aa",
  "key16": "3pH6EKdDMxVWeS3kff5vguqASVfWF7G5V8reuxxedief4ZtbwVtMHuLDpxouxkBqXok9apmnEis4KB9XqwD7Cd6E",
  "key17": "2Y4qexG7w9BPJFch1rUhi1YvdMZ5zNAFPw953znm1cbBFcyXnfS2DzSHp4iLy5sfi2rhRHYDafRaE9xTopCne53U",
  "key18": "52CLMhvkjAL3TNY7x6332etyNvygcwMAJNsUUc8mB51khDN5zHVh7eFWbmwMwXEgtM4PZXnBaedxSB85aA9dC44Z",
  "key19": "4bG15fPd5SgQh5w9j9TinvMGK39AZMnnf18xKne5LcvxSeU9FpuUxSEcLH545H6ZucFydvjtU1gCfQQPP2kMzAUi",
  "key20": "4AjH6EPticZtYKMHeAWKHffBKHHcLJXgcsDEGVNetqt8Vq7icHxTWHsi2N38wQqr4A8PrpfdfiKiKu8CHvxPMiUu",
  "key21": "3v9aShhrF1gXZyNyBZrjMCzkFC4rMtmRCXZDUbhf9zSrBRbhzovYc1peTU2w86VYFrXcFKH63j2wHDuMSGZyTtyM",
  "key22": "4PWsR17doW3huvqwnbA3Zvf4F6GqN2vqwXFnYVAnMQKLZj5LdeU7LbQ1VHRiUaJTzjsn5LwJLjunxzf9ZKDWqkus",
  "key23": "uUcGVTAA69jcsXMBJNsYW9Z4LLhY1B7fgGXEUGp1W4taD84iyRZYDC8C6L7vkWArGA5KEmE9bmmEcsz6qwSbjCR",
  "key24": "K1vZgHfxLpjpgRgB19ehzAzcaXXsdTa3vTMCXB8na7QfhSL2fZyXQDupKNMzEgGpBgzkfNrbNJPdF9PjqK5tsZY",
  "key25": "3aXtsEj3YcgH2WhpFCJ9RP81zNNyN3Tz71GTJsAMQLsQDZdUqbyFnQ3QcpHagNViBg6DFWPnhVHrGtM8AWJ2KB6K",
  "key26": "4sEfaubBdXCHHsW967z7tyyWexrracG458ePYbCej2WswFhRPWR9pe6QUy3Ygj8MXi5G4ns1Mdvhxj3agSH39jae",
  "key27": "2hzdaGG2dzdjdv7fB7oqpj42L2TeWP492sHvHBJiCiHSnQyQmUFbA6vRydJGk6EAiWqq8dJ2XA6NEpuC7JPzb996",
  "key28": "2VMqeabFyWnFaKZrhQDJWELCqamWxQep4J3vNPBp5bJkuBb2hs4vcU37CLDz7Fjv76SrDro9sSvtV2gofXPQ7cG5",
  "key29": "kKCfU9hZT5PkcPUCsYAMAtsYtgJ43TehaxpyFjJe1G66MsniscSBpraamRE5TqV1pF1UggQ4iP1vbEhk4TXUwhv",
  "key30": "2XqQAS5TVPW4hMdg59LjVhtamPrJC6YCz4R5ggouFNVdHr8TaW565B1n35AxPMh17EsNgcz4EQyFCef7bb8iea6v",
  "key31": "5Qzaz1xnUFkR7ZZPnBWYUiuy6RhSZUYe9pG222iDMHVjmxurM6nwxhbB5uxsnJQn2JcPQ7UXJmfue1HwFFch5DHt",
  "key32": "3ms67Cpo49oQbTLGELgaLqjhjTixt37nitzKFNQGZ7Vb2WHoxb1sYGBP2Hd2Z9p7V3GQr8kRwUYx8qQKmyw99Q79",
  "key33": "5DVuJr8GUCMa8YyBQ7SAiMCjN41iRczZvsERQWKTSV4JxNnUvGAYJ2rLyxxLzGvm7Am9LfUDkQpZ3jNS17VwKEL",
  "key34": "2C96KgPv7vxUE5DYD9yzGm5Rr6Rw14qwYB52qzC75Ydtr9jp7RkGCGSQuYe3s9SP2FARikodtYTTozUfEETzfMUY",
  "key35": "544DAK4jaXzR4mF3siwmPBko7EVobNaEsM3B91dggrwvxmKdJR6mT1SD8kvoyJuGmA12UHNyhJ27nQ6PRqNRFBRs",
  "key36": "52ScuMuiWbsXc8aLZfDFMcqf7yV2cCQSsmEKP18V7ukw6RxuRsZN16W255TAnvD22ZxudMGeuX76Etfd3m6GhZcV",
  "key37": "2jjzbwKnpwNZBVqpShLihJQQGH5Wzdy8eBCyfntNvWZpo33JWpk7mCiSo1UYYcLphDWBkw9ENgjxZUbzPaQ69i9T",
  "key38": "6ATRdjWJKtosRL9L2BeyHwDY3UBUsNobMx5uXGgLUNnLQpd2dXhTjtTJdCjVKLgZe2PEiB9RXBNHCM9x8xEh9dh",
  "key39": "3NRWmQZv9KBmcYQYLNE7V4G9eiwhjG1oQSmNXt4hW9KJmyJYdJHJxh7ZQGHLXt9jCZ7gYYtpUpgzFfsw3ZX3PQej",
  "key40": "rPj6oBNtmkskuxmu6QjKm5rvGMy2ivZC7dSBBd2tyf23PccmLxsnfn7qA2yCzNy9XQPzRPJUju7XXj6fASrJDJc",
  "key41": "2qBnZhGqzdTvLZXRTpiGviDWZDCLHK3FmyczLBbJcmGovv3e9PSfv9qf3h3gaokSe3S9qUELV4R6esdVhV6h1xB9",
  "key42": "3tG4Xr3TvsVxunM7ynHLNwtiqg7UkyLFAYnVJdJ5Vkai9RHqia6SEVww3cH8YJjAEPaA6tWxkErEKem5LQdLYAns",
  "key43": "7bBDGVbcWmTXzZoksxHjf9JpLfL6NjGhQjmU6rtVBMawvM5Be95DfxFo1HeeHkzSYso6EpJ8oyzW1qLJkDog47m",
  "key44": "4kh3xmhdB55xzqJeTjw7s3sZtAuZEJwzFmYzx7qah4jHewFBohJEHCFEB3THKht93YmhF5VNLiQuiwwuZVZvmkY9",
  "key45": "4Cx2QiEivTnfskm6xHsDxuPbPdgeUqFQQ3o4GhXnkY4HJBgcphs9PCSKyV1jPSTcGtFT3pYGpK3tcVZgJitKBjpD"
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
