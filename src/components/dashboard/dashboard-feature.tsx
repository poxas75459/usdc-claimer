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
    "3dPYejpBaZRJRCPH9NuxgExU5K5Wguq6QY5uEcSDSgPQ2MiA7gHdCW3ZGos6Lx9nraMoV4tVHnfy7dyA46bco1Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pgk8QLaKddS2btcctWmA375Xe5aMZM4VAChggrpuKXKXqQww6xsNGwPY9x8q1xyAqXkFp7Z9Sn7cDMgczRZHDUi",
  "key1": "34yxUQStpgr34pptt7QNATGqvsLqS2gkFuhQWPERykUvoHSVoNC9etzbUAmJcR3KoP2b5AWXqpGWdktNaxXKq8gi",
  "key2": "yoheATx6F38n7fkjRHuaof8WEqCYk1SjiNAZEZUqSbVaeQ9midWqd2uipatBHr26ErfVzfSAYB5cv5UGbcNEhJe",
  "key3": "4cKcjSdKYBXYEXguy8Hdi364CFDaLxdoYTaTuSifCHKs95pt6D88u49uLqufvuZkEpKhFCgbfSNSrM5veyA65yz1",
  "key4": "fvFMPKT5WQXkkUDezHMvyr6KLFkvH2WDYtCYvCodu6YEajUwjYhvZZbuKqPWwoNU1j3necsBtZaYJfbGSrFfWm7",
  "key5": "4BpwAuFrRDmrn3LFCfrPpqaWhawbDYcvCsimFbdtKcENpRm3Ag2oCZe18dqj22Mnt6FmqexScEVktkWPNwmoxui9",
  "key6": "1sQk7kDHxwyaZN3GC4EpcT68yiLWjc2fwB2VQ65mEyDw4xoMhfKYjfptep9s72Gwzwh9bnXJoTU3BPUhLzzkm3B",
  "key7": "4BDifdbur33RXkTsVBJESB3gYKbvnetLKdbajVNXFAVvfL2Jyp4jtzaTA2UFD1VcckZS6ufAjVcSUieaisCqsoPf",
  "key8": "AZB7SyZJhfeQXKwbkP7n9Y7bA2jgP4VSVN3ihN7eAkX2CWZQw5Ny9MdPZEkt6Mmk1Nnyey9t5Btk8iw3LhVpXRM",
  "key9": "3uaq3pso4ptqm38WwveWFxp6dMUSYWmKS4kVf6KFEPjWT8TrLpi92sPHXnQbuSXzdTQ2iMKWvodBJXAjuuwnqQ85",
  "key10": "4cAwN5q2oyBHHfW6zRbwKi4mDheADjJJLQoVWYCTdpdgW2QwtA9HPuc6EQKvDWKsJBeSH3KQG3mEUyjXLur27TCZ",
  "key11": "3h5V2Wzq9QFAoMNaiNP79x6PucVKCyZGx4cD5z7fEjg2vgF134abw2k11BUynFRzbDJejFvTrbF5MaGbCzxUzXJi",
  "key12": "4sCVndgXNABQvKw22ahZVv3WYw1nnDCD6hmqVBZ8yUcpYRXfZZ43SpVT2RDZLdUc21RsDtFfpHTZenm2h3Dq4Y6F",
  "key13": "4Qj3GWTcaXrXfzBrbrCsGDimHPAgSVVcRsZSziE735twfBUt9ttuGSwdDTiBXPEQm9h3hSdyQyc5g3oEsMTuA9nZ",
  "key14": "3SUT8yHjeHGzmS1xMFgaYpqiCbbrDSU21UxNXcn3xi5RooQQ2NmuSvpUSrhcWiEXVTxNZ1Pr5E2zjeS7j8mkUi32",
  "key15": "596EZexgtx82jvSA4V9QicZb1tMoFCLeDwPX9AtMuQB5xsRv5KTRWD9MMFK8nB7NTXueK9tjh2JNC4irSd2AqP7Y",
  "key16": "K12EBsBLsf92Hpim5fLVy8JXsbNgQRcVuxTW4zVPBMWUqsfryAY38B2irTatLLGHxRfFW4M2FeSxnuQnpFKqpoK",
  "key17": "C6je4HggPKtX7rQ7DAEuLqzoRJNCTTM4sXN22HvBTLZmasHzp9tseakj3xUXLk5wpJdoiAdvQ9TvQh9SZw9u241",
  "key18": "3m6zMhQsMxBTCyoiuAwubkCvkKeU3wMeqpqjQcajh8KKfAtiWZqqgmwrxPMgfoPy4AUdHk1h22YABS1nGsWquLMd",
  "key19": "3vkvMAbp9pnkhbaw3xGGeKN6GPo9tKewyDkN2MS7msycQsGPimNg3FKgN8QRk6yfUN3GrLe4rNrGYnXLRBEpxoMW",
  "key20": "3fDxqTYBb9TRoFJZTW1vmJM54ZVWsmbR9LSvcyzo52eqN1YKgDPtwk8W7viiYWejmdvqV7G7in5qA8o6J2CfwV2L",
  "key21": "5ABfZ4rYQmRBS7VBsV7YzPFPZ8EUkMLxFWd4QMR7who5bdkHdt6y17ACPEbgAnr4pMHBAQkkkPrNeRwZDgcW4zCw",
  "key22": "28RXvfnDYdrgXgX4fVj9yjq7mmMUTw13efY1oYsvmbma6Geq6GLqJ9LN8Bi6rCmDtCcnfUrx8XbUxe38NxqZzCwT",
  "key23": "431hZo81PfJLNiACVZwHVnRVfq3KpuNpLzqb7W1H5q8sUYeFTvtE1XMXfwmwWbtcaotYr7s6yAeyDvpCUUm3dMCb",
  "key24": "26QiP5s5duCxSg1ga1YBj5H5KWC3tQnsd5TQwtEW5YgKLpHwbexr9RZUCLGx6DWjih7iaUFuHa6MtqMj5s2Ui3Xf",
  "key25": "GmfncxT59yGXw6YjGVPLohHXUKd6eDcTqVc8dxrBYju617VMSaB3v8ajSNyvkEYr2vEE6Sh1v1JDmbMMJRCTu46",
  "key26": "54gQVEo29LwUHrhy7pMFu2AqSPtPvot8hRXUmoeNZghY8MMxNYAR1ef3bppJmed2YAeji298ttdxPV6Wt47sKUAv",
  "key27": "2m183pTGLfuQtRoYKQg3bUrJJWVbQ452AiZJxu1nq1Pokeq2cpaZKx57r5VtxLopmCRkahFKawWbRSPr7phuSsFU",
  "key28": "hvwUeoWdD3hQHNQPFhztvFpiaAD6A8kDnUuDRMot9J82cxTiS61SBAUFH1ZqkuqBxY4SKhqQJM4kvcsepXPc6vw",
  "key29": "2fN6eB4ZueFqvAahPG98DE3rQ6H8gtFdXB6FCM9aVwsqNKxxxwvioG2fjNYs1jGFKKGkfuCyxLppSk4zKMLL5BGZ",
  "key30": "YwXPj52sm54NBeVqVERU2fZM8fn6Wiaipr9d1ZLHYJz7dkdCuNbE9XtCHjdbrY1UFRMbWtwdoBTTndvKLBRihQG",
  "key31": "2XChhrhu4pD4khzCiKqy6M4cmrCeCVUd8eM8FbisH8B1hNv17VWPsrCBEzP4JbMLVagvMQjDkDctB8x8vE3qjQ2i",
  "key32": "24sjXavQE9W7bZSsFq4orNcBnRDG26GqkVcgqNaqKPNKKwAEnGkzWdmv4UZZaKvZ9xAYgPTBt5Um63Vq791wu9cf",
  "key33": "3eXyScTS2rtEkMPKtdincUDg2jw22u7L4SFVg1HGWDj6xUmT9T7WBKSw3EaLe4FisbT9DBrLBhfFM7rjXWWNqQ3b",
  "key34": "5M6HqNirmy7N5a2E7JvaYNmw4A23wKpRurPAHLrZkh1UwpWk5eiTJVkLp8xMAZcDP1zFG9zL9iptMdMH78Kn6K4a",
  "key35": "2iqkbhBGLUUgtevR9DzH3J7VuFuw2GRumkuzKT1V9QyZKMBWVN4jNCgKp1oMiwyTn1mx8LGDyA4UCbrmSbFaRwj6",
  "key36": "g6MacjoJa11E2Yd62sfxTNScyW3vXt8KYVRuMm6NQGZUSkZdYQiBAiRwsFiYqPyT5XUvtxvgN1vGuxYZkPp8KdS",
  "key37": "4sTKc5mQRfmBqbzoHQHBf8eJQSpkam9pnnddXS6CnWT3mxxt54gxjNZ4RyLcR7Y2TBMkH6RDhyHpW9rQUX5dPRwv",
  "key38": "2F4BZzZ1wmGdnbmYZSXsjFyYFTrt5jCVZUJT67uNyhjAwu9iTUQg1q6L96dSJmRyz6sBqdmVkm7fcE4dNVKyD51i",
  "key39": "3FFWFjQgGrmHMHakVYHvudek67juYFhQibf663wk6UZv2c9Qp8wdTbzWTT56G5cbvqD7K5Zn69bCW6dN38CZyTrX",
  "key40": "5awbss8ZFRCJrD16x2sUkqi72maHo6ob5ZshWufkppPnWD7hA43JZqZFUpdXvvP2Kh9fSkqFW1FLWhqu5CnnoxKb",
  "key41": "3Zp9VqWmT1Uvhhzw51WgqFzANnQ7uxPmCttudHn1EivXFN3opEnosnR7AkPZHoKg89udXJTdJD4DqdMvwPyzXmDK",
  "key42": "5wuCQ4umjGYf96pfKw6yHN9nGEbqno9peRUR3SmGWmAVJPJcAk9R5Vq3U5zqocD3EduDCLjgbJSbgaM1w67gX16m",
  "key43": "4453bSrY8tjkam2kakxwrQPgFmoKJEcR7MJGW54gDih1NKjhKRRZimLj22zYdKHxYiNEW3tXHvtivJDPnGJH8mGD"
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
