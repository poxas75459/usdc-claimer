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
    "3mGyGd7QbP1AjXvpFQM35cjjS1bGq7zjUDuQoKWKtitTQmEfWKhjyNHLfexuvxX1g72SawTn69yDM6QjiV8GKAxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FENDbgBiYyuNi5S9TyRYcwYac23veSKpRtnY1Jz8pyeKryVMXqTREDjgy9BoyoXhCfGFvJHv6rsLV6fDQjq9G7F",
  "key1": "3J5FNwCju14CZyppPpxbGdXa1TprJcs5RYpW6JrcfMYf7zT6qQeC7Ds1H89vCfWs3S9cwh6fTo6ToSiuYbzNFq6X",
  "key2": "57EEMvJMtKGSVXrtfnFgSKz8yp8RatVYfNna3t3zrmeB5Yg4y9EyL2xanvuMHzp55q64HoGe8ASfyLWmoaTaEMyX",
  "key3": "375z59mzB37g7HK8D9XAreg8JA2navwcqbfQf3cPWhCAt7fc1FfsRWr5TBq9x7BYYJ3uLMUVCdwdQc1JR7S5Dfwg",
  "key4": "46WFwQcFQ72JMaWCgHqmhfvqhbS6WCg4XVJiCcYH6UCBy2cdwrktGkLjZTZJ2SNP33VvaL8QyWtdgQKZR9NDaiTU",
  "key5": "3pDG9Mn2FrtGd3NKDobs56UDhEpG2XFfDWSFg7ecaYpBGGvc27eBN5zjp7SEGG9h4uF2emrCyBhETyx5p68tjNbM",
  "key6": "4TnUWwuaCnFJLdxMzDPZTApytsosLehsR3XGcWrZ9D2QGckmCTFstQxpASTiiWpAf1rhUZyvnk582LohvbcFZKkn",
  "key7": "3Uf1GA2bD4GvVN4WjcFwW4eKK7Fg3QkUyxpmVSqqee1SfTUvm6FPGf9czzywjpfqewkTcd4jYgRDwMp2yEw1hMCZ",
  "key8": "2dXfCuHNAqmmgrDfwVJcBbXuxjhvirANWzAJyJNWrjcoCac7Uy8raeHT1BHZsfwY4aR7MMeAeRcBxzudnJeMmi51",
  "key9": "5f8n8z9SD6BU9KMiVitWqknCEzL67C9v7VPcPZ8cHroofTqmHu3pqHJYoRZYH4m8DZodwXypKbzHkLpYe4mXz5CS",
  "key10": "wMt5ePkFak5rFfJRBCYR62GxLocLiThSi2Vsdj3GVyvuRrYzfW3XjXd8GCXDdWgkqECb68fDmnDdwzFNLpwfRri",
  "key11": "gqxwNjpVwYtFet7hiHcmSxD38np2zxnhDPbJFN3enorNqrPe5wpp1WajWNWTdo3ZRZVqoT7AHzFSQRyg2zxPPgS",
  "key12": "4dKYkG3zwLbKR6fusU74qC3NwYnbWaemUfFiu9YPF6kh8TrqGjMBiQtUCS2vK9uW1q1YiYRhPyWfu21ZUQGTXcqd",
  "key13": "5yM9JZVYWqKF9dkb2SAS66CX24Ko3myQtYALVh6Z7PXDt2tyonFzSDDqqcNXm4Zt9jC392m2PP9iYLQza8yDZTkT",
  "key14": "2FQrFTsZf1U8VYE6yJcE8811RFzW5NLTBqfmSxfwqbpxMMyymhLdFtryXRcZYmFkUx2fzoC76xEoRSBiPv3Ud3sY",
  "key15": "4vgz8KQiaZdL4a4edGTjUr62T3Y4R5hHrrSyXo2YpXvRafNBzzTy9z4yEPnWpApmfUAn9HhmudQig82qdYMStUfr",
  "key16": "4ysLKeAUXgTStkgwWxHPmvzk5Bm7jQsFMeVj5DqJAYsruMUYh3UsC7CYQiHvnZ3gdvoYk1u1hrDRZAiTzUfkLDqc",
  "key17": "2BXQKL8vxLtUGJGffPDNvY3ZQognEWRb7Jqa43vBPhdmHkaNaAGDemZA5rUFKy9fzxraaet4ean5ywg3STscQGTe",
  "key18": "5fbyJp4J8G1VLif7aQHSd1nteGRfZefFeQhKFv5vSZYVTFEtAmF6Ld9ADvhuttchaTf1DLLE7NdkNHQcvVXBwTfW",
  "key19": "5hT3DEWGXGjNdjG9jRAwMXQ48Ajc6TNqrETTnaX9wGSiRJbw2xmwLcWEAU3ULzoQJQHsJ5q5tHTGGYwcmWvRbVs3",
  "key20": "5Z3A4RyGsXU7XzM82sqBAxsSYkwtu4DCGJsT7QcZarNqn2vZny11Zaj8ESsvwrh5eq86MYAdKtL3Db8rRJEoJGLZ",
  "key21": "2uXMRyCjeCh8QtiWXhZB8XktbQx9yb18ubWN2KrpMhuz4qx32t5S9Jr71WyAcavGmUSjeiDLRdmij8HMrJMBB57J",
  "key22": "4W1xJcxkhQEn3Ntvh2StxJ1mSJRcCY3VJgqavT7KZtCts25DZPZG3NL52YPedAdWKVijNdUdve2Ua8NTqnFcC1nq",
  "key23": "3KSgZdMnCBZLtMC5UTxoXz4XuitDs4sS57TCAVZVCG2N71J1eMuDUGjU8FQ2q4XcyCYpdNRTH9tJ8PBfk2hxKi2T",
  "key24": "vmoicNmVxa6pMh6vG2Lf4MGmmVn1AXkCwFqvkM711WqYjLmpRqy7vbnLD7MZJo44yeWbCok2gsYm5ynCU9P2ZbB",
  "key25": "4A5xjNRNgAKkDyEXi1fmWMzBYEbN6KnSRqQPNVpZ9ZWCZtskn8XjC9oXa3xbpwzXYK6gNw6YQLZRHD2Hc7yXpoMg",
  "key26": "4qDKdVtjhWtmjG1Vp8Vpf5zGFRZDajC8UR8HPAs1MgVWAjhUdXginUruoyjuApWZo7XZAUv2EVtLEHk9gK11pP9V",
  "key27": "3JG1dAYrcmSakG8uFK8iMkZQKV2vdtV817JnidiPqLX5dzAk6eiRfpmf1xt56Xy646zESKua8et3gWnF8Kh9eq6T",
  "key28": "5oQJCdic7rbKbrQg9eEFq9xNA4E8oGoHVV7pUnBmAUypm8HNuA4q97Q8Xge63LYXGPugjAWfSyk11a5ZxwWXFoRX",
  "key29": "3T344bG7kHxu47Wbcut5FutdCnn1R4dAcTfJEvDHPe8aGHk4huvDxkGQxE5CT9XF7XwR9F1yudQrsrcbCXHFf2Ld"
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
