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
    "Tppr1ehtrBKLWjFSUAewbonkJByngeihUc7BiPrKMuUzYyA1N7YmhFcZuVtcstpPmjjdrZHJsQHm5Ld6L1SDsUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g2TyiCkTf4k8oem3BqRAnE9L1P7Lro4agvtMNBXEQeBtLbvUJ754PhjVt9gEVp8RSCFpZ5tnrrPMaiM2Lc7rtVX",
  "key1": "pVTWYphJwcQXg4bxmEW7goFqA2su2b7hLVShftEycG1PJ4ccMk2ydYpiZjDAf21pC7gv4TShbqE1tXbK75QqLZy",
  "key2": "27LkmEoF7yCYqpx1YKhdERbRN4xCVWmVGGdgqtkuJnBEBjVHQSnMznRvsns1Qg9JhDd1iv1B2CfbpmJqpxu2VzQy",
  "key3": "5U2zzJMwrgNW7WYM2uFfstgqiwrbVhwW6mtaS1Z2DJvutbMGXqinpw2JkrfyLfNRHygoKhwTZ6vVJpzqjRGWY3N2",
  "key4": "5wY8oqPU8L47uj25gxh59p8t9m1MBkE5SHhAGqTQzGxuyG4P7AnBk3bYfCf3XjGGVTFfuBkqKEjxYAmTKnWYLgdd",
  "key5": "4whYV5kvXL2oVLTuq6TN7MpbF1oojeVZwez8XztWoD6971QzNtrXYUuPR7bz2aSMKgt1BdsjTb3jSBaPZLPofA98",
  "key6": "fgK88ZZy9J8QkLbd14kUdgP4bPZD9B5tndMRPQUHTJZujRbV1Waxw1hGm4fqoZkpTMRfNB24nbQNhkVYWGvHYco",
  "key7": "5gsWz9wSBJ6g4PMUQGn4QUAQA7tKBUKhpX3XJpS1aGrpiYrrHwAtHtaEb5vGBmZ3uoLVR996hwQNA1dm3prSstv",
  "key8": "PTWK94ZPVECRRGZ1b2oBs9u7gsZy4F45MYqK2dfFkQfygqgPuPHysSbUgDkYhJWhZZFEvQQWgLFbQZbQVaVf6ep",
  "key9": "4PvcEYaaKsvAuivVBX6tWxA5xzo5bq2C9PeuY8aupDRzE7yZXW2w272cJ5YjqVRb1fSfTLbKpvVf1tE7C8RyS3o9",
  "key10": "3xE5D6gDP2jPzDt78zDVWrU5aTDFg7oGQNPpnpwxGYzXv9MXiaDVanM7LKHzSGohZAzHA4bFG59PnPX4HBtpEaoJ",
  "key11": "2NYyFKrVVGbiHg8pKbJbqdteA6i72XhHXmZ9SmxWTdR8vYGgGATxhwCruENZ93hQrot1D4L6WavoqeUNDJ7E8ES9",
  "key12": "K6U6v1GBFMCXfFYQkFChWTme6s3QcRk7wfWtZ7ZZxHrLhzbzafeRY5sDrQp6pgZLEm4bdTyKPSykpaRHAMiw2L4",
  "key13": "5NnzNz8CjTC1aHLAVLCfk1fKTk3ovAATgFi9wiztRR7GdNgkjXf9ctRgagFWfPgYrR6BEJg7YyLzd1dQDuB3FbzZ",
  "key14": "3yRdJzfAoAn2h2hMiRJkS9VgfHfk1hAD5BM6j8wbZMcQHRpPnswergQJF3JgqT5X7YjABvxwRw6QzrQPKrSLU9YV",
  "key15": "MomnKX42Q9CS67k7Qy5PP1o5MXpLCU3J3YATVHFZbbme4Bt9VfqSEY7uxfwb6ggP6GSTeNAJ7tiSM79aizPVnW4",
  "key16": "2UBzT1BWhtCkSxZxCu4oHpDT5zJario15wWDoCBNSQgyseueBuZ3b55JGTfTB82JT5oa9uJ6LyZREKo6CHxL2qxa",
  "key17": "2aypeDHokRG2y6nUyKohTymiw3xcH2BLGJEy9Dj8kxf2AmhiVz44icVJEPTnHoDvhYuL7akeeNa7YRpd8EDcUoog",
  "key18": "2Ziy8Qazh1XLx4a5ffrrBd3UNx7ChqGoSkZUMdGmCotKFutdp7b5iuNu2USrZi1hX8EyekM5N5xBtM4Zy9HuAeeb",
  "key19": "NuCqRJeNjrwDgzUk4kdqQZaDszsnkRxFeoMKye7vR9CE4ZpNRQQRiMnmCNEgpvfqJ3w2F1bbpHCbbbbJo6kYFXk",
  "key20": "4ghL9SUfNAmY8CeVEA4SXv8Z8E4U8XbV5DSyoCySEuo3j3VLTekq7iSxDsdtLUBGvikgafPYmty4MpdreRqjJkzQ",
  "key21": "4rSN9KzEqGpZuEig7EYwEqqPqjvBG2ugUbd9BA2iSrfzMGboYzYM3eDvr4QxaZgy1Hy5tvcy8aqjEb3eFymHeqTC",
  "key22": "5Vpeoz196ckm4fweViY93UmTfH6A3CGCHrJztbQbX46pXSB4ynNmCpgE27Sg56Q6x4eBfRZdKZM6Rc1rPmPNE12J",
  "key23": "2NLFTdReKSyjZQzSpERjgXZhHSP931vJVQYTzm55mJwcFETKv9GLALepUNc7PE78byGkDyRze156vGEoxD2J8Mjb",
  "key24": "2n4Ap9iYLgP9FG6xax6i72qxfo6bmFbzAr1DHSVLaQPdpjRcuoFW2QgPQvXtvC733pkEz8Rq1qXzLARykT9649hV",
  "key25": "55XG8LDuUsTHk7EVeFEpSw4duT46LS7iLJVtaHfejmWKGWXn271tmcnrsPABKkQfn6WgaUK9ACPLc2Fg8rPgNrKZ",
  "key26": "5SzM15h3SBkuC6S6kzegywhYgQ9w37oNDVtvHHR78NUrbj538GrZC6Tne1kPARJ4d6ZP2Hs1LivT5ygb8gE4FJkP",
  "key27": "VmN2L68eo2UG63B2p8BC5izG4726DVRnrrv9BvZVzAjRyo6bJZ77pvUAycN7yvrLZqJ8ig4p5A1xLT3yajQ5pF2",
  "key28": "5JMBEg9YRfeCuKyaNTPycVVYV69tY6neRCdF9kVH3ani2w3JQD7ACTN8UgVSMyEPEkizfcKtGx3bgUAoSCK1fyRS",
  "key29": "5vc77LzaXGLhofnzgqT16SpCe4gWmr7rfoUEwH2Rk1dAiDaruzNVGhpqrDB9LXyZi8GAP7Wew5Z9pYPbfHnXgZgq",
  "key30": "doiR7iJsKiCHr6TiryXZMYikYsUngQLJRcyTWotRMUKuddcMzpbeaQPrnyHpMxLJ8D4BQ9D3TdVyt6kwCph6gK4",
  "key31": "2f78VtQVkWMLgmf7XAyqsFwH3dMqpCJ6GNhWfR1ynnGgtkP1vQVJSDB3t1QrhX5vA12jtXFtAbWejRYaLSeZgZ6G",
  "key32": "3j78T8W1L2czFHrAGZLEs2JGTmx63iDnzLtchS5QwPV4b8PSHX9Uny22a9wR446E9ADVNTa8hj4yfiKVY7sZ2CMN",
  "key33": "4G7s2TGJ27eGPFa8PvmEsaSCeZTre9KY3ksBXKcchmUoXjKHrdpCX7qr8ZAd9Lpa4GnYiAfo4g2bpAWheAv94k3u",
  "key34": "5SCuMANDZRVkMjXcJnYvBvuu9USGy8LvtJcWqvPo65P2a4FZ4dTXicpNq9mRvgaNKjBTowrd8wEdQqMyK8A9KCTC",
  "key35": "2A9o3Bhpbj3iMMJnAvcBUwyh4FodL72xinKQgLZ4JPnUTG3CmeiunpqYX6bJX538jvrco8kNmMmjvf6mf9ayvrtK",
  "key36": "3WjCwp82opgLSJrNmxRQMTNjzkVvx6qgb2NuLkYCCKXLvR7aB5jCsYw5T9nCQhHRmWGFumpwxG1iLs5PhPmx9ZFA",
  "key37": "4BA8SLySjyJ7wW3mF8y5Ww81qYRsHzGAZtuR6yEEwM6fSypxGRDFyfRtbuc9aHuuMGz2Lf5bMe4kLQamoUUsuVCg"
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
