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
    "2P1CNheUvtKfqxHi1iAWvZR9GdEZM7pxpU5b8vpZjBPAxgsyHw4B7xUEf6bEKs3MCGmBDTJqZyr5DbPCMBrjPgTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49igyeVcwkKhtKeQx9v4wMy5PFDS8uABwYvAYFRarkQv1mMDMYWxyAGSsRmAG8H7JP8ngUJc68rvcovD8xgYB1F6",
  "key1": "4J2WnaKKQpUW6MdL9jnV7tLUsAEJXnDrfAWALT2ibhHJ8zsjPSuBDnEATLdjAh9pFNKTfWnph8ErJd4Bsq7YTF6D",
  "key2": "4tHRbehNMbvQKZDG9fmu69qV3ZjFjDo6RUYdKYE9CZJdduAn8JHFAXTpyDrExTMSRhn2f9ocumDW6Y1cGjHx7qoq",
  "key3": "37WmQ8WFL2m6mWbS7n466jt8P8Zh7aUgwdz4ETa7Bfg2c55dXBaJm9936KC1FHprgrYnqUVu7xeRYg9MdMK8QAR4",
  "key4": "56bxnDyDcXETBXahNLASF49PH9ZrMvBouXZfZSQJARdrXbWH8Fs1EuWRvzGkKEiD2rmt9xd1Wx7PBsQH5jEv1XxX",
  "key5": "2NvMs2cLP5V5P6ovqFeEMoiFkzJauHph2GAHzYETyXzdw5zdZ8WnzWiV7KqPoH24bTvrSGnPymYnJhKYDBY7nYRr",
  "key6": "5XejvzDcqPXEvYhwPT3sq7GVSWuAhRXeLUBKQYMu2qhXf7cYovno7eEcH4FQLjGDQLtxKuC8Dw6Kpipn2Ua5p869",
  "key7": "42gPTQBBtG8AMtycRsBX57hqtTkiwhhEsAj3nG7wsUTk2cUcf1JTsRxzDKquaQ18C9EwtakPbzcBadf7nhXXGp2V",
  "key8": "4e5dEgdQtu3kYKPSs2MPpWjNm8TdsRqPgyjQgpRL9GbpcT6TnjNwaVPUydj5cQKBiUuwK6BnrsWDjAKEmK6pgv6Y",
  "key9": "62ygRBhzcqmvSJbbvjDCg2LnbQa6kHCY4812fFS7XWeSK3bgptYsEP4twpnvEv2QQJwjV9ggjtZe35BRxBges64h",
  "key10": "3mRyXGrZivxFxSMFJRUhbkvQ9A2R7xzueGcXNnGU7PLH32QRF6BhFRJuj83aDiYwEzwtQGa4hPyHMbbH3HbtXKAz",
  "key11": "61nENhzJxYaerg42pDnvKfRoWLQYi7D4Qm4sbhTLMhb9d1UarxWo6iMsV71jqVdP2wVtLnfsD14u3EbrUAq43fbF",
  "key12": "3hadBVkdzHhtVrvJJuhFzMjVPPNzb8TxsLGPVvytXKJFAFn7RLHY4xstgUqb6PFHXjukdQ8hqNaVsAPXAR91T23A",
  "key13": "3ZvhxjcnVDvriAMkULm25yF2km4nEH2f1qRTQVHZixaJiqGtEPJwQ5oUgasDFs9tjFa9JY83jQrSySzhcQq6ie8H",
  "key14": "21mRwv2U2ad6B6TBkxDNv4dnRHWhVZZXkheh6G1VAagiaSZWUdGxiK8mVMd7NuQ1y3UbWduhx9orYeypQdMqvpbR",
  "key15": "4sueZgefMijGh9G88iok2r42LGxiCf1ffb4U4wxU5w8PhJQGTcyqqMs3BzfS3MEK1jByxcvMxri5TeRNSrS5z8gb",
  "key16": "2bXmEv8vygaz6r2qJpCkjbkLjGidUMh18Ds3oVf1z1xTNPHvGmhskgSWrxFcTafgjuqRQoSDYDiQRH62VzejXZWe",
  "key17": "3maSumeYDtvYsA3r7Xxscc7fp9rXzcx92gCqx5JagDq5b8doSqqeur8TnzuHnbEkmM5753oNQeTCxBk2C1omT3f7",
  "key18": "5bTX36KWV9sGyxm8JuYH1tmDaGsFoF8wubXLset1MgJY7iCH24V8CuyCzRUYFUMqAuzndwMXWGKeSWAF2sfZXLCH",
  "key19": "4UUovq7RJSMSKerdKjgK3URFG5zXAuYLXzTEwWoN9AVKna8L9spr1kE2xn96PXkJvwVT4xW7y8iQjx4r4B7X8ePX",
  "key20": "DWfYRx5gi6j43XXW2zmJEF54rx4urYGHoM5FgSbkobbE7w6tihEDJG6XepFYp8g2bKMJg3fa3E5BhZsDB8gHB94",
  "key21": "43je2nVt9oDpVppXcQBpuj1AX1zrmVAdnWdToeA6s9fnCjtpZqY6XbzED86PD2EtFemViJJaaqyx3VB6gLqQXJft",
  "key22": "5LAtH9Z9hbaiiznxgb8j49rTSBqabZ7hiQPNr1CmZCDU5VDaFepg3cw77fAkVE4BecVo4m7TwKx4t27YXnXzLYBb",
  "key23": "3ofT59pNMwTN1GtUV78cAmjKTPPpcMuyzV8CYeHdvJDjwknSS8XiZJy6KcBNdwfWxNnn6zDuqxef5bZQSK9KVeom",
  "key24": "58KY6XyfXhWVvfV5hGKvkdMLgjZocfkjtGefDEAmphoChrxQTji8jpEacMv6p4RqVH789GAcXvoHeNAK2pmgocJZ",
  "key25": "5VguwJGooC4pSVB8ZGT7JZ4xbwkKR3ogYkUV3pC5cWDSAPZpEmWKrY9mqXqcapeYm3c24ZQHmsmcj4ZUD6mK8vmN",
  "key26": "287QikAFC11PuEBgswnqvBmxpKvfiLSUoQYKup9qZChwAyvavY54ctm5KyfAmgQ4NnbSZwPSP2pX8h8ZCdJsnbbD",
  "key27": "HRoeJM57A79N1nGXZT3rGcRj8r5EAK7LPunhdYU78AjQoW5nXdzpzpQZKhowHfYDkGymMrAq6JQxfLhtdQVMXeM",
  "key28": "2jNozxQHfanVXbfN1Czg9sEDbe1dh8pSF5tBXM45cXVneSd5KjFhdw69y6HPA4SzWN9yfzV1ncTtjq6nNGbbZozj",
  "key29": "xX8cbzDTEiWBD5JAyBaSttKw62DNGPBgptJ4YDrS3s2FQEcjy7m65RDWFYeeVfmPdB73zBfxrVHcS4aPi56Ncqv",
  "key30": "2xpcryJ7S4Ly2Qu2wEDua1C9m1WKdTa5gMpUEfXJGCYrMwEecR8uiqdXktgzohrjHLekm5z6Fx43YfTG6J2vBnph",
  "key31": "3rAinPYqyjanFuSdFzxyMrXDTMootBAgHD6WFmzb3myW6cMKVWeJ2oTF5d2NhB55ZRiZtnr1y9aVY7utNrjv3FCf",
  "key32": "pC7uPTrWq6Z9XcbQnb25BpWx379g24xryDn46xxgmJSi4zMqyveV38EkTqbK8tuWEXT7LdqcuQ4jJzY6jBPqwKk",
  "key33": "3RQq7Es5vtDCKDVGbaTLFP9nnSbLaxFk88zU6T69AH6EsQMg5Xdn7mDRUfKJUqD2wEKLwdrxQN8HLZhkuHVsRWWk",
  "key34": "JkS6cceveibEbzdpzJifsw5L86Yp8qbiCCZ2nE2NUkUGW2vQ4H8FZXs1t1aUdUn6b3jLfPqU8nmbPWKupqU4y91",
  "key35": "2eWpexnnmFDeyjkHCoSErMUKiKWgJpBtbotf19u8naBAQzrwKrPMUwPovKbTwfZc38r7hkFVWWtfAh5NT5tmFL1K",
  "key36": "3BMVG28cBoTDXSvmASKs8opdQS73vAnwj5egv7ARy8hsWQzJjvWjMidnUyRNiLD8j38UmRVyKgEizgLPZRwQKUoc",
  "key37": "5zfCkUfX56jZx4kgJjfSLRhchEbVdT7t6kC47MBXhguhyjHjsYPitfwRT1jKUyf5qHGvD2NU6tVY2Nr7t38vnXrS",
  "key38": "BWVT4vbc29bFSKg8bdkEu8f3Lin9T57wZY6QznZwEmnvp6WHywdzF7SFuv9KYDa5fvSDtPyp45fg1pJnqPxw8km",
  "key39": "4JTa6MCefswhyhZWjsC9hkfkTkESB85iEcrWXbiFjY4NeTyjLk7XxYy8dBeyZtmZMV1XZTbJ85JL9UUqG3GttWhS"
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
