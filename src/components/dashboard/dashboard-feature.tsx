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
    "2XDdSQtCgznRaHobMgqNrs571Ax6zWtaDpvfnYgLcwkKQvX6Jb52SxBftmz6JTGXHcUptFMQhS5wCxyri2zsRE4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D1bFJAQVwdrZ7sVG1DJ97e5MBPE8SWHgF6N6y2nUhrqQ4vNfnZnszjH9C7wNYkDKmVMhUYViUbDswu7HDvVxX6Z",
  "key1": "452jHKxoJ9772P98DwVBT5A2f8VCyTwp8z8sq4EzfBJXiwxzo3vxnhxLFwphtte7Fh3bjEG3nkKrtvVpf3Vr8CYD",
  "key2": "4GNwbburGtRdjERQ2Re7dguZi5JSd1R6GWGmwK9wQR5uLFViCFccxA5sR9ZfbP8aGwpgZVsBiwj8hDAasg3TJwFq",
  "key3": "2h3URqpUZx1GhK3mM8umH2Cwb83K4cwVchef7zfv4qcQhbsHXT1RYLQYRjNPMttFgvt8EbDXpU2qcihuPbA2ff48",
  "key4": "4UywDXHSYGQ2QFRF3Wdr5fZ4SByXmkhJ33SGmsQXawjdasMfAJYt8mAFwR8GkjzSoDhA6VmPGBhrB8tcy7eE4spd",
  "key5": "vRuAFXoZfcJzPVSVHGY1LjgwCYuKuoBPBC44fMEnQKBb7emY62PYsferqm5WEtC7vu9EHQBRGznsH3xQymFpQDU",
  "key6": "2XaUFXjBTHbJCu8Q8UJpjoZXbvPaSn5SwFuSt77pDoJuznvQEJRS5itbWP93qfEUx23XNteGmEUb689VzbitxXbu",
  "key7": "4n1AaPC1oUv9DWCjGYLFLBnSKo4kXGXKhcZ2zD7sPFFw611McA4LLw3Ukh5fm2jktcHe1Um7bSVF9r5A1Yk4nx4o",
  "key8": "5GpzUQVBNZLApoJ5U2RHZQeqmWqMXKDyRnsCyHtKzBMz25sGDtJopxFsYMa2AU43FSNdEGcLBoJ3aZttXE32DJAj",
  "key9": "3B8c3d6pUvmKYJmLALFPCzBMJtHK8WaoHxCM7tFwUHt76tYiHZ4jPVGff1jGNK4BZmRMUWss8RGVhB39wuX1FHox",
  "key10": "8pJDJZEbsHNbHukpHGYM6dHMSHDjWvHQ1hd6KzVHbcw442fm59TDJsFZHqQQKiBdG8pm2TX1hEoqSpSquJCFu6L",
  "key11": "3PXiwji42BB6GUWov7zZEPHdiBuSYLSJkmShbppLvVY6a1AA2wSPHF8x8FK252LavwyJhxrRfZhsKaxEAAz3N4Xf",
  "key12": "4ZJvDY3CC7v6VXyyV4wDe629BsqxvuAebkVVUAvLPXBW4EDUWMNZMhU7hvLJTSLjywmJtYNnJsj4DCaoWQPkMoET",
  "key13": "45UMkpUpJAG7pavGs2vTkRoiFq8oKeyRaMWeDWGBRsSYUWooerst9WdQtU4Ki6FgjKYMFsg6c2jfZnxQmNv1qB35",
  "key14": "qTaBmRigGj2SNZBrLJMFoaimjEevAMCPWhaoHN69n5iyqPZtWDomKno4E9p2qrhyWJE7B6LU2Z24kZpaG8CXH75",
  "key15": "4hUpQdsv6FRtPMDo4KGEoXD68gA6zwBMNHXYcWHQ2McYzKFhP4w9r5c6LyAb9ozv43DK7aH71PCBkyAiobpX7muy",
  "key16": "3L15JaF2AMjyaymsiBSaRKuoPhxehvxGxf62oGUzJkuiYRwTEF9Sr5mdUoEJ9vNmALdqgXAb5Vx135rmL7wB7a7b",
  "key17": "5WhxVK6H9GwcKuSYqGG1TohAdhT5KUpH7ckq6VroY9sKYvoDFYRc2AbDAqRDECFZozVVaULXUQWwFADKzoGbLivX",
  "key18": "4FDV4a7HnfKM3SEKAJwMCZMSZYWdfGutcyVBkXfMh1SHMn79TeqvdDZY5mn1kkX2QBrDhakbbMe83HipCnv6v6xT",
  "key19": "5NEerQhP9UgjLsLWZSuCZAcixdQ7Vam4bJj1CcBK6FHffNzEthQw9Aius368f3m3XiPqx4z1zxgfCx6B8ixV6Ahv",
  "key20": "2siYLJTYVWKMGUZebKdTRCXmdEDFycUuqKbzhY6s5DXSCmHXuA7ZSVJhwDMeyqRrDYZ3JnueVZtZEYjtXThaNLKH",
  "key21": "3WSbLkvREfU8MwHPWqKiVQodUtTKLMTkomjH9KtXAATf1y5LL5ncMDvo7Pd3pq7QaCBuhpGfcup63CLCRY6Wk1rE",
  "key22": "47Nivx7p1PYN3EirWXYBtaR7gDqN7QeVoriasBQ349aErzuyk93khKnwHDfksf2vcRB9MiYBxzvgRpd2q6ffQ4Wj",
  "key23": "5vtRYFbcnKXv55YZNKrb9JuA923hD4fiJ1DS2wR4zGSpZMwCi9MM8p61aDHLvpWxS2aLduEEKmFfTBmQ8yzojJUT",
  "key24": "64Dq6aJbsaZfyoEvcUQhvuDDZXZWZc2rjZq7W97jW1Kg4hiLHwQA7K1mTPGEqM8axDpA1exgmCp8wHM62DRMALwY",
  "key25": "61E3acbVdMeCfN6XHFe2vu2Ns1yy8YjQ5ZrsmRViYbn1KRGNQSxrCWFLvzNEvf1Ps4yi2tURuUrqBuFyzHceswG",
  "key26": "44D4Rqubp5QkQK81eqbmvg7c2uAZZTs3P9Ynup5NcAogdgmaXgYCc7sSVxEJefwvu6GqLphKRy3p3U6dtKUwkUCF",
  "key27": "4odK7fgAFyoRzkRhuGs81DCQPmS5rMivVMpUj8X7m1Wu1mtAhJwPMYtic5ktD7HNzCvi7YLkbnH8A8JFxY5Uaph8",
  "key28": "4HD61hGmDS7CSjdxVrGwRZnFWSAXx1siyUNyMAh7c6xm4vHwWB494gn718RVanEbdvbufRfKWh3349SaAdvugew",
  "key29": "37t6CiWC9SBGZDWqEYNsXpTa6MYqqkSR6N8pgnkpNEeDVDWBj18CeytVpb8Jgn2rYs2J7tAzF32vqRb4ktphiocu",
  "key30": "2cVuuGRN3yyTH8Fk2kKmpfD1o1RAfuaewWqGUNixJzwxAc9ugmcjPUZQthXcJt9hWRFfccK8uuvrsJ4NNLhpMbke",
  "key31": "adUBBLyC2W1E75dc8oF4qHCLgb1hh6WYPC5C4awZjNyNvhmZDxtSfzm5f5Ax6sgCr84RkLaaHkwxZYkrCpbP9me",
  "key32": "2CFevzv7DWqex1pfpqU3rJZzSJJUmAieeQv4qfdidkoUSSzxKfcSJd43AVpWuh4qERcSXnbLPC3ZdACPyGWjdV8y",
  "key33": "2KhchxMi663i7hucomgZxPuw5Lr8EcKHtyE1QW7RAue3gupiCAiYMD4AVYqz129ze9ckytRNuobp2JKgPP4Fk6W5",
  "key34": "ptR3LoV2VioAQKjT559MBum7xwRM3xEDTyXm2fQKQUubv8BxG5RNoeAxg46fWbxyXU2yfawf4jhU5b9HDaPtNW6",
  "key35": "4sbzLJN3FEsptFyU2LyNuu6onNJFTFc4CDSsQ4KLuQjr2dqCKvjbNLgSg6b42WhQfU8YTUtpR7wcWGkQMWye6bqZ",
  "key36": "56ESEYN3MZSjSMs8siN8ktUhsYXUZnzq3Pk9y7gzgLYEBzJ1yusEne97NFBBZcWz5vo17QJYjQMWqUEHGEc92KhV",
  "key37": "2YKvfj88pNUqUyhpRAxTFSEv7VGcH17hyfJxHL9LvHXa8ZCwQqfZ82VQQAoGmQx1gqKvgUjbVtNBowyhqJgZDwkK",
  "key38": "2Fr6HjdZifFdT9C6859AB1Rr9tPXsW2wL9ybCWcbGNUE1JZLwCoWL7289X2ustw6M469meQQddVKgi9j3WuxkCzX",
  "key39": "rkfd4A8Fn97M9MRMqnSPwDYs8hVZjAuY9FrLCZVQx5ZDwqPDqBFqV6svSXQxzFYagFgZaY47u1F8wizwLMMasWC",
  "key40": "3d3NgdCK5yJnyvm1SJi3tRczRjfVKcU6DQSyYQfcdaXAoFb8RXTt5nfoqmZ7v7ovLmnmy7GjvjhWV25KbTMBJwNq",
  "key41": "5HeCwyzUoFo6yygY1WuKxBg7MFvGCCrDrev6d1CT7hJHfc1NwM6GQP6Cr6ep1C3BRH5osLCXFGNv5ZGWc8v8VAJ6",
  "key42": "5GoPsQjLddyXgu3GAvPitnB76xaR6QpuUDJNairpCmuZGQQmiBCjPVuD6GWAwdx665RJsHuwXZzwpzj8R759yQjy",
  "key43": "5rL3PWPWSUvD8e1kv7yUb1t3TJvRGvwZA6AnUDW8od2FqxTm9oKZyHCYTujEW5sXupaYCdgAGonUD9vjdLLmyjWN",
  "key44": "338dUVBNzi7USBYrbbV9DpDUYYhghWuH4f7HmdSkbSbMRcFaE2mSC1j6vVSjttnsEXURsg2brJyiDNGSqxLKEDp4",
  "key45": "5hkCFiEzWb2Bsd58X5fdFLgZYBeBB4vrrYKX5KPCGBj5ACzP5mALDf2LbCSxkWPURZ1WRR7c6Qx3guMJkkns9hxe",
  "key46": "4GAvxxGDZFZKwMN37mYjpeQKY3Wro1aVFoEV4tFxFy53edQSCatU2qhar6NHxXFMX4U9i6dAtJwp3TEziCEYBLJq",
  "key47": "2d4p2vSDUzzF8qttuC5Y2iZiWXv5JCghZGxxg51yx7EotYQeiGS85mGpD6vNZVLwFvtSEzUXJSiiPa1bZTA32L8",
  "key48": "3VcKtEamDfUoAk2cDWJLXBgyymJUVsR35z7KyirtuMcRfZDVFMZycoJSuiyV2FDG1jra8Bnd6XEbhgde7SGwhv1m"
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
