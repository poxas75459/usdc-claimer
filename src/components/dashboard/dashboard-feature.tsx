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
    "3g3LPYe2yazH9GGRv5DhWcgaMRDq3dq8MUd7wZSymFwBHurSMFoSedor9b1N1Vw9xiNBgzavuZhCfPeFSHsVCqzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QUD8eyHYhs1vqeJYp16mZyEjiRkRyfxDNgWM2ndcpsYuMspuhrw969J1jfJpKJeu9iEhc9tHbEKs3Dzn5d84HP4",
  "key1": "5DmvxXBNgeDzihTjdqwL7LzwaW3icYfEfAhCCgiyVUJzK5ikbZKCUzC9YhfWSoAcodbEnxYuEN4HmhHUmP8Py7Zf",
  "key2": "fMkPJxVP5NF6fUkxWzutbVFDmZDLwUzgxeAbyQTL8LSXGKfoeyoXSPbbHwSHzyFWWGCejtXvpyNZ1FHY5ZNdecF",
  "key3": "2xwFxM2Ajkm4hk8xLdo2sJCFq7qaKKotXVUekdEcL79Xbb7u41cJ1qtoahtpcYKY2rKgoSkdcozKRG9GcB8xMnvJ",
  "key4": "4m18NMqspTj6vpervqufnv8Kxh9CWJhbjigKmjb7v6mrrTmHAtHrnfQ91QzZWnuheqNwzWZ4umuXBuiQoLXwzjZi",
  "key5": "4ncvBQtX5hrwMrUgGSfUXcecZC8YFnUMSTabQHW32ydSRK7xN3GjNGsbZPvKzWFctsFqaSZRUf7516K3FFfvQk6U",
  "key6": "3egzuPgE4AT3ssLx1rinbgAkfbzBVCTvcDHrAK9BN6iMhdo9cA3Fu6zpyMznsVKoQNerzrRNQrUXYMwWVAggAPfh",
  "key7": "4nQtS3VtgWB3SMgoXZXwL6Jxo8H3DjSL52SfVZaWi7jnXr7fpfeS6T3VqQwPpwCdB3LgDh54YYFaVCS6kGt61uKW",
  "key8": "5jcWYaYxLGsUG8uNMGBmqBHCAE1ccMD4ZAGR1uG9XXHSyEEebCsPM53ba5n8YPUuC3Lb7fJGNFpunW6PdHNWgvJt",
  "key9": "us7fjNkALirsj13dxvUFiSjADFaPZAki5S2V2PWdiXBtk7gwPsmCoBjcfj3KS12nuLtxCbhmpZ4gYTy59g9QKb7",
  "key10": "47tNJ96N7Q1RdYQb3JkAuZ64WkKpoNQXV4GYe1qAp3JmPbfeP4KwFJmEe5vEMbZgCyxcmZFsuiWKjZfc5WEaNKyC",
  "key11": "k1Xx8Ax9FZLSAM1FrVG6RckakiG5oDh8Y47wB8YimTf4kcNCeafHB1kXYoiXbchwwjvUs1oJiEnZ32EZ3qt135g",
  "key12": "4tXJpoZbcA4KwMGEsWfEWgxC3JMAddk122n8cWRGeVnZYJfzA3C22R7GdWjC4RPTUjNfhUXeHXiMeXS7r8mvJrp7",
  "key13": "NW8gL8BrwBM8nXQmqHcCr6znB6gf72hJrYoXNBAeZpJJq57RBLCNCM57rbGZjR6rSv7nnyKixhof6xwRwR4nFV3",
  "key14": "3iG3kHei6qPQ2CjtFTTNEjHm8DtyuMhbY5PFaA3YpSLLHCwEvkf4tGSw8SBN4JRHUpToiXvNMhQ4FmLjpUqFvZA8",
  "key15": "39Xkq3yeAmhjE9TTDgDnwvZADFbMSf1JQFmaWRD237DuDDHqcDCN2b4SF9RdcG343apCqJbf7XdHcYMEkhq5EFQW",
  "key16": "zvezqmWgXMZCNQXZTM4ozN5FMQGApjBJ1KEB6WcqeQyCAQv62GazoK6NoBa33LbLK7qQJJxdc3xtxatQhapQmB9",
  "key17": "5ML6GToWSJmeUm8sttk1zi6pqwqmCiuUyx2qngVxSXEUzX8HXrfJmkfEMc4mccwtZ158yzP9d5PqE4RGaCsCgYLi",
  "key18": "5VKien4p5QVRiVVtwarWxemFZr5vD58wb3mbapZ15woHCuMRZMAJnVQdr42hvtko2qonj33eN99vYZCBhsnDpxUR",
  "key19": "55Pu2u1i2hfa7bDs1J7K6FfiMjxupCwFXyRhY6nnH7tzdfYeP8VxRmEgjEhiPH69vH8T7ZB1QiG9M7HxYvRjPYPa",
  "key20": "4eSZjgoe8SGBQ1XHVojhWQPyyGeZRRBNtLxN2c6tpuZBKQex5uEu26WwGwsW9FF1AzdB2g2XgfZR399XZWkE7P5M",
  "key21": "21cSo9UQcuyyFyCViFdytvzRj83QW2TUvuJ5wuMKSKS2jM6JoaWfM1x83quph9Q45pHhGJFFAJpe9KMtFiTQHm3G",
  "key22": "41YDqqx1JKCenov6FHbeQwwHN9E1tdSVMAFsMAiGWSbLuiL7mgdJqtGGzBmBag4AwxVPqqgnHfe5CAvYFdLxYaWD",
  "key23": "fU8fFGNQSLhzVcLTYvhkfPjFsHvWLcvrT7UfnX2Xf8jD89mGteeeCjTJ5YbdJCgHjBUs4YG5Nx2edLkrisuTYcM",
  "key24": "5W1ddpWKdFjitrfvAAAayQQ6qWvsQ5hcF2xnPgyx1VZUMCuDjAtGuycDEcgtjzvVa9TNkF9xu8Ba5ez2WssVoM3d",
  "key25": "5yVqTVEzrP92SwQpWG2hV9j482PU75bfLhpGvxLpHwSSi5Br9VGxDiKpmfXtDMVa5LeBPmUDUT8UcbbdNEmMT4tn",
  "key26": "2NFg5iPUGUNHXfbmjvLgjQ1mgoWfrnqBzNVPvnno5UhjnUU3orbkFxhRzM3N8SEagWWYr1AYcxk4DDGghqnvn7o4",
  "key27": "Tgivu8w1zk3wkiAncee6CeNP9qZrAzzGYkzgH7jYE6nXgBD5yRHbpaRqQJHhRrBjsRyeUGQHPcV1JaiXq2hNqdR",
  "key28": "2DE5LjBvP3wftr9Q4PUYMbpqwWLTFKxiMk6z3mHJB3BCK2idsmBjhyuxHwBU8x1c7nR4fjXYn9QhqoQUUPZurdQj",
  "key29": "4utpA7sjKzYLENWtTYX1PaBDtXNCWw13DxHCPpYa3YwVn1gXcx6ptsL7nnB7xcEcm9LXFyzXyxcDK8tXjQKfTfSp",
  "key30": "5GDRrrXPVDWoTrF5pc56BXMsBUnwJCv9mRHQVzwBoRcbTgYx1GsCMutk2A2hQtkotWaEwULQUJbVQrjEwa5qeZ45"
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
