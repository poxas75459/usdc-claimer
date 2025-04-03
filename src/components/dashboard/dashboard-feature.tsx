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
    "66PEVY5rGP3mhwU1aFTg5wYWMeBX46iyuLqjVPD8t4S7xGXgQ5KzxzhtN8mXt1AN34zy7W4jYQpgswL6xsmjjeo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A2N2obdmkbLm4R4ssftFYwfPctzc7sm965aWe41QWDFikU5o9WzLPkyoysPBUMi8pZDieiyEVe6bedg1U1cAcsj",
  "key1": "4kWgvb2PjPveFLr3NzjKviN9JMNizfr1vLQDZ4RwnwwPdULLbjf3ANuoTF4ZvKPeJcjaqRLj1wV2GWX8rKsvHJ5M",
  "key2": "3tL6SHNCotLqVbt3GZt8gix5b8N4X8fHYm8goJZKFKgwBVARhHrUdQvBLNA2oBmt72FG2JbZkqpPSAZqM3QqNtAS",
  "key3": "63QkJf6JreJUXj7TbpeqenpgjAuq5CLYcGRcjueKLnnMwC2FJiRDGMHnT9TLhCb2fG8hhxDVorUyYnsZ3Juq8o9X",
  "key4": "LgMUzBZSvJ2PtWPtDcqDak8ivyKzPE96rMoDSvygN6qviaLbJpFSPLJePBZh2eZHVnv41WJFVz9gcjmzESMrht1",
  "key5": "4nQwgT6b9SREM9xg1opLfd68wngfPd79gZ2PDxUhgqnqHhr7J8qSBYKa3WCQWQnwUomfZHnUjzBpAuyMA2BWPdQ5",
  "key6": "2ReMRVeAB1mfvkFQs1FW61DL62tV9o1D3JhJoXSQUy8bQk3QZR6Yj6TdkFPcwoTm1xXH3u78rUvwSFYyKwP1u643",
  "key7": "5Pi4SyYD7G5KdTdmXAxzfkzdFLcgH2hfrUFhzwR8vPktwRF6xPXvdtptKkeH3wMFh8jzeDjv4uc8Ux6cbaZ3SjKg",
  "key8": "5kjww6qjMUYkzGncFCektFSjkJ7yb2T81Hvr2P5mHQ9NL5ae76WvvFWxn14ijkWzUMceqmeD9JSNjEuh2GkpcqeG",
  "key9": "49Ky2P2QieQxRPx5cbvH7zU7rBEXLHdxKsadsQhGyx1wUTNTH7MLgVYVejULDW3H5vBgD6k7ipNfGtDrUMhxWfQU",
  "key10": "3Ji3bvyzchDXqLys2R6QndWHyGEZYgXRJhH6rowhoRFfmfKrhhvAyQMybkniARttMzYpZWtwUrZbHZNxqqLFu8WZ",
  "key11": "5XubyBXVYYvteD8sUsbEd8ZmwbKPfg51uyJmuQsXkWLzCFM6w4dk4C6PiLzyrmAPLAPorV3m4bGm2KsQ7WDTegWr",
  "key12": "3YjL4vdxu1ufa1nwsS74uJAYNJCAK8Ra4pHQx1So2YkM4c2CsiPgY8ZVmfhrTy42qpyz91rGKLRd6wLeS6xdXUSw",
  "key13": "4d1qbsnBZrxepvkCuxfVZsVXDvkfC4HYhCJou8pLeqfYxrVEVCEBoUp6SjZMKQibeTWwnBaxtAhZG5NKcoUVfJ8T",
  "key14": "qFSWWu9aLyqJZ6ynVg2c2qUM5NdXVKyrk7qPcvHt2T5fWJMEcddfvhWLectt55hntPpkuE7paptnEXbAufjZgoz",
  "key15": "5tAtcFFj6Vkrskq5YiAkqw296yG3a6NNvFPRDbfb8FKzasTtboS6UfE3RnZVZRMpJGPGPfoPoEV8TWCHkaUdWP8E",
  "key16": "2s6BxNssfydW9brVf9LWHXN2TeyCPayifDMQtL6kvmiadDGxjbaGrN9RRw98oQ7w7CFDpDFDit5rN8ioun66e3eU",
  "key17": "5M7CKViB4C5qJ6X7Dp6hkCi7h7axL8UsLHgzg1a78fWWfCku91SEnGXDbpVR4Cj5h2eWqoXZjqYtvMWAw4Mwuwwu",
  "key18": "5xw9VffgjS7nG4puSjeJ3fXFBqFwdk1E1XaBSQU2Na6M4dXj5U3pVAPkkWMRYTPFRkQU9hqFTDKShmmfV7V5Cxb3",
  "key19": "4CHrigtvMeS3g9t4crKxCZqV4Z5rYbj2Nz89jEZVDgpWaZ82y1QZSNuhiEMFr6eqJ58itaPsAPYXCfWA3XrS8MW8",
  "key20": "218H4D697GrALS7PHEyfEMzzidTsW1RPsFvySMTW6epFbDLd1vgv8nnwtcD38Qbfm6z1DiN6o9EC2HdFg2go9FZ2",
  "key21": "3UAnV2mdyyiMyy15mvMmMZDuxvddcm5KEd1Jfu82osWhWGfTrxW6aw6N37V84TrWnoRwfSmvg82ANVzaqeFCNRAs",
  "key22": "2yEZT6ZoFJnAza6C5ZE8K5wyGWnEXEmMkWzyjTRoozgWTc4orPtGmX4Qybp9Hny2b7CqgFPjtn4WnyC3kKgLi1Yi",
  "key23": "2adjXCLGumNTqyoyMV99asfP1icWTLThNnuZP6vWL8Bypj5vNXsYMtEqX9uWKPbNQK6987msJ4RrDj8kvWBFdkaV",
  "key24": "3rQS4usXmJHuTT5nnrwaZeHgMEMxKpMJcvRm2Jt3jb1DbVjdirfsd8NptfxEZeb9opMeAZNq7R4DF9dEa3SThpAi",
  "key25": "39e5goqGe1DM5BdSDRwC9j6nNFNVjtQVX3q4iAERdhrg1e7VpUVHbwJVgBxdvAMwYs4tmo8Fte4P6dCQL7zeNhtL",
  "key26": "3Ccjw54carQLNd8snnesBeU76H6sDxbcaoqFRdDmeuW4ABjoJFc6XT4zs2vsULkFVvT4iK2TSCWfWJexCCT2Remp",
  "key27": "3zAeyymz721AcXmkc61tjnZAQ3PyAnMAUh7et6JAecCcxSQ7MuyMoTfTXmBR4ymjS4WBUhYfMGp8iw7E5xvtFkZD",
  "key28": "2xy8vJwJBFe7aj39QvTjT24Ga9nxXRHaqFMtjz1mn7ALBBupJwtA8Pv4FwVxYqRLyNgWPvHDphdn7u2D97Wnbyna",
  "key29": "oLqf9JTmnQc94GtHYnBbmorNkzVLRnux5LR3WbbdnaFd9scLGNqmS1ZyNkhtnwMjNiuPtwv9xUt37CpmPa2NW4S",
  "key30": "3kTuqP7FmPqtkUCUdibmbFYA9hCbmv5pCCDPqxAnXspqhiE3UTh9GLSVhwo9kd7azFDR6VfGJtJDBdqBpzr74jhS",
  "key31": "5a7u9Zbc2gNEfBXsp1tCLGV5shVtDqLujeDeANe6tVHsxhWWeedxcSasyijcLi8kwWeYx9Dy1XZPtWBF72HUNZgM",
  "key32": "35DDAY5uaTCvuJrePb8gBY6La8EBSnfdHw3SoFpnyzpLd4baXa5FjKXfxL3WnXswBC4XgzEV34zGauQFj7t82qeC"
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
