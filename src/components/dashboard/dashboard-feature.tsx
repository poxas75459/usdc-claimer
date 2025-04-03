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
    "4BTs71UGNKxah1HGjTgtABctpt8yKcpvVy8HxqSvJJtwHgV1SPty3a57GhL8aqgjfcZrhsFFLMbH3hFFppempjzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdgLbMWgVP3RGf5rKayFHuH5Gz5bWjVH9gXov67wkzLrkNHXzenQvfVhLrx5K2Ef8SYDm5QyCZ4zRcyEFxhr6WX",
  "key1": "5nLNtQPTbA4bAP8gEncnzDBtp749UcmHSEJTRBE2BgqQFoVEgZjawqSiJAP8ghMhWYLEuYyoZgjnSYgFptrmpn3g",
  "key2": "4UFnGmcwU5x3GKXh2FPg59MuhXPLuoU81tX4pskTm7MzCaMZKJrAYC4Du9zqa6FejgJfXkVfZbUebCcqL2YkYvEd",
  "key3": "5sp7RDuRrkjZqYopDdeXUfUC2h9QYX5v7LgjzZBrcUpDhRkLmRBXy46nimJd8zQH5i7CN7eajuKKcaWkzn5fCjXK",
  "key4": "2Uym9Cheji6gxut91uDqQ3ke8NytLA4NSkC62JAR187CRVQbNWb72LeRLHUjx3H9aH5mXwH3vrj5LVcLwf3k1qav",
  "key5": "V4DNPB5imTgSeEC3mmaPJ7VE54RnjS3hvE1bhu3Q81bXJTXwGst4QuMKkUoXKeRPQnnCmps1bnC2dP4vNgxGYvR",
  "key6": "4f4Mv2MYjJoiAGGHrZzGZCACYxHcBJCgGMKxXHDpPNeJuQmnFqNERhpuJh95L58qhbKANA5fEUPNjwuWjSJwYLLC",
  "key7": "4YWSxLSGBcgDynQxZ4UpxqQs1BdfwPUkSFaeWaBSxNwAStfjfhimh9u1fwCf1RbsEnqsfUkSBasYdZKh2Xwy8v7X",
  "key8": "5zzzurTLudjJquKJpsCVCxnd1tf6j3n7MHynea17An78hvV6D6pw5rz7jZ3jhEnTCkRsVdgThZLCovqXSctzL3NM",
  "key9": "21JdukdB3kLRe5V8hSdCpNYZBBdFFfQbUppoBCap2Da734GRfFa4tnZZbwbLVUjcnpwMW7J7xYfcP4nJ5wNCgUtu",
  "key10": "3ok5voc6FbhzQnv95gCKHJPAzJkwFoYobv4AJrm4yq98ZTwrSTMZs4qtYML1RbYo6Rz3ALHyxBEZ56GEb8vcBFeT",
  "key11": "4W8sHx7RbRAfSzCutBdfDyykafr18rd14pd4pGRwTQdwrhkac3XwP265gbnxeTWKPNyGffXHwmgTwB4MpczduhZV",
  "key12": "21kZLi4f1c85AR6dfahXx57fS4ugk6dmPDjFyyPDj46oDCgx9hDrEcYNA5MfFhGdp7NMffG9hHnudGngefhy2jsA",
  "key13": "52aNG2FR6D9Emq5nVqTM1GEkzEba5ZGRMgcuwocLZXzexnJ8MgyzoFrHX6XshTr3boWN3NJAePw4pBRW4vxHjbXe",
  "key14": "2wXvXjsQcpwrvSkB5d8YtoS3XvtZiZrrC6ufXBWER43MLttr6uivGkzDgb8FhJkbe76EBBRYJfb89SMCB9YnGuCH",
  "key15": "5wCWSgEZYKEu5tMmJdXtcawQ6D1Tv9bwCeyv1zCXMd4Mi2pYHrs1jk9UxK5eNcVJqd6tv6GZUBZHfmjQL6MRwvq4",
  "key16": "26Xqnpz1dVopvKd5buzWor73CrGDyQHKJSuHmnXbMTWHE5y4QD2QDRSg6gHq8zJvHbLdSMXTs39YtkCaJi6yf9j2",
  "key17": "4MpCCCcu5pffpuQE1FmUU2Tbsv3Pay3k7F8w2c3DUbdoKHD8x4yUiUU2gsQkZpn21eP69PS4eZbhxyCiPMWU4yTq",
  "key18": "4U2h8RWCrL7wUDdWxbKdUqt6ZT9owabrsPZpKe13apzRmaYoajg8A8T98gDQ3pKH9B91KR5QLZGRFcRWFNwhJWTk",
  "key19": "5FrxN9ugmW4aWiX9UJ7K6R84KGngeebBGG25MBrhhdzh5q7a2LpwvnnRuxmTLPpatVQXAqeVssChRyGThRUC3zvY",
  "key20": "3q5YbQgZkeVaWnr34VGNF3bRfSQr5UYEKXyQxVax3RsjHKtWYJnPDCrj2uFxxtREDPb8G38E2sxy6rVdvzGpRvso",
  "key21": "5rG785QYLTNMxS4SLUgE4EJRda9R8CM8aot7vJPrEwCB22HpswDGRZXDLBcmaHCCGc5aRG9Dtr77Kd38NXhwPCP",
  "key22": "5K5jA6dJ3iuZVQprDiiK8ggQi9CTpmpEzc2CNW7QfASHPGUs1ANDHqkgi9JckXukSGoU9SD6ArvWYYxP8hNMzJMf",
  "key23": "BXwHXpGoM2xYGKMxK2SHZ48cAbiNCdAQHfY7NaRtaRS7VEAAVLMysRvRrzYv7K9KJa5s8xq2uRG41vMfL8oRTup",
  "key24": "2aVsiQLgDYuBqmYQ27JVXqYCoFtqHWjA93hkWhvZaYUgxKVtnj9yx4zRi3ULWfm6wauz1JAqfyc7LR6JjTGFD2qz",
  "key25": "18qEDFwpxKyberNDiU1p83MGf7zNYk5qgYd5kRx5wVQRipeN6CvxASBMh3acctiJq2HTan4PuqwFFJ3odhTnJWd"
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
