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
    "57PCAEy6o92pXj5WW5LXwA6XgLLvw7eS1i91CY6eneD1NEfm6rH4NQLvXG4Ypy2L6RU2M87qPjcBvYx2q1hMqbdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmV5jKajjYzxEDxj6niKwbQa5nd6dkiA4yYzrFfNVXa2Wx4NCakkUNnzg7utKopAGr4QytMAxNxAhUHnAJ8ZFea",
  "key1": "3WGPUZ3jHcd5WcCyFkRFbEuhDVCgtRFjarqbj9H3oBsMAfG8Zb2YWXdjMbXvV8M4bzMbhwkfY2G2NARRCNcmiPrJ",
  "key2": "5a4ZDaS64akqbQAqfiTJjfh3ajFZrreCRVL5tUaeUcibnC2xY3i4kyMN2rgw7DZo7Ni6K7tdbUXQBT2JTMJ9Ktd1",
  "key3": "zM6eMbXPWnbCn352gB64hA6FYJamBDTBLDQfByv58DaPA2ZHMnYhDNei5TibKepzfHXRUqPLLva3kV9E8revbzj",
  "key4": "5KgR8aju3hB69dqMM9DoGcWJGgvUSS7Prt9qbUCCubmhpcEUXwF9LZk2whvjzeNGuDVgvsxDHvPpdJf5HQXbNtp7",
  "key5": "5ED64TKDtmWg444a8FojfvGQkcNfN4vwdvgmPZss2aLyBdNZ1dSshh2AyyJk86hftx5u1QmhKr8SL8mcAkdpPHNB",
  "key6": "4ap5P9DJGAxAc29fxnpFZ6oVJqPk84tniBWAtkfpwJMDPPosQEpipMR33CUF7Ps6tjFuLJ6HU8zGHJ5ZFddDvTCh",
  "key7": "5hRksiWh99PdeRtW1q2fMcrfTa3Gm182Jn54mrDtc7sqW3epAKb6wTLqHKLdPtvF6SAbtv9M3Uczj2Yt5m9bDH97",
  "key8": "4YADuHupPHKLrFZcorKfeA2TScMrQD46JZiZHFFGU7AUDSqzN2zyRQk5NpQVPiduCCX4U4mSQD52Aeka4EjLPQ7m",
  "key9": "2t4HNdC2QM6mBSoHczVY4jBmH8hKC6NSU7zL8wUTbdpdEou7Gfrf17YDzu5D2H8gY2vNSjE99SEEr6cCACA1sw5Q",
  "key10": "4WRDDTyFnWW1gJtB6RZCCa8TGvcAoqY84qi5HrSwR9Z9RdDJDPk6TKuquUHbBMpqhnCzJVqwy7ng5RUKMrLvgWmX",
  "key11": "4NZyxkCzRqR4J6rD97xJpiZeid8t2piBFi6Z6kBmCsGzJN3AUjhCqBS77Zd3mPXVaYZYqm4gV5Tm5vXCg7cjNjz9",
  "key12": "2PGfz7W2RdZAJfwjhRwY4U2LhdfjZ3FvK8YxpSnWWZDXkEzMZVQn6j5AFStvgkfUbL1iSHW946Dojn3munCMpqUc",
  "key13": "zKnCGjjxoyoWdeNSuHHzFFHKrD7drAREq7ExGtBdy183aBm4RF9SJPYwEWqGWwNCmD6EkjSe3RhYHPHwNhZzCUz",
  "key14": "4bybn82EFR3zMqoyk1qBCMHEeDGqnEy8tDuVQZjsMVGD4SkV2mXqCq91foXAJX7ohrepGs56Gauv43z1jKkNaA1w",
  "key15": "4mmsu4bKvPX9Gb3mAQavReBXUPM7M5uU7JWa81tBk6EnaqmA2aWWSxHydGQucAggNHzdB2XYP81gfbub4NnvatLk",
  "key16": "4ttkd61LRGFjS1U76ksZomjZVT522kzMCDBavSpxem3pdAi1KJxgCmF7HTxrwPviWLQ4aZVa1kQ7hGoAHSzVAYzr",
  "key17": "2AnrWQavVv67MLQd3tTMd6YPzvjci1xJqUKZkXkPS5FBTxvNz1MtETMtjYb3YEnTKLcpjXnpw7bq8XBynmuim3gp",
  "key18": "3zuXkqZEiPvAn3uZbG3BpZUP4DrpLg89RZ42a5ehUu42FVSHEPXMnJ9mwGgHQR3qmCt2LGicb3ToFQNgqjG2VNkV",
  "key19": "4ph8Di8TEKDgPuKnDGvXX3EHMyrWnFtwHtLaeZqiienkdTKwrqHMtVjpHeSGk68AtaTVJN2pwEKLopoYMeg4dBgS",
  "key20": "yLDfdQ8sng4ZfxeXLxD4oRQtbCtQSc8RQZUH85byCxG53xF95t15VRSG5eqrbPyYhuCe3VkT8cvpbxvqLfNRfWX",
  "key21": "2yDykZioWy9JC3G9vEXqmu6b2NuL9DunrTSontm1Jm3U2hUdrhZnKq7CKtdmZJYuYYSu1Z5H7rZQXeZXnoWwub5A",
  "key22": "2hB1qXq7sLMW8YsETssENjS8wRr6pBMeBKVJ3BfntkJ3GeUaXYGiENMkL6vBz2BHiZGU3LApGE28bgcSorNqQGTX",
  "key23": "55n6kvT8oZ7y3YtzEbooGaAZtV5vUBGMjXWKNckbkdCT1ZvvMzo99rHjX92CNgP3ymNAZsCxKMNnBaipFoY7SuHU",
  "key24": "4hEVBsumpSFTnn4pw9xgBAWUBCZATaZ4SANEPcKsZnMUbt8T95K4vGzRzxddmqES9ajn3FeWEPx3wHr85uaCKxmW",
  "key25": "A4ntspLMy5f7TmYnmrEkEgoZmzxkhzEo6RpmWBuaFEhXia26w4nTgiHzChosPocDbaCmLeZBpeTkCtzYsgQkpst",
  "key26": "2PZsyEgyrpMuF3k5LqVdo5pCWadbopu8wXEQvUJMXyjFgrF5tbEsobAxUB48FW27D5PA4MDycuALu8VxTjpjt5h1",
  "key27": "fi8mqup8pKPzmQMSstFPsLpnaBvdfB3iJZRHgq6NSojyjpBzqWtpsynXnn5jvFG8ej11WugogVcgAQVXcLGgGYG",
  "key28": "RJRvksTnwZwnnx67swfj3eEAQPCyvGvE9BhQqH3YSiVhjb5rzH62e1YGMemRmGjGTVNQWZviaHz5BeQCNQjDTD7",
  "key29": "48U26m26jG469doLiDFfg3HJmMb2fbgtFE9jp6KGz3zYhCgZUUtGJEbfhr9EJuZ56bCPYJPF7coRyCJfPVnF2MJm",
  "key30": "32CYGjNuKyRkdcaLDnnduxQdBcDyFUTkw9fnuaTdfGtEU6xwMQwhmTBp5F4deZopM7s1N4hzJgEKq6HwAb9UBKWD",
  "key31": "32oQ6mCkmWH6DxeoVbmx5GU4XTY8EDHkhdt8NbGYfpfLNpQ5cbon35p5hvhNn7LsfeviVEBJhkPwH6F5XE3PJejV",
  "key32": "2N5JgZd5NDCrA3NuWmQdAGSDHjHiN7fy4sL4CPBNpCv7mWoSD9w6HPgmbhYjefRuoqMPJHKSiRe78WbDQCEb6ufH"
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
