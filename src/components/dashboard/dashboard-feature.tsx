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
    "2BTGiHxbGyUvF5MbMwm7Bte8G3pJxbpTDSuXMfVqfQT6t2qbGaWcAa9qwc6qrFJrwnPcEykav4Sa777aVhmYtE38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k58XFCgf6DjhpXHdPizjHyq1HKrGjMaJyKLe5vesi54ASQVCRArXySVFzqogA3mhMdhxxQdup7npBmax463RKZv",
  "key1": "58GzEqDCwZLTRgsmCQ1J8vpjHoikRRLSHke9bqr52c3jGYDUZTmPEbKbuQqYrj9RmbC3oBPWRKZND7uSK9pdaT3V",
  "key2": "2k9M7zKPNwy6G463ZTa9fqSvqy2YctcVrc8o7FSbRg85vxjXWiNsei1pS3tareegtZwFoTG6HrqXfEhqCazTubQE",
  "key3": "3cVMzVbNzHgWuEJfe1De2U9whNmdQhtP3R1pzxbwgibD6Diexui7PbxyRhdw6Jh4GfgJ4obeSJzFyVUU2425qRFB",
  "key4": "4KqRrsgc66sUDE83tWRwb5jnRXVJTaXcP7eYrqP2a1Ui967DJ8uktoJ35SGyxW3rXiwHGKVeRwuRCvuJFHv79VTQ",
  "key5": "65rjqi8pWkYSGAXDyC6d7dYh9aX23qWUQvdS5swHxPNcCN325y5WTBBeTS4ibGCFwYoKGgMf7WEWDza9UyHB2WqA",
  "key6": "3hKdLDobmYJTcJWQsMLEZwwLAHKeFwMhBV9T7JtbsYwXMxfQJRu66AB5zbuL9Jhd2BMTyZGCovVZMTKZNZytcbb3",
  "key7": "c3rCzk4fUCXufueno1ywNLJ2nqqcqKpJ7UYwrnng42wmzjkcL2dggx4gwi8XU4p72XKRtqmcgZBwJhUa8hb5ZBU",
  "key8": "4WdVqRGBTiToAKVeVt3DSyNduwmeBhVCnakrN39xLYAioYRM4dDRxwaUfprV9SLu6mnG99dr1XGRjtCbvbJjmfgb",
  "key9": "41NYi16D5dJwkEeCuF5JueBdkKcnbgunLtnZjeh7fM8x3wy9fc8u8LHyob1BKt5YXY4eu5oZVpy93P2XGWcisYBd",
  "key10": "4AwVE4pWXApu3q6tyABaLKsLFSqJz7VPWiQjz32ZHNn6WgZRnonisFMaJyvr9FViYGUPoF8ejYHk4XECSCrPTnA4",
  "key11": "5VsSJ1JL983RNBUAbsVur68DPgb9MghZphgucmTr2Jv4D6CBWP7miuDXGq5TbwKwWY1QT9wWaEvdq76sXFZzFhWk",
  "key12": "gsfw6Y1Hehnwy7JwmbYg9dRwfYZfPuuVr6tQgukHBzFwNxTWrm6CSfY9cGKVthpdL2JMXJzYw4KFCWt1Rf6GgFZ",
  "key13": "3ebP15HL6PYkxYCsNNU69sYkVLhsgQGXuqBeQzD377F8Sebgm2gT4i4zm5HW2dKmhARp3TAP5LhTugH72mt6QXUy",
  "key14": "5qsToKfiFhVhCERggMoUW4k8wuyyiFa1zVfa4LUe95Vr2HwHQdso2hAxNAmSyTyUQ8eURWBDob9VYAE9RXByPYsf",
  "key15": "62nppnmznkX5VcNpuiAGzct4fJjsWiKKFL3vpsuLGfbjwbC7qsdUVY46au7sR3KiMfSRLcgGNMPYYsDrAMPSMprk",
  "key16": "4PD8ojLKjAxsYQjg3D7eVbp51hkHrZmgWgZAQB75RsVAqtnwzN3GfbmNZfeeu4SKNcMg6oZfPm6FVSH2sqjfR1cm",
  "key17": "2VCSyUij7uLGtQ3S6mL9t4A6g7rGrCyQzjP4yUpTxq1sAUB6aLuHT652J8LV7uYXeEuB7hMn5bwjZEYCVGWyzFEt",
  "key18": "4SK3x2dLFuneFzgB2yRdm3y8xLga2pF3sKRzJaR2RxrQF72VB8oRqqkGPHXhgkYD6U22qrb9USNVjxbweuqU3cfb",
  "key19": "5YppTaLJFZcLDr8zir97U2GKWMzyqq3u5Ky5VeEWnKReveB77bfLcHyx1CYhf3zmPgFvpYP5zWh3zRsopbYiSXk4",
  "key20": "4khTv1DVHKLATMpDQZMouGqAYDCn537FCoLj6AM8wAZAZDt7ucSKp4crK7VCNbMRbHwqRhWtZMeeft3bavzorVL9",
  "key21": "NXLRqUR3FXdJ5nsuSJn5MpBi4oDnBVVbKDEt9weSS6sCrFwBeNQeioGiFMUTDWueTBCgLsXzgrPVK5TYp27acGN",
  "key22": "5NMgrfSEiwAMipTMVzjAQjJLYHDXnY7LpUCBf2rg9jfRedtu6FQeZSRAieBPeuEcNMqsLpLSCrw8e6Y4hZzwB9i8",
  "key23": "4HHSSRSrucYAY9BfNoqwNqy1o6YUwm2EQAsU7XSD7PPeE8fsv3hnuvk6ntx4CiesrFjfUU8VMnMfEGmvhHMbKv8V",
  "key24": "3ApJv76gp8QoMTg3HnU6vXFqqCnEbmCRKFJXn1vWDYsfiygNspY2q2AHmbiNUkwQ2caQPAkfKLZEmhLAyobdvJSZ",
  "key25": "4vBNjYTRqhuUXxVHc1WkD37ZsoykDw5byueSij6bnT1fLskoeZVwhQb4PmM9bJW1buSyhWp2qfWHUPeC7EYWYZy1",
  "key26": "HQEG2jZkUpEJJuVmPVx8E1NhKFvrx2zsEdQ8vtAuhSh22orUqPV2q9pcgdyVPLYjeWFs64RxaDuDsrtwiKrAWMG",
  "key27": "a7ckoFqE5BaQM41h3wAjEHzUqhNdopjxh7Vtmq42Le3tyaJNoGaoSD1XhDtn4gJM8YvYK4kAbo2H2j4t9ktgeWj",
  "key28": "5yiyHKBtVcayZoiRNdMRsMAZk7w8XLhmiWk4oRSDC4AxFmyX4yc3R14K7HnbfS5AEwQR8R9WvAmcNk3ULYkzxipk",
  "key29": "5uVtpd1gp34ejSwM6UssLvZ6vEwjx2m1HiiSoTYQ7zRDYT7ZXvse4endp61LoAmmPm3J9KkKoU9DgMiu8fGnkj9M",
  "key30": "Cv6LLR9GLFqJr3LPupUfsFqrjCoBKxqvc5riSVEq5eU2A3R2r64KxrsTvF79FpTiSiK352aqLFNhKVzcdY4p3Md",
  "key31": "5kqUVTEL6uMpppGGjsaTDDHY9wY5xjYE18dKz6p1uikPG6zf9QhBU5wC7vL2FX4DFYhwDwjJVuNoBbGxpFMwmsp4",
  "key32": "2Xn4g46q6YZzkisbMfLBghq89QmwjGNoNmLYNBtp1sjfs5jxs73RYgtWiRdJJxRbuLQW4PPgbtkfQy91pSBU4MSm",
  "key33": "wgZ93APFCEotknPXb7WKgwgpi6aLz4aaJzkf9sRySWEN74qcw3u4ujnRBvrjEtsa15kupS88qUArL7idWhDYKFR",
  "key34": "2JM8jsQeBbXyCVjuwWsneT8agz99mf1aCbWyyKNn2ZFHJKf7VG83EWe9J2KAMz8YTa99W7SQScxKEgQ4K4MMKxaY",
  "key35": "52mbTrMrtr6cjdoFAsVDbXLXNMjQK2USViRM2so961UyHfFYYEYx9L3eNWsEccFV1LnDYjN2GQUfYDe7xgSZZa3",
  "key36": "5XSMyXTshqfxAo7yAatDR2SY9bfv2Yw5tLES95JwazrLvzdJ2ePFDjFmdYfDSjPSn4LwSiLGqQ35DTkfPDzK7jGD",
  "key37": "2vHMJcTB3Xfd6GPQFBNRySENodvdVb3K5aCfi4XVP8QJpgqG1ncHPmKqPYPuextAVZjtBmCu3AMToRkP8FhMqn1u",
  "key38": "5hZhxRuoqdKCRjPg6ceeuPpnYCU4mHu3P3cRKXUX1qxW2SezLpwDvJ2JxfVVeUGdq3izMpDHVpQCykaun1bLm9XE",
  "key39": "3HYbvYndEa8JaAUsmDLwm4aKSBhdNLbzye6862iaxz4eAjsnUsD1vfKYbKuAEt52QCCtegcB9z63KAKzZqeAYWeP",
  "key40": "4pF2HgV4gwhaZjeBP6SPYuiPpDikH5b9a3F9wwk87cyEGjpEiFZ4ZBbPZhoKVXdWvREf15crMYXNdm4iZG62Yn63",
  "key41": "65Z9cgWNDNFKi5nzjgP1THumRHPJTP935B8tQJEUKbny35CXUjSpZ5cb8h9z2svxDNzvbZwpwkAkuZ9HtRuDyoMJ",
  "key42": "5e6meufTcnV4ziPa12PS8DFL6d9eEv36z8NRP77qAXGUApCwsuFyKx6ByzjHNikThBnXnb5yDS43n3EdfHGcNYKc",
  "key43": "YGUkTgxZ8cLYSBn4eC3Qo68C6MKEu1tkHDuE2dfp5MHwgSzRMYUdrgM6Cmjsbxa2PtxPF7wfgHL6ELeaZVaC6MN",
  "key44": "2ScGGrVrpLfjNEeB22GWSTj1g71M8NsrnRj3KhNwAsHVsF66JggMnWYg4sTfRfdUMDtXueAvG8Dj9kepwrAFGoE3",
  "key45": "3nwRP1PYYbYdGz1Rpb2LcPbvQQ86DFFDTqvvCoD1Se4uW5zEaejwbDUzJYb7zn2YRHaamuA2SaoYXBrkcnanmTt5"
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
