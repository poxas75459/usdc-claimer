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
    "i21GrcESuBiveC6xC9r9xXE9N5HBG49YezwFukbNmtr48rXLsBvReVa8HSnttmLhGiLaNhTpGrD4MizLRfwW1fL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXK1Y3q834vq8wsLrb9JvwboFotcuu6LMmAWD6kWjFffKv2JouY5vZc14TBUYz79QENCMhXVGCM8vrANMM14ACV",
  "key1": "3yud11AxGxHRE5PYXvEnxdCTAMHwQ9n8ypgC7B63fvG9PnSb6pTmuVnHaCpTtaptUd9Lqn38j4huwwGqKV7qMUcx",
  "key2": "5erQU4oZTM6WUs2zGTqnpW25gsG4XAVSMfdAiX9s7eYaY77v54Q7jWCmrXNSEDDneECpsEuD3Vy5w9sSGTWFpWLo",
  "key3": "22aNAwAH6zX1wTrXE9dUm8iZGFD1U4M4cHsThzyLfu3eDbEHGDqfERyGPsgaRL9JcfJV2C18D1UQhwjcRGbgNmcM",
  "key4": "2cvbxNdhevB6tLRrDjav5Mc55gUHPwXTCiVvtNs7yKWRp5qHhYYDoykGiRr1GgGP1Cs2pyCQWrVXKSnkTASvZXoA",
  "key5": "3NEKe7DCEwA6W57zizCBmmLZAK9ampBo1rdUGFym8mjv5iiXbn6C2eCvyjEeQGDu223XqvgGeyj2YnBw1RsuXieQ",
  "key6": "4sVrvbrVjrexDqefGXWkXms5m7MuFE2sxFis1DRHus2Bgem7cFFe3tLLTJtqrLQBHcFWpaTMKw1Jx1DeehtWtumS",
  "key7": "65LxkegbBryUTZYpUczSDDCxwtapKTvBG2voQRzSn8uQH4ZvrZXK1f8WndC3tABiGhoBy38osqBcF6ebLwQe4LDc",
  "key8": "4QZAKRmhyGERZAsBpBgxKzKfqKeQWwBAQcDzx5ridLrp7n1A4E8PVedufJRVDXfuFVo8nbTTwJMsRY2UxRRNgtaZ",
  "key9": "CprCacApFWaRsD87QYZhVBeSeXcNHgtWTbWz6uYBBMzVjnCSA6nbA3izSmV2VRAB97VcYdr24xgxvYeMJtrzNdu",
  "key10": "5TcEULU4Wn8cPz1GJM8nKYxUzaiLpKPQ92nJPwjpLeVp23jHt4sfXbp1HjiGQLnvJ7KP9hyxp5ZxngPfPJZB41hk",
  "key11": "No4NzB8MVm6dLmN5v7sFFA8GszvJierCzNzG942ZGYWJ1r8M7xX66L9TAbVtv1S5YDA3xY7UrHD6e9EDg5NZEAt",
  "key12": "49AWypZ6WY7sYJJDR55qNVQchZfhaLo52jaYcCgSaXZf5f9jhanwaKQU5wVcPTxGTqkFki6Mg1qUViMySJxHzHLF",
  "key13": "fPocKeP9otjmtVNB4BWZGTpq6UokrYgPBXK6ZmnDPVJZfGWZX7UHBXMSnWSj5Kh52yJY25kmReYASvwYetKqCRw",
  "key14": "38A3qteRvGuiBjFERoUopemecvHWkTjvmF1CmMTNQyFiaQy2dgUQd9GrwoCM9Gu6kti68pA1bthe7j6FMyaA1477",
  "key15": "29BvCru9rY2cX9UaoGgzQEms3r1bR8TvNSPjWSMBMErdnfjUiW2C7ut9dsTMhtfU8ik9oQ6pirvaByNeZoiZaAYp",
  "key16": "3bCB3v7dzTi8GF9LNymPNyB8rd6gb3DvdLpsmUdymyWE73E5UBS8p43pccwfSF62fGJgs9EtDHnVCUn9vK2BQNjX",
  "key17": "4AnyHgEHEssuGxbJtUxximH59uwHUC4C98d3wT8NrfzSJ9bNUP4kQFMqRZB8Yo39Dj7SBMXfZwBEKFqbSZfhVzu4",
  "key18": "4c3sfsmTNXk5H8SLazLA77Ft8tyk8WnuGj6fWaNkX6eU8LfFQvZXoWUfhN3xwFqAhgMjmYE3zH2ZLhM6bnSZKs8D",
  "key19": "5JdH4w6SQseRwQwyXfpaqGkyPgAXchQ9Bydoh5RqxgpKCoegsWdWAWc4CeA9wKEafUoi7qvznFYXwxLcN5roynLi",
  "key20": "8XY4w7fTfkbPJjqZiEuZx3ixmx7ybAxPJjLDd4qxWEXtiTZ8bgKE8a6N6C8Bfukx68PPWTNR5HWDtrukjcFW9pU",
  "key21": "4bN4arCHbW3ELkVoeVDA2rAqHXBT4UUCRA4PDx4az2zF6UXQwbzKejL93CbqNzhptiCXu4bCNj2nkrThu7Czb6V1",
  "key22": "66rAR8K8RYaYUFUDt5A9fwRGGqajBe9zC2xrHL9ZqsWAburahqeCUZLH9MgMFtswLi6Dx53iXXbWApkVt8L88nzf",
  "key23": "5tvxKCYoQELU7W7aFyjPFzyn9EcYyDPjWhfGXS9iK5787LZsNoSW4EVi72pmfo5jmXfnT567w6YSpWxNSHbTWD6A",
  "key24": "4YPHcMkAx9WCF7fPefvHwE249AJW8bA3PLawQxVpKEwbHF7H8XwZR2cds3JK864gzyuXQSXsszXL8P1VTtY8hxne",
  "key25": "4nCdTxJFkod1N4C1H6WDVw1a33KVkjc2GaGmEiyVaBdK7q7LWGW4UQBBVwKTmksiKD6qrcALm8YXmCU96G16sRzR",
  "key26": "2Vb9GdL8JeqUbeew9wHLgAYaLqkjzcQEonmRKWjfVbYQBwJqB3NwQiucAfGNX3AJAdQyHFLptn9JbJrS9zPcPA74",
  "key27": "44yL4WWwKt3R64fQ7CbzSWcfupoKcDq1dJ6TLE9Ksn7dan3hRT9RkfCose9HhQzjMSKgreV4muFMc1zPTy9FUqr4",
  "key28": "3STG1an3BNCQHEpmS1AiKrtjg6yaShxD4cSb6oN2fPYzvraKEc57BhHVo5ESDFAirQwyptCGmTzi6DQ9Eh8LukwB",
  "key29": "3WfkiibB2nBVXEHkdh3mPe4x5BSfvEdzzaSCc1gR9s2qFvt1Tb6upFvuVyNVaQTJvMsPtPyRtgNzdd4BFWAngEAD",
  "key30": "4eKSeQGJbWw32J7PENjVzV5srHJvjp8aNKparJa8nPQmzLS5V47Ld3v8r9wMAhZp2Xkw4SgDF9EYPbFiLRiySTgS",
  "key31": "5FWBorJEZu2SRmrcjMbUqcuVXGFmGxsGxsh32boq5GhskPsQMbP8npdfLVqqHA5K2YWSSh2n6UPssHxdp5MKYfo6",
  "key32": "2nENeNNbDTj5AL7H8gZxnd3s7K9o1GVv7yR4zP7nANh2GfSYXRWZJBZ8xkuP3vG2epUwngwkXBeBdk9Ra1iHSAcV",
  "key33": "24KpRXsoPH652UK2zzqyEDgUz4mfRRFUkXQ45ikVvJd1qxhFj57yw8cNxV4FY8XwwwNHDZkMTaUaE9ETEKpuqTA4",
  "key34": "4c1HNFqgHBvy3jXn5NVEWyfCmQ7Et2L3vGUSap6JNC5DYL8JR4ST6HT4L923re67CutApysH159vHUnZLaZNMf4w",
  "key35": "3TG19M8W8Kns5BfnmvgVaLs5SU2sDTdxhZsAHNrPEiB6g99LL2X41dv7GHjjy541BbiSAwJVVdbcPnY8mqkJf6zD",
  "key36": "2r5BFuPvGHUhxR9GEXTEc1kVfU4GFFueycHcfwAhKidnBwGsHQ2xqy6TohE8kHyHiDCht3QTpnsAXvQcfTrdbTpN",
  "key37": "nR7i6cMkPQjAkEj4SQSrffYa4W5csQ77qosyiPh6JwhRFhz78FZJ9LpAoPLiP1jTWDrsfQJsVA8gxbZpHxYeQMd",
  "key38": "4tWWwH6zNEKsSMQAyX4HAfX6h4qrJeDZ38xMdocGSHv7HPiRyu8cN3GQoEtaz3sdLS41Cun5y1drwh17WWamwGed",
  "key39": "3TYVYc2LjRTk4CZK4rizUxKJxiAbNgLWpNsDHx13qxzSecs83q1AwqsUBEbD5aeDEzR6rfYa4bb88LAzY5hzTWDK",
  "key40": "4JiRe3x9R8RvTyiFJWx1egqG6em2ofTjuBeh1ZXaXzYjQqFPEVTDXubyFJvKMx5Qu3E1fEtVKfruw9PFrSeK421t",
  "key41": "2uXYdPEz1XEZ7HrpwZ9aCQuiWKAp6vcaA2bLtodfYMBnAC8wCj33TQFHmgqtU6wDezbbu7jeezapYoRjonin3U3V"
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
