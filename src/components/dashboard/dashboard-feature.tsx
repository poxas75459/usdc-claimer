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
    "ijPXg2dpNZqQK7p48RYX3PvNC4AvSahhy2DxoNd62PdqLVTLPFN7qEBftaiDFecSrQU2yqNiCd35VFnimFvbrM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8cE4keYrjwo4Pmw86hvv6TyXwkYL54z676ZrvWbwqsFuYyLGiy4aMnr97TynptXKjDWqFQaGYcjR8rCtofam53",
  "key1": "5ySH1jh9FQ2pDgCVQAMUqkzS8ReP5rCpiHFemhBPdCnkURhc1DTVkhsoWQQpNosrYhVDutqLVaAJyyBLLYmhm5gY",
  "key2": "5Wh5JeKKCeBXjq6oo3bKiL4y7FCf3kJFeGaHZ1UNiYGACVtwjzWZCRkjqNFSWFNjvks9R4KfHu9tf2By4U5SapbH",
  "key3": "3fJVgBcAmFQGSho1Eoc8nugDLBaUYDGEQpBtb8Uz7ca816h5QinHLsVcDWwddpT9sK3brXTkwvA482a7sosVF3Tr",
  "key4": "bs9k616psBgxLHHrrwM9WLwjuKnpuucdXfwtWAuQd73FxNqJPyNaLDLpYYoDbkMj6tuKUa2npTTaJiJcH4FjYRs",
  "key5": "4MMUV8qsN7agLVYRTcAyb6DUGWn234wd3oFJKsnjwCWAYkLYfqVJP3NS8FbzGKHLzJsupkE7oyDmbmu7eG8kBjPm",
  "key6": "2XGQFT3r1y52BzAvXfA4z37apaoTjneHbaXWw7EAUakmf45UizJNAV4hcppAqQopwZ3fkP5BWYZoP2aXGvTxteCx",
  "key7": "5ehx4Y6BatnA6ivMaDh3AkJqDmrhgG5532nsKK33GGuZ4XMJo1HsdKYC7K5rRjnqsgGGJtnevnTgjfrFBr5FYKRy",
  "key8": "41FAje8EtUQHRzCniJUrkp1khjkSwXc8gRKMsdfbsxhtoG88KQSU4z6PkEFTLfK6BCvMnigic81mxdZi2J55U3QB",
  "key9": "2JPEqyhHnbLZbaCdx8ddLyqGDJyeev6x46bAKXD1EUF1mzJuWQF199H6ARpsFBaBvSGbE4ki8uLBQ5BtBR4NMuhZ",
  "key10": "4LRMuhbZgCG6d9QgWHvbimVHDZ4ZRLLmv8NDyPShu2Etv7NxRA4PCEKSAyQ4WZfJ4bYKv3oDHRrjrnAXCszAoqbb",
  "key11": "31dgEsQTTuvAqVKMZW1SbF8kN8HJ2VXJxMd9zLio6AUWCvrQ2RzPx9FJf8ByKcrs9vuEM4Ap6jvgwEJh9MSGwAjA",
  "key12": "4oYLFeryw96QQQKpGqPppW95LK1cJekLeuEoyDBUHmsnzENdbSqQ4nYVJybPzQe4fPqHFTfNi9smgnF2M6mCVnqL",
  "key13": "tyALWaKTjM8DdhyzjXf41fCZzLjNDjosJ1GtAzX16igJTjUAuyk4dwwk2wh7kDHuRre2NUrfVPdi7Ra6xn5cerj",
  "key14": "5oDBsxTg2CEzsGMyuATA4wH143jdEjqXe4SfRyKa3wJcjBtf7xA5eCwPy4LK1vXV5iDD5WKG4jwM3fk9WqmEf957",
  "key15": "5YjxbGncUsP7PiuRu15LqazTb1nHq7UxVcjYk7gHAzfmanysA4WdoegNESv11cYAcyeo4mLDYC9yrZaXYXXwrUWm",
  "key16": "5DkEAEWRXJHHruVAsy5xJft8tvzm9KZadi9MSrtpEV7DT5EnaqE2CqmRSceopBeCfhhz17vr1h1tyzwN9VLRCXpy",
  "key17": "5J9jMtw8s8N1wHoRgZswdeyGvtaaUKGz6Jjm6zZQWPtU9f9423tiwsn5RZkVYoKPCEnTQGyoQHW5UXWHV4HJzFaC",
  "key18": "3q3tA5HonpGFiQozH8sARPGZZaXCUdaw3z5s97wPhGf9o8UfePnwg3vxUSueorA9u48WAR62NfqaaqLQ8EzDBRCP",
  "key19": "47oyJZBLKbdeYk3hr1Uar8bE7Wmp6kD3u4vNJxk6af9gGeFA4PMfwpKBaT6GMBEnjfS16ZUtasub3mKfMRMLPJEK",
  "key20": "pUXshDrBtgbVe3RiNP8oqoY2mggdfPLcLX5aYBonjLYa4kRq1indemTWEoqN3fEw8goiZAa6Bm9eFBRWUADPJFq",
  "key21": "3zkfZRHnV8bQ85f4XmCqaKKP8TNnsdW9y7rzamfBCkrQejxwgU1XGhRQpfWweDN3HsdE6tVYrmfZYKCRfJnxr7Sv",
  "key22": "o2wu4EvKMoDvfmB5Ud95EBj1eWxjaU3iNoqXmqP9kNsJTS3WGj63Ty2ZdHyd3Y7CkykqACy9cxXVdmvLv3BfnTd",
  "key23": "3yRiYpjqvmnGU3fAjo8jYvZ2gm3ZktiNPkVcar7LwqbaL9SCvNRgXNcV5RrfHhJAp3VjdYvru1PHKHCTMoB1FVYR",
  "key24": "5Q5V4gJwidp7fkYgkUpmt1osJvHvG3dyYtyKDNNX13ca22E5vusp9rNFFs4nnk9Cnqe4BLenvEdAjzUGwEPA9Fhb",
  "key25": "5mpyFkZhpsdzvGfLEuJZNg4acQcaexvay5VNUuKGrrC8JPipYuhMwzAajdsEydnyGMrVAxARbUB8VZ8CipUtCDz3",
  "key26": "4L8nSPJJhhz4Zhe71JfH7jecvoNZ1qhscQcV1CoTXbwrsLsgUNCeUxna3WPc4nThZhnW4g46Wrs4RtwLtrtkHGYY",
  "key27": "3mtuTdmQvyh181F69UF3gaMyk5FQV9S6RXMthhMyUvYnuB7aNQtaTXQ4a8rBsY1uu8grcYteY9WHq6x7QLhzrrSe",
  "key28": "2zdEVD4VHZPmJdpqsL1GTPrrLhRrLzKoKtPR9WuKZSDYd8QA2CRNtLwP3wHJG3YRjLdTTuocBoiUjPm1MVEwJBVS",
  "key29": "5zaroQ7BSfwrK55tQdhiMetPJzvg7qZG9dwQuZFVYp2JsJMwLbdFhGKiP9d8Sm3YyAsSyin5jw7B9xSLb6NseS9H",
  "key30": "3uTwA9Cva3dsuQDQSkiZg7uPNmc9q4Y3eqyBgsBk9QZCmssghjTGe4gtWS7udMD6i1HvUv8vDyK5AERm6iAiZZDB",
  "key31": "2huAgwnvwYjQuxjuCCbfUrfd5D9LGDvvBBTieg5UUdtLETCCRrJVA6N8yXTsM5mqL7kfzH7pDWxc9CP5zGZ4cJE8",
  "key32": "363VWRaFi7PhyjXD3NaZbWCpt1wdDsDsYZj3i11sJkVi8YqshxrE7VRu1ZGuKw2KauiaQj8tmDjzUCFk9EE6Drga",
  "key33": "5LXSBoYGEQW2tRJ2LCYoaQLDaRzW3SswkjmybHLXf3V9ViZM3Vm9JPCJ4myyKH7KggwSpBMt7ikxkXupBn8Cf1Zm",
  "key34": "75iWyuDEdVb1dSCmjgU1sZ2X2gFzsT4mExvi2GvwHHZP6AmMk6qKEAB8z6MHQKYYuJqJDUvpG7JdnKHbkmz3byF",
  "key35": "2NULsWLkjvdWZQQhiQcwteZkCDKfXtuyQF7kCXqKzjyALHNwU73Xky8y8vPmFXvy9d4Van1NcMiJwDMUFx2xbtdg",
  "key36": "67rQQSZQns3gxKRAZD9Za96mse7WqMU4cBnamRJRPTHCTjcG14ta7LShi28VAHyF8FRHTAw7w7swNwufonCExYtS",
  "key37": "qNax24Kvs2jy3JamXfKxhjDeYVtL5xsNmyohPMqzaFYjsE4YtgFGy3wKNNxsABMgD74RDGXxgJx8uW8LSZY2HYW",
  "key38": "5fgDBiikTHNeyu3ry6eC5EvSbHEgYMibquLi1BemUC6xxeyRUbRAFkCL6Q2ugq69ofpFk6dqEXSKvCTAT9LMTKKh",
  "key39": "4oZrMnoeeyDhhpsHGxCQoLFysy3xM1dQEFKQxLn5BNDAAjKzgB7dyaTN2pZVhm7cnGb5UT1epAoA6F5azBxvKvTa",
  "key40": "33nGtK8Ltxa2AQuA5PYYbeRjBu3z785fVeEJqprt74TEmcfMdtJM26aqTC2LzsEytGd4683vS5yvyzXUbnKLEpXh",
  "key41": "3kpBW8qyBYB3drPLdJPREbXM224JyL1h1JfEF6fLgdhjBuo5NAxei6TcA8Kncp4Z2LcfWvAMfGEoX9bc6KqKKwTt",
  "key42": "5SdSJym8ehwfWvajX275YMBmbQFEiKc96HdWDxErRPF4cxZ7H18QkFpqaNo8YBdAh2ri6GThfeQhJAzYSP8E2Fqt",
  "key43": "5bZ19WG6D1ESFCnzq7vDhnA4zZnp53V4c2ibuMo3pgpi9WJAAtCCSXBH7A3DK4MUCe2gCMGzy4QvFWf9VBQ7tyaR",
  "key44": "5zgDFbekWvSKoRvjbAEraJ1EEjNf8Kbwoq3debtkqBYRDM5AkvEq8GqQf9EijCFqVCJwTwvvs4PaBgy231V7gvn1",
  "key45": "4yS6GkREtKiurLBb5WsZxtNt2DRX27J9kaVJrnPXpB8nn9dzedXFbJG7jTBjaLLubvq5YUnYspuqzxR78KVW7wiv",
  "key46": "5GPBoPgTJ2xk2hqtasZ23CAUaN1go6b1TK8SgKdL9Fadh2GmgkEK8Q5wf4rvZHtq2mHPxC1DicL6oAftUb4FrTuB",
  "key47": "57khR6xBCuTtR6dfAbXEqCx3WVMVBi5sjFabdRkXvP7QtBcMobSNFXVzXGNxH7zzErrVaZStUjJjaz4fXNDStJcP"
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
