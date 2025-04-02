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
    "3M5Ps8rDM3bh7xV1yZB8ynyhHyz2rJkVsMh8UEwS5nH5hKHWkyrQSz8BoTw5g13wmE599zJtBQJgDnzyiwddJ4c9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsCCnKssN2183B7NuaLJNyQWtjkMrVtJArA4pSgWaxgTJhz9ryHpjtQ1Ew8MFuDjS4tKXA97AJk8FRprd8ZZU81",
  "key1": "2wbCrsHDBKmwuFoWJUYPSC6PsDRhwcJpQStJqnMbcaC4Ut2nwDPpiDyn3LNvyqW8rHvL7aof2A9KqkmaovXyD4K4",
  "key2": "4vfjKdhoewW2hnRibXXYRXLE5bvMCoZ9VHZWTHP3KTecVfyP1EgAt69fQegrQRYsXFXHEWFco6qA682ReCv85MUx",
  "key3": "121dmvCL1aWpEcwefoedVgroeeVnfy1pkVE4Zze1VWK3JTnkMmGN8N4wBH9eeMSU9G47Q8HKhgTVvvyGZYMP2CBk",
  "key4": "5fY5oe1WHCetQKqnJY2ed5zRo12hSqdVtwYwsgCsQuuHq9msZ7dQUUqXdWGSQd4ZMPzofTAiEv64QQE6gmCxgPjd",
  "key5": "5nxJgPYCZQV5Vb1oQxgzwtX5X4LUXYkkQjSa13KWcS8CWfgR5geJHs1xe6jp7JTJshsLj7GVzoq5dNKXRqnLS4eZ",
  "key6": "YqBfaGyURbSZAmhYxTCW3K9zqtZkkEoRFK7zz8GkNNhC5qCJfLUdt9k3UjBtYgzCbfdb9NpEAV49136s5eYayff",
  "key7": "4A8RDbV9jzcVWT64myPeF8enxq1wY3RwAxQ3qkPJrraUbZm5muJvuuoGuxJC2CEusTXR3bjNoKRSfZTn7NWyf6AZ",
  "key8": "3kuX2hUTSvGw5WqhJFSpeWsvKmsSZbHD87XGzvyYpPHpJWxpc5s3oawCRprqrt8kZ9ccE67jCyn86wJ8YkSW9S2k",
  "key9": "YbtCdXHNbamwhAMP3Du5f7yBeDRV4Ngq4coSki2eURVaV3KNPBFNYcJH283vNzm4kf6PaqTQSn3xWbS5EUbwJri",
  "key10": "2BaNJL3fz6PdSKoQEneCoe72vDUYG26SJWYQ7hjYwmabpemhjhrhkG2jEnqKjk7JRiTupm8ymWL59jUk7Y7fHn2A",
  "key11": "YQNQXnxNn8kjurhMh4gQvy1o3qGzKLSDwFJGkHnPMGnPbU51PXhxTLbo2GvmieFfysoXCvcczpXNqJCfBpVaSTk",
  "key12": "31DwEBPoiHGipCnwaYKjXacCkcwoNhuh1CQghtbg2bsW2hw1oWhF2KnWubuZ41fj4L9HnHv8Dq783HCAMU1z1iTX",
  "key13": "2thPW6mR1ufXK8NYvKHDHu7rr1BWsKyQSX49pFzcLN5YNas4J53LeMZDjH2Eusz2ruYVsVdiD2WmaNqTPGCYuSz2",
  "key14": "sgVhb9N1f2uCz5PyFnDaoQvpq2H3WvMrxqNFcuZvrRoVMP27yXKyL5jPhE33B7isRd3aoU7qGrBWhcyVhtZNY3U",
  "key15": "2kfysgJxakzjrw7P54JLBxFMH5hygvFcxQ7X8ZZV3v5q14CPeM7PBDEjyF3vAAmYR1B7TrnCnjbwAvaKzRq42jde",
  "key16": "3DaYCE7cCYQWj5uXY3Md9rEipjqsNwauQ6MUWzoHhbz5JcGWR7rmieXc6p5TKwM4Y4mZbcpeqrWrEjM8HWwUn9TT",
  "key17": "3HudT7c6FJ5iT4Vs9yjBmDd72jz2ojdzk7wabc6AqvExLwGYvqWZcikCEwpwfsxG9cgKUkCAiXY88ZtSYgmkFFxD",
  "key18": "2eEA11mqPZNspk7ZXiDgcxPgZyJwecja6U8LL449fQpZqEJ1RtaXGWXp5MxYhEn2G9Upv3Q7Khd6W3EzqEYMTRqz",
  "key19": "UdYMCHdSxAUWzZzBHp5Vx4jWHgy8qanL34NSuzvSqxU38oCCWE574Vkux2gKYFxxKKJ9ohVTDyduCRqESJQECyE",
  "key20": "3CZhpzERaUkjv9iiau7vvPrns7tDVKMdxMBv65atgFUn7nHb2vQ639PmjNvRwdBnTh9oSSBZkRffsB7GKKHthR5g",
  "key21": "5tE8Ykdm4KdTVZFmy4szbYVCo7DvGfKLScRJayhVxGfTjMr9RpmBsZHjZaVP9NMsSfsbKivt3ndWXZFt7f5cr4gb",
  "key22": "3Hie5rSy9n6NoL4kMFHsQ8ahgkbi6jSdGU9CD5Y43TaaR4ELvnavfvrMiPsK11PMrq7SzLyR5b9z9uyGM2MKVWNW",
  "key23": "2KTNqDha91KRsnk1VkSKokPUyMY3V3eTurWeN2AW95oYYdREugJWTZR4ddwDBhva8aBetBKm56PnWXnAYA1vumjR",
  "key24": "5hCZzdw8F7V66NgZCgR8q59eBgXnPdYNs7DvhCQGdhJcAgYXhySPZSVkcymDHwospZTaRb7NWJzn5szEV2Gt3eNd",
  "key25": "2QzdYbCbfAZsnLazLk3AwNUFbH3hfdNseaAzmyrCL2CptZLbjbAdvxcUcVh6atr3XtMEizLaob47yaTvyVrXGTfW",
  "key26": "5RdLUNYscGcQxoGgRZQ7U9VphFU2G2RKZ7RbAGovmXqsQ8j1gM5Qz1sDDbmDnv1TUv9NRUyT5QJ2rkH1rHm93cBh",
  "key27": "351YfppcpEj4K9ETaW7P5uC4CxvYpQ8UTzmnhLsg2cY8Hk3gVMEzPYgf3CUir3pJoNwMyWZBVgKdZ64A3Cr7reB8",
  "key28": "3rGLex5gpxhvj15ndpGBDN6BC7xUqi554Pr3Ea8gkd76VLWRFwVwWbiMeey43NdaPyep1UP5p3emXv8KdTbymQs4",
  "key29": "5J6i6KKj2ukKWT9jQGEketgM3LdmqJpF8w9yBuSEe5smXQeCKYXkhGNibGEhxXWyLLzd7dMBft5b7NShV3BRZAV2",
  "key30": "4JUeg2y6ektMcT7Ayssie3pR1Bk8SFQMKUdAXjEyHug55JHnkjV6anebaXhUop56X4x1trpgxC8eGzycK3q5icmC",
  "key31": "3mVavqjqs4FY5mSr4pBFF2HpHsGK5L22cBhjLQbJ3UFH48dNa9PiP3SJRAdncChSuy3zUMbE36WkLsgRV6MUq1AD",
  "key32": "kAnbU21iE74Q5chZpuxy23o8vrtSWiAzbxWT6XyMLwZdNxepew2gSkLuXiuVXLiV5QrybVRwzNRHLAh8sM71Xgd",
  "key33": "5fbV1a8v12226kjM2yusauNaRDTiQtr7mTNCtfykez5A1T4AyA6xwwngA9BXBvrvS4GFjbGmQuAtWjUQszCcLVzh",
  "key34": "baLTNcsaMx7Aiy67sEBYpggqwuZm5TKbDsGbnDnjK6TpDgUJJ8n1jPW33nRRVsS6DVREVef93rBxTgG2kPCtHLo",
  "key35": "2UFWXp8VVg4Qg5UYh7PEj9j6ZufjppwKbVC5uUfyofWGnR5FqgSH1N2Cevb4sAAWEnrjpV2GJYkpxjR91gh9pnLy",
  "key36": "5yuhjZp442Xd3oqd3Kb4zKnS2B2yX3Fq6oVNyGqiELoBtF1rfm1zFJZQbEjsyZAWLieFNFfLtYhRi5Ers6qEs54A",
  "key37": "3YK4vLB8TYxiKjLMTVBZpdj22YcghNP1oFN2hX2hy7JxJamjRWrfYUXVKwHRLSahjFvPyQGn4rfZ21acL4MEinVZ",
  "key38": "47WEPgwGrRHzuE1nXctBZrRJ8F549Hf6Ecrqegb6HZyed1er6iEf2CSryWTkkezt93wYDQfTLJE4NWhc7MNS2vwM",
  "key39": "5iAfFMMukvZSKHEsbpti3zDVWRcvHRzmEcFmksgMRchkccScFH3521nvdvzCehcBmt3wntYM2xfkjbaQBzaJt6Cj",
  "key40": "31t1YqtcHCY936eW9KhkE1THnTAaax42KYM5rSK6s9accReUZ32569EangTBzNTgQzXcAXT8KEhRSHz7MnkzQfnM",
  "key41": "2YJNCnKgPmAy9NsSwemy9tSKvBRnutpRz6kK2LpQ6c5PdkxicmQmmNiCanUmpjH6coo1Fy4Lfzv8ngCGfPC7dT1W",
  "key42": "2mvA2an5Rp3G5PJah7Ff7V9hY4bXRWqMhgQziZRGdyBNazS9AsNiR9RpwD7bqyWrTJZUDs773m7Jw2mFDTaTvuZv",
  "key43": "4Wko7im77DmeJQg5vkXSyweAbG6VYN4eAdHkfP3iipuxaCPezoymBgthDJbcQL4tu64mbMzoNXJyMGwdWoGa18A5",
  "key44": "osPU5dJBWMcmxaWdBdw9jycPSow1DhSuWS6EShjckHaiEjCWa9izd3W8Nm9DtNkVwWU3cp97KwrgVmLfWPZuuAW",
  "key45": "5mSUT1xLbc3Nrx3LEAyMM7ZGJQatKvWZTr9CsSoNMJfVuK8XmM6yPRqFRK6pQgQ746SvLEUfqYQ8ZeMjnSvLmFgT",
  "key46": "4WQNBzB3y9TSAgygg7S1rX5ZPCGF7xr32g59DvfZZ1F4qf9ZuK3QfYA6rfpEPK76UrHkVXY7udzT7K9L8YqE74z7",
  "key47": "4ak6fwNw5f2QZUvfCu7xKXDHqCK1wQY6RSYAKxkU8WAtHUSb2aHxu6ivddV7zzsE5kG6h8mZULzo6yoaN2cDc54d",
  "key48": "4nfTUTjowJZZYQoyHDHZ81jkNF3iWWLGi1gdt7LvVRseVXRzzfpTm1VSghNXKMPY2AnudGb8qpoczKF8mV83Z42Q",
  "key49": "2phKS67xEVAy3xBWAAFfdNz287HvK5HWp6qTZabVWtLgz7QmgzxRqvkTt8KckF61NViKFuMxMbRU93NRGQhFSoyW"
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
