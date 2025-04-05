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
    "3EqfiVLwC97ytBiuFxRjdxvFhUL6kqobaawM8j36fHurCHi7GcBwUKXrPmKvVyiw67DJ5XPx7tmndSFYZDTg3RDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T93w6HJT9URme78CcQdHvsajbGqj2bCAtHUwEAXsSMCg6o6SQucnArGzkA1Xnr1yAHgrp6Vpxyo6J4dZcBidqz5",
  "key1": "2MGUVxmH9yQAjjb1n1T5bC6sL4kMHbtmm38nCG4PGDp3negzeb6F9pda2nbUxQWX9i5rn9dgmFvGv47okNPTEL2Y",
  "key2": "2L3iRdxbqXJRmGTWN3pzrxXUiDeBXihUV19wiUzaMnmDBrTSPiV2bC4DrRZEsT9AHeEW3AjqQKR1BkAz36zbo4oK",
  "key3": "3YNU9t79fHVhLjrAMz8cmovE4WgNzsYagMyEzzYo5ZZPNz1omnQMjJGTu2H4Z6HguSwR7ESCmQ4CKEKb8T3cYPva",
  "key4": "4DTupSbwjrYjt5xt1Xxm6xXSnSnuUbtzkA3gTH3BLwhGgGbbHGkAzWhec8z5D6XV58MrYn2FwgH8SannAmoHmVsg",
  "key5": "G49VPd4Gf8bcnAcnvgu4x5sEy5WHYRjf8kumQXZggzS8nZ5Uk6pz1H3BgRtcJyhgq52x8KfTFxF73RRh8TwacEr",
  "key6": "5VBCYQ67S82gZW1V3wCE4MFaDwaEDeqsPYmWEuiZKG3DqiyT56Azsc9seW9DnpqUZqFcjP7Uz3Ypbdtotdvbikvq",
  "key7": "5PstTPYx1uJZ7FrUPv29QzUBKLZoJbgt2hLiQaDc5AN8pFxQE5hy1DyYYgxdYUvQrqF5tRrwg7YYubeh8kX2Yvan",
  "key8": "57PW3XkiHSm4v5zCdUk9Xs8v5wkLuCw8ZSMzopt5iMpiyoGauyBTndx4EbMYHVbmQQhbP4X8wVk8tUCX9jPkAS5i",
  "key9": "hEo67fFj91qACJeSUZNeA8MR6wCdcFqgJXC3uT7Xf6MgwbvSgVJfKtmooNfiu8owgADJH7giZHknCNZRqNnKCr9",
  "key10": "2FP5jKbVGYCD6PsCx7wsRBFuS2GPLH95iEnYUCT8FhJX3E3F5epdw1jcqvZc2e8bskQWAueYLrjYEfUQsaBvByVn",
  "key11": "2vMiroUWTZjRdVDkwcAYrRyfzD3YC6p9WjJ4WR1dbqV5gBvoLkSXen9MigzgwdtkSXF544rigQNigNT5cNYQuJta",
  "key12": "3mht7cSgZaojQ7hj8YjUqVYxLqEFqjjhtV4nFLkZd7aXAQ1cQgNUtTLcBkwT7P9oQZ2zfFPvaoeyP3WwozoiHxaG",
  "key13": "2AvkxA4r9XyN5Mm83B3qmuQvW4ZEEbyJJp2Tzt1mRfSM6ULvxGiBaKvJDSe7o3fCmwu6rHFx53tXeTCTyVD3sGFP",
  "key14": "sLZrHYxBANiniK5rWoF9LfTSNFhp1dU6pCQa2nqLqdF4o3MMrpzkG2faQVh3jSw9bEDP6TJeqZS3UBDET3i4YXg",
  "key15": "2TV6Wm1CeKVkr4Hrzbx91fckSd7FNiJLUYzeXkXuzmM4n4cuV86mwozfjqBrSTJnZUzSoUfhPqNC4nvNCWcbE2BC",
  "key16": "5A49EF7PSkEkSMaEDCnH5cR38rBn8nAbSvB4Yy3z6pc9TvXyrk4LRygEavMV1kzdrFerCwyyx1CRybjAxQye2rEf",
  "key17": "34HzFzvyV16Hf9DgAE2XkCUZ3WruoYaPugBBU1p5bgZKE6ddqisD4kqtZwR4csfShvFF5bJTAVUsa1AHSp73cgEB",
  "key18": "2SF3MrzoHiyeoepxXvkSpuzbXjmtWwGHdo4CzJm8gBvDTk8pMt3T3Jd62ZBKAv6uoXGV2FafaF46jSHqTXTvWwEa",
  "key19": "uzd3D6U2U5MZ3FCm9JBXJpvona6iijSuEEDzKCsixmoJn2CjFzyCMD9wE5FtXu279tyLG9v3VAk5AkbJCk1b4Jh",
  "key20": "2xuGU5rTR2ceWgnvBpqgz7t4oeWfRK2vUeFrBq6Dc3wn6YFxTL4FV8SsKm85uw7FZrcrTy5Q8N2fnYfkTYBQ4kMh",
  "key21": "5vcPVzb8Xry4CPC5WBtWC9amCbqpj4YkShLBjh5ZnZvq8FQqnTn7YRGPerKDMZEEz6NAJVJK9Wr77ep5yH98h4i9",
  "key22": "CVd9YAUtxyprTE2QT8jjV55neag7CXPhNfskKr381zhN2gr5tKEmYRzYA52VSEUZkQa9K8m8VsXprAoUfCuxoM6",
  "key23": "2c9Y3KkXyg9PqevVaxnYfRUdN83LKiMtpLxZevqb9Vxrsm1gUXeJjnRVbRhZRubHpCsr6jPmPRUYs2HNy6v5zeiJ",
  "key24": "4onfJXy6weTZny64Et8vWebKxosnLLouhqekVC8Wm9EqGPhG3iXXWaRReiakRVwJDe1uQzZ1dcHF9ETVCpFKsKHM"
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
