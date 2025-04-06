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
    "41naRj4MZWbvnr4bxBsX6gU5BMkdM4HXbtpX2SQTzbEykhx8kpgjPh3dBhcGntDroFW2MBYJTHBdFvEUWWi1AvtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m8S6wbVc1GmeRbJqhAtLQrNDp68aw1DMFEbbcywyvwWKvkG9WmABW4g4rKbPaYy9b3dopwasrDMGVpvMNmUfxL9",
  "key1": "5GRFVicMbKuWvx8gSjsNZqTCH3kyUAvJ1Sr29GsVVTC9usxQeT41Fa5NWhxdGbuymNKLEAReRoWKconNYf92hvkX",
  "key2": "28v4avLUxvbyGNdWg4WdtLoWpKHfpy3ZxtJ3P7fkp1GPJQt5tVjStuSdmWw71w936u3TBjyoqeKrMezyg2kscyUZ",
  "key3": "4LdeS69UfgdeBnQcgRNxkNEt9Ci1kFE4pWrWTZuC1e72VosqFKdFYssVht7MnCGqEW3E2UzTKW53qvRYuLrBpVZR",
  "key4": "5cqwGngYZAa67Sox9PvXfkbjbK9mHSAWucgGVLdJWYuip5ZfPWjfQrbLvZR6g7KAZN6Q8i4Xh6sQPFYhvqTw8xb7",
  "key5": "49DsbNBdqXse1xJ6nrW2e1Fgb1grFroA5RBULCUVspL22sHXUUMEriaRyU8Bpiic35iYs5GWyeEtj9MnTwxreqSN",
  "key6": "3VeTAGiy9yHjBsg7wDneSKx33UhWtpJgrwuVU1EMcrcRPdq7qka9RFRQA2irf3feK9v9khxC9ectc8FDqKXoHYZP",
  "key7": "4zypqYx1Kbkp4QpceUP7XHmuhpdyk8EaLw5C2vSPRi61NUUArZJC5QxqcCyk9eS8UQMqSBx7SwgJ42XJSBnKKVS5",
  "key8": "2AWKW28SxDNDdxrWBHGeNfyJ3yUqmJEWBLdkdiKTFAJ3TYBTJzhu4M9uSWJWN2Z52dMynvNX5JCHDMUECGKjRmSU",
  "key9": "2e2NUt5LzoEGxratGFhhnYGLEKRkNySFUUNa2bRc7nBXSs3nZWsoDPQSvszSEKWqfhRPDg6Rev9VgR3Ud2isoE2X",
  "key10": "2Ke3HMX46ZJSzArHoCVaE517NwPP4cvXEAef2ao6AoAz7PxvbpSnMn28SauT8Z6P1QGndwWm7ZiDi5dJLfuoanCx",
  "key11": "5n8TZfbdECnEMcYAaqKXmt2JNJ6Gwk3TV7VCb8SYLttCQyEMp3PBXWPwCQcvDjBeCKVaKPZS5FBAs2YLfyTbq8ZT",
  "key12": "4jxGGTT7FY4LXnQX4kTXqPRUbFgWJS51VtSbag8AX6kHwh4r9MWvV8GVy6FvMVUYXwUDeSxj2XpfQ1an2krixitd",
  "key13": "39gkm614AYb7ZRiFnDDDVHeJfN3AMvB7iWzEdtPXTQhYMBV5ti3sjjgdkPCF77mvowxkY2YvdUqKLdNErnxFr1Vh",
  "key14": "47VzotnkVMZK2oarjb1nNYj4NFiUHTDnfjV4sTg1JjUSrtm1NLbSXuQKhK2jFB5q8dciQPZiGfuRBAnTVvi9q9PB",
  "key15": "5KsAQsTDKLDspcNnScViGygCmbhRrNijNaB7tovSodMmeJHarZGVqK62T2ncmTFB2kwdAEpSioVCy75Qp97fT96n",
  "key16": "bhejosK4ZNYjm5fyfe1ovDRstTvVvT88gkvgMLiVWMye6u5hM5T6pLpWjh5gbH4UY6PoPY7xVN7bQa62TYUwXzc",
  "key17": "4Q7YhjCGDnLEGmKiXr4oeYATiNhoJUGShmaPHQtoZY5omLNPta2gQ2KPWVz3firx7WVj8hYfsNHtjPemP5e785tW",
  "key18": "26LjjTtNyD1FMriKmpZkfaiR7zK9UMZwYXXCfegzt7q8cxjESY5H7cyYokF1uG97qtQTzjosGsWi5hXobt94EZ5r",
  "key19": "5oetW8vjHmtJuaSf48MVgCr8fViP3rGUsg2eRkYDTxzzF5RYvdjTninYyZezNbJLV5yXVE5SzRPGRNn8NTQ6bcXu",
  "key20": "4KyBWYdpatGTYQu7FoouDjbuvxSi5Nn4HBpKC9norbgtaHDCnA9rBcLeJm3tVS4yaujRpB8P1Vs9y6tem68e8aTn",
  "key21": "HFJThXq58f9ncxoSnbdMAAb8qgtf1WuUXAFWwoB6f5v4iZVeeUgd5YXGMgwBYYP6kWaXiQFA9fvf99JS8YxGYgq",
  "key22": "64CSNZuRjGBL7V1xN3DE3e5SYCa511bvrsniCGqMWRoZM72CJrYARigUuce53jVXUCNfLXXkALhAtoJT3Q8jcCeL",
  "key23": "5xJguZWx7k6RKTFhQ6VLwmEDewRSrsCnhN9qcUoybnYg86XbhRacHgbvF7FjQ9SxzDuJRQCQzQemwdSnecymCG82",
  "key24": "2CpMLLFRAYr8ZvaEcx65NwETzxar3cSMiPGdAyKb4PyEHLPXo6p6wdQXB6eJrmhi1TfvZtSp4n5YVCHAyfRoUx9P",
  "key25": "4CjJxViGr86sriHNS3waZjh1Vom6bLxRffoEXqMLEafQw7i9bFcdpe4ZVf1DVwdkEF24Df6V5NKQRLDNo5KX2DSa",
  "key26": "5QrAaDHQzdr4yBn4ABjBTuaQdnXo6wB31z1UZqJmpL3Pea9WxbTMTJUCAdjCRUu51gq6iExJLVp8BuXXFt5sghSp",
  "key27": "3cdBLwErL7EFtf2UHsmC1pL24t1WKcL6bXZhXAzNuM9hYFA6HCYyFn9TEEBWeXAherWgzJvAr1fE3f5dhQpdoMsb",
  "key28": "5YgzcbSxhpG96qfoXYGNRgsr1Roj5tDBrpN9Si2uUpypJ3XwGFxozHn76oRuyK69MQtR84UayLYFRnyFooo2PtKB",
  "key29": "2z3YE6vdsiq2NexnQh6PM8TydbeTpS1aRKs79K5gwSCsYmCJw7MUytjnptaRLpZYkz8TPAa5vGhJwgGSh1sZEwqy",
  "key30": "4oNBd17u6mvmWZZjCfUkLYD7kyJA8UxoQGGS3og7Y7g3r9gM5hXKWUW4rCwKDXxNRWKvBrpFGMQabxav4yhAjFR5",
  "key31": "4tH36p5gNRmgzCBbYVfdHq2NFVC7oQfemfU7j5SoooHaHR4A9oxHWai2iH7PHydvSD6mvYE3eZYHF2MTGWyVet6F",
  "key32": "3n7CiTzDsnbSg5ZUJg4p9eVFtpgU8qBWQWwCwo1ErA8zkpCcjQonvoJZ5tGQ2BRWXHcwNbwbDy8qhbqf53swr9dx",
  "key33": "3pt5zNJzUHvvCNXgnDb6DwgZCjNHWUNhNvBhBD6AXWxqyhgTmkYGwFsZiBpzVjbXSYrvyLwSw8EQypvmVSpvdJ7j"
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
