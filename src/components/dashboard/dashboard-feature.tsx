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
    "xt3GWhKboD72RsZASBrRPyWhi6fqXjZ3Q9gF5HMytvaWsoGDiWLZb8GsMnGC8VkhnmiPoEtNHRSArLjm7czJ7At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n9YQQUqJZ6X6TnQJixpQiWEKpAjn8EYNBPFRoimtCVYjuiBxxCGKMCRJRBvhdf7YZ6A9fENc5vAk7gVUzDc6sNs",
  "key1": "2uM5jkAMX5N7HYAh6HcvMhamKh33ZAhhGas1dJiVXGYjV8z2wACYp4YsVHnZTFHi5SwfKpy8zk5eZVn3Tb1VpMJW",
  "key2": "3ge4vBsBxaoWzduLMaBbcNsD8GUbNqHsDrUtqeLWGSP84cyis9md5LomTA7M59HmwuYYsn4uXDyc52z3bYGiwxrR",
  "key3": "3RAMpwfHtDPgTsZznUrq6xmAWZEb71pSTsGuxKsK9B5QywtdX5RGUcDKokFBFQaS4EFvyafZfUQ7kKxPwCLVL2wC",
  "key4": "3HstCJUCLRvYVRoR8ws3VY679XK3CASiYHS6okmry17Rtnw5WGHMcz32X4UpoBxrwdwkLEMrstjFfjFDLY8DHst9",
  "key5": "YcHbc12KXqfHFkddYztCVVTF4crCy2kM6GrrmqC1Z2cPeie1UXoQHn1ZsEVcVLJgYUNA7Moqxpk1riGudpmDgiZ",
  "key6": "31JgdDdUyxMtrvBrbgt6tzVxtJU2aapXEn6pUjaKc5Wm4qLNU3wfZsrqW8PFBBGRVFomEzx7QHufcjndwDJPzUff",
  "key7": "5oFosqqxxrDpBZZE2qiv2xBDEAhrom3wBaiN9WA87wAKEXZ251SdV27rNAe1wab6KX7fdgHcr8Ut5wzBAbibtqou",
  "key8": "mePKsptYwmvhLyDkUuzANU1W68RBVTVXmL8kd79gLu5SphDFV9RtkXUSncySqah8BzCe7bkJbgKRqVrFyZ39fBG",
  "key9": "2E7PgWM91wHTrYu1nrRvk3VFvXGU6QCxcaS5aBfwEBUNTUCmnsLGb5ohrr1PwrfP4Z96XAoz9TEAjteiFxG14BMU",
  "key10": "5ckGNQEdc5SqNLZhj9T8jSJuAXCtQLGLA9sPb46YVbMj52BG3ohNFLEYCmDjeCeZFfWiJN5Ba8oYc1MdEEjAiW2V",
  "key11": "3uUNLzRZfqWjBgsnQizoZkPaiiGqFrYw1StQkt9m91RTughXtSfZzKWp7TKbDhKJCKLHdZsXcixD1GwnNpkizYFj",
  "key12": "5NwkK2dTPCs3edXwuTUDkswcmWztciCJbccrx42dEkJNN7XNeUpDYnfP3z5jETNjxHP6YNB3PP7PmHnTrPEb9Mfb",
  "key13": "4pXZSYLTedM3P1Y7XZiEpW87EWsk3wyfTjG4QZBW1yTow9XL3y5X1BRRBq8udF2RXga4wD2B7XbbYLv4cia6HEDF",
  "key14": "2HiXMvwCts3VkgAiHDE4MdPBJpo1ukKXrkenSPyYdwhXiSgnCp4UTiFrYzhMCLdHbqQhgWPfXSL3UeCYZmMzKKBr",
  "key15": "56wKx8eqfHdyvG9MfNsqss9oGAswugUEK9a4WPKFANy82gCM2RDJTNgRvvZdSeG8GptFAAPWrRTLRcX9PBokgD6N",
  "key16": "5iY1NMcPE3pVH7mbFFo9Ww8nMNSgSqpM1p3PD3K3ydYKdQfjidGU95xEWqcb6xw8GqnrESbWukShg9jYyTXdNT1c",
  "key17": "gyD3STePWPPLtk9693zMDQc6cBeMtiT4UjVnwGWRUXzHEXGtv3YhQewvNZ2dYKPUsQBpuGP5fnRMHFi1TqEXhe2",
  "key18": "3jJRSZ7DzozhBLydfmBzjHaAxK6a7Mew9S3VzjFG24qyVLMKPvnwg923LLH31oLGVyEjyR7oSW7G9RWKZB72jZJj",
  "key19": "V6YY8ZRrXkgXSin3tybkfSJh8kQ8e2VJgHLVgrRui5zmvqszAXfRmKNp3tNDXvsVrJ5qEMmxvDpGAnpJTuhbjAG",
  "key20": "3Hop2rZxETv2B2oQFyyw1j4Z4DEjcPp5PEQRtbcf6XB9WtvV3oeLfEkfrnzQa7rMUe5LZ6ESzTMEduNo1mjBvnyF",
  "key21": "4SVRimeJHiUAminufzEWonJKCvmiFqycuCHuQFD1wULFaiG3DYLTa3SrnSEfr2vzSXbQgRD8rW3z9FknWQzVyTUP",
  "key22": "2TfAzKR9EwSs82xBRTARLjFgaZojcXyCNpE3T2ph563E85h97EmKvDvL45N8taAZbDK9EHCcr3Gp5bKhS8BBmX65",
  "key23": "5nPbAKar7Ch6YhveDA9f2aoh1Td8qebcsvNanJo1X6wobL8NCt4t6qmKtYLutigQMp7HYt7MEPT4mN7NTYGeUH6J",
  "key24": "7bzhKNcDq1xJ6noASPUsSo7C7ZsFU2G7qnph6xVGZiSFmUjYJwqPatWpSz8VbDueAnXAdqHksfgfKBbP3BVjRCJ",
  "key25": "5JPJNwFkJu2GJEYGccpvHAQQcZZyP7Uo58eZGA2v7Ycy1oCSEXqC7xw4h1WGibhZadkSwhfKYGQWnAV5dMG3b1MH",
  "key26": "3fNBYoRNEKHZDxyBDQSiT2BygLXddvCWdAGFYduHVJmzUJKr4z8RzT97DdYXRKmBtQaWYAcsCW5Ka84LRsSkP9f7",
  "key27": "X69ACMxifQabguETapxKFdkEdoQwMAKs4aVWGusXjt1Jr9EcgMJE4xvMCzrXVwzeAxtsY4V8kowP1c6PAGErpBd",
  "key28": "dY8PJdxGbYf8g34sNmvvYjj8p8s4PGs2bfrArygyfSKq14pvZo7XhrCz2LW96N49U99YdpVF7brccSb1ijNsGS3",
  "key29": "vhFTdFvVWyjAU6bnUEkZkKZ82c9mUcCPQrbJrKbrdLjGrsvtMmN9GF23QaQ5e32z6wQpz1kD9zZkfxxfnwGSmSY",
  "key30": "512FUK291bSmyHo4xwBBhdAfxZutaxD9ixQ6HLKQANbHjk1rSHcqhgRXTvasguKLQjVjKBGzxE7SZ6uYiBTfAcqx",
  "key31": "4F6vc6orAiax25TshMjXiUwScumWz48z9FrMu2ZWKAuwQDrWATJDupMcKUZb1zjQg43Xspwbm9yPg7PmLprHFBHq",
  "key32": "5RQbX3uS5ber8LiNGjryaBYB4iyy2R2omtz4hGdnxLQC4B9zju46Yvi3jkTSJoruuu6mwfDRRkVMik6nXmB9JZtG",
  "key33": "2rws1jh3YSqsrwTGues6EP1oa6WDMuyhL6N9Ab35uxGnptRNTfFbHnC7vqTg97rT6m9uY243LiTtUbbDe4CHZgzB",
  "key34": "2KiRuihKq6eh5jonNnQFAY3KCSivNKrHHp3nJjxa91p8dApBoufqq7UobrFMffoKyFnAf97eXP4hPauboWU8G7L",
  "key35": "2AG9SBXkJK4LL5Rki3tP1ZG9Lw6rVRLLsUwQFD8gBxbwpwZJQMKnMwFTSjBa8aZHoVerGqsMAdRkKY7QNBUpwM4Q",
  "key36": "4jZHJvpyPK6d2dwAThZoxX8aWVNhbkS3DpqPyYW26DhhDsE1tSN2XzovaB4CiUxWugt9N2TnziSed6XCfWnj325E",
  "key37": "47QhiYrDcvjjPFeum7qRuvaBZerQzNCyYBw4CN2PzncuMUetrJ45irNaCWdag6x8PxYSJuE2k3dwf5ZeSRPwoGFE",
  "key38": "123dUEofDyVJ2rEkzF3G12kBRiHTEK9fveoPdw5q7uQZkfiAnkybfvmGsJ9v6eGenEupNfAzZifq1ptYponMKowh",
  "key39": "2JEDjq779pXte8k5HdRRCRyyEUzAakfaQfDmx7TDLxb9VjLu3h8fbNQDVNgoFqeXW1RQ2QhACQCC4j9urrE4CnLp",
  "key40": "2paianNE4WJmEyan6J82RFfwn6nbDprxwdEhiovbaRnqgcYP8x2UaVUXXcKAjcdFDkbJMaf7DeNiAeNpENhREwBw",
  "key41": "P6MPBQdV83gqyYjL3g3x925hBcAQkPUCvmP9aUsz43T8HDUWuUSAquEf2DxqYHmVMC4PucuRYANDaEYJcCP7qoX",
  "key42": "2pwjYtHCiZA2ZFTD9p28nH4RAGVUB8mSdRvYvMXwYz2SNzTAEeis6b1Qk1ekouHkUBpy9NgV35Bi1Pd6Ym89kJ6Y",
  "key43": "qPJaNyJ5FdQoTnA3NhegQBrXgHZQSavdwAVUwtRbVPocK65nnZqPzDCRECyMpPgouPopPYMMFMpBaTaiZ5wiKjx",
  "key44": "4dWjAn4mvhPwXJ9tSMwe8KK2oYAzTTvLBFdeQhxBuutBRvMmaFS5qTVdibrFuFQSReDrpBCWtz954jQzhnMcxaZR",
  "key45": "zNr4hfRsmnwF7AD5ZEs8CeAzGnZktfsSiuxPYey918mtfmqxzzPq5quKbjjaFCCKrTPZGp36G9U9kygZrSiHt8S",
  "key46": "MyVks629TK6qqyg9Vd3QmYLBQJydYjmXb4guz47UHxC1GDFEAgG1bapzAy9Lk1xYrDNEkDD4S83Q9iLWAdnQrbE",
  "key47": "49MHPfUTBEqWhhfF6EH91J7zZ31rgYoUnFa4P1vdCQEzNvtqNYFr5AtpcqmSyNM5642o9MBNsnopMdYEzq16jHCu",
  "key48": "64DumGwBwSJFmRoS1D2HaLme2E7zUQoABbQ5w2yKFMRWZgo4XiqsTsSopbWr4sxL27sLBkMbL9orufGsM6B91J3X"
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
