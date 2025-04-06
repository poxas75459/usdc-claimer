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
    "Pi5dF3X8rg8gCXMSAeFSX2UKET8TkaGJn7GHYvCJYqekPMzvZ6ENwcEri4qbv7QbbjTkxCkfG6EseCAyGUqc6fL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oD3gVkY9WYwQhX7gWkKJFtV5JdANEjzMtrRepS6uMNnLFUffRo4UXnXFpqpUxH2YyxbK6YFCP8fPQyaqnKuMirM",
  "key1": "4B2TRraifbHmozwDPN3z2NYqpyyVaapnsc9yXCRkE7KwsnfQBhbWcc7zBQm8ZFsTa67yS5HfhMcXMEv8EfaP8bDT",
  "key2": "3QCpGd5X5aaHbe7776pg338B4RGBJq23zAE62LgYF9WPu8RkKnoLGXEtbSbhTAT4wLFfatoZR1Shxs6yC2mJcgP3",
  "key3": "WaxKVz5riZrimRsanMG1cdPscaCoKTjTAWNFcWG8WDyc7dqPUicM7x6UJhsPUfAyv3T1zLGqaoxRPePK3po8LDr",
  "key4": "4JNzUitwgm63ajqVikHXNDyvzYUmzS6BfXieauVwnoYewZm9WTw6oLSwej1iMbMUyLRGiwXX9tz4QpZFWfRAns5d",
  "key5": "3U1TkdNEaYTZVt8LeWpwgGj4mTmM5owTdm7KkhY6wZAdAPmvJQgjoD7bQDjcikh7qLej5cgmUjG6xwwww4eyruNp",
  "key6": "P7s7dKM8Ka6RSNbpudFUCnaWNhTjGKiwQfu5zBXkKdX4nhDboaX1toJ4zhpB3kDRw3rDZAapJMJmys1wzVNG6vh",
  "key7": "61smiYrRrkVPT26kxUqixYFKaMw7b34oAdXbabZNXvrKTdXU7bHz8f1qYMzXv82ATLopXnqDkgg1sWPj2Dr8wnMa",
  "key8": "4jPXVMi5M5Ck6Pujx6TTZzi3hjH4cQWwxHPLtdvAtWxJoc4UzCMspvUEFEdbcvcPb4SkxZ1m6pErL4MN17RwPymv",
  "key9": "294kj2c5uQ85Pbzq2UqEh7ZWvDEc8JHbeG4q2BhRr3a7Rj6a7BYR3dbewQfcyZTKMkYmYzVxNURYQeASm8meGU1a",
  "key10": "4Rk6hnpwtNRHqoHywFLsQUtB7qM9ZsnYfLTJWfRkHr6amgpx42Eak6xerYx75aTNwPnZANuVu163hDnwwoqiP3pG",
  "key11": "5V2jKsgQ3VsobEU5ySXaowZwVBYLaSAfFgQHnrE3p6dyqRnxCvq13B6LncEj7pKfLUST2PKCPyrkG6K4S3ty84vh",
  "key12": "4wvbm24x49URFfr3tsmjKpGsFFJKomYWZurXAefR321FMia8KqFKci1RYsNzC668sSqttBerdXMRrCim4dVKT81Y",
  "key13": "xEaLZirUjGRDnBo2UnQ3Hr7NX1G1mHwpbVooB3N2v21kgQVEEv8cvsFhg747zcqr9xXmy1JBw9qQerrLi16ZWtC",
  "key14": "4J4yVsHYQkvpm1ryGLrmzZqiQPFUAGE3awhBXwZz562bwdG7LCqpC4r9tcxwUkxQWvHbQGeHw3nx3yJtXkrMjfp3",
  "key15": "z5jM1mQn2NQ2sos7bj2HYjxFyWMGtX2XtnRWupricpghkLaReAxyAiTrWuKmiCwa9So3yRaj8wR2EyQkkRPLkpE",
  "key16": "5hzsUcUSmwpX9wRHnVjrWptF7auwjPF9JoZYsot7FCuTRJCjnrWtpLQUbskvDqgcga5HiUR2tiQ5icNNZvqgtEQt",
  "key17": "axYo5i9b4e2RTGA14yGVQcwTQCKnkztzqGi2DoARmQ9x7Nqi7jDGkGEHxiDkY3XPVAz7Gm4DQj9eckRxVufcPTT",
  "key18": "5YUkuhh3qU7iyeTHbffiSFZakFwJkWdgGCZ5ZvZzuYr6UmYcce7U94Zy8Fv1GcwnYEzfbDF1ALokSzwqJUmfh4Q4",
  "key19": "47qWFxSbjx38HJFkLskpjcZoktKmsETzvJeWEhwLLmYs2dKNjDxNqSHf1czjDFF1uNt9P6ihBQQuJJSZ8YF6BZML",
  "key20": "5bTQ6wj8xrGdLfHwcf5RvZhJmAVNPto33D6ArzKz24crqTCwnrsjAkmyixFFTmURf59L9ypa4yoL4pRBrPx1tSkC",
  "key21": "2sWDJpf5bV3hQrvBYQLrLuGGu5JnAF3wQRBMRGbfZA2e8Hn7Pj1UncrRSccLTP4bopW3MgQ33S4nRtxUwHQRRhTA",
  "key22": "3XucTpa16th44EivTqJ2PYaPjCNYtRHoaEF4xKZ3ruz8ETSiJgeUoom3YKJDDpcFycLWcQX4R3mdaCJj4JgMsLVu",
  "key23": "4RFbEF1b7ahWGveh21TasokGB3U9fFbi3XZtRhS5Vc4cdU47QMTpyJdfdArGnroA86nrPgs9vrwQFhgkGCdysXM3",
  "key24": "3W3LEwvLsP6aPpXrnFVZt1BnbwFV5V27G2UQA3Axnz64rCR4jYh96afyZrLrtg5WbPDdS98fx7mdVJyxyHxKn4c4"
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
