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
    "49osqTEFSHHSeoQMK8z8QDXZYAVHJNqmq3Y7Beq1AD7MrSs8hTZdA9fSfmywgfv8zAzG2D3LgDqByyUxega4LKju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PtDZhu4tKnxvV2eg2iY1K1LZ8Mq2fQ5WJkzNT538SSNh31Ss84zBRu2wvZKTk7bW9AeeP9HzphiPfj5oG78kXP9",
  "key1": "2rJBBkpf5mUnCYwRrE9bdo92Vx9tMHeh727yxmq92zrHcpGCRhKajf58jWsH55Dz4wFnCJCkyQG3FFBqjFNeCwib",
  "key2": "XvvyiSdLg23KQMa6hQK6sgNNuuESkASDU9uV7PWKsNz1nGPta9J75U9tf92bFBGmbYPTG93UJ3eqX2NXH5J3vhu",
  "key3": "61jh8oGWn89UXgweRUjgnmhuXPNxa465J68MSjXjSrzTFHQTN4Bcm258cKh79AHhK2KTnj37E1XmxSxkJq8NrxG8",
  "key4": "2TyF64DoDMGnJW8F2zedwcta7v5Rea8a586dfLXBB6q7xG1TrVAxpmSM7ZKkpdhCUhY3Xr3VPPfKWJ8iUTH5hvog",
  "key5": "4kHgUPF9x6cDvSMutpd9DHJuPBzHtZhFPRHknn5fVr4e5sEaFTYGpRqTLFAEfSh79N21yxyP8ajCBmxFCehBuicn",
  "key6": "5K2RFU4GY37D8onfziceETiNywEZRVx9oxXjZxfNU2CYVrLka2Bqw61afc5WeRYbiuBGotAMiP1VGw1onZkzweVK",
  "key7": "2shbaDPMHJ216VNYP1EmnF4BYdy1PxsMu3CzHQhVY1ZPyq3g45sR6pHNUjAGkMrfpHPfNevUGyS6jTJaYuFYfdV7",
  "key8": "5UJDrJBsSYJWrXb9SdzX2indKoUy3boPXb7DJYK8dUSoQknVqxQKR1fiwG7DAREuWPWcDjUnuW9kRUhh8cUSfQ9Y",
  "key9": "4ASLfq8apL7VG8gy4tPaDYoJvwDq8XjvJMDsU63MEiKZ6K2v8s1wdbdVN2zMEN76unFfmnWLzXYKptdrn4BMxGMN",
  "key10": "jy5i2EeGFZJ5wVvVTYXybvNJ46aMRDvUpJHXMg6tWvMkcPvSTJg46c8Xj1SZgn6DfXhwvuKCYrKyqrtvQGADZiU",
  "key11": "2mq325gqG4mDfp9B74vQbeYUscDSWKepWcCfjnReUFKFGDommQwkF2azcgg1NU6WAhKyxaGJZ3NyL52RaDT1wZiP",
  "key12": "a6ZP2B8zsmjUmga6REh2FwjPN6aTA4RQj9PnvqsFzUotGJu5Qb8xr4BuXUnfpok2yRF39zfGM95FjDpse96EroU",
  "key13": "2LSgHB2RYoxVZ5Nyb7SbmTTRGykNjyz1EYz7JpqYHD76EXfJjqNBP7SKjTFgosSHG9kKqrK6me2ymL3P9Nafhg5A",
  "key14": "4wNZEv7Gxjki3aAw2J2pPfrweD5aMkHebJ7C6D1ey32kbUgXYSJAeMpRTDP78yUXUj9VCAjDzUdcK3N5Dp4AEMtA",
  "key15": "2ZkNoTrkbP3M5rXodBrhoPQFSA8qW8GD5xE6WHYR9REszVKyfhmoCYvdp4Q9eaBVPsmopaKR1RSuTiZaaEHXv2YC",
  "key16": "5UmTNsZkewnyb6VCa2G2ms1NfowqvLX5HLbUtenracmDx2cxbziQYDZaTATQDaQ4n3sxQm6pQYF7CeZTFKgHiWXb",
  "key17": "3hgjFCm4fhWP2ebFrRvUmxik4z4q97TWnQ7uATtUfCruarD3nwdvfUzNj7ohwJAiS4xndz3xBCEQqri1ffP5GgoL",
  "key18": "5AhK7nz26HGjEyLJF812GgvcUmDF2zncVzEX5HyBEzK1XgdhbtRP4APL8DoK9ApWYBpr98fwCr8easXgdofGRFV9",
  "key19": "5CtWxWhvTHf35TTpygME8SJ5wtUwgHTDy3wZFTH5oiXWJQcnKMNFAt4tqkRKfTfpSeZfJ1LSFvk6kW4RBvXXNzs5",
  "key20": "2qf8UpX2AnsLp4REawqSM58mQArSR3fBEfBwykgd8zgVcv49YoEezhQYCBwkcCvss9VySpSTbqmbBxnUQ5B3UDKg",
  "key21": "2k1VbQsdodMswA5LRrv6hWiL9FDWB6CtvwnfZjEZ4NvPuMECW5xptn38w8M89gdRgHXjjjjZbMu1Mh89EVd7zDvc",
  "key22": "3hyb61kd9dXtzNS5NPy4sVnnwxdca3PV1GJrjkxQyCwwcdudeCwZQUDhmdi2ezAssBdqiYddNtPb4P5uWV9gpZAv",
  "key23": "hBTEtwdHz8aHjU1ykmovFg6yWSkMn4tK7BDRffq5etf5fNpDxVeJ881frhv6QBqm9FKrQ5yf5C8yovqS5WdM92u",
  "key24": "JRTCANDNmi5JRdBDJsAsgjHC3SUCwVxcyxu7E8LHjbhrCVprjYqya1UmGEWsVPSRyZQFp8hrUjkdyKFAwTLfpUq",
  "key25": "39dnruRHF6q86aXxCJoEewDLGnnnj2Km1fwMh9q1A1cL8B2Pv8M6n4Tdf9XNHKvaiv4Sj7H3hgghyZHdAWsR9vR5",
  "key26": "2k3rtxLtmhf7X37jygqngQjHSyT3EySatyMe82xG5STbk33CFyFsoZBtR7gLwQ62nxcSG5aYMKRrc4iStWgZGiAa",
  "key27": "RH8dL5FkUwrP4tM295UnGGnikfxGwvkKy9KiLyYdqTsShEDEncZgaYP3wJr98vCoTLnqQeYAnNkMLZYC817fzFA",
  "key28": "4sBTzW2Boe6qefPHBW2aJtZvM7cCJ8wkjcTGSHdHF4HYrQMEqzhZQCAG6kmVfuS4e9WZHvKDqP8goFT2Fq4MFtLU",
  "key29": "5pZHzRGtDd8u44bcRnAYySDeZdzVLdLQErqGPQ2H5YHYqYSsm3Yz3FJViopyD3NJNcuz8zxK9xqDo69t6ruo8mNV",
  "key30": "4uwnjQfbEEhtmgPnteKKgnasMKLm4En5LbYwhfawkNbma1TfKYMe2HeafimENY5VhZnNaWD8VSQgDpbZckfrCwVU",
  "key31": "4bxv5ywPTsgoNS7jDgMAwGhW4FWSRXd1e9VcTC1aYHALes4ipA61uFPizg3oENBsGRwJGN3M1p6GkjgQyvQzE7Re",
  "key32": "3cNewS6DmbM8Bux5Hi41NpZ9iuqrW3ZW6demEocMoA125yB2WsU9umvb7z7PRMC54eq9pwafXBEm49N9yATPjggA",
  "key33": "2VK1y5DMVHLjHFWNRGDWUq1mw5dkZG7BUUDDTjevTDipzoaZFRaVQZxdNJx64MHxEbBdfuNj8y1q2KwmgzTocs5F",
  "key34": "246VyW7KQ5ZrvkxnNuDAbAX2CHRwvRHgUMKexia7HtcADGEMPkjmDojd9PhS6Zh33mjdB4YCAhEoJgSiMekmVNNF",
  "key35": "oS4WJ4RXv21M5WX7RVnWLubwk4tTKpj3aZ1Bn8vRVMiZdSR8XPZ4PHMCrzYbYYwKFaoQ7mnFLdx7NqYrFFESzNN",
  "key36": "DzryNvLBXAykbA3eTWdiz7aRmuDcXmxQqJYmAGMtpCZhmar1tV2zKboQRLZgRXSr5KRbZefWe9EzR1PhVcDjuz1",
  "key37": "5w67o8yKJfkrGZiu3cwfXZtUyt2UcER3WeoxsfhivSZ9M3odqi1ue84FTPWZB7JHmvsQYeyyS8ihF9xGfABamRgV",
  "key38": "5TEy4hA7u7EZpLQKf6qHaWVQPjGvSdRiCWSLFeQ9GJ558aaDPagXYWsTdFkHmcHwiYNQ5nYUt1U75PGiMGeBXd1k",
  "key39": "4T9Dq96eUMqJLyXgsMZ69yBNAtiyUvo9gCeLGyfkckTvBPT3CnvDXxiib8EpKeSJBKa8BUafdTi8PjgZrGEEajay"
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
