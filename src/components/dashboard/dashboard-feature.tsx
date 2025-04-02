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
    "3jnS32FHfx7d4Lwk9SCwjMT3wF5PCSUKRwtwPv4KCfwhH6eEwUpgh2v62qbZVT1pzXoqeA5FB3jPoryGH7Npr5Qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MUkQ6pNczQQP9Xv6afHrMogsu6k1YHMe6ythiXENsmLbq2W8zoZUhVLtgqEo3e1uB8mi119bR2MAWhMQNYkbvzJ",
  "key1": "2vGJi8Hza7XZSCtdYXs7dRnCyoLUqphnpfH7WWLSwcYzhnoozdYyxw7HcZfevthMM8fyRgZ4odptmKzc8xDQRQw9",
  "key2": "4r7FsjSur3oAbtaCXiWMHwQXN58fruvYVFqmsPXSUX5mWbxiRFrNYHmwrRpRn5tURgepFr9n6o4vTJkUZ5QAJWwk",
  "key3": "ascEeEn2JaEm41kvg4THPuB6bt1s7NkyarDXMrTGwYGUY3mcndmCaCZhMbmjQRMDYAuAK7AtKEzL575hawvh9fb",
  "key4": "4taLWks6F2sHh3epq5CaULZmKXTbJvuFgwSoUSGNu9KPJiYwjqKy2hQK8BuZVvdwaRfCiHhiNfEXzGJvFAJRo6Bh",
  "key5": "7SE44ibZ3Nt6n6XQjPwKnej867RWpChFS21ZkzYsEwusMRVjQwk9w5G8jRoQXiRLARf1D4GBEMJsggAzoMXMSki",
  "key6": "3TLzze7PMFTewZmACGYzgTCego3SfprDmTA4EJHoYKZepbXn4oBjmr78jv9DDH2REHJoUw3Bmed8QQT4PoyY9Zsx",
  "key7": "4zY1sxVCJ7c7EsbDRZZqBUumFUnCJBHukEhDuTtJDRvPaz7B8cvjE7XYfDGXHwnJQfZMADueFQyRXYWW9PDPBkVK",
  "key8": "2TjUDFnq9gKUkthCPTcJ8n7eNtKEReeUvvzdJJZGq3K7NzsfBnK8z5ya7wFaGtVa2V9ozNuwuHsTt2NE4LXv119R",
  "key9": "55Xm2kHQNYyyWvVt1oHJUUK3SbeHjHJJHzKo6F8vV5eff68KA5RD2hsZaMLMWWFBfHNboxwGhXfUFRyhYZNfVLKY",
  "key10": "5aGmuM5TcTdDNGR1F4kZYjaPq6Lnr2i8vQDrzXqZM276U5MbVUn4S2QSQBtG1X2fi7Zp9888udpCmdieMcCAM9f9",
  "key11": "33tGjrkp556CZMHEcczNGgDnbsXUwmxwn7C2bNRs71YkX6EmEGKBU5DQMzRsPp8Ftb723V3m5Zq8qvkb2opxRcJM",
  "key12": "4k4VCCs6RjKnyQnbjWsa67WjmmtKbPQfjn9aXz8xkUeFwZgHf4Pc2wkoq1i32rqnf7QTpSAEgzjGziXjyUwr4cf8",
  "key13": "2xncwS7C7XFoYALrMNgHpKP9a8j9wSFKDtE8XZvuQndLQk6iY3X55jGHqV6PVg2JogdUoLvQxRRM53ej4hXG7AL9",
  "key14": "1n6fVhMGzYHSADf26rbU6B366GLG7TwazvXNewtscaTLdJyskBKPRYnFqvsMed4BDHAfPXFo432eZfY5aCk6kSJ",
  "key15": "2Qj1U6tUwCnmVrBC6mmxfXEQ557XvHTHWw455hb93cxXsygV86FokA8XMKD6QLtd1kwcAzJJ9GDNe3waN9oKVecB",
  "key16": "4QfNnzKZpsnxVsH6JDtLBmntj7RD69f3WbsQxZbfN1qG4v9SoTN3SHb3jtRabCn1b4tUBa21bnWB59kRmF1x9S2Y",
  "key17": "2bq3EtQdD8FCBJm9hSD1ouQrv8eC3qegvRqMCzoNEZoacHVjKygaGg3kFeMF66QptSgCoWnWbSbTQiDRpA45AAFx",
  "key18": "2BEuVa2ftTq29APNHjvoGsu5H87CWUnXqHcGTKuGMteDoVu1aaxwZ9C1b4vuzAfA91mRDRvdGJxzswbAHwpdNVJ",
  "key19": "cfxdbbxJpAbgj46pwKmmCPKM26ZxMrXixYgyPyNjUKCiQaA6tBypB7u5E3zCcRS1cWohTS94NbDDxUvBM4PzvKd",
  "key20": "WGjh4wueBxorPoHdfoCZDLG7VmhKYhvUGWkqSz3yBcdSWgoUCChk92BySHXGmsa5v8em8faCfsYFeiiqDpp3GU9",
  "key21": "WiNtGPPeKwhLivYDmhYjn5NcEGAH3wku6ibiLKDD97BZFoz1AZbKYuor33qL2zWGujKoL7U15mbZMCQ8Ljs95DT",
  "key22": "raU7NW5YmKzFdEUczQTU6jEWR8UDUm2qrNVLpegK3rEN3MetM5JmqsQcr5FAWHJ3thbKCaEq5S1ex9WdjwpAnWi",
  "key23": "21hqMx1sfaDSiUD3mb7pPUXyK78ceEx8vtXRkyHu9qJLXgKkjLXLJG56t6QvhePWV5RzkWAqiaZgzQBC75oVMkCm",
  "key24": "3y5wbNZUHajCJjG2Df3GAAWvF46AFwFrDbCsJeMhMmT6ih9xWNkUy3Xk7y4arXKTLfHYMRtu9qF26DzZfwbwuXxy",
  "key25": "5VqXeyiV61d4Scaw2XtoiZi3t94r8UnCzFToEKuCau1zrYPJH7DRrZmHUCGCXqfhL1Wm5EhWWhUHY79fu877GWEV",
  "key26": "5qofLGUYXCLNqyFCPwcoZvb7Xq6rKs8Nxi1SAFbUuo9kxAHXVVtvXciMKHYK9T1j9a7CTCTQPDMVdZEBXtxtBftH"
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
