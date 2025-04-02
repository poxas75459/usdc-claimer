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
    "BwdnSR2VDvocSyxCoEFRRZKY7eeF9Yx7NeT6sTZur87DBspJcRpHEDUf1NUntEuLsSwHU3xGyupfhQ3UkiCYMxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8v5ky7xgzE1UYfi1U3ECtA1XiLEw3KM3xNjJW74tFnNkDiDpF7qiKzmofVVSqszoQ1HzSVwV8ad2eQopKZRAKx",
  "key1": "BnFCif1VKcnGUeqU6ezrMACCsu16TVhjAidPxHR3gNsEVZxeYB8SfUVVKhcdnAP4KMpK2dP9wihxur3EW88H3DA",
  "key2": "5geRExbPHVmWc1qthLeuKkq3R1ZwH5XS3QCvrF7RJ55hj1VpateH2L3tqbVsHQcP4DLFsLxcRAULkXLroL3Yqupb",
  "key3": "5aKmU5gkdg6z5JgGVAKTfb5GC9fBWbaGA8ixjDfDDu1XUHthK6i1K2VHbQaz5bMUQBMZ9HwSMmdEMkRCKLoMGvTu",
  "key4": "35yhaSHvzjD7kU6udUmK2kWCFGG1SqMZESdmQtdDMywAL8bp8dXpQ3etFszYeZXdesonhDjrTYjm3jg4xwkyYpQ2",
  "key5": "5t31GjWkmjYX1mF4XEDy4v62EELV1cWZiqaihE2VuyqSfKgMxd1eAAgS2ZEF36G5uf87pTPRDAqiB5jWPYS34SnH",
  "key6": "rDTWzkByRcGj6Q1vkWTpdfNDja1ER8bzX6H51wuDYbpGj2cn4QePRg5KQwVv3LpsbumDb7uXDJC4J2TRqaepyfd",
  "key7": "3kC13btRZy9pdg9Bu5GzS4362jySy8nhrjYfzLfWP8YdfwfsSA2K8iaUr45u4c6geeQK9dcRRdmmG3KA5uN2Ddkt",
  "key8": "38xD7fDyMUQ97HRosi1kQKLiL9wueoRUQr2P3pWsEhKJrtVVQoGXtW6dgUegGofvZkdmfC8pD7Jp5baq7AF7zt3k",
  "key9": "E8F3hNpTKX9mz9zp2Zb7GFpLa8MuDxPL9bi2vKgdmiiEEWHn4VcJKGoRgxc8hUJzCdtwMCQTJxax4cyi8u9wZ1z",
  "key10": "4PEQ4EPsvFjuhTZsqP1axYKsqiTCZLRwW35mTXsFPrZroHiQ2FitiM5CQ3zd7koueNdLe1yXB3Xa6fz1EvhE8jL2",
  "key11": "vAmgcczfE74gCcRTdtjRRs2oZ4zTtnVZC5SBoWA9PbBjcw5MRHG1gLwrezC7reiQywCJPcxhJVa71kdP12TicxU",
  "key12": "NHxnZYCgsWyH7FbGiRCCB7VEGw7D2JaLgybwUbg8vqWAeezX2VfrfCevskRKYQ7XwoQQYdmEjJDRVmx6x9wggpq",
  "key13": "2PhzBS7L95THeb8bkPQrcoQvyLChSJMfqoU9YDhuQhGT2kfVBWguGnqGdtepJvkNNC6CdeHEjr3hcYujTjp2ATUG",
  "key14": "5UyWgPjR2djXh6s1oywwz5hcJ6XXYqvCve2mdfWpQPuKUdiaP1YAD6rLVYRsnbA564jtSyo7tfiMbc317EpE8Sg6",
  "key15": "SA9NZnkMxfktV5dy3G5mE1wiuhy9EKxjZAMJdynDHjeuc195B4RosfseiKAVs9DZtgEsNm5ZHSu9ffYByLYcwsD",
  "key16": "24DD69gsVTmMrnXqciVxx4msAKEgGXc3k6QXJgKAP4PckC6srNtb8SvmUNLkotAwrbBJweWD4cq4bchCaA4Q4nUo",
  "key17": "2SmGqkEu1XjzSwceMJeEfBMAnxVzCkveGacyvUmUBqXMZXkpMCQPHwFEX3h1hVNFo9suan37QvbPvd9BUSFPqhMF",
  "key18": "54STtMKt7RLHG4e4G5sAWNGRigfVekPkyD1PpQvz1MvcKJ5B8Wm1zwCnBKjnzSWYVAhjgiZ5TVPtYEhXGYeZDjh4",
  "key19": "2jcDLtahsB3HLipoxUwQCxx8HvAsuUVsw35dCt7eURoLZi1Ugh3mej93a6SjZjLuSvYH8ncJbgykBTHYHj5QeFBU",
  "key20": "3uW2C37hRG7njzX4zkbEZ11QqE9bgMKubHrCtLw4FMXcV2vZdbd1BKognMeKGPESuFLfYxay9bsBAtp3oHmjzoRz",
  "key21": "2HmvywTJDzmuAAAN6W8Qy7ZwnYU8UZ1tGHbRpraYmFhUUUh95Bro8eVvpxgKbavoug56syLqfURJdap4JuSzWB7L",
  "key22": "5KPZHosyssa66MbLtdZ3DWVRByvHZq3XAW8aJUorsQ1ACAxYmtW28sznjYhyjMK566rR1BkWpwUziUXaWny2qsM2",
  "key23": "3t958zRQzSro1571SzB5CG23AXkaoiubPRpM9cR2zVJ2TLRGR3Wnk466ydc55fUU8B3DD25P1ZhuE6wpXJ2jXY3",
  "key24": "3JVQhbbZujmJShVr8KnW1tm4oJiaR8dJbddJWj2SajpqPtY58Qmkid3K81inRu3Uw6pSjwPobd25sSNPdrzptogx",
  "key25": "4HGDrMAj8awTZnHU4znCo2SZFpNZFHGGSzH3p1gb1Q5j2AwHjGH9Y1B4bqr9fzLa7n67wuReoLcLRABPjuqnx5aY",
  "key26": "2L6dYTy6jALLwzLnpK3GM2qw8jwSSkkwViX41WJuRPKca7vQwPU4a7nBiZJio2R9pc1a7RARS7VFTYFrN5PWwe6X",
  "key27": "4zXJ6n9dLFUpBuYp7kyXecNgzdkrf3KnqssDvsyFB3Pz96Hr2m7q37u8DmL9iY27b7g5aJBmjRApFBNC3H4G2CDL",
  "key28": "3wHkh3c9MZhSBSadqYXUPikyCeHw7ogPAWxCM47AZ9PpZbX6XxRDq2gSNuy3xvfN6NxUFRASpHxkcjbLTXxHhmBb",
  "key29": "4q1Vd3JWd9ryuL2gyS17ajGKrBEVJMf88xEJa8HqYp3Uhco8FfBeT8LRkPrZShmscSq4EemWDuB1DEp31fHdGtVQ",
  "key30": "4y1J9xLe6BNYgbELDwdqHwpncvy3orAtSAzWGr3Zt4hRcmY3NkQi5tm486AYk9MJcixrhGSsaGrbyqxeefBGosZJ",
  "key31": "KCpMcnDTg1gU4VtFnHWiS71YBVZgXFmr4er7ScrWpYVmnrThWWhnQWjY5jY2EvW9TMp5CU7HD1aG6yN6APUVorn",
  "key32": "5c94mAnoLx7p5zKFpXe36bAuPd11DXcdgJmmVoWuUxKCSFAT33Y4nD6TZBakZkEX3a5ha9bRKPtDGUjDjivUebxJ",
  "key33": "5AzWGyHsXXFHyQeJ3iQfREterHB4TW71yjPd8QGSEzkcKvahtbN1vag5Y9nf8Vvc7ypfko2v4bxaYpFfohuqXM2E",
  "key34": "4PD4hjHrSTscK27dt8hQ94WWCdzmmyMdjq95XGNuf55oLQ76BYuZrb9hBGfpr3hQT7KtPTE5ahLLHoGZAFSdky6E",
  "key35": "ttDK4Hhs4CRPZHTqZHGqBKFtYcvE79QMt7333xjFGQ8gL6BRDCUNQHUJb6eGxrWxHh9S9mhLJpN3vkceWeYTwFx",
  "key36": "2NNHgVuPuuijbUsNqtN2Sz47jkVDbfWAvGXAqofDBv1cbWpc4j6xT5FnKrNiuT8WA6yoGtNwHuKR8D6UGYxJvgA4",
  "key37": "3rPnG3gnDjVHa2nGhsZAboNqobu3u66w5cJWoiENwtd56XJcBMp13usMoKVX3349c8qqhRJQePb3UNqusuUsxM7g",
  "key38": "7Ye7LYkC723ZedVE3m4wwA65Q3Bo625uSZQyVyYtXLBosqS9R6cHiLCxbabNc72uBPiGQ59MMuqRaFuQQkaJiAA",
  "key39": "2Pic137Hfdi4bpqrASNcZqHHATFPHRFgtnidaEVZYVK3ae2wVr3dWdLugy3qTnw1ZVEupuXuyArk3fZJE5DNEYcJ",
  "key40": "b6eUavjhRiQnfUYQDwNSRe8XF3jYichFhz9kwpPq6yPyg4uWuejLh5gHQD8g7Bgy726GPvrij9mJWjnD1Eedisy",
  "key41": "3KU5C3PEdHC4pJzm7eibUVtLoyj1pS5T2AEKa9H6so8aareMpD88JDGYG1scqd8bxsYWkSbZwUkSSNLHZ4DrzLFa",
  "key42": "3JE2u5AS7NEfWMVxNGVNTH8bzAGX8SWaFhwDitbB9rJJMKXWHEdBEHjpZ7fR16MVQBPTtXqS7a4vLZzrU2iAgx5Q",
  "key43": "3C4TbfSkSfcDmBqZP9AjTTCPDujxN1g7xm2DAmnYHe7HQmDTJWuwBxk663RPzJfBXK8MniNH7B9k99jdMJE5vFqL",
  "key44": "5MwhAEZX4NZxDPRADFum3FMCNt8QxWsRZtphSc7zem9q9sdgh1i37KLswo65eEE9SEYubcm6G7gLmv3AhcMSrPpX",
  "key45": "5myi5GgmkRStwSDYZx6VimFYrxpX2XSNpUZPuovD66y38afaV3v5ZT9b9HRkzckx7DkdsMa63nV1J292MomTnuy8",
  "key46": "44axgZT4sXkMQzCGgckT83UNiU38r8t7UgCqZfBkvHXJyiwMGNpqN6HifadJQN8Q3kh61c6KubJ7g3KrMVc4w5Az",
  "key47": "4riFXoAwWdLiRxLC2QXMZUmTVd8sSBcsVKqq168gzwJ2GBddTMeH7ftxGPNUgP5hkV5JkrgCMiCiCi44cK2gfhYX",
  "key48": "59Tm5Em3FnU9YGSn6E6WALTb6Z9qzED1cKmn9VMvBPqzwfbt9XBY8s1x7EEwkze9yhWzawotzQ5rzWom1gakPRG2"
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
