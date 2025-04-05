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
    "25fugYpKeoX8uGLCvrhGeFpbBjtvEzPewMuZJECmvDj31KBkURDMQJzkz8kTEBoT9se484vEkEyzFh4pz9kLFtBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVqGosizXPTd98KpBBvtU5nGEUhnSGq7XCtt7LdDB6EYrgNHDZyfVKgiM6bjJhrRYjMgKgLRUC5uRpSc5NyLav1",
  "key1": "5p3X94HEqnQBpRTzqEr8gs5sHtwpmUdUg3hAAg1eGmBWeGwi3C86L16ebUjSufUWAieYECMDMjY248o4WZMdCvf2",
  "key2": "34qzW3mdo5MeN6LTRzrwc6RSfKo11LV68Ae4CFa1FXqGs5Dv64uTBAFTerdM152XeCiG8wU1QV3TovcPmzdHSNJk",
  "key3": "5tqS4m9wBsEsdKtrsUQYiCVWVc13fTPPm28dqkMHwxgto1QT7byxxV9omg6adSJHG1DVrS9z76682cnLG3P2UrRy",
  "key4": "5V34VR6z647ddXH6wekxGxtBsYgbnnq71y8ksQEkLQCT1qpfyyg18Po3xzDsfFLcpxCqACu4tqekCjww3VcMZQFw",
  "key5": "619UNbATg5P1o9ed8MfN9Ejq52WrpWiXyVCzBBWnz8PdrqU9AFuZkvp7D9CERs97WqqW1ZnDWzUbZRV7TcJQfA4d",
  "key6": "5QsBfDWyFFPsZwMsA6ykP1PseW2ZnL6GYBqaCvgcnEirsbQyya81kCYhqP4SAa915ThNvFcBSS4F8geJAt7r9oUw",
  "key7": "WL2bM7FjDZbB9CvcQ1DrMzNN5YKmbW2eoCjHKq4exnQr4M3TVtiWfUCUrqwbuWUZuo675fsRkrjm8mxZEjU5fw1",
  "key8": "2JCEqBYNy9XKsjUKXW6gJ1XFn8LxSgdHayFaU7sPn4d2otWvqeB4ZCnjujnUdfvvsW8P2eCWhrSi7hgzArbV2oDv",
  "key9": "DTK5jNLY659utLJ8iRa3xi4nXgd38CbeB851nZ7n5sDbB7mSAQxjURaWkMh38SQjr7QenvX7mJkVrV21e4zmSPi",
  "key10": "5MJqgxhXfLuKyWENJXbNYaGaGjPgSRkZuEnfRM765hUXjH1ifkcbxfdPUx7xtmhz54ptFqPr6bxALsq1eBzsbXdk",
  "key11": "8gXfKTfDBwPCeWuLB2hHYogJfyyHjGbTMDWArixAikySkc9X8oWDA9stXMF5HQufBvW4LaLLWRHsWocRd1HEuiF",
  "key12": "5vYyzYoX5anZGqdkEKoqnn4pLSw1WjYQdbzVH19eufKskrEMQeRDZQZdwCNPBSaWrWmFMYQB1quWtuFotAkv8nC1",
  "key13": "2555YcuogQ52K1ktYWvXnHKKaauLVuXqrzwoU8bnE6KpBZq1d6PqFe4ViNfFAex1BfLyZjjbG4tL3oqXNDGfrtC4",
  "key14": "5f7WgWF2EHjm4QwVeAGReABQr4wf96XG9YPgt95sSBbx7zhvjArmrvdjv9ZpdmKeNG9AmfHiLqMbL23evmvsb31A",
  "key15": "3PsqcfVzL41n96Pwj1NdFMVgqZp6jZnRrLKNA2soXXpcwqJYNYJLnzhk7FMJGmZh5FpGGTwZwWTAXTRPNFtJHEXJ",
  "key16": "4RmVoFxYvv4pUZ4aNSGsvb9av2Q1Sa9g1MCmjsJ17hKgRZBuEibaYoYFep28oWdZdH4iHAmkTf3HyqBuRZPWU3VQ",
  "key17": "3zE9wds6y91oHYgnGufvMrqKbazCtymS1rxN8ptz4sKqXXLXDqA738okyF8x1YrBY9H3Gg5ov2EzSzoz4Dfzimch",
  "key18": "4PBdvGTYSZF9tARC1T1Eaees4fY55NhzrzoBxmPSya4uhMKb46Ro3HCyaF6LPaTWsPYsUw7aADr8RKwPcJgd7uQK",
  "key19": "64PF7w81hCprRGvrPzfHihb337aCYWSVY3cAt4Bqfd59dEdrcQDXgyTHbuxQbX1iCz3ESXdxzTUxgypGQwFuXZzp",
  "key20": "mjz9bdQW8XUKx2XiSZBcLcfvjaNhVokAYfsua5ehbwHeNcW5DBHwPvoVJuw4namJbeYK2aVNEkdpf5qEDGnvaPz",
  "key21": "4o2AKQNhvrHCjYsb3m1dhNNSb9MDiaB5sGZZczuMdiRXbQYvo5dRvTCvNjonPdfH1g55Xua2DTXmTtQy2umiihrB",
  "key22": "3526kg4A29rZdbnH9e82EGxwWheVEzTCJG9tBMYrWFVC9whdVs7U5rbnt92zaoiTut7vqc4f5pdXcoqAbKqCGckB",
  "key23": "wbRYqcae6JXARdUQSSuVZTS7kK8hAU4wxZpz1WozSBJ8MCWh2hrgMs84qWnrEU7T2io7KyknVPUjBC67tJB9HVP",
  "key24": "5vrx77PJnPKXnukBHZKxdaCFRGTzRqyw6oPXrM33dBP7gkwutp2m8Gc64xqpRY92oFaonpRB8oHK1eHdkvZcv2Pr",
  "key25": "j1rX6TaSsbDFzVYrVphmm5WfHEeYdKAs3vcjh9ULG2Go9Xf9Hxj4AU1Q55G2bWC319gcGH5uFNCFzjbwLukt8a8",
  "key26": "3uoK2KAJCPcJk3LDkCZAKuvmCaV4dc29UvvihpZwF6L8LjV689bS4UP68shcYxZEh92q1xwxPxAmu3WuNHcKiZYg",
  "key27": "28X53jA4TqwS8xqHLzpLd7qXBWHFoXLCGVSfeadx5HLKJhpZd2z2Ybs6M8mAWXPJqGbHzRefa6ixvyQFEzksjvbb",
  "key28": "2QeiT2TkBdge85zHQDs43yrohJ7KmD9aRCQYMgAwFqcxRnwfb66RCeJRZKDZW95B3jbsrGo68ouPjEz2PGmroAMg",
  "key29": "2idBQpczToLxSPbELUeh9JkvzAc9b9bQmNdFbAkAjaaXY2XmjKpTJ9rMBbtdJKa9iUN7B23kPLCxhiKkdrJW4jLQ",
  "key30": "5duT5Wg4YdGV98a8TZJsB9AXcun64LRD7tTauRMwAqQ9hBeX8ZdaL8SKW9U6M3insN71nkWQbs2tCtpq262Awaxs",
  "key31": "k4TaeuEd9hNvKpq5WgGbVhzrkQrC4wp23ZntstnjWYUuUJERr5jqz5hpZgaoeTUXUYFjtrqtuJE3tW7E9itWaox",
  "key32": "m6e6Xq7NZ8hypURYgJXxurzUqdPRZsLrbAwbC44NUqp4ASVqXRK1ExpyLx78kXAsNBJefVudZ5jvHCc5HiDtVMW",
  "key33": "3LUtf7zpJgRPcvvWrh9ggvTJsftjUPTgkKkDqo3QT49fdT1BDiArsvm3m6nuyEntmwHf7sYrByetZBu9U47gknDa",
  "key34": "5KovVnBMUcKkhti9BpeALvosse46hLMhafP5r5J8un2CcGXzZRHVQvB4eneAiau7QRWVGry9WUEAXexRTHiEUkBS",
  "key35": "25K3BZfZL5FJ9nNL4qeVLMDLUbruubr9xGNFPVH7xhEzSuDfQRvHWBUENkDJePXv9N32dJa1T5KZe3esU1PhGxZm",
  "key36": "3XLRDMq4N5S81c8fwDRZ9MJ63ro75eMQQeYesuCti5GQSphtzRCxcrHTN61m5RfAZRFgbwsctpQFbFBMvd7ecL7Z",
  "key37": "5VTVwgVBPd2rkGSRHRSAKFbQbu8xanK2iih8M7qBBuFgVyAMfPiLpbdwrfrD5g1Af4gjzfc7q4SkZoS9tKcSCHvr",
  "key38": "4WMnkk8mr11KumhRBct2oMA1Rn1PzEtdtCH3McPKsac3koXYbSLyaFQzcrm77oREaXpL82AeHrZmpFLZrzZQZLyi",
  "key39": "5kSZQ1kAN67PEUEJKF1uS48NEqnncpL7vLrxuXVMbATEGfRtKvK1ihYxNDznkoLQT8ycjUqSnevk7fhSb32dpSdU",
  "key40": "56fJCMaqdiAihw5UmGevjcfaFYJJ5jK64emuMmPQ8oqbUEAT6adRsJpZbvpdNrXfy9Vw1n1ezmd1e3Ax76euv5TA",
  "key41": "GoTCsxXFzNtvBMH9oU6yqcSrHfLbUgk4hkBnbjipKKVw592eituKGgkvyBZjRYAcx1DaXAWRsoj5eK1osbmQxGn",
  "key42": "66uVMkmWa34ySQiZy9X6AFpUNeaRpaaoqQ45hR2iBrpLLPTpttRjJU5Rs5FA442xxTHLxhhU85hnf54GF5bNNi3b",
  "key43": "PBjqWTWyoRXcfmPvMdnJs37mJMAuZriHdgo9bSEDw4oMX1VUWo9Z3rAUxP4gfHozAaM3QnDGzpXNrXdJ7jgUExM"
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
