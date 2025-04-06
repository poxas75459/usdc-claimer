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
    "4cUZuXpBFGpTCBoqwgBy4CWDYq2HKXejZCpTvc8wca8gM344v1RUdxm9SraBLMDHkg8cKAQeWAg7NUiuS73VNQZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h7Z2r2LXyLiDMESGAtyiXMuQBDLqqmLm6Jt3SDougLMCmaJT3uhQfr9BzXkbqt4YNz6ijArCMTL1NzmLs1fdae7",
  "key1": "4E24ihpeLtN4eu5zCmCZXWEpUH25kg7DnZ9nR2mvnCCC7MiszMyH7Uxd5MCiYUVpw134eAKqNvQAJnWL4pwKiqfj",
  "key2": "3z6VHQPZP3CkE1SLpWdpUtpRRP86Ec2uWYWsk3hGxVxU1UDu41TgtAXdjmnUMuyA6hMBrcwkkb3kUsh98j5jBS83",
  "key3": "625LJLUkX4ZguXueBfn855CUkQ31nM2ZQZogW4jhMLDZLYV7hSsYXMk7hvqiH8i86rUBbUgpx9u5GnxXSGL5tacz",
  "key4": "2t8RRNYQSpa8Xkuc7pQYm6NqAjnLESgShJmDAk9FQxugGRtctXMzEBSWyy3Y8TCf54uZoxtkRmJgudrJRDEweTyF",
  "key5": "3YEBKj6C2nqB9hxCn9iHbydwftD5pin57YKeRntQFxNg1TmR3PoMBUZcd57tcLYpaxqCZT3UcnnuWxaHazLDkSzr",
  "key6": "zZpUdN95hm951AEZA3pcdTqaSfHawe7QxYyD4pJ5XQgr5MaamK3qvGnkwVaMwDhF2Z8PAeyvU12yYdVyeKt6QVV",
  "key7": "2ocTmGgizbWne37jiVuYkh5LSQcNNdDMCo4Z3m6K5dv9arRFXKVMQZNArKs7zQQLYwVg6zwz7zbkRS7t4CWBUjVk",
  "key8": "3UmtYK4w5QK87qDr6WQpFLGVd3Vqd2px5ojcE22JxGZSGEDCHxPHa4Ti2C7jAEh4GGAU8R1fd5YAJ1cQ7UYd51zE",
  "key9": "34tqPEL2UDPHjgaAwqxcz92x2ULrK6erc74Hi6XtwLUCuikKi5c41bPn1WzWm4R8gMYVsznhS4NMWv1dkoEjjS79",
  "key10": "bqkTsgcb9YJhqSLavgE1X1SWdS1bawdDiaDNdM39G1x1aj7NJaF2cAsY97XDQBtRn9V9MtZDy7WRibThYj9mJjF",
  "key11": "3xBW6eoHTKGnAVKtivNcqqQXUydm9HKh7uxoC8DAM3YwMtDGEZFrZi4kK5E4tSwLRwAE689pbsv4QC8ZAMz1XHd6",
  "key12": "4dMt1YUrBBM58Jf92zKKv1F7QZM9cYXPCov8uRG2MUzBuoHX1nkK1BJhYgqWuAwyVzkn7SWqR7HP3vLDFgushMUF",
  "key13": "3cm5ect3UnJnt3Gfn1Tdmaf9PciQmzAgy2B3tY7rptKER6DMkuBBAMrmvPcAqcvjiLSRidPT9Z5Cncnp93vQjvDt",
  "key14": "3DMu4vF1AUiqHyDxnuyqRuWk2vyNxQp6DNNC6PLQJqJUPP5NDK6hLKYsX1XxB5TtjKGqqQ7JjY2YVFUFMfBsP2fD",
  "key15": "3PHYNdtvEgAai88q6KkBRKKR9fkM1iVxrxBo3DrJ5RMyGjAAAo5n1gXtgYK577hTHc9unm8Tz5umEhSvwMH8JRt8",
  "key16": "3QqyApPFcy9mGo6HLt4HM8BxW3ugzRnL25hVeCpGu4eTjG1oCdXzhe7WahuJt92GdxxAaFPEKTkDwxQ1vtUUjMmm",
  "key17": "2apWQav67neruwGx7Q1GYRY3GtnpBKP5SHLHYgY9FW1oYphu3JAK9jDDa9RZD811bTSfEzYj1ZMm1NzqReLGM4f",
  "key18": "5fWftygVyioiZqGLDLEZ8QKdihK4GoPK1ttpBpufUFE4rES3JPSPvz9wzkdbvmuWzomyegsPMuzHLTbVt4Xcgaec",
  "key19": "sanPA9PLJxQSc6K6Ji8w9YjW4piN7LrG9C1yxEvcst1bF1yWfu9fzxHFtNiQZrsMShyF5L7PAdfNw1SZcTRJqgi",
  "key20": "4bi4sEA6T3wkPexymaJsJnwpbzr4DrpN4exxJDrit8f42NYFcgD3GcLf8thbaLhNfv6fxuaT2fsedj9mo4YWmdXo",
  "key21": "57wDNbTBpB4Fpf7VJRn7edXdK1EVo2gqoTD34ghXUgWBRiaxoPNyCCJ9svdVkiuN16AdUWZFCNNm3yej8yjBT1tG",
  "key22": "Gash197NMZ7xwW8DHt8Ghthb5PZ2L3zRKV9QyU1nqj6RL2f75LtdMzV6um1pgwGR3bt89K4Vhf6DT9c3St1rdkT",
  "key23": "4k7PWv1dnwMQr6oprduiMYjNszU1qi2HHbiZmvW19ajMNKnrgKbeSLrKnBh7qb2exGwDTEQzPc4B81DUF1oRh2Sx",
  "key24": "D1VzCA93rnJBg9TeSPb74qa5jDLo53iVerCVFSQecfCT2JZCJxNZXLoKRMeSJRzR5JpxNnf9wMs1bQHjid8HJwV",
  "key25": "zK2zNLg8exxtDV9zicxEiZegEvz92RL1G66bRtWnaXEkFrH4W1usKL3mycZ5ShqCbE459QntNLgcaerQbBkk6WQ",
  "key26": "64HykutGfuTJwCEPwGkKFKF5xvpsoSK3V7CDaywe9g2ZAstYWaiP3WZQjNW11WEMvzStfJvWbDSNoRhkS8BtKi3K"
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
