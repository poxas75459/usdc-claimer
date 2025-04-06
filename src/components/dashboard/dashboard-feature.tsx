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
    "32jsHiKMmYqBDaTM7W7chMLnyH8UyPuV5gF3PqMwxWGRUdW9P3r3DMwom1W13ESar4yxLzAWz6sYs7QAQjnjgMxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KRCM9RvRt28xbo3tE71Wbzxq9LrcAPjNQWd16WhvypJrUYqNSCn8FYPia5Ypip9fCLYjEKSs4X9j2j561Yfz5CP",
  "key1": "22YNbK6iKhizC8NYA6V4PBzHQ65xrvMpkq4y5oKwiWz8wEjdmHzm1GinZaWeMBfGCxYQ5phdkgje2hEvWbDmJQ3W",
  "key2": "2HgzvP1Fyg9pPUeGCM2gmo1w9ESqvaeeib4ZEnqgzdXBMYNnvDJjMMD9mKSXHvJHKtnr9yobabxLHAZgxJrZVTUL",
  "key3": "5u1jYzUeou2n48kAcoUaLhKmYmBu6He8aGH5K3NTW6LanERNxW1XbiHtSwg9rpqkxbBgc6iAy6YNYa4Qx7tREFQj",
  "key4": "55BRebEFJGZ1ELYytzFVDnJKiKFyoeVRJWdBU8zQeJibnWLxcM48mGdxh7pqaBCNzNvc7wJ31M1n2PwcokfdSAJH",
  "key5": "4xtreyGXxcZKfko1nBed2yr7gZ9QUeceaP93Ryh4xsx1aEVLyhbnAriBZZQyztQFw12K8oQYWjM37US6HTzfx4u6",
  "key6": "7DxTyMrE6diakRrM2ZiLH7kqNPyVdQ6cxzX3BYJUCV1W24FaVsicHvXUWXKFvLJwtnNLA3vnTznQSZAGEhJ2KZW",
  "key7": "PsBG7PkCY4xtC1yBefm15CtB7FEHbKymWSqL3hJT4wVW1xniEBMKfUc4W22cmFqkNfR8emmTS3Zg1QqK9P8R8ea",
  "key8": "zBoY6qR6BY61JafvjJWNF9SaXQCT2Xqbnaqpw2rXruXUmGRq4C6yLYtqMHBfEmTwV6RY376vgFkyy9xWX6eiFkA",
  "key9": "3No3i6U6XexMhPf9gCosi8xKj6vmQ42hFTMCkf8FRPLYCbpkZSKayQrFgrbY1pDMDLdwcxXz4SNCQ4U99Vpb78h1",
  "key10": "2WhihBnaBRYoWX352YWPrJTHFA5A9RB8fFtAv9qqHWQ4KjZYr8zAFHMQFSrjYFDMq9mfrAkGQjkabgkuL1DzYsNv",
  "key11": "49ArdMaMU1nxCAYxBFpEshfMyWwsXirH5pijbBri6zodGYgsbBNbrwgeDFAt4YbyX3i3sSSEfYxRdVUZadK2pMCs",
  "key12": "3gpxU9sLUdKYPGpbBoNGDwQhehDayQn2yZxec6GSChHb5j3SGJ9DcF67eAPZ8LfB7Zb4VwmFct5CPUnpeqSydagE",
  "key13": "EUcXSz2mGVHYg7R1gRVrgyr4Kd1rtQ9U9D7ScJCp9enWLNehFem96mcFRcMn5AKtbhdsXX4EQzCto4kLEfNQ714",
  "key14": "zTJXs4asxerVAiagJvGJEyeUad7YWAU78DxR4HTXF6bnc3LXKbxWezsxi8SJPYT6xss9Lypu6an8PHeLnkhfkMJ",
  "key15": "3jr6uucfQPa7SomznCQJ7RWVB8UZyC3qShFZMoKMhpFzr5WaM4t1fJKnxLvBcxpbULF8tKbF6Xg1HkGTxJwHs2hJ",
  "key16": "2kuax2dJyLJ6yFA7ijkwctJRxHpty14Mhxb4FgbRrA7pJiyDHyjDGDrC65sR8b89PzPAGTkG9RGZN5B3Ls22WqHW",
  "key17": "3fwrBZvcktH72tvrf3znw2svuyaevDGzAHpo4mLc7T9emaq4FxPrBSmp8v4g9xRQpqc6RHjKDR5133XWNZA2okor",
  "key18": "2Vv1nDhXNe2RLn4KEzQHH53yY77BePgEpuVmeXAcYgE9zBDvQBTtNEeFAR38Q5sDFCFPCfGjLuzF6MXEuJ5brm7e",
  "key19": "39SQUVKctQHGTkq4VXZ2tcsRJor74KWm5BnbuxCTGX4T6ypKwpApcPLn4A6AJxdUYbarrK9weVfyhJuNiVjDvrZr",
  "key20": "C5nVtnyGR6FKTGqahUB2GjZsEQqxweNghFNRbsvHHvj2YRWPfELfKp5RiTLeDGY8iiPUMbLxrjGFkNGkUQGpMF7",
  "key21": "5KgHEuD8tNkCnqVexxbT86c6akTAtVyVkYoBhkoQMQM1gQQ5uStWAE9baWoysMnj9cskFnguXs1fjxFTgTjsh5tY",
  "key22": "2h4QCx57rQnbJZ2v3GLsBbiikDsrKEanyewioNS5D4bWapboikDWdVxDSnx5qYF2trgejYpBTDq75rbg6eN41ooG",
  "key23": "wYdUY9h5TA8rdsKJWziSAdKNxbJZh4cAXPTG5NcinZ9ndTfESz4L7a5qPn57jXAaoqejawfGRn7g6vhYt5UJS99",
  "key24": "5aGQfJEUBfxPwaSXUnZXtQKQ8D7M3QN8Gs4tGnSV3pKc4rWZyj5e8cwSf3GthXRckNriWy2ixW5AtzKseAMRJN2s",
  "key25": "4RAtf3w7bNrQKagXPU1E8xdKRkXk32QeH7qYuf29aJyHUL1ZsrobKHFXdPwkGuv6iA4YmYyBRgpGg7Da9Gz863UG",
  "key26": "5q4kUUGveWBvcMd97avgzEuERtzQ4Sd4kokpM9zDuTm8TaEztozXKsa7wfoqW6hkVP7LUuxZDnxKHNJ5TWBqcapj",
  "key27": "5N7JzzkSLPdj1VdXKVqaxbgJL7dQYKCG8FL7RP6qG62HMF2tFFQDqxa6vEL2McVEyGEABfnMBg9DZXdXdpmSa8ZT",
  "key28": "psVpnKpQ1pqDUU8w756WFH9dkNkfnuypc3SqndxAsqnPtEWJ5jQrUVBf4ouvcyB61TEtaEgM7aThH4yBy1nvW9P",
  "key29": "5mGuLKwwUcsjrM9D7giya1KHdw5xAqHGzSuuX96uptRzYRzYNBBDkLAPsmjqMHfTSCGcjvmQJdmzkvd32tPDaqoo",
  "key30": "4FncGkVDrKkDB1m4FSZZxo2L49CKDm2JCfzcfJrARnDn9r1rcJSkA234RwkSh9bCp6BHS1VScGMtxiD8W7oNJbgY",
  "key31": "67h2Nfe4RhrqnKGKEHa9cVy3PAFhu8ha6bU9n4PB8nDco8bj9aJ6idpJriUvwzhDjk2hXSa42jmDj4hQQhJtZqrX",
  "key32": "53cU5bqXj2bzDD9VL55PYKXH76AHC3VhwtwYUG15PVvHwEiLHTy453h2iYWxZY4MBEQyY61kmBKSdePguM5GLfVL",
  "key33": "2t6rBY4wZwxyimMjSYa9mEyitiwRjfytSnntSKWfg9T9DeKrYeKzwGLvpBXsXZRuJnnJCTD8cqFt4c3n39NDxczM",
  "key34": "4KX3coFFw8uAaXp5e9neAtdgC6g15AK8JVExgxnKE2yfXzchiN7tMcm4uGDX5QUxYedBfejMPVBS3bzV2SeDZH3S",
  "key35": "5xnUvktAHmYp2iTL2eqnK8ZMgf9rm43pH7MRmAi91sLgW6oUH5DpvQStAbT4a57VzF6A1ntL4wAcYUbyQRhPpX8n",
  "key36": "21sMY6cYb5zz5VVu6kwxEE3V9YuWHRWipAjYRTfFL1eU5b7aqSchENNP1QmSP6fzkuhT2CApYuiyzQuzcVfB9Zhi",
  "key37": "3XTrBFYLxZBdQBwAiGnhhJuRyAnKziDmcs9quGE9dosVLX5hw5DX8Uz7CAUurMusFXeJbpDGkLjmt93QucGfqZc9",
  "key38": "2DW3fB7PtJuX68GgcxTxpp2WrVXX4kyEyTpLwhp4BhD2fCAL5creciPg7a3KVLXLxeA8YpVKn4yQutmVq3WrdAXu"
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
