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
    "7NDN1sJ8T8f3iiU7AqGwrZLKFFujFJUGSDM3yKQ79srrgwWLrQkPwoMQcuNMzPW2B5soGK9wvjpJUcpKbjgb96d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o7evFE5JQtJHALzjdSRBfyPNg1NJcajAoMdvLUNq3Bo2upf7DeDRfqWPAyrL7vpWmjXrp292QWHZTGiEXE9xxF7",
  "key1": "5M4vBViXTTigdMWQYoHbVDbZaBQFz8ySiEyvhBvYGbj3WxM4XDaZdq9z4zVo3Kw47wyhkQkgj2hmPUzHgCAmGsKr",
  "key2": "22UEArFebFPh6T5JRrYWkW1zfoBRgJpZLPDBX54gGNr4teWxV7SrNYX2e8T6rfL4w7Y62Yum4cv2ntDTKoxxGka6",
  "key3": "4kbJSSaFcYsfMTnA4f2K6cJgzGYuQG1BL8cJuKTEfc2NW5GdMbC3TX5jK9ca3VRm5d9xDHcUqd52SHAJuzk7nogj",
  "key4": "ca3UzWkzoLUx6KqQeXmgve2pLXD2JeFVMikEzgyh6nQf91TjTnL6UPNZWNJLaQ1xue3bFaJYMBUXdK5zH5KpceS",
  "key5": "5ugcWyWdP7k8eJzJtjRw46i3ssvWkeLhR9xEd3qDKpP68dURiN6DzXYzX6TWhu2eocP37jWebgphQyfUrBEJD8GA",
  "key6": "5vcvQgLKAQvz8XC2wooPSR7L7BcwJEvetd1TsiZDUnfq53KaNTFLxeJVzocDD9V5Fd66WXhEVwEeTbzq2he4wwjM",
  "key7": "4aDpiYkVgtYEtxFHt3cCcmPpgzfizD9VpB4D8JggWQbbcWYPDp8U34JiuV4fqTEL58kps3rBBZp876fMUKxhZj8y",
  "key8": "4P179VRWn7emFwWbWCkCq4MrwtxYXBwUqmTea9t8PYYNGs4LZHE3qQPWFfNWjgYBjx8i8dpw9mPLVBETVE17UsDf",
  "key9": "42arJHYkXYNVAkBd3A2NGmn5jSiQAT9yyJL2FgDFGuKP28HKcJYs3aCJR3ynjoDQqKYyWGH3ZmtBDGCNd8SEfXiJ",
  "key10": "2GdyxjW1pNRKRpZeZb59EXAJCdv5siZJQ3FXG8APQyjs7y3FbyXfjfDGHQKeYGQvQ69TFUMm8i9qeRbqi5Dg1G2w",
  "key11": "BCJ5xheF2yBueHaLQFGuTEe9MH4tqWRPwSiabnwqYkxQPRpZRMHTcxqF7MLJv4KmMM8N2CqCqtpGcGYMBBubGoG",
  "key12": "ffiJLc8ffoH8CrmvpopjkSgs1TcKRivr99evj7FZBebST9wXdKDjGyk6WayZscnPt6nGmDd7v7xXgeNSzHGvnqV",
  "key13": "4m1ZEiR7mHD8X4a9dU1a93hD1pXsBcbwQ87YGiCajRVQ9cQmE5g6EiwEgbpbjxG7Ft9Rw4L4Sk6aC1vJABz8CveP",
  "key14": "36TvFZPsiSQ2VMxGWnvFr5idqAKKqP4qCibnaMrRe6xpgE83jC6ywG91PP1tCocDepkS8KEwj1kDM575jot55bfX",
  "key15": "5GdUR1rxSfTUBNnk8N2WrsANLqzXTUegyWdsJJ4tDM6AWs3SiZRvZ5DiKGLo5dSMgDHUhPXuCApaRijbV7U1ySKP",
  "key16": "5sCcbKSpp9XNQb6NcSFJzj9CWAaebvPwzXxamuAnYJ8diFZzexorA1JXEQDoUpuGhGwGJp2d4tpQqeF1BfZsB72m",
  "key17": "484DwXvEd1UMBmozpRT6fmPuC9WYrwGREMkcBHCkGELDEpDPwGuDN1DXMmJJsenfwdx2xMTXvmwqTzwpoaY9kLPF",
  "key18": "2x36kttwJXYaDoSKfabcRWuWbwQpH4YEHLR7hQP1gxJh8bkonP3M1mtsEZZGddNYsibnxLkxdiwzZFo9Pj698Z3a",
  "key19": "4iP3XPWzWBoDBhCRcDmWdW2AzqtSnK1iVKNqAFuSoqifTqWvvB6zxBcs4shMErW3AWjqckaJXQRf7dXQzc8kCufC",
  "key20": "2UMMo7FWuaaLYE7sBzzhEzw3aXXUwYW4U3UdePdXepD7zRN3fR7LtYRxHdowcqyhtRCmwKNyyXcN8U1ukG6sfB52",
  "key21": "hLxA3Y1Q67rxSZVHkDkmFT2G3pahptLj2qkS9znetRAJ9Ap9mrfUy1SB8J7MwDq4jQRUHYgxhdpgxMsBDHDdNp2",
  "key22": "4zhHBTrdLw7ZRtuHNwLAhWLfT5wdseV9uzxJknGs4eQxTfC2hf4NgD2FBLy5XUBqtdMZKfpLw4LSQfXpVwo2dNFU",
  "key23": "5QzbBXwjix85jxoExnqev49KC9KSkTcffCSpWAgEmTnHGTr8ufXWku1tme5XA3BErXwMmAvRzFpn8pbRSL6WFmah",
  "key24": "4SwmjMPvn161sw2h9vSXEnxWNNY9biGSz1Tc61fekgduQsEkQURbWdLW1jhEjKfXUE5Gc44z6o6UdH2M7kTqQvXN",
  "key25": "Pe9SFA3yrLyJTtozrWFdTLs69SbY5Nk1z7xckHJQvF3aLYvREHGDTn8xBLK7Y8sBMSYeF9xNLqqwNkkuuUasNd7",
  "key26": "2KibBD7uCgsexCdJkmsjyTdC3yoKq79cAb54mduSZ5j2hg1Kq2JHS12Xw2shiR94fou7bANAjZbQhF51iHBZEqN4",
  "key27": "4ceFRw1zXouF4b62GdvFecddtyws1N1vh2fHzSu6jqeVsEvX6RPSfpNxz1KxpeMcBGFbefgUZumygZ3Uvc65nXEx"
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
