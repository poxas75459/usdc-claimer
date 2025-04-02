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
    "4rPQHfc8Cooj4tX4JasbZkfE2ohqBQK6wXRKnbrYd7Qk2jTXBhwi8aAcktrPE5rszttgz8WjznEZNRxkun1YSoSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4QsX3ev8P3L6r4VFge9fohwweTaUcs58S96apvYESyCPETGKpVNFXMdgSBh8Nfn5AWWwwUYYd9Bv3SXDVH2pkb",
  "key1": "32EaPo2vSV1BTZcTFrLJTQ9aNGzvFHfFv78jnjJBRxkcKtXXFnzqYGTw4KXibALRxQvjCLPySc8PPxvM6ZY7aa3U",
  "key2": "3NM5dJ29WHCThBDfQqNb5L6YKFXbW3prWHqwr3MCzCPzMmRAf7tcaeKM3YoZ7CwqmxTfUPDeEWFaAkYvnyKgJtfh",
  "key3": "5vf3kM4eWNAijcM4qGo7ComCR4rzHidbTDQ4narPKDMkXEb3ytACRorjrxzNNsrdN1yYxjA8NKmisRbQTee2vcsP",
  "key4": "4CqU2sHVNG8tLYcw9RcHpMxvi89hPYvmgmNAkadCdpbY7mpmCTQ25QwAHUcPJBS7rHatuVZTzEm6qs2dCu6b2F8h",
  "key5": "5Fr7mhx5UWPgNaQuzMbDW9WQj6uaQSnUpPDx6WRM4B4wq8EVAawb6NoRkoi3HCA7JGVGMde18qWpSCJv1zvAAP9P",
  "key6": "5fDTGobg1ds3uFjEmJUQDtjTdBDxstzEAzs2yhmxX9BNngaGk6ncnZZMjjCYLYKvgx6LhAToHHCTtuSfwqK9Uzku",
  "key7": "533YiRsrZhnuSxdveK1GSDP4TfFdERfvmyMQktd33ENH3UnQCgJoAoB6LpcBH5p74iGLsDGvBV7c27rUMK7mgHid",
  "key8": "67ga3iLirEc5SyeEpLDueu3VAghMKXouYnBftr8vPxZ6JcMeV5jrmJGSEmU1HMvTT3y5FA3UWDvfKrdUFsFSk3Bt",
  "key9": "2wh42UCA7p9gsGNsvRbuBZwKWTp8g9GSxi8aLSFRjYBU1XHnU6jVQntrConvEnpQgkjkRVcbxcp579Wmu4eCAUj7",
  "key10": "55nYNYrhBQEZu47rE8QxiMcr5ww4Ggz9JU5NKmYzsBDnvjFgqMXawgotdQ5JVzMd9Mw1yiQZBsRPjBKu7PKLQTWF",
  "key11": "yH5k9z3TFa6rLpTKX6v1YacSkLJmziuTo3sbaGQgNZF1R9VhC5vvwNiFEGCqVJPjygo3Gn1bubJJ3nuQKtTnZWx",
  "key12": "3nF1YFTJHcBg3mtRDJWvfEAMQ5qHbpgd4BXEYX91LpqjhP81efp25DyFRMyaobPpgs3Vbpxvif8AadUnjfzucGoE",
  "key13": "5MXqmLS7BdBAu2qKv2PTrESZDMFxmVsGTqRimatcKE7mDZcbZcQEBw2it1QP9313CqXwQ3cDYnN8FYTySgeLJStg",
  "key14": "2K54w3afKAXW84jXQUxhPuHKd8ZeW6UAWgzrrLz6gqsqKSqdsAXu1NDUsHXZMBk8tMSEmoTi6cQ3psYpe5zgi8wB",
  "key15": "2ZxCFSvTjNdgHGY4MaJ4hiKNBCkqrBakR7JUwg5yPxy2sHZNfUWkQsd619mF7LXPTuLVZqxkYxTkhgAPmYAA2zy5",
  "key16": "24WHuwHeFmPFXiQShWj7423sZwyZpgBJV9A5rFcHEarvhFeqW26LARoadAm4UwRhtsymFJvembvEzopkqTrFsZ6G",
  "key17": "5gL5F1qVjd9hGQE4TxJr2Ew6vNR1wncchAm835LEdExh6trUZbmA3TUATfZdQB6KpPFbxsHDDqcMrFEnYHbmzLxT",
  "key18": "4p5gFsNJ9FmUn9XBEe2cayRXwRJMkKecMRbtQUMLsCJX8qRvoeA6F3Z1FT6TArd5p1BznKu8Nen3RDsKK6wrbkjR",
  "key19": "44FyqtJTyzG4zwcTabJgF3Mahm1FwLE8Zt7Gu2yTZGihQqHcSMAYr1hCjKKCCE59V9ZfnQCyxmw2k9otupqzsHF7",
  "key20": "4dRGG8YCzRe9wxaNUUk3boPzHDyF6JShis4tRv9J6ZsCZVt3qWZFYh2iwFZ1ttoUbjhq7Z9enmuFKn1C1wdtVDFT",
  "key21": "2dsSastapZ6B8nj95JuSbLdE7sZ83BhtFL4b2oS3wZZmrcmofJLTV7VgSYb4usJZfBFhtZhwxaB11DEn6ZzPPT4D",
  "key22": "3Aq7JLWAKgF7eSbexPuGAuZuyHMByDowH7ASAtCAy7JkAoyRCDPukQQBy5KCZfKzB6uSNFUFfU4bwYSjBwWPf7Tx",
  "key23": "29k5DVm4xfvToRX1B2icnmSpugzUQfLEJBDijYB6oSoVy2BrbSPRKczYrAn7kkkbNx86yLJWxSuKm8RwfYDftyue",
  "key24": "5nukEfVGvtk1Kmkkcmvjoi77J6MaK4MVf5m5ePqvh4uATTAs5UvYZzXDso3d7CpXvnHDYGWMjvgBZbxK9NBhA5SL",
  "key25": "WfAz72fXafPLQGBmtvpvncTF4dqVVA6RJ1i8SYDtuAThDf95HNoBmowCvfXzV4UrmSyKFdeQXvFfjpnWrT74c43",
  "key26": "2gV7F7BgxmGXoAALTHw7fJ1LMWeNbbSZ4DmLoRmGjox6oKiiTkRZE5Li1kKcpHupkmZJFbu5aLATy6wGXRNNamZE",
  "key27": "5d2zfj3g1Q6zUzpMyAib9bkRU94LUQYiGcuCqQ1REv4t4v8qQ7ghshVLD41D8hK1nd4HRMPwp9roxuvsXpGogCWS",
  "key28": "2pkuEnTsdCNxYKbwmsZ2DKMsFsVM4HMbXKwWT2D394dLSZsmYmzEeZDuH33MjfRMudvs8V3SzpzdJG9YhHhPEhb5",
  "key29": "eqetBiuLCb91567tJEfQ3dpL5kRqo1vaP7PQNcnV9gS8QNCCVzpuzLnVyP3APJePTC2LovYHRmmQtqStzk6UY6y",
  "key30": "2LNNsuQc2UkErSx45akqqsHJRRvkkkRThCrLzgnChdig8F7ZXGZUKpZCoazEqKewrdEeKLmKYwGaS5Krn16NbPbo",
  "key31": "5NEW7wbJYXZkB6czdn6TZa5UgKvwKsT7KSt86eXn5Lv4zAQwAxEyMXAEo57ibBkLwh15Y9cx88UtWkN3hQHpM41J",
  "key32": "ibCTBwJfbXxTKEYJrCH27f4WeTDFiS8m1j6DbXwK94zaMc5G28AvEADqmmKtrvjPZ5pwpWuVs2BUh8wCEF55Mhb",
  "key33": "2N4rwcsv3qKYYHhnenCc5MSk2snVU5NNA4jLD1bnLYdknoftAdj2dL2po54p6AFq6fn77rrx6axXYWRXe2zVtR7R",
  "key34": "3ogHvv1874s7vNvQNYPW93H48E6hv6Vxz99Vi98d43FPYGVS3Vnwf2R5pHkWE43nbb3q6rf4fTkZWJTKdnaDeTFA"
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
