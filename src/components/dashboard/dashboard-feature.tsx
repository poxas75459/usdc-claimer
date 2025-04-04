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
    "4UJU5cWWLP45FUX1GVfbLCrZ9fTkXrcPCsfW8vLyfGmeZgCAF1y8uUfgRA6ey3jefwvKvz2HyLxcvbJ3KztXZEdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DCkR5VySEuoSN1mUR1Mskzg2hs1mcbXHWFYwyJL4daoiJbhaa7ZzW8tqrvbFsKD8xJDb21n3MBK8HmkYGGGgDt8",
  "key1": "4Mn62uNoqJbQKNEuDvoYPnpBbVqBeyGyh661ES9sxWgHnZ1iLwfqVRBSHpPH2FY7enPZfrJJFGpwnc67WW5mJHT9",
  "key2": "4w4zNz7pKt1rMzzcD4qaAULZZQkmSDZNbQgnMzBGuAHwdnHF5ZyF7k6Bu2cJEK2EBwVXCrhk4SEu1pqNLoNV8Kog",
  "key3": "3CWCcus6c5q8eEYLG7ML6BEnwfBHRNyrprD6QNiRVKcMNgqLAAdQZM1eNvexmU45c5jVpfBkVFNJ3ySx7nsQT8Wo",
  "key4": "2L7w6nmfVbeSXNnKUz4h6ZpANXVrfeCGGGLhYBqWyjjN1bx1WdngtbVJdmfLp3EZY6K2Rb3HAciKbfdqSMTPV5vN",
  "key5": "5sG1ZujZgisHhkNCRKEaEdkzh58Hfb3M1cbnyoAt87NHjd5CcAi1oEAetMmLVEbSAf4WssRQfyL614UWk3Z2GxSQ",
  "key6": "5UmhCgS84SY8be432KP4L1WqfLXa6FNTo9Yq4xs1Q3DdURgtTCT954NRJzmHMoAxktx528cjK7ztL2BasHtsCXCq",
  "key7": "3RqDmCQiD5PtXoUhFsKqDv1PPR1jxYmSgDdueYh4gErtEAn1L5Zunb9YDGTTMKZzpK35p6hqXxVL5b6AfLDFyScu",
  "key8": "5sv1LYCyvYCTYo3hDj4ha6h4UHZwssq6xECabu4BR1o2PFJqzF2C8zBLJtcEfrEDwK6CvoqCyb98Fes4jWdCZFDq",
  "key9": "cbiSiDXgDvZYhCBGvkaJDomZ2gPpQ5AWKr1eDEtaAEEaZR35T3gjogodiAdjqqXnJgPf7qXESo6ySMmU7bVxzpy",
  "key10": "5MgWrKzQy8Pmx1dSJV4w2GxN9qZupkCFS4tUb2VQaX4uarB8BtLSpSd84p9xKx77MU58CpcBzZbGJx9nqRwad2ai",
  "key11": "61NoaRWBfBewgB7mTRxv524Zbbhfvp4i5oJ9TBrxkHFBd9A1QyLPN6bmwPK75vA7z5kQjAttqi2zSkUfBp9X1GTi",
  "key12": "5LEQ9N9x2TgUyUf5WLh4z5PA3JBzhuYauonsSnhdenZwadqTAGookfUe1aD25FLEVXpStFFyqZtrCxJxZnJKKmyY",
  "key13": "KTHJ3Qt6XwRzYbaEtmyYG4YjP3V4qAF9QjQoDSrV7E5Bj453UPtQ3WefXknJx6nXjJGC63SxVG6hirzui3vBYQu",
  "key14": "43dw1LyGs1A1AiXs7GC7Wawe5ZzQ2Gh2Z5JnaPcwcVALEFbrci7r1eAvZcL4sXCTteyxKJn5VTdeEHuwVz7FNeoB",
  "key15": "5bua4eZzKq5TDXhSezp3rqRZhJz5ir75346utiLajNpLWsXDrhXJYzb6eKThHHQCmt4WGznyd33DDe225pwK28nD",
  "key16": "3rLngsSAYCnwDHGF6aRFbeb67TMFZE3wnDL13yi8mq3JL7eKwZFE9oXt4rqiSmuvp6QkQStJ6qPypSYzrjMV3awY",
  "key17": "4aWAy7MkMDEFNfX4vy2HS45S1PP35Y6apA6Zsi64YQRAr8e3RY53HiykYk8Nt3ydY9Xyai9rqq6KrKefHGJppPqA",
  "key18": "5D8x2tZmFE7BRo2Pp8ppYkxJbxkWQaMYktrp6FLkHD5oy75XDtM4kYY73feKbrgGxJ7WBpv8QEqKbDhTqyHw8RaM",
  "key19": "3DoaGztF4Mt1LfY6y2yt8ktmyvkpeDyQs1Ej3yrt27S2qQXCvAc9JQWiT9QexHPwbDhAKmsVdm9UQgqn1JAQLLsa",
  "key20": "4ALmyyoTPqdRAEwd4N3g1z5oDGdmQokBYPrXdQnaA3XPn2311V4ZV4MZEoqj8mkPMpJ369aBRovs6cjnBDTVTCHe",
  "key21": "upT8Soy1Mfo85UhKi6H1oVSSLAv5h92zzLXTaRNVpR495Gp3QyJdivRU1ButEpDpko9LiYFq3ibxczh7DPnkDJZ",
  "key22": "2Vq2iFGRhXbgoU1pWCYfNJdUpuHchMfrSjydcqoPfdiym15Hc9JCbqNJ3TB4f4VdAWsRztzVMghbqL6c7QNQNnv2",
  "key23": "DpicmUAdvfjcPWsmdsTdj4mtu9eBMdiZEu9oQ1rdhzakX8kKWheH8b1iFARVTmdGuqdfPR2iDuJTVmHre1UEL7p",
  "key24": "4WSe4LojJgCNz6mfbE1FhiPUe7KW6HX6BCGHwfkVKRDJF8cUWSR7cx5rzGfYZMgHKinz1XH4sRw1GPFTrZGcpzoJ",
  "key25": "Th6SSNEdrt8rngLkAo65kmQJxXNZbM3C9mcNPqtuHqAYchmqAHmqX18q3qhRyMq8TmiLcc68SHnkFMAstb5ZYtq",
  "key26": "5x7g5BhxLkjna1JLdfwtJjohqym7kFgg4YL6NzARc8oXQvCXJw1jndQMghLmZvEDS99SKavjPSjxaeYX2iLtadwN",
  "key27": "5d8UJmugz6kSb4PdGW4BxjfcGN8MiAevfyXapaQ3ehuEn9BpF45ePgDDWScnsqUp5kN94DH34pVFYscicMaYJwiD",
  "key28": "KhiKUaXQoWKGKbXygssHoyGCLuVSztLin6H68uMzJ5ncL6q5FJTjW8V8hVTtSzWYimQ3XJVmmMe8koaPyjeXauZ",
  "key29": "3i7bEmSztmnht7SAFeo4SSeRXBU2vNR6j7zUFEYr9VYVThGF9rFhNVF4Tj87LEMgBnfMnMQTtYEXeWRBwS8r6RXY",
  "key30": "2kJpQLDZJGGj77cj5vgYeWpGjVNrUtcTPMDmZeNjkxoeG96d2nhnMDSh8vhVnJ7CAHtg8Nn9wnCqC5mzZyrn2u8b",
  "key31": "3JdjimywKhyKReYGwLSFKDBsWVAo7gxjeyVXaaLMnmiXyGZxDDnTKbcVf9GDLEqbRDCtjaEaRcaCtn3PCbJ7Sx48",
  "key32": "2XEWziGXFHkydQMUUk9nih7H8cXi5MmmS63Pe4NLnMMCMX7cBvA9E9au6kcD35X6d5vZPawxEPNvu1gPqpL12Wm",
  "key33": "4dvy7efmDHKVrCTVJcN7b4t4r7ecMWsVwBEN6EaSbjy9xjLZQGwVfmJkMYW3AixB4JfUZAPiAkwGaZjy38hfMyhv",
  "key34": "24jU6PjjTE45jPuEfT9TkdzhrgXuActDn76XVzhrwyRHw9cvxX3EXNhrgw4Kxpso24YiPiASMA5NB5RjgpJqJW5q",
  "key35": "hNq2MVw5rWTYcpZYb4e73BAG2wrD7EpyNaHSfdaXaoeqa9voJKKWUim1vJYvvbT34SbKv3kLvQeiZgsY14M7Mnk",
  "key36": "4dbW7LyccYfwqFPr4HzgbkJt69GShP9j5736PoHQ55ExfEBuijNThe32x3PvMn7LEsQ8ZoA3aGanNK28HbRkUE7Q",
  "key37": "4zNa5MmL6gTcHU2AUSbwVLi1eMhUtYdAnujtKwwRzhgG24Y22e6PubRsorqtFW5k27UFFwFERncFcrjkxu8ieaXQ",
  "key38": "2SQNeBxNb2PBh9ADmRv985z11EmLZGKETZmvva4r6RKkD8iLhzEuQnFKdZz56w5gbFWq1RWuWhNgUnGGvNF51zx6",
  "key39": "3pP3ES32DLLDcFTxWFfgbgmgGKo22waPjCxCSwaAHqQjM9Dno2Brh7Hs2iZEqWWNfdVyYZeUEbU94tjMYqqYfCib",
  "key40": "irxLhiPWfJ1NKbpcUDDvz38mR1sCfrhFHtLJuvHK2cS4mBhUK6DHhuKvtR8StWiakwUqJohKBsKWpwvAWZNiGQh",
  "key41": "3jG3eqto22VGcgmbmtnpHVHVSp9y7ncpzfnkc3KuHRcgo42BgNQxa3JVvN5B21HdqdykVGk4vAmnEQhJ24k2BRSW",
  "key42": "4Q6Uw3B5xeNoh8fSMERRXw5zjJ7UBFzBYEooZQdo2zMALuR2Gs2tc2hYZDJdmmoLr91cNoMgJE2vtQuirW2aHEUe",
  "key43": "5qnpf7PuGcSEnWugxTRcLY9Dn9TZcKATFapK6HHwddAYiwQqtDddJUjxVddQGhabW8uEMwYK3A4XUMyDfM3WEvoW",
  "key44": "5t5CgT68e4wo72pKe61nWxdQ85Ete4WrzDT5KYvrwt7svRvzQrHRjvNRcWjPdF23KiZ3CU2dD237Vgn7nUG1tqMQ",
  "key45": "28zvwxGQ97gsin47AtEC7qABY4A7DQ4FBV5sh8UG6JVKYSyubZ8tfRVSofPYVcYPsyv9zvTPCxoZ8VUXJYtMyF8V"
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
