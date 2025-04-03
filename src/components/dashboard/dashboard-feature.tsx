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
    "2CPw5UnY4SRSoK1JfLaqn9Srcb7nwKcqrkpwbnWARGCC5KF1XttTbmYgqW95tvBvDPfQGiri6eKeHMr99ycBmJba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MswpzGoA7rCCgspFYdvyj31aeJ6T55jXeZeVb9dtEApkBwGS2Wi5hMgQ41PQBH2h1LUrwp5UQbFB3rEW7q4bAjG",
  "key1": "2gcfRRZWnuEq9KJFPkiUEY5gkjCKomUVtuZAVYQ74py7tjThgjNgow4DtpEnrFyAoYmX4xSKuCXmdF1NsvHSCuY6",
  "key2": "259EcQ2gm3wpBEUydzgiP3NJcKqHtV34QFF9D1MHtKJhUQonWjv5fzgbZvNPreaMW1o9o5tMNXe7YfPZb3UbwWaP",
  "key3": "ziuHqdTJ1a4ueRdBmYwKjqpphoRNGi36v5Q43sPqdyzUxVkJsKZTxxttbuYC4hucanHdUqKRfgyLrYRGjPKuxJy",
  "key4": "PeBYgukdFgZoV3cFQVdrLy2sxA7tAw7DPTa7TQnc6tfajHpDxKxKLmUssFFvhCjXMKJcPsjiQ5MbZD8oC5H3qcj",
  "key5": "67Ftvu5ooh36tPtdjXSNZpUXny67AsqWJZwdNVMb14sXYN8tbw272MnHmMqLXkbApZuvzfapGNMdrodX9eP51MC2",
  "key6": "4fd8hSbvawWb5TzQqXiXdWz7cSn6wbyJdNfPLRQCo3sg3YFfv2MLvikhS5HDEyusbFdLZpwj7pyVeXTqbQ2awwXY",
  "key7": "NgzJS1pL6kf6gGfm7NReUQwtAQjDWxTHoU2Aoyja2H9cFs4MCNbYbKF4178DoU2uh3ZTZvfQBepCAt9roVNJmE4",
  "key8": "2SBLekS84WRvG4jCbF8MrDJksmPVWMK9kFxTZ5ArdAoqMSUkoQEWwBJh8K1NWnK1xWtXgXNXXFKLrvf3ZgGbBcPD",
  "key9": "3U3UJsM2gLbARa4Nj7GyxbEb8TcAau7To3zMDoZargpKzLhnJKQyAQXVxGyBV7P4bBf4PGJtuEpJonVofySbVjS6",
  "key10": "3eCyURzyZhc5vgMMASduL6uVmzsyvVBkJwTPX9hEjVZdUn3GMvgmyJV4RanNjZwyHCeGf82yUz1vyVXwWiz8h5gm",
  "key11": "AyGU3qpiyvW25di7Dfm5LF1VQhZ3h9B2np2HUqbT2qcQnJWu18MVJShWzNPQBFJ4HooxUDvZy3Q9mTZ6hTUjc6B",
  "key12": "2yj1qoCPJrVAHp1uE6MqKX7biyxfoWjHEmbhMxeVx9uRVYS9epZdaK8a3FpoRaW9L44U66mBxytjBYnZZB2joF5v",
  "key13": "2aBSo2pR3bDxxnSCPSP5ce4yxtD4JqpQbctZLU72KfLefevh4BBDfGNzeY6i52S43gS7r8pAF7BfLY3CJCGg1Ymu",
  "key14": "4FCEe4bqqVXHcAxSfedjBkfMu57wLW8eatdSmVSxdqwLcJF6tZUr27LtSk6L6kfW5ZnGR2JLzrqhy51qrZW2189F",
  "key15": "AM5V7hKue6aag6opKd18DsXWbCKQAvyr3HeCuVcawjReZhZUHiAc7K98RsBaw2bashmVouuKRsb7XuvMk9FxSxm",
  "key16": "3qwY66GnWDtNkiWL3zyqb6ccoK9t25JtTfaB8oEZmJWJ3HDUjx2eoXe8g8RGQkfRtsUZjugnYJRz9VUczWnUKSFj",
  "key17": "3aSqXXYpiWpXAvPZUcVh9WsQxSV9gJKL2QEEAEJF3QVpeV1hyCwQMTJhuvB6pMeM7wLPMXbfSv2ZmMHGWBcxm7ZX",
  "key18": "4du3ynm6YB8qF6CzgXuG6ehHKVCstSSP5ve5vfz25ZibHgUMJgesCcmtacF2s92iC2tRAGSuMZBcV12qgRKuMz6Q",
  "key19": "4W5a1CNLaXyV9tfEsFhH11Gm2L9rY1dDdZzd7GLxRdPrfMZn4uwf52HXd13vcwNfpnQT66ZJQiEkBeiwU74HSLrL",
  "key20": "5QxuPDeCy7xiXmNoBvynPTawY5yLWyv4CCfN2L3yWqD9d5hJHJw2VtBt231LmixhNwYk2C1PBRx7mPmh2zo4Wihd",
  "key21": "4ZtbTg9R1qTAzXnwywbFZWTzt2Q6xWrpLDYSrkzyPvRoNe4Z1HjS2qCQ3jLDyFfqewoqsSNMEZrE3DmgVPnZw4Rf",
  "key22": "5MG6wbb1rUmz51DUbgi86ToW1sJGtouCTy9yiJi17A16mm5aRQexLabM2V1VyUL7oSgipugLVSoFvGTPFFnUoXHJ",
  "key23": "r2meS6q2F2C3LVMDSg1rC4NHWYqX9wMQ77SuQhgX97BUknZbtsaTT68HA5SEH5di3t6redpQkBjGEveYshS8nTu",
  "key24": "4ikbggQtgu1XyKrkoGWBfdTwcAmbHh8iy6TCabnmqQ4V4VxgnosXi9aWDFjT4Dv3bzJsixTC8guYjx3cxCwN9e51"
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
