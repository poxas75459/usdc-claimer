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
    "4PQDihk2EMzH917q6bKohNggeVK8tX4wwZRBuuu3Cx4h2pcYAcLKNxm7Zr8gHvdYgM4nMcdEmwreGpGYiipPPfXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6U1WfCMXigz7oSySV9SKeGQsv8uq8RKqdByMw1J43Bi7mQQUBhC2MgfyDbRPmasFznnn8DYu6ZmR6UHJ8XTLgf",
  "key1": "3SAoUa3E7RYS1yEHZdigxxju6ic3zkTfNArNyefoCdphYubZej2NvKJMYkBLiYwxDUArrPN3jdfi96LDnAfpNHPX",
  "key2": "2WZxjpTnYN5i2kQ1kCKftva1ExEEr2YVxfnp3inkGvpiKyap88fEpHzgwWZtL6STgHxP7iy29MRMCRvYAFC2eUey",
  "key3": "2m23A2LhdCxFD666wnhtzpDuYZqJwAZku2eNWp4RciaanUn4X6vYX3nBCZNFpfoPiU2yZjRh3w7eT9MHgnGk5gB1",
  "key4": "5EwVydzaXDQx4tAP7UWMVCoAVGDDYWRcx2JK8TwLL1WDHjKQAw5gcTkjyxePrsvi7JAhFKGPUCyt2hKKQ2CjSTF3",
  "key5": "3KMuCDxJdwT5pEcb5wH2Lzy5f573e1c4w5jFGDHLZxUBT4MJmCB1uaQ5VZgWA5gu6t8jrxNNxA19ZRA6vVs56dw",
  "key6": "TeJXJJ31Ktc329JaW7ububDtEczBqBMJCn7FK3VXr3W8NHDJiJyBD2uXbSkEmsZ1Mq9c51CHSwj42UWS45DfHjM",
  "key7": "3hX95icfMEpJvf1TP3UaqH3wuNo9WkyMZTz4GouFyoT5XqLNQXvww4JgURyssVDQXEiMYGqd5WuEJLjtxHr3snLi",
  "key8": "yVqNiEBD1BkV1FTRES5q55Bh7LmBW3ZpncBcSe8gmWXfZiqYeYbQEnDfUo1kuGgTTKZwxQjkWELkhyYrtxemTM2",
  "key9": "4xmCY3NS2EkwcFbsB44imCN1AV5m4fDNzmtZ1Sk8PZk7ffPAmmsjnhd46Uu4NjUWeAMewZiukG9EdzQ7chTafDiA",
  "key10": "5pmu9mN3rg1KqjznKR44KCEpqwhRj6ueXh3QNoj1SVb5qLuCFWQhef53sLFMFbzrzgZ9hMjHj7bvkL4HQ7ZAbGgq",
  "key11": "5cBiVqDvZFdnUbFHowZA6eJNbWGJxiiddeQcTeMR75sH2SXmT34tD5BsCi6Gw1fWGU8aSfUR6q54UckaBgUniTGK",
  "key12": "3PgMiPKPYpdMKwrsaWuafNR8tE56B9MtGBdMXziuejUwTQehEdNhmvSNK1AS1p1MtXrnA4269iaGswemh1DnDjuP",
  "key13": "3ULJ9xjYormQJYYFFWVzBHjKowWa3NsB18qJSrCYoXQnS1oAF8FQ8iMPERggdJ1v9iLFkYHJrE932xTb1j8jA8Et",
  "key14": "4vib9SaQ3ADNXuE7Ry2M9UgxP2VQ1d9dcNfabrLEKmEVCfk5FahxLpaCQbsjfJNsupUgS5gkniaBYDQNMzAJLd3D",
  "key15": "5dsmXvCk8egGcgzBTB8bxPKz2TfsdbzCrpbyZQBieKT54azaMw8Qujj3JhYnb8ZHetogPJ7GiwjxwooJwZvNT1wY",
  "key16": "4mWAyf6bVQqNwYAjsqgAveUtmxPwrbPt5PQTar4QHYbRNFkbQbFXRG7Um6jkQsjoJnHawHbpx7KsapA2Tbnvfnr4",
  "key17": "54SzpQMxsnYP1HQc69hDuizu5T7Mgt3AUG7GQc5deBdNjiu2bVw5eQ1PKBWi3sHGVeRVcXyYSmi8pahVK65RCBoK",
  "key18": "3NJTq5nz6GRQ3D54Xhv9pe5YTFtPY2nbWXmV7V1BWWza2zJwnCmCiE2tzCxtHf98NH9AhBFGAvF1WaNMxrZ69TpG",
  "key19": "5pjArVkm8rme22iGHG63VjvD192jcrE8AVUeTv2pyP1H9Gxi6W2Uno8aWoJXqquMxaqFU5kiBE5NDSkYQVLSZG9w",
  "key20": "3PNz2cbAFwqpNJYqMzcPYeYdaSsuxqikCHDpuq2rbQRAR2VG9FyFJ5b1mUvNt75MFq5EebQZNLiP1XgsYvczxJYM",
  "key21": "avPWJGo1KmQP55dXjA29qKgDi1mUa18gaDKcyEMN4W5wfRjpEpvZV7R1RTDZqbL7GhwkxZ6Do5UDaUuJuhC3rjH",
  "key22": "2zNeyqBnxDwueJY2tAymGBBzVTotoq4x1y9AUcsCch3Ck7RQZRYS5iV2xrNc24cDUuEpVB235xA3b1S1MR4sQxWM",
  "key23": "4yww5CxpFC8rv4VdFpETwrh11f5dAcYRK5E2Xk4E5Baw8cPXDPULFW3RAGG2C3xTmCcb4knJ43AeJXpb3WtP5Awe",
  "key24": "41seS75UwC1cpup94WXbxjYp2KWjCLkDsaz7U2YdYhmH7NMXAV98SUPxhDpNfC25PXaLMQsXPgfUg1ta7hM7vcoe",
  "key25": "3Y1kduEWrCiku1cr4DKefU5fXsLQA1vvKtfbist8KcN7nhFammDNKNdMDgddQB6cxwHnyzD14CSxbZ9CF6mckhux",
  "key26": "2rBovkkPLWAKZVFzeP28GQ422KwgFPzwgPsc8KbdEqZtgmAELiVftCi1FymBJrmHzHFp9SvrDdBeHSJcYawX8RVn",
  "key27": "QSUiYrV4yT9R6s2BXqdDkCn4th5JRbjYkS7maYXJ4dzD6Vz5oRFWENdum3HBPBxnmsMz1e21S6b2AnWUcEV9x4T"
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
