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
    "srDNBEq6zxnN5bTLBY6NBuF7oorvD9sqKMVXRbPetZyCEsBYugvhMtxhCMz44KSbGPJwRtHY9wBWNgxMGLAAoMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSv6aCf3yS8nihPPqw8E8RQb6Qwmuehqo7kxqL4F3rhBNBBSrbDRh2vJk29UeEKu7SbmPj5YkAnnnVYHg2CugVi",
  "key1": "4WZkNV1Msbrajnw8HwwADiZax3m2JnmTc7vkqP8saszRV2tyMQLydHMKHzxAKLXCpmuKHuXd8WrYHoprriPrBj5C",
  "key2": "4xZengRYjBdN25yTGu96cUwnJnoVx4hHwjpoD7pV1oWSGZ7goERMvSF1As98jSwiNKBfz6E9zwvtqegdJ77LJz5s",
  "key3": "LRH1qPTomj6qQuQBGmvhHB1pmHN2AdFKRdcn5wBjPY744VkdCJhyShWBRnsEVSzwn8JKKe3WRTaHCEduQ4CWG8b",
  "key4": "58hXkxGE8XK91f8F26Kyuxs8fBMuSZnUNi7GU7iopbnq8JgrmHZiFuPbdKdjjYiQzZ8RQiemotM1RGgQtZF4t6NT",
  "key5": "3fuP5Gh12FJMg8nPXqUmZuNdhhAFTiiVKq9w4FZqCtYaMVdQjdBjReAC539Vea8J2a6fUUrDX7AbCC4VDUmCUv72",
  "key6": "32eKXW3RqvqgeAFJ32tZCDBWJBLcQyB7hHwbPGZFdnK9FVCNwxMzQXst6JMK2b9MjdTkq5sgQjfVH9gu8kFmTGMW",
  "key7": "2gVt7uKSH8bkMSgRXxYe25SvZWF57LtYfnwr7WrWj6kQXUgHSZdr6sxQZ76uy4oT7tddJk2AMvBMV6pQ3RvBDb6w",
  "key8": "4a5JiAFJQ6yJdSZEBnoSUtsN6xgY3XENAjmwfgqUyY7EsR9qB9bKvd1fYYd4jToy6fSauVAW1pT8Y4vScguG9b4k",
  "key9": "qdLUXfThnZNVAGNmFdjnzMGXCutfmTrQQYRHio1otzQNWAZK9dLhqKQ3zaS6ZxpXZrNbvQmKE5sjoSZnYxcLHsU",
  "key10": "49MY9rgiZmoUEVJFKQMw5rA9D212PTtDq3ou4Py8UMzkGSJSXveb56Vjj5CSuBSUNtDrXVs5eDYcEkcsco8qsse2",
  "key11": "4HvaLfxy6UXUnQnrM3ni2SsyYZsK1GsL6KcVnx4pqY4j9p1k1K9LDW5BFxZbSiaCMCjDGKro8VYsXVXUjauCat8Z",
  "key12": "j7cyZMmzayTbcTeXRRj7tAk7YHp9f8gbThdLUoZXPA7xEKNwKv251ySZfWGCNJeu1cVjoBj2W63kysSTzr7Nv5D",
  "key13": "3ZxRwQAEN2rKG7VRGCF1s9K1TzTjYZ8sPbQEY6GAL5ALWwWZWWp6y2fZg21fML5grnJw9Exfs19HgGdZHPHBsiPf",
  "key14": "5Txsw8deqRoquz1hMA71ppawuKr2tHvqW4dWtzNdotJF9zU5nVDtrNcJKfp5xDN6sybmGsnfVyCQGv1WWKNHvobp",
  "key15": "2sy2PRzPyQa5stT9sZU8EK5fMut8FjwUMP8LbvjbYqZc48LoLRtt9t2CBmi8LXfXcFnq4k5wuo3Ek4y13PBaBwr9",
  "key16": "5ZGYwqhvCHYXLxrdCKejJZyrNXomSGtVbLEsWZoogXxu2VMTh1Vkv77ZLeCkiBKyDDzs6oXTwS5GYrDcBru8nmpU",
  "key17": "2LYDKpBSoTKxHNXZhfG9tn5ZpRvgJDR3bBU6KuxdqwVjbhTph6Q5b1RMHuZorJJaoUhhPPWAmNxy6irpcZJ6yaV1",
  "key18": "3ojNdbACjgaiM8Mh78UDYkykuqJmAk6gPuHiNV4B8aALJXnhtvt7ZV9RSmNYm3RsoHZnyVFunns1FXJiEhBM7yCe",
  "key19": "1KfDNgcpatZgvmKLFJumJXGRmCru6DiUJ66m25G4seL6K5SgqFvmQ9NxVtanKJTRGyA29XfpLBXtPuJD9XD6Nxw",
  "key20": "XZJeJcV3JqZLvucwX5B3NYq5627jYJezd8GDKDVUPxLCp7s97PjD7ypQCDa8rd5fmMsvEYFcodQ91Q2EpSURCn2",
  "key21": "2DbmE8eoFLajtqr1RmaMXcYtS9w5bw94PVbrzdATqGZKAfxaYjRd7coth494eU8hvTsa1WSrhoPC62LGmmKeQAgQ",
  "key22": "yUNfotmRw69zcXmG372rqg5JHCKSyeBsWgqjJLnGoLwmCayVG3JJy8ZTDJuMCiQR1tEKTayc7riGnqkyUPiSHTC",
  "key23": "5bi33fPjrz55joYbjsY7L553qMsJTiYv2oUv5tWtBJvLMYEPzMbdkA9grpv2WTbBzLw8N4SiFRicwUhMEdajqncc",
  "key24": "5jysjNF7n1NgpGWJsicPa5sCkRddWcejLuAdEKReoZ7eBobK8gUtGWg2prhxtxjM39VUtScqzSyNTDpvViskAaxU",
  "key25": "EYSZteAT7Az3drz9H6biqmHzUbxdcgmKc4AtGxNfsQfF2aVxir3GJ4sQCDhB5iXaoyuMpPng791yEbQ6dCUB4jq",
  "key26": "2PMo66XyVuM5dfBCgfdyivXbC7vbjnd7n9eQtwq7dWKwq5rkXiRmbFncnGdVUaSkifc257hCG8fKPZ1L3x6yXCmp",
  "key27": "2uPoA2k3fyecSx94zHVdYW5k9yeyySD6Z3VcytG5h5MAskVhqtCjMNFvHrtSEmVHwrxL5c3ZMErLSykvLMD7X16C",
  "key28": "PMrXchZS342x1VYsmTtdWmQENd1pJtwMkhrEPJXdXNfEdtUpyEuynUJzkC9tKuJCKHwCDE2fhft6dbdbqz9vSzH",
  "key29": "4rRxv7Bopxk4wmWjSa87pBFYvmb9WE1WcCXyE3Md2hwR2uyAi27fMB6ovwQuNCMu7xVMn7TY7YLZ7pTkXKfXuk54",
  "key30": "BKainfum2MqvfSW8S1wA8PUf99z7NmYQGMtvbGpjVJkStSQ17P3YL47pzQgU8uZtNvnAwdHk1sWRmTeu24RAPBF",
  "key31": "2fvJ5YhMX4D1hPFrTBktDw9SfixXtm8dHPBFQcdQxbVcZMZuG3YxiWFwddsM6ebgCsrHKcFgpkjznkTEmtJjvUu5",
  "key32": "47Fo74jPdAcCCMmnSxSByAWcCZ6n2SS9DenidoAW2Dmw8e8zCGhC6odoSB7tYre7EeivBTtHKnsrtTaPJS49tCKa",
  "key33": "2H6nTaKLRTccuFj8NjNqaJLAY6AWQp3SY7PgeajpGqZTs3oPh4neGtdtyVcum1eocjFBLC4Znm1u3zJp5ZwoC7AN",
  "key34": "4L4AZHH9ySdtGwBf61L6XUkmfuZwSihsynUNxrZ9bGaWvyx21u5db5P7XG9Uw7CrmSrwk3CdTEPfc83wQypK5NEp",
  "key35": "2XUeQ3vkhV52vPYCAFJ83mVTq3YWH4NWs9QUGSEXp73J6X6qo6WztXe5XwwXFmL3HP4h7thJrnbPzijKRPxxjzpb",
  "key36": "32iqQ5tjTF7Qn1KWj6dooDo2tjBuG6Pr5cMjXi9YWzihyTAsWDuT7BWyLsuiwEExu7rjM9sYjdkntTJeewXis338"
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
