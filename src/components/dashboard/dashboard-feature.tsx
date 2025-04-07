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
    "4PT6KJMRx3qcFEmqtWTcyjfcNDTEqyyv6yzR6YUW6Zd7cDGr7sXhapJekZsJkAKnRxmWtsth1dzUCsCmstw6rwgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iBBEB9aXyafVCARrS1CcbZs1eKnM2bk3b1CqaBcWtm5hMaAhSqhnr8H5ZzVxe7DCsmXskegWtVS9F65nn78f898",
  "key1": "4GCHdMX2w8vpiEdwi9XW8yibaH3GK5MZrdU1p89i9fabujpPBdShGr5YeL48EBpXcxsXYUMps72fQhto5K1Vuz5",
  "key2": "4y81QtsAq8NGoM1gNxrkds1a82xtiSvLCzppGym4vgvMUpQghUXBi6dmzaS2wuWhCWKHLtyeo95DbnksYa6CEMBG",
  "key3": "5LcZreQzkSN9DCQm2ZaC4u5jASBBDFUsCuLodbjML2AEQNLt8VRs2bv8KSiNhruEGN6eK176mt2a5p4QLHgCCj2Y",
  "key4": "5Pvnwn3EHvCqcMmpJQuaDknY1T8kv1qiSikZ2NmRiRiqWhQAvBSfxtwEtwNuWgGcpimeGah4b7XcnqFDwB7qPwyJ",
  "key5": "8jUdfCkMEB3WQUTqma41BqNvnkN27KZPievect2ACtJiaeYGhGKcReYwG7x13Q395KZ4tqPHDHBY8M1JsuP7pma",
  "key6": "56jPTxb8RxGmTJ4LpGgt7pwCiqNmtRMSoxa2bZ8W8aBJLRk7JvDtwRm9VXiZ3XmyX1DrsDsCeYjDLtiaDLY5HyFR",
  "key7": "5oPaGsXrfimQW1kmSnQezpfbxfYmpFTBqmvTRQkz9Di3GwNDrbcMmKrNQCddLK6pCu3MRhDmqJnnLB29mmS6RQ97",
  "key8": "3YGGAZQeZpgvYHe6XFXoDki2RRHbrjDp1qSaZRwMeg4ikBZY79MqdQWnyC853qThFygVZN7vUn72CMvhykVk6iyw",
  "key9": "5vksaE4CWPr2AJtuvoC5aEPG8dr4eZQTfn3WRCSqCU8Mhj2LrJGgBokq726mpKT6xgDEMsi6t1g2AdZGBrUipMx4",
  "key10": "qP3fPxjzmMYkS9Y52Zsyf59oJZfBukPt6WZS6se68pTQiB7GrCfszDuF1ayrr9VxsVY5x1GRedLospbchpVmBHZ",
  "key11": "H6dYPobeD3JQy3ng3YEt8PZYo3PzVJX9c899YYzaRwjuR924d2SgCsweXgUzGdsWzkwNdKzRyjKJ4ZgmMhu5UAy",
  "key12": "42jniByejiSjAHjsT11j4jYwfemTcahXRExASMFt2J8RDTx6j4qQzcpC2UzsSVCTqmXAAMML9WKGXj9g2JXhfjpg",
  "key13": "3zAtjk2Hi2DcLXRjXadEjWebJiRjqt5izXLf7gCnaz5Qk6MCkQQBeBHny2qr5DQ5Jd1rwuVyeH7gozavZ9sEG4zf",
  "key14": "5CGCaWZ4nBqzMF9tDzT5EQ1ZvcCCAQvZkG27Js5n714vNeedAwF6FdrBoVJUXYF2EeiFGE8uWQRxbweXLPJwVzwP",
  "key15": "5rMtQuuEmVkQKSUwtq94U7a8GEnSdw62jRNZW4mhDDBupmGbs72XAQMv4eLqkSLzGxWhWDYjLXFroJACJpAq7HCf",
  "key16": "4Kh5pLTz34mbPRaJ54dro5mysi4rjpKUGMR9Pin7VFSReH9vBVYoGRoiiYfdxdPgAPhKQQTqfm6qXzgbS3NQoJES",
  "key17": "5rcR3RnCSgfackbTuGX6Us2pTU8T5NyxVhuwZWR9oR1EFpWuC5mT763D3W8Pf1N6cFRXWfHtssFrVmWosAyvEtFy",
  "key18": "dLfdgSmA276uGoo3FCiXowi5pDDmGiYWCxSf1WL2KppJZ8gwFBkPyKkFXiVY2izXdck5JicuiYzpS4uHZuCEX4U",
  "key19": "4pDKm5HrSdt1UXF5TauQiRD2yyQHvS9g7NcSPbAZXkpEhs7yJxo14BHtdRYVb3CAjJuz7enG4yZa5SETUjBuRUMi",
  "key20": "5vhc32b1GuTCd8Gyc9YYzCySbNzFqKUZsgkq2hDprLekH1Wn7VV5EdnRj5WRWXEXB6TmhnBXvaoBncbRWVFHPWXh",
  "key21": "2LKyvWWVa8EjHANc3Mnsb4rK6fCaCuuZAY8grExMBornuXN7Z3YynvbPLCFf8XmKPCg7ziVfZmR4RHgLMmvDmmNB",
  "key22": "4e1uvvcED6gg2snBUdSsEjj62Xi13YYe2FBTokJWeUtCKRcmuetp8QrGXRy8c7bhLWUyJV3kL5Z66hWvvWT6XUXu",
  "key23": "2pDianVyPf4gVg7enkezYd3G3Fmjm4QepYpiis2PRsAbQvJ6QqjAYJvirkkEszqAy1r4euRqZLJPAeGN78NEdPed",
  "key24": "36FGn4EetkbJuUEifQBcP4QqTbKvov8g9bNSKcoAWFQ54hRpB86daJhMzUhFEjiWtNuSj5LKAVojwfYzDq2Hxc2d",
  "key25": "VS2YMApNLhRLjJkggkVXA3SmbBBfaSvh1xUqEGroXMkzSQqD8cR79QYDXdszUt6nuwNfod4931v25MxQRx2H3KY",
  "key26": "3Ck3UtR63RY1A1D7YtWAJ8wp6BPuv9DgKPzvirzqmsmF783zsPSuJWNe8Fjudrhi31gezgTwGXDwgKadH4GerZMg",
  "key27": "4khhAufmmoYY1hRByKa3EADEd71RDVfzz5q3mA2i6HAQshvXKjsS9K3FMcs6g4qWBjP2CCg12zSU546NgaYDJ6f1",
  "key28": "4D9nsxrhpZZM7b3nFfn8cWMUsjRrVXnu58KUhPskWtaEQEQLHcFefKFtLiK2RscP4V7soEKiZNMxMBwmBjx6JrLP",
  "key29": "4sikJvfxWbmq9Ciu1hfP9FmWqrNuZZ7NG7YhehJV2R9fhjDQB8Pgr1B9v5TqTWkaxwtMRWytNhKvz434ervxHVch",
  "key30": "4WYfAFDvZmUNRfgLUL4n4LmKMbcWhQABYzBm2oGBL4HVPWMvd1E9vvtAJ2vQkLmCX3jgMnrdkTiLca5LCKibAJdX",
  "key31": "e8LKR4zv33fxC7VzhCkYXvzU6ZdUEhkAw51X6HASxyuzTZM5xT1axM7kXP4Penx9tdjS3T681cFCCE8TD3EAUTA",
  "key32": "3RTTCwHPiqqZeWt84q2mzEfZQJAUhLjMH86BWfqj9TfzE3nT3GzDXQW7pVmBJg2NCTiaXdbVsa9xUYV32aPsbR82",
  "key33": "TnFzrFCUadAtZhFc4A94QPJiWtvrUTE773zGn3DGuYdTCA9DyNGpkcyDetfYg3HWitT29mRn6EWEvyZd4k3hkjt",
  "key34": "22FbWvgLutzTtpji6UPAh2Ue8o8X8eg3hjfnmiZFkmQWgc37BrLY2Yte4gpZfx4W4NGpN9Dsj9bBhLhc8TucLott",
  "key35": "3oNVL2nJ72txbpH6CqPbprwcFqpDv1tCqZEpZrqqY7fAVySAhFGbJAgoDpKZ3134hoUbpvzVeNNz4Ld8xJ8gQ83R",
  "key36": "2qqWfBB9GXv82hpvQREQtrVn1guKJYzZxUNmJ9C7czxVA96LrNDknH9ABcT4hv6mueFBvzsLDkrZGEyK18nRiVLY",
  "key37": "3f3w4BSbPE9jXbnbm23X1ets4k8FgfnP6YDezmFoS1ZT3pDEMzwyPbiyPozsqxPs6Edpc73osRw7ByUSwraprmP5",
  "key38": "5LApcjr78f4z4fx3QF7Jqx6f46ocTp4UaHkHaDjQ7fcjPYChbnuaBAcNp7ZorHSShagFyzomgTzbaA4NoTnMdp4r",
  "key39": "27JvvGEAUmHnvM8hRNHzd8bkpkrdh8MYspRwS5itmXbfgaFD93Z4UTXyA5cQRrjHP7NT5brb6fY2TkaR6grpgywL",
  "key40": "MWVZGnfhEJBFP5HgS2pQV9v3tZ5BMyckw5TBpM6Rju9Rr4GmVWHqzsewsptimde4XyyD9D1hKMYXJ7uZnN1KBSC",
  "key41": "WHzx2QqE79fV7eyRUtMyGb86VUnE4pFhNFNdKJpyL85qnfqcc5CvpwANasFXQVEzgzgSq1NRaLdACnik5rxsTYG",
  "key42": "4rFAaE9FVxviEX6dcsPMJaL7RD89iu8cBNHt8gbn27ScioiJmoaDABusuAND5z3Qnn8MyJKgKM9H3xqwuBdk7hLg",
  "key43": "sQCWj6drbbY2KhdHTkdMMLEmw662qNuuDuZcR3kEwhGiRmRYRVS1P5pyMAaAtzTohtfqFtzfTzf5yijV4bcEvqV"
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
