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
    "5TbT9C5qkFYVkBcNMEsDaRuAJ3BPhFUstTAMGLR1ssGSaPRxoGgLbHWDLdsFNaBNJmdrsTqVbfzdBEPASfrBSmPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fhPtBFNteYhoUhx2xwB89SMmWpdvnWe6Q5Q9NtzZuiLyvP2SwHMhod3zazPcnBsrkJKcmhtviixXMVToafWEcuw",
  "key1": "633Edhufnao39hp9LcXszQyfPuEEKAkJS1zCGWZxCSWn2fEfskRED3VVPjvAGKfmDsWpoxxugZg1wfKaL1eGJWGz",
  "key2": "GqBAJ1buKmjfRrpwmjUCKZYAivBpE3r95B9QrJbDd9zzoMKgFMoAnRVqWWb5o1h9TF1mfog7YHJPLVNihnwtk1s",
  "key3": "tmmMzsCmYETpCsKP1MKAikdrQ81GcX2AGhrfgch1QDQQXUesYwVnpC223Fi6LN5by3NnYAdSi7HAjumy8judYz7",
  "key4": "4J1QkTcm9ys2PMZtWVkxtBj5tQVv43gM8U6JnjDNziyyRj1DUTPWS1iBd1iA6skBPAch8TsmxvwsDjv1BAcHoAP8",
  "key5": "ohnxxgFmVqmFTQhhhddFcqgLWg3TAaDaJ4eT8A7Fb8t5TtzXynwv7WZ4yM7WBRngRkE1tvtnyuzPXsDZ8U7c9Q6",
  "key6": "ZHMzJ9fpDP8dctZb6ymno16nHLXTeLL5L8T6g25X9s7LuNMijysnY3RA9Py285pHse25VSmmMkgZqLZMZnyfG13",
  "key7": "4K6yqD2YxqAwj8U3N5vZViB4rDZ9SR11aM9kKgL5YWwkLQf25x1MsL6Yjuk3jBPWRcX1HpScVXyo66HJ4cdg8XWc",
  "key8": "MMrRCgL777yTZgXZ6Xm5C2PseM7gVGoW1vKZGK87SQsygtBV7KG54mT6x1CMrc75x8rumyDLMTajYFfiVcoDGLB",
  "key9": "2HuwU2RENgzB9TcBSRjuDX2VuuBi2RSGPLRwWadd1395JXscUQW42cNpetxro2jWn8yYSzAk86u9Dxka7F7E9Huy",
  "key10": "66TQyG8YK4qcKjP3G8Lzktw8o92NMZYq8x12TGvvvhdmhXe886YL1yQnJpbNkFWL6XimRVUy5J9VUsfCHBqqsEcX",
  "key11": "5mAWtQHDvok1VVUe9581aZU7SBRskKHFtHbAJd3mDJc7wvbaj1SbitTLGRuT8r9tjnXdw9Wik9KMLDwpDYpKt6WT",
  "key12": "5jwzYYUs4TXtvVJeFW3emRyMQBPr2Px4GAEL6HbLLREi5wBp35ZJiYV5ryz1hH9d4XojGrcsHofCt4DT1uGAzWNU",
  "key13": "4LC41moMeNZQNoATW6i21xNfLb4QgFD984naPuGjmZw775czokTBS9rernESDSz5Ly8GddcqojbaoqETLf2Bmwhs",
  "key14": "4aQriBiCHHviVwMFCQqrHCM3WLgXjt2wipZJBnuXXjJHZxbTkHiAsvnzeNdfxyJiorSSHZpWQNtgmMRzMYv8X21V",
  "key15": "3SK925cUL5KvfCMPT5aXecU1to57o5uK1QpxTUfpoM3phYr5D2on5sdnQiphPR7ki3Q6XDQabgYeQfZsZtCrXQjp",
  "key16": "5GhZQGZREUGwehc73vyFz8gzucPSbpfn2YaAmF66TPJTuSU6As5FAnUuARFChJhQU4BTR3Qmai8eD9hm3yPRVC2w",
  "key17": "Wv8M2SwdAkxQkrAGHT8a23d3P25oC2R2gTCxK4hDfpWGgXg5L3YVQNArF6UiSWZX24Co1U44du1crQ8p3reQmfX",
  "key18": "4J4w12ihtBTobCkmLaehYpUkpu81W8JJu7QmpGJBQHsJ6uuSzMU2MbCsg5uUK9gwWmg91S7UXKg6eoUMcywCk7j",
  "key19": "4MQqDEJAESvVmmgs6St7K4A83RC81NGKGGdXXSeDRdLoWVYX6TqaRBnNUb9fYiH3Fxi71bxK5VDYuUido69V1kuW",
  "key20": "2yC7HPBngjqcE6vg7dUbSeDKsUwenrhELRki7ADvxLvACJMLwGdJxZWpV5oEr2xZpXLkAyWw62G1JQwbwEuAAJg8",
  "key21": "5z5cvWzJDagQLRsNTHdrFfQnFgSVe6jcQbdGSHDTRxHsR1sRmC8okKVJ5FLGfQuW8jj4rPTNdDhCSSdg4S5i5WJ2",
  "key22": "2W22jvjKyvuXZyYL8NZCfEU9Tbp14GdL4Y8gFKHwZMiVECPYeN6uL6XacZKjKDuXQRKVm3kGjEiZjtgbWm5Foqas",
  "key23": "2iJ2tYtz3UtWg3FpfND4jFDUJSKSZC7GzyiMTXdoaMG6NkCXnN96EWWrqPmSkzcpFRu2XVanfY4gGnQrMazMc9rA",
  "key24": "2FPSELBmaTdWQ5pWwj8y9iCKNZKAqV48f6XzVsHQSLYJJZcZyRSPjKckCabda5vnV4vHfQcHDzY5gy8YCWk56Dad",
  "key25": "4vzz2ow34ZnXL6sZbqovm3ixZU7bCre37awU1Et96PaberbSRPY2rCrKyhLHYxca2qqgvcssxFiKQ2sb3YzEAFwF",
  "key26": "4GZHNNqh3cVbkAyU7QqKGJ63N72WmavXugyhN8E1P7KNVBA2NAdp2X4eVgQbjMxm26sxAF2ryNBkFrKBRJN6DMfk",
  "key27": "34N2fEQQfwhN1KeXNMNu2MRAwqW5oekHQi5mWPWnZNxV1NBPYk8oFEbYPoZ1sSX3ZWAojrK5macEN8YGBQNUQKt2",
  "key28": "zSiEp9cwEL1XeTgCpDXb1TyKNKMUm4sMGzQeLPp7vCmBFpeiLmYpRnTTdTGF3gxhRUb6EYGikuButqZm9HA5uhH",
  "key29": "hx8gQGUbmcFWGnyHBvC22me3z4Cc6QFPbye39M66S9hTfuZWiU3nNf4URvj2yKcATggEKq2in2LisP5uwDYLi5r",
  "key30": "3uvAjbUnaWyPffnjfpGLpKkdbVFft12r5MG3CvLuzRMHYVdaFHeDR4dfDGKSsizhrFc1TK7KwCXc7B9Rz1gxTMFK",
  "key31": "4nVTcJBQgmYQHeDybiKonKfc3NoRosb8cUJEJ3zqPmcwtyeGJX5AEtoNBYGkhDUxvsRDfRRytnCF3iLZhiEDh1tt",
  "key32": "5bBj9mhFcWDnLhY1QwsPeqQKzToKxjp3XAAH8hf1rnSuKmqLZ8YZn2PFrRX8cNTWqGjF6i2omoifFqSJ1Jr6dr5Q",
  "key33": "5azadzFGfAddpfQn6cEMPnj7WuegbBCPx5XMtHsRwQBvHs75dPFGTobGYqZTbE7gowHDtyTnRpGjCAN4wsNLwto9",
  "key34": "2uaLBvRFaWHeB2CJdW4epkxKKfj3JdyuKDWXE1CfU3fxGpTmnyNDWntBbeXBtRuDdcU7kCeGkVGaapxnRtavCjh6",
  "key35": "3z86KRm85KeV7dxxix6uZif85KdnEVuycqtwcTew6kJKkfcXvYyQNPJatpAxP3eKsD9UzHcW3GAzWgimtvbjERqy",
  "key36": "3jBmmcSD4B6qi1CUrHAj6VE43i3Eno1cFHGrTHWtUUeFRik5AmKxLbqi88kxvoj6noK5siRMFg1QwJWbarqHsNUE",
  "key37": "5dTzuqBs83Jbv1mBm7UkAYoq2F74qjTZ87KgcDMNN3nmjjnFx2bcRZ6j5YcrNDh1sCxfxnXZK6HFD218obVDHQQw",
  "key38": "4VN7HX6ejG3iWi3WSCuZyZz8Do3r4ze2rLzC2SwsRWgKuL3VWfo879Aw1cPFvtZvMUv9iEXeKmC1diq1hLTUkCRw",
  "key39": "3Zu9oWewoG8kStfQNb2xjGxzdVicY6babhoMGBeDbZiJEqHnw7FxmnLEUu1FBZT1eQrscaz6CJw4XaBQcn9PczxZ",
  "key40": "UnGatHeDVbgew1cmGTYw7CUithJZYFEa2beR1ovvsNzducJZRk1m4eATJ6rknzqRGXzuWkwRBhjQAkhXaCoPBRV",
  "key41": "5RHYhgXUKSgiJQxrBPVLSnfUriJUWB5cfrSRdTLXELN2kuDM726yGQcCzMYK1UyuCKhouDHSDNDGd27cmaPCC5a2",
  "key42": "4ndDK5LuhdLw8N6pCe9d7Mbe9LQ5EToRQATb5UZftvQ9WC1sSgzGHHWKgVPwRdZD7C6nwk8PCY8E2jpVK9QtQM8K",
  "key43": "3ve2dTcHguYMoeW5goBMBjVQvVSkhmTYaWjtsdeSwyzoopLrNkKbbh6Sbxd9SHdSfD8MfWCGYeexvc6TtfAZPk3e",
  "key44": "3tMke8FifeXtLNMBqWRX5LYnmTkaQcFJN2KE7c8uwn6PvrDQMeyyheP48iaGMfrWieapcZqkLWMBqHWbULwK6Hmd"
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
