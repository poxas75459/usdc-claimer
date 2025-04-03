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
    "5TYqkfajm9PXxR2rdbd4g4nijcdCeuWv94KKTsERokKeJM4d3WC962kxHvm8nMXGKThYvgPtuV9iPMTTeFDBBWnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67e47Qj2PsG8316wF7km36zTeXACwD2A8BE3ZH4MqSb4QrsEt6siGrkZd24HjvF3K3j63W98dN3hFGKD9kG6Km5s",
  "key1": "2tkr5bxxioqKzbSoG5fTEHsXNhKbXXvEbGdpao3Xuvzpgw1Hvd7QJTdUdm8vUeesH8Tt7ZM46YJBGj31Vf1SjrZG",
  "key2": "5gjaW1oyTCeZssRxhTAt1Cg3Ki6UbQfCJp8MPCR4XcJSswLLbT5WcsXo24vjav1b1MVP8f4ySFwZpJtk34iexoKG",
  "key3": "3KKuPHT5Awnz8uskSKpSidMwTdU6vyC7vnbysSsK5WkUkna4qnPUMh1G4moKg4hyAe5KuHxZwd1wkW3gFdRtkFFz",
  "key4": "4CxxATJgmf6dJntgr9XJtbQAzYjSnLP4A1QFAWAgzcpAaVyDKZyRDuqH2DmdXkLb2oHheoY2m6RQuN8jUH91dP1a",
  "key5": "38qt4R3yJobGbUMAv3SoSeZgigmz75z4hfryE88Yf8AZfvLG3KP6QztwUbHbw4cwQ2krNoMEiE8eNFbafqZKzCZT",
  "key6": "5CUJtTsYxm4Vo9LEpy6uz7EUbEjnGUSZijwmafZB3u8imNXoAWMSMxEZMALVwpN3ByEubyL17cAd4xRebijfqhLt",
  "key7": "3nEP5NwRBSWvJjjRQDNKwRkNvDWv7Ps9qxZ4z5e7FSPGDK2esVEJ1wWcjLCiHAGG7LRAktpLfYeJ4EZGj18GUMxH",
  "key8": "5YFUYs7m9gWKNzLJmoqu459n1WMrCKrg6m816bXmGbkvWG4BrzRtD9CK9gYMx2W8HcQwDVFUKhLZt9Z2E31oM18W",
  "key9": "v6aC5UrYWHjbKRojLgmCqr8DcYkzZrNsAAc9ZBHRGMezUJencKqPBzLcDjcar9fHLsf7c9AmNcZT8Cv9kGypx4x",
  "key10": "4EcRkiDbrJqtatHhxKie3GTYaxN1xpRXubtKFCycuQT5BfQEfAZZMSsoWvZaqtqZdiM7nCiTF7PaSCXbjzjtntDZ",
  "key11": "3xzzxntthfVwAJw5JPQevWDsh9zY1BUcunvvs9cm4kWmNKPabgYvUt1ggqWdeadZy6ZBZK8xGZ2NHDvaySxUVs1S",
  "key12": "5zSYHUXxzJ5BX5yDLGJ6M2LrC7D5VLcj8eHoVnreJRm5VBMT5imq81qnCVPvA52ezFt34u6fxRdwZjt6tPFekwg4",
  "key13": "4SwckwB8uZeErUSwj5e1hD5uXXE8qh3WxXCBjAkHopjvUGNrNcNQz2pex6nmPTV7giRjiw5LyU2KoU7VPr4P6sUc",
  "key14": "655wYmw49HxAz97deGrZdFcYqNbG2Wi5hBubXNmyGLAtFtUdf6Znkq5wUTYjWrBqRVutq41Wq5gdmzD7qA2WferZ",
  "key15": "3358HbZh8yvvv5kTqtA5WYq1PSvyy9Wyuyif5xYPqJnQuRLPfC1GZR7tZVW2dox7cFCCQwhCmri727HP2qJzcDoK",
  "key16": "3pkCicwTBuu2xmDYbyYxpJkm4A9LTg6J3SYK1yAsefuaAjpYeMR6W5XVYgPN7t6uEenGhg7ASrhihgr7CdYoMVfz",
  "key17": "5dLuJTdTLS58VE6eZE1vZ41z9sxEHZps2XK9fzjztEho5SwMwSwG551UWPUsTGhgoi8tyCCBNvnBtFWBfRTNY5wD",
  "key18": "4yWTAkJuwvNBWLEv3ABvLUM4hTfNdfqobBjvNyU3WNUNBHZaELLpnVSoSZ9oP7MM729tamPUqdGoajxJDTHB1w6g",
  "key19": "4A5gZMx1Ya16GzAqQ8cxy5jh1E2HUQtkrN9YU1TvjJ9oSqQqVh613LGMQ1rmaS8RYGVWCFmq6hSNPmzEMUu3SLjo",
  "key20": "3C3cvfMSt2JWHcq9qks5P93Hg9rcjvfYj5wLAuuSCAfWSxrCALrYQNZotTpbkvUDaLeuJvZXoqQCdvZzJWufRBR9",
  "key21": "4ijfMfJFmX2Sr6KvWdp65xtG4ZUBNSLKnX8yFnvHYpS4hMjSETV3CM1Ejn1rSVyqYswEe2KeeGwnE1dEir71YtZ6",
  "key22": "4fGmhiJ7rFEgc4xeWpzDD9EZQWxxUmmV8rwcKRQ1ak8MiCoNYokPuEFAyqTgzuS2Er7cvsUjagMz5C5vgYUmP8WH",
  "key23": "5xV7dPrKmKc7ccsci23PWWykyZkk7f91bTJV3fjrcTR7PYtPYZkKBa42fpzELEUFiaVNtkCoRVyPJMfDUT4t8MrQ",
  "key24": "2TzGbNQsMAtxdn8nCP9bgqedxkuVBRzNYB3w92NEcaReuyrRaay8H9tTAb1JGzDYPyskDSwrcBuPewyFHMCMJjde",
  "key25": "csDfsQrb5ieYp155xdCCkjCQXPuCiRi5fMjAH2nYf5Jed7C1eSzFXt3CtkAbtyxQtCDUeWDx7mHD2wxBuK4GDz6",
  "key26": "3QXYoFH3yFSTUDNsbYg2zc4tR7dM4a4E1UJutaNnnYqaxffgu6KapgjUtJ7w25TQb5iUWneebuaq3sALDmbmBkpZ",
  "key27": "Mm3BdcqNdtm3Vz1kdCUWeoyxkrr74hGoyjrzNx9z3dPnSSf6hNhTGm2XAWtnweYm7u9R1q6LpbME7CVQ3R9WLNJ",
  "key28": "2An75mdxWDJMndu8VT3ngrwkHuvTVyNrEkLyo1h1vAE1MCs5ixQEDKfLQcb5JkF9PcWijHKgGda6zNaq8mP4ERcS",
  "key29": "485X6smyygWzJ94yFnFVeSB4ck6vcgETdjgiPWKYbG6M3sb2F3RKeoJWNZk6D3EghNUijP7hqizu3im7nULdzTbQ",
  "key30": "2RPiBrKzHfPgPUsbmHnRjATHA7GHJ2CywWWyoYVAsDceREUFuHSYXMDyqah7bznqjkLyckumE73NmqDsojQGV1Du",
  "key31": "3r7YD4f35zhh4B1aD8TTUEgTDtyNnTqGLRTFK2kYR1vs4XL6JmYV6dERYLqD2nto4YfikYuRPSgDwDBCQ4cSQHCk",
  "key32": "2n2cecK9B2XgKsuiPhRCmBH8UJE3EVyVy2LQPXYskyf9gBSmKHEbia73JqmCw2Y9s7bGzqrXFEANvH6FKb3w1MqE",
  "key33": "5zrtrJ8cK9fRFJ9ZRn6VC7nmB9SF1cM4fPiwRJefjYtfui8vss9RpH4AeAGsAM811bpW7SqTQF32vju2NKpCbaRu",
  "key34": "to8Zr7HAxFpfTMEg1GTY6RMmUvp8U4pkpLjGizUSXpF3bhPT3BrUgo17qN4EzML2vyR4Ko66duxzQdWjLU5hdm7",
  "key35": "5kdzfnjtc5K3Cq3npVcNULU46cnzRHhTSfnKBMt2atu3N1HzvRKhU9x1FKoeUsqqoo4tVWohQW49HCKzC3x2fUts",
  "key36": "3ZG7SEE11UNMGEKgybP2EWgCBeN9BKppwNDYzp32T9dQKz89DsbJ5BzuJw3u88CGP3V3ynWj7JpKYG2sdBNDpVZt",
  "key37": "2bcwALM3vKKJi5V8ETataNyBzAwgzUoiwZTco9NAegVoZXvTbwqWdT9VrtbvhPBdtF3ZAHyb5kFeAmvfXLeoPyKs",
  "key38": "4vtpw1vCiyyiCAsZoEpfTHt9HYV4rT8BMZz3U9deu7QU8iCM9AJxS69MyuHGfZww3uobV3dDQeyYPEh7QSrEr5TJ",
  "key39": "hKwrSD782KoXsCwkXHPpcY6ThTakfQZrFVUKWuFnAMgZHNMq47nG4tPyw4g7d9WrYCFiEr9Yu5vDM6Qbowh6arR",
  "key40": "4BMWWn791o3bagEJ4hYJdsANfVp7LfdkEHyeFaAJq9d3VKjTcZebap4wL4cGo1Pa4pWUQjb6nFyrq1PpzwW4ZySj"
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
