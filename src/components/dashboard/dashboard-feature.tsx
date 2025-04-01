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
    "35X9RaxhMpTVDfRYn5iKW6XigLLgNvMG9VPmXZzLSEYy6gUs9knmYzmYRbF3GFn3y135Cy51PbrFRqpeEYkrjgnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J7qEwMRVgFCuFAmWv4WgEQSTi3mYyUUCGd2nFf9e8crGJYnik71nmqsxb6UvX3AnRBLMA2oWf1sUTbqmmtQqrGm",
  "key1": "2UBmdHGN1VvMTydzCnqJAYcJs4g3DJU1CuownSpHXPquvqdFNdywaV4cwUrKT3sfZucf1vBkhC2UHhcbtDu1U5jc",
  "key2": "BePyUvtAJcdKpL9AV6FqTYDHfMUoHxY6GjkPbMzc7357oRzE6pTRh1f4YDAFxgCyGNP8J9eUk9be61jUBwhhYYf",
  "key3": "2qym7hJFdJqDz9oR3fsR5ezcJeJjSw5yjnDN5xc314KshSy8Lu1mAvzy8Seh8crxSNL9D6dA22Tkx6F39F9UugrX",
  "key4": "4VXfCYSwbJR8NgwSsVA4iF9gPeBwkyDaow4JuS689RgUQGx7ei7aUmsqyMvopqRDEqZcCBeB3ZBd497SJYw9gtn6",
  "key5": "2Gtyf7ffgLh8nmJXZrUcpooWcSR37iJi4ufVZF1S5kcZyhkwKRRaRFrutfwMF1yBtrrhcxMTBXVbNCTtjzf74jrV",
  "key6": "5GL6RRoMAaqmJgcTFouHVih35JxKTxvypWrh7JvN56Qo9aNgHyRa6WyRcVkSETH2Ry29Cc9vb4kDsBHn8aUUWqgz",
  "key7": "3wEJ3SbKfr5wNMVqJngDxsT1aCBnAer84yy7bsYzpUYkvfYJfAYhRCCzhnMmTvvmvQgThoLvFeDCHLcSKGENXtrv",
  "key8": "yePZRxBqU4jxQSp47w1G2zsaEgtEXkPRDPufQoUpkmmAcL5fZegTe1g1EFdg4Y2qfGy2HUqwzGFPVARrg5tGoxw",
  "key9": "4npbuBZy34K29U5mncqh61mJi1w3Xh57DW763FjdKnoBJqLvjfG8zKiDkwpxgeBoXf2fECBHiHF1fXwmHQ3QU9bf",
  "key10": "2hh87bRvNiX2VtP8bsxrLmsZf7Wf3k7gGbCdZhAcuAQNd3iJuVL4TKHXGjdddnm2kVdogbTQpxTkUPUdWRBSAxy8",
  "key11": "2JYUsDQh7S4ApJbYmHEWKQ3RajGs89d4ef5WMpXeQmFeQ1HQfcPQYJipJgHG2TGqjv1QyVMqU1zEoyqzsYHxYZCm",
  "key12": "H855aXiApZy6Xs4YFYUeKp6GPaaaHbzJEEDPjzYcpSYGrFme3HnLFguGNLVUjTyofiHwSEVwjFeK5K25spuDbGY",
  "key13": "3k5zKvTFqfmz7VHAUaqGGHvNPi4yxvPLGXDaYgfaZPXJ8mL8ZR2uzipYD3UJQQk33xthykSWpWfu8viGYjTPkCqe",
  "key14": "62TzxKdUbcbTBKQPuxj6adBJamnt8z3oiXFXaKCA4wSYe26cWUV5UBxzATF2kKesVpStJ4WMw32gLkNQ62yGcMuz",
  "key15": "NpvKJTe7dw4Q49MhaFssk3VZiYjZksW57DkDwcTVR4dLyCJFU8Mn6qm4sivsEicAYAhNEXtJp5Y8HQr52QVkWrZ",
  "key16": "5juKido466NLFQX2nQuvD2C5XN8Wr2ai1M7JrvJ9YU7wj3ivDvj81KKMgozoeBNY4ALhTB8r89iaUsko3wbMV6to",
  "key17": "sG6k17thoCVN3r5LW57d37R9pRn4gJXnv1JEMzt4STCEZ8791kkmijwmM2TaGxkag9xecBrvyNGCtL5qiX78BW6",
  "key18": "2d42YsC1aCePFWbdaKyTvou5vpcjXQ2Crem7v93b6EVjMeULgT3UmxNWM4sV1DNFc1tx9v2ZhUW9VRZzkJfziXXt",
  "key19": "2NxG6ZtxGH9kP8UeLWB75SVbVe2f65z6oQd2aTaKaddy5pn8VMXtbw55EknbePzVVzKBwJpnT9x2rLyQU4RLHjUd",
  "key20": "4XxwrDNy3Bkt68JEve2tMCmBzMvBm988PYSAP8o87wLdD2kCz888RmQfxrhi98bHWdXGes9fi7bFi4Y6LpRAZ4WK",
  "key21": "K5BwtWbxkjyKcq9kav4apBkJ7zZnCnVi3Jh54YP29vKmYEjyRyLdCdzS8f7ofkVb43ZydzNyLVpseiD6VBE78Rm",
  "key22": "4xp4tEQFS8ooQqd1zx5vL9bUpcNqj8V8MPmyndzzZDQMfwhi6XJVxJgJeyekHjH9YAZz7x6Yi9sV6QLHDs7davxZ",
  "key23": "63rMiHR4zUiYZKq6dWDBuyqpCWVre5wNiRsVqatuYZ8YS7MjtJ1dAJQM7a9d5hMBz7dD9vKPu3kvadTXttBx5bBW",
  "key24": "2jhcwjPDjawU6SNjQaLSYpjSEHhnprBW6fKTq8ZDFp27F2mjHEz19ySqQRh7tDsTEotT2n2ntwVUvDB2eAEtWqVd",
  "key25": "2J9ErMsHesCjZss9KBPfh7rTHeBaFsiZindnza8KNPf1c4Wc6LKrHdQQPhaaJNEgj86aCF1HgwJ5CiFeGWWN24ng",
  "key26": "eSVhJq1m3VVd18LEv6GLjXL2JHX9m6no8JxbWphA2qeUQ6JRKAnjvaANrzzw1YAGavadtXXZpozPBL1sHPEeceE"
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
