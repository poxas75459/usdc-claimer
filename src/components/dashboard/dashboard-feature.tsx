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
    "4yzfLnHCu8P2ABQfUimGgqWYkiA33Y9EvqsUU8obj2MeJMqzLZ1RH9cZZT4ut61AYVfnFJ5xs6yN5r5x9KT9woka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FsxmEz5bQpSHa4VJUSaZz8WNev6dZfcJnxfyt4R82ppTqnruvV8UhMp2GZRn57VCjmMuQ6aTtTTjjZJRJDmPt5u",
  "key1": "2zFeXKARbfrsvYe8r9k13JkrumwDXRTiEzcdQ1VvEzaf2sjqCo9M63Sz6uChRaKqYPBNtVJWvcH9dPXsaNpos5KH",
  "key2": "4VGTJAiWfj15q2jCdrWzFGeMRX4v8RqNiAiHUquhqT4CoDnVjZ89MHA7aWKuHK8TC3GAmeTmHSbXwWjYpYFyt2DZ",
  "key3": "2gi16WXRWSGTVdbh7XJe6BiHa4dDES8Znm7yykvBr6fYHJhJm6u2SAwJ5GXwnGt9KPobao3WGFe3vfCb39HHQeRw",
  "key4": "PjV35x1ytz2mphijEyKhhoTA1C8FuBQbEq8txSrGpCnfcmpcKq2Ej7cBuAN1vn4AcBuXx6ZRNnQbVMVywUoLG9N",
  "key5": "2XicMCnYjvApKy6K3xs5T3A2cPGeym2fvFF3XYhLFmEvkw8hoyzhsGxdtNFd6VyELvKAEdAP3Kct3rJeruVttut1",
  "key6": "41LooyyM4eiSAVNUB5nJNoHgTpNp7vKBH7uq9zK7cwyBDq3u2qVKfXaevtdZYxoVAsfMzGXrSxMRWpaChjVe7Uw3",
  "key7": "55vWTmYspkjMvXdwsAzu16CybmVrg1S2e47HVj9g4e6bL3WDb1XG29yYGqVg8kEr76QwhngtnrcgS4D7vbRysB1z",
  "key8": "4qQZovUQhGR6QhBdE2XuKVWeb7Wqe59b6JsNm1qD6V7cskiUq4P7eukq3QcfumNbaeQYadbLMxbSX5xkFy2BjffF",
  "key9": "475iLkE6G66kvZ1eui7zKtTSM8p6nxxvPeibGLv5gzHaVkRAVvKH3Phb7zmaHgGXw84biEZvehMWUcFnoZKZcimy",
  "key10": "2zNkYWcEFCQKqa4gnWqUM2byyA8DPwf8BzZMuH7NfVsgntrbFxiEknmqSzEB5CViVZ8rz3DrWrzk6XHT2QzfVn8R",
  "key11": "XHPwYgB9XBVLXN1Pmip3EcG1oJCD39DQPRemSJgX1bxBkdoxyc5hdCA5YzbaK3HjH4ktG2VVAGDLRY8bitDeQKe",
  "key12": "5fBTLA3ifETdZtsT9fzpZk8nGo7tqgkfqWh6bmRK9zyBEJxt5eMj5HhYBoupex5E9Q85yGfs5Y9vKer49Y9fJYzz",
  "key13": "4TXCrdMrAurfv9zzyruosPd7Zhixi6KwJaBUoYyMiihfYb4BfpdngZMejyknombqU5Vn8P8NQ3HRAGyi28yWCjaT",
  "key14": "5R3QCktSVPdAgkexd9kkckZuVN7vWqMR39VXTGepyw6z9Q6yVYx1L3xARrC35eAqZnpQ2mRZhdiqgMhG5LScRLyK",
  "key15": "4xNfPeWZa7tT9i1Hca37eLKgbJcjr4Cq5GbxTd1HvKoqwBLt5EE5KiW11wnTMg2vcQLYeYnUrFZ5h9q5HRysTrqf",
  "key16": "62uV6MS7TXzyMLepawtfAD8gcnNe23ZcMYxk8KZwgupMc1mSbe5kUz8auNr8gdASezyZzQVWNHA8DkXTULrMnZRW",
  "key17": "5KYkArGMXSxo5rmSyh6qsyPxtFby8WPQCVDEQbUoaVHRVG9fYu1uQhNCFAYz6JTw9yMo9U2h5PzajxY5WsASBnLv",
  "key18": "3E6Jq5Uni6zmCTq7PrZJfdFcKp9W3GRTigXQC2XxeEv8cQfxaLdfRHxqtSWUMKmSXDn7PYUmqtYj3jeLGFsxLKzD",
  "key19": "2y6zu8YcjgCQL6eBZoyfsJFzBTTmeXXyFKot5sqD95dxpFwEXCwBfTTw5xPiHNG5kHcXY9td5xcpAQ1kVA9ETBbh",
  "key20": "3EdJZuU1t7rde2P7x6RDEFsepeq7oXe64QkS5nrrPd4rNNeDwZiQboggNUjrrVTD83ArUiPwos9bWCzJF2LJQMEY",
  "key21": "3PdgB8fmHPjdfLYTdSqNgf3KPbsnweobDkHKvYz9Jz7fN3Jq8og8WLABRocvzwgeW4okpnhswm4gDtT3gaUChaET",
  "key22": "2ip3P3tHCHqGzPLUQiTJPhdJYEyYGBgzvuHcJyRLLyd43LWuyfViR9thTUg3gxah6Uyvdp1hvDMXYdTkhKP3HgMP",
  "key23": "64k81TotGcQnBZBTT9gS2EHAhssgQUh3hP7fLL2GmTJyAViF4sb8Fs3QceBmFVwQMsCec1AjQXQmcmtTUM9fVDFF",
  "key24": "3tmpn8fN9YQ9YierfKh1nmxxsadRcxZ6UPyqamCzf94FZ9anQxFz4KTgc6pstbFzWUj9FSJ1J9MGy77rDDt2EicB",
  "key25": "452zcByvsoWqiR7Z4wjEdWuAt5zY498NFGY9Z4jh68FudDcAJRf6L2gQpPYYxw6qhsfsSKbWuSQY9WodYatGWZZx",
  "key26": "2uzbD2zW71DACTD9A4TAxXyxmAWoGTAuiht4oCpfPKyZUuYwDvMEzuByZansfcucFBeFi6JYw6x9w8R9YowVUmF9",
  "key27": "bVkhVPKu5UJja4V4AQse4M6DYLpCB5cRKpFJqDKigYU7QMDoNcr6scpg2hqZanA54cNFE1QqNXgaAYFoBciz6jY"
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
