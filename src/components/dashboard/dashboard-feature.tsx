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
    "191CFcNUxj3yv5pVW9hE4FpYuvrFLtj1RB6DFQ3BPqemxCKoYWaVhSgxPvZ6GfESeHdMTxJtHLeJPVFzRNTCzsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62So1Xoq8pLsJWz3NDpXT2vcnfHaDgiidWqUwQQrj596Na9dEZgF5frUfGnZVCbQyjbYvEiBph1JFopphmpHhW9r",
  "key1": "2h1vSJLpXvC83rCBUE4rAnMpU1n1CB3QXoh63vW3npPBnK5CkNWVU1x18AUMJpXXZhKHNBmfMAmkYHum5PqGZdtD",
  "key2": "55p3SEhRcNPhoMQrnyBs1D1v8t1vyCEPFdHmoRYAJGxzejMKxyeaiZ6s9cGP6o2g7YBgrN9udywqgBWzNfK5A4Qv",
  "key3": "4XdDDH11e433SkzQowyGrkWujKTuvSn6coZ5SPLLUmrH2ERZipZXsRsfTYa5LE61Efp7bd2i297feGARh9QFPb1H",
  "key4": "WhzHxuUUbBG3RjvxtHgMTQ5pKyjnBVHyywcC4E3Erq44CKt9ZXXGsw3k8nyDpLwzUv7Eti1pzZb5kmzJ4KZVj1D",
  "key5": "62wsALZyAxJ7t7XeYm6nQ4XpuPUYtKzY3FxvStNkj3G31JZgowLjaCj8BRWjvAasMH9jCcZvGqb1Ku9S4ZavpgMT",
  "key6": "2MvznkdoUiacR7L4HLujrXqAuLQ3xMTCZ4FzoBu3vqj1yuZQSjb4jkfuxZYLPLpvk1vWAydAZStYGFJe7H79nbXP",
  "key7": "GiBfFVKsTyspwvxpdenLpm3i3knRstgrU2ApvZCWSfXR8JLmNEWXTycib3eYbwr77eWzrYwHywuRUZMkNmL3ctC",
  "key8": "4Wf7DYCaaBBuG2ZmrZovin1skgm6TTJFgwjBKssVpZNiyuXrTkkounCNw1f7BiJLpLnF1MrTXjriXwq4DifyhWsk",
  "key9": "37aLAEjxatbUpPLRqo3ZCgsJrwFvFrxo4yyo4kMYp2YevcGXmqBU2MnEP2hJ4LKknSDXn5i9VjCKDa2VKjMrepWL",
  "key10": "5eRbPLe89SmbuP2XKuxQ9kHbiapNeqHMJqdT7edLMRA1oy61F4QjpT6NxknoedAysi4rpiuBT7C4oEvcH3pFYtGA",
  "key11": "iiM1z7LV1HEFYQWMuXaWLfvY9Lt5wE5wrB1smKPJyRJanx8cDtQ8y3et4qnH6wnFwSJUgzWxnQxPvy2KrXh3ENm",
  "key12": "2xaGZ7iJnmHVee85ALEvR5d3baH2XFaHNUfbLxio4zMcXcErQouT83r7yzZMZ4SbzJ4B7jwVc5Q67QKyf29oqCe6",
  "key13": "4JScVxrjTYMunC2vA9RmWzkQeohR7g5nWb9pyU7amTDJn3BFTDycbBXBdFG4NBKXvH6s4G7Nvr2ccLgm9wxw9gPd",
  "key14": "5usYmwg3VrHKY8YUF8cgRSy1Jh1XmbEMQD8MB9jAexyKDTyzjyc84CuM5yHADQNhAiSQKB2xhobUTzFDcbCJ9p4K",
  "key15": "5MkQwEBMFEn9VKBAPqUztPqwhvLiSu624uWzfXNSSJ2MUhR1zPAEFK4cufQp86SiTqVHFuxFUpnsh4SA2evMrRvG",
  "key16": "4NCp9qZaJ4axD2KAqCWfWNraK34tQPaJuNgg1qDNdNoVAWTE1zGQf33gVeNA2Nuw2SyWoMkQ35ZHGk5hd2zc85qH",
  "key17": "4ZPGNzvEH3cDTWuifohxUSYiTxzCu3ajf2ZZ6ME18TEZNWzYmqpkYqgY9RaMpuPRMMRNEREyGT4EyMD4UH22YePS",
  "key18": "3SfXYV1yD47antNuBxFRf9zUwGpMQbWY4rAoG7D47z91PLzygxgX7yL6CqW7prxTB1w8rhuHcmpcFEhGSqiYxp6J",
  "key19": "2CixY1v65g6zwo1FaMpCamaiSXQeyVEQ4DRrLiqvNYUYRzQsL5TScn7P3bzv2GU22qyJ2WfNwW23DD6pG2JsNQeu",
  "key20": "3sbPh1cCXU6kLs1FTXrjonFdkm2yC8ABpNxqxkH29enWvpJxQKV85ZAQYgs4V3ztk2SM6AchY6FpChwdyhr2HcQC",
  "key21": "5E6nFCL2CJx7p1YrL8UUFoQtCqtyXTGnjU8goRSHYuv7Z1WPnoaVyB4EuXLcYTrMDi19TJtw8cRhGKVDoZ12GF36",
  "key22": "3iPk78h81YQdHZAibt1nKNQEJSXMnM8zdwZRjm81uqcJoF565BBEmh2AnPy2K6mkmHN7RVgdoRoYVKuY7C5eYqFB",
  "key23": "24rMkX7yy2iTPQ19UuGutHXJ44T9YKURsKxboHqvp9iUV2MbFWUPTrPoJKJbyDVmjG7oNLSrHBE7ZjEtgyxDTiZu",
  "key24": "3N1DTxqVuNb9fURMQRiyqxFVV5fdkfby1BMQnQ5zSLG2ncNcqMAZZkcAGLBMfMMfk26CtYSv2miHGjfoZQsFcqry",
  "key25": "BpQ7tbUYizE3osxg21JHVCwGGD6QeZ77ajPBw3hsEtNFqkksYct1An1eWZj4zdWKKWjytZnVAJTqrwW84TJ2DBH",
  "key26": "cRDhyXEGjPNjNBBLC56jNxStzbdQZqSShapf5ihdxbsLoMEpdAsenAgVfe4fuE99wcgareL29vA2xDE14LbGzwd",
  "key27": "3oDjaeQxifh5XgrKLba1WHij5WL56aJhDtQTHC4LoqtttqFcJWJbj8TuRAgnGGqjeTPwmTU1NT84ppEtXR31aEgD",
  "key28": "4AZEEsNwdgKg4yTcQPxncVMavUnGkBwC21TTm1SpQzStrehD7MkD6gJ6m1VupnQMd25YCwL2zkGqfeyj7wGrosWf"
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
