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
    "3USGABgupMB9Vy4aJuAZ2ewaAKySVWr8vfdQsLgvEkySCHYMygB1gShYThQQXaokqHNahmXf9n6B9JenknzpRW1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65eZy7qxSkoTd1foDcnYJg37PiKSRbM4SZKEv1MjATkCsreA7j34C2pfFm5NPGu8CvzTiqzJsyWfawpswFFkQd1f",
  "key1": "647aMLC7Ak4fUX8iqstZ92yWn161bKtQ7K53iZjSzcaTXLmvKrgXSwxH11vrJ6d1suszvBhkBw9g84H2JsSuWtwJ",
  "key2": "vLWfWyiBHveVp9smd1xEFUET5aGCDf8W4FFLBYwtCG6MASjnKHSqqevtzawAJBELHSg5zGHtx5enH7EYzzKfQfC",
  "key3": "2ntwUEURR4kx2Nxc233DVjKVoHbC4sCBueBQDWPBzvatrhrKtRRBj1C43DVEUiCz78eeM4RkL4uArDF9CABriWCM",
  "key4": "86GzFJJU6ohygTb5LXtGoWWVMZt4ESFMNRjQqdu3CzjH2Cgwyo5HcW6n9HQSuZhPJxo9Ur99vE2SyjJbCRu266M",
  "key5": "5A5UMpHnE81sxWZ3Lbm9bzKvJ9EeEHLoV9NVpfjxXmRCa3ZUD1Kp8c4Yk3kBQc9a4iQ4VmCiAFVLWPCJTrVZuKgj",
  "key6": "HaBTmFdPa4KW8x2gwkzS5YdtJrofKYzexxXYaqf1kkj4b3ZsSHJDLuVCuDV6xKceyJjM4RutRyHxgZhaPHCcVMj",
  "key7": "66cLFVNyu5KdwVKnrgZXCVZrLDzvwGQphJtbhF5Hk47qSpDJKoE44EMDA9vNkRf2tM1hGrCDv4FRhjtJwaeLF4NW",
  "key8": "5izaFApn4pQ81JigMcgiZRLBz1XwrczPwtg5bbjE6S6pZvRz9MBu7K3ZkhNmnf4o5jTU2CJxXtv1f8uiXhDdKCYo",
  "key9": "5URDMgUaHyCQtwPpvFnRtYCm9JWryWC5o2rtUMawg2bhAVdseWEVebr19EFgBonP4YefLjMArbckcKftSRhnx6DS",
  "key10": "m7SZ1mFq62vd6zKg4YLTAypRNeSPYWsLuHxUyf3G9LYFzXMxZefBko4V5d8KiZ4MDGBLj2SknHDQJ3cXqJQge8A",
  "key11": "5DNx2zKe957etmuGs8bvrHKo1GRoEGp7MUqF65zSC2dVH8BuYMmx6Wyxngb6hBmXX8Lvsh38GqMbCPN97NR2Rn6B",
  "key12": "KeVo47S1AdMxXi2Dc1qVKnkekDyKmaLakjUjYroQWp4MwQARK4PMebvB2xK2kQ2StX47dywKDoNHsxJF77QQSL3",
  "key13": "49D2ZsBVzeL91RhNK7HdXs8QizRLyxvuxizxar2jZ6oMPPoQfaWYTxCqaquB98yirNQ6KQdFJbbKH5zX7ChQxSot",
  "key14": "2MT2ZC2oxymeWPTyN8E8F5K2QkUrxau6GeMgX38WQREqSdoCiJ7bYavifPxxeUcB3PyWwZb1x3We3qz3WnyWmywb",
  "key15": "nCqc3mBtH6Wa3sHUnWX2F13JFNg7dtEdbSN8jZ64YDNYr1n25JVAMd8KWQRYrcbfB7DKSNANa69yrUPtFqP7C8j",
  "key16": "5vuxCC6ByPHzKbCTTqxQR1RjwWNenk1FCp7aDj5vBKtbCsTFVR7cZ9iYRh6UzoUy6pRHXVf1BduE6xi8Y1fDM3uK",
  "key17": "xx2emrE9ryvHdNh12Rrb5x5zw24N98A7ipAcvaGZUFFjAuDrxLCiis7Gyc1bb696D1kT1W6skbPDdYRnw7jYuZh",
  "key18": "4BFiriL2kkvDjFZsoxsMYTWrhXMN79b29uZgeLqaXJfadNSQ8xM8zRoWwjKUGcwuosP2Pzhao7RmEqtWhgJKz44V",
  "key19": "2RHQJ7BvPs7VRFQLPxZxsZkJj7Tu33BW4biGrnDoaw4CsqQJwkJ1R9fxMS3uo4sqs3xdWYq3RkEMNQwTALKVixrq",
  "key20": "8E6H2DabwcG9Fk4PkXCX2YT6ubpd4itPX6qCrAbV73VzodCejMmZunMT7L88XTHQcVEJXj9cJyQyWALAfohB6eT",
  "key21": "4p87fvbDbxKwSyxW9j8bBPSNUtGBTow373G5opx4VC1hXU8Eo6afe34T3C76r58EBaRyQYxMgAJFT75FbbtH3dCy",
  "key22": "4cSZi1ZzThbjWMvh1yaW53cLgNdCna49ZRGD4eiNdwD2eUCaTu8xwYiDLmEDct9tQAGQR1cc4SAj7PCm9wFyAFMc",
  "key23": "2tRcFEFZV1xwyDfQADnygEyRYY1c6E3VS8r63a2zSzq4bzxoVitDfpSvmhbnU5U8PpqB5KkyhptwEnhHUxxfzcNA",
  "key24": "xhrVEXxP2NoHXE3vrYfpP4MJCpitkkRcCY79f5qxL4R7qPQ8GN1AMpcbPSdop8TmdimD3UBeEL2xRCtGvW29mR8",
  "key25": "5ixgWfw8W6C1TJK4FTPrt8udQ3AFdLtANDU6zpfr9KTSDUhFT9u7JJk7wqXN4udDqLAt9jSrNYFHgzE6bw92TXcL",
  "key26": "fCjLk4TBSNFxm1jcmC3zc7snBpnHceCtwkRxnXiM5KsBcyZuqReUFgKNbu9RUPEoopmiiNa4qKGBeZpkmY7ZA4g",
  "key27": "4vCCPwSnZHP1Rw3pXn1PjoQbK9QMDC2zP38PJ29CzZDyBCgju28ZhYSSDpahLU6QqsGWN4vYijgasndimYfYVKaP",
  "key28": "qHgwqLZTDHzKQGPUb1Hc7yTyDiV1zhL3vomSJfromCkzbJYZVMHK5sDzjyvwPkuY9KzWFPDrg6tntoS9sAH4eN9",
  "key29": "YhPqzynjdDAjuojZNVa4g4duxzFfQfUJNwVjdtas3N81qp9De5eex345N1M3Vho9od4nitah9Gh198rgqGY2HAR",
  "key30": "TCvy2jVJaHdDHc4sjKTzhgaTPLj7r5tbNqjaSoBsqdbZ45VEujiKH11bvpoZMD7aYxkvFTnjVzJf1bYQ1SR5W6V",
  "key31": "5L2PiNGc8FUE1hqPEpLopc8PbRwCMKaoSzPjWp7J8ryaggsV6uZjK2E3aUsC7Wn4jTVGWTujjMDFkV6rpAUrDaZA",
  "key32": "43J8T8XSqmmH6RWwQi5c83Qcqiq6VBQkHEGeP8rJi7d7C7eQUUNPR1tefF6eR9RdaQFU2UotgVCUC5Au6hVcy8i9",
  "key33": "5L4GAbE7VwNH4eLztqJfwg7z3UxxnsMn2dygQAS7ja6kbvMFLoqtrKg8iwtirMPgSPXnnytMjMZDa8EGZQSQaCA5",
  "key34": "38N44nQa9DomwrbTTwu336EGoyG2Cs8TGUypSyDNLtVHE94Scm5MEGttgLyYCiEZxsrVy9DkABEpdyDwR9HHXLqK",
  "key35": "574ZmjNzBa3oYN3ghZ9RGbH1Ec7JpAgfV4XiL1J38ucPk9gEv591vz2cZGvLpq1t1WM4jA11RaLRauoFzZW3cdsT",
  "key36": "Cz1rGwjh9uJVo8E4rSAuuY3RnReHc2JQWv7rhcbhVeP4KaCpJbPiPrQmQaJs7yTk3N1NxHkVDdy5wxsie6cUyC9",
  "key37": "5BG5suxc6HxCPvzdnRBqDyAV8CaSiFGHvSQ5Zr6ixuFjg4RkR8H5tqaAzSeV3QojdgW1szVcK57o8zYSG4XD5eK5",
  "key38": "L8vU7d3j79ciSqSpGMYyzDLeY2MrrPzyRpbTi2WfkibSNArmvHizLhyWi1KPr1txJeW6rpaQQ4MTvpo5eee8mc2"
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
