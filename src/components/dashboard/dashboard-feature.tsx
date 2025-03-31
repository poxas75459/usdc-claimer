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
    "3JdTCEKnADFKzUt9vsqH2aDXigNqK7moUF4Eepka5mfVNTQyPz8catC7h5UCWaSWvyicEDcpF7ge8eJrYYfqEgkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBtSt5Y11TbRn8uiwwNgZvVMw47a4Wnu8FAFbJQ1Xh154xjZjrAAvLR8Unf38FMtcGR7Ve7Sm7HA2WHfaHNuhg7",
  "key1": "2XDkV9ZQzgT55prKC4hxsjAQWYd9f1hMp8bLJp8abakU8FDfYqftukt6hyN5H47ZupDNuKC8SQRegEKB25n9jGG",
  "key2": "4PaV53wnJ3KT4WC3VU68ajP9VwkWrp55Aqui8oJDPi3Awe7CUB46NJBQRQmJzz8tnZCDNmFT4BmdhkZUQsquFm3Q",
  "key3": "58jg2FZTA4Lbzng4RRdY4BPXggC8eGMfFNd5VP8AFPPmkY11n33T6Udrju92jscQog7sujxntNzPnSULmrhV9i2V",
  "key4": "WE1vDpLCjsNks9hDDfoJz1w5yoeKxVcfZZ8vxXv43qhtk9B6b7mqyL1hunR9VM9DQ7ZUjea6HjH2uqwnCqhyLpy",
  "key5": "24Hr4i7WnqKWxRkFH31ZXgDpfFZEScgCyuCrbb4PLkFwGpoCnAPYwzEJm1pbz2ZBk6vu59F1boFPp2z33DTZwhHU",
  "key6": "2HHY6FdyZioNLxUmzLoksD5HLGcjfmxsDWvHh9h97CqG9Wb8S4fMcK7NcoeeAJ5R5gG9u9eRFVw7bha5JJAYTDYJ",
  "key7": "4m2eEubDQ9NAcBr6CTMz1ZNeEqofkWGVBUdsUDpm7cdLE2ysZoW5QK7bqTCBoJ74op9XmqvqqMzFAYKGvyZH3FSG",
  "key8": "4eoCnKFwfdUcGu2siV8M8TbZFZ4d1sYrjBro59RWXgB41m2UPpVK3NvhQhkUh1jvnT2ZVBqs6gHsXJrkCUeR2dFs",
  "key9": "zz8dbioWJhHHfZCf4Rq2tyeUuFU2EhtcvP26UJKcEMZPH8YnScSZTPRorXwYfeUkhG2FYyMtZA4D6erYaVMEXZ1",
  "key10": "3KvwoPe2kxQQjBmZfoyNPLZkYfatQDCkJhMRRGShSt1fDBkEa6NTTsA9utyxWUF5tPJNpmZ6xRWtqyCUBPvbdrso",
  "key11": "4DP6wBiCttn3jpeW38yY8mfwynJCQMn5JEY3tLiMhWjB2mFaoPKN9oQ7dcRHvdihLj8eCWyj2PYiE3trpKUeeH2x",
  "key12": "2R3KkYRQeCwjnyFzAq7g9NJExd5es51WMyCKag89fCQDSJpyQsVmycwvWu4NumUhDwR9UGPu7CwtccBVmMe8rVUc",
  "key13": "3Pop3zasgYyvvMQxUxza2aUw8YfJS1QcYDAS19PoXR3oXcDUziexzrgnwB7sS5pHDjPxoKuh4szCmmDBDEHqTMSW",
  "key14": "3Wu4SzVuTNRBXYdCH28LfJ8KwetBSQsyBwVNwLvU3WK6TdZM2hr43M5tsxaMvPorPvXPVGswtxDS9f5CpgZW6BLr",
  "key15": "3hXpfYsvzqPiVLnovStHnRsT9KBj69SCoBehRT4vDKwkN18mVLmU4Fp4YzWWrPUG5GHzCeQDPQKjQFSjqAtDsLNg",
  "key16": "55cLm5QprwQCDSNfi2eRy13w35mT56kHtLhcBNKCTNGXXxHwLprv2M6p1dffGKc1Rk8Y9rvsZAmhysgc7oJsowTv",
  "key17": "5LMkY71gvBkuwF3bc5AehEW4htDdeV9uHJhadiLUiGVRNrNQC7y5eZ3JxxZQEyFR2Rkb2CUk7fRFszeyYQujctcz",
  "key18": "2M9bwkZ8gBiFc7PV5MLYsRpoqkqFbuBeuGA1MZXUwnpUuSdNeqmERrHqhygkULnE137m5dKbDSGsjys99bvCBFgd",
  "key19": "2SLHnjoMKj7qycPqKTDGVwU79K6YhwiSfeaJUbpiAG8RJn3dFFZKtyAUuHEeLgB6dHiAVkjQMhkCuTdeRZWuKCfk",
  "key20": "2td2eLVcR8Pn9tYU5E1a4JubSTPnVfpLM7PrkQWBsx7KqGUDJrRQpG6nrSHQ3a3zKJ28ie5f29QznYi1FbtyXVoi",
  "key21": "5vZm7ujqXLwhDc43tu5fNPFBFUJdxmWE93tQj2TauWdGzyjMnKHp1ZntqjXn7aDChexbrP4QZv3rajh47q92W8YX",
  "key22": "3r9T7Xyg6KHhoxJbWrQbPo6LJhUKCi6EpueBgpSPGqSbq83WFb3e1Kj9syiSxiQbtMePE434cNqW1pKmzzmXW2L7",
  "key23": "268zEuTs9bkv2FRUsekrRRQgc1pLQ2jZjYQNWUbzWNmYG1S2v3KJENjF6qVJKBVPQ8sFmWDvzCaF9Srk7Mwf9rNz",
  "key24": "31Y8eftRPWByGbTVDvxmXw8U9u7YTBPGBzN2UNPSUQrf1EifxMaNn7ZX33RfKHm5Q4Ltp8R8NsaUM5o9ahrgbt9A",
  "key25": "5zSaGg2NW6rg1qsr8X3vCSrW35pfHmAzd7FHiphiC96nB5iWF3z1SW2BLZMyYVvyK4xRfpxEUnxF9UtKHRfdmTbS",
  "key26": "4LrPJztav1BcS6HEwVJzd3hvgZDN3CB4LkuFBiQvN43iiLgghkDPMPxjKa5PrWnFV1t7x26JLJsSjUUk8vs9Dufr",
  "key27": "2hjF6VGJLE1ADADibPED59vaYxNN5q5bUREDse9qHZCsvcmiAQkPfEt7sMLmh4e2hR8NAaqmv6D5qrXLMzXpBEBb",
  "key28": "5xqZk8gQPSPFUjk1hUdADapkWnp5eyLKkKKjY2Lq4eBMGp9TgMTLwQLWjKQ38uj2S1sW4ecuPXoKPnpXgYSX3rSC",
  "key29": "37Gukxb7dCpnfMrSvGCAUS38o8ugzxeBBy6y8jXj4v2JNMf28LqLmvz1Mb6LnF31nmE3XcYZHr6ggbtquP5kmzv4",
  "key30": "3LdTpHYWGrhDci78QFTn4tFL1Zo7Y9K6HkkDTfiSWiBwkcTEMbZXmnFDjBCs6qkEpNLhBNike4pNmvNNPr2oH64V",
  "key31": "3QeNtGERvUqx4xNnxKmheLjL1WTna1Euupytj1FSs4DqbJUPWa1JQNBzmnva6cZ1UHo2QpxorWQQ2CWSEtLrseeQ",
  "key32": "uZMPxLBpj2Bba1oHpkVK5gx2sFDXpBFmubjbGHWoTc2psNAdkqzBj6tYWsnGkGuPsByuauZ6E2NT3wsdv4DVpxv",
  "key33": "5YzV8sJvt53BWfmcmjqV2T4GygasVUs3yyoytPCN8G9Wdm6yWps95PT6A7gN4tkQbM4StbPoQh6gFFsnyAcypCDw",
  "key34": "MryJe59K8yS7JotXuJVHfhA8RogFD3GfSwv9dPG5sM8jmA2SBJyjuAsMpAz9y591xaGxk7aEw641RutuovYRcZg",
  "key35": "5VV2UXxCexjRa1ivvk5Vx57gBz8oEpsR9hRHznDhYGCu8p6zaBJiJ6PQzp4HymS5KpMRtCzmC69dnZfjhRHBYETq",
  "key36": "5pwwYEhF18XCjtm5RzaZ9NpJL9EvkbDpT2LDpnTQGxNiiAiQpByW24hLp8neUYKhCZbLvYWeEFQssaBvQ9u7PgTD",
  "key37": "2i7pV3GeuTJAe5AxZG13kpLN7s5jJ2T6aQKgAzQ2uDBqpuPEJ55JgPpXdewEKsTdjDZKDq2bBZVq8bydRfJJH9Ue",
  "key38": "3z2MY1bxMq8ZLxPcFKBWCszESc6Z1MSJkFD8D8Fatpqk72HgCCrA9zJ4HB4w9D4vbmq9FAi9sV7Q26h63k66Dxn6",
  "key39": "54NecZV4Vi6kfNMhgM1fN3UHV33NGTN4rXH2yRTY5YvHE656tC5VE7to4oNNaX4UJpLZAKE1jjdGCRL67Ww4e79i",
  "key40": "4pHKWhAdz874PUV6TR2p2QreGMWwP31W2cPgnrYXQis6fopcPWSVPuYunmZ7AUDjx2vnXMfTSyYKXaW45CtPi9Fe",
  "key41": "4YMJcccxV4TknXNmjrpr4kx88fQ251eD2443sh8dTijDpGE6HtcnBBCyvYzf5UBuKbv6eYEn3m8f2fna5VFNdmqG",
  "key42": "2zDd3PiyR95AAQWLN4BFgzS4qX3oJZz7PZh7nVLwX26QLWGDErTYysGApECNsgs8k7JeYvkzUW3p1FYLPYoMCEVC",
  "key43": "34iBH81t1mMZcEVU7nvCY912ajGCPPM3zsjqoSiyHfWFeSQDuW4ZRy7Kss3LQwCJQPKUZWxEtUowAhaesDFBZkgD",
  "key44": "4SJNuW63AyQEdXX2eapkwrJLef7UnXYPQnxuSeLF5smAmSeG54oZrSpa4rajbR3kc7pMhuE8BPqUwqDTDfyP66z8",
  "key45": "y2LhgA5iCZDJkhcTqzbXurYbZsZQpXtG9XE5RFjFEsqsPSax4exPWus8uPjCg1CFLhbCCLV8FVnyxcsLA3nCwNu",
  "key46": "3xdKF2ZTRoxR3h3AS41zcko6CQNB8U2BJcQpurrTCRjEmsUdELuDj5a1ZpXYUuHrVb6YVY6NC1qTVfvHkt9Wh61c",
  "key47": "ejuHT2b38wMvhAqj7jmgppMaims16dNtL6DaSy4B9vjdkX7ufJogqzzP8EQTZ1NiHvQeVPBAFTcq7cS1CnE8UWN",
  "key48": "4DxtNW3XKmmtU2Meyx2Htxsb8empqk8t3mSaMpDLabns2EQG5Y2NXULQpmxcjTbS5BwE8hgh4akkJJStr8bgMFN4"
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
