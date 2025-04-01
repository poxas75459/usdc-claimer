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
    "5qzU7XcASogobjyePJRC2i44ZZjQa7YX7y52TCDBQ4uFMQ7eYX1QHL1aHJMekS4AkxnNMpjy7JKxwHp2btAHLY2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWXZea22FeZSugXmyg7fC4RPfTV8FkVUCA4SYkenWkxUCy3Cx2o83fVWunfitLMvy9ZYsEmbTmki5afvnpzQzpJ",
  "key1": "3WMVY8kb7GFbVWQAqkpsJXzzBLP566Qrb1iiiFZNYTQkanfxg8ZzKnbfSSxfSyF6YK6K3EsSpaxh5HKBCqDUip9w",
  "key2": "GVpfDctPS7q9d9Liekh1LudF8xtm8yHSwRWZDouuCXzixmxmtrXzKmDauKYpBb5dk5dTkmDuVKa4rYdfiWQb77b",
  "key3": "3LH6povXeRbPhmcUYebopoBBuhc9muZHamjWrsKPRMYGc2DnQ83d1KMz7BSvPnBsgDpEto5BzhRrgbpvnJCSkdZv",
  "key4": "24nsawiNHYq32x4YdB729kxiWLD18j8aJMQkdHvJ8FhDUrAX42Yx4WQAgY21YcwPyLq9uDMV4cpEF7KuRzs5gWPm",
  "key5": "35wyw6UfqhDJRauvGuB15UGAovQTbupaVERv5XsxHWPR4KmuhoRGuZro8bUX32nmFZNzwHtXn614ef4q1M1zz9Xu",
  "key6": "2gbMc8pDV5WxTn1GRRdzE3NoAPXVxYoaqY26cvH9WQTRGnew9a1vcn8k8BVe2HWns9gqxr9qPvHPKgM7zFgeRbZM",
  "key7": "2oa3QBGg6ZPde7cP6HytVRNUtWTs7L5DXqjtwRMqo5NKiZKzEp9yLE6SSYPeD3HzV4dzVN5J4my6pyNhfF6FzHTP",
  "key8": "3tkASie9VCJs4MvP54UvZwRtNvErQddhvYND8rFyFr7TqmPSupRwJKqRcjVo96LLdDxubMYqdRENNtHAMmdSYWCF",
  "key9": "4FpEwJrdM9FRcLFHMkTPEgLeMPcUivMW8MrHgRzzieaJttdTt4YegKR6dzSwdSqKzag1dfWP9WsTD6mcbHKw5nhc",
  "key10": "rBih32ycqLqMsS9ZZZuAzAKVuAnVqErSzwHhudjrvVnXDoS4fZjnV6Ebnkhj8RNft5NYiLGVybDcPJtn8jNWsSa",
  "key11": "3a7vt4KeqWEj32f7k5aqRqLpjHefoaikuJktbCfanafSmGW1BMn1krd6L9JC3pYjxatSQPUTwVw6BRtGoeVBcEy6",
  "key12": "4uoLMxZQB5dMAfFmFy9o11KPfnsPLzu7YY6pQE75rKCBw4piSuGSWxM7Ms8xdKJrt9t6m44WKbJx3c5fXzp7g5br",
  "key13": "Bjq37tDk9hd3Rbzrck3USDgwZ1PRb466mBBtsUEsJbx9bDD1PQuSKzhwLKutAwiXac6T7z43zPgLvrErM3QuLvA",
  "key14": "3Rwf8vFsM9Qp61C36HDbRPn8Uu8NJpGmxEzZN2MBSTr33bBj2upV26qaKkX5DoNK9ahAZGnfoBS7CFLhuMUtf8VA",
  "key15": "3KoGJHghBRoJxFyEKipYoFtJUgUDSmNFfjH2rnTz9ghiV63KSwpFEDtBqbsFYVF33rK4aaM9n44vzEbpWeoorQ5R",
  "key16": "rHquNQfJdegkPPTrHrxduqRFYSKfhyRzFtbPmaiod9k3nqAsaGFCAeivWq2wiJ5dSPkVWzSeBWP7Sk7DV8AwxfC",
  "key17": "4Yqugj3q5Bj1TqcbzSag3BELasnTkpYzifV5ob2gmMbK55jNjmTUErs1Js7ftaH7SfxhyZXiw7jd1KRQhF526DHD",
  "key18": "55JwMA4hw3rwVkfmRA8dsZnMzxbbkRVbRtLhfxJwSrvRwaWnDBfjZrUJzKeZGG1Qt5Xqv9NHF4WXcUopHsBV6Krt",
  "key19": "2FtyxLX2uYLk9ASrXeaE2WRGJEsuwN22uCtg8Y8LJyLZuNfBas8B6xnhGdAQU2MNo1KaQtQEHaFz1yu6wyXCtBmk",
  "key20": "62bEaPLdArdSN1AaEwkQ2we8TzsmNetu2yfdyiUiUk3SwZyq8LwrbFmAK9d4PmaUcMzTCyKMb6uHuBRowttBUEcu",
  "key21": "67iwRcxXdtQtXYEnCAcKdaiDeJ2MeCTFtooTzrqtxaDHokjevmcK4PGk3T5QoZdm4jjtFcc1gfPCQMYStvVkpHyT",
  "key22": "2wzyxYbqcFBzm7hGfGo7dWX1LAHexJkjfwb6qCSca37XPxKyqDd35g42dhxqKpZAW2omGH1sbJFokGj8hod8fn7",
  "key23": "4k7PMiuPUKEciTbrNF1HurZyFuYgneuubzA6LM8Wc3oSaZKCpbXTZCydwRQM8hULZDurYU1fqJDPuZkm83Ey53JK",
  "key24": "53WYR3HJAU6DDGVZTQUSa7ziH9FBmvpkjzstHjM6frEQ6RpyrcFZ5KL397qwev1xsz8AcRy9mCVi8qDSuHnCdx37",
  "key25": "5doKAvLyTUYSAoGJ793iJce64Nv3aPEjQ1cym7WtUhFNgjPoAqNVc3zkLf3EGD8HsRA9vqFWypc1bXMWWC3uspQ6",
  "key26": "3TJLzhUvh1oQdwK3Lwfb7PzTp3WaCVgFekuGxRzANSrBAa56Zfp9uXHHoih2RX3zLcY1DJtAbbajHucsAXGCeHLt",
  "key27": "2sNMzJTNearXcxNqSURCxobP9qLxDf7oQfNSAb6yHwc4tDk8aPj21ikGftwx7ympek1G4eM4SqJ2yyRdj6M5r3k4",
  "key28": "5NS5Kq6Kj1gswFjx4Y1BCjWEhXwqbB1cVCWNMdGVRAhkjkDkTqPPPYhTM3wNogkkx9osAY59VVV7Ud5wYBADfeQX",
  "key29": "4nt8fMB8m16num1dbPXc3Ne2fjrWCFmcbbsUhDsdS2uuc15mdUDKs4CPK48akrBYxD5CPCEsQ1SfnUAayj5Kyoi7",
  "key30": "3MMioq5w6i1ZzjwqxQoag3aShq9S4RXkJdr97h9JfanSxixoFyTsoda6hCSLpVDdZJDiNwotWPoKCyoDH8393xbo",
  "key31": "3WdSbLToJKJtrZFoENGaV4jG8dfvZdBBebzjF6NmPjp8uVSE1JjXnawGVcdtNzWsYyz9KtqYhxFNu2VQuXNpWUw8",
  "key32": "mRytQtdYMbrTLDa21kSPuDphb2jc6pwGgjTiE6kQe9zWboUZu8AkQ96NgEtmt6WLvKdmuteAy3sCXQ4P8Regj2V",
  "key33": "2hojzmwkNeUnJGLAsGFfkn4VE53gtoCqaNEZQmb6CrVFZpy8bGChyFgt3RUVDVYpQ3mjHoev5bh1qP4HuQBK9kTr",
  "key34": "4GGP9isNDdH2nZ9oTqCEbK5eZaChMxpcGsYamochERFDQuQ8iU1NwtojFGMyjHRUhn26ALRMmtsw6BFpFh8qTZ3U",
  "key35": "5WTgoJGFHMkjF4DhpcN7GKiiQhuq6pYMy4aLCC7q4MCg33ZQB4P3K4hjJXhJDy6udbsR8azqYea9wtzY3hjCHux9",
  "key36": "2zJMf1GGMmgQW1ZUSWbdqHYzxbbPQAvaXXsNbkr6fAYFz7mvUAMniQZDBXfH1T43ACdBy7HuAFk9LsRbRZZYNsCm",
  "key37": "4919qcJciCqenuLBverSCZgeZtMXJt5ArcCH1AVvD6hMfDDRL2U2socVn234vqig9JvwF8x4TRcR2XvSqDZudCiX",
  "key38": "m2AHps44U16ZSxgpyu1AB1mum8segSJknGhsqAy2VGJ3tkKnkHFurffhMdseXZgusmPhkfoUFwYQzBdaLpkL8XR",
  "key39": "2UZL3TiaNwsncY8Yecu5YKyGKt4grv86GKMBycvN4jWBNmF4zfASqSjyq6wAUDtgv89VAFfuWWm8rmoKPEypqmxC",
  "key40": "2aRftpDbDGU3zvMMhVjNqBxbMVgoiB4vLjeFCmRFLGXKjf7ieb3nov3LqYTsUBGY581fgUFL56431YWMMVzxWPLy",
  "key41": "5srCJYhw8jqe4XkTd4b9tSKcCuf58Q7KtsoiWUHNFV5RknWx3mMQmUJr4XxNBotTnQDhPaptYuHchtbxH3s3VC1n",
  "key42": "4q4ZWwVe2RsWF6GqHSt9zQ5XvvyCmy3qEjyamQW1QkWSCDuU4bAqrY1eLcad56xPhDp4wiX453dwYKmaReodD8yX",
  "key43": "2pd9tMwAfg5qKBZ52TzQxzX6LTa4hywHDdBc4K966HrnfWUmcvssNGoQ6DuxYzh7eQwygKukEB3fSqD1cEpDZWjw",
  "key44": "6suubib6JrP5RSuMri24owNsP3xEbrEaGfvBdjCE7vaRaKjJzXPHSaij1VVW4dq3THMTwecxKmcSRu3Hj11eaYW",
  "key45": "4SWYcKx9Cqd5SeVPH2CaKB4MFJYE1r557KqX36a7XehZnXXNv9A9rcGWLGeRfBHYxLmzPyWquBLKW4qc4C7dwNqX",
  "key46": "4hLJ2KntRMDjjFjixm3CziWNxbbvE4quNVC7GJEzGKrdYZNr3YPSQpiNHSR9bBmmN93iK3sVpgJnuq3d9apNXBBh",
  "key47": "28P7FzfKdHA7c35Q5aJyhXftUdvfXta3HLx66CjnW7wFJrLZHAqbwbLQXALR7WPzfRiRPEtcPC1PZKguYSEbTiKe",
  "key48": "4WqfLLxD75ECCaUsyHnNyUmnpurXhzPAJDcqtAqgRo4Sqo9sdbK5fMs9UhmvyFi3ufWH7QLdegcfZXtoP4JFgbgV"
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
