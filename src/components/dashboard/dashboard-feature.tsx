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
    "5Z3Qd2hJTE39qboLom6pwcC4jqcoRCsyCvP9Ktk4fXfakXSbkP3Xpp1ACcrVQiw62HshXbwE16uAEQ3PTfPKPi1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mym319rxd7T9yyduytfFbknCjmoZtBCMxmYiYBqJ5mhWyCykf7Eok9VYKk9QKjTRnLzCVv6STUD2VZRmUsUjXtb",
  "key1": "3XX1jiUUXYBKTZURGDFztJyte65V4oBSkLiSzz811jwhmwMGag9GBJqB1N8kyBvnmrRiXefTFYQxF6M1moZBuy8t",
  "key2": "HhABTCBZEk9TwyB4euSXZw2cWhFdXLyucWPbKvzp7vak71XQVAodToWeqjrSK4yteYAsQzZxdDhewdY9XWLucjX",
  "key3": "VsKdgTPcmYFEqLMaKt6wur8nhSbtzmhvgDhKT8G3Xwr3ywN9h9UU1N8FuyxZVmxbLKtHxW16vDy7dymzVH5wcfa",
  "key4": "5kCUB39SKWnV2843bFxYQ2byH8mySfM23S7dNooupyCgcoYjZ4BHeTG6DibPLDEmYmVpdWmgFkTdgiQ3nDMTBf9t",
  "key5": "54VtSprEWwJiweEAaZbrT2nTR4iPq8jMZ9CcFaZe56EPBq87KHp9kZp7jCVULD2RgAhuEgipbD5pGnpZu7pF8Ug8",
  "key6": "2BcM1H9e2BJrLf7G32tBtpq3SEUA8UkxvsA18oRdSuLLk63cxF8LFuL2X6vWPmx6y6kaXWwXwqCeozjuboqf1XN3",
  "key7": "37w6vzPUQHfEqqHKM6s6FgaiaWjLkVG58kPd381cJoreiCMeb4ccDDD3sCjfMhWrX2V9k48FMENM4gGEndnocD87",
  "key8": "5STFS66zqzszeGAzoceSPjrtkktctnGTUAuhv8s5pAacSsHai1AeqYTDyWckhtSSCXDAtGJPEEzbsREif4LXhqbX",
  "key9": "2mWaquDthHUVshmtz3b153dHaXFC9SAfhxJVRL7GsnHSmbiM4ec9U1q3MdPydDca4vxUay2uyZcDPLEgTVbSyaRH",
  "key10": "4RikNgYXbDSjYS3PKk7SNeJT1GUxfSJteqCDcNVwE74g8QFUEHtt3wqMzCPxaKho4gFLh8VZR1shfvmNJFChiPTS",
  "key11": "3pENShJBAQ7hdQ9UV3JaZbWhNNM1jzhdJEJqafMN7eiZa66imMHViqRYYsNZSFg2jtjXRBnx9XETUqSk1Vsqq2jF",
  "key12": "63UKczmvQgcZ9iVG2tkK1mQDxJ1jxHgqjCVz6CE7CzoGk54CnW3myLTamhKakKyiShQUKZP2xKuqiPdN3armkuMh",
  "key13": "3RAkDe8QBgwJEUW4DKxr22K8xtrWj9SkEUs6Qic1c5x86MTqYr77CcCHYwFxRZyDi3SX4DVd8Ts6fNbkvcXtK9aJ",
  "key14": "NVraSaFKJ3kmV8cSxQEPZyxPKmBYtwwyxWQzW12Ef6JKwapSQG3USXkYiWupsbkabBsjSHpu6vp2ZmnMsGYkAaU",
  "key15": "26aeHmKCjyuNcL3orWjf77Brj3jVAdmYG25ijgtXqEYRuPfERNbNRQnmMC88WDJXLxw1r1YP8VCCExy5zHJzb2uv",
  "key16": "5t7mvbaS3dk1dUatGoad1H8fUt8Yi5PAPuLKGLWa2axCjp9aPSSe3rh7YHPeTMNT1ezBBwwVRviZUNGn51WpGGca",
  "key17": "4M64aSgZtK7edvh4DeA6asBhK1VWhem7eA4LakxtKE9Bc7hdxLxCUD92fTo8MDYGQgFnfDEd3wDxuvTk6ioSRTGh",
  "key18": "2bp8syuyQQXwDjNcH7f5VXCQaDyFgx6eFXH1v3tqasgWmmcr3yobFRYxnUFRf9GpfNRL4iRnFqRuWDrQCFY5xEMc",
  "key19": "2PTWdMYmv3droN6ttmXRg7DV2QopTXAttAFiqHzNNTSb6g5DdZyr48iJmzwaiF1r9b63VvzcRfoNnWMNh7YJsUGG",
  "key20": "3KvDuFCsXiu6SGPeS1z5LSRfiw3XxTNNxXFwEyNW33C95kRSZvq51qPVCuggR6j5RuEsf7fazRQFRR9xQJjdZfQM",
  "key21": "5YBXKZrLatYnfRMsKsaYDhRrhbYHVcehECgC3ULDYFmK8RYxib4gmcDJK2u8DeHPf26g7b5T9JPmEdm7J8XAzhx9",
  "key22": "2eMrX5wTB77hsKttY1avVpsftz17p1Sw4GdYYY9Y62oPqZJZz4DM2YPS2S6FykWHocH4REZLWejFUuaoqJkSA1cd",
  "key23": "4qQZ7Tzpwx7iG9GXppdTMNcbN8uRuq5yEPF9iC1hixVdwmw3QJuhhs9MsF67VFEqhVHsHfWjizNrcenMoWd9VWw8",
  "key24": "256rgh41RLBPdN3GwRTP9x2SEgHtU8HGwFHYuKxP1Hq8c3LLAYzjnmaoZnN1ZoJaQrETgTno2jRJYQ31XQGHczmA",
  "key25": "3G7USy1anFsFWLhKBjHVukG2dhqzgT2dnKvzHwL4mSNWTWhhhwH83epQ73zJ52T5UBUhut4teZd4ouGbTKJ9kMVd",
  "key26": "3J9WNfqMjFVtwUuYrYrS9ecZb69XeraUVkLzP8q7zCmrXaQczi2HEzyjVe8dKNVfvR5pCjHPyaPTLWxoQJAXwXYQ",
  "key27": "zrohsPdekkBGfFAs8hEW95N4QdgvL6k6xuHWZgNUqkQ5LNrDtTZiXFsk5uHXZxndu2xM4QG3FT64pmh2td4xzV9",
  "key28": "5bGdWuGPMbMNv5rZPMJJ1U1rc9PRucGCfdJY2kh2zd1Q7PkfCShrjYK23XVfDdDxBD7aHzUfk2bgdrwa37zJZQxK",
  "key29": "2ErVWchrYBcb7jj2mCa3DKgFW2BLStCSTqgRkLMjeRUorWL98n3UCSb2se2yuCotF9HhQPGRScXLhH7dyEnGFswk",
  "key30": "htDS2FagPrAM9xFXbFNoka2JJ6i6Rd3nYGnWFgJxHRSu9ZvFt2qHUG8435p7AEUaArG5YcvrVUfcDDgsnxK6Gs7",
  "key31": "GiPujwNhjr1JAyxtnr6XwvshPDSs553A6EjtvqS57im7KTRhDd3wDgW5W6ZhVYByjdbGztNveQvm7o6LTshYhh5",
  "key32": "384bvqg6puxGmP82tupwuqxZ4QK7EjzrDYVDxg4cidt2EFW6zhgpG8yMgodqKCvogC1oXYc8FWJHLmy5Rv65t4Z8",
  "key33": "7MTUUirE9zBBTfEzD11SSXtQQrBtrxwrPAizZuBydVr8Feqj1VwpuUj8UorXgdPkHU2tpLcjpaVxXKLtvgHkgcG",
  "key34": "26hWLX9gf6mEuwUmNBUGK7t7dd8QtrURGpn6ywn8kX2Ni2qQsCY84AEyo1KGKmdwwbVXeFonbwH4kknxxM1kTC1H"
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
