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
    "nVtTaYHacyA7H6g9Lz6VVnfdZ7s4E8pHtwnuxTnJwXB6ZiBzeHbu3HKnLa3w6ZQk7qtEePKpgNd883f3DxkDoPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66j3mWGWyTPLCevacu1sB3hQiksdDCgv2CcAq4PcttG2p8z4QrYdFiofvme38oErxmj7NoXqVWtVhHeyTP228h1X",
  "key1": "4UieSVNbCMjzRbUgJShWVnrt6YKdnLeaM8CNvE4FjsfYNt5NdN6spjJhCN5hyiQD728qo6mpt1wrpUE3esPn5bvR",
  "key2": "4b1j5ymemwB4Cf34sofkhQD95xUUDPUQ6E6rdAfMFHy4wP17WBMfes9S8y9Fgnf6fytusv5s54qEyZPhmJfmoVfw",
  "key3": "5RKWhF27sdJPAZGkGvq3Yuzjc3LKBrnwdGMVfUyBee7HFug85KRJnGrqVXo9RyWrPZGquZSd7h2N6W1UHQYMtJ4q",
  "key4": "5KPrYTbRfN9BcAYRA2pk9EYE8YNxT2fK2rengKKMfmLvRJeoJY2WBpJmZd8cuibkqjhLSbDbCh9PBemd5oidGrCf",
  "key5": "3M56bPdHsRH1pgnFe8x5WxgYUPRCPFVTp5Jqqctc8N7wpF56KKwtPMhncWuwh51aUrM2HtWfAAJHDWYMdjvZ6akd",
  "key6": "3mUcGPargXE3gMTAi45B9vgcxaNZzAQ257kjHRTbB9o92iW7d3MQiweBTcpvFmtEaUdDdBt4LUjuSQ5byNLAiZom",
  "key7": "w2D23B8Rh6GZrb3Vyr29b5x7CMCF6A6DnBhgAtgybDbfqhmoY3a4dxjwhtBUYQ1eJART8ywwHh2fG9QAhoov7fm",
  "key8": "4DVwv4pyP8H3Hfe66AdBbk4acBEmu9gMBy94BMsPuggCiQ3KcTf86jAWXn11BQBdDoJ5T6mxmLMqsHV1ishtqMMB",
  "key9": "21atJAddZ3SspYsrVzkkSubLa938F3QSxN9FL3QUfKCmeohDabWwvCmJw6Yr7DqMw3235LJ8491CaWgYDb5TsdSe",
  "key10": "R2CH5SuyQhK5oJnNCMXAjFy493Sg31i5jyzcaY7VhvFRkYBKStQmTn9Te9UVwSsD9krWPwbaejcawAajQCzmCo3",
  "key11": "iC8ySwLRGbcZADQuoHykA9kPXPXJZiyF6rfykeDMNSQJ1a31FuHFM19vBMVbds8pLsPmgY3iXHe4bptwC1PeJRS",
  "key12": "ryTu6vuQwgXxarWGzFK6abHsgy5WaJor1rXR2mkyHV158KVUhfXZdsmuprH1TyrmBhssVSH81bToEs3NhKSK6fK",
  "key13": "4Wt3oWJP6z7TFVeCJH6wGwDFv2PEhxFKfkRutFQupjLbQfyCGoNzHsc5Q4bbB2anSmFm8M3X6zyyFbmwVqXqVtZB",
  "key14": "5PAMSiNatcDgd9z5wEbNBGfFE7QMV9WGDiznXtajVUvYMqhGfJ6U1KLHF2G4tnkoXQVCexPjYn1gCWvuHhvE5M8Y",
  "key15": "5uU2R8sjtgmn1dySVs7BCxT6ZuRex6QT4Ban6TFyGCbbnjgHTaa4Q9HFuvBbmRyKqF8DJoWaXoztZKZNTxVeJ2Kv",
  "key16": "271GBgTqjKqqtkChRzmrGFLGNUfj9xmQTn3KVBLZs3GtDsKyMiUjwcVDPcQxbqrpxTTTxvmq8qJA5oY7KWcb93uq",
  "key17": "2LMZsCVEJ1o45vSr5Myvv78g8BpR2sqK1ezEYNkd6RXMgRYFab3KupVz6zLWW15yZxrSh5N47AoMF3NqjWrNfZ7W",
  "key18": "2qefRwxZoCVwDJDqQCzbVXV5FajAFjtUS37jKtPjh7sGo3vJ53mbeZH5XgaM1FyFp68RFQfdvwB8rLc8U4a8YhZJ",
  "key19": "QSgVpGcb4enjBgetnJRT62RKhGrEckPQw9PkJ1LfpoC3W6zkn6SCf1kv1GpK1NeKDtyc2TzW5E3HwFy3hWVBiNe",
  "key20": "3CGpEpLsNeM2UV8WasKJZ7dypwGPh6f7FKGUpAjEV5HmNrTySRc49S8hov6f9Q6m7DZZ63GCobH51skftYVtxBfi",
  "key21": "55VxWmexFP1UgQwT4dJ7iApWgJ65cBE67L1fDhLAqajnQLMwn3kJNMq5HwPw3BsHy9ZpBJw4oRYuaMXtYsHQaGEw",
  "key22": "4meNQbzvajTnePxoBHa8hEE24NJDYwpA5RLhsXJVQmVqVfyGC5vEpzFHVXoK1EJfyqMRwi6hqb6UsgLijAu7pMQt",
  "key23": "idTYSU37McEePxuNWxaXQ22EfffW5ebw9TKHP6YHLHUWkhA3R4sr3paDZxLXTQjQEwGLoa4LsfZvqiPuKFYqZ6p",
  "key24": "3v9J6qDeCUhU96db262CSuzbYVvJSEaRQz3HfekESrei9MvQfzBda8JpPLCCTp1yan8X7HS2F5giShFDb4kot4bX",
  "key25": "JBfSuY26Yqz7i3xJJQx6DHjurpP5kwDms8zAUpczHDzBrc3fKJFMcr8hzkZesiKnB2BdtKyczFzPHsKpoL5psjZ",
  "key26": "67HEi2xEggTXWACc7hZobFXdYD5TPyHWQFTxaxrGbF8vyc6EMAAqUAyPSjNKh3rgx6LgtkRDSRVSvzmcsUKKqH4m",
  "key27": "36pZsHic4xom6TSW6JY9YkkAz4kBdw8FCHCykhycCT3XjWm1uWhg9bAkxdMYEYZdq3qpVgJAh4UQsYinoDezWQPz",
  "key28": "FyEojMWpTYZXDNBSSdEWYg2G8zW23qDGwo4AoJwEkquUXYZDjE7yr1NA1VcrG84q9Vk9qQRm6mG49PuXsQouY1m",
  "key29": "gDdDnEnS4CzUNLyPKUv9759rCZAqaYLKuwGzYTd2KXbiTKrQY4vjwNuLARqFpWUSNJUSJXFNTeeaaeUrYvNWv4Z",
  "key30": "2fkeJEJ7ynUD28eYuio7CMr4JpL6yvdwRNDEj2gT7YbcEJQkYpnsjFMcLPncnvPdyK7bDNqJzscnY8UrhvHiLaRd",
  "key31": "agdQASCDhreap98sKAnYkhJP14bLiy1hvZTCqDHBAbknjiCBuZjJ6rjMQwj341ucSP4eYtpdLtZ6tBB7PyNmh3V",
  "key32": "2a6rktr7doqHehSLJvRBR2msq3noC7Kp3NfxECP1Cpcyis1qMGaGRA1FU2fpZLUmYMeHE8oCt99GpUFyuubHcZVr"
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
