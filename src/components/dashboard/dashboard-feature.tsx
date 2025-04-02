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
    "3CgfhYFrmFgoWf3CvXau9881cw8Dmxqu5EK4s2wMu2jZkVA2v8WZC2dGb2ZByqaRYk48dZnBrJx5qFDT8zxNsJQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9ii6om3Pisc2KBs14pURABxZ7BdtbxWy1NK7E7sEwgNu8B5fFHPVXxb97nkS4WW62xSmeybCVpuZG36YFbBwpt",
  "key1": "n3SqydsevEwkkbS663gMGyLoruB4CqLiav4Vhw9YHPomczfHr5k6Mn4P9TJVDjm5tKWAxb9ASJPg61e1Zq2it7C",
  "key2": "3ZW9k74mUghER2edZuaiLaNJp2JVwHX6hDYeBCsZdeUyMJx6PtKwtYVwx92zuZDyLg2PAdg4WgDMCjPLte6kZjSQ",
  "key3": "4ajgwQEfkvGsrgsSTxtCeUP6o6fS6JFRhKreetkxou86RXJXeZonhkWUgeQFHGEZXVLe9J1KYJ6rW29ZMa6pCgNZ",
  "key4": "4aGh9ZkpJkwi6qGNFMWym8aaU1tVvN1rzez3gfj6LuV1xi2g6P4sQZWW5qTGsxdQ3GQsWmGtPKkjGZvyuPJidiat",
  "key5": "4uoJDDPRoH3GHWfhYD6Y6h16idXraaTdWENuY2drtVYPxr1FqKs8w7JZvbRzuHuSWXH1NeGjmf4yYzSfd2Sv4NwP",
  "key6": "2MqKyeiEisvXoutmeak5QsCUWC2TJYe6zmm9vpmo5qu4CxyqQpkaJJfhXeK9aTxhUaQKwmEhgxL5fWGKrmxuSbTo",
  "key7": "xEu9vsvzbTBkCFYspRAUdfbqN7EdKFUdd5SAaiS4akwjR4GzPytkz7CMoFk9pj8o2uxQKk8ergyyrgWZLrVvsNB",
  "key8": "57bjVBpKUqiZMVYTeszFBpsPaBRJVuYVCjB2F3NNpZiaq7j23QDNuGoQCWjBC1CsJ5YQpkF3kNgQX2bkyTTs7gC2",
  "key9": "CD2Hr2hj9ysG1JQNa8cow3k4fUPd53uHayQBdiZRZ8koCJQhwJ6B6QXEtwPcDpm7PvwM7vuLUo6SqMKUqvhANbZ",
  "key10": "4btuFLuzYgakUEgmQuFUEn6PuYofS8sDv31TjuzofKUJJFC6mJetU91NVRyv9UiLLswVK6wiFbUWbthNgPJKsiag",
  "key11": "3sAa1uQEHzP9rno83aaaVDEMVQJfGr9AwLiM2ujvXePo1kthnT3eFv5eBHaJfxqB7cNB6yhyCzQNsA5jS9Y1Gein",
  "key12": "3Lgg7ec9dfRFjxSNUNXy1VRRGm2kTfTmvYaWsNtBG2kxWCD5PKJvr8TNV3nFbMvbNdgv1jxr3LyrMkFdH5ixiaZ1",
  "key13": "8JECvEFTbB7JEgGH76YVPy75KBqCALEkXiy3t9KTjWQYTo4pc2XjHXjNfyQ844PotFrB8VSdStQNjc8kzKkarkb",
  "key14": "xu1xB49zaaTbyMRdg3mEYvWdzJ3VViM8hGRmwENM7AbH4xqoezKMyRBuHe3THhLuGY9oR9ww6gBYQKtV6DpcnfP",
  "key15": "3nMvzN4LYPX8Ez6wGoaSbcgQMLoeocR3FaauAofiX5havCSho3bimVNk4knjnyNNzAgvatcGqLD9Vq3pg8FwZbBq",
  "key16": "3c9YZPjYbD3TxEP37ZL7qfzcPzU3CAyKX372R7npwvHp2WwQMp6bFjd5LMHNTt4fX35QX11BE8HVvn9YGEGncRrN",
  "key17": "43Gwp2Uk1D1KDxjeE12t2yd1oQ7kCmx993uJt6rcSTWVBBQjogFtA9xTtmA6fsWFFjwnKyq4uau3nJvtZTuvp3Tu",
  "key18": "55TmnwKDmhqQRABUk7d3gpEwSxLH7o1kwDd438tCozAKS5wPAa7ykue17jxgMDJ3MUrub975bdXSCE7Dqvmv2Wyt",
  "key19": "3K6ENQL7FA2dNEppLgUxpz8NNgVgDPTKfPyaqhor8RmbM1uroU3bLboPAPowKgjALmafaae58JtxemJSvYwy7vJs",
  "key20": "64u1cGZsP6R3dPW6gNzZ66f3ToihQbGpGvBsG8rAbrLtWbEF9eer6JQwQ3ae9axuwFrP4nHksYD5ZHLJGUNmkXsF",
  "key21": "3hDLw24qsUBREPvanGAkGpzeEkBBVinLSi8E1mp3Ewk3v2FqsnbriRATjYZuFawUNgwMtqDnBHeTs9znAGJFYw1h",
  "key22": "2iJDbTEWCH1AMGEv5HipsohHV31ismkgaXxjg1M6aPb78jaXhJaojR8SWfPf9g8eNPnD36jFzczcLNdf2q1s1Rve",
  "key23": "61pWUJxtcyx47pNboXePyYwPXgiqTDcuBR5cNjaGiX3inAPYKZ884213ZkJbtCNUtUFVJHj8nhBBAXePcL9MZqvR",
  "key24": "21EjNqsauGFxjqNzvvhK1KosLJmDKG9PxBPfLkbH2CGGzC5Mj6t63e4aJcP3fMR8G2k5dFv7STomR2TLHddX7e1m",
  "key25": "2WCJznwNRsnxkM9jgUL4sN5nWVuAj16BUEE2C99xhJwwwz4M413rQpiwXNBLVh5rmuBcdxDEZVPHwX4zXnM4b2Cj",
  "key26": "57qYKLH8V6t13yxTBGyyuW9kit3LZaRuidYNE8a3QfHRYVK7yv4obSmwLsVryHvpsZXDFdzehA4snzHQPz3TFTtn",
  "key27": "2Mo6UAT4xiNJ6hREEo9499fppgDUeshuhxBLMd9tCYr9nPerXyQm9YYdiCVb8MyHUAcEAWHdpeuFWNgp4VeyiHyV",
  "key28": "oNZxvkGDDDCZKugVyCtms7hPWR7VihzEwBCZkFQxrzj4csQHGqnKvSz2H3PCKUHJBJ5KXbnBJYbMvDGCWsBTd1T",
  "key29": "2BBf9G43EWxcDQvpNXEZbNtwd79Pnk6A6X6DySvuXfSArHh43yH8cYrzYpYC2qaf94TshgWr8REEKL85TsxkspTw"
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
