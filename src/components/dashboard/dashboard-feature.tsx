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
    "2tAQuWuMfau5Q2RuHdJyEDqdZ6bQLWxg2ayWCsL7ciu8z9akmAq9ebX4MHU1gS434P6pCkbCgnnYpKxvd2cBf5yP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xn9vA4GZKgFgzL76tKV6GGBZNzu2H4GWWq5hdFxbEmEB2tMjd1wtzx2ZPNa2wkTWoSaBTfuFjU8Sg6brN1Ck8Uw",
  "key1": "2PwDtExBopXXmRThxsLZM4Cp2eJrAYnbUnktZrcrkrNeQcQ4z4oNtBZLiGsjnsaEBMg3bVC2mQRjj1UEh9FLFGAa",
  "key2": "3sD2MAjsnnFYt7Prkt41cdw1X3uupsUiPT6sJ1EujRLovH5LaR4FgDve5FCoqs6i139Q4aQP3js6rGnB9xn4L1TK",
  "key3": "4A96QpPx3XujLhxNLs4njK1MhGYU3ufp8k6vwKwT5sQEVMXLrwPBTURJpvo4ArAqGSew8cgeBTTPmweAym7HUKAn",
  "key4": "QiJvdKnPxXQN7zP5kqdASsp6a8cf2A8oCrB6Hs1TmhrboFZZc1gDDX8Qgu8yjhaRDsrjL2b2VW4TAoU17LvuWmy",
  "key5": "2AN9VYGRJfSjehqFJ3ydKR9rH3CAWMLiMQseo2n1tcJ4w9AoAA7knsxWe3dKfvnzzuQb8bffjx5jhg2a79dNbdwu",
  "key6": "2izHejWUe31V4fcoqoQvsRVpUCVxXgU3h2CyVMeKLLCxt6aNJhkKfUYF1rvoBoiYccFMB3J5SQStX92B34LXMVx4",
  "key7": "5Xo9LGpfC1cTmfKUVoA6UAi1EYuLoWvtz5S1EqyZzjNzavYeqHtir6qHCW6gW3KB2k6q57Kk7p4iWUQxbzQdPyVG",
  "key8": "tNerMLwWCdsdDKrKGu66nKKQUQrX4dbpgbXt3gTGsFh7vHy3PytJqpLGaQ3ijYeXdKcaM5EFWxW7DhGDjMbjkN4",
  "key9": "2cfw7ZyD28uPF2M9R5KVRTcyjHEDVVZnRfeLe1yiqgfePiVfhcCrR5wjmBiipVBHYjjouurnfY6r6oM4cTiRZmjg",
  "key10": "51QWdrM1ujTAPW7pPFXNYKKvDvPL8Jdb9s3ByueVcQKDCezyWKm4r72EuYEpKgYZJmzW9oEsWioH6mQHhFMzVHZy",
  "key11": "JbaSViNWcAHJ8LataUBmJgfSrsXx9krhe4QuykEGkLrLPWH2mKVbRDkiMPCwTJCUi8zy4rys7qFjz3vQRMnyjYF",
  "key12": "34oz8hnPCeTB2XDzJVuLqQj6d4jQizPfEefsbehXedHA4SBvJT8N1tUs323d8JyNWFAvqgHAMQkCUuBUi3kvjS6b",
  "key13": "37q4XemKiYdfx8pH1BJpSB5Y5FQoLMcUc49TTsRLnXEfBGbLEBsTDkNWtun2mF5dZc8EEbuSwob8adKKeL4wFwyq",
  "key14": "2o3c4AGTZdASaB2nkkqSVkL4BVYtP3nCqW4PvfkQfGueUstu7HkmqaTw7ydunAZbFcBax32Ew4p8vXZcikGVYc5X",
  "key15": "3ZFTQgS7hWAra3yF7o5khea7836552ZWs8zmXrZ8GutpUziAyNWBjA57A6yLnNfu87gjPQTQpBNZyRwUvFLvzbTh",
  "key16": "TvBGuVBRYBxooLjDd3jn4Dp3pcHUkp7eHWZ3W2LgLjPCURPqzDF7QRVwVkLap5B2TcUhfJJEtQEwEVdvwgaiDE4",
  "key17": "5AqYZBWGnjhGq8Gq8n98TnMx4ZrcTiFdqisKgzvVVuodJt2NcjVKjFjX6pfhG26DDT2sxMakm1b3zFUZy47wK7Hx",
  "key18": "4eZXH7g9RH55KsLzeECkH9CGWjZc2zUyAdsM941f5cRUCGorzjFo6xEhPda8Gw3Hg1tSPkhxi8VGHaAdE4i7zDhf",
  "key19": "3VExmXrGAgofkzyT1aByNwC9ECjatUfXqD6MfrZ47p2KMhQMk3vEQ88oJ5vQsUgyZzn764Mh7oyTLHNhXoGLhEEQ",
  "key20": "3Wq2BMXWCiT193P5JChWJaDqRtiBCmGTmXdxMG1s7dXGJQcWYM1YXsZH6F2KjnxXpiyeUsXTo69sX9Kn5RbaXWVX",
  "key21": "5AAe3fPrpfVnZNgEuyjFJoRxwGugpwzJew9orzantWvy22cqDWGNnRRNYkj3Uzim3LAVuTrwd6nBT8wehLGqHx7f",
  "key22": "4DwoHcgd2FsRDn2VwLBjQoM95dVvVwBcY8teLLmybhVaRyLVv6mndjebDMXDy8d1fMrZbpYrsn8ww3gTgtS9Ln2W",
  "key23": "3sz7yEKTDgNM7oeZCPcwhaXfasWPJ7sFHghwnSfLg9ysneRNyT2M1PF65MdTqDp8c6PsYNh4UhN1sBTrxyVcNN2p",
  "key24": "4Q866V8tjudwc9x3rC3NWWyJ6DhqxgBvdphx78KGJhFwTzCTyA4UEjHVKupunmsyMnQiuw7avGPTwLAPLD9qJCnm",
  "key25": "5LcdG5XTo7SppP3pDnyeHhtzxqiiRMoqL62gDovBjWDoXKqJvH7e3o5fWitNXeRwKzRTAk9e6Rikar5DtbWp612d"
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
