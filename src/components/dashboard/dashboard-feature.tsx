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
    "uL414ZGiwfaiwKY8Vet4Ubwo6BdACfMTJYL25Ch8XEAxkkArtt2cMzd16vm1DGXYey3vCVpdFFd9dgqs6dpxuiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQFJXHpcsjFD7Eg6eeyfvo3oRxQEycfbB86Zv6S5ox7z4sLgwxKAvuxdg1qEJxkMvLnnMWwWQEkRuXQpByEUZV6",
  "key1": "GGy3Xpe39qwzRbQWWyXQv4Cy5aKDz9NrgBYkYoiehsC85M6k4KHqba1sUafrm1NkDKVRTzNP9vNUCjRuGpSNSPF",
  "key2": "3tjSxd6Bn5JQxH5SJk8Grt3ryma4f1n332r2ZpCLcqSLQRuwRqaYRn77jYzCAatWYJxLP5a3CKN2kL1rsaNXrpiG",
  "key3": "59EskfEnfKDAdfJLDgcQ38joR1SzCXazojwwfsnZocyKtMFSMuGkNTWZoVKRBy2FUz4GBDdRfgFQT5FSd6CkPgje",
  "key4": "2yC9xPxprRyjyjXJcEcaDn8ZD8kwz4kDPkQBu9DaHi6Qcd3t9YwmoA8dBj3Dd76NS5bM9pZsrBkQcMVTrgWqDk5d",
  "key5": "125LUvnsRv4svh7jzNkLCZGGMiu7NmPFhrnwXPq7eBsS2qZ8N6XXB94KrVEn55B8Nv7sNjh1LtXf2EZKj9PUwnwx",
  "key6": "39eD3b14rnniZtYjaURBhuSCimTG5i5VDpGsJrqKKMcAibxh1wHuz1XTZrUjetwo52cDps7KJ12fRimgfz7MwjQD",
  "key7": "5u8xoYfgH1hU6JsA61D58YYaynj5fvqwTkjPUmxgLQhQ7kcqCwGc1oPBvxezW3srQ4osqEyj5so6E1LuMUrb2y55",
  "key8": "khGv3KLjNEz3gYHBvXBFdZ6osEWwTG7kGX2Pdp2pdwd4rKrfzJfJvQhYaphPa4Kj7Hvvj2g1rJoGLrVt3hZgbM7",
  "key9": "5YjrPSt6idcc7TSU2KigWPqsUi7L24Cu9AaLMSaVBQUbXuUjyrFQpLGDrmJbNubG67ML3ZnADcnTusBbTmRPyK7i",
  "key10": "2oh4hBtjMhQX64Z5ouvxgpsvUb8Cr5Y575TLohv6JzVvVSWw5ff5iPWhaS9yH2iQLsEFfrwU68JXmpkGVZWCezJJ",
  "key11": "4u5y5JL3riJJkKjVBhHZHbz5BjVRSPWtpXUtgkk7PTZJJ5TjWve9pF8eiq8813Wnkxri3YWWFKsHRhJUNK9NTPcE",
  "key12": "zDXFyvbjKSc154oWzug2c9r7RGfFHETmmcPNTC19rXVCiRpuHV3uiv2cHpGfCwVyhbdF4KnydmVU34gpdA5yHki",
  "key13": "icDEyWRuDcsin7fpPcvpSHBSRkMMP3ZjfSAnDup4kwJmEJSaqRCFKDM7uPnnBtX8BCP4CgUhgnszcnJoHqdnLS2",
  "key14": "5P5qnnYyXJwoLqzUAdhKLvurEYo7SYsvnEwmCMUL9wRaMr7ikajsD4y8rcmiRuRLb8MTZvwLngW75L5befWUnEcP",
  "key15": "3VaEk21PPweRhRuFpCDC9cmHGTTBSF36FyCXtgTC4fy2m7xS6QeoQMpxqDqLFsGthhg5cd7B2VZegvFNRd4nK1df",
  "key16": "613dJXw3tfSgsJhM9yijKVmmEMroUPYk1GWBdKijHGtiREpkR8qhgCGxjLaPTq9aatQV5dVdDiUUJgPMB4Ycvj8h",
  "key17": "5BNDq6dXubk6xLbyMPGeWEzzWUUBiVz8gjZYnDCYNiEqs6F3PDUrdcMXyUtgj2buYfhasRvRLpURNAQyjd63RE5a",
  "key18": "4of98CAME3mDVvsuc4NLpE9cn5vgpNnsYco2RL1z4Gs5KLoybN9JsZYrb4jVReADBriJZiYyrjetUrXnngExoTm6",
  "key19": "5TWDpvmaMzncnzEUACoxwRCYdaF8DN3NGhgPiFLLGic8EpWUyrnivrJ2hXhgNoq58WtgPr2frhYZia5hvybziP3d",
  "key20": "5baUDuHf8L3QHoCGKd5iy99FcKfotCa7zMLwucHueSuBrjLDj3gDrHuHYpggfYXo3a9yvMzoN3uypCtagiQbd2gE",
  "key21": "2ZXNSfS8nmT1izWsDbuR9JFPWadu8T2RcyLdcnUxaJEXPYZGXbD8awPFsNL7UZ7p84pdeCDi9KnCAbPaQiTQBNA4",
  "key22": "4ghUyPCXCN2qAidWfzeRNcAd9V79ue3ZkHUaRCVinbt27tDRNvE5ARWXcL8meTdzu8dWzbF9QpKawX3p1GqTH28D",
  "key23": "3nohAy7d5uhwgcWxZr4sQpgggnN8ZTVMEEsYqJCRkKZVAhHhksbKRFfgK7PXQen3gRCg98uSAq6yvotZYciwRgsd",
  "key24": "5xJ34818qCWizEuwFV7mDjtSXZ4KX3jnvyzHHQC4LF7dZXN9YVVdx7QshMGbyjQbykbag5sU6EhFFujQozKj3hC7",
  "key25": "amh9sqi23jwD61XGYvaF7hu5XdQxcseS6hAeFX5eTVjJnjhcem8D88fF4X2y3BbdtMY9Jfu2S5kjjzw7uuva2ck",
  "key26": "2Shrr3GVwaGbz5xzVvnSGsi8URRRauRGoeSBdMS9zyAAjkgBiQcGc8JfjCug8hJxG8HTq3vtCYomfCZGxLagtfZA",
  "key27": "3pxESBuCooiCQPhGsp1K9q9iiexZNJqKVvfVdYZkCMBP6zaqhfS4HRoRs5nwLnyyCh2vMKeYMCUEPjq8P2WNQ8w",
  "key28": "2eC9fpjnukTCaghhhUghugVWxnbQfRFxgEp3B7Cs1h4NJY1FTya4nWirR36Tj3M5j6c6AY5jkVTgjk6d4xQK8XoG",
  "key29": "2LeDAP3qFwx61GZv7CWq3Au9KxwJcznSr5mEHZ9wWxMqdMoLcRrvg5124m4NppQ5U1RqknP3aToxeWCWu79Q1vs"
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
