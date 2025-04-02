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
    "533M21EpixdjDHP9jpDA6XzPZJB9Uqvv9oBzb9bYVZxzAfuopRvcuFoCJrpoFHzzD75ifDrFX6b856Z8qmX3Ua1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rqwuz4KSUKDLZEyyGU36Xd8MPy9doPeUPmtY2Gu5SRbvGepTvVfjPm8eatvPZQeamdtQdAjK37JwLSULdFJSR31",
  "key1": "WNJnVSryyVFDNoiWZmCUwyPFqe2zihWJUcwx5JJ1hd4u6H1PhWbEvjkaRSmGdZ7P2dZEMkQFWFPtGRh1oAyV5vU",
  "key2": "27jbwP84qEHySwJTiaGMrxAjrFm6j1n5LXj2VqrdBPWYi2xfBSKayxkVVLHYQpG2zvRLZmGJYmeATxQdjSbSCekQ",
  "key3": "5SYDHYWVKhJ8EDd2Vks1BhzeJ6PyBSiHBs7UgSbbTr3KW2wf7bwuR2CTNBdZ9gyA6HBQ9gLxarDF5oXs8gJYtLFV",
  "key4": "5HNftgRXtUmrer99UgcHqHrKzEh8jPiKJLackdcoMJjEDsVMXwMdwuss3Q3aXZZcT8sxPm1mVmFxesntRwP8gfU6",
  "key5": "3XcXRmcVkQLRpkXmByLR5oMV8ekKQvBXTdb2S2Zj6qeenxkE1Lic6mQv9g9viNGuAEVEbNDNBdLmtHiQE4qNZVjV",
  "key6": "4i5gx9AVteZXHX4LP2oXcooHCBjHsGMtn4S7sPWGr6fTf4naudo7QHancH4BpxBKhUXWiGs4gtm42XYsmRJCSyc",
  "key7": "VNLpiWcCtkiCtxjxAzBpBGQ6tPDn7tNJCea1TXSreDeZhrXevUmMBkkGgaHCzgz4D1dqodipUXSEqA9uCgfaqqJ",
  "key8": "2psLwSPXLvpvgqTWHbRDPbrkvLvdF3U56QbKqDSVmuTgMpQPm8zgW56QmNSdFjF4J9eHGHnJLpPi4KaBcq2XPrFw",
  "key9": "SHXdp7dkaPGSRwDAUoaEkQpkm8GwW2h9FdGZ71fEuHCzmu4bap5njhYfV56Cf7erPGoAPiWmDrUhgwoFwf8gXEe",
  "key10": "5HWfZuKPnucw5ibL84WWvBSzk7YJeQsYyEDn5qn29CLh5f4YKQxqe4Z2LqmKDnkkzqJjjQrKBBtgf6JNsqZ6Zf5D",
  "key11": "3Qo281DtBHWegfRsnEkw1QFPpGNmTbs3S8cd9rzaRtnSvTBjkuo1u23MpQHvWYyV2jTLfv8izCYQpXhosC65QnVr",
  "key12": "4fFACH81fJCwqb9qeqduCja1segLYkixHjtL4FBvHWQFHYSxHnbSeQdifGCBaTLE8gHeYP4JSbbx2td3hbsKt1FM",
  "key13": "2GetiEnTjjLQMRLoXe6BL5NZ6JF7HD3VNPZWkdtrKqXJdTk5BS6jQ9bWozMincXZnBc16m7vVhcT6qp1wU3QexJz",
  "key14": "5Rmf19fngbqiMfJJB8N8tmRr1c7ockDXSYnmZ5qMXhFG2LT6ZX9ZMoJ2fYvpbjLT3zYrmYGbk7mZT5vb2k9966jn",
  "key15": "Zqm3ioToFtSHAoQueNC3dypkHp7boJ6LYrS5cbLRfDo7gdRd2Q8ADd8rvHzDWmBj8sMcvppH1GTQqfqWHk6B93P",
  "key16": "5WAcS7n2eucwyZgf8jiAaPGhZ4dp76gJGb6K9rPWaZ7Yjz37hfxyStL9HfgT8NkEAD5J4fnUrd9sutRuABLA7waX",
  "key17": "2Z776WMcDtAXLd7Poufmfe2dDEH3CNrpQg4KaSmEurapDHX3nXfxW4wijkvhimVMR3nze5WrmUks7qT9xNY5fYKn",
  "key18": "48PN3fkpaFea9MaLR9QmBo5MpQix6Foq7QFvwp5sKVgmUuiGGp8kCLC1SgRhoBpLbCiacDC6HNqSty72GFhTfsUJ",
  "key19": "3WAD3XaLrMbY93hdfo8rV8QzxHLWPSYm9qbGWN2zuSnwSxmpTzGA9WU1ySZjMMLsjcg2mnAEerrvGi6C5Gu1m359",
  "key20": "5MJPymWv1Wmg28q2ftas3k2sBYAhVwP7uBnhykmjbJZJvkis5gAAhDzLHoGXfWbAUeYKYB51GUaZDYyLYRQDws8d",
  "key21": "53T3iDMkhXYN64KX5k7ZuMzJYhYMD6rNyc5d5NhfvBsL7RADYVQ7jjudVpzXgPqV3wwk8inxBbsTZdvyeBffMXiM",
  "key22": "4qziEvWtt7qK1ZBDp8WYuFURmMNryiw6qEd9sPCA4RzNdhyeDKkPJJdt2KgBWxuim5pYpZz4LuW5qFNWNAxaEChk",
  "key23": "5C21SrYD4f88YjiRE9UN4xrBnKhD4E27REA73WQm1pHQV9mZuzdjS2eiHPT9rMDvgxw5hKwziNtrKdnCL4xYmXaj",
  "key24": "4pbBw6YpvQCRTBCmcZde7oU1BhwF5dUizdwhqxJnu4xamMUE7cpN9Dpa1PqZEwhsfTZS2FPcQgnPj33nF4ses3sY",
  "key25": "1NmPqqUpg94JUbT2htvk6KwN7BnqtAZPEj1hCsBMtsiihNca8CLq8g1zT1MTMdKTF5Bdm1nbPgyPPm4ohJRNFYB",
  "key26": "3X9p31x6VygVvoU28HCEckTbpyGUVJXZphycxp1piYpoLeuThMK2652c4LwSbNko69VKUMWgRe4UC9bRdQpjig6t",
  "key27": "24xLBhiQFJd5trHBDZcirsavCz6WQVPjCZrYTgxxga7gEsPb5cfHD9Ryv1gSwqtNMjLjkvsm5uaYCfXxHmAu16Kf",
  "key28": "4GvY5UBetktFhV2fniR4PdMP6Wm2nCyFA2aHdqmwXXCZnLvQ5Y5Eu3nywUkVUo1pMKV17UypR8D1AVLyfdkwZxR3",
  "key29": "2MnJybWm39qLjZkiE6Gdtvfswf5UQazXAMFQZyac3yr2YNWWgj6KRuKtVk94Yqs4yRnjxipLNhU4HSEdaTVyoieC",
  "key30": "5humfgU2761FfbtjqMGAPmzcyWF7QeHVut1RNpvkiFfKSkPJqUW39SB7Q4c3kaAr9HeGuTuahqKNMVM4npPH6NnE",
  "key31": "47aqKXpf3mkTF35dk9US94M7qGXN5P7YRBVkwvjaWSsBUjeNMy7fDoqTF2d7RRJx4sdtLG9EXmGhBS3pmfQdz9Uy",
  "key32": "4XzhfyJxejNeZHER5vQF1fSriVMt2zbedWujjWVmLr75RPAZPWC8Ds6HQqd9j9t4xtbfS6yVYNwqAvAF7vEm3K8M",
  "key33": "2HmwgcVSawF8xuzjjgjSdi4Gq6xgpvkJg3X4gGodgn8ThR3PLPimUFgd1p3VGijnL5hKW3DToL8e8nqaYVs8wVdB",
  "key34": "4FtGm7Mpc5qiy65wqoxH92SWndDFCXXeYs9Jbx8TrppzXPZvpP41WAV2cLGbMB1UfN8982VBav2tuvcGCunMV9Qy",
  "key35": "AbHeqr3YY3LMLZj3Xr5q97nvHazvqELVeGeqsghwDUuUiDUfjiSUkBvPu29ZMBWjPxPA3s6djBJossSwnw5afTp",
  "key36": "4o6TrUPWddK6xNxGpEc7xhyfbfZErbrgKrFCAxyNYAdHeNc1aFLR8DBng6EqqPFX6bATx88Q16fkH417Ecpcicy1",
  "key37": "4dsCuo1ZDVGjwk34mwebrxKcmBKSZb5TzU7w6oMd3bKCVNZJY6Zgwr2SrD4AEabAU8e78tDD8vJGeVKUpQrrmuGF",
  "key38": "2g25PRwwAXMeBKuagw3Mzpstkqc9S3ENnxuG9ANrA28bGcKuwc8jMh2tVKHZrRHjFb96arjZYZ6ZV3XbZxShLtxd",
  "key39": "P7tG5VTgxCJgUYceB9AhCQDggriwKvhnWwVfJchZGZvnk66rPwWnQW1z4MvmzQPSQPN9JSb1HRUXE8R6D7SB1wn",
  "key40": "64F8KKRenWzmMuZSxLL6MSumrhmPeJww57CB37WJvYK5y8fVXQeHnuqXB9PLUE3Fk2miyK3Fu5xMYWt9ckko4Joh",
  "key41": "5D85iS1K4cex4rDEHj6fGmFRAecfyMQ3Jo9NmEvPqxjfUkZP5R34Ay7JJTHJWtrRBMgJY6JxvnMMQj828psBqMsf",
  "key42": "3Wfef6erkyr4NCYt8V5ETqzUFsGoZW9GcLiD3wJeFVLNNEEe4D5hU3yxheSuHrM7qNzUSBF4L9B9A3tXRgqGQtsp",
  "key43": "3CqDJ8dSK1Vhz8Q1KBQiQYyJ8RkeqCna6kbDRoPTUgTu5r8xn3GXfXBpEKfknBFYd9KsxBXokmndpLyVCuKP8GSe"
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
