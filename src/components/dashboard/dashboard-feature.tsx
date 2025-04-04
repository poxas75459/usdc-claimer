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
    "3i3tvFxgqwThrfMKuNQq5mZpsnKZmjzXSG2tC3zogbpYdiG3EZoFKbzXPMCAeCDrwiMYVYuawJvAxeWAeTg8zV9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zkXpXKpRgaaRbeS5nCz2w71fhWmse2Mf9zKfhd1YBfiYGcDi8wTf19d5QTvTyCcMsTzXSmZsLzimBS9pbFUvqfW",
  "key1": "2Ja7u7VaNnuqdBBUfHpTLxBiuVV4UoNJvNBVQzTPKwznpsc9xjZgbJFE39JHxHUddm7jX1F3XB9o9bejPoEtMpmo",
  "key2": "4nADSS6i4a4ktNDaEMTafZAsaLZfJ6z1E8vSZe9PuQaMr5dZCit4vk99NDHEekC88CqLnY7Wrj6gn3ATFRWumNzb",
  "key3": "4mKwzbHRDJzHyBnnELxEQFvV1xQpXYzzVY28TCJ2TXdGRRFPzJ8VSA1mxvKTGBU8M3QbDUrXr7Foz8Heripfm2CP",
  "key4": "4r6fjqKbhoCC5njTN6B5y1uNAvgczgwfzKwRYkECHomrauNkC7cSJvEQCdmcJopdDAKHhfpaW5KTwEKpF7RCdm1m",
  "key5": "2F1i1TBThpcLggvSoGL572uGqisMC5RBVyasZAsNPpMnfqMYAdRQa2RGZjbfCMTMJGDbDmaUZpMgqZPNUe8A6oSV",
  "key6": "pCtJtJviZAeGL1FupQKTsNpyR4DAqXB7UsHDizrVbyUJouCLCZoo3DYB2WbBoeyimRoeUWknSPgAkjkcAuurjKR",
  "key7": "5uEZCvfdbDqbK7TJxq3qyBvhnnC4dwNDHVwmUcwKzL6bxnFxXQnShtkJJKd6JmHQhvMA9UTX8ATVKgEuZroxRA4y",
  "key8": "37roBbEzEcbgPBuwSv365gPxZxVfLdTfbAeBvmDk2SestEXeGN21GrkBcmKbNXnenWn8FPBKLpjdXt9wPYFJmXrx",
  "key9": "5zU6G9A9MnirZny4Z5Mxw485o5FRZ45BNkXmsCBspWxEpuHLYFKGBj2J2pXkRJvxLNBxVuip7mLn9BGwjpgHs8fd",
  "key10": "4Axjf1jZ3z4FXpJxvcMfxJ8bxry5tiqRuDtqfavvdWarJqME4VrDcXahbC5XzZNR5UHUxvxCREyxTmo6J75rxjmf",
  "key11": "Fuh7J1RLZs5qwVnMNFihQYM8hSczxVJC4w9FQf6JMtY6ymWKrLMEyE4naQVkFNrKrgCN8hWmknSSeGjmXueNeTp",
  "key12": "4QQKo5AtLG23jecrGvUdR28EBrNbdGVBpWkSMEgy5f4nHi8TGkeuE9pgqk2Q1JopYr8rDy6eKZf9ycKeX4KxMqBQ",
  "key13": "3UH9HC2sakNN81cnGfewsofevfo9CNgAz4eQZoKNsXChjmCHGXdjspP7TbMMSywbLvqmasj3GM1PxFKKn9Fa1cc",
  "key14": "5qXNYPyB2uWPBmc3oA519bHnbbSEQh45XxvpgL9DnCiM9nfYk8rjXQvMxDnNJGQP87zk5g8LFhbuaj2YjwZbTJsc",
  "key15": "3WUJq3o9b3qrRMV8aAg4maZfb67erdyZTmFSDQycmXmDTDLeTZHBBroBapmuKh63cMnByZdWPFnTQQ1bvbRR5MZ9",
  "key16": "5rjs3WPkjDmUTavEKvck1ZL7wwDjiw1htZV5mMQF4m4GrkD3vEVwXVUfVAYiXaT7mUSGgB4pKGC82ZbVgLh34arY",
  "key17": "4f4vV5xFgYfHpNQVaiECYgtQ9LLGVDeParjxTrhq33B1UvxcpEuyPfjySNgtnKMa3HdVJ6VJPee5L4gRLmwd7b9Z",
  "key18": "4dRjrMJtGe3wn3PAg6X97Ndq7BDXkq1oZZ2ZxLGQkURoyx9bnHMXjYD9cqQwYVxXZ2MDpFtbYxuCcrpVoQwGrnz7",
  "key19": "3qWxJ6YNFg8K1P6v4MWwQVwGJVa6cGieMpWN1iVAg6mGSFxpvYQsvtuuCqzT1GToe2L1j9hLVwGcrW6NB7MSNz6W",
  "key20": "2JWCfLFHuChKJWGtXWwrE4iEtA2ky5mcZv51heB8b13snM2KciFZjdoxGFcajSgLTc7LBjp1Tt6f2Q6b6qsQ868q",
  "key21": "2wExhTAPgR4yKVyEQ6HDoEyyqjsSs7pNXQd8RGcyxNXbYN64TG18fZS4zNE3z472SJFwFfwiL3p7bbsmoYhDsZav",
  "key22": "4wTr8yeVWNpyLn26jsayJMU1H4JpSJMugLMQ6VvEJEhheDQNqNBavhYgdAxpxxsFTr8VVPxVtiguQvUPxxkK5BfV",
  "key23": "157M5g8d2YJW8E5kunwKd7JgPKKQooXNvSUFNC7qa5kSSQAeq59rY2ZHreK1uRv99t2UcPdQBpfKcfSXz4G1f7P",
  "key24": "2pifAdfUpEesW2JkuikbQso7bgVmYPcvcY78WiKMXYLkh67WtwJrp5zyfvMHrjs1q13zxptoSeTiUsTqpY5WrdAE",
  "key25": "3AGcgjs4YM5Ri7QsFqh5382ted1M96nisJTpiPvontMHQbHEp51PQ6Yw3TSfgufxPFLkPfZWcEXAKGu5kx8XkAL2",
  "key26": "2P3vxEKGsbYUq8Hj1jbdpozydLFZ4vgV3ab1cz6QkAfhmG34rXXtMskM7Cy6FZEy1CCzqaCuQQx7qgph9aCteYMA",
  "key27": "2AV52FFcy3CXackvD5qZ38YLWaaJgMhTkVeSugN8eh7P1Xkm3KBzaJzZbgPULeUhMbVHRn2QoX1gBbWcyCNd4WVc",
  "key28": "48Mj1sHaZJ2J3XSxYegPKNYiQcsUMN7TYvgEyabVQCA9kZZzDhqTbbmL3Qp9DibWWXhDA2GMFfmXkNaEvtw3PE8j",
  "key29": "3vBkkipJXFCudhhg3og2K3F6ihE8BWqwkJsQtAEaREnoquBU2PrFWdUEHTDVvHY1dtr5mNsQce1kgCNHduZTpTk1",
  "key30": "XML6KbKERfYeeu3EALxacYffokZfQYGXzrLsf7ipoCZc8Dcvb8yVWSGkkwrBTUeRhKhzNN18rfUgzZ5Zg5ECb6u",
  "key31": "4bWu6zgMtZDx3E3XKowWAYeeseErPUJHFWg7apiXy2RQc5bTwiAgFyn7xGfHTUhDg8wZxayF5yZtHmKXUvEsL3a8",
  "key32": "3v2KTjsyNBcrGo3XfFd3objrbLX3kZQtQX71CpzrsGtfwqvEALsUfGy3xnM56Wu7YLqjy37ah9dWBN2PfYmbMxcW",
  "key33": "4X2Y92YzeWsWEM3jmNt4XZhZjPBw7SwDmX47vvwERK476w7CZo8xwHxrNxDwNVJMEeFtqGkuNPAoEGDkv4p8j3Nf",
  "key34": "3nCKK1NgiEGDNzTBpad24nqZiyTsdn1oDJzp1XRiGowo1L6WJ99p4P2LVH4fpycVLxVYUmSXzLthiThi136pFcDX",
  "key35": "41Uyq6oRz9GTNCYmSUK8R5A8vsKTAfWs7DN29ohigacjPkw24nenzFboyY9H5c7YnA5ZxJEv8PZQZHfGpBjmEQmx",
  "key36": "xpSn1peMBwpsWNJFjY3Q1ParZLUCNrjBc3KUmPFw31LRJAvixpiBVJHcxJjvkFqVJEoBEyqE1CkDnu7zQ19gWqu",
  "key37": "38t7eggApcQHfioo4bBuYVWep7fCtrovfdYuB7xLAZUemh8SoYPp68ad9R1nyH892WMYzYykCPvJp1wWHBdyYN71",
  "key38": "3Z4ToBNGFd4R7CqTzXeS6kegfSQWeSAKHKYVGhthAZV9TGs3kFNwG6ewHWMTGSujevDXPMr2rgUHW6b8NzhYyoHv",
  "key39": "4tVhtH4fvRTD62AsZZ2A5hK3W2KgmpUtjvHf1oEE2TFuh5ztFHdKpy2Ft744TeoVeQm7tm1xqP2Hovsx1hcYKiv5",
  "key40": "293CoxRe3ZSFsAMnorZvHWtnTTFHCFvy3M8B2tmupyEpkscQogjaSCjf3iBDnrknqf8mNAbmtZd5hGRjL61HAvUA",
  "key41": "4nTLs9GZd7aGj8nFeyzYCr6a4wozMP5i1qRPxw1hLouxJmbQXUNRqNDJZJLtXCRULhkbuQ9Eo9meNrJkkCkAgchQ",
  "key42": "45bYmAUhbKBpyhXvnZ2CGLsmHCHQrbWfTERnjhCcE8gjbexZxwEYXkeGGvfYjPmfwqi5wbKyH9aRskpVtofbTJG9",
  "key43": "5dY6PSJA2tjRf7QptcBj2sxTz89YuzQHHnmmgZivzKZkquUjyQYemXzqBex5usMTtD4mjqCABeVnEtAsWWpRV1dP",
  "key44": "3YQe6eKSvvKRknuxU9hifcoNfVq2nRbDTRQjnr4d8Mqbh7HbXkzvPJzNgrR3t8TEW9oUpuciwLrqQTLt72PjHH9y",
  "key45": "5qPdV4CqtabFb6AnqVVLkNGL5SiCNHSgNL6mynjWgsYaatfoexyrg3JHuFPvJdpwWN9UUptnML4Uhamqa9Cid651",
  "key46": "5Gb4jHi6qAALPb1TdQqWQRLbt7LBYfVvEGk1sxshLyH5o1UqNp54zjRz9sfm1us5XC7Huoty8WNBxQVRmCa2ksqk"
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
