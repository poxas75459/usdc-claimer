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
    "2oMhp2RKqz5g4jWCt1EooBPMWP5ue2rsPnRNm8DmqTJMDnLDkKtbZ5fBuRENiFe8waVFkm27bvPLAdBf7Eai5QWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baqSVNQXhYUnZNviBLVWvks5TEUtEMnTPWYVtCEDGQU5nRoDgs9MtPTSCMcSDPAeSrmPZAZpJfV5buHbwfbTVT2",
  "key1": "m7Xwfs9PMbwiuFS1Jwo7SWcBHyc3ADUQoyNabfzuYgSzRKib7K7SUVjpAV8CPkVjK3AoNDrTBqaUQfL9E8sPcTq",
  "key2": "3gnCsy9ighMR4crXeew6oRiMj7L8kbSNNy2owKupZbend7sGvJWkfYvLhZ6RDZeEMMx1CCTMLCtqMVyjd9wWCAMS",
  "key3": "4g2Jbhaf4uNLs8HWgsVFdmZnujxw2xpfvV625rTbJkpwT6gNzFwaghA2PqNnNYsuBWieYUk4i6EbhHWHUyiqwwmB",
  "key4": "5VKzS4AEZEZrfJ63xWDLhQnRDre3dXMgKrpvJw9UZUp2gJjMfQaGrBx6JRiDaEBN9VzktzhyiX3xKkUz6Uxnkk7j",
  "key5": "JzEqSzAsBfssZM4yjxwe1StoQw5KTtTvgpCNQnvrME1ACsQfQtYrBtPP4JsoNDsVakD15BBRtXMQBaUZyxUG4pu",
  "key6": "3HMDMdSSjAviVdevvLZQTw1U5R2554XJi6G12bJBEs3J54WyF86o1xiCrup9GVZbc2ZCLK7RMYS9Fc5rF6CeLyWf",
  "key7": "4wb8JNHjZQ5c8aHXNidTwd4iwNjh42LZoqM3gtc1koU2KTdJx5eq6P7rh2ajr9ELgS9yDqZQ183KJxw9yeKrCzqK",
  "key8": "66QXWRrsBamCcJr3ek58LRXfmB95MLmjWwiWEq4YGCkPSjHJJashFZtA1yZWDZfPHwXjgZHfNgLApSkkNmb2W5kZ",
  "key9": "2dV5X665NPAxMWbAd3BRH3cqXfTVcwiX6iibxQsrySUi9tCpkitRAE36gcVerAW1zoxXoph1dUuygNQybbWg2Y4U",
  "key10": "RxrQgzBVAXgcTXPHGLHafUN1cx9rjXPhYHj9qxRNjV3L6Ji3X8wKPrNVdgCgY13sAY1nF1DHNxiC1sbc8L9xcPg",
  "key11": "5RLp16TeA5UVaAUs56FkQLeioJxgPkhcEziDqbCfpFRjNHJKmUnbv8yfNT7iRXtrYmepeMXvKwp59dxnkUuyyHxt",
  "key12": "3eijEowL3UMB4PaUBSiBFZUpn61edBTUabj3pnqpE6G5HwJJUKi2HKZeC138RBU8n5ujDo1LvXoCVSyYFYLSfgdE",
  "key13": "3SFsBT8aX4xP8RWVSu8noKHexPyFZH3MQjaoRGmzr72x4GenYZAHUZyJsPTD3rFWt9xSm5vWvxWp3iDqoPciTjUu",
  "key14": "3D1VSvZdPmvxV58FKvZ1MepMXLJqySGvWDptPY1UF573Ewseys48Yjedhd8C1JNN1BvPwNvgX6oX8kXroF255b4E",
  "key15": "3E6QM7JQkB5VGLULwedDD1rPQPcYeK1HgerNPFoAWCESXRq4dRAoQQj2t1ArXMquFrtToGePmRezJUBhe5G6YzKU",
  "key16": "3W4KPn3emDYrn6BpiEGsZBuBgF3jaDpP8u2HXmTfVc97zpxR2MVeHT3DnfoXtqcQpNLYT9EmcujNeGD7GjWXigoT",
  "key17": "5o7eVYBep8Rui7LRLApg9tLDvFxDc5dXz7GwNg8PR54UsSFRpfduipr1zCKAWtNpYJndCbq84uMBKFESkGLmZM5E",
  "key18": "44uPZBysMSksfhcEG5P5AhqSzHXcRuipNvK5AKGFFo2Nkxi58ZJVTczNmKUibTXXcSQxMG8LvS934tQkyQ1DqzVZ",
  "key19": "5Tg3uTK1FLLSxregKzH73Ti29swsSEBfcVACjtin7eUG1abKrRyaVGURp3dibDHAUAAiCPU1bCWkwW8e97xYtZFv",
  "key20": "4rGpPYaTeeEtQ4Pp4pCTMNTd3ibMfWuHGtHkFCbSBcoPp3ryE7a9q2EEa38B2kQsJZ5s3spAGhTm25FogtvrF744",
  "key21": "hEFPFdPVuax6tQEBbtvzFAGtpT1R6D96gBVas4F6GV4TiVLrm87SAvmCmSPFNE6pVoxgmdY85ra62CD9QXYCb7P",
  "key22": "2VoSe4em33BtNbk2P9BRHDdzS39iECTHRqL6Kr3bV4mUG7puWcai5QNXiXjrQ4pFoPpe73e8Np75MNAZTgHJP6kG",
  "key23": "ovefJBF3vQenjK28dVdHY4rpaadPxhZ4kTZ6TJYTD3oEgd8gWa3csdnGTMBaBpPFjFUfQg6j6UAW9d9f4zCAbpZ",
  "key24": "4kHFjN7kuJ8TzQh6VCGC9W6ryehK6vyX94jT2QGhUYSFeKESnQ1v6gzFXPsRLVyRmpcSbY1LLo18LXuUWAjCQbYf",
  "key25": "5zvdMNcxbYNC58ZhzUn3yvKk1BJ2hwZt4GdvmtijihvmHcUGbYctkvgDkUS2hS3SFsezjARUE4amr7WUJYAvXuGt",
  "key26": "yzU9Y6bk4nx3wSdnBaYDrvk9PFnECeVEYnht7QVxiRfLjpA5gM5VK9NDXCwhNgvkW1Z6r2qgncjZwjJbCg8UwLF",
  "key27": "3UmWT7yUaY3X7BYqqMCtEGTfcozQdALtQWW8kYJLSMxZNhPfADHwqAUSxfoecxqmXrgV3Gwvu7xxFE43smiwpF4t",
  "key28": "298qktdtjYhT3AcUrH5VV7mLCL1Cbvs5ohZAuo1MmgjZXi8Qx7thR9wcxsHgZQ4pVen8frdCXMnJHtWQ3kum1cyz",
  "key29": "4bV994fNTV2mSsmQPmJucuvoPZTc83Uj7H9DpMuTYpaxa7EghWQNnjoGZxviAs2zNwB5AhsTVXpCcWbArz3YP89R",
  "key30": "5cAhAtP8DMRRT141S71UzYNdGtgGbDxauoEas25TCy8T1tG8ux8fg9nmbtQjUmNNQN5XDH2kjuk5AvZgL5WRbuZj",
  "key31": "5EM3acMyAh7vEvjvQKGyy5ppT1z7wnVKuvjW4bT5soAchLG3KAgEDpjxgP2mHQtGAbpFufGSBm3JGvPnHzjhL5jB",
  "key32": "3DxsHPZ3pgtoqi6ZE8AXypoeQBJhGBPax8RA3bHtYpSbx2hKLz2GpFEVnv5WusQeP7aXSFhuKjGoFnZmLh1QxtXh",
  "key33": "3KCduvG7wtn5MTEBnPQwvEAbVG9kzJBnCyGGNoiVmDdZuJBXAcc1LUDFGpnR4a9MRcGPiZK6Gd27biXWVK7Wf5zc",
  "key34": "2QzXZLwcznUr3z6Ush6FTYdGh7LSifv6bjESynZPZcM5HhQx9UGcYCYN1QRZL71C9cEJEWVzBjUEPrjiHUwFAbjm",
  "key35": "5wbd3N7zHw4pxQnDX7jQyvXnw1tBFyVSGcKorbC8HKyDgRxMtB6wfk1KmmSWrHwMFRne7gE6uDQz8Zpy1ENCozBR",
  "key36": "4k3PNhK9gBjgU7EuVmPw3QLk2njDTFkfTuar4R72WNgxv1gcKH38qJ9FQ39HePT4RKE6HNiFaAjbeSCupGCjSj7F",
  "key37": "2EA8dEPUKWNVZfFTwbSMHzArVMLJzefNthmkMXTufUz32sX7F3pxGyRKjpyLYsAqEF4RxMfxsRKcfE2uWJevgXML",
  "key38": "QfxsRhFGaLyu4vakWG7cNjstFPDCNmcDYMfhsAispJ6EPeKrBDrvVEmtCsepagPjA3PFg3dBh2zAUzy5pkpQ2XK",
  "key39": "4wBeMJTQf3SBnhnykzVT44ZVXQVirXVzBcT21wXDGT2k1dGbpcqBRfcMJ6tCuBX8qhaYBXg1YiRa3vPPLo5nFKwb",
  "key40": "2uDmvEu2jWKQLAxeeNvgZGZaTfzXdR8JBB5K3NihNRHqcVASETwPP2J1DBpT2KRb8N8csy1McXW8TPKrTn8HRBvm",
  "key41": "cY9HYCyeTyfU71E7nyqDGqfcUZKtrokqr4v4DikhmtbRYmNdqka6yQm7w5PKnzSyujykUb8SSYcGWPLo9ztpbVa",
  "key42": "2AydxUDaSuzJCX5qyJo1mefnb1eizQ3CU3BF83ALRFno46AbRwQrTW9T9At5sf1y62cyiqwKTvrNbVunTh3uEB69",
  "key43": "5bPk1pN5GgfPJC1LWuroWSZVXqAR6cUMzjXRbqKfqRDcTQ11pGVhpjWDEBi8WPHnNSjZTqpYZmNCmDN6YNWV8zjV",
  "key44": "5TmsjZrkL14L1cTNBzRcpRL5dqay534mGf6HcgpNATrw9iq3pS738XR7T5TQ9zGAWowg9UuSNa36XLQ4iR9X78aW"
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
