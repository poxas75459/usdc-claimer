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
    "34tdGNKTZA5c8nemLqprSsGDj78E8xXNGX1yZkf9T49Mbi5jP8Y9cV3h4QsoZUu92korrNcbR1hsWNfhU5nWjMbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26d8ByDwycrdL7pRRM73B3NyTDBKepyoJqRgED716s28QNkzBRzLpWx1kGkmsjqtUEGcmmtJNkFwPwuoV9zBNE5Q",
  "key1": "2GheeXotfVWxiQ7dwaTY2J1t2miThRKGH4f2bfbY5NZEVus7KE9uuqgbkmGxuaoepnxYzsFagqud5DEKjF91Hhvq",
  "key2": "5s3yGagruRVmDZfNPXqsK7HRYVJPXbaGTe1TH37xmzxVy6pJhBzFcKHA3DqFAb8xvtBip8E5z4btujPd5MX5tdW8",
  "key3": "323vAVFsfxKBmKqYFA3z9eg1V59tJYEZfUu2h8T9GSxj6jYSzRytfEztW1vYFqBFeRzcn8RqykdqXKT5kXbU9NPn",
  "key4": "5aDe3U7uRuqi2rYq4dU3kA9kkmXS1cpU6Nf5j7mzwQUjoAaNrhczCeE1dCRcAUzmS9oveFBEkE1cbuZv8DYAvrcW",
  "key5": "WxWeMAeb6kGx8G6Pse4QY9UX35ozNMxkrMTQ3PSBZQFHC5ujXCT1YpjA1zGmjq7xYZdGTjtRp379yrRxTccGJtz",
  "key6": "3gYqyhJ3PHs343prDuqSD39xm4wtpwFVLUppvNfJtvcq7nGsaCHsWHZq3gJASqnqbrsXT435YbEE3ddgQzsELa5z",
  "key7": "47RW65avGxvJXcsoRTRdm4fFTHAkdVu394831x36JN25nC4asYAXXcAVatLTqkDCk8psHJ5hQL64EwpfoDT7v4nY",
  "key8": "j5mVgvjUwCQ8aw5GEs2dwrtBapejzV7cd8j5Z5RLga7HxngzXg82ewTKeJbJ4C9LiBt8V9LhPTMRytm1tQHCPag",
  "key9": "4fbHqMhs6ZsBkQrrCYYPapLv2sEoWRKAe7b9LPbFmzZ561s2sASQJ8cTovnUpE89U5t7uByUj9qYDKpWYekfRHQc",
  "key10": "4CAitoQzcfuhPqp2roxs3rzGijU6WRgXYYLEVQnUzQydy3uzFYUqZh1vrWpK2iaAxh5XM7A6qCgN8ChN8pLdLyRd",
  "key11": "2A5ofVdPR6pSbDtGk6jMYU3QusGLZWeMpSidtdofSvG3prkZUidLLV4XcyvD2RPW4wTV6npAEDasMKAdGEgyRTL3",
  "key12": "doRgqPac4S32yCYZBdYycRhwaRciinjmAiGpNSKYbaXHutJeBvtjRDuM1KKcFUZW2Kn9JJSGzKtf9yEPrrNCRMA",
  "key13": "3p2DeRfUivZ2NWtWSS9Udep3egcThBFNRPQHATWqeKBkdZVRF7opYMyWLxY4H3qqZqt4DPykUdbpSJy6r61pdYCD",
  "key14": "Cv5fwrF4CYJobCC62A1nPGTeDCAAWRogWRUnMcnsJ76uRNFpyiDitVi3zV6C31vC53x7oCNysRj8VfqymWqxP6j",
  "key15": "23U96a1zEhxCLexSukosn3ftvFeNJaZVCG7rrzomoFd4aSKBa4HBWxBdapp2KQsFtRdWFvVmNwo8uKKF5bhD7221",
  "key16": "2MvfhLMuQyhsMhbTRpQAWgXc8WVAsPy75tigaTSp9rpWySARRdRz9RpDVqatfo5my86ayrq9ZunyZWz9UmPLhMmn",
  "key17": "3GDFtXVLDJxqgsV2GAEeFH1HrggacXf2hZpL6oBE9gUiJXSLfUsiHmj7MhDNH3L7ntfQJNrWwVMNwusAg98YH4md",
  "key18": "3vU1xveVBiq4vFAdyUgYjz39RsxAQy8ExR3W3z2qN986wUoEGXP1sWNAYAvvHzFfLfyMMyUzvPdT4wufQWjewdv",
  "key19": "4q18n7zeYjtnsLZh7pcMubVVtqc2P9dGy3CVe1v1vDBZg5gtsyU3xfTmVWpCCf9invbU9hRt5NBMJkmbUxEHtSXp",
  "key20": "3g5eWbfpVtc4dsoD4x52fZUUe6c1ZqVREXVTo5o2NwX5UAvhyFr8cgyh52YjjzztT6LCZeby7aNebTpDGTjxdTSs",
  "key21": "4yGgP59QE6WoX1Deoqdv41AMvhybe9puNWBHLMMVGfy5x3UueSxWx3w5Ha1ZasKJMGDvAuQy76r5rujFrgXCeuSf",
  "key22": "5D1QRQ9g4X8D6EG1RyHwnxfN1aTp1EyurB15MNGKStP3Tg3gLTUno2DNnWyY5kPohAZJeyrKYHgwav41WS2T2eHN",
  "key23": "5sgoQ11f994N7VjmWs4viEDQVyzBk36SSmW5sdtg6xrsVpxu7zuo2GYoVE7UJkEAD7snULc34XzNk2shYK1p91dk",
  "key24": "2SsJC1gTKtmhFweH73jeJkhbQhBLvtkQB1oEkLP3HqCi1tkxtU5s9D7kAeqdDijeEV7As4uJXuRbERezS85sN2gA",
  "key25": "dwZRsX7MG1srT9Q91EZr9zd5idQGpcxnYzN43Qf52nQuN3b6hwqKs6Lx6e4MGhVQn2JjUrDBr32WRopdTnBnGXo",
  "key26": "28sJaFnUpgweBLJ22U5yJZGCqUNw4DjjRZmxxy6seBsF3GqBQfp15MnpTDAj6jxpMgYF5PMAYgzvKRkc2uoVprJo",
  "key27": "5BuRYmgVB8T5XhocsTssTcBMTJGMqsYNRCnLREAJy4PmVCXgGg3UwRXDDvDuk7BX1SCDgRQZavqP4S7gKyG4Az1w",
  "key28": "52vN2exWUvs2hdFBziS6Q68dLRKsSnYvMb5sUo1CanpSPBAq6daeRXHc7nuCVvsGQpqKqNCjKmahMXXWmGRVryT8",
  "key29": "g1X3oSiwot4feAb97B2FsiukyxVRoJhbmhgU6tee3cF4JyDnw6QB8VeVEHXsWdDgML4ggzdTi8ZQdHtafATN3iN",
  "key30": "58Cuo7i9atmFF93V7y1mYjrAxM1NBSFhWYzgHgLn2w7v7Rofj3XJYzKe3dfdyfPXBDjCZorgTPPCetudAiGPRyuE",
  "key31": "44r4he3rfUeuAGt6YqjYGt1vJqTDErThxgbw6YMaF96581ggaJPW5UxjXdfAGLn6WoxMLFXMeaJxiyUDqx6NBje2",
  "key32": "3ef3W4Tf6kFtZQ4d7sfftUFH1TKd2q7yveVuR1d24RnnTm1EQPx5kMGy5kBEpfTkygtJ5y62bKooeUiCNHJDZgvx",
  "key33": "3fSYxeFF7BG8GcxncFHk9s1bofc1VJAbeYBk6gjfPsNnooJatsz8G7yw7ZUZqgoKG27CdvfejGT1MCoTUGeAtjtc",
  "key34": "3v4xq3oEiHyapFuMnivr3v3SqqJTUUrGwNdmh6zT1i6e7nRfjhSEiB7KvdWssdbbKfWYy15qsfJJDgjDU1K5fdbc",
  "key35": "3sFBxx7L7GqcqHRZXsaSRD9ZGVj9oog5MHi5LHFHEApuhD7qjA5RsqCgPbWuGTnuRVk5sCemxc5Di4iYc4a9ciN7",
  "key36": "3Z8UoQwxwCyR1iaevm7cVJAPUTQY9TZdW7fABSXzNpAhgX9c7RjDtbbRQuS3bkqpqFu8WY1ahGG5qqn2yKhb7vic",
  "key37": "4QhzQvnTTLHPm244efdTvCGihnHHLmuSV6GJKSeESZBGCrMZPSSbZ9LGhKhkZQqh9K3xnQsdDzT5bgD3xwjF47B8",
  "key38": "63zzFv3p7gYXzBFtDgKDgSKmJ3Xi96Rt4H4rgTjoZQk2nzvCavZMcd97MpKo8WkSvpcKJ6cL5BEqA9fze4GUB4yv",
  "key39": "2DR2ZvCHRoGnPkypi95aLfapHwCvFZNzLNAKaxrYnHFeF1HnS5YoH6GVACgaGrghyCLdeirWbyVgaxFZKCAYLTw2"
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
