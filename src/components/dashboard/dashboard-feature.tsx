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
    "4ibrUpkk2rjGtQWj7ygMhrxGcBeF5BBrZm2C7oDKBqxk5YHnTTjPhymTQeXYJV2dbaCLUmFYfxiNhUtPnE3WEinZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNuzgp4AsBEcy7vDgn1BVdUrib8DnceDPveYJH2CFjwsUrrM7t3M5dDp57asnFnEVAvHnh3PfDavnzG6GWqdyK6",
  "key1": "ntXyfxNFz7xyTN6yKnV6EqTzxNZ8FGcxNz614ddV58xAHS1ZjwX8kJ9qSNP3Job9dwgQ8Vv9Mrf4MSMKEf4trWq",
  "key2": "3k8cHXHU1TQMGfujhpRQb6as2idRyPiZt77jkryom5CWbCekBFDt8Cf67bgaJCsPCoXj5A9fKJpxuUrczCCxiGqv",
  "key3": "a5bh9f3d3S8h3Ke4rEk1ZqukS4saMsNPEh2dUuYdFFR4ENyuLFMmRLYS7f69qq482uzLDywU9vsBSjd9NZjCJof",
  "key4": "BGRpNJk77XFYd2S8jgbQkmLkujpwtofvUhUb8kyc7rsV9SLc4c8Ex5jmAufZURPE7Jhff2GFoG2fUYTXNwQSfN5",
  "key5": "3XMVGsih71ECdP8JTZvQz4ywjLPkSQGPhamQd1iP9XY9vpcSuu37NaY8hQpEmstuD8ooLgBR3eJ1UZD4tVggxXk9",
  "key6": "5BHdPC6L4pMPNL6sxrWpnyvuoewRzbv1WbWQWvBTQZsJQd47X4wsidLe3TxQdqAziWoPJoK81196uYewNAPvYDPb",
  "key7": "rfnYNyPYRmuCMcPKieGt5cX9kLFbfJZ3Uu4cKXPFCxekEN6t47TbnyW5aueKhFfVgcCS2oynBeaHhNbdYWDzmFq",
  "key8": "3uAenhux5CtZb4KEvaBZPsYb3zctgXgMXVU3dnNTkXNDDn96BNnYYkMdZ6D8DHDv8NfyX55vF1CF8AsaqHoZWhfW",
  "key9": "2yzaYqjnmLwR39oJKd9V5a8YzccXedpoUu6bDQMSFdHPKhhWqfWC9VbeXuMgx6akyNZL5MScKuBpeiyC4RzAiza1",
  "key10": "4pgrHpyeTnmLRH72mLgFnZrhbUzvMVZ9wGzkb8DsaBdTrNimaqMJJmKuvN96TDVBWUPNKTL4n58uHiXQxjodWuGK",
  "key11": "BfxcMsAy1rNJVxMEF3oM85fVHkL6SUZknT5uZc5RwUWMYQBPQVQ3fmKtU8LzQJt12V4AEwwYUYL75fuVTYoDtyq",
  "key12": "66sPbbW22ePzHJvKkrAX7yQ86aWtduuFhJ42XCWcgRPN8T2e7YYmWK67huPLXHJUSyCVgJhc67HuRPUSPS1My1W9",
  "key13": "zzmAegePyYYEkY3hQYBpd12UuPPyQBDsUvN8hCJQAfD3wqBgdWxguBanMJw3xA2BtCzKVWMvC2B48KNYstUMaMU",
  "key14": "3n22Wa1hKoF4KTJ6t8bASXN7LaHTCtMwD4HFW4Mw7yg66NHgpf97bTCCjAmQPQRPGVQ67WUd9qB42S3fKux7ykdH",
  "key15": "4MPR8t3omGj4hcHApRHb5rWSxAVbMcsmnYVdepLKwmywaNAVsz9Nji2w8s6Fg3jkTdqhiPxB1nL5yi1ZVgWFPAzh",
  "key16": "4FxqxFSvg4iCMDRR8xtiU4GauNgoHGaYPucnXy8xcHgDQT6NbezUfd8PZqdo4Zv49WdWA1F61Xn97ThxvtvLWTga",
  "key17": "5iMXJrj8SdxsnUPp5A5mWh3q2Zyoc7YZiQbiugVUzHBeXXuBcJ1pindQtAHuhtCwNsSzxkzqUU4ERvjsCwL712CL",
  "key18": "4nLiKPwwCw8qgYvKMkVhD8paKLL6Hy63ftdLdoHRhgZKmrudY1bMz9dea24e8ZunSRcR5ctEdxobymbAbKh5WBAh",
  "key19": "52WqbSBHCJPqPSunPC5Ue7GH6vGpeUMXM3VDuqji4Ak7eNWf8iKg62HAwtWPUULCfZ4j64PzRKNiMR1ArpeD37pK",
  "key20": "4wnsuis8JqQEjDh2AEeE7bisJBf5ezRKcaX4gUSw66xbDxsiFaYZQYmbyPKMyteA3LpR4BYCDFjeXiNi9GeWTBo4",
  "key21": "3mQPgZmR4MGaLQPKRsBrV9RDaMVrJ9z9C5gcfXP8X1sTVtr86MDmHHte61BSZ8T1YgRDPZK7dRMDEKm3FWmGRLeN",
  "key22": "5oWKL3PfZDYi7Em5LeXgQu5PJLJsTWca8hbPijgNTi9KJxgeuTfkAG8wTU1AytVN62E1S4YMWqToZhCEJyptTwen",
  "key23": "5LVLJXksnLpS8z2wWkMb4zyXj4RKbnqfu28gEgbAWwkHp2LX6baQJorvTFB5CD2NHLxQgaHR4tCLzTcc8uFfkRP5",
  "key24": "67Aserozue95tmJiokjFkhzRLL5Livndzt6CT6YzPTCveWyG9XFUeVVfg6eFgAfEXxvdNZbZWz1hrGksXY9ND2K9",
  "key25": "8scyTdFnnhZmZCWs5VaqAH1JzHY7fyiDokRWuTMUtXCLwpQKS25pk1LNMVZcQcMW4TKJXrazkRAvJGDLaDCKfpz",
  "key26": "5F1ydci2Ns1hMAmZE7QwQ7oSsjhUQPGtpHDpdGagPLRk9Xxz2v3jxgrrYUnN6eQSPYGJ3nt6KhPPLLuZj8KrLVBS",
  "key27": "4UtivFUM6pEdpRYNQusaWPGzqEg4N9HsRRakkv9DEnGUhjnHL58HiNhLLVKd4AapLPdwbcH3bbDwbrY8KwxtbMdr",
  "key28": "58SWDQPytWPVi4SCpyWMAJ5rRDXUtBrozwu4sj5hvhmy36EHGNszo8JF817gQHu3FiFLu94qjGrUatMCj9qWFDVS",
  "key29": "373oJd9qoihaWrScTCa5PWJ2hSP5Tc1HqceH7oruBcd3FjnFTBX6ALkcRPEKywf8zMPSiRPpE2ktFAztxy76QHD7",
  "key30": "PFcWyASc7s3tUm6CbEuhpDfweQf1aH4ERJWizktnFft6KPY5zruat1khcUNQMWqbnXVQJSPnaVRYHdeRmyeENzV",
  "key31": "55kEpxtDDYPMxSee8kUxi2skNRii6AafHQ6L7YxromhDSeeavdMo7axjDor5t8D3TJoCpAcGfpijja5P2M1vVK3g",
  "key32": "286z2fM7v4xo1SwUVzTcnqWc8bKbDk1kZCzkSKKKKeBsHTvCNYi3Ezw5s9CVXLHEw9A9omp61mchh8mtfe9yCZuC",
  "key33": "4CSyn4juYDttXtJTo9U6gRmtAdR1VkT2q8bUASrDYbNAjZPQ6fT7vAw2uChbQY3JUsLQQANVbRtR3PjA7vcUfFFb",
  "key34": "4oLhwW7QmNf8pBDTpscpnKiX2e8qzKw13pnbJGyx2MCA4GD7LtjuAj38ybQm1r5fDfTfKpuAUks1nBu8pWFN9S8D",
  "key35": "3pHEabWxoeiZmMARqUXM26CkMRh8gafpgW3BsgfFrHu8qinPrsgswECjuqjaqQqzdSMqiUEJiiDzaSB3xi5q194F",
  "key36": "4CPBL7YLsZhMRsN1PPjANQnzFZfPoqgkKUKqPYjVcRG3jhrFxCjmPXyvZcFoZddEec9k7joGfmjKbbUZBBdxr7rf",
  "key37": "CCXFf7oEJn4d4RdmAYJviiw8f6gwuejgpwkFvdXoAQwLbWfZvq7jHF8w5iWojNxutXqcxMCqFdDYvGQpC7VvQ2T",
  "key38": "5TiXNT6533uBUUjT9ypd7rbe9TAPc5YC9qPKu7bG1FJVhvmp2HpMDcpk6qvsDcKTnuv2NWTDf8EBMpDZCoe8vzYr",
  "key39": "4xAb4qefpuk332LFJoLdfpY3tcg1pZMxmTB7zN13cCYp1qid3j5Fx7beuFSi6VjPA9CssRH1T2Z3YBvQ2h5JUNsg",
  "key40": "56zBhm5zcMp1MWcGYC43uLER8GMbqQY8dPXp9TUgLjwJLvHGBKhs18HrfeaF5vSfGQHHfPQfweLH1WyE1XMQs3Jm",
  "key41": "4rGTs4ksoDCPHKkHxBQisMxqBbnpJc42SLv1gxxsuhspGT4LHeVkdewiGd6CeoKmx2njqWKoEv5YsDqsXXcfzMda",
  "key42": "4dKK6sKZRmcTxfK9ydyRs2LBLmZeqrZtZtCmDiNmv1VwJdPAReUL9xTpPikmNeCb26TSzJcSDUCUnEsaWXw5vH4k",
  "key43": "2iM9ErFDf5WrrJzhTuc7k4KJMCgemCudkrNFQBMHioDkZb3KL2GPo13Uf1AezGbgN8Bon9XEb4My1xqNjYxibGqa",
  "key44": "Zw1s1bWPGHWSZuhsj3FZnG5Di6Kuz8qVRhe7rdhLHGXR25SQNRXBAufC4y2D5rCT3A6PPFoQ8SXctumoznHShFR",
  "key45": "4dNg831ADQpgqm2A7qxV2XEvEHztY81aTgLpKxe4kedNY2kUFDN9mq8sVu1mpzHSW7YHyp4uMbkXky81QuPyT4Wu"
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
