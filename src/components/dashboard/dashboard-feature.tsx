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
    "9kZHJHAoDkekz1VwbGZhtXSDs6SnSxXEQE8Bb3CQLk9PpwMeQHZttCTSbZ4tZwzR7SrwV8BaUvQuaqWdCMWGwF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VbUXzAQuYHnv36U8bDgVda6TFj2yPvkaQgvda17krgU1L9U6V6FpkJSBFt5gx2WE68yRmFLDK3GGSsKq6PeTSYh",
  "key1": "4SeBwrpYa9eV54ygekv8J5ftgY9YehwTzRBZ295HSiAcRW1YDSpPodkYqEoeUi8Aev24whyavD78uQ5ngxFZfaSU",
  "key2": "4GvYffWbyB35bNi24HBJAN8h8o91zvThJNm85m3XY5NHa6Xhn92CKS7K39Cqzyrjg3ksKaMCFEcEU9GBH8QgyTQx",
  "key3": "Ng4iGGj8mrPZe6KPrr1nMUdRi5xz8FvaCDZLRPz5mPsbanE3BF9jW5bxTcoHHQWHhgdMAoYFPua82UumNXZwfEA",
  "key4": "48zqNeWgb4syQK13pvyL9GFqTbh8KrBDNTViZZQpdZLPrm9DLZjxf2Nbrf9hrPuxN4CsJhCkAJPLr9n2tUNAu9bb",
  "key5": "5eWseyJH13PAJYje3XhA555AC3jJRjrygZFhwcB84Z5gS7dy6hR8YWdSsZAGvsCvLHDNNjeBzNRrJgNaGvqHP7P5",
  "key6": "3conSN3V2nXyy5nWBVTs2HzUmjppFELQfuDiG4jjyXFvYEsvKx7grTyZUjrUaw3pFdef1gvk7KsAgYzgSdbtLEKh",
  "key7": "64zuvHxRQtJXQnsmxyAkxhDohGXYYzBL21w1rMcQfVame74LJG7a9Zfm6nEGZH9AK4WBCWF9UjFsuuZ1fsz9tKft",
  "key8": "JtgHCpqHdhJu3hdavbvozy6QzQG5aNWHmTR5GQ7EKn4eLXNNj4uNSCGiL4VNp3aCvaq5UCz55pwrSmo9Wn2EH3z",
  "key9": "2Jk7WMFhxtGdVc6Ko9UDS7weYwgXbfD6yodLHhm6WWww93bSJR4AG7AcgVqWk4M7yt3LbC1DTWDs7QqzCRWAQSig",
  "key10": "4QT63kZgvfa7XCoWJdCNz8mV9qqQmNSMbWLn76j9NNdVznidJFQwYu2xUCXE2yQqbqPc6jmwM9xLxoEaCfRLoH3M",
  "key11": "4MwN7zZtcJx2c1aKaexjjNMWxR4BmRcyNDxHvePeX4UP5vE2JVtTzcEHL5ayaapavhy1yC7BaSuJsYTWVG7qzxsL",
  "key12": "368zX117651AeNjPqP8ZvWfFBeNMXweE6p6vssxhHcetLmiBdLaGJcAohh4sMMmWEXjHma8orKvaEDQLQBjx7we2",
  "key13": "2Q6gCj7mFawbVj7QnzdqnRGj6QdCG3iCz7rsKucYeVxAKHsSoW2dRASWhrznicdq33Y6x8Gt4S9BZwwEbANZ9j1U",
  "key14": "2jP198YRa6rL9epvN5gsJ757YYqLdgrxXXHdpBUhMq7xLoppjrbZFeiybFzUPa9aZ4JZ33fh7RFcxnUbH4c8T6jt",
  "key15": "5DmWG8dU9jDH8ZAjtd1PSkBL5GTQccSQz3xzGKqZnCFh2Rq4ENnbPZqBb5obEdjtuQxshADZYz8dHDjyZYbz17HM",
  "key16": "3o7csQ8cyfqQBjvXzmw1EjmG8pV9y9y5VFmdPX65pEoizefa5VtEFYZ4zQCNAbVVLpYWXxjjRo9hCuvm95ZNg7Mv",
  "key17": "5DHTrKwDhqdQUv6FBji1vyKoJxMp71WFzENri7zBZmudZBByFqn51C691qKTfE4uzLKr1WwbnzqeB8WfWuFShKjm",
  "key18": "3zpmRVSsuekwP1bWhtAnyWiZU9i9Wt3MbSMkYmE25RBR1wzRzzEBAm2Y4oLLH4LzQYBMpkT52PRy1LC3L5HhPZ9r",
  "key19": "KwtmSm7pHMpE15EPdRZSMhoxHDwoJfMP7JxH8btEDqhxyYaC3xvBMq4wTTeHR9KTkWN4gAhcCq1FviMtU5h8nft",
  "key20": "5qDC4HmvTNQkPzMcYnVTtAnNC47YmtEfYYdRzF4WngcFQFUwxRfa65e5MbLeLZYrdHA7NoBcRqhSfYPUVXXaCF3Q",
  "key21": "aXpSYUSACqZCKGnNGaNWJuGSbVS3x96s9gKBRS7Pdxi8YHPUg7E5GSzs1x8VecSoFyVE5ktv9f7a6yTVaVZiSWQ",
  "key22": "28vQGpMJT85C311MgePyM1fs6avtxDNh7jNmuwuYNNyiwveGLk4y7g5kDfzNFyoiNC9tTATrbTtXMZiQ84q3LEi3",
  "key23": "4dNh7r3PwTKC5cMXfUYdGKAFCWmGb63rHogVZwZVsj7wTaBFpi5sf2RvMBa3GWLj9hTjiNV2BawUQV9NuFgyC1G",
  "key24": "3pJiK7FMGuTbAGb8AKaQ1TjoqZYTg991a8zcoKiJQvrRwYxeTAFo6dASJbaWxGFmDtP4e4GMRRaCHuJvNmbKwFmL",
  "key25": "4zVJvmEfA7LwbXJrzPzx4FUcZNR2G2vZ8BufPbF1Km1g9JSCZiU9LGisiDn3xs2Ra3DHK4eHQ3foHh5nMNz9EgSz",
  "key26": "4GbH8nHju7bC7d6BZYXQm3nG337Z6iJWNumHBEWG3dyHzsmgdRDHLTwxvNhMPamnNwSRMHHhfKaRNeTG34Yt7SJS",
  "key27": "2WyYXxXCMq1tRD2jBxGs7AJKsywEaQ1eP7a7pZGwJmH34irS5yGQHghVp1vh1VwfT4RpgpCXQwwsU8DMVwXEzLsj",
  "key28": "3XXKPLUujUyTpaiLeX7NhuxTG3EUJaptnubHU8jxhjP9B8Q89dGMrJr5Q6kctrXAhRsSD5F9giPXzGNJHAXzcp7i",
  "key29": "3E1oXQatjd3XYPQreVNtbdToidKGhfr5iWRy5fMfuwxhceiUGMpdmswTK9EuSwFNUpGH47fYbi4yMuzmNhqMB1eq",
  "key30": "4HGZFvEYNW4odGhEKCWbnFcXYdpJjS6Bgj8VZu9kjJV8mPwcg5wvZNEfaaSrv3ZMNbj9W8cC3fUMQvqcZo76rUpL"
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
