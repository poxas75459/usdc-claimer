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
    "SvPxDZSz8jb5urcaBR4KCaukmmqPZEj1RyWBunKBrvq6CqJHtiejCCRLWSi6qJJWgjv1Gd6aez9zYxXPQQBa7UE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ZqWyoC7WFn1L1YFXm5ukxJbNdmULhoEMDSxzCGUnzR2TrarowYXVraoUPwbwBQWnRKzF66whHAtp5VWCVkFkzT",
  "key1": "48Rt4D78j6W4Vvww45uMR4NAoJhFKXZMveARZFUe5e3MYxk4cX5XuJ7QHaNMWjRn5EgqZyR1yK9zhCuUcj1rwitV",
  "key2": "5yiSiT15iAZ4BttLoe3DpJjjXDJnF212bbPUhFKGLAyBkwTK8uEjfKMm3YNbkiP4iPk7oBUyDLxjBAUVZzcXPSVm",
  "key3": "4Y7BAYsstWDi5Dx4SASNtTwHEAGFUqinh3Z7eNTu2Qpu2zq1hLtZmdJoHdbgxxQk9t1LRtLLqMEwvutdh85tsVAo",
  "key4": "DKZ22dawY4zsNjmMk5qV5Lym6apo2MvLJhd9qQRZaY7nRPjbepxoaLFeLXcW8EfxGwKzi3t3UzwBgs2bDfRNB1Q",
  "key5": "fqdZPV38r2GqvocAzp6gzwRV5hGZPuTRUFYsNqnE3UQe5JTMVnGwZCq3FwuYoNzEDVaYxm6zHTb1S1bhEvKth9r",
  "key6": "3BicwWc9F9DhDjJgT95o3zE23jhSVQ6jUVkXrugrbaQfbeEzdgiyzy8yMRuuG1DF5213zdEeoHH7pwFa1XnB5C1i",
  "key7": "3Ty79Myxc1CTdQHu1uUoYPLcMEbx5KWUvyJxiVERufYBW16ZwUQycTZFYY5QfhdiA2uf8BogAm6sToW9iXRNLk2c",
  "key8": "7wQEyN2CAt2ghF8mXC9WgWw5TBcgx1yabJmfbxvt93rHJRLMzy39fryotuxZFWki7RsetbqzCyFrETzSnx9PXZi",
  "key9": "3NYvxW8UDJkfKXpZDAjY3W9byNqQTziQ7PuEdgvZ7WWuy7Za5LwwLVUEa4FLndUjpst4JBZjtUTdHn1hFyo7poyQ",
  "key10": "n9Fx8e6G83Xk1MWuUPm3q33ZZUupowPva73kYTnkcUz7aYpxtCRTNtZd8QH55LhN9zxvP8qS4HuZ4tqKwCucZXW",
  "key11": "3qtTV2TwiMD49mZ1ontiT6f3AgQudedirsqAcFNyieocGQWuqQrXWDuuwFvx4pGfumBTe5fixJ1P4QU8hG2FwTin",
  "key12": "2xuFTu5onm7SFeRDc7epXZTSViz8efSEmqa8iPZD1ANrEnYfaygDB3Tkpr1sWwAHFQDFTnoQk7t53JsiTEU4iwSM",
  "key13": "44b251F9iLGUKm883XQn3sd55JhYPJ5w2tbCgwaxQ7VJzFTh9HbaXkVj5BbgAXS84zipJiZjJLUDFwcjnw1EU8nv",
  "key14": "Ft7v2EzkQsmRnsMi9ATEh7j8weYYbkQqgFrsGuGZ6PXyBMQ2apH3m9RT5ZCSbhFqqSMnRoZ4dEAc9eAd7TuXjja",
  "key15": "nkLV5ya8N5jC4m4qqdLiri8Qhmt7wS8SWNLirAGgbTjho7U2deciTKZG35roQdxRjxLhgJVHJwrPzHfxd2Xmp32",
  "key16": "4VaNazuLdoGsGjCf3ozLRAAncFA7SQso79SUgL5WwJMsiF7HApftGWY6KVgvY73wdEzwpNRdaEieVat4zwVRViSn",
  "key17": "3Tm7bwT86kPjWXsTxryQ1novk8CyutY6w1gH4jH5ac9VJX5DeGjyGjVnpQS9oeYLmRMWJzm5ZHvJKsje31rcpCBn",
  "key18": "twdZD4Uryd3x6X8Gm1ceYrgubzyrZxJg5Xk1u1PqPjzaZJasTCYUkG53KGoTmfUCf3BZRyQBEk3GaL1pFZdtqjs",
  "key19": "4SCYhtH9ZUopEBahuY4B6ofjyngSPvz4PDPNoVMwi6WEtSsJjL8uaZe7hbCgygVEZsNNmJ8PvRAfW1jPhYWhEyN1",
  "key20": "3rpKQEbPpUQEBNbDPe8UiHhLTZJ1og7Z9WTxEE8wrjdagev5dkbkZURrUkKW1AFQY4tjKAvUkJh8aKczuKCnESuz",
  "key21": "34CReGUiT5NQvvuzAdfuykQWRW2qgTMkGfMQ8tunYiR6oSQaFqSkjtsGqRNYCoFv1qRcLkk68h4mmbcd69P3BXWX",
  "key22": "3utdisQrEELcQiiAjipA21HxrSCKqzR7djhdwyzq2K1VU7tWAuGmpcQkBfC4fPgnwvXjA4rtrPemaHutuHjzJk7b",
  "key23": "54DN8MswuHcUxr3MsazvnKCWbYNTN3xtPfJdtGcZXeCEfk5zX7PwkFxirGWcPAJCPHQMadANePKx1WLKHXr7Qcik",
  "key24": "5m9Dq5vkZ6VKgWL839CSjR4FvRFGS2DKp9yZnH3KQzph8MVnteiG5ELNyojikzT12Na3F1xthGVLyfFcUusaxMso",
  "key25": "22x8DtRrcp4ysQuCJV9f4dg9YjxXshXVv1j5deQPENUXWF6fSPNTBjZEzjcemgFnYNMBsiHDWqtJNyyoTzpVxecN",
  "key26": "3abHdXW1pxJ598AgGEBUZ8FUkRkgsfBHPj7zs7BXi84KqJsLeg5ysyzRtAcctkjJeayr8znP1xDLD1adLhqmyrCe",
  "key27": "2Ai2uvhiybkLV8i6aA9MAdTLbYCVVmK4USGMFXb5Eh2zctpir4sccsPN2TJRNx5amAgR4RAR7T5oWZ2NKBUKJx7j",
  "key28": "38aXM4hnFFwjjYVdZk917SWJUp8YFQwYnJUiFFrXVH1ueuNqgSzAvdu9cFfMSq5Wbe5FQXxXe5gfzgkVobBww27F",
  "key29": "2xckYNfqERJKFx4YzzkBmhpS6vus7qMkwYDPqViqPVv7PdGMjAu2cwrte94uozs1kVQpzTU3UaUxqLQcayLYvt9q",
  "key30": "5ShF6ZCP732fk3oRXrQ9sQykMesrFAKMaut2LzGpRBf2x5jFQsU52uk8tZXxVSHNKFwDipcTrvaHYVhqLNVgTuL5",
  "key31": "35SksLPfc2S7UBWEDC5nDragx4nm2z7N8ohZVtTQcy3Y6ozkBsB3DixFhCUnmizApBYi3U2cdqUEjVpHbEizzoFk",
  "key32": "2QvV4xoPo9XzzDtvchCME7btoqrEwXnQWNtBCQF1Z5pqb954pke7Mu2229ZfT6hNgG245cn1zfZLwJ53wer7i8zX",
  "key33": "TcRnzEjpGNsw1HSxErQ54DFJS4kJFvn2ohGdpZoVAvbhiPeZShuVfj4RxznM4FmQBD5teWgBxNYgQzcs6pbZxsf",
  "key34": "5e8Ne1vuVhjKb3N21xcwJuFnHuCbgH6fuUBtRbFRPJDxN1dF9PX9BjVTSKTL7gQt6XL66Ppg2SfFwYZcz5pQqWdm",
  "key35": "4wPRbA41GHi8TftG8hz6Z6c7URbhPvSkqPhaS773MAQDgXs6DsUK5ecfVW4szoYAmVGX23Yuk9WhDAuhKnyFDr1x",
  "key36": "48tc9Bu1eJWbVBwznW1KfzSjQZNNWqAjWbWg7qVZDcUM5JXN1jvKfQZWKg2La3wWtvNc1hQJmQWrMjp2BAUhLaLH",
  "key37": "5YRSDPfci9HxxjedVs66mMW5XZ2KzpjsF9jJ9sQKg78nYozTaVDnqqQQMQ1Tks1cWbhAzrpcStc3ejDXr9HAzz6w",
  "key38": "ou2XCcBRnDP6f5SCohf75JHXKb2GMMFDaUNf4oNGkT274ESZ9BhJWCQhAMUFUhq9s3GzvvkuBSqpdmzMF7QgJUx",
  "key39": "2cTgg5TZpGvzFAaEB1qqTu9jurEbKMfSDXSgoKz5fXUoNTqfpt3FA65vw3MhAnhSVs64ZjZepxWwcaR3jzyanLJs"
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
