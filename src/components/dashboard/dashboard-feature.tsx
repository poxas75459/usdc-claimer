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
    "5n8fLgjH4NKCBejVc9Lg4TVwL3W2vUnQz7UhUp9ypCTQgHa4VYwYmLdusGm4sWQt9UTWCnE2mf2aGBXtfM7r4Pgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UsRS98sUufQcvq2micHr1PSemmMiy8xjsZC9kmAdcBRPNsqbdcURfrqRxVRm78aKhuHc8mBQ2sLWStk4s8F9jXb",
  "key1": "3tzixfsPWQeDPKWziPgrUS8jwjQPTSpdo6HbP6kpXJsk33MA2ER3R8ToPwtDTmnk8yjWxPLvej8j5EwJHkPkcZVw",
  "key2": "3VgWEivMKdCkjSKwkKva5okdn745i4tio3BZznwp3p3oKfLHm6ZQL3is7hcbgzrR2jvHPpgakthXqXPx7AXrdrxj",
  "key3": "6nkqs8aKgEoDPEsNQESvJipjw7tZTc8hvsHyENF8CGi9GPK18Ko3XYao7XgyLWdhzkx9NXRJ6a4vPz5VhN7A816",
  "key4": "4ofU6eLu934eGquPZQu5rhik1XUNnwxZnudLgdkKmEFcFTW1FuLHUf4gGWuMKvTTjs5YnSUNmzLBmMUwEbgg9M2V",
  "key5": "4boEUVJ5UhRQhMvxZSrmrKhzn35YcNoGru3jQ8QmdN8gQx3E4oRG5jB5QtseFZ1f8NNUKXan9JGinChdgXAhwCd1",
  "key6": "dcSLJL81bM5GVf4Y9RfXNaWYVZZ3LeNkrypUm1uCEKBpzrjmqYLJuy6h5oiQZnUDANJGXgcoUtWYALz42KjCRDc",
  "key7": "523ZZrhKgStNnfZyxgickkv3wSiiYeCHqQbnayGyosaeTE11qUvY1aKsvF1ahWcnRVsyKK152BD6Tpa65nAAf8RG",
  "key8": "3Sv41AUHvtrRLkTv1dDbHePN8KVoXksWt7DhWtxewxv7Tq48Q6fuuLgb2qVyY95vuP7hbVWGbjbmdkQvMBTF2TsW",
  "key9": "5gt3ySpt95ZUbbbzoaNdPDvtqrbHiEgnxDczLuZMevZch2ZZ5au8TqiDcUfgckZMW4NB7QYXam9dRUxYMLhmhiks",
  "key10": "5D98xf6nmJDsrCftVebbGhku5mbCGZRzpUdGb4XzxCiydf2vvknd9v8AbtQE7QAVG39mMxLTRi3yW41ir3Baf8cb",
  "key11": "2xmoFJgJgbxTRt7sjUqn3Ub5PNbFL7LhQNqWP7Jo9cxRp1gL151nCdZPA3G7gnQ3FrPpPSdq7ea6ei2Wt2CnRQCg",
  "key12": "T4rpvYpZ1mhT5jPNWA2dQeu3hwUMpsSncywhfb1Hh665uMrYmgRkjpx2bjM3xL2rqW69gtkeKMxfM742yANARJB",
  "key13": "3vKW1JEcKdvfZ6RxGnDrJ9MjA3Joiz3cNhnWKFTVGS52tE2dApMmNESACAE9uc7ZATAKqua1iuoceyqmZGwqZ9Ko",
  "key14": "5WxdZzZVk3zuaLX6C7axST3fCoRWZhb8yx2uVpfPniCLocNkAji8gWeT3E89hHa9TBgek3Z6mBnCfozAWbEidPxL",
  "key15": "5Kc3Bs6G8JvrrNrZ7Q3jJJ1J1SGXdKw7fENsqbbtApp5q62fUMXUZJR7mBmHcEJ3tvXXYMHigX6ZziBLvDBVSVsy",
  "key16": "57DWiYAMc2stDHrKxLvKVA2cAikp6DhkSiKR6KaEV822m1iRjhMpUuC6sMBCoZzTPCyU4LpTfSdpspcNF5HSPFfg",
  "key17": "5yJn35Chym4Pwn3zJvAE5QW2WhZCF4f63SbCegWQZQ8E6DQVmR3kdXfg5DB5VpNhq16JMbF7PviY2kMzXA8aC5u4",
  "key18": "4Nf7ETFECGLZhNiMxHxTKrQ3q6NdHvv5K9kxaT9ZeXjpmprFo7haKm6N8xBA9N8FXVqx9pye6MuzaDLhEb6CRLJW",
  "key19": "356DAPPeRKBQdcADMYEbcykB4GqmrWswY9d7Jpe7QTJqbY2KawvbYDVgz4YZBfEyorHPdDcCmcH4sYDZmLmxozB9",
  "key20": "4g494LPdSiz68kjGQpCAtzh8v54cZkDa2AZgqqMW3A1S7UBqA6H7DaKbXkGYfSsvgQasWFAfoNJkzk1wzPyvsamG",
  "key21": "v6tem62mDS3Si3eKQTb5moWZyFxBLZn8y18M2XM3H9prn3zp464q22CSfyLJq835i1oK1nNbp7h8mzdQADnYxWX",
  "key22": "3ZxKEgCGNyap1pAKf47CmgBpeSus259TS6bPNZW8NVqBvnPsuvySE23MVKa3YVqGSXgwJ8cjaSN8B18MRF5sDAQf",
  "key23": "56A92zMXMDVZb8UqQA53MZcfcDD7CvtXP7S7bCU9o6rw5NHA2Ewqh3cVsH1zDwmscYrbwAFEByW7vr8qRomNDCeG",
  "key24": "vD39agrLrYWazzatoRUCj6KDeG8nX9s4xNvuQ16gkN6PPtUPkicLbrCYBRAb1r7sn77r7gHrAFLA2r96R6QZT2S",
  "key25": "5CQqFnmH54ov2N9RUgETUvqAEWevhZXezVrZEByU13PVVN4RsZUBzhHawXUn72tHEQuuLAWXs6tzBtpzUrQVeCmW",
  "key26": "3Rc8GuVrame18dyv8yU49ykqKT4WeWPYagVWrhBM4UnDrZH8776PjBNwJkMr8YosWt3cN7HuJj5bBxu36vUhhw46",
  "key27": "66Nkfmh4c5sz5fgKNiX8cj1jk7v9MBQNaJ2UucDyGJhKYx8XSHfJVq6Zy4zHHKMEXtwFHbT31MwdJFbASMq6zq1Z",
  "key28": "2Lfz61zwgstgdqZGzSkmwn6wmpgG2QYN15F2pYafKd2JRsfNkpnWN9hjvQyHsYShor2fKTVxE4GjcjVgrVYvdhQH",
  "key29": "4wsoxZFmjGEmh5CccgmcsLBd4xWmDjXkgCmGq7rLQc3kEnucM8bMFU5Yx8NvJ5aFxcC1As7zx1E72DbGCnQb6j7d",
  "key30": "51xPh98dkd8uM93Qsc8UCtvc2dP1gRnjr14mv4VoV9RUCTRAzJ9aS9q6pmNSwVnGeaVunqhDUrdwGci7U99Z93fz",
  "key31": "vktMWYuFeUrp5R6Esi7au7k3nKgyqxaRkmZ2k4JGLr3DF1ikfUzxj7U4tWr3bWWZdNsaxT1Hm4djmX9Rhm89Ab3",
  "key32": "3yKZCMt4CGxg5xfTvAF6n6GYor1EMWEDppX3eN71LH1kVB3BVP7BMjqYS7pdyHnkaXAEWjjKp3qWNQQ7WxM7u1By",
  "key33": "3wogjiv9J3eLG2AxtkpGGVt3hyXtAbE1b8zSnmzPAYk1xKuNJpzM6YHxooTFch3QGwkkP7spGRMLDDRqg4dpwn6i",
  "key34": "4j9sxB6MBREPr7x7JSDshFT2mMVVYXCJ22LdGcfDD56eJcwujcucTywew1qyn234XWYd2wkQWPMQ4sUcJwD3XYuc",
  "key35": "31mqXys5UzgJktrDLvpZbaSeqZfENBvBQD7ezmyurEGpTq8HWNoWbHcJzXTJsH4Bzcg7QUccRTtDoLxbXJrwJ4NG"
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
