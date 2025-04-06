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
    "3WFpVkp8vfMaJQXfyHzWVAqCyD8sZif1sot5Z6QgcqUpmTDSsf7v3WyY1jQ2XfqGNchGJv3pe3UaQqxS1JdMdx5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QUFLisLBjTmYMEvhHYWtvo1yudYgqBduoqbLuWCpLYLCzsKNVnLcgrpwzJG1S2ePA4Pw5h6ct693LCVUmjfnsE4",
  "key1": "3gdsnpVLewsvw8RQp9k94tXgGnQicasCaRqA8XdrZfnV7epbmYQxMbLE1TXr5Ygv5zckVL7s6MPsMW3jsAEDBdhm",
  "key2": "3qWxHhgfmSVSXfNRd9SLCTJFpEmHywdxUxkaCaRYzU4Hz3jnEAuaxKwLeyxFdqF9fH5zpvDahotWdhd8FmGgEXZS",
  "key3": "TRkJMbEDGJq756hWoKnbMASZSb4Mkgrd6rtozLpMS2mY5iAMV6UN19oPuekUKJVwAtD9o932mtgG1wKC6bVPnAz",
  "key4": "5cqWuXupGY1J3L9AsdHZBpssU6JUT6HgY9bhqyHPcx4q8zR7uJCibafiYUvHBYX2hqXSKcRnLSi22J2vDDyqkvQX",
  "key5": "5kCWuQCXhW1YP8939DGnUwQw4wsp2wY877YSEJjQ9nrSvAYxseWUxYqCtbMxfWwhg376krydYGovbJVNHMkzgDhb",
  "key6": "2Lcy4EG21ndTyiUmuATXMaRaADviMgeFUrzSSb9bGuav4sWFPoYUXNo7W9CGED1YnXxwk9vWnvS3p2Sf8LVtxUrc",
  "key7": "5ntqSjkQnKqfFxgFGuTDZZgRuosXrhwmAGWJKF7263AnNzBmj2UqNKHPNwF1nxkTk1tTa2p22WFFUWNJcWsnnjQ8",
  "key8": "3Zad86ykzvaeC9GJeG7zWQYQQQp9wBK4RRmN6HYAM1TjCFqBvQ9QtnQi4aVNtwzqBNXdwt92i8nwRJSe1tAK1giC",
  "key9": "cxbtBPVJtdY4NQJanqNAQAVeRmp7Kt9Va23XQb9LXaaLSKiy7r25XLDw2PibPVeYZtN4dZM11QF3WHvjd4Vdd4E",
  "key10": "4Yfh2o5e5M3wLpG8HM6riH5P4356b9c9ZxVmGsSac8cHLShnuywL7fZGZLMjZBMoFtEk4hqa8fpURG9b1Zy4ZnQQ",
  "key11": "5KbhiaK2td8VAzJxp8B19qyG7xtLCUChUrSsLuRhsjWmx73jrWxZK6MiNYhz41aY5rFdpFaA2GgNGngA1XmHsZBR",
  "key12": "LjtLCLE47tTM1fibA5feXY2xKR3zLUrDUP3C9gRXpGnjuDHGzoaJ5QFKPvWU53ZHFYLYCyftwXnPvE6q2vffWqE",
  "key13": "2inxs5STJcvEwtKh8WvQaTmjN2o6myRbvwF1pLSMHUadhdbyYdFFDe5pSnStu92mmXjDFYgJKXGmnL1tAMV5YZjQ",
  "key14": "4Qpz8b7DkXGL44C8rmVz314SbHFRUDizKXyUSdXmLpqcbMz9JnBjMFHQJZfx4w3RXJwETyKzWsE1WM7Zu9mGUjDB",
  "key15": "4gEtYb8wJsLkvXucZ1iBMc3htHHRaoncatfiijn5XHnFfd2nJWmqEHVoabZHmR2QjgCVP1kkyG85SoCKLfAd7ctq",
  "key16": "3MPsrJYc2GzdeTPfCk4k2s6hVC5A3AFe5pHaDQXsQ9NHjHkBvVjF9D3ucygYF4fkZYKvUkeDAXQYviiqFtLBhPTS",
  "key17": "gsxNcry7XSdN3sL6KMecbyfMX7f2V5VZnoNd9SgGxzMavHeRKMx4s4QEFtrzxYzbRxGxFDdTnRekBAkjBpWBEDW",
  "key18": "658nrwijM5eYPf8erX6FXqeUg9Msv2BagQagezmmo29eASZoj9Uy2GoCUFPK5CvZXM6BaLptm68Ug3fgecV5Gmhj",
  "key19": "4uepTx8UHULM74zGPDf8QaT64ujtPqHbCTk31LrjdQR2RR8ZGLdAqvTb86k7vqzmEiQvXTyQimvw39pD3Nc8JkXy",
  "key20": "3nhRmA513WUfL8FwXCTPnyaHSZGbQSuCRPSdGcRcYkPojwH6r35ieER2gVQrUJvBgrNJQ6bLYkHP9H4aGMb8eGPd",
  "key21": "p96UmNE2nZnNEZ7Yfb62qxgHjUYmXEA3mnBz5MLLbwSCBcixUPogK6jxMzDveFhuQDTEU5d7kUx61vPv542bGzH",
  "key22": "23Ehni9nxzpRQ2CztfJEm24WTHdbGDXLMuXtav3iDRV7vyd9RkNhE4toKkn2ZJsQt1HNyTm45pJAo6puLFVtsNfn",
  "key23": "2DtRj2pxLetZcCjuiwXeBUA6UekVM9SkxoNhCsvU7yRqcExsJcE7rJYo36oQeT9Yy9UXFVPsF49dTaSj7nbDEDD3",
  "key24": "3niqivDMUr1LFAeBX8AxFcForv4Jnm13YezbEfTBUHKFiwg1rLvZX8MEeYTZ26b37qGgkpZFuQxfnmxwRQTembDe",
  "key25": "49VjqRTtj2v3iuVHkgUyd5hqYpS2yHJEPLJGf32MHcD3YALADfbQbKJBzwTe3fLRyiQxgYAP84XheSafSWC7S1Vp",
  "key26": "2mgyzDKoRNxL72KDnwSXGAjdgnmu1kPHAezzWXVbxhTGTpWyMzsBq3xMNAH18dguzH2jXVBwrDMGzRKVmEnuYcCF",
  "key27": "2uzJSoNoUPhw4k5oXb3XZtVpkzbU5wxdDbDkKNfvDURrMiFu4TM4FKk3smWyBuo1Q5AMKat3f4Vj8L3uAYWhYr8v",
  "key28": "3D3bwfDaV9gDoR6ecUWSvXNa7LR1oY5pFFg2j9WNgwyD8oYXirVYmRhbefRwcNhJKppQP8rYN9iw4xt29BVTQGRM",
  "key29": "3pq4CRZJA1FEgPkgVaap5nfPjSHohNZ8iMV76ZQcXi1pVviGm2jBdXkeLKvGZdKxMFGFka3FmBjt98STfL9hDeLM",
  "key30": "23x5Sshg5z43tAAMR7337GUZb2bHP1j4JdZW2yZgv2Wj7SP4Ed4CC939hxXtkaduaoBfAbCxPWDQxLPYBzNf1sAL",
  "key31": "4fBJbd2i2L9Gr5mtP5rsEAQakcr3khFSc2dgY8EzBT1PB9V9fYpX29edy4ZvFZqKH4yQNpCMYpSKuRJwU2mrmWHq",
  "key32": "5GcC2jN7dDPjUSnTifbRTyRo9BhUpeeV4zheMYJ1ZPDNbMUMaizoJJfqDzhDpUicrtNqiMeYTGkeVTFqhKvhV1is",
  "key33": "jYCWsftd8uyEVA2cHab4NCYcmf73PLGXZFy1tjs71prggG2FxGBKDgcQgGzbxPdnjjUWRKWPVyr2PnHFBU7bpoP",
  "key34": "3BrHiKsMcDpm7xUR6iySFaXfiBHoSTVQgHoqbNfCMbWo1oTgqWREMQMEeKhEwFmGwoEgiP31erWRdpA5U6Cz1emB",
  "key35": "2dDMiEyUZJmGjAQ3MRz5iKLAy6eW2LJKQKHYjH3MrKfqsubkCbURsBfP8dyGnu3u8Wur9m2zntp5oZehxvwuXM3p",
  "key36": "5fAJPoA5vuSSEsXd5SrHzwHz3qowjiQj2VZiSbiLaBbkN5rDgHVRYN3EwmZT4fXcGCj9FjA9TFLDRCnQ3uSKzxQ6",
  "key37": "3YpJTJqx6Nmfz48K562jAN77dyfBRJc7LcfBXNcaRNqyru2W4nfLHDFonrWmCZKHWyKiaXsAmZbphcnmSsacPFTm",
  "key38": "3vPHguS224cttNHxvco2BpPb2K2QmqZCEYjwWWS56KnqW2LbMeYJftE4fMuZyuBKpEtvYSeZK6C56iUpfq3kSbMT",
  "key39": "22fKuADNGGgRGHDiFcC7g6onSnLJYX8GdZo1CG21xJzfGL5JF6g3wBfs4ZLPrgncYNdwWoebSxwjtXtzH3LXZHJv"
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
