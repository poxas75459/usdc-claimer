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
    "5jCw9VWES64XQSqJZrRrhen96Vq84U8GMLJB4SSSRXBkwvm9A9Mqi3fSjM7zcqzxKUx6ugaEigu8Vrv3apxwpFUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfTNLFe4roT4U7EkGtPdY9XB8dCtgrPfY1bGC7udnTgDFkCzwkxH1zv9w5YPUSTYdbaeEs7RAMyKZZqpQjTMxZg",
  "key1": "3ZUE6c1DXVa6v6MfhuYji2wG3693sfkDenrj8YFULDY6UTFK19RNa2QweBZjzscW2258MtDnapUsPGXc7d5yk8er",
  "key2": "5f4mkmfj7Drii7YQmm5rYmcDfYuEw3mLJbf1UF7n9cihZgJYFF6BGNeRkPfyBJWq9h8BsDsy4PYwq4kRjZh4zEY3",
  "key3": "2yH9EUHL2WAqtpAuPhJMeupXvb5QrcmTJJBA5QQ5cKU1tU7f93qF136Db5NXvgSa33fvTpwbiv6WbC3dggH3wgzp",
  "key4": "3F1TVCVdAyP2BtAG7uawvbjoSgMkavenfecQhY1NV24f7i9YLbsbKpwrRo1g3f4MbENsqBdctpKkVgbvpPA7ygRp",
  "key5": "7ctTfEKkqS4yhWMycE8Kx2cx91JhiXyhtbWTcfr6wjKbU7vZkMne52DeJf6Estxs6WUh4he36XZtCZ89nJNSe1J",
  "key6": "3Rw54KU4A8nrgaqe74NrCPXqzgkEKjt8M9mdMwXdTLrB2T9dF2GXgnNPWmjRug4vPyKZ1ZKcDReDpn1yJAxVNaBG",
  "key7": "4c7DTqbVBAz9MYPurmH7SMhfhnMCoB7EuzZw5F41i85Yxd4L2mxYVfL4uLeTjpzpfgzgM15ArwhfhVRV26cNtvVj",
  "key8": "5zY1498XdgSkgWXkP7UcaeoXb2ViscmwAj2wx1wow7SvZrETYMUk1rs8b15Q2BJvAUhPfhhyEnxAszGXwJqxvZM7",
  "key9": "4fRzPH7NqehW7NCu63ozotg5z2WCeqbgLQNDLJumr2FPnNhgZJR7553HYV3KrDnjfE8WTT8YUpF4oWPaJnG2iDB8",
  "key10": "5kU1xDvixsumsQxjunT9GAPQB9UycrQuFLa17UjSCSTVU6yD2MYzrA3inHkFqJNiJNqyxuu4aaJ6Z4L8aQ6aUyK3",
  "key11": "5qQitwqeAHgVfU5gHB8VJ4HqgnDWLazGSJnf3g2gixcNouXYA13qJjsCvY7qfsLuqTWexQshdyezoKYCt7inbjHm",
  "key12": "4QnBVzcWKV7WsSZcAYweQZvy9ifdwMwqTJzeX4k3mFCx1ZMg3QdqnH7C99JVtfhat6H41EyMBVAA4vSJpJB6bRvb",
  "key13": "61eRbsbSXVnXBgqvkRa9C6Eo8eE1PwmaAySY3RfdmURvPc7KVSxaDypQc37u6nyjmVutxKWBGBunabZ8tD5HyYKi",
  "key14": "66e49VRHbzoSAsm6i1VqX7mWdoJWiiNTwPWUu6YuQazb2EwHc8ZqXvM72tCPZzQMin6MxKQox7gsStyZvEcTZsvu",
  "key15": "D5zvgKfVzEv7G1wC1wg48PU65uJpWhqBpmZoFpWEKdfmXZjbnPh9XD74QFGUTTnWmYvDNvubabaZoXv4XsWpbs2",
  "key16": "27hcQGiiw2TG6WjG8tM9Lii6q85qWs3GnJkbbPgTRqteKoYS2Q3iXyKCnx9QGQsLAJjeDzjvjyCmUDVG1Z2fxj92",
  "key17": "3ttBBHyuqywUvMNWt54UabSxayFUkvaPsJ7gUoPen5r7ohuMyGLihAtp8PjzWgsiYLJdaKPqcCvQH4p3NDZxNAMU",
  "key18": "EfFJ7dnwo3bAy13Vxr76Z4w36qbMrPDkuVSw1JTN1y4Sa4iXjjzzXGbXNjtshepdtqRXHVummr7Ch1ZQRdBK9DQ",
  "key19": "6k5je3m1poDBbHwXVWfLErKS9rGDZJiSSjvgDoPV4s8tWScLx7etBsK7Exsta5113D4a5F6DafAnFBv1RimJCLM",
  "key20": "2K4oSM8C83DVeHxLt2HNL2Zxuu6fJswPLh9d95WH8TiHmQzzCtzZ9QmM6GTtYHCfR6bFzTXfjPyCwfe6qdjDbNQy",
  "key21": "3YsdzseYppZQx33dJF9PsNHNtrPi1TAihonfR8GLsxECtntU9HUcHkjLddFWJqe5egwfqnf4NW6bqZWUPanw8BV9",
  "key22": "3YuA7Gyi83e9wRVSqaDtTMu2DBNtP6e4unTXqeaEdQ8tVvhqvHoH5RPnvwr3ZbaJGdBRAe21wGLfp7xCwmhS9F7r",
  "key23": "3qh8VZ8HnF41GCq5cVaWLUDpkshsV9MQXePrFEMMMzkJNGTqBGDntRrNgrQ8AwhBkE1tT4XCLrXWnLXP87M548nd",
  "key24": "3aVsDCkyamz3u8DpBWJmaQYRtcfJcgg9Ddo4SgC5uK8pQEWe4U5PqzYajcv7ELg21n5XaceWDpVjixdfKmv8B7Cc",
  "key25": "BPPUqcPReYnHg8gyDFZY48s7N76LGwA6qML6WWUXUCwDJYXC57HWLi7N9Nu9DwkaHCrpNC3Wo7k9QvErTC5Mtpt",
  "key26": "kURYCwpexF9ttipjzAmXVXsx8AawXmscJjghiX77Cv2f3Pv2XV4tKq7hZmmqtkYnfTPPzKE47NjukZDCLrHrKuB"
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
