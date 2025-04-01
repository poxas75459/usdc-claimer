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
    "4Ncmo9FMwTD3xrNG3ZWcSEdjXqAnr8JszESJmV98FywNwgjUa2r7L9dRvAWhWAV6debKQtUx7VykoQRiBABgFb4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PF5c17oZuDd5G9VnWkdyJkz5yrdqp9kPQEgUyYdr3SqaxdceLwqEjsNZaEjwpLd7XRbT7iDpJWukDcuk4Mcanhw",
  "key1": "66SG9f4ZD3bzDzxwwaq7JW4XQqqh6LXeQ4zPczz2PsUMsDrfsnWbsWUNJYt36yHCM2zQpr8oe6Q8VWt9mQPJd5yo",
  "key2": "3jJahY4xFv5aURFr4DxZT7zmy3mGF4vRZGZrss9yhunvbqsgd2hoNs7ejbTYuQFi31coTBifWkLafnsZNTg8QfbE",
  "key3": "4REFF4NbAB8zq5vJRtH4sMLef2vU3hzxVxcnsaveXUCnwgGXcRFEEgxzHANVrjW62poL5TjgyjK5hWGDdfgi3EQ3",
  "key4": "vYimZxoQen1qgn4UuAucRepqvUXphocUpHNHHhX7fSUTZMGB7FfB9iqvTWSmAdBeGURnrnx1cZYnUoTRJaNtr7L",
  "key5": "2ZNh5UN3D7JCFYBiPYtRnBfcWCc8SkxaEksBMfyHaQeRiQyR4mFcZKe1y5SGUk627Xq6tf4SAJBezHPKaY9suTsD",
  "key6": "4J2qACdqudrs666Kd63JJaQ8dE4DeEM2bLRM5uTiRY7dPG4stbL4C94EwNK1sqYUfmR9WEacq7175t8ibrFcbSqG",
  "key7": "5otCBhvszS8T9q9w1pHGhLu6FUNA5pWqbjmsZKftfWJS5iQ6p8UyUvjyKMV4cP1L3mCnDf33uacZ8X9QAQ8GGrKj",
  "key8": "4SgakX4Uqb4guT62ZS2Gk5oC8VB6u9PT2C3TZ1AL82ggqkFqL96XMAnVog1QGEjwgdWwQEE3s2fwp7HS3xGNbvWw",
  "key9": "2iqCa75W36JAEAJEmDP99oaynHiM5q5gmGVnx4YBaqrGRTxH3ugbAYiGbNsf26pEUXSE5ycsiT9y6kz5BaYUavKG",
  "key10": "4HwDRCPbS8jnVcfXG2Doch49p1dvbJzvmBPBJCZgdmsLRQeoQPPnQ7Fw5hqikwK8ZvxHQnqrjiewF5dE3ftV4yEy",
  "key11": "FZrxW8RPYba92qmEREs7yuwNZtbwJ1psSFLAm7vnFCD72dWnCCrKoABgJQczVuVN6S36BtRnENeTos4WnjFxr64",
  "key12": "67A6GiaNxQhjGxaNZKQhQmfJW4VfqUbVo861Ak3MDF15r2e9qBAPpcs2eo2FMsrDBCawmXboYT6XRFtvAwmY4mhc",
  "key13": "5b7sVWax2C3wiBekb5C5zTGoCcxGkDHc4WMmcM9GpNjanR5BGuuLCAVHAZSusdFjEnt2YQLE3bArENJn4HQj7gD4",
  "key14": "22gfZ77dqcnmkGrbnM53kjCeMQuiQ55wEiJTDVJz5k4wkDiwLZeE2Z5vWw7p5jVuHDz9a8sA8aAwhsi9T49YrENo",
  "key15": "4UmsF5YfYWC2bDZARi9PVUTkkX2An7ZWMETD6Bm654TyttF6DQGP4EzB9WTdoHFANpVx2wRiFFrC3p5oLQgEz6PK",
  "key16": "2tRYG8Q4zEgU4BVFgn9Z6ETbnbqJbXxm5c7btsL7SJGE4HFANNkdD2WB61JewWdXR34prufrtMyjwVeNu7P5vt2S",
  "key17": "2dAKJQpC9WJrL37zxqCJM72mnEQSHJR7ECwhzaQjLrkEW4H23aNNCuQGJtAYtmfrCcTrtBKu2taRwMQSofZY8K5U",
  "key18": "5o7V3Zb9DAnGcn4qJBSSq2RzNUxgzzJrBcesbWYFBYsqHyScWnnjdMKro7dNjR7XeMk5GnURfvgfzLxZwJRwxmhu",
  "key19": "6AR6ocw96skf3RnYLZAHdxSfD2c78ye3LAKzoRMHt5xmeHYfsPEUuWkC9Tmp5NS2aAkKm59NY5KqJGKpf4YUfjQ",
  "key20": "4ijz7nMLqfLX3PYrysnc9oV52iTiyZprRbrcrt7ghvZZG4xbnmkuvgz7xuDvcd6XeytrUYQKqc6d2DkXJ7eWbpR",
  "key21": "5w8EHbD3Att5iEexiZ46HSm5pXUQAon6RufFUaXM2FyDDK2mNo5JD6MPfYqpdu1brMEKj8mVxUGvV1vt2qCdh41b",
  "key22": "4sVusNxJzTL9GsAnJ6tpM1RLKpkTVkHfh651P5utBSj9jjC17MJHwD7yn5gGXDTcWPW9Daq2shvX7ZvP841eU1JJ",
  "key23": "2sMVRsQm6mqjFGLP98RaxXmEK25G95vsnMyWCdhq7n1fqAEUC4Cm4BgQw9s6AUN2htnc3GVCDLb5WiCYXh7PAFpN",
  "key24": "35wdLqdw4rNBb3UJP9HVnKj7uzFyGKSMsoXFJ6GMzoamS4eTK2efPMS9qBcgmUDtiY2MUFY4FAfNjvNwB845hf6Z",
  "key25": "3YtK7YJrSGupoY68Jhu5WqCmPkohKSyVAyAQXyk7CWCkeMHDpS9zwfnDdgb8TBpobsLv6oU8bCfZSRv1CzPML6nE",
  "key26": "4F6UrFWYAFWDuR5oxqXhJiYCNNmLLYAheFrbHtnURJiBjCnDGaMJa5WwJ96Ur74kg42THBX6NZcBcSZ477NRiHi5",
  "key27": "57mrJCp7CGrH5sZKpvTu8a5Hq2uUeCRJ6eYgKyNJibmyjqKABpZLsZ4jEj8nB1VeqyGfmPz5f4qXU7KNLLo5rNtx",
  "key28": "3dqz8CfvdRtqTp4zJmAQ6tjGbRiBKXSRKPjtBLYD3MADrMhGPmtAZqDVtHgMDn6E1NxzxctFbfPgSCM7jfxvHX4A",
  "key29": "ZpvR5QWj8BBKU22ecsL1nRJaU8BjudL5iUHmcojhh6r9em3VJc3t15jVNWjFoMK65e5DwXLMRhFM7zamdDZ7gTg",
  "key30": "2Gk7G9WtQdqHtdusqN5jybL5iZxeynqwmdzmgLoyo6PfyVxhxyxL65GgX1aAoPithsMqPCpGwMGqEFeSJuqniKjV",
  "key31": "nkSsWj1qCAPHpv6Axtf8gN8JsfVqXLANWE7uLBCPnvaWLV1s5JfRECXGS3RRqRewE9ZaAVAiUy2AZHjKQ5i3n11",
  "key32": "28XLUsJRTSE4SmQTCQdEV5kJ1QHLVedNVke9GavgUWWJvnaCfkrxF4fpBfTxUpa3VGbWDyGbUSS1TTCvRZnKq6Xx",
  "key33": "vcz91hnWenYSSA8k76uMfexJ8BPcZBwi2d1wjurx8XoXg5TXoJNVkSfSCpMeyvBeet4jA9EfoUSXZQYmmHFUix1",
  "key34": "4xMe1EK9BaLH7XN1XgmrLVvNZuvZznw24p8GQhFMQAizzgqv1ej4ZD8PgbovW5zJyVqiVpK9ss4izsA7KvJxz98b",
  "key35": "ZNumL4Godj7WMvm1NAkXuoc4gNFbYWWHydmecfVSSWpvmgLyMWHzqNUfCRoy49xJkU9nT5ZuHd3U9HUeQ6G6zhb"
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
