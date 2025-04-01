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
    "ufHsxFrC4wBXmmrycaathLinkCEkPUbv62x2ojn1FR8hxe3T717WdzVQwxNSeopijGnn4Mqx8NKnFf7w9ztHeus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AGhTRYp8g9kgww26TMGmtTykdersmfYW4AopWaV7jAVibtKePf4hPyqw3d2a8NJwx5aY8hFufKXUcHF9MKHQk1m",
  "key1": "4EhhCHxggybZxnsC6P5gX6v6eKDQKgXQ2gQATatGf4SAHFryuhBfdvdeLBEQD1EnN97MDFQ3J7i1Yj5CqJ4pzdpT",
  "key2": "3mtQFwupxvQLw8tzGaU5DZF5J6zaZq55J9dJdBtpxnMZ7rwdgbH4JmXpACvjq7iBh7Hi2HCXaRGiSNprPg3hY73B",
  "key3": "4t8JHfe8iTsLSuUFaUjotSH3eNy5FzGE356bMGsygfoGc83sYqgbxc9XjHfm8tXeL1WvbjqenXAKn3Mw7oHjnamC",
  "key4": "6PRiRX16td3gzgSLyUWcUQvjEWLfLzbm6cD8MQ1JFwnCowyHwTGLgiwqyHLFAG9T1YcwMB4yoMRaLRtcu872has",
  "key5": "9VehEuYKz1WYzANbzuLz5SjrogbLKcWTec2gk2BEo1ko284isBbmFEpLoNiJvSgjrZJYBa1m5zLC2Gr4VqzuAjW",
  "key6": "2RbC9FA4WWtNmV6MXz5Q5ovs1yuMBVQuGWfaJhJbD13tPWxHu31bexpGbqBVQmkDMqXxUaRxNJCwGS8edQ9n4is5",
  "key7": "63m42Lat38rZAwtu9VePNtX7ZA5HFNFTBmrXxHQ5oBN95J6LryuzAdV3wQJML4z87eE3uFbsGUDs6guagaMRMPZ5",
  "key8": "4dCuJEYh29GWRdcfFLEEb7Yg8n546fCFp7a39WVCXBtNMYtorXNvvXAUAFBovbS3BqHRB1YzqFpUwGQAzHifk73c",
  "key9": "YFyjVYB6kTM2WsyKapyYrxp2QJVBHEHsSG2gwSBrzXyEXjpNLpdomMLdheMVj7gLHkq83KPCorZQkBXAiAEybsz",
  "key10": "naHKm19rt4KLJgKvyoAvFZLPKtY97qfBMuxb2JMduEMiKCp8cyC5uzftorK5WcWLJmHsyd3Xsxu1RuTC1LG5ZBY",
  "key11": "cDmBeTTqVmdoafiQBrPqCyEHmmwcRbE1ZGdy56xiPBomW5qDXHMbGpDPziXx8RjBdDJ2RWcpMzgpcGjEnbVPqDD",
  "key12": "49ecE8iiAgp2BPk6BNeifyXuxfV5QZd7LtyqguAKniTQkQ4hamBWZJPusm3ZBtxck8P1eMWmKubJT5fAh1p6gmTf",
  "key13": "3yvWnMfetVt1YktpuxXCXu38hKgnWAotWfSMjJQeunxvuphzJhi4n5oGe8tmJAuUg7tcjusgQS2NHF2gNpeSKpBP",
  "key14": "4xBBgP1nhfCGFKiU96Wch4PMHDeN3F5fJFEQbtbxfFr7JX3eCLKZruaCmwCXjGhhtuByTEn2GYfrNV7kgaNVAN6U",
  "key15": "23iji39xRqEwYyNhP7EBSvFbZShiAgYTpjaf3xSbRGZHPuZ5kHfn2kkcVZ8x4QHxnxP8gMsddeABkGqB787NnkTq",
  "key16": "4J7uJKC43ECcQ26LbRjL87EeSHH6GPfVdV4PffLv8YqehQ4vVvXSw76wBPaQz1kU76RtLeLY3vJbA2843xRrhNuG",
  "key17": "vrd4Tmmgt2uEd4uHrzNSAjSE6PXNa15929yW5tvwqD1pKQWkhfu1HpHTvsjxDc33Gp5gyzjZb6rwdsQdnrbdXjB",
  "key18": "5qc7LYr6BDWxGPAwphiu3wBUBDR1QLCt9vEQRYeYu6TqqnvHcWZGEFWAM3RtJkEBRXJc1J2nrmcZog7LJxyunLQ3",
  "key19": "5HsjuEQp8NAWmTULSXbac5cKJiCf5Kac49dqRSU4M6weAr59BFDgzHMXLQ3RoM7BJe4GGL26x4qmYXUuNaafYoTr",
  "key20": "9hjBixdcZKUwTtWdhJsNW4fyYJEhA4hNo1Sxid96oHffGKv35RpzoZLi86dzodZDP75N3n9G9aH151A7VawZp6e",
  "key21": "YL4jnmo4cFsuoT7J37jxGucuDQjN34MnpvPqVTRPaBoUmy3EcFiRXS4C17fji7S8VjTF9AqrY5vg9kALEZZDgQA",
  "key22": "27XFFcY9JtABkdXjvywMpn4xQnt5gokbxeoy4e5ZMEb9r7bozebgkrsQnVkEryudYQRXgDoqnvyvaEpDaq5nzNuP",
  "key23": "3MEW5d2s9f4PwddNXDijBFd6fbQSGyERixRkVdPpfbh3c8wSinDRWg5DdwiCDwH5rfEsanu5k3yfgTc5RshUmDo3",
  "key24": "mvU8f23bg53VQcvqCCNS8LTr6ttVoe1Ckd7vKgeRfLkR9gLE9z1P8knFiwtdSrBZgy7zQJyuiHg64HkQmGvQvtC",
  "key25": "ixuNDR8WXrPD41LBZmbE15cbfZFTTu2zU9e4ua3ae3AcnGZDHXF5LBzw27q81fGFpGzxDsix9n5yjs36nDrM6Lj",
  "key26": "5jCpeqMFBhXN6vNucQjWSsxTf1jcT1652JCXhhnUfN1BaKqZkCJoDRAj7MtA3JT6s2h7eGHqJmsjiUzob38B9qLf",
  "key27": "42SKGL9MbNp2z1WK2B5uUNpMS6TpWT52x1ND5iX4PPEjCmiZviLuyWQSiWnjbB6fLfgBvvd33Ecmv1r12wCYH9zt",
  "key28": "271Dh1Xpu9iqPLJ1Fq1TQf2NCbihPqRC2FSVksFFNYqv6CAAFpxywmidZyaxQFRX91AdREMpMQvVg7b6eSHZ2tdr",
  "key29": "54eLozVUeidi9zyFspaDAUMQA1C5rMN4ZSgGNtdEWgHkHDkC6Yoys2r1NRFC5kpS717QWTxJQ4tJWb8aPpLaMwZn",
  "key30": "kPHKSetNnaZuMszyxnQdn1qfEK5aj4ftjnJs4EGfHEUJCx5bJhKfG4987xBE8vSyCCQvvFprinvSisfh6GatTyR",
  "key31": "5XUvQqp4HY7mMDV4nhVMGxvH2fUe4zXc2kBLLbFtnffgsz1n9Htkh1v1injnWgiEAtbsS2sYGWP47rCaTVgZ5s6R",
  "key32": "5QLQPj11ApAG61YQuZvgp6wqLAcVR4cY6wmQXRvD8rbaekuh8cYK4creWiTqzvwY8xpDsX3hcSeunvYVyY3in1w3",
  "key33": "2pmrPnhrKhvjLzPgwEnasqfdExBqQtf62kmi3sn9uU7B2My3iHc7mBSPRH1w6GAjxmAD4jYrzgBcCDSNHc7ymHzP",
  "key34": "3vSAP692kRou4we2cW1q8nV255qeZNj7zDcuXcT8axuUwAc9z7S5WdZ2VaErqwX8U4ENmJAtEoTYzDTSpVs3swdH",
  "key35": "5LcgrMsgMSwDQPDeWSvH3Wpk2zW5NaAGbR7nCRv71hALGRAopiFLYRNzMKwkuX5e32QReVTpf8DxCUr9NwiwTNtD",
  "key36": "TxNgQUAmS4epSvHy5LZMWEw9s4AZuSfuY9QeFcAAdoPEPqMM1aBueJW8SBKqax5pi7apeyUcYDAZxJtvYS3xyfp",
  "key37": "5M9LECjgkjqYhcZZeiydMB33Va2w5ZgtbrWuoXg3xhFwS28ZHxyDj9ukxfsmx69uLs9vm3ZBY9EpH5PZUCgxcNjE",
  "key38": "28m63r5CT7dVsFDsbKoME9ENbGpwC3tqtgZrX8MYLMNhm2bCuh4GTxX7Hobzz67Y44tMbRBDWjadw3ADKxQgaQXa",
  "key39": "3MgtaDG5bZ1DQ5mZmsGmCPCJuhS3QAvUohates14EYGMZq6z1EgkiqbS25CktxeQxm1JsyUKfBhBbLdQquzZm3uq",
  "key40": "3YCnvd7g9Mz31edG1btQ1Wr96BwbAz7EeqijZqZfgYLqYp8TcF6MXeX3YuBpnw5QwzTvFwXRCHf7ojaAo1rExPga",
  "key41": "2aeNMZmQwNoPFyZD1bmpPpRaFBFtqTUkV96oMg1CouE6Y8oSgTXaHca6APT3A1crJqAhDkYLjb7mjxCM17VKk2iu",
  "key42": "3S7Rxg7bsT9bKL5uRV6UHnEBGu3i2VmEzWfpN56pzxFqDdzuUYed9AAHXe47wyobTXDojD9x3Trg6BsTKHetdjaU",
  "key43": "TpPWeqit6FMum9NsM4sdy4vHK8enAf79uANuHntHgHYGwyrE2cNke4gWiPEaoZHKBd9UdhjbK2TJaaY7gRJrGm4",
  "key44": "2bgjGhXZtXb9oxb8VyuAi4ecvRjJeokNRrjNfwNixiMNx9UhMGTEs1E2KviiADCAzhtr25ph1tDJZBezMWeZfoNs",
  "key45": "24NPU1DqgfjqJxA16aw8CqnvUygVZ9LrGjzZkECUPfBCDDxFgL7CB9mf7Wf7hG18r89TgCujYXZjqBzURgEq8Txb"
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
