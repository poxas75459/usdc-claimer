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
    "3bEttuNNPG6i13fteKeWKAhUTZaVvrhd2PRws7FhHAumRhWdEePr2jdNpBmgqZ6XqnjE9fiYHXWGdR2Jq2ihtreL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uCxG67D3JDrNnctQnL1bnmdKWdECJX8WYDZbCE5BrKx3roJEk3iFRTtLtb2HEUk6ooZWWpwkFUM4UKoiPN2CWio",
  "key1": "2u4KweWAxsgAH5qrgW7isbwrQJ5xnjKfgyUxsWrPxi6Kub5fTDwPbYWbeRMt3UGh8eFVaC52GfTZrpgvyVBv6mRq",
  "key2": "2Uvd9Gn5eD2seejH3hmj7zVnHKymTEJsrT7svWmkXBaYQ4kCJQ8w27deAPYDZBRF8KBRe6Ebu1RZRWPnd1o3JzvS",
  "key3": "2ahSGJLrd3JXhMAQYrfSMdXWev7d5sZxgUTbBp4zkvRJi4rFgvvfch6d8x96bz8KwDWvjvVFJmR7krZZrJvztzw1",
  "key4": "2S7czy4V8Y1TfaY1sLNzj8aqTN97MdUH4RWwsZUAtxWb5E7rgTMMoM8HjxVmu1QutfdYEsgjVDU4QsiABD3AsZN8",
  "key5": "NMf54mB211eAoSu5fmBE6kbL6GwfJCZPu41nKhtd9kDh2n5oh6MzsDXDyUX3Rm3WFVakKJnaF3ta1mWLwS1Prf6",
  "key6": "4VrqVaxnnozRzi7XLaqAAi5rYqRvUPNcurfWYVkz1KyEegRwzwk4uB3tCEswNpP4n7sL5YBeSTzCHGS2qcaocUMf",
  "key7": "5W7p9tVmhqQL7zaSjcCUnUwvm9J8q55iArQNTQmBSFdM6mxU5VoLKvEoi3dboEJB7UYbJvdRdXtornCHvAAw6j3F",
  "key8": "3Nm5E6Y5GENF7JqGfURLRqRGq7xp5sfhdH4GUsQh5mRWYd3fBPaZLnGsETmM6xfe8NcBKEzefSWAYKtqB1NH4HmG",
  "key9": "3ATEJYQQYUKUTwSs67JTu6kvfs3ZpQmZbPFQmTnsjDTAso8suDgHKr4K85wRBApj2CfmN8RkjDfTAafVfXxgEUWR",
  "key10": "3hkMhRBxpeVpGUQL497o62cZpUWdiGQHDwz7d1J9rdZxpoqd5pJ9XvBPPJHbeVjiS1hRGDKjA2npA3AGsvH4fb2M",
  "key11": "4dwgTvF5vGXQFFNNeWQbVESyf3k67rLNpUameMo4KbghsrBvi8vw4cXMp6htP9Q6CKeV57L7YDi9fSuxtDTdp9NM",
  "key12": "4ur2Peqz11Pg4Hjw4ZxcZZ8hSYmnjgH9Lk76Vaxf4N7KQEGebC2kEqxoTWgkacg873ryDyMTeYBm6QDCH1yDhsKA",
  "key13": "3SLWtsJxAvtVb5FnBekbmo6PjvjWbgDFJ1DfmUFGvDPiAGPX3BKRPy2m5TjHKYSc4t15sXnomGKkwJLjfo6q8Pjw",
  "key14": "2NdHRQo5Ngee3YH1o4gXtNKgKRFVKcra6aP7qicyvLKnDGf4rEiNpomhUwWVGDw6HwyXa9cAvLCibnpzupX1wbyV",
  "key15": "k9mvRfeZ4tJ3NN8tgi3fbCs55UvThLPorqkyGsbo2s1bRPJNRjH16wp5YwJr9X1k3BEDe3GUNaFuYYApbw5c98A",
  "key16": "xh5ZSsWE3ecaRHqFrq3u5fZXAJ3x4aFbxw5gRpUUwEurY3mm8LNfCxpdkwMjnezQAaDJa9jNjm7V7x4Tm1vVf1C",
  "key17": "5598bye597xQ1gCEbkUaiobrSG8ng6GA3HrRYWuRAcCi4WY7YCf8FpL1EKqpNg6nuUuQmNs4UbJHFvRms3r4N2JN",
  "key18": "2DjRzqKEtQnd7BGCnwtrKKpJS5wxgzS6K8VBNkU5XRt5jBn8UDZ34zaeNdVy5CHq5X714HC3bwVfTt46vsZZ9Bq6",
  "key19": "5NhZLfM5HQb77ki9rer9odEKTNACxSBqzZWCFN2QfdYouTU8UCzKKJ5cLk2y8kE4cR1KeSv7oC7xnedeGmK1tSkf",
  "key20": "4aRAMB1HUygKy3synGNvGeSGhkyzWcw8L7BgW788amQsZ9npUiA6a2JCeqZKJz2nhkBwVUd7hG12Dw4VRKcqjKH",
  "key21": "2F67S2sxJ7VmNmwV4xZNzHhFrpwRyymBKjepv8kABkXDMAsHKQbPTqLMrNSjCLTg6JJq8UspFexB9Gx7Tsr5upWP",
  "key22": "4HQGDpKU5nF2cEV2wpvt1HYnvfjiMH2Tq6t4sLRj47Tf99tVbiX52fhMpn8YjHqKbyAnkNFwNGJnm3xb8GqwLUC7",
  "key23": "4SqYdqpuQNP4WB63HWBkEtVfJT9We1eiHzJubixRcKjcP9UwYUVcapkWtptYJpH3ddzRtZ9rCRwiQT6vR31cm2YW",
  "key24": "2pXufPamGWfW7yQYMQPWy9DscUWwMMTrhonM2EwjFFAi7nKZyVjzURRbD4tngiw7qCifrfcGcTswfdDjG6qoipLc",
  "key25": "vTRU2FjYKrtfudP2YB37fRWNtEmhmDJXGB5zzz6XnFQ8VrhWbSi1oBpjTNMDNdEmQ6zyPfrb25Z47MPrQfTKnM1",
  "key26": "nYSYvnmJwwvA2v6rK5wB4js5v2jScRvFL5KmEQepjSPYZQ9wZP4eSXdwJLi57mvCwcYcGkBz1eqLHB2cbHiXRWy",
  "key27": "3hZQBRa5itPHqpAEzsoNnvgr7FRnoTWxqdMeJXqeyDxzchqDCwb1mq6AUAwFnmyAYFuWQAKEMyHgoBegfQoq5JW5",
  "key28": "2GSiyA18FxR2awpu6kStMbga1e6Sz5GZYoYVWnZpnYDhJAnehndme5P4vjLuc9f9JmH4feKdo2v5DuocWsu8DB98",
  "key29": "51MXHvBfW7DfJdteP63zm7p5r9qrMc2wgBs2AjuXJLaEBc1fQYLYTe3n1fPQP2vJCguybEnyf797FLxLKoXW6jRF",
  "key30": "3jMjWJWJAA74CRRQYFxRBXiQyeRYFvWsMfNBbuZgxotbhmuoW5LGemEmcVCoTXCt7PoKVEJkY4tY8JBjERce165p",
  "key31": "4ewM2zdNgfoFxcj3Gg3oo5JraNs2Zc7An9Njs7zM264wJJDoDisLGwx3aEx7iJfpsjbN9LdodsqEeH4sLopuwLxi",
  "key32": "ZtekUScCcQwckzvaCz6JDJmfRpbBshsNCJgdqHbRjy6jGn6jajubTfrSYfcXaXd85r2VapzPT8E2xtvQtAUwhy2",
  "key33": "7enHupVqEwibCpnrBqh4PjVUJ2ivkmSM55i4Rd98ojjvZdYR46tCXT5Jco5R4rTJ1ZJe2yyeP3hR8jZCktJTR3T",
  "key34": "2MdatKeozS5nFrdvZXCFdG61oKqxMcBanfd8uDxGcZmpfptjdc7ryPkN94ymQFkTqZMm8kdkp8ur6F3xjxQkjikE"
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
