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
    "4Kcv1m8y1WZP2E5f1vCyzzbjNtv2fv3oLYgHHnuA1BA6bdyzyxRxY9LpnNE8KvYwcidUddj3uQ1dRb2hqPCyTk31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aW3zBfZcrBxd9EroRfkc5nJAZQ7VXUs9gMhpyVENjRnwcASn48z7XdwSPUmDpYe9svnMMru9XRNCy9DNwRDgvNu",
  "key1": "5UNEwmGPLUR1J8EiwMkGejnifzcZnVeAksYvvCvenzkTkHRG6j1hLHk1HexX1pMjsbCjJsdYc9zRt1LiMYXtCYkA",
  "key2": "3vAH9WLS4ndQqhzm6d7ydRXBMWCPp84yBK4hGqnTTZDCpXLWb8MDeRq9XWjgDqQbi1VAD7QCVRjQqsA9zXhL7e79",
  "key3": "3paLvoas7bikWyN1Ki1cRJFzDKrkh5WoiJNrRdmCAsFMeW3H4a5RzwvxZqkBkmrDaFtVyoVMNzCezw7pAzduwb8C",
  "key4": "xyE3PHJtmf4KF9xuxFaBWYot1HoALTTdasEVkezDDZwygdQbcRfSTM5zMTiod6arCEAyWeXfnyaL83PRJNBsTsH",
  "key5": "557vzogaftXNZzphwiQQXGSQpWCUAaitCM67eKsN8uVB2aYnrQQurmABouafybAKzmjMiTYLkMMTWHxqpdpygCRw",
  "key6": "65G2QJSPE3JSzGoSQKx4CvHwAk3aSJerHMXCV4vwSRoME2tiY4oLT2wE9fTzPNP2XzS4nnbiP8Mukz6thkpSqVds",
  "key7": "31aJm1u6Ki2jiGz4oY27CjdyCEPMrx9SsDZe3P4x7oaEPfpJ5zbBu78aqmeEFSssLZUMf6YTwdZN3v4tLHHi5npk",
  "key8": "5ontB8VZ8HVHsQvorvof9hJ4e8UCAkhnnx99MuhdhTB1kdeoMANDBSJTiJkmfwqEjgycM416nK3Gt68GqC2mj31m",
  "key9": "2d9ZcWHJgpqFZQcubENWj9973JhUvapJh2DNyrZzPNu8ThDmx1mPZo75zm8caF5zuzKaWQXRXsMbi4ZhaqJ8Bdum",
  "key10": "4NuoTS3C3TPAbVAmBWjqhmHgRCKx8fASYfZLBWNeP3YbrofvPwfPTTdY2ECxCxLjn5Gzu7XHpYpjeJSb7FynDUHs",
  "key11": "2E21qEKD1ePfAbLgXJJbNQ5jpf1BMiWZpxtycVzj3GSmwp18HhUAvxB92BqNfB5zpYUCVobG8oiFmCZb2yoBPvYg",
  "key12": "3m1dRwwph33sCqsfLE258XsRgbM3hHTcqzocRgEtk2gHceuAQPZLcrQjqF4LoKYd1fG21f62995yXfJ9WyiEhty2",
  "key13": "2RbcJdTHCYjti9EKugMqcDXRdQD5zRVACxQaZ8vA2Ua2hLG2gdxpCNrEJ4ebtK199R2iScxHqgHg98kgjeUkeHSk",
  "key14": "tANfkNcehd7Tk12kr8cDP57u6Q6BVvhCHDqavCYFnS45oQPZB5gQsXkrdCRqYBkoDqPDPMmXKUZysUCbzFeyZqs",
  "key15": "21WFbFFmD8GyvHofu7qUvrziXEykdzNzrnnRDfewSVYLfNyFYLLwGwxCG9DRs3gGFXs58M777ucXWqHQfmgSU3sv",
  "key16": "4mDgzDgC7Q5HHhaFJgrALW983D5LqvB4WhzscxHRvL5vmJtzsCjrMvVLWcXAE5BhApH8KAUZjRRp9hErqbuM5TvB",
  "key17": "3w5ggBmtMZ44rfAhudXPBCAcgnDZSByXNHasBv6BJs7mF94fDBPw1qUEw17KMe4fKkjMrdWEfV7gF3oWFw93kvXq",
  "key18": "2C5VBzSg5YMZSTgvku7UmeLyVoaWQ9QSTyZMQT7pjKA8FPtDbVZzakPCZKwNZf32DLTaA3eSnuQy6wWU5QxnVU2Q",
  "key19": "5zVMabfTFNZWeAjNnJ46rn8WLoejneqNX4PZfgtVFf8z7DtbFh2rAFjF5FZeKghtn1ELpwtR3G5iBTvsDWXHWb6h",
  "key20": "5AmU64EyqdtEzardY5WeyLXab7yzyEHZou8EbF14fyaUxtQpxaQdBRtV6YiKoMSMNq5WX45U3Pr7a4WyTvf9ABj6",
  "key21": "36FGLTM9JRfbGppgZ74n3um7NGY7PeKo4tgYFti9FQ6Kg7eZ8q4NdzfSEWucdhKGspY6quib33wqMsJftwm8B8WR",
  "key22": "5zzo2ScpFBsiRkB2d9dCkBjLhreU9cMBG26rgvXNfbtthm5ZB3xmXw471RCbHMio7cvwbXjcX4hq8MaJ48Z6Xh3X",
  "key23": "3QPFVGcBnbJMTiYGQJvQS1fKLuiyrasaU5ao178Xc9fRQuToKDrELReqM17VcBR5HwVnhdswY5Lcvfb87owUhFrg",
  "key24": "T1dmHymzPiDSFR2GAWybvFSrn9CQGtpjrYXtEyCktRThU9URqba2CcTHkHkCBqDSQfBSe9yAzAbZpfRi73HwdZv",
  "key25": "3CquWsosD8ei2XhPJypEaDtniCKbWQD1MzkhDMHuLfNQRVR1xVpw88cf5uBp4qr8LZA14SJZJjcD9V6nQBVRnmSB",
  "key26": "5UAF6xoxaPo4LNyUtzn9B76d8SaNhJkSk6S92N8xJiBCNs8bCJ68vEt1sVcPU1qzbYkju7XwhD3bVDrdFYkkyHV6",
  "key27": "59H2KXqK9bK5cUwxeAsQ4j6vCRAXMjED5RAotSRyHeRcwUwkTKV5deL1Wg89w6fWmBMujvA5EW62ybTGkWi6oJK9"
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
