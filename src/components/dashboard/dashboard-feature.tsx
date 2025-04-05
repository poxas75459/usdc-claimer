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
    "5nFZhcVrgPeRiAVMheHTsaL1JsnZxvy2aYPbfARBQWQcUmro2o9kedPrrz8X82yCmGRtQG89MQ3ZLJbxiheYtaHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQEczxoMktoJv89gGptPTNh3vAj7HnEVpmKZ3ai2ehqydKESPVALWkSs2FedcqUc4dbXcLmKQHFHFdUirajDtC7",
  "key1": "5fAkU7ZXFBv2E8K3gwpHpDJiPXV5Gqi2qFgFadsxAAvQypKBnLWrRrDadg9UXUdvmkmAiFMXVoMd9isEg487FHGN",
  "key2": "KRJ4Bx7TRkfPwtFp6UiCRybVaUs3i4ptv4iDgzeGK9nusmLxNRMViRjUfA49hqCuyNA5QnQh14eYdXMzfXEBraD",
  "key3": "3hRvVPNpg39uA5KPbnhKXvx6PDJzDapngw39Mx5RcQjZwEm53iPK6EHmDDDwq8xgEsHwNppEJ1V4G5CVZ8iXa4tf",
  "key4": "mJ3HYtaZdggaNj28bAQ5KLpu7AZQZYKJzJrdejoHGV7vnizgdeVRhbPV6rMcTYpcUvNF3PcZkwfYtjVXTqxztdC",
  "key5": "3nPT7GW8gCfBh2mvUbMMUBmiZhKSndEnhm234iQ2xaYEevrjFDnU4s5uDGHR6RKeHVSrBsKZwAemHCrDLY65oZiz",
  "key6": "49qGaHLxPkt4QfH4bTBscdHuiFZtRFZUg4X586hFoPjs4dE9NawAjExoKmT5F1SC7wNsQhGm6xLggZeKkS7oKfGo",
  "key7": "2oxpP9vN2eMAwdzXAFFoGCQEFtVa11pAGXor1wMu1HZh1rRr6PtNC3HnXZUW5W2pWHo3n4uDFv6YbNWdwUJKKCCq",
  "key8": "3JwZUxU4FbvsSc4fT4JMJkqB4VbHmgXmfexbs9wmQ9Ds4Kv5RG4w5uoaB6K6pDozJGyPgDBYnBEPqRaEVuFUSgn6",
  "key9": "3fWSknzbKaV2birfZZEvraG3prLUPLCLS8mYQJoXAVYE3bWzi8Bp6cCyZNPQEFhvu1rBi5vRbMYudGzG7HdMPA92",
  "key10": "3hPGomzYm5ujzt9KtduRwLWgp1qNMtfBgVdMKwDvfyfpLiLvg8Qb6UVsmYyT9mEnSA8xPFjMH7nDoHh3gL1Vh5jj",
  "key11": "ETD1Mr2xRm3BndNiMJGSgvqFkRCSDG81ncaJyuwh6qBFUJxPhT8xjW4Pkk3bwHbe2EMSHeid2CvURSmYcQnTjbq",
  "key12": "3vCqgMKp9ScqEKn77PgFdiVfnnxEs2c2DVsPamUeD5PaiUSgjHt1oHZeokin3bY145gLMv2My4EZiUz9pYdqgJL",
  "key13": "2RnwjUFxt9jtqaFtPf4GyHxYRfi297oibmwWPGgFbDpc1zYykgJ8Q3zR14uefa7mv1tfwJvSYYUo4SjNhxLbPAb",
  "key14": "D8KFkPNLjf5DVSD4DEUvfMmWtkfXB3MUTS5srPAqQ5KtNfAxSxvws9itJr7Yr3x9sRFqCTU9dMFHikLgpHeMtXe",
  "key15": "4z8viCjsTeMrTq3rKPFumH1ceMKUEoviaSLta9n1bfyovsPCRH7b9BArBQNQfa4EpNRKnHXeEXurfCx8N1F7henH",
  "key16": "5cBMs7KRxfgjpXspgzXTsHcqipwTwCmwb7RTk3QyafNeqRcQvE5E2x9KDnVA78mKN6jBDmwfGT8cX1qC9d7Eg2gz",
  "key17": "5PtR4CXWv3HzhihQiii38jTuMvadJL6ZRsHAZw5nG6csbxjxWkUx9CGnv58EZarp1bdE8sKRHaoMJuVkZhYn8U9v",
  "key18": "3ZHwAFTLQFUpFNPSeHVVp6UiWCKJusKqEvpg4Rv1h8tXZaMfAkfhHthrTzCq62ggdN6aD1cqwcA3fDSnzqzsAPbB",
  "key19": "2VPt8f1NieKR89g8pMFCVHSQ46phZn7pN9yxCromxskVcmwVXeEonhHxktRByYegc1GJ7YezDmrUSQ4WdcueWQXF",
  "key20": "2Lgnx9o2mWA9phtTpNHSZS2Js7ihg5NtnxJWbYV5j9vqfAG5RajHEhDYe4Vr7BNKX2WLqwxuFduaWyKwawwMFqsE",
  "key21": "AFjnTdGXcdi1bZGAsMAEHyJPgePuQyoFyxAFjAgui15S3fWJhvviSc8h5UTDmQSkJk9pGKFL7oX4w3XP5aMQqKP",
  "key22": "649tgvVbXv45aKcifKT7saGTbUtDvia4SH8fraHFc5StaWLa1NTrm25JdJEQK5yGiHqrn7vcuzUT3Q7UTQEGsPcP",
  "key23": "2QkFEGrfGY3Y9Tq4SNAcJhqV6nzWe4WBnvS4pVUvNDa5N9M4irR8dcGRooA2YK2LMqB2KB5nWjy2ksYzcBVCGna7",
  "key24": "2JNtdaCUrSHj1r74ZY2vfZd5n8EX1cL5i8FrHkTuo2KHGHMejPuCDPVrd82fGPUEJvFZSMF1AFpNkHjeYzn8kxTh",
  "key25": "3UgSXCT8FZWRHqvtVMdQA7AfpWyBqmsefZVnpyAbpmETAtWdEkip3828qA6g3pHDaQNXTPmBi7QYR4Qswo9ASVxB",
  "key26": "2kFEMCJiQCF7X6Pu6DANanWCabX3Nkrx3q7jowjsPr1VciUuo3A2nfPoy494JnJsTRkg7wAhw438Zs74jKnZGmz5",
  "key27": "26EgBKEiXzKsve2PK3sFDPpKL1EggSYfJA3xVRjvsjEfNYJDDK8Hid624D2GUWUpTpoewS1UPoWRrexNoLMbYS3x",
  "key28": "2s1F5RwcumVRaoFvST4rHaBzWXVNbytTXY9dSjoww3bKiep4jik2WMeWrooriVcHRE97sMpBSvjLfpxCPMrcwAjk",
  "key29": "5uFpC2yASibXHhPWWCUxZcZDXkrjbrVYpdbC4u4Bhge9jhmEkvdBVhHqYg5TN2ThcqVx36Ynp2nmgqQcpoE5Y4jy",
  "key30": "5aDR7uSEhasv5TwF1wDNcu8StNGXCaP5DbU34Y7XcENbnE9bXfGcm3vc9gJxEkEnbEN8Aiu57xM9JYkzDmgBjGpH",
  "key31": "1zEZMHkoVospUU7PJ8ETEAZSjYY7hEY5PHsZUeZrXF1mNpzjhH5NBh5WRrh2jjND2q4QgxmYXr4zuxvguAqijcs",
  "key32": "4zZo42WjpUGbxLqVcUL4E65kfMyX7gq387EMG9nEgfLyUSgHraTmh2RaHbQVnCAxcAQHMdMqEkCeG955wK2rCc1j",
  "key33": "2ijwczsLqqAnn9w27cEXAnSjwFYkEc5x2KsJpFvXfFrMxuJvDeb2RS5jKQfnpyoT6GQABZ1HEQakJim6u9abAAZP",
  "key34": "4kTC5CiZLhJREXJ6Co8QayKNr32UEV2MDQDLD59UYnHzgwPrpQSXhbxzGaVG5NwzekrsBAr1Zy9PMtNvPJHapFEG"
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
