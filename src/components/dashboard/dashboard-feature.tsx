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
    "3p7N8mvsRZCspeDUoRQ8vwxukdvxYAxAzoEygwzw3snB175xgR9c5QUgRgyy7GumxUDJ75vYsFpXUfg1oufjetS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dhxX12GPU1ipo7kMbofgAvunBgL2CG1uWSMMJ2aKm6B8qpze3DYkA3zHGZeRQofJaKFVdDpxiS7Q9VHAA1z8L8M",
  "key1": "3majChvWvQdqukszuP3mZRwjW1kr8474hjmfcwjQgcicSNacEwpC6BYcUt2hTAJG5akUAZRBE6oSRgQTcaGFxecr",
  "key2": "2q8X72oHRvQmUBpoD9DJ1HcnH8PrH5n1yLWQZip9UamZZWNXnZVZnhfSUVzhJa3tjXmNLdNsEYFQDCA6ss2bqTzz",
  "key3": "4oYKVr6eX9tcsegUPZDZrhPqzP6yg5QGKzN9MDbcH6AQb6gLPvtymXRJgkppwnN6A8wVMFyiUtmyfPaNN1maTA97",
  "key4": "3qW8PBQTDaZRaZQfjDkJJTuHNyTqBKtqWgJnZBwXMmo7pNrBRSnbL1tYfWCWV7K7uKEtndZp9S9LR36ceYoUMoY4",
  "key5": "3EEkzfknv7SbMJy3y2hsm59439g5BdnkphYjtzggK5tYrj4hChGGqsqYXDxM3yw7yj4rM4FESCK1WTqwGv8Mk1D6",
  "key6": "3zyDaNVQkxwyn4ZFdFHL9mYBP1pPB4Pwzm1Z6sw115wavPGqY9kLdBM3rBkwXzQE9gn586SBse7FJLDSAbYW6mBc",
  "key7": "4NwgYK65kfFtARqx9fm8ALxMtSpB9CAf7QhCfaGBzeZPQC9EzVyKEygxWhdLvZoDfEUexpPAM6tC3gUuo77CrUXo",
  "key8": "dLPMATxfhtYqa9fiZLJJJe4A1fBFWe33pkZgjsC5VoaNztb2G8UFhbp7Y3vkjcnjdhxPD5iHfquFTe4eC1B3gYH",
  "key9": "5VJzw5Zy4Zfpuq1ahNeEKS7z7k2toBY7TyfzG39dokiAATQzQ7yP7RGoM5uGhUGhhUYftY3zEqLWydEmqEcZXJDd",
  "key10": "5tCqFJAyAKMiPPJytmq7GhjjRR7hgm3cm5PJsoCBxXhmAcrdg3Pj6WKq7dympSUPHwzocpP7Grx58qZf8DrajKFK",
  "key11": "2Zvm3PhiHKhy832H75FuBoQEyS8ZCKg4N2PGVnpFsXXpgcdDCmf896wW55s6cTPkoGHLX1CB17QYZqBBEPqrYnsj",
  "key12": "2pJRCXbNdb4DTSEjY2t3UWU7RhVbx3P7Gab7RFpoU5BWDGmtndBbj29fy8VtVrLb8C9mk83fpj4qB7M5EHkSBy7q",
  "key13": "52JM8b1DpW3Jv5kqPxQqDnWmdfmjhZSps6R9W5xraKnpfxAzjNHdtRaeBGpu7LzzAw9kmTfnaRZGFpLfpTzQ3LeH",
  "key14": "3DMHFxAWxFbsnexoTJWYYxoMTpynMMvzv8XZGeym3MqQUYjGbiZFizm37zmHJB1vJtt8zF5ZsVC5eCHsZ9yxmSnS",
  "key15": "3x4H4ZE3PdEoXrJitQJ6a6rp3ZUW81AMBQKmHdxgmMDuAQQ5W1oYb53ATyvJX5JVoiTN3SmU4BT78wwBibXxWWf8",
  "key16": "5aDczvjotdWGrC8iCP8a7KsSKeLzzMhLvoqNsR4siU3VbHtqUWtdJEFsWFs8KY5jVP2aweykZkTjjmz3YhFvwjMK",
  "key17": "3WGYUMUG21Vz4vwH24hURZ4a3z1B5cegkxSwQnPFAhyfYGgojE5UKSWUJLxprf1uE7Z6dhR1EAs9kGyjsfTw5ov7",
  "key18": "J2poUPb7Za6Sfid2AD8RdgK6GLoLD3gx2ApYTfYA8PRyJuQuknS51onS5a84xv9ztZU2HDNwaQ1ccuuX9dVuzyd",
  "key19": "34Tgsf2ShojJQAKn3e11a3WcBNHq3k3uBhp39ZnMCvTELuiszbcAjAESDxLhF3h7Sk3E4GkwkVEmQCKgSbqcMPpp",
  "key20": "pNAkaZVmLcBhhjsTeumFcYP213cYrKSHSJEG33UBmpE6ZxDppvvnee3RTcPXbY1CbvHssMj9j3Uf3HwLCpL5MYg",
  "key21": "2QGkWykE24Kkp8X1FkujqVfaSqeDUj8Cz2shnyKYpa5rpYnt5skYJB4uSD6fHysrgJMUF9ThRZ74ZwMtF2gj2GCR",
  "key22": "5EV2vj9Jb8F9RyM1gt3pRLybTrB6tUEUDqnJFxVugx5pEdgeYQMZUhLeeegQ1h4YzgNBVyYvGFBdkretAbMP9BXG",
  "key23": "5fqFNrctTGaeL13c1ReeVVDZFpWxdsEYG17Unz8DTCo6HaW3eT7r3LHWKFJLgAnm8tTNcndUyddvw4v46xSatiAu",
  "key24": "zDbinkJwf3qHutZYTRbmZpqcj3V6ZmF6q82UkaNMogQsrMCUp5c3yHzKNeNA1gKwQzwr5hxqqUPUADTCtbJWMdk",
  "key25": "2paBckM4QTH8aBxLQ3zDuquvZb5MwdbT2EJZFxnhhL2SrT2U5W26F7LzSkBRYrjfSYLDfDYJNidcJxAC8qXDSMUg",
  "key26": "222J2JcJ3azFDDLh4XxFENrqRsKgYfEhf8uEVZqsEDFYmcQbQeRdbfmN82J1osTNKeuCVMUdhWzzdbSiMCVLFffj",
  "key27": "23nRx618XMRSnW2RGxbVu2squEYEoeY5etnUmHzbGPX5BsVGzPjPA8Hdx5cdTWAfncZJbR3ehwrVj1HpF9PLdtNM",
  "key28": "2xKepuhf5iraVSAoDvH9oJas4fLH9VZRUaeNg5kdSMi1Yg3vUEqLdeSTCH3VmH9uDhovd3WzwbJQSP63JedNSYgN",
  "key29": "5kF5joAmzYPbgCAJto67NXLoJnNCdS49My1Vq8TQ9VU1ue39TAWuaT1Acd6QiRziNgfKHZMBVTZUPSQc9sqn926J",
  "key30": "5yeebz129hoR3pX2ov7cr8n7nTsWhz6XDVYqgig1KvEv5ntjjsPAMzW57ykhG7ew9DhXxy5oZb7RaWtaeE7fcpi8",
  "key31": "3jrzcdQyY9GCwtwTAnc2wRESK8iFi9F3MWUaCkcU2Voiaq7wRhgZSnHKXwZGVyw8jye7FxCCnbYR4DQBt7cKdR6h",
  "key32": "2MdpoRkxqgDJ6faeWFVQ1HpszWM1oTwi8k7YFJRNbhjj1rgokbg5FNeB47agMwLdepihquYqP8ScZ6j2uJhVtVFU",
  "key33": "4JS9FXuJZpsQ3B1zjo3gTCV4D7GWFQMVsLZChVFL91uFwgPuuaeMkEzfgZqgNgmwQnNfU63WfnvsmZ41vY9sN7Ub",
  "key34": "3gKrVafaajHt3PFE9PXaTpwn4fWSRctYygM1iC7MkoffKrsPT3fR7drDYKUB5pWNBrpL1xsBPKyWjT9nhCrwUwx3",
  "key35": "43ncEPnMDVGchrJj5LqBrXFcGfBhSBRFBPTugL6aFVpuCaKcDqaGiCtZJEx8msYuJCCV5Hi6f1kxHaNv2CHB3nwz",
  "key36": "51EM4Ane2jZYwxnoaoDC4ByBq4YjPsKugBNVquJdxzNtpBsbXqxauzDD7PrXkswB3bZ7MePWaVJqQL2PPXmAxaL1",
  "key37": "5uexepjvXRQdSbRZM7ZBcz5V4seRzX3BVdvpS7NCUq47YZ3nE8r9q7Qzij8Dg9TupXHHb18s1Hk3RfEABCb55Phg",
  "key38": "4TAYAK8hvncJ3RrYS7wMAQN3kNzx6cdYciBrimi4asBEFBQk1kT9NrqEdjZZTwmr11ry9vA6S1vd29yozBrBBSeY",
  "key39": "3VtqzfY5zraWver7QUqs2PSot23qHKcTgMRi33jjgYGpqE2oXicrxZRiM9errvgCGTskFzaZny21iw2G6TGVPG4E",
  "key40": "ViaXmD1MP8HPmADVEKGZ4qVzdsN3wwaUTzosW8RN9CUoqDtFTtE6Ga3bnE87nQAdoXnycB4g9jhxDQLGJXuT9nW",
  "key41": "5ZRHuqsWxypYfFswkRwPNMRYgnu4VMUsbbz6S4uL3zeHk9XTVjQNZKZt6VLQXq5dCkvkENmGmWkvb1RarzXm1nEq",
  "key42": "2D2iVDU2AduvL5iW5nsMuxxyjMf2C7kCFouREHqBhbaugSvCemWyaFL83cgCb32cBD9FTDQ9tXt8Nj3yyLbxmMTZ",
  "key43": "5rBZcrDLpYqKnSNzZ8FXghVpjwZtaykT1aSG5pBzgWEqLy98M1t3HQfcf7BNfrkaPPiQ614677znPvU5odVqFpyQ",
  "key44": "TnFU58GfWLGAiihbhz3HWKwv8YsvpXRgdPBSSbTyJHrgM5HifUm6KfU11b3XPpghGvhbyqbnmW21ZjJU7cXBkwR",
  "key45": "3ZZFwoHUahFrhj56cBSsNZNg8Hrn66Y8y83aqCfyRjGLLr5Mb42j3J6xVq3wKFV3bg7Bye1BbRUTZf1zbpuDnUun",
  "key46": "n6RJgvrC7x2inp6bHSo7r8ptLK8QbL2PQTPsHf9ADojtoGHjoUYjkmt72jxzCL9HojVDoNsLV7FWcJ1hW6F4fz7",
  "key47": "2U5EQCToUofCKzMr2KBoTsYPW1UiWvPZ8UGn8tAyMLKWYH9H3zbiR5oFDoZeoVwBgJ5ZHe6D6qRGj1xCnbCU71Qc",
  "key48": "5D7QPT3PWTm8tibRwd87AfLkhJvx2M1AWRVwNiH4NJMRNM9ppMi8CYpDZGDJqTnDv4p382cAs8R5EqHSQEGbwecC"
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
