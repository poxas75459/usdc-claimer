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
    "46cQj7zeN2QDXQVCRKFqY5Y9sa7h2sgE5bg6LNaww1vnNPivaZ7EEz5WQmR2Gn5jR8zk2pVH42nmv86rCq9hqGiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bubiDM7wiRKksf25H2w9UjuXG9iqkRzjiXvNaWa1Ymg8L5D9tQqLgy2ToGC2rEz5db9Q9swNUc73tmSJrPMw8p1",
  "key1": "4mAGNfZ5X97PzoiTjwS6oWurDhUxJAmDbjWCce1WnTjv9PyF36u6gxf1XAzgNdYf8t8fW49WPNxr97up1GGQQLEf",
  "key2": "4LLCpkJXx2uridjuKe5gs7Y1gYTFJnZRx27re4uv6vdq6suuuw2wU8VbWjBhHiJwxZMkdy8pVznT1sTLN1j46ATA",
  "key3": "35BRwkvEs5vx3oF8PtVnBYLKqiHT5WFDVFzmFXg3nbMc496U1qqRDyHnfncRZbrzaRNT2KBVmQvcEYMHFDGE72dG",
  "key4": "3dZBS25cfhK2pyUKD4HcuGm6pYCdLvaBB6LYLzr8jAtvubJacQQkR6HGSMGUVxu4eovn7s2vz3XDPgZGhxyaUgwc",
  "key5": "5LNgzcAy62cVUBkfty35Z8Rj3dp5Ergr6MzirQMdQGnNqEYePiobeKPFwxAreG8X9D5L7GZ7FdyFDySPMXnJMML5",
  "key6": "B4dJyMUwPPnH89Sqf8NdQNhfUk7NFxSdKEZ1DVnTVxkoueWTj5MpesYe1Ap5bfhmbU25CtvMEeTGPk3ieURu7u9",
  "key7": "3LtLA7NPynCinHKQZHNY289Uy8C8vKnWkm9EMkraGdUS9tLfEwbHmrDsj43bbHDyjMawFSCb25dCcmYaM15Xy9Qe",
  "key8": "4pqxqhs32SBXaD8TbAHYVYsRADxnJyM8rZn5jpiZiLsVpujW9ceQcYZxtJ6pkQ1xW7QVKtRbWFcxofg39FrWDxiA",
  "key9": "RU33w5FjPSK2pWEknksbqUHDrRtddt242mx6nsu8NvhA38wwuKojPzoAUQWQUztRuDiuWYAvsPw1Fbg2se1NxBW",
  "key10": "36VkHw4NrMaiURUudPisau6ogCKcKnQVzLB17AbmbbmPFtcDs3eRn6yjrfdygZ828pkvTvbfXVr5Vn2HfMutdvge",
  "key11": "28ZWpVJehm3CmsGcvXtGLmcziVZBKi3f5pX356DtfaJWStR9ffZR6UQh4KU67VbHQXf8KKGn7Zr99t3tEDAM4BdX",
  "key12": "29hs9WxfrN75oZomXJUf8Fu8rSyhEbBdHNRzjm7oqd7AN62DkDWjDfUZbm3dc1AFtVootE53bEefqRYg7cnXeHQ8",
  "key13": "4hFFGk3tgg4gJud9DYsQN2yW4GfbkCkYzGdGCEhRemtAaV9YzUq2Rg9mP6hEp3hXjczFs2jKfKyM2PNUv5a68Vj1",
  "key14": "3S9GvsM6HhqHuytrvF5yQpVDrcJCtTZEWXkaWpPkhBNFD57b4uiXYKtTUKXdhPS9Fa72NCRN687L4UnwQs9wtbun",
  "key15": "5sFqHXzG3QdQwSitdp3zg5LqVz7Vg5A8WGYQ7HEJyJiBZtFRwg4WHBpMQ1ZbqS34ASRsXZjFHe29RqDwaqFpyF6U",
  "key16": "5zZbe1sUrTGPAhSaikMYWywZzmEMN8fAjDUmyCSyNVRJ4dk58CdUCNMSo47vLojMWGtYhUH2PAzNHiTrhWDeiBPZ",
  "key17": "3bPXFoZ8sePejnuE9AuZyVoPkr1Bz3frpQ3th5SqgEcyX9DbYNs17h8VssysoUpCba9a7SaPyGiR6wtG8Zr3u9PL",
  "key18": "3WXYXNZ9UDdr1aPQmU9AeWVdj18LTXHxb7ejkjxEE1T2F8PYdfzJkMdYnXbKe9E4Fd7gycgTRzoYq1Ziv67uveGj",
  "key19": "5xrLbKbqo2YCZhpT7og7FTi6bLeo2bwcj84ZuTDAF9JjvgSxD2ubYMS7rkXeajTzokALeKHcgtWuS7pYscjEoPhV",
  "key20": "4HsgJuW4r87Z3PxwnTyAVJHu8gcKj6mENtpuNnVFAaDWec6ytdDVaDSpFTBqUphg5qV2e3bouxz97ABT8p3G5bEh",
  "key21": "3bZYPzsKAUamdhbYcAsCsGemZwMwdUkeKt6G7gPWrT83KgnUD2mzA3Qpy8TxYvPJUcnQeGyde3rcU4uX9EZLbzNS",
  "key22": "45xfbgcs4cQGVpWTitF4xcM1uzYBgVMtaUgxMVdz1ojG4mHJuSstiLaKA6MvRSpXpX8iUF8EwMNWS5FLXThueEWB",
  "key23": "2YVtKxdFkBgveSbEdBPwzDq39dcENsqSwgfTHpPqfNxc8wHVGmqSp7xHgBaaRP49g5qcyGiCfq6wj6k2dXN5j8fi",
  "key24": "374kpQ2BVo1GuGVBMkwaxPGdJPZM1KvSjyrKVSV3XH57BJfTc7hvKd5pfC5t56QvCfpeUGKzWTA9r7bLzhmFQT5r",
  "key25": "5gwvDaF3UsFgnRUNWskZxTXqdLE7AjXunwj5ixr19EGfBbnTYVmttu4RvwgQAPqu45379scBmGRs1YqUAm6KJDHq",
  "key26": "2XwaCuQ1ejnzWe8A92wck1kay6xNw6nNqsYdH4QFq52QhU6seQzfMokNbgnYdtQdTvzGCKXSoE8QZkRv1miGVQs5",
  "key27": "GFGgx2qARpXHyonsPfGjgCmAHHULLVZMG8QNZM6mzr9hy9MycKVRjrbtQKHJqNVccdx4AYMXAEC7UnxdHQpYnZd",
  "key28": "4LAQeALZJtgdmuqaYYSvkFkD8Dm1zACLgpcjQKoJtqwj7PWJQdHW9qVQRQXFwXhFsit3jkiPRHJtgGkkgTr1KJ7a",
  "key29": "5zySyAY9zQcQBDP5jxb9zh7SCnp5Jm6np9LKMYYNKafD8tR9DU4z8VcFpvrdCsMHLmpjD3yZFoHu9RXbgMQZCNdx",
  "key30": "4NcSoRprJ2We1ZdHWjTS7qFcrU56KHSb6kxCWJQdyFTao5rxWhAJvAUcxuLkxgqreoUi5CbjFbLVKDbHsaihgsU7",
  "key31": "5r9tLN7bsdVAPRbxgnSCnwAzQXdmDvDSn9PbZZZnXVAR2DVFSiRdYRfNxU8NcGnJp3qz5FncEhVWRE2NWGcG2g4w",
  "key32": "2wQKD9A9mgg66aCnW3nuDEBQRmn25Tbkr1gZF3Gy8wqKFydUU2q76cqERon4eKche2N5NtYsKN5RuBoJJFcxhqMX",
  "key33": "2oZFpksq2jfmAuYEmQH3hxG8fU6qkQkrWk75xBVzL1m2krUE7r1AcVFPVouC5pTcKu48HNKgigKycsAiEgU6AD4R",
  "key34": "5XfLTTS8DUB6erqqpqgKUC6QZsntdHrbUFZ3Z31xmFDtuWQa7gmDTotEddqYnyz5Nd2WwmU3rGABcQZwVuDLfmDM",
  "key35": "531EF2HcoLfQaFvVpzCuJ3hAueTm2yRWC2ASgAvydK4aFqcnScLyb4fGZLZaX1k2D2GzartveT37REuGMebdLUAs",
  "key36": "5P6ebpRLYp5HrMiwoYTkRac1WydhuyTWdn2zzngLeJauAbkzxm8wYp4mkmPot9CfWMLDGSXhKsYWZRtMEqxtkddn",
  "key37": "5XGpeNKet6k5bNCxZZKHnevuQhoreSNCfaG4wdgk1sBv6NiDmPoJ8EySwDUvAiux4WgCHGULUu9K8DSyaqEhHvh8",
  "key38": "CbvzFejxfDYrxGtLor5uKpXw438Qe3CKbXGr3QGdZbE6KGTFELKZjuXSRxQ97MUjUMPEevHYt34KGWsyueefY5h",
  "key39": "kP7gvoUVR4EGGF1DQofsRzk81AJeUPouU7tokJowKjBQNqhAwvZQr6oDUu1UjzRdWM9RNftgk1a2XkSJQoDWEch",
  "key40": "5sm3juf3HyFtvD5xTBrg1GXNkc9ujUnVaMiU4rK24c3tGhjfhQ19c4DXGXFpBTTEeU7GrYsPQwTTfhhtSgvVzgPN",
  "key41": "61jEsAqFsgaM2G2xi4E9Wtog1PHxPzSj8JT78qjmaXyWJFKRFEPks2FhiQDMacc6ff2TzYD5FQ4qQhZMA6zCqjY8",
  "key42": "3UwbnSwbBVPnYsBbnmcBdxmpZ9HQ3K8wxFzXCyzWAz8Nt5KC3UyugRsX48FWpyGHaCGU8AR2SvWtYwMCiNSmmoaN",
  "key43": "2ypbPEXK6yNLWkU72fqdwsvudR5N9nJaJUZLbME1kkrgwH9Z5Qf9bKfE3g2tEnJNJB46s1c5SRV8DnroGb1juSUc",
  "key44": "2x53sN6qJ8rSGvsCBcctuBXuNz6kFwgdodxdtkGzaH1yBdzTaoonYUTEsaA2Hpr8tv6eCuLedRh1q3ACuRPii7gA"
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
