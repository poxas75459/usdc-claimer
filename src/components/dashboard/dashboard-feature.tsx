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
    "428X74PuochboV86jyWjr4PwaEcrCp5QTd3WdMg9gFpg8F1rvgdCkR9f7KZy2c9z4wnj2q5avthw8iuMtxkFQW9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qoVLuxJJr1ZyujGEUFeuWW7cj5LyNaqWWDV2EoFWHZZ93a4Df4NRSKAfTnaNzrdpy3xYAqqrvAmCk1DMNH8pcSs",
  "key1": "2v1MMr9qzEwt8xX5Yk4iq1NDmovuFwBDHTc71f7r6hHCuvukfrYtjVNHnWjZzj8rcBipakUABDekwiGhjjrH9pb3",
  "key2": "3HSnKiHVP6AUL1iDYrXeW41kogSfsUEr4atVsKjjVEqj5DcKStrAAhjKufsWtD1dVT3G38hBaGBvi3hmQ5aV1ptG",
  "key3": "5NM6njfAN5vUqdeXmuFahnRMX7BhpqS6xJCMYWDkKJtUJkga81v981kS5zftQjYGAKHmttsuemRLVC3UDaWhVKLE",
  "key4": "649AKjXhj2BJei3fdT4A9iM1DXfQRGC7A2EZt6XLZVM9G5KckLEwXVenCgrEwDVnS8uRj9ZsvKJ1QWngXJv8YAUS",
  "key5": "2bEF4qikhZzV9g1JDKhKJ942Y1CmMLfgB9n3yDQeBBfeLPxduGZwAhGNfgcty2tudBnJmVa9AKvra93Sbj51WWZc",
  "key6": "3vuu57cY7PZ8TFDDoYayNbVkif5B4usBwGweEHy4EkVfYXvatLUTGj3yKVbt5CmDx1meoJ1ri3mXYg8xv3GmDgL",
  "key7": "3z8FV7odgWwAQ53rSNqKmkP4z8fs64VipB8ynDwggcTSYTZWB2weP6WFgC8urdcsGAYnMGuyNQeVwab3KEzLvaF3",
  "key8": "5yctPrHwbp6PwLth5eGVEsPFJ3rvPUgC8ZoXcnRs2e5G9371JzErN5u7o4xB94WV3jaWqgzmyPmkTX3VR8h7sQJr",
  "key9": "4ZmJzLwmCwA5sbFmvb25TFFLLyjf2L98jkWwe9c6sAZD9SrUNTVdCBsekxvpTGPPbCr17mEJeoyWBa9cdjJrxr1m",
  "key10": "4VQx3KzRbzMXchE9sES3n35D2ZvSVCYSWA83gMecDzU7D7p5GGg6dYc4BqhJzWQNHXHFi6gv1PXHD8DBwk3Fp3G3",
  "key11": "5gPKZKSCQrRUzaUVcyg2WgLVPaLBaHUbytKw2k7FXHwwLk4dP3ENs5TY94HmaAy7AArg5ZkgrLSC9xjp1Ktn3e7W",
  "key12": "pJFzKVtq36qsAhjR9hvhuLDAXEJ3k7eUydMMfE6fSuJUDfQfcRQeptD24FgsnMnvTt4zFJqoJkCGQAnQUAXqETo",
  "key13": "2MYpuYhmhb1E2FCMcGcnBYHU8wKEQem4wJLLL33LRUKxCoHLUT6WviDEnn5bSiTeBk3mv67KAUTb5yp1CsjBeCNy",
  "key14": "4rJGR1hcjMJjPdtNjyXBB4BDnhy91q5bJtJvnKjYhGTm8JD4eiuFaCo8JJ6SwSR8fgVCjEkrX6cnmXFqNU3jCYp8",
  "key15": "5PSp3vqirXssMcN5Wf9Tsq45kDNizZULsyotzfmCX6GpcUKZzEEaRhURuWsdMQAKPQrq6TJadaXYCVMNHzBhgxE",
  "key16": "4VMJrM3oWvFuWXigqP45X7RgvSEMNV6g2vdafh8T9znPVVL6RzeZcdnpUWu7vAuyzFBqQcwJd45254rB8Ne8rSfp",
  "key17": "578HDyqiZqoEtLJnET4CwTRfrf14GYqvSt2YQW18wfMpxiBHmNdyDwAz4smFAsiEh74iNLzFaoSfsUXrEiiELHS8",
  "key18": "2NUC1Yk3JuyXwg3iRAry9au2vjGEvGVSJyJX59TstJ3J2q6A6fEWdVtP2gcBFRHLMBabmBG6RFw37boBrjoQscGf",
  "key19": "63XxVgVT6FeXxuWK5jzVQ3wVQq9vP98pYAvR73ZUEvcd85cX4RTcSadBTtxV3LxTSMj4j9xQaQwPfeqrWY2BCz6t",
  "key20": "5KUuxhEEXcP65V73YUdS8vgpLzWwiUchnfsMeFP8Ytdive5DhXtY1XrtiBqV7QvjEaysiLKb7b4f4SbSjUzAMieH",
  "key21": "2gXKRzLHAN9W26tSFYGvkk7KjD8eW9RHj1M976U24GisvwvbikTiyP9e2hNGjjUVe61wHgzaeNHbpE6RCRJS8y7n",
  "key22": "5sRB1zx6bijZEzoayG1TQKKiEoH3LAByyG9kpieMBL9zHpxLbXVkqQQqFXh6V9wLBBD3orJzxsF6LrAxCcxRCF5",
  "key23": "faUsUCPPLXyNxHZHQgJhYw445NQSccwZexQf8fSdHLqcJvf9gy22bEnUTHpaz562c9sMKHWJhqn1vG53jB4QLAh",
  "key24": "3mwaWRiqYb33avWN8Uyc2q7DdFyDwHX4cLsR5XnRQZPVAHaJmaRE9Jn474eojpRQesPxrLmEFTtNZxUDfY95XMP1",
  "key25": "4MsVqUWzzCoqtEkWjLSyQqkYJJhfbvDKNYWHQCf5MwGvi8xEizi2L7iPFFvHzGPnK1CgSGG9QqbCdoHX3us238AV",
  "key26": "2TVVDZcwRd2woyMxSz6dceUUw9DPSXhqRKsicrGAAFNQtTVzse1J6SGcshauidkmNCtX1rafHpF7Nr8x2rpsLn8M",
  "key27": "5X6bYUehnj3gzCo5Vc56dcV5jfMQHSigAZi195r3ATgmF6iytBJkyRvd7KCUYSingpNvx2DxEEQ7MEcFKPbpaynB",
  "key28": "JPkBpjYJuz6Yvtn2tDBaGn5muiRXbHNhvirU6aEmum46A1HujjyjskzHUJXGQL5VkAaTFGJSmzohcLa1RHefW6A",
  "key29": "5nBLnyEWkv4mCimXt3pCnbLStdiFEF2q2DoFegRyDjm5Bs8gx2cbXynubNtq1ZTyVpSCDHA38gYoywgcG96cH6Eu",
  "key30": "rcHHTTEpSkBAAh8gNdnGBRQphpaHKsqZStsPnMQjLcQu46t6rcPnLw2Zsv5G55KkCRrmzDFv4UkVcMtSdwwT5qX",
  "key31": "2CaP6UmsknxbVRFEqKZDgRXA2dFHncAwXfoc7kv2n2EyPaWKrx7DhXoibEhrniYUGVU1rq9d5XoW3tedBD4AXiAA",
  "key32": "5NuSTNy2vDScgZKNYDAXSvGgyrE64L5291gtDVF31VBNV2jNBSo9aZBXRLcaQA1DXYkjYsH8sbWfK9y6DwBrML5M",
  "key33": "52W8ouAYr7MGLwcWmW2K5GsDSRiNVPDhoSujegsGBrhZ4uH2vxQzSaMDxARYrXr7uD6FPT7SRahsbb8fkN3EPWkR",
  "key34": "sMGnWawx9usxue4qVE9hZ5bwMZTQ372A62Gva4LRjBoz5hEeoGAqotnqyrJ45uBbKZzVnMRautxM9xi8Z9A5BXC",
  "key35": "3dZS5GKZmMAD37jH6VXCeazVjSEvkAWW3LQoXAFN3VFo8uz7xxsgjo3VyaTeaZzDhC3KMB6GM9UKCvkKHcDXGR4L",
  "key36": "5TA9vyB53xk51VmoT3r6MbaeiJ5ZWkGqTUJeiAcYkrW38pVtzmVRQbKUbDgNk3wKKEBDbXumydu36raYY18L45kG",
  "key37": "tX4nXsYmcfiF24DpScNUqyS7QNN9C11jEKkYt5cuTXcfkPjqbd1mXPxcT8Y5NVvNw6h8zsE4qsYhVMcvyX2krNT",
  "key38": "4khZoLwMfDa7ivvYXodSwCW9ro2nXfwGF36UHnvUoB4LRnkzxVomRMPSUZbrwr1cCA8Rqnvt6a3hGUeXsat4HjQH",
  "key39": "2Fe1EaEPLvsJAZsCgL9Q3zzdsHrk6CFG9R9Su13gfNvrVgD7u6B4d4Mnekq9b9o7x7qxjTnCFx6zDJc23C6LYsDg",
  "key40": "57zQw88rqZcW97CqKr9vB7uTkagoEnvRWamFbqSEcgjdtr2DpVqJ7pBS1uCnh4apm7wDr1HoSMcqJgzdG6KFvFcR"
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
