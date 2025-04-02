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
    "2AMLC8BNHRH6rVu8i6RzTFYYxkHJCKCYNXqNxNBodGCeAZJx1nQKwSRaZf5a7qQjitwXhB4rwp6MQVXETnsNrFLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kW6rqvynthKUyVJJgEU8z4HLHmrum2pB4d2z5shvM9uGZ2rMHgq5MSjPmwKH3y9nNGX1AB9obLMjPV3YLZxnLKe",
  "key1": "3vv8f4VcBUKM1igwexbGuSYsmXmTmsNSYY8WaUMgXHaHCfcimQ7f3FVFDqEVhQNVdiBzCaVUchUpPEdXaJxQuCz3",
  "key2": "5dyfJU4kmJsSTw7fDz63t4fx3sdgwKAy9wh2Hj225FWnTy79VFJ7p8L7wtTGpHk7m7ZwuPRvV58kyuBC6NXusKP1",
  "key3": "5GJvxUUEtL2oatJJcwnZT7Qe7Zbis8a8KZpA7JfiDTM4wqvabjB66fWFCyQG375b7pV4TXDKiDEye45Z5f1jAPMn",
  "key4": "5JW29imAPpQJRUe12cw4rZrmBCgrKmucyUyBZbi7QgY2agnSh8mNYqiiWgKxyqrinuQua8Mb4zPggLe4paDNsxqN",
  "key5": "5v6TVCX7oRTdDSS1ZmoThTSStZvBaYXapBVTsomcJ21xhvdN1ut9wrqaroxrsi11STXtUeeuDT6GgFKd9WPCsVUG",
  "key6": "2bynPdjp38zSCfKSMfwD1fUJLdqXghmHNbiyUK3UBRhLA7S4SAvETuW72oSvfMaZW1SLPh9ZmZwZW1QM8KasUps1",
  "key7": "4xfYvyCAuAdR4RXCfmherzBKbEP7CSLPrrwNng8QihxQBoPZcKfmWjHxRvtMN9nfQpchiZ13vFGTzqJxG1H3tQ7L",
  "key8": "5JMxS7jB7vaSebq7G6ByQbn6gjqc3zWBx5SEZfCaGHGbUDLsD3c9dd4MDYd8M21TrvjrsEZ92iTty7KDsxVLH3Gj",
  "key9": "K9uZ8x98SwA5hYKD2UdjYaVdF1GKiVdLZxEf7puDYtVxNtxFJu142zXa8eQsCuZuEr3ccnLgeYc7jNnpxDXc9RE",
  "key10": "M4fY9k8fc4Ld4zHSpPmHYUvoBr9MTwb7mcKn85cySdCBZQhAMVZDCZxr3Jq8GcsghwASCgdukPUVCLUvmQd63pX",
  "key11": "7fBJKFq9L8EkGmrFYppM1839kcTE6hz6z2PJb1n3urJ3u1ZyVcZC5KmFPMgi246bcjypbd5LufjjWJXpddzD773",
  "key12": "3y4pYSK5wVnS9kALiWQSKZAxhdXA2dJGiLTTNnQ4W2nCckB1gxTpHmsZXLfynLh67f19UdvkXLPa4xzFjHuza7eU",
  "key13": "vfB5UyMoXpPfLcXNgy3HZH3vCyVmDf98jHtzet32v5VhpH5bQb4YG4WUewGgvKLhfXp7NZtv5BYtYabmMQ8Yyb2",
  "key14": "i3XJotShvmdrecKYnENPh234nn7wwLpqijcpwJzPDpennAbN8rTJy51wgXvhhRgEehr4LmiFpCe1tvg1BePjMYb",
  "key15": "5UbGxUG6DkGUTqzAmBGfKzT8FoRVWk3d8P7tE3otuC4JcKuzKLTVDLJtVnuXAwUvVfZR2TnLMdYgfRCdwd6f6Msu",
  "key16": "2NPdt1zDyJWPyf1rvF8X1JoGVUoWaoeBHjS5JzRc5jwTni5s1DAUHN8Qwkt3PyMJ7WnVpUm1y8Xrcn9jskA5THdk",
  "key17": "3tLwQZVTtRT7GjQ6H7kYRt4Hsh3TtRjyrgzz9c1mw7iXEgL39k6fkBhQnb7dj8jtnWssKT6uR6amueAwFSNhSZVK",
  "key18": "3TdBsbhogQEVX81USenDYPduu3gr1NhJVzGF9C4w2zBYzMEfzp5HDJy79KE2riKsB27gr8uw3mGbszxUuYttdsL8",
  "key19": "65MEvwchPuwYDgQZgafnd4amxRpK2JBcQ6tMowxqwXoVyLbWqTA2Y1tWjKaqSq5HzfVH544nvapEVGJZk6SN9mRx",
  "key20": "4NwNs6ug3RKe1Gk5RpoeKrjWSWM27L951aNLkWFFBbaXvNoz2kpTjDkECFYhJRRh41PyqKJftz7cnG7Ghhjcj2os",
  "key21": "4tMfv9qENEFY9E17jH5e9KpqaBb6A3ghCtcfbjrmvdU6BnnHoDtj6Am6vtg6YWSw2EfuatgEv7Q3bm4R3cj57vt",
  "key22": "2wwCwPQ9KYFSumCTvZe9G9PYQ14udTmf5gwXVq2bPV4pUgLbSZyadoMY27gnuvKQRwH6mD3m4mqs5JzzHiYtzvDj",
  "key23": "3qNzbExjkoVYrFnbevP8vvoxQHWagPnT1XdbBMDp3pshYkbSMUMkNw6DGCoHj3GVAeRWbend8T5q5bsfJJVDxQvg",
  "key24": "5Bxrw5KLmDfhs9A4JsBeF3YpT4tZsY8NAB5KjXT7nkZpYL1ZDmk6EJVjgWANttmQ1ry9Y9K2YthWAjehXppQRqhY",
  "key25": "41hXkU7LpY6Rm2NzabQVbiW4rPcccjZtWwq5PMQQkj3w9eE4kUbVtozLYdrqrEG9UuUk1oQijTtxeKdZVQWj4T9A",
  "key26": "3Aa9Q1K3z3EYaNEXHiEg9Sjcz2E8ZTMKGTxN9Rzz1t2zHe64c9eUpoAActPJD7n7S471tAENGgtXdTKCipSMzDMb",
  "key27": "4uDMQZV2fK1WcQxxZVFQvUvmntRUiCHAjXiZkZ84UdKejmBgCeY9g2H6PxRiS5geFwNauZTkrhwLgtbUmUJkV398",
  "key28": "2VcSspjUBdWsKLZeeBifQ2suEjR4RnBPnF7u7L1j5eEsSrLyG4AsUu74tZ38UaMzNrnNVbdF5FYq3vihDg9yaCMq",
  "key29": "3mfJbKCi29WjohQxtyVgYymMrzVyWzfFKUyETQ5Nx96mUDgdJcGakx1UZKdzj396XHGHAGUbEePDKNgQLJf9moku",
  "key30": "5qozYF3sYX6mFQ1a1tizdb9XNzqpTFSYF91KtAS2PxERVkpfsfRMmQkPDJWWQJdP4k34L1NxDYd4G8m9Atk9Friu",
  "key31": "3T1VsXpDyGR7CSDt2mSRT6gat6FecUBtdbMEP1ZChxx1i8oxFsf2VnwCiPBuGVW4cfzJSnsRJkGDqh5QVppZPMya",
  "key32": "fLhcPHMUAT4CRFKC2LzWow3osGuzCrqLEJHDMUxHymTTfRwxacQAChkJSxkSVuZSFTgebFKsxprm4acgmQLn5yF",
  "key33": "2wovHQhbw7RgSQLKNfS4RnyjSrMpGfxE6GfkYd7FXqkPsjrR7wrtFc8AdGUbRZj5d9CgtLpXXgG9xqL4LdLxCc1L",
  "key34": "2raxQRHURJgkkr3AESLbxEoKXykZcGbyZnvSkaF8oonGonq8zh12BMhhYMHnbuvMozeUBpGkWaD5R2JaMK6mdqsy",
  "key35": "sxcAeiPcSh5bmgimF9wRunAuhSeHpse6d5GN7ZKzHxDJr13kNWxFUXXuNwR8VN69G2TXV9SMDGcXcu15V7m8VxW",
  "key36": "47QyeM3VXF7QFnVHnpk7TNukhbZLpv2mTHVyUFasXF1QBKcDPb21mhGws83HGTcHa7Zn3WyE6nyAGXoWBZ4MRpMX",
  "key37": "2hBxkcmDEVSQCJPzCiBaK7oCgP4iHpm5RAzpXYx1SgxAYxfTwhKwp9k8TiL3LsutkniAivsyGEDBBTvpHkFhXT9",
  "key38": "29arr6zduDC7SHqhjwYBvRoANQfTJGB54vuWhUEVnLyShFXWfTKbqHtabKsWaV5Xxe2znfm7ERVfzXfSdxPawE4R",
  "key39": "257ysx2A4ZQmedUBGmqR3L6tDxMcwYi9rVXoW3skAsTGAX8SCNW2VroDcUuKFZVbDR9ofQ84PrKn2QxSWCjwaWy2",
  "key40": "4suxcGUHWSX9zw5k8HSru57PoUyvfymgh4B9AotVmhJtYW2AbtXec8eFiadqpAZWGwR5WaTkTydx8APcoaXuAXbK",
  "key41": "37KdCKEvXa1rXnE2fsD5ygpaELtCLzxj9eeau1qSEhxqsXyvVABD7RjXWmkG4XdfaPQUxuckwBbrKpGmA9kZga4C",
  "key42": "2FkGyFwNzGYaX8Td5EkNqJ6q1swTk8tTY2HKgi4EiK3jCrLDBAWuCSifkuagvxTZeSvkSRxviUdseiijXuvTZ8YA",
  "key43": "3fWx24je45nRrTPCPirKaFzTGYM1wV1vHGaEYcEttXBPBwTneJyRk2L74dPe2KXs7pxtqJcB8iyicKob7JHcs1z"
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
