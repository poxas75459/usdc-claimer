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
    "36mmUVVP7i6wdF2WvyRGEPz4DZ2eLnfQi6gHxULRZxFic4eYD9yCZ4BhkWZHPPogmvn1abxKXFS8SAh6wz8QBgdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ND6b9dk3bHFamN94VwEFBhvfThPPNv4gNesNdUiQUmgh1T6YnttDXxUc9NRRG3vLy6sZh9vDA43oB2P6m5zjuu",
  "key1": "5jesGbwfMf3ZJepjtZQAEE57fj8dAd1xCPU56YFmpsipx55NxA1ZAzA4MWJjd3wvXYXaEJjYzt8yrFaqR9SyrA6k",
  "key2": "6BUjtUKW8PEM2116HAjaXC3jGK2y3b545co6mR7aNGKa6q2eAEBp2G5Ab2UK91tnfiAHp7HpFg7gAZaD4cfMmFb",
  "key3": "29ofjfu4Lpsu3p5o2ufAo533WgzRRgnx1iSGWaJpecw1qaLAu21K2A1cdgMTvSsVgV6egauS1dp9QY3bnzKypc58",
  "key4": "3fveSFd3aKUvtqqZgRs1gQKJ5ZbXvt6RoJH6MDCjatNTDAhziWsAWQL2AhbFm2uE6jsfFY4ZZwzgQXhf8TRitLom",
  "key5": "5HBkM5txr1mzBvrXvKUmmeKZhYDBuSwkuRR5pm94nZoXe6Dj3YkJ5wN1YaPqUfoG19ghzb3AV8nfadycqAKX3k7Q",
  "key6": "4EzxLgN4Guowv8khCJNJpDccKcx2JkEVAoE8PfVrukvJqNWTYBq3ZoK5pAj4FjnTXmHLgiE7a1tjBijtRDCVRNrX",
  "key7": "3HyQWf2qnmDNLYtvwbfPMkyA8dmY6JJVvzVLAoqfrdSBt8fgZpAxGUqsfraHvUXCY2DQRv7qqfE6EfszjuhA3N36",
  "key8": "48SP51urNh8Fsc5Sk6P7kyUHLmgzUu8Bf9gysRxwyxivr86ef8Q7iNSjZrajzp2MbbJuESzA13b4Hj56RZ3tVWtD",
  "key9": "w6TNBz89YFBAo1WPrZqGkJHxdHxYGSGTsrQHFVUCjRynsSGD4Rszm4Pdt269eGgkEaMXGnZxZfmKkZwnqAfDbjW",
  "key10": "3V7wBCjgup6dPRhWskJesHBPp9FBcyRXynYEdGTNEV73KXhZwCf2ANW7rUXgAQEJmLSDDN655cGaYyuQy7RQN6MH",
  "key11": "4kT8oKtqrzduQ1NVmwapYzAutmgXoFE6AbnWwa8XBGGUJkKL78TYvMbcySLnY3K5sdadxgEg5FrnP2mTYtC31Er9",
  "key12": "5Txezn5yHrckiDb8Y2m9pucqiwVbVHF2KtVjJPYUAZREZfD7iiZ9YKKZuFaScgKg3PrvAbCgXbiFGt7H6HmAKWsn",
  "key13": "f4CiB5h7uaXbHtneKQvw3AS6KoYAGtVLo5v2mRGht6KqHTuDYij9ekoAGQPwwu8ki4KTEHZnK3m8hPZycFT64dC",
  "key14": "2QJii2QPqMCcWms6hzetCxCfVKCjFu1KtGj3wc6pzMsFoyH3SkZ2oB2QrtspRGgaps7HhKMjaKGyXrjdd2AQevff",
  "key15": "5ejFspqmtPPPzBP2zsTkopQseYThKMk74RZXGEG9vnRCEnfazVyMs2se3gk6UJZxYz3P1ojzRyppToMPsHLvir1A",
  "key16": "3DLvje1PAxyDJgUR4GZuLbqQohpQoFtd58YYBtuPbgrFhna7Bu7dNMPddAP6gSiR6bVPaVkNmdab7VsFXp71L28o",
  "key17": "4mhiHS4cJk2HBb9MGrogvWnkiLDAxfrXpiGx4wxhxfXhV6SrpW827Y52stQpfND9qpeqbTc8dwqXJYzSga1s3Wq2",
  "key18": "2rMKL6TrhqFy99n83ef8J346VPecz3fCTBHZh6XCRUXRsh2CHNwkbPvBKsgDKPzQdrZxtFYHVpKPo4wyaTthwUQS",
  "key19": "MjBf4vzsb3CfGz9wAKTaAoJtXrjBobjod1uM7y7YUetjkaZaVrBPbHAxdevKnBkAecofsmFJL82yfxACLyf47Si",
  "key20": "55Pxupi8zbAdh3peL1GUM8hW7fXeG4db8CprtX86wSYxmHJoeTEThsqE7fKP6drq49aQyA4K6RK8XJUmMLDtmeLQ",
  "key21": "5FXT2GMzRkVVyb6h4R4xa4qKbFniGssyR5zgrRnnTyyRtudh9KeH8GkwhYZMQ2TtuNxYHJ3qQtc5jE4V2FhHQckj",
  "key22": "55pYf6epjE9Zz15u5p5oDVn6rcnoP2yLgeuGLEFUkNqSFEYUs8uGUTpufCZZNmeAgiMX3C2DmLfZxbe8KLp6B2ZV",
  "key23": "vqmBJafXMkiEXCPMua47TX5ouq7r1xzamrdiLqArPBTeD2SqbQcfwjHMAp3VadqK1Vvj7hYP3vLCrHduLkyMXvH",
  "key24": "3sYyKUTRp2QNSmc1a9ghBzyWzTqizPsww1v2MEPm1zVxaTva9KA78xvyoJXxBGGdLVh8qkXxmqWKV4b9MfezLWjF",
  "key25": "3AKCBN9wRNdn6EkP4eSd2VbJsYncjjYNwGMgQVLvKrCqA3PjSVfAzbtWn273U8G46Jnt7qtqnsGxHHAvveSJXFkt",
  "key26": "4yHhcX5KJCQU1ZPSWc83WWaqTVFFY1SqVFWXciMhcHenDneb4Ak7nSSYd72DAVrntPmHSpiCPFdo7AHdz6ESrfvf",
  "key27": "2PFXAURmr6sx13R5zQhJ9LDbcKgy9UH1SymZ6DE1uCMf92WaiYKaLvWWTcRPqDaSy4Fg47PK4oQUm536SzAWL5Gi",
  "key28": "JYdwJP9q8rAj2twRjWi4UbhL5KAeT5AyzuDvwMn6vv8U1BjtDWQaqan7ME3kK8fRYWFyZHG7V2MM63jTVfCYJjQ",
  "key29": "axpihiVL9DfpTWFVfikLQe5HMbwudGWwPRqiBNkrF3emsHkwHmXZFeGZr2qerC4PE6TTiXJ6Zc7gjKedSugojgR",
  "key30": "4dD5cWktbA2qVaYyBTdEhQppNLYBuBv5hYBk9rEdJycuU7mB2gnCzYZtm5zWU8v4d7TbKs3tACxFiAGT4xrK9vNA",
  "key31": "3RDRNcYAf4prEX6QdvYpi7MZcogGzGVhzenaEzerPtF8Mhd6JXEU8CwENLZXjcqPJjJ2q7cMJ1c9SRg3oaH1wvK8",
  "key32": "3nF1cZ4vS1N7BgkyPtsaWMQgF3hi2jnjxvWE14pCw2j5VxS1H8uEg2DDCWqkUDBWARihyAkx6eEgKBNNE5HyZDtU",
  "key33": "3CXqz3oWfie5UgSdekghu5WBL7bFx5HZk6KtXVtgNmh4sWYLXKTsua4mpaoqu2bTirCjuZYk1iaYw1ri7QJbWfFV",
  "key34": "3ShvPfU8VnxcUW4P4NNyDJsFY6E8L8efetaCwtgfaQAqMYMwyETbbdgeAPjuQjz5B3aEUyXSzHZwfhA8cquj5yMi",
  "key35": "2rWgTxhR9ELX3v1MDwdWZNa1mkrnp8813yqhJNDUdzQR5mm1ERdwJvuh3pjS6e73jqR7qPhWZYiuhLBndq2axih9",
  "key36": "4SWeCokarji32fu6PyzJBX85CbeQe5jiRGEnHiRUrcXMwSNuvx6Adwj6zhwE5b7HRFVmQjEDYrrAXxos4wraXwhL",
  "key37": "2hqrWwnjHgvJhVZpsxj9uEpJf1hiZmMqTEW37mtrcHkcMioNbLUS6VCRnoE2JZtpu4NgWLJZqBoTmDYcW9A6aS5h",
  "key38": "4BsqFohkTnpVFh1wQdyWAs3XAHyWbChBo3FU9cZTbYEvUWHWbRSbVzkevGtA5EzRJ2KjE3dMSuAu1M8ybFGvJJrx",
  "key39": "3BqdRcN1RNqsAkPntVBWAYhVCoRK3nr8PR2sfBzTw9Jo1xbWBBAvUvAgXWxt3eYTAb9TbVQcrMSqun5avTKfVs5b",
  "key40": "CRdTb8iJhYQc6gZemeqtP6an5nUMdr8na2Wtbhx8rAdHN18nyoXqpj4qSSfqGU7wMRzmARSTw4x3vif1GGyTZzS"
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
