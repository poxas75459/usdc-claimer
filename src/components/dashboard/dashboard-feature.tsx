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
    "VyAMgvD7Wo9X4q7HoDPZaUeaLrJSd4biYNCFPYreouE3gVPq9SbsX5NnZYbhexEvnzoN5E6aTJodgCNRHqr8fiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpMqQrEEDBKKWoBvKSbc98JSa8g1c1tKXK4PvxQBHBbX6ZrGrRaZjBKJ4ntpBUqsdk1QrPcguXvPx28DaiMZ5UJ",
  "key1": "3o5rdPp6SD9z9kECELLa56w9eBuzsoaz18Nw15cmgQ1iTRvyJ5gP4fzcigYogkhzVRJE5S7sBXX9bJDEdbdUoHun",
  "key2": "3e97GJGaWwpdkSCiRU4D5VJsyx6ovS5nsWCHCi64dGEaTkdSHgwQRQ3JuPMNx1EjAFsGwXYxawEPduCAXHQUhkap",
  "key3": "5LUAcYKZPwAhGCXo7KAsJpF8UhkcDCAt2sYCH4URrXJ83sqD69oEMqUAxVviCvLriU6Ema4QddGzN8jmMcT6T3h1",
  "key4": "3TN8nAwhF9RYsNg5hprHv1iMy3CMEGAWBQMY9w1rykJ281WuZSRQjFhBuSKCmbe7ysTbQTegNRL7X8CnMcMW7AFm",
  "key5": "2vcosYzU94oa6QirWcJUYvLrKen6N4W2MiiZWqp3hMfiCwDj5LF2Q63VHfu3KCMXG8oYfrjBhdVoFEga2AJg8Jgx",
  "key6": "2jtpmHqpZFiZT6LLGvJ8aVQNysPoduT4Aoj4WxMEGFbLiXFRAxvmumd7Mu2eY8f6JTjmL7sHdqdfJQbfkmcAH2LT",
  "key7": "3XNNHbN9PyvV17bTyZQX2LpttS5GQjMMrW3P4S9SGjGFXgZBPc7v2GA1MJ63KPv2ENNEjwFKh5jdgTsszj82C675",
  "key8": "4h7RVgfu22KvGsg5mqiSEh7yUfj9zZFVnXy4iwohRSAX4TcWfeSBARuWbL19tzzZTiZC4wivK8YRxbWUvVat9PRx",
  "key9": "2qEHGWGHdAa4avBTfMsjvCky6b868g4miueWaZt5MuQ5h5jejc7AQJddxjBsBXMMh58kXjSKtp8fnzfcixCr3JWL",
  "key10": "5Vc6WDA9pT6suJaV2oZYNKy69cieXQKNGiyEWBSKoHeJuFgsEcEkG4gc4cHv9CZPRmrRxDSaqTruBuwPm4e78epq",
  "key11": "4QRXoQTsWSxpi6i1FvfAE1B5hj4WL1wA4uquFYm74joBbQacoBwF5KWct9g4FPYusNfBiN1jk8MDmEL9gVNw9W7p",
  "key12": "2nb7sznZXsL3BNSV2zyw2oHAkXr5wE9sf8a8NBmnVERDKH9xeLezr73LEG7YFatrXuQTv1bzb2PGUtFsEVYXvEYo",
  "key13": "42Txs6JGquyDC6SrycT46eggUQkpchkipugipuQk3UQZG9HDsAmb9LSEotzS7EoDrtVBXWWGputMyh8U1CC7jx2C",
  "key14": "3VZzWRPGjMrvueuqvXerHEErwLboc1EwmUwieNvZzfiibau5wNTFKNyGrgdYbQ3swKCzfqvHdwpiG6rNcnxMQ4MS",
  "key15": "5CUAmYVfTjHtEKKGt5wv3bb7NbJAHQuE9K57QdN7GctBtGpb3nauK1ajsXQvt4jzsBSbnTBeQp8Rpp1xpvTabbfr",
  "key16": "E1uPXjAwHRbzc9C3VCXdZgSVUf9hWYfDESNGKddHMBQrkCcCoEo2MusaE5y4Zv7wCkrnVFyJFYcXqSFQcnG3TrJ",
  "key17": "2S7XJSswKEwcaGyY2896oqRj22EBxJvYXLUkYgU6SWiMoGsRsYJ1SqQQKcM4BUHwsqCEHLk4mUog8Hnd66xmBugK",
  "key18": "5LupB98eGGt1oLHQHEvctAcxP2aCt432ohLJi3LkmEUNEFeRsUAHnAdwTry1bLtUge9JXighJXxG6LreQszbeaM8",
  "key19": "3susb2xgw2FSNMfts8cmV4aZ872UAyW6B3WxDaSmgkmXMX3XFUsfnqgMUHEAfMyEPAFo5sCRnNSf2XTpS97HtwLp",
  "key20": "4zQZY1XVHMUBZa12K4koJfhjtP3mVGfNSVk72uiP5m48XcvX2UtfXt5BsX9sN8mVDmHqv4wuW85j3yYuqcGE9fwN",
  "key21": "dR2qxzhJciPFmaERwxGdb9aHxwU6FtXtsnS4XFUuU5HtKk1biimoBmYTcxpH257qLaekbANhdhA7KD5Zk74Sypa",
  "key22": "5H82k9rjoJVyix2oy49j5VQdvgH3FtfDVx7jTH6Zam6YYXUg6nSXeLFy6yzSuXUZGWPJDnpoKbtrJVFzVAEWwTwa",
  "key23": "5yz2ziJTVBYtuKpevvefYvNw79ytvn4EiFmYYazxRMhMmyCAPerMdhpAGjcv9HzXeQRWW1dhxXwDp4qMik6mGUUr",
  "key24": "35vRB1uyP29gnwyKpAeRC4T7KZeC8gj3VnmKPsipd6P7iU4vb2wMYKreeQfRuWmWnAisRZhnowJAW9fezbbiH1yr",
  "key25": "2CJon3sj9yjcU9ZatBpoAcAQ2B37TAWrkhqpmdhxzcqMgDsAdMqcMkpdQoSnD48WGh1RT6iH5ZXpHDcK46Cgc8as",
  "key26": "GJ5nsKVPMRevs3AtvtWQA8WBUruUuBtTQBN2mvC7jkXMCsDE7tjfhFnMTie1aBuiQegmGPFxAyQAAcSXZhy1htJ",
  "key27": "kuiyLDJaHiMJHcww5vkMTmtNNyRxgfW2zKjGy3JA3RPwu57skhCCBjq1vjLECYcRXRAyVLdGfTgXDCSi9YbUpdn",
  "key28": "62nx4CPSw1cpVLF2SLcwAaw7r63otgpwLT4JnF4zHcMameD3rYYBSLMqDFn6UC16gzRnc4dUtVeXW8sBokstLnJH",
  "key29": "3EtBRRMARy3pdQvQaRNtqu7yQDvoPmxRcCAzpzg74L8Y2NRPVeBRXFaJizdv8zWcTDqr9Qno36kZBfeysPPT8s9Q"
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
