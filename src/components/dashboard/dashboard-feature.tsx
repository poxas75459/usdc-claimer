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
    "4utLaQFmCnXtC2FfZXnrEsSGo9Sn8D6d5SgzbMnr9qSN2fSARKsXJqscHudVuQpqtDJ1vuWwfDSRVyjZdZJHTJZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4feFJvKipRH8sPTEyGkUe5tjNFp439nq4wYZjXKAiCxXoRjSzefS3QS7qzynGCfyTvU9xZiTDYMmZQZFQ3faZ4Wd",
  "key1": "5gpfgda7Cj6NZyKDKHGRtmFk1WYXmeCDCc6QMGVaMymv7HTFiyWEusiLrmnxcWFxBHXnUU4cZEF4XUspAucn1G9d",
  "key2": "38qyqv4TSUkHrKWKqxsxvjjn1EgQKXsc3UuwoRWk9xM9ZpVjKM8HAdHvPnk5jb2XGj6b11hxgtPzGHTbu4ovd5NW",
  "key3": "4QnXxhbDPB88nEKyrLG2Y2EpnCAD5hgiWGNBNQmhhaDYmLUH1V284P7AL9aEuGQT1oHgScJEF5pGf7YThV61G9ab",
  "key4": "4zNtB78AMT92X9BduyDCgB7C7qy7STMJ8L2T9d1R3phDKqRhzAVwXJAA9SXS4h545QYLwWoUd6NEzE4pGToyEt9y",
  "key5": "5b1KnNnbwoL286AHcLBx1d6A1JXJNn7Y3oCeVbxaQZKadYZ9KsnfNs7qQrDTUKNnBvTHxWbzkxy161Jb1QRvQcqC",
  "key6": "2hiKcFJdRhyH8jirgixJNKABY8PnJ3JqkUzSbKpEGQKFJpXAxvZn97q3wks3vEp1WhUPhjCBfjQ9WgyAwX4jwnQo",
  "key7": "3HgYNJRN74TcGAd5cwo4jRPGvuSqXtjX8T7VpgyNZqRmmumMyLSwsxiE3GPNXbsLiLiXiY4Ygh4rzhhCLNSHFGA3",
  "key8": "2RtNqtVL3VEdPMBW2MqtqRXT3neTkiGmXbLVZUafTMBi7oxBVan1uv2qzBboKdb3i3rjmSVducZYPcJaF7FKoKZ4",
  "key9": "4PMo8SZrVAd3JcqG1fsdEEenV39ehGZd2irdbaF9TucQQsi8ZEye8bFMWZZK1AMYS32F6ks2z6tYJ42DjpnH4PV",
  "key10": "4DXVUnpwVcCPWsVdbxtFn2tr9ER89Q1n3JaKGMBLfkgURMAggjf1HM4VEyA7reAj4FLjz1pE4KDJqTDgfAGQPVoc",
  "key11": "2BnyAYnQ3jCppSNRYunegdC5QJo1TTvnfu17TSuNKxRcBJf1kuezuPRnJpYCEuD3GFStDLMWf67XLWvf8aoaXiET",
  "key12": "2qpe49CUvbpVutJEZzLLb1gd1pFSwcWwRkEXxKmBprWgshXP6PiSVjbcSEMtqCrCMvGUpQ6si47B4n8UsnnP1KgL",
  "key13": "5ekY1ixK3JHm8kNc6uw8BqCcoUya39XYGpoGSvUgx6eigDcV5hzCGsFvZ2MdTaMGArY8uSmj6TQt54FRqAXgWhkW",
  "key14": "5tFZKmUFtc259qko5fSEjgC3JSDbVToy97mDW27rEebMKpueKFYDf2FmfPP6N2JdPGaJwqXfmtJt3dwhoPU6aa1p",
  "key15": "5xk7NkBX8DcUDHJTEQ28sySJFtTtE8CvCJuMFzZGXRYTsaNvN8aF3KQsZ2fkkp28frGxeFuosZ6XcuiDErHs7L3C",
  "key16": "4jF8kcSsxdPZtoZ61vEzSbEzVUCbQYY9p6sKUj9NtXWzf9UJnmMRZGRvy9T2s1ju2Tmo8AaiHCUE5kZ4PXF1kiuZ",
  "key17": "33TTg88u4rGymQozAbDo4bN5voFUTXt9dQU9cC4smtctvFZqR12bkA34wR5cAVKuBY9DwB3uGCBsaHw9MgM8Giet",
  "key18": "ddsCGD2xBkRAuAFQxXkf7K3kKvp9tAdzWqnqoF7uJ1mdkNV1YCPm3sYkuqguvRJrpSFaZAvRVBnb2gXsGGozog8",
  "key19": "4cXkiG464wi6dWvLtpQQbq1zE8A3ayTnwytfw1SEAAmFXty55P8GMmKNCP1wLJP1hDgo4XDApGG9QLDSNRgGd8Ma",
  "key20": "5f7EXCt5BjFf2dM1NargWDo6TdXfz436ZMtPbkxzWSHFnmHH7BMjtQGmcs7HYU8M5negLhYMaxHrcwjFUYnFY1Au",
  "key21": "4KFeNtF6yG1FUmCjcJ9nRcqJJFn4hzSXYkjqazUcbQqETEqi9rYtnmTt7mHG17161PTzGNpJMagkerehFyXZMtQa",
  "key22": "4pTqKQZY8HjjrViTecY1mC6XHrMkBHZeTJegwUakLxwhMD8AMxcanzjB5Xs3HRj9aNUb3J9X3H46JwHCu89BXNST",
  "key23": "35hAZfXkcQrnV6S25W8HDjvKHgJp5iBcdiPspLWfmozWCshp7zwM3SJgkp95tfBYu2g9SS2xKMyCPHC6ShFRJmLa",
  "key24": "49j1bcaC48GSNTQLPE8k9GAUNDrBWzGPVRb9B9HNy4mtaoy95CXxwWAJtvVYMBhLqivVSFV52MDf5nbaeVwtBvXD",
  "key25": "sjwcPFoUAwaL8bQbo8kpBJa1q7sZyaR6zLFN6UBNpWGwJaYHZFaC43fYD6QNbDijdpPU2qoThaJAV25TNyiYB8g",
  "key26": "4fe1j7p6FNY9C16iZ8Muf7MP89GmwLAHG6D4bpmDwACNG8MF9ypQjJJVCiQgZk6RNKNgTyBuerwGFZGKq2nRBNjj",
  "key27": "622L7bGvGx6orMR5y3Q8cxdPGNdu24FN2ViYKEPjAuVqqsYZsyRKuZGoKf5N7KCqqJFgigVxYF3xnbtTvKAnXJeU",
  "key28": "4Non8QW9CZFQRGFNw7Tm8DaLvrR9cy1zkTCVVmUVn5Uwyt2CGQJKH9HhFw3mMvbqTZYQi592Rhrfe9VMtsqX2hHi",
  "key29": "4GhUUTAMz4Ut2ZZYcvKNMaTEQzQyBsNbT58DJGfAgVkaU6iYYpHy3tny8D2t3NgQKqCpLwxB9N7QPdzbASwb5qWA",
  "key30": "2SB62xxhPEEKtLnKsbnThwRgpFpB4yrtDHMGKuGJ8ujV4K5q4aZEBE4xofuMUbHd6FfyyyVZj2vq8DR2tcoAjhKp",
  "key31": "3kn8gzYMX4rAaMAVJTLxqd6J7Hry59WhvDcpX8r5WXPKHQqVSy8ERmQmosBeYcT6VQTjehKAuoyBHYzPr4RQDLfn",
  "key32": "2m6vFWPEb728ZKryg57HS57TFA49iLKaqgv7QrWWczT3a5XXxH6frbUyVut7V9PNVpTQKYV4U3jsaXBDczcmVVny",
  "key33": "GrHyjEsJCjhke7bqjcuCKapZt3Y7DYFS61AwGxkEW68Bra45SbRzdFGaXyb8MAQXnY5xcs2kr75uSSCSvCdJ2K3",
  "key34": "2Nsdkb7C5jPmtm2u6Pg4ydiDb3WoddAganeHJGqyDeUPNGkdXR5U66DCZsXRkNQUgsXdqWZAcFQVKuL4UEWTxxZo",
  "key35": "54VRCcK7Q6gYBZs5DL3A7MNQnea8uzx6ZW5rxJEce4mi2Z3tps816qdw33dQN9Txb21pg7WN8BVE2LdkkiEKLW1r",
  "key36": "2UzERiR2oMAeZq8rojR5aHyGDBigTYSVwjYmawJavn5Ht1FUrB2Q4443mk7othY63yCY94ovG5B1JtovBgxsn8f7",
  "key37": "21Dxyejnu5735i3573GD5sVuyw5o434c3poZRAfXa9TFzhaSTAAErT89VbazS4AYUaVYmg6gcEbiakMGruqxXiHb"
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
