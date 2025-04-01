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
    "2MgQyDRtzXT3Z69xT6WGLurcteC66BAAR6bZcRf4wFcCTaVEnUdqG1qPe2wDNC75idMtHcY3WFmA5jaCDW6AkbCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DW95hbGmKQcc3GEDVtNLvCnZjfWHZSJeVVAgqpv49N68nrZo3HtSfTySnkVGp2iAoFSUHpC423rS4fW8rMdSxc",
  "key1": "3y95jUte3Wm41Hxdbbzfr6vyGVbY4HxaxEUJc2C3QCHirL9mLaFKVmbcBmXv4mjcXmGVk7JdhCSfCbwnETYDLBuj",
  "key2": "KMKfjmrSJUeZGgM3MRLexXiuq6KyzccKMnsh3dfrjPtbMJrzjRpHFNQtqSz91bBgkidr7CpZbk6APpxZNVZPasd",
  "key3": "4mvw1t77NFPKuNxMD6TyM5XCmyAwyAJcsEPwqgzqmygrRrhbVgf5armmfxnbjC97vVri1Lz6ormFqFLFs9bdJXmH",
  "key4": "3cR2DEyBYQ3bj6zdSNdb6QzdoLaURa98q7rLPF89wm7GRwVpqFdFQnyiZZnFMdJuVJAvYYUMjNGxCFZ9HihVZfXb",
  "key5": "2p5hjs5qU2FrogkAXys5hGAcP9oUaeeGHwzobSGXK4BTHZuaZJauoYtZw1i6kdE3EoZX5miJEhgWQZyQgq4EHTDC",
  "key6": "WhCjhs9ia7YbMGwEQsqiGdQ92CFX4g1pJ8YS6ciuab8pbSUBdtCEUrBFs2Gj2pCWxjStycbQaaqkL5ttPq8Q1UC",
  "key7": "5NaG5sbazaE1D6w7uJfLu45FF16WrEocbZCUTDGNnbwAvBHLu3Q6oyx83P56YNm5jFTVHd1BYkJbyiMrEarR8mcv",
  "key8": "4AjnjjbmtYU69sCcGTndsdHvkXB5qNk15Cr5e6DphedNMM4U8pDtKp7RV5eG3BZxBDwhfj7SpUJEHqQ6SVfa1z2m",
  "key9": "4kby8FE8kXwDymZcZ6dTY9vJpTFtKSw7waq8iJPSaoWKYfjrzW6PvBuf8r1xwqwPeYo4jHNf1Yd7iCzqrzBbAfNH",
  "key10": "2TpeiCVEGjE99zvGAdaWhjHJGW6V1ouHmJVQHWvLTvZL5zLdrAoZVvuG1ZciC6uVbkUe5DEEaLFQduJqMj7a496S",
  "key11": "4Vbmx8pWHoBgtRzSDWj78kk1zNNTGf1G3mBbEZXvDRLVqGss5fJTueFMMAUv8GUFpecqpSiScPdBJcgf5QyJGVJ2",
  "key12": "49Lw4D5kH1ubc5xnh9amZu5S4SduzmE4MXNhqoTXhR38Z7x8UB9D4PQLePnbTjwuf3X6HcepF2Jg8rwsyWPcrtPi",
  "key13": "45HaJYaqNNXF2XnEBzegjG1zPziYxYK4gZxTFfbb16sXWgU6FVd5StGUNxLGHjZsGxPwnDz9KL3keV7u6EiJEzRY",
  "key14": "4DSzJN4s8QpU3sgGwsXQwk11xPqJ64q28jwcemu48xJQv9uukPFrxLMvHt1jW9BzpWNoMaCu14C3S7CK7YkYTdwJ",
  "key15": "DWSa8uzmJ2vhKW3dniYUK1UgPMa1kotithNLd2nc7c5UZMHU1dstafAXz9ANU7DBFGWy1emNu1pyDZU9cyHLYoj",
  "key16": "JtFJ5XFir6McErriAK141bp9idfouS9q1PotPYwbjuiZaRNvZ2qYQfsS1eKnCHyYV4mget2uBRwgx5xx6Z6gW3e",
  "key17": "Bx3wqVJxp2eLsSWzSK7oj3QeRwANnjJpuoe8RaGsqnH8uHJQ34XqWRaVtLcinwk3CnyvS3vpAHph7HEwGva1hxy",
  "key18": "2tSdAaM1zak2QhqJGEeUaTXN61DWqDKjXJk2vX4q89NEjxi8G48PmNAbHUSmEd6x3a1n9Rypu4AKEHepBwfHGZDP",
  "key19": "3iAC5xtcqQTnTSRhUXcNQaYnqP2rUxRgXAfs7Nmwk4uLKHxevEyJW9yzknz6zzRGzNxVW4PEMAuBepGhHT3E3EsU",
  "key20": "5czwzHriXoHG4e7YLZhwXVSAExxGZLAWdaQcD3AYyPvheHLw1Y5AmDZ9SWe1d1y5WwbViM7aqchSj3uGxm2mxdrv",
  "key21": "2k5HeaZ23nemNv8eyiS7nZVK2Dy2geeZrnf3SKnr6rm5Hg4uzLummEZanFbFFVT6583jJUVQVjB9pVDbEU8mZYKC",
  "key22": "4twGjbRxebnpNJ2y2yLQooZJoxJXbKbb7VoC8ZcGqT5V76oLgZ26U79RWq32a4W2Y34vZ3sGqXj7RMRfVdrqfCZD",
  "key23": "2aeFFmqDD8ERqGCC4EAgwX3gp3Eyc61PWWd3GENFBsvC683GkQsCaPiCD6WeNq9izp2kT6jbUrsFFLmGLQR7hx2a",
  "key24": "5ZM4aw72ZuoUYYBcXPJXnV6HENvC6xQ2jYN55cqKEFrxmXZiuCqFR2iHTKFNYTxTKaK5u5Bh5hbch8fqYWBq6PNu",
  "key25": "3n1xHk137W6K33fGwZQUbX6N6Thh2t4o7oeeVFpGGxAV3tZfBvrc3Lph6vWNv3jGHd1VH349cAW16Pre3jHMbx7a",
  "key26": "5vPjFr2pmJLmktMVz5vhW1LqjrD27EZtjLdGBmmq93KUr6BPD813y7vAmzvWFdcaXQTTActEDwic5mQYo4ZUwosP",
  "key27": "4mkaUMXHhtMEfuP21X37nMuEtr7cPN6CGMo7GrXGC8RfoutNxzeq8o1dSNr1fBsRD9vt1VU2qWZ8YyVs94KtPqgh",
  "key28": "GxGxaHF2F8ZBQ2QcX8KdZ4KGttKtGvEnvwYvKcUv4y4fmNi1Re3PYrafzw3tu4qgmTkpTe5genP2Qw7sfH77H6X",
  "key29": "3NKre1vM3f8HgiLMyHjP3fJGUHcH3i9ovrecbkS5RhbMcDo4hMjVLCTtY3CMeSx2D3mVfjNzrZHJBvsqQPuxDZSS",
  "key30": "3ZYYHcedRdPDDiVb3i5nn87EuS3ohcTEf6oBF4eNvovXRVGebJZkaNGcmS3hMncasGrtRveRTUati4DR1EghBCSR",
  "key31": "2YJ4qYqAUoq6CmbNLUnqERtCw9KqHJ1nHgtNVEr2ChFZE3pzUS4aupjMRRPJNz3Si3D8EJndinmXEj9qrEtxbhD8",
  "key32": "4VUZhySZk51oHjoZaD4hQgbcdbpbBfbEcLfE7jp5PLwxCPFxZzivJg5nzZtjTy6Mrrk64y8gpwdhLXtjLwW2itsb",
  "key33": "5s57yhUReHXCMsj45SwbTM3BQ3iGxXqGqP6ecREczFX2Ws3yiLG6G3Mfwuwsq6tAdUpWmH5uC95MXkXT1zVf6FVV",
  "key34": "4gqqnPTWYaXYezpV9whDdEk3T9qHyeFz4WMX7xtvCaGSebzs12X5KTqNkxybYERv69US63GSTmTz8JxiAkEcmpsh",
  "key35": "5dGjaULnfxiSbutsDjJpDwaM6trbXoL1VKneFoUKSBrTyurfs9xW7P4WZvchvY9bEvJPygha3jr618eiJXF6c6Tr",
  "key36": "4MAuiw6gmgHgBXDAEjJ8xFZyxEFCZNnyFs85FMX8HfgyBCs1sSc5ZvZMLywvVamenZ5UJDwdvJjdHu5YnPQbaqhc",
  "key37": "1KXc8F4ttRHLGubceshv6uPBCgCah4KETRuxsDxVyGxFJyycVxRepwocJtSYkWqmchn7RMMgFbsG5NsZsszr8ya",
  "key38": "crqMGp2nKnZJ7JJjC8gWYJYrsR47JiPwTky3VSdPGgEGC5Y5MFazFPE9L4PYFv9e1t7CVQA7LEiGYjAn6Fmkpj3",
  "key39": "42Zh9f2k1ySJKqS3mWjmFc13LAiXhzLDXFLAcoa89TrmqxmdA4k3fNq7ChivDYbMXe6tJDMszYV3FipedHFQKq5B"
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
