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
    "2tS7gCB9MvUrv74kvwmhDBsmUhk8PV8SZfJArnsCUBLkLYqiqHSGMxjSHGHxzgpXYWbgQd4hgZpizvLgbehayprp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RyWGXttZawvuAFq7ys3FBwUdhGPVDbnWr4ZXof9eMEHaQv4oWtqPeAQXzLm1JGH8hybNcRt1jBuwYD5QRGorZ4m",
  "key1": "4vQGkctjujSoJWJ5F5i4fw8TDr4c9xDNQaTHURFZ1BnwWrraaMQ26BCD5X1cnEeuZSzm1mVH1qtPpKwDjGnBcU4D",
  "key2": "9NHJGZWmMBRZfsZkfe2kZckSthZvmP8Q4ZcVx4mkaqdoMt6shUa9zRe6ViKrAFYBgvt84eFLWcT1gwUXVs9YtY8",
  "key3": "3SWs1ZFM7tkJVjRHmHHq4uUKfYpwB6PjASW2K2bTnfLK3afRgWnbdneV1jQHYR4tsGz7DyTtgPdauuNwD4CzXynr",
  "key4": "34PmyYEpW13skyr2ZGpcf8hkRC58vPLor3iFpgtFqJsdzNo6E9ZajNV9JKEKQ4heXhpQvj1gy23fUyifUFey1VUq",
  "key5": "5hCL1XQQoEwfxNtTJgyNbhbpYuan7bKYX4hmim9k3pARFaZ8GBa5SUQvh6b25SvXi2L6QssMTjybZdg8FA15rAgs",
  "key6": "qcTLFd9TADpUY8udaVniwqLCcuT3hzF4s5FAfHfzZ5smZzVeg47m3BBW7CXBTSG2nDd4ZnbiZWNjqnwo3UadQQz",
  "key7": "27CWc7fzamr5FZA8EU88w2rF2t9Umn55BL8QFfnpVyPuvzyWVPtaWwCcqVUF2ufg6KRaSuX6ngvFuFWJioWmecae",
  "key8": "4znYaxN7j7CGxWJJ2bNjak8Fhi4utw51omCUiiRST9BkEYQ1NkGd3TTBGosiDtnoKEoY8LCS7dZ2GRHbaBCC2sEX",
  "key9": "sh8Emw4UybvktSuMnQ2czT4WCgTPD4XH4ocuRHGf5nNf15Fci5F4vZxvfrGSqBaxD2BvsbQVepv6bTV2zxbZno5",
  "key10": "5KcAcLn7ZDNkizJ8NAhoCJefJZ1gwQVrdV3sGfAxVr626FJFb6MyDNf35mFkuM2WVFix7GTGJWKWs6vFD5CmapQH",
  "key11": "2ZEEstdQJCJCWM85gmpcEKP58PuN3NcFPWod5HYVHxaHk65PbdtYu9Tqw5TihsTH53ABe72XppUB6r83aGqjhQS8",
  "key12": "5XFSeyNQNB8zKKLvF5EdyTfycSu1acRaDLCcabSEYcJzkp5Do3GxWzp6FBGC39AWsWCiUmNgUqWd3y8nVmvFeu1b",
  "key13": "KsLdtHMSEPdDuuT16RomvpFWQZevNgAM7NcG7rPVGZdpX3wUDeQfpaSvBp4daF8LbTLfhfUk5xFPUzpjMVgDQxH",
  "key14": "2wV3fh5ayEKSr7bW9ak8jsRrHM7pKc5eSLL79XhcnP6q4bfB2D2vquNkSLX4QpB2LXVdYotdZ3Rchd7rTSLydAnr",
  "key15": "46s4zoHKgKbmBgtpddPBRyt1RJdUzGEdGLSM4vMvzVEh6UFZpQB2mtPajZvwFxPnvuzPJPhaDmDwM8es7HstDDS4",
  "key16": "3GogU4t3fX6ieExpT1REdE4fGJFhdJ2mNaM6m54C8sNnVT8nNcjbQTWUzgBamzsPpWnikoReJDuyiQy9sRkwSCQP",
  "key17": "29tUffdRB4LpQELZyJgZU2QoX7ffqfsVm7XkNVR8S7L42hpW68dmm5sVYiuGkmDX9Gjk14UW5cVsbnbALX7tFXcQ",
  "key18": "4PG2UadfBHNzD5wRb2BtwbF4XAkFvSZTGbAsbietXW3gkcSNfPGLvSUWCQjyzYkvYWRaeLr5wPdQWfR6WDpQHL3E",
  "key19": "XCnUmg4iDPXMMNMXS6hYja23ZbdKhy4EYrXPYjn8tnBbwmjRF129Nu4eA1SXGyJyLUkh9C7ZPNw5nu2bQfwQABb",
  "key20": "48gC17yesxM13cMP6zSC7an8akapAZUcRm7h3yYwkQ6K4ProLqqZuThZUkvKTkHrUW8ofzLr8yfDiu9MazFin1pp",
  "key21": "2edqRAzBzKDEkRHxi9xbE6mkWBbqeV8tgmTKszs3r6mnYyVk3MDV8Szd5k7ATHezxuqQgmKU4a7NWGLQhPA5HmVW",
  "key22": "5hxPEtvVm5YthpKMS18LuPpnaEQEmEgvM5Eob26Hbry8mFXM5pYW57pGLi4anFf9c353gqWhaWfrv7PaerkND4cs",
  "key23": "2UwJ3FC9Bw77i5KNsxS4o9HQ8GccAVYrzFySisb5a3ahiUQ3HC4aaVmnpMXu1MNZMU3u9AiMCLC3KvRbC2YQ75Q3",
  "key24": "3VqLFw5yQuxTQjeyWfmR5oBDt769GcYUvJsZtMTx6M1ErSCDHeR6CPTNsVS1bqLnJLAbRoLeGjD4g1TGBh41PSYu",
  "key25": "5V779uX9aX6TEvCLEMADuH6F8EALLcroFShadF3y6NyjpyBskHA6Jyiv58fd3t9Kso64d5CCULMmsUXZARMWcL1W",
  "key26": "5ixp3VCh5CXVQ5GBpXAgTTTNF8WpyXGLeG3xdJXVnPPfaY3UgSqCcJ8cWY9gFZ8DddtC7n9ZXxLePKCu1Tyw8Frg",
  "key27": "4k4r2uh2SvJ7EdfGv5cP99sLPGCm527M7NiQHL6WhUts2sS2R6fSqrGas58YF9b4V8peBC4YRJutij6fNvi8abtJ",
  "key28": "2UD7baY6ZYxekex3hkKgnLUFC73EyqeDZEmXBwhWo4D6jvmRqhJjCxejoDXLW6Tybh8uFK2ZhY3GU8kairp4RvF7",
  "key29": "2DRjnGupkANbyaJBreHMZPSKvcKfCdRW9AwQkEAaQB9GyxHYoXNvYnhx51ee26ufSEPmBWXjQ9dD7eaQodne6d9u",
  "key30": "ZeFsSHVJu5iAoknfCvQ1bL1emtU3iNgiWhbikLtCeGs5yXSAj1VnfbHhRnZLMzLrTcMKH9txKzyFjFZZWsyiwqY",
  "key31": "5mg6pULhwNX7VGu6AnP7ep1tbQhBmaFGVjR6vLh4EdJr59HXP8wzYmRMvbarnPNZGFG9c8mqJ6TvrSMMe5WZiW25",
  "key32": "2UUbBitNeFohmK8GtP39tpDG4W8ztfvGhL68jVD1gsgAqWuGzJTaDbiRqfCu7cjz4S1oLfN9tUYXRYRVxJiZmxKu",
  "key33": "5DA72Gck6C2oswEikSMbDPRoQUhRfWNkjQDYCqHUV4dRrT3wJNKNm3Mh8QKhTdCuky36nEBogUEFfT6zJn356PJL",
  "key34": "52jw28w6pjLQTTMKk1LKKbaDQE7KB7MzMXzPkjT25t7M5TDF3Miui18ZwdyyEd24HsahmX6ciCd8TH8f2cXuU7xu",
  "key35": "2iMyyTzQ2HkBqpBp1rfDnTEF53WYxoMSo6BG56AHFNUZCb7AZcY5JQAoafNBNenhs7qX4tQ1YeeX4zyT8L3g5Mso"
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
