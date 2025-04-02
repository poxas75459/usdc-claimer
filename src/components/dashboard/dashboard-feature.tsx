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
    "65rkkC3e3zV7G4zyRm9uyatXM3zTdycMJTdrXxY7BmHjPMWSA9ZnxV7Tk3ak5oUcQ4JYHqJcGanPCVsg14rKzxVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HS9hpWiSxo79Hif5bNqk4dKozXi61VSPw2Rf1RuUHDAwgCwMpR5d856KWjjJeGXHyTVeqs6XD2Aru4egWRXUi1Q",
  "key1": "53ZLWnmRiqRFEj2aN1r25QFeBEodxhHiX8nGMUtDnRyZHAK1PwtWSi3b1gtf25eGEgumdxyZca6HFYJw6YPwakxF",
  "key2": "2e9B3qdeVGxGL7tQ381TdiEmDgZLQarfBDTQ9SFArNaRCUevx97An47tDBMmAWq4DW1mqVAFanhKVxeDzP2RcdAW",
  "key3": "61YK4pFSJ2NLasXg3p9kzPNReL7eCicU9pFY6Z66pGiUfGQMmd9e1AareFcC7isowBUkjtf7aH8v5rNKGvXjM9nS",
  "key4": "2nbizqqVmxVXprD9TFYwGFBGkLPjzBmLhGMYFfSvBri5qMEqXfjPP5Co6Rh6aUiZhFExhNsQCBVK3W5eamutkP6A",
  "key5": "5X846ZcTwTiTFvGxXzfmHjNVhxpMM7s28YiXYxZNWjmXnHq4oidsMMPRVnDgxkGcWRjYRLuEY9BpE8Bqw3eFodrC",
  "key6": "2yhQ27TKPSGhfrF7PrULF1ZQrAn3FLUaSqBMGrCQ1x4VfmrToX51LtLtB4TVuqWm34vy4LmdoE9o5aMyqQBbyrRb",
  "key7": "3geyqyygPVAPagdYnkJxUKVCiqeuCbhdGA7M7m5j3mFmzsBBZXU5excc37HaXXKgEyUCbbn5Cmhum9UwtdxCGhfy",
  "key8": "3TvM5GVKNL6QKqvRQ53ySKeAjFd3w1vWZiMG4sLVo9HTVUt7eKPaNSYL5KgaP37CtBxq27yznqxqxs4DidMNYEmm",
  "key9": "JTnYyWBpi6QUzpwYLkZG3nSRNabcie9TH6HQDR4LdBSzUgi5XsmxUChR3BtLw4aHqULfaxCjmk3ADZLzjiL9ifb",
  "key10": "2MYjsPz99oXJfpzXNdoRuaYJtG77T4Cf5at22iXbwatbmC5t9aAD8DCunojvtzTBVNiRocU1fzg1XX3VWpFHB6ei",
  "key11": "33fsaa2nLDJR7sLaGbBcx1wcKHhioaTVTiTgYWyR8Kx3JUB3y6JRMtGEy5bn7UL69Apz9CDxGFeNtBDvSLZqidhg",
  "key12": "4Tix5gU6uHMUBVnhrCjwQTZBmFt8PnDv5FSu2ndmZNHVYpWis8T1B3eAmJqwaMTGQT5CXNz9uKLHTTKD8djfDTg5",
  "key13": "4sqVhYYuqfHeKuAY4nE28q66JsKMKhLpJnrjG57TZBc3ZzpZDbSRbqZ5en53VPvaXHpmxgw1JJCYqyEehhaKsA3G",
  "key14": "21bXmXrihXZgZVhML9m7iugX6EgxaMwyJS42rz1AH6waQfC9UD99vZvYhDu3WqQ9wsYsoxCYQwtXgTxWUr7cHJ2x",
  "key15": "5uQYJyUSwUWc42B1JfKn2jezCAW9zAz9vLJiV6u4zDi6tR8SqQTnusQz2CuZ8sfSjdiSM3YxbfUb7czMB8Z2gBCF",
  "key16": "5ZtdgsMNAMTU3TQZQ12AiUTGDxisKLdAi5FfWuwm3jnXj6bafxCGyL5UvuE57BHyehrunpv25hGz6AsQbGjXaRDi",
  "key17": "4tYPMvVsge9p3ZRgbRLbN359c6hHHuKGAwpQSPq8Fnx9sH4ta252diXPoyCQbon1QYjQLcGNrUXByAVKBuGKdFRd",
  "key18": "X15exwqGJMKy1DT1wtAe9WKvDsdrEnXjtwb4tKGxHD7JuwW72EszFsee6hkNHhk2oiS3Jbg2FVnFrKKf8gYuFfL",
  "key19": "4pHQZHgMM6B4DMp5uuVAu1fDd2KpaFMnDF8puzucuk8cN4TNRVcZsd6wXZh5PH6LDzMotRsFSTc3nntckUC3XGWk",
  "key20": "3QoaiBNSZnMWTJggLbuAFvmudeHcjPKDUYmqpRVXP7f1k6Ms5XXr4PuQSkW8LE3tahjTFYiFm1psPn4gE6kEhKky",
  "key21": "t9gFQHTf3bfcEKE2EX7as5qGfoRPZJJkx8acAX1A4c7M5tE1pbfKxaxWzY59zPTZHynHMXvbJXHVBevHJYTa8gv",
  "key22": "4eM5A2ViMzR5LPeHZbGpNvgcgWvG4dRYWhKJpMRGKtmVjW9LFub83Atowo1T2A7zCSuvng5YtZMueNMVddWjEsFc",
  "key23": "4JEXNH78s9CMjpDxn6nRrMCYVtGvpd9t4jfzojMkpE4XGV2BL8tXFycNMzTcCCXmV6i8eEBa2tSgGsbX3XpkjVYJ",
  "key24": "3WKKGCPCuBcn1up3Grgb9mvxZLxdPPUw37tSgr72rvQj6fgDtLwRNZYFmZfeD5BJFQ3Trqoy7c2fdBJdzafLfdkw",
  "key25": "66vsJoUNXM8APDCVLS6cn8o1UoXmuqfveJW1y4JXek139aVJvjDZDsGvsxjMCH9aynVtxVi6yvZFvWrN9bZKu4uK",
  "key26": "6P35DhNABjRpoXJwWyiTqp7ALMpGdLBxmBviS6JNrBbzpYwvc6onJfnHDdigQ1iS6dhATw15W9vkE64vM955HCZ",
  "key27": "c4SoK7SbceEsjHpQWhPEzmd8o82R38zvyi1bn6mx6ZjBDzGrrzn8fGzR6LJgepJKXCERRYsHPPntQ1xuKrnq2Jq",
  "key28": "2S2eVRG5bk7xTdoQAcsV4czwiP7sDrTm2arLdWR4EJPNWNQjzxV9Jqk18GDMicb5o2QFtYrmwjyk7nsmeJ16fJWK",
  "key29": "q15VMdN8Qk5rtBeyRxS8fExFQFAg1kVVGtMgosYjtAywmJREUfxmJkDiECUQvFsAX5UTKi8KwjVdEYXqx96gFBh",
  "key30": "2tTzbzYeaUFqm4mTFV5dCgUue4TyMrERNjwSM3oMWEyceysGtSMTHPasxMEtaytrd2TK2NTXvYfRNcqcb34Y1k4Y",
  "key31": "2tc9rrYtXy5dhjQmo9TkN7D2xp8ctx3i6CeXLxsGSS5wgMg912sW6oUEbWh3bRWLudoTe2rkz38rXq654z41tLVq",
  "key32": "2d5evsY7RMdArujChv2Fvya55yfCvC6AQxFQ51snrsYzyKcZR1qbYsshLeDm3pTkJNwzRntcTydWFrh6dn1wS7j2",
  "key33": "Um4C4WtHXgAQAuGcHXhEY1LjbZ3SmZiTbtSwzRFv4tEC3ty17ST8pxUXn9mPKLGUEUmad3oZStZHtg7VtGdM8VF",
  "key34": "3KiMY2GqatmXTfhf3XEvvTxreTWi7V5tNAnbdTJfZMTtmM3HVnqQmebFjW1HaPakGTNp4K9WmxJZ1ujG2Rtt1prk",
  "key35": "52cpdADKbm32bHCKy5RMpPE7cAiPxjDF1URgjSZJZikf627feMWh4J1V4LPX8qSWYSZdteyuLuCANr1fcqHtrDyo",
  "key36": "541b4PJ8R3a1xLznF13mXeMXEJFE1oMEk5F7UGo2QSAWiGcn34JXWHvTeXeKkXn4nZUxJZQsnSNUSJJk52dnEuy3",
  "key37": "2AEq4sC3CGqk9bwyrsa7unU819t4q3hDKiVadsviwihjH65XKjynzyKhkyWfhtwBqyjwcrZwT2b8HwMQWNBHkWD6",
  "key38": "3D4f69np5eNP3kn2nuZMYjyXPrVxoTCVfxE2pnpN9VqFnZ3hMrqMDpzZtkFzrPXZjb8ewE4RM885tStu9W9LzPFr",
  "key39": "3f78a6k9N3QXXvhbMZHuMYxN21Rk3Cj3Yi5gdiDtvMGLa2sBpgJuQdwqhTHK1i4JECLuW7F4dN2xXSK7enCWwtmU",
  "key40": "5zSqqZnWyq4zCfzpCGhs2PykvdbZCGkrX46XYU1FxiGuLLnCEhiCARHvpyPgxxXorV2Q7DnWGnoV9VAETfgveLP8",
  "key41": "28akTA28gRxGfe9BAcr9WKVui1Rb8vNeG8BQXe5WNtJihD16npoTuHTbGBWShxgYBbKjmDsmJCvPfB9jiFiAKnMf",
  "key42": "3PuKn3TtjNVeAdKAs7qrGUGGJCUuPqDdv2chY1cKtMztzTcyTnw166R5oa9RBmQJKJb2BLqR4J57H8iKCpLCg8Kp",
  "key43": "4Uc53kzzjSNAB3WrsKCMvPyEDC9HdfuhDsRUkgGaqVtZaaN2qAYW11GvyKN9rvqWXG8V2deHidUjpjDjZGCytRQX",
  "key44": "3Vxr7T3Qb889m3DbRWiPrtyCArNgPNsZFMbuayupwYKJdyyi8L4BUyyLFeicdpDnNvsRAjoWToPLrbyqgf7Uz2TA"
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
