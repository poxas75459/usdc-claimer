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
    "46Nhr2QgFLd6mtBVb2VZF88Kh7cyseCVpLxosC29KBd9rWVw5kXX7q2sp1SFo5n9FT6dYGgFcH1vn648XwPge73T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zEeJw2DpSnWUcTdXFd74veg7V8N6gMYh9FFMLhbrNouonmKVzYocXqtrrRnNP1tpqLpb2UwGhDvKSuAHX2huwxD",
  "key1": "64XxSvuE7fwMajLXGDFMLZu2YbV7TpBWRp8yxEE1qVpcWu44CSUxz8Pfdey7pwQHFgHjTwwBfouTWS9EUwXyqfUW",
  "key2": "2cwsvzVAb8ojmo5zokdS3NoyhUhV9boDAjf6zrUShpSr5CLQ9zjsSMVrXuYewpoeFBb3UKTVyQeEzVZGEMUq3oiG",
  "key3": "5qnFbn75q6524DhkTKfB1oSZy1utv9c2SA16GoACP1dLPdF7ALwqJ2kT8hRYWPCgnr82q8cHTESQmu3k6YG9sj4U",
  "key4": "a5m5TfSDbq6bffRnyBZeA4tTrWxUd9tcBTeFvZMynruG8MF7zTPUdbEskthjXVG5LEBHdufnhBEJxsp2KZX9W6m",
  "key5": "SYXVMf7GDqXQEB3uP7yUXjzgZSgqypyTbNepemkAwWmbFccw4oL3yFNeryKqNLi8tJZJeToo2sKtiMyKRoYhk1A",
  "key6": "3HRPZzDnCLsykscija2GHNSRxQy5ojcVEhoWFwK1w4JzWa68z97QqUWdBAwZPTkHiSmqQ7ag4D6Mqm3DQgGWtRxM",
  "key7": "2zgJHvQKe5SWTrYiYix2Jac4J7YF2QFZVVNSf4WZ1z89wqjaH4RyT5Kcr1vJLsZwUe1Tzwb9BU6fUCtuKF6ia26Q",
  "key8": "5vrQfmYcGqZ6rCFumtru48jMCmUEHHsyn7x19vkpcScvFkNsUhTA25kxJqo3hHGhfLEsHX9s4qsQpXQXRxwxW4PK",
  "key9": "5LP16M5oo32f7r48vpYowC1Rh25KJP6Bt54VwFhXswYsAzWzjsmeAFHCEnFANx7TnvRriqVorvWpWrbraNmkCyUN",
  "key10": "3d25i95Ft68mLMiMMjp6SmSmMtwhExC6pRLAtRGZutdVtfnEgrVQYjGGtajggj3JbVY5eSuf6Lecctv4UxcFdiek",
  "key11": "2Hxfx32gFsngi3bCfu2Jd2S5ZUiXZ57Fb52TG1Aad2bARZcR5BHUK91pSNPFfMjqYpfbKC95DVgA6WvbEKAfQ77z",
  "key12": "36WtjzsjiHfHEhki5AjQ2AVzTDjh8WzVWhPTH1FE938917k5is55mDw8fNCWXWbZKffhKXvsAFU9KnJN6AbU7CRa",
  "key13": "hSmhS2iCZFsLJgFvY9cpJ5QcwXKpJ41iHZC1EYRYqP4Xjn9JJ4uU1X5tVnDDhrnWQbVV5QXwBMLKvwMnDnvfvDQ",
  "key14": "4SN87ASRiDgPTwTqWggydLDLk1dV3cvuMZBZ9qz8WJcyRHAoXvMMgdzpFsQZvfLECkFKfxus8CsoEwimDtVBRXd8",
  "key15": "FneHCPqxtKVtYLDGJ4Xg4Y7Nux5aRTF66g946G2f3aNxYgTQ4U4EbX9FP3YPExRgEzxgWyo9LoqG3eK9WySSESp",
  "key16": "3ndFjbAXHW32snPK6j7BhoZsKzXJgmafhKjJ1rAxAxixx9BFjfrYv6SAxdDEonJn8qMEmKKtfvpYR6WE4XeUKWHy",
  "key17": "3jiMxg56ytEgQtEasZTxKBqgdK4uK7vdLVD8n1owDaqrTHqUBTwH9a6z4VahxSyHikg2h3fjByATRXeabVi985WR",
  "key18": "3rBspYoPp57dP7zxGkQdcy31mNJhLs2mVMG9YJF4KyjZm38QW458NN961vGn9adNR3TjadBaDqiWPqciDhmPFe91",
  "key19": "3drtEVp9zbxed3XtxyYfUSfbVXgeaCuVFjjrs1viYxZoPo78gTqx4AzBPkDLAZnErTx7Lr4p1e74bNiFHem9gXS1",
  "key20": "37JehuXThkU3X8jihS6qrLKBVKvLZPkr127fsrYGY9waFyiWNu8YGkSqfzxN7fiThaF3LcX5282jLhJ9eCpYa7bM",
  "key21": "3C6pAs3sfcJrQQAkpM3WT3CQZqm5speuHqVrM4A5v4FSACaruWUXUJ1EygJmwstKQ9M5F4hbxXyYneeAk12GEEqH",
  "key22": "zqwpcnfnc3PbCht9EuF5hcpdXYNPZD7aprQfQTYFmvZpoRXor6BMwjeoq6QwVWDaqXDYG8RBkgUhA2m1SvoCZ2p",
  "key23": "339REDXe9vTNhA2AXw1GeHaxgxwJTEyFRfAfzzZXQixFcVWQXWq1qkNX4hALG1wqrPaap1Fko7T3SkzoDBUZGDoq",
  "key24": "4SfDiP1CPE8px9HvuJTA13Kza3RTmjC3iW2QMnsWmyCnrVfvQPhwrb88q8jy9VLq8fBzu4jhiaLbi1K3MNcfiGza",
  "key25": "3FtCibzwMRyUPAk3Seaf7mUBEcssJJE7agDry4HYv6epkmj9WN7EQFGb6N7KTMCTCpkR8a54EivbPA8UoB2dFfmY",
  "key26": "2jsYHfaEXjkDQtTLPhu9kyAJZKVTDkEtgH327EhSfrMxSqbS9fb9jg4G6FzSbEZkBa6usWjeFHvrNF5X9pKLmadj",
  "key27": "2Z7M5ykeF7X1YJ4dkoL9msiEt9vXEBWXjY5hcVbQABQvMwVR1e6JA5FMmW1LcxzHDsD9wjxhbkw4x6fUTWhcyj8N",
  "key28": "57oZ5vX5ottRnpUDkMS8uasoMiWD1fDgSS1KHB4GoGiUp8vLZxDA5iquPRjVYTMkFAQm2nmeCTzVhGSTqTzyUpBg",
  "key29": "zGTHmacSDEWcQnEA8u67VSqBpTXvXfzcV3DQn9EBpnHNYM3hmwg2sBgyx5aL2wVYyfFQgnStirtUAEeZtYpR92h",
  "key30": "MhUH69FkYpcikLU892qYH91Yx7VwYDNay3hgjdQEK2Eqq1ZLTrkdYsGkE7cRZ2urKgg1zu8CKRd2hqRQmqde9s7",
  "key31": "2yhqWVF6Ee4tmwEiX8DokvF8MexPqkYeVfqG42mzC5TNhaEu6Mi2Dicj9oibtQHGWgzxnZ5CNuC83ferfpPk9fQD"
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
