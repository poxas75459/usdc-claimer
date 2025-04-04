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
    "wNfza7MPZ6QpZaPFGDMaFSbR2xpRfSVipVVBia3vM4UWHwRz66xQqwHhMwKF4bMWMKVtqZzALJkXzCMuTtL8kpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqVqKrdsdYpV8wyiB9BXJ1nxaCLcR6syzkwN6zE7sM5zCuRG7jVbJwWusmu8G98nD7ULgPrPdgkFoXBoJaVVr5J",
  "key1": "5qR8KyCdaE4o4z1iVsHFpbwY5ka5g9GVnNYLzpmLGFBaiJtghPvoq57YyeryDkmjY4g5ekncXQ4DpiSegFescMEP",
  "key2": "3dWVV5kyXrc4FP941LgWgKGjkCMmgruqqfLPrwio8WBBNQWLGDopw5QUTv6DZCHoiXc7VysPPqMK9MNPi4Qf8YCc",
  "key3": "3pSfXZRofyVzae7mQA6CLbMgXhDE1Za3Uy1mVFToL6WDfoPoeR9W9tgeNfdF9F6fJHHqtfGkXXEd7bWgneym7md2",
  "key4": "2Y7JLZvc86E92QcdiJ49ENiibCH59dFAvZg7EEdjvGq85iDDsuxwBmqzzdBYGhhYrHJMuN4scjYVbGWWro6x44Wi",
  "key5": "4NfrDubYfp3vWPcV4u2tVTpE6Ya1tnZ2Us8ddraQsWT26C7p1V1znUZgYN5FYeNrEhs55JNRvLvL4WMkkYbFCSZd",
  "key6": "2yHf4QMBWKZFsctXCx6SpNUBUPAFHfKXiUJyEcK7aVmyWWKuzpeaxz8n5hQsAGaArsckxBrA7hQPhH3sDVx7x48N",
  "key7": "57HxreedpwkNQDMHCZKmrGyx2zBs75s51v4nXK42m5a9nxanYaNB7QEksyekeMyPNyS3YgYuNn72dA8bkySKVYrb",
  "key8": "3yHSommt1a31Cd2nSVWxhSY7hRMa7fqL8aVMTd1otr2ze4LRFUZYL7s4TGzJxR1xCyQmN3eJDB1yaaR36tLJUQEy",
  "key9": "qVmZQ9XJPT72XUNY3g6AWLHMT1b1DqzdfX2CQ8RxgkrnamEUVZ3qYXyvq7FetX6VyWudDPHbbXEhgU8mgiVU2Tn",
  "key10": "3R983q4CqPYAjbRUGTwriRS5aTk2qe72iRqZLJrn12CCtU1cMqNgGu733MWy9Mz5q1eKHpjCyXgybMoVGeUxMcYp",
  "key11": "5CkfYtFgsbV8Z23GGG77QCaaW597vZ88qiLZGwoGrZKwzycs3yAARi5YoBvrstyT4d8hMCMvvi7Lv1qDrMrdksmG",
  "key12": "355QW8eQdC7JN6kNR7ru3BWHU9aBh7tXLmGFhqnLDL8WX65PfiiWJFqp1iDgDZJnBAuN7i9Nb7b5c8zVkM9H16ue",
  "key13": "2AH7MrdjSM93qEGaQXeR7yjTf8HZeb28DdouihMs7CdBRfMfWhFGKstXBAw1wBkakAYWgqz5BKXQ7QYSkCwLZqNF",
  "key14": "525P78VdPbvAyjrFbnFMCpufKf7Hg7DAuDhoCy5TGgP7SWyv4mQPQT1GQvVFmUKPigTbxoaFAP8c6diSLoJz7H2s",
  "key15": "KTmzXA7TUw9ciFxLvhg5NdztQFrUsaArXjGVperA8npZEBgpFa3qT9Hz1ZTBcW2znjmCoRLJMk6YZ3PV4YqoYet",
  "key16": "2FJR3C7K6zCQ6j3MEP66gjatD6yHpm712TRHK78iiRT7u91L3LT7Wwz83nFnzTe3tzgtGhU4Vg9Jv73SLDkwM1gT",
  "key17": "dn518P6Jx8F2HtrdJ8uZjG4mST3bqwyHf219ABPvnLijSVErzfyR4S32NYCF5crJc2127vx61rYzY4i5jUCaVRt",
  "key18": "3tEbLBBrYfUB9NDaMc7tQoAHjFRcq6PBDCPmVPcp9cJCsLbanDinrDTENKbYwyXh9LrwGNe2zdexiwnoJiMYsX7N",
  "key19": "2PBhAE9ahaKihBT32YjydoSNpKwPcHqi36qyUbaifcwz92nMjHYrALVjCdzUwnXZbVWceTPXeqsj2sankPdC6U9q",
  "key20": "3YMfX9fJRcU4n6zh3mjarMWYdkvXHGHxc2P7whsHYWfE46MMmqBDxJEBguaJYMjudEhFyoUz336t5ZhQeUgXBKMv",
  "key21": "2TVwDS3jgLiiepGts2Gt2uirqxBVomwFi7dMoPeWrE7JDi5g8yZfUXoBabgRPEfNkyFh4mDcYyCW5mx44K3xpNRk",
  "key22": "2nHxu6tiXn2GQxgAWYZS7tQKWVaiHjZMUeK3QMNtqGyymKmsU5W2u5tERZbKjcfBhv5sssNeaNfkWPvdWHbfy4PE",
  "key23": "4MZ2aVMn2tEBskasm17WCvt75aCMSffd3jyPk4bgGPVGK4Xh8stqZ4yNJfxsD8quPAZQZr2QxeSUpZR8szSrbsKF",
  "key24": "4xRa9NhqiMJ8YbeFgb6L2vqFkK5pXWXgxxkdW2xGGNimiPeHkE4JK34gsAuf2chvnyiLA5r2hAbSEH42nV5aPYHt",
  "key25": "3Hwpr1eaWA7aECWYD8yzh5kdbQt9hLM7FqrjwEbLHoXchWCcgJjVRE35V6kNJvQU9YR47111zMPA5Yp9MVs8Ri4F",
  "key26": "5sJY1demEXSPsYvq6FJdKnKwhp9XaPGRrLvbFuNo1TpK1EGjysBvMVRmYfGVVCPWjyVCfeRWxdFQtRQqamB1X3Uh",
  "key27": "oAXpmUugxf9Se9J7f3coj7f3reaZRaj6nTqyRTJUn6XRQA9egL7tQicvKdNtAtvs94nVbk9ErFBkQYRPevKp8eG",
  "key28": "4DXCmvSke67KLeuBKrGNvpfaN34m8Z1bWzgVEUCkyf29ZWmpkzfUtN47nobVKYSm9LsfnupxEDBcvFRdTeHwLiCn",
  "key29": "5eyFKTPMuHLatcXhZGwim3VDE17Liese6NqjuazAjJfXE2wL9c2RjxqWFfe6R7MafjrDUUJ8jF1kN4VZziUjCEw7"
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
