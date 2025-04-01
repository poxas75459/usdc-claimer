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
    "677pjReWYcCiQwWXiYHPqxU3WQoWpPvYaLyKUCzcKsVDvQYRg9YY9DjNC6B9pB3rkwBHK6yps5nhcrvERURzaUN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8S8tStNM33SHJn8L2mQ8uoZVUYgNiRUdeQmD69aMkJH6kZnYS8c2H4LFHcroMecGHeJrLM3osqgYXeJhZW9AJi",
  "key1": "2yarLNz8mKDqfpe9LuSLMgafMTCsFiw2N7XQdd51ddCJFfXax879ZM3sdhwY4NRVeGDRoZ4v9BdTcwtTtC6Eu7Ce",
  "key2": "38cLLWvYUcA89JXHfea8bXKgk8T4zHHGy3LQj5qp9UoZH9Pgkq61M5coN6TGmZzk1qQeL1SE5UCsqxzJpPaKgrV1",
  "key3": "DoJRW1s6oHo3gJdZuTE9fs6CcJdboA4n4SKy68Wy2XC55wk8jDTKdCuuv3sWALUdRyAtrMX9ueBYKjaoc2GvLTA",
  "key4": "2yGca4oUzoZpfcgHRhbcQGuJreEneGKK7dKD2hSafhBwuRHf6nzYhQFm12wjvkNBfqkDBtXe51oM51GBA9GHK5yf",
  "key5": "4Ta8edpWSDba5izakfZejJqSKVmB5mXuYvKTZwAWPbdRZLzzVwWRH5TePNXWYREhBqzHU1sWi7PsZovUabjtzp66",
  "key6": "iGKgsNMsW2npWousqrKb3BXc4osTtZhfVKn1kkgF6G8rfaAdHncKZ31to3ve9LW5UhRGiWprDMjCiZNWa23qCAs",
  "key7": "26nsyDM1QnvrstKSoYDv8bPPGf8jS1gkeWh4NEekhgdfRQEa7baMpWXHE23Ck1g83P24dwWsf7iJbjaRYx5Ezk5W",
  "key8": "u8Xq9SBuDR4vxutBAN6o6ry9UuHgGXcFRbsJ9hHrUeD8PMXzYKMLAqTd9aEh5A6uvfNCMu68pnXaUWT2Df6X6DG",
  "key9": "5JmMHY5MnjnSewCPs3KxcLGiT7b5tvfowLnvMPp9q4eaKL9V8gsoBtnCfcaf694HsH2ZAKohRmi7hBXNo3837xeW",
  "key10": "91q3vzqovd54Qux2E97XyUJVFoPmPka31yjzQSTkJDBwQiV1BSfW9RaQquWCDpZMzpoAz18AdLmxrcC9Bee4EtF",
  "key11": "34rMydniRsHMhh7S8nVU3Pevgp1EMJcp6oos6oh4C2DW4CCHfbS9gBx3DF13rF1sK35rKfVe91H59ZUMMCv3aU1P",
  "key12": "2doZ7LkWZaigWG2JVBMCthJeErZkhbbCex6e4o3YMf93RHUdwaEcCe6afzZ4A4xbB8savhP5hWWrq98zw1czi7sP",
  "key13": "2kb4t5Kb5vvAMUBZxewSV9aKpbvCcLjW7i7ewPvu9WYciUp3wtYaBq2FTNtYxHBvyErCP7WM1T3Y7Sj6z3cCLGHE",
  "key14": "rKeoqmz4A7mnXenKXw8kcPtbeP8ch5TQTkC73rDvF1H6St53cAaNPNfm4bBXDxqvVF7NM3Kz6SCr4eJBUr7qdVS",
  "key15": "5dzakriCpvBqNQbpFxQHhz6xgWREyD7DRSpZn537oe4xsWLvSgiYybkirtgVSnsPD4c76MAyiJvAtbdw1YfPr9Mk",
  "key16": "33QTqciFv4vdZwAz2GZMqyC1k1K9DQfg7W6J8MqjpEy7McEw7dk4UJiwiMbzasRc8WmtAtJgu1EeP2gu6JJJ3VMb",
  "key17": "2WVGwsiY5RkgVGtLLMkVaWJQb8TzyhPmk9CDGVtQzrknAt7XcGw9fAit8NUZagYWuzAZofQbYGxHAyXtVc2iw8ha",
  "key18": "5uBcwU9M1ZfFVoEMyo5mLdE2Yh1kxs7bj6okLoakXoYaAywFvwa14cXrihQXzayu8tpvboU2Xj6bu4Fp1qtUAy2T",
  "key19": "tzomYg4gjuDuDKKYxkR4Yiw7c64WWFhMTPmHCB8XD9qwd99P5NAZogyCX8d9k2L3yEtYFu4xFwfu9Toi5VRs4hY",
  "key20": "5pcuEJsaaXRC3BFpcRKbx2LdDkPrZQVq77AMyNSdAmz5SgByfFrCwqsrhRs97JkbCrGagNTPinCbDPgDJ6BgZawn",
  "key21": "5NCwSvMSAfdtVnXGP8ax3331mtM7GgGYX2t7ab7UY1ddywGyUHmTbjfmwBTMGVFyySH7TJwDZ8Fd1xWyfk4ocVXR",
  "key22": "2N2QjSJ5iE1i4U1p3arjVAnKExJVyWUzn4ok12dd1yu9JRSWDpmyCGFZHN8PPvSSz6ZKnGbeyQD6qHSQhWVchXbG",
  "key23": "31LBBh4EAndDR4dmzdW95z3yUeGCkJuxqXY7hBD2GJHk4yPmcmJcqEhSRsAjF52XB5dPFVwZ8eGvyEazGLMZwh6Y",
  "key24": "2Y34o15BohcyCGZmSymGJj57LXDcdhMFZiSXQqHjUhhK4UuLYLRHJNsZo3W9EcY7PK29g3kb1pg81NoUEMfeHmkv",
  "key25": "5uoR5i2UA4V8Jk6GBa4jhKNJt3f456ATjhJuZRxVhtEYpSca3jqCwVuoPT5phKENUuaKoNjzLXZbF9VVgVyCg43d",
  "key26": "5sdPcqfJMvuddie4ygV4uerC7adMJ4jPkLP7PKKEX4tcbRRCtD8aHP3oBVBF9WwoNS1rhZzMuzCRahkyspxEHq2C",
  "key27": "3mRPmA4KARfpsAiXLYt3xxFhufCpKSZScmfCmAxu8VTHk9P3BCb7fheqEPjoDufyJ8xGzaGfqZzSHBMULWXCpByB",
  "key28": "67as2cGmugy9LiZcfzDrj6PepuLYGnHRhBrVSvUPi7uZp4Tn2dL72QiwyzWvV7ivdWgEhy2VRieLSLeGZ1KCANS5",
  "key29": "kdpyGYF2S2x8gXtDm7NCGZ6Ceqb4wZE5F1sGRRD9d836geoNvdWMQLyaPLest5anTYWaZagTtoJoFhckRRgTggg",
  "key30": "3KNweBJ1WKbUVWyWp4g3FHM5xdjRzLdNRrGnocxFQfrm34xNoWJKcmnXZvuot64796q9P9vKXGKxgoSzVep7mucj",
  "key31": "4bBFWbRBPDuDYrJCZuieHMBTXoQfC7EfJAusM2QBhYtbR7dAK8rWHFutUckFiJ6FdMWvBwsDCPCqwd2pscYZRLCT",
  "key32": "3AShsWjZXDMXVVd8Npmmj1RrPsnRWbbk7MXW9ymVoSDBCSFQWvvWr8AXNe3rRQVqUhxk14VtoBzyMNGz3EPcfvSv",
  "key33": "4QuKjszjjCNvVa1MmftnsHyXsspa3jJLhQroZwixusHESSPwjQpEqR8MPMBRWqGh4K2ijh84r1oNLMmupiygtA7f",
  "key34": "sUT1gzJjjSTbN4vJDHWG8UXr38xg11QfxNQwW73HQ229idiqkW3D1DDckWCQ3kiug2sWN3qPC2bxf67r4GeDeFS",
  "key35": "2AkBvJKQuV7RXntDVuWVviMC3x22dPsC9Hzs27bYAg7ja87WnfxfQHuiGh528n38h2zZfBveFyfSN2j8Bf1xYQJh",
  "key36": "378ogFcoKkotss41L9BmTPuqmCtomB4bQTJARAhovFwRNn6PrtjQptjW671rWJaYM8sv4Cv15pazZgaQoGm4mff"
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
