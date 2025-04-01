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
    "58LWsGrY6tzAe6XxyH2TUQqUqvMkNYFw5rgP6dsKXmWTYh8zbo7WytBgBBD1L11yuT1rHoKdW52xWJfgZtWv2Jvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gstsTD66D8kVF9Cemoyk4xaUr4hNzvz7bouoJLLAhjXoJGMVCJV6tWSnkmPmddi5UPGTh7TdNSWRpt5UHXNre8g",
  "key1": "2YWwGxvtupxwSvRGiwhJrNSb2RYCk1aQuMftHiGcK1ZXToNAifG52h7B5yHNwFHNmyzYT6LbSdV23SAEfp7mnyMj",
  "key2": "NWiku7HRKcQioY5PRwa3KwbWP1GeGaCxnVJLzpr7uyc2yCkBP6swZAsUmmyh4oKwyCQ9NDd2sKvpWTsACHzu5z4",
  "key3": "jqkvY6fZQcRCVa46PZPnknnSxaL7WR5WogqFTY33MPNrhY9aRKqFjbVD4EwhUSb3HcfUCG9scddAGGFE8ZzH9dh",
  "key4": "42W4WdRc8FHx8JeMQJ2HFNX2LrS3Q9v1KYmdvPLwdLtmanHHpfEwKXx8jTW8dnMzX6QQKek12TxZPCNm3cu1uPAX",
  "key5": "4L2mPJvSLap6Cc9mb9stFTHipaxatGkHRjZRFFJmY6Ltki9DX3RNZEQ7tTvxsMQKwvAePMKnHTcEvNmwJEQ2AZjt",
  "key6": "mQJDu4FCcL9pwgzfuhhHund3K9sp4ThWeX6DNbQ3HnSsUayAXtaVvWyXtbJsJgjtR5TSpDBvyL5vQ3A4wPR2Lye",
  "key7": "4YntEMtQ85nKAL7jwUJpKtdZi4tNfki8WXjHPi6uLLQ5bfUQuCmvw38bsg2raJmr62fescaPabNFGzkcL28Vpt93",
  "key8": "2QssNNEBMqovzU7cdBkDDZmPt6pX9GBPLY4CuEU3fySWBgT786KzLY1mDoBVpdZtFbq9VzkNj7wYY7bvoh4a9mLN",
  "key9": "43uyLTDPrmR3iXimRTajb2DugmumiNYTP2NnPNRFF7W9gq5XeyF2FX61LdbmQNhTvaKAmh4c5gp3NXAMmgXxkpsn",
  "key10": "4U8A54KcjhDRew6ErEpt8xmcz6BCZsG6ANDfauptsBWkBhBchS1MDuFhL46MgiYct1x6n8d3WbZXH6EXGbkfScjM",
  "key11": "3Ug1KSKwm2DwzHjnb5Y3NF9G1SgyLPR7uYNhhyKVrLmR8dFxjw1fiLxVTyWWiowhispQDD6qk2QdgqxH8Vd7mBUT",
  "key12": "d6tZynnghuzGrdfJJb1DcQZZpPT22w154kHd3NvmUE3AEShqgjWncxSqJVJMtZKPN8SC6du5nNhxREKg9sm6zJK",
  "key13": "4s5wHg67WSi66yrD3DuGURruByvQQiaGWd8AJezpwDWZAdrVuLezj3sQiuspULuiLZvgrnfoptvCc67NtwTZBWn9",
  "key14": "4N1gZfHxs1EGD8MR3Gob1P1J1z1BU3Pv6bkgbB4di2ryRxybBfTGzt5hf9pxieAjNBg7NwfNj2HKyrvbN9icf7BG",
  "key15": "3dsKgPBhH9tcmzC9ATePLCh8tJnVeKUccGPyBKmErr2dq4q6KY3CCsn6J6o3hacuvKFjoAMoHrv9a7MQ8ZAUE5hd",
  "key16": "3z77CjRu8tW1u6BVb9fRDRjPLhxRfJQAbyvcdWLNkSvLX1MTzQGr2amhgHTnhcsbWj6fECuk8EMCaXGPZdDRzFUx",
  "key17": "rPD6mSJ5Vj4W2S4cyiq6PgQpCsajb3SvdCsbiaNEBQhku3YQky9R3X87b4y3BJaWtd4ST8FQxv98sNsYBbLNPrS",
  "key18": "4SpHyk7doAKEwwPJkPkwwxHs9PjKSxJZdMUBinwX7B6oyaKchpJNMHwWabffceALAxbjB5nZnVjYNTNwSgULzN8Y",
  "key19": "2f3kSm93emiF9uLLRdpZdQ3KU4ZGGQuhXK6rfS52rFpQJJXxPu6h1W7bC75peZg1xuqcn46fPYDnRrxA2GAQGvKr",
  "key20": "4Fv7H5MpnZbnGNDtUYJ6mgGSscp8Y74hBvpqa82UdeXYQ1vZ8miQdWi98E2D98QgEFEeD77u8isqiSmnefAdsawQ",
  "key21": "23kc3kJ6uDPGEdefHHTvMndyEvQ838HezxDz9Zqa7b8qaCgrQDuBH5i2ztdZ2joypzs7uzwpczjRnz2afb7qUDAk",
  "key22": "4YKxVw4HQgxYzh1yeYJ4ZHNU4zXKC1NTEgeENLHT8yu6ExFizAtG62g576uy66m5FWDf3szPmVtboHMKknuzAt2g",
  "key23": "4t3fmWpqimvsgDgzTELVhwsDW5hXkQ6SjmR7E8AyPEmm8p5RyueqhwggS1EYNnkA3PxmehNvqRFQJYdBzwx33s4t",
  "key24": "4ndvrjBDVkCQtBtamE5kUbCm3XnUPua2H9dwnGqpcH6BfAyrUq7VkLV6fx937E8mcxUz1Tqc4YqUjGkdfvGdcmd7",
  "key25": "wbYptxgZ2KbCY4dfbLMHusnyfVf8RSWfLdvymDDBwFjzMLn9eTVn9VGe25ao99uTQN88QvEMPk4CgVWC5wt43HK",
  "key26": "2nRtaFhnwpFy3Cz5MjJFaLCd4ZsZJzdgPcWXDRNao2KuR8XM4MH6GCzXoB7EZa71jswsqRggU3yyQXsuk9xBaLDR",
  "key27": "5ePPx9AzJTVN1jPx4sfhiDXNmeKxUBAZo6zZgSp9h1PRWA89kUF5UX2WLZnohnnWoR23vAwyCV3fAYnsXtc8wNpP",
  "key28": "HvCKhYCKU872ZGdbQv6LzKZKt1w5RobDdcvfZtWUQTP4z27vTMHNVRLA9x7iCZDfc4V3wwyRYbHdtSxW1docfqr",
  "key29": "4jcvw1fsfcx1hrTbyMTvUUNfxQ61Z7bG5yacBST37qnSVR9KoXFFS4wcootL2pHcvsYLESVxf1U524iGRPQ6Xvu8",
  "key30": "5FVxZfPPTXJbFXnnssdqnwW7gkni9UC41WiscXUu6CochbBxqNY6iuDhU3UQwYmxqPigASRHf2MpuHd4xtMPL8Ft",
  "key31": "4w8DKQrM7tw9omBJPm2CUdFgnT5DX1brK5UTijQgAd4JSeB4trF3VEepogK4uyUJDUncWkSCaV6pXZvjdh2ocQbT",
  "key32": "Mc3juhsRFagNunZc3cAU5ktYAH7RBizksQBqGXciTbRaUgRsJr92aub6Q2Mi37XeVKUyrBbAD62hBe2a6pDWocF",
  "key33": "3yPH4FxUnzJNpgkiwtp6jimSB987jt4hd8e3pwmJ7BZFWCq9Zcrym5iuG8sXkGqVboj1VeggnNvdEiUqN814J7RS",
  "key34": "2kwR8qX9QEbpCViqR4jX8i2zdRsvBpecf9QJAcLrL7RuoUENopA7GGFBm82egHodYec1MZ75Yk4tVMykuec8CeKB",
  "key35": "4dP9Vio6qfiM1u9ygZ33Uy5UqokXPiKtfjjiEA9p9eaf5cEYLpyjyENH2eMJmbnT8zi5Fdpq8DFPLFgtbbeHsKyR",
  "key36": "28q5gGKQtNEkS664v4uQbwKdYFRmGnQcuj4ZnMuhDgmHc3Z6AJNQBnAxmTpTcRz1dWQdZrNzCLm3Q3DQunrtFh2h",
  "key37": "5nEpfR7AYk96SivBQ5GaAcdc1exPwzBydXaGoLVjj1qy2CLGyocKUsZN8dcgF1CkwpSvCFGsXQXX3Sshxi3wyPyV",
  "key38": "2NciynwfZ5Q37gorfu2xFytZLLP9heFB3Zhsg8fRAV7DvHv2irU1yAsxwfT55z4Qodv65BuVYrpK9a3QcNuPHbNF"
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
