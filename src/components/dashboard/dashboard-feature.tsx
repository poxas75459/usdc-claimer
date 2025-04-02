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
    "jvUY7LqtuDETmPm4c6yVmdWsX4qRjk2xx8NKmEFAS3qJZwewZz9dx6NMkxRdVk61D8hQViraa5JUHTtDsvHiR3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcDukueUx3Qhg2zw1rUL6FWdz3cYrF6KQMvUnS2bQafoPTQCTPpfTxpp1WG4NpmnDAC82HedAPiC1xBhkB56Ep1",
  "key1": "4sZYngRS45N3Tmc5JuJJEsmQj65uyxfAgHWeiUcbXGtt7FpR7XTnzfSJcAbdKecnPxpTAQAfooWehi5vcRWdu9Tj",
  "key2": "3Ztc2crA31XZKKmVsGCx8n97ddR4QhxX3oUQxvrQ9E2nWqhdfQLLyndwphBSTADyoqBhEdB1gQxwHUjUDP2gXGKN",
  "key3": "226SYmw16vVWNS8JkQjR8nzbK97wrTZdwKKjBdo9VMuH6L8GhYAzg5Fz1rokk4uqDJZ2wxKbHDAKf9ARoXzDHChG",
  "key4": "DJYZSUHVvuqq3s5jVBLYeiTmMnvz2HRWuDCXddcdKZZ8AAdnfFGNyLPAhgmxaGiukY7QriCDJrTp69Z9fmmXNBB",
  "key5": "4TfxGxDemR3sdYgcYhpsdWyDotss9r8iE9gojiAydruCXvwG3xzmfY7Frb53xmAcA72gzRbkoWX9fer96u1mnm9x",
  "key6": "5xTj1HVzQ8DwxuRRzSafG2B2Gxzdgjr8eouA33Z9nde4eTPUBuWXCZWphxaDhPbWMaHW6KRqNQcYo4HZxM7tkZaJ",
  "key7": "2f47ZHAMMCte7ft6xn3pn5JXaMsh3VU2atyosE5SAG3RebyrCeKPqFBRVPFy5GLAQLopaVE7mZdPUMvEXPunRpQK",
  "key8": "5ySZj1eiUn3g8XB7am1KSbzUxi9YdETjDBJijKp1a84BDbqNrwSiKyur5EVjW9hSQKpGYHufRM3czM9bnHYmJGkb",
  "key9": "5xkgUN179EaHEjwWfDk9x6k1p9LaMXQGJ5eRV8iwSVNLoQQk6xAbBePoatWp9gwCGmn8CVVH5dZXWdGcjNpJdvmg",
  "key10": "5A1bGnD6c25wH6riSWjHYwgDDZrJPBj3w1sMtK8Ye9Hu27LDpDJ999we7p8YPG4Qvn4i1mEqsjBUu7GqVLmMKdXK",
  "key11": "5iMHbsnpJGozdwT1s29hHnHEyMicpWrPJf94XK9N6ayYhHPWKmXNVDaDyc1ZJDkMbcnbmaT5YxLA61dHERZ4u2FX",
  "key12": "5i3ZwmxPUDpqcuWGX4zTeAjqFrMKFapgU9A4HsNkaPsC5BUP9tyCpFg22nZQ2bcy5jYoVTj19GkGfcWLTsLgiAPm",
  "key13": "5EEhCV4BBCw8iiLvo1YbuLkBxceZYW39D2avioEhVY817SaaKSKbAbmqrzsgvYitRTFXDsZ65A3aRAFqnDAk6cPB",
  "key14": "4BeWPFZjk226mTnr4RPupcgv4tkztCLWeKnRNNJ8eao3XExJYxPE5Cg3Dcoq2wjk5WWiQ52Jc8SQ9SkVRz13zuzd",
  "key15": "3MTst2gJML5gmrLAGZVRPYAq1bJ4xAN1t5PvHesnYBpJ6vNsxVg2nu5zkdrW8tD7GjfWqu4Cf7so6FahciiNtnHa",
  "key16": "2veb5HeKkgxGHok7yvBSR2Xc9ThCMgxnb2zzDAVNcX5gJK3B5DfetmTwurzGfcgdFx176EvCis4ssWQS4Bvsvb2u",
  "key17": "2yhzEekA4U9wdTkXNcM2PqGBxRHLGvdqeq1bDTRTfbLix24FXNjzwZT4rAtte4DQyaddz8zzJjk1FNnUNqZ14A7z",
  "key18": "2RFxHuLb38i686gwNfMY4tEyLzRCMd7w1BmTCV1aYAyXh291w5KJzcoWvRVHfvuFYVNkJzmcayR7EzDC8KMNo3ew",
  "key19": "JipRLBJpuX9X31stD1Rhbhd8tXfaLHZsccWZqo4Y8G7YqDSBrK7EMkpnu9CXu2dgUkmL4v5KuDbNK42sPNmnGz5",
  "key20": "51gQWfe6ZWh8BzuzwQ7R3AHV5337WAggx99yCpMTJxGzqtY5d4prcK4miP4yNijmYR14nzBXNwGEZy2UBVnDvpmw",
  "key21": "P9VWdrRD2PHMvG4KYmcztHC1c5nhcpAdUnUqzVuTwYkxBKC28QPqkmT8dcyhNkcYPMbxa6GGZrgguYTW6zQgiae",
  "key22": "2oQEyt2KLXi4t3yUMng3v7jhhJMfTisdfVqHRorRzR9Roykie8UPTiFirDhC2dnecHAAHEJEpsQB2HJEEQE6NgK9",
  "key23": "4bmSQyg4pKEiSxmbG2GGrwRWkFMjh9DXtRGxPuV3v8gBcGaHNuR9TU6WFPST4PjSbbmNYDC8SytTQrQgowgNU9rF",
  "key24": "3AnMKHS61rTva5Spo38S2wzbdWNTbGrjHrCQUA45tWrVCYy4pLzqLFWYvgVejVPTnWqBrWzi98bvpfqpZJ1qRoX8",
  "key25": "5FLJQeVeBCyYwpJrnXppGzYK9Z5NyntNF7pxKzZempJQt8WAQZc6ikPQkTYLHTG3cs6ekcBstvK7ReRtc2fvXrd4",
  "key26": "5c2sFW8VcCHnQ3kNcMw6PQ3HaKVn1gf3CSG54Hvs5AgaTcbvi6YHByRwTvff8CL2E8mrEgd8Rd56aCP8g97wZqPs",
  "key27": "URAZgkddGpjHYaQk9jkr7atJBfk6xj1Rf1x6rZrRkx3H4JuECpZ5FF4TRJNyubneMKcA4hYVNj85KXcwPgScKZp",
  "key28": "5i5dNKHZb1GQmMVdX9btd7TPfwTEJUQWedJSAjX5T7dUtBc8QZHiMLCuoPEYSiBcM3A1exaFcEdfKr4AWdNuxgBo"
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
