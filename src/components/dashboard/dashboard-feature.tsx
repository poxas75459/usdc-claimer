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
    "466FxMT93DFExv9WjWSBEcrMsVTpynTWtMT3esvMUpvPWG84AdeAjK7XpgqSgNcVhJwzkYcUWe2HgymHLJEZ471P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6XwdLYsQduytsn7uGURyXxe7E5jgam1pzJgWgxFHrThQB9Vd8aAL98XCLaV8jLdW65UkA8A3kAspX5nha814Wf",
  "key1": "XLogGyVLBcW9sq6kbixXgUt1zNyrokFd4uNhHaB1N4vAKHkJqBQdqKf9g9E4NN6osFkuts9dQvknWc1tJah88BW",
  "key2": "3p2Sbv4DW6HiCAVbyxiESHdeYvNLUegB1rFGLJpPekJCNazHF3rsUiUbfmvqdTwGanad8HsnbGpvoYoiYwr6PMyy",
  "key3": "4Nm9XqnbrX1PCz9hYxMXL4d6jyfAWEz3jnqFuwv1WYadv8UmBTAtFoVdrzX6egzSY5r6Q5dcNQ3V6UoEEijgchpY",
  "key4": "n9oizNj45X1TtRjpbxgPGsp5aGmRU384LhboBHFpnaMVMtYjk8hZ3DKQBuoARPuEGuYdyUj9ZPmonXCBQTM4qV8",
  "key5": "3NA3b9NCUkfhpPgFZ1nkP3SGmSvRdYntPhhtGTV5CyqXeYUuQU2uuTExHLngF4UiwmtphHNsvFuNQzeJJrhMXACv",
  "key6": "2GFhHtgQgjgZC9ZrWpWFmFQzRk23mMDMRTp6DTLiXHhrjmm1vH9HuUidd7CQ7cDJXJkSWhrzyqVri8kRviZ9w4Kb",
  "key7": "5Jbti3yycrFViC9VjBJQLwRjWnSdf6oZZnvSzjjoWZSNyBsue9yr4R7UfDQcbmrJSSqGFj2QHgDsAUMZ8nYdVSFE",
  "key8": "D4fwBjHeWH6L3QALQRBVGCaaxh1E1kApyRvCvRuxmhEP3eoWDL1SF1QQtdZx79W5pEBgVHqAFZVXBjAnTwoEoZY",
  "key9": "35wQarrW3uzeyCtLngu58vxhyAny2a9N2v2zaUGv83gvtxZoGqqA9Qv1SW2kBEHCxJV8MP5ngECX6doJtHnPEzye",
  "key10": "42Cc3m3iqaxuYZFUCw5SGEMZD8kgrNQg8JKgxBVEFb5MNrs9bxpGh83UmM6EnQpqt5JutjeQQgqkK1PuUUU4TKXc",
  "key11": "2nuubeksZhdhrU9JiPx6Wbn4kDxJaM98i7Psz3iweqthtErsDjUtHqwkouwW87YjB5WGjf5HHx8CNV5wc3rrhYQ8",
  "key12": "H2RASmD7mw2fXcAXok5N1FJfaFKSe8yLYhjXpyAFf8xdUWVB11c8XSpYQ2n7KVN4p15ee45m4439dAimQNbEFxS",
  "key13": "55xSbre5nYyPKebr2NhLvgXDcW7ZNtb1qeKfoNXmcjYoj36J6bjpFUqM3HhEhtfX5736K7a5vqTT2NfKqgmoHnB7",
  "key14": "2C2PkTckZPuAvfW7eumcwbg9kW5GB6AUVFc3YFN3egd2L75nzz35ybSBsZxxV9YN4MDbkYrEK1vimnCpZSPBEyWu",
  "key15": "2ajBiLH7VrVwM4dSEG9HdKBWVfkKmULDNq5y3kuGJhQbNFTtZkpJMZ3AeGSAGg2Yh1iYUDnRW4YjxtXK4fWq6uq4",
  "key16": "3rFM8Wg6733Wzu8YBCZTdL9zcspR4YV3MXFhkZnzgq2be2GjW4nexqmg1WxfVpY9JB4swcCKBoXq7asKCzQ92LZb",
  "key17": "5FJwdhMkXML3Ca8FgocG9qBoR7ktS6GRbbvL15xufd4mvjpJvLcTGfQPWwiH9Z47D2ZsZzecKnAa4k2wR3adMHv6",
  "key18": "3qctAUY7CgUbanRq58jy22VD6aQU3gZcWECtA3Gf5EyokSB8mZkiRCjoahNJYQMVwdbNAShrAAwEB2SEfXpM72im",
  "key19": "uLNRu51B4Emsr7PV1TrvFNJRg5HTHbfGwqVyqVhyCWsZB7jjQhTVAeWuJ82MNYBmpyYhMpdXxPQW8wuTNrQfoiy",
  "key20": "4jCJfPBntLm12RiafdS2PzgcP49HesJEA63mHQ6EjA7ea7GdgrBFSQnWfCtRbzU6UJ8zEcFhMyi9rAhGPFHZemia",
  "key21": "gScRqLaC7Wt6fZzy5kctXXsjyakXtDmqRKkPeWNNDT9oEYK8JCN6kJBF2UaaM66iaXHbXkCs8ucUKxKTLj2QKdq",
  "key22": "2F4i4mdPEE7qsG9StimVGZTV5usw4wL3AtZZWMHmKyjdyv8abPW7Mj7fdaWwq3hg9rJhnRT7zGUwu49u19gwk5A3",
  "key23": "38U2bFdSreAmZTYRL7vZAAYJn2FUKT2qFTzjBxqRadzxSc8dE337wCgFnYMgyHYm3LUN1cmKuN6HxvZz3XbV1sYS",
  "key24": "36JKUqp53mrq9GxQun4r2txudcQ7hkgvMQEuBGjjuSngTtvUubdP6ropWwkEAhP7RqCFVDExZk57E6hfA2rog2Pw",
  "key25": "DnGPd3rnvxXaxgQwxa4BxersrLNjKL6XFBP5VsYfnPvR2NbArFEBKEhmZr5EgTSYLkpUXtkSsWjZpBkg4qr5taG",
  "key26": "2kUk5s9i7gc3JikbmToBsRW2YnSgUeopWC98dZPjAUAHdtYi3dRUzNYdb8vusiyhX4RTQWYLgVYZCno1jkfErMfH"
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
