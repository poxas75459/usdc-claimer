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
    "3TkneQHt9RSZMbq437p7igckUgWAd6yETNMiUMRNf5A3RTmCZttoJro9sZBipu5GRSaCdc28zdue36Wux3JrvPbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47R6VarB4acnY1Kn2JNXQ99B2mr91vhjCjZGiQQrC7Bd7kdQ4jZ6tq9ANZTCdM1b3pDnhcarxCsWSj3v6i35PUQ3",
  "key1": "39U6mepMMsZ9fWiNfMT16BvT9TDDkA1B2JpXAkTJ2D4MKdxDLGcnaL75Cpfcp78eRZwBuC5kLcLHjin98bMAy9Nv",
  "key2": "4cTJAVJFSXq5es2vvnwQA1pcAPLxhxvs45mg8SL6hK7dLG3bRws7SvFFgr3metbomBPy68JEdFDjhuR631G9wpyz",
  "key3": "5TWnbVyG3HvxnWs1PGNPCoGAg2h3F4U4svAANoBXAefaXAkuA7vxYVtZuAcZ7drp8quMaaEQ5T8P2wNJRb1VaJGY",
  "key4": "2AVcmiQKwpvgiaadevYr9oQt8arMmfZnM6TQvkqT3m8f92JTpB9HMx7uPFNMaiVwSpW7rFgvRC574uaweRVSg6wF",
  "key5": "4PSZfqdHKSjKRDZ6U4r55YAadVbRE68kB4t4iT124A4X5b9uaFsbyR71oc6eJrqzRpvM2UrPtPrEi7h9PoPGi1Xg",
  "key6": "WeViVBABioi5hpTshc9ASaekdMkpmcTW9i1MSJeCRnajgwq7ZcED4ieUbJCrJw7ZCV2UK3w7VeANwuBxoJR55d2",
  "key7": "2L3RpBRAH9XwRxHxnLLFuVW6mgZtkPGyhov2hpXwMcErEeVNERJf67UE5od9HGW1ifYqXPs9FzRPBGZrayBsNH5W",
  "key8": "3N3BGUuUiv1RXTzj3bksEU6qJ7kbomT5VvFuUc2LFbEdBiyrpe96r7JgmgM6PqfX3auT1kF53McgBBjFusPfYpP",
  "key9": "2pWcEyz65hbA2KwnygC9HzV5JWQDZUAhLqyHdax1zpd6PMd6Kq9iRYVybMVuEJQRXysoPVZibuMVLkoFDtmoL8jE",
  "key10": "4MqwZPCHQQQR3Z4AMgBHEjDgKvqsZPZgCDnD9muwdC6PLRQEvmNpBaY75BS4exJBmtGc6h2oNnfwS5mJhz9DZ1Np",
  "key11": "4hYqvCosf4u7TrYSm8Y2AovJfJccdHv8MfTwA4bqGFSSiioxQ7ReBLZYUR8DDbA9zmuHNfWSnHSAd7YfjBo93PjF",
  "key12": "oCQJKLEwTcwcnWvgcEMucmY6GpFLA7t87DD45Rkh7rsHJyFpy5spx4sCsxAuP716H4CYG8SdpVPJfvpZa2i49dj",
  "key13": "2Uw7cRRqpkPLTYiE1GfUJhkjXEFchGjDBWgrXDvW9KMFpQEoV7MM4rmiBjjDsHv7RCupvoRJdAvfTYRSWQx8rngL",
  "key14": "4bp9kijuez4s47NaLzwWE8n9EBCHcSEJH3M4AYeaNY5tgGPWqvFRXxNxCCpViMmKT7Q8q3X3jt4VsvE9PArF6R1X",
  "key15": "3RGmFgDMzkwWouLwjFGzUNgwjc8unrjqmPXn4YoQ3sfyMu77SffU7vtNpQ3ZYH18cc8tSXwbwjB4ftCtzNVGvWbw",
  "key16": "4FgVX6XcuDMYTbjC5Vhejirfb6Avqh6GPtS9oa1hsuxJb44ufZq3KatjypNupgp6dfGPzdjZL9bemmc8MsGfFQEg",
  "key17": "CzR3nEM4qRVTQcBeCVmipbD7t7oPfHcC7PE9pjWcmhiSn4fqeuLcpS3wxWfWPEf7D4K22qvuy1cvg3ucBbpyYnf",
  "key18": "4HCWUx4J33Wg7tHnQhmjrEiD6Q2who7wupsryJw48eMqczUvGyGH479ZnQr81gavbS62qRGVhsQHQQC8AxpjtcvN",
  "key19": "2jUw1UENXGQ1XMjrBxs9o2sho8sJ9xLNdzzY1roNoT5faqqs5wqAiRghoaWWDMHNw9t4gxWYtxVw6VPYBrW4g6QA",
  "key20": "46aQpLnKWjE8T7G6prSyRzGsPRW5NkJ6yN5Rpkmu9rhJZtyiMVqrBpwuCSPLrE8A7oJjerXZPRMiBXyGqeSwYiVn",
  "key21": "58EHz6ApfkGAKNgRUDTBivTWCMpwoR5JqtZA5rLF64zykMW7LRvGUL9tKthTysZG7ZaiNCDfH9ucXkKQnWR9dbzP",
  "key22": "2w46L5GE3rVAaT6LkpU9jrje8L9X3HezthMGdve6u5zrZs6XwHZZPqM6s1C6F1MFZ9M5ZpizjKrhkP2N9BfzGJE",
  "key23": "4S9deM68JWvRpTafSWTycuJ5Fmo3wRMzZAu5WorVzJ3JAGmoGkZtGfFoVjPncFDDwHV4rFdgTShcvyCjxueYN8vb",
  "key24": "2ziPQQDEptFj7hLftGXYwB4RAhM6oY7MeKanxkhF9X2y3fUbLMr3e2BzAwSZukH7xoGtEbseXZfpBwzvAt8MFDpn",
  "key25": "3bLVEz9zstEHagr6hoqc8m9sdvSiDHqDhvDpSDHLCfEXxTfcEG9gYMxXXH7sV6p8ao4SpSkANU4g7sV5Fg3MqjiQ",
  "key26": "3eDf4Xk4t56kRvk5vcPUhVCVH9x1JXnTgLzx3XNCoBKT9qFpcEwbxmLmZMJKqD1TAFURu5tNuYdHQKZmFdZ73nXk",
  "key27": "2mKmPZRur9ojfG1Vq5Ac7u9vUBCyxruYqXQLyhxcW1mtFPP3M5PH6NkBnSRkdSqDGuis1ZEpUEmpkV6KL3E5AAhK",
  "key28": "3Wgg3RB6Q8QUUVCW3k72bevRm3EcssSNaUxuoYKdXUApdpNQxVcEUXSj9suQao66bdf3vgNcoHRbjdHb7cpPvFjv",
  "key29": "5ge3TjzmYrsPo7taN2EnH2UsEAMZDHHW7oyQ9C8bQ9K2Y6azgsHEwHXcXsTeJXSBgPHuao38ctD2K18n4g2u9VKV",
  "key30": "42pztQ4Jho3zLh4W731VATVp6KPdWS8pdWa7WCvTbgNtE7UomH5vP2C6rqvbe6CLXG9bjxu1EiBC64yzAatsGNHr",
  "key31": "4R2xtvckKKx5eQrEJTD2b9A81FxNoPcs6tXhBUhZvXDjiR9gSjjZoCyj5VMgskeEnqYRUg5rxtrAu7XR1x58TyPo",
  "key32": "4qhQ6Ap2psxwDp6ipC5uLKY5SJpNMQJUrYh2j2PrJ7GinKyQaRuUm79dDTVqmcCozLubddtL9vb1F3myvj8727qW",
  "key33": "52GxaHVRGYF71Yj1vgpVhbaYTSjbaFVSg1rxJxuLYfdzJ4hs33484kuF6h636RgwXTZ7nKDD6Htu3gKdtHXb8Gx7",
  "key34": "2LNPGwd5Bd4cM3VYnYMewREr4Y9ZznQQM6EKasBivBjkm1KdVQ4r5EdMGjUU1AfvRaAXYueAJ7AhzvKQMC6aFRaP",
  "key35": "ZcmuasxgXnR7qt6ojhkrZupeMyjE6qdpsJ8niYycDEimJ4yW3mvADrjyh5EHs9cX2afCb38fDYZDRNTmN2j4XTE",
  "key36": "56zSH2tF86xfgZW49imVZ9M9QYQjGCkKxBERTgcbsyB4HwAAApXm1K7fkWqtQjeyrbHK48FXJSafKsbn1eSnSv1G",
  "key37": "3k1Ksj5QJ5mtPXwXaWptbDgoa22bu7aHJLLndDUQ4PqAxRKbrjS8kBV5g86ZcQTT8f1caYoG9Lq7z3VzmSpr4dWE",
  "key38": "5wPkMoyWBrcafeWUNVWvAJs9ENTERjHnDGFfBmbb26eXhkAEGvgJW5wczjgeokZpUbDRnk4jJM34Quoy2rdUNuAg",
  "key39": "2kwBD79GpKH2MiVZ62wWkztT39uPSi6JR62hYuwU78RH24yw8GcZd8BtE8dmUoLF1orppwsu7XMUY2hPaXHnWSYe",
  "key40": "5eHCoxk8tGdvE1h7p9BbMSkv47xTSrrZEQQM5forHQnEGuquPzBdiTvTY1a8fgKCVjzfA1XLafb6Nfq7QyF4Qekn",
  "key41": "5dKM4KDiuc8DGH9295sWH83eUVd7mUWjBsZvj8UuVuaNvfZUsPTKoLxXMoW5Zcz7DfUHqTC7M9GYZx8uY7JbXKgt",
  "key42": "591pWZiYqWDXmfPaYJaBNDPswVkbcMPkeSchic5LSYLmCsGZbfD4xree2NTdusKnDPm4REP5TUoffYF6u4Zqc6oa",
  "key43": "4H3YdCqJYhm76nnetSbzMwNHscvbac4jGXJmq4Rt2NHaQYpwoxLAKCJAq6rVa3UMFV8cNQj9EdwzBkGRzyjJktL3",
  "key44": "29afwvhhEZ3Lfdb9ZK77Mvdm9XEHhYTJbtpbUhobooCD5ioofUJfrRwzGkgLK6AZWV4VS4BAbxFjEKqWJGFfxZhy",
  "key45": "4uY7HEpSv4xqiDoWckwEcoUL5ojosNVZZKC3XM7GGe5Vpa53vh5wd2vXp4edPzQeEMa4yitm76e8FYjnCqLoipbn",
  "key46": "2XFNGEL8TfojV7JMpwEsmJua5gCjE7JFEV4fDUf38g4zGbr43bmWuSrADgzhJDeMyRDbuDaNLdFwsCsBsbj5rkc1"
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
