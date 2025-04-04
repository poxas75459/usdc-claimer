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
    "5tib5vMPWSans2wHwaSmKXsyYWRbn177qu3nqkbhT2NZ2odQUSiY4V5VWkrnuQ15iynAuJRSshoZvj4FhCasSc3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ej1MSEhbidFY8WmsFn6Qeycqj59epCvRezjpSEHiHUKQyDpqnnsPwz1aMNfB7mpo5wxMZQxbfP2JSby8uhxkzkP",
  "key1": "55Mbnkrd6FY4iX9vYSUz9TQRMfaM952wDRjqpU4D1wQev8QXspdNcSVZv7aaEifyvK7wX1Hvgy6WiKyMbJHWF8fm",
  "key2": "3Dq5EGqQfdjmNnttm72u7a4brDFs97vKwGTLB4vBd25s5kPzxvNCsequKdUZq8rt9GzWRJEHNvkxd5KX5bYMVdfB",
  "key3": "5ymiC2PvUoCX84Eb2T5z1haYaqooGAqf1D8d3jVftBNwLWvqymCroMtYNETV52KZXfAoT36knMgSx6hfeHoZXdpB",
  "key4": "3paAJZ74cYGMKVpEshVqz1WYdWNNWkHcuEhw7RyUKaeSNgcfXHUJ7Xk4smj3YX8GAf2PLq9D92fftgN2ThyLDBsQ",
  "key5": "4gsXitCUxN2ygFFk9uF46SYB7Ta7RMrZRYMFVKV44fMZ8Rrgy3iRnWFpcJSNa94tdXeBhein7xNnn6DRwRUVsDof",
  "key6": "5NHu8hYwgGbsxfYcGe7H7xPhoBGxx9ygJ7bTLrYHMAtXBSUhtGLn92BiJXJz8c6CsQxTxWEipRRXhNvvT7dRDVwg",
  "key7": "66pDvNumDn6Kw7PFY8vSxcAdE2W8PyjsiCTnZPqjcUFoFRHHUB5bjsphTaWYQNA1LtBGqCDvKNw79zJCABjPvJWW",
  "key8": "3sD2U8X8ZBdx3DFqGvxog2Sk6MT54RbLBUCvmnFXVCNh8CkvPbQRm4ZKsz2uc2TYa4yBzEUvSvC77oo7aNqf3G6g",
  "key9": "2pqJkvgy8e7SjdjAkeAPxYMDLMxv4EAFzKm36F7xkcxHjsfQeUUXQKoEFWxddeV9eHjsECJhAUqCQk2Fy9F9iCPn",
  "key10": "2FCoNnsQYYtRwjjwqZGV25ktRDaufLyY3aiRxbAFPN2vPatv7aurooLMYnTT8jnLrs1nRRbtC8D7XoxC3irp6hbX",
  "key11": "GeSizBffD36nj7UZ2VZqb8kZC8QupDsysb6JwGTnPjDF3x3637hKuHK4xuzjNUvaFRwPYPKJYDLFzfwqgXdtvP1",
  "key12": "2NyVJBWrQKWv4inbXa9GKQKiBnY4fqdKUWgLzJoQ135cXGXbUi8MeB61XCzWxuVSTHFWPLA4vWMY2gfzkGs6frC3",
  "key13": "qzEN85tDgSMFsNNcMVkfKQb1DqynsW92LxE7ENHSbMrE2dyUqXCAzrNf5nAZQwi9JNBphDJosiirs4xRWiKFR1L",
  "key14": "2q2pkGsG6dEkwYuyrKLJWAoC85KTuwKnxt6gS7Rf9Pf1gxRmNUPkBZDQPgs9HkeaWwtuFDvU9mC8W7evuXcPgoeV",
  "key15": "zZ7Uxgpq1KQFapXiMMMvq9eYSSSsTjQvMaHQtNamU8xZqZXtiKGGTXxGv4jH9N3YDndePmLRLG4u4ocDG1TwP12",
  "key16": "2h7vph8m3LmJngnmamiHoC9YnnWwcMD6A3sZauKPWKwrbvbHnfmXTfVdPQSfK3epLvM9npAy9mQ6TZLkdqLRPZhP",
  "key17": "5KfzWbJV9ciTdhCQrEHgHe4upqz244n5WH2i5DHxhrXQfL7PhK9AowKc2zLJL7qsMYmxBfRTNtUBsgrwe5nPRUg8",
  "key18": "2EWQmfUAsXzG3Fic2baM6i7XLZwUzmTzBYaPczh79i113RsppQ4Q5nyYrP7Ghhsc8vVe7jk4aXohmXkgsRc4kHEY",
  "key19": "3CYpxo3JgvgZmwwziQzvCSM4VPtNH6Q25jotypngDsd6xqErtYg3LwiiLUGAzYgtPo2TFuLYED2ybLzbRSdnqWiW",
  "key20": "38jSRH78KfSPkVXmgoiqzk4ptcfFvwDgtYYP1iMVEeTC351fouyt4QBikxPTYTp4MHGTkMzJF1wgmQN46m7pZ3xn",
  "key21": "2oWM68MMduqymrQeCykvdKPhnSuwbfKeji1ytxvVyX4fYkKKqH1MCdJgSwvFuw1dwqgPxndvjMfKA7MSbBHfeK8W",
  "key22": "2wSCfVQGnCMDu3ZwsjGq17hZRUHvR9FEaLbrdyQvdhqvBkaeqf7DKkToRH3hcKf1G6pizozQo8qPY1NF46QEMYvY",
  "key23": "388EtGoCwemoNGdJxxF1dGDJCkv57B7PQ5Sff1tWuw961QT7QVEZFj9sQeLzXExaqNDHszRrJFWbNuvqBWYwnyNb",
  "key24": "5ELEbT15JKaXYMzPugBWetAwAriyg2Lbrs9W7LZ93fYo1bmNi8Toq3NGjdKvr5888b5HmZDb5bPyvDs6M7DoXtR5",
  "key25": "66gBkdjDouVDcQugc7rCHfrvYJLWTvM6ZGon86wHvczmxdxe1q1Rw8vQDxxZ6dxYVHTHZqL5JmajcdT2HvBvCN9X",
  "key26": "44ouwKTqLiRNkkYGdF33BmAqZ28kPctN2NszHxrCxhUcWcfk6oopvybjFboDMWvN19mYmTHdCV8N3Q9K7ASjxUUH",
  "key27": "5HxJRawWqN3hFN8yzKkoQybU72k6TR2kf88iUZoZGD7hYVumy9N7gPysuvRoNWhQERtY94qHJ8TKUPRXqe4h6Qky",
  "key28": "2GxvpQCNR5gkHPY8bT7gZaZdeMjrpyFEumAXrSFFUqC8AF3MdzhXJ3zJto9C17DQwxLkRxb9wJHJAakKT9ce1tn7",
  "key29": "B5N9E398youUpdps4pMtUwep5s6PJqbmZH57C3KcV76UTJQYo3bCD8szR6EXFYgnse3C9pKrpDizRnmyuL5cdyz",
  "key30": "5dxhtAHvUtzbSGnvrKyEipJrZpUVMQAnXuRqcoUoAkPDrDUcEKq3kNN4PYyRgBoSW2RpPSgmzoLGciLqQrHmJKg",
  "key31": "3UCFA924n6pcPH6bZTFbmSM6bP5DngGH8uS5t8rqfSWXjWvu28dJK5WHEg7Yz2ZkfBAKiNRQsSEAvLR6zFMKHLUU",
  "key32": "rpiBK5U483aruhouf9GPsdUN6ApdPAwqT1H7NUzFTNYKStKugVbmPHPFqZXZ5PKpwSRfdtyLhpM7YLCGcvaCGFW",
  "key33": "5wrf6xYdQ8kUkupk2JcG33DxshLqs6Zfsn1ySyRhsK7r1DQSyJoEDbK2iYyVgWjVFNR3mRXfugNNHASvz4kPdFtw",
  "key34": "3yagjPANCDeGcN6t9QfWWpXF8yFcvyBohpQe7koMbVa8Cg9tG2ZwwEcREZkR6dFi15MZHqigBVjokttixcmwyno8",
  "key35": "5ReuBWqauYJhESEpj8fq8d8YXbrDFBrJGHrDEFRNm2SBmsKM4QyFAP2zaemhmHthqHhn4ZREWkJacqWCGvXTD4Lg",
  "key36": "43k1Z67EmPspr93hweDzqhPtT6DjpiJRYC7PB9FBs8xRQv4kygBJoHKJm4yS8YxZBBhTNjqwFx5whAo7TUCH3teP",
  "key37": "2R3CphYKLnAFGcXvHUmeLoU5SjB6HK6GS1At2DKxSX2eLzNHNMpTUyqmiid43KTeeboYo4Y1Q9DqQJgDpH6RAt5t"
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
