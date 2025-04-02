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
    "4oSrm6eDgskbmkbfzDpmAQ93tDJfCpS4i1muZ72PhTPpdjVsbGBpfZYP3wPqd5KHQ4Rm5d7zU2q5bTrFKwWjDpWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46YY8PHQX4mdk5SS9FBoiP3ZdayLM1P2seyzAyukEdQED4xePhwQ5ijjKM4FftMo9jBBU7D5NiMNnFQ39mZvuh2e",
  "key1": "2jGhGyegB9PsHRAGh45W1NusnAfn6mEeZwdaMUiGP9H6BYw5MRa6emkNR4gDHTXCo5YwAogGNPkTGvkcKx5iwx7i",
  "key2": "4xmaX14fsc9r2x64Y8fQVhW4aZ2Dgz2Hg1Dtc7PfLsZZwgayWzDWA1cMdUgdvcAsQpZvHDxuivEZ66fqNU79EfHQ",
  "key3": "46wxvtjjHuogT3qgQzcyUuNCZfp81R95gic8tqrPyce4tpnMiFvnoVkau87YB9mGDJJZSvEVQpUFgjvH2pvKAsnE",
  "key4": "2hoAwEHaJbkjwteWJwQvDRS4p44Fy34fXdcPxYg3mpkoqrFTcYLjRjkcLcbSH95zHtmnwxbr8RaqX3zipDgekKFq",
  "key5": "78uoza1wZFRXd4Yc9Z3wWSuHUSBVKJjYszyV1qktPVuizYLuunT9LkhsLVN6qa9gdxoRa6mN2c5ZWWzXirKQEGu",
  "key6": "55RaVfEiGdoCwhb2i2RsSANyxJbUBmLi7csKaGdLW9ASxvKSSp4dqWYJsYQJxeUGYBsQe7N1mVwrbw7tS21t8dPR",
  "key7": "2dDNw5nAGJWtinVARGN6K4xYULZnkKAVLmdaFjxH2ZgiepYAjyr4uXUosziFoqm51c9iGDf6P9KzHjjwAXBEQZk7",
  "key8": "4pUQrtVjmELaxf2EGTCcq6xghMtNULTc8vFYZ7mxs6URjm4nSFJYzugpHRhDeNhSVK5dFffifLkeZBtL4f1CyZXm",
  "key9": "aq297iDgG3VeSeGsVzJ6oEc9JupBmdWkuHGHjz1uUuvyox4rn6WVAGcr9bKGtPpZ3MfrnExCmN5ASw2ofzYpksc",
  "key10": "3Z9zoGyGrcBreZishZbdWrcCZSMEwAbiUtUYbrvbrcVeSCPpJAJZKBqYhiBBRDic4dMN5vJAJJXEzMYZFamdf7Cu",
  "key11": "5LUcsD8RvVeGT5J6FvPLnRBdN6H3Q48NkGv5FjZRrpL7iTvXLQez43mypgdSXNADWfLiLp2L9P18Fj8viSauRHrp",
  "key12": "7eFmVg8qwb6t3UptA8WVrK4G4ofsMc4L8z7FbMQh2jw7ZzVUQMT194n1UzTKxSfYqwPx38oWajgExJGnJJn14Bk",
  "key13": "3sswkSn9YfBxC4hjM19LLMY7bCZHRGEV5DSd1sQBnjo5An5pWbsjs8bHw8R4C33uL6xsRXTfRUwfscyjNFUttejH",
  "key14": "3t6TLcX1FYxJWN14JybhiNnQ1Hqsdpy9QWaNCadrQrgwPetqU5JxR5Yi2P8j6enHWkmXBPrk5Cq1maR7BUP3yZLm",
  "key15": "43F8qSFf5GNq1M1i2Q6PrNpLygjPVvidJyCiSU1nGHGbBEZC5iSArYEUY7Z67VS3z7x9gf3B8A6vEeheW2iME4a8",
  "key16": "5iuwjxpx7yv89qjB12peF79CsNkwWAaVKZjjEu8tWQRfM2jA7pWo5xfVrzovvezTwqGXcfD83XrGNqiyH7HShZvH",
  "key17": "3KxBbHLY3BorUx7RrcbAgSJMchqqMSamzD7x3yGSHRLrRcsGiwzKumEpvG5vydTP61wceCCPAt4Hch5sG1m9jK5S",
  "key18": "5U1QVYZkHPogSALHRzmDQM2QYZpAmnVyjowabhgyj9GRZzGw9eMQ6SNsJC35ou3YF1GCkMkapFV8pwNKw1zhnVdz",
  "key19": "5dc6LCuv9febvybPCruoSKZ6yK1k2XmahP14qZE6tJVQoG9fnNL2iusQSoJ95B2wgpGJc2d1P3pAbCxJ2ki9m4Vk",
  "key20": "4MTYeQ7ZUceayy7AmZGJs535TCCvyPgeg6whmEj8e9AGQzgyiYCoinojxn2Lh9Mkcm98u9Q3SsZ2a94PTwDSG3s4",
  "key21": "338hx8SnMKUcCaHCX5fEKEd6oQGwck431oPHCTUYe5ghowMCst2FAiRo7JFoAQgZ8vrY75xmt7np7a6jw29mToXy",
  "key22": "61NuzJbkSyzrK5JBHd66BUx8xXQ2dUcKjiW8bBcNfi935v8t1E87T4Kecvrdj457fW7aRBSwuDX5b1G7PadU5zWF",
  "key23": "5Wm6WyzdTxgMfdhbSFhFnw77ezAYMotvh21wHtEAagGTh8TKhpdSD6zTE8G9aLCPmb3qDnVd53hQnRWjeZqiP96a",
  "key24": "4jcr6xYUCcrNznCS4zPvuFaPZ82rP58FJygodoh7TCqK6t4M3yA5RdT9HPAwd76prccdtg7SafSbbfxXNgG9KkUC",
  "key25": "3j1b7CsSWYQARSdcrYnenPqnwh8UjWS16QcGpmUcP6JNV2reemstdXsrYabxL7SU9tngGfkQCz4xEt1rbtj64s1Z",
  "key26": "2i6oURJXQw5viBCezo1Gb6Kj3Loc4q8oJWYGGunkw6Qt5rGBLtPg5HDA6KzaR1bbAe6Cnqg1KZiCvLsjmcUkFT2f",
  "key27": "3CMF68mXgawGvVrkexpVqSLSNhRNX5kYn2c9HMKFFh5L6rWASNFakqo13mGzsHho4uc2Y59hRipcYEC2UEZ6sL2f",
  "key28": "2aFzK2aRoxixiQ3fQYUs28AKMUDSWhEGp7EXch27S2XWC1gUUTvBAvXFJoAD477p5s99zh574wTeGYmBEFbr8agx",
  "key29": "5KZdz5D7fmM4uAiWyUNzEPKBsYTAhzRXMq5Piq8zLchrDb1yD1mvmVexypctoE89tZMDcHmEwCdPxFkgAQufaQ5K",
  "key30": "2GNwtPSGtjzPUxjMXx1UGP1epuuXantB6HFh1iY1Nbtkq9pThHzon8AaUDnVs3DxNoVWgKGFDSxpNRjSLaTgiJZS",
  "key31": "5s9jHnAX9ith7HkM9pNkLTJESXKgeGUQUqp9wqWqFaHEVZBXQ8zMPvD9VuxF94FXeoFLqxvVJZRu476GbhCnBfcD",
  "key32": "GpUu41N1BpQxTeYwGo4n1QVXdtzh5DX9jRAug2x7otztLL6geSzSQ5VqsToJawGiGBSWHSFJ5ztQTASC49fmk4n",
  "key33": "2UcwAFkn6uFoVAV7o9eCUtDGz6tMWSTEgPpZD91DzM6utD5tU9iAzMZvb4gSMu4ki9mmdRcMidsm85BNdZb5PeMm",
  "key34": "ToQBKJkVmLSkC42do6bmRYA6b4RXJMouvxDMkSpMmMATnTRbVAEsvJq2goD1n317PdQ8np93N5cahKyL5KtAb6c",
  "key35": "4vxsBPJMMWNWhGEK8Qw2iP4k3fXgw9bXY5hRyopaVVFp2zfx4oD958vBUGFPB5CXaGyUHKzjcSSx7Vhwkv1UW6cg",
  "key36": "67YA5pwNkhzdqDDwJY1RBUVBMTpZEYKgNWte3d6f9uuWXv5EJm6AQLLW6grNusB8Sdhr5hE6zb9z8QPfCrC2qqqM",
  "key37": "3nwGSTcxoCFrkVkBX6kQjwo4WS9PviABy5efqCobQdxG4ZamWSYTD217V75Y8R7NaDwDjUyHWG6EvxjCYA3A39wo",
  "key38": "EViZkCwT11w17gqFbrcNqh2e35HVoPkFksnG1c3uJeobacZLNY9SG5VyNmthMM54gJBXu45yM92B3xDDJ3kgc34",
  "key39": "26ryLQKwUKDqwwERSCEonb6CnDwsUYU9Ey8bibxGD15qhDUt2DB2aRBHAZfqBN9DeoJw6DqAyucLayxPj5neMzxv",
  "key40": "3u61mw5EWrqGy3uWkqSfXc1b354bc6MAcXyj9FYxJ3efKmhLuRhUtuiMcNJ2fBy5bYpAXmD4xteW8a4uoTcYLUCz",
  "key41": "4G1BYPEkABV4HtKm3Qg9NRLjeAYQBG36dEzpQYzFduVAJMYCezvaZ7BSNQiGzi6Xxdc67qYx1nHL7gYR5MF99XGR",
  "key42": "5ozQ3Yy3XWbq4gt51h1MnYmohGayrjs2u49e9DEt6bYxYWa2KVkeHw7Qmzv6bbMQf3fTBHsFQmhYHbSfMfH6Lq5A",
  "key43": "5rHwj7eSMFZafQ1aqXcYhCk3aier9Vhx74439bbHaqZtYvYgrcA29uuPnuiAfEjbSgPWa5f6KMmVZxz9s2mEaUCE",
  "key44": "38We5PX6bqCt5mCSUZiQc6kTM2Kehr4w7j6NS1MMCPAYSsRQ38z5rqZ8xhrM9hBCweBxDBewWWBuBYA3yx19n5xd",
  "key45": "fnLz19e2gvdNFwfpYwYpKqSMFK3y4h3imJnqq8q1beSrdAXWmrj24t5sKBzFvgxxrYN5HEogEo85S3p5KJP5QLF"
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
