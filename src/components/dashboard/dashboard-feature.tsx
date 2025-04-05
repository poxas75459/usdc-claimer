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
    "4a2iPJJrmjoSAhReFUD7uaejrntp1WggczaZTgbUzVoTWgKVY8q4JBH1Ey3kppJB1wALfJgpWYoq8ia1FNNk7xuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X8fKmuNscw9jdLDw54J5gDXFxZqrJvwknw4mzKEdAwakk5xL5tGx11jZEU9v4FjK2BFQn8hgzsZxdVBFtDgMbuA",
  "key1": "3GcNNn6Ui4uXM248ezXQY9CQtfbAwiPhtncxswvRCPmqybjqr51gMFibFLjGGCTYqhxsVdy44nJc1yyMQoQgQh7G",
  "key2": "MksyXoYnAg9ykFJJkGvGNXoxG8uQhuD9pJ8LqwkC9SoYBRrrKbG2K819h7ojPvQTHMNSTG4Vp1gz3jHWtjtHdqY",
  "key3": "5w1HN3VeVX2LrEqt2WH4pU5L42BFQrV58XgBPUC1TrVB4UThvMkWfi3mXLDdCMLxs61JF6kJZfJkf84ZoY3yW69F",
  "key4": "4Kjx8pvfErjuMdAhqppBwspVfCFJzXdA8wod5rJnHzvYJRCnivqg9Edg8KUF1JmQ8AakHx1KNN8YVLP7KKdCztaX",
  "key5": "5f32W7zzVssJTjrDhj27nvjpbxLtgUaqKZkSe1U7yMZBTJpyw13rFY283HwqhewnEZEqrpbu5HCWCS5GPqVH8T7Y",
  "key6": "2jGGBoPeGn6eJcUbXMb3qtGgdtxm9JCSGSRFhgC5hwF55E1ecDJW9qQMdPKk4GzYwVQfRtkbiTt2MNawPYVGDe7z",
  "key7": "2NwHhQV9pSDvY8nQQPyGoXyXhaRkXG7BQZ2n4VNGks1LVnNQpYATRZxpZr9CS3szbkmfbsmLbmEMFffUm8EkufKX",
  "key8": "3w6puTACirNrxqbPEdSf6vCWAXaykYx1GsMXz99Epm7cUhSPFiDeNumkCpnGiUA38z19bj3V8Bn1bfYfuU8rxaxy",
  "key9": "5QJYbmcUfAkwGCjG7qwCxtjd982gB71hPvZPuRWQE4z3Bg49nQGvmvnfFaK21N2vKLVqm2Mjj6dmxLjD3bb2n4QQ",
  "key10": "67pmtsd1r71ioyCpBevMuic3EMkoe4WdfE2TQ6WbzTpA8eThS6bkfYY2EY2PyKFJgSGorwAQwhgm7sFfnujESxFT",
  "key11": "5xfAHrkEY1t6SiJNJ1ithLbmRTER9heVjHvJB4N8dxb5HZeTG61QCtamEVTQjjSbshEsZtJApc4X187quzK8aZJV",
  "key12": "2kE7Hk2TrLo9YLkS81QFpkbWkECgoBwpW3ZKCRoB7b3974WBwS8YN2hYR8qu8v6gNYUo7pzmMEei5chXZcekH7M8",
  "key13": "3NtpanPD1zHcpsSRuU5nD7EwSEsMTTLcLt3F8qSGRJvKGxsrt2UcditiAmfaXHk7w8Z1upnEYH7yxqxa1bHNVhS3",
  "key14": "MyqSkqvkww4ugZWxVDJXZygP2mNkrC6JRh9ZyFqFXTQyKCdUM2WpTraqCGkBgFGprLSF5frU11h7vu7to8r5Eqh",
  "key15": "2YqHKQHtLtNgrvR92SK1uThBRLE4sAoYU2cfUhVMrHPT2Co7NrCi7NaqC2g5Rc6idkujiTsxfXkQwx84T3tRozfM",
  "key16": "2QybRmFopQjeDKEStTxPQwACJv4EtsvkaFdqy5QdAi3SN9LnjBum8MCnU2s5aCM2ryDs5BxR4wgdVtGBY2QctPio",
  "key17": "3dG2JHkNwLu5BvNfhxDSLN8qnsx1ie4ENLuuNpUQvgwEsLxeti4Fy1dgwGjpdDwFxRmLVsHM8NyjkuYXA9oEaAZb",
  "key18": "5oiWeZtWEF5X6KLT7cKHgNLnZRuTTJGr4cim1qQwpLPi5BHDgoSx7eQJEbX3eSLAZ3G6afstaS8LDkWWAePDsur8",
  "key19": "33iBgFv3ZbRGJkSHNbhJivLFbdk3T3DCJdTrMi7ypRxsfjjqufvBQ8CnxShJts8vBsdungXRXLT9aAGvom7hyLQX",
  "key20": "3KuNmW38FJgstq3tgV75TphqEFJaCNjHWhSwjbyzfy8mbiHRYx33peugrtT3edW3sQPinoMMZFjqVejnPGFo1ep6",
  "key21": "44bSuZMneXWEP1co3fe1fJUDdYaLnGWkzPxeXCEiWkG5n4R2hv6aqoHUjQipvTLAWC8XtFxfJxhShcjfBSzt8Ly8",
  "key22": "4arUHCNCPwkt7Z7N6seFubk4YFi9Jh6SbDy83GQE9tWHW5n7HsDd1i5QfMArd2jD8BADmPHPcCDafpLssakzWgAU",
  "key23": "5d9vGtg2PURQ7eaTNt1meMWDQ9S4owziUc9yG1i7pkqaWNjp7cFc28txqWVxT4CavhvG7PMFJdioYQwkLC2mxhD6",
  "key24": "dC5VZ34nAnyeaZjfPfb4FrZ3x1GhDQKuHv1jxVCQoBHtFKWbtm5uGWV7q3Jbgj5khWWhD4oHU3XUxBHVAMvWqeG",
  "key25": "4zdkcP6ZRkfxu6tR1jRB4tpZmVYrwFHEFuhRbfpJvF3PFzj3svjt5u7JEHGXNaaMKQx9ZmevrqXXm6H85hLHcyUP",
  "key26": "4XcMiq4NHnr4oW36ZxuysabrsY9g8kmaVNBCD1jsHM5vtrSBBTZqmewPTs3bXxN7UqUfKZAdBE8nt7rEG1DVYAMT",
  "key27": "24pjusvp6jqDBtvH4ajnEgX5Wbwq1yAvHkkyFtERHhfbrTFfXmhZwAD4Wdov1ZMTEvLKXqUUdhBDfZnszH8Er7tB",
  "key28": "pmfoK17wzutJJYAhqaRRSrP1siKnYuQAw71UbixjcTthh29k2PWZQkogqXAMcT5Ceqt4LYUuostXmQt3wYvM2t5",
  "key29": "553AA4HhQnaHQxKHDvFUtJkAFjqVfD8vdxVAvHXQaJENcEh5XwiAjsRGqPPJvUZzk9SpyFJ7DKXLsWNNSkgyrK4G",
  "key30": "5rAQnLKVszEaW7y18pa6BEVMU5P6zytgrHj7wJA771fburw16uZmNTgAc4w5Z2gYifpMZse96MfGc1LLjpXuJ9Gu",
  "key31": "VS7KEyZdvHWHsHxVNJCsa8iXgwZVWpPC6QbXF15gxZNYjTYe8JqH9Pi22TS4fpQw3EAQRK1ZiwNguBXVU2GRoSx",
  "key32": "2WNChTcJgPjuZXcPBU2ziDa5vw3kHR99TZu7tCTQnCGF8nsXwMNJ7fgsPF4AnKsKPq93aRqubnvPoJejG1TWYznz",
  "key33": "355W8dy53RgejD8xXbnzie59RVMswq3a5vYXjtac3wHJLuahJ3PPrqbmdo6iJfJQuuqrQzgV1VcJyHuh8nZpKdsK",
  "key34": "5SrBqufBEA5Nn4dKHyVQXvyMLnhZPVWMqEsRpvzpQ6ttJ7QwyKxasn6BuSiwDYekg3zYyBJJ3nN1UAsZQkCpQzzm",
  "key35": "5r4sPSpkaShAS97scaX4xJ8VYwuJpPyt4oNu5kvP1mzpHScaBZPaAEVmsy9PnzN5tr3S4Qi3tQBKtpt9cWQWSwuq",
  "key36": "2zS2wgY8KttWYP7wAybJha1uKyKY9gMSUVHCUCZxiBhHZ8ugzTN68N5CTZzMpkr1QWPgWm5AKJ9PdqbMYuUJWMo9",
  "key37": "MtyHcMP9Dn8tncEpzxEWHY8FZrP7Dg9HDLb6VUardmSvK8QgvtYwckeNtWvDJiPyUAbp9w2BWL6GLA928GqSWTB"
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
