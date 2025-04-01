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
    "4ueSFPXtjA5Pe9CT8bvgbdnMwjtjoWedBd3UVscfa3MLzBQCZAdnfnKZs4RakTZkXunhuhcLNaYuDyXHgXfUwffJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65tnJ9Tu52wNKfAnUmXtGE5orLUjKeHLggRYdE3xEErAWZCxYBy5ESu2KH4mQrwCYMHsnvwfDPkBjnAHUxG4ZzZn",
  "key1": "2fQbbrVt72UwhyABUr5JP4rtNoGBHnpfXqmEra9X3vBeojikTZVTKXNWWtWpTw1cz8FcvxLwWNkfPtZnADxfBpeU",
  "key2": "3ZABKiG5t6PVLGcTnHEC5UhvepWrwDsmnGq4VSSKyMBYWUDJkWdXSxbesAmm9w9TL1no2dmELqsQAzUHFvxnT1kZ",
  "key3": "JNEikGbpbNTMFR9LfCxVhtuMwvS3SxCqhjkQkzP4mV1581yNJD5PXEt2Xs6DjJmfZydXpKureAxbT6oAjbwz6WJ",
  "key4": "3qWYPiR45DwR49t5QAARTSypdkLrTpiXk7LWBcKxSANobHhGn3gRyB7KZCRCUC3GeLWszWwyWR1DdQ5iSGGkJpwJ",
  "key5": "43S3RpxYnM1q5dJiYfrL3er491Vft2uPVUhaZLPSShcUsHB6ovtVesoUrkCfPVHzaoe6X4G6JbAp1XxdvUqWEewp",
  "key6": "3NtNymSJAeDzAxkDXD5wVxvnWZZhUYZEiwK1rfMAZ4iUhcFo9p5da31zKApxhbrU7CswKxVHu57j93ogt3ZFXv7B",
  "key7": "At2ue5tXDCX1GrhY4MWEFYEidwjJ1qyMof8dBeuatx6Cc6PwsKx4nM1LELURCLD1xvbs3fwTXjk2BtFqJZDFxKE",
  "key8": "N1VFoLBYfF2R23cyuKHzCqwKJm96eYvUsRNEbqoTiWGMkGb7jzXyr1WV6cB7z6vjWKJg1h38kGQXKkcW3oUrBnR",
  "key9": "UceoQEmMvKQap9CVHsXTY9wNDaB2NaUgWNoi48TKDAUZ7k1eqBXddjf95wwgPJzqVnwXuMhVVavh5JzownbWr1u",
  "key10": "3gu4csiYqLgUkTJQ9SfhZmEfj7vWTAcqyE6b8NsWTCS5ZrABDa1wDQwewfHt7oMEMhs5KShAYuahEzhRgtTQobWQ",
  "key11": "41kuVaN5YbarenwDRFSa7BwyEHiA6Bhykm74dxKLyJmkGfDrm8SzmnPG52UmpP78NcP53iGLGqgmMP9bYeUnHBXS",
  "key12": "AWQagW2QCqYQp6YkqDuXBYqpomdXa7QPT9wsZkV7VUV9KTG2UjX3rx7E3KyEUpVKHifUfGpkkFZCCvVktjtqFh7",
  "key13": "2gK7hLE7GzUsviSWSRwYHgv5ENCgNY4azYuQ73VRs79uMsVwipkbR3yXMTq5Tc6WDJgCax81GeSXKDZmpWjore69",
  "key14": "5su7ekbmzvRTsAY6WoGYuwzNqHEY1iw9AHjUWLSyWrGbSVEqYK3SjHNcLkGd5bZv7FQZAa4ccaEYQ3WUJ9mfo1sX",
  "key15": "5ymDhHTfHv6SDUymwh75STt29Q8pRRGhbztnH9gD1kH76jXUGx7A3NkWdsEHoAQiya8VtKRw1Hp6Ktb7tZMYzahj",
  "key16": "5QYBSpnpKXpJJd5GRBQEY7xBZCRoSo78veDsUpoQS9Bm3mgQxXSsdpbMLvSvF2kQDvbRwqqSuamFyhQFCkK7gJCy",
  "key17": "2vBkNPo954XGBEbHpCnzZfRxbh5NPP2oWisFAtb6AvJqyvQafdEXfjbUZJbvpf8CgsCZUcxkisje8VKmjNnFv4sQ",
  "key18": "3ZfvutkJbNBtxTjRaP4U3izuLkdkbqjYaZLAC8zjZS3gmZQFUHfqh4sUNhp436MGyr6YJ83md9BudyC2fkshxBjw",
  "key19": "4m54entGWzTVb26S1X5dMxwFZK4Q2jvobnGQikfLnMQksux4Tkjf88A7JVuHVAEdUBmUqzoBdZGQrPE93goFFwwd",
  "key20": "3cPHDDMd22XEHZjdz9mMaTPYG4roSePhCRwHGXJzzfsN2Xp3uUP2Dty9nFicoG9bSDcTw6ftY7HYZsPcpQ6VMh6A",
  "key21": "5eMXfyBLDKU5JsFFEnL22Y7CJgzCWEvMi1KtrUoRr5yeYemkEi7bQM2keiB8QuuzDT3dEdBUE4eSM8fi6YEibEwn",
  "key22": "2WJopmzv3iQ113T3MDNZ7dPmiujKsrN7u284ZeX7dB8gEbuPKYiwE1iquku6fH7fQpnRoYmsuhxMq4efLvGpekP5",
  "key23": "5gKoRcXHtjnRYRL1eN9hMp4sDUfC68c7FcEM6tT86LMHV97N2enH43ZgW4YcnksJjs5XidgUE7FQLqjWMUcDz4ZD",
  "key24": "3D4uKZPtuRweR7RyUQX3Ckfg5ExX2iLyApUurJQirE3Jr54A3nRYUUqByjgnnjCkAUA5ujtzexf2WeU4qmwM1oGe"
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
