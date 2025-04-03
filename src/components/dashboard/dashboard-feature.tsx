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
    "2S5SMjazgw78vJT1AiWK6nhuNHyE9Abqpx7DW9E293FykKYwsqiJfKsGggN3MQqEerETqs5mdgjDVNgxTfGPJrFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLUV8kwXppjkTjN4Ae9Cc6BBKqkiPQffTa2W1DsvAXrp3WvGmPn7t4rVvnN6Yoi7vVy2cfQAmeDwwmR7bMyx2eN",
  "key1": "WgrBYSQoVcvUbvrk55XCyNRkuznugcWLsR1mWxgkqeTgozvsQVxYkkyi1bQPaqBWvHEXrggU9URSK9q95sRM6kr",
  "key2": "2hnK2jb9oVKKaVfAV9aiU9e6zM2Pzmr2feMDZU6auW3MvV6h27XX3EEFb2WS8nXkHY5aAJyvCxJbhSzihSxarDQh",
  "key3": "2oWWma7dQVQ3HFUzAsb9mseGZAUdk4qkQBfZZBhMEdD3PB428NMaEgHgUaNJ4XMvRTXrSc7LTtxj4reSkb3u8jQg",
  "key4": "5ASCgJNPCq79vAmLS6Cx2AMYTHSYZWKgiAmTNZq4gECB1WTivHMD4qzVKirwiHUCPprZdoP4GeQzwsfYV4Q8cfsh",
  "key5": "2WWZK96RHMQiYecjuZHkjgQUkAoMMjsGZYMVL6d8kDUfYGcfsNqPhjiVuT5QJbj7UjkLjG39CCwYEwVGwFdDV7UT",
  "key6": "AXa2va21VL4XgZh3eZrQ7g19yNBTj8BUcba1cEwNXb3TpPf3C3kQUo2hT2EoLHCmstvxFnTdyHHpdBAM2Y1ASXx",
  "key7": "3XooNJxb4KP4yWYKhqgybUKDQbD9gwRS4qv5QM7zu9BV5SDrsHr7SmLCmgVoKctimFwnwifSv6MVq3e6xRWVr2VA",
  "key8": "iaVWeuFZL455Pes9pUJ6eozL3XQm6kB2smAdFZzWaxRCN7wpr9CFAyEaNhxDUJim5EaWbfkLDqyrqvrpmzVEH2P",
  "key9": "4NK8XzdWExuonQBDTbMB7f7SzZJBeS1K1o7XkbADx9nZfcKn2SF9QqibKjYvJXYdM4iVnWEUuAXuVyhXBbycETBz",
  "key10": "5Gw9kydLpsv6DfsKtbfQXXtH6k7ipbnqAsoK6ovSo7WY5KAZ4A4bhxqHdNm9XZpS3ti2HaAZQZJWYid2HjEm8U2y",
  "key11": "MA2NV66paem35rJFwdbt6ohoJ4BZUvuK5X3yp4P48c8aQZumDfb3PeHp3n1jzQjmnSzaS7bWUPgmHiUFmQtep3k",
  "key12": "2JZZCt1hLsuQGxYJenvydsLhfBL75mEewBzJqgffQR6W3kTD1yFaiVdUPYvheEFkyX9mQCErg6NchxQKUDGmD4Wi",
  "key13": "X8rG1LPhaNVYX6BKEmwbsrHew8Fv5nWSCZN7npmWp4fA9YUx6WT31S2tqexqFqr7YjHFPCaENRgSLCwbTe6SjLK",
  "key14": "4cbJqu9CGViNxFp8gxJ3b3NMFVzun6YaVuCdaFztGfE22YSf6ZYz7o1bUF6vxQDTVsrr9smPz1JFoqoJiDTH1trR",
  "key15": "2QQ5kKNqKr8e6wksMrGvwkJJ9ryoJ9ycR9KVdL7uSmaZbopyZDX2ss9FUJwdfXiUP6TPC8XJYBGpR4W6ndiXSb6p",
  "key16": "YEPo87pM13eSEQzAFa88mkVLdzHp8rfHTxfZq8CHtMVUSYiuqjRJ6NEQsF1xijR5xvXJokMRHJ2aAwRhX6Ththd",
  "key17": "4vdgWdrQfmvZYwQuKNab5EbJbYzTvNRtxZN1PF6QLzbHq1x41dtZKHBD7h2LbChVo7URnXas8qoFfuh1kztGNZ83",
  "key18": "26UQoVbdjrGrsTPP1FumJ9iYd4eZUHMsgXPq8ActNKojv1XXW3tU4Ej3AFfaWS7Eufx2Ggg1QcG8dXE9EikEXzXW",
  "key19": "21LPxdFTxnYgqdbyH8XSMyuJM43ZuP6yhhE2Ep6L8AecsxU3siV8aP7Ha967jc7kwnQtLazm9bdrt8mJVWXFM3yQ",
  "key20": "XgCsg4yjFRAUG6hnySn2BAQLjBN5a42o6xedK5oX7U92h4Qvo2gYDKF4Zhz9yMBNSTbgJwpv8yAWo9u1bQNGZau",
  "key21": "2EbR8Qv58vy8pNvgtJQVWgAyNfqp7cyA9igrpBUN1W2F7iwBPw6byYpK6MuwZMJEqbgNmfbJ8VmqRPbqL77cdPNz",
  "key22": "2N2UL4M82g276X3Xq6KpxRR7dhADTbdbD8jK23akxAzjwnzZCUCH8p2DtLKqnFsxRQGZFYtg53h14sP3VmYJa3FP",
  "key23": "3tXKksEiz6NDX4QLneMwGzUu9WGGnDU7WtygFJfAp8FLN4HKyRzWwprWMVzRjfU3g6dPatPptKmMm4QFXkxpWS7o",
  "key24": "5sqzkkoWjpST4ipursqhhHLqHNYffekseBxuVQzWHy6XBWMvgxiWXXr1tyvixQ9Q8Y1K7YwyhRker41vRDv5K3k8",
  "key25": "5cF1aYZFjJF4Q8JC3BY4jR57FoWjVckCMLr7SXoXh449efY97LAhRm95RwFYafNsf46rYQr2SVAcr15j2yHG2ya5",
  "key26": "2Wq6eY7TscLvxkEmNT4nwEjQKYiEGqQkvno85tgmT7h8CE9DvpWF5SD7f9YqFAZnN2Ujntz7C4aJkXt7dgJzMzAM",
  "key27": "5Uw5aQ6KmxNT5LnpnHp9MLHaGqnpbHsyNHBueWNe8eNnT8fY1JLmAzgEomGvsKWDXDkP3VaCwcXKDxzQqb98Dkin",
  "key28": "3rbqWnmyQ1BaZrLeVV1QwricfcHkpRYN535wwHsEP9MVH4ZN7cFw8na1PVycKw5L6GKVpgUX5FVHhDwuZqU9DFm4",
  "key29": "s7rjd3eUAm43Qgbx5rT5DrYowed8oN5mMpPuXCuVveTWVuvdGhqEKaoHwqURDbg8jT8kYGpoopkkAhYpMvAR6ih",
  "key30": "221jrtuHkNzwUE5PmDjDh9c8sA4Cd7XFGwZpfUNeh5dauMf6UWAumFHKBwYAfmv2zo9Z2zd8nEm8FcAgYSv79hKK",
  "key31": "2hgB8yuq5tKGtH7NZfYKwoq1xcnMm1Gi2bJ73cd7kxQRBj66f3rXvZLMX2uCnVCBRZYYzKMVHjShvG9HpiRvoXjg",
  "key32": "5dq9JtoPZivQLHmFfehQZ1me7Gtj92gr3ZYB2e84nZhFeicQ82SaQffH2xKku6dkoVLuPBVJffsBoCccpLZMaE7P",
  "key33": "4BpS28B795x2x2fsWiCLdjghK1btM5QmWsSu3wbE5Nbyie8hxDKNvCAaUcu8nPLdjqgpFNuzbqWNUdd1ZzyiN3dF",
  "key34": "g3jRK1zazdBDdbTLsidwTw2ttwgwqyx5W2nVvkMj2HFL1a774AZvgvpSWCZu1PNrPEUemomdZNHG34kmEbxfyF6",
  "key35": "uDtHV1csNpaGtwQfiE9RWxAMW5ZExfPAJ9614HmVfwnbkB9Jzq7iBMkvCTgkjXEssLTQ8ur4b8q8XeHi8Nfs7k9",
  "key36": "RHKzixRMbqwPwrp7dKWvxcDn4fiMnS2b9K2hT4bYQqgAUJGNasQ2NpkAqcrUCBVLaZbTFSY9BSZwen85KViZh7x",
  "key37": "3uTvTygU6UJYTDkmDfXtLmJpHSB9dmfFrzg7zP8234ttxmxbLbsTFVhvZSwXZbhztc6rAFHdfB2H99h1xMPmpm86",
  "key38": "3Tc6wzvEgLopdp9DizX8xUJwPpfSSZwbQbKDY9qHeqtArpepXHA6ASJ6zs5V6wbrQgjzBo58xvgDhiYhangXqRFP"
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
