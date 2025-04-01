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
    "4ntYg3e8GyHFtUJ5hKfnBjp5ZtuVC22p5Gm47piBcqEAAb6c3t1z6LGewZ3v61JU5Moa31CK5Y6jj4efi17YCyaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H41pdGXE2WztgEC7hkfiDNwP8tmphi4yFcZ5FCF75XW1s7mBDVdkjK42R3rXRFbxcbv5JYBkZGCXntyykf1WJEw",
  "key1": "4nMFHhFFND21K8uMZDawJPZ4wD6ZoZeauzYC29bgjNrZq4QjCKC1DPQkvCCTCSpt6g9NExPLdfzGdFywNWnqCABz",
  "key2": "tKWgLdS1kAKzcFFhdihiJJ8YGjUU73PHBperK1ZdmWtNHjt96CSZZyEZmMmFDtxwMwhqcW75uEurqmAU6AuZRzV",
  "key3": "3Wp7bfWBbJDxQMWVSuzjUEQKCngooLKwqYUvkQR4H3h7FqDLsVM5vMacGHGohw78ygPGgLCwxzzEx5WQKpNMF8bt",
  "key4": "5ioj84wMTfxGUBDsriDPhw1iBAMXawU2LtkLXxLZmXY2th8YaL3qPGTJkzQNprGtTSwPAsd4NffMehhLtuk6hMM2",
  "key5": "5H86fY1VCjQQ6J96kUCENsRXAsCXQWprUfiPTec5EbAp5UsKKqYG1JPq2ydGkWeeh3d4k6K2KQnzyc5nVBvrDAHg",
  "key6": "4mExcfQmxA2oKERCnLmpurJfssrnU99QkTWRu2TQwq27DWWm7Vti7uHQmSnA1d4qZCZRv5A5imvjbRFnkKA9A8RP",
  "key7": "5F1uasc59uJyvTuQzokD2VZNYzhcnhF6kZyVnkm38w2BquSkxRFvSp83LbWQWdiA8Ae61Ho7KC8zwaegPR4nLo4d",
  "key8": "2SqF8uutCPWYDBH3AAHDWKBMxnfuiWdtw9grqbRYXTu4DyAGixKLuScCR8EwPaQsndTQGGwzTwtWKgv1H3p15YHT",
  "key9": "5oqnGDbeKyjaiBEcUaPRTjgudi9GytNTLTG1g6AEbAXnBh8e4otce3S78ENMzpHkwvxGtrXDDKnmeVANcKjv5zYD",
  "key10": "3HZ93wL3n1mcxQPs3Au5jLtfsBnLCoJ663NK4C8cCB52uYkJ47xGU6AEYoxFJHsgJZdKSk8afDYZqF9FgEaLfW9H",
  "key11": "51p8rC1nEfu5kakzLcHSA7sy52f3khaQvqz6aPMGbiXkiHKDpu3W6miNvuTir8hjKEkxruByb4Sv1JrS9EXmjTw4",
  "key12": "MJMNMSooyuE7jQnsDrK4QGJmWiLVKBmyL79oUvmHQLFiXXRtmyXVxbBBQuy1PcyqC6raVAEjQMX3gNyhPu4TT5K",
  "key13": "3oaS6jfDzmRC1fPs1UNMMVHyccrpBcChHgj3G892PuMiSW46h3kmDq2Afv5Cuf9PWWnMo1RzxVv5kP4v7d2FKmTv",
  "key14": "2VjRsxr791QJCAbcM7DcEeBVwBMLjrPHJCGbknQUmfppGUVyrkL5dBG4zou4dxoBxBje8nkfvQvLuafSDtfrrQfk",
  "key15": "29e9pEoEHfhkLS5wvGxDR5EDsJ6qH2wHM9wMXkCrCezqxbQE8G3wEcgyPKnKNXDi8zeBZXgG8YBkgDjfeFiKXaG4",
  "key16": "5HYeBshGHaXx4S5QUc7Aba2vqfN7N2k94VCM8UcCaWtp8cRuV5Qpv6oKs32BjgghnyXjXtpGEoi2dfHLxPRnH9SB",
  "key17": "3mApe4BNJN3GDYqfWqFmciREeThrJe9wnCGRR7G8rhTYtoRynyMzLtPe4Nr3LH6zU66Zv4eVvtxYZVE8jvMq4tc4",
  "key18": "rSDvQrJ4ZE8qoXA846QT3JXew2azUfvSqso27yrHv4JtSNQ1VHSdjwqSNiZ8v781bYVXdJQqiJnZakXpGLCin6D",
  "key19": "5dwzqu8rpAUd3ufPGeV2VGcAmWYwU7Qyx8gKPrx3vk77cxXryqcdPBvZRidEw4wqgeZmbgQdqZbdGWW2hQAzwsS8",
  "key20": "28e3ypF7yhqHgrW45TXhfLmFhvYAT6WTNLT6npYoz2xgZdTnGq6foSyqcjgDtM6mKpCfzU2fHZ9m8D8qsqTuZACd",
  "key21": "2Z2ycGsJMA1dvVTQ1nei8HGk3am2aSE4v6jLDqhGEGHkxXSAwCHug7Yp2PVsCgKrGMouAdEvmGbDgYagdfUeQBK",
  "key22": "4aCshZFpM8ehpMzmJap6VNk4VjosDxqAVADXYyif7FigKhRt24mWcxsyWT5tGcRT18Ekcuh4fra9chSb34BgFhXb",
  "key23": "2tBLvNDc8nEWMmJyXtzWCneNvvnrLGBuAjsEU3kgHsCVMH8J9CUK718PrzVJ2fs3ZDceKGoK4hAXqjeokdg5yh9n",
  "key24": "5kBvRbLQ8acH1yoUd7wZ8RvoM4VmoVuwwqkB1zJabGevrGx7FJwA3DjP7Ym6o4KFWS2QpfUuaotz8XH3fMkSUxNt",
  "key25": "42prD6JQMAzKL5CCgkSZ1ubU4GJWquYGFtJ62XNg4ms3azf8JBfqK1vc8ZytNrcQuvfCb94siSXKBARb7R97bkfm",
  "key26": "2CKSYjQNNYgRQ8EMtLp55medMk3EPSbsufMtXB7zfsSiVTXVHymStD5q6BrX9vkz9fJv2UN3RA2rmaYovLEoLf6N",
  "key27": "4DrhFC1JcdVy6fDjhdjo22QQfbmyzxzUczyzAUsDqYgxAkcCP5Thh4TWK178EcJ52B53aAgrhHJ8RD7U6tW2jtDP",
  "key28": "67PzjhEAfzCKou3idi6aDK8RQdsZDUfatdPxbyjs9uYSHM3BhxVkHMNEPzt4DW6DYyRq3KSSkc5fWdUCJqKZLeiC",
  "key29": "28L8aeroAfQvy8H1hsJba4ca66A4mZDyPFjud8WE1y7AGM5RPoB76qZpmb3VHwb6oJjc8R2ijocSTm4yiXS6UDt9",
  "key30": "4wyqPLy47eZ3ww2r3R4sTAT37iRcbF3B25Gt2uoTUfRHgVy24ysaPQ5t6Mf9osr8iHWbPscJhvoRrmgeiESvpJy5",
  "key31": "5DvcSrBZfp5uV6M5F67m9M4R7EgnrbfHfs2XmDEU1GzmbkoKiQwGNkykYWRpqWWsjuWctfausBS8nX3FVyxP5Bdd",
  "key32": "4s3qmfxRZnxZqhFuJPjHG1JUd5du1JVJNiKUWVvBikkLXMYxfsccDpzUQg43Vc6wqJdm3QrwBjnXVjv3M4oMRrN8",
  "key33": "5agHW18VMXrzh9zVnzpBB3M9YmMx8Ruiw5pTaDGERwb6jKBCZrtiqhAJRLzkYZcLvenHkSeUCkeTJqEm23sChYtT",
  "key34": "2SKJCd7KK8oVoEDEEKcoZefQPMHKm1deUZFELShhVoS6PKZvneskmTiwcVtAFYEGDydEVMaejQksXmPuZtg53x9M",
  "key35": "4w1JK43Uk8iMcna9Bkx9hNnAhMedgeXRRoKAFzi2RPzv3xyeCRipwQ33DuVz81L1WgLsD1e67ZpnxVP8B2kGCo87",
  "key36": "39Vd1nngKPLEdZ5YfXBo8pUr4GAXSyKs8Km6FdsEcnPg1i1M9t2haNyDAtGrVHXmBh28y6ZjydEMn8qrBK1jdbF4",
  "key37": "wxCL17vZqbi82co97ixj7Bd7ctQmRLTGaFBaBnmC7xrFdFLUxFbssroJ9wBwLLE1cbZX3GWXea3xWUMZ6YH4GXh",
  "key38": "5BCRQvR21gtdWDgnHHxdVPJQ66zajYUkbSpx3CbTMv5TWtQoCwQtjHcfPX22LaR3kfm64pmStF9rNv4U9dFVSCV7",
  "key39": "4YWUgYyn1c9GyamsG3w2vJQ5bQC4Nu4pv17gk7Z9GiSJiojCDhhjfba3ZzBaFag1jffnxfKEj64rHCoEe8HkWSxS",
  "key40": "2rCjFHEHtgk4S4Eh1n95ekgxzUWSbZdNE9gdZ6T2NV4yGUKqbA3D7sNbrKhVS3J51RR8iH5PUorP93Dbny1Q6afn",
  "key41": "3GaHU5g4fnfrLrdjFFCpMFPftNAxGQuDArEyVgy8TEKqvqaqm2tDPwhRwmZtcTEZ5QZgvZEr7q64GhunS4vJsofu",
  "key42": "LCLpbgSRMmMuXYSbWL4bGZzSMQ2b6MVcXnXKCf2hY7o1ydhipZEAfhM7WFAJPjXwWAKXxCTGXraM4JNSmC91wUZ",
  "key43": "2acK5rutbZK8CW7RW18UQj5rDXZoQiDsqX7VCVPAoFbHZCreC1i5TTXiLdYtxNUjpCRg5DusJahsawZMFqqCNgGP",
  "key44": "31enZN6MPz8ts1TxGvEMCGrb5Ho7zcYSknV9fQKnRFyHmMC6tvuKjeAPyYRUUeHqSDtZkmdx2QB1Jc4CNmBqmriV",
  "key45": "63o1GnwobQm1P5aa1i2uEUPe5GoXpqbE68EQP2citQbCwD5XaBJ4m4XCEfPNJABKmMUnzn9ExDBQHWmYeNmVgBQJ",
  "key46": "5Yv6nitBoCksBpGwLA2Y6WUVvUbWax6QA2xQYN45BeDNTuCLtpiE1HXLksb7iE5XTzHFcSVd5SUMCMSZZ4Pkpynj",
  "key47": "3RekN6TQUZeDJv1RHbLihMwUouJqTyHPRgvmDWyyL77urubqafXksaaymY5AVJu1Jr63urYrZrUekQ484qgXYFkn",
  "key48": "3R8m41qKvyFh8d8S969fSfKdA1RtKdv62eyhMdvQPbYBttrPWvSdkL3C4soEAXvb5QMgsaVQZuF2GGz5UHt6nvzd",
  "key49": "xKapsHDQYGffW2DKRDuZTpYDcFXoqPxZCz3skbxn6YdaMypwtY7hzSczDamnf1yjVNhEXRf3GneLeEgEb3W7ApW"
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
