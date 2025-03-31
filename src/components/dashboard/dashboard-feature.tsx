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
    "3XQRKLYsQeoiazJZgUt8nrHuKE2XyUjXaxvrMHmrgbXnsriiLEYf62GZCfJqZDiqDViXm8XsqDJMzrLDaUjTxs4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5n9sujn1bZxYYEWdZjkDAUHp1vj1ftEe2vV9wJrnXKht32Bo3Sj1ZeJAAakULxHub4AtTbsFjse2zaaCWhQPCD",
  "key1": "2hJSiVjagd9FxztvR4xoFDW5K9skoxHUAa55s2DcDR6FGsdtG8TNm2JTrToqKVV413asuCKZd8pXmhvwMSireQyT",
  "key2": "3TSrR2nqU6oZzwwkUbABxCWCkCiPGJSTVneChSenbPZJTCWrMTqfEZDAkhBvZyUVt3LFZriW1HSTdSnDNphFbwAx",
  "key3": "5k9vZ9BUJNCX3uAzSY84wQJZ3DoSqhL3C5uSnuSAXyRVV6akzXnV357PAy5ZhMsiuiLzvJ6rELtbQjNWKEdusgBT",
  "key4": "2nc7MXMi4mujv2zw7h7gKdLpJnZVc181CjzBF6n1zZ5qxde3nCALSYaPQpdYqDX8tRS1JZ5w8sQby3zCyzHEgeXs",
  "key5": "27ZgNvnaaTdAzfnHY7CqgTECzHGkdN4mY1VKpWGYLGjeQg2xpa6ym3NETPijphGyumMhByhwThtSfw8gPpvXS7qQ",
  "key6": "65SF1UmNc7BURMVbLZ7US2kiBtPEQ32LTBn17d8ps66usD1fwmyyFYwnRd15UGXSJcy4Rm3wfAySRVFewqPUd4Lq",
  "key7": "39z1kjiQmjHtqyjsM7QLwdB6HeNM4uKJfTCmMKoGM6A8BZjiGYSCGDR1dzyH2cskGzLBy7kH3q1Rmgjae64GQ39W",
  "key8": "y9F7UbvC2ZGFpUowFzB8YinEwhNXMrCHUFtiguu5ce9EgQRgAn6vGTNzi6JgUKN8rHNLVnofkQVRaUkgFr4ogF9",
  "key9": "39iYMGxnrdZkqaHZq6atfvv911besC2dejXHasoUr4wgtspKZVFFutFZ8NmMenCLLLQeVsFoAjsqZtJpwhpH8oZH",
  "key10": "5vng14aFJXeEQbniMNaGBdjYN8vU4W5p3RUXQQFYQLTDKnqKQBZw53UsSE3nWdqvKMk8XjL3hTZo9bwapramSJHQ",
  "key11": "65Fn6CfVTkNL8f1KJjoZTPoz3subwtyMRhxtVmj8YuRmfTXq548qBUAJpDrs3hix5uVsvRB5JrF4qLvyCkbbF665",
  "key12": "2K5vE97vmxwfT1xV7GqYqacgXV3vekoA4KpVneZByUQEKG4GKfUSKRwyJxuCrNNwFxa2rE2X4x1M1G9r9mEYUzCV",
  "key13": "3vpUakx6XJjEwBWcfUjiSjb1nFgh1ih7CryQ4rDtHLNvvxdDT4KN6RxYzUXySTaLqJxpXQeVjFZuiWfdjESaDJn",
  "key14": "3uGU7YjnHnnxQrYBiaXfWtKRHgZZ9eb1WrNgAcPZV529YnNwYAyKSWU1euDApCebtQT98UR7kxhpcFYofyfty5Xc",
  "key15": "4vueFa66PHhqkkZRsTYTqBurFvRmjFvvaa8CbxUHw9RmovVZ7jQNbfVWBbSrf64mcts2JJAG6y2igPABHpFfFVhm",
  "key16": "5pk42CX2Z5QMmw1ZESE5rqY1fYdPUpDGyF7B98SRj7pznyrnxbU9cCYpZAMMJS57LFaCHDnu3GYmAUUKUMXpAnZp",
  "key17": "2z7xuxvBD9vVk3cjwMXh28kmWBeFZCzBUd4Stje8B5cHkfKKgikG4gYkm21eDAphhNNVphMxtGg828tvSEoRRQH7",
  "key18": "PUqjF3YkRznioD9FwwUJfcPhRXM773y2DJTMzaSGYzuU3Ag2S5x3YQ6ee3nafxEanGjF41KwRQNVgw9wDeBJ72j",
  "key19": "Eihvnz8wLiZNXeawvyWtTx8jnSEhcGSsA2jDGJ91USA3ibcUZYFitGGn4DF46NmtrUTPHvXFdqwZ8kNxfZyTpPy",
  "key20": "67dryPWw3P6qvYqE4EEb3nxnheMxYZTHyHECtHguVF7iUbJyy7UaVg3Mp6a5nhjdAgyG8PQjGQUxFuq87xcLa1hB",
  "key21": "Kb536YAL5mBGEcRWmBSgVK418FCptuZNnYZn8vFrjU2vtUeN4vuQ2sDDchUCQhotuixgqhXc3n3Nn3HifX3gXoT",
  "key22": "4Btwnsh6ZfvWceBfsst7EvKM6K2YsCYjJPxa7zLRqsxHSDT5bc7eqHzwfsStvP9mirG4RRMBe5HUu1L5KZ7fSsAn",
  "key23": "2gYvQE7hyL2cAt514ErJyNkSG6fQz96aKWy1hR5CCEkW2h8TdvNsAx9TVgiYbFSPMoYRk2vKmV7jd59sfThgTW6G",
  "key24": "5bc3EnHnFEBiHXF7ZSroJHFzUPoAy6Ruch4yTLR9jxFYvMXWsAtyvdAGJMjS9oHEuQzYQ635zgTDtBzqLKxVrPNF",
  "key25": "rBddqbhx17XqXd9MXycXfD6FPuq4Dy1t2CfoG2hV8ko5oTcsLYiLVhJSVRGQZoVJ9AH9NrEc88XdCXVW76yfsUt",
  "key26": "5mZiEZi88fVBkrmQk9m5f9SxJ4NzxVmPqjwQbG5zvsxZR7pYPaMrZLYVgQ6kSKMN8pTVxN52brQTpVTZQWV8DUR7",
  "key27": "2vEq8wtCCjxnF2C7dxwGvD98NLcXdo72oK1rAeiYtHRuS7evfgHSNHAzw9JPgqpxHiYNJCvq81NLERBibHp1X9fb"
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
