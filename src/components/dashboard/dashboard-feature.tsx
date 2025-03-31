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
    "2MrQaQTH5yLvFk9ozdDLmNPvTs8qzAS9foZdDvwgNkmWtQQ7ZK1wQB7fuM6CLgLG3Gmwtjekp5iUeLPL25zQUhaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YP4MmXt988SjxC52FXeTjwAAtzCtcqv8tWh6q4cmZKYEiRTajNNNdcEXiSSYhbCQfFhuDkA65pUCwTAZvBVUaZj",
  "key1": "3Zd6hd6n1NJHoESJnL5q3wqa5bH9GCuL2GYH3QQYGPX4is2Zad6Ss4euJmwqQc3X11x8HpbFTxpwUkE4yfASi4c1",
  "key2": "nseH6zxqiQDrvXXMGRdsTGasfdGuZXkYTLwYEBbavHqpoFwn4wwWKgLWENMz1Y1HfA6pNXPvtnUiwtsL9GD6DDq",
  "key3": "3otp6e5cXe8Gz9k83hSqMNHy3vmFEf7XkxFS5SYEF6emqiBvGtDbQn9Yck5qmqgjaYjqXykcsoBzA8vh9voF8PFk",
  "key4": "2i18KEFvgv4TUBikAz8oqoEWb1pHNaXdD36D3oJnRJejWE7Csk3f8ZrLZhSGYNjVwshHzARDBHgeFZLMT5ZmZvMi",
  "key5": "5N1xoA4qyeEHBwjk3aQGrrc3ZCh29rf6WTg7Ng39VFER1WjT2MHy6sjVPdrH2fQhhGKhMLJEyhiv5W2DMjvJ8NXX",
  "key6": "4KjLdSGTHKmaJHmcbG64ePv79sXdkBavdYBYJn6aFSo8u175sm8SedTmhZWzJAP9wHd49wTJVCQDZmL5vB22GYGX",
  "key7": "5orTMeqAF1cookmeXKk9nkMjNTXaK28jZRiVGVMuQK35D92Dzepv4JesxdEf7R4LaySfRYdp1RaKb2ZcXzrCVNLK",
  "key8": "3KgLQt6Up6DhdvtS2nQZ8RqPtAnnf2srGzCLhA69ZUHGwKfFxpkz79PzMwVGijrcNNrz3kPYYxVFnEaedy6KkEcc",
  "key9": "5vmviT1Fg9NggpzsgibHmh54bH2hDhqGek19B3KBrJx7qP7Yr7TeiiB2TCuMK8RS961jtt9gYXTLrZ4T9N2tZ93N",
  "key10": "hErNZiDu9a2TjP7fQHWeGBYMpudch7xk5UzSd3koqnSHwX7XCbzNZGegk6RnZ8f4m35kEpJuiVa9zSZ5vA8vnUV",
  "key11": "21KUsnYFDCcfdAYjMYyenvJ2D7x7XcULWNEViaPAbUSUxJKv9wdjGbp33XCd4DGNyqUe7gt4o4W3yRhWyisgfcWo",
  "key12": "2ZseW2PJKoSrwnBXcS7Yro7CC9YNvLAZAEdwbdb2gWLP6v3BtEycX9o2zFw7sHVJWMgLWa8EiaMb5zDWA8bQqoXx",
  "key13": "3fpHYkD8t7D67PgmpdCs9Hvt1ru1NfZWdyTuYGZXYLDRCsiLtTX6LD5Rv7bHP4jg4jeKWfEw7mnM2Dhx5CB6YVXP",
  "key14": "4VDCAqQSqmqnymY91XY5RcnQ9jwT83dmW3KTiFYCjf9roepsfa5ChBiNWnvwMiKzraRSkrsWJbsddtsgerTH142R",
  "key15": "4ZNbQrMGbfVzH7rbXR6R2wMQz4LmjyRH1cXu6uXhgde5k7MGqW9jpo8GoMnSCxQw7MYE7N19WbXXZtYxSij1bp78",
  "key16": "62NbMZMngJSSAobW6FuTRKTXvKGeXsqn5QKtg16tmTZ3ZewoDWARF2qAQhQZSfSVPUJSJZ4NDrjRvsRawJ1cvHQq",
  "key17": "2dAgEzBknG9QZuNhy4RUa4n2eBYP1LYqhYQ7KQLdnURs4XN5xExxLyg4cGYUjcxh3ngb4G2RCFqjK9AWZqsFuAha",
  "key18": "3gaesNFaqpUwZYcdAR1m6SRXETv1u2TgkeKqdg63cXP5z4CDhvKuiGtpSzDQNirCFiZWXm5wKYen1KXkFYKhcP5v",
  "key19": "2hWQfHn4vBuaf9uhgQxBeRQoUCsb98B8G9jBSDcAvKkaV97saFU4qvNGEPEegC4iynkBq4F4x3ztJMdhVDNEwiEB",
  "key20": "dcxQV6Qt2Qyh3F2A6f5DbaA6wcRkaxPZzPaZWwCWZYxRJRkJxGEpsiqxo3vVBQexKrjxYe16VjGQXF4uamLUAju",
  "key21": "36v9PcjuQd8F5EFek6ctLjG6D7ogzRyGNXNhciYZDnCmsARFZqJi1ibA53q4mFZZyUGe9Qgnh4qAeZrhzFcqKBzK",
  "key22": "4Hr4jyNtfL6qn3D1b83YSj6yyLW9xNQ6vTDzEDntP9dSv9wNDkDocNJq5XAQxWZoeEFK3RjiLT6Hkfyb6V3xZuSG",
  "key23": "5wDT6KdNWMuNMFmmkan2mNwfNn1twTDToH2qs8HjQUkBUe2ELb6K9YqoKp5mN87p9t6e2rTgMdr9a7xRcHQDunQy",
  "key24": "38ou85yaWYaZtBsogG1BpBjGQ3D2q1WPCpMMUX5hgHab7Us56iAoMybVz9j1PN4uK9CaWqMTqBuU5KTBLk3MBv74",
  "key25": "3LeMd79VDjB4uUx8pk2niiswJYcWHU5PdLSu8bpo4DLeVT93KoeQVg3nT3hNUXesx3kTw1jR4MeSuD8U7H8zRBUx",
  "key26": "3BDi4ShSssjBv6iLNNBJ7FuX19sz4V1C1vb21MX7WLnjnU6XD6DfYNp1hv3Qinruu1BkgGTYWLD3hPhHW3QoQuD4",
  "key27": "4TEH5CAf8bQeMUhdx3QnCnZDQ1qTWvKtGrxSXTv8oMPmR9zAY6qhBfn9bMgTDRCgbBVoGbbRwbLurScBGnAR3Tqg"
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
