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
    "4wWeK4fwEJ8MMqkCEzH4thcGfMuHemf2VS3h2HsE2t8cvKrMYTMqNACFqM5wQKt7yp7fTzyRdtmXtPi7UZrGV4Hy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jzWSpB7acouLmERGusPK5Pn7QgcZ1qbB5T4RXhBH6fgYWyuCntG3vgnTjU4135Rw3ho7abeJzHReHwMQKiY7fX2",
  "key1": "24mxAaTMSDiyworgnMnG2CN9TKHUCVmihiixHJAiDewfRjy5YjutCp4yvZJ8MCB7Zvs3kmYvNzx4FqipcFJt2DrL",
  "key2": "Djr461a5aPCHrCSsqWjAZ1CGVhSsWdqoiWUejiBKvjr9gQdxFvYocodPrDr8gESFz1Vuok2oniABeT3gBtPSSGq",
  "key3": "GqMDCZHDjVJjJ99ftXVfjAFhfbhZC5NcrqPgw11dZEyyjyxCoWWGRVUr2GPbPwmde8dEZv8ub5Sft6R19EobyCZ",
  "key4": "3UPRHWNeLVQb5A8pzrHAG6PARvnp6kv7oJRQJHhwusb5xnZcgdstEbo8W9HzkBLr8X8U68qpjycd6aVkirNSJAty",
  "key5": "2xxEb7ckVvtDhPKJ6oo5XFGoF2mhfurfwTJeV7NkqBkYs6L8pbZmSXzNxXwSqfj8fRGsyd3EYLewXannRXvnKzS2",
  "key6": "39UqLguapf3vAFtAEzaZoAp8DPuVb6cGGAjHSJBSj3Wqfgs8PeQFtqQhMEDyTPYuoxwC5xmbzhcVaD5enJNYwEb4",
  "key7": "2v3Qu4ycv75tPV44zc66e4VkBEfFoxBrvzwGp4KUZwec2zhT8CPe9j2kbmqYRyQkAwdBxiWJRkXCiuJ2P3gczttQ",
  "key8": "3fmzMi3TD8qBoxdYXsbE2uk6uUYrHvnX7sLDUcS2PxMdDwoWzFN8rmMjHt1MugT6yAidznpw6vWrPiimruRzSWkX",
  "key9": "5a4bDMSANNziSQoHnUZkhNRNPVAs1xysuxspBbYxyGzNJmh4qP6oFjUHesvSLzbF2YknaycWMRXdMbgZ3QBqbkSK",
  "key10": "4eUpQUXBQZpZYbEqQKhfsC4bc5n6o8fFmL4hUXvJt3PTHy5DdVqjdtdaPWhhUUNiHMwyjq46GfQFvPoQoEf6hkaf",
  "key11": "4QfSYRiYyjDeMGwu4ovzkNvLBDGjDJfWyiKWeJpj4GxkuP1MM2UHe2CNKruhPNTpW9LN2Q5eZ91RmNRbqEgepnxn",
  "key12": "rjJ2hBSw22XPZEnWfm69Nn5aVzEDEyT7ErfXBzai7pyf3LKtEpW3QU481DKh4ekY4ttSy3xo1RJNm465Z4jCEdW",
  "key13": "3T6M9hZVgDXkb86dQMzaYVSiZ7RtFwXRDvKBjMhAVXmgSxZLxsGmsEArbg2yJxwGaU9ZhNCvD6YUrrqvFkVs2GkB",
  "key14": "5578RefV7BCedoNfpUfBhVo43pprE9oUeJiwLYU2aUyDGcXM7mZhU4avWavuSXyH5vPvvsXcsm43zVW3TJt539Tx",
  "key15": "5obhVCF7ANABmSTqqUPHNuhFWw9nEfgZ8PADAPy1oyaf3PK1Zigo25iCix54UmzMoDku3RWKb5wVtWXwsbKkpZ3M",
  "key16": "vLVMdPnZJh4yLQKRrdVf3eD3sP3HAG5gzkSuUS93NSwC3SuySzz5Wr1LhGi9XutpECqWwxR5oYhqDNEvgc22RPc",
  "key17": "21mqX71ATfHD35WWRtTuT5m3NYKbsjfMZjHHvLSt88VFvH8KfGXPNjQMJwuqy3g79porHY3iC6p2iYVGasEWBYUX",
  "key18": "CJruyrWyGbcd4ytuoVLkED8mXyEWTy2jCJASJqbjFn6jzMvdWxFz6DyJgVgo4Xz2JA85jTAUpHx81R4Zdmdk61A",
  "key19": "NdJRps9yfz9APYiBF47jzNtQcwJ8uc9SY8c2FMSqWwEqsHpZdz3pkiWaDYT9TBMb6mNsTYzSfW9GkjLEaebUspK",
  "key20": "4tPCMNMYYRjbmQ5WNyvxVgNQhayoxS2iV7EfFwaGL4bisKwbatEN2DfPGDgCiMX7qUwLNmQL1F37PWMSgwArKjnR",
  "key21": "jbp7vcn3MLvXDwnzmxoZcPk65qqUVU49h6b7MtZqqA5iaZTf9cscGJGDqxgXz8gMVa65PoETuYuhm8Td4e9nApN",
  "key22": "2NZNHMydwRWLXM34jMZ5ZnrVVZXYPR3tXoD97NmKi5DCPg2tjRYvRhF18pFa3aswTNDkeqG4vWD86GbPcXa9J1sc",
  "key23": "5ECFLWPhC71AGeU2b3cCWojS3XF7TdaF1HtGNvSEXJjf8PjMYfRnK37HfcZ3KpdCvBzApR41UbYMvPGPcWQZshZy",
  "key24": "5c6QgszhxHxd24yuktELyg5pAKPjuoLoWqMAdwHpnZKuLkV1L7gFqdNaCUWQHfEUUpx3Wd1xz3ookgYJL2DVUwXy",
  "key25": "3mc9hgoJcfwjYxCES4i2ybM7aSUiGCqWqacjZhsQguu4cQJkocUXWnUG5uSkuwhEvuShp2ujjUVr8965H4md6Qkx",
  "key26": "fFnuH7bjpz9XLU14gBYM8ioe21XYjKNQfw3UWsMTunVzHvTcTfGTauNCccpD75RstBdJ3Uj7Uu81UiQbLi5oFDD",
  "key27": "3Ex7EGZV82DFegEgNc3qZgVH8gUjRAUw1Rtn5EfXVdsoBrTVH8hcXdn7fF9XwfGzDw8WjoLgS4X3exauisXWLSXB",
  "key28": "DmY1vSm4W5mdQHXTC5AYHDdWwJMt7pzVQpsRryehm4e8Tfdsv4h8HU22FE5zkjBoTFYYuTVPsis59K5Ro21BVVC",
  "key29": "4Fb4SvZM9Q5RExba2GRodrrUQ6iByatZXLa53YJGTiwowuwCrWkYXtvC5iyBn7ashiEBHELHsL4Ur8n6mvVSPh1H",
  "key30": "2jyy7GtoWPCWB9eNwPWg1DM2qHxjbeJzi2AdLHhwddMkwsMmJ1vbXZV39cFq2n9pFnvFZNEbH4CBx95wyQMaS6KL",
  "key31": "2uo5JNNMBvvG8G5F5PesKzx3EMRJ9bbv5CAiafSvcFUpieHvT29W7gX85YAtjMxs1CXCk8KUCXt558JgvNQ3e81X",
  "key32": "4p5h1yADc7r8sw3H6TTk3WbVwaeVBigfM1xTctnftDy1CJHbW8HP6Ca6H2rLdw5AJByvbE3FUduL8jgEL65ipyTF",
  "key33": "5kxDbFq3gEF1sSsG8Yy5v5MPhfpR7bXP6awGgq9PDCZKKeDwaRdtq4F6HvQogXdwhmSCGFm4p6pBsiCSpgSz1e5a",
  "key34": "4HKyGSJeo49ssTKBAE3Y1ANrtit6nSPAaXi4tvPk9svWW4kjwsGzFK1cQ9kRLQGSg4R4DGNm7T97akVqqQeKt26A",
  "key35": "5Q3ES1UDui5WJyQhnUCEhXBES7m8KxBzjCtK1p2QUmRU66mDR6w3sxudvEPcdk2QVE73F6ya4ENJVrDz3Y4mud2j",
  "key36": "5z2t88G1E6DN4Yo8fRKcV8uYQ6EvHn2PY5cDVisx8Cj5czHGN6tXfAu3cFr3xknJb2VyMrKJ29sMSsRzszRiHApo",
  "key37": "3HjsQPKnw7f253VaJ5pTdhsT7aV2ptiSM66CadJMDNFqhiJ9QsjfndR8EgkE3KpzYJwNg2h68JgmumnhTUhqRLxu",
  "key38": "J1adLomm8UsHTTCmLUpXpp1pgfLw3A6VeCWLxmtp2cTBSwBpYFngFnL13BjmJZyCwotKVFnVeqHhbNgnEq1Muvp",
  "key39": "rnw2VMAVdYii224a6zBJw2qm9vBcReP4urAErP2qXE9RtHZ7G9GwoRXqQ9imwJA9uwHweWQGYdumkG3FFwuXufh",
  "key40": "2dK3YGEj7SrefidTfW44v7Pu8S97UUB7Lfa9cjcSCwDMQbK6M17Nruzs2e82kTzi5L6NKGbKWDxVkhRRKvgzTYf",
  "key41": "5yP1Vj55EEmPCfF9aA69KMkfwHiFNDZuPH5oYPHJFrSVN355tYGAyXFsFYJVUGb14vEv8VqDZ9sPP2cwc3aQDcp",
  "key42": "5EPBsKwBznQ2SwxCgh3vKA8ESTsK2ZCVrDX5yy3s8H4jJdNs4Ks86TyWQzwksPsupyGqQTRMpRnasquXKjescxTp",
  "key43": "KfEbj9A87uwCDLNXgyDN96k8pwJmkKsDj25Pnk6HqRCBcVeWAv2XAHn8a8TsH1Ree6DiGWAhfL3w8neLmZ7rAG5",
  "key44": "5jZ2V7gCCJLzpfgfHCHVTbodHj2K9ZRSPWTQgg4au822vGvBDa4B5ms33PG3LJk7VTBUW7RKSouwa1ykgrpAyvVP"
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
