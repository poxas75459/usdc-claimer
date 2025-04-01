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
    "2JmPKMGEozBYsnbx3zExGJzeQMjJxsxx2GCWqa4DfRPGZKpihC1QEt9w6iAgB5maejP9YetcxnzTkSHTSP4wUdBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jc1W4Laa1h4MKFCWv9ZSHpCm4SLWGKaNcmRnY8jyKvQFX7m4ixQWVr6qm6h4KGCJ7jqUD4RCCEc7eNyK1sWbYwG",
  "key1": "4KPdnNsrHsAsRM289DdwvMfMkXZPwuh8HK3DcrBtGSUaEydRdKyQdM9vWHGJap6stXoCyxLMpVTwsftuUz55VRB7",
  "key2": "25DQHQhTFEAKxgELwuvPtCKSv6KtQkAh8FxSvBvbpRjT6baqsbi6pecs5Ty3LGCQPLLtESY85vTeY9pPzSuFXi4R",
  "key3": "56CbYTpnfz6dgdAGA1yEfuQqTYyAuVpcfiC5eqdqUaMvjKk87tHD7QLDRuyxDGKWfgxzfvHEnNB9MH3tj57hNATZ",
  "key4": "GXNoparfDqmjiv2mjGZZrh1LnYbWhNUJVSFHqT5Y9RVWBeQcwBw5UQpic7QNzKAYc3BrRd2TsKz3843ka4j3DLB",
  "key5": "2fZwqChvRUt9ihcpNFANap93EepQp3MSghtRsndz2JCrBRrHJdFDbuB6sTBRh4Zzne2836iX8JzE79fhzNwfHqtN",
  "key6": "5JU32Phu5DxLnwu9jBiVkau44K2Q3JBZuZeyLGGJXYH675WAspmtfGoayUxQxdZxEVUwKvkLeHRjLY43bDuUiYCw",
  "key7": "2ZtArKZBDtofM4yx3mFzcbAKMnEaBxoxhXHqgbwEDB1X35hwdLgrXWtPCFcTKpayFqHWFof2CyE8bC3A8QDaPJz",
  "key8": "qgz4eYfuPhfQTmF5X5bycMkgGHRk4yUeuvsHGJ99zcSPp3JsDQMqo6aVQ8N5exyNxGq4uhVawn2cdr1QLeznWGA",
  "key9": "2frogXp4iGjkAo9wsvePKiEg1ytroQVy5j3mo7V42iTuJe5opK4F6BjLMDwQa5TFqf1riWnkEPBS9x3BAwiuAUnv",
  "key10": "5yV2jkMRXpoVcCdaNH5tBNjWqvsN15SnnZRzjDhLtGQYmjGpRNHr7siooVuNQrzafJGqCiyfhBfAPAf16TzB8pVB",
  "key11": "2Q7p6W3MNTkJKMqJ1qiYbiiH4N1nkxETvcZGY19ECcQzuupKyLsnMNvbcQKsxwgJShWQGhHJquDN62VqbiebfPDf",
  "key12": "4giit9A1mQ8MZZDVEGiuZraXwVHeWcTPBiLP7xzpSMUwxbMfoyeukb6av6DMpXJRQJLSHqdyneNLaAymvqjtsUSF",
  "key13": "5eu2yEupwULyWvseFdyawV5mMMpLHwEvjGM8uEbeDy4VhG3q1Xyf2w8ZZZDHG3XAtYHsfLAeqDZiD5UvJyrYjfQG",
  "key14": "5y9z7X7hCRVSh38pYnzDtoFPAtmsk9iC8pvJkJkZQgk28bNVKEqZND99ivon1gMqPZrEUvsvttfAz28o9pcJuNrb",
  "key15": "4vYV4j6mugCiF6ykBkDYSZvivJNieK7unKDLbnNuyKMzquCbtoc5qE4AHivqhrk5VeLo1offB23fXZ3NGfYHQwQa",
  "key16": "4NNhDMU4i3WoqpwmVb3Pcdn9eugbAmhiMF885on995tTZoC55EcDXEh6MBDqQsJpTpTkk7ryVSFq458oUwaK1YA5",
  "key17": "5d5oaCh79HBG2NVXkMoirEZ2dbU9vvebdhYMZ8EFnkiD279WpG64m2J4yneUu2CreabtGnKzUNrMjzUSt8DNSRn2",
  "key18": "2y2Rmqh2kDUQbdcwtM6qeLx5Qr2WJFcLCzNYWqxBfaRHTzc7zM9guLx9AJNTsyxrJy53AbmA9rNYWWmwmWoeeCks",
  "key19": "5pe9jPaDourZQbbSFAzh5cmUcZhTERWs2aoobc6DAoFsZAxMhYAcqP2SjTbD3V1J9xZtdtBc6frgcXjVSWJgk8J3",
  "key20": "4WETdEbyv1xXbPtjtQ6WH1VxoiHc8h4kq2Vfstur17Vp3uFRLFGnbzqmMyt6oZvM5LTn6AkVye2BfKm4xtEEodL1",
  "key21": "53pMXAgqFx1Cvi2h84UFhvKfuHYVbqrTENpnH8jwso8f58JoJLnZbeERBwXi3eNWsZpmSpsNMnNQN166fNMeuJvX",
  "key22": "hqdSZ51nzxW8QQHQX6N3QZhGFKn6ADjdGknAmwVjrhgp4UnNQdH1bjGvWQqdjkRTUpZEP6KqRyutwZK6YceFfP8",
  "key23": "8Jx4wPShU8gduAu7cop2cj4xBXgzWsRtxQdqYaKsPhU1wPhMzAFVANnrmFdLWhNg7PLAVDa7attJRPVpXxDACEg",
  "key24": "4HDkicjGtc3PmTWjp1gwhPBpWDdxUjB7mQsEstcftmEMcQPAGmomCcpnLKqP7TWBuQR1hXbTuJ8WpwysFDSZeZKg",
  "key25": "4Wr48D1hhj6gBqhKu6a6Zh3B9J8KzNhRE24E24VwfhVqPtf76eHPGoA4VcXa65RTo7HP3yraGzJ6c8mUKQKKL7JT",
  "key26": "3iZ4HaP12PEC29k7ok8cpqytu5Z5fFYitjtRZS77qcXd5ha8VCRQpdYeVre6scsFb8nr3TkAKF6UyKDae1EvASvi",
  "key27": "3bzvQSWDk41SFmwZQ745WPc1RHvfP7Dwtjn7yUVD9FCMANSS2rJFz6YxHvNmL9fgPB7p6NUiBrwtWcARJGUWNpCm",
  "key28": "4eLFS2kr74EhVG7rioXA9dLgwqJjs3LZZooH25pDKm6y9S3ZFmkwDT9Qot74Qf8u1uL7jBdxjQxJJpYM6y3jT6N7",
  "key29": "BPaNndQ9m2ULZWQx5PsworxSoJP2yTgzgFmQxigN2kPbW8H4MSVE9h834abCjJrjoavVQ2j5y5Puz6CKzVD61zv",
  "key30": "5f6kuojpgvxeP8FGysJ91oySfdktESogZwkHRNNdg4iMrtT3SJjs3vfwhR2DzmW5TWAwBmnunessLedL84U3D2BQ",
  "key31": "2uwmf1B3eXpZ6HaMYQAT3AKFwfRPSUhTvXZowTcaUBGXckhaBhepLyB72fLJTBtTbr1iRXqHkZPjkg6YZJrwszR4",
  "key32": "39hyofxGxHmzQHqnGyPx5oekiMDcFhdRMtPzSJBcA5Lu2aGKPqgfkhwQ1v694bqfWimEVuojq1kWhcZWTvSc9ECE",
  "key33": "VeS31FLU6DbSRXXoiYYtqR9zL2AMCgtxyynJCF6GeYgD5wCoNcxqeUuvQkrE2TGsXy9CmTah88k8bHw8Xv2XjBZ",
  "key34": "NmVRQL3oHPvHqpT5dHBUZGsepavBbQbcfQf4jrBxAZo3euiyHWtDvr1pQyyQYyYVHMxYdXR7hMAeTuY5ATVeMZK",
  "key35": "5DERqS1DAMGZ3RRvaMFrjmnZLAw7JiiSHoKGm5bU6wXqKYzWgvf5rLF7qhdogvts6V8NUhAjnQA39nofijh8nW6h",
  "key36": "3g2dzv6pfupGxqqv6gV3TB2ZxwjVNyijBpcdEAM3qjv5uXR8v6ZkbsPHwtZuwuZKvVi7DhDifVQzKJhKyzqfBzzm",
  "key37": "2Ysz1qBzrGaQUXJDoJCsfVWHHHJtkSmaucd7zEnQTzGeK8pR6tfZMLYivpooyqohMqT8f38gqNNRxvHwgQynhW2W",
  "key38": "UPUW1qiwnoQWgxZ1upRy41F6WCcUiL7fp9CcCCYoUh8WwPHhPWp4LUbjppDgC5W2Sw8yDPe1acBfMqRGK47Xw3v",
  "key39": "5qDaSTiqESpqAaivHWsQMsJUZZVprBDK9D8DPsKabExJWxANEWowSfa1sN3HKhx3S3q7AdJdmceEGeLmNXAmdeeZ",
  "key40": "RJK4DodaBaxf3JaQp38WLxEVTrEmih8p8Wao36BmAwHcUstgVtx6fetpRY64WrtTmmY1KWoVbzBDNyc7Lk58HBw",
  "key41": "7kz3a5W1zbVWiG6Mc58s2ZDxRDKnNvPkvJyoLxcS3hrzGKPUsgkL1H99nCzLvZNfTvJxKoJnBmwD5BVJbi77VP3",
  "key42": "2z4qW7WNqYWwSHHxc9Jd1RgG6XYjJJEQzhzVxhuc4815fKYDF6tW3SQx1ZaAqZi4wapuPRggERc6EKs2zkTrNs4K",
  "key43": "5AftpW1Fru3yCZcM5dQzJ4Vx8DP3xQrK5NWLQCidykVsg1ceiNEvsNK9i1w7LHcqKuoFfZkjy7GTw4RrRBPrJLzE",
  "key44": "5dbNhZ684b8hJCJU9P3TBqt9xutpBrsKUm5f5TfgCyAkGzVfeNKAopCnMS84VjoWPJ6bLcUvKQ4KHf1soQXY2jJ6",
  "key45": "2yvjZXr8cJmcgiKpynodgTUEVhsrfmiC8VKC9rHGhteYHu3sZRJCwaDGunLkqt13HXJEswnNoZfSTLdHY9TKdYpu",
  "key46": "5TekbV6GBsrEDyz7n25zMrvpfoauqui5X5UmvNiGXMgP7P9TbioQWMUt5jaQXhAh5THMUJUbzF8ApsQvW2Qzmp7N",
  "key47": "2ZcTfQzpCDfSkwqXMjEAuK3EFPqRbYoi7WHMxyDYuupnGuWeKyD9cdee2F9TPMxutLLvcm4ow8C3RcGCfctaMZy2",
  "key48": "81v4utkGjiXdT9HPX4DWwr9Msgpf2x73VezzoayPghcPyNNbruBiAxr94emJUXXDa4gm4w2azvA9LmkiLYihj3r",
  "key49": "3VSd97MzZLGvKu8irq8ZkEwz9tFsxwksG9kFRV4M9i7vWkuUQjpvjTZ7erShTu4KfR7W9Ck3f4T4M3VoDoDA8w4w"
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
