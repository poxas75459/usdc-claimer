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
    "3AkK7XB4r4dxHkkEdqa53t6pC5jisj7zh7PvemA8GuCxPSRfBGEUXseLRVykbhZpspPQazfLuK7eNLrbojCLLiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "232fmFjq29KUmnD6Htc5XtxVqD5XC9ry7rRjj9smZYCyQWyekfANs3jQSyRZFKMhfy7HYSokJwBkmrRYwveS3MBq",
  "key1": "5rBsoSWVuMiCD1sbpmWP9tnp5LtwavLLhHme42UWHq6DbjhbZuc1bA7W8EoQvvZEQwzsxJfYpAzLdGcwP3YhPi7R",
  "key2": "19oQ1TKTJzGzPYDvkJ2K7cCmyhbcYSqozma8x1x5ZBg5K67uKzEPk5PyLEumxrUvWDTfkLE8v4yfYcCC1uQtGnc",
  "key3": "5Nqt7BoV35VeEwkHAcQXNtKErrTuD9SGNgUCmXtiCJuLrB8Zew3ocbSHpmyGDhYkqrkTCwCuB6ghs3rzwE4Fi9VY",
  "key4": "2FXEseroaewPDPgHsHLbdD2qt4K4J7sSep76E3Pg5PMfpyQRyA6DmS2DEoRHbYQ7QAj95s8hWrXdq5yA3oLYEFLi",
  "key5": "5b6VTsFBzfgsSUV1GdJV1WVXWckkqqMW9UqToq5Jmi6VMv7i2vsE7Peq9e7NSHJGREmD27KKybYUyYx22T3ztBgg",
  "key6": "3tL6UjXRfq5NBUcHKsNZMCznvVYCNLe7XrthA41zbgazAQcXxoAsfJyYN5cY7pMu7VbMED4FakDyANK9TSuqCx1B",
  "key7": "5H2pEz6si4Ues6c7eCBTHDhT3b5aLgmupTVv67kHf628cMPFzhVhUeeggq2zJoERkgCEaoEgk8pevCpoWQsNPkjg",
  "key8": "2hQDRGYfARYmwpkKSwfRKkaaLUh9fXWrWja3gV9STNTTJ8crPZFmULWTccTZEJwZCmT7S9dYrYCGUPVTHEHvK9XJ",
  "key9": "4KinUWQX9k248KNRLFosEoxpqpHJWoeAPgJDhtTF5SQjHXLzv2W4zL3jj6j33NxpJbia5ENxEjrcFaj8B1dHhMSZ",
  "key10": "5r7nFMeFRPpah4Xdw8crWXNBvq1XASvPAefqCqwNKeDFYxNv7jeyTjLNMoMQghq1Tg2fzKsANpXDnyLTps9GKDW4",
  "key11": "4cgcetpfHyo4Bhgk85xmLeo1zqQaHrhNfgcDmEFUNGrNKhg6RkM4wVirqG7RE5cTj2HSNjRctvzfhyk9R9ddM9Ut",
  "key12": "5xfctUeLBPLPAXv4yV23x7cTj36ccBFhBbzXzgU8runRftdezxfJ8Ma6XKrTd1uRaXcB4unVRidAW5SMHfpmPedP",
  "key13": "AorHtTGDQLWvfXMnbEkgcqLaJhjiYKKAfN52vmKUZwyLv2Aj3ZohgpX7t9dXYnKHoU5E7aKinadk9uxC4BgGfYe",
  "key14": "G1Qd8YbzVk9w3pZCmS1xK4DSZSrV9nu6Q31wqqmXVy65uph9V1jU5aK7wFdDT1WPdXWmim4f9ymdE2UogWcC4Zb",
  "key15": "29Tn9jS2DpX3kPwjUeHt118oERDRc5eWNJebk6KuBZhCkPGJ6mNLFjwcpj4vW5rx89HeGGAagXCqiVF9ovR4iu3a",
  "key16": "4NsszqpemVXfyH5LbTwQX6vTSHy51JUCtAH4mzq6t6SKFdBzGYCpZqaaR4KNn8gVSUsG5WyqfKzbzwUcX26Xo4ex",
  "key17": "3KrcVtyFQ9w5dHhJEa1tmLqRVywKWuqgZ6yR4iPer42MMashKPwH1fsC69j8casDhdBV8Sp5qNXuJJACMYuTmQAR",
  "key18": "5tfpW6fVgjJmMmjmX6GkSTqzNvyBRcS9q5gT4gob5EqqKGw5evgvDFfGiyhYy6GhnYBdDJ6cznvG3WyHb8Z47YMQ",
  "key19": "2J2vPGkzCrp7BTMi1V3DDqxMj8YHES5wZZnRDugCn1vLKHExWF2aGaJThpCX6jRkNQhjkKb4W9Kt1KWhuscN13KP",
  "key20": "3iAdyR739hDwp8Kz44FtXMZ6HAqd5KBiYKh8xo4s6rqQMdAp1bEWXiW6KGaTwaoXNYFQ2UV8WwbraZEXSvt6wN9Y",
  "key21": "hTiuFv7a4XXo2m8dugUpjG9nVysT8WoA4MrhEki1MBxuen7BEdWKPxFvnDYAoXLeRUngzCsEoumjASCegapKDRM",
  "key22": "3Z2hsJsz1w3JgXRZdDYcYW4kW2Ca2wJS4QZQMZqxBQSYmExYxE2Miqk5SKoWxpjz4PdzkvzX8E3iAEADKuCtK1RA",
  "key23": "2xVxkn6Q3Tp7aFeLhYwBRX6zpLgw6msja2M5MdTwFjwJMUQ8jYE3LTgM1yHpJ83SwT8GRz7hXxCLVb9nmZbhDcij",
  "key24": "2X783WC6equbGchRprsNwThXUDNAeH72uhACc224mGMJJ6vM31C4qCrz2wa5BgUMATaiMHH1fND6iqSXQpronoLc",
  "key25": "ieV82Hff6WqdsaZnVVQgDrWRbUZd3be7Xot1BfhCTYPwBc7yf2x5Uq6EmJPpYfZLJiGSkoZTe2PLVyePqdeQTZ4",
  "key26": "3T34hNu81ucPksejnWQ6NDfXD6wfrbATWWomy6SPqz8XSABt8w5yofWWfy44WwdM8ivGSMyjwJFb5LeWWoN1A1d",
  "key27": "3pLAPwV8WSxknNnFg1DMRkebvdySnNmmx9qBWEfEFVMe15NAM4QvgFGDHqUEANZhbhAXbpLzNbwDSbZLpWaFUnbZ",
  "key28": "4yXVq8syAStUU38MYaAkKmp8uPVWbRJ8uPzh4f968KEFK1y4RoatuEt3YixvBeSzM37UUGLoDYTRq4SnE4RyW27E",
  "key29": "3UndhFaQp6vMLZfgum7mQAYZjTfiqzSTmmaTYPQmoWbz21ZeEu6Y27rr9LkryVvWew6QX4brtQneBe6c7fopvKnZ"
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
