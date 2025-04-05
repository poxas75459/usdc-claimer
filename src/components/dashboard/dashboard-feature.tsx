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
    "4XEY4ojoQWWaWcNZBpEsKHQ5upTGmBXo6gA8jQikAeiJT1UDXY18eGhxfzoGobk17evfVaWCZnpkaHP1cWwLzVJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PYG977sC4zdA8vFz1KBwoAY4yS687pQQMdSgGrfWAvJFGUtAoicedveUfWFXZpXQGp5HWB3ZBnM4m3mruzhY7Gr",
  "key1": "KaQQKsjiEHu5ns8qobBSMhbebC1qYdaGRYPGBK95EEjaCiBh3KZTiL4FCBr4sFg6UFRU5E3MdHCMf7E13VkuddN",
  "key2": "2br6kVQwt6orLaYTDMWeYoduwkDXUV63Kbp4Fm6PH6jPC8LPbSXwnKfCdnyzHf9UZR9p6FMkYW5m3LXX7mipMXXy",
  "key3": "3G8xHYiBEDKcRfizrTRCQ4N5o3HkNBpA3PUSwjXjZHt4VdzgKWGAwtrXzo3dzHfZwnYXhb168KAsYLjp9g8nz9yW",
  "key4": "YKKG9UXEvqpoJxmG6tFzpN9zkiJgPqY53q41io4UsoY15fFru1ysaMbFdWGrxZXEr4opA1fwRMn1irpAqJZpGXo",
  "key5": "cGhFqVSNA4cyWnj4vWQCJkNt4BnXPjdyTvMvia7s6DsB6MWNt6BAyKpMyB2L4NSCDUrH4SXo9SusmnVKGeXADdQ",
  "key6": "5BaKqioMD3WD3eNGMX4KVVWr7VdcCchonL3XrnAqJanrjM3svJeDHSD72bLNXv1hiC3zCSkhi6Kega1uFJtA2HE8",
  "key7": "2PJh6WQmkMb2UT7opVQVM7cp87xEZPg1ked95d7tg6KCp6pccaTqbZxL4dEEqAh3kpC3LsZCj98c2Tr9tRso1K9D",
  "key8": "4B1XLH2KA8FTvzs6Jc5dCG84TpnxZm88SmH8f8HcybgeY76AxPfPqJV4tR9iCrsg8iCriUPfbcMzCzTsju9ptTxq",
  "key9": "5K5YdMUE55EFPe2WRurE8rxpzWB4LUamZVYD4FdiFoY3vkt7KqAjo7Q8tdQ8mpC4ouarbFKUefeeU23xonMhf23M",
  "key10": "5Ajeoqvfib8vp63yfvSYPqErmyz1kQfqk8naDFwcMxYPy4U1YEuEr189bP1XxtS6nP1nrBmguwzD7jAt7ov6Yh5A",
  "key11": "2dbKqy5RbtjBk9xGa1zLNUPc2tn6fUP35ynDwnRkUtQ8o45dbY8T56NtWHwfNx6XNddcQLSL7gHC7CtU4NcYQq2r",
  "key12": "3KkwL5UvEv1BcLkdPQNj5CmKeNSp2xnSMVeLFSxzBoWqoPoX2ytytcCNkwED51oSFZGhzubFitugo4tV29nUQETT",
  "key13": "1KSHKZ31Kq8UKuznY6SfMiYWADAD8kpnwfxCiBdxDDJkuHtKKjVkCRQgq1ATmdpFZJ6pDcHaqnJW6dM3yWFdvGV",
  "key14": "2tXbFpHumSzChL1nhLLp77ZmeirJnVp7n2r3egQhBifLRttP7ueWYuMnaTAW1xHxZexqHZngD8xjtFbxj9cYxy6T",
  "key15": "3HXsKRG1xRFpYBrUaucV7ygLD2W1HssTUjuvv2UbBWBMQ7cP8scWga34Aa9VbMzdhJ4JmdCChcW6URJGUxqGQU8n",
  "key16": "4CGRqwMSMQhBkTCrXh1nurPhqN37zVCZQkQpirMa3amj3CmHMGx89Q7j95T6UVsJejcyyv7q3t3CJ4WxMnrHGm9B",
  "key17": "UsQeC3G6HEyutC7V1ztbv1mZrCrBUoR88ncGrjfB7xp8N1aqJn7XpoQcrxi5BVVyFaCfYBbRhEAVFu6XdabJC6j",
  "key18": "5rzKd2H7swrCj4eUPqU9g5LLG2CHBt7G6XaapNBSWuLUtHQG6oYxYf5MesRcN8fqJT7fUXVAfE2NVbRWV2nNoLFP",
  "key19": "3tKDeVaUKf2ZEeqVZwiKZH1AhxtkhC8FJ7852knvJ1xheXgY1kVDpsKTKwji6wVewCB6rBhL9ecPM98U58AX8Mcy",
  "key20": "63jiaLeG63fDumzvZA8QzPU8vqEVbHi4FcW2a7tNykdKZuQbqYGEun1u1BKiqGwCqKmJEV61T78vED2Gr6ShywLe",
  "key21": "c18wPRwjR7Q7Ptg5cmbRGV2bWBQKTAZb2v6oqRYVVjfsjDdiNQMKc6pcoJinzESnujPh4sWSeVNSRKGvKYR3FRo",
  "key22": "4ArMh5LF6BTsy7YGD5WTLBt4atrTtdLaqiHfkkbkgFjRrQFJe9DFgDKMJzu5RwJvng3o7Sbim4FEa1jFHktFptxa",
  "key23": "4oDtN65ZwrthkfrP4HBGkkd2p3TJmM4qE1opfHmSyQNSHju9JiGCLTKUmwXZyScm35VB7whA8HxutoX3qdBa1Cx",
  "key24": "3J4VA1kWMLtuLE7X4QrN5Wj5vm1rpYWB4kUthAxs7Bdu6qe697nYDaZMyE2jVLVmNv1mKU3vzBCXDhKnj4brnBvK",
  "key25": "5Twgdy9aZnPafWqxtaREYoiaVyh3XhS2KUL2CS4wpnYLYA74nehrn1Uc2BuBZQUpvjBt7xxF32EnnLT3t1z2ch48",
  "key26": "5rGrMNeZruAhFJuda1BV6n1tmBKp9ZS3PmVGzxzKEa3A9L8DmpbSyi29wtCHWehRpHY7RpS4BqUqGQzJ4y4xWt2L",
  "key27": "3BD8Hzb7Q2GBDLrChELHusLGeG4SrHPY7kETMkKpjrjjgg4auuhBv5yHkoX12vTZGhR6iQRWvbcsZhYD7cyKsq6S",
  "key28": "3BDamNt5UYog8W381YFW5bgzqWZKyWP9Q9PCuLNUALo1Y98TMUH96FTsf5BrCWSo41Lz7sLTCErYGdSgz4G5Xrn7",
  "key29": "5HZC1AtbhKTARiJm56jPsRQVtGk7hUHvn6fbXqhcFXSg8zGxZp3hM7SC6fnqd1Gpp7rQF9k9GE5LVu3SCSqCuUJ1",
  "key30": "5fqSSbYPBZjfjkk5wp7vRvgjwqpXySEjpL31hLjcX5atDQSQqzfibk1kKrWDeJpgqtujfqQftUvN2DSTUp84n8Zq",
  "key31": "5cmp5t1qKyiYW9GxxQuDfyRDH1vEqzmLrrPuoqUxAEvcbibAwBL8n5UmUZuH3dDeXeCtD2jQ5vGJJcJdehcTqqUF",
  "key32": "4BZdsaq3hqANaq5fLcstbJqewS8ewdkEZuPCxgPpDD1nZnrX2AcWXson1i9m727BAd2VAFAGtr54UaqJGPUcNjtD",
  "key33": "5SiJUcJGX5TvSXvHxBD5DtaDD7yyB4rFXm2MVvMZzkuAvB7SzTZhgCuSXuSJeUwU7FHhm1LKK3aqbmSBrG1kdYt8",
  "key34": "21dmDNURx3Ww4DfpAWTzLrqxT5uNxD1wtP7L7mWR6Hh9tKz4n78aw7KEsEhBhGYCbutbAaRDe9ukwxSNbcDaqAj3",
  "key35": "363Tx6wBSvScnsQjwKVSVSjd258ByAmceVVe6e53MLqbdycLGCgLg9uoAKwKra8RKYGzA4KLC3kLP95k7EgCqY67",
  "key36": "2DubWWwNrkvmysjXesHwK5WBFgfVNjNuGzrhhU2SmnVj9odyqZoxssmUiyA85LKsZcYsamuZJcLKmG8mam3canKb",
  "key37": "2s27WU9HMZH3rGxsDENNPeVKJwTDXbUrYFyfefDQRyL6JkM68gAAitkcWQznTm6nTtJvTb9djavepD6hC1JuDo7t",
  "key38": "2DpWAKgVD983CvMayikip3GwNVzdmTgr6jhuCA3FWz6LBjfhdtMyP3Egx1mcqU2aGXSwXpun8NcvxDTNCNbYScFs",
  "key39": "2WaMShc1bgFqqtbiAMweZGL9gChwiztpKyfM4jpH2DerhimRr5t1zkcV8CWxMSSyEUy7s9BYsYbwEXdUmCSKJ6NR",
  "key40": "curji5g8cEyhbwtQXgH8WpHCAbtybqaGqQaYVtBwL6HrBLR53yQXWojVRCazKqtJ4LXvq8ji6u7CxQ3U9QHQDNw",
  "key41": "rRb7ytUaoNcAd5h9X9WX4MfT8zHwTEuGtUu4vzUFiZZgFy87VQWKTfenF4o4fEYqZwfp8ewsgQpzVAm67mXAWEK",
  "key42": "2zcFYZDQhqRQJybjsXVyTkULS4CEgueJ5V61MaFcU346FXFJkVgx2Y61rJrsVAUbWbJr3doaig62ueA3k6fqzJ2R",
  "key43": "5oekWbxH8FExjCMVZ3zuH5N2dEFdxvrDGALHhuGVFJyzZgadVyehrhMLsKbhRrTqXKv5ULvRVi6y2Wje4BBcm5wD"
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
