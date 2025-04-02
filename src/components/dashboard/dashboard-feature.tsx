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
    "5h5zkbvoNELiAFFUgRryif8gPnjEkZxKxXt9a6uygwHe99KzJcoDV4rEsvP4qfAJJ5RmCf47x6s21GUwT1dQxPWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qeDmQvM6EWdQjzwGt5cNe8q7nLdgGHkdZus59ECu5K8temJsMv73XFcnYE7wCJZRGPsueCs6iBcRy34e99LgKij",
  "key1": "5riWGUyk4XNaB8PfnDCjpM9bXVYsnmoHzKT1PszAxgpRBjSDcpmnukKtkq4hsZRi9SzP6srZ4KTnF8cgMiBYcWcb",
  "key2": "GPyqW5PKm6jjVpypdECStgWXHL3PnDFjGKKwwH3SYm7piYi4tpVF5rhfPH7CMkmKRBMQbP63FNmCmoC1Md9e48F",
  "key3": "2WP2NhpWcrKGD66Xi3MXzaapMvrHwAnhFhfqFgT2CToKEa6kLUHd38BdizkNaQGmVM3kmQ4Yw8NDXfofVVida9s1",
  "key4": "3ZgotoUAHg4coDmCbNUq1rzVpPFjsHoNx3YRswdPwU9fVe5vqGs8fidMG9QXT81Vpff4QxWaTD43VrdktvCgHMT3",
  "key5": "GoJ4don2A22kUeA3zCQpxzdSdyJkGciYTALAAFZNqCtX7BPPUpoabofUUTT1Aupc1bV4ZSnTSQyZwiiJ13yvvEZ",
  "key6": "3pUQdzM2pNNtX83HYoBPq2YUpAFwYTYwbUcumWEeDwoK4gmC9C7W7uWYgtfAL3gX3d6tomy8uvoDVaYfpHWqHrmc",
  "key7": "xexDVprErpNJmSim1458duFvmKVUBJ1azJLviuVHafEBRzETMyWREi9wTq87p5MyykMWv84GM2WGQQXx1M83efi",
  "key8": "2GrkC9cFnRmYy8SYqzDfKfHCm1BXdPdqXTXNtfcnWqktSg88rJo24wTNvpzcyFQBupgN51V4pRaWxw1J4eDSEj1s",
  "key9": "4Bhmk6h4B51HKxeYF3VYsqmRV43dBo6c7PCsPhGB4FvWcPfBxGN2oRyh1iucwZv197n8TMc8tkkXwQUtEzzkfLFq",
  "key10": "ZaBm2pm6dJiPCCWSGTZpWrRSizoeDvF1zUgb6jo5rdeUHRCoZGjcCLgkBn6Sf8CNV3Hsda4Jo2bo3RT1HW3iTLU",
  "key11": "3vzwKkFNjd8w5GUp1QEFWBm3qFibAqYAxXa2WDRU9ruPtZXTbu9CFJreDQFveaPUpvcQWsyNsCGSjrBzEprwBJei",
  "key12": "5U2idvxSjkNMqKSawoihd1W4Hz9odEPpDXAC6BRPVT9spCgTj7PYGGEWVQKtmit9KZsNXLwWJkZuqzTB2sumJ9qC",
  "key13": "4Vyi5vtD8wpHzuFbJN7LLsdCPwLMTGMyRfM4iG2KntsCHcvrDfbXxyevg59PA8QbnN18Fpcwc18EjL1kMTnPFue9",
  "key14": "MQgRTzdSt3RVXxfQ2t82fay7E2WNxxN6twuGJVLzYgyifAKqGMyLS6wGpNZWqUbH3euPE3SXzZ1cKdJQx1wn6j5",
  "key15": "2DGuVXm6VxeGiTjug3bs1FxpVCGrmKFy9GFgj2VHahEnQ5EbotizfCTdBkNAx3sLXuz1PLKyJsWmDRNDMqyZ3ABs",
  "key16": "46W8kCi2hvpcPkttyBTGtqHJpycqLLjMEbUJ91iCqenuUgM5bxgEV1Ui4FV79EktX3chk9ZLoDHLfEeqDkpEcMxh",
  "key17": "3CfHfzEqv9R3uZACfHVf7MF2ypuHauy7uvH5vkjz9Brcykyj3cX54crULdqhdzRcZCwg1ZEV5kkp9jeYAjK9w2Je",
  "key18": "59Wkr2NT6MCP6kH7LSnExyskf1pZ8aavokXx6KXwMoP5iHpkTHzUAADmEBehzAWn2HXPxKntyfedS386QBrhSwia",
  "key19": "4t4q9qHgoahgpTGoPinRDFjnXm2CiNfhxqFUYddDFtrDBcMPE12zKLhBN1xKZKVqoFEcGKhWFaQ4oxCgRfKffWDN",
  "key20": "59L6HEoHbzP2NJdbmx4s2GMvMUwzqL2mWx6d4evD3kddjP87sKXvewXMw5zBcNrvmRqQwfQvtLvCj56wAzRH9bAn",
  "key21": "4S2FNjyRPmSWgKwxLNXqJ6B1xtTpP1XLDsJcBd8KoMw68KtsdUDBkJpAaT5vuY4neyoFtdZQqLtdYg1TsKMSBjGG",
  "key22": "3sLibzCinHF5E9XNfFSetSuMnuDRjUR8TZfopBoLxiCxBkp3T1cbsbXPcnUWH9dNYceA66ZeqQsKhYaVnXEyLTFE",
  "key23": "5RDqJbLR5LtZZwik3ZpBoceZ99cqQVrDznrTRP4xNhbUKomzQYCBkWKrRsucH9ugGNKdQpT86Zxyqow8XWuJ5ifC",
  "key24": "5QkwQMLyipMbzDR1sUo8A6vPwoqdbjtcdaJSt8EDa8vEtbPbFVNbfnSRsS1ZmpdmNMeYv2zeykRwGzdAvwefKtUN",
  "key25": "4owUHUPKH75G8VvxRNhaBQCBLW2VCFLk7ipHa3kZkdZkQFbvdQUEQB6VYKHCrZ1iVEdVw7tGxv5JY2LoT4HGWiWL",
  "key26": "47qUmwXfw2Ut9NkpJMeb4kZzYhaRYmNBJfLETfRVr66RrEKdELTHHFYBVMNP4Vaixgk4TckKPH4XcpV8owmUpKNe",
  "key27": "5T2BXFMkHNNCSLrgftyJB6kFHuHTi4FQQ8abJRpwZF6wTiqUw7mqdzMUx91eELSCnCpMBuJcwGEAiccJfRwf613h",
  "key28": "n8t9t11JXv4j1pdxYSngH5ot2ficPLf8TFA83ar5i8bSjq8E6BkYTKiBLNa8KqrWAjUQwfsVQWHgsQ9WH4waykT",
  "key29": "mfbvcC3HrBHouLSK1bALPZhBfJfzQjYert9XmBEjZzyrKoWWfcicnjJpAw38QyJk9GErhJuAXsbibDzaqKUWkWY",
  "key30": "2KErGjU6F7duds47SjMV5yCMjERAiBuGBR9vGbDtewiVAEdoBB1uZvmC7tedpgwp6v6ZMm7ZoTrx8eSCFJ5wMsQT",
  "key31": "3ZZnsKbQ8xqFBAiUxBJz1d7MWTRKMMrgPaQNG5uivKepCMimkfjrgABPTo8kJRm68F4ERfcPkpwTTDgSWRRSLDsF",
  "key32": "LWMPCQGNsQ93ae8fCp4FB83x39nWTK5952uTZ9dsxy4ETroFZeFLBcryU6gjEtrnvpNmvH3gqsovnD7Nn6GvfuF",
  "key33": "3hanaB8DNZbbmQVkMoSpTMrL3BJiEUdXBiPVTs278ybjXDQbvVwWLe4SKxcM1oCjZTnxKaf5qgymmA8tTd1ECXpf",
  "key34": "5jZxU3w6hZJMSg1WVTotwZeqMfPRU8LuDkfthUTFrEZWL79c92NgPuh33r291AXpvFbNfzab6TJEP487LWC93Wmi",
  "key35": "BrNtF9QogEqaUYabeGVL4GPzvhztHj8mFL2TLfShbwTnmVGqTt4MfywiQVFGDn859edFMfYfy96ckvR8Lw3iPAR",
  "key36": "xQTqrtP8yNd6uJryuC7qW5FBCCLLyPn4ZSZxb37eVufGvTbEY5qrZq44yCyghhXFYoL6myDCuK69ioC1eWB5kgU",
  "key37": "2yQXSSH7UWYVEBy6DDkg85pkLaFYVHqmFgYB2iUXAbjvvWweqJJoMoXKgdNGwjgLYuz7XmEzEYuigdC5hFnBuMeQ",
  "key38": "5SHrqYCJ6RpXDBgkVjSNL4gZktosgnAztyWVw5kuFj4HVM6m4GsLPzdRNQ3hQZordMM623rwXN4JjYFdjxUwtvT2",
  "key39": "4V1zQxWvcz16SLkKrRdCcU6E4QcoURYrxqc4RLTVpeLUmbyKu2bfJ3veEs27HnggUMCadWy1shcdW3XQvBp8zcvU",
  "key40": "4bB7QgDwHTrr6gu1KjBDbA6ZkRcFbgkSkcm8DhyzHPyzWceHXYTEL5L82sqWovqA3ihJeeDePUbcCRrSFt23h2AW",
  "key41": "jafaM7tDGRMfh2QFYVg9oB6LrFCwg8bVCDqcSg4rTnVQEZf1zo9MygJkCmAFWL4yR89by2xUJx8rq9jUoHvfLWP",
  "key42": "28DzR6xQKjn9VjmrUY5C1jM922zJJxxxqUL2JBfxPu793tjDuhsgBTfepin9zRd4heWmvYiBgXD5FzRbNhaH7L2s"
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
