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
    "5N2R6N3MMaAuhJ6MwEVd4ggeUie8dgrgiUDLjT5AA95rDK6wZZMCKC5jopRWbRd2RujgARSsohGJk8FR5bQmPz2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wRyYa5swSvwaX8qtZLGn8jFPD1ZoQiqcAmL7ka7QmL5nFWwqCvHPpgGWXcZLE2Bev8uM7tUN6zT6K9YL1kz2aTj",
  "key1": "2gBGqoJQ9JKWt5rQpRWo2oJATqYhPSqd2ARyUhu8iAUPrnJJzyYW43XekYQDsnQPvw4WSbKgwgFSHnTR1mmwa6j2",
  "key2": "3mFPB7HS3B3YqJeNvwg9Xvwcf9HjMHViS9Qf4ktWbjHjLof47uecmL9MAz6KWjFywah2tSv4AXLKGAUHKGWAzHES",
  "key3": "4W1vijk7GgrvJJCZAaKxLdBYdLGbJLDhz1hLDs2dseg33JfsNN3hG8ghzvZXLotBq7LumVqZUJZ3vUKxtREWfSrq",
  "key4": "CFfegcCNLWjCqFf5DQXx2EX3BNuRpzrGhVtR8ySyFnEQ8K2V4vvYPd38jzURzsgdQ5ovDgHtrWZjwTQ1Utgj4e9",
  "key5": "5KkiGSbo5jnon5FTWwbLLCkjV4q5qi9ELNMK3a6H7JtVZKKJCCbRj6z1NhjZqTyutv6ZDAm3nPVrehoEPRUCxcJK",
  "key6": "5n4sftMhnTAiZ9dSjvqZmPbcJJCcThHAEKE4QTqXMzJPCg7jJXLeuYZ7GkyD8YuC3PmfRDdg8ur82BqVV6RcM3VJ",
  "key7": "4Xg8EXqHVZrNRqxPgrzneFgmEyULCuky3e6xEJzYVbtDm49eNVVLjjZJAWmN8ZfWf47sCMp9rYoA7fjz7e3fiJXX",
  "key8": "2S9swXRLYsvK3XL1EGGJBeL1ZxNBBJxrdmpkdzFBVDamGpH7xT1FRL3LJ7H3CCJhSgY7x8nQ2sqjfzEKwxJbcAyF",
  "key9": "3ScadVB6425cLSywtoUkjn7SQS5X5yMgdcsT3QEyHnr4wqK2v7hLiotow5RJPvThwacohw7wzkEeLXEx4Gp8Zx6a",
  "key10": "3zwJb1PuFTqxtQGgk6XtJkthsJHBppvr1bNuCo3qtAY84kFvLt9MxxR4VGEi3LKBF2gReMtqpQGRQRj3SixiQ6aa",
  "key11": "2NpJ2nrD4BY9t9iY5sej7qvkbZgxjxQPKQHB1t6Y1jA5RqNsuTqaimi26xfCbfJwRaVrXgPRi6jRT7KtvFkKPESh",
  "key12": "4Dp7i5SU8JnmBXhEaJEF5jWZv29a23mDit8RLfYjXPHTuufqJwUaSRoJv1VcrNr6DEapgyNuKTpDxuqbmSWkNSBB",
  "key13": "321Cvp6cLYL9xf6CRAWJmqnR5hTKNiJYnye94ycKPQ1vBqgHtXMGGfU2M3HYGmSWSV8NGEyXsd6TgvUU48YrCckb",
  "key14": "2TkScPw2WasWgJwCXfaJxxyDVkCfME6CPfhqVCaoQ7wAqij3y6DGCrtxN3Y1YSyRxTdUXqqLWBURQh7ds7Geyv1M",
  "key15": "JxwJe4ydqZgoCnCK8HenRbWoeERm3kHpmqmvtnW8iX6oQgGkvysY3xFziQfuEJDWByC7dTLQHt3fzt9iegJoqBr",
  "key16": "4oN2Ax4iDHMsABAZ8qGoVam42MWuVoAdcGEu4EY75rdAgJt3NZzEa2EEbRVTfkXDTUJyYfirYZwthQfGr46FhGST",
  "key17": "5XaJiDvHyBr8Yqdd7JcEHFvJYjcaxcZSu7k88hLJfJ4rY2RXVwF3j5jye3u2Lfb4eP1DhQp6Bh2VyuegJYDe2Quf",
  "key18": "2jQva1evEJPNyVsnv62XMaNHocF94T7pRgbVDjDEgM6VbejCyUW4TbnK2iMH94yK1eRGnp48UZQnoQCpLQRA73xy",
  "key19": "5JYq8E2vdtuwpWopbukFh2hkYeMTuHaD3PVLNusj6Nqx5y2BJufqcjcHBTUKFSn7c4dsk1vzDKCUoqbZ26B2oxXf",
  "key20": "3UiTo8kUUvhG2gXUBBhpS2ZFZkvzVdE8evFVBGawMWBrHf6DPJxXb6xyF9ietpW53jBGLDXoxgLuVdnSbmVpHTUW",
  "key21": "5r8Bqx1Ye2UXcLiXiJbTKhNepF7ZwTyHgDsqRNqUHYgjacEsz58VeZ9GfaGcEcnEV1WGb3iWZwRYCQ9yxd2qYubM",
  "key22": "4pxcwYQyAxQAgRraoLuULvG7s17Z1qjvGDAiwmyCKirCzuZSuosRsWSMQKMn4u9YCZTixv3neMnprxA3uHqQUro1",
  "key23": "4GT2Ue42N7Xh9CeyPL24H9H4tB4D4hdpgxngyPtDrhAvEg7TuajPQ2k4Cbu5VNBEvTff6Gi63goR3Zx7FPktpUQe",
  "key24": "5oLaUw9GkqVMaHmadsJuaQ6Zbp3tDTyaqRtM8ZPWvbydZbS5dBmaB2cg3pAE4Co8f46q7SiNTwLJG9t1Zdd6d37w",
  "key25": "3ujDgnCPKV9d2oReog7K5mJaTyuQioLy6qS6nGUARUaVgBE7BeCeNGLQQ9CNVkVo7HoutDHuQaZBhXWdDBH8sB3T",
  "key26": "2NjCPEMHY1N6DSt7kGdTu46Um6q6eaqujmBSXX57zN29NkMX61G4JCQWqt4sPuZ56jB9WW1KjtSq9k9vRdUGFJ5h",
  "key27": "5QFtavZKGQYESgvoMpq61j62VBFfDkDwqC6J1Swr1xcpxMFVBJA3BToMrj1Rf2NgqdHJxTLXLbLkZZtRetiBaJ9A",
  "key28": "DYrZc1dZpXnezdERvvV3uzQ5a4ehWZdM3zaX83UxqRNooNoPeWRn5nKPeVE6vZo7sAhjXKDwSizzDt7ZcEwYdF7",
  "key29": "3tCoahe2rDHPBNfq5GHPud68Tt3xedrSYxhsFEhbdJR7W9fAMqnHzDSuBMJeai99HZCfmDr7qgeZdWvftgLeYMiB",
  "key30": "35VGX3rMeJGHxr1CWVWpe4AZLLUN7wisSGh4X4ErTSSjthNnLgHtg1MzG9iUXpvwqqj2oenEeQiCzneDG2Ru9Bbh",
  "key31": "2NuUdHnm73a5CX4A1m81jePJLKqJbPznPkqYSrvpjq3td9Nq296aCwV8zQ68FPujKsf1kvTkrZ63s6UE7SpYd6Vy"
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
