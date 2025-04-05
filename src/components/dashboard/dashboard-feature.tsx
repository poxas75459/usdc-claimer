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
    "4K1X9WXW4BKrtiRp3Uu6oZjAXicmNbKWB3HVbjRP8VJn5Q4tuSPYHpnvTbKjcddcorr89dsjjW3EcJ9kouycvaXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55hUQn4bynPD1hnVPsinvk2osbGbAy3MJnm2EYuzS45TqtsftRHy2TGygiT9gm68DQLLnLZ6YcHjAg9YDanobKEq",
  "key1": "3at4CEBNAkpenup5Qqum5CQzpZV6epAnz2eDvib8dFm4TFnxFC9SNXCrSCs7oAQQXPmjAMAAJvwvHpTJvwF8tjoQ",
  "key2": "4PgnKDRW3GBSYFEzEdDxNrkWw1eyrC8JuvNYsfC282vXoegDd5Y3kt4bnTVqsaeLFEdFWt3hReXmKJY27rB9RqKG",
  "key3": "csFVY7k6jN24M7zmjPhHH9YFagqg5cMYhctERBePL5BZ5XLzv8hTiP6wonCmhC14yMtgrNnTTf6XGnHuiuGXswp",
  "key4": "5xer9GJhSRrzUQ3VzpTByTYZ3DvxpqCuT4D6C7yu4Wi3FgsM4gXTmomtgR8kUxCg9ujDGBQbef8S5XudAo22hL1x",
  "key5": "5DUjCeqxxhgWg5WxPTrfQRJe5tDHdRYbneuCg55XKEXk3ApQktbdJsWqGCpPyD5S76Q7yNsohLfr51yTF5mAAsmp",
  "key6": "Eb5osYDDrh8RPcP7tHpsn3gLuComef4Ye4qLS6yefZjBon4KatPLVzMWQieBKcrLBTajVWwwmTQvMThDrqZUfn4",
  "key7": "fGguGgn1mDsBhTFsDrRQmYfyFSffkQcWBXsqUYuutdHnwfK34X6REf9fNWBuauZygLdgF4HuaK23RAtKVqseLML",
  "key8": "2Jby8ErAqiNJqBMssS8VvLrUspjqSpi59QupTFNbbzjxQSUwmP93CAMqG5QNAsrCzDFR5vbxEdeoWtmcYBLAfojp",
  "key9": "3BPTUkCRjv3MxpBi9DaxbX4SpxbZq17KrbYbMc9qTvdS7YLMgdk8qaZLbXTZTG5hgUjxBxy3kUV7m47B245W2BmQ",
  "key10": "532xWpLTfhptVCJSWzy8oRpAPUx9SMfo9nuNdYHFdGvuSBkmyG1MuL2giPpKLjnc1wZ3e8UQcSukg1kMGKQ2PrFH",
  "key11": "4xVE9EydMfe14DMnHUwhUXz7QADjv8CC3U94b7wz68kf2z2fg9jADo4U4GWnHKHQP7ChvxKm5m8ez7yyVGJwarWQ",
  "key12": "3hDpUj1pCFagab6fbwJsJUgv9HYs83TWCfHpmhgpzDYXTHmcxBoqqccxghwW3Q5YA7mRiCPYejCKZown2QzzJGW8",
  "key13": "2TwzK5v9JimGxwYcJtcuuHcBRhmPR4BPmJEzeC4sG99ALFHEvzjJf45K8466UX6jLPQpKVtJhPk4Cm5Y9nQCdTy5",
  "key14": "JnjN8PxdZUBknDu3k3KyhjynCRUcXL9185ReZauE64fg2iKSuGnxiyfyPWtDM2AEjaPcL31kKhf4NfEkrJeXwzy",
  "key15": "39v5Ces5KNCQZiJFQFVw4VyxVc3aeDNpGAU1AfEgMnatkatpycrpoUfQyAPQsF9UKNRrt7rNuaNu8EZfwVkrFNPy",
  "key16": "4DV4gmbCzx3ywdyjwjwxXfNjdDnACXV2MS6GdzkynzE4uFyiZqFUwZkDR4u5r83TRyZJ4d3QgUCqiDHegCXa7ytr",
  "key17": "2j1rsr5wGJyE3gkA3JfjeEP6c1eSGcPv3jX67tZLWw8cozjWKXnzrN5kd9vrrcnDqKQemosNAaTb51Qzv7RLiFhP",
  "key18": "Fa3JLuxBW5vx1RHksgD8CwYmbuuciqU9ifsAZqEqgvAYvEvhFBYRM4vAYwTE1vbwrXCRxYNJ8fU73vzfEfHmUAR",
  "key19": "2QvWnTuGCYZuiVPyyvWMy4HMRn1ZiyKegPV9c4Frxi6D1pPuSYfz4wW3wcK7ongD1BKpLtLJmuT5Up2Fsa6DdJua",
  "key20": "667CGf2f3WXc1sgFkCCQ1hWp8Du7iqi2DZcMX4KJ3n8aoBAErEMdYkvfeN3d6jxQ6k2Z21S9Cv8zJxNGhwSs5oPd",
  "key21": "2CYoYSZGofi9Vi3xvJJZsK7ts6xAoSNZpz7vPVpiuzmJML8Ai55peXo3dTL1TuKFwURt6dabyeMy8gw9CukZXaAf",
  "key22": "QrfwEzYUeBxATTJUEZuiXjnQ8tGUgS8NvuPSWXr7sXhxeWkduYgg3XSgpkA5tXRAS3z3sxmQx8Px2vrcR3f5xJQ",
  "key23": "61iaBuhYiKwdR18seHcL8SHSjtgrshKNoSYedUUHFR8V7ZWekHYqq4azamAuUjj3iBozZi1QAFhcXtZhw6DFng5N",
  "key24": "5U5vHyneLVqRv94vFzt3dZE8kY18PkdijLkWkZtEHk6gPwGf4QH5XC7HARThRHrtnBk6jxUdxhXf2iHJt8BfDA4t",
  "key25": "3zYbsfbZxBvR5K3Ss7kcfJdfMtoNPoYKqGwASwHo5XbL7obVvN86mdJPTGzDZ5bLsrT5TSPoh2azC7HZynnUUZS1",
  "key26": "59t8apmuKEtTht19WtShqancDKQZeUS3kWNcb67qcZrRnriGfNipJKpUKbMouRVNUVwhnxYtTJtnteKtpYE3SgW4",
  "key27": "R7T25Rv6CttYL4oSsrFBhjNUMncKzCrJ6prQcjSsR3owzEjWTi2rFCR65H7vjxQq6qK4JAYamrYQFraCj28Vf9i",
  "key28": "4uGWdyF36srQrqKVSaF6w55DG7KG6zpWpzV1KydQXKtqpNL7kxTqPHa3Uzy6HmawyUXVqMWuDQqkSZLJDgPxfnAF",
  "key29": "5dsU5rFpX6aMRFuXaTjYTr31BLRJQZboxtZUSDEwQZeKsbkjT8c23gK1MWTKjUvh9HLMBGP8D5yaF6nyv1oRxQvL",
  "key30": "3DjzF5C17QLs17urU4eazgduXs451ShtiFq59ygFRca1gqaPvpuGJiBjiqwuKnZECUTM2hxBugnmj5Kjh8zQCtwn",
  "key31": "3GX6epE7WXZtmYxQGrpkPDZKiQE8nBmdzykjZCW9cprsXZxB269Fssupm4gEeG9PkpDBkSDuEF8FX8LqkyM99V3X",
  "key32": "2wafWcxDr6o4AK3HUs2LRSi3k2SBR6Df9XTmFh3fk9FC4vsmn5cmMDjpsbi7PxAWunyUTaJtubAKe5J3zoyQ2XFq",
  "key33": "5yQEHCUiE61uqmA5mCCosTvmzRj2q2gYPC7xoLRat8dxfDDuM37XLjgRmkibQCLMi5rPnqduAmxbKECZAqoMew21",
  "key34": "vfKTeWsx1jG42e1PGkuUvxod3xdYXa8iNjiNzcDFx2Zi2StwhE3vNVsdUYf8Ca4GLv9M1WqZ6uPLYTtfCEyUDVL",
  "key35": "5j7phpnMr8BNoRLLMcyPwE2GLzqxPbDj3DFwZtqZ3ZnppVm3QLCLxA8sHYYoWgHcWgtygsY5g3eyPC56GneMybGz",
  "key36": "3m8J71aSQYWXF8ivSMUcWWkUXP7nAaMAoep8EKXGuRni8V6HNZ3Mjfj72ymHTBJG6gBESssUwDqjB6U6Vu3dq2vs",
  "key37": "1cBvCReDr2yrpfC8AY4G4jWU6AsDXQS8NXPgq2UQLm29vTNCRZkjC5fPBcND9Yj5uuKg4CuiUsGuLAgNtCS1m53",
  "key38": "2aFkcfnUD3j51z2zjRLK5Jj3iskRrrYYBQxoVTZJcNNYEG3TnDH2EENPYibPo5EiGo1v8wvgzHd7HHrzGooo1nY1",
  "key39": "KJAe7yu9s3LBAdKSqE8PGeRDKH7VJynU8bXdk5ZeCgWrzWXEgD1EVLgiMZBNqvaAL6jVFGDwNnU1sYUAmvphy37",
  "key40": "3BkFkgjqrV8QCKxhQSv6iGZfUXmFNTQsPqGdS8NdTRp62JRFi6rP1UZYS2pjyHESJ12k2a1tfyN1gxPe6PtY6BoT",
  "key41": "34fXLvepd5rRASmAP9Kvso1NGjrYzrA2AqcMiH37JWfWTTfLXiUWo4HN7G287GTpLpVnLMcDqn9aW2dcC3FpNjBd",
  "key42": "5ZLhj6pUYBVKTccDkJwrCKBxDzGrd3TMBwCG5zd28DroDuVBni8AEumBzqAnUQbUCK6WiU9CQi5yzcMjr5YLVuyP",
  "key43": "5B8avuVys6YkFbekUMyfLHi8krHMAfoaMZuEFzkHE6uTaWjMZqBXRHaR7SqDvt9FMe9Vi6JR5L5xvwPU6Po94JJq"
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
