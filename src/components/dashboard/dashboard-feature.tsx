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
    "3BMXaNDjBUuzVndNdGpjxFLyzucXDXi7DYsncGRMsNDtAHRw2DQc3gV7XysoySj3hbzSZmKfHhLhHk5jZtUbZBrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BqSGW2djTQQH2NvdAxqhRJ797hHxEzS1PynQSML2PHbQfToV12AD1mgQS1AAuKZe9hFg9zwsxbcbgqSJDfhADB",
  "key1": "3tAEs7auWtQzzrVMeGbuTBuKWneG6d9tMBRYTs8pvSemKj6Dt4gVt8518wTtpGAPqgkezLnDXfW4DQD8UXK9XwyR",
  "key2": "5Zr9NVCdrHe3ePHPNhSbBCt9EafR5g8cbEhiR5tafUPArFfU5MQXrN1pedqDpTbMZeprGZb1zwQzyzo3pPmskDsy",
  "key3": "UpQcHUYmpfWFrhMEiKWLRhATLTifYQ7dPWrhQtrHdtNB4fjt8Ake3WjVErS4N15tfSppfyw79cX7p26bcv1d4qd",
  "key4": "3uaLnoFAJG9vYNNYxE6UUZBcX6X1fWLzttZCKwAD5adcyTSdDBAg7pG8KVAVFsgE8mZ7UvDiS9BuFjhDGp6Nq23E",
  "key5": "363ghYnsevXac9Jy653hNEAjjq4M2Mq372baeGB7SP4Fe4mwpNopNVCBNEQzNmoMPadkhpXVPGfmmmktxqmtvSQj",
  "key6": "3xyyqJof9zwyCHiqxchJdDfxskhkdCrRu8ThK56k3bBLYCskZDKCzaiojXsZLAQpupjpxiTNfqHPntQbDmiyAoJ",
  "key7": "dGwyLzdbRcb3Spvtc4dhSNJQZ4yHtnCQyxp3zSW7qYGkBdnPJo36JfnnKSYAKNAk8EqdGk4dMYCzdxdHEtpGuA4",
  "key8": "ZbJ5d4hkzxwKU1zRkBDJScR4xRVsGs7M8jpGgbyy1E9RssJ6ebeyDHvTkx4hasDLFPLgfGhk9GTGWvNta94zvYR",
  "key9": "4ciGeCpu2WzQYkHc8Uo575GkxvgXmEKw6vmjj7VLuvQRuWpmRLfcfmQ2TQzPS5nkQcfdPeoyP78QiGwhFNrrovdH",
  "key10": "3h7evhhWqbDCuicmQiA8Cz2PbsQdZfLCZSCz7tgRT3KUq7cT2c2ALHHNVt9wZdqYihENxSp8qyEUSHfy8oEoc5k1",
  "key11": "5f4WsgR3se1kbhdzcnH7D8R64DhhuJih2xTUWBuFCQzGa3Z9tAmVuGfiKL1DYcsk8GajyT91BkvEkXQEmmEa7Rq",
  "key12": "5emBBc53B8oF3e7D7bY7NunYYgy4kUucbfyuqZcu8NhKfjb6bEgbi4RoBwiYRNJpbHwCNxGufqX8PhtcqVLzbebn",
  "key13": "3AFHv2kBxAG5fLvrHJkeM2ohyhgiWCstseEcWuYbvoXNE9ZZuPuLqvYiTKQyDYYFugXfEJzsT2ooGRY8YQrcgeCY",
  "key14": "3KK9hhGPVY3TNywJsNY6Xu9sd6CuNz1BXeoGvTAS8GfLX9CM1E36CoNmwXCPe7MhS5gqyYaPSv7y2ZU85FHgQSdc",
  "key15": "VkVJURQXdtovF6qyWKHCdHpS5koWKyTS7yL99TxG49f6MT5JuDs8wZRHMMVFkK6jZxJ1nB92ynD4gVFKkcLkrJw",
  "key16": "3HaUGQBczR7TmHJ6yDEyp3BXQxvN9Cy5eQJZRMLov7Bos8sVdzPvrtVwL9jp3NsgkPo1wt5RaJ1Vq2qw79FEd4n5",
  "key17": "2gur4Fkry5Kf7JT6BzDAJSNevqPMmxUVq78EWhUhPnAtKzv6HJVtWu69S6r8ip9HZky8DQJGZmeXVBicaDgnVdhw",
  "key18": "5eWUDKwHyeUVZx5JScdji3PZX7d1UDpNs4JGV8KK9P2FJkuxwwbCaN3dtTcqRg72iBJRn3Bokmh7JdVnDT4zcoc1",
  "key19": "5efFUYMcp13s3cC7irtkk2Aus7QmaB1HodfytJgRd8CUdr1oheJibJ3BeF9F93Sur88APMKYDNLbqoe4VWLfv954",
  "key20": "3py1bxBPoeMtMQ4SkrjGRKW3SSn3t6CxCpHjrtR7cDpYWbtyfhB8zY6oKawjDnZNc6bbgzkYsZimUBcZasX7UctN",
  "key21": "2cpwAkepaKPw9pMz2nCpZgNGBGVt4okQpHACp5C3CCB92ZdRDp8C3CWCC1twS1Zhg4qkkaCv835NckEbd5o125Cc",
  "key22": "sMbPVCYRw8Xtwaa5XPUwCh5F72pfFgoSkBwEmgAUvc5ZgZ5TkydcBtFWK2ykyT6Ac3N3irraece1UcgZfvJApnY",
  "key23": "3TDmwah59k1vtWcEFPPSGVTTd9M53tE8CGsoimhKZWYcyn5gtP7tQebduaSSh427nMNd2N1uhzHh6rAh9pHayNsa",
  "key24": "3GHpGwUAoGjsLLdr1f2j1mp9LBcREVBGQWMMbY2zEkpvcSTQCPaBScD8voD85rFggtF7usGEZEN7rSDXykQukCGg",
  "key25": "4ozK89wAq9j14M5K6yqYFu7owS1wWmLD69Ft48N1bPznpweTWLjTbngsShNDcriKvEaBh8zkxQMKHqoBjmgZqxn7",
  "key26": "xsWSVMJGDtoKZ2L531wUoXn7hCERAqiV38Gd1BN7YdPPaQhCRdhXYC24kt4xnGVgML6fnU2cU3jPBsAmWtu7nSp",
  "key27": "4csVSUnRzYBYkdmLmWgFo1w1Ksncu6rEb1av95JTspw2NFHJdfFdTcGFsKX6V6L3BJd2JatzorVuNKQDdrXnSsER",
  "key28": "3NBhnFLvb8m5tPBEAadHdYDpyZRc1CZespk1xgjr1wEZDae9FFu9NuciwQKG51RkzbfsN6uetbNeHUTrhoyAtHzJ",
  "key29": "Qa5qofB6bPw1seCsXZ5BwdJTsNKLtEUChf2LmoMsu2VsgeJBYLnNBnhkz4akyvdMdCt532wsbcPmfU73mYSTzHu",
  "key30": "5BsU1XLk1uDbBwytoZ9NHYqrz75CmHKpXYmEhLUZtpWE4fMjP88SQwNUA9ij9YGepzBZs2X1Do8o96b1Yunz6H3X"
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
