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
    "2BeJSHFKBR8tmv6VRZfrb9sVUc6H84Frap4xLZG87tKoYxXsyKY11MGwGWvRXrKC3AKnJr324PpnJbtnNXZ81hDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yk4hzVMh9ihgJhjbNG9m2ZNU1WpKML7kB6xUE91vMajMaSuNJXJzB8p96uuSYpgK8TQwrpk8PJq3P7USD11Hqp3",
  "key1": "3RMTumwqcAsUhVVdpNsFbvz1CffCw5uaYQk6LPLjeu5vwTUUhLJKQZCLwV6WfBjGzqcDfXjhhWXNeJAo85vC8JTZ",
  "key2": "2szFEGbUySZHK7GMMqgnw7Bow85NR77E9dKYGgs7s6r5wikL1ATVnmbJgTcVTNarj1kwnjbptHTC41EfYSNGpC3f",
  "key3": "3tahAaa6ioMRM9Xz9jkJsXD8mAbsDnXnpZHxgAaWeCXu9D7Ey231GJ7W7ACGcytzNDQA8bRayekb51LyeLVjwW3w",
  "key4": "61nvFFvTPgZ8Sdg9ajUvnDhMDon56Qh7fiHsB7SiXjHjwtAHGGdVvCF2ecfDfHXTv7igkSDPHDDbZzqJd3usL9XK",
  "key5": "62ZuR6oj3NyCoiiWPyz3LbMuTg1zVv5XJgDmfy8YH2MUdGFAfN9ktpxmDstWgVqgX2Rq8bsvQowc9Rm389zAzbbW",
  "key6": "2qeSV1Sr4DhJ8c1FDvtkbvsDwsMcLAcqqFsiuKaDquq5RfLZHDkvujUK628bdC4tbuwEa8VymWKdeiH6zVZyHQBf",
  "key7": "XDPJuB7ARMzZDquweCC4JhWtecACYEfP2QL954Vy8R3xUL9pWDkgfTdEidTvUbRn3xy8ZnBHUyJ2dp2DLWNYPHi",
  "key8": "3ztoMJPnTmCQy24YidWkdkuiwBnzwE9Suo1RmTcG94Bn3BWEpFm7c2Yq7CNHV2KN82aitWBx7mRYvgtmxYynLzkG",
  "key9": "5vxwPRSiTLAGxxtykNne7XcxPKzy4WYynG5Vqt93jYBC5HnSUeJ8vNNq2cwQTokh57teZpqqBVZU7YgctgUJRT7z",
  "key10": "3oyFNsfP612R7AGQTYoUDeRFDWPPKTLbT82FMx7Go3r8w3JZBFWcwhqmx7HqqGm1BcLGQg2W1pERqRNRetJ9phoQ",
  "key11": "ED6pmXieGvH5fC3LKk8YMzUfKM18vo9nfFeh9iVAfVs779RcYWMTKsjDLBesTrPmDwna8hHe7CKd7mse3h477CZ",
  "key12": "3gNjkbrHxvvuxQzd4zMQPy51FzsMwB3B3SCzRiivT6fYWtn75kkuXcPxsd5ZhLJ9bzqLDcJTnMszAi6z9WMVt9Xb",
  "key13": "5k3N7nWPih8geTzHb3i8KBLnHreJxn4kSZFVG49LFc8kdmqAJhyz9yJzPAHfBqg4hZL7DHoMdsXwsVocakadjLjN",
  "key14": "4rFkvq8W9JDZiw68cEMWkUPyHh1MhR5uLFJfcEGjqFZMiBw9k536Sfz2rQUmwB6cHxajprEFa5STMHyudCLFGNaE",
  "key15": "4f7RAt5ozSkchcPeL59HgE6eCqYvvRJ91grU6Gt1zpWAWKorNrBo7b9K7VXux2wUeq8GrW4Vz59pN1KfLZpDP7qz",
  "key16": "42PsCgGmL5Q3aaCx5MzFKXN3MY27JtU9Z5U8KziAQHkE1hn4fHGmXqoN2osKRyE6jw6opHUjmwsA2zvsR2JEeqUG",
  "key17": "3WNKYpwSyeGcLy9tsKAw5JcsaQG3mhCn9v7TobyXFeRYeqjUASELUxjHDcReMipPQpQRsdKHT2FnffuzJnsdLCG1",
  "key18": "4XXjr5E1BVWCs21dBPta9SQfoHYogQKs4r9oywdL1EBuN7hNjjFLnfFAXcpT6pvJyQthpG91tiTfkVAKFA93tNRB",
  "key19": "2MkKLVWhXknz76bfTugYvFbs8YwxUHTw5w6qHYVBQCE5DEvWWULGisKYsuQbdhEmc9nTf1KSRFAQvdnfs2FDRd7x",
  "key20": "4jgt4u651iRDPt2HwFNDD4veZo1CLicM8MJa993Y2M81a5exEpYHn1eqxpiPCUGT6nX6Lch4pzMmjxsVwNygwE2e",
  "key21": "2S4ad6JKVzdoMF5EofTtvrLK7qXqAzCpD6z7aeruuBXUVjuwdKCfrQmpreDGvBgwnNWvPjjN9fEMEdrBYZGVVzjk",
  "key22": "aabR1AvtZfbKQN4xoUV168VefJ7YBvDo9xQ7DKUCxZDYW4VHDYpgxwa9GUjN1LRLxgK65nfcCRPcJaTBdveCRQX",
  "key23": "pHWrnks9sFYe1j9u7wzdNP8dkUUraVnCtgaBD1wJVwnHVYkagUvA9rorH5g5gK8ULtY7m57Hn5zcXUDKbwC6jEt",
  "key24": "3PsgegFHXtv3e7Lw6ZE72vER4VZDA8cjU9owYGA73mEtgKj3FuLLXRis14SHiMrYUqCGiDThi52qBS7E5q8iEeWh",
  "key25": "2eVmFyGtuMhF2e3bzhPwdwzAyXMPizbgDBP86rXCteDy8X5W5qp4JguVCZX61GoL5tNugX93igg9jGGx2iNoSvBV",
  "key26": "vquCPS1mmhcssbRjdY5eJTJDHc6ckxnV7m7twv4tRbca7gz4CKGcmhngoqiEEDGUkcZySjcHoXjCs8LiomXNCzN",
  "key27": "4YsZosg1CW3HZtzqSsTpNP3NG742fHdffS5cSmcCZCvHLhyF47NBkMTA9eYFpdu938QPwJV5c5Ntx8iHweYgrEKj",
  "key28": "3ZFxMUSvvEemZywxNwiTuAJ4cVcWZySfM6emZ75eGKJkLkrJktq3aPxNs2LUimVkWwBj2PnQQKCAwoF5DzxQL2cm",
  "key29": "2vXwLzTUA2wmncXNZE2aqXL6JvaSMX9273CGvPay6EPo7fxS3G53LTrPBDuu5QtUeLXvRX6ijYM9WH318XxL785T",
  "key30": "4EsNUyt9TDXPdNzVBGv4T4rFicqwMZNWwwC3qvwT4CdXbfLu1ahKvVzA2vSEm5qcWzamYn2eCc9m9HUWEN596hxZ",
  "key31": "45J9exZ7B6LS8LxQfvfzYsKqWen6sf359aSAf98i5Ln5SJXNBXi3VxE3vovXcjwV8EmfJJwHzPBDuWKc1KEqXhxA",
  "key32": "4xLPCh3yZR6gPjoncgiMqJFdqZRTpyVk3mgynq5hxCWMQA2s1aRZPTxQMmKta4ujazq9bkiB1p8A97nkarQJBC6k",
  "key33": "aeTf6N72nFDSD1j2dRQzq5U8zMv5jgBRvyU7jcoSGFd5K18UKfUwqkfpnDBVteh19oj5EWJW5eNfXt9awLZz6Jy",
  "key34": "F1qd4ztrhH8nSqeXJCNKU1xi1Bs6TtojBuujdmy48oXCkoyyqno6fNzwBTmfdGknE2JqZFGWL3UcTuqwTg9F6MW",
  "key35": "4jkRQPyvuUtdXnRr3RGd1ixERrpx765SZswjhQss7mMJmzGwQLSAkvEBy4xw7AqbLzRjhCL2JSZsqzTfqkHbQQLv",
  "key36": "5xNhSGDEWwtgCv3C1YjKCpKdmngDdNBZBL4Uz3GuijrVAAY1mAWX5n88zi8WEheGF8YcK93A9iHAzJnjsL1M35k6",
  "key37": "641z16WR97cdgUBpe5hbcp3z4BjMkcPRxhVQX44v4aCMV2HEk1tJWV2R8iM5odNDSUPUzmMbawLeTrztn5YgwX6v",
  "key38": "65PCVkpNtpSTqFzzBcfHjKDVrYNnnWZB2PaBzRjoz5UBdNRGKT8dsig5KZoqXR1iUf9aPaXFPaK7Knj921g6gh7o",
  "key39": "3hxnChBhHLsq28vD7v5kFWABRYZU5Gva9AnjkzX2zrwXHJG9jq2qrmeh64ZGqTb7XPpt7FwLwRH9VA7HqQB1KKJR",
  "key40": "cJvfyAGLZvndjqoxepsmUNBAQwEhAjMMMma5RRopLhgtrJwvhPANDsDNqe9BLfxe3BaoekeBJFVEHMTV9cdRaPV",
  "key41": "67XBUCb8iPTcp2ZRhTnqC6TiUt7UqUahNR1PKJtYLscp8qsssEaZ9hc7jouAtXA9cY9A9D1qsWqsegZHbzUsGETq",
  "key42": "5WiGYq2jRngscqZ3LfnKaVKsVjzyyEMsLQvGEdnkr8ra4wBy8j7E4GmKsQ4MP9iFPJ9TMQyG8UrXTDVquThz9WYk",
  "key43": "2J1NwJA6YbQ93Zs7KvTmbdKuCeTACVakGh7DEkj6zWACcwkomGfqsn7K2uarS6aV2yAruF2KosPGJVoK1tJXQe24",
  "key44": "5x3sFVLh5hTRD2uZjdx6eHFcANsPGzxnyKX6gxXfdR16BwtP2ayb2QyGqpYKei4AvLTrWzQx7hepsB1j6x6ZmrEq",
  "key45": "3FkuFj5kHak9dT1RaySdahywigvWJMayp8ba3HxJa2pyNB7WM4vz19gQ8Wi4RXrvqfZNRU5kbNSKzt38sEyUc54M",
  "key46": "dZ6n9kGZKWX7MBqm4YtnwzwNbDerTbyVrSPuk9wtzBosKECZ7TZEgee928kdizPC9ojkitQv1d8tDYZ2FJJW1n5",
  "key47": "3UZWxFdSD1Lbjd7UaDnWrnPz3eEp97ujhuf1dnZeHQBHu9HWpNmL8aByoa2Xm568vQgzsT6JmHsZxmrrqaSuNmGd"
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
