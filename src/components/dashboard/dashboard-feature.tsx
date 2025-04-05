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
    "4XghTovpF7E4hhD4ciSKMPUL1tgbuAifjBw463Wp5rNWofwPm8ieSD3NrD3tZchWjy6oP6GT6MS7k1h3Kp2TEbYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KaineRikeBgCZgs6DNGGF28RH7VEcaFKBkvJr5382HrMP1CHra9wbb8qkYDLkSG2Wm1VDcqKH5HMR1bj51AS4Ws",
  "key1": "4GWP7feaWHLSCWy6V93GLbF2S3W6LnBigrq3xNFZ7Vq6xYJ7GXjCRQTDfLqiFyRnA4uGUSCwqZH9EwBrJDzRfzPm",
  "key2": "4QcJZVcU7iCMuhVxwFUDjgrfCKhqAk5yhgRXWsWwDAPKozyuXJYwtpF5fkqTHPTfUS9DpBjzBmcE3Jmo47ByVtrM",
  "key3": "5P6VXZFYDhfVdnnXneg4LpzvVxdGCunc4ZeJUzfhCSXhU8mQx1YzbE6Cceo3U6Nxi4mqqr4hd8Ze5FbWgctTw5Uv",
  "key4": "5QMKnEa1u9m7nkWQsRdKLSH7v4V26Q6pCSfHvAYWJbkVd339fLAhFPgRY2VH3NhKSvEHPY9gGUwSbqgHVwhfUWZV",
  "key5": "3RDwJoGZQwjMfju2McQV7qhyQHFfuVtXddGFKjukk4SU5XV1e3VMVURm6ZGbBEDNQovLovuN6fbuTCABE6RpBTCQ",
  "key6": "5WXFkQkAUThQuc3vZKZfEVcE2hp2R6YhhYYQD393SbJwPQPw7PyJYyUCoQ1gtnpvZ9Xju13CUAB7ppd4aXjs4Wpc",
  "key7": "54M7S4MJ3xqdykMXzyD5WAUqvkTYLuNyRutLpaeVL5QGiZu7AX15BUstLkpabMhtJddMrTBu5H5N6hvqC3DCtLoT",
  "key8": "2WwiypkEUq3pWyDAA1vWsvjg9W3dHeeeveVx36DKhpL7q8oc3GiTSuhG2cER5qxnnMFMH6Z3eqeqkfBjeuGxZGDq",
  "key9": "4im38184MzxDAH4d2o7hUhjPKwzsSpk51q4fKp7TyabNBNXj51j45GBfoghCp4pHXPZzJfY4naDb8CuSePvLM98P",
  "key10": "oSy1zAahxRxGukwMcg3qD86532tfmHYi91mEUeuFsdh5YTdnPSuSRjjxfsmPmqxJJiycaBRUzCFhTrELK94po9N",
  "key11": "4RSR3i4SeKKgwAwGU4BDpXDy7ikyogahzDMAn6dqBmowwhfYQKUVNzSM9f4EjjZTkpmFxbRiykuHqLHAq1npdJew",
  "key12": "LgkcUbfuEZcHEZNhd54TGjQYg4XnEjCjuGEpAQp1hjvwmNxYCwA7UiSm5Vupq48xUA5S8sNuhCaych1qoeCzFgD",
  "key13": "53Ws7ib1J9FHipv8dJqWk5cVEvqnhuyhTyjAmTeSPQ2mF8nZeSpCgTniYVWNv6mncmfZqhhQPcpA31qhsWbMDKCs",
  "key14": "2tZWLnWJM5R69Tbf9F3KCxHPVXZiryLM3xcoXmuRJKU1XpjaQFbzxPU8xcsuoZAqHEqgmycGFg6kMVXxN45HwhMq",
  "key15": "3AdwdH3whCL5rZbsBTuiXzPWtpFvaMDScrB1NXjTKKA7jQ5GeRYDAYsbbPZAkAU1VGs4Eh93oP6iMdk1GDum79tY",
  "key16": "37yM4sLKCGuW7kuP4LkSF7mGxSfVGBvpRxZmgt77w9dhSvmQBms5MyDE6hVdQRhyydhMhRzvvmWWxzQQzCgivQzx",
  "key17": "5vu3VMqGzQx3N3kEE3XJ7YFvW5GdcqCyxqcSV6UDKxsxqp9ZdYk3PL75XFC6XSxKTdrAnhapuWusoDeyjGxcKmCE",
  "key18": "5Mmau3vMmzkS1ii7C7FG7CUbBkLcb38rBNDjHKjoTgcNAabFU1E7KnY7zq6sqJW5LJ22mEc1oyYY1N6TQgPHMscg",
  "key19": "ap4tywwKcNz7JNBUj5GSiqm1iNa42ZmdpoDoEXHpnbpAz8GrTRowWUeavcDrhxrhxF8gLVXE2em6RCx3faDTCFG",
  "key20": "2MrdecYPaZbeZ6TP8xFcqfrD2rsg13q92oF7dvebW6f585vFuRoDVvEbZWGyySHjCzwg3QKGy71aPmcgToFex4XF",
  "key21": "5WUjSjBmUCkyyePnKx7v13cKj354h9b2y4B1F59rcg9iGdampg6Hy9iZSarExJE6nLDyxsfdn65qc51HC8FNC5Av",
  "key22": "33pXQPxguYCCxWdQJwQaEYGVLckExWDUcpK9BoUYgXyiQyT2gYjwD9VjBpCxnEhDeXTTz7LmS1XGA33NGSoDAXPm",
  "key23": "zAauZ47bzKD3WveiuqfdFpckkGjyBHFEkDWN9yB6qey7yUaLtNx3WU5H98CAgfZLtfqbkzXkmwRp2pDudXeQcDw",
  "key24": "27pJ5hu6rchjmypsRjx2pJKZy5kdjFMgkpeWdyX2YDskvmbNfhYYHEBbECAV3NSGCUgQemh5X89tVmCJ3u4xche1",
  "key25": "3omLTDFZCNcCEJghd5rdhsugNtG5DEq1a5YheN4aYfvSUfnmFSCKbGv2tZwS3W5YV7aUbxYhXrprsi5DhjydZb2U",
  "key26": "5og69rtqDaFhBeqDQFSL2tyPUZvNuVLzesCsqY8T98SHL5HmExUdmgz6tayutPqsGgWGhw1FxJ5JzJHvgLbjpj67",
  "key27": "2FScZQmQcHBPzTLGuQRLoXQJvcQxd69wTXBu38cgRRAYGp28iBbSCFs6XBqr3DbsyGZW1qxbFo1ysiLzixLZ8Hxn",
  "key28": "FCWgWfDCYgMjk6veoqDsXvk2DDvR6BAES1eLxtveM3SE4k2Vis2Cb8K3Kv46T5XnCYphPb1QgNST7dD9nogZo24",
  "key29": "afpGPxd3AJYMsrEXrLwQiWYJwkeZCuoXx51eJXrq1CchBiC6z9hBRLRj5Qg3ujhWchCE1akUmeZfAFtpgw6Gbyj",
  "key30": "2n2CSc3bMJFsgAC9XQiMBusumEutagKuKpaVTPkh3WkRdPxUUYKNAoVLkMG2FHaghviedBZZWMnbChpT13S8nLXq",
  "key31": "3B32ma4N47ACd1YQEXGubZfL4tAti4w7Qesff8LWEYvZE4fGG4V32Q3PTqafd1YcqZ4jwF4A7ex2iydAfsrrNtV6",
  "key32": "2C1fuateBPuPiszqMTCJo3YJbyJe8ZMbov5KC4ExNeqbDKJ1EYPTk6MMSb5HRRpryToCzyMNgAeUeEeq2XS9yGef",
  "key33": "3jc6FFoREQG7W2FgtcUspXEFogLAzrMYXwbrqFnAFnBgJtpZXfc9azFvxPTNoHva6uV1dtwryGkU2Lkav6aw9FZg",
  "key34": "2mpbAzkAE7NKv5VZZX3YRH4wcb5BrKLWvdfd7SjedNCVbM8eUqEwYSotFtWrNHNgaq1raCQehStGJyjdS2epunHw",
  "key35": "656iVbnac5SjM8qvkmcDsQJcUu4AZ1NQSo7KfJobbfTBcA5Y9XQVCakiv5k8ZDX3SFUJJUKkcYxPycaMjtdZLR2G",
  "key36": "46LwQ2XHwg1HEo9chKvqpBaYb2LZVtCScn3UE2Afe22mDC3Qe55aq4xdz4qzoqVRNgJagtEFmSSFEFeLWySZpc7o",
  "key37": "3DyJ4DUzFAUdP5xuwMdPBEjWDhxAQBVL9akMmLbLjxoWPC5CQyUJHACELujo8ec6hVfgDPUVs6igqN3UY86VmV8N",
  "key38": "2MsTXjsQRShUxDo29gFr7TYXSeGYjPor69hWLnS6xQXZkjZYbhScSjWfSj3jUkrBQws58PuiYTqxKk3EuVz1itZ1",
  "key39": "AQstrPuWSfHau3nG2FThR5bjEqa2suiFbZMaEvG1sAFNWF83Qyhg5vP8TfxCZ1gAzfHDne7jdh1h3G8mqAjyiGy",
  "key40": "R27wtHL77PXceC3gHMrC7jYX85UsHcdPdfZEjubBz21TtfGTZQWW2xdSbXR5FwX9b5ZCMRCkFyhcoimBncQuzFh",
  "key41": "DZdGbgRQSN5RfkkS7G6xu6JTsWr6qSdAMXQzmTn5TLR2ozxHeFgWodnqwRZ3tZp4R58ZspBenxWBiGPv8Yq1gvz",
  "key42": "5LdPfMCwzZKnBqFYSCTfQwurXYKBSLqCo2zH3pdKjPrQ4t2qhvbigui6f2FT8aP45GUN3tGfBJ3Uji4nfrWAg1jY",
  "key43": "LtYBhJfHJ4y6iZ4ySAaQ65vQ8ALE4dLAR15bmjsdwZiw2C2BzaffhYWYiBjmyxULWxg6fsXyHiC93a2Gtrp4pk2",
  "key44": "4ePq5CLExHNADy7cSCAiKnTQijnLdwXtnYo3jjqmB2AEPAichGs7qrC62o3Zzay4M8BpjAfVVDiGT1znYLzh29VA"
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
