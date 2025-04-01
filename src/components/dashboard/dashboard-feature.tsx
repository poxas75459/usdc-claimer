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
    "8ECGYd9CnoT8jEHPUKCzMi5rbd3wnjuRCWRjFLbryoHaocwEdHwMRCLVD35L1xzt3ZtyLyZnERz2LGuPbmgF6Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YydaqUnuPXhvH69xow8eLYHi3UhtNfJxCa1JiHvg5kzjhkjSEwJQS1a2goqxqDTp9XMiD4JKp9V9c5rjxyjjXUP",
  "key1": "2HFiQSbg4pcJgG12QoysMU5WkPuJaoHxyNNWiLRTmDpvnztu7h7u41bsV4CDJDrxob538ubgMkq9GSAz5Sk344xB",
  "key2": "x4LNVtHu247Zj8sGzPhqNDkD2iYfys2ynzNgGjkkvcuksBLkcPP26DdVKJKZ7Ve8weiFHe44Xt2tNzrPqjmDJo7",
  "key3": "5wgTTj4SYb9xE9dS4pt5imoz6NumNzS9b5Rz3TM11TPps2XcXnKdMgdqApKURt817dESaEmo14i1M1knZDYm9VbD",
  "key4": "3pv9HJeMuiJLNVMF4annJvPWFZDP4Bv3RWrBPt42JefP3W8eypPMfr2qokkzYDffAipkCZ7ftGDPzwNVVfdXMHPd",
  "key5": "4Qsy2Mk2De1jMdLpC5appMt1woCNUUDKNt1DN1jwhYU2Udcq3AfQajC8HxXorhbDub7L81b5Ewz5LNPaEQk9WV3i",
  "key6": "2eeSF3sQt9R4xAVK2ymjkEtw4f2KcMaiPvs2fBD8PkhPCqoSLmnhKS9tWts4EvHntEZLvtiKhzyon5kDraUuvPV6",
  "key7": "5Y8N42r652XGTtST5HD6b5BaZiSrubAssvVbQY9eyJHiLAx2XyzoTjtw146m2nAxta1LVkbWBqAaGn89spBXnJN4",
  "key8": "65qL9uCWxg5n98uE8PMwxeJ8GoneYREn1tQSce6h3sbxfSQcCgLpJYbCpH3aFMFV6TLvV6hCFvUcNJ4Ygg4E2txj",
  "key9": "2bBqKDC5y4sAXGkeE2M4GrDQZnZRJ7KcQnQn5KsJPWisXD1xWp5casZAw57MeUGqKi2xo7A79AfFU2Pkdmxty9A6",
  "key10": "2bcDADWGbxr8kZ86yUuLBKpVxN6EsBdZRNFst1DvegJifef8bG2r22K7CnzsWodisGdf28e834memqir5kseMLEo",
  "key11": "327NtdMJA35DBTdKQ8MDFBL9kjyfEoH94tLvycyZXgeU2ikf6kW7QxdyZgE3CG41sgZvYfrvdaDmycgRZ3Xd4EJA",
  "key12": "MMeNJUBcNrUPz9Y6Dk6H3jSyxAHE2PANYFK5Diy6DUKjKuFJqLeaPmAH87sKfQyws26WSHmAcySszwej51Nxq8u",
  "key13": "VTYpweXTCkMCEThTKQgcEA5bSXTrm5RPryw6TJTAGE3w9dvUUamPbc9zQdRVAASEyTG9C1C7qYtPsW76zg2gZWy",
  "key14": "4aBbJ5WrZZPDV78pNeiRy6UVpMeP6jWBJDzEf3A2U4wcia3rzVY2gRQJbak7XkGUM8wJLjAanWaSmNUvaSMn4kD2",
  "key15": "5FJZAoFcRCr8nkuxGetdZYuRHxU4YNHzdnmGo4UAAeStnunAG3Zgk6xUoCFTauUv1RTSz9GbnXyVxCUbEeiJFqfZ",
  "key16": "2EhzeS4fkGZ6z58Pb1GSWfCSh9rAPCRUrUhHX1GApa8NTFdGG5gtM1Dn3CfU4fxR3PfTcexa14gU9HwSAnAJeL8x",
  "key17": "3uA3aH19NY5kUbBihQCuhZMNvBH1EA26puojKeuh3FouGCHqyV6AN9smMabdSWHFAs5a2Tcoxn2aKLatALhG98Ap",
  "key18": "46R79536cVHrnq8afu5dJ61j27LFR4JtWdaA6Ntv12ctcyweWF8pEfYXr3GBud2hxtd9MbtSqgYc1taKjs6jBrKY",
  "key19": "Yi5ydigU1PJuhiF3M2J8VW1LCSSoZEjUfVbZohnNJHpFzGkTH1ubGh8CU2DAjUqXnMMgGNXpnFkU6r579wApkKz",
  "key20": "4FjUpThatoSCq6QL1HJTvRwaDPEN7Z2DQ2iQ1shtTzmtdc97SkdW2sDCHnRiRNyX8pFg6AVjasUbU1CMdR7miwgs",
  "key21": "9Qgwvt5kFQSpFr9xEDx2GJPUQKvxsxh8B9AJEVkAxngGSdcZnRqLMj3cyuZBDCCNSwNqNuXTNfZCXTZiJ3MvDV8",
  "key22": "3nVwrFdBhxGrAhixgzdtC4ijtTbVeoTcq8Zq2Tgb2U8YsrTsM3TsaUZeSE6NRCsuLFxyWAr7X19d47pCbcN2SBPk",
  "key23": "3Vm1etuvEewY5pBiEXX7g9oPJY4d3zJVGY2enXhYUKfwA2E16bdUbDQ2V77hxSpkyxMGCLF9YRfroeaBuLgVvEAP",
  "key24": "jGQ8zw76Ns6EfgqT6Kj63EVkmrr3bnA3ziqZmAjHjYFVGF8ndtnMoX2F9BkrZSzrxearkFE6N4JFt4i2wZYMmpn",
  "key25": "gTrcLCG2cadWGzSKDvCBVqqBNc1WC6xRTWiCNPX8K3CTe4EPtBsi3jeYhiYbUCfL9182x7hEMCi8JkwxMUrkp5q",
  "key26": "1a8478WW3KAg9BbEp1XqnZW6JtwkoACz2gVo1WQLZ1dhHW8p9fGdHByFQ5fqnuiCU863grybvDtpykzWusudLyD",
  "key27": "3AJgjQoWRmPHs9dRCLxyn9qRqiR2RehwhJDJYEvmqsBWVqHrcTNfjLZmFij6TzLK5sZ4Ys5F43v2X1Ydhe29YeXi",
  "key28": "mTptmKSmCJqbgWP8KQQmYmGFtFNjRjqCzXPQQA74L9DdnUgu2j82rWjbHwEo1WgPYKhqojRbAnCzMwEkGtisnAN",
  "key29": "iBx7LgpD4EKAseADbFiZhN65cfNeMCf3K7F68LnT8ogfVbUUk3HaSXDMM7AnSZRdtRxxwvirQEra6J4mJXNfZPD",
  "key30": "4Qrh1ByuT1sU6tYdj8CwUC6wiFRumDEQ7eapiyGVkAn5KpxjYyzUZNmtdKUqUVctX1u5YCwm5DDFSPDX8vkcfqRq",
  "key31": "4GVE5WPXQexcQeej6227oC7HBmrFJBzFVwVuabcHyCjpvzoHC2b4nGnGsjeGsi5SYwVQUA8EiActEUAZqss6muBk",
  "key32": "4p9C3q78T3yC2YnUSuNWyKtwoQ76RyfyAPwqLLQuCbhkV5DBpEyi1qBjAAoUUj3LwYPkvugYxvw4XKnfTMWJDbxR",
  "key33": "573Prh3r7TLH51v69DsHCga1QButCNmwfHiNt8DbHaj7h1z1ighF6twf9hvFPueDYxiNJUShn2MgsQen5QguhyBH",
  "key34": "483Vfp5kCt9M1iYFmdzRkfVkVN1zie6abZUTiTzyTVATehqEjhr86sVebUgRKaXD1d7bP6ssTSsdQiHwNkafSjka",
  "key35": "kTNJCeiBgmvqvUi5et2ubK5BcK8YVVa6TKq5HjRqhZf4VzsCDDCsJ7nskQKrRrsJr2gad9Cgj6WvFPnxhSiRrgR",
  "key36": "3iXz11MTMAm3FCtwT7v3ziRfQQSN7uDyh8vx6q45eGwkDeh4gWPv1jhAiUtZufgMjf4BkEejrskhnijQ4iT2HCYF",
  "key37": "3desKLTK92EhoPEMCWTQKNMjhkWiZbLSwrXgtL3gxH56AdsPBChK93DNgSfFpazcL9LKBsRKtF98rgrtFE1ZHpWB",
  "key38": "56C6BYAXTuaPpAs4AWwTGLvGFeUft9Jd5T2nPRHgEKJYTg8HB11sH3Bez29tCPsbvp9eyCDGZ2kyCKY4zKnSw7PQ",
  "key39": "2FktjfCyTgp9mEQfG8eJ13k34YN5mi2Wq1u63idV6cxvPpJ5eunVk6ZzLhVgkrqesZo2VwpWTtceMBucowt33iMv",
  "key40": "5GxEvHp3SDw7LLwmQ2Gzn86csJ4BHrFGNeqoqZaSPyEZKFqeZT8eWe1znTAPUiN6eJcUkPpiJica2YQSpoHHQkfP",
  "key41": "2PNnAqFZTSNGEKzjqetQSHtMTtAK9RuJw7xQqjyvn9cv9uUMxFAUjTELQWB61aJtnz7a7pqEGPVDY1XZ4auE9v9F",
  "key42": "W1ThxDMeTP5BswtooCoWZNyYcuK5vPnNyA5ywVvmJqvvzFjtAPrGfY4bW8JcfPEkfD15fxJoNaRNmzZwMPmKV4P",
  "key43": "3azWSSTtx3GsVhQRYfYs6pzGyMkpmES5ssvYdaC557HveMjisSwdMjvFWMusnoq8KVPjQ2Ru7ELzUw581nhK5Gjy",
  "key44": "JL7GgqbvzVZSdPXqRbcaEakMzfBrSENCqt5pZfN3axisU8KMGywU1QBBEpz28XhbufjribVw5eGbW2Na8V6L6hB",
  "key45": "2zdDPfwK9CQrdcS73j3MniqjFxKi3z5pqksJDr1mxe5TzhBk3zo1LHDHcKfyz1mMcPHsmej9ifRskTmiJTQrMSvX",
  "key46": "uRCXeHn78Q4zdFcbP1NcxTKPz3caUxf6PdjMHJrybPi9QFaVGbByJCu93NAZQSQiv2pbAYRenmf5n8FPqCrEX8Q",
  "key47": "28cDktwHoTgtUtrj2irr1SgbSqHHn9Tehnii6DyaoYSu8cYhpcyDsQpqWaGtSKomwZKsbxu5fXzecNVXJzgVyiDk",
  "key48": "4ABG6uid11dK76XJ8ABPPgW2tjRhYzNsNtt4ngGqHmMCES46FpaxemApZTzmTq58i27nDraQkUAWeeUWZdz6vASL"
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
