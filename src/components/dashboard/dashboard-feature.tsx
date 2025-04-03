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
    "4a6T6YbHUUPbvPhtvtuLLfLDxc96VSm3wNcJMoPYXmQmQVwBo72WBFazWBH1eWuST9stZoXZvW9g5FY8SFXFA5NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUE3SwK5gFdJCWA5cpf8GmjEmb9aQPYXPfa1HZ1RmPygeqYb6CnXRqrpUfXBretVGTKBqi9xneHLE2bhaeQQMc3",
  "key1": "65z4Uo5vJyEjmrLNKSrzfHFagAb1JjHLtv4dQkMvgBtmMLW4EF6QXaJVTKnbztYrHdojywx5oPa9hjYLWFCdDG7i",
  "key2": "1YMhQnSVpV6wL9D2vJT7GCp7zfNMsLHmida3Bv6uHSRTSR9xVf91oUqxJN4rVdchJracdeAhHKA7d6DS1ALPc4L",
  "key3": "5g4HMzJcCSwZkgkRk3Vj11YxA6hu1YKdXkSs5cEHrS6TjeAoPhrVRg2YqUUEvYdia1Vy8y6UYpNUvacHrbKsrHMB",
  "key4": "32YxYNya9vQKaoaaHL7zkQy4vTMaYHWJemWFFwGXy56U5qFpanRHyiNA6LXcwDYVw13AD4zMGr3kss8ptvyGyYuS",
  "key5": "3pLZS2nuhJgWtPenbzBKSA1Kq3CKmF3GLGtDkc4ZMgQK7c2tREv4MBuQ2FCDhgntwAvEuNfZKPfSE6JJSbjb39wv",
  "key6": "3Djm1nVDQoEZX47JkFfhsSSbkiotzTCASry5jQ5Y5HMTqXQk84mZ8ZVDHEHnLTM8mcWsjVUJSXuv35N8x4q4dSSj",
  "key7": "4m4qTC6rX1JUV419gCnfcL8EyHwTim4xZsjKR6CGFbvNjQoGayPcVcLmBqziYBjSNWYkqweL4ooRwav7YFPucZ4Z",
  "key8": "3RvaTw2k1rv7iZQWB8nA7EjE6R1zHphJL8cDDAZWs6fCGUfoWr9akLvAe8HGgatSZwfvCijx68hsMndTAKjzP5sF",
  "key9": "4uuToeiNCnqFwXw5qiEH94tyVamZ4n96UWqNFz3uGbyZXWS2UU4CWxxpWuTxghH7YEei6rwEQd5K5HjsipBvjCEc",
  "key10": "5Qu5fby7kPS1XRd7WeX3onQA8R8LpcmgmPjMs9YuMqVtCCR4JoL6WeyDmomiPUBC5q5UUsogDEXZnRKtzMHMRfJf",
  "key11": "VhiS7jn6L4VMyy4gWtaFK6NbyBzgAs6uyx1FFMtpDc43ntyrSbnBJomL3ZFot8gVdf7bBfNtrXcoPjvTXaabwTz",
  "key12": "LwvQBTKF5qV1VYHawFr5Fs96sJKg3TAoe7EzRJwb8srpTbGhPNTiVBMVY5inGsGmSHH4YZjUWeTz1XFDdVQmsgP",
  "key13": "3QKUbtUcqW6joxCMcpM13rz7jTi1Q1Yao5zAv8dERXne465dhB7x18qBxWyJJEYos4v3NeBp6qb1C7NMCTyL3iiy",
  "key14": "2RQC1LswXmd6L7uGoNfKS8R7Sw4qpQL4WfWGyfwbTDnJno2izbwzXyQsRdUsTeejKBgUyYoqvawKStfyW37EzMvQ",
  "key15": "2u4Xa4YrdAqZwf39wbQMCbFAZu4L9czH5K3BU9YFqMEuMMmG9688b4tZ1PAHJk3hEcHL7Wrfm7H4ioL3ANAswfAc",
  "key16": "1V9v4XzMxx5UE5xuFAztg7tHt3cWZfDQf6gksdQL2U37spEb7XhgXTDVmdsY7SfeSLDLsMGhq2KNVUt47qmmW5d",
  "key17": "2QvVvQ5EowrQbm3m2SZowVzQLPXKDDC4BagDbZnQhM32nPkNxHnUz76PcFLeyfrKYTxc2Au64tQU3WkE3e4YpSUa",
  "key18": "2LRY9HSzwNamvqPcfmTzqpzwUHkvw2V7cABv8zTzGQF7RG3Je5XzrkyoEpSBXtYTSVQf1DqmR9T2U94oya3nQMTJ",
  "key19": "3UcgxrBrY2iXAWaCCqw8GXXY4Ruq7JA1K2PfRNhcVwNADs9aQWraNPD223WdQ9mdYspWb2DEQ6M9cxeCxJXRhrC1",
  "key20": "59KFuQHJ5iiLaFrYQn7c5KnZCBQfw82FiAedvReYBbwgQCVkm8GD1vxBiXkbFNExJuTnMPnLe2JjtWNNYsDdgiHQ",
  "key21": "3LnV6uCkfaDgyHme3CqXkD7psHsFo1fujxH6SUpikAFqSbDBAJLbguvyjffkb1B5UMta3eY9iGPhBzdFvA88u3mD",
  "key22": "3kcC1j1XjFbsdcV32d4337FooR3xVcDKKhntuc36en2z4i7zX2CQp6Khd53ynFjQEpVEFJddHfcEGEd3FyCgTSBd",
  "key23": "3QfVodrZMjZQtc9zXeg3LzToCM1AwPjsKgU6ctYSTJvLeJRmqSairBVfMt8pkVhUCZiLE3gm1aeFgbLBe5n5JAdN",
  "key24": "5kPTJCFkCHAGNu4s9p54aH3FcmiNiR4RMxN2umuReWjwSWseg4g8ZzzEhogVskKNTQtxBMQ4xjbLesFNX2wv6MZR",
  "key25": "2BBoe4piQStP9A8EKEbPExdqcEYP8UKbhedczAxZqN2pFrnbv2thBGTT6xZ8ge8tEMVZQgX4FD9che28NxytrQiC",
  "key26": "4cvEb33fXeJyRZTFHRy9GYFbLoTtKXnKSWLLiY5xNSWBszE3wVorPzXfiKqGkd97mWJq6Ad1MxGJFo5nmRbnmRbx",
  "key27": "3LcpuTBZaPVJdfuv2NPkUQeEVp9vyF48XCMFqu2KAy9P8AjCjokpcCrQYv1mNYd7vveX1xXEXRHWRpT14NbB3g8g",
  "key28": "2ydkg7ztEWHepXs2RQUTWQntrb2kLUoAMYsYyas3cx8hSb3J9ubwmqoXBVJEoNojkMEXjs7F3ifzqoweiJ8d81yz",
  "key29": "5SDzGDviY1QfK3gcC94y3vvU1oYn2GVJFEQeQFnW8jFzQiPF8rxeXHDot9PjieK26i68fMjgjrvLMBYYZ6X5JY8",
  "key30": "3MFMvebbHtzR39A6tboAEjPZsB5EoX8g9e6Vey2YaFJqBbgJ7d9Chao5RvPctr4sGfrqEetccsHqjGv17QxfpcDW",
  "key31": "Zs8pBr4Ff7YgzwK1CgvW5u22D55RGasoich1Dj3MoguSb1mLWKvcbtjQwxY8SpdVFLXJdjvrPkPTdndh1LSCiEx",
  "key32": "5so5Ccamccgg3WJS9xoP2qDtyomiaebReJThrojau5LPJ85v5gRqLwebxfzCsQoH6HF98CAieVmK775xJ8CQ4jCN",
  "key33": "jMd4L8srWZYY3fTXuorDNQgvWeZhHbSjDoVr7G3FN2orwTQDNcXpeLUySdguK7W1gSKwHeNH512MfNi5XWvjFWk",
  "key34": "3mnYbGDNYDFy1bRsGcadb4J4r5Na6zgQ4jYwSKue6C9JYBskUNfWRkYjyR2xKBgDrTg8fS6QC9LeRYjn6RVhXmo4",
  "key35": "5Pnsx6fs5Q5kKeMJpgtDhrcgeiCjtayp84R3LQ5xNBFfH9oVH7JMJT3mWXHRsoofoT1ZrsSorsFfbGxkWo1EUCYA",
  "key36": "4kjQA5XxtqmHd9KBbyzQSsWVXA6HzZ1FTuoFsSQCfnpVtMhgBj7SRnPFr842G9E6n2MG1xr5icQxBVFhJsFdwPmo",
  "key37": "MP4X62272r9Ry9wg3ffjNRhW8TStznKrSkg7vH8CS9tYQyfzBY7xUNT27YbDr4FVvQXY31YbqfVLTizqMVpvNBL",
  "key38": "Wrfyvk6o2e76PMnR9d8mrUruWGRNEZarn6YPuFCgkhBhnPQDu4GovcMnqLH22A2pgWkm6PWsAc3ayLjJu3dP2g1",
  "key39": "26YntBUz1G4yvr7nbhbdYSiwSeqKRWXXng8by2fJwVXp52cd9NXEBBQV4MRSZAf65AdxzuV3DiupT4fmSAxZssos",
  "key40": "2yQheGjgynPKiN8AND4xmJ6qBsEiFyGebDWvPEp6dzNp2nJvAQcYGCqSRbVoJfudoU7zc7ocvHxMdAxRXewd4Vo1",
  "key41": "5KFNpz7vuBSkPqfhZ17kwnBoxDdyqATJT1vE7P2A1HQkTCXwvgjBjokhVuNPHe5ewxB1XCWw6gwAT7tB8C89gcY7",
  "key42": "3nZBqFtLMGyXaCSfQKhrsNFwAcyVC7QJkV16HaRjS2tz2rXRrRYb3RiQTE8mzzYvdeeQ4TNFNQoUV99FzcPbh4ND",
  "key43": "5bbHVMH5e56BDGK2hyigVnSvJqcbGc83gBUxNqFp95iopCFf9uPXDJMsNYkUci1JHS5QKnhwuueb1W5xufPjYiBA",
  "key44": "5ZV2RVaepZvSPTe9WkLmp5xu2wgaGsQCBcfPC5YAxSidSMqZ32jTNFdtHuVfhhPWhvErcW4yuJ1gunos6RWZKugN",
  "key45": "2SZTdaiwKufRYaoCPFS9awR25dKrfXRX2GANYXoUrDAg55n2pWKCynwktZK54uZAynyh7MkoEBhJhNZhNqArbq5y",
  "key46": "vRQDhvsyqtSQF55W8wwRVGyZSVumjqtby5gpXZ7m6d5RwsDjBXSrWUmzzyuk8yh1YN8ouB1szT6Ua2jk7AF7Pjt",
  "key47": "3R8bPLfFJ9Y3vGRYj6eahf2NYDXfjk6Co3ETi8UVWjFZSEXwVwoTtpXLwSfLaLktubRbPf2GLLBLFxnzyngSqVqi",
  "key48": "48MWnKacPaxUWhaFNsynVhmwuv7GEJmsLWCorkLLuFU81nsN4r9APjVTdMhYLgxKKCyUiagy1WtVpDsq3rYXBQA8"
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
