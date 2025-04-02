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
    "491rLXdLj8EvbKWTBjxXV5RG7pVLPnpLq3dZSzwzcaoauDwGoPuPRBmqk4AX6CnEd3mycNEowX6AAU85W2Y5d2zB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hQNdik4MeY47n5p8SwWkNBV1PnSnbG6pv4oAr5oApMTTy9CZUqZwdheEXbMyooeKDSttgN6CFkRv7NfDtckaMbN",
  "key1": "2uvyff9ADqEKVdqfA53etURdTXAKXz1LbTceoCc8mtkiB6HnfU441QkmRu12dtaSLvAVCTVPfiok11FRrjZF1NAJ",
  "key2": "5NkP45vz4QBvZS3q7DnFivyAMMvmooLfPUimYzNiE6GK8wMPHhR5u2JFuWw9HXNLoTqEawTqip9tG5C9Z7ZzdqGo",
  "key3": "4Ci5b6tN1LEgpY9gYxuvn5PxgpghMtk8qC18dhoYTwPBpnqGspgx4pDuck1wAWgU1BF8yhZYxP8QpidobkuYB16C",
  "key4": "62n2VzH8EaVLruepNQPuqHsWF2avfh6rDGr9ph4neYD8BECTCdwzzuamuGhZhFFoZeqpnqq1sYu2C9g8mDecsSCE",
  "key5": "4UuGnX3xH111iSmwmwt2nPp8wQPhTdN48tyvdcyBH8KUx2ePwdpBVeENcCMeAgoWWwo6yAd22PjCAkLAPneVbkPG",
  "key6": "4sXhTKZ3ULqPRzgzXNn1uDYRfzoe2ZAaDwtRSqBNWjJ4JG3rwRKhUuo3Q5TdiSiFtxLGNjd6DvtqHY6ezYHaTehY",
  "key7": "2Rotw9Gvy9KevHrAeBWTC3RxE3VNfJkDbkJV72JE1Fg2DSgmzUBqmuSrJHsJtUkWJF35uQNtbMAfPKwu1T4XVLBe",
  "key8": "36PKhi1S6TK1ttMXmnkfEFtWgSpbJNAEWGJq6cBdTGwKfpnbqwQpBhFJb9zYvaiWPhE8UeJkDo2Acy4hHX2y5wij",
  "key9": "5J2bLFgC2PSncEJ68Z7PhNuw4JoxJ1sNTSGE8u3iP17nNnexNhy92R8tpx2iQUabBxLRZjN9xmAWckuyNFDjF7sK",
  "key10": "2fXeBH4wFQqUXzm7bfX39dgzNs1g98A1VGuoQmZpZzGm2HrLYFUDeduQZzZJ37Xwhtuq3VEqk6rUB1LwHqB4MgvH",
  "key11": "3zmcRTiFP5XZHSQf6EBjbmLBU3DetgwpeYBQ5e3ZDfU6kUWhh5nWYvcU6kfe1fSaVuKmopo8NPjFSpagepUyi17W",
  "key12": "66AVQFmo4pN4dhR5AzeUUehgoAGqcodt3qn7NNWbfKjZWfyCYCh41fnXgr6Gn85B6frPKG1DNCpGheAGnRDRiQY6",
  "key13": "4rJhUCkcnuZRL9HTGJa4AsHTsJ3Mv1VtwoPdTzy5Z2JJcVcirH8QJwjxgNqcBgSZD4U5h2P9cxrnM8DeGBGqYrxT",
  "key14": "52aXRRW14HVrHEPyi9aUuMRQyXNSJxGjHTrxzWUfCByMgSZUzNANm9GoEBe9f73BRDr97Cuuzvbh9T5EJHbKhZmY",
  "key15": "KGDrdwKCp9z2bafG1icnM4wSbSJpJofP7khevdEepk5F1V8QMk5KigKxVW3QzChPqUwuxWLwvqZFDsyKTxRJ3S7",
  "key16": "2JhFqLFLRVfmXjyyNL6BQe87FRskzGYNibuLtCeEjErhV7GJ8Cn7VwEWi6wpqtDhuxMFcZ8LNnnSMB1qctRzGQ5g",
  "key17": "2Gouv9KeWmYGY5gSz98MyCKvpLTa4pUboVrqw22Sc3QDYRdp1ZT8rFE7zzUsdV7sxKrfq7AHnsXbpBUNrMYxQuTC",
  "key18": "mhhqHm2ZyuxXRm9yz86cRrhc1jaVpy5yFvjGQPYFjzi62RZWWqMbPv75EGGGtknZAtJj7GURrDuE6S1jHquqt11",
  "key19": "RBnxqE3vviauEYWLB6E4Cz9FwSCBBqno6tzyX8mu81YredaMKGu443Gf21Pq6pKzssnpZYVKZNPrccvEs8GGvrc",
  "key20": "8REww2vkQqHmT4heZMzKx2T5HvFph6R2H6TLECPuVPYrr4eB5buYfnPVQWvNrVQ4ZtvKwoJkPcHJYLeEUQLAh4m",
  "key21": "4sbLdFoyhWcyp9BVnKM6wZLHzRxDK3VJrsmp7jKo7kimKH5rPxvQ2DQBoXiqkiZ4dFrtqWhAuL8a7yRDqVjtxK9P",
  "key22": "17kH9op8N1fAWPY4DqooXCLk1uESXkL16112Rkf31KRru1FkDLSs6YNMam6TPet6mX1tTgpctqmRiAywduXQA3B",
  "key23": "2WqQiiniyfj8NA3YpWzDikbMMGDAueUoQfNvQXADc14oh2yHVETk5npwxUFZgD4nmcpH5RuuKyXSgerB6GzJ2ZQn",
  "key24": "S21qvhbsDLAPPZxGFw71jwcNv2i9h4CAj9TNHjutwvJGfA7qS5mRHGb3HuaHsrzVizJ8uScvmR9iFUjGzWZ4GCX",
  "key25": "3vA8Ns4TPvo6RytGrcdqYTrU8BDTS23TpWJGcmS148f8rxk6amq1B3BDPzngGsBdEFgG9QmvTknLKuWDvmsvAQ6P",
  "key26": "2CNKcUheuQYHJhWw8b4f5FU9fD48Nbq6prVwbN29CD7EAUJJ9suxjsb8sMq29vVkJVY9Gsue4Eii8YMcwxy5YqAb",
  "key27": "pFEnjNGyVSvNbixExyGA7GHyQJBhCgG3ykHdNRKD1jKHeuf5hiLW9wsWJxSGcf2LK2eKfYeKJgmy8d2Z9nrAcQs",
  "key28": "5UjFBmFokwuacYcALbPYCQBHwpqAxnJutQaEZAiyzgFxH1qKDY4Uj82vyeXsw9zi3K84BVCCazTjHHCgyfc7s1qJ",
  "key29": "iBLmQ6fApgsiFDjnLFWs3DXL3wrkqW37pqpvnfL3gQsSW4yBxibRBgg8ZBe63gaHwpKnsr6KhUfPD8AJU9tLyRH",
  "key30": "9L7MxBaaenNJFMmA6Fdp9mXdrQsvPUdx6YpCnNuGFbricBSLVhamc3x98L59jxcCg5gsKAGwV2Nz4VnD5JC6qvd",
  "key31": "4himL4W2FBpezwafXYoQhrtZitKJ8uFWMCSiJT85ixbhoBypvE5iM2oz8c7iiYKsq7FL7ZzEKRB7o3MrFk3t3uCR",
  "key32": "ab7nkw4vdWJk5can6itLDxaknP18daZ3deRCmt7D1Sc3c4RhJXT5vcq1jCD2W793R4Pe4v5qQCriQzFk6F1VBzj",
  "key33": "2bArfiNmdkfau8PegE23PN2c68mbcYWass1U4y3pugJArW2sspsvgKFF2Mom7EwTWJ2Z5wABNMXriQsshfqzoUky",
  "key34": "2iSvYNefVJv4431FLQUePnokRQLL7uqAM2iMYb6h7hSC6F84tNBe1n8xh3TFN5gPvCqpjCdsLib1wSAChso76vut",
  "key35": "oN8zgAwYkD39iLAghQAcDGocErMXkAxEvgvdUKLdEBkz3k4kQUXhgG8vG22HPfXrssSDKzKjiCi5EEuu2gR9z6Z",
  "key36": "2cE3w8sNxeCwgRB6SwcLu3AjapQMJPY9rNBZoBm8BhpQ1mViWJFPkdNfzHcofWLehjkwcnV8WK8SfULwkEFSAaP9",
  "key37": "4tiyD8QKh5T4p28zsxNDoV5r3Rg2YFHjSkgWniN5uC5qgtmsjs9cX3Mh8qKgXus1QFGrN7tCBFRshjY8gWyeZrDp",
  "key38": "2EH2rpFxADHqiiUcRH8LQa64zNSncayTV71dvDqXTUfrewhtYzznfJ2ZQWbuXqYbeXA9SkAD6hWj5wCjBtcnDqHA",
  "key39": "31HsnYv81kxdZvAH1nc17K9LrSrAwcdz7iErkTcwgcfLqCd5sYp6BRnbA9MCfRjH8SzWCRdNLb5A38SxV5ry8DhH",
  "key40": "21QJ2f1cfqsq42GcAR83CpqAYhDPgbdRPuKY3XiWemeeCrTqwLVNiUZhtBCTg26BR7bwDyZhUQYwXwLMNt1kYLeh",
  "key41": "58VKLaZDDY2NCAmeyqt3C9peKYMbRTDsQEczNP8h2zzJZA5XupmxoC1Bx2gFszKcWFhMDGyWeswSef2E1GnbA3qi",
  "key42": "5nABaRkzkYgAxA4hVzSbwTPojbtjH2roivzDyBE8iBNERXsGZzGyhR6mkv1JJmejvWfkWmfVnn8RyiToGpxz3kcB",
  "key43": "5nRDMNFmM5KLrgNPubD1nuYD5AJVNVXfCSSCT7PPZnWS23Ti3QR3afjfMdsy1N1QBB8i2VSCHzxUaJcn7F7bFjq3",
  "key44": "3cfPM2cyFANWegQHWoskvhaobAyPFkfsVUVj9K4rbg3RrnXJeapSrkjvL9JUVkS1dbUFdvZwDkGMCgX9ByPATb8Q",
  "key45": "3XUFewztDnBhtjnTc2i9oNvs8Ly6yi92LmBNFUnjRTpQGYnEuXkQzFcxSdw17od5y7M3Z7Qk8rvBLARdU7hK2zWn"
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
