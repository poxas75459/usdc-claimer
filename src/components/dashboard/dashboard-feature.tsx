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
    "AoJASwYS1pnfmQnBPnxzFg6nhnrfRYT9TQ43ZtLPTfWXXaQ2DBfrov8xQdrru3YzGT5sLPUwkhqgvsK6bMrjz5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCb5XjNuqiNUDsx89L3LVeNWuzHukPUJqfe3rCGtK4RV8EHVwHWHAvZeL4vF6W9GchbRmb7cJj6avtVN41tqqtz",
  "key1": "22g3HRLFD49iQcqWLtLoTpacfaDB8Ee6Nohq67ZMmxt2msAA8kvZVVyf7KG4vNQQawykzHqTMpWVr9gDsUjHSHUu",
  "key2": "66Xmk12YiM4F5uKjqxmGnLESAd1SFv9jb7GhCdfyo1BoxaF8hhdQ38G3o9Zt5eVnHgxigvpiAT4Pp3KcSJKU5GWW",
  "key3": "2Mi6JZAGKhrtSmhsuZwvhw9X3opbvxiyezzkUjRVRFsL9VCuStwLxRJMvms5uwNcwvGQLMP5CGTUr4tjACzefSk4",
  "key4": "3E3cFd5WntgMwJSuzngU51Je9dgirpqrhGb62G1Cd9TScPiH2bP4rjwGSYbWUqQsSiRYpK3Ne1VX73pXHvkM8vBK",
  "key5": "sYLnwrgttT5ci5nkc1hQz42Mca2rztEsuepFYu2MVzUrhPKjdf69EVr5dsDjuR8iW45mWRXX3b3M6sLZFq348dB",
  "key6": "bSZ7dHSCUR2U2ypdQAwnZZ1D3QgNhYJuSWJuCSfWZxYobfUZyCb4wk7jWJCYnhGFhgo4t9jc1xf1kVjj4RW8D2a",
  "key7": "3JYbvL96qA7ERK4DM5dDwktBJhAR71gNb9R1UTuKVpKB9CXAGyoHEijjYj8XUa2iGwuZZq3TZMjvC1hogM9FCs9t",
  "key8": "2rgHvwx9KjLAehBuyKcJ1GuqVTaSvkbV835ofrDFbwfcuQpQsrHcxFsc9RiwxEXZbaS69xgcnkVY4x1HcQvQa3Xk",
  "key9": "qs1VN3k2Sb2MtAs9ubxdo7q5anh6f3pWoEPYc7VLb39BfTs4fDrroGWcxiMpkxQnfztrz2G9oaRui43CYLioGYG",
  "key10": "U3pCfXfxmMJTfvJUihgAhnaZXoPh4tv9yBB7FuEpE5jvtNh9xNRop7e1X4D99Gy9E8c4X1p4QXBEvEBoV8zRJxL",
  "key11": "2B5QuDVPCjBCzg3ifKEhD6qihhqLg3jupjgAiJ49obxGEBKzcmPrRcj2DPYvpM12WLJdw1XvLGtZ3mSXpos7Jbzc",
  "key12": "5z15AsisHSn4Xwzuw3CbC8eN4PyvKYkbKaE1H14FVfqfazqs3MHupULDiBv8TpEg7khiB6Ma83jYjK1QReYBLSBb",
  "key13": "5wcJ21xqEFBahrd5ZS2xtEkjtYZ2VXwPxFegCChhBM9mYx7aQv4wRfxeEciRPSmMgxkK1wFpnCVNFqDFFoRvCXyL",
  "key14": "3DCsMbL5oC69r9fYFaPj5cjkn8Kchc6qmYWgETpzrpqX1RFu5tU2ZTeTuUvraG3opfnryjjLdvJTDJPsJHdx9qzM",
  "key15": "2Nr4QPthny24iDFkbbvcoC3PFfWWmSU8KpYhqHfjxL8KyWMK4cd8yG1v5KgZc3G2dQxQYwAVRTZLbapcBW5Lw783",
  "key16": "DnxG6vQ2o6qgwFw41AhH3sX1UPwTyrRozYARttdABdNosxMpo1y3o4Fnbqv8zEo5dC1nGe2BHU2rWSvUcLzVhVT",
  "key17": "4BgF3oDpgYbKbmvRe9LoBHuYid4pRxPEmqw9WzhXmt5oaErVEeEL6StKF8U5kDZAg8g44LkR1GB9wyUepK2DLaxn",
  "key18": "62LgJKEe2151r51EVivKYpDYj2YN71oZhuJwbGwyPjdmEPVZfXPCFLkua4BD6fEngTQpJhfvRXttjN1QXmyVw6V6",
  "key19": "4feHyatBuV7CKrtRpMeuBStk8CYjC4LZoQRFJQQ8DtQtFRWGUQEdBDmSxLyFwrwRFas91SUjFUWncjxQ71MKMYQR",
  "key20": "2EHBG4hyw8GiLYCAFnVxjZAzAepFfv59c5xR4J18nSAwsV9BxDfrgiNUkRCYF3AmqrH3s2cMGGLsStXjzcqCwV2r",
  "key21": "b85ror2sG3BPxQpDtZgR4463ojqAPZdF3WqRZ4YnP1ZaibWGhizcdWXaPRREbN7MqBLNgZ47YKDskTR1jbtAQSj",
  "key22": "2mD6KNXCMyPbcmQDKaq5CKCt5f874fsUv7XF94XmZrsn76yT4zM2s3RbJseNkiZ6ey8c6go3RZKbPZuzD5DQNWtA",
  "key23": "39BLTKwuNSBHAkF4gnydJ2UzXbsANq6yoLguSL3Ckyg5TgpocTCp2qaNX5UtbYwLnkxDwVBYCwVEdYYVX2yPnqPi",
  "key24": "5Pw6fzapTgcejfcdMPvkLTACwo8Esqt5BC4CZCgQ6f5arF6ojKhA5rpX4QyNDN3Sp4236sB9AHdKmN9KBq7yxzZr",
  "key25": "XksizMprqjS4UL5P7Md9iKvdMv25e666NiEEmUDaTavrj2HXyPiKFDFih4bt5a95qxeyMEsroQqdtkHXCGQYQVT"
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
