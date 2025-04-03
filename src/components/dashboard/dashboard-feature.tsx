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
    "2tcFRN1jWQCVCjjgeH4bSeoHwdC8xPbQdNVr5EdSUCicsCgG444xKjDdePY6TSNaKQNGdazXMRTwQ4xXNd54oA6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRdHWg4PAALBsvMGuZZAsPX31sVCCqxKPKYnbdJp18ngRvfPhWQhMP2fCo7Lq2RYoW8ksvA9Re56Um4Zd2GtPn8",
  "key1": "SEXexqj1pnNcJrRTS9JrosNgPY8oopggcuHT2mtot12u1LAyRJRp5uuwgjHViafgxvLRoLiGNgprnfFUYmuoL8s",
  "key2": "5asgDsUXZAKH2nP5H1AWd3dKPXscx3j7xZZYQWJ44sKzBhkofoQrEb4nnPyPjiSzS2ESUuJWzEcDcAuQgJXvssoK",
  "key3": "2c5TyPaSXF7wDGPQoj2zLDoGExBuPTwZusAmZ1sws163t6R5N1SbtUPXkbW9xiP8h3dFqfe6TK3nPbYqtZNthx2D",
  "key4": "4c23ekYFLzPW5h1Ffmh7X7VA7kjdvQvEcaKrLiDPLrwV8MKdDzC5fRA7oLGmjiYHG96R2VvvVYB9A3SPyBvB3kpu",
  "key5": "5dW12nTc7rjkkwuYUHJd4nCXH18RsyGuteu6q5NXoRykfLALLM3csdX2SKQWsvknu61D4Y4h3cxenAEqTa6j2uC4",
  "key6": "5ee9Q8gCWXrTS5yJfgv2JfApC5M9BEbGf4vVFvCMvUwRVRMmm3yweZ5KXMSMVpLUEgj6rhaJepSVE1DjrjtowjHM",
  "key7": "2Ke7BWHVCQ1o34X4jG9M14N2kCpbafhp71yqADGfE6ZCDTzpqyxsWQBNG5Rp2pvTGLfirHjedZ2sojwDTDAPMw85",
  "key8": "5ti7iacBu5FfQfy6S36W7VEHKpfLi23jfrbi9WMQcxMjSLx3RRQjrcb76MF15MLu5ReXtYJSk1heDJV8FWVau6Tw",
  "key9": "2fa8DcU5kgxK6kLyyFAjnhyCQBxVqYdaphQ6dLSyNPK4sEsxoiNaJorGekCPaQWgGdPmVxhjwJgVqynRoxvU5LbX",
  "key10": "33pzmeCdNKVur9zyUQPPRmASySNo8VoKoc3AFoKTrZEVz1mhKrGqc4fDvSJtp2bUtdjwsdGy15BDFYZJoQEHhtyA",
  "key11": "zYAvKCQNFa1xVz5vsePny4VfpJW7haWuhAxSjWkzQit5ySggHvLTvEnmSHoBhoPrJUviyTzN5LkHAnrrXAYjKpq",
  "key12": "5eCQYudXVPKjW8pUPHw5fcVRxuUcJjQcA1hnSZxHXmha58kXMF3ix9o3ot8DqxpG7kLdy5QSN97FC2nA2naboqzz",
  "key13": "PqBZMzRum4WLobnTWmmLQusaZpioLpJBaaoP3GC8TRtJqdgdKpw5KD9XVMUZp36TrM5U8uuR41M3LZFjEJuF5uX",
  "key14": "4kWVBeWRve5CSN4SoxSHzcmZLMtNvp5KQr9u3utQHKGDQSLChqwwv9ZgSKBo3kujiBm3MS9Lyw5uW9KBVTeneptb",
  "key15": "5hgRKJ4DqPqH3UcA37j2wqT591JNuhNewNs87ACRcAq8f1FRmJ2JYEnR8yhfEiHdnNBtkGQ3nk2hMF34nKbSkZE7",
  "key16": "55aGdKzLn5HT68qByezZ4h8BgegcX2Kii73cqCVfoL5AZFg1B4PYBPvJgbPzELAizcnXUczBoMLSP87p96KbGcwB",
  "key17": "Cc5b6HfXwGtxVf9gT1xHR9vkfphyJm3cpCqEMCmYjg89dvjGYrEGPzLuUjRuvcVpLrJ6rZcfcBruUdtRF3TMoRJ",
  "key18": "5KRUDMQiBRWjhBZEn6xLQPrALX3Rcjue84Ut3ChhLsCUJVjLyXr2TS2SZQhoRRo9iCWs2FhcRPbBpeRTZNkFEswa",
  "key19": "5aLuPf3HJsoCBF6CyofbGAppbkfP4XxcdsP48YSX9PrtESVwYtA8ctjwCJ7rh6puKZerpg6gkfEYFXcnQ3YmBFze",
  "key20": "66VC8P2cJ3CBvtD6KZ3qdrwWU4VEjXJ6fVsCcuR7mFSgjx5TW8hnegSe8w8h4CW3hzgZ8Y5TXMnTuckyNa49jWJM",
  "key21": "3qUGp66UkUwPEYYK22vsk3SCffV3WFbLG9Taxhj7r5EuXzK9jBBni92s93tfAyCWuS8peyyhnN7Wx7FUEzkoKruD",
  "key22": "5fQ1EvKotatgYWMswdfrZWoJj1b1KZiTxTrJTMAxs2gj9JBUUQ68M8LaLiP1hTBKdEP7M89h6duvE6HvQxGPmbf9",
  "key23": "bqEsPcuzwz727dsJsAa24KUR4QAyyq9nxEHM8cCDs9LMAHzwDu4C4MN18Y5J1McFk6og8tmHDAqqZv98Xk4d3Zo",
  "key24": "42NFvEuTGMmJPdACEwfFjj8b9kKDyhBdCd7BszdqRqF22H9rNMpKU8ZxBk5S2L3EPb2keiw3BWtw3VrgzMvi63ra",
  "key25": "4HpUsmaya8z5bnNNF6eqGWVPbZxTbmGbwSXjajkczVRLck9gx8bvxfNKsQz71Vw91sNm6E44vaqrPaqKM1t6wiRN",
  "key26": "EPGSvXma53yAqc5wLzJtHq5QvAqZ3j6jMMUz4vTG8if7We4rcmUKbX7NK1P2d2ymQ3f7qgyp62Kv7AnjpmVY87N",
  "key27": "64veDT6y5WSSXr3ykiA6dKHBWTXrdaT7LpKYckoDuQysHKbFeMT7MSYXEXtRAGoJuRCp7DDA9VeEFoGmkuHFrfXG",
  "key28": "66KVQU3rGPM44nutHzPhSEQpZZzFTdz6c7PmDSaAQR2gJ5ofYn8fFumdfurNro3zJthLgn44mizCGrgyW7VPy51p"
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
