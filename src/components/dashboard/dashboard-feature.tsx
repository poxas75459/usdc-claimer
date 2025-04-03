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
    "5Q62tiCS8RXQfw4PXc2rBpYvFZeyHp6psEmHdPnbW4bdwVZzzkv4dg4RtRPr99f8gEaT48bzM9phAcwhQoBAZ7kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ds1ML4rHisi3ru3us9y1hzgRsH6o46qtffdZXDVVo2oJb29b1oY1S8eAfNyxFNKffr9GAQUbwo6UKjRD4bedLT6",
  "key1": "44QkJBdx4aUYH8adAc9bTLcdi5SXf2vLpVaHgumqWusfqnu3yAyhX6mEqxVzn95KMR9ZteqNjghWTiqgXsnzAPbJ",
  "key2": "3VD9juDFPebeoqT4sfvTdVMLs9oWBtgC3x8Y5m9DF4YZ3tD44TBDrT9Kva29wjPy39HA6Cgo6xsKb8CDa8vaAfzm",
  "key3": "5cqNMaLXSfB5N2p9X5rjfxvTWyg5tA6yQ55mrZd2F7z75pZhsa5g4PfokUyBfpcND6tkRi9pBQRcifP4JKouA5A4",
  "key4": "3yAzHtvCzLCEpdrTmBtdnCEMue9Reh4FHmhJ73yrRWdVVKE8MrJHwh3tgXcRTZ7wzmGzRBt3BhnGxnhpQdnQ1jbq",
  "key5": "5PYkx89d41LdLCc8rbvmcCa2at9b43QyExevwcUWJmDyKMKdBSzJnGkQEA5Ei8Sw2KgkotEkB8iPyLxc4g8qdBn9",
  "key6": "3Q8rkjQSVrKkQTp8UY6Mhcy5aaPa6mX34ErH4jHaDX1ALojP9BZjgQAWfzMGJQEk1cA9voyLsXpUAyWHUy3yMEPd",
  "key7": "3tzvdkHyJSPio7BduHtNXHrKdqNAMXooghJgXnr9swmYnUTmjNzLBSjhwEo8fxvPgF9pNcgoiBWEewAZ5GCbHFqV",
  "key8": "25dwPmUCfHX5ni8bmPQtJ7kJnUfTG7U3JUAPpsqbWK1DtdqDcHEgHH4qpwKEwf2vyEiakfPbbj6UhVGSfxGwDeN6",
  "key9": "4dGJ1pn5qMxv3c429BvBhiyS2Tksu2iXFG6ytmnXU76uQn9hUxYXEuRnzyFknH21hjtWmf8ybHDNv6SDoYpjzCY2",
  "key10": "EzWLQ6iSEc2vrySgST46LsuVAYVGeZXdKVDkP5SwPDVGi5KJYbHqbfPnmfW26aN3eqvH89D5axgrYF3X3nACYAB",
  "key11": "3u9u6TpLCW9fXYin9fUpuQ8WkQ8JaGUzs4krKnUvEowua8qCTzsN6zivGSYdJtoxTMT8cFkxSsf9YterKfpNUDSi",
  "key12": "5WCfbaGkmoJ2tb1VsDcgKamZEf9cqBq6PExnMAowrDsz5G2mw7vn1hJzvUtYBhM5Fxa9qATzoW4C545vL39XcP1F",
  "key13": "34ynuT953JVMDwyXZRGVtyhgfwC93Dtp6jN8Xcu7xbsCMdfkphuxER8NXUqV8yqvmXPR2sKVtjAwqxRjWazgjBAz",
  "key14": "3uw2tngQ8KsJSe9vNpJQe8L7XiAAr2h3rf3ZsBmuC4om2kcft8qS3PDDNgTfZoRr5nNKfzWfKpr9NDPp13tmJbvA",
  "key15": "3KSLSWJP1rFggkiej9U1fxGb4wj9zzA7vXRK6oZowzAiGcEPCaeFrTs1W3MRUUtknNG7e2a6x1JkbaDaMLQWLcZp",
  "key16": "4C9jXBULKTsYZSfa8bhQUSZRk65yPoDWSrJ7sSauiD8f2UimYsQf1WfzZYaC387mBEeAn8dvwp7sUoypi2HmVsqw",
  "key17": "4N3kKvpxxs1Kcde1fvMaS75F2wrMFs9bz6AiJHXfUooX2gqq8VughU866oHYtrJdnztwghGm2bGLTF2oNqoAJfC2",
  "key18": "58YD6BtT8pQNCrHKa5oYoUC5syrNyGwZt7MzYMfe8cEBiW8u68tHAWAbf4ZUKRpG3reAgpJ56YWrrc1qJjQRXyCJ",
  "key19": "3sQGgL5unPj3HqohnjxB9XqahqxzFLYhCxnpQVgdsjEUL7guJwvyJ3L7mvGbsDAfoDbjFYnvn6dm6pLFNdiMjYCr",
  "key20": "42kbKbUK8rssB5eWabhsNRWHoZxEf7gUi1nzqDqReth1jeWnjoFV5Fx35a1GBgdMMbdETWZETyaBhH7AjfrELyDF",
  "key21": "4vpMHxiPBotEbDy7LUGNfxasf7ebihNTGqmTWqPyYBSVRYLjdjBCTq1Ymwoq1DPYfqwAkwW9AA5RHqM5uoULAs3f",
  "key22": "4d8n8d9AVsf9KzBuLUvsrg5nZ8sorbQ2sKR3ohjPBfsbQZMPYTwUEmxku2g8muc1TnF824qZEtr4nnDZqhpkQGxe",
  "key23": "2cLwSJwUVZCsdtbxM3bCW5J8js2sfmNUbjpTWT7pBSDr1WVGpeaS1pnLn9Shx1xU37ATfYt2brdHj9sDMLXJcRji",
  "key24": "5ZZj2UyrA7TygHXE7BTAfVMxjQEpCMCQYiP5aUZiwi8VZq3a3cCGoWGoMkdce6fwUgavrAvKPujkbttqViGfZnqo",
  "key25": "4AJyS5WhSZEsrLhNbEmTvGZaUySvnHgt9uhGkTHQCcBVyjQ6xiwJRxUVww91pHf4W7yMLSNDBKYewSw7hp6cwpU9",
  "key26": "3DtTWr3augKEwfBbW4b3MgRcJ1nCUgxzR6DeoiWZtHWSQrderw6ZgFg3RXM9rvfCPBSFPQxWMS92D4HF2Znr9t7g",
  "key27": "2YprbUj4qECiSUDpbE96FL9u6Hv3T9awBBUEcWcgSKiPq5LyacgAsMCJzgnWkLzboMwjQtbAqGXZrz8NJrJYBRu",
  "key28": "3ymUC4FjUqFgFAPYbBpN3jHSvZ7kvJtCfodnaPHfbnNAewpczjSq5ci9uJHCuPysq8xuxYuwbqVg7LvCiXQm75k7",
  "key29": "D4ncUDubCV33aQdrDFayPSJVmb99GbZFwgBfBGzLkJFyAfJRZwfDq3j9hbACoihS2QjWevUJWJxhMqhWAkDsKdN",
  "key30": "reDwePbUHMtzXKTtfi3t38AKoj2jMd7cj7k4vpPQhAJzyQuAiAfK4Fq9P8LoWgH52V6e8ULWKox8eRhRKGnk75T",
  "key31": "3E53kNhxrUndNhbgzbGAFQ2eqUZwEMRpeHVzaCsmajJd4Xg3yPeW8bZMJfTo2WjSKQzEnnUpGKnpr6oFJu7AFGNT",
  "key32": "3gYyxjEp5CMWvjY8Cz7PK8bz2Nyhjumrm5wm3tCDydBYJVuh3J1cHjYh1b4ppNknjkiuvDUV2LoUo4xmG5rjYzVQ",
  "key33": "4msDmCHSwAeYrjyeWG8ffrqCFyB8gvPjp5DZeUER5T68XR7fY9bPfTThkt1iAB5c1wn7dDwvhYTHHHx9Ajv42sUC",
  "key34": "3LLxMZA4nCyyreEAuxJtcSfdBQ23rp9m3AJkuGw6VizSEhXjc5mAb6dQVHkDV2RvFcqbLYeRzJnfU1fa8p6ZqxGr",
  "key35": "zHggeXBvmrTQgzCnZ8qctg84w4eQmLujvyKBVe3aU4Sphu39HvN624yfpooGudbtmkZw3Xd3tpEi6k4fGuCnYzo",
  "key36": "tEhuZ1Gkh7Q26bphssPD6FYMpQo4acp7dxifASU1a26iMv3ymeNh42rKfNPZup1Gfe8njCL13h452h956DJXuvc",
  "key37": "1JBTscYPTuig1AaQA9LxreuVDcs19tU3khMdCwCg5Rx3GmjfNmG1WMGBrxuLeS6KrcUWqCsLxiPtnMdyDQSnR7Z",
  "key38": "4esdmd7HZhRmqhkMYjQCdKyadHJqDmKCDwV4eBq47jTYEw85gYYPCbKK1qoNCYuLjhT2dnPVk5ZtJV23hLu86WrQ",
  "key39": "5Ex1fjHr3Z1SDLjaMV3JKWTrKRFLFA3qBcP76QKfERKiVVg8bwK7LaNZCfCyTzQoBPp8dzjUQT4E1jYd318iKFis",
  "key40": "3a8pQ5qEJegCc3bzrMiWrWmAqvfxnjys3nruwByhujBButgnAyo3ECoXKithkYTNQcWx5TtufGFPsuHaja684RWV",
  "key41": "3UufxANDNvQsKaxAXvKKk5nCGSLDoMMWc4Q41iJm2djanfnms8yana7VJeapAUdQG6dZWhNmi1sKeL9cW7Q4ebqj",
  "key42": "4jWn1CgGhngRzwJhPtBs5w2zptyQctUFTaSqqG74PbZ1v2L5mTRPrFAUfA34uxm33LFg2H5HPtQFWGZnqz3gCz6o"
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
