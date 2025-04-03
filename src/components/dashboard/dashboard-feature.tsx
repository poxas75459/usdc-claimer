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
    "P1nozhPPN7AJ1uPuxJJZekeo2DnMovRasvCk1kiAaHwehaYpZ6U6Br5JpDH6dPXh1L4CMR35vbdLg3DJNoy91HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HAKXgqsFf8efhy4h4NBiHQunFpCsN3oakSoo6JpJso8CddhPBqBdKmDJ8AJ9TReNMqifCzyJ8EpCZA6NiS5eWM",
  "key1": "299Ffy4iWPS5bhPTVLNFU4vjtWbfwzSCgAcbAQjdWM3UM6mmquXVbkvN24d1NeC6PYJLs9aYT3VyMW5MAyFxzWYg",
  "key2": "3z74NZxxYycUby6hK4iYHBQJVJdfg2gKNKkMiqmLGT9ywnZGjuek1SxsuzmpLeCwuPexZoo3QSJNDEbFCfJUwyh2",
  "key3": "67ULeRS9ZS3t15dXcBiz5JjwdGhu5HumFaht7zpXn3o4mgHwkLN2CF5dAFbbifWjbeDYukuEuszzPM9bDScg5hST",
  "key4": "5Y2wa3EdHaM9YftcqFQf8M3idEWa8skSEacPbPGxjmdc9riVMJLx4WuJ87E23CBeyApvSLiCMXrn4fSJGYFhVDJn",
  "key5": "4keDtanmBEEfNZdFkWg7mR7RfvAvAYCvwvpi4E9WDtJx9oM4Fy1zX5vv6cPNAoGYz4LkRwezNex5xhiGKnydC2b5",
  "key6": "3Z7eQU2xRVBd6Qhu3H7DjXF6fXsjBqKXKFzo8PBxuamhfK7JQNhxhhFhEeHUFoBXwJeb4qNDib5xg4K6rZwMDR4G",
  "key7": "4nMPFG16jrUL9iPeM8QMZAQbK9QtYra7vTJsTZp8eUvmYgFZZ3BWNhuGJtuKtuYYuFqEBpcdJYvLbMqZucqpDGTv",
  "key8": "5W3YGsYYdkXrAHE71YkPJqzmPzdrvovM3FDjGKtytURbWiZSZKN3cXYK4sASXsHjsjnGJ1LyXpoutgN9Lh61Z43T",
  "key9": "2EpWDcMgwo1PzXrpeV8fCbJsi2AizMzfUYTYRZ5XXN9QqzKUMSKoxEV8Vjdj7aDKyQouWJgq8iFZ1GzCe5eaSvLR",
  "key10": "5XR6JhNmCeoWtB5ARrAXyjFtRaZy7117xkfymY1BVaKFqq1mnGYQu1h16gKoBfye1YYAY5Pvm5kUa67bUYRnX49n",
  "key11": "3dswkBoSzw14VPn5VcMau3QGJMxtQ3iuNHtRLTzNWGWWxVAJisxMSPbuQSnDh1p51dXYYnmS1HwTBiEbYPTw24PS",
  "key12": "2hXRxFkSwYjAnKDWWM6Fko1ZioyZenDte2mQwtS9usKH4XHGzFSq3fqn7kdfLm8LmaCAX8Y1HSp4TMhJWwxvEwN2",
  "key13": "1hFyGmPvP2ZTmZMHH25nWcwU1ZwiDHZypXwrHjadfBZNhkv7BSRaJWafJQtZ4Mt2vMeH8kWGcHf3k2pfUqh2HEP",
  "key14": "29kd87aRaXwN3hY9DWCr6dNR4h2w6tVQxHC63VY9v9pSVJwwaffUwyXNCya817qqv66ba6hePF86QK8ZSX49dL7a",
  "key15": "51v9EfXw28NnzMrqLKdcBFFTuf1ZBLhmZUnN2yXQ7o2RzbZzt9hLdEFGt1xVL6BmcaXrrVW1usrv7YPQWQA5zHTp",
  "key16": "4KhzoLGFw33sospqYP6tCDZ6TvNTFSo8xx6rht8mFPMbH74ueQrLQRgCvF8u5zCTG242q7q6bFGvoHKQtEMSZu2U",
  "key17": "3YZ1jaR88nciawf7Qvs8opYp2XKi4YFskp2can48evQmVSrxge1DGTYLMo11rbr739suRAB7fAbDJQz3MytAS243",
  "key18": "pDbdEKuvkad7QjmGgHs6TMJY32YJURVHjGbbxAy6VVDwdUGcQih5E31FBFpum26wTHKksaYuSjP7zEGScPENVG2",
  "key19": "63mb4btbH6gBxeFnXk6sH9DwF22h6c4tzgPfiqPYFAL6Zcc8fxXH6G9fbqX7KjjsNcrDBjNSBuDgcU5cEfxo5b4Z",
  "key20": "3wopbLF1ad23EbHdDkiB7FSrvhM1Hhjvi4jzihuuYS1Jge1dbCDnqhGu3Cmqk8Gr26G9TWkZ3gx6btDtbmEnAN7g",
  "key21": "2HmZY99oXtTjJ3nqYU9DULBx89gzdC1Jfd1ZtvY19jc9hiKW9hyrVFMrEtD62pXtAa1nK6mHfgZg9D9E9X4SV7M8",
  "key22": "5eVmgwGK22bKbjzVawMRrAxd5FgMtUTfMtpwo2zEZbdEnQborncmUzip4WWWFMcJwzFX8YCbgpD7zmMrQYpPBd4M",
  "key23": "2gDab5waqtKpEHgu8XEgo2vMpgeA3FBnQGtB62VdkRfkEhNrEpwWR13zmAPFqM2DFrJCLbLKwth8UjicPq4qee7e",
  "key24": "FcDEAWiaKtxuoEVij8ki8XsRkQ8ifEdTo6SC8txmwwfm7SU1vFkdiJKjw8Eh1qAypW3dg17FA7tdr23nFqaV1dw",
  "key25": "9gdCz478jcXEvAnhhZh3zcKwD8Vj96zhV4X65KiZSokdaL8oF5noT1KaZmviiJ6CkdSuMwzvtvU8mSYfB6RuaN9",
  "key26": "FYHgDvXYfWanMVPDAqdvTWHgPqZPciJuefN1SprsDZxCgUaZn7E1Bbv9LZ1JHNazx5FNnuZ98yrsx268foe6Fcu"
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
