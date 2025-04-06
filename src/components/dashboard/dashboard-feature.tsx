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
    "Fj4Emw5BjjMKyxBZdutwP2CuZoTgD4ZRowxxtzeo7eCiqZKjmzMaSiBCxDq3A6LYJVXPPJcrVwEVSqioNbXNx1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqXDB5BPaC3Giak1J15nC9ZxkN5bLe3UGGZxHW3tsoT4cad8uLTgoahXqitnDT8S7riH9VdDZaYPgV3thiwaPPW",
  "key1": "5txzh4TV3TLzBgWs7av68AKD9ZG9f1iH8mKBBsx2wCqnh2rFZkQKyK1cQ4JbcYKoEBCJDe7Ru2e8vAWPTM18BsMs",
  "key2": "35Zhn9hj6tygy1q9LczVU245rBNPUP638b71PQR5SgSa2Zf8itrCUKc3DLRn9GJWsMJGX4jZNxfvYScuLVAmwskF",
  "key3": "bhBje1yuJbzxrt4gcnNhkLeHXVm48M3fSJUkE9sNGnXFdsSD4HW9TGeAKo2B5bVLj3VdAyeGprYjNhfjzrGLoen",
  "key4": "4awtYSnVsGiB3xXk8TxxoASuRDzp4xo57ZywhB5bJcHkYdd13xkoftYzzDLPYENN8GaNaNPD8xvY4aAAu4dSmQRR",
  "key5": "PGap4Uub32oRL4Eh6oUuYYGyTesXGZKhqbw84H7kmLpChNg7mT8qyomghpqP929ZBLEsR1NcDK6eJpyiTezBL2G",
  "key6": "GHas27d5pT5pacN4A88ySabZWRgtFKyGUwYu22T867fFhGaBjkZL1ap3p7QZpbjAr6z9NQqWtF36v8SsamS4Dqr",
  "key7": "qfMZNsciqZ2LSdZTWPubzhYUh9sPwuKMVwR4Em71sYAMm9oKLbLnZL27E5NPgEgwMGGeGKfBhxm7sDZL2qhKVkw",
  "key8": "5stfaRoQdfyWannigsLTMkhzM9NtwQzJ61oRQKjLQ64SG1Vib2qq7e2Sg2q9zVmw5pNoeiwBoVbVn4dD2xZomTdw",
  "key9": "ZY6JPPRGpm4nf9pUokVcGYQk5RdHTTk6s52PfMgDn327ifE9sDFHN2kkvGPV1HVzhmHTuHNiBRxqCPdjpGn1jMb",
  "key10": "5xxfuQ7cxYzbvGi6RZxqsCiFd5SKevHdK7jShdbvL4WqB3LSnR1tQDfESRPkj3Q11gUstZDP866ytsZa1jmVcZhJ",
  "key11": "33ETRLju5y7JhBV6S5Cah9HqimKfQ8hhPKA7aHq7vHXK3duBz7rzYCgU8aQ73hxpGagqxuSBLJ5uuMsWjujkpTHk",
  "key12": "5EBpvMfTZTRJDYBT9Fd7fFTPLqU9VHVkri8Sjd77YLLsSrf5mTm9RqCq82bwpNmNvJtgKtebZNV9SY3R1acrYayW",
  "key13": "2yTGh9qgLoSMSa22d2Er4M8dGKqKciFa9fUwKQ3YPuatr8PTE72BeNmq7Ct3PtwQthFvngDjgrmskdS3XqhRcpUw",
  "key14": "4yuLAizuxLSiGKNmxsRseVzDwGC1pW4vTpL7yRwYUdiwpqkAQg5AgNf43EG3s3MtE5nWCXgYnhT46hcWxgaLA3iu",
  "key15": "2HhufHKdgFkWNtxAXqL8aZLitSKLtiHq1VUx7Xb4gRMZsHbSeWqX6VSsVPAz2ir1aryFNvFSPGWDwDhLYqyuzG7V",
  "key16": "myx6bXcFAouDCgWBarb21bt8U1vjqjLGFSUSzwiWkafy3pbBQ31dUkXW5HiNHUatS4YNh3foia4JbaibpLaEU5o",
  "key17": "BJazbsgNJLnTWqDRvUbqSPccmLBgQdq6B2GChDhiBZtXLhPnyanrD58gyYFQRpCWtgf1w6w1k85WPspBkK8CLsM",
  "key18": "496K7Kb6Q4aWFU7dJEC2pmRCZisvA4PdREuBZ6jXywy5ndETWzJv6jVhkHqfdzNSSbc1igctwfFBDnhzQDjuzd2N",
  "key19": "3ghEUzHonBZkzzxactKVyMkoVe94PzPBwCVpUHWoQWSuiXnCeiqmBr7ZxNC49jT45pMNpuvk5nGZkcPjfe5Qvoby",
  "key20": "2zsDsYxZKAdaBWANVqbTjSEEsXmZahjjAfDwdL4nD4afReap42FiE9XJh5PRNYQeCCiaP8qAYdTDAGfd698GJYF7",
  "key21": "2hYRdBbcfVu3xN1Kp8EZvzWdNshe8aWzgucJsrVgnYBb8v3MMqCMot6QwFivQCTz9T5sAaEY5zTTne9ktPzLSKS6",
  "key22": "TKhicbnFuQFGLjhjK8zxh5zeLZWrftrXtdtBQJ5n9etejxkbnrHSPArLoBFrFZEgHe2pQTj3haHUDJVvcrirvv7",
  "key23": "3a7sNwWmZeqpVKoXgbzygAdkpz3GsmxxnsQygrdnsJXQdccdeJFduqTqkm6a9shSWCn4Gj85N2K3FUwuvDcKuvsG",
  "key24": "3v2YHQKPgVJCzMkS5yqJCpMRWNTz68yuhc4kwY3cP4VyCxTSVG9XRcTuX8K7hPUv52MXbW42cMVdPJ5rtaPpCQFX",
  "key25": "65zgDT8baE7ssxXrvTbT86uHT4ZcAMza6Pr4QWszD9qoidcat5cgMzKwjNEimu9hcAs2zrWdcU8McU2bawez169T",
  "key26": "2PdbccwC2y3dRFBc6thex4Qq2HhzxQQ6kypennMKFR7Y1fdkREKbUJVPWqv1Smi1gSMfbZHN3utPbBcgay8vMpVp",
  "key27": "3xjzKfSJsUooihjsk1PDBmLjU3sqDif82in3Pg2GwUTdxdPqZTdjxQjYLWaNqNRRx81iz63cxLNKHHz5cxpuh21z",
  "key28": "4aCHcxjXuNn6S4y9qW61ETrif9Gi5WToRxFffymi333WyYBGvEEnUGSqwDYjUFHz8Nnk3U2Fi4Yiw7rnQiYdc1rF",
  "key29": "22cadTHao6YvuMj1y1ycDM3opRXWLW1UtgiuKRSCJiiqfk1bCJN5Tez7CEqpteWctzrjWjnyjN8gte1Ee5vnK5TU",
  "key30": "5T81MWKFmSK6UULax355ZTVwCDLr2Aesh4k2CPDa3pUfNsGJF57cMKPXQMiteJLRNpUWVGKPQWNgHYxCB8npW7gA",
  "key31": "4gAHa1Jrf3G9A1c3AmX1bUvGXSd9yUm3GttqwZmLvPTwo9KHDUuBeAnHq3k8icu3BZvpsTEoGD6y2EhXc6VMuadH",
  "key32": "3FZgkSN4TEMqxPEz9tn9P23L6ypv9muofcy7DwRc5ocHdL79xfH8j9msQ1rH7NREMghi7VkdiGFhYAGadxu9jZo4",
  "key33": "3SyJytzW7uvzcfxdRSpMwzED6pvtMgTXtJZZExNGZa4ePZwCx7xS8GVxEq4xRFmUg9pxJFP339JLsmeRMU9BPmmG",
  "key34": "2Qyry3LnNaXTU5J1hmPsb61cbD2Pqi5w3GACiHzpWauq9xc7UpjnU9Wq3KBBeeL624ckcb3MfTG83CBvSBgC9yqV",
  "key35": "2Bkkhm5RCM2phYGNRMX5xeVELj1R7dFV8xLsRq94tdAdMCJTveHxynSypFpDccUfDMjTFqyk1CiA1U4XyS8mtmtb",
  "key36": "5ahDhRy3SeuEQEwdcyf41v2mbRTiUiUc4bdYKMBj7jSxdQCawEJ1Fua7DPSA7fbNE2JZ2cdng2oGKkC5XzPpynsH",
  "key37": "u9f8XwQccBXEJq7QyqNdMkEHbBuRHwdKrWcrSv87suNudsFexhrznAwyjNMNLhy6FH39EK1HFk9a1DhgjRdTQLZ",
  "key38": "2Ft1Q3yu969SEpwd8wyAZ3Hryc9HG4xNtagh7FEyFUgvniLD1Hy1E1KMA1oPXiHPZhF25KSgxrdU3xZ58XsNmQa5",
  "key39": "26MBN21GoGNbaMNgWTnRoLgCYuFrVfxLgsYH4tBvmT8DLpqEoVd1Ngds4bXYKoAwHsnZ4VxxECiEamm2FoRypcc8",
  "key40": "3mirGuHYj3NCGtC1xDVjuADTDRTRVt4xzcYv4mSXpWaKWTTFcwbHeUaLxrSkZspkKJa6NijaWcW2P3cpqnDnMzS9",
  "key41": "5vTyciibH2ZwRF2qq9kg3xu6AhQpBekZpNgsjJoVPdgsF2NHMagySnxjWxroUH6k1ZvaFzfLfx2a92r9SPyegtvw",
  "key42": "4rVWfhFfhKL1DovxL2x6iHk2krkFS2e8mhxE1WLTm2dCpV8cBo5L7JAfZcwQgBsDRaf3zBns5VRbZ426X9xrcT2z",
  "key43": "4wert4MrNBJTvBqyL5nrH8TwChLjbkj4hDnunys8g6wNyUQ4ryttAJWxkNif8ifErGXGgknBkMFbkQoA4pm8ZwhL",
  "key44": "4YwK4su8GzU3iAnpNk7S9QVqhiRsQUC3eKtMAEgr8FzfgytDSwX8fWit36byoAHetmxNC5yL82Thq97rkCyxwC8d",
  "key45": "4PgFrXGPotbF6YvXiwfTzsGzQEy5XoD1tYux35aWqU2jZ9xViHPxy2ZpH9Bxcw3jvQ4kgfoFGHfi5whSmH7dFRPR",
  "key46": "3HsLjRgzWVu5Yuhfnbo2U3WGVwsXzWxupMbyMddUjwQxA2gJxvgSzx99cR1KPoU6orVe9ocrVkkf2xUDgMBts8jH",
  "key47": "uPZfuiVWjJNuayzuq2gsvPvMx1gHwc3sRjAZ5VM92Jy4YNSad3ktqjkon4GPC48Yw8aVhgaA9khawvMedhQFFZf",
  "key48": "3zdHwyXsfHZaWyYfpJHFvyev2SsLdXN8dXLzX9WWrEzwpzJima1rGghTNmC9L29ZDXynWF9wNKy5wb6bQ35H7TSv",
  "key49": "WmC71BsX5Y8FYcDciaxMTDikMq1sPjeQz8aR7gEtvY4rXTNgmvfRuALBiyfo8mTg3nHhxUedq42a2ezKiJ6emq9"
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
