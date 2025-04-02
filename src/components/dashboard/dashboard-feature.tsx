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
    "DonY6BvxQFcP8GDN1o2477bPFJyZZafjH8ZGYWjZMNtX6DqJxQutqbHZJG34M4hvcHJwkdsxTiYyDNUxBpiiTxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5876FQGvXTwJhzi7nR7JFU8Bdv26FKqtNnCbnsANBGVZWissrhVpUz3fTjbYBTQYYiBjTA9d8zoiEj5RSv7fg94J",
  "key1": "2D6qYBM2GTMSWQ3gQpdiaJNe6D92EDFpe3QXvAGEMRCarrbg1TrE8kjVuUXKeCYqv1XEe6QhjhGRHEq8E61Dq5pr",
  "key2": "5pv5tQP1bLr1jg5XawbXaeGtRwXEKLECMYcb7EHBUbHtb97fogXoSkVZ2CaVCywPfUUVLzvodwSLursDbzn2gBdt",
  "key3": "5CSF41LmGVjjmkL6V8gmW4e3thVYARS8D1PZ5JXwauSEHCrfzdT7r3UXJ8F5mPmAFX5ik59w7KvrjWgKgCYEEJ9M",
  "key4": "4tptHgN435GozuC3ZFoMr6jQDsw5tmauNFCYMswE8gDFziptL7B1ytXAcfzCFj75otTpVmpdWZ44gb79CBBm9g6R",
  "key5": "5uTuK9z3A6FaSXZmzSfhZwsFMvCtz6E5H5jGXxAXLBBVDo7gQbeXQ7QY2pj57uRcsGEwN4qMSCfQfAwiJ5tQNTVL",
  "key6": "2AB3HStsoxXrN6actKTQYC95N7XEqZPLG1p597T2tsyUvbumbP2obfgm2FhiT43FmhrAWekWX8pE9Aa68JhPnBx5",
  "key7": "47LyFyXLTCNPdG3svSGjnMb1jiPjDsqL3yTXf75aMh8wBRTs9EcEk7vhoMZQs4CJHeTFArr74cp47WMczWu3Vqp6",
  "key8": "4pU5F6X7wAjrJxeN1p7ERLpxTiDRDCPurjWDwz2FFzrHn6MzytFGxoETADwXzwKXmzqEcuHjiBRYeG5yamoPaGAo",
  "key9": "2GKg67ogPwtPYxvTvdvE681zp1T1kbiTq8CSWMLUj8YCUcRaeYQV4xDrL7cPH4k8YFCSuP2Ff2z5Cp6FVHC2aCtm",
  "key10": "39ZTpX93FKea8AgwJLzxdX341wbyiuq1EqxBkLw2sj34DewxtMbcyMZ5QsuKL4fF3JNXLkBaXJ1usDAoZ2gMk5qk",
  "key11": "5pZqhLDsvPyvx5BKMUJBSZeRDG1UnriwCeWZNbWm5qBfhnnA5JVEouEggNThHwTtthAgZWJmLDcFkY4rgM7pBVXJ",
  "key12": "FLDrViphQcSzTPABNEYkGJfCvcdNdmY1UL3m9r7YXNBbeCRNZxDno2g7ouJqmkPiFjYvmEFP82jv5v3gu8uKog7",
  "key13": "2NYtAGqYARAapfDtvgS7CageXbCza8mKeZuq5ZHgsQq5GEEzD4NEdeER4ma3L98bNhVP86e6z5pEY8aJ4dWpUdsm",
  "key14": "48YEHQ67cGxRaxJ3zGonKyg3TfPv5rDdo8Pi3gMzC4op5LUQ4v7y6DQRUK91EN1dCnhUFYha96kwk9uNeU1DBHkw",
  "key15": "4hDXqB3qoqQ8JbZg4ZuNvagyP4V12UHLdJkid8eNo2gVq7wZSL6dADNVA82JRnBWFGUm24mdQNs1Wawjr8kvUkeX",
  "key16": "2u6UBXntcDiKrXL3hRQaiQuKA9xiyP8WV4zSvKuTVFGPDj91617o2NLdJkrQ7gK5CTAoCiM23oDM8gWb9jUEZmxp",
  "key17": "24qcPkWCzLXaDpikhfjeUsABHj5JXpZxBPZsTgqyvXj3jwHxqoVBptKcnD258rmJXTuMqjQLgMPanvsuJuJveFkn",
  "key18": "3hVVUqCXyFA57Yb7S8Mig3Y7WpcxtsobdGGBv8d3vjjgAWhS2vVRvmF9gssyjR2TBKxs1S6X6MF3faMwT1zESMUY",
  "key19": "5Hpfp9fZNAipt1v6TnKVBP3Ph4uyaNzX7K5a3Ru9x6Xqv3nCTcGpmzTdNJi7KhG8ngusZjx8W9etdMVr4xyv6jcD",
  "key20": "LfW8v9wDC9zTpeHHNwNXNyZDWAdTsjtq6X41WkzDL4J82tCjXkMpRGtXPnkRP5gnDgtCnqNgZ3EgDAqU4PVUT9T",
  "key21": "4djgReZuQJVBoHYUDPPhw9yBeMq1UTuD7LcZ3g6B5FshfSfL5a8SJbZY3ySvahYgYeFE8aVEJYJvcLi3uQA5sUWy",
  "key22": "3ntaNzAxNojArLpwBioemGHoDXMj8Rp4tMEEsoMEyrvbUua3URBczv9U6Y17UKcqTkxHGCERCpuw7nMBrkCcidaZ",
  "key23": "4GANUP8ndp963LEqTYPjjgPEKTGrbRcaXHzcfEpG4omENY7gKgJtvzdM3qzkPx3X7fzRzj9Bc5stUhurZvUX8YAj",
  "key24": "zhUUjhd8gbo24MELxLQzdTqd1DBsKdzqTg9LnmsqBZqGVczrfH72MbPxdS2iqQvytxYNA4drRTXNMF7PCksnAsG",
  "key25": "45mXiMQ7M956462JH3jDqcmND6jSqpSPFCRsVr36iPWGER4Xwj8cne7A9QjoRA6BEpkNV5HbygQPW62YZ887psgZ",
  "key26": "4nKXfmJDMfukXvNgCpECrwWZXmJk4dzCMRM2zGxNmf7x9Zo45t272H5AJXiRv5ALDUznSxbd6eBXa17M4jMbRBVx",
  "key27": "3UNRBWdTy4LiTjENbFioGqmrgXyDpkW2JEKJXxhnmx9oPa8Ps83qys5E4YjDvXbWdvS5cyE4vtuAJEXeWJKrxVRT",
  "key28": "TscUCcueQMjdrQyH3czub2GrxUQTqEV4mb4DEQnWzVt5nHgNZBDN23rCrBsGNR9d1Jc57vkKJSNzGWhFnNtmCvw",
  "key29": "3fxs7VFKR4Vr9xYr6Ccr6MZrCsfacdWBYcsQT5VQzBbBNfnsovyDJnyGZz1hGpymk9FNXaKKejQEPv7nW2Ne6iPL",
  "key30": "4rB42bKbLJHtDri7nk9QF3c1pqLz6DQq7fJdKMumiRKrmGCVj7Snx69DN1Gh6TPVGojGHtRgoLp3wUaueTppqKs8",
  "key31": "3cGULC8kG4M81LAySoc3J4PiRB44nNz9RxkE5gLcgXSENfaueYmeoueafVjKxLhyxce8Vffdy6E88jtTrQ49sY3S",
  "key32": "okkGeQtG2QjiiLssiaZYZ7NWgTzxwpamtVuMm2Z5FdxABP2hJXbmJsBrt2PXv3RNnSABEEMbGV8bMqoxEB9VFfU",
  "key33": "dQwXbLi9C8PEaNLbPhH3zBtzJx6qaz9jGWiJQCudmyYh2XALbafnQeDmA9Hv9KfB2tkjzx1P6wpynzhaWkHdkFu",
  "key34": "3JHJNkQjP5qtkVsBVbZe76fXtQi3BJALHXhseCAUX6o5NoXmCUmL5u9vLkU65x8jRLe6xVXv3CbyWLtnq7D4LRbB",
  "key35": "49jwrh59gyfFhfGq2g5eJRTbHJRuRrBzTVFxTTz9dHjEqQG8Ppy3RKWfwHtWLqJ6F2ondyih5pMsJmFGn7PaZiQL",
  "key36": "5zVn3zkJMBQTzqz2wXuiYGKB5fGgWpFCVAWrLTaMXiUtSpBY2CpFeLQzCEYdTNN3obkFoLMfuBYw6S3zxuURzjqp"
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
