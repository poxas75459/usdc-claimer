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
    "4msSS5DjUfEGN9jkz71QSLKC7S42pVZbhD95BCPeAvVCfdr5YgUw4e26aJqAzALqdLBtzhwCVAYpiKksvN6raoiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NGsTxRBz56B7JRY1D3ipSgJPZpbBSzJxL6JZy7ZoQDzw8zmHHR1Txiy3kjmsWGCq58UAWP544pehDvZAH3kPfgh",
  "key1": "2ZXSBM39cD39baZRSAZZ2QfXtM5g9pZqK1iXZGcsMZkx4TwtCSac4NEfHDy3NULadWSVntAugp6hFigfhPoSD9C3",
  "key2": "3mFmov95iFsjgBC8GHZcvbRuaeELs654yx8GitJmkf48TUcUb7AwfexrjaTRgYm8gdUbMTQ2jX7PDsaAJQT5BAfP",
  "key3": "fVTo6eAT3qzsX36hxqg7Jz2rVLrTuUakZ5S1nB8J8npUweBvNhrSQWB8JZm3EFAyMEQtrPvgNepJomqFCf1zrw3",
  "key4": "2vjYq1D2RKsqahH8ahCfSELXKQb47UmdLmnqZ4iBHCU55Nrnf6Fuc9mv4wqZu3L3uv5a7QLjednPZrqbPXsXHKF3",
  "key5": "3fuBfgkBGTt6N2Ltwe8KAnyzk25PN6YL4xg8A3U8xebyerevCVWaQbXNUvaPqEzeNvJTxpA2MxfGoLeXgpR1uoco",
  "key6": "2a846BVLCMAv8bgAiT7HDQuPx24h99KQMiL9QpnKwdxmZ5cvz261EAeZQiqcjj1xGS9x82UJq9FooGVNRkCBEunT",
  "key7": "3aKfDJkc2LmRhKQVp8sJjebY9iUtYT9SZtJpsu44NfbJpqaF37spmLZGSSWunaxqV578kXmKyRUbMUQNHDriy4X5",
  "key8": "3Zg99bzzKk77ftVqzcxT6rDdN6krrFGinBvQ87xnGkKy4MLq4NZcYpNRqxyfgSH2k2SN9zphoaj87zRm6cmLhQcL",
  "key9": "5Aye7kBFjxsUSgVN67A2mhiXBuFHBeMzJRJ1SN7GDYv5gxgnguCQzvL2JcvgEvMWPoxurbLjsmM6yL7KtJoVySbq",
  "key10": "64tQJ5ukS8PYzoW2aGhxsNBAMYqEbii6HMx5ukaFFrmew8a37YAKsua85WVYRwUiNSmjPzT4zA9uRJ2WHy1RMer5",
  "key11": "5zxbSbYPoEkRqEDN3TcvFWutzvpUMrFt9BdFJ9WduzAdYCkkwX1VLmeMNhfoLfpfyFNVAMLoBoRASiHdfWaWPrGY",
  "key12": "54vQxc46qapVUAPHZBxfByDHE7UDkSHdL69ox37UKzYv2MWorqzJtkBZfb8SckCZts3SckUHrkusSZD9qQBCp9pq",
  "key13": "5Tbf2VrAuNWAAY7qWYrdqJTZMYHCQoQbkkkfpzBrc6Z5zhPKHYrkuP6A43h21Soiyj9qmExcs9RRYRXB7U2GM3pZ",
  "key14": "4NTCGNVZFKe47bpjxmwPdjeZ2aCfLYUH8FwW8mq2rvbqqPq3UGSzGAfqRSYQYyEwsTbe1YfzPwSDbzKEQWc1gpn6",
  "key15": "2BUTNWGZsFruz1efhgh4Pzhr1eQ5qCzRedNmo8M8P1VqmnBn9V4Mro69y9VHg7y2sjA1AdvJQDvycrcA76Vb2cQ8",
  "key16": "4g8VFZUKM8ytNsT2fQ226X9k2f7fRQoEtxmniQZ3ExzExiAsPgEVqM6KZK1dg8TVAtxFp12ezKgmx6S9X8i7jTL8",
  "key17": "4emcgBH2Y19UC4WDgvJEHkWkuqqhPxqxH11A47oUfPcDmiatRGvjQuLGe6DnZNQ5gejBUBhGiixPKH9hsJEQ53ru",
  "key18": "2emkivtkxQfmQCxHiVwpBqmW2VamAS5SvNGsA3FEtpybkJhkJAAXCX1e36FKuYN33CLKdNA7bzPjwqsQXMaEoGBD",
  "key19": "i1EYWWvsDr1VwP4XQYvvjJJGycQdSMmxPuhGM51PsTji6hZREx9bY3U7HE5UG43Q7ASwVyCiDiq513ogywasLy5",
  "key20": "63PXMdoeaA71wPdBSE2gNcFGC4skjwLUsR4BYd9CBQpEf1mAD8HY6gXcgv4VX5jiocWnfBryzDRuBTZBXUiv2mQ",
  "key21": "bag8WHyeuUUiSW5WBeFySFjs4dvympEd2KFZBTY5SmCzvcBYwXCUM1s9L9xxDwbUYVRWrtPBjs7L5UXBgSZHcz5",
  "key22": "2DVKuFqXPiifg4nP4SEELENjEMQiRwt25FBpV9RgXYNg92x3YyyEj5qZiaanMFVWK9hfQZrEecHsZyv8Huudpjfz",
  "key23": "2DiMKkN7mEiYnfDU22jKwREfmAiRNwhmdStpfY5UF6FtjKir13fx28Hjmqzmkv1Hr42jjWA9dKqp3wiZwWi7C4zy",
  "key24": "43HGUG6F1AGnFuTwBYcxchVYK5QXW2j53scDaDuR68yPmjy2UtpbwRTaX2e61G8Aob2evGRPeBNp3dWuq85WgYYN",
  "key25": "5bMgby6Sr8aGLwSMpn3iQHmbXzfkZrwPvTkqGWxczwoPmkU3RZuwFM4RbPw2AhDmi5H6TVpHvxQYFKw4RPDnpwyC",
  "key26": "62VYC7YbYSkr6cUDE2ZNfxedXTF3D1aqfAoaTFaZmcSaVy9cu6U62iE19bJnFBT4KJBZeCNa5dUk7SqZmXPBdjib",
  "key27": "4QSzX1wKVUgjbqziAaFX2EbwfDA55GAeCP5VUcsNomoi1Lqa9qNVf1nMnVmU5HvQzwvQSmsLgj3qr9aPLXf8C44R",
  "key28": "Q4MUtzxCeKSfESKcmB7J7ueihYgi93ogKSMZKVsi5ctc2h68apJceixZ3Uw1yPKoKGeohxR1PScCEZEYLpXrFfq",
  "key29": "3icxbtfU3dKvAwu77DWSFgXaTAnR9bidvsRD8TSJi2hrokPtnNGHaAiN2RGtx7PNii2uMjPizkHSmcp5Wxf56msL",
  "key30": "61xUXjjMJtzXsmJdRi4CYteQg9dufCX5JD4TWAnpZtJJ3N8PKX3KX38ACp6awjt67XR4HE2LWWmgvcKy1YStHKTE",
  "key31": "5Zm1ZKrYLqTxEktak4LuDLga9UpRYMM3bKSyPiJxHR8WwTATeyPBFka2iDRThembcuhSeL3vQxUwFASQaWZKwWVi",
  "key32": "5fzEE9kdDqSpmNvc7YNqkggc7ENfqZPH1oeQLFvH3Dk1rRFvxpr89UHKfKnpBQw1QyjxDJiRU4eC2qcyc3VRVbGC",
  "key33": "4K7datjdnTomXdyVgmTgAPn9WA94mUuriPAwsEwg9hB8D9u2WzQo2FisNgbbZ7wVoVX6Wok7cej5zgJ7D5FdnnbG",
  "key34": "5wrfLafVHxRbVfpAkVBP1MUN9Gm537SbEwrD9yBB3uTcJqj3WSuNcXV7DQwKrBSMM6d9356jGNp9fxjdCmDcHgha",
  "key35": "sUSYCsMSFSsixigScKg4rukwEpuUrepHw4oi7D67WcZNUYqmhLj6do48gcezT1f68eVCPgmNEgfoBuYL6cubvR4",
  "key36": "5M6EHXybf3n6vsQsj6omgJUeTJGdYgZDPrdhDk7vFDwRjBvBRC89uVST9pqd1qsUqh1x9vxjJXUm8xNfK5cKPqaz",
  "key37": "3pFNKckJ4R3ZvEPEKNjar4tNGXCq5yA9QH6DzNwzpnEQ5jm1QeJrdBVfeq57cdX5Z6rAqdNYwfQZBdNDStN4PpEH",
  "key38": "4Z6hq98MDrx5r3VdmsHzbPm8FkYbCb2eR64LMckoDAbavW1eYr4t5XEzZNFobRyGcVFmrKKJZL81GVSjDHLkE6qe",
  "key39": "5Peh5xdNLNeNEgKdpFk9xCLYCbjELtSEPuqMcWskuVLmGu6vQcv7aDHbtSh8hP2Ljc3Yxrw9NLBkXao22Y1zJ9c2",
  "key40": "5Vx7AB1hpK894pU929ytFHRWytKpomzgybjZQZtFiGCH9iuBGrTLL6pbs9KZHogVpLUbCeF2zn2XqQxDLVmw5PgS",
  "key41": "66Se6iRQJHSSAsrpcLJdcZ6sS6eShWqtF72JevR1rxqsjxhE1tz8jovnH2FDR19hKwyFmrk9Adn8T1WD4jDJT8Qr",
  "key42": "4d5zc2mcKFZRoUtvWfYyGvz2y5in6Bg9UWzb7125UjnP2cYgmmGnaPszSKW8nMUWrUBL7iG3XFDuBDJnsexVv7FY",
  "key43": "ovACe6sJX5umhpHdvpwsEP2zywFxbQYaLo7veQiJNsmzvjtqcJNjbt6gX4pPRkFyoZVh1VNkhduNc3gxPt8PK4r",
  "key44": "5H5ZbFjjfS52b7mE8vjHHuxFsB9HsJYDuUQC1hDRFAMLb8EN2WqiiZpJhknayKSGBrqt3AsQvMysH6o2bfMg4F18",
  "key45": "2nrCDctscgqSNwB57Tu9kectoCQz4NXmndz1vrMVvzkGQy7tjsXQwF5DjdKubM229F6r9grMzo4JwzKb5kWLHUHk",
  "key46": "3jHwwqY8CZWVsCtj1q1B2xA3bqoh3zSLkWXszHcxw5TsrArKg1r3EdzxsTJHHLEXxqXj1HYa31nmxP76HYYyyJKB"
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
