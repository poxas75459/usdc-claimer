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
    "5FnfizppQdYzfMaFTi2GjiVCcgM9NqhWW6WdeES6vkbKuUXosLXNmQgP69phdvfb9vKgDVj1rDfzamkepYVzrrcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkpJfFeAZippd3jk4v9n5Kb9Z6SqPvfhBiHC73a7qmy7khecqAtY3VkDYFQuH3fn3AijipyDEdKaiQjeYXja617",
  "key1": "5LBw3MfdPgvEx6BTAMuYVYfQ3bYgroVGbfhLz44oxGpSpcwPf1WmmDtQtpyJZGza466dcqKBDJzbvS6Spngk9dPR",
  "key2": "54NwRqLdiQPC2Sp96HaAKvEmJJCdK57J3e71YdDGa4SJmJfaDYVY3aduoCHJLKQYpPSbv81MximAETyG5DSXRoQj",
  "key3": "3srCp8MDDdGYMFkp18nPvPfPqWzK9qM8rq2Jj7KP7cy3BvBd5AxjdAPrT8UPhNjCnmWYyAZC919NyWDNSPDj8Uqk",
  "key4": "2twgp7uetcDPsZRunPzvBLnCGfgq5pWSVFGKLYNb1Ei8eULLmafA4ivnRWsY24sTFWRokhPgnxkJM5QPNE9VJgta",
  "key5": "5kFwWjXdvG2rHUSaNRRRBF3eLKa56T8A9THArDsqHuuvwTw1k1V7Hv8se7GAbA3u4VXUr1TfHgE76qpwEpaJX6b1",
  "key6": "5hszv6U4LnV3sPLW3ePbReijXDwoiCLBZGc3cLck6QYmwg626jHXwy73VpEBMqrJhRRTJ6bUGfvxJgtbon3S3zx5",
  "key7": "3ihaG1C7Rx2Prbv4C9EGnTxez9zmouW37G2L628xEMZJwh1Cte9auQfaGciwqLfFF7qFFMR3iYRjjDC5AYkY3Pxj",
  "key8": "5orvFrFx6SnsXfD9DaKufGKP7pc8RHmQoLFTyZo73yHydLpeD5CZtXYFu7cqgqXvjB1vGuyAb1UbaKbLexWbhFQ2",
  "key9": "4e83QvANvPEXkR3Z9d22xtimr8SBYo3BZRaaGn8EcMAgKWmXWms1neTDcumb9yqmzaFtnSqfr4grzkqzjBeywbnu",
  "key10": "4wQvF6YfQd2VCBi7w1EZQyoo8BMg2fSuzRZq1SQwBbSgiobTYEzany19mY1v1grrVBeVXCSUN74wxbdRSCvQJoUX",
  "key11": "3yxKH7dhhtS9DQdjZh9XMGWTWKfW9ntRDovoQXpFqhvD5r7FBu9iAhNMbdNQzHk5EvcY1ojqfviT4Ukc79c9EK8b",
  "key12": "5AhpKanhtHHpCHQtSHk4Ao3wNFsPnAJ1bsqEW8Pcj5qSLxN26DPgRg11Jcpm2dQkq2qSaeUtGUUcsGedfa5wzXoi",
  "key13": "38wD553iGgaVupAc1TW48T3kDwiYUKHoovbzKzXj2Dqc9y5H4M6edd1ridEqjhQWzV9t3ZPxCoV3qBqjNBHrRSiD",
  "key14": "4UsjqdkkDBKBjjDT2zaKD9hXvAJqAyerNzqsEYAMh85fMb6QY5S78hagyTV6v5f7iTcjSDJoMExT95sZ9TMN4Ci7",
  "key15": "3yHgG4scjgtH326P6UxV2wQdLhk6jaGVsdf75P7mmkSAYjjHyxuQda9iE6UReMuYEMU2oMQtgkWq4zvwkzSpUMtR",
  "key16": "3dp6BgRNGGVWViUvvL1K4HsMYx593KJEMUyVNcb1ex4UbzB9VcUxhxf1o1xSkDQWfEQtsCXFPoCzVhzACZo6sQU2",
  "key17": "4DJ1jKEH8bgtCqwiXDgSZG2NuvrxCaK9tcuQwjMH1kJKeMAAZQjEh5U4hnwJ7Hn5JtND4jc7PM8Pf5q8UwCQgDyF",
  "key18": "S5CpoPVpXhnLkRLK2p1TE2LSYt1wt8N7zSXgyjzLH8raU8TwnerAuG7o2ABxLt5yVjWeaD3nXtxK1MUXoFccJNV",
  "key19": "2cEaXogkmUtRLWFEvwA7J1W8wSvf1KKLSz2ny9XzR87rrBm4fuWMGrvo8NPwte8unCncifPWnzjEsN66xboDnEsi",
  "key20": "445qvLdKASPXjsBtJvzsvSCjPwaxMQW3qaAsCuKnBrLdp6DT57McHLmK6Axcc5p2nQjuFC1Bzh65RmRruvQFUnFm",
  "key21": "2B8caNURN93BKEZpvPyXwnzCbx8uHZyf4N4GSMVEXj4PrjaQA8qS6kpQNbWBpmT4ZhABUKfBEmEb6yS8tywbFKmA",
  "key22": "5YyBtmheKviFah2z5e5bBwobpxRYFR3GmqC2XmRb2SXX1CebsKdKuG3632LWZLxcXqtHecZwa45RMsNNTrrVzgX2",
  "key23": "3fhpGhxKo4QcoNowvvUeGCx5UxTWsaxrqTJYqXCCpkacwL2hwQLN6QjXh1BtfgyUcmdvWwTbhbV1aLMWzG2nwtsn",
  "key24": "58BKh7R3EBNUC5qzStjcBSSNmPZsp7kGbGiBywzEUahfmPWgKiRo9GxLdqsCdTzPWEFo9oEAm7cmFU4vmrAoL9Dp",
  "key25": "5oWeCpcE5vHi9REG5UAR7VimpL6xwrxn2n3EyBzNVEjxd1peE4exiiaCEFVYFvTupvuSKBxF1WNkMuPZ7ztpnjtt",
  "key26": "3UQeMzq958UYdkJ5XHJd9KmYD2G2bpRgPRuLYScggtSEJzeAaodssp1VbQHhCy9UuNBpATEjk8hFxiDEGthaT9Vq",
  "key27": "3DGGipEYX4XHYfqhe6GjJr1jeEhWZK8DX3VtmbKmrimjXvsnkL1txesB36xWGujnckeMLf15nN8JnuSe7BYubgAG",
  "key28": "4rFCDrWozAzTDKLxF9TWEeSDdbUDHSnwWDw3aLbYPyRvKjJjSWtbQ9LCovkx7dvu9Q9HHRbqvMxRwSxuf3e9HfhA",
  "key29": "5tjFgwskK3G1BDzLXRXtdNEVyLAeZeuJyzytfCsZzTpgfMhAtS1ZNWJ5NNq58Cpt9YLGwsvhHMUdXYK7f4KEgTae",
  "key30": "38Gm94jsaDLB2z7HUneuprKzBB79YYCRGhepQGmZWEv3zgvveujFRdPo1d4Mk4G8uiStgnm2TotuUHyNUvrMfkun",
  "key31": "2cbjRc8uBbe8g5oiU8azyRxqCQGtnFJuiV3WibDqPRrbPgrgE5UqASPyVZPrDmUrESWCHLFJSDxhghaBmSki816Y",
  "key32": "2re47Jus1LHQatgTFxLzTfYqnFHuAY4ySNmTTyYVMxP7CSypBffLMYoPJr9upiLiC9WTaxZjSZ5cCXRAiXjeQwxY",
  "key33": "5NayzHsSyF8iAP6BaTwTCQpZo7tDdkyKNovtCssJRr8iD1Q4Tio8FE9oYYLTUZ7PY6L5ZzKAzNmovJREV2iVntMq",
  "key34": "2Ydr4jjqRncWvmcJ9YDSGRXqcpWSg4HPFETuPfM2etzrAJPeUR3NG3zib5bphDBkJo1QH2gFU6ipHFYLMhpGbcq",
  "key35": "4dT6y7ssgzm1P7MJgKhjrfGjAX9tmMMm2BpYY7R6NRbfcGB2MUrhYHnM64JSjGdU2asVsDfmc2iZpgF6sy3MkvUo",
  "key36": "5ipzCqeHcBnmrvj7oemHUJFP4kkScSZV39KaWMTRsQ6BktcbMu6y9ya1AaXLH61iUASjUf4ziBeUeNsu7XtKwqke"
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
