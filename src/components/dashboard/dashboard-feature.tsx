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
    "2guMHShL4e15ZenzT5N2wEEUydtRnmhpzG4S8ujxxNGDA6U9nZ9VPoVwyUEn1BZfAFwos9V1MP3SVxdxmX1Arjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MF7swg1y2xWGJeqCrQSkgzH33JH8DX8MzFVK1r6eALUse9rDck3MBz17VqUo1Kc9VT7LfCYBw3BJD1yyABfAFTu",
  "key1": "nJLYP9c472qyCyGm8KioG4rxY1KAkidjSkjDwzpmB7DixZF16wsrLM4LG45z2xC34898AQbU9crZmSndrNaa5AC",
  "key2": "33bXTuBWtzcnYTo9YNLG4DnYD7EuDUE7jJXfy6nryXgbRJSN8vPn9bqsC7jXBSAhjmstBh6iaPi2ifM4pa7xJcU3",
  "key3": "64tYuafcoYFJSj2oXfTGS4X34bhwvBV5jGZmP4zz8d6EN9nvYroAA5yPGMDCyViHxam2gYWEX3pZYpr1NBbU5NXu",
  "key4": "7MffCKxzXwXjjVCMM69gfqrGq7rGxveoDZGC9mY7CR3HXk3ifRVMdbP5kKEYHMNS8YKsx3gFscFxzBFPW21WBjj",
  "key5": "4zUKoyYaZymrK3aCBjzex2U9a43YFpNh1PxYBRauvHvTzM82gvkHCPwwxddRnDyLddykY9GDSHR1BVpmop8c8eNB",
  "key6": "2J9Be7kwibCoC7Zdzd48nA284ZmHU1UsQVaaT8zB4h7PqJ5vNnSK9WuY4U386S5JAMaP1mxGMrg4FMbXoaphNk1e",
  "key7": "3PciKxF4G4nWpsMYMBbJuEuwbtodPXF6dW9Li12ZX3eeA15w7JLJXrXNC4mfgz76GQAe7Qx9WU1Cf8Fyjey4Q3pU",
  "key8": "3A4LQnFZZa9NsouSHMqy6Tv38xEZFzbUVA67Qz7bHk1719moFbvwLdKT4q1kGz2hCxRGmZVVr5w4kHLwyEnnsRz9",
  "key9": "3h1dh9hFXRV4NmjDpcaFrYuugC3QQrxbHa5q2Sm5PRUD4u8ggVdJKf3tpyCvSZm9qEjqmXxy5wPmLjYnVgFida9f",
  "key10": "24CvGkp2HTt87hnpG4gcDuMiaPQpQsyErqrWsMpA3bQtrgcxmsCxTyLg6gWt4giKydNcsKeRTd3s8mNJw52zQQLR",
  "key11": "5VMwYWmuFZQWQkmkJJXZM3ZYZ2qkvXM6iZD2Kh8obZnkcyKdGybxgQ5HjV3VZKo6ckpr3zmqK6PyFJZwcAbzXFiq",
  "key12": "3tLUi5ZWAxMN8dpbUB3jjye9Spb1qMHVe39L5HE1n6XALgypYPVXtTwhNrjoTepqmK9UgGkDV2vfabZZHinzFHco",
  "key13": "2co2xs55JHqLxy3Vx3ytnrQbu4yv6d72LRLYfvaJnSdNcyLivutsu4kt3NwQqRxnTax5qRqee8941qagEPr9SWpZ",
  "key14": "2j9fmEXPZoojuCVzGYxoJG5yUfpb5xPi6mmPqNSmrvZr7fjSM9SrS8mKVSVAnZhGPFuJFREMBfBmEDnNH7YwHTG2",
  "key15": "F1YHL1JZZ3RHQcqk8tseGBFhfjrcJXcQu7fQTiwT13ayTkPPeDsc6G1N2wYeyLb9ehWgDLMcGQz3MtZAeXqtWVX",
  "key16": "5HM2wWNfzEqGaKJYqbBubRCB4M413prNds66hno9TjJrfr6c9fsKVfggfwU7VkQ8wM38rzjFAMd9VHVCf5bBByZv",
  "key17": "3Xaud5S7NkCqd2jPqYU24HpcybotgB4GeSujBoX3eCEM5NonyEU1HqRj3FVTqyRjLLjR3xdpCKFxp9rtccrck6xw",
  "key18": "n5rD73QacrEHDMPCrrEsiCfF9GC5GbhYVc2ZCuzTXjVcVKousviLrVdrmiLBszMimsbwfrUgtUqTM6GB9R2LANN",
  "key19": "3y4CUVusDbmXb3D5hhvKhM83RX64jSeTg8Gwar3CP81Lt52T13WaKnMvBPrhAyMjMwKRZfN9V7r1TAd845ZZi4Q8",
  "key20": "4JLhp9pCjyp3E5ETsqxF6biVJTEXhYaN3YBDzqYUmdDW1W8AL6crySAfWUv8tHJy3fFpYyDUnAYyxM2fXegawbDm",
  "key21": "TCQZEq67R6SFGFdv6krkSucv1a1Mb5EqSgjd8DXbZpPByrD88e9CZhSTP5VA1gwKJ138omAUdjNbKoUo8LhMW7q",
  "key22": "3oAWVg8nPxm6yScpetcDryjh6vzxkptjEkMkVYQNg7rdat49SDjifQZBcijxH8dm8KdHKL2rxTDxcqWxi9FxDdM9",
  "key23": "2JPBnQrhT6mnvqT6qzeHy9QYxnf1aRLZ6BmqnCEYhyZueYL2qskWt6sfSBcm9Cbr2tYWZa77dPf1bv7NFbGWLC4n",
  "key24": "4oGSSZuWfRBSrugiXvT4aAwfmQghyXRDBUBeheEGXbzMJZxCWCArCAxmgYQtxm8szQat1YYivZ5uEJavUUvCjTsN",
  "key25": "3BPYBxeQTQxKXmQJtV1znXbUWBFBxgcKU16hqefBrwj9b94ocnrct7YhZQL39NCgRf5QE7cG9HQAT1jrC1z4zg1w",
  "key26": "4x5gCy8vZc2MwoBRVY17CKZS4tjBDsPCxkPRBjbzgy5NquNbz2Gb2c2gmDxt8NFefoco7gw68U7B18CMoMWEPWhE",
  "key27": "KTd8m87vHEoxGkECnXUiqLeg9w3CtC7eBKc7pGEqHSmzhpSF3CZH97GEVSwFmx4wMMuENArVx1b3kUEzKH8fJNf",
  "key28": "4Fy5mDjcKdQdnXmycHHxuuKTJSJcR8YCh6Xjw6vUAuQtET9zLU14B6WcEq6syfQ8gP8WRQoQabJKunPxdiYuTkpQ"
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
