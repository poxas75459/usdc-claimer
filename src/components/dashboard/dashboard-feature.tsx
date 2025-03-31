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
    "32Exeh89wGDAopZkb9iCx5XnTHe6YQwMN7K37hDUuhjMstrVa6xd3Bs86Nmfg6CJjptAYaAUd4XaqPBb6VZw8wKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQs2NKArXD4AiNJ88Uarn85CR5ZWcfs6btnP2YtVskQ1x3oZ9eTa2JwFhTqaXrjpQ1TzH5qgFUU7zHJN1sMfFyz",
  "key1": "3vix5EMZbn4Tp2NBRYcmLWhSuLqQM5NZzsJdqUqroAK7fJdRJbwj6TdCNpkEa72v6BKqbRjZEo1FM1mkbf5aPZmx",
  "key2": "2VrfR598idvt7Uzp9zFbapzAThhi5koDhdYf1YaPm9zYGvgoXwsckyRCjW4WUrxU1UFkViTapSjToA38PJffLGLY",
  "key3": "3HCeVExXHg77c1UYKVpT2TKgge6Tbgd1cf6p7wUS3ucToui81bRZ1eeaXZQ1iKuvt1QsmvmLt9RiywdrXjUaXL3Q",
  "key4": "4fFwCGfdkeoSr7NnbsiYYjb28wt6z1Dd3CeKA2vs8tnnvqpo7PQLiuM6udr66uTmQFseLa9pxy82yiu6RGpmqPgn",
  "key5": "37itkHTRBhk8R8tTgyPtjzK8nFFktfP5iUf2LckcnoM6DRxzkWUiihPcJXvmJU3xETixzzWCCaCdEbS3koqipjnv",
  "key6": "2JkAYNKi1stv2gESCaR2okJixSkfLjPf1zgBoJw4WYomLjfa5DxZWk4VsDKv1pDBgjFwkkZVXCCU1sFjyJhzbzFG",
  "key7": "3iP6XL1Ut3JCszAuGyMitvVVfHvdx4UX4jiF1WezPFibw5PR8c3JTK6kduiq6ZWVRAWBUhob6hk97w78gC7nijWz",
  "key8": "2rWmA3qdrA8kndUzsuEqVLgdxPSLbQn7wqJMsqZuJVawsJ9oMnNVUwwiUmzW6UG2EEjDuRdZYWhkydWFkJayPfAt",
  "key9": "5thSRwCd6JZxdSx4dVh8oBYNtYfrB8UEGv8AnDwdbNRBYGkPesE1A4nL4o8PM1GVct62mRbjK5CD3Hgm4DhT9s9L",
  "key10": "4rxVUi2r6Qpou1hPkeaunDb7cDcW5qvCYarTEnPQK8iqQtQeKcCYgagqKpa8PxZaJDHCiCXFYYZmqJu8MmRs4oST",
  "key11": "2ApzJqwLnzVQaMC1uKrnYaqwzbFVfjx9YgjQdM4dHMxLb9wK76CYzuGvhMrCQTewi2qTM2dgevp7YCFVrQYN36bn",
  "key12": "53xBo1Dfj55r35176aWKJ8XSsBWVQrKHxnBxxVLoozPuoaf5NcDKdhHBxerQbKfWqYWui8veuDitugxMh6MDkYsL",
  "key13": "58jQgiNQ4yPB4tj7xUrNfogjXdSvmPgLfuHoeBbu3PXHLNbEMz1CcJx3TMghsqSewDke82ocbRgXJj4CEvwV5MaG",
  "key14": "2geRD91ocC9WuDFkGwiKSMxcgipFyuCCLc9k3arnZNoFhJsX8R1cfPtCuBCJ9vXcrNCbJqSnYLgjpvBZmzJGgLVz",
  "key15": "4FWXAGHCYNuWm4VARN86ygL8iwxX1U16adD8NdqsXFVSxRjCG4FR8kMsWheW7LfFTBHtCrm72g6tvDpZfGHd2tjE",
  "key16": "2wPXiqdAXZwQPZ5SwmZp3CXr5ND7hFqF3Uuw7zgfHxrpoxzTTzwwjcXTmo27oVJvJvbqCAgu9CQ6AGnVRaPhJhNs",
  "key17": "2szTUfyqD4ccnaMJJtFV7thVrtLpPKVnUfsmZxR3WbUGNzmp98Xymvc4cWbWZ3MP71dbiKLosfVNjWZAXvtoehnh",
  "key18": "3uP3oiAoYZzRik6nspeKYBA2aRwSiYMP9p1aX1JF7ZPp6bDd5HNUFZ9FxZCHC6WR5mGDvgiEsGnS5yPwAiKcVtkq",
  "key19": "2sk8Qh4Vc9T6ndQ8TyMw3cn9xvApKvUbSFYku4dVJrnoHJfRYr12fb6yuAYhxt3HusDvTjZ6jQQxajoZbg2Nijs5",
  "key20": "4FTFkmwdNbKf57AZLYxFaqNBSgVcS21pAHXBhPbZ6nKvsbkZhwcM8MTr5PYLckgV9saMgVXCKKSiejaTqT46bPyL",
  "key21": "54FCcRtgn85dCs3pKHQfjxfD1dq1bNrY5rBCdtRCUGrw5TuLHPTXcDc4xqtAatJqKCveHQWao3uLNyHz5EodsWwi",
  "key22": "48gEBQRDx85aCcBDnNgt26WWchx3QXyAnwfHweC5HB2ZiqEa8fT4kPCcuXb2aEaFRe7iUNoBZiL4m9GrBDYM2BNe",
  "key23": "25Rdy7Yz4YGtebJ2biUFBA1vdywxYVE2pzeXbm5MLwswQLhdQeBiKnRJD1Wk4XJryd19AY3ZQSqbYE11vDfKwo2B",
  "key24": "5XYMpomwcUWk879pgDab1QiQJdwyEQBbULa18rhj2KnnCg1ti6UX3xsQyiFAM5fFtHbVLBBKVZBUYY8HncYrSwWt",
  "key25": "4rGbypFx38H1zcvsN72zcRvLz3qjva8EV6tKezFjDayGWU2QkSHf49Ea3rZuZUGaggb2sXdBgGVCSd6nt4ohSCXJ",
  "key26": "26vUeQvHqpNWw9ojtU7QqAnYHbiDfgJ5rhRS9aMxPy5qMTqMVtb5G9tgDpHavCeEZ1Sctifbi1jq29m5ip1g2gwW",
  "key27": "3JrD9cyo3poZGwUUhJ6wNDdfdbKUGFzgJbdVQ62MwqeTSnAzmN5fb5FwuqZAM7hu4DAGyirQ22wBPCRn2ceVKGvD",
  "key28": "3HXbt4xTtr9WEHfhYk3RGWZ2V6yrVhyCgtXs6rEj8YUQtoJvR1zbzXBDQRmkDgDnbkUrutJESoReZRQj6bMSoQj9",
  "key29": "3JZEWHKCJBYoBLhuurmenT4N9BqesaDVHu28gop2VQj9xY9jfky4eUKChDAUnL48cRvNBf5HxUKyVGhqKNhi6ULB",
  "key30": "61ZD3kNoyyngD8rqnVLwT9KL7ZTvkZgkK7PEvoMDUib5ivhGyM1stkh89VWyvB8CCkey9AmirNfdf14aW7Xw3bxs",
  "key31": "3Rtz4aVsvBKX29vrKs5w5zGQn7gKNvTQZiW8NwF2KZJUsTwyPUPo5oz2fG1J8TUQs7QBDmVfQTWhYp3L2HEtnz58",
  "key32": "3QV7yoX5keGwUXYgYYAzpnz1f9sWcgDbBXCvjgF493CfCipkM5UZHXNuPsDRkrMbq7gpcYd71rx2WXEoaaeKqxDm",
  "key33": "5nYnrDapwQKKrQpBD5PpqsvecxxxYdGEn8iNoxf9k99StnVMFTVLb8jxqBdfRXFKUK3uJJDiCzcZmxMbULqtg3nW",
  "key34": "4thzacCuKeDHbzN8H2b9TXn6JykZTP22nsfqLe75QEu8bB9ge4uBueJwKKV6dJr4rKoqSWphEiALN3ea2qkf8rBm",
  "key35": "3pW1vLavYwxsc47hxPLz64DWGU8hbnNEjsiSmSbuSaLQaJVrBt55kXZpecpr3Jverxd1aBKXGGk2rPRwCS8MsnPP",
  "key36": "4JrTK5sfezsqLZpw5YNGEkFeCjPJEuZcTgV1ZgAcBZdZyXQyzgTmm3SFqLPzznJ74BS7Jhm7GQuRKPdqiUZ4A9sp",
  "key37": "2tdbekvMN95mXATDJmsvXZvm171T6PJfSaBX47Rh2KWMxKoQvPfSriuXAfS7VcSwGGrNLWPMdY5j1xGjucdLesBr",
  "key38": "3RHS53WAW8Smn32em8C8znUyy4WzJZr3N7io1mEcmwjXgTqFyueXvVZoNQNYSsfuQpHRS4tKrsigjSVjWUQGGvYk",
  "key39": "5WWeZMhrfZymgQnisDZcE6ovTbCZT8dsZYjv9HcjvMjtD9gzBwXF2YAvm2QZma5kfXZUtEMBvMmahFfp6G8Y4az9",
  "key40": "zjDH8sEw9TPXQvuSzKc5QYqLMCUQBwhEGwiwy1bLm9xm15T1kxquBHUGuZ5CP1YsP8mghyg3wM2dAdfEcxEjxB8",
  "key41": "4qGbhTdmz5EDbiEKXtJDcLYDGKQWQ9wq5CD1k15g379Xa2ReLhS6afAQqFvHdPgmjiG4558z2SnNpsj9G8qsPVfv",
  "key42": "3F38LrMsPArbguzbvk35CiszMCmrd6e7XxbN3t6gKKYqZhrvUY4SSzTbiarG4oyaMDrLKgbMASfZqWB9BAkaoy47",
  "key43": "621oz28LCYDq4DzpUCCPrhzfUTGF2XHxztBRLfX4ReSp5ETGpTxjFZV4sA2mYZDEXSWWzJnnxXu8nGt7NQbLrLdV",
  "key44": "236N6SKJ3oxBxBRv6RNWcPmaJGdyMbs3Bi6VKchKcVfQPwZPtyuHXNNBJKZBoWLZsA5rWo1b2kF4zd7vZctNUXmF",
  "key45": "Wn84UBn72STAc6mWa4vxZxbgCZQ91r6AXeNAATgYzLH53zqM88zBKj9NCm7TUjzrCYm7siHa9s1mNCMLJrogeJe",
  "key46": "3cPDmGJ45fdkXijz946D2RCPrA3vXGBqQP2bkT9PS1NUF4pJKJxQL2BcqEsnPdPKt1wr8dcuYgGeNpC96kXFXefR",
  "key47": "4oECoWhW6Z8cHPHFNP7zRUpKGuFpCetjmJhvZHYgfdrpYK5mEmGzprgG5RFnwo7Q9oKZjRqi5d3MnaaHoi32Vu2G",
  "key48": "bG7aHV7MQ2WLU3cSmiNQFKJgZT9SvUjEQ43GX5F85hY9cJumKLTkYJ6N59N5StU92kNmkf4r8VHs93QH1Yyj4fR",
  "key49": "4ZoQp6GqoPjzM551MAg1WxvA2jTxLLUrtW5BrFduV1JCPj5krB5ak1N3DdMnLHCZHDamw7a3TRTCKP5XFrnzY749"
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
