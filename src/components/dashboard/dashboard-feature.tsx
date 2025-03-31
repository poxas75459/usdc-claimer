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
    "4KD7ZP9rbpLiQeMBEExX45nPXup8rLj1kf6v34JBXKFMGb5foZag9UYcRMTwcqNr2DToFWvLye3KA2ie5ihQ1zdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XyaBUZ6TK2CwvgGgmGVk2nQiGYW6genoGCeG63iSCcHWx9hrQ3vKGL8jQnQPfvJd4sF2cmNYV8rbxYDdgRW5Bnp",
  "key1": "2QAyNMBjLRTSAVuwn9bKtci7DV5WrysN29J5QC1p46hzdruTG7nxZxBLCkyQMtXj4Z138e2TmGgpqkoNZnKC3FCB",
  "key2": "5h5UyZG76he2B7ziWgqVWQXnvxdZxdksz8xH8FZaGou5zdSCqfxEdESpE7FzJbbPTczhj5rq1GeG577pAcaGUFKr",
  "key3": "3d6iza4mZyLB82tyfzzkeNZxpcNiawNrPpYiYYvXMZHdhjJvjM96sesHREDLJ5PV5HqCCmP23MfF2LpxZ61SxURH",
  "key4": "5qcv6QfvtchxHo5862PbVYMWuietkconcpHdzFWoFBCrKx8KvugRpAVyoiX7YJLqb5sUVWNaTjmh7i3NgAEFARQ5",
  "key5": "49B2e4Lv4iu8bCTszb34ctvkaSnBY3iYnXJ6yRq1ihPMzGYqJ8vjZXVjxy8ApqoJbJwpS2yNJrieUgqionxC5wqy",
  "key6": "5sPe3NBG9fe1HP9aZ7ijtKSD3a6zN6ohyET13dK7p7TvztsHJrLHDFPcQGsmZsbrvP4xGRicZ3QmRfCMVd9HTjfr",
  "key7": "5pjXdNTmWP8Z4KWtWb6wgwJojy2tZzX5nHwYteaiobDRAWe96b1UT7vTxw3AfvpU9e2YkVoGXtuGoZeWsGuffUAr",
  "key8": "361aZXgMoUWDT1DBuiAiDqUUgZyhebRk7xeTR8Hs5XfCv4YKmKtErCMUbwS8vxkhwYjmHqeViNki1Z29eUN2xwxP",
  "key9": "4RPzvJUKqgn5EV7XaFBUTMHqdaLf9UY6q6sdN1BhH9Qx7yAaFQiKXLcd3ykbda4oXKGSyvihZudmt6BNYrumWhi6",
  "key10": "57RMu8XA23RP7AexYgSmPdryiKLgm1cFy928jyK3QdhJXwXDKkLpsdHwrkY8AJZ5FhTo3oujKkD4ja6HUkhNxtzH",
  "key11": "5xBPJNsGFv897cd7i3efQ4KENvBFLjDZk8JD8scF4XQctyrVdBGj3duZSsRAjG6HzsV7bMmrUaqdj6Gb2AL2iheL",
  "key12": "JEJsSGaUmkxTgUyBHfGZAnEkgHx5w6XtpkWWc5tBCi9ituq6HoHSJhcfk3idFdR7bmSoW6HJnWZs9HLyhWnMhpV",
  "key13": "NbqqAuEu6LqbAiU8TfJDWG3AZZLB7WEu99uVKkkWdKjv43srY863JAQBNVk8Hh28WGUPv6oYL2pLoYM7AKHroR1",
  "key14": "2c4e6Ae9ZXDbeRuxLo4XxY4M9D13QJLCRyKFPE5VXfn1parZ6CCTWuPUf3YXyvHzKC2fFqkUAw6Q6gPrTCbGaJDr",
  "key15": "HqSc9nLPBC3thq46LuxpY5T7ZQJnmw2QAsAJhxjwZy9XSgN3avZNPmxvaEvzrUMPRvqZUDj6ydeonpBM9ySKn5f",
  "key16": "5vtQ4eznt1XfbDVUxVLovdqxjbgWk45XLaHLY2p58GXpHP91PPi2LpFHiQ3nf6V5CG9b21eP6tV4Q77V9nL6i44k",
  "key17": "2FvFLpGYcoaCigqzizkW1WTGsTKGZ7umn7ZbqPRimz8dpWu3fYoKReQznRa2fWediyJmaazsGfp2k3qjcTcbKff7",
  "key18": "412E158WLVuEjRfvMeCcfdaRMcAg2TWgdvE6mjwT3XdZ2YbNvK5Vq8yyGU4qCRLjLSDko9CrdUAgzRuLTviVvhRb",
  "key19": "4AycQiPEfBwmPGgE4XPkFbFXF4vUXVueWtTDmM1jjjZsM3aWd3WtpQFUGcvEWr3JYeDEVy1JZPv56MbKPvMSrDzV",
  "key20": "2eF1CMsmWmCLVHd6bXMbbunCSJpgRYRQ1PfxZp4ih5PGLT1MCpd2r5BsTS2BZ5gJtMX6iipwBjxNS2r9mpCzMNQU",
  "key21": "Z6yQceQSxJdgEhdquhxbuoshGc7LV4WudzXdSrDz5hr9tcnYSEyMzx9anXBn7cHKF85akybHRmddwnQRmPNxoab",
  "key22": "5G1ZgCSxDZx6jgwMeCR7scBrZwfxqddyDPMzJXNbEZiwRPt34qEtDyVTUzqttwDvirsMmi6NamfkDUn8k9Sg9Pqq",
  "key23": "48sFqv42fZv87ssVopEr5D9MQkZjnBtTfAVoDyEpqx3tEehvZryh49zzKLqwNKpsMxfVYeJGpttJwpBqmogFFMVz",
  "key24": "2PTMEhyqBmXFSRhfyDAW9KneZPQsgev1SnYrnDqVDzN47zzauQFRKDbtrNz3qpxT3oP1EqgF2cmDE5ZFN3Hiyg9k",
  "key25": "41cYb9U8EYTX69EDdvDvZ4gWLnnwq3KKWHFozMKNnzGCC2q6qoRYWqDpB1XuDhZBUp9DW5tjj9DTAeQA8F5iQprw",
  "key26": "59DYGFq5na53ByPc1jTPUpPgDtuyYdNg9FipwpJMXQGT2D5v3tdnZYTnUti7UyqxA2MSJaPBkSKbmC7eYMhVkF9Z",
  "key27": "4QvHx9AdEGjfk9oYCh8ihE6VEfQuipcMkpbjaFu47sCQfi51PX5PjwYKN1K1uyX4wuhJXTReHdJhfxCTXTTPn22D",
  "key28": "5FeYkP1hGbJZhqGvNRUaL3m82X1b9uzeCXbY775Z7dviz5JkXPfYJnYo4XiLb8CJefacWuymcjJhytEkhZqPqrTm",
  "key29": "5Xw39BbrX6mcwA1JCxp2AC1A2HF2JRzHqYz4iwiB51mxSW5cMRC1MhcsU2jqpzu4txd8rXVyKbyCyGsRAbiCjaz1",
  "key30": "5YoNPXfFkBZhqdCwyR6pfkG5EgHx9cB8Pvnebxgszm5mzybbqmbfRynmSRT21BXNTSPRpoFEj8e6JT6vGeyZCFT3",
  "key31": "2hPwEWZW9kXMeuMx51zYXhZNgRHSrMF7VY614ioZhpbXgkzqJszn7fkhKxPKt4CquNo4LEzRkGDcEJbmQUmbUc3G"
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
